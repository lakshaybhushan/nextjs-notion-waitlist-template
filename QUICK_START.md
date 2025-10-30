# Quick Start Guide - Kontentino GPT Waitlist

## Overview

This is a complete waitlist application for Kontentino GPT Apps with:
- ✅ **Postmark** email integration (replaced Resend)
- ✅ **Notion** database for managing signups
- ✅ **Upstash Redis** for rate limiting
- ✅ **Railway** deployment configuration
- ✅ **shadcn/ui** beautiful components

## 🚀 Quick Setup (15 minutes)

### 1. Install Dependencies

```bash
cd kontentino-gpt-landing-waitlist
npm install
# or
bun install
```

### 2. Set Up Notion Database (5 min)

Follow: [NOTION_SETUP.md](./NOTION_SETUP.md)

**TL;DR**:
1. Create Notion integration at https://www.notion.so/my-integrations
2. Create database with columns: **Name** (Title), **Email** (Email)
3. Share database with your integration
4. Copy `NOTION_SECRET` and `NOTION_DB` from integration and database URL

### 3. Set Up Postmark (5 min)

Follow: [POSTMARK_SETUP.md](./POSTMARK_SETUP.md)

**TL;DR**:
1. Sign up at https://postmarkapp.com (10,000 free emails)
2. Create server, get API token
3. Verify sender email address
4. Copy `POSTMARK_API_KEY`

### 4. Set Up Redis for Rate Limiting (OPTIONAL - 3 min)

**Redis is optional** - the app works without it, but you'll have no rate limiting (spam protection).

**For local testing**: Skip Redis, app will work fine with a warning in console.

**For production**: Highly recommended to prevent spam:
- **Railway**: Add Redis service (2 clicks, automatic config)
- **Upstash**: Sign up at https://console.upstash.com (free tier)

**Detailed guide**: [REDIS_SETUP.md](./REDIS_SETUP.md)

### 5. Configure Environment Variables (2 min)

Create `.env.local`:

```bash
# Notion
NOTION_SECRET=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Postmark
POSTMARK_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
POSTMARK_FROM_EMAIL=noreply@kontentino.com
POSTMARK_REPLY_TO=support@kontentino.com

# Redis (OPTIONAL - for rate limiting, recommended for production)
# For local testing: Leave commented out, app will work without rate limiting
# UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
# UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxx
# Note: Railway Redis uses REDIS_URL (auto-set when you add Redis service)
```

### 6. Run Locally

```bash
# Development server
npm run dev

# Email preview (optional)
npm run email
# Opens at http://localhost:3000/preview
```

Visit http://localhost:3000 and test the waitlist form!

## 📦 Deploy to Railway (5 minutes)

Follow: [RAILWAY_SETUP.md](./RAILWAY_SETUP.md)

**TL;DR**:
1. Push code to GitHub
2. Go to https://railway.app/dashboard
3. New Project → Deploy from GitHub
4. Click "+ New" → Database → Add Redis
5. Add environment variables (Notion, Postmark)
6. Railway auto-deploys!

## ✅ Testing Checklist

- [ ] Local dev server runs without errors
- [ ] Submit test email through waitlist form
- [ ] Check Notion database - new entry appears
- [ ] Check email inbox - welcome email received
- [ ] Try submitting 3+ times quickly - rate limiting works
- [ ] Email looks good on mobile and desktop
- [ ] Preview email at http://localhost:3000/preview (via `npm run email`)

## 🎨 Customization

### Change Email Template

Edit: `emails/index.tsx`

```tsx
// Update content, styling, logo, etc.
<Text style={paragraph}>
  Your custom message here...
</Text>
```

### Change Landing Page

Main landing page: `app/page.tsx` or similar component

### Update Branding

- Logo: Update in `emails/index.tsx` and public assets
- Colors: Edit Tailwind config in `tailwind.config.ts`
- Copy: Update text in components

## 📊 Monitoring

### Notion Database
View all signups in your Notion database. Create views:
- Table view (default)
- Board view (by Status)
- Calendar view (by signup date)

### Postmark Dashboard
Monitor email delivery:
- Activity feed: See all sent emails
- Statistics: Open rates, bounces
- Webhooks: Get notified of events

### Railway Dashboard
- Build logs
- Deployment logs
- Resource usage (CPU, memory)
- Custom domain setup

## 🐛 Troubleshooting

### "Notion unauthorized" error
- Make sure you shared the database with your integration
- Check `NOTION_SECRET` is correct

### "Postmark sender not verified"
- Verify your sender email in Postmark dashboard
- Check verification email in spam folder

### Emails not sending
- Check Postmark Activity feed for errors
- Verify `POSTMARK_API_KEY` is Server API token (not Account token)
- Check `POSTMARK_FROM_EMAIL` is verified

### Rate limiting not working
- Check Upstash Redis credentials
- Test by submitting form 3+ times quickly

### Build fails on Railway
- Check environment variables are set
- Review Railway build logs
- Test `npm run build` locally first

## 📚 Documentation

- **[NOTION_SETUP.md](./NOTION_SETUP.md)** - Detailed Notion database setup
- **[POSTMARK_SETUP.md](./POSTMARK_SETUP.md)** - Detailed Postmark email setup
- **[REDIS_SETUP.md](./REDIS_SETUP.md)** - Redis setup (Railway vs Upstash)
- **[RAILWAY_SETUP.md](./RAILWAY_SETUP.md)** - Detailed Railway deployment guide
- **[README.md](./README.md)** - Project overview and features

## 🔗 Useful Links

- **Notion API Docs**: https://developers.notion.com
- **Postmark Docs**: https://postmarkapp.com/developer
- **Upstash Docs**: https://docs.upstash.com
- **Railway Docs**: https://docs.railway.app
- **shadcn/ui**: https://ui.shadcn.com

## 💡 Tips

1. **Development**: Use Postmark sandbox mode for testing
2. **Production**: Verify domain (not just email) in Postmark
3. **Security**: Never commit `.env.local` to Git
4. **Monitoring**: Set up Postmark webhooks for bounce notifications
5. **Scaling**: Upstash Redis free tier handles 10,000 requests/day

## 🚨 Before Going Live

- [ ] Verify Postmark domain (not just email address)
- [ ] Test email in multiple clients (Gmail, Outlook, mobile)
- [ ] Set up custom domain in Railway
- [ ] Add SSL certificate (automatic with Railway)
- [ ] Test rate limiting is working
- [ ] Update email copy and branding
- [ ] Add privacy policy link (if collecting user data)
- [ ] Set up Postmark webhooks for monitoring

## 🎯 Next Steps

1. **Customize branding**: Update logo, colors, copy
2. **Custom domain**: Add `waitlist.kontentino.com` in Railway
3. **Analytics**: Add Google Analytics or Plausible
4. **Social sharing**: Add Open Graph meta tags
5. **Email sequence**: Send follow-up emails to waitlist users

## Need Help?

- Check documentation files above
- Review Postmark/Notion/Railway dashboards for errors
- Open GitHub issue: https://github.com/kontentino/kontentino-gpt-landing-waitlist/issues
