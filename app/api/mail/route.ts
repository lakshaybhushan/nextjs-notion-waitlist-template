import { render } from "@react-email/render";

import WelcomeTemplate from "../../../emails";

import * as postmark from "postmark";
import { NextRequest, NextResponse } from "next/server";
import Redis from "ioredis";

const postmarkClient = new postmark.ServerClient(
  process.env.POSTMARK_API_KEY || "",
);

// Railway Redis setup for rate limiting
let redis: Redis | null = null;

if (process.env.REDIS_URL) {
  redis = new Redis(process.env.REDIS_URL);
  console.log("✅ Railway Redis connected - Rate limiting ENABLED (2 req/min)");
} else {
  console.warn("⚠️  Redis NOT configured - Rate limiting DISABLED");
}

// Log startup configuration
console.log("\n📋 Kontentino Waitlist API Configuration:");
console.log(`   Postmark: ${process.env.POSTMARK_API_KEY ? "✅ Configured" : "❌ Missing"}`);
console.log(`   Postmark From: ${process.env.POSTMARK_FROM_EMAIL || "❌ Not set"}`);
console.log(`   Rate Limit: ${redis ? "✅ ENABLED (2 requests/minute per IP)" : "⚠️  DISABLED"}\n`);

// Simple rate limiting function
async function checkRateLimit(ip: string): Promise<boolean> {
  if (!redis) return true; // Allow if no Redis

  const key = `ratelimit:${ip}`;
  const count = await redis.incr(key);

  if (count === 1) {
    // First request, set expiry to 60 seconds
    await redis.expire(key, 60);
  }

  // Allow max 2 requests per minute
  return count <= 2;
}

export async function POST(request: NextRequest) {
  // Get real client IP from headers (for Railway/Vercel/proxies)
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0] ?? realIp ?? request.ip ?? "unknown";

  // Rate limiting check (skip for localhost/unknown to prevent blocking everyone)
  if (redis && ip !== "127.0.0.1" && ip !== "unknown") {
    console.log(`🔒 Checking rate limit for IP: ${ip}`);
    const allowed = await checkRateLimit(ip);

    if (!allowed) {
      console.warn(`❌ Rate limit exceeded for IP: ${ip} - Request blocked`);
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }
    console.log(`✅ Rate limit OK for IP: ${ip}`);
  } else if (redis) {
    console.warn(`⚠️  Skipping rate limit for IP: ${ip} (localhost/unknown)`);
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
