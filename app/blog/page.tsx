import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Google Reviews & Local SEO Blog — Singapore SMB Insights",
  description:
    "Practical guides on Google Maps ranking, review generation, bad review removal, and Local SEO for Singapore SMBs. Written by the Epicware team.",
  alternates: { canonical: "https://www.epicware.ai/blog" },
  openGraph: {
    title: "Google Reviews & Local SEO Blog | Epicware",
    description:
      "Practical guides on Google Maps ranking, review generation, and bad review removal for Singapore SMBs.",
    url: "https://www.epicware.ai/blog",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "LOCAL SEO": "bg-primary/10 text-primary border-primary/20",
  "GBP OPTIMISATION": "bg-orange-500/10 text-orange-700 border-orange-500/20",
  "AI SEARCH VISIBILITY": "bg-teal-500/10 text-teal-700 border-teal-500/20",
  "REVIEW MANAGEMENT": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "REVIEW POLICY": "bg-amber-500/10 text-amber-700 border-amber-500/20",
  "REVIEW GENERATION": "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  "BAD REVIEW REMOVAL": "bg-rose-500/10 text-rose-600 border-rose-500/20",
  "REPUTATION MANAGEMENT": "bg-violet-500/10 text-violet-700 border-violet-500/20",
  "DIGITAL MARKETING": "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
};

