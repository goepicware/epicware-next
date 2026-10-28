import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PAGED_SERVICES, getService, getServiceFromPrice, type Service } from "@/lib/site/services";
import { COUNTRIES, getCountry, type Country } from "@/lib/site/countries";
import { isCountryServiceLive } from "@/lib/site/content";

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
 * page.tsx files, not MDX, but isCountryServiceLive() already special-
 * cases "singapore" to always return true, so both rings below use it
 * directly with no Singapore-specific branching needed here.
 */

export default function MoneyPageLinkRings({
  countrySlug,
  serviceSlug,
}: {
  countrySlug: string;
  serviceSlug: string;
}) {
  const country = getCountry(countrySlug) as Country;
  const service = getService(serviceSlug) as Service;

  const siblingServices = PAGED_SERVICES.filter(
    (s) => s.slug !== serviceSlug && isCountryServiceLive(countrySlug, s.slug)
  );

  const sameServiceOtherCountries = COUNTRIES.filter(
    (c) => c.slug !== countrySlug && isCountryServiceLive(c.slug, serviceSlug)
  );

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
                  className="group rounded-xl border border-border/60 bg-card p-5 hover:shadow-card hover:border-primary/40 transition-all flex flex-col"
                >
                  <h3 className="font-semibold text-foreground text-sm mb-1">{s.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{s.shortDescription}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/40">
                    <span className="text-xs font-medium text-muted-foreground">{getServiceFromPrice(s, country.slug)}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-1.5 transition-all">
                      View service <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
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
            This page is part of Epicware&apos;s global{" "}
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
