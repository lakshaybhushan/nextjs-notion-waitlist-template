# Notion Database Setup Guide

## Step 1: Create Notion Integration

1. **Go to Notion Integrations page**: https://www.notion.so/my-integrations
2. Click **"+ New integration"**
3. Fill in the details:
   - **Name**: Kontentino Waitlist (or any name you prefer)
   - **Associated workspace**: Select your workspace
   - **Type**: Internal integration
4. Click **"Submit"**
5. **Copy the "Internal Integration Secret"** - this is your `NOTION_SECRET`
   - It looks like: `secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - Keep this safe - you'll add it to environment variables

## Step 2: Create Notion Database

1. **Open Notion** and navigate to your workspace
2. Click **"+ New page"** or use an existing page
3. Type `/database` and select **"Table - Inline"** or **"Table - Full page"**
4. Name your database (e.g., "Kontentino Waitlist")

## Step 3: Configure Database Columns

Your database MUST have exactly these two columns:

### Column 1: Name (Title type)
- **Name**: Name
- **Type**: Title (this is the default first column)
- **Purpose**: Stores the user's first name

### Column 2: Email (Email type)
- Click **"+"** to add a new column
- **Name**: Email
- **Type**: Email
- **Purpose**: Stores the user's email address

**Your database should look like this:**

| Name (Title) | Email (Email) |
|--------------|---------------|
| John         | john@example.com |
| Sarah        | sarah@example.com |

**Optional columns you can add:**
- **Created time** (auto-filled)
- **Status** (Select: New, Contacted, Notified)
- **Notes** (Text)

## Step 4: Share Database with Integration

1. **Open your database in Notion**
2. Click the **"•••"** (three dots) menu in the top right
3. Scroll down to **"Connections"** or **"Add connections"**
4. Search for and select your integration (e.g., "Kontentino Waitlist")
5. Click **"Confirm"**

**Important**: Your integration cannot access the database until you explicitly share it!

## Step 5: Get Database ID

1. **Open your database as a full page** (if it's inline, click "Open as page")
2. Look at the URL in your browser:
   ```
   https://www.notion.so/{workspace}/{DATABASE_ID}?v={view_id}
   ```
3. **Copy the DATABASE_ID** - it's the long string of characters between your workspace name and `?v=`

   **Example URL**:
   ```
   https://www.notion.so/myworkspace/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6?v=12345
   ```
   **DATABASE_ID**: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

4. The ID should be **32 characters** without dashes, or formatted like: `a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6`

## Step 6: Add to Environment Variables

Create `.env.local` file in project root:

```bash
NOTION_SECRET=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

## Testing Your Setup

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Submit a test email through the waitlist form
4. Check your Notion database - a new entry should appear!

## Troubleshooting

### "Integration not found" or "Unauthorized"
- **Solution**: Make sure you shared the database with your integration (Step 4)
- Go back to Notion database → ••• → Connections → Add your integration

### "Database not found"
- **Solution**: Double-check your DATABASE_ID
- Make sure you copied the ID from the URL correctly
- Try using the ID with or without dashes

### "Invalid email" error
- **Solution**: Ensure the "Email" column in Notion is type "Email", not "Text"
- Delete and recreate the column with correct type

### "Title property required"
- **Solution**: The "Name" column must be type "Title"
- Every Notion database has one Title column (the first column by default)

## Sample Database Template

Want to use a pre-built template? Duplicate this:
👉 [Sample Waitlist Database](https://lakshaybhushan.notion.site/15e45b25609e80408f83ebb97b45882b?v=c949c24dff4a42b3baa31bfb3e8a3354)

After duplicating:
1. Create your integration (Step 1)
2. Share the duplicated database with your integration (Step 4)
3. Get the DATABASE_ID from your duplicated database URL (Step 5)

## Advanced: Database Views

You can create different views in Notion to organize your waitlist:

1. **Table View**: Default, spreadsheet-like
2. **Board View**: Kanban-style by Status (New, Contacted, etc.)
3. **Gallery View**: Card-based view
4. **Calendar View**: If you add a date property

**Filters**: Filter by status, date range, etc.
**Sorting**: Sort by creation date, name, etc.

## Security Best Practices

1. **Never commit** `.env.local` to Git (it's in `.gitignore`)
2. **Rotate secrets** periodically in Notion integrations settings
3. **Limit permissions**: Integration only needs "Insert content" permission
4. **Use different integrations** for dev/staging/production environments

## Need Help?

- Notion API Docs: https://developers.notion.com
- Notion Community: https://www.notion.so/help/category/build-with-the-api
- GitHub Issues: https://github.com/kontentino/kontentino-gpt-landing-waitlist/issues
