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
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT[slug];
}
