import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const notion = new Client({ auth: process.env.NOTION_SECRET });
    const response = await notion.pages.create({
      parent: {
        database_id: `${process.env.NOTION_DB}`,
      },
      properties: {
        Email: {
          email: body?.email,
        },
        Name: {
          title: [
            {
              text: {
                content: body?.name,
              },
            },
          ],
        },
        Timestamp: {
          rich_text: [
            {
              text: {
                content: new Date().toISOString() as string,
              },
            },
          ],
        },
      }
    });

    if (!response) {
      throw new Error("Failed to add email to Notion");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
