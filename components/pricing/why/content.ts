// ─── DECISIONS ──────────────────────────────────────────────────────────────
// null = element is hidden, never shown as a placeholder.

export const STACK_VALUES: {
  posts: string | null;
  reviewRemovals: string | null;
  aiCitation: string | null;
  backlinks: string | null;
  geo: string | null;
  dashboard: string | null;
  total: string | null;
} = {
  posts: null,
  reviewRemovals: "S$1,000",
  aiCitation: null,
  backlinks: null,
  geo: null,
  dashboard: null,
  total: null,
};

export const PROOF_ASSETS: {
  geogridBefore: string | null;
  geogridAfter: string | null;
  aiAnswer: string | null;
  clientName: string | null;
} = {
  geogridBefore: null,
  geogridAfter: null,
  aiAnswer: null,
  clientName: null,
};

export const AUDIT_PREVIEW_IMAGE: string | null = null;

// ─── Copy & data (verbatim) ─────────────────────────────────────────────────

export const WHY_CONTENT = {
  receipt: {
    eyebrow: "TRIED SEO BEFORE?",
    heading: "Then you've already paid the Agency Tax.",
    body: "You paid for a strategy. Then the work was handed back to you, the clock didn't start, and the contract wouldn't let you leave.",
    boldLine: "Look at the last line of the receipt.",
    header: "TYPICAL AGENCY RECEIPT",
    sub: "Retainer · 12-month term",
    rows: [
      { label: "Monthly retainer", value: "S$1,890", tone: "ink" as const },
      { label: "Blog uploads, page fixes", value: "+ per hour", tone: "orange" as const },
      { label: "Months 1–2, before the guarantee clock starts", value: "S$3,780", tone: "orange" as const, nowrap: true },
      { label: "Prepay for the best rate", value: "6–12 mo locked", tone: "orange" as const },
    ],
    totalLabel: "Rankings delivered",
    footer: "Thank you for your patience.",
  },

  timeline: {
    eyebrow: "SAME 120 DAYS. TWO VERY DIFFERENT STORIES.",
    heading: "Here's what you were missing while you waited.",
    body: "Grey is time you paid for with nothing live. Every plum dot is work published on your business.",
    ruler: ["DAY 1", "DAY 30", "DAY 60", "DAY 90", "DAY 120"],
    agencyRowLabel: "Typical agency",
    agency: [
      { title: "Audit", sub: "+ advice PDF", kind: "solid" as const, rounded: "left" as const },
      { title: "Waiting on you", sub: "Uploads billed per hour", kind: "hatched" as const, span: 2 },
      { title: "Clock finally starts", sub: "~month 2–3", kind: "hatched" as const },
      { title: "Still locked in", sub: "8 months to go", kind: "solid" as const, rounded: "right" as const },
    ],
    agencyCaptionPre: "Live work on your site by Day 120: ",
    agencyCaptionBold: "2–8 posts, 0 guarantee days used",
    epicwareRowLabel: "Epicware",
    epicware: [
      { title: "You approve once", sub: "Clock starts today", rounded: "left" as const },
      { title: "Live", sub: "GBP + Core 30 done", extra: "+ baseline" },
      { title: "20 posts", sub: "AI citation work", extra: "live" },
      { title: "30 posts", sub: "reviews + links", extra: "live" },
      { title: "Top 3 target", sub: "Missed? We work free", orange: true, rounded: "right" as const },
    ],
    dotCounts: [0, 10, 20, 30, 40],
    dotCaption: "Each dot = one blog post published on your site (Domination: 10 a month)",
    srSummaryCaption: "Visual comparison of agency vs Epicware delivery across Day 1, 30, 60, 90 and 120",
  },

  fourNumbers: {
    heading: "Four numbers. That's the whole difference.",
    cards: [
      {
        label: "GUARANTEE CLOCK STARTS",
        agency: "Month 2",
        epicware: "Day 1",
        note: "No waiting for content upload before the clock runs.",
      },
      {
        label: "POSTS PUBLISHED / YEAR",
        agency: "24",
        epicware: "120",
        note: "Published on your site by us, plus content written for AI citation.",
      },
      {
        label: "WHO DOES THE WORK",
        agency: "You",
        epicware: "Us",
        note: "Page edits, blogs and schema go live without hourly billing.",
      },
      {
        label: "MONTHS LOCKED IN",
        agency: "6–12",
        epicware: "0",
        note: "Month to month. Cancel with 30 days' notice.",
      },
    ],
  },

  valueStack: {
    eyebrow: "WHAT LANDS IN YOUR BUSINESS EVERY MONTH",
    heading: "Not a report. A delivery.",
    body: "Every month on Domination, this is what ships. Published by us, live on your site and your Google profile, visible on your dashboard.",
    boxHeader: "Domination · monthly",
    boxBadge: "BEST VALUE",
    items: [
      { label: "10 SEO blog posts, published on your site", key: "posts" as const },
      { label: "5 bad review removals", key: "reviewRemovals" as const },
      { label: "AI citation work on 3 tracked keywords", key: "aiCitation" as const },
      { label: "DA20+ backlinks", key: "backlinks" as const },
      { label: "GEO audit, schema and authority signals", key: "geo" as const },
      { label: "Live dashboard + Revenue Impact Report", key: "dashboard" as const },
      { label: "Competitors you choose, tracked weekly", key: null, fixedValue: "Included" },
    ],
    totalLabelPre: "Total value ",
    priceLabel: "You pay ",
    price: "S$1,800",
    priceSuffix: "/mo",
  },

  guarantee: {
    seal: {
      eyebrow: "THE EPICWARE GUARANTEE",
      big: "TOP 3",
      sub: "or we work free",
      small: "until we get you there",
      pill: "CLOCK STARTS DAY 1",
    },
    heading: "We don't promise effort. We guarantee rankings.",
    sub: "If we miss the target, you don't pay to keep waiting.",
    tiers: [
      { name: "Authority", terms: "Top 3 on Google Maps · 1 keyword · 90 days", orangeName: false },
      {
        name: "Domination",
        terms: "Top 3 on 3 keywords + named by ChatGPT or Gemini · 120 days",
        orangeName: true,
      },
      { name: "Full Stack", terms: "Ad leads in 30 days · Top 3 in 120 days", orangeName: false },
    ],
    effortLabel: "ALL WE NEED FROM YOU:",
    pills: ["✓ Approve keywords once", "✓ Share access"],
    smallPrint:
      "Bad review removal: S$200 per review, fully refunded if it isn't removed within 3 months.",
  },

  proof: {
    eyebrow: "DON'T TAKE OUR WORD FOR IT. LOOK.",
    heading: "A medical aesthetic clinic in Orchard. Day 1 vs Day 60.",
    day1: { headerLabel: "EpicMap · Day 1", badge: "Avg rank 14", badgeTone: "orange" as const },
    day60: { headerLabel: "EpicMap · Day 60", badge: "#1 Map Pack", badgeTone: "green" as const },
    illustrativeCaption: "Illustrative. Live client scan available on request.",
    ai: {
      label: "ASKED AN AI ASSISTANT",
      query: "Best aesthetic clinic in Orchard?",
      otherLines: ["2. …", "3. …"],
      fallbackClientName: "Our client",
    },
    review: {
      quote: "Ranked within top 3 within 1–2 months, exceeded our expectations.",
      name: "Clinic Director",
      sub: "Verified Google review",
    },
    stats: [
      { label: "MEDICAL AESTHETIC · 60 DAYS", value: "+25%", note: "calls and enquiries" },
      { label: "HAIR SALON · ~4 MONTHS", value: "1,091 → 4,184", note: "monthly users" },
      {
        label: "5-OUTLET RESTAURANT · 6 MONTHS",
        value: "100+",
        note: "orders a day, cited first in AI Overviews",
      },
    ],
    caseStudiesHref: "/case-studies",
    caseStudiesLabel: "See the full case studies →",
  },

  auditCta: {
    lossLine: "Every month you're not in the top 3, those calls go to whoever is.",
    heading: "See exactly where you're losing customers.",
    body: "A live map scan, your AI visibility, and the competitors you choose. If we can't show you a gap worth fixing, we'll tell you.",
    inputLabel: "Your business name",
    inputPlaceholder: "Your business name",
    submitLabel: "Show me my gaps →",
    belowFormPre: "Free. No signup. Or ",
    belowFormLink: "book a strategy call",
    belowFormHref: "/book-demo#form",
    previewHeader: "Your free audit",
    previewSample: "Sample",
    previewTiles: [
      { label: "GBP score", value: "54" },
      { label: "AI visibility", value: "0/5" },
      { label: "Map Pack", value: "#11" },
    ],
    previewCaption: "Yours unlocks after the scan",
  },

  stickyCta: {
    text: "Top 3 or we work free.",
    buttonLabel: "Get my free audit",
    dismissLabel: "Dismiss",
  },
};

export type WhyContent = typeof WHY_CONTENT;
