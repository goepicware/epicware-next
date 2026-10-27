import { NextResponse } from "next/server";
import { rateLimitResponse } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const maxDuration = 30;

interface RequestBody {
  businessName: string;
  shortName: string;
  address: string;
  neighbourhood: string;
  websiteUrl?: string;
  placeTypes: string[];
  lat: number;
  lng: number;
  reviewCount: number;
  rating?: number;
  reviews?: Array<{ text: string; rating: number }>;
  editorialSummary?: string;
}

interface EnrichedKeyword {
  keyword: string;
  type: "red" | "blue";
  difficulty: "LOW" | "MEDIUM" | "HIGH" | "VERY HIGH";
  estimatedVolume: string;
  clientRank: number;
  topCompetitor: { name: string; address: string; rating: number; reviewCount: number } | null;
  insight: string;
}

const DFS_AUTH = Buffer.from("hello@epicware.ai:cb3c5b5df620cf74").toString("base64");

// ─── Website scrape ──────────────────────────────────────────────────────────

async function scrapeWebsite(url: string): Promise<string> {
  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; EpicwareBot/1.0)" },
    });
    clearTimeout(t);
    if (!res.ok) return "";
    const html = await res.text();

    const parts: string[] = [];

    const titleM = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (titleM) parts.push("Title: " + titleM[1].trim());

    const metaM =
      html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)/i) ??
      html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
    if (metaM) parts.push("Description: " + metaM[1].trim());

    const headings = [...html.matchAll(/<h[123][^>]*>([^<]{3,120})<\/h[123]>/gi)];
    headings.forEach((m) => parts.push("Heading: " + m[1].trim()));

    const priceRx =
      /(\$|SGD|nett|off|treatment|service|offer|package|procedure|price|therapy|facial|massage|trim|cut|colour|menu)/i;
    const pTags = [...html.matchAll(/<(?:p|li)[^>]*>([^<]{10,200})<\/(?:p|li)>/gi)];
    pTags.forEach((m) => {
      if (priceRx.test(m[1])) parts.push(m[1].replace(/\s+/g, " ").trim());
    });

    return parts.join("\n").slice(0, 3000);
  } catch {
    return "";
  }
}

// ─── Claude helper ───────────────────────────────────────────────────────────

async function callClaude(prompt: string, apiKey: string, maxTokens = 300): Promise<string> {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 12000);
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    signal: controller.signal,
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  clearTimeout(t);
  if (!res.ok) {
    const errBody = await res.text().catch(() => res.statusText);
    console.error("[keyword-intel] Claude HTTP", res.status, "—", errBody.slice(0, 300));
    throw new Error(`Claude ${res.status}`);
  }
  const claudeData = await res.json();
  console.log("[keyword-intel] Claude stop reason:", claudeData.stop_reason);
  console.log("[keyword-intel] Claude usage:", claudeData.usage);
  const rawText: string = claudeData.content?.[0]?.text ?? "";
  console.log("[keyword-intel] Claude raw text length:", rawText.length);
  console.log("[keyword-intel] Claude raw text FULL:", rawText);
  const cleaned = rawText
    .replace(/```json\n?/gi, "")
    .replace(/```\n?/gi, "")
    .trim();
  console.log("[keyword-intel] Cleaned text:", cleaned);
  try {
    const parsed = JSON.parse(cleaned);
    console.log("[keyword-intel] Parsed result:", parsed);
    console.log("[keyword-intel] redOcean length:", parsed.redOcean?.length ?? parsed.red?.length ?? "n/a");
    console.log("[keyword-intel] blueOcean length:", parsed.blueOcean?.length ?? parsed.blue?.length ?? "n/a");
    console.log("[keyword-intel] is array:", Array.isArray(parsed), "array length:", Array.isArray(parsed) ? parsed.length : "n/a");
  } catch (e) {
    console.error("[keyword-intel] PARSE ERROR:", e instanceof Error ? e.message : e);
    console.error("[keyword-intel] Failed to parse:", rawText);
  }
  return rawText;
}

