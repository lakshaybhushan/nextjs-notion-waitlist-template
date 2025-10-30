# Logs Guide - Railway Monitoring

## Startup Logs

When your app starts on Railway, you'll see:

### ✅ With Redis (Production Setup)

```
✅ Railway Redis detected - Rate limiting ENABLED (2 req/min)

📋 Kontentino Waitlist API Configuration:
   Postmark: ✅ Configured
   Postmark From: noreply@kontentino.com
   Redis: ✅ ENABLED
   Rate Limit: 2 requests/minute per IP
```

### ⚠️ Without Redis (Development/Testing)

```
⚠️  Redis NOT configured - Rate limiting DISABLED
   → For production: Add REDIS_URL (Railway) or UPSTASH_REDIS_REST_URL

📋 Kontentino Waitlist API Configuration:
   Postmark: ✅ Configured
   Postmark From: noreply@kontentino.com
   Redis: ⚠️  DISABLED (optional)
   Rate Limit: None (not recommended for production)
```

## Request Logs

### Normal Signup (With Redis)

```
🔒 Checking rate limit for IP: 192.168.1.100
✅ Rate limit OK for IP: 192.168.1.100 (1 requests remaining)
📧 Processing signup request: john@example.com (John)
📤 Sending email to: john@example.com
✅ Email sent successfully to john@example.com (MessageID: abc123-def456)
```

### Normal Signup (Without Redis)

```
⚠️  Rate limiting skipped (Redis not configured) for IP: 192.168.1.100
📧 Processing signup request: john@example.com (John)
📤 Sending email to: john@example.com
✅ Email sent successfully to john@example.com (MessageID: abc123-def456)
```

### Rate Limited Request

```
🔒 Checking rate limit for IP: 192.168.1.100
❌ Rate limit exceeded for IP: 192.168.1.100 - Request blocked
```

### Email Sending Error

```
📧 Processing signup request: invalid@example.com (Jane)
📤 Sending email to: invalid@example.com
❌ Postmark error for invalid@example.com: Sender signature not verified
```

## How to View Logs in Railway

### Method 1: Railway Dashboard
1. Go to https://railway.app/dashboard
2. Select your project
3. Click on the service (Next.js app)
4. Click **"Deployments"** tab
5. Click on latest deployment
6. See **"View Logs"** - live logs appear here

### Method 2: Railway CLI
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Link to project
railway link

# View logs (live stream)
railway logs

# View logs for specific service
railway logs --service=your-service-name
```

## Understanding Log Icons

| Icon | Meaning |
|------|---------|
| ✅ | Success / Enabled / Configured |
| ❌ | Error / Failed / Missing |
| ⚠️ | Warning / Disabled / Optional |
| 🔒 | Rate limiting check |
| 📧 | Processing signup |
| 📤 | Sending email |
| 📋 | Configuration summary |

## Common Log Patterns

### ✅ Everything Working (Production)
```
✅ Railway Redis detected - Rate limiting ENABLED
📋 Configuration: All systems OK
🔒 Checking rate limit
✅ Rate limit OK
📧 Processing signup
📤 Sending email
✅ Email sent successfully
```

### ⚠️ Working Without Redis (Testing)
```
⚠️ Redis NOT configured
📋 Configuration: Postmark OK, Redis disabled
⚠️ Rate limiting skipped
📧 Processing signup
📤 Sending email
✅ Email sent successfully
```

### ❌ Missing Postmark Config
```
📋 Kontentino Waitlist API Configuration:
   Postmark: ❌ Missing
   Postmark From: ❌ Not set
   Redis: ⚠️ DISABLED
```
**Fix**: Add `POSTMARK_API_KEY` and `POSTMARK_FROM_EMAIL` to Railway env vars

### ❌ Email Sending Failed
```
📤 Sending email to: user@example.com
❌ Postmark error: Sender signature not verified
```
**Fix**: Verify sender email/domain in Postmark dashboard

## Debugging Checklist

### If emails aren't sending:
1. Check logs for: `❌ Postmark error`
2. Verify Postmark config in Railway env vars
3. Check sender is verified in Postmark dashboard
4. Look for `MessageID` in success logs

### If rate limiting isn't working:
1. Check startup logs for: `✅ Redis detected`
2. Verify Redis service is running in Railway
3. Look for: `🔒 Checking rate limit` in request logs
4. Test with 3 quick submissions

### If app crashes on startup:
1. Check Railway build logs (before deployment logs)
2. Look for missing dependencies
3. Verify all required env vars are set
4. Check `npm run build` works locally

## Production Monitoring

### What to Monitor:
- **Email success rate**: Look for ratio of ✅ vs ❌ in email logs
- **Rate limiting triggers**: Count of `Rate limit exceeded` messages
- **Error patterns**: Recurring errors with same email/IP
- **Response times**: Railway shows request duration

### Set Up Alerts:
1. Railway Dashboard → Service → Settings → Notifications
2. Enable "Deployment Failed" notifications
3. Enable "Service Crashed" notifications
4. Consider external monitoring (UptimeRobot, etc.)

### Log Retention:
- Railway keeps logs for 7 days on Hobby plan
- For longer retention, use external logging (Logtail, Papertrail)

## Filtering Logs

Railway logs can be filtered:

### Show only errors:
Filter by: `❌` or `error`

### Show only email sends:
Filter by: `Email sent successfully`

### Show only rate limits:
Filter by: `Rate limit`

### Show startup config:
Filter by: `Configuration:`

## Performance Logs

Look for patterns:
- Slow email sends → Check Postmark status
- Many rate limit blocks → Might need to adjust limit
- Frequent crashes → Check memory/CPU usage in Railway metrics

## Need Help?

If you see unexpected logs:
1. Copy the full log output
2. Check error message carefully
3. Search this guide for the icon/pattern
4. Check relevant setup guide (POSTMARK_SETUP.md, REDIS_SETUP.md)
5. Verify Railway environment variables

## Quick Reference

**Healthy app startup:**
```
✅ [Redis type] detected - Rate limiting ENABLED
📋 Configuration: All ✅
```

**Healthy signup request:**
```
🔒 or ⚠️ Rate limit check
📧 Processing signup
📤 Sending email
✅ Email sent successfully
```

**Problem indicators:**
```
❌ Postmark error         → Check Postmark config
❌ Email sending error    → Check logs for details
❌ Missing                → Check environment variables
❌ Rate limit exceeded    → Working as intended (good!)
```
