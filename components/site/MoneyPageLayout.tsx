import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import { SERVICES, getService, type Service } from "@/lib/site/services";
import { COUNTRIES, getCountry, type Country } from "@/lib/site/countries";

/**
 * Shared template for every /locations/{country}/{service}/ money page.
 *
 * Section order per the brief: Hook (H1) → Pain → Promise → What's
 * included → Proof → Software block → Offer + pricing → FAQ → CTA. The
 * Hook (hero/H1) and CTA are rendered by this layout; everything in
 * between (Pain through FAQ) comes from the page's MDX body, which is
 * expected to use H2 headings in that order — the layout doesn't enforce
 * the order programmatically, the content file does.
 *
 * Internal link rings (brief requirement, all three present on every page):
 *   1. Sibling services, same country
 *   2. Same service, other four countries
 *   3. Global /services/{service}/ parent
 */

export default function MoneyPageLayout({
  countrySlug,
  serviceSlug,
  h1,
  body,
}: {
  countrySlug: string;
  serviceSlug: string;
  h1: string;
  body: string;
}) {
  const country = getCountry(countrySlug) as Country;
  const service = getService(serviceSlug) as Service;

  const siblingServices = SERVICES.filter((s) => s.slug !== serviceSlug);
  const sameServiceOtherCountries = COUNTRIES.filter((c) => c.slug !== countrySlug);

  return (
    <>
      <section className="pt-28 pb-12 hero-gradient">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations" },
              { label: country.displayName, href: `/locations/${country.slug}` },
              { label: service.name },
            ]}
          />
          <h1 className="font-display font-bold text-foreground mt-5 mb-4 leading-tight">
            {h1}
          </h1>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book-demo#form"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-colors"
            >
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/free-audit"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border font-semibold text-sm hover:border-primary/40 transition-colors"
            >
              Free GBP Audit
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-3xl prose prose-lg">
          <MDXRemote source={body} />
        </div>
      </section>

      {/* Link ring 1: sibling services, same country */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-6 text-center">
            More Services for {country.displayName} Businesses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {siblingServices.map((s) => (
              <Link
                key={s.slug}
                href={`/locations/${country.slug}/${s.slug}`}
                className="rounded-xl border border-border/60 bg-card p-5 hover:shadow-card transition-shadow"
              >
                <h3 className="font-semibold text-foreground text-sm mb-1">{s.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Link ring 2: same service, other countries */}
      <section className="py-10 lg:py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">
            {service.name} in Other Markets
          </h2>
          <div className="flex flex-wrap gap-3">
            {sameServiceOtherCountries.map((c) => (
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

      {/* Link ring 3: global service parent */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-base text-muted-foreground">
            {h1} is part of Epicware&apos;s global{" "}
            <Link href={`/services/${service.slug}`} className="text-primary font-medium hover:underline">
              {service.name} service
            </Link>
            .
          </p>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
