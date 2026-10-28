import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import { COUNTRIES } from "@/lib/site/countries";
import { getHubContent } from "@/lib/site/content";

export const metadata: Metadata = {
  title: { absolute: "Epicware Locations — Local SEO & Reputation Management | Epicware" },
  description:
    "Epicware runs local SEO, Google Business Profile, and reputation management for Singapore businesses.",
  alternates: { canonical: "https://www.epicware.ai/locations" },
  openGraph: {
    title: "Epicware Locations — Local SEO & Reputation Management | Epicware",
    description:
      "Epicware runs local SEO, Google Business Profile, and reputation management for Singapore businesses.",
    url: "https://www.epicware.ai/locations",
  },
};

export default function LocationsHubPage() {
  // Draft country hubs (no market proof yet) are excluded — Singapore's
  // real static page is never a draft.
  const availableCountries = COUNTRIES.filter((c) => {
    if (c.slug === "singapore") return true;
    return getHubContent(c.slug)?.frontmatter.draft === false;
  });

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
            {availableCountries.map((c) => (
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
          {availableCountries.length < COUNTRIES.length && (
            <p className="text-sm text-muted-foreground mt-6">
              {COUNTRIES.filter((c) => !availableCountries.includes(c)).map((c) => c.displayName).join(", ")} — more
              markets launching soon.
            </p>
          )}
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
