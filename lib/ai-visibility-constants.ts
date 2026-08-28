// Copy + config for /ai-visibility v2. TODO-VERIFY placeholders and the A/B
// headline variant live here so marketing can edit without touching layout code.

export const HEADLINE_VARIANTS = {
  default: "When someone asks ChatGPT for the best {your industry} in Singapore — does your name come up?",
  b: "Your competitors are being recommended by AI. You're not.",
  c: "Are you invisible to ChatGPT?",
} as const;

// Server-rendered default (what crawlers/first paint see). Override per-visitor
// with ?h=b or ?h=c — no redeploy needed. See HeroHeadline.tsx.
export const DEFAULT_HEADLINE_VARIANT: keyof typeof HEADLINE_VARIANTS = "default";

export const TODO_AUDIT_COUNT: string | null = null; // e.g. "500+"
export const TODO_AGENCY_PRICE_LOW: string | null = null; // e.g. "500"
export const TODO_AGENCY_PRICE_HIGH: string | null = null; // e.g. "1,500"
export const TODO_GUARANTEE_TEXT: string | null = null; // exact legally-safe guarantee wording

export const SHOW_PROOF_SECTION = false;
export const PROOF_STAT: { headline: string; body: string } | null = null;

// No Google Ads conversion ID configured yet — LeadstackForm.tsx reads this
// and no-ops the conversion call until it's set.
export const GOOGLE_ADS_CONVERSION_ID = "";

export const AI_VISIBILITY = {
  hero: {
    subheadline:
      "Find out in 60 seconds. Free. We ask 6 AI tools about your category, check where you rank on Google Maps across your whole area, and send you the full report. No credit card, no call required.",
    ctaLabel: "Find out now →",
  },
  trustStrip: {
    suffix: "Singapore businesses audited · 6 AI tools checked · 49-point Maps grid · Results in 60 seconds",
  },
  shift: {
    header: "Search changed. Your SEO didn't.",
    body:
      "Your customers used to type 'best dentist near me' into Google and scroll the Map Pack. Increasingly they ask ChatGPT, Perplexity or Google's AI Overview — and get one recommendation, not ten links. If the AI doesn't know you exist, you're not on page two. You're not in the conversation at all. The businesses being named right now aren't the best ones. They're the ones with the citations, reviews and structured data the models were trained on.",
  },
  features: [
    { emoji: "🤖", title: "AI Search Visibility", body: "Checked across 6 AI tools, tool-by-tool, vs. your top competitor." },
    { emoji: "🗺️", title: "49-Point Ranking Heatmap", body: "Maps position at 49 locations across your service area." },
    { emoji: "🔍", title: "Blue Ocean Keywords", body: "High-volume, zero-competitor category terms." },
    { emoji: "✅", title: "Profile Health Check", body: "12+ GBP checks — description, photos, categories, review velocity, post frequency." },
  ],
  sampleReport: {
    line: "This is what lands in your inbox. Not a PDF template with your logo dropped in. A live audit of your actual business.",
  },
  whoItsFor: {
    body:
      "Built for Singapore businesses that depend on local customers walking in or calling: clinics and dental · aesthetics and wellness · F&B · home and trade services · professional services. If you have a Google Business Profile and a physical service area, the audit works.",
    verticals: [
      { label: "Clinics & Dental" },
      { label: "F&B" },
      { label: "Salons & Beauty" },
      { label: "Car Workshops" },
      { label: "Tuition Centres" },
    ],
  },
  howItWorks: {
    steps: [
      { num: "1", body: "Fill in your details — takes 60 seconds." },
      { num: "2", body: "We run the audit live — real Google Maps data and 6 AI tools, not a stored template." },
      { num: "3", body: "You get the full report — score, heatmaps, AI visibility, and a prioritized fix list you can action yourself." },
    ],
    closing: "Genuinely free. If you want help implementing it, book a call — if not, keep the report and do it yourself.",
  },
  objections: [
    { q: "Is this really free?", a: "Yes. No card, no trial. We'd rather show you what we can do than tell you." },
    { q: "Will I get sales calls?", a: "Only if you ask for one. The report arrives either way." },
    { q: "Is the data real?", a: "Live Google Maps rankings and live AI tool queries, run when you submit." },
    { q: "I already do SEO.", a: "Then this takes 60 seconds to confirm it's working — and shows the AI channel your current SEO almost certainly doesn't cover." },
    { q: "What if my results are bad?", a: "Most first audits look rough. That's the point — you can't fix what you can't see." },
  ],
  finalCta: {
    headline: "Find out what the AI says about you. 60 seconds. Free. No card.",
  },
} as const;
