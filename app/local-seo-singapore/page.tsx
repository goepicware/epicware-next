import type { Metadata } from "next";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import ServicesGrid from "@/components/category/ServicesGrid";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Local SEO Singapore — Rank Higher on Google Maps | Epicware",
  description:
    "Epicware's Local SEO platform manages your GBP, tracks rank across Singapore districts, builds citations, and posts on autopilot. Start your free GBP audit.",
  alternates: { canonical: "https://www.epicware.ai/local-seo-singapore" },
  openGraph: {
    title: "Local SEO Singapore | Epicware",
    description:
      "Get found on Google Maps when Singapore customers search for your business category. GBP optimisation, rank tracking, citations — all in one platform.",
    url: "https://www.epicware.ai/local-seo-singapore",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Local SEO Services Singapore",
  serviceType: "Local SEO",
  description:
    "Local SEO platform for Singapore SMBs. GBP optimisation, local rank tracking (EpicMap), GBP post scheduling, citation building, competitor analysis, and GBP setup.",
  provider: {
    "@type": "Organization",
    name: "Epicware Pte. Ltd.",
    url: "https://www.epicware.ai",
  },
  areaServed: { "@type": "City", name: "Singapore" },
  url: "https://www.epicware.ai/local-seo-singapore",
};

const CHILD_SERVICES = [
  {
    name: "GBP Optimisation",
    href: "/local-seo-singapore/gbp-optimisation",
    description:
      "A 19-point audit of your Google Business Profile fixes every gap costing you rank — categories, attributes, photos, posts, Q&A — and keeps it optimised automatically.",
  },
  {
    name: "GBP Post Scheduling",
    href: "/local-seo-singapore/gbp-post-scheduling",
    description:
      "Regular GBP posts signal activity to Google and keep your profile fresh for searchers. Epicware auto-generates and schedules posts so you never fall behind.",
  },
  {
    name: "GBP Setup & Onboarding",
    href: "/local-seo-singapore/gbp-setup",
    description:
      "New to Google Business Profile or taking over a neglected one? We handle the setup, verification, and baseline optimisation so you start ranking from day one.",
  },
  {
    name: "Local Rank Tracking (EpicMap)",
    href: "/local-seo-singapore/local-rank-tracking",
    description:
      "EpicMap shows exactly where your business ranks on the Google Maps grid — by keyword, by district, by day. See the gaps. Fix them. Watch the map fill in.",
  },
  {
    name: "Citation Building",
    href: "/local-seo-singapore/citation-building",
    description:
      "Consistent business listings across Singapore directories, review platforms, and data aggregators strengthen your local authority and help Google trust your NAP data.",
  },
  {
    name: "Competitor Analysis",
    href: "/local-seo-singapore/competitor-analysis",
    description:
      "See exactly what your top-ranking competitors are doing — their review counts, posting frequency, category choices, and keyword rankings — so you can close the gap.",
  },
];

