import Anthropic from "@anthropic-ai/sdk";
import type { DashboardData, FormInputs } from "@/components/backlink/types";

export const runtime = "nodejs";
export const maxDuration = 60;

const client = new Anthropic();

export async function POST(request: Request) {
  try {
    const inputs: FormInputs = await request.json();

    const prompt = `You are a link-building strategist. Generate a realistic backlink opportunity dashboard for the brand described below.

Brand: ${inputs.brandName}
Website: ${inputs.website}
Description: ${inputs.description}
Target Audience: ${inputs.targetAudience}
Competitors: ${inputs.competitors.join(", ") || "none provided"}
Keywords: ${inputs.keywords.join(", ")}

Generate exactly 8 backlink opportunities as a JSON object matching this TypeScript interface:

interface OpportunityCard {
  id: number;                        // 1-8
  score: "A" | "B";                  // A = high priority, B = worth trying
  type: "listicle" | "alternatives" | "guide";
  title: string;                     // realistic article title
  url: string;                       // plausible URL (use real domains like neilpatel.com, searchengineland.com, etc.)
  domain: string;                    // domain only
  lastUpdated: string;               // e.g. "Mar 2025"
  authorName: string;                // realistic name
  authorLinkedin: string | null;
  contactEmail: string | null;       // use generic contact@ or null
  contactPage: string | null;        // /contact or /write-for-us URL or null
  authorityEstimate: string;         // e.g. "DR 72 · ~8k monthly visitors"
  competitorsMentioned: string[];    // 2-4 competitors from the list that appear in this article
  emailOutreach: string;             // 3-4 sentence personalised email pitch
  dmOutreach: string;                // 2-3 sentence LinkedIn/Twitter DM pitch
  note: string | null;               // optional tip
}

Also generate a DashboardSummary:
interface DashboardSummary {
  totalPages: number;                // 8
  scoreACount: number;
  scoreBCount: number;
  dailySendTarget: string;           // e.g. "2–3 outreach emails per day"
  campaignDays: string;              // e.g. "4–5 days"
  top5Recommendations: { rank: number; domain: string; reason: string }[];
  scheduleByDay: { days: string; domains: string[] }[];
}

Return ONLY valid JSON in this shape: { "summary": {...}, "opportunities": [...] }
No markdown, no explanation, just the JSON object.`;

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    });

    const text =
      message.content[0].type === "text" ? message.content[0].text : "";

    // Strip any accidental markdown fences
    const cleaned = text.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "").trim();
    const data: DashboardData = JSON.parse(cleaned);

    return Response.json(data);
  } catch (err) {
    console.error("Backlink route error:", err);
    return Response.json(
      { error: "Failed to generate dashboard" },
      { status: 500 }
    );
  }
}
