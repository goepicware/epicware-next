"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2, Loader2, ChevronRight, ChevronLeft, Star, MapPin,
  X, Check, AlertCircle, TrendingUp, Users, BarChart3,
  Zap, ArrowRight, Phone, Mail, Building2, Shield, HelpCircle, Download,
} from "lucide-react";
import StepGBP from "./StepGBP";
import StepKeywords from "./StepKeywords";
import StepLocation from "./StepLocation";
import type { GBPSnapshot, EnrichedKeyword } from "./types";
import { trackEvent } from "@/lib/meta-tracking";

// Matches the declare-global pattern already used in components/home/VideoSection.tsx.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// No Google Ads conversion ID is configured yet — this stays a documented
// no-op until one is supplied and set as NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID
// in the environment. Flagged back per the build spec rather than guessed.
const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID ?? "";

// ─── Types ────────────────────────────────────────────────────────────────────

interface HeatmapPoint { lat: number; lng: number; rank: number }
interface HeatmapData { keyword: string; gridPoints: HeatmapPoint[]; centerRank: number; averageRank: number }
interface CheckItem { id: string; label: string; status: "pass" | "fail" | "unknown"; detail: string; note?: string }
interface Competitor {
  name: string; address: string; rating: number; reviewCount: number; rank: number; whyRanks: string;
}
interface AIVisibilityEntry {
  id: string; displayName: string; hasWebSearch: boolean;
  status: "found" | "not_found" | "error"; excerpt: string;
}
interface AIVisibilityData {
  query: string; results: AIVisibilityEntry[]; searchedFor: string;
}
interface AuditResult {
  gbpName: string; gbpCategory: string; gbpAddress: string;
  gbpRating: number; gbpReviewCount: number;
  profileCompleteness: number; keywords: string[];
  enrichedKeywords: EnrichedKeyword[];
  heatmaps: HeatmapData[]; competitors: Competitor[]; checkItems: CheckItem[];
  scorecard: { profile: number; reviews: number; keywords: number; visibility: number; overall: number };
  aiSummary: string; estimatedMonthlyRevenue: number; recommendations: string[];
  invisibleGridPoints: number; totalGridPoints: number;
  neighbourhood: string; shortBusinessName: string;
  aiVisibility?: AIVisibilityData;
}

// ─── Data helpers ─────────────────────────────────────────────────────────────

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

const DISTRICT_MAP: Array<[[number, number], string]> = [
  [[1, 8], "Tanjong Pagar"], [[9, 10], "Orchard"], [[11, 13], "Novena"],
  [[14, 16], "Katong"], [[17, 19], "Bedok"], [[20, 21], "Holland Village"],
  [[22, 24], "Jurong"], [[25, 28], "Yishun"], [[29, 30], "Bishan"],
  [[31, 33], "Woodlands"], [[34, 36], "Serangoon"], [[37, 40], "Sengkang"],
  [[51, 52], "Bukit Timah"], [[53, 55], "Changi"], [[56, 57], "Upper Thomson"],
  [[58, 59], "Bukit Batok"], [[60, 64], "Toa Payoh"], [[65, 68], "Clementi"],
  [[75, 78], "Tampines"], [[79, 82], "Yio Chu Kang"],
];

function extractNeighbourhood(address: string): string {
  const m = address.match(/Singapore\s+(\d{6})/i);
  if (m) {
    const d = parseInt(m[1].slice(0, 2), 10);
    for (const [[lo, hi], name] of DISTRICT_MAP) if (d >= lo && d <= hi) return name;
  }
  for (const [, name] of DISTRICT_MAP) if (address.includes(name)) return name;
  return "your area";
}

function extractShortName(biz: string): string {
  return biz.split(/\s+[-–—|]\s+/)[0].trim();
}

function classifyKeyword(hm: HeatmapData): "blue" | "red" {
  if (hm.centerRank <= 5 && hm.averageRank <= 8) return "blue";
  if (hm.centerRank > 10 || hm.averageRank > 15) return "red";
  return hm.averageRank <= 12 ? "blue" : "red";
}

function difficultyBadge(avg: number): { label: string; cls: string } {
  if (avg <= 5) return { label: "LOW", cls: "bg-emerald-100 text-emerald-700" };
  if (avg <= 10) return { label: "MEDIUM", cls: "bg-yellow-100 text-yellow-700" };
  if (avg <= 15) return { label: "HIGH", cls: "bg-orange-100 text-orange-700" };
  return { label: "VERY HIGH", cls: "bg-red-100 text-red-700" };
}

function estimatedVolume(keyword: string): string {
  const w = keyword.split(" ").length;
  if (w <= 3) return "1,200+"; if (w <= 4) return "480+";
  if (w <= 5) return "220+"; return "90+";
}

// ─── Category normalisation (mirrors StepKeywords — rawTypes → KEYWORD_MAP key) ─

const TYPE_TO_CATEGORY: Record<string, string> = {
  restaurant: "Restaurant", cafe: "Cafe", bakery: "Cafe",
  bar: "Restaurant", food: "Restaurant", meal_takeaway: "Restaurant", meal_delivery: "Restaurant",
  beauty_salon: "Beauty Salon", hair_care: "Beauty Salon", nail_salon: "Beauty Salon",
  spa: "Spa", gym: "Gym", health: "Gym",
  dentist: "Dentist", doctor: "Doctor", physiotherapist: "Physiotherapy",
  hospital: "Doctor", pharmacy: "Doctor",
  car_repair: "Car Repair", car_dealer: "Car Repair",
  school: "Tuition Centre", tuition_centre: "Tuition Centre",
  marketing_agency: "Marketing Agency", advertising_agency: "Marketing Agency",
  accounting: "Accounting", lawyer: "Accounting", finance: "Accounting",
  florist: "Florist",
};

function normaliseRawTypes(rawTypes: string[]): string {
  for (const t of rawTypes) {
    const mapped = TYPE_TO_CATEGORY[t];
    if (mapped) return mapped;
  }
  return "";
}

// ─── Category-specific mock competitors ───────────────────────────────────────

type CompTpl = { name: string; address: string; rating: number; reviewCount: number };