export default function LocalSEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <CategoryHero
        badge="LOCAL SEO · SINGAPORE"
        h1="Local SEO Services in Singapore — Get Found When It Matters Most"
        subtitle={
          <>
            The three businesses in the Google Maps 3-Pack get 85% of local clicks. The rest get almost nothing.
            Epicware&apos;s Local SEO platform manages your GBP, tracks your rank across every Singapore district,
            and builds the infrastructure that puts you in those top three spots — and keeps you there.
            Call us at <a href="tel:+6590013157" className="underline font-semibold">+65 9001 3157</a> or start with a free GBP audit.
          </>
        }
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Get Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "200+ Businesses Ranked",
          "Free 19-Point GBP Audit",
          "Singapore-Built Platform",
          "No Agency Retainers",
        ]}
        overlayClass="bg-gradient-to-r from-black/80 via-black/60 to-black/35"
        imageSrc="/assets/epicmap-before-after.png"
      />

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            When someone in Tampines searches &ldquo;best mee pok near me&rdquo;, the three businesses that appear
            in the Google Maps 3-Pack get the vast majority of clicks. The rest get almost nothing. Local SEO in
            Singapore is not about being somewhere on the first page — it is about being in the top three on the map,
            in the right district, when the right person is searching. Most SMB owners do not know where they actually
            rank, let alone why a competitor with fewer reviews consistently outranks them. The answer is almost always
            a combination of GBP completeness, posting frequency, and citation consistency — three things Epicware
            manages automatically, without you needing to touch your Google account daily.
          </p>
        </div>
      </section>

      {/* H2: What problems */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            What Local SEO Problems Are You Facing?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              The most common problem is an incomplete Google Business Profile. Most SMBs set up a GBP once,
              verify the address, add a phone number, and never touch it again. Google weighs GBP completeness
              heavily — missing categories, no weekly posts, zero Q&amp;A entries, outdated photos, unused attributes.
              Every blank field is a ranking signal you are leaving on the table.
            </p>
            <p>
              The second problem is not knowing where you actually rank. You might check your own profile and
              see your business appear in position three — but that is only because Google shows your location
              relative to where you are searching from. A customer in a different part of your district might
              see you in position eight or not at all. Without a rank-tracking grid, you are flying blind.
            </p>
            <p>
              Singapore&apos;s density makes this harder. In a city where competing businesses are sometimes
              within the same building, GBP rank is decided by very small margins — review velocity, posting
              consistency, citation accuracy, and how well your profile matches the exact keywords your customers
              type. A competitor who posts twice a week and has 50 more reviews than you will consistently
              outrank you even if your actual business is better.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Our Services */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Our Local SEO Services
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Epicware&apos;s Local SEO module starts with{" "}
              <Link href="/local-seo-singapore/gbp-optimisation" className="text-primary font-medium hover:underline">
                GBP Optimisation
              </Link>
              . The platform runs a 19-point audit across every profile you manage, flags critical gaps,
              and auto-generates improvements — primary and secondary category selections, attribute additions,
              Q&amp;A entries, photo uploads, and a posting schedule. Whether you have one outlet or ten,
              every profile stays fully optimised without you logging into Google daily.
            </p>
            <p>
              Regular GBP posts are one of the most overlooked ranking signals. Epicware&apos;s{" "}
              <Link href="/local-seo-singapore/gbp-post-scheduling" className="text-primary font-medium hover:underline">
                GBP Post Scheduling
              </Link>{" "}
              generates posts automatically from your business data and schedules them at the right frequency.
              New businesses or those migrating from an old profile start with{" "}
              <Link href="/local-seo-singapore/gbp-setup" className="text-primary font-medium hover:underline">
                GBP Setup &amp; Onboarding
              </Link>
              , where the platform handles verification, initial optimisation, and connects everything
              to the Epicware dashboard in under 48 hours.
            </p>
            <p>
              The most powerful feature for serious local SEO is{" "}
              <Link href="/local-seo-singapore/local-rank-tracking" className="text-primary font-medium hover:underline">
                Local Rank Tracking (EpicMap)
              </Link>
              . EpicMap shows exactly where your business ranks on a geographic grid — by keyword, by district,
              by day. You can see whether you rank in the top three in Bedok but drop to position seven in
              the next postal district, and exactly which keywords are driving the gap.
            </p>
            <p>
              Underpinning all of this is{" "}
              <Link href="/local-seo-singapore/citation-building" className="text-primary font-medium hover:underline">
                Citation Building
              </Link>
              , which ensures your business name, address, and phone number appear consistently across Singapore
              directories, review platforms, and local data aggregators. Inconsistent citations confuse Google
              and dilute your local authority. Finally,{" "}
              <Link href="/local-seo-singapore/competitor-analysis" className="text-primary font-medium hover:underline">
                Competitor Analysis
              </Link>{" "}
              shows you exactly what your top-ranking competitors are doing — review counts, posting frequency,
              category choices — so you know precisely what to fix first.
            </p>
          </div>
        </div>
      </section>

      {/* H2: For Singapore */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Local SEO for Singapore SMBs
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Singapore is one of the most competitive local search environments in the world. The country is
              small and dense, which means the same Google Maps 3-Pack covers a neighbourhood of thousands.
              A restaurant in Jurong competes with dozens of others for a small geographic radius. A clinic in
              Tampines needs to rank for every relevant keyword across the entire estate, not just one street.
            </p>
            <p>
              Epicware tracks rank across Singapore&apos;s key districts — Jurong, Tampines, Woodlands, Ang Mo Kio,
              Toa Payoh, Clementi, Orchard, Bedok, and Yishun — with individual reporting per location.
              Multi-outlet businesses get a unified dashboard showing how each branch performs against its
              local competitors, with data updated daily rather than in monthly snapshots.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Why Choose Us */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Why Choose Epicware for Local SEO
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Most local SEO tools are built for the US or UK market and adapted for Asia as an afterthought.
              Epicware was built from the ground up for Singapore — the right categories, the right directories,
              the right rank-tracking grid density for a city-state where a 2km difference changes your competitive
              landscape entirely.
            </p>
            <p>
              The platform was built by the team behind NinjaOS, which served F&amp;B businesses across Singapore
              and processed over $120M in GMV before its 2021 exit. We know the SMB market here. And because Epicware
              is a platform — not an agency — you get real-time data, self-serve controls, and results that do not
              stop when someone goes on leave.{" "}
              <Link href="/" className="text-primary font-medium hover:underline">
                See the full Epicware platform
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid
        heading="All Local SEO Services"
        services={CHILD_SERVICES}
      />

      <FinalCTA />
    </>
  );
}
