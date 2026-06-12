import type { Metadata } from "next";
import Link from "next/link";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Google Reviews & Local SEO Blog — Singapore SMB Insights | Epicware",
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
  "REVIEW MANAGEMENT": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "REVIEW POLICY": "bg-amber-500/10 text-amber-700 border-amber-500/20",
  "REVIEW GENERATION": "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  "BAD REVIEW REMOVAL": "bg-rose-500/10 text-rose-600 border-rose-500/20",
};

const posts = [
  {
    title: "10 Best AI Local SEO Agencies in Singapore for 2026 (Ranked)",
    summary:
      "How to choose between Singapore's top AI local SEO agencies and platforms. Ranked by AI capability, review management, GBP expertise, and Singapore track record.",
    href: "/resources/blog/top-10-ai-local-seo-agencies-singapore-2026",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "9 min",
    isNew: true,
  },
  {
    title: "Fake or Unfair Google Reviews: What Singapore Businesses Can Do",
    summary:
      "Step-by-step guide for dealing with fake, competitor-posted, or policy-violating Google reviews.",
    href: "/resources/blog/fake-or-unfair-google-reviews-what-to-do",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "6 min",
    isNew: true,
  },
  {
    title: "Google Review Policy Explained — What Qualifies for Removal",
    summary:
      "Complete breakdown of Google's review content policies. Know which reviews violate policy and can be removed.",
    href: "/resources/blog/google-review-policy-explained",
    category: "REVIEW POLICY",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: true,
  },
  {
    title: "Google Reviews Strategy: 90-Day Framework for Singapore SMBs",
    summary:
      "A structured 90-day framework to build review velocity, protect your rating, and rank higher on Google Maps.",
    href: "/resources/blog/google-reviews-strategy",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "8 min",
    isNew: true,
  },
  {
    title: "How to Remove Bad Google Reviews From Your Singapore Business",
    summary:
      "Exactly how to remove fake, malicious, or policy-violating Google reviews. Step-by-step process and professional removal service.",
    href: "/resources/blog/how-to-remove-bad-google-reviews",
    category: "BAD REVIEW REMOVAL",
    date: "Jun 2026",
    readTime: "7 min",
    isNew: true,
  },
  {
    title: "Google Maps Ranking Factors Explained — Where Reviews Fit In",
    summary:
      "A complete breakdown of Google Maps ranking factors including relevance, distance, and prominence.",
    href: "/resources/blog/google-maps-ranking-factors",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "6 min",
    isNew: false,
  },
  {
    title: "How to Get More Google Reviews — Ethical Methods That Actually Work",
    summary:
      "A structured framework for increasing Google reviews. WhatsApp templates, timing strategies, and automation options.",
    href: "/resources/blog/how-to-get-more-google-reviews",
    category: "REVIEW GENERATION",
    date: "Jun 2026",
    readTime: "7 min",
    isNew: false,
  },
  {
    title: "Best Time to Ask for a Google Review — Timing Strategies by Industry",
    summary:
      "When to ask for a Google review to maximise response rates. Industry-specific timing windows for restaurants, clinics, and salons.",
    href: "/resources/blog/best-time-to-ask-for-a-google-review",
    category: "REVIEW GENERATION",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
  },
  {
    title: "Google Review Request Templates — WhatsApp, Email & SMS",
    summary:
      "Ready-to-use templates for Google review requests. Tested formats that convert satisfied customers into reviewers.",
    href: "/resources/blog/google-review-request-templates",
    category: "REVIEW GENERATION",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
  },
  {
    title: "How to Create a Google Review Link and QR Code",
    summary:
      "Step-by-step guide to generate your Google review link and create a QR code for your business.",
    href: "/resources/blog/how-to-create-google-review-link-qr-code",
    category: "REVIEW GENERATION",
    date: "Jun 2026",
    readTime: "4 min",
    isNew: false,
  },
  {
    title: "Should You Respond to Every Google Review? The Answer Is Yes",
    summary:
      "Why responding to every Google review — including positive ones — improves your local SEO rank.",
    href: "/resources/blog/should-you-respond-to-every-google-review",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
  },
  {
    title: "Review Velocity vs Total Review Count — Which Matters More for Google Maps?",
    summary:
      "Whether Google Maps ranking is driven more by review count or review recency.",
    href: "/resources/blog/review-velocity-vs-total-review-count",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
  },
  {
    title: "Do Keywords in Google Reviews Help Local SEO?",
    summary:
      "Whether keywords in customer reviews affect Google Maps rankings. The nuanced answer.",
    href: "/resources/blog/do-keywords-in-reviews-help-local-seo",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
  },
  {
    title: "How Many Google Reviews Do You Need to Compete on Google Maps?",
    summary: "Benchmarks for review count by industry and Singapore district.",
    href: "/resources/blog/how-many-google-reviews-do-you-need-to-compete-locally",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
  },
  {
    title: "Can You Incentivise Google Reviews? What the Policy Says",
    summary:
      "Google's policy on incentivised reviews explained. What counts as an incentive and the risks involved.",
    href: "/resources/blog/can-you-incentivize-google-reviews",
    category: "REVIEW POLICY",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
  },
  {
    title: "Review Gating Explained — What It Is and Why Google Bans It",
    summary:
      "Review gating only directs happy customers to Google reviews. It violates Google policy.",
    href: "/resources/blog/review-gating-explained",
    category: "REVIEW POLICY",
    date: "Jun 2026",
    readTime: "4 min",
    isNew: false,
  },
  {
    title: "Do Photo Reviews Matter for Local SEO?",
    summary:
      "How customer photos in Google reviews affect your local search visibility and click-through rate.",
    href: "/resources/blog/do-photo-reviews-matter-for-local-seo",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "4 min",
    isNew: false,
  },
  {
    title: "How Fast Should You Respond to Google Reviews?",
    summary: "The ideal response time for positive and negative Google reviews.",
    href: "/resources/blog/how-fast-should-you-respond-to-google-reviews",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "3 min",
    isNew: false,
  },
  {
    title: "Reviews vs Rating: Which Matters More for Google Maps Rank?",
    summary:
      "Does Google Maps rank favour high review count or high star rating? The research-based answer.",
    href: "/resources/blog/reviews-vs-rating-what-matters-more",
    category: "LOCAL SEO",
    date: "Jun 2026",
    readTime: "4 min",
    isNew: false,
  },
  {
    title: "Customer Feedback System — Private vs Public Reviews",
    summary:
      "How to design a system that captures private feedback and generates public Google reviews without violating policy.",
    href: "/resources/blog/customer-feedback-system-private-vs-public-reviews",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
  },
  {
    title: "Review Management for Singapore SMBs — What It Actually Involves",
    summary:
      "What review management means for Singapore businesses — monitoring, responding, generating, and removing reviews.",
    href: "/resources/blog/review-management-singapore",
    category: "REVIEW MANAGEMENT",
    date: "Jun 2026",
    readTime: "5 min",
    isNew: false,
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

          {/* ── Featured post (first/most recent) ── */}
          <Link
            href={featured.href}
            className="group block rounded-2xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
          >
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
                className="group block rounded-2xl border border-border/60 bg-card p-5 hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
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
