import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import { COUNTRIES } from "@/lib/site/countries";

export const metadata: Metadata = {
  title: { absolute: "Epicware Locations — Local SEO & Reputation Management Worldwide | Epicware" },
  description:
    "Epicware runs local SEO, Google Business Profile, and reputation management for businesses in Singapore, the United States, the United Kingdom, Australia, and the UAE.",
  alternates: { canonical: "https://www.epicware.ai/locations" },
  openGraph: {
    title: "Epicware Locations — Local SEO & Reputation Management Worldwide | Epicware",
    description:
      "Epicware runs local SEO, Google Business Profile, and reputation management for businesses in Singapore, the United States, the United Kingdom, Australia, and the UAE.",
    url: "https://www.epicware.ai/locations",
  },
};

export default function LocationsHubPage() {
  return (
    <>
      <section className="pt-28 pb-12 hero-gradient">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Locations" }]} />
          <h1 className="font-display font-bold text-foreground mt-5 mb-4 leading-tight">
            Epicware Locations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Local SEO, Google Business Profile management, and reputation management — run by
            the same team and software across every market we serve.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COUNTRIES.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card transition-shadow duration-300 flex flex-col gap-3 group"
              >
                <h2 className="font-display font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                  {c.displayName}
                </h2>
                <span className="text-sm font-semibold text-primary flex items-center gap-1 mt-auto">
                  Explore {c.displayName} <ArrowRight className="w-4 h-4" />
                </span>
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
