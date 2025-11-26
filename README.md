# Social Media Planner - Waitlist Landing Page

<p align="center">
<img src="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/Pipedrive-000000.svg?style=for-the-badge&logo=Pipedrive&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Railway-0B0D0E.svg?style=for-the-badge&logo=Railway&logoColor=white">
</p>

![Landing Page Preview](./app/opengraph-image.png)

A waitlist application for **Social Media Planner by Kontentino** - Bring your whole social media workflow inside ChatGPT. Turn ChatGPT conversations into visual content calendars with ready-to-publish posts.

**Live Demo:** Coming soon

## What is Social Media Planner?

A ChatGPT integration that transforms your content ideas into structured social media plans:

- **Visual Calendar** - Turn messy chats into a full monthly content calendar
- **Ready to Publish** - Approve, export, or schedule content straight from ChatGPT
- **Stay in Flow** - No more copy-pasting between tools

## Features

- **Next.js 14** - Modern React framework with App Router
- **Pipedrive CRM** - All waitlist data stored as Leads & Persons in Pipedrive
- **Lead Management** - Automatic lead creation with comprehensive notes
- **Redis Rate Limiting** - Prevent spam (Railway Redis or Upstash)
- **Beautiful UI** - Kontentino-branded design with 3D tilt effects
- **Video Showcase** - Product demonstration section
- **Mobile Responsive** - Optimized for all devices

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- **Pipedrive account** with API token (REQUIRED)
- Redis (optional - for rate limiting)

### Installation

```bash
# Clone repository
git clone https://github.com/kontentino/kontentino-gpt-landing-waitlist.git
cd kontentino-gpt-landing-waitlist

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Add your Pipedrive API token to .env.local
# Get it from: Settings → Personal → API

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Environment Variables

```bash
# Pipedrive (REQUIRED)
PIPEDRIVE_API_TOKEN=your_pipedrive_api_token_here

