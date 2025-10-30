# Redis Setup Guide - Rate Limiting

## Why Redis?

Redis is used for **rate limiting** to prevent spam and abuse. Without it:
- Anyone could submit unlimited emails
- Bots could flood your Notion database
- You'd waste Postmark email quota (costs money)

With rate limiting: **2 signups per minute per IP address**

## Option 1: Railway Redis (Recommended for Production)

### Advantages
✅ **Integrated**: Everything in one Railway project
✅ **Automatic setup**: Environment variables set automatically
✅ **Free tier**: Included in Railway plans
✅ **Low latency**: Same infrastructure as your app
✅ **No external accounts**: One less service to manage

### Setup Steps

1. **Create Railway project** with your Next.js app (if not already done)

2. **Add Redis to your project**:
   - Click **"+ New"** in Railway dashboard
   - Select **"Database"** → **"Add Redis"**
   - Railway creates Redis instance automatically

3. **Environment variable is auto-set**:
   - Railway sets `REDIS_URL` automatically
   - Format: `redis://default:password@redis.railway.internal:6379`
   - Your app will detect and use this automatically

4. **Done!** No configuration needed in your app

### Pricing
- **Starter Plan**: $5/month (includes Redis + Next.js app)
- **Pro Plan**: $20/month credit
- Redis usage typically: < $1/month for waitlist

### Limitations
- Railway Redis only available in Railway projects
- For local development, use Upstash (see Option 2)

## Option 2: Upstash Redis (Good for Local Dev)

### Advantages
✅ **Free tier**: 10,000 requests/day
✅ **REST API**: Works anywhere (no VPN needed)
✅ **Global edge**: Low latency worldwide
✅ **Perfect for dev**: Use locally during development

### Setup Steps

1. **Create Upstash account**:
   - Go to https://console.upstash.com
   - Sign up (email or GitHub)
   - Free tier: No credit card required

2. **Create Redis database**:
   - Click **"Create Database"**
   - Name: `kontentino-waitlist-dev`
   - Type: **Regional** (cheaper, fine for dev)
   - Region: Choose closest to you
   - Click **"Create"**

3. **Get credentials**:
   - Click on your database
   - Scroll to **"REST API"** section
   - Copy:
     - `UPSTASH_REDIS_REST_URL`
     - `UPSTASH_REDIS_REST_TOKEN`

4. **Add to `.env.local`**:
```bash
UPSTASH_REDIS_REST_URL=https://xxx-xx-xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=AXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxg=
```

5. **Done!** App will detect Upstash credentials

### Pricing
- **Free tier**: 10,000 commands/day (plenty for dev and small production)
- **Pay as you grow**: $0.2 per 100K commands after free tier
- Typical waitlist usage: Well within free tier

## How the App Chooses Redis

The code automatically detects which Redis to use:

```typescript
// app/api/mail/route.ts
const redis = process.env.REDIS_URL
  ? Redis.fromEnv()              // Railway Redis
  : new Redis({                   // Upstash Redis
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN
    });
```

**Priority**:
1. If `REDIS_URL` exists → Use Railway Redis
2. Otherwise → Use Upstash Redis

## Recommended Setup Strategy

### For Local Development
Use **Upstash Redis**:
- Quick setup (5 minutes)
- Free tier
- Works anywhere

`.env.local`:
```bash
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxx
```

### For Production (Railway)
Use **Railway Redis**:
- Add Redis service to Railway project
- No additional config needed
- `REDIS_URL` set automatically

## Testing Rate Limiting

### Test 1: Normal Usage
1. Go to your waitlist form
2. Submit an email
3. ✅ Should work fine

### Test 2: Rate Limiting
1. Submit an email
2. Immediately submit another email
3. Immediately submit a third email
4. ❌ Third attempt should be blocked with "Too many requests!!"
5. Wait 1 minute, try again
6. ✅ Should work again

### Test 3: Different IPs
Rate limiting is per IP address:
- Same IP: Limited to 2/minute
- Different IP: Gets their own 2/minute allowance

## Configuration

Current rate limit (in `app/api/mail/route.ts`):

```typescript
limiter: Ratelimit.slidingWindow(2, "1 m")
//                                ^    ^
//                         requests    window
```

**To adjust**:
- More permissive: `(5, "1 m")` = 5 requests per minute
- More strict: `(1, "5 m")` = 1 request per 5 minutes
- For production: `(3, "1 m")` is reasonable

## Monitoring

### Railway Redis
- Railway Dashboard → Redis service → Metrics
- See: Commands/sec, Memory usage, Connections

### Upstash Redis
- Upstash Console → Your database → Metrics
- See: Daily commands, Storage, Connections
- Alerts: Set up email alerts for quota limits

## Troubleshooting

### "Redis connection failed"
**Local dev**:
- Check `UPSTASH_REDIS_REST_URL` and token are set
- Verify credentials in Upstash console
- Check internet connection

**Railway**:
- Check Redis service is running (green status)
- Verify `REDIS_URL` is set in environment variables
- Check Railway logs for errors

### "Rate limit not working"
1. Check Redis is connected (no errors in logs)
2. Test with multiple quick submissions
3. Check IP detection: `console.log(request.ip)`
4. In localhost, IP might always be `127.0.0.1`

### "Too many requests" but you didn't spam
- Rate limit is per IP
- If on shared network/VPN, others might trigger it
- Clear Redis key manually:
  ```bash
  # Upstash Console → Data Browser → Delete key
  # Or wait 1 minute for sliding window to reset
  ```

### Development: Rate limiting annoying?
Temporarily increase limit during dev:

```typescript
// app/api/mail/route.ts
limiter: Ratelimit.slidingWindow(100, "1 m") // Very permissive for dev
```

**Don't forget to revert before production!**

## Alternative: Remove Rate Limiting

If you really don't want rate limiting:

1. Remove Redis setup
2. Remove rate limiting code:

```typescript
// Delete these lines in app/api/mail/route.ts
const redis = ...;
const ratelimit = ...;

// Delete this block
const result = await ratelimit.limit(ip);
if (!result.success) {
  return Response.json(...);
}
```

**⚠️ Warning**: Only do this if:
- You have other spam protection (CAPTCHA, etc.)
- It's a private/internal waitlist
- You're okay with potential abuse

## Best Practices

1. **Production**: Always use rate limiting
2. **Monitoring**: Set up alerts for unusual traffic
3. **Testing**: Test rate limiting works before launch
4. **Adjustment**: Start strict, loosen if needed
5. **Logging**: Log rate limit hits to detect abuse attempts

## Cost Comparison

| Service | Free Tier | Paid Plans | Best For |
|---------|-----------|------------|----------|
| **Railway Redis** | Part of $5 plan | $5-20/month | Production on Railway |
| **Upstash Redis** | 10K req/day | $0.2/100K req | Dev + small production |

## Need Help?

- **Railway Redis**: https://docs.railway.app/databases/redis
- **Upstash Redis**: https://docs.upstash.com/redis
- **@upstash/ratelimit**: https://github.com/upstash/ratelimit
- GitHub Issues: https://github.com/kontentino/kontentino-gpt-landing-waitlist/issues
