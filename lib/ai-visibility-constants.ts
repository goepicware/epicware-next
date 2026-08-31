// Copy + config for /ai-visibility v3 (mockup-matched redesign). TODO-VERIFY
// placeholders and the A/B headline variant live here so marketing can edit
// without touching layout code.

export const HEADLINE_VARIANTS = {
  default: "When someone asks ChatGPT for the best {your industry} in Singapore — does your name come up?",
  alt: "Are you invisible to ChatGPT?",
} as const;

// Server-rendered default (what crawlers/first paint see). Override per-visitor
// with ?h=alt — no redeploy needed. See HeroHeadline.tsx.
export const DEFAULT_HEADLINE_VARIANT: keyof typeof HEADLINE_VARIANTS = "default";

export const TODO_AUDIT_COUNT: string | null = null; // e.g. "500+"

// Confirmed real wording — already live in the actual product, not a
// placeholder (see Guarantee.tsx).
export const GUARANTEE = {
  title: "90-Day Top-3 Guarantee",
  body: "Rank top 3 on Google Maps for 2 of your keywords within 90 days — or we extend free.",
  sub: "The audit itself costs nothing either way: keep the report and do it yourself, or book a call for help implementing it.",
};

// Shared "EW | Lead Form Submit" conversion action — same label used by
// /remove-review's LeadStackForm.tsx, deliberately not split per landing
// page so Google's bidding isn't learning from two half-sized data sets.
export const GOOGLE_ADS_CONVERSION_ID = "AW-18302464942/q1pgCKvf_OocEK7npZdE";

// Citation Wall — six real client AI/SERP citation screenshots. Typed array
// so a 7th client is a one-line addition, not new JSX. `image: null` means
// the raw screenshot hasn't been sourced yet — CitationWall.tsx falls back
// to PhotoPlaceholder for that row until it's dropped into
// public/assets/ai-visibility/ and this field is filled in.
export type Citation = {
  client: string;
  vertical: string;
  platform: string;
  query: string;
  result: string;
  date: string;
  image: string | null;
  imageAlt: string;
};

export const CITATIONS: Citation[] = [
  {
    client: "Fundamental Aesthetic Medical Clinic",
    vertical: "Aesthetic Clinic · Orchard",
    platform: "Google SERP",
    query: "exosome skin booster singapore",
    result: "#1 result",
    date: "Aug 2026",
    image: "/assets/ai-visibility/citation-fundamental-aesthetic.jpg",
    imageAlt:
      "Google search results showing Fundamental Aesthetic Medical Clinic ranked #1 for \"exosome skin booster singapore\"",
  },
  {
    client: "Catnap Lair",
    vertical: "Furniture & Mattress · Ubi",
    platform: "Google SERP + GBP",
    query: "dozi mattress singapore",
    result: "#1 GBP ranking",
    date: "Aug 2026",
    image: "/assets/ai-visibility/citation-catnap-lair.jpg",
    imageAlt: "Google Business Profile ranking showing Catnap Lair #1 for \"dozi mattress singapore\"",
  },
  {
    client: "EPIKebabs",
    vertical: "F&B · Kebabs",
    platform: "ChatGPT",
    query: "healthy kebab options in Singapore",
    result: "Named a healthy pick",
    date: "Apr 2026",
    image: "/assets/ai-visibility/citation-epikebabs.jpg",
    imageAlt: "Raw ChatGPT screenshot naming EPIKebabs a healthy pick for \"healthy kebab options in Singapore\"",
  },
  {
    client: "Atelier By The Bay",
    vertical: "Fine Dining · Changi",
    platform: "AI Overview + SERP",
    query: "fine dining rooftop fusion restaurant in Changi",
    result: "#1 · 31 citations in July",
    date: "Aug 2026",
    image: "/assets/ai-visibility/citation-atelier-by-the-bay.jpg",
    imageAlt:
      "Google AI Overview and search results citing Atelier By The Bay for \"fine dining rooftop fusion restaurant in Changi\"",
  },
  {
    client: "Team Salon (VivoCity)",
    vertical: "Hair Salon · Aveda",
    platform: "AI Mode",
    query: "organic hair salon harbourfront singapore",
    result: "#1 result",
    date: "Aug 2026",
    image: "/assets/ai-visibility/citation-team-salon.jpg",
    imageAlt: "Google AI Mode result ranking Team Salon (VivoCity) #1 for \"organic hair salon harbourfront singapore\"",
  },
  {
    client: "World Technologies",
    vertical: "Industrial B2B · Water Treatment",
    platform: "AI Overview + SERP",
    query: "RO plant CIP cleaning services singapore",
    result: "#1, held 14 days",
    date: "Aug 2026",
    image: "/assets/ai-visibility/citation-world-technologies.jpg",
    imageAlt:
      "Google AI Overview and search results ranking World Technologies #1 for \"RO plant CIP cleaning services singapore\"",
  },
];

