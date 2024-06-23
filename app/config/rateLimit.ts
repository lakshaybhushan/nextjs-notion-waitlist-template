import { Ratelimit } from "@upstash/ratelimit"
import redis from "./redisDB"

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(3, "1 m"),
})

export default ratelimit
