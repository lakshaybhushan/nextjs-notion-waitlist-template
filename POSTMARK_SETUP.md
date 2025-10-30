# Postmark Email Setup Guide

## Why Postmark?

Postmark is a transactional email service designed for application emails. Benefits:
- **High deliverability**: Industry-leading inbox placement
- **Fast delivery**: Average delivery time under 2 seconds
- **Simple API**: Easy to integrate and test
- **Detailed analytics**: Open rates, bounce tracking, spam complaints
- **Excellent support**: Fast, helpful customer service

## Step 1: Create Postmark Account

1. Go to https://postmarkapp.com/
2. Click **"Start Free Trial"** (no credit card required)
3. Fill in your details and verify your email
4. You'll get **10,000 free emails** for the first month

## Step 2: Create a Server

1. Log in to your Postmark account
2. You'll be prompted to create your first **"Server"**
   - Think of a server as a project or application
3. Name it: **"Kontentino Waitlist"** (or any name you prefer)
4. Click **"Create Server"**

## Step 3: Get API Key

1. In your server dashboard, click **"API Tokens"** in the left sidebar
2. You'll see a **"Server API token"** - this is your `POSTMARK_API_KEY`
3. Copy the token - it looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
4. Keep this safe - you'll add it to environment variables

**Important**: Don't use the "Account API token" - use the "Server API token"

## Step 4: Add and Verify Sender Signature

Postmark requires you to verify the email address you send from.

### Option A: Single Email Address (Easiest)

1. Go to **"Sender Signatures"** in the left sidebar
2. Click **"Add Domain or Signature"** → **"Email Address"**
3. Enter your email (e.g., `noreply@kontentino.com`)
4. Click **"Send Verification Email"**
5. Check your inbox and click the verification link
6. Once verified, you can send emails from this address

### Option B: Entire Domain (Recommended for Production)

1. Go to **"Sender Signatures"** → **"Add Domain or Signature"** → **"Domain"**
2. Enter your domain: `kontentino.com`
3. Postmark will show DNS records to add:

```
Type: TXT
Name: @
Value: [Postmark provides this]

Type: CNAME
Name: [unique-value].pm
Value: pm.mtasv.net

Type: TXT
Name: pm._domainkey
Value: [DKIM record - Postmark provides this]
```

4. Add these records to your domain's DNS settings (via your DNS provider)
5. Click **"Verify"** in Postmark dashboard
6. Verification can take 24-48 hours

**Benefits of domain verification:**
- Send from any email at your domain
- Better deliverability
- Professional appearance
- Required for production use

## Step 5: Configure Message Stream

Postmark uses "Message Streams" to organize emails:

1. Go to **"Message Streams"** in the left sidebar
2. You'll see a default **"Outbound"** stream - this is perfect for waitlist emails
3. Note: There's also a "Broadcast" stream for marketing emails

For this project, use the **"Outbound"** stream (transactional emails).

## Step 6: Set Up Environment Variables

Create `.env.local` file in project root:

```bash
# Notion Configuration
NOTION_SECRET=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6

# Postmark Configuration
POSTMARK_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
POSTMARK_FROM_EMAIL=noreply@kontentino.com
POSTMARK_REPLY_TO=support@kontentino.com

# Upstash Redis (Rate Limiting)
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Important Notes:**
- `POSTMARK_FROM_EMAIL` must be verified (Step 4)
- `POSTMARK_REPLY_TO` is where replies will go (can be different from FROM)
- Never commit `.env.local` to Git

## Step 7: Test Email Sending

### Option 1: Use Postmark's Test Mode

In development, you can use Postmark's sandbox:

1. Go to **"Sandbox Server"** in Postmark dashboard
2. Get the sandbox API token
3. Use it in `.env.local` for testing
4. Emails won't actually send, but you'll see them in Postmark dashboard

### Option 2: Test Locally

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Test email preview (React Email dev server)
npm run email
# Opens http://localhost:3000/preview
```

### Option 3: Send Real Test Email