const posts = [
  {
    title: "SEO Tips for Small Business Owners: Rank Locally, Build Reviews, and Show Up in AI Search",
    summary:
      "A beginner-friendly, outcome-focused list of SEO tips for small business owners — Google Business Profile, review generation, local content, schema markup, and AI search visibility, with a concrete first action for each.",
    href: "/blog/seo-tips-small-business-owners",
    image: "/assets/blog/seo-tips-small-business-owners/hero-small-business-owner-laptop.jpg",
    category: "LOCAL SEO",
    date: "Sep 2026",
    readTime: "14 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "What Is SEO? Plain-English Definition for Local Businesses",
    summary:
      "SEO (search engine optimisation) is the practice of getting your business found on Google — for free. This beginner's guide explains what SEO means in 2026, why it matters for local businesses, and how it now includes Google Maps, AI search, and online reviews.",
    href: "/blog/what-is-seo-local-business",
    image: "/assets/epicmap-screen.png",
    category: "LOCAL SEO",
    date: "Aug 2026",
    readTime: "15 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "SEO Techniques Every Local Business Needs to Win in 2026",
    summary:
      "A practical, jargon-free breakdown of the most effective local SEO techniques for 2026 — from Google Business Profile completeness and NAP consistency to geogrid rank tracking and AI search visibility across ChatGPT, Gemini, and Perplexity.",
    href: "/blog/seo-techniques-local-business-2026",
    image: "/assets/google-maps-ranking-factors-framework.png",
    category: "LOCAL SEO",
    date: "Aug 2026",
    readTime: "19 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "Small Businesses in Singapore: The 2026 Visibility Reality",
    summary:
      "Why 185,000 Singapore SMBs are invisible in local search, how the Map Pack, AI recommendations, and digital word-of-mouth now operate as three separate visibility channels — and the five-step action plan to close the gap.",
    href: "/blog/small-businesses-singapore-visibility-2026",
    image: "/assets/epicmap-before-after.png",
    category: "LOCAL SEO",
    date: "Aug 2026",
    readTime: "14 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "Reputation Management for Local Businesses: Why Your Google Rating Is a Revenue Line Item",
    summary:
      "94% of consumers avoid businesses with poor reviews. How reviews decide the sale before the first visit, why AI visibility is the gap nobody is managing, and what a complete reputation system looks like.",
    href: "/blog/reputation-management-for-local-businesses",
    image: "/assets/revenue-source-hero.png",
    category: "REPUTATION MANAGEMENT",
    date: "Jul 2026",
    readTime: "13 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "Google Business Reviews: The Complete Guide to Rankings, Ratings, and Reputation",
    summary:
      "How Google evaluates reviews across 6 ranking signals, why falling below 4 stars removes you from 78% of consumer consideration, and how to build a review system that consistently ranks.",
    href: "/blog/google-business-reviews-guide",
    image: "/assets/google-review-response-framework.png",
    category: "REVIEW MANAGEMENT",
    date: "Jul 2026",
    readTime: "15 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "7 Things Small Businesses Must Demand From Any SEO Service",
    summary:
      "The 7 non-negotiables every small business owner should demand from an SEO service before signing any contract — hyperlocal rank tracking, GBP optimization, review automation, AI visibility, and more.",
    href: "/blog/seo-services-for-small-business",
    image: "/assets/epicseo-screen.png",
    category: "LOCAL SEO",
    date: "Jul 2026",
    readTime: "11 min",
    isNew: true,
    moment: "buy",
  },
  {
    title: "Does ChatGPT Make Up Citations? What It Means for Your Business",
    summary:
      "ChatGPT and AI search engines do hallucinate business citations when your data is inconsistent online. Here's why AI citation accuracy matters for Singapore SMBs and the mistakes that quietly suppress local rankings.",
    href: "/blog/does-chatgpt-make-up-citations",
    image: "/assets/ai-citation-singapore-marina-bay.jpg",
    category: "AI SEARCH VISIBILITY",
    date: "Jul 2026",
    readTime: "8 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "Which Local SEO Agencies in Singapore Are Highly Rated?",
    summary:
      "What actually drives high ratings for local SEO agencies in Singapore — review volume, recency, platform diversity — and the common mistakes businesses make when shortlisting a partner based on reviews alone.",
    href: "/blog/which-local-seo-agencies-in-singapore-are-highly-rated",
    image: "https://images.pexels.com/photos/11903704/pexels-photo-11903704.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "LOCAL SEO",
    date: "Jul 2026",
    readTime: "8 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "Can You Recommend a Good Digital Marketing Agency in Singapore for My Small Business?",
    summary:
      "A practical guide for Singapore SMBs: what to look for in a digital marketing agency, how to evaluate effectiveness, and the common pitfalls to avoid before signing a contract.",
    href: "/blog/can-you-recommend-a-good-digital-marketing-agency-in-singapore-for-my-small-business-singapore",
    image: "/assets/influencer-marketing.png",
    category: "DIGITAL MARKETING",
    date: "Jul 2026",
    readTime: "10 min",
    isNew: true,
    moment: "buy",
  },
  {
    title: "Digital Marketing Agency Singapore: Local SEO & Reputation Guide for Small Businesses",
    summary:
      "How Singapore SMBs should navigate agency selection, prioritise local SEO for Google Maps visibility, leverage reputation management for trust, and avoid common pitfalls before signing a contract.",
    href: "/blog/digital-marketing-agency-singapore-local-seo",
    image: "/assets/business-owner-male.png",
    category: "DIGITAL MARKETING",
    date: "Jul 2026",
    readTime: "9 min",
    isNew: true,
    moment: "buy",
  },
  {
    title: "10 GBP Optimisation Tips Every Local Business Needs",
    summary:
      "Ten practical GBP optimisation moves for Singapore SMBs — category selection, photo strategy, review management, posting cadence, and the common mistakes that quietly suppress local rankings.",
    href: "/blog/10-gbp-optimisation-tips-every-local-business-needs",
    image: "/assets/gbp-optimisation-tips-singapore.jpg",
    category: "GBP OPTIMISATION",
    date: "Jul 2026",
    readTime: "9 min",
    isNew: true,
    moment: "do",
  },
  {
    title: "Why Do Negative Reviews Hurt My Clinic's Reputation?",
    summary:
      "Why negative reviews cause more damage to Singapore clinics than most healthcare owners realise — the trust thresholds patients apply, the booking impact, and how to protect your clinic's rating.",
    href: "/blog/why-negative-reviews-hurt-clinic-reputation",
    image: "/assets/negative-google-review-response-framework.png",
    category: "REPUTATION MANAGEMENT",
    date: "Jul 2026",
    readTime: "7 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "What Makes Epicware the No.1 Local SEO Agency in Singapore",
    summary:
      "Epicware combines AI-powered tools, advanced review management, and proven local SEO strategies to help Singapore businesses dominate Google Maps and drive real growth.",
    href: "/blog/local-seo-agency-singapore-epicware",
    image: "/assets/epicmap-before-after.png",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "7 min",
    isNew: true,
    moment: "buy",
  },
  {
    title: "How to Handle Negative Google Reviews in Singapore",
    summary:
      "A practical playbook for Singapore business owners: how to respond to negative Google reviews, when to request removal, and how to build the review volume that makes individual negatives matter less.",
    href: "/blog/handle-negative-google-reviews-singapore",
    image: "/assets/review-management-illustration.png",
    category: "REPUTATION MANAGEMENT",
    date: "Jun 2026",
    readTime: "8 min",
    isNew: true,
    moment: "do",
  },
  {
    title: "How to Hire a Local SEO Agency in Singapore (And What to Avoid)",
    summary:
      "What real local SEO looks like versus agency hype. The right questions to ask before signing a contract, red flags to avoid, and how to evaluate agencies versus platforms.",
    href: "/blog/how-to-hire-local-seo-agency-singapore",
    image: "/assets/epicseo-screen.png",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "9 min",
    isNew: true,
    moment: "buy",
  },
  {
    title: "Negative Review Damage Control Strategy for Business Owners",
    summary:
      "How to respond to negative reviews using the L.A.S.T. framework — Listen, Apologize, Solve, Thank. Step-by-step tactics that protect your rating and turn criticism into trust.",
    href: "/blog/negative-review-damage-control",
    image: "/assets/negative-google-review-response-framework.png",
    category: "REPUTATION MANAGEMENT",
    date: "Jun 2026",
    readTime: "7 min",
    isNew: true,
    moment: "do",
  },
  {
    title: "Reputation Recovery Strategy: A 2026 Guide for SMBs",
    summary:
      "A four-pillar framework — monitoring, visibility control, response, and trust building — to help SMBs repair their online reputation after negative reviews or a crisis.",
    href: "/blog/reputation-recovery-strategy",
    image: "/assets/review-character.png",
    category: "REPUTATION MANAGEMENT",
    date: "Jun 2026",
    readTime: "7 min",
    isNew: true,
    moment: "do",
  },
  {
    title: "Types of Customer Review Platforms: 2026 Business Guide",
    summary:
      "Five types of customer review platforms — local search, general company sites, niche directories, marketplace systems, and SaaS hubs. Learn which one your business should prioritise first.",
    href: "/blog/types-of-customer-review-platforms",
    image: "/assets/epicreview-screen.png",
    category: "REPUTATION MANAGEMENT",
    date: "Jun 2026",
    readTime: "8 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "Why Review Recency Matters for Local Rankings",
    summary:
      "Review recency is the #1 local ranking factor in 2026. Reviews under 30 days carry full weight — reviews older than 180 days retain only 10–20%. Here's how to build a system that keeps your profile consistently visible.",
    href: "/blog/why-review-recency-matters-for-local-rankings",
    image: "/assets/google-review-response-time-benchmark.png",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "7 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "SEO vs Local SEO: The Difference That Could Be Costing You Walk-In Customers",
    summary:
      "Traffic went up but calls didn't? You might be playing the wrong game. Here's the distinction between SEO and Local SEO — and which one Singapore SMBs should prioritise.",
    href: "/blog/seo-vs-local-seo",
    image: "/assets/epicmap-screen.png",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "6 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "10 Best AI Local SEO Agencies in Singapore for 2026 (Ranked)",
    summary:
      "How to choose between Singapore's top AI local SEO agencies and platforms. Ranked by AI capability, review management, GBP expertise, and Singapore track record.",
    href: "/blog/top-10-ai-local-seo-agencies-singapore-2026",
    image: "/assets/ai-citation-singapore-marina-bay.jpg",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "9 min",
    isNew: true,
    moment: "buy",
  },
  {
    title: "Fake or Unfair Google Reviews: What Singapore Businesses Can Do",
    summary:
      "Step-by-step guide for dealing with fake, competitor-posted, or policy-violating Google reviews.",
    href: "/blog/fake-or-unfair-google-reviews-what-to-do",
    image: "/assets/report-google-review-policy-violation-guide.png",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "6 min",
    isNew: true,
    moment: "do",
  },
  {
    title: "Google Review Policy Explained — What Qualifies for Removal",
    summary:
      "Complete breakdown of Google's review content policies. Know which reviews violate policy and can be removed.",
    href: "/blog/google-review-policy-explained",
    image: "/assets/google-review-policy-guidelines-overview.png",
    category: "REVIEW POLICY",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: true,
    moment: "know",
  },
  {
    title: "Google Reviews Strategy: 90-Day Framework for Singapore SMBs",
    summary:
      "A structured 90-day framework to build review velocity, protect your rating, and rank higher on Google Maps.",
    href: "/blog/google-reviews-strategy",
    image: "/assets/google-reviews-90-day-strategy.png",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "8 min",
    isNew: true,
    moment: "do",
  },
  {
    title: "How to Remove Bad Google Reviews From Your Singapore Business",
    summary:
      "Exactly how to remove fake, malicious, or policy-violating Google reviews. Step-by-step process and professional removal service.",
    href: "/blog/how-to-remove-bad-google-reviews",
    image: "/assets/report-google-review-policy-violation-guide.png",
    category: "BAD REVIEW REMOVAL",
    date: "Jun 2026",
    readTime: "7 min",
    isNew: true,
    moment: "do",
  },
  {
    title: "Google Maps Ranking Factors Explained — Where Reviews Fit In",
    summary:
      "A complete breakdown of Google Maps ranking factors including relevance, distance, and prominence.",
    href: "/blog/google-maps-ranking-factors",
    image: "/assets/google-maps-ranking-factors-framework.png",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "6 min",
    isNew: false,
    moment: "know",
  },
  {
    title: "How to Get More Google Reviews — Ethical Methods That Actually Work",
    summary:
      "A structured framework for increasing Google reviews. WhatsApp templates, timing strategies, and automation options.",
    href: "/blog/how-to-get-more-google-reviews",
    image: "/assets/google-review-growth-framework.png",
    category: "REVIEW GENERATION",
    date: "Jun 2026",
    readTime: "7 min",
    isNew: false,
    moment: "do",
  },
  {
    title: "Best Time to Ask for a Google Review — Timing Strategies by Industry",
    summary:
      "When to ask for a Google review to maximise response rates. Industry-specific timing windows for restaurants, clinics, and salons.",
    href: "/blog/best-time-to-ask-for-a-google-review",
    image: "/assets/google-review-request-timing-framework.png",
    category: "REVIEW GENERATION",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
    moment: "do",
  },
  {
    title: "Google Review Request Templates — WhatsApp, Email & SMS",
    summary:
      "Ready-to-use templates for Google review requests. Tested formats that convert satisfied customers into reviewers.",
    href: "/blog/google-review-request-templates",
    image: "/assets/google-review-request-template-examples.png",
    category: "REVIEW GENERATION",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
    moment: "do",
  },
  {
    title: "How to Create a Google Review Link and QR Code",
    summary:
      "Step-by-step guide to generate your Google review link and create a QR code for your business.",
    href: "/blog/how-to-create-google-review-link-qr-code",
    image: "/assets/google-review-link-qr-code-guide.png",
    category: "REVIEW GENERATION",
    date: "Jun 2026",
    readTime: "4 min",
    isNew: false,
    moment: "do",
  },
  {
    title: "Should You Respond to Every Google Review? The Answer Is Yes",
    summary:
      "Why responding to every Google review — including positive ones — improves your local SEO rank.",
    href: "/blog/should-you-respond-to-every-google-review",
    image: "/assets/respond-to-every-google-review-guide.png",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
    moment: "know",
  },
  {
    title: "Review Velocity vs Total Review Count — Which Matters More for Google Maps?",
    summary:
      "Whether Google Maps ranking is driven more by review count or review recency.",
    href: "/blog/review-velocity-vs-total-review-count",
    image: "/assets/review-velocity-vs-total-count-google-maps.png",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
    moment: "know",
  },
  {
    title: "Do Keywords in Google Reviews Help Local SEO?",
    summary:
      "Whether keywords in customer reviews affect Google Maps rankings. The nuanced answer.",
    href: "/blog/do-keywords-in-reviews-help-local-seo",
    image: "/assets/review-keywords-local-seo-explained.png",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
    moment: "know",
  },
  {
    title: "How Many Google Reviews Do You Need to Compete on Google Maps?",
    summary: "Benchmarks for review count by industry and Singapore district.",
    href: "/blog/how-many-google-reviews-do-you-need-to-compete-locally",
    image: "/assets/google-review-benchmark-by-industry.png",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
    moment: "know",
  },
  {
    title: "Can You Incentivise Google Reviews? What the Policy Says",
    summary:
      "Google's policy on incentivised reviews explained. What counts as an incentive and the risks involved.",
    href: "/blog/can-you-incentivize-google-reviews",
    image: "/assets/google-review-incentive-policy-explained.png",
    category: "REVIEW POLICY",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
    moment: "know",
  },
  {
    title: "Review Gating Explained — What It Is and Why Google Bans It",
    summary:
      "Review gating only directs happy customers to Google reviews. It violates Google policy.",
    href: "/blog/review-gating-explained",
    image: "/assets/review-gating-policy-risk-explained.png",
    category: "REVIEW POLICY",
    date: "Jun 2026",
    readTime: "4 min",
    isNew: false,
    moment: "know",
  },
  {
    title: "Do Photo Reviews Matter for Local SEO?",
    summary:
      "How customer photos in Google reviews affect your local search visibility and click-through rate.",
    href: "/blog/do-photo-reviews-matter-for-local-seo",
    image: "/assets/photo-reviews-local-seo-impact.png",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "4 min",
    isNew: false,
    moment: "know",
  },
  {
    title: "How Fast Should You Respond to Google Reviews?",
    summary: "The ideal response time for positive and negative Google reviews.",
    href: "/blog/how-fast-should-you-respond-to-google-reviews",
    image: "/assets/google-review-response-time-benchmark.png",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "3 min",
    isNew: false,
    moment: "do",
  },
  {
    title: "Reviews vs Rating: Which Matters More for Google Maps Rank?",
    summary:
      "Does Google Maps rank favour high review count or high star rating? The research-based answer.",
    href: "/blog/reviews-vs-rating-what-matters-more",
    image: "/assets/review-count-vs-star-rating-comparison.png",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "4 min",
    isNew: false,
    moment: "know",
  },
  {
    title: "Customer Feedback System — Private vs Public Reviews",
    summary:
      "How to design a system that captures private feedback and generates public Google reviews without violating policy.",
    href: "/blog/customer-feedback-system-private-vs-public-reviews",
    image: "/assets/customer-feedback-system-framework.png",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
    moment: "do",
  },
  {
    title: "Review Management for Singapore SMBs — What It Actually Involves",
    summary:
      "What review management means for Singapore businesses — monitoring, responding, generating, and removing reviews.",
    href: "/blog/review-management-singapore",
    image: "/assets/review-management-illustration.png",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
    moment: "buy",
  },
];

