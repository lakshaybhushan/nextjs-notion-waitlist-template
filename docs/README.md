# Kontentino GPT Apps - Waitlist Application Documentation

## Overview

This is the waitlist landing page for **Kontentino GPT Apps**, a ChatGPT integration that enables social media professionals to create content with AI, visualize platform-accurate previews, and export to Kontentino for approval workflows.

## Architecture

### Technology Stack

#### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library (Radix UI + Tailwind)
- **Framer Motion** - Animation library
- **next-themes** - Dark/light mode management
- **Lucide React** - Icon library

#### Backend/APIs
- **Notion API** (`@notionhq/client`) - Database/CMS for waitlist storage
- **Postmark** - Transactional email service (10,000 free emails/month)
- **React Email** - Email template rendering
- **ioredis** - Redis client for rate limiting

#### Deployment
- **Vercel** - Primary deployment option with analytics
- **Railway** - Alternative deployment (recommended for Kontentino)
- **pnpm** - Package manager (enforced via nixpacks)

### Project Structure

```
/Users/filip.popranec/Develop/kontentino/kontentino-gpt-landing-waitlist/
├── app/
│   ├── api/
│   │   ├── mail/route.ts          # Email sending endpoint
│   │   └── notion/route.ts        # Notion database endpoint
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Main landing page
│   └── globals.css                # Global styles & theme
├── components/
│   ├── ui/                        # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── particles.tsx
│   │   ├── text-blur.tsx
│   │   ├── shimmer-text.tsx
│   │   └── enhanced-btn.tsx
│   ├── header.tsx                 # Top navigation
│   ├── footer.tsx                 # Footer with branding
│   ├── cta.tsx                    # Hero section
│   ├── form.tsx                   # Signup form
│   ├── about-section.tsx          # Video & features showcase
│   ├── theme-provider.tsx         # Theme context
│   └── mode-toggle.tsx            # Dark/light toggle
├── emails/
│   └── index.tsx                  # Welcome email template
├── lib/                           # Utility functions
├── public/                        # Static assets
│   └── kontentino-logo.svg        # Kontentino brand logo
├── docs/                          # Documentation
│   └── README.md                  # This file
├── .env.example                   # Environment variables template
├── package.json                   # Dependencies and scripts
├── tailwind.config.ts             # Tailwind configuration
└── tsconfig.json                  # TypeScript configuration
```

## API Routes

### POST /api/mail

Sends welcome email using Postmark when user joins waitlist.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Features:**
- Rate limiting: 2 requests/minute per IP
- Redis-based rate limiting (Railway Redis or Upstash)
- Returns 429 on rate limit exceeded
- Uses React Email templates

**Response:**
```json
{
  "message": "Email sent successfully"
}
```

### POST /api/notion

Creates new entry in Notion database.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "success": true
}
```

## Environment Variables

### Required

```bash
# Notion Integration
NOTION_SECRET=secret_xxxxxxxxxxxxx        # Notion integration token
NOTION_DB=xxxxxxxxxxxxxxxxxxxxxxx         # Notion database ID

# Postmark Email
POSTMARK_API_KEY=xxxxxxxx-xxxx-xxxx       # Postmark Server API token
POSTMARK_FROM_EMAIL=noreply@kontentino.com # Verified sender email
POSTMARK_REPLY_TO=support@kontentino.com   # Reply-to address

# Redis (Rate Limiting)
# Option 1: Railway (production)
REDIS_URL=redis://default:password@host:port # Auto-configured by Railway

# Option 2: Upstash (development/alternative)
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxxx
```

### Redis Configuration

The app automatically detects which Redis to use:
1. **Railway Redis** (production): Uses `REDIS_URL` if available
2. **Upstash Redis** (development): Falls back to Upstash credentials
3. **No Redis**: Rate limiting disabled (development only)

## Setup Guides

See separate documentation files for detailed setup instructions:

- **[QUICK_START.md](../QUICK_START.md)** - 15-minute quick start
- **[NOTION_SETUP.md](../NOTION_SETUP.md)** - Notion database configuration
- **[POSTMARK_SETUP.md](../POSTMARK_SETUP.md)** - Postmark email setup
- **[REDIS_SETUP.md](../REDIS_SETUP.md)** - Redis configuration
- **[RAILWAY_SETUP.md](../RAILWAY_SETUP.md)** - Railway deployment
- **[LOGS_GUIDE.md](../LOGS_GUIDE.md)** - Monitoring and debugging

## Features

### Landing Page

1. **Hero Section**
   - Kontentino branding
   - Clear value proposition
   - Early beta access messaging

2. **About Section**
   - Video demonstration
   - Three apps showcase (Post Preview, Content Calendar, Post List)
   - Benefits of joining early access

3. **Signup Form**
   - Name and email collection
   - Client-side validation
   - Toast notifications
   - Rate limiting protection

4. **Theme Support**
   - Blue-tinted dark theme (default)
   - Light theme available
   - Mode toggle component

### Email Automation

**Welcome Email Template** (`emails/index.tsx`):
- Branded Kontentino design
- Explains the product
- Sets expectations for beta access
- Professional tone for B2B audience

## Development

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Email Development

```bash
# Start email preview server
pnpm email

