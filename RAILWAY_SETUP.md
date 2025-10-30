# Railway Deployment Guide

## Quick Setup

### 1. Create Railway Project

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose `kontentino/kontentino-gpt-landing-waitlist`
5. Railway will auto-detect Next.js and configure build settings

### 2. Add Redis Service

1. In your Railway project, click **"+ New"**
2. Select **"Database"** → **"Add Redis"**
3. Railway will create a Redis instance and set these variables automatically:
   - `REDIS_URL` (we'll use this)
   - `REDIS_PRIVATE_URL`

### 3. Environment Variables

Add these in Railway Dashboard → Variables:

```bash
# Notion Configuration
NOTION_SECRET=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Postmark Email Configuration
POSTMARK_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
POSTMARK_FROM_EMAIL=noreply@kontentino.com
POSTMARK_REPLY_TO=support@kontentino.com

# Redis - Railway provides these automatically when you add Redis service:
# REDIS_URL=redis://default:password@host:port (auto-generated)

# OR if using Upstash Redis instead:
# UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
# UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxx

# Next.js (Railway sets this automatically)
PORT=3000
```

### 4. Build Configuration

Railway automatically detects `package.json` and runs:
- **Install**: `npm install` (or `bun install` if configured)
- **Build**: `npm run build`
- **Start**: `npm run start`

The `railway.json` file in the repo provides explicit configuration.

### 5. Custom Domain

1. Railway Dashboard → Settings → Domains
2. Add your custom domain (e.g., `waitlist.kontentino.com`)
3. Update DNS records as shown by Railway
4. SSL certificate automatically provisioned

### 6. Database Setup (Before Deployment)

#### Notion Database
1. Create a Notion database with columns:
   - **Name** (Title type)
   - **Email** (Email type)
2. Get integration secret: https://www.notion.so/my-integrations
3. Share database with your integration
4. Copy database ID from URL

#### Redis (Rate Limiting)

**Option A: Railway Redis (Recommended)**
1. In Railway project: "+ New" → Database → Redis
2. Railway automatically sets `REDIS_URL`
3. No additional configuration needed
4. Included in Railway plan pricing

**Option B: Upstash Redis (Alternative)**
1. Create free account: https://console.upstash.com
2. Create new Redis database
3. Copy REST URL and TOKEN
4. Add to Railway environment variables

**See**: [REDIS_SETUP.md](./REDIS_SETUP.md) for detailed comparison

## Package Manager Options

Railway supports both `npm` and `bun`:

### Using npm (default)
```json
// No changes needed, package.json already configured
```

### Using bun (faster)
Update `railway.json`:
```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "bun install && bun run build"
  },
  "deploy": {
    "startCommand": "bun run start"
  }
}
```

## Health Checks

Railway will ping `/` to check if the app is healthy:
- **Timeout**: 300 seconds (for initial build)
- **Restart policy**: ON_FAILURE with max 10 retries

## Monitoring

Railway Dashboard shows:
- **Build logs**: Real-time build output
- **Deployment logs**: Application runtime logs
- **Metrics**: CPU, Memory, Network usage
- **Deployments**: History of all deployments

## Costs

Railway offers:
- **Hobby Plan**: $5/month credit
  - Next.js app: ~$2-3/month
  - Redis: ~$1/month
  - Total: ~$3-4/month (well within $5 credit)
- **Pro Plan**: $20/month credit (if you need more resources)

**Typical waitlist usage**: $3-4/month total (app + Redis)

## Troubleshooting

### Build fails
- Check Railway logs for errors
- Verify all environment variables are set
- Test locally with `npm run build` first

### App crashes on startup
- Check `npm run start` works locally
- Verify PORT environment variable
- Review deployment logs in Railway dashboard

### Can't access app
- Check domain DNS settings
- Verify Railway service is running (green status)
- Check health check logs

## Next Steps

After Railway deployment:
1. Test signup flow at your Railway URL
2. Verify emails are sent (after Postmark integration)
3. Check Notion database receives entries
4. Test rate limiting (try multiple signups quickly)
5. Add custom domain
6. Update README with production URL

## Comparison: Railway vs Vercel

| Feature | Railway | Vercel |
|---------|---------|--------|
| Node.js control | Full control | Serverless functions |
| Build time | Flexible | 45s limit (Hobby) |
| Custom domains | ✅ Included | ✅ Included |
| Environment vars | Easy dashboard | Easy dashboard |
| Database support | Any database | Better for serverless |
| Pricing | $5/month starter | Free tier available |
| Best for | Full-stack apps | Static/JAMstack |

**Recommendation**: Railway is great for this project because:
- You already use it for other Kontentino services
- Full Node.js environment (easier debugging)
- No serverless cold starts
- Consistent with your infrastructure