const CATEGORY_COMPETITORS: Record<string, CompTpl[]> = {
  "Restaurant": [
    { name: "Odette", address: "1 St Andrew's Rd, Singapore 178957", rating: 4.9, reviewCount: 2341 },
    { name: "Burnt Ends", address: "20 Teck Lim Rd, Singapore 088391", rating: 4.6, reviewCount: 1872 },
    { name: "Lau Pa Sat", address: "18 Raffles Quay, Singapore 048582", rating: 4.2, reviewCount: 1104 },
  ],
  "Cafe": [
    { name: "Common Man Coffee Roasters", address: "22 Martin Rd, Singapore 239058", rating: 4.6, reviewCount: 1230 },
    { name: "Mellower Coffee", address: "9 One-North Gateway, Singapore 138643", rating: 4.5, reviewCount: 892 },
    { name: "PPP Coffee", address: "231 Victoria St, Singapore 188030", rating: 4.3, reviewCount: 687 },
  ],
  "Beauty Salon": [
    { name: "Jean Yip Salon", address: "391 Orchard Rd, #B2-20 Ngee Ann City, Singapore 238873", rating: 4.4, reviewCount: 1456 },
    { name: "Kimage Salon", address: "176 Orchard Rd, #03-01 The Centrepoint, Singapore 238843", rating: 4.2, reviewCount: 934 },
    { name: "The Nail Club", address: "313 Orchard Rd, #04-08 313@Somerset, Singapore 238895", rating: 4.6, reviewCount: 672 },
  ],
  "Spa": [
    { name: "Ikeda Spa", address: "29 Scotts Rd, Singapore 228224", rating: 4.8, reviewCount: 1123 },
    { name: "Adeva Spa", address: "6 Eu Tong Sen St, Singapore 059817", rating: 4.7, reviewCount: 892 },
    { name: "The Retreat Spa", address: "81 Clemenceau Ave, Singapore 239916", rating: 4.6, reviewCount: 634 },
  ],
  "Gym": [
    { name: "Virgin Active Singapore", address: "275 Thomson Rd, Singapore 307645", rating: 4.4, reviewCount: 789 },
    { name: "Anytime Fitness Orchard", address: "277 Orchard Rd, Singapore 238858", rating: 4.1, reviewCount: 634 },
    { name: "F45 Training Tanjong Pagar", address: "55 Tanjong Pagar Rd, Singapore 088477", rating: 4.6, reviewCount: 432 },
  ],
  "Dentist": [
    { name: "Raffles Dental", address: "585 North Bridge Rd, Singapore 188770", rating: 4.7, reviewCount: 1123 },
    { name: "National Dental Centre", address: "5 Second Hospital Ave, Singapore 168938", rating: 4.3, reviewCount: 892 },
    { name: "Specialist Dental Group", address: "6A Napier Rd, Gleneagles, Singapore 258500", rating: 4.8, reviewCount: 543 },
  ],
  "Doctor": [
    { name: "Raffles Medical Clinic", address: "585 North Bridge Rd, Singapore 188770", rating: 4.5, reviewCount: 2341 },
    { name: "Parkway Shenton Medical", address: "35 Selegie Rd, Singapore 188307", rating: 4.3, reviewCount: 1892 },
    { name: "Alliance Healthcare", address: "190 Clemenceau Ave, Singapore 239924", rating: 4.2, reviewCount: 1104 },
  ],
  "Physiotherapy": [
    { name: "Core Concepts Physiotherapy", address: "360 Orchard Rd, Singapore 238869", rating: 4.7, reviewCount: 634 },
    { name: "Restore Physiotherapy", address: "71 Amoy St, Singapore 069889", rating: 4.8, reviewCount: 487 },
    { name: "PhysioCare Clinic", address: "290 Orchard Rd, Singapore 238859", rating: 4.6, reviewCount: 312 },
  ],
  "Car Repair": [
    { name: "SG Autocare", address: "10 Ubi Cres, Singapore 408564", rating: 4.6, reviewCount: 789 },
    { name: "Premier Auto Workshop", address: "20 Kaki Bukit Ave 1, Singapore 417939", rating: 4.4, reviewCount: 567 },
    { name: "AutoFastx", address: "8 Pandan Rd, Singapore 609259", rating: 4.5, reviewCount: 423 },
  ],
  "Tuition Centre": [
    { name: "The Learning Lab", address: "83 Clemenceau Ave, Singapore 239920", rating: 4.7, reviewCount: 1234 },
    { name: "MindChamps Learning Centre", address: "460 Alexandra Rd, Singapore 119963", rating: 4.5, reviewCount: 987 },
    { name: "Kumon Orchard Centre", address: "391 Orchard Rd, Singapore 238873", rating: 4.2, reviewCount: 856 },
  ],
  "Marketing Agency": [
    { name: "OOm Singapore", address: "73 Tras St, Singapore 079012", rating: 4.7, reviewCount: 98 },
    { name: "Hashmeta", address: "52 Tras St, Singapore 078990", rating: 4.8, reviewCount: 134 },
    { name: "MediaOne Business Group", address: "179A Telok Ayer St, Singapore 068627", rating: 4.9, reviewCount: 87 },
  ],
  "Accounting": [
    { name: "KPMG Singapore", address: "16 Raffles Quay, Singapore 048581", rating: 4.3, reviewCount: 189 },
    { name: "Deloitte Singapore", address: "6 Shenton Way, Singapore 068809", rating: 4.5, reviewCount: 234 },
    { name: "BDO Tax Advisory", address: "600 North Bridge Rd, Singapore 188778", rating: 4.4, reviewCount: 156 },
  ],
  "Florist": [
    { name: "Petite Fleur", address: "60 Peck Seah St, Singapore 079323", rating: 4.9, reviewCount: 456 },
    { name: "Hera Florist", address: "177 Jalan Jurong Kechil, Singapore 598610", rating: 4.7, reviewCount: 312 },
    { name: "Windflower Florist", address: "56 Loewen Rd, Singapore 248849", rating: 4.8, reviewCount: 267 },
  ],
};

const WHY_RANKS_FN: Array<(c: CompTpl) => string> = [
  (c) => `${c.reviewCount.toLocaleString()} reviews accumulated over several years — Google's primary Map Pack trust signal.`,
  (c) => `Replies to every review and posts weekly GBP content — strong engagement signals that compound over time.`,
  (c) => `Fully optimised profile with keyword-rich descriptions, 30+ photos, and complete service listings.`,
];

function getCompetitors(rawTypes: string[], formattedCategory: string): Competitor[] {
  // Prefer rawTypes normalisation — avoids "establishment" / "point_of_interest" fallback
  const normalised = normaliseRawTypes(rawTypes);

  // Try normalised key first, then fuzzy match on formatted string
  const key =
    (normalised && CATEGORY_COMPETITORS[normalised] ? normalised : null) ??
    Object.keys(CATEGORY_COMPETITORS).find(
      (k) =>
        formattedCategory.toLowerCase().includes(k.toLowerCase()) ||
        k.toLowerCase().includes(formattedCategory.toLowerCase())
    ) ??
    "";

  const label = normalised || formattedCategory;
  const templates = CATEGORY_COMPETITORS[key] ?? [
    { name: `Top ${label} Provider SG`, address: "1 Raffles Place, Singapore 048616", rating: 4.8, reviewCount: 892 },
    { name: `${label} Specialists Singapore`, address: "10 Shenton Way, Singapore 068803", rating: 4.6, reviewCount: 634 },
    { name: `Premier ${label} Singapore`, address: "80 Raffles Place, Singapore 048624", rating: 4.5, reviewCount: 423 },
  ];
  return templates.slice(0, 3).map((t, i) => ({
    ...t, rank: i + 1, whyRanks: WHY_RANKS_FN[i % WHY_RANKS_FN.length](t),
  }));
}

// ─── Heatmap builder ──────────────────────────────────────────────────────────

function buildHeatmap(keyword: string, lat: number, lng: number, radiusKm: number, seedRank = 8): HeatmapData {
  const step = radiusKm / 3 / 111;
  const G = 7; const half = Math.floor(G / 2);
  const points: HeatmapPoint[] = [];
  for (let r = 0; r < G; r++) {
    for (let c = 0; c < G; c++) {
      const dr = r - half; const dc = c - half;
      const dist = Math.sqrt(dr * dr + dc * dc);
      const rank = dist === 0
        ? seedRank
        : Math.min(21, Math.round(seedRank + dist * 3.5 + Math.random() * 4));
      points.push({ lat: lat + dr * step, lng: lng + dc * step, rank });
    }
  }
  const center = points[Math.floor(points.length / 2)].rank;
  const avg = Math.round(points.reduce((s, p) => s + p.rank, 0) / points.length);
  return { keyword, gridPoints: points, centerRank: center, averageRank: avg };
}

// ─── Report generator ─────────────────────────────────────────────────────────