function parseJsonArray(text: string): string[] {
  if (!text) return [];
  const cleaned = text
    .replace(/```json\n?/gi, "")
    .replace(/```\n?/gi, "")
    .trim();
  // Direct parse
  try {
    const arr = JSON.parse(cleaned);
    if (Array.isArray(arr)) return arr.filter((x) => typeof x === "string");
  } catch {}
  // Extract first [...] block from text
  const m = cleaned.match(/\[[\s\S]*?\]/);
  if (m) {
    try {
      const arr = JSON.parse(m[0]);
      if (Array.isArray(arr)) return arr.filter((x) => typeof x === "string");
    } catch (e) {
      console.error("[keyword-intel] parseJsonArray bracket-match failed:", e, "text:", m[0].slice(0, 200));
    }
  }
  console.error("[keyword-intel] parseJsonArray: no valid array found in:", cleaned.slice(0, 300));
  return [];
}

// ─── Blue Ocean: Source 1 — website content ──────────────────────────────────

async function claudeBlueOceanFromWebsite(
  businessName: string,
  websiteContent: string,
  apiKey: string
): Promise<string[]> {
  const prompt = `You are a Singapore Local SEO expert analysing a business website.

Business: ${businessName}
Website content:
${websiteContent.slice(0, 2000)}

Extract 3-5 BLUE OCEAN keywords — specific named services, signature offers, techniques, or niche terms this business actually promotes.

Blue Ocean = niche and specific. Each term should:
- Reference actual named treatments, dishes, or services mentioned in the content
- Include "singapore" or a Singapore location
- NOT be a generic category term (avoid "restaurant singapore", "salon singapore")

Good examples: "bojin facial tanjong pagar", "pico laser $59 singapore", "jain vegetarian food singapore", "nano hydra facial novena"

Return ONLY a JSON array of 3-5 strings:
["keyword one singapore", "keyword two singapore", "keyword three singapore"]`;

  try {
    const text = await callClaude(prompt, apiKey, 300);
    const parsed = parseJsonArray(text);
    console.log("[keyword-intel] Blue Ocean (website) parsed:", parsed);
    return parsed.slice(0, 5);
  } catch (e) {
    console.error("[keyword-intel] Blue Ocean website source failed:", e);
    return [];
  }
}

// ─── Blue Ocean: Source 2 — GBP listing data ─────────────────────────────────

async function claudeBlueOceanFromGBP(
  businessName: string,
  placeTypes: string[],
  reviewsSample: string,
  editorialSummary: string,
  apiKey: string
): Promise<string[]> {
  const prompt = `You are a Singapore Local SEO expert.

Generate 3-5 BLUE OCEAN keywords for this business based on its Google Business Profile data.
Blue Ocean = niche and specific terms, NOT broad category terms.

Business: ${businessName}
Google types: ${placeTypes.slice(0, 6).join(", ")}
Editorial summary: ${editorialSummary || "(not available)"}
Customer reviews sample: ${reviewsSample.slice(0, 500) || "(not available)"}

Analyse the data above to infer:
- Specific cuisine, dietary preference, or niche specialties
- Named services or treatments mentioned in reviews
- Location-specific offers or standout features customers praise

Return ONLY a JSON array of 3-5 strings. Include "singapore" in each:
["keyword one singapore", "keyword two singapore", "keyword three singapore"]`;

  try {
    const text = await callClaude(prompt, apiKey, 300);
    const parsed = parseJsonArray(text);
    console.log("[keyword-intel] Blue Ocean (GBP listing) parsed:", parsed);
    return parsed.slice(0, 5);
  } catch (e) {
    console.error("[keyword-intel] Blue Ocean GBP source failed:", e);
    return [];
  }
}

// ─── Blue Ocean: Source 3 — category knowledge fallback ──────────────────────

