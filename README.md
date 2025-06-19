<h1 align="center">Next.js + Notion — Wailtist Template</h1>

<p align="center">

<img src ="https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src ="https://img.shields.io/badge/Upstash-00E9A3.svg?style=for-the-badge&logo=Upstash&logoColor=white">
<img src ="https://img.shields.io/badge/Notion-000000.svg?style=for-the-badge&logo=Notion&logoColor=white">
<img src ="https://img.shields.io/badge/Resend-000000.svg?style=for-the-badge&logo=Resend&logoColor=white">
<img src ="https://img.shields.io/badge/shadcn/ui-000000.svg?style=for-the-badge&logo=shadcn/ui&logoColor=white">
<img src ="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white">

</p>

![GithubBanner](./app/opengraph-image.png)

This is a template repository for creating a waitlist using Next.js 14, Notion as a CMS, Upstash Redis for rate limiting and Resend for sending emails with a custom domain.

The UI is built using a mix of shadcn/ui, Magic UI and Tailwind CSS.

**Demo:** [https://nextjs-notion-waitlist.vercel.app](https://nextjs-notion-waitlist.vercel.app)

**Sample Database** ([Link](https://lakshaybhushan.notion.site/15e45b25609e80408f83ebb97b45882b?v=c949c24dff4a42b3baa31bfb3e8a3354))
<a href="https://lakshaybhushan.notion.site/15e45b25609e80408f83ebb97b45882b?v=c949c24dff4a42b3baa31bfb3e8a3354" target="_blank" rel="noopener noreferrer">
 <img src ="./public/sample-db.png">
</a>

## Features

- **Next.js 14**: The most popular React framework.
- **Notion as a CMS**: Use Notion to manage your waitlist users.
- **Upstash Redis**: Use Upstash Redis to rate limit the number of signups in a given time period.
- **Resend**: Use Resend to send emails to users who sign up.
- **Vercel**: Deploy the app to Vercel with a single click.
- **shadcn/ui**: Use shadcn/ui for building the UI components.

## Why Notion?

Notion is used everywhere nowadays. It's a great tool for managing content and it's free to use. But a lot of people don't know that they can use Notion as a CMS for their websites which stands for Content Management System. This template is a very basic implementation of using Notion as a CMS for a waitlist.

However, You can extend it to use Notion for other types of content as well. Using Notion as a CMS is a great way to manage content without having to build a backend or a database. You can use Notion's API to fetch data from your Notion workspace and display it on your website.

## How to get started?

There are a few things you need to do before you can use this template:

### Notion

Assuming that you have a Notion account and a workspace, you can create a new database in your workspace and add the following columns:

- **Name**: Title
- **Email**: Email

Now you need to get the `SECRET` key for your workspace. You can create an internal integration and get the secret from the [Notion Integrations page](https://www.notion.so/my-integrations). You will need this key to fetch data from your workspace.

Now you need to get the ID of the database you created. You can get it from the URL of the database. It will look something like this:

`https://www.notion.so/{DATABASE_ID}?v={NUMBERS}`

You need to copy the `DATABASE_ID` from the URL.

### Upstash Redis

It's fairly simple to get started with Upstash Redis. You can sign up for a free account and create a new Redis database. You will get a `REST URL` and a `TOKEN` that you can use to interact with the Redis database.

### Resend

You need to sign up for a Resend account if not already. Then you need to add your domain and verify the DNS records. Once you have done that, you can generate an API key from the Resend dashboard which you will need to send emails.

## Building with this template

There are two ways to use this template:

1. **Deploy to Vercel**: Click the button below to deploy this template to Vercel with a single click.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flakshaybhushan%2Fnextjs-notion-waitlist-template&env=NOTION_SECRET,NOTION_DB,RESEND_API_KEY,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN)

The above button will create a new Vercel project and clone this repository into your GitHub account. You will need to provide the following environment variables:

- `NOTION_SECRET`: Your Notion secret key.
- `NOTION_DB`: The ID of the Notion database you want to use.
- `RESEND_API_KEY`: Your Resend API key.
- `UPSTASH_REDIS_REST_URL`: Your Upstash Redis REST URL.
- `UPSTASH_REDIS_REST_TOKEN`: Your Upstash Redis REST token.

2. **Manual Setup**: Fork this repository and clone it to your local machine.

Install the dependencies, this project uses `bun` as a package manager:

```bash
bun install
```

Run the development server:

```bash
bun dev
```

To run the email server:

```bash
bun email
```

Create a `.env.local` file in the root of the project and add the environment variables mentioned above. You can also have a look at the `.env.example` file for reference.

## License

You can use this template for personal or commercial projects. You can modify it as you like.

However, if you use this template for commercial projects, please consider [buying me a coffee](https://www.buymeacoffee.com/lakshaybhushan) or sponsoring me on GitHub. It will help me to keep creating more templates like this.

<a href="https://www.buymeacoffee.com/lakshaybhushan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" width="200"></a>

---

If you have any questions or need help with this template, feel free to reach out to me on [Twitter](https://x.com/blakssh) or leave a comment on this repository.
