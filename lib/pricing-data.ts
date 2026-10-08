// Single source of truth for plan pricing and features — imported by
// PricingCards and any other page that needs to show tiers/prices
// (e.g. /seo-agency-singapore) so prices are never hardcoded twice.

export type Feature = string | { label: string; isNew: true };

export const PLANS: Array<{
  name: string;
  badge: string | null;
  monthlyPrice: number;
  annualPrice: number;
  subtitle: string;
  outcome: string | null;
  guarantee: string | null;
  features: Feature[];
  note?: string;
  highlight: boolean;
  perOutlet: boolean;
}> = [
  {
    name: "Foundation",
    badge: null,
    monthlyPrice: 299,
    annualPrice: 254,
    subtitle: "Reviews, local visibility, and social content — fully automated.",
    outcome:
      "Better visibility on Google Maps with an active, optimised profile — plus a reliable reputation management process running in the background.",
    guarantee: null,
    features: [
      "4–5 star review collection via QR standee",
      "1-click WhatsApp service recovery",
      "AI review responses (auto-reply)",
      "AI Review Chat",
      "Email / SMS / WhatsApp broadcast campaigns",
      "CRM up to 1,000 customers",
      "Wall of Love embeddable widget",
      "Multi-platform dashboard",
      "5,000 emails / month",
      "Google Business Profile Optimization",
      "5 SEO-optimised posts per week",
      "Keyword research",
      "Competitor keyword research",
      { label: "AI Social Media Generator & Scheduler", isNew: true },
    ],
    highlight: false,
    perOutlet: false,
  },
  {
    name: "Authority",
    badge: "Most Popular",
    monthlyPrice: 599,
    annualPrice: 509,
    subtitle: "Everything in Foundation, plus full Local SEO and rank tracking.",
    outcome: "Top 5 on Google Map Pack & AI search. Steady ranking lift.",
    guarantee:
      "Rank Top 3 on Google Maps for 1 tracked keyword within 90 days — or we extend free until achieved.",
    features: [
      { label: "1x Bad Review Removal/month (worth $200)", isNew: true },
      "Complete GBP audit (80-point) + full optimisation",
      "5 SEO-optimised GBP posts per week",
      { label: "AI Social Media Generator & Scheduler", isNew: true },
      "Blue Ocean keyword research",
      "Local Maps grid scan",
      "Ranking intelligence dashboard",
      "Competitor monitoring (ongoing)",
      "GEO/AEO AI Citation for 1 tracked keyword/month",
      "Article generation + backlinking",
      "Bi-weekly performance reporting",
      "CRM up to 5,000 customers",
    ],
    highlight: true,
    perOutlet: true,
  },
  {
    name: "Domination",
    badge: "Best Value",
    monthlyPrice: 1500,
    annualPrice: 1275,
    subtitle:
      "Everything in Authority, plus full AI search visibility and SEO content.",
    outcome: "Top 3 on Google Search, Maps & AI. Named by ChatGPT/Gemini.",
    guarantee:
      "Rank Top 3 for 3 tracked keywords + cited by ChatGPT/Gemini within 120 days — or free until achieved.",
    features: [
      { label: "5x Bad Review Removal/month (worth $1,000)", isNew: true },
      "GEO/AEO AI Citation for 3 tracked keywords/month",
      "20 tracked keywords (full territory intelligence)",
      "10 SEO blog posts per month",
      { label: "AI Social Media Generator & Scheduler", isNew: true },
      "Website SEO for 20 keywords",
      "GEO Audit",
      "GEO Implementation (content, schema & authority signals for LLM recommendation)",
      "Monthly GEO Monitoring Report",
      "Link building (authority signals)",
      { label: "DA20+ backlinks every month", isNew: true },
      "Dedicated growth strategist",
      "Monthly Revenue Impact Report",
    ],
    highlight: false,
    perOutlet: true,
  },
  {
    name: "Full Stack",
    badge: "New",
    monthlyPrice: 3800,
    annualPrice: 3230,
    subtitle:
      "Everything in Domination, plus paid ad management across Meta and Google.",
    outcome:
      "Immediate leads from day 1 + Top 3 on Google Search, Maps & AI. Organic and paid working together.",
    guarantee:
      "Top 3 rankings within 120 days + measurable lead flow from ads within 30 days — or we extend free.",
    features: [
      { label: "5x Bad Review Removal/month (worth $1,000)", isNew: true },
      "Meta (Facebook & Instagram) paid ad management",
      "Google Search & Display ad management",
      "Ad creative strategy + copy (EPIC Framework)",
      { label: "AI Social Media Generator & Scheduler", isNew: true },
      "Monthly ad performance reporting",
      "Retargeting campaigns (website + review audiences)",
      { label: "DA20+ backlinks every month", isNew: true },
      "Ad spend billed separately",
    ],
    note: "Ad spend is billed separately and is not included in the monthly fee.",
    highlight: false,
    perOutlet: true,
  },
];

export function formatPrice(p: number): string {
  return p.toLocaleString("en-SG");
}
