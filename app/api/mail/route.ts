import { render } from "@react-email/render"

import WelcomeTemplate from "../../../emails"

import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"

const resend = new Resend(process.env.RESEND_API_KEY)

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(3, "1 m"),
})

export async function POST(request: NextRequest, response: NextResponse) {
  const ip = request.ip ?? "127.0.0.1"

  const result = await ratelimit.limit(ip)

  if (!result.success) {
    return Response.json(
      {
        error: "Too many requests!!",
      },
      {
        status: 429,
      }
    )
  }

  const { email, firstname } = await request.json()

  const { data, error } = await resend.emails.send({
    from: "morph2json <join@morph2json.app>",
    to: [email],
    subject: "Thankyou for waitlisting morph2json!",
    reply_to: "lakshb.work@gmail.com",
    html: render(WelcomeTemplate({ userFirstname: firstname })),
  })

  if (error) {
    return NextResponse.json(error)
  }

  if (!data) {
    return NextResponse.json({ message: "Failed to send email" })
  }

  return NextResponse.json({ message: "Email sent successfully" })
}