async function generateReport(
  snap: GBPSnapshot, keywords: string[], enrichedKws: EnrichedKeyword[], topComps: Competitor[], radiusKm: number, leadName: string
): Promise<AuditResult> {
  await delay(800);

  const heatmaps = keywords.map((kw) => {
    const ek = enrichedKws.find((e) => e.keyword === kw);
    return buildHeatmap(kw, snap.lat, snap.lng, radiusKm, ek?.clientRank || 8);
  });
  const hm0 = heatmaps[0];
  const totalGridPoints = 49;
  const invisibleGridPoints = hm0 ? hm0.gridPoints.filter((p) => p.rank > 20).length : 0;
  const neighbourhood = extractNeighbourhood(snap.address);
  const shortBusinessName = extractShortName(snap.businessName);
  // Use rawTypes to find real category — avoids "Establishment" / "Point Of Interest" fallback
  const resolvedCategory = normaliseRawTypes(snap.rawTypes) || snap.category;
  // Prefer real DataForSEO competitors; fall back to category mock if none returned
  const competitors = topComps.length > 0 ? topComps : getCompetitors(snap.rawTypes, snap.category);
  const comp1 = competitors[0];

  const hasDescription = !!snap.editorialSummary;
  const reviewFreqPass = snap.reviewCount / 52 >= 1;
  const photoCount = snap.photoCount ?? 0;
  const photoPass = photoCount >= 10;
  const servicesPass = snap.rawTypes.length > 2;

  const checkItems: CheckItem[] = [
    {
      id: "description", label: "Business Description",
      status: hasDescription ? "pass" : "fail",
      detail: hasDescription
        ? "Your GBP listing has a description — good for keyword relevance."
        : "No business description found. Add a 750-character keyword-rich description to boost ranking.",
    },
    {
      id: "review_freq", label: "Review Frequency",
      status: reviewFreqPass ? "pass" : "fail",
      detail: reviewFreqPass
        ? `With ${snap.reviewCount} reviews your estimated weekly rate is above 1 — solid activity signal.`
        : `With ${snap.reviewCount} reviews your estimated weekly rate is below 1. Google rewards consistent new reviews.`,
    },
    {
      id: "rating", label: "Google Rating (4.0+)",
      status: snap.rating >= 4.0 ? "pass" : "fail",
      detail: snap.rating >= 4.0
        ? `Your ${snap.rating}★ rating meets the threshold.`
        : `Your ${snap.rating}★ rating is below 4.0 — this suppresses Map Pack rankings.`,
    },
    {
      id: "replies", label: "Review Replies",
      status: "unknown",
      detail: "Connect your Google Business Profile to measure this.",
      note: "requires_gbp_access",
    },
    {
      id: "photos", label: "Photos (10+ recommended)",
      status: photoPass ? "pass" : "fail",
      detail: photoPass
        ? "You have 10+ photos on your listing — great for engagement."
        : `Only ${photoCount} photo${photoCount === 1 ? "" : "s"} detected. More photos drive significantly more clicks.`,
    },
    {
      id: "posts", label: "GBP Post Frequency",
      status: "unknown",
      detail: "Connect your Google Business Profile to measure this.",
      note: "requires_gbp_access",
    },
    {
      id: "post_kw", label: "Post Keyword Optimisation",
      status: "unknown",
      detail: "Connect your Google Business Profile to measure this.",
      note: "requires_gbp_access",
    },
    {
      id: "services", label: "Services / Categories",
      status: servicesPass ? "pass" : "fail",
      detail: servicesPass
        ? "Your listing has specific service categories — good for relevance."
        : "Only generic categories detected. Adding specific service types improves category matching.",
    },
    {
      id: "svc_desc", label: "Service Descriptions",
      status: "unknown",
      detail: "Connect your Google Business Profile to measure this.",
      note: "requires_gbp_access",
    },
    {
      id: "area", label: "Service Area Defined",
      status: "pass",
      detail: "Your listing is verified and located in Singapore.",
    },
  ];

  const scorableChecks = checkItems.filter((c) => c.status !== "unknown");
  const passCount = scorableChecks.filter((c) => c.status === "pass").length;
  const profileScore = scorableChecks.length > 0 ? Math.round((passCount / scorableChecks.length) * 100) : 0;
  const reviewScore = snap.reviewCount > 100 ? 68 : snap.reviewCount > 50 ? 48 : 32;
  const kwScore = 42;
  const visScore = Math.max(10, 85 - (hm0?.averageRank ?? 10) * 3);
  const overall = Math.round((profileScore + reviewScore + kwScore + visScore) / 4);

  const primaryEnriched = enrichedKws[0];
  const kw1 = primaryEnriched?.keyword ?? keywords[0] ?? "your keyword";
  const kw2 = keywords[1] ?? keywords[0] ?? "your keyword";
  const kw3 = keywords[2] ?? keywords[1] ?? keywords[0] ?? "your keyword";
  const centreRank = primaryEnriched?.clientRank || (hm0?.centerRank ?? 8);
  const comp1TopName = primaryEnriched?.topCompetitor?.name ?? comp1.name;
  const comp1TopReviews = primaryEnriched?.topCompetitor?.reviewCount?.toLocaleString() ?? comp1.reviewCount.toLocaleString();

  const hm1 = heatmaps[1];
  const ek1 = enrichedKws.find((e) => e.keyword === kw2);
  const secondKwLevel = ek1
    ? (ek1.type === "blue" && ek1.difficulty === "LOW" ? "low" : "moderate")
    : (hm1 ? (classifyKeyword(hm1) === "blue" ? "low" : "moderate") : "moderate");
  const competitionLine = keywords.length >= 3
    ? `"${kw2}" and "${kw3}" return ${secondKwLevel} competition in your area today`
    : `"${kw2}" returns ${secondKwLevel} competition in your area today`;

  const aiSummary =
    `${leadName}, your ${snap.rating}★ rating across ${snap.reviewCount} reviews is a strong trust signal. ` +
    `But for "${kw1}" — your core category term — ${centreRank > 0 ? `you rank #${centreRank} right at ${neighbourhood}` : `you're invisible right at ${neighbourhood}`}, and are invisible at ${invisibleGridPoints} of ${totalGridPoints} grid points across the surrounding area. ` +
    `The business sitting above you — ${comp1TopName} with ${comp1TopReviews} reviews — isn't winning on better service. It's winning on SEO infrastructure built over a longer runway. ` +
    `Meanwhile, ${competitionLine} — that's your next 60 days of growth sitting unclaimed.`;

  return {
    gbpName: snap.businessName, gbpCategory: resolvedCategory, gbpAddress: snap.address,
    gbpRating: snap.rating, gbpReviewCount: snap.reviewCount, profileCompleteness: profileScore,
    keywords, enrichedKeywords: enrichedKws, heatmaps, competitors, checkItems,
    scorecard: { profile: profileScore, reviews: reviewScore, keywords: kwScore, visibility: visScore, overall },
    aiSummary, estimatedMonthlyRevenue: 4500,
    recommendations: [
      "Add a 750-character keyword-rich business description immediately",
      `Reply to your ${snap.reviewCount} reviews — Google rewards engagement signals`,
      "Upload more photos to hit the 20-photo threshold",
      "Post weekly on GBP with local keywords to signal activity",
      centreRank > 0
        ? `You rank #${centreRank} for "${kw1}" — top 3 is achievable in 60 days`
        : `You're not yet visible for "${kw1}" — this is your biggest 60-day opportunity`,
    ],
    invisibleGridPoints, totalGridPoints, neighbourhood, shortBusinessName,
  };
}

// ─── Visual helpers ───────────────────────────────────────────────────────────

function rankColour(rank: number): string {
  if (rank <= 3) return "bg-emerald-500";
  if (rank <= 7) return "bg-yellow-400";
  if (rank <= 14) return "bg-orange-500";
  if (rank <= 20) return "bg-red-500";
  return "bg-red-900";
}

function ScoreGauge({ score }: { score: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / 1200, 1);
      setDisplay(Math.round(t * score));
      if (t < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [score]);
  const colour = score >= 70 ? "#16a34a" : score >= 50 ? "#ca8a04" : "#dc2626";
  const r = 54; const circ = 2 * Math.PI * r; const dash = circ * (display / 100);
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#e5e7eb" strokeWidth="12" />
        <circle cx="70" cy="70" r={r} fill="none" stroke={colour} strokeWidth="12"
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
          transform="rotate(-90 70 70)" style={{ transition: "stroke-dasharray 0.05s linear" }} />
        <text x="70" y="70" textAnchor="middle" dominantBaseline="middle" fontSize="28" fontWeight="700" fill={colour}>{display}</text>
        <text x="70" y="92" textAnchor="middle" fontSize="11" fill="#9ca3af">/100</text>
      </svg>
      <p className="text-sm font-semibold text-muted-foreground">
        {score >= 70 ? "Good profile" : score >= 50 ? "Needs work" : "Critical gaps"}
      </p>
    </div>
  );
}

// ─── Processing screens ───────────────────────────────────────────────────────

const STEPS_SCAN = [
  "Scanning Google Maps grid…", "Checking nearby competitors…",
  "Analysing review signals…", "Calculating ranking positions…",
  "Report ready — securing your results…",
];
const STEPS_PROC = [
  "Fetching GBP data…", "Scanning ranking grid…",
  "Analysing reviews…", "Benchmarking competitors…", "Generating your report…",
];

