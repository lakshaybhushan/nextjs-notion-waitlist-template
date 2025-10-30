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
  console.warn("⚠️  Redis NOT configured - Rate limiting DISABLED");
  console.warn("   → For production: Add REDIS_URL (Railway) or UPSTASH_REDIS_REST_URL");
}

// Log startup configuration
console.log("\n📋 Kontentino Waitlist API Configuration:");
console.log(`   Postmark: ${process.env.POSTMARK_API_KEY ? "✅ Configured" : "❌ Missing"}`);
console.log(`   Postmark From: ${process.env.POSTMARK_FROM_EMAIL || "❌ Not set"}`);
console.log(`   Redis: ${ratelimit ? "✅ ENABLED" : "⚠️  DISABLED (optional)"}`);
console.log(`   Rate Limit: ${ratelimit ? "2 requests/minute per IP" : "None (not recommended for production)"}\n`);

export async function POST(request: NextRequest, response: NextResponse) {
  const ip = request.ip ?? "127.0.0.1";

  // Rate limiting (optional - only if Redis is configured)
  if (ratelimit) {
    console.log(`🔒 Checking rate limit for IP: ${ip}`);
    const result = await ratelimit.limit(ip);

    if (!result.success) {
      console.warn(`❌ Rate limit exceeded for IP: ${ip} - Request blocked`);
      return Response.json(
        {
          error: "Too many requests!!",
        },
        {
          status: 429,
        },
      );
    }
    console.log(
      `✅ Rate limit OK for IP: ${ip} (${result.remaining} requests remaining)`,
    );
  } else {
    console.log(`⚠️  Rate limiting skipped (Redis not configured) for IP: ${ip}`);
  }

  const { email, firstname } = await request.json();

  console.log(`📧 Processing signup request: ${email} (${firstname})`);

  try {
    const htmlContent = await render(
      WelcomeTemplate({ userFirstname: firstname }),
    );

    console.log(`📤 Sending email to: ${email}`);
    const response = await postmarkClient.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL || "noreply@kontentino.com",
      To: email,
      Subject: "Welcome to Kontentino Waitlist!",
      HtmlBody: htmlContent,
      ReplyTo: process.env.POSTMARK_REPLY_TO || "support@kontentino.com",
      MessageStream: "outbound",
    });

    if (response.ErrorCode) {
      console.error(`❌ Postmark error for ${email}:`, response.Message);
      return NextResponse.json(
        { message: "Failed to send email", error: response.Message },
        { status: 500 },
      );
    }

    console.log(
      `✅ Email sent successfully to ${email} (MessageID: ${response.MessageID})`,
    );
    return NextResponse.json({
      message: "Email sent successfully",
      messageId: response.MessageID,
    });
  } catch (error) {
    console.error(`❌ Email sending error for ${email}:`, error);
    return NextResponse.json(
      { message: "Failed to send email", error: String(error) },
      { status: 500 },
    );
  }
}
