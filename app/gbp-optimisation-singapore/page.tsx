import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "GBP Optimisation Singapore — 19-Point Audit & Rank Tracking | Epicware",
  description:
    "Complete Google Business Profile optimisation for Singapore SMBs. 19-point audit, weekly AI posts, multi-outlet management. Rank higher on Google Maps.",
  alternates: { canonical: "https://www.epicware.ai/gbp-optimisation-singapore" },
  openGraph: {
    title: "GBP Optimisation Singapore — 19-Point Audit & Rank Tracking | Epicware",
    description:
      "Complete Google Business Profile optimisation for Singapore SMBs. 19-point audit, weekly AI posts, multi-outlet management.",
    url: "https://www.epicware.ai/gbp-optimisation-singapore",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GBP Optimisation Singapore",
  serviceType: "GBP Optimisation",
  description:
    "Complete Google Business Profile optimisation for Singapore SMBs. 19-point audit, weekly AI posts, multi-outlet management, and rank tracking.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://epicware.ai",
  },
  areaServed: {
    "@type": "Country",
    name: "Singapore",
  },
  url: "https://epicware.ai/gbp-optimisation-singapore",
};

const CHILD_SERVICES = [
  {
    name: "GBP Audit",
    href: "/gbp-optimisation-singapore/gbp-audit",
    description:
      "19-point audit scoring every rank factor on your Google Business Profile — with impact-ranked fixes so you address the highest-value gaps first.",
  },
  {
    name: "GBP Category Optimisation",
    href: "/gbp-optimisation-singapore/gbp-category-optimisation",
    description:
      "Your primary category is the most important GBP rank factor. Most Singapore SMBs chose the wrong one at setup and never revisited it.",
  },
  {
    name: "GBP Photo Management",
    href: "/gbp-optimisation-singapore/gbp-photo-management",
    description:
      "Photo count and recency are rank signals. Epicware manages your GBP photo library with geo-tagged uploads and a monthly refresh schedule.",
  },
  {
    name: "GBP Q&A Management",
    href: "/gbp-optimisation-singapore/gbp-qa-management",
    description:
      "Seed keyword-rich Q&A, answer public questions, and remove competitor-planted misleading content from your Google Business Profile.",
  },
];

export default function GbpOptimisationSingaporePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="GBP OPTIMISATION · SINGAPORE"
        h1="GBP Optimisation Singapore — Rank Higher on Google Maps"
        subtitle="Your Google Business Profile is the single most important local SEO asset you own. Most Singapore SMBs have profiles that are incomplete, inconsistent, or simply not optimised to rank. Epicware's 19-point audit fixes all of it — automatically."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "19-Point GBP Audit",
          "Singapore-Built",
          "Multi-Outlet Management",
          "Weekly AI Posts Included",
        ]}
        imageSrc="/assets/epicmap-before-after.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Google Maps rank is not a lottery. Every factor that determines whether your business appears in the top 3 —
            the 3-Pack that captures over 70% of clicks — is documented, measurable, and improvable. Most Singapore SMBs
            appear somewhere in the Maps results for their category, but they don&apos;t appear everywhere they should.
            A clinic in Toa Payoh that ranks 1st in Toa Payoh but 14th in Bishan, 3km away, is invisible to thousands of
            potential patients searching &ldquo;clinic near me&rdquo; from Bishan every day. Epicware&apos;s GBP
            optimisation service runs a 19-point audit on every factor that determines that rank — then fixes the gaps
            and tracks your improvement week by week.
          </p>
        </div>
      </section>

      {/* What the 19-Point GBP Audit Covers */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">What the 19-Point GBP Audit Covers</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>The audit examines every element of your Google Business Profile that affects rank:</p>
            <ul className="space-y-2">
              <li>Business name, category, and description alignment</li>
              <li>Opening hours completeness and accuracy</li>
              <li>Photo count, quality, and recency</li>
              <li>Review count, rating, and response rate</li>
              <li>Q&amp;A activity and completeness</li>
              <li>NAP (name, address, phone) consistency across Google and directories</li>
              <li>Website link and attribute completeness</li>
              <li>Google Posts frequency and engagement</li>
              <li>Special hours, services listed, and products added</li>
            </ul>
            <p>
              Each issue is scored by impact on rank, so the highest-value fixes are always addressed first.
            </p>
          </div>
        </div>
      </section>

      {/* How Epicware Handles GBP Optimisation */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">How Epicware Handles GBP Optimisation</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              After the initial audit, Epicware&apos;s platform applies fixes directly to your GBP profile via API.
              High-impact gaps — missing categories, incomplete hours, absent product listings — are addressed in the
              first 48 hours. Ongoing optimisation includes weekly AI-generated GBP posts (a positive freshness signal),
              monthly citation scans to catch NAP inconsistencies across directories, and continuous rank monitoring via
              EpicMap&apos;s visual grid.
            </p>
            <p>
              For multi-outlet operators, the same process runs across every profile from one dashboard — you don&apos;t
              manage each location separately. See how{" "}
              <Link href="/products/epicmap" className="text-primary font-medium hover:underline">EpicMap</Link>{" "}
              tracks your rank across every Singapore district.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Pricing</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              GBP Optimisation is included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
              <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
              No setup fees. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Why Epicware */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Why Epicware — Not an Agency</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware is a platform, not an agency. Agencies sell their time. Epicware gives you a self-serve dashboard
              that runs automatically — no retainer, no waiting on someone else&apos;s team, no monthly report that is
              already out of date.
            </p>
            <p>
              The platform was built by the team behind NinjaOS, an F&amp;B SaaS product that processed over $120M in GMV
              before its 2021 exit. Epicware is Singapore-built, used by businesses in SG · MY · UAE · UK · US. See the
              full platform overview at{" "}
              <Link href="/" className="text-primary font-medium hover:underline">epicware.ai</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Child service cards */}
      <section className="py-16 lg:py-20 section-gradient-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground text-center mb-10">GBP Optimisation Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CHILD_SERVICES.map((service) => (
              <Link key={service.href} href={service.href} className="card-feature group block h-full">
                <div className="card-feature-inner p-7 flex flex-col gap-4 h-full">
                  <h3 className="font-display font-semibold text-foreground text-lg leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary pt-3 border-t border-border/30">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            See also:{" "}
            <Link href="/local-seo-singapore" className="text-primary font-medium hover:underline">Local SEO Singapore</Link>
            {" "}and{" "}
            <Link href="/products/epicmap" className="text-primary font-medium hover:underline">EpicMap rank tracking</Link>.
          </p>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