async function claudeBlueOceanFromCategory(
  businessName: string,
  placeTypes: string[],
  apiKey: string
): Promise<string[]> {
  const prompt = `You are a Singapore Local SEO expert.

Generate 3-5 BLUE OCEAN keyword estimates for this business category.
Blue Ocean = niche subtypes with lower competition than the main category.

Business: ${businessName}
Category signals: ${placeTypes.slice(0, 6).join(", ")}

Generate niche variations common in this category in Singapore — specific service types, dietary styles, treatment names, or occasion-specific terms that a typical business in this category might offer.

Note: These are estimated — we don't have confirmed website data for this business.

Return ONLY a JSON array of 3-5 strings. Include "singapore" in each:
["keyword one singapore", "keyword two singapore", "keyword three singapore"]`;

  try {
    const text = await callClaude(prompt, apiKey, 300);
    const parsed = parseJsonArray(text);
    console.log("[keyword-intel] Blue Ocean (category fallback) parsed:", parsed);
    return parsed.slice(0, 5);
  } catch (e) {
    console.error("[keyword-intel] Blue Ocean category source failed:", e);
    return [];
  }
}

// ─── Blue Ocean orchestrator — 3-source fallback ─────────────────────────────

async function generateBlueOcean(
  businessName: string,
  websiteContent: string,
  placeTypes: string[],
  reviews: Array<{ text: string; rating: number }> | undefined,
  editorialSummary: string | undefined,
  apiKey: string
): Promise<{ keywords: string[]; source: string }> {
  // Source 1: Website (highest quality — confirmed specifics)
  if (websiteContent.length > 200) {
    console.log("[keyword-intel] Blue Ocean: trying Source 1 (website)");
    const result = await claudeBlueOceanFromWebsite(businessName, websiteContent, apiKey);
    if (result.length > 0) return { keywords: result, source: "website" };
    console.log("[keyword-intel] Blue Ocean Source 1 empty — falling back");
  }

  // Source 2: GBP listing data (medium quality — inferred from reviews/summary)
  const reviewText = (reviews ?? [])
    .slice(0, 5)
    .map((r) => r.text)
    .filter(Boolean)
    .join(" ");
  const hasSummary = (editorialSummary ?? "").length > 10;
  if (reviewText.length > 50 || hasSummary) {
    console.log("[keyword-intel] Blue Ocean: trying Source 2 (GBP listing)");
    const result = await claudeBlueOceanFromGBP(
      businessName, placeTypes, reviewText, editorialSummary ?? "", apiKey
    );
    if (result.length > 0) return { keywords: result, source: "gbp_listing" };
    console.log("[keyword-intel] Blue Ocean Source 2 empty — falling back");
  }

  // Source 3: Category knowledge (weakest — pure estimation)
  console.log("[keyword-intel] Blue Ocean: using Source 3 (category fallback)");
  const result = await claudeBlueOceanFromCategory(businessName, placeTypes, apiKey);
  return { keywords: result, source: "estimated" };
}

// ─── Red Ocean keywords (Claude only) ────────────────────────────────────────

async function getRedOceanKeywords(
  businessName: string,
  address: string,
  neighbourhood: string,
  placeTypes: string[],
  apiKey: string
): Promise<string[]> {
  const prompt = `You are a Singapore Local SEO expert.

Business: ${businessName}
Address: ${address}
Neighbourhood: ${neighbourhood || "Singapore"}
Google business types: ${(placeTypes || []).slice(0, 5).join(", ")}

Generate exactly 3 RED OCEAN keywords — broad category terms that many competitors are already fighting to rank for on Google Maps in Singapore.

Rules:
- Each keyword must be a general category search (e.g., "digital marketing agency singapore")
- Each keyword must include "singapore"
- These are the most searched terms in this business category
- NOT business-specific — these are what ANY similar business would want to rank for
- Return ONLY a JSON array of 3 strings, nothing else

Return format: ["broad category term singapore", "another category term singapore", "third category term singapore"]`;

  try {
    const text = await callClaude(prompt, apiKey, 200);
    const parsed = parseJsonArray(text);
    console.log("[keyword-intel] Red Ocean parsed:", parsed);
    return parsed.slice(0, 3);
  } catch (e) {
    console.error("[keyword-intel] Red Ocean Claude call failed:", e);
    return [];
  }
}

// ─── Insight generator ────────────────────────────────────────────────────────

