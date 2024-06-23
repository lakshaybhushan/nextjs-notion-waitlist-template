import { NextRequest, NextResponse } from "next/server"
import ratelimit from "./app/config/rateLimit"

export async function middleware(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1"
  const result = await ratelimit.limit(ip)

  if (!result.success) {
    return NextResponse.json(
      {
        error: "Too many requests!!",
      },
      {
        status: 429,
      }
    )
  }

  return NextResponse.next()
}
