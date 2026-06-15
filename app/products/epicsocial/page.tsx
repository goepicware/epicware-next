import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "EpicSocial — Social Scheduling & GBP Posts Singapore | Epicware",
  description:
    "Schedule social posts and GBP updates from one dashboard. EpicSocial keeps Singapore SMBs visible on Facebook, Instagram, and Google without the grind.",
  alternates: { canonical: "https://www.epicware.ai/products/epicsocial" },
  openGraph: {
    title: "EpicSocial — Stay Visible Without Living on Social Media | Epicware",
    description:
      "Posting consistently is what keeps your business visible. EpicSocial schedules everything — you just approve it.",
    url: "https://www.epicware.ai/products/epicsocial",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EpicSocial by Epicware",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Social media scheduling and Google Business Profile post management software for Singapore SMBs. AI generates posts from business data, schedules to Facebook, Instagram, and GBP from one dashboard.",
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
  url: "https://www.epicware.ai/products/epicsocial",
};

const FEATURES = [
  {
    name: "AI Post Generation",
    description:
      "Automatically creates posts from your GBP data, recent reviews, and business details — you review and approve.",
  },
  {
    name: "Multi-Platform Scheduling",
    description:
      "Publish to Facebook, Instagram, and Google Business Profile from one dashboard — no switching apps.",
  },
  {
    name: "Content Calendar",
    description:
      "View all scheduled content across all your outlets in one calendar — so you always know what is going out.",
  },
  {
    name: "PostForMe",
    description:
      "Generate a full week of content in one click from your business details, then review and approve in minutes.",
  },
  {
    name: "GBP Post Scheduling",
    description:
      "Keep your Google Business Profile fresh with regular automated updates — a positive freshness signal for rank.",
  },
  {
    name: "Multi-Outlet Support",
    description:
      "Manage social content for all your locations from one account — different content per outlet if needed.",
  },
];

export default function EpicSocialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="EPICSOCIAL · SOCIAL SCHEDULING"
        h1="EpicSocial — Social Scheduling & GBP Posts for Singapore"
        subtitle={
          <>
            Posting consistently on Facebook, Instagram, and Google Business Profile is what keeps
            your business visible. EpicSocial generates your content, schedules your posts, and
            keeps every platform active — so you just approve and move on.
          </>
        }
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "Singapore-Built",
          "AI-Native",
          "No Agency Retainer",
          "Facebook · Instagram · GBP",
        ]}
        imageSrc="/assets/epicseo-screen.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every Singapore SMB owner knows they should post regularly. Most don&apos;t, because
            they don&apos;t have the time, the content ideas, or a person dedicated to social media.
            Weeks go by without a post. The algorithm stops showing the page to followers. Customers
            assume the business is quiet. And Google takes infrequent GBP updates as a signal that
            the business is less active. EpicSocial breaks this pattern. It generates content from
            your business data, schedules it across platforms, and keeps your presence alive — without
            adding to your workload.
          </p>
        </div>
      </section>

      {/* What EpicSocial Does */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">What EpicSocial Does</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              EpicSocial pulls your business details, recent Google reviews, promotions, and
              service updates, then uses AI to generate social media posts and Google Business
              Profile updates that match your brand. The PostForMe feature creates a full week of
              content in minutes. You review and approve — EpicSocial publishes at the scheduled
              time to Facebook, Instagram, and your GBP profile.
            </p>
            <p>
              The content calendar shows everything scheduled across all your outlets and platforms,
              so you always know what is going out and when. For multi-outlet operators, you can
              have different content schedules per location — so a Tampines outlet posts about
              its local promotions while a Jurong outlet posts about its menu specials, from one
              account.
            </p>
            <p>
              GBP post scheduling keeps your Google Business Profile fresh with weekly updates.
              This is a meaningful rank signal — profiles that post regularly are treated by
              Google as more active and complete, which supports the rank improvements{" "}
              <Link href="/products/epicmap" className="text-primary font-medium hover:underline">
                EpicMap
              </Link>{" "}
              tracks.
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
              EpicSocial is part of Epicware&apos;s{" "}
              <Link href="/growth-tools" className="text-primary font-medium hover:underline">
                Growth Tools
              </Link>{" "}
              category alongside{" "}
              <Link href="/products/epicengage" className="text-primary font-medium hover:underline">
                EpicEngage
              </Link>{" "}
              (email marketing) and the Website SEO Builder. Together, they handle the
              customer-facing visibility layer after{" "}
              <Link href="/products/epicmap" className="text-primary font-medium hover:underline">
                EpicMap
              </Link>{" "}
              has established your Google Maps rank.
            </p>
            <p>
              EpicSocial&apos;s GBP post scheduling connects directly to the{" "}
              <Link
                href="/local-seo-singapore/gbp-post-scheduling"
                className="text-primary font-medium hover:underline"
              >
                GBP Post Scheduling
              </Link>{" "}
              service. If you want GBP posts managed as a service rather than self-serve, that
              page covers the full managed option. See also the full{" "}
              <Link
                href="/growth-tools/epicsocial-social-scheduling"
                className="text-primary font-medium hover:underline"
              >
                EpicSocial Social Scheduling
              </Link>{" "}
              service page.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Pricing</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            EpicSocial is available on the Foundation plan and above. See the full breakdown at{" "}
            <Link href="/pricing" className="text-primary font-medium hover:underline">
              epicware.ai/pricing
            </Link>
            . No setup fees. Cancel anytime. The number of scheduled posts per month and
            connected social accounts varies by plan.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display font-bold text-foreground mb-4">
            Ready to see EpicSocial on your business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free demo — we&apos;ll show you EpicSocial generating content from your actual
            GBP profile. No slides. Just your posts, ready to schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
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
      <div className="h-20 lg:hidden" />
    </>
  );
}
