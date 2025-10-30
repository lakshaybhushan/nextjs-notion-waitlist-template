import { render } from "@react-email/render";

import WelcomeTemplate from "../../../emails";

import * as postmark from "postmark";
import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const postmarkClient = new postmark.ServerClient(
  process.env.POSTMARK_API_KEY || "",
);

// Support both Railway Redis and Upstash Redis (optional - for rate limiting)
let ratelimit: Ratelimit | null = null;

if (process.env.REDIS_URL) {
  // Railway Redis (regular Redis URL)
  console.log("✅ Railway Redis detected - Rate limiting ENABLED (2 req/min)");
  const redis = Redis.fromEnv();
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(2, "1 m"),
  });
} else if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN
) {
  // Upstash Redis (REST API)
  console.log("✅ Upstash Redis detected - Rate limiting ENABLED (2 req/min)");
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(2, "1 m"),
  });
} else {
  console.warn(
    "⚠️  Redis NOT configured - Rate limiting DISABLED",
  );
  console.warn(
    "   → For production: Add REDIS_URL (Railway) or UPSTASH_REDIS_REST_URL",
  );
}
// If neither is configured, ratelimit will be null and rate limiting will be skipped

export async function POST(request: NextRequest, response: NextResponse) {
  const ip = request.ip ?? "127.0.0.1";

  // Rate limiting (optional - only if Redis is configured)
  if (ratelimit) {
    const result = await ratelimit.limit(ip);

    if (!result.success) {
      return Response.json(
        {
          error: "Too many requests!!",
        },
        {
          status: 429,
        },
      );
    }
  } else {
    console.warn(
      "⚠️ Redis not configured - rate limiting is disabled. Configure REDIS_URL or UPSTASH_REDIS_REST_URL to enable.",
    );
  }

  const { email, firstname } = await request.json();

  try {
    const htmlContent = await render(
      WelcomeTemplate({ userFirstname: firstname }),
    );

    const response = await postmarkClient.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL || "noreply@kontentino.com",
      To: email,
      Subject: "Welcome to Kontentino Waitlist!",
      HtmlBody: htmlContent,
      ReplyTo: process.env.POSTMARK_REPLY_TO || "support@kontentino.com",
      MessageStream: "outbound",
    });

    if (response.ErrorCode) {
      console.error("Postmark error:", response.Message);
      return NextResponse.json(
        { message: "Failed to send email", error: response.Message },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Email sent successfully",
      messageId: response.MessageID,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: String(error) },
      { status: 500 },
    );
  }
}
