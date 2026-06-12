import type { Metadata } from "next";
import Link from "next/link";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Guides — Google Reviews & Local SEO Playbooks for Singapore SMBs | Epicware",
  description:
    "In-depth playbooks you can action immediately. Covers Google Maps ranking, bad review removal, and local SEO for Singapore restaurants, clinics, and SMBs.",
  alternates: { canonical: "https://www.epicware.ai/resources/guides" },
  openGraph: {
    title: "Epicware Guides — Local SEO Playbooks for Singapore SMBs",
    description:
      "In-depth playbooks you can action immediately. Google Maps, reviews, and local SEO for Singapore businesses.",
    url: "https://www.epicware.ai/resources/guides",
  },
};

const GUIDES = [
  {
    badge: "LOCAL SEO",
    title: "Local Business Playbook 2026 — Google Maps, AI Search & Reputation",
    summary:
      "The tactics that drive local customer acquisition for Singapore SMBs in 2026 — from GBP optimisation to AI search visibility. Updated June 2026.",
    href: "/resources/guides/local-business-playbook-2026",
    readTime: "12 min",
    cta: "Read guide →",
  },
  {
    badge: "RESTAURANTS",
    title: "The Complete Restaurant Digital Growth Guide",
    summary:
      "A structured framework covering Google Maps visibility, commission-free ordering, WhatsApp automation, and retention strategies for restaurant operators. Covers the full 4-layer growth architecture from reputation to direct revenue.",
    href: "/resources/guides/restaurant-digital-growth-guide",
    readTime: "10 min",
    cta: "Read guide →",
  },
  {
    badge: "BAD REVIEW REMOVAL",
    title: "Bad Review Removal Guide — Remove Google Reviews the Right Way",
    summary:
      "Everything Singapore business owners need to know about removing fake, malicious, and policy-violating Google reviews. The process, the policy, and when to use a professional service.",
    href: "/resources/guides/bad-review-removal-guide",
    readTime: "8 min",
    cta: "Read guide →",
  },
  {
    badge: "BLOG",
    title: "Google Maps Ranking Factors Explained — Where Reviews Fit In",
    summary:
      "A complete breakdown of Google Maps ranking factors including relevance, distance, and prominence — and exactly how reviews influence visibility, recency, and local search rank.",
    href: "/resources/blog/google-maps-ranking-factors",
    readTime: "6 min",
    cta: "Read article →",
  },
];

const BADGE_COLORS: Record<string, string> = {
  "LOCAL SEO": "bg-primary/10 text-primary border-primary/20",
  "RESTAURANTS": "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  "BAD REVIEW REMOVAL": "bg-rose-500/10 text-rose-600 border-rose-500/20",
  "BLOG": "bg-blue-500/10 text-blue-600 border-blue-500/20",
};

export default function GuidesHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-5">
            EPICWARE GUIDES · SINGAPORE
          </div>
          <h1 className="font-display font-bold text-foreground mb-4 leading-tight">
            Guides &amp; Playbooks
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            In-depth playbooks you can action immediately. Built for Singapore SMBs
            that want to rank higher, earn more reviews, and protect their reputation.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-6">
          {GUIDES.map((guide) => {
            const badgeClass =
              BADGE_COLORS[guide.badge] ?? "bg-muted text-muted-foreground border-border/60";
            return (
              <Link
                key={guide.href}
                href={guide.href}
                className="group block rounded-2xl border border-border/60 bg-card p-6 lg:p-8 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest border ${badgeClass}`}
                  >
                    {guide.badge}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {guide.readTime} read
                  </span>
                </div>
                <h2 className="font-display font-bold text-foreground text-lg lg:text-xl mb-3 leading-snug group-hover:text-primary transition-colors">
                  {guide.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                  {guide.summary}
                </p>
                <span className="text-sm font-semibold text-primary group-hover:underline">
                  {guide.cta}
                </span>
              </Link>
            );
          })}

          {/* Blog crosslink */}
          <div className="mt-10 pt-8 border-t border-border/60 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                Looking for shorter reads?
              </p>
              <p className="text-sm text-muted-foreground">
                The Epicware blog covers Google Maps ranking, review generation, and bad review removal in focused articles.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-105 shrink-0"
            >
              View all blog articles →
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