// Exhibit — testimonial spotlight. Confirmed with the client: attribute the
// WhatsApp quote to the business name only, not the personal contact's name.
export const EXHIBIT = {
  quote:
    "Yes. We are pleased with your hard work. Over here, we received quality leads from the website.",
  businessName: "Fundamental Aesthetic Medical Clinic",
  quoteAttribution: "Fundamental Aesthetic Medical Clinic",
  startedLabel: "Started Jun 2026",
  proofImage: "/assets/ai-visibility/exhibit-fundamental-aesthetic-proof.jpg" as string | null,
  proofImageAlt: "Fundamental Aesthetic Medical Clinic ranked #1 for \"exosome skin booster singapore\", captured live",
  proofCaption: "Same clinic, ranking #1 for \"exosome skin booster singapore\" — captured live, Aug 2026.",
  stats: [
    { num: "2", label: "Outlets ranked" },
    { num: "0", label: "Ad spend behind it" },
  ],
  review: {
    stars: 5,
    when: "3 days ago",
    text: "We engaged Epicware for our medical aesthetic clinic and it ranked within top 3 within 1-2 months, exceeded our expectations. They are knowledgeable for SEO and google ranking. Thank u.",
    who: "Sy Lilin · Public Google review, posted on Epicware's Business Profile",
  },
};

export const AI_VISIBILITY = {
  hero: {
    eyebrow: "For Singapore local businesses",
    subheadline:
      "Find out in 60 seconds, free. We ask 6 AI tools about your category and check your Google Maps ranking across your whole area — then send the full report straight to you.",
    ctaLabel: "Show me my results ↓",
    badge: "ChatGPT: Not found for “best cafe in Tanjong Pagar”",
  },
  trustStrip: [
    { value: "6", label: "AI tools checked per audit" },
    { value: "49", label: "points on the Maps ranking grid" },
    { value: "60 sec", label: "to your results" },
  ],
  shift: {
    quoteLead: "Search changed.",
    quoteAccent: "Your SEO didn't.",
    body:
      "Customers used to type ‘best dentist near me’ into Google and scroll the Map Pack. Increasingly they ask ChatGPT, Perplexity, or Google's AI Overview — and get one recommendation, not ten links. If the AI doesn't know you exist, you're not on page two. You're not in the conversation at all.",
  },
  features: {
    kicker: "What the audit shows",
    heading: "Four things most businesses have never seen about themselves",
    items: [
      { emoji: "🤖", title: "AI Search Visibility", body: "Checked across 6 AI tools, tool-by-tool, against your top competitor." },
      { emoji: "🗺️", title: "49-Point Ranking Heatmap", body: "Your Maps position at 49 points across your service area — not just at your doorstep." },
      { emoji: "🔍", title: "Blue Ocean Keywords", body: "High-volume category terms with zero competitors ranking today." },
      { emoji: "✅", title: "Profile Health Check", body: "12+ checks on your Google Business Profile — photos, categories, review velocity, and more." },
    ],
    reportCaption:
      "This is what lands in your inbox — not a template with your logo dropped in. A live audit of your actual business.",
  },
  whoItsFor: {
    kicker: "Who it's for",
    heading: "Built for Singapore businesses that depend on local customers walking in or calling",
    lead: "If you have a Google Business Profile and a physical service area, the audit works.",
    verticals: [
      { label: "Clinics & Dental", photo: "who-clinic-dental.jpg" },
      { label: "F&B", photo: "who-fnb.jpg" },
      { label: "Aesthetics & Wellness", photo: "who-salon.jpg" },
      { label: "Home & Trade Services", photo: "who-car-workshop.jpg" },
    ],
  },
  howItWorks: {
    kicker: "How it works",
    heading: "Three steps, sixty seconds",
    steps: [
      { num: "1", title: "Fill in your details", body: "Business name, email, and a couple of quick details — takes under a minute." },
      { num: "2", title: "We run the audit live", body: "Real Google Maps data and 6 AI tools, queried live — not a stored template." },
      { num: "3", title: "You get the full report", body: "Score, heatmap, AI visibility, and a prioritised fix list you can action yourself." },
    ],
  },
  objections: [
    { q: "Is this really free?", a: "Yes. No card, no trial. We'd rather show you what we can do than tell you." },
    { q: "Will I get sales calls?", a: "Only if you ask for one. The report arrives either way." },
    { q: "Is the data real?", a: "Live Google Maps rankings and live AI tool queries, run when you submit." },
    { q: "What if my results are bad?", a: "Most first audits look rough. That's the point — you can't fix what you can't see." },
  ],
  finalCta: {
    heading: "Find out what the AI says about you",
    sub: "60 seconds. Free. No card.",
  },
} as const;