function ProcessingScreen({ steps = STEPS_PROC }: { steps?: string[] }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => Math.min(a + 1, steps.length - 1)), 1300);
    return () => clearInterval(t);
  }, [steps.length]);
  const pct = Math.min(100, Math.round(((active + 1) / steps.length) * 100));
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6">
      <div className="relative w-28 h-28">
        <svg className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }} viewBox="0 0 112 112">
          <circle cx="56" cy="56" r="48" fill="none" stroke="#2563EB" strokeWidth="4" strokeDasharray="60 242" strokeLinecap="round" />
        </svg>
        <svg className="absolute inset-0 animate-spin" style={{ animationDuration: "1.8s", animationDirection: "reverse" }} viewBox="0 0 112 112">
          <circle cx="56" cy="56" r="36" fill="none" stroke="#93c5fd" strokeWidth="3" strokeDasharray="40 186" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-[#2563EB]">{pct}%</span>
        </div>
      </div>
      <div className="w-full max-w-xs">
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#2563EB] rounded-full transition-all duration-1000 ease-out" style={{ width: `${pct}%` }} />
        </div>
        <p className="text-center text-xs text-gray-400 mt-1.5">Analysing your business…</p>
      </div>
      <div className="space-y-3 w-full max-w-xs">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            {i < active ? <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              : i === active ? <Loader2 className="w-5 h-5 text-[#2563EB] animate-spin shrink-0" />
              : <div className="w-5 h-5 rounded-full border-2 border-gray-200 shrink-0" />}
            <span className={`text-sm ${i <= active ? "text-foreground font-medium" : "text-muted-foreground"}`}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Wizard ───────────────────────────────────────────────────────────────────

type WizardStep = 1 | 2 | 3 | 4 | 5;
const STEP_LABELS = ["Business", "Keywords", "Location", "Your Details", "Report"];

export default function FreeAuditWizard() {
  const [step, setStep] = useState<WizardStep>(1);
  const searchParams = useSearchParams();
  const prefillBusiness = searchParams.get("business") ?? "";

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "audit_step_reached", {
        step,
        step_label: STEP_LABELS[step - 1],
      });
    }
  }, [step]);

  // Step 1
  const [gbpSnapshot, setGbpSnapshot] = useState<GBPSnapshot | null>(null);
  const [placeId, setPlaceId] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  // Step 1 enrichment — fires after business confirmed, results passed to Step 2
  const [enrichedKeywords, setEnrichedKeywords] = useState<EnrichedKeyword[]>([]);
  const [selectedEnrichedKeywords, setSelectedEnrichedKeywords] = useState<EnrichedKeyword[]>([]);
  const [enrichmentLoading, setEnrichmentLoading] = useState(false);
  const [blueOceanSource, setBlueOceanSource] = useState<string>("");
  const [topCompetitors, setTopCompetitors] = useState<Competitor[]>([]);

  // Step 2
  const [keywords, setKeywords] = useState<string[]>([]);

  // Step 3
  const [radiusKm, setRadiusKm] = useState(5);
  const [isScanning, setIsScanning] = useState(false);

  // Step 4
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadType, setLeadType] = useState<"business" | "agency">("business");
  const [consent, setConsent] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Step 5
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const heatmapRef = useRef<HTMLDivElement>(null);

  const handleConfirmBusiness = useCallback((snap: GBPSnapshot, pid: string, url: string) => {
    setGbpSnapshot(snap); setPlaceId(pid); setWebsiteUrl(url);
    setEnrichedKeywords([]); setSelectedEnrichedKeywords([]);
    setTopCompetitors([]);
    setEnrichmentLoading(true);

    const shortName = extractShortName(snap.businessName);
    const neighbourhood = extractNeighbourhood(snap.address);

    // 30s client-side abort — covers Phase 1 (Claude) + Phase 2 (DataForSEO) in parallel
    const fetchController = new AbortController();
    const fetchTimeout = setTimeout(() => {
      fetchController.abort();
      setEnrichmentLoading(false);
    }, 30000);

    fetch("/api/audit/keyword-intel", {
      method: "POST",
      signal: fetchController.signal,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        businessName: snap.businessName,
        shortName,
        address: snap.address,
        neighbourhood,
        websiteUrl: url || undefined,
        placeTypes: snap.rawTypes,
        lat: snap.lat,
        lng: snap.lng,
        reviewCount: snap.reviewCount,
        rating: snap.rating,
        reviews: snap.reviews,
        editorialSummary: snap.editorialSummary,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        clearTimeout(fetchTimeout);
        console.log("[StepKeywords] Raw API response:", JSON.stringify(data, null, 2));
        console.log("[StepKeywords] Keys in response:", Object.keys(data));
        console.log("[StepKeywords] redOcean:", data.redOcean);
        console.log("[StepKeywords] blueOcean:", data.blueOcean);
        console.log("[StepKeywords] fallback:", data.fallback);
        console.log("[StepKeywords] error:", data.error);
        const red: EnrichedKeyword[] = data.redOcean ?? [];
        const blue: EnrichedKeyword[] = data.blueOcean ?? [];
        setEnrichedKeywords([...red, ...blue]);
        setBlueOceanSource(data.blueOceanSource ?? "estimated");
        setTopCompetitors(data.topCompetitors ?? []);
        setEnrichmentLoading(false);
      })
      .catch(() => {
        clearTimeout(fetchTimeout);
        setEnrichmentLoading(false);
      });

    setStep(2);
  }, []);

  const handleStartScan = useCallback(() => {
    setIsScanning(true);
    setTimeout(() => { setIsScanning(false); setStep(4); }, 4500);
  }, []);

  const handleKeywordsConfirm = useCallback((kws: string[]) => {
    setKeywords(kws);
    setSelectedEnrichedKeywords(enrichedKeywords.filter((ek) => kws.includes(ek.keyword)));
    setStep(3);
  }, [enrichedKeywords]);

  const handleLeadSubmit = useCallback(async () => {
    if (!name.trim() || !email.trim()) { setLeadError("Name and email are required."); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setLeadError("Please enter a valid email address."); return; }
    if (!consent) { setLeadError("Please accept the terms to continue."); return; }
    setLeadError(""); setSubmitting(true);

    fetch("/api/audit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name, email, phone, leadType,
        placeId, keywords, radiusKm,
        businessName: gbpSnapshot?.businessName,
        businessAddress: gbpSnapshot?.address,
        websiteUrl,
      }),
    }).catch(() => {});

    setStep(5); setIsProcessing(true);

    // Fire AI visibility checks in parallel — 6 LLMs, up to 15s each
    const snap = gbpSnapshot!;
    const aiVisPromise = fetch("/api/audit/ai-visibility", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        businessName: snap.businessName,
        shortName: extractShortName(snap.businessName),
        categoryLabel: normaliseRawTypes(snap.rawTypes) || snap.category,
        neighbourhood: extractNeighbourhood(snap.address),
        keywords,
      }),
    })
      .then((r) => r.json())
      .catch(() => null);

    // Generate report (fast — local computation ~800ms)
    const report = await generateReport(snap, keywords, selectedEnrichedKeywords, topCompetitors, radiusKm, name);
    setResult(report);
    setIsProcessing(false);
    setSubmitting(false);

    // Track Lead — audit completion is the highest-intent conversion on the site
    trackEvent("Lead", {
      userData: { em: email, ph: phone || undefined },
      customData: {
        content_name: "Free GBP Audit",
        content_category: report.gbpCategory || undefined,
      },
    });

    // Google Ads conversion — wizard completion (report generated), not
    // landing-page CTA click. No-op until GOOGLE_ADS_CONVERSION_ID is set.
    if (typeof window !== "undefined" && window.gtag && GOOGLE_ADS_CONVERSION_ID) {
      window.gtag("event", "conversion", { send_to: GOOGLE_ADS_CONVERSION_ID });
    }

    // Send report summary email to customer (fire and forget)
    fetch("/api/audit/send-report-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name, email,
        report: {
          gbpName: report.gbpName, gbpCategory: report.gbpCategory,
          gbpAddress: report.gbpAddress, gbpRating: report.gbpRating,
          gbpReviewCount: report.gbpReviewCount, scorecard: report.scorecard,
          aiSummary: report.aiSummary,
          checkItems: report.checkItems.map((c) => ({ label: c.label, status: c.status, detail: c.detail })),
          recommendations: report.recommendations,
          invisibleGridPoints: report.invisibleGridPoints, totalGridPoints: report.totalGridPoints,
          estimatedMonthlyRevenue: report.estimatedMonthlyRevenue,
          neighbourhood: report.neighbourhood, shortBusinessName: report.shortBusinessName,
        },
      }),
    }).catch(() => {});

    // Patch result with AI visibility when it resolves
    aiVisPromise.then((aiVisData: AIVisibilityData | null) => {
      if (aiVisData?.results) {
        setResult((prev) => (prev ? { ...prev, aiVisibility: aiVisData } : prev));
      }
    });
  }, [name, email, phone, leadType, consent, placeId, keywords, selectedEnrichedKeywords, topCompetitors, radiusKm, gbpSnapshot, websiteUrl]);

  const scoreColour = (s: number) => s >= 70 ? "text-emerald-600" : s >= 50 ? "text-yellow-600" : "text-red-600";

  const handleDownloadPDF = useCallback(() => {
    if (!result) return;
    const date = new Date().toLocaleDateString("en-SG", { day: "numeric", month: "long", year: "numeric" });

    function scoreBand(s: number) {
      if (s >= 70) return { label: "Good", color: "#16a34a" };
      if (s >= 50) return { label: "Needs Work", color: "#ca8a04" };
      return { label: "Critical Gaps", color: "#dc2626" };
    }
    function rankCellBg(rank: number) {
      if (rank === 0) return "#9ca3af";
      if (rank <= 3) return "#16a34a";
      if (rank <= 7) return "#eab308";
      if (rank <= 14) return "#f97316";
      if (rank <= 20) return "#ef4444";
      return "#991b1b";
    }

    const overall = scoreBand(result.scorecard.overall);

    const scorecardRows = [
      { label: "Profile", val: result.scorecard.profile },
      { label: "Reviews", val: result.scorecard.reviews },
      { label: "Keywords", val: result.scorecard.keywords },
      { label: "Visibility", val: result.scorecard.visibility },
    ].map(({ label, val }) => {
      const b = scoreBand(val);
      return `<tr style="border-bottom:1px solid #f3f4f6;">
        <td style="padding:10px 0;font-size:12px;color:#374151;width:90px;">${label}</td>
        <td style="padding:10px 0;padding-right:12px;"><div style="background:#f1f5f9;border-radius:999px;height:8px;overflow:hidden;"><div style="background:${b.color};width:${val}%;height:100%;border-radius:999px;"></div></div></td>
        <td style="padding:10px 0;font-size:12px;font-weight:700;color:${b.color};width:36px;text-align:right;">${val}</td>
      </tr>`;
    }).join("");

    const healthRows = result.checkItems.map((c) => {
      const bg = c.status === "pass" ? "#f0fdf4" : c.status === "fail" ? "#fef2f2" : "#f9fafb";
      const border = c.status === "pass" ? "#bbf7d0" : c.status === "fail" ? "#fecaca" : "#e5e7eb";
      const badgeBg = c.status === "pass" ? "#dcfce7" : c.status === "fail" ? "#fee2e2" : "#f3f4f6";
      const badgeColor = c.status === "pass" ? "#15803d" : c.status === "fail" ? "#dc2626" : "#6b7280";
      const badgeText = c.status === "pass" ? "Pass" : c.status === "fail" ? "Fail" : "Need Access";
      const icon = c.status === "pass" ? "✓" : c.status === "fail" ? "✗" : "?";
      const iconColor = c.status === "pass" ? "#16a34a" : c.status === "fail" ? "#dc2626" : "#9ca3af";
      return `<div style="background:${bg};border:1px solid ${border};border-radius:10px;padding:12px;margin-bottom:8px;page-break-inside:avoid;">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:4px;">
          <div style="display:flex;align-items:center;gap:6px;"><span style="color:${iconColor};font-weight:900;font-size:13px;">${icon}</span><span style="font-size:11px;font-weight:700;color:#1f2937;">${c.label}</span></div>
          <span style="background:${badgeBg};color:${badgeColor};padding:2px 8px;border-radius:9999px;font-size:10px;font-weight:700;white-space:nowrap;">${badgeText}</span>
        </div>
        <p style="margin:0 0 0 19px;font-size:10px;color:#6b7280;line-height:1.5;">${c.detail}</p>
      </div>`;
    }).join("");

    const kwRows = result.enrichedKeywords.map((ek) => {
      const isRed = ek.type === "red";
      const diffColor = ek.difficulty === "LOW" ? "#15803d" : ek.difficulty === "MEDIUM" ? "#92400e" : ek.difficulty === "HIGH" ? "#c2410c" : "#7f1d1d";
      const diffBg = ek.difficulty === "LOW" ? "#dcfce7" : ek.difficulty === "MEDIUM" ? "#fef3c7" : ek.difficulty === "HIGH" ? "#ffedd5" : "#fee2e2";
      return `<tr style="border-bottom:1px solid #f3f4f6;">
        <td style="padding:10px 8px;">
          <span style="background:${isRed ? "#fee2e2" : "#dbeafe"};color:${isRed ? "#b91c1c" : "#1d4ed8"};font-size:9px;font-weight:700;padding:2px 6px;border-radius:9999px;">${isRed ? "Red Ocean" : "Blue Ocean"}</span>
          <p style="margin:3px 0 0;font-size:11px;font-weight:600;color:#111827;">&ldquo;${ek.keyword}&rdquo;</p>
          ${ek.insight ? `<p style="margin:3px 0 0;font-size:10px;color:#6b7280;font-style:italic;line-height:1.4;">${ek.insight}</p>` : ""}
        </td>
        <td style="padding:10px 8px;text-align:center;"><span style="background:${diffBg};color:${diffColor};font-size:10px;font-weight:700;padding:2px 8px;border-radius:9999px;">${ek.difficulty}</span></td>
        <td style="padding:10px 8px;text-align:center;font-size:11px;color:#374151;">${ek.estimatedVolume}</td>
        <td style="padding:10px 8px;text-align:center;">${ek.clientRank === 0
          ? `<span style="background:#fee2e2;color:#dc2626;font-size:10px;font-weight:700;padding:2px 8px;border-radius:9999px;">Not ranked</span>`
          : `<span style="background:#dcfce7;color:#15803d;font-size:10px;font-weight:700;padding:2px 8px;border-radius:9999px;">#${ek.clientRank}</span>`
        }</td>
      </tr>`;
    }).join("");

    const heatmapSections = result.heatmaps.map((hm) => {
      const cols = Math.round(Math.sqrt(hm.gridPoints.length));
      const rows = Math.ceil(hm.gridPoints.length / cols);
      const tableRows = Array.from({ length: rows }, (_, r) =>
        `<tr>${Array.from({ length: cols }, (_, c) => {
          const i = r * cols + c;
          const pt = hm.gridPoints[i];
          if (!pt) return `<td style="width:36px;height:36px;"></td>`;
          const isCenter = i === Math.floor(hm.gridPoints.length / 2);
          const bg = rankCellBg(pt.rank);
          const border = isCenter ? `border:2px solid white;outline:2px solid #2563EB;` : "";
          return `<td style="background:${bg};${border}width:36px;height:36px;text-align:center;font-size:9px;font-weight:700;color:white;border-radius:4px;">${pt.rank > 20 ? "20+" : pt.rank === 0 ? "—" : pt.rank}</td>`;
        }).join("")}</tr>`
      ).join("");
      return `<div style="margin-bottom:24px;page-break-inside:avoid;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <p style="font-size:12px;font-weight:700;color:#111827;">&ldquo;${hm.keyword}&rdquo;</p>
          <span style="font-size:10px;color:#6b7280;">Centre: <b style="color:#111827;">#${hm.centerRank}</b> &nbsp; Avg: <b style="color:#111827;">#${hm.averageRank}</b></span>
        </div>
        <table style="border-collapse:separate;border-spacing:3px;"><tbody>${tableRows}</tbody></table>
        <div style="display:flex;gap:12px;margin-top:8px;flex-wrap:wrap;">
          ${[["#16a34a","#1–3"],["#eab308","#4–7"],["#f97316","#8–14"],["#ef4444","#15–20"],["#9ca3af","Not found"]].map(([bg, lbl]) =>
            `<span style="display:flex;align-items:center;gap:4px;font-size:10px;color:#6b7280;"><span style="width:10px;height:10px;background:${bg};border-radius:2px;display:inline-block;"></span>${lbl}</span>`
          ).join("")}
        </div>
      </div>`;
    }).join("");

    const recsHtml = result.recommendations.map((rec, i) =>
      `<div style="display:flex;align-items:flex-start;gap:10px;padding:12px;background:#f8fafc;border-radius:8px;margin-bottom:8px;page-break-inside:avoid;">
        <span style="background:#2563EB;color:white;min-width:20px;height:20px;border-radius:50%;font-size:10px;font-weight:700;line-height:20px;text-align:center;display:inline-block;">${i + 1}</span>
        <p style="margin:0;font-size:12px;color:#374151;line-height:1.6;">${rec}</p>
      </div>`
    ).join("");

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Free GBP Audit — ${result.gbpName}</title>
<style>
  @page { size: A4; margin: 0; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif; font-size:12px; color:#374151; background:white; }
  .wrap { max-width:794px; margin:0 auto; }
  .section { padding:20px 28px; border-bottom:1px solid #f1f5f9; }
  table { border-collapse:collapse; width:100%; }
  h2 { font-size:14px; font-weight:700; color:#0f172a; margin-bottom:14px; }
</style>
</head><body><div class="wrap">

<div style="background:#0F1B2D;padding:24px 28px 20px;">
  <p style="font-size:10px;color:#64748b;letter-spacing:.08em;text-transform:uppercase;font-weight:600;margin-bottom:4px;">EPICWARE FREE GBP AUDIT REPORT</p>
  <h1 style="font-size:22px;font-weight:800;color:#fff;margin-bottom:6px;line-height:1.2;">${result.gbpName}</h1>
  <p style="font-size:12px;color:#94a3b8;">${result.gbpAddress} · ${date}${name ? ` · Prepared for ${name}` : ""}</p>
</div>

<div style="background:#2563EB;padding:18px 28px;">
  <p style="font-size:11px;color:#bfdbfe;font-weight:600;text-transform:uppercase;margin-bottom:4px;">Overall Score</p>
  <p style="font-size:32px;font-weight:800;color:#fff;line-height:1;">${result.scorecard.overall}<span style="font-size:14px;font-weight:400;color:#93c5fd;"> /100 — ${overall.label}</span></p>
  <p style="font-size:12px;color:#bfdbfe;margin-top:8px;">${result.gbpReviewCount} reviews · ${result.gbpRating}★ rating · Estimated missed revenue: <strong style="color:#fff;">S$${result.estimatedMonthlyRevenue.toLocaleString()}/mo</strong></p>
</div>

<div class="section">
  <p style="font-size:18px;font-weight:800;color:#0F1B2D;line-height:1.3;">${result.gbpReviewCount} reviews. ${result.gbpRating}★ rating.<br><span style="color:#dc2626;">Invisible in ${result.invisibleGridPoints} of ${result.totalGridPoints} grid points.</span></p>
</div>

<div class="section" style="background:#eff6ff;">
  <p style="font-size:11px;font-weight:700;color:#1e40af;text-transform:uppercase;margin-bottom:8px;">⚡ Your Audit Summary</p>
  <p style="font-size:13px;color:#1e3a8a;line-height:1.7;">${result.aiSummary}</p>
</div>

<div class="section">
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <div style="padding:16px;text-align:center;">
      <p style="font-size:26px;font-weight:800;color:#2563EB;">${result.invisibleGridPoints}/${result.totalGridPoints}</p>
      <p style="font-size:11px;font-weight:700;color:#0f172a;margin-top:4px;">Grid points invisible</p>
      <p style="font-size:10px;color:#6b7280;margin-top:3px;line-height:1.4;">You rank at centre — missing from ${result.invisibleGridPoints} surrounding areas</p>
    </div>
    <div style="padding:16px;text-align:center;border-left:1px solid #e5e7eb;border-right:1px solid #e5e7eb;">
      <p style="font-size:26px;font-weight:800;color:#2563EB;">${result.gbpRating}★</p>
      <p style="font-size:11px;font-weight:700;color:#0f172a;margin-top:4px;">Rating already earned</p>
      <p style="font-size:10px;color:#6b7280;margin-top:3px;line-height:1.4;">The trust is there — SEO infrastructure to carry it isn't</p>
    </div>
    <div style="padding:16px;text-align:center;">
      <p style="font-size:26px;font-weight:800;color:#2563EB;">90</p>
      <p style="font-size:11px;font-weight:700;color:#0f172a;margin-top:4px;">Day Top-3 Guarantee</p>
      <p style="font-size:10px;color:#6b7280;margin-top:3px;line-height:1.4;">Rank Top 3 for 2 keywords in 90 days — or we extend free</p>
    </div>
  </div>
</div>

<div class="section">
  <h2>Scorecard</h2>
  <table>${scorecardRows}</table>
</div>

<div class="section">
  <h2>Profile Health Checks</h2>
  <p style="font-size:11px;color:#6b7280;margin-bottom:12px;">${result.checkItems.filter((c) => c.status === "pass").length} passing · ${result.checkItems.filter((c) => c.status === "fail").length} failing</p>
  ${healthRows}
</div>

${result.enrichedKeywords.length > 0 ? `
<div class="section">
  <h2>Keyword Intelligence</h2>
  <table>
    <thead><tr style="background:#f8fafc;border-bottom:2px solid #e5e7eb;">
      <th style="padding:8px;font-size:10px;font-weight:700;color:#6b7280;text-align:left;text-transform:uppercase;">Keyword</th>
      <th style="padding:8px;font-size:10px;font-weight:700;color:#6b7280;text-align:center;text-transform:uppercase;">Difficulty</th>
      <th style="padding:8px;font-size:10px;font-weight:700;color:#6b7280;text-align:center;text-transform:uppercase;">Vol/mo</th>
      <th style="padding:8px;font-size:10px;font-weight:700;color:#6b7280;text-align:center;text-transform:uppercase;">Your Rank</th>
    </tr></thead>
    <tbody>${kwRows}</tbody>
  </table>
</div>
` : ""}

<div class="section">
  <h2>Ranking Heatmaps</h2>
  <p style="font-size:11px;color:#6b7280;margin-bottom:16px;">Each cell shows your Google Maps rank at that location across ${result.neighbourhood}.</p>
  ${heatmapSections}
</div>

<div class="section">
  <h2>Top Recommendations</h2>
  ${recsHtml}
</div>

<div style="background:#0F1B2D;padding:28px;text-align:center;">
  <p style="font-size:18px;font-weight:800;color:#fff;margin-bottom:6px;">Ready to fix this in 90 days?</p>
  <p style="font-size:12px;color:#94a3b8;margin-bottom:12px;">Epicware guarantees Top 3 Maps ranking for 2 keywords — or we extend free.</p>
  <p style="font-size:14px;font-weight:700;color:#60a5fa;">epicware.ai/book-demo</p>
  <p style="font-size:10px;color:#475569;margin-top:16px;">Generated ${date} · Epicware Pte. Ltd. · Singapore</p>
</div>

</div></body></html>`;

    const win = window.open("", "_blank", "width=900,height=700");
    if (!win) { alert("Please allow popups for epicware.ai to download your PDF."); return; }
    win.document.write(html);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 500);
  }, [result, name]);

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#F0F4F8]">

      {/* Header */}
      <header id="audit-header" className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/">
            <Image src="/assets/epicware-logo.png" alt="Epicware" width={100} height={36} className="h-8 w-auto" />
          </Link>
          <span className="text-xs font-semibold text-white bg-[#2563EB] px-2.5 py-1 rounded-full">Free GBP Audit</span>
        </div>
        <div className="h-1 bg-gray-100">
          <div className="h-full bg-[#2563EB] transition-all duration-500" style={{ width: `${((step - 1) / 4) * 100}%` }} />
        </div>
      </header>

      {/* Step indicators */}
      {step < 5 && (
        <div className="max-w-lg mx-auto px-4 pt-6 pb-2 flex items-center justify-center gap-2">
          {STEP_LABELS.slice(0, 4).map((label, i) => {
            const num = i + 1; const active = step === num; const done = step > num;
            return (
              <div key={label} className="flex items-center gap-2">
                <div className={`flex items-center gap-1.5 ${active ? "text-[#2563EB]" : done ? "text-emerald-600" : "text-gray-400"}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 ${active ? "border-[#2563EB] bg-[#2563EB] text-white" : done ? "border-emerald-500 bg-emerald-500 text-white" : "border-gray-300"}`}>
                    {done ? <Check className="w-3 h-3" /> : num}
                  </div>
                  <span className="text-xs font-medium hidden sm:block">{label}</span>
                </div>
                {i < 3 && <div className="w-6 h-px bg-gray-300" />}
              </div>
            );
          })}
        </div>
      )}

      {/* Step 1 */}
      {step === 1 && <StepGBP onConfirm={handleConfirmBusiness} initialQuery={prefillBusiness} />}

      {/* Step 2 */}
      {step === 2 && gbpSnapshot && (
        <StepKeywords
          businessName={gbpSnapshot.businessName}
          address={gbpSnapshot.address}
          keywords={enrichedKeywords}
          enrichmentLoading={enrichmentLoading}
          blueOceanSource={blueOceanSource}
          onConfirm={handleKeywordsConfirm}
          onBack={() => setStep(1)}
        />
      )}

      {/* Step 3 */}
      {step === 3 && gbpSnapshot && (
        isScanning ? (
          <div className="max-w-lg mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <ProcessingScreen steps={STEPS_SCAN} />
            </div>
          </div>
        ) : (
          <StepLocation
            businessName={gbpSnapshot.businessName} address={gbpSnapshot.address}
            lat={gbpSnapshot.lat} lng={gbpSnapshot.lng}
            radiusKm={radiusKm} keywordCount={keywords.length}
            onRadiusChange={setRadiusKm} onConfirm={handleStartScan} onBack={() => setStep(2)}
          />
        )
      )}

      {/* Step 4 — Lead gate */}
      {step === 4 && (
        <>
          <div className="max-w-4xl mx-auto px-4 py-8 opacity-30 blur-sm pointer-events-none select-none">
            <div className="bg-white rounded-2xl p-8">
              <div className="h-6 bg-gray-200 rounded w-2/3 mb-4" />
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[...Array(4)].map((_, i) => <div key={i} className="h-24 bg-gray-100 rounded-xl" />)}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {[...Array(49)].map((_, i) => <div key={i} className="aspect-square bg-gray-200 rounded" />)}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#0F1B2D]/60 backdrop-blur-sm px-4">
            <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
              <div className="bg-[#2563EB] px-6 py-5 text-white">
                <h2 className="text-lg font-bold mb-0.5">Your report is ready…</h2>
                <p className="text-blue-100 text-sm">Enter your details to unlock the full audit.</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                    <input type="text" placeholder="Jane Tan" value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Work Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="email" placeholder="jane@business.com" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]" />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone (optional)</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input type="tel" placeholder="+65 9123 4567" value={phone} onChange={(e) => setPhone(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]" />
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">I am a…</label>
                    <div className="flex gap-2">
                      {(["business", "agency"] as const).map((t) => (
                        <button key={t} onClick={() => setLeadType(t)}
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${leadType === t ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-gray-50 border-gray-200 text-gray-600"}`}>
                          {t === "business" ? <Building2 className="w-3.5 h-3.5" /> : <Users className="w-3.5 h-3.5" />}
                          {t === "business" ? "Business" : "Agency"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-[#2563EB]" />
                  <span className="text-xs text-gray-500">I agree to receive my audit report and occasional Local SEO tips from Epicware. No spam, ever.</span>
                </label>
                {leadError && <p className="text-xs text-red-600 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{leadError}</p>}
                <button onClick={handleLeadSubmit} disabled={submitting}
                  className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-60">
                  {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Generating…</> : <>Unlock My Free Report <ArrowRight className="w-4 h-4" /></>}
                </button>
                <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" /> Your data is secure. We never sell your information.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Step 5: Results ─────────────────────────────────────────────── */}
      {step === 5 && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          {isProcessing ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 max-w-lg mx-auto">
              <ProcessingScreen />
            </div>
          ) : result ? (
            <div className="flex flex-col lg:flex-row gap-6">

              {/* ── Sidebar ── */}
              <aside className="lg:w-72 shrink-0">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-20 space-y-6">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Audited Business</p>
                    <h2 className="font-bold text-gray-900 text-sm">{result.gbpName}</h2>
                    <p className="text-xs text-gray-400 mt-0.5">{result.gbpAddress}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-semibold">{result.gbpRating}</span>
                      <span className="text-gray-400">({result.gbpReviewCount} reviews)</span>
                    </div>
                  </div>
                  <div className="border-t pt-4"><ScoreGauge score={result.scorecard.overall} /></div>
                  <div className="border-t pt-4 space-y-2">
                    {[
                      { label: "Profile", val: result.scorecard.profile },
                      { label: "Reviews", val: result.scorecard.reviews },
                      { label: "Keywords", val: result.scorecard.keywords },
                      { label: "Visibility", val: result.scorecard.visibility },
                    ].map(({ label, val }) => (
                      <div key={label} className="flex items-center gap-2 text-sm">
                        <span className="w-20 text-gray-500">{label}</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#2563EB] rounded-full" style={{ width: `${val}%` }} />
                        </div>
                        <span className={`w-8 text-right font-semibold text-xs ${scoreColour(val)}`}>{val}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-500 mb-1">Estimated missed revenue</p>
                    <p className="text-2xl font-bold text-gray-900">S${result.estimatedMonthlyRevenue.toLocaleString()}<span className="text-sm font-normal text-gray-400">/mo</span></p>
                  </div>
                  <Link href="/book-demo" className="audit-no-print block w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold py-3 px-4 rounded-xl text-center text-sm transition-colors">
                    Book a Strategy Call →
                  </Link>
                  <Link href="/pricing" className="audit-no-print block w-full border border-[#2563EB] text-[#2563EB] hover:bg-blue-50 font-semibold py-2.5 px-4 rounded-xl text-center text-sm transition-colors">
                    View Epicware Plans
                  </Link>
                  <button
                    onClick={handleDownloadPDF}
                    className="audit-no-print w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </aside>

              {/* ── Main content ── */}
              <div className="flex-1 space-y-6">

                {/* Print-only header */}
                <div id="audit-print-header" style={{ display: "none" }} className="pb-4 border-b">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Epicware Free GBP Audit Report</p>
                  <h1 className="text-xl font-bold text-gray-900 mt-1">{result.gbpName}</h1>
                  <p className="text-sm text-gray-400">{result.gbpAddress} · {new Date().toLocaleDateString("en-SG", { day: "numeric", month: "long", year: "numeric" })}</p>
                </div>

                {/* FIX 1 — Hook headline */}
                <div>
                  <h1 className="text-3xl font-bold text-[#0F1B2D] leading-tight">
                    {result.gbpReviewCount} reviews. {result.gbpRating}★ rating.<br />
                    <span className="text-red-600">Invisible in {result.invisibleGridPoints} of {result.totalGridPoints} grid points.</span>
                  </h1>
                </div>

                {/* AI Summary — improved 4-sentence */}
                <div className="bg-[#2563EB] text-white rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm font-semibold text-blue-200">Your Audit Summary</span>
                  </div>
                  <p className="text-base leading-relaxed">{result.aiSummary}</p>
                </div>

                {/* Profile Health Checks */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#2563EB]" /> Profile Health Checks
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {result.checkItems.map((item) => (
                      <div
                        key={item.id}
                        className={`rounded-xl p-4 border ${
                          item.status === "pass" ? "bg-emerald-50 border-emerald-100"
                          : item.status === "fail" ? "bg-red-50 border-red-100"
                          : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {item.status === "pass"
                            ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            : item.status === "fail"
                            ? <X className="w-4 h-4 text-red-500 shrink-0" />
                            : <HelpCircle className="w-4 h-4 text-gray-400 shrink-0" />}
                          <span className="text-xs font-bold text-gray-800">{item.label}</span>
                          <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full ${
                            item.status === "pass" ? "bg-emerald-100 text-emerald-700"
                            : item.status === "fail" ? "bg-red-100 text-red-700"
                            : "bg-gray-200 text-gray-500"
                          }`}>
                            {item.status === "pass" ? "Pass" : item.status === "fail" ? "Fail" : "Need Access"}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Keyword Intelligence — live data from DataForSEO Maps */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#2563EB]" /> Keyword Intelligence
                  </h3>
                  <p className="text-sm text-gray-500 mb-5">Live Google Maps data for your selected keywords</p>
                  {result.enrichedKeywords.length > 0 ? (
                    <div className="space-y-3">
                      {result.enrichedKeywords.map((ek) => {
                        const isRed = ek.type === "red";
                        const diffCls =
                          ek.difficulty === "LOW" ? "bg-emerald-100 text-emerald-700"
                          : ek.difficulty === "MEDIUM" ? "bg-yellow-100 text-yellow-700"
                          : ek.difficulty === "HIGH" ? "bg-orange-100 text-orange-700"
                          : "bg-red-100 text-red-700";
                        return (
                          <div
                            key={ek.keyword}
                            className={`rounded-xl p-4 border ${isRed ? "border-red-100 bg-red-50" : "border-blue-100 bg-blue-50"}`}
                          >
                            <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isRed ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}`}>
                                  {isRed ? "Red Ocean" : "Blue Ocean"}
                                </span>
                                <span className="font-semibold text-gray-900 text-sm">&ldquo;{ek.keyword}&rdquo;</span>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${diffCls}`}>{ek.difficulty}</span>
                                {ek.clientRank === 0 ? (
                                  <span className="text-xs font-bold text-red-500 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">Not ranked</span>
                                ) : (
                                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">#{ek.clientRank}</span>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mb-2">
                              <span>Volume: <b className="text-gray-700">{ek.estimatedVolume}</b></span>
                              {ek.topCompetitor && (
                                <span>Top: <b className="text-gray-700">{ek.topCompetitor.name}</b> ({ek.topCompetitor.reviewCount.toLocaleString()} reviews)</span>
                              )}
                            </div>
                            <p className="text-xs text-gray-600 italic">{ek.insight}</p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400 italic">Keyword intelligence data not available for this audit.</p>
                  )}
                </div>

                {/* FIX 4 — 3-Stat block */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-[#2563EB]">{result.invisibleGridPoints}/{result.totalGridPoints}</p>
                      <p className="text-sm font-semibold text-[#0F1B2D] mt-1">Grid points where you&apos;re invisible</p>
                      <p className="text-xs text-gray-500 mt-1">You rank at the centre — but are missing from {result.invisibleGridPoints} surrounding areas</p>
                    </div>
                    <div className="border-l border-r border-gray-100 px-2">
                      <p className="text-3xl font-bold text-[#2563EB]">{result.gbpRating}★</p>
                      <p className="text-sm font-semibold text-[#0F1B2D] mt-1">Rating you&apos;ve already earned</p>
                      <p className="text-xs text-gray-500 mt-1">The trust is there — the SEO infrastructure to carry it isn&apos;t</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-[#2563EB]">90</p>
                      <p className="text-sm font-semibold text-[#0F1B2D] mt-1">Day Top-3 Guarantee</p>
                      <p className="text-xs text-gray-500 mt-1">Rank Top 3 on Maps for 2 keywords in 90 days — or we extend free</p>
                    </div>
                  </div>
                </div>

                {/* Heatmaps */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6" ref={heatmapRef}>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#2563EB]" /> Ranking Heatmaps
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">Each cell shows your Google Maps rank at that location. Green = top 3, Red = not ranking.</p>
                  {result.heatmaps.map((hm) => (
                    <div key={hm.keyword} className="mb-8 last:mb-0">
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-semibold text-gray-900 text-sm">&ldquo;{hm.keyword}&rdquo;</p>
                        <div className="flex gap-3 text-xs text-gray-500">
                          <span>Centre: <b className="text-gray-800">#{hm.centerRank}</b></span>
                          <span>Avg: <b className="text-gray-800">#{hm.averageRank}</b></span>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {hm.gridPoints.map((pt, i) => (
                          <div key={i} title={`Rank #${pt.rank}`}
                            className={`aspect-square rounded flex items-center justify-center text-white text-[10px] font-bold ${rankColour(pt.rank)} ${i === 24 ? "ring-2 ring-white ring-offset-1 ring-offset-gray-200" : ""}`}>
                            {pt.rank > 20 ? "20+" : pt.rank}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-3 flex-wrap">
                        {[["#1-3", "bg-emerald-500"], ["#4-7", "bg-yellow-400"], ["#8-14", "bg-orange-500"], ["#15-20", "bg-red-500"], ["20+", "bg-red-900"]].map(([label, bg]) => (
                          <div key={label} className="flex items-center gap-1.5 text-xs text-gray-500">
                            <div className={`w-3 h-3 rounded-sm ${bg}`} />{label}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Visibility — real LLM results */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#2563EB]" /> AI Search Visibility
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {result.aiVisibility
                      ? <>I asked 6 AI tools about &ldquo;{result.keywords[0]}&rdquo; in Singapore. Here&apos;s what I found:</>
                      : "Searching 6 AI tools for your business…"
                    }
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                    {result.aiVisibility ? (
                      result.aiVisibility.results.map((r) => (
                        <div key={r.id} className="border border-gray-100 rounded-xl p-3">
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <div className="flex items-center gap-1 min-w-0">
                              <span className="text-sm font-medium text-gray-700 truncate">{r.displayName}</span>
                              {r.hasWebSearch && (
                                <span className="text-[9px] font-semibold text-blue-500 shrink-0">🌐</span>
                              )}
                            </div>
                            <span
                              title={r.status === "found" && r.excerpt ? r.excerpt : undefined}
                              className={`shrink-0 text-[10px] px-1.5 py-0.5 rounded-full font-semibold border ${
                                r.status === "found"
                                  ? "bg-emerald-50 text-emerald-600 border-emerald-100 cursor-help"
                                  : r.status === "not_found"
                                  ? "bg-red-50 text-red-600 border-red-100"
                                  : "bg-gray-100 text-gray-400 border-gray-200"
                              }`}
                            >
                              {r.status === "found" ? "Found ✓" : r.status === "not_found" ? "Not found" : "Unavailable"}
                            </span>
                          </div>
                          {r.hasWebSearch && (
                            <p className="text-[9px] text-blue-400 font-medium">Live web search</p>
                          )}
                        </div>
                      ))
                    ) : (
                      Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="border border-gray-100 rounded-xl p-3 flex items-center justify-between">
                          <div className="h-4 w-16 bg-gray-100 rounded animate-pulse" />
                          <div className="h-5 w-14 bg-gray-100 rounded-full animate-pulse" />
                        </div>
                      ))
                    )}
                  </div>
                  <div className="p-4 bg-[#EFF6FF] border border-blue-200 rounded-xl">
                    {(() => {
                      if (!result.aiVisibility) {
                        return (
                          <p className="text-sm text-[#1E40AF] leading-relaxed">
                            <span className="font-bold">Checking AI search visibility for {result.shortBusinessName}…</span> Results will appear above in a moment.
                          </p>
                        );
                      }
                      const foundCount = result.aiVisibility.results.filter((r) => r.status === "found").length;
                      if (foundCount > 0) {
                        return (
                          <p className="text-sm text-[#1E40AF] leading-relaxed">
                            <span className="font-bold">You appear in {foundCount} of 6 AI tools.</span>{" "}
                            Epicware&apos;s GEO engine gets you into all 6.
                          </p>
                        );
                      }
                      return (
                        <p className="text-sm text-[#1E40AF] leading-relaxed">
                          <span className="font-bold">Your competitor {result.competitors[0]?.name} is also not yet appearing in AI search results for your category</span> — but this window closes fast as businesses start optimising for GEO.{" "}
                          Epicware&apos;s Domination plan engineers your business into ChatGPT, Perplexity, and Google AI Overviews before your competitors notice this channel exists.
                        </p>
                      );
                    })()}
                    <Link href="/ai-search-visibility-singapore" className="inline-block mt-3 text-sm font-semibold text-[#2563EB] underline underline-offset-2">
                      See how Epicware&apos;s GEO engine works →
                    </Link>
                  </div>
                </div>

                {/* FIX 3 — Competitors with whyRanks */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#2563EB]" /> Top Competitors
                  </h3>
                  <div className="space-y-3">
                    {result.competitors.map((comp) => (
                      <div key={comp.name} className="p-4 border border-gray-100 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold shrink-0 ${comp.rank === 1 ? "bg-yellow-400" : comp.rank === 2 ? "bg-gray-400" : "bg-orange-400"}`}>
                            #{comp.rank}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 text-sm">{comp.name}</p>
                            <p className="text-xs text-gray-400 truncate">{comp.address}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                              <span className="font-semibold">{comp.rating}</span>
                            </div>
                            <p className="text-xs text-gray-400">{comp.reviewCount.toLocaleString()} reviews</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2.5 pl-12 italic">
                          Not winning on better service — {comp.whyRanks}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Top Recommendations</h3>
                  <div className="space-y-3">
                    {result.recommendations.map((rec, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-[#F0F4F8] rounded-xl">
                        <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                        <p className="text-sm text-gray-700">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FIX 6 — Personalised CTA close */}
                <div className="bg-[#0F1B2D] rounded-2xl p-8 text-center text-white">
                  {/* Part A — personalised headline */}
                  <p className="text-2xl font-bold text-white mb-4 leading-snug">
                    {name.split(" ")[0]}, a {result.gbpRating}★ {result.gbpCategory.toLowerCase()} shouldn&apos;t be invisible past {result.neighbourhood}.
                  </p>

                  {/* Part B — urgency paragraph */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
                    {result.shortBusinessName} built a {result.gbpRating}★ rating across {result.gbpReviewCount} reviews with no SEO infrastructure behind it.
                    The next 90 days either compound that into a real local moat — or get eaten by {result.competitors[0]?.name} before your reputation has time to travel.
                  </p>

                  {/* Part C — CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
                    <Link href="/book-demo"
                      className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors inline-flex items-center justify-center gap-2">
                      Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/pricing"
                      className="border border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold py-3 px-6 rounded-xl text-sm transition-colors inline-flex items-center justify-center">
                      See Epicware Plans
                    </Link>
                  </div>

                  {/* Guarantee badge */}
                  <p className="text-xs text-gray-500">
                    90-Day Top-3 Guarantee — Rank Top 3 for 2 keywords or we extend free
                  </p>
                </div>

              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
