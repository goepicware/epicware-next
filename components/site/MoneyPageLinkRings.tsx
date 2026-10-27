import Link from "next/link";
import { SERVICES, getService, type Service } from "@/lib/site/services";
import { COUNTRIES, getCountry, type Country } from "@/lib/site/countries";
import { getMoneyPageContent } from "@/lib/site/content";

/**
 * The three internal link rings the brief requires on every money page:
 *   1. Sibling services, same country
 *   2. Same service, other four countries
 *   3. Global /services/{service}/ parent
 *
 * Extracted from MoneyPageLayout so bespoke, non-MDX pages (the migrated
 * Singapore pages, which kept their original JSX instead of being
 * converted to MDX — see commit history) can include the same rings
 * without duplicating the logic.
 *
 * Singapore money pages (local-seo, google-business-profile, seo,
 * ai-search-visibility, review-management, review-removal) are literal
 * page.tsx files, not MDX — getMoneyPageContent() only resolves content
 * for the four MDX-driven countries (usa, uk, australia, dubai), so
 * Singapore is always excluded from the "sibling services" check below by
 * construction (its slug never has an MDX file to look up) — pass
 * isSingapore to opt into treating all 6 Singapore services as available.
 */

export default function MoneyPageLinkRings({
  countrySlug,
  serviceSlug,
  h1,
  isSingapore = false,
}: {
  countrySlug: string;
  serviceSlug: string;
  h1: string;
  isSingapore?: boolean;
}) {
  const country = getCountry(countrySlug) as Country;
  const service = getService(serviceSlug) as Service;

  const siblingServices = SERVICES.filter((s) => {
    if (s.slug === serviceSlug) return false;
    if (isSingapore) return true; // all 6 Singapore pages are real, non-draft
    return getMoneyPageContent(countrySlug, s.slug)?.frontmatter.draft === false;
  });

  const sameServiceOtherCountries = COUNTRIES.filter((c) => {
    if (c.slug === countrySlug) return false;
    if (c.slug === "singapore") return true; // Singapore pages are always real
    return getMoneyPageContent(c.slug, serviceSlug)?.frontmatter.draft === false;
  });

  return (
    <>
      {/* Link ring 1: sibling services, same country (draft siblings excluded) */}
      {siblingServices.length > 0 && (
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
      )}

      {/* Link ring 2: same service, other countries (draft markets excluded) */}
      {sameServiceOtherCountries.length > 0 && (
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display text-foreground mb-6">{service.name} in Other Markets</h2>
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
      )}

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
    </>
  );
}
