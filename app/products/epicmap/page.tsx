import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "EpicMap — Local Rank Tracking & GBP Optimisation Singapore",
  description:
    "See where you rank on Google Maps across every Singapore district. EpicMap tracks your position, audits your GBP, and fixes the gaps automatically.",
  alternates: { canonical: "https://www.epicware.ai/products/epicmap" },
  openGraph: {
    title: "EpicMap — See Where You Rank and Fix It Automatically | Epicware",
    description:
      "Most Singapore SMBs don't know they're invisible to customers 2km away. EpicMap shows you exactly where — and closes the gap.",
    url: "https://www.epicware.ai/products/epicmap",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EpicMap by Epicware",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Local rank tracking and GBP optimisation software for Singapore SMBs. Visualises Google Maps rank position across every district, runs a 19-point GBP audit, and tracks competitor positions.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "SGD",
    description: "See pricing at epicware.ai/pricing",
  },
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://www.epicware.ai",
  },
  url: "https://www.epicware.ai/products/epicmap",
};

const FEATURES = [
  {
    name: "Visual Rank Grid",
    description:
      "Your rank position visualised across Singapore districts on an interactive map — see at a glance where you're winning and where you're invisible.",
  },
  {
    name: "19-Point GBP Audit",
    description:
      "Automated audit covering every factor that affects your Google Maps rank, from missing categories to photo quality to NAP consistency.",
  },
  {
    name: "Competitor Comparison",
    description:
      "See exactly how you compare against the top three competitors in your category, per keyword, per district, updated weekly.",
  },
  {
    name: "Weekly Auto-Posts",
    description:
      "EpicMap generates and schedules Google Business Profile posts weekly to maintain freshness signals that support rank.",
  },
  {
    name: "Citation Scan",
    description:
      "Checks your business name, address, and phone number across 40+ directories for consistency — inconsistent citations hurt rank.",
  },
  {
    name: "Keyword Rank Tracking",
    description:
      "Track rank position over time per keyword so you see what's improving and where to focus next.",
  },
];

export default function EpicMapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="EPICMAP · LOCAL RANK TRACKING"
        h1="EpicMap — Local Rank Tracking & GBP Optimisation for Singapore"
        subtitle={
          <>
            Most Singapore SMB owners assume they appear when someone nearby searches their
            business type. Often they don&apos;t. EpicMap shows you exactly where your Google Maps rank
            stands across every district — and closes the gaps automatically.
          </>
        }
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "Singapore-Built",
          "AI-Native",
          "No Agency Retainer",
          "500+ Outlets Managed",
        ]}
        imageSrc="/assets/EpicMapImageforweb.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Google Maps rank is not just about being listed. It is about rank position at every
            relevant search location, for every keyword your customers use. A café in Tampines may
            rank first in Tampines and 18th in Bedok, 1.5km away. The business that shows in the
            top three of the 3-Pack gets the vast majority of clicks. EpicMap makes this visible —
            then it runs the audits, fixes the GBP gaps, and tracks competitor positions so you know
            exactly what to do next to move up.
          </p>
        </div>
      </section>

      {/* What EpicMap Does */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">What EpicMap Does</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              EpicMap overlays a visual grid across Singapore&apos;s map and shows your rank
              position at every point across all relevant districts. You can see at a glance which
              areas you dominate and which ones you are invisible in — then drill into any location
              to see the exact keyword positions and the competitors sitting above you.
            </p>
            <p>
              The 19-point GBP audit runs automatically and flags everything that affects your rank.
              Missing business categories, incomplete opening hours, low photo count, no Q&amp;A
              activity, unverified information — each issue comes with a fix-it recommendation
              sorted by impact, so you address the highest-value gaps first.
            </p>
            <p>
              Competitor analysis shows how your rank compares against the top three businesses in
              your category per keyword, per grid point. When EpicMap&apos;s weekly auto-posts go
              out, you see the rank change that follows. Over time, you build a clear picture of
              what moves rank in your category, in your area.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.name}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card transition-shadow duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{f.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Connects */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">How It Connects to the Rest of Epicware</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              EpicMap is Epicware&apos;s Local SEO engine. The rank data it produces feeds directly into
              your reputation and GBP strategy. When{" "}
              <Link href="/products/epicreview" className="text-primary font-medium hover:underline">
                EpicReview
              </Link>{" "}
              generates more reviews, EpicMap picks up the rank improvement on the grid. When you
              fix GBP issues flagged in the audit, EpicMap tracks the rank movement week by week.
            </p>
            <p>
              EpicMap links to the full{" "}
              <Link href="/local-seo-singapore" className="text-primary font-medium hover:underline">
                Local SEO Singapore
              </Link>{" "}
              service category and the{" "}
              <Link href="/gbp-optimisation-singapore" className="text-primary font-medium hover:underline">
                GBP Optimisation service
              </Link>
              . If you want the rank tracking and competitor analysis managed as a service rather
              than self-serve, those pages cover how Epicware&apos;s team works alongside the platform.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Pricing</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            EpicMap is available on the Foundation plan and above. See the full breakdown at{" "}
            <Link href="/pricing" className="text-primary font-medium hover:underline">
              epicware.ai/pricing
            </Link>
            . No setup fees. Cancel anytime. All plans include the 19-point GBP audit and visual
            rank grid. Multi-outlet management is available on Pro plans and above.
          </p>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Related Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            EpicMap sits at the centre of Epicware&apos;s{" "}
            <Link href="/local-seo-singapore" className="text-primary font-medium hover:underline">
              Local SEO Singapore
            </Link>{" "}
            offering. Specific sub-services that feed EpicMap data include{" "}
            <Link
              href="/local-seo-singapore/local-rank-tracking"
              className="text-primary font-medium hover:underline"
            >
              Local Rank Tracking
            </Link>
            {" "}and{" "}
            <Link
              href="/gbp-optimisation-singapore"
              className="text-primary font-medium hover:underline"
            >
              GBP Optimisation
            </Link>
            . If you are new to local SEO, start with a{" "}
            <Link href="/audit" className="text-primary font-medium hover:underline">
              free GBP audit
            </Link>{" "}
            — EpicMap runs the same audit live on your profile during the demo.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display font-bold text-foreground mb-4">
            Ready to see EpicMap on your business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free demo — we&apos;ll run EpicMap live on your actual GBP profile. No slides.
            Just your data, your rank, your competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo#form"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
            >
              Book My Free Demo →
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full border border-border text-foreground font-semibold text-base hover:bg-muted transition-colors duration-200"
            >
              Start with a free audit
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      {/* bottom padding so sticky bar doesn't cover content on mobile */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