# Open http://localhost:3001
```

### Environment Setup

1. Copy `.env.example` to `.env.local`
2. Fill in required environment variables
3. See setup guides for detailed instructions

## Deployment

### Railway (Recommended)

1. Push code to GitHub
2. Create new Railway project from repo
3. Add Redis service in Railway dashboard
4. Set environment variables
5. Deploy automatically on every push

See [RAILWAY_SETUP.md](../RAILWAY_SETUP.md) for details.

### Vercel

1. Click "Deploy with Vercel" button in README
2. Set environment variables in Vercel dashboard
3. Deploy

## Color Theme

### Dark Theme (Default)

```css
--background: 216 25% 5%      /* Blue-tinted dark (#0c0e12) */
--card: 215 18% 10%           /* Dark blue-gray (#151820) */
--border: 215 18% 21%         /* Blue-tinted borders (#2a3038) */
--primary: 230 82% 67%        /* Kontentino blue (#647ef2) */
--accent: #F7FF9B             /* Yellow particles */
```

### Design Principles

- Blue-tinted dark background for AI aesthetic
- Matches ChatGPT and Kontentino branding
- WCAG AAA contrast ratios for accessibility
- Professional B2B appearance

## Testing

### Manual Testing

1. Test signup flow with valid email
2. Check email delivery in inbox
3. Verify Notion database entry created
4. Test rate limiting (submit 3+ times quickly)
5. Check responsive design on mobile
6. Test dark/light theme toggle

### Rate Limiting Test

```bash
# Should succeed
curl -X POST http://localhost:3000/api/mail \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'

# After 2 requests, should return 429
```

## Monitoring

### Railway Logs

```bash
# View application logs
railway logs

# Follow logs in real-time
railway logs --follow
```

See [LOGS_GUIDE.md](../LOGS_GUIDE.md) for interpreting logs.

### Key Metrics

- Signup conversion rate
- Email delivery rate (Postmark dashboard)
- Rate limit hits (Redis monitoring)
- Bounce rate (Vercel Analytics)

## Security

### Rate Limiting

- 2 requests per minute per IP
- Prevents spam and abuse
- Redis-based tracking
- Returns 429 status code

### Email Validation

- Client-side HTML5 validation
- Server-side format checking
- Postmark handles deliverability

### Environment Variables

- Never commit `.env.local`
- Use Railway/Vercel environment variable management
- Rotate secrets regularly

## Troubleshooting

### Common Issues

**1. Email not sending**
- Check `POSTMARK_API_KEY` is valid
- Verify sender email is verified in Postmark
- Check Postmark dashboard for errors

**2. Notion connection fails**
- Verify `NOTION_SECRET` is correct
- Check database is shared with integration
- Ensure database has Name (title) and Email columns

**3. Rate limiting not working**
- Check Redis connection (`REDIS_URL` or Upstash credentials)
- Verify Railway Redis service is running
- Check logs for Redis errors

**4. Styling issues**
- Clear browser cache
- Check `globals.css` loads correctly
- Verify Tailwind CSS build

## Contributing

### Code Style

- Use TypeScript for all new code
- Follow existing component patterns
- Use Tailwind CSS for styling
- Keep components small and focused

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Commit changes
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/your-feature
```

### Commit Convention

Use conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Build/config changes

## License

Proprietary - Kontentino

## Support

For issues or questions:
- Email: support@kontentino.com
- Internal: Slack #gpt-apps channel

---

**Last Updated:** 2025-10-30
**Maintained By:** Kontentino Engineering Team