function generateInsight(
  type: "red" | "blue",
  clientRank: number,
  topComp: { name: string; reviewCount: number } | null,
  difficulty: string,
  businessReviewCount: number
): string {
  const compName = topComp?.name ?? "The top competitor";
  const compReviews = topComp?.reviewCount?.toLocaleString() ?? "?";
  if (type === "blue" && clientRank === 0) {
    return `Zero competitors ranking for this term today — this is your fastest win.`;
  }
  if (type === "blue" && clientRank <= 3) {
    return `You already rank #${clientRank} for this term — lock it in before competitors notice.`;
  }
  if (type === "blue") {
    return `You rank #${clientRank} — 2-3 targeted GBP posts using this exact phrase will move you into the top 3.`;
  }
  if (type === "red" && clientRank === 0) {
    return `Not found in top 20. ${compName} leads with ${compReviews} reviews vs your ${businessReviewCount} — not better service, just more SEO runway.`;
  }
  if (type === "red" && clientRank <= 5) {
    return `You rank #${clientRank}. ${compName} leads with ${compReviews} reviews — close enough to overtake in 60 days.`;
  }
  return `${difficulty} competition. ${compName} dominates this category with ${compReviews} reviews.`;
}

// ─── Competitor insight generator ────────────────────────────────────────────

function generateWhyTheyRank(
  comp: { reviewCount: number; rating: number },
  business: { reviewCount: number; rating: number }
): string {
  if (comp.reviewCount > business.reviewCount * 3) {
    return `${comp.reviewCount.toLocaleString()} reviews vs your ${business.reviewCount} — review volume is Google's primary Maps ranking signal.`;
  }
  if (comp.reviewCount > business.reviewCount) {
    return `${comp.reviewCount.toLocaleString()} reviews to your ${business.reviewCount} — a gap closeable with a consistent review generation system.`;
  }
  if (comp.rating > business.rating) {
    return `Higher rating (${comp.rating}★) combined with longer establishment history.`;
  }
  return `Fewer reviews than you but outranking — this is a GBP optimisation gap, not a reputation gap. Fixable within 60 days.`;
}

// ─── DataForSEO Maps ──────────────────────────────────────────────────────────

const GENERIC_TYPES = ["establishment", "point_of_interest", "local_business", "store"];
const CLEANING_TERMS = ["clean", "cleaning", "maid", "laundry", "pest"];
const FOOD_TERMS = ["restaurant", "cafe", "food", "kitchen", "bistro", "bakery", "catering"];
const BEAUTY_TERMS = ["salon", "spa", "nail", "beauty", "hair", "lash", "aesthetic"];

function isCategoryRelevant(
  competitorName: string,
  competitorCategory: string,
  clientTypes: string[]
): boolean {
  const clientPrimary = clientTypes.filter((t) => !GENERIC_TYPES.includes(t));
  const name = competitorName.toLowerCase();
  const cat = competitorCategory.toLowerCase();

  // Marketing / advertising agency client — exclude cleaning, food, beauty
  if (clientPrimary.some((t) => t.includes("marketing") || t.includes("advertising"))) {
    if ([...CLEANING_TERMS, ...FOOD_TERMS, ...BEAUTY_TERMS].some((t) => name.includes(t) || cat.includes(t))) {
      return false;
    }
  }

  // Food / restaurant client — exclude cleaning, beauty
  if (clientPrimary.some((t) => ["restaurant", "food", "cafe", "bar", "bakery", "meal_takeaway", "meal_delivery"].includes(t))) {
    if ([...CLEANING_TERMS, ...BEAUTY_TERMS].some((t) => name.includes(t))) {
      return false;
    }
  }

  // Beauty / wellness client — exclude cleaning, food
  if (clientPrimary.some((t) => ["beauty_salon", "hair_care", "nail_salon", "spa"].includes(t))) {
    if ([...CLEANING_TERMS, ...FOOD_TERMS].some((t) => name.includes(t))) {
      return false;
    }
  }

  return true;
}

