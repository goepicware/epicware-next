import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Local SEO & Reputation Management Singapore — GBP Experts | Epicware",
  description:
    "Epicware's Local SEO and Reputation Management platform for Singapore SMBs. GBP optimisation, review management, and bad review removal across all districts.",
  alternates: {
    canonical: "https://www.epicware.ai/locations/singapore",
  },
  openGraph: {
    title: "Local SEO & Reputation Management Singapore | Epicware",
    description:
      "Epicware's Local SEO and Reputation Management platform for Singapore SMBs. GBP optimisation, review management, and bad review removal.",
    url: "https://www.epicware.ai/locations/singapore",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Epicware Pte. Ltd.",
  url: "https://epicware.ai",
  telephone: "+6590013157",
  email: "hello@epicware.ai",
  address: {
    "@type": "PostalAddress",
    addressCountry: "SG",
    addressRegion: "Singapore",
  },
  areaServed: { "@type": "Country", name: "Singapore" },
  description:
    "AI-native Local SEO and Reputation Management platform for Singapore SMBs.",
};

const DISTRICTS = [
  { name: "Jurong", slug: "jurong" },
  { name: "Tampines", slug: "tampines" },
  { name: "Woodlands", slug: "woodlands" },
  { name: "Ang Mo Kio", slug: "ang-mo-kio" },
  { name: "Toa Payoh", slug: "toa-payoh" },
  { name: "Clementi", slug: "clementi" },
  { name: "Buona Vista", slug: "buona-vista" },
  { name: "Orchard", slug: "orchard" },
  { name: "Bedok", slug: "bedok" },
  { name: "Yishun", slug: "yishun" },
];

const INDUSTRIES = [
  { label: "F&B Restaurants", href: "/industries/restaurants" },
  { label: "Medical Clinics", href: "/industries/healthcare-clinics" },
  { label: "Hair & Beauty Salons", href: "/industries/nail-hair-salons" },
  { label: "Tuition Centres", href: "/industries/tuition-centres" },
  { label: "Wellness Centres & Spas", href: "/industries/wellness-centres" },
  { label: "Dental Clinics", href: "/industries/dental-clinics" },
  { label: "Car Workshops", href: "/industries/car-workshops" },
  { label: "Physiotherapy Clinics", href: "/industries/physiotherapy" },
  { label: "Retail Stores", href: "/industries/retail-stores" },
];

const SERVICES = [
  {
    label: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    description:
      "19-point audit that covers every rank factor affecting your Google Business Profile in Singapore.",
  },
  {
    label: "Review Management",
    href: "/review-management-singapore",
    description:
      "Real-time monitoring and AI-powered responses for every review across all your outlets.",
  },
  {
    label: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    description:
      "$200/review, pay on success. Singapore's only productised bad review removal service.",
  },
  {
    label: "Local SEO Singapore",
    href: "/local-seo-singapore",
    description:
      "The full suite: rank tracking, citation building, GBP posts, and schema optimisation.",
  },
  {
    label: "Reputation Management",
    href: "/reputation-management-singapore",
    description:
      "Review generation, AI response, and reputation analytics — all in one dashboard.",
  },
  {
    label: "AI Search Visibility",
    href: "/ai-search-visibility-singapore",
    description:
      "Optimise for ChatGPT, Perplexity, and Google AI Overviews alongside traditional Maps rank.",
  },
];

export default function SingaporeHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CategoryHero
        badge="EPICWARE · SINGAPORE"
        h1="Local SEO & Reputation Management for Singapore SMBs"
        subtitle="Epicware is Singapore-built. Every product, every service, and every case study is built for the Singapore SMB market — not adapted from a US or UK tool."
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={[
          "Singapore-Built",
          "500+ Outlets Managed",
          "Bad Review Removal Guaranteed",
          "SG · MY · UAE · UK · US",
        ]}
        imageSrc="/assets/epicmap-before-after.png"
      />

      {/* Opening */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Singapore&apos;s local search market is unique. The city&apos;s density means a
            business in Tampines competes for GBP visibility with competitors in Pasir
            Ris, Bedok, and beyond — all within a 5km radius. Google Maps rank is
            decided by review count, rating, GBP completeness, and posting frequency —
            not just proximity. Epicware was built specifically for this environment.
            The platform manages every Local SEO signal that matters in Singapore&apos;s
            hyperlocal search ecosystem.
          </p>
        </div>
      </section>

      {/* Why Singapore Local SEO is different */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            Why Singapore Local SEO Is Different
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Singapore&apos;s high population density concentrates competition into
              extremely tight geographic areas. A restaurant in Jurong East doesn&apos;t
              just compete with the three closest restaurants — it competes with every
              restaurant visible in a customer&apos;s Google Maps view, which can span
              multiple MRT stops. The 3-Pack determines who wins that customer.
            </p>
            <p>
              Multi-outlet operators — F&B groups with 3–10 locations, clinic chains,
              salon franchises — face the management burden of multiple GBP profiles
              simultaneously. Missing a bad review on one outlet while managing five
              others is a real operational problem. Epicware&apos;s single dashboard solves
              this.
            </p>
            <p>
              As AI-powered search (Google AI Overviews, ChatGPT, Perplexity) becomes
              a larger share of discovery, Singapore businesses need both Maps
              visibility and AI citation readiness. Epicware manages both.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-8 text-center">
            Our Singapore Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card transition-shadow duration-300 flex flex-col gap-3 group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {s.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.description}
                </p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Districts */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Districts We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {DISTRICTS.map((d) => (
              <Link
                key={d.slug}
                href={`/locations/singapore/${d.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                {d.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Industries We Serve</h2>
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                {i.label}
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