1. Go to your waitlist form (http://localhost:3000)
2. Enter your email and name
3. Submit the form
4. Check:
   - Postmark dashboard → Activity
   - Your email inbox
   - Console for any errors

## Step 8: Monitor Email Activity

Postmark provides excellent monitoring:

1. **Activity Feed**: See all sent emails in real-time
   - Status: Sent, Delivered, Bounced, Spam Complaint
   - Open tracking
   - Click tracking

2. **Statistics**:
   - Delivery rates
   - Open rates
   - Bounce rates
   - Spam complaints

3. **Bounce Webhooks**: Get notified of bounces
   - Hard bounces (invalid email)
   - Soft bounces (temporary issue)
   - Spam complaints

## Production Checklist

Before going live:

- [ ] Verify your domain (not just email address)
- [ ] Set up DKIM and SPF records
- [ ] Enable DMARC for better deliverability
- [ ] Test email appearance in multiple clients (Gmail, Outlook, etc.)
- [ ] Set up bounce webhook
- [ ] Configure tracking (opens/clicks) if needed
- [ ] Add unsubscribe link (for marketing emails, not required for transactional)
- [ ] Review Postmark's sending best practices

## Pricing

**Free Trial**: 10,000 emails/month (first month)

**After Trial**:
- $15/month for 10,000 emails
- $1.25 per 1,000 additional emails
- Volume discounts available

**For Waitlist**: 10,000 emails should be plenty for early signups

## Common Issues & Solutions

### "Sender signature not verified"
- **Solution**: Verify your sender email or domain (Step 4)
- Check spam folder for verification email

### "API key invalid"
- **Solution**: Make sure you're using the "Server API token", not "Account API token"
- Regenerate token if needed

### Emails going to spam
- **Solution**:
  - Verify your domain (not just email)
  - Add SPF and DKIM records
  - Use a professional from address
  - Avoid spam trigger words in subject/content

### "MessageStream not found"
- **Solution**: Ensure you're using `MessageStream: "outbound"` in the API call
- Check your server has an Outbound stream

### Rate limiting errors
- **Solution**: Postmark has sending limits
  - Free trial: 100 emails/hour
  - Paid plans: Much higher limits
  - Contact support to increase if needed

## Email Best Practices

1. **Subject Line**: Keep it short and clear
   - ✅ "Welcome to Kontentino Waitlist!"
   - ❌ "🎉🎉🎉 OMG You're on the LIST!!! 🚀🚀🚀"

2. **From Name**: Use your company name
   - ✅ `Kontentino <noreply@kontentino.com>`
   - ❌ `noreply@kontentino.com`

3. **Reply-To**: Always set a real support email
   - ✅ `support@kontentino.com`
   - ❌ `noreply@kontentino.com`

4. **Content**:
   - Be concise and friendly
   - Include clear call-to-action
   - Add unsubscribe option (if required)
   - Use responsive HTML design

5. **Testing**:
   - Test in multiple email clients
   - Use Postmark's spam test tool
   - Send test emails to yourself first

## Advanced Features

### Webhooks
Get notified of email events:
- Delivery
- Bounces
- Spam complaints
- Opens
- Link clicks

### Templates
Create reusable email templates in Postmark dashboard:
1. Go to **"Templates"**
2. Create new template
3. Use variables like `{{userFirstname}}`
4. Send via template ID in API

### Batch Sending
Send multiple emails at once:
```typescript
await postmarkClient.sendEmailBatch([
  { From: "...", To: "user1@example.com", ... },
  { From: "...", To: "user2@example.com", ... },
]);
```

## Support Resources

- **Postmark Documentation**: https://postmarkapp.com/developer
- **API Reference**: https://postmarkapp.com/developer/api/overview
- **Support**: help@postmarkapp.com (they're fast!)
- **Status Page**: https://status.postmarkapp.com/

## Alternative: Using Postmark Templates

Instead of React Email, you can use Postmark's built-in templates:

1. Create template in Postmark dashboard
2. Update API call:
```typescript
await postmarkClient.sendEmailWithTemplate({
  TemplateId: 12345,
  TemplateModel: {
    userFirstname: firstname,
    product_name: "Kontentino GPT Apps"
  },
  From: "...",
  To: email
});
```

**Pros**: No need to render HTML in Node.js
**Cons**: Less flexibility, templates managed in Postmark dashboard

## Need Help?

- Postmark Support: help@postmarkapp.com
- GitHub Issues: https://github.com/kontentino/kontentino-gpt-landing-waitlist/issues
- Check Postmark Activity feed for delivery errors
