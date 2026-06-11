import type { Metadata } from "next";
import Link from "next/link";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Google Reviews & Local SEO Blog — Singapore SMB Insights | Epicware",
  description: "Practical guides on Google Maps ranking, review generation, bad review removal, and Local SEO for Singapore SMBs. Written by the Epicware team.",
  alternates: { canonical: "https://www.epicware.ai/resources/blog" },
};

const posts = [
  { title: "Fake or Unfair Google Reviews: What Singapore Businesses Can Do", summary: "Step-by-step guide for dealing with fake, competitor-posted, or policy-violating Google reviews.", href: "/resources/blog/fake-or-unfair-google-reviews-what-to-do" },
  { title: "Google Review Policy Explained — What Qualifies for Removal", summary: "Complete breakdown of Google's review content policies. Know which reviews violate policy and can be removed.", href: "/resources/blog/google-review-policy-explained" },
  { title: "Google Reviews Strategy: 90-Day Framework for Singapore SMBs", summary: "A structured 90-day framework to build review velocity, protect your rating, and rank higher on Google Maps.", href: "/resources/blog/google-reviews-strategy" },
  { title: "How to Remove Bad Google Reviews From Your Singapore Business", summary: "Exactly how to remove fake, malicious, or policy-violating Google reviews. Step-by-step process and professional removal service.", href: "/resources/blog/how-to-remove-bad-google-reviews" },
  { title: "Google Maps Ranking Factors Explained — Where Reviews Fit In", summary: "A complete breakdown of Google Maps ranking factors including relevance, distance, and prominence.", href: "/resources/blog/google-maps-ranking-factors" },
  { title: "How to Get More Google Reviews — Ethical Methods That Actually Work", summary: "A structured framework for increasing Google reviews. WhatsApp templates, timing strategies, and automation options.", href: "/resources/blog/how-to-get-more-google-reviews" },
  { title: "Best Time to Ask for a Google Review — Timing Strategies by Industry", summary: "When to ask for a Google review to maximise response rates. Industry-specific timing windows for restaurants, clinics, and salons.", href: "/resources/blog/best-time-to-ask-for-a-google-review" },
  { title: "Google Review Request Templates — WhatsApp, Email & SMS", summary: "Ready-to-use templates for Google review requests. Tested formats that convert satisfied customers into reviewers.", href: "/resources/blog/google-review-request-templates" },
  { title: "How to Create a Google Review Link and QR Code", summary: "Step-by-step guide to generate your Google review link and create a QR code for your business.", href: "/resources/blog/how-to-create-google-review-link-qr-code" },
  { title: "Should You Respond to Every Google Review? The Answer Is Yes", summary: "Why responding to every Google review — including positive ones — improves your local SEO rank.", href: "/resources/blog/should-you-respond-to-every-google-review" },
  { title: "Review Velocity vs Total Review Count — Which Matters More for Google Maps?", summary: "Whether Google Maps ranking is driven more by review count or review recency. The answer affects your entire review strategy.", href: "/resources/blog/review-velocity-vs-total-review-count" },
  { title: "Do Keywords in Google Reviews Help Local SEO?", summary: "Whether keywords mentioned in customer reviews affect Google Maps rankings. The nuanced answer and what it means for your review strategy.", href: "/resources/blog/do-keywords-in-reviews-help-local-seo" },
  { title: "How Many Google Reviews Do You Need to Compete on Google Maps?", summary: "Benchmarks for review count by industry and Singapore district.", href: "/resources/blog/how-many-google-reviews-do-you-need-to-compete-locally" },
  { title: "Can You Incentivise Google Reviews? What the Policy Says", summary: "Google's policy on incentivised reviews explained. What counts as an incentive and the risks involved.", href: "/resources/blog/can-you-incentivize-google-reviews" },
  { title: "Review Gating Explained — What It Is and Why Google Bans It", summary: "Review gating is the practice of only directing happy customers to Google reviews. It violates Google policy.", href: "/resources/blog/review-gating-explained" },
  { title: "Do Photo Reviews Matter for Local SEO?", summary: "How customer photos in Google reviews affect your local search visibility and click-through rate.", href: "/resources/blog/do-photo-reviews-matter-for-local-seo" },
  { title: "How Fast Should You Respond to Google Reviews?", summary: "The ideal response time for positive and negative Google reviews — and what happens when you leave reviews unanswered.", href: "/resources/blog/how-fast-should-you-respond-to-google-reviews" },
  { title: "Reviews vs Rating: Which Matters More for Google Maps Rank?", summary: "Does Google Maps rank favour high review count or high star rating? The research-based answer.", href: "/resources/blog/reviews-vs-rating-what-matters-more" },
  { title: "Customer Feedback System — Private vs Public Reviews", summary: "How to design a customer feedback system that captures private feedback and generates public Google reviews — without violating policy.", href: "/resources/blog/customer-feedback-system-private-vs-public-reviews" },
  { title: "Review Management for Singapore SMBs — What It Actually Involves", summary: "What review management means for Singapore businesses — monitoring, responding, generating, and removing reviews.", href: "/resources/blog/review-management-singapore" },
];

export default function BlogHubPage() {
  return (
    <>
      <section className="hero-gradient pt-28 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-5">
            EPICWARE BLOG · SINGAPORE
          </div>
          <h1 className="font-display font-bold text-foreground mb-4 leading-tight">
            Google Reviews &amp; Local SEO Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Practical guides on Google Maps ranking, review generation, bad review removal, and Local SEO for Singapore SMBs. Written by the Epicware team.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.href} href={post.href}
                className="block rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300 group">
                <h2 className="font-display font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.summary}</p>
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