function isClientBusiness(itemTitle: string, businessName: string, shortName: string): boolean {
  const title = itemTitle.toLowerCase().trim();
  const name = businessName.toLowerCase().trim();
  const short = shortName.toLowerCase().trim();

  if (title === name || title === short) return true;
  if (title.includes(short) || short.includes(title)) return true;
  if (title.includes(name) || name.includes(title)) return true;

  // Match on first significant word — handles "Georges Hideout @ Seletar" vs "Georges Hideout"
  const firstWord = short.split(" ")[0];
  if (firstWord.length > 3 && title.includes(firstWord)) return true;

  return false;
}

async function getMapsDifficulty(
  keyword: string,
  type: "red" | "blue",
  lat: number,
  lng: number,
  businessName: string,
  shortName: string,
  clientAddress: string,
  businessReviewCount: number,
  clientTypes: string[]
): Promise<EnrichedKeyword> {
  const fallback = (msg = "Live data unavailable."): EnrichedKeyword => ({
    keyword,
    type,
    difficulty: "MEDIUM",
    estimatedVolume: "300+ / mo",
    clientRank: 0,
    topCompetitor: null,
    insight: msg,
  });

  try {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(
      "https://api.dataforseo.com/v3/serp/google/maps/live/advanced",
      {
        method: "POST",
        signal: controller.signal,
        headers: {
          Authorization: `Basic ${DFS_AUTH}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            keyword,
            location_coordinate: `${lat},${lng},2000`,
            language_code: "en",
            location_code: 1023254,
            device: "desktop",
            os: "windows",
          },
        ]),
      }
    );
    clearTimeout(t);

    if (!res.ok) return fallback(`DataForSEO ${res.status}`);
    const data = await res.json();

    const taskResult = data.tasks?.[0]?.result?.[0];
    if (!taskResult) return fallback("No results returned.");

    const itemsCount: number = taskResult.items_count ?? 0;
    const rawItems: Array<{
      type?: string;
      title?: string;
      address?: string;
      category?: string;
      rating?: { value?: number; votes_count?: number };
    }> = taskResult.items ?? [];

    const items = rawItems.filter((it) => it.title);

    // Detect client rank using robust match (handles location suffixes like "@ Seletar")
    const clientIdx = items.findIndex((it) =>
      isClientBusiness(it.title ?? "", businessName, shortName)
    );
    const clientRank = clientIdx === -1 ? 0 : clientIdx + 1;

    // Top competitor: exclude client, low-review noise, wrong-category, and same-building listings
    const clientStreet = clientAddress.split(",")[0].trim().toLowerCase();
    const competitorItems = items
      .filter((it) => !isClientBusiness(it.title ?? "", businessName, shortName))
      .filter((it) => (it.rating?.votes_count ?? 0) >= 5)
      .filter((it) => isCategoryRelevant(it.title ?? "", it.category ?? "", clientTypes))
      .filter((it) => {
        const compStreet = (it.address ?? "").split(",")[0].trim().toLowerCase();
        return compStreet !== clientStreet;
      });

    const topComp = competitorItems[0]
      ? {
          name: competitorItems[0].title!,
          address: competitorItems[0].address ?? "",
          rating: competitorItems[0].rating?.value ?? 0,
          reviewCount: competitorItems[0].rating?.votes_count ?? 0,
        }
      : null;

    const difficulty: "LOW" | "MEDIUM" | "HIGH" | "VERY HIGH" =
      itemsCount >= 100
        ? "VERY HIGH"
        : itemsCount >= 50
        ? "HIGH"
        : itemsCount >= 20
        ? "MEDIUM"
        : "LOW";

    const estimatedVolume =
      difficulty === "VERY HIGH"
        ? "5,000+ / mo"
        : difficulty === "HIGH"
        ? "1,000+ / mo"
        : difficulty === "MEDIUM"
        ? "300+ / mo"
        : "50+ / mo";

    const insight = generateInsight(type, clientRank, topComp, difficulty, businessReviewCount);

    return { keyword, type, difficulty, estimatedVolume, clientRank, topCompetitor: topComp, insight };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return fallback(msg.includes("abort") ? "Request timed out." : "Live data unavailable.");
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: Request): Promise<NextResponse> {
  const limited = rateLimitResponse(req, "keyword-intel");
  if (limited) return limited;

  // Parse body first so diagnostics are available regardless of other failures
  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ redOcean: [], blueOcean: [], error: "Invalid request body" });
  }

  const {
    businessName, shortName, address, neighbourhood,
    websiteUrl, placeTypes, lat, lng, reviewCount,
    rating = 4.0,
    reviews, editorialSummary,
  } = body;

  console.log("[keyword-intel] Input check:", {
    businessName,
    lat,
    lng,
    latType: typeof lat,
    lngType: typeof lng,
    hasLat: !!lat,
    hasLng: !!lng,
    websiteUrl,
    placeTypes,
  });

  if (!lat || !lng || lat === 0 || lng === 0) {
    console.error("[keyword-intel] MISSING COORDINATES — lat:", lat, "lng:", lng);
    return NextResponse.json({
      error: "missing_coordinates",
      fallback: true,
      redOcean: [],
      blueOcean: [],
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ redOcean: [], blueOcean: [], error: "ANTHROPIC_API_KEY not configured" });
  }

  try {
    // Phase 1a: Website scrape + Red Ocean — parallel
    const [websiteContent, redRaw] = await Promise.all([
      websiteUrl ? scrapeWebsite(websiteUrl) : Promise.resolve(""),
      getRedOceanKeywords(businessName, address, neighbourhood, placeTypes, apiKey),
    ]);

    console.log("[keyword-intel] Website scraped:", websiteContent.length, "chars");
    console.log("[keyword-intel] Red Ocean raw:", redRaw);

    // Phase 1b: Blue Ocean — three-source fallback (depends on websiteContent)
    const { keywords: blueRaw, source: blueOceanSource } = await generateBlueOcean(
      businessName, websiteContent, placeTypes, reviews, editorialSummary, apiKey
    );

    console.log("[keyword-intel] Blue Ocean raw:", blueRaw, "source:", blueOceanSource);

    const redKeywords = redRaw.slice(0, 3);
    const blueKeywords = blueRaw.slice(0, 3);

    console.log("[keyword-intel] Red keywords to enrich:", redKeywords);
    console.log("[keyword-intel] Blue keywords to enrich:", blueKeywords);

    const combined: Array<{ keyword: string; type: "red" | "blue" }> = [
      ...redKeywords.map((kw) => ({ keyword: kw, type: "red" as const })),
      ...blueKeywords.map((kw) => ({ keyword: kw, type: "blue" as const })),
    ];

    if (combined.length === 0) {
      console.error("[keyword-intel] No keywords from Claude — both arrays empty");
      return NextResponse.json({ redOcean: [], blueOcean: [], error: "No keywords generated" });
    }

    // Phase 2: DataForSEO Maps for each keyword — parallel
    const enriched = await Promise.all(
      combined.map(({ keyword, type }) =>
        getMapsDifficulty(keyword, type, lat, lng, businessName, shortName, address, reviewCount, placeTypes)
      )
    );

    const enrichedRed = enriched.filter((k) => k.type === "red");
    const enrichedBlue = enriched.filter((k) => k.type === "blue");

    // Extract top 3 unique real competitors from DataForSEO results
    const topCompetitors = enriched
      .filter((kw) => kw.topCompetitor !== null)
      .map((kw) => kw.topCompetitor!)
      .filter((comp, idx, arr) => arr.findIndex((c) => c.name === comp.name) === idx)
      .slice(0, 3)
      .map((comp, i) => ({
        rank: i + 1,
        name: comp.name,
        address: comp.address,
        rating: comp.rating,
        reviewCount: comp.reviewCount,
        whyRanks: generateWhyTheyRank(comp, { reviewCount, rating }),
      }));

    console.log("[keyword-intel] Returning redOcean:", enrichedRed.length, "blueOcean:", enrichedBlue.length, "topCompetitors:", topCompetitors.length);

    return NextResponse.json({
      redOcean: enrichedRed,
      blueOcean: enrichedBlue,
      topCompetitors,
      blueOceanSource,
      websiteCrawled: websiteContent.length > 200,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[keyword-intel] FATAL:", msg);
    return NextResponse.json({ redOcean: [], blueOcean: [], error: msg });
  }
}
