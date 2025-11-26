import { NextResponse } from "next/server";

const PIPEDRIVE_API_BASE = "https://api.pipedrive.com/v1";

// Helper function to get custom fields from Pipedrive
async function getCustomFields(apiToken: string, type: 'lead' | 'person') {
  try {
    const response = await fetch(
      `${PIPEDRIVE_API_BASE}/${type}Fields?api_token=${apiToken}`,
      {
        headers: { "Accept": "application/json" },
      }
    );

    if (!response.ok) return null;

    const data = await response.json();
    const fields: Record<string, string> = {};

    // Map field names to their keys
    data.data?.forEach((field: any) => {
      const name = field.name?.toLowerCase();
      if (name) {
        fields[name] = field.key;
      }
    });

    return fields;
  } catch (error) {
    console.warn(`Failed to fetch ${type} fields:`, error);
    return null;
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const apiToken = process.env.PIPEDRIVE_API_TOKEN;

    if (!apiToken) {
      console.error("PIPEDRIVE_API_TOKEN is not configured in environment variables");
      return NextResponse.json({
        success: false,
        error: "Service configuration error"
      }, { status: 500 });
    }

    const now = new Date();
    const cohortTag = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const roleTag = (body?.role || "Other").toLowerCase().replace(/\s+/g, "-");

    // Fetch custom fields from Pipedrive automatically
    const [personFields, leadFields] = await Promise.all([
      getCustomFields(apiToken, 'person'),
      getCustomFields(apiToken, 'lead'),
    ]);

    // Look for LinkedIn field on Person (try common variations)
    const linkedinFieldKey = personFields?.['linkedin'] ||
                            personFields?.['linkedin profile'] ||
                            personFields?.['linkedin url'];

    // Step 1: Create Person (Contact) in Pipedrive
    const personPayload: any = {
      name: body?.email || "Waitlist Signup",
      email: body?.email ? [body.email] : [],
      visible_to: "3", // Visible to entire company
    };

    // Add LinkedIn as custom field if field key is configured
    if (linkedinFieldKey && body?.linkedin) {
      personPayload[linkedinFieldKey] = body.linkedin;
    }

    const personResponse = await fetch(`${PIPEDRIVE_API_BASE}/persons?api_token=${apiToken}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(personPayload),
    });

    if (!personResponse.ok) {
      const errorData = await personResponse.json();
      console.error("Pipedrive Person API error:", errorData);
      throw new Error(`Failed to create person: ${errorData.error || personResponse.statusText}`);
    }

    const personData = await personResponse.json();
    const personId = personData.data?.id;

    if (!personId) {
      throw new Error("Person created but no ID returned");
    }

    // Step 2: Create Lead linked to Person with custom fields
    const leadTitle = body?.role
      ? `${body.role} - ${body.email}`
      : `Waitlist - ${body.email}`;

    // Look for custom fields on Lead (try common variations)
    const roleFieldKey = leadFields?.['role'] ||
                        leadFields?.['user role'] ||
                        leadFields?.['contact role'];
    const cohortFieldKey = leadFields?.['cohort'] ||
                          leadFields?.['signup cohort'] ||
                          leadFields?.['month'];
    const sourceFieldKey = leadFields?.['source'] ||
                          leadFields?.['lead source'] ||
                          leadFields?.['signup source'];
    const tagsFieldKey = leadFields?.['tags'] ||
                        leadFields?.['labels'];

    const leadPayload: any = {
      title: leadTitle,
      person_id: personId,
      visible_to: "3",
    };

    // Add custom fields if configured
    if (roleFieldKey && body?.role) {
      leadPayload[roleFieldKey] = body.role;
    }
    if (cohortFieldKey) {
      leadPayload[cohortFieldKey] = cohortTag;
    }
    if (sourceFieldKey) {
      leadPayload[sourceFieldKey] = "Landing Page - Social Media Planner";
    }
    if (tagsFieldKey) {
      const tags = [
        "landing-page-waitlist",
        "social-media-planner-beta",
        `role-${roleTag}`,
        body?.linkedin ? "has-linkedin-profile" : null,
      ].filter(Boolean).join(", ");
      leadPayload[tagsFieldKey] = tags;
    }

    const leadResponse = await fetch(`${PIPEDRIVE_API_BASE}/leads?api_token=${apiToken}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(leadPayload),
    });

    if (!leadResponse.ok) {
      const errorData = await leadResponse.json();
      console.error("Pipedrive Lead API error:", errorData);
      throw new Error(`Failed to create lead: ${errorData.error || leadResponse.statusText}`);
    }

    const leadData = await leadResponse.json();
    const leadId = leadData.data?.id;

    if (!leadId) {
      throw new Error("Lead created but no ID returned");
    }

    // Step 3: Add comprehensive note to the lead
    const noteContent = `
📝 Beta Waitlist Signup

**Email:** ${body?.email || "Not provided"}
**Role:** ${body?.role || "Not specified"}
**LinkedIn:** ${body?.linkedin || "Not provided"}
**Source:** Landing Page - Social Media Planner
**Signup Date:** ${now.toISOString()}
**Cohort:** ${cohortTag}

**Tags:** landing-page-waitlist, social-media-planner-beta, role-${roleTag}${body?.linkedin ? ', has-linkedin-profile' : ''}

This lead was automatically created from the Social Media Planner waitlist landing page.
    `.trim();

    const noteResponse = await fetch(`${PIPEDRIVE_API_BASE}/notes?api_token=${apiToken}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        content: noteContent,
        lead_id: leadId,
      }),
    });

    // Note creation is optional, don't fail if it doesn't work
    if (!noteResponse.ok) {
      console.warn("Failed to create note, but continuing:", await noteResponse.text());
    }

    return NextResponse.json({
      success: true,
      person_id: personId,
      lead_id: leadId,
    }, { status: 200 });

  } catch (error) {
    console.error("Pipedrive integration error:", error);

    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({
      success: false,
      error: errorMessage,
    }, { status: 500 });
  }
}
