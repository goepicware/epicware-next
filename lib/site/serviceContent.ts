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

export interface ServiceContent {
  slug: string;
  h1: string;
  heroDescription: string;
  /** "What it does and the outcomes" — 4-6 concrete, non-numeric capability statements. */
  outcomes: string[];
  process: ServiceProcessStep[];
  software: {
    products: string[]; // product slugs from lib/site/products or just names used elsewhere (EpicMap, EpicReview, ...)
    description: string;
  };
  /** Intro line for the proof section, explicitly labelled "Singapore results" per the brief. */
  proofIntro: string;
  caseStudies: ServiceCaseStudy[];
  faqs: ServiceFaq[];
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
    h1: "Local SEO Services",
    heroDescription:
      "Google Maps rank tracking, citation building, and competitor analysis — the work that decides whether your business shows up when someone nearby searches for what you sell.",
    outcomes: [
      "Weekly rank tracking across the specific keywords and areas that drive your foot traffic",
      "Citations corrected and kept consistent across the directories that feed Google Maps",
      "Competitor analysis that shows exactly why a rival outranks you, not just that they do",
      "Google Business Profile completeness tied directly into your local rank, not treated separately",
      "One dashboard across every outlet if you run more than one location",
    ],
    process: [
      {
        title: "Rank baseline",
        description:
          "We track your current position across every relevant keyword and district before touching anything, so every later change has a before-and-after.",
      },
      {
        title: "Citation audit and correction",
        description:
          "We check your business listing across every directory that feeds Google's local algorithm and fix inconsistencies — name, address, phone, category.",
      },
      {
        title: "Competitor gap analysis",
        description:
          "We compare your profile against the businesses actually outranking you — review count, post frequency, category selection — and identify the specific gaps.",
      },
      {
        title: "Weekly tracking on live software",
        description:
          "Rank movement, citation status, and competitor changes all show up on the same dashboard our team works from, updated weekly.",
      },
    ],
    software: {
      products: ["EpicMap"],
      description:
        "Local SEO work runs on EpicMap, our rank-tracking platform — grid-level visibility into exactly where you rank across every district and keyword, not a single average position.",
    },
    proofIntro:
      "Epicware's local SEO work is proven today in one market: Singapore. These are real, dated client results — not projections.",
    caseStudies: [
      {
        title: "Multi-Outlet F&B Local SEO Case Study Singapore",
        href: "/case-studies/multi-outlet-restaurant-seo-case-study-singapore",
        stat: "Multi-outlet rank growth",
      },
      {
        title: "Restaurant Multi-Outlet Growth Singapore",
        href: "/case-studies/restaurant-multi-outlet-growth-singapore",
        stat: "Restaurant case study",
      },
    ],
    faqs: [
      {
        question: "What's the difference between local SEO and regular SEO?",
        answer:
          "Local SEO is about ranking in Google Maps and the local 3-pack for searches tied to a location — it's driven by your Google Business Profile, citations, and reviews. Regular website SEO is about ranking your site in organic search results generally. Businesses with a physical location or service area typically need local SEO first.",
      },
      {
        question: "What are citations and why do they matter?",
        answer:
          "A citation is any online listing of your business name, address, and phone number — directories, maps apps, industry listings. Inconsistent citations (different spellings, old addresses, wrong phone numbers) confuse Google's local algorithm and can suppress your rank even if everything else is correct.",
      },
      {
        question: "Can you manage local SEO for multiple outlets?",
        answer:
          "Yes — each outlet gets its own keyword strategy, rank tracking, and citation management, reported side by side in one dashboard, whether you run two outlets or twenty.",
      },
      {
        question: "How is rank tracking different from a Google Maps screenshot?",
        answer:
          "A single screenshot shows your rank from one point, for one search. Grid-based rank tracking checks your position from many points across the area you actually serve, for every relevant keyword — because your rank genuinely differs block by block, and a customer three streets away may see a completely different result.",
      },
      {
        question: "Do reviews affect local SEO rank?",
        answer:
          "Yes. Review count, rating, and recency are documented local ranking factors. Local SEO and review management work together for that reason — see Review Management for the review side specifically.",
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
    proofIntro:
      "This is Epicware's newest service line. AI search visibility results from Singapore clients are still being gathered — the verified rating below reflects Epicware overall, not a dedicated AI-search case study yet.",
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
    h1: "Review Management",
    heroDescription:
      "Review generation, AI-drafted responses, widgets, and analytics across every Google listing — so new reviews come in consistently and every one of them gets a reply.",
    outcomes: [
      "Real-time monitoring across every Google Business Profile you manage, with instant alerts on new reviews",
      "AI-drafted responses that reference what the reviewer actually said, not a copy-paste template",
      "Automated review generation campaigns timed to when the customer experience is still fresh",
      "Your best reviews displayed on your own website automatically, kept current",
      "Review velocity, rating trend, and response rate visible on one live dashboard",
    ],
    process: [
      {
        title: "Connect every profile",
        description:
          "We connect to each Google Business Profile you manage via API so every incoming review is monitored in real time, across every outlet.",
      },
      {
        title: "Response workflow",
        description:
          "New reviews trigger an alert and an AI-drafted response referencing the specific review — you approve with one click or let it auto-publish, your choice.",
      },
      {
        title: "Generation campaigns",
        description:
          "Automated WhatsApp and email requests go out at the right moment — after a visit or purchase, while the experience is still fresh — to build review volume consistently.",
      },
      {
        title: "Analytics and widgets",
        description:
          "Review velocity, rating trend, and competitor comparison are tracked live, and your best reviews can be pulled directly onto your website.",
      },
    ],
    software: {
      products: ["EpicReview"],
      description:
        "Review management runs on EpicReview — real-time monitoring, AI response drafting, generation campaigns, and analytics all on one dashboard, connected directly to your Google Business Profile.",
    },
    proofIntro:
      "Epicware's review management work is proven today in one market: Singapore. These are real, dated client results — not projections.",
    caseStudies: [
      {
        title: "Clinic Review Growth Singapore — Case Study",
        href: "/case-studies/clinic-review-growth-singapore",
        stat: "Review growth case study",
      },
    ],
    faqs: [
      {
        question: "How is this different from just replying to reviews myself?",
        answer:
          "Most business owners check reviews sporadically and respond inconsistently. Real-time monitoring means you're alerted the moment a review lands, and AI-drafted responses mean a reply goes out in minutes rather than whenever someone remembers to check — important because response speed and consistency are both factors in how reviews affect your reputation.",
      },
      {
        question: "Are the AI responses generic?",
        answer:
          "No — the draft reads the specific review and references what the reviewer actually said, rather than a templated \"thank you for your feedback.\" You can edit before publishing or let it auto-publish once you're comfortable with the quality.",
      },
      {
        question: "Is it against Google's policy to ask for reviews?",
        answer:
          "No, but how you ask matters. Google's policy prohibits incentivising, gating, or soliciting only positive reviews. Our generation campaigns ask every customer, without payment or selection by sentiment — which is both the compliant approach and the honest one.",
      },
      {
        question: "Can you manage reviews across multiple outlets?",
        answer:
          "Yes — each outlet's reviews, analytics, and response history are tracked separately and reported side by side in one dashboard.",
      },
      {
        question: "What if a review is fake or violates Google's policies?",
        answer:
          "That's a removal case rather than a response case — see Review Removal for how we handle reviews that violate Google's content policies specifically.",
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
    proofIntro:
      "Epicware's review work — including removal — is proven today in one market: Singapore. These are real, dated client results — not projections.",
    caseStudies: [],
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
