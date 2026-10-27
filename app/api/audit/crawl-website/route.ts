import { NextRequest, NextResponse } from "next/server";

// ─── HTML → plain text ────────────────────────────────────────────────────────

function stripTags(s: string): string {
  return s.replace(/<[^>]*>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();
}

function extractPageContent(html: string): string {
  const parts: string[] = [];

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (title) parts.push("Title: " + stripTags(title));

  // Meta description — handle attribute order variations
  const desc =
    html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']{0,300})/i)?.[1] ??
    html.match(/<meta[^>]*content=["']([^"']{0,300})["'][^>]*name=["']description["']/i)?.[1];
  if (desc) parts.push("Meta description: " + desc.trim());

  // Meta keywords
  const kw =
    html.match(/<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']{0,300})/i)?.[1] ??
    html.match(/<meta[^>]*content=["']([^"']{0,300})["'][^>]*name=["']keywords["']/i)?.[1];
  if (kw) parts.push("Meta keywords: " + kw.trim());

  // Headings
  const headings = [...html.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)]
    .map((m) => stripTags(m[1]))
    .filter((t) => t.length > 2 && t.length < 150)
    .slice(0, 20);
  if (headings.length) parts.push("Headings: " + headings.join(" | "));

  // Navigation links (often contain service names)
  const navLinks = [...html.matchAll(/<a[^>]*>([\s\S]*?)<\/a>/gi)]
    .map((m) => stripTags(m[1]))
    .filter((t) => t.length > 3 && t.length < 60 && !/^(home|about|contact|blog|gallery|faq|login|sign up|×|›|‹|>>|<<)/i.test(t))
    .slice(0, 20);
  if (navLinks.length) parts.push("Navigation links: " + navLinks.join(", "));

  // Body text (strip scripts/styles/nav/footer/header first)
  const bodyHtml = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "");
  const bodyText = stripTags(bodyHtml).slice(0, 2500);
  if (bodyText) parts.push("Page content: " + bodyText);

  return parts.join("\n").slice(0, 5000);
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: { websiteUrl?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ keywords: [] });
  }

  const raw = body.websiteUrl?.trim();
  if (!raw) return NextResponse.json({ keywords: [] });

  const websiteUrl = raw.startsWith("http") ? raw : `https://${raw}`;

  // Crawl the homepage
  let pageContent = "";
  try {
    const resp = await fetch(websiteUrl, {
      signal: AbortSignal.timeout(6000),
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EpicwareAudit/1.0; +https://epicware.ai)",
        Accept: "text/html,application/xhtml+xml",
      },
    });
    if (resp.ok) {
      const html = await resp.text();
      pageContent = extractPageContent(html);
    }
  } catch {
    return NextResponse.json({ keywords: [] });
  }

  if (!pageContent.trim()) return NextResponse.json({ keywords: [] });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return NextResponse.json({ keywords: [] });

  // Ask Claude Haiku to extract customer-facing search keywords
  try {
    const aiResp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 350,
        messages: [
          {
            role: "user",
            content:
              `You are extracting Google Maps search keywords for a Singapore business. ` +
              `Read the website content below and return 6–8 specific keywords that a Singapore customer would type into Google Maps to find this business.\n\n` +
              `Rules:\n` +
              `- Return ONLY a raw JSON array of lowercase strings — no markdown, no code fences, no explanation\n` +
              `- Each keyword must be 2–5 words\n` +
              `- Include "singapore" where it sounds natural\n` +
              `- Be specific to what this business actually sells or does (e.g. "teeth whitening singapore", "halal bbq catering", "hot yoga classes singapore")\n` +
              `- Do NOT use generic phrases like "best service", "quality products", "professional team"\n\n` +
              `Website content:\n${pageContent}`,
          },
        ],
      }),
    });

    if (!aiResp.ok) return NextResponse.json({ keywords: [] });

    const aiData: { content?: Array<{ text?: string }> } = await aiResp.json();
    const raw = aiData?.content?.[0]?.text?.trim() ?? "";

    // Extract JSON array from response (handle accidental wrapping)
    const jsonMatch = raw.match(/\[[\s\S]*?\]/);
    if (!jsonMatch) return NextResponse.json({ keywords: [] });

    const parsed: unknown = JSON.parse(jsonMatch[0]);
    if (!Array.isArray(parsed)) return NextResponse.json({ keywords: [] });

    const keywords = parsed
      .filter((k): k is string => typeof k === "string")
      .map((k) => k.toLowerCase().trim())
      .filter((k) => k.length > 4 && k.length < 80)
      .slice(0, 8);

    return NextResponse.json({ keywords });
  } catch {
    return NextResponse.json({ keywords: [] });
  }
}
