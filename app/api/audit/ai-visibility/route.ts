import { NextResponse } from "next/server";
import { rateLimitResponse } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const maxDuration = 30;

const OPENROUTER_BASE = "https://openrouter.ai/api/v1";

const LLM_CONFIGS = [
  { id: "chatgpt",    displayName: "ChatGPT",    model: "openai/gpt-4o-mini",                              hasWebSearch: false },
  { id: "claude",     displayName: "Claude",     model: "anthropic/claude-haiku-4-5",                      hasWebSearch: false },
  { id: "gemini",     displayName: "Gemini",     model: "google/gemini-flash-1.5",                         hasWebSearch: false },
  { id: "perplexity", displayName: "Perplexity", model: "perplexity/llama-3.1-sonar-small-128k-online",    hasWebSearch: true  },
  { id: "llama",      displayName: "Llama",      model: "meta-llama/llama-3.1-8b-instruct",                hasWebSearch: false },
  { id: "grok",       displayName: "Grok",       model: "x-ai/grok-3-mini",                                hasWebSearch: false },
];

function buildQuery(keyword: string, neighbourhood: string, _businessName: string): string {
  return `I am looking for the best "${keyword}" options. Can you recommend specific businesses or service providers in Singapore, particularly around ${neighbourhood}? Please list actual business names with brief descriptions of why they are recommended.`;
}

function isBusinessMentioned(
  response: string,
  shortName: string,
  businessName: string
): { found: boolean; excerpt: string } {
  const text = response.toLowerCase();
  const short = shortName.toLowerCase();

  if (text.includes(short)) {
    const idx = text.indexOf(short);
    const start = Math.max(0, idx - 50);
    const end = Math.min(text.length, idx + 100);
    const excerpt = response.slice(start, end).trim();
    return { found: true, excerpt: `...${excerpt}...` };
  }

  const fullName = businessName.toLowerCase();
  if (fullName !== short && text.includes(fullName)) {
    const idx = text.indexOf(fullName);
    const start = Math.max(0, idx - 50);
    const end = Math.min(text.length, idx + 100);
    const excerpt = response.slice(start, end).trim();
    return { found: true, excerpt: `...${excerpt}...` };
  }

  // Significant word match: 2+ words with length > 3
  const words = short.split(" ").filter((w) => w.length > 3);
  const matchCount = words.filter((w) => text.includes(w)).length;
  if (matchCount >= 2 && words.length >= 2) {
    return { found: true, excerpt: "Business mentioned in response" };
  }

  return { found: false, excerpt: "" };
}

async function queryLLM(
  config: (typeof LLM_CONFIGS)[0],
  query: string,
  shortName: string,
  businessName: string,
  apiKey: string
): Promise<{
  id: string;
  displayName: string;
  hasWebSearch: boolean;
  status: "found" | "not_found" | "error";
  excerpt: string;
}> {
  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 15000);

    const res = await fetch(`${OPENROUTER_BASE}/chat/completions`, {
      method: "POST",
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://www.epicware.ai",
        "X-Title": "Epicware Free GBP Audit",
      },
      body: JSON.stringify({
        model: config.model,
        messages: [{ role: "user", content: query }],
        max_tokens: 500,
        temperature: 0.3,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => res.statusText);
      console.error(`[ai-visibility] ${config.id} HTTP ${res.status}:`, errText.slice(0, 200));
      return { id: config.id, displayName: config.displayName, hasWebSearch: config.hasWebSearch, status: "error", excerpt: "" };
    }

    const data = await res.json();
    const text: string = data.choices?.[0]?.message?.content ?? "";

    console.log(`[ai-visibility] ${config.id} response (${text.length} chars):`, text.slice(0, 200));

    const { found, excerpt } = isBusinessMentioned(text, shortName, businessName);
    return {
      id: config.id,
      displayName: config.displayName,
      hasWebSearch: config.hasWebSearch,
      status: found ? "found" : "not_found",
      excerpt,
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`[ai-visibility] ${config.id} error:`, msg);
    return { id: config.id, displayName: config.displayName, hasWebSearch: config.hasWebSearch, status: "error", excerpt: "" };
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  const limited = rateLimitResponse(req, "ai-visibility");
  if (limited) return limited;

  let body: { businessName: string; shortName: string; categoryLabel: string; neighbourhood: string; keywords: string[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body", results: [] });
  }

  const { businessName, shortName, categoryLabel, neighbourhood, keywords } = body;

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error("[ai-visibility] OPENROUTER_API_KEY not configured");
    return NextResponse.json({ error: "OPENROUTER_API_KEY not configured", results: [] });
  }

  const query = buildQuery(keywords[0] ?? categoryLabel, neighbourhood, businessName);

  console.log("[ai-visibility] Query:", query);
  console.log("[ai-visibility] Looking for:", shortName, "| businessName:", businessName);
  console.log("[ai-visibility] Category:", categoryLabel, "| Neighbourhood:", neighbourhood, "| Keywords:", keywords);

  const results = await Promise.all(
    LLM_CONFIGS.map((config) => queryLLM(config, query, shortName, businessName, apiKey))
  );

  console.log("[ai-visibility] Results:", results.map((r) => `${r.id}: ${r.status}`).join(", "));

  return NextResponse.json({ query, results, searchedFor: shortName });
}
