import { NextRequest, NextResponse } from "next/server";

export interface DFSKeyword {
  keyword: string;
  volume: number;
  competition: string; // "LOW" | "MEDIUM" | "HIGH" | "VERY HIGH"
  cpc: number;
}

// ─── Seed derivation ──────────────────────────────────────────────────────────

const TYPE_TO_SEEDS: Record<string, string[]> = {
  restaurant:       ["restaurant singapore", "food delivery singapore", "best restaurant singapore"],
  cafe:             ["cafe singapore", "coffee shop singapore", "brunch singapore"],
  bakery:           ["bakery singapore", "cake shop singapore"],
  bar:              ["bar singapore", "cocktail bar singapore"],
  beauty_salon:     ["beauty salon singapore", "hair salon singapore", "nail salon singapore"],
  hair_care:        ["hair salon singapore", "hair treatment singapore"],
  nail_salon:       ["nail salon singapore", "gel nails singapore"],
  spa:              ["spa singapore", "massage singapore", "facial singapore"],
  gym:              ["gym singapore", "personal trainer singapore", "fitness class singapore"],
  dentist:          ["dental clinic singapore", "dentist singapore", "teeth whitening singapore"],
  doctor:           ["gp clinic singapore", "medical clinic singapore", "walk in clinic singapore"],
  physiotherapist:  ["physiotherapy singapore", "physio clinic singapore", "sports injury singapore"],
  hospital:         ["hospital singapore", "specialist clinic singapore"],
  pharmacy:         ["pharmacy singapore", "medicine delivery singapore"],
  car_repair:       ["car workshop singapore", "car servicing singapore", "car repair singapore"],
  car_dealer:       ["car dealer singapore", "used cars singapore"],
  school:           ["tuition singapore", "tuition centre singapore", "math tuition singapore"],
  tuition_centre:   ["tuition centre singapore", "tuition singapore"],
  marketing_agency: ["seo agency singapore", "digital marketing singapore", "local seo singapore"],
  advertising_agency: ["advertising agency singapore", "marketing agency singapore"],
  accounting:       ["accounting firm singapore", "bookkeeping singapore", "tax filing singapore"],
  florist:          ["florist singapore", "flower delivery singapore", "wedding flowers singapore"],
};

function deriveSeeds(businessName: string, rawTypes: string[]): string[] {
  // 1. Try rawTypes first for precise category match
  for (const t of rawTypes) {
    if (TYPE_TO_SEEDS[t]) return TYPE_TO_SEEDS[t].slice(0, 3);
  }

  // 2. Extract descriptor from business name (part after " - " or " | " is often descriptive)
  const parts = businessName.split(/\s+[-–—|]\s+/);
  const descriptor = (parts.length > 1 ? parts.slice(1).join(" ") : parts[0]).trim();

  const cleaned = descriptor
    .replace(/\b(pte|ltd|sdn|bhd|inc|llc|co|ai|powered|singapore|sg|the|and|of|for)\b/gi, " ")
    .replace(/[^a-z0-9\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  if (cleaned.length > 4) {
    return [
      `${cleaned} singapore`,
      cleaned,
      `${parts[0].toLowerCase()} singapore`,
    ];
  }

  // 3. Last resort: short business name + singapore
  return [`${parts[0].toLowerCase()} singapore`];
}

// ─── Competition normaliser ───────────────────────────────────────────────────

function normaliseCompetition(level: string | null, score: number | null): string {
  if (level) {
    if (level === "LOW") return "LOW";
    if (level === "MEDIUM") return "MEDIUM";
    if (level === "HIGH") return "HIGH";
  }
  if (score !== null) {
    if (score < 0.33) return "LOW";
    if (score < 0.66) return "MEDIUM";
    return "HIGH";
  }
  return "MEDIUM";
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: { businessName?: string; rawTypes?: string[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ keywords: [] });
  }

  const { businessName = "", rawTypes = [] } = body;

  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;
  if (!login || !password) return NextResponse.json({ keywords: [] });

  const seeds = deriveSeeds(businessName, rawTypes);
  const auth = Buffer.from(`${login}:${password}`).toString("base64");

  try {
    const res = await fetch(
      "https://api.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify([
          {
            keywords: seeds,
            location_code: 2702, // Singapore
            language_code: "en",
          },
        ]),
        signal: AbortSignal.timeout(10000),
      }
    );

    if (!res.ok) return NextResponse.json({ keywords: [] });

    const data: {
      tasks?: Array<{
        result?: Array<{
          items?: Array<{
            keyword: string;
            search_volume: number | null;
            competition: number | null;
            competition_level: string | null;
            cpc: number | null;
          }>;
        }>;
      }>;
    } = await res.json();

    const items = data?.tasks?.[0]?.result?.[0]?.items ?? [];

    const keywords: DFSKeyword[] = items
      .filter((item) => (item.search_volume ?? 0) > 10) // filter near-zero volume
      .map((item) => ({
        keyword: item.keyword.toLowerCase(),
        volume: item.search_volume ?? 0,
        competition: normaliseCompetition(item.competition_level, item.competition),
        cpc: item.cpc ?? 0,
      }))
      .sort((a, b) => b.volume - a.volume) // highest volume first
      .slice(0, 10);

    return NextResponse.json({ keywords, seeds });
  } catch {
    return NextResponse.json({ keywords: [] });
  }
}
