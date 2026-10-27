import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import { getService, SERVICES } from "@/lib/site/services";
import { COUNTRIES } from "@/lib/site/countries";
import { getMoneyPageContent, getSubFeatureContent } from "@/lib/site/content";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const canonical = `https://www.epicware.ai/services/${slug}`;
  return {
    title: { absolute: `${service.name} | Epicware` },
    description: service.shortDescription,
    alternates: { canonical },
    openGraph: { title: `${service.name} | Epicware`, description: service.shortDescription, url: canonical },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  // Draft pages (no market proof yet, or sub-feature content not migrated)
  // are excluded from both rings below.
  const availableCountries = COUNTRIES.filter(
    (c) => getMoneyPageContent(c.slug, slug)?.frontmatter.draft === false
  );
  const availableSubFeatures = service.subFeatures.filter(
    (f) => getSubFeatureContent(slug, f.slug)?.frontmatter.draft === false
  );

  return (
    <>
      <section className="pt-28 pb-12 hero-gradient">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]} />
          <h1 className="font-display font-bold text-foreground mt-5 mb-4 leading-tight">{service.name}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{service.shortDescription}</p>
        </div>
      </section>

      {availableSubFeatures.length > 0 && (
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display text-foreground mb-8 text-center">What&apos;s Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {availableSubFeatures.map((f) => (
                <Link
                  key={f.slug}
                  href={`/services/${service.slug}/${f.slug}`}
                  className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card transition-shadow duration-300 flex flex-col gap-3 group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{f.name}</h3>
                  <span className="text-sm font-semibold text-primary flex items-center gap-1 mt-auto">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {availableCountries.length > 0 && (
        <section className="py-10 lg:py-14 section-gradient-1">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-foreground mb-6">Available In</h2>
            <div className="flex flex-wrap gap-3">
              {availableCountries.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}/${service.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {c.displayName}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
