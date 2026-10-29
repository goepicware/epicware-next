/**
 * Rich content for the 6 global /services/{service}/ pages.
 *
 * These pages are the "parent" every /locations/{country}/{service}/
 * page sits under — market-neutral by design (no country name, no
 * country-specific regulation/platform claims), which both satisfies
 * what a global overview page should be AND keeps it genuinely distinct
 * from every country page under scripts/check-page-similarity.ts's
 * parent-vs-child comparison (see docs/restructure/phase-5-requirements.md).
 *
 * Only "seo" is filled in so far — approved as the one page to finish
 * before the other 5. Keep this structure when adding them; don't let a
 * later entry regress to thinner copy than this one.
 */

import { PROOF, PRICING } from "@/lib/site/proof";

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceCaseStudy {
  title: string;
  href: string;
  stat: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

/** A sourced, country-agnostic fact backing this service's copy — same shape as content.ts's MarketFact, kept separate because this file isn't frontmatter-driven. Every sourceUrl here must return 200 (verified manually with the same lib/url-cache.ts tooling check-page-substance.ts uses for money pages — this file has no draft gate of its own to hang an automated check off). */
export interface ServiceFact {
  fact: string;
  sourceUrl: string;
}

/** A free-form prose block (e.g. "the problem", "how it actually works") rendered before the outcomes list. */
export interface ServiceNarrativeBlock {
  heading: string;
  paragraphs: string[];
}

/**
 * A folded-in former sub-page, rendered as a full anchored section on the
 * parent page instead of its own standalone route. `id` is set directly
 * as the section's DOM id (not derived from heading text via a slugger),
 * so it must exactly match the anchor next.config.ts's redirects send
 * the old sub-page URLs to.
 */
export interface ServiceSubSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface ServiceContent {
  slug: string;
  h1: string;
  /** Falls back to "{h1} | Epicware" when omitted — set explicitly when the SEO title should differ from the on-page H1. */
  metaTitle?: string;
  heroDescription: string;
  /** Falls back to heroDescription when omitted. */
  metaDescription?: string;
  /** "What it does and the outcomes" — 4-6 concrete, non-numeric capability statements. */
  outcomes: string[];
  /** Optional prose before the outcomes list — "the problem" / "how it works" framing for pages with enough real substance to support it. */
  narrative?: ServiceNarrativeBlock[];
  process: ServiceProcessStep[];
  software: {
    products: string[]; // product slugs from lib/site/products or just names used elsewhere (EpicMap, EpicReview, ...)
    description: string;
  };
  /**
   * Intro line for the proof section, explicitly labelled "Singapore
   * results" per the brief. The whole section is hidden when there's
   * nothing to show it with — set EITHER caseStudies (preferred) OR
   * statProof (a PROOF.* figure, for when no case study is a genuine
   * match for this service — see review-removal). Never both; never
   * neither unless the section should actually be hidden.
   */
  proofIntro?: string;
  caseStudies: ServiceCaseStudy[];
  statProof?: { value: string; label: string };
  /** Sourced facts backing the copy, shown with a link to each source. */
  facts?: ServiceFact[];
  /** Former standalone sub-pages, folded in as anchored sections — see ServiceSubSection. */
  subSections?: ServiceSubSection[];
  /** Short pricing line shown under the hero CTA, e.g. "From USD 899/mo (SGD in Singapore)". */
  pricingNote?: string;
  faqs: ServiceFaq[];
}

/** "From USD {monthly}/mo (SGD in Singapore)" — same number either currency, per PRICING.plans' own header comment. */
function pricingNoteFor(planKey: keyof typeof PRICING.plans): string {
  return `From USD ${PRICING.plans[planKey].monthly}/mo (SGD in Singapore)`;
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  seo: {
    slug: "seo",
    h1: "SEO Services",
    heroDescription:
      "Website and content SEO for organic search visibility beyond the Google Maps Pack — technical fixes, on-page optimisation, content, and link building, run on software you can watch live instead of a monthly PDF.",
    outcomes: [
      "Technical SEO issues found and fixed — crawl errors, page speed, structured data, duplicate content",
      "On-page optimisation across your highest-intent pages — titles, headings, internal linking, content gaps",
      "Content built around the keywords your actual customers search, not just traffic volume",
      "Link building focused on relevant, earnable links rather than bulk low-quality placements",
      "Weekly rank tracking so you see movement as it happens, not once a month",
    ],
    process: [
      {
        title: "Technical audit",
        description:
          "We crawl the site, check Core Web Vitals, indexation, and structured data, and prioritise fixes by actual ranking impact — not a 100-point checklist nobody reads.",
      },
      {
        title: "Keyword and content mapping",
        description:
          "We map your existing pages against the keywords worth ranking for, find the gaps, and plan new content around search intent rather than guesswork.",
      },
      {
        title: "On-page and technical fixes",
        description:
          "Our team implements the fixes directly — titles, headings, internal links, schema, page speed — and tracks each change against the rank data.",
      },
      {
        title: "Content and link building",
        description:
          "We write and publish content targeted at the mapped keywords, then build links to the pages that need authority most, not just the homepage.",
      },
      {
        title: "Weekly reporting on live software",
        description:
          "Every ranking change, every fix, and every new link shows up on the same dashboard our team works from — updated weekly, not monthly.",
      },
    ],
    software: {
      products: ["EpicMap", "EpicReview"],
      description:
        "SEO work is tracked on EpicMap, Epicware's own rank-tracking dashboard — the same screen our team uses, not a summarised report. Review signals that affect organic trust are handled through EpicReview.",
    },
    proofIntro:
      "Epicware's SEO work is proven today in one market: Singapore. These are real, dated client results — not projections.",
    caseStudies: [
      {
        title: "Hair Salon SEO Case Study Singapore: 283% Growth",
        href: "/case-studies/hair-salon-seo-singapore",
        stat: "283% growth",
      },
      {
        title: "Multi-Outlet Restaurant SEO Case Study",
        href: "/case-studies/multi-outlet-restaurant-seo-case-study-singapore",
        stat: "Multi-outlet rank growth",
      },
      {
        title: "Aesthetic Clinic SEO Singapore",
        href: "/case-studies/aesthetic-clinic-seo-singapore",
        stat: "Clinic case study",
      },
    ],
    faqs: [
      {
        question: "What's the difference between SEO and local SEO?",
        answer:
          "Local SEO is about ranking in Google Maps and the local 3-pack for \"near me\" searches — it's driven by your Google Business Profile, reviews, and citations. SEO (website/content SEO) is about ranking your website itself in regular Google search results, for searches that aren't inherently local. Most businesses need both; they reinforce each other.",
      },
      {
        question: "How long does SEO take to show results?",
        answer:
          "Technical fixes and on-page changes can show movement within weeks. Content and link-building results typically take longer — several months is normal for competitive keywords. Anyone promising guaranteed rankings in days is not describing real SEO.",
      },
      {
        question: "Do you guarantee a #1 ranking?",
        answer:
          "No agency can honestly guarantee a specific ranking position — Google's own guidance says no one can pay for better organic placement. What we commit to is the work itself, tracked openly on the same dashboard we use, so you can see exactly what's been done and what moved as a result.",
      },
      {
        question: "Is SEO a one-time project or ongoing?",
        answer:
          "Ongoing. Search algorithms change, competitors keep publishing, and rankings erode without maintenance. Most of our SEO work is structured as a continuous process — audit, fix, build, measure, repeat — not a one-off project that's handed off and forgotten.",
      },
      {
        question: "What software do you use for SEO, and can I see it?",
        answer:
          "Our team runs SEO work on EpicMap, our own rank-tracking platform. Clients get their own login to the same dashboard we work from — you see ranking changes as they happen, not in a monthly summary written after the fact.",
      },
    ],
  },

  "local-seo": {
    slug: "local-seo",
    h1: "Local SEO Services That Put You in the Map Pack, Not Just the Report",
    metaTitle: "Local SEO Services | Rank in Google Maps & the Local Pack | Epicware",
    heroDescription:
      "When someone nearby searches for what you sell, Google shows three businesses on a map and everyone else gets scrolled past. Local SEO is the work that decides which three — categories, citations, competitor gaps and rank tracking, measured street by street on our own software.",
    metaDescription:
      "Local SEO services that win the Map Pack: category strategy, citations, competitor gap analysis and grid-based rank tracking on our own software. Free local visibility scan.",
    narrative: [
      {
        heading: "You can rank #1 at your door and be invisible two streets away",
        paragraphs: [
          "Most businesses check their ranking by searching from their own shop — the one place Google is most likely to show them. A customer a short walk away often sees a completely different top three, because distance is built into how Google ranks local results, alongside relevance and prominence. Most owners never see that map, so they never find out where they're losing.",
          "Customers rarely check just one place before they choose, either. In BrightLocal's 2026 consumer survey, people used an average of six review sites when picking a local business, and AI search engines ranked as the third most-used source of recommendations. A business that only looks after its Google profile leaves gaps everywhere else people look.",
        ],
      },
      {
        heading: "How local rankings actually work",
        paragraphs: [
          "Google says it weighs three things: relevance (how well your business matches the search), distance (how far you are from the searcher) and prominence (how well-known and trusted you are, through reviews, citations, links and engagement). You can't move your shop, but you can make sure you're properly visible across the whole area you serve, and you can build the prominence signals that are within your control.",
          "Category choice matters more than most owners realise. Whitespark's 2026 survey of local SEO experts ranks the primary Google Business Profile category as the single most important local ranking factor, with additional categories at #8 — and for the first time, that survey also scored AI search visibility as a factor. Picking \"Restaurant\" when you should be \"Ramen Restaurant\" can hold you back on every search that matters.",
        ],
      },
    ],
    outcomes: [
      "Google Business Profile optimisation — categories, services, attributes, photos and weekly posts, kept within Google's guidelines",
      "Citations audited and corrected across the directories and data sources that feed Google Maps, with inconsistencies fixed, not just new listings piled on",
      "Competitor gap analysis that shows exactly what's outranking you — review count, categories, photos, posts and citations — ranked by likely impact",
      "Location and service-area pages written for real local substance, not mass-produced near-identical city pages",
      "Grid-based rank tracking across your whole area every week, not one ranking from one spot",
      "One dashboard across every outlet if you run more than one location, with side-by-side comparison",
    ],
    process: [
      {
        title: "Week 1: Baseline",
        description:
          "A grid scan across your area, a citation audit, and a category and competitor review — a dated starting point, so every result after this is measured, not claimed.",
      },
      {
        title: "Weeks 1–4: Fix the foundations",
        description:
          "Profile changes, citation corrections, category strategy, and the missing location pages get planned and built.",
      },
      {
        title: "Every week: Build",
        description:
          "New citations, posts, review replies and content go live, and the grid gets re-scanned so you see the movement.",
      },
      {
        title: "Every month: Report and adjust",
        description:
          "Grid movement, calls, direction requests and website visits from your profile — effort shifts to the searches that are stalling.",
      },
    ],
    software: {
      products: ["EpicMap", "EpicReview", "EpicSocial"],
      description:
        "Local SEO runs on EpicMap, EpicReview and EpicSocial — the same dashboards our team works from. EpicMap tracks your rankings on a grid across your area, EpicReview handles reviews, and EpicSocial keeps your profile posting.",
    },
    proofIntro:
      "Epicware's local SEO work is proven today in one market: Singapore. These are real, dated client results — not projections.",
    caseStudies: [
      {
        title: "Aesthetic Clinic SEO Case Study Singapore: 60 Days",
        href: "/case-studies/aesthetic-clinic-seo-singapore",
        stat: "#1 in the Map Pack within 60 days",
      },
      {
        title: "Multi-Outlet F&B Local SEO Case Study Singapore",
        href: "/case-studies/multi-outlet-restaurant-seo-case-study-singapore",
        stat: "+24.1% organic traffic growth",
      },
    ],
    facts: [
      {
        fact: "Google says local results are based mainly on relevance, distance and prominence.",
        sourceUrl: "https://support.google.com/business/answer/7091",
      },
      {
        fact: "Whitespark's 2026 Local Search Ranking Factors survey asked 47 local SEO experts to score 187 factors, and for the first time included AI search visibility.",
        sourceUrl: "https://whitespark.beehiiv.com/p/the-2026-local-search-ranking-factors-are-here",
      },
      {
        fact: "Whitespark lists the primary Google Business Profile category as the #1 local ranking factor, and additional categories at #8 in its 2026 survey.",
        sourceUrl: "https://whitespark.ca/google-business-profile-guide/categories/",
      },
      {
        fact: "In BrightLocal's 2026 consumer survey, people used an average of six review sites when choosing a local business, and AI search engines ranked as the third most-used source of recommendations.",
        sourceUrl: "https://www.brightlocal.com/research/local-consumer-review-survey/",
      },
    ],
    subSections: [
      {
        id: "citation-building",
        heading: "Citation Building and Cleanup",
        paragraphs: [
          "Citations are listings of your business name, address and phone number on directories, maps and data sources across the web. When they disagree with each other — an old address, a different phone number, a renamed business, a unit number formatted differently — search engines and AI tools get mixed signals about who you are.",
          "We audit your existing listings, correct the inconsistencies, and build new citations on the sources that matter for your industry and country. For a business that's recently moved, changed its number, or rebranded, this is usually the single highest-leverage fix available.",
        ],
      },
      {
        id: "competitor-analysis",
        heading: "Competitor Gap Analysis",
        paragraphs: [
          "For your most valuable searches, we look at the businesses outranking you and compare everything visible: categories, review count and recency, rating, photos, posts, website content and citations.",
          "The result is a specific list of what they have that you don't, ranked by how much each gap is likely to cost you. You stop guessing which lever to pull and start closing gaps in order of impact — and for multi-outlet businesses, the comparison runs per location, since your competitors differ by area.",
        ],
      },
      {
        id: "rank-tracking",
        heading: "Grid-Based Rank Tracking",
        paragraphs: [
          "Instead of one ranking from one spot, our EpicMap software checks your position from a grid of points spread across your area, every week. You see a heat map: strong in some streets, weak in others.",
          "Every fix we make is measured against that grid, so you can watch your coverage expand over time — not just trust that a single screenshot from your own shopfront means you're visible everywhere.",
        ],
      },
    ],
    pricingNote: pricingNoteFor("authority"),
    faqs: [
      {
        question: "What's the difference between local SEO and regular SEO?",
        answer:
          "Local SEO wins the Map Pack and searches with local intent — \"near me\", \"in [area]\" — mainly through your Google Business Profile, reviews and citations. Regular SEO wins organic results through your website's own pages, content and authority. Most businesses with a physical location or service area benefit from both; they reinforce each other.",
      },
      {
        question: "Which matters more, my Google Business Profile or my website?",
        answer:
          "For the Map Pack, your profile carries the most weight. But your website feeds relevance and prominence too, and it's where many customers decide once they click through. Strong local SEO treats them as one system rather than choosing between them.",
      },
      {
        question: "What are citations, and do they still matter?",
        answer:
          "They're your business details listed on directories and data sources across the web. They matter most for consistency — mismatched details confuse search engines and AI tools about which information is correct. Fixing inconsistencies usually matters more than piling up new listings.",
      },
      {
        question: "Why does my ranking look different when I search from another location?",
        answer:
          "Because distance is part of how Google ranks local results. That's why we track from a grid of points across your area rather than from a single spot near your own shopfront.",
      },
      {
        question: "Can you manage local SEO for many locations?",
        answer:
          "Yes. Each location gets its own tracking and reporting, with a side-by-side view across every outlet in one dashboard.",
      },
      {
        question: "How long does local SEO take?",
        answer:
          "Profile, category and citation fixes often show in local rankings within 30–60 days. Competitive categories and areas take longer, and your grid shows the progress week by week.",
      },
      {
        question: "Can you guarantee a #1 ranking?",
        answer:
          "No honest provider can — Google decides rankings, not any vendor. Our plans carry specific, written guarantees about the work itself and the measured outcomes; see pricing for the terms.",
      },
    ],
  },

  "google-business-profile": {
    slug: "google-business-profile",
    h1: "Google Business Profile Services",
    heroDescription:
      "Setup, optimisation, and ongoing post scheduling to keep your Google Business Profile complete and ranking-ready — the single biggest lever most businesses leave half-finished.",
    outcomes: [
      "Every one of the documented GBP ranking elements checked and completed, not just the basics",
      "Category selection reviewed against what actually drives your local rank, not guessed",
      "Weekly posts and updates so your profile reads as active, not abandoned",
      "Photos, services, and attributes kept current instead of set once and forgotten",
      "Multi-outlet profiles managed from one dashboard with per-location visibility",
    ],
    process: [
      {
        title: "Full profile audit",
        description:
          "We score your profile against every documented ranking element — category, description, photos, hours, attributes, Q&A — and find what's missing or wrong.",
      },
      {
        title: "Prioritised fixes",
        description:
          "The audit becomes an action list ranked by actual impact on rank, not a generic checklist — critical gaps first.",
      },
      {
        title: "Setup or correction",
        description:
          "For new profiles we handle full setup; for existing ones we implement fixes directly, including category and attribute corrections that are easy to get wrong.",
      },
      {
        title: "Ongoing post scheduling",
        description:
          "Weekly posts keep the profile active — a signal Google's algorithm weighs — without you needing to remember to log in.",
      },
    ],
    software: {
      products: ["EpicMap"],
      description:
        "GBP work is tracked on EpicMap — audit scores, post history, and profile completeness all visible on the same dashboard our team uses, updated as changes go live.",
    },
    proofIntro:
      "Epicware's GBP work is proven today in one market: Singapore. These are real, dated client results — not projections.",
    caseStudies: [
      {
        title: "Salon Local SEO Singapore — Google Maps Case Study",
        href: "/case-studies/salon-whatsapp-automation",
        stat: "Google Maps case study",
      },
      {
        title: "Restaurant Multi-Outlet Growth Singapore",
        href: "/case-studies/restaurant-multi-outlet-growth-singapore",
        stat: "Restaurant case study",
      },
    ],
    faqs: [
      {
        question: "What does a Google Business Profile audit check?",
        answer:
          "A full audit covers every documented ranking element: primary and secondary category, name and address consistency, phone number, website link, hours and special hours, description, photo count and recency, services and products listed, attributes, Q&A activity, post frequency, and review count. Each is scored by its actual impact on rank.",
      },
      {
        question: "Why would an incomplete profile hurt my rank?",
        answer:
          "Google's local algorithm treats your Business Profile as the primary data source for Maps results. Missing or inconsistent elements reduce Google's confidence in your profile relative to competitors who've completed those same fields — a missing or wrong primary category is typically the most severe gap.",
      },
      {
        question: "How often should a profile be updated?",
        answer:
          "At minimum, weekly posts and regular photo additions — a profile that hasn't been touched in months reads as inactive. A full audit should be re-run periodically since Google updates its weighting of different ranking factors and your competitors keep changing theirs.",
      },
      {
        question: "Can you set up a profile from scratch?",
        answer:
          "Yes. For a business with no existing profile, we handle full setup — verification, category selection, description, initial photos and services — built correctly from the start rather than fixed later.",
      },
      {
        question: "Do you manage profiles for multiple locations?",
        answer:
          "Yes — each outlet's profile is audited, optimised, and posted to separately, with per-location visibility in one dashboard rather than a single blended view.",
      },
    ],
  },

  "ai-search-visibility": {
    slug: "ai-search-visibility",
    h1: "AI Search Visibility",
    heroDescription:
      "Answer Engine Optimisation, GEO, and AI citation building — the work that determines whether ChatGPT, Gemini, and Google AI Overviews recommend your business when someone asks.",
    outcomes: [
      "Checks across multiple major AI assistants for whether your business gets recommended, not just one",
      "Content and structured data built so AI systems can verify what your business actually does",
      "Citation building across the sources AI assistants pull from when answering local recommendation queries",
      "Clear visibility into which AI platforms currently surface you and which don't",
    ],
    process: [
      {
        title: "AI visibility baseline",
        description:
          "We check how your business currently appears — or doesn't — across major AI assistants for the queries your customers would actually ask.",
      },
      {
        title: "Source strengthening",
        description:
          "AI assistants recommend businesses they can verify across trusted sources: your website, Google Business Profile, reviews, and directories. We strengthen each of these.",
      },
      {
        title: "Structured data and content",
        description:
          "We add and correct structured data and on-page content so AI crawlers can accurately parse what your business offers, rather than guessing.",
      },
      {
        title: "Re-check and track",
        description:
          "We re-run visibility checks across the same AI assistants over time so you can see whether the work is actually changing what gets recommended.",
      },
    ],
    software: {
      products: ["EpicMap"],
      description:
        "AI visibility checks run through our own tooling, querying multiple major AI assistants directly to see whether and how your business is mentioned — not a one-time report, a repeatable check.",
    },
    // No proofIntro/caseStudies/statProof — the whole "Singapore Results"
    // section is hidden on this page. This is Epicware's newest service
    // line; no case study is specifically about it, and there's no
    // PROOF.* figure that honestly represents it either. Add real proof
    // here once it exists, rather than reusing the general rating.
    caseStudies: [],
    faqs: [
      {
        question: "What's the difference between AEO, GEO, and traditional SEO?",
        answer:
          "Traditional SEO targets ranking in a list of blue links. AEO (Answer Engine Optimisation) and GEO (Generative Engine Optimisation) target being the answer an AI assistant gives directly — ChatGPT, Gemini, Google AI Overviews. The sources that matter overlap with SEO (your website, GBP, reviews) but how the content needs to be structured and verified differs.",
      },
      {
        question: "Can you guarantee ChatGPT will recommend my business?",
        answer:
          "No one can guarantee a specific AI assistant's output — these systems change their answers over time and aren't controlled by any optimisation vendor. What we do is strengthen the verifiable sources AI systems actually pull from, which is the documented mechanism behind AI recommendations.",
      },
      {
        question: "How do you check if my business shows up in AI search?",
        answer:
          "We query multiple major AI assistants directly with the kinds of questions your customers would realistically ask, and record whether and how your business is mentioned — a direct check, not an estimate.",
      },
      {
        question: "Is this only relevant for certain industries?",
        answer:
          "No — any business that depends on being discovered for \"best [category] near me\"-type queries benefits, since that's exactly the query pattern shifting from search results to AI assistants.",
      },
    ],
  },

  "review-management": {
    slug: "review-management",
    h1: "Review Management That Turns Every Review Into a Reason to Choose You",
    metaTitle: "Review Management Services | Monitor, Reply & Grow Reviews | Epicware",
    heroDescription:
      "Your reviews are the first thing a stranger checks before they call. We keep new reviews coming in, make sure every one gets a thoughtful reply, and show you what customers are really saying — across every location, in one place.",
    metaDescription:
      "Review management that keeps reviews coming and every one answered: real-time monitoring, AI-drafted replies, policy-safe review requests and analytics. Free review health check.",
    narrative: [
      {
        heading: "Silence costs more than a bad review",
        paragraphs: [
          "A one-star review hurts. A one-star review with no reply hurts more. In BrightLocal's 2026 survey, 89% of consumers expected businesses to respond to reviews, and 42% said they were unlikely to use a business that ignores them. Yet most owners reply when they remember, copy-paste the same line, or leave reviews unanswered for weeks.",
          "The good news is that replying works, and it's measurable. Researchers who studied tens of thousands of hotel reviews found that once hotels started replying, they received 12% more reviews and their average rating rose by 0.12 stars. Replies didn't stop complaints, but short, angry reviews dropped — because people write differently when they know the business is listening.",
        ],
      },
    ],
    outcomes: [
      "Real-time monitoring across every Google Business Profile you manage, with instant alerts the moment a new review lands",
      "AI-drafted replies that reference what the reviewer actually said, ready to approve or send, with sensitive reviews always routed to a human first",
      "Review generation within Google's rules — your review link and QR codes, requested by WhatsApp, SMS or email, with no incentives and no gating",
      "Rating trend, review volume, recency, response rate and response time tracked per location, against your nearest competitors",
      "Your real Google reviews shown honestly on your own website, always current, clearly labelled if you feature a selection",
    ],
    process: [
      {
        title: "Connect",
        description:
          "We link every location's Google Business Profile and capture a baseline — rating, volume, recency and response rate.",
      },
      {
        title: "Catch up",
        description: "Unanswered reviews get replies, starting with the most recent and most visible.",
      },
      {
        title: "Run",
        description:
          "Monitoring, AI-drafted replies and review requests run continuously, with your approval wherever you want it.",
      },
      {
        title: "Report",
        description: "Monthly reporting on rating, volume, response time and the themes behind them, per location.",
      },
    ],
    software: {
      products: ["EpicReview"],
      description:
        "Review management runs on EpicReview — one inbox for every location, AI drafts in your brand voice, alerts for reviews that need a human, and analytics that update as reviews arrive.",
    },
    proofIntro:
      "Epicware's review management work is proven today in one market: Singapore. These are real, dated client results — not projections.",
    caseStudies: [
      {
        title: "Salon Local SEO Singapore — Google Maps Case Study",
        href: "/case-studies/salon-whatsapp-automation",
        stat: "150+ reviews per outlet",
      },
      {
        title: "Clinic Review Growth Singapore — Case Study",
        href: "/case-studies/clinic-review-growth-singapore",
        stat: "Review growth case study",
      },
    ],
    facts: [
      {
        fact: "A Marketing Science study of TripAdvisor hotel reviews (Proserpio & Zervas) found that hotels which began replying to reviews saw a 12% increase in review volume and a 0.12-star increase in ratings.",
        sourceUrl: "https://open.bu.edu/items/9b759580-53d3-44ff-975e-c17d5641abcc",
      },
      {
        fact: "Google says replying to reviews shows customers you value their feedback, and that reviewers are notified of your reply and can update their review afterwards.",
        sourceUrl: "https://support.google.com/business/answer/3474050",
      },
      {
        fact: "Google prohibits offering incentives for reviews, and encourages businesses to ask for reviews using a link or QR code and to value all reviews.",
        sourceUrl: "https://support.google.com/business/answer/3474122",
      },
      {
        fact: "In BrightLocal's 2026 survey, 89% of consumers expected businesses to respond to reviews, and 42% were unlikely to use a business that ignores them.",
        sourceUrl: "https://www.brightlocal.com/blog/smb-report-enough-reviews/",
      },
      {
        fact: "Google's content policy prohibits discouraging negative reviews or selectively soliciting positive ones.",
        sourceUrl: "https://support.google.com/contributionpolicy/answer/7400114",
      },
    ],
    subSections: [
      {
        id: "ai-review-response",
        heading: "AI-Drafted Replies, Human-Quality",
        paragraphs: [
          "Our AI reads each review — what the customer said, what they liked, what went wrong — and drafts a personal reply in your brand voice, ready to approve or send. Positive reviews get specific thanks, not \"Thanks for your review!\" Negative reviews get a calm, accountable reply that invites the customer to take it offline.",
          "Sensitive reviews always go to a human before anything is posted. Google notifies reviewers when you reply, and they can update their review afterwards, so a good reply can genuinely change the outcome.",
        ],
      },
      {
        id: "review-generation",
        heading: "Review Generation, Within the Rules",
        paragraphs: [
          "A steady flow of recent reviews matters to customers and to local rankings. We set up the tools Google itself recommends — your review link and QR codes — and send review requests by WhatsApp, SMS or email after a visit or purchase. You can also broadcast a review request to your existing customer list over WhatsApp, straight from the dashboard, to customers who've agreed to hear from you.",
          "We never offer incentives for reviews, never discourage negative ones, and never ask only the customers we expect to be happy — in line with Google's policies. Broadcasts go out in line with WhatsApp's business messaging rules and local privacy law.",
        ],
      },
      {
        id: "reputation-analytics",
        heading: "Reputation Analytics",
        paragraphs: [
          "Rating trend, review volume, review recency, response rate, response time, and the themes customers mention most — tracked per location and against your nearest competitors. You see what's driving your rating up or down, so you can fix the cause, not just the reviews.",
        ],
      },
      {
        id: "review-widgets",
        heading: "Review Widgets for Your Website",
        paragraphs: [
          "Show your real Google reviews on your own site, so visitors don't have to leave to check you out. Widgets display reviews honestly. If you choose to feature a selection, it's clearly labelled with a link to all your reviews — selectively showcasing only the good ones can mislead customers and breach consumer rules in markets like the UK and US.",
        ],
      },
    ],
    pricingNote: pricingNoteFor("foundation"),
    faqs: [
      {
        question: "Should we reply to every review, even positive ones?",
        answer:
          "Yes. Consumers expect it, and replying to all reviews — not just complaints — shows you're listening. Keep positive replies short and specific to what the customer said.",
      },
      {
        question: "Are AI-drafted replies generic?",
        answer:
          "No — each draft responds to what that customer actually wrote, in your brand voice. You can approve every reply, or let positive ones go out automatically and review only the sensitive ones.",
      },
      {
        question: "Is it allowed to ask customers for reviews?",
        answer:
          "On Google, yes — Google recommends sharing your review link or QR code. What's not allowed is offering incentives, discouraging negative reviews, or only asking customers you expect to be happy. Some platforms have stricter rules of their own.",
      },
      {
        question: "How quickly should we reply?",
        answer:
          "As soon as practical, ideally within a day or two. Consumers increasingly see slow replies as a red flag, and monitoring plus AI drafts make fast replies realistic.",
      },
      {
        question: "Can you manage reviews across many locations?",
        answer: "Yes. Each location has its own inbox view, analytics and reporting, with a comparison across all locations.",
      },
      {
        question: "What if a review is fake?",
        answer:
          "If it breaks the platform's rules, our review removal service handles it with evidence and follow-up. If it's an honest negative review, the right move is a good reply, not a removal request.",
      },
    ],
  },

  "review-removal": {
    slug: "review-removal",
    h1: "Review Removal",
    heroDescription:
      "Removing fake and policy-violating reviews through Google's official channels — refunded in full if we can't get it taken down.",
    outcomes: [
      "Each flagged review assessed against Google's actual content policies before anything is submitted",
      "Formal removal requests filed through Google's official channels, with escalation if the first request is rejected",
      "A pay-only-if-successful structure, so the incentive is aligned with actually getting the review removed",
      "Genuine negative reviews that don't violate policy left alone — removal isn't a tool for suppressing fair criticism",
    ],
    process: [
      {
        title: "Policy assessment",
        description:
          "We check the specific review against Google's documented content policies — fake reviews, spam, conflict of interest, off-topic content, harassment — before submitting anything.",
      },
      {
        title: "Formal removal request",
        description:
          "If it's a genuine policy violation, we file a formal removal request through Google's official reporting channels, citing the specific violation.",
      },
      {
        title: "Escalation",
        description:
          "If the first request is rejected, we escalate rather than stopping — first requests don't always succeed even for genuine violations.",
      },
      {
        title: "Pay only if removed",
        description:
          "You're charged per review, refunded in full if it isn't successfully removed — we don't get paid for trying, only for the outcome.",
      },
    ],
    software: {
      products: ["EpicReview"],
      description:
        "Removal requests and their status are tracked in EpicReview alongside your other review data, so you can see exactly where each submission stands.",
    },
    // No case study is specifically about review removal yet, so this
    // uses PROOF.reviewsRemoved as the proof block instead of a
    // mismatched case-study link — same reasoning as ai-search-visibility
    // above, except here a real PROOF.* figure exists to show instead.
    proofIntro:
      "No single case study captures review removal on its own — it's usually one part of a broader reputation clean-up. Here's the real number across every removal Epicware has handled.",
    caseStudies: [],
    statProof: { value: PROOF.reviewsRemoved.value, label: "reviews removed" },
    faqs: [
      {
        question: "Is removing Google reviews legal?",
        answer:
          "Yes. We only pursue removals through Google's official policy channels — flagging reviews that violate Google's own content policies: fake reviews, spam, conflicts of interest, off-topic content. No hacking, no suppression tricks. If a review doesn't violate policy, we tell you upfront and don't submit a request.",
      },
      {
        question: "Can you remove any negative review I don't like?",
        answer:
          "No. Genuine negative reviews from real customers that don't violate Google's content policies stay up — that's by design, not a limitation. Removal only applies to reviews that are fake, spam, off-topic, or otherwise policy-violating.",
      },
      {
        question: "What happens if the review isn't removed?",
        answer:
          "You're refunded in full. The fee is tied to the outcome, not the attempt.",
      },
      {
        question: "How long does removal take?",
        answer:
          "It varies — some requests are resolved quickly, others need escalation after an initial rejection, which takes longer. We don't control Google's review timeline, only the quality and persistence of the request.",
      },
      {
        question: "What's the difference between review removal and review management?",
        answer:
          "Review management is about generating new reviews and responding to the ones you get. Review removal is specifically about getting rid of reviews that violate Google's policies. Most clients use both — see Review Management for the generation and response side.",
      },
    ],
  },
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT[slug];
}