function CategoryBadge({ category }: { category: string }) {
  const colors =
    CATEGORY_COLORS[category] ?? "bg-muted text-muted-foreground border-border/60";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest border ${colors}`}
    >
      {category}
    </span>
  );
}

export default function BlogHubPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-5">
            EPICWARE BLOG · SINGAPORE
          </div>
          <h1 className="font-display font-bold text-foreground mb-4 leading-tight">
            Google Reviews &amp; Local SEO Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Practical guides on Google Maps ranking, review generation, bad review
            removal, and Local SEO for Singapore SMBs. Written by the Epicware team.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-10">

          {/* ── Featured post ── */}
          <Link
            href={featured.href}
            className="group block rounded-2xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
          >
            {/* Cover image */}
            {featured.image && (
              <div className="relative w-full h-56 lg:h-72 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              </div>
            )}
            <div className="p-7 lg:p-8">
              {/* Meta chips */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {featured.isNew && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest bg-primary text-white">
                    NEW
                  </span>
                )}
                <CategoryBadge category={featured.category} />
                <span className="text-xs text-muted-foreground">{featured.date}</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">{featured.readTime} read</span>
              </div>

              <h2 className="font-display font-bold text-foreground text-xl lg:text-2xl mb-3 leading-snug group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                {featured.summary}
              </p>
              <span className="text-sm font-semibold text-primary group-hover:underline">
                Read article →
              </span>
            </div>
          </Link>

          {/* ── Remaining posts grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group block rounded-2xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-card transition-all duration-300 overflow-hidden"
              >
                {/* Cover image */}
                {post.image && (
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 448px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent" />
                  </div>
                )}
                <div className="p-5">
                  {/* Meta chips */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {post.isNew && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest bg-primary text-white">
                        NEW
                      </span>
                    )}
                    <CategoryBadge category={post.category} />
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                  </div>

                  <h2 className="font-display font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
