# Kontentino GPT Apps - Waitlist Landing Page

<p align="center">
<img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000.svg?style=for-the-badge&logo=Notion&logoColor=white">
<img src="https://img.shields.io/badge/Postmark-FFCD00.svg?style=for-the-badge&logo=Postmark&logoColor=black">
<img src="https://img.shields.io/badge/Railway-0B0D0E.svg?style=for-the-badge&logo=Railway&logoColor=white">
</p>

![Landing Page Preview](./app/opengraph-image.png)

A waitlist application for **Kontentino GPT Apps** - the first ChatGPT integration for social media professionals. Generate content with AI, visualize platform-accurate previews, and export to Kontentino for instant approval.

**Live Demo:** Coming soon

## What is Kontentino GPT Apps?

Three powerful ChatGPT applications for social media teams:

- **Post Preview** - Generate and visualize posts with pixel-perfect platform previews
- **Content Calendar** - Display your month of content at a glance
- **Post List** - Bulk overview and management for high-volume campaigns

## Features

- **Next.js 14** - Modern React framework with App Router
- **Notion Database** - Waitlist data stored in Notion as CMS
- **Postmark Email** - Automated welcome emails (10,000 free/month)
- **Redis Rate Limiting** - Prevent spam (Railway Redis or Upstash)
- **Beautiful UI** - shadcn/ui components with dark/light theme
- **Video Showcase** - Product demonstration section
- **Mobile Responsive** - Optimized for all devices

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Notion account with database
- Postmark account (free tier)
- Redis (Railway or Upstash)

### Installation

```bash
# Clone repository
git clone https://github.com/kontentino/kontentino-gpt-landing-waitlist.git
cd kontentino-gpt-landing-waitlist

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Add your credentials to .env.local
# See setup guides below for details

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Environment Variables

```bash
# Notion
NOTION_SECRET=secret_xxxxxxxxxxxxx
NOTION_DB=xxxxxxxxxxxxxxxxxxxxxxx

# Postmark
POSTMARK_API_KEY=xxxxxxxx-xxxx-xxxx
POSTMARK_FROM_EMAIL=noreply@kontentino.com
POSTMARK_REPLY_TO=support@kontentino.com

# Redis (Railway auto-configured, or use Upstash)
REDIS_URL=redis://...
# OR
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=xxxxx
```

## Setup Guides

Step-by-step instructions for each service:

- **[QUICK_START.md](./QUICK_START.md)** - Complete setup in 15 minutes
- **[NOTION_SETUP.md](./NOTION_SETUP.md)** - Configure Notion database
- **[POSTMARK_SETUP.md](./POSTMARK_SETUP.md)** - Setup email service
- **[REDIS_SETUP.md](./REDIS_SETUP.md)** - Configure rate limiting
- **[RAILWAY_SETUP.md](./RAILWAY_SETUP.md)** - Deploy to Railway
- **[LOGS_GUIDE.md](./LOGS_GUIDE.md)** - Monitor and debug

## Documentation

Full technical documentation available in [docs/README.md](./docs/README.md):

- Architecture overview
- API routes specification
- Component structure
- Deployment guide
- Troubleshooting

## Development

### Run Development Server

```bash
pnpm dev
```

### Preview Email Templates

```bash
pnpm email
# Open http://localhost:3001
```

### Build for Production

```bash
pnpm build
pnpm start
```

## Deployment

### Railway (Recommended)

Railway provides built-in Redis and automatic deployments.

1. Push code to GitHub
2. Create new Railway project from repo
3. Add Redis service in Railway dashboard
4. Set environment variables
5. Deploy automatically on every push

See [RAILWAY_SETUP.md](./RAILWAY_SETUP.md) for complete instructions.

### Vercel

One-click deployment to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkontentino%2Fkontentino-gpt-landing-waitlist&env=NOTION_SECRET,NOTION_DB,POSTMARK_API_KEY,POSTMARK_FROM_EMAIL,POSTMARK_REPLY_TO,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN)

Note: Vercel requires Upstash Redis (Railway Redis not available).

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── mail/route.ts       # Email sending endpoint
│   │   └── notion/route.ts     # Notion database endpoint
│   ├── page.tsx                # Main landing page
│   └── layout.tsx              # Root layout
├── components/
│   ├── cta.tsx                 # Hero section
│   ├── form.tsx                # Signup form
│   ├── about-section.tsx       # Video & features
│   └── ui/                     # shadcn/ui components
├── emails/
│   └── index.tsx               # Welcome email template
├── docs/
│   └── README.md               # Technical documentation
└── public/
    └── kontentino-logo.svg     # Brand assets
```

## API Routes

### POST /api/mail

Send welcome email via Postmark.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Rate Limit:** 2 requests/minute per IP

### POST /api/notion

Add user to Notion waitlist database.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

## Customization

### Update Video

Replace the placeholder video in `components/about-section.tsx`:

```typescript
const videoUrl = "https://www.youtube.com/embed/YOUR_VIDEO_ID";
```

### Modify Theme

Edit color scheme in `app/globals.css`:

```css
--background: 216 25% 5%;    /* Blue-tinted dark */
--primary: 230 82% 67%;      /* Kontentino blue */
```

### Change Content

Main content sections:
- Hero: `components/cta.tsx`
- Form: `components/form.tsx`
- About: `components/about-section.tsx`
- Email: `emails/index.tsx`

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animation:** Framer Motion
- **Email:** Postmark + React Email
- **Database:** Notion API
- **Cache:** Redis (ioredis)
- **Deployment:** Railway / Vercel

## Monitoring

### View Logs (Railway)

```bash
railway logs --follow
```

### Check Email Delivery

Visit [Postmark Dashboard](https://account.postmarkapp.com) to monitor:
- Email delivery rate
- Bounce rate
- Open rate (if tracking enabled)

### Monitor Waitlist

Open your Notion database to see all signups in real-time.

## Troubleshooting

### Email not sending
- Verify `POSTMARK_API_KEY` is valid
- Check sender email is verified in Postmark
- Review Postmark dashboard for errors

### Notion connection fails
- Ensure database is shared with integration
- Verify `NOTION_SECRET` and `NOTION_DB` are correct
- Check database has "Name" (title) and "Email" columns

### Rate limiting not working
- Confirm Redis is connected (`REDIS_URL` or Upstash)
- Check Railway Redis service is running
- Review logs for connection errors

See [docs/README.md](./docs/README.md) for more troubleshooting tips.

## Security

- **Rate Limiting:** 2 requests/minute per IP prevents spam
- **Email Validation:** Client and server-side validation
- **Environment Variables:** Never commit `.env.local`
- **Redis:** Secure connection to Railway or Upstash

## Contributing

### Code Style

- TypeScript for all code
- Tailwind CSS for styling
- Follow existing component patterns
- Use conventional commits

### Commit Format

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
test: add tests
chore: update config
```

## Support

For issues or questions:
- **Email:** support@kontentino.com
- **Documentation:** [docs/README.md](./docs/README.md)
- **Setup Guides:** See links above

## License

Proprietary - Kontentino

---

Built with ❤️ by the Kontentino Engineering Team