# Redis (OPTIONAL - for rate limiting)
REDIS_URL=redis://...
# OR
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=xxxxx
```

## Setup Guides

Step-by-step instructions:

- **[PIPEDRIVE_SETUP.md](./PIPEDRIVE_SETUP.md)** - Complete Pipedrive integration guide
- **[PIPEDRIVE_CUSTOM_FIELDS_SETUP.md](./PIPEDRIVE_CUSTOM_FIELDS_SETUP.md)** - Set up custom fields for better filtering (optional)
- **[PIPEDRIVE_FIELD_MAPPING.md](./PIPEDRIVE_FIELD_MAPPING.md)** - Field mapping reference
- **[REDIS_SETUP.md](./REDIS_SETUP.md)** - Configure rate limiting (optional)
- **[RAILWAY_SETUP.md](./RAILWAY_SETUP.md)** - Deploy to Railway

## Documentation

Key documentation files:

- **Architecture** - Pipedrive-first data storage (Persons + Leads)
- **Lead Management** - Automatic lead creation with notes
- **API Routes** - Single `/api/pipedrive` endpoint
- **Deployment** - Railway or Vercel

## Development

### Run Development Server

```bash
pnpm dev
# Open http://localhost:3000
```

### Build for Production

```bash
pnpm build
pnpm start
```

### Test Pipedrive Integration

```bash
# Make sure PIPEDRIVE_API_TOKEN is set in .env.local
# Fill out the form on the landing page
# Check your Pipedrive Leads view to verify the data
```

## Deployment

### Railway (Recommended)

Railway provides built-in Redis and automatic deployments.

1. Push code to GitHub
2. Create new Railway project from repo
3. Add Redis service (optional, for rate limiting)
4. Set `PIPEDRIVE_API_TOKEN` environment variable
5. Deploy automatically on every push

See [RAILWAY_SETUP.md](./RAILWAY_SETUP.md) for complete instructions.

### Vercel

One-click deployment to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkontentino%2Fkontentino-gpt-landing-waitlist&env=PIPEDRIVE_API_TOKEN,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN)

Note: Vercel requires Upstash Redis for rate limiting (Railway Redis not available).

## Project Structure

```
├── app/
│   ├── api/
│   │   └── pipedrive/route.ts  # Pipedrive CRM endpoint
│   ├── page.tsx                # Main landing page
│   └── layout.tsx              # Root layout
├── components/
│   ├── cta.tsx                 # Hero section with tilt effect
│   ├── form.tsx                # Signup form
│   ├── about-section.tsx       # Features & content
│   ├── final-cta.tsx           # Bottom CTA
│   └── ui/                     # shadcn/ui components
├── public/
│   ├── hero-demo.mp4           # Product demo video
│   ├── img/                    # Images
│   └── fonts/                  # Tobias & Inter fonts
├── PIPEDRIVE_SETUP.md          # Integration guide
└── PIPEDRIVE_FIELD_MAPPING.md  # Field reference
```

## API Routes

### POST /api/pipedrive

Create Person and Lead in Pipedrive CRM with comprehensive note.

**Request:**
```json
{
  "email": "john@example.com",
  "role": "Social media pro",
  "linkedin": "https://linkedin.com/in/johndoe"
}
```

**Response:**
```json
{
  "success": true,
  "person_id": 12345,
  "lead_id": 67890
}
```

**Rate Limit:** 2 requests/minute per IP (if Redis configured)

**What Gets Created:**
- **Person** with email
- **Lead** titled "{Role} - {Email}"
- **Note** containing role, LinkedIn, source, cohort, and virtual tags

## Customization

### Update Video

Replace `public/hero-demo.mp4` with your own product demo video.

### Modify Theme

Edit color scheme in `app/globals.css`:

```css
--primary: 230 85% 53%;      /* Kontentino blue #2146ec */
--secondary: 329 100% 77%;   /* Pink #ff8eef */
--background: 330 100% 97%;  /* Light pink #ffeff2 */
```

### Change Content

Main content sections:
- Hero: `components/cta.tsx`
- Form: `components/form.tsx`
- Features: `components/about-section.tsx`
- Bottom CTA: `components/final-cta.tsx`

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animation:** Framer Motion (3D tilt effects)
- **CRM:** Pipedrive (via pipedrive SDK v30.4.0)
- **Cache:** Redis (ioredis) - optional
- **Deployment:** Railway / Vercel
- **Fonts:** Tobias (serif) + Inter (sans-serif)

## Monitoring

### View Logs (Railway)

```bash
railway logs --follow
```

### Check Pipedrive Leads

Visit [Pipedrive Dashboard](https://app.pipedrive.com) to:
- View all waitlist leads
- Filter by title (contains role)
- Search notes for specific cohorts or tags
- Export lead lists to CSV

### Monitor Waitlist Growth

Create filters in Pipedrive to track:
- Leads by role (Agency, Creator, Social media pro)
- Monthly cohorts (search notes for "2025-01")
- LinkedIn profile completion (search for "LinkedIn: https")
- Leads created in last 7/30 days

## Troubleshooting

### Leads not appearing in Pipedrive
- Verify `PIPEDRIVE_API_TOKEN` is set correctly
- Check token is valid (test with API call)
- Review server logs for API errors
- Test token with curl:
  ```bash
  curl -X GET "https://api.pipedrive.com/v1/users/me?api_token=YOUR_TOKEN"
  ```

### Person creation fails
- Check if email already exists (Pipedrive may reject duplicates)
- Verify your Pipedrive plan supports number of contacts
- Review API rate limits
- Check server logs for specific error messages

### Lead creation fails
- Ensure Person was created successfully first
- Check server logs for Pipedrive API errors
- Verify your plan allows lead creation
- Check lead inbox capacity

### Notes not appearing
- Notes are attached to Leads, not Persons
- Check the Lead's Activity feed
- Note creation failures are soft fails (won't block signup)
- Refresh the lead page to see new notes

### Rate limiting not working
- Rate limiting requires Redis configuration
- Confirm Redis is connected (`REDIS_URL` or Upstash)
- Check Railway Redis service is running
- Without Redis, rate limiting is skipped (useful for local dev)

## Security

- **Rate Limiting:** 2 requests/minute per IP prevents spam (requires Redis)
- **Email Validation:** Client and server-side validation
- **Environment Variables:** Never commit `.env.local`
- **Pipedrive Token:** Keep `PIPEDRIVE_API_TOKEN` secret (treat like a password)
- **API Security:** Server-side validation and error handling

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
