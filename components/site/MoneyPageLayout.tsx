import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { mdxComponents } from "@/components/site/mdxComponents";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import { getService, getServiceFromPrice, type Service } from "@/lib/site/services";
import { getCountry, type Country } from "@/lib/site/countries";
import MoneyPageLinkRings from "@/components/site/MoneyPageLinkRings";
import ServiceLeadCTA from "@/components/site/ServiceLeadCTA";
import { LEAD_CTA_CONFIG } from "@/lib/site/leadCTA";

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
  subtitle,
  body,
  extraBreadcrumb,
}: {
  countrySlug: string;
  serviceSlug: string;
  h1: string;
  /** Page's metaDescription, reused as the hero dek — already written as an accurate one-liner per page, so no separate copy field is needed. */
  subtitle: string;
  body: string;
  /** City/platform variant name (e.g. "Miami", "Yelp") for a 5th breadcrumb level — omitted on the parent country×service page. */
  extraBreadcrumb?: string;
}) {
  const country = getCountry(countrySlug) as Country;
  const service = getService(serviceSlug) as Service;
  const hasLeadCTA = serviceSlug in LEAD_CTA_CONFIG;
  const leadConfig = LEAD_CTA_CONFIG[serviceSlug];

  const ctaPrimary = hasLeadCTA
    ? { label: leadConfig.primaryLabel, href: `#${leadConfig.formAnchorId}` }
    : { label: "Book a Free Demo", href: "/book-demo#form" };
  const ctaSecondary = hasLeadCTA
    ? { label: "Book a Strategy Call", href: `/book-demo?country=${countrySlug}&service=${serviceSlug}` }
    : { label: "Free GBP Audit", href: "/free-audit" };

  // Only truthful, data-backed signals — never a claim invented per service.
  const trustSignals: string[] = [];
  const priceSignal = getServiceFromPrice(service, countrySlug);
  if (priceSignal) trustSignals.push(priceSignal);
  if (serviceSlug === "review-removal") {
    trustSignals.push("Refunded If Not Removed");
    trustSignals.push("Evidence-Backed Reports");
  }
  trustSignals.push(`Serving ${country.displayName}`);

  return (
    <>
      <CategoryHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: country.displayName, href: `/locations/${country.slug}` },
          extraBreadcrumb
            ? { label: service.name, href: `/locations/${country.slug}/${service.slug}` }
            : { label: service.name },
          ...(extraBreadcrumb ? [{ label: extraBreadcrumb }] : []),
        ]}
        badge={`${service.name.toUpperCase()} · ${(extraBreadcrumb ?? country.displayName).toUpperCase()}`}
        h1={h1}
        subtitle={subtitle}
        ctaPrimary={ctaPrimary}
        ctaSecondary={ctaSecondary}
        trustSignals={trustSignals}
        imageSrc={service.heroImage}
      />

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <MDXRemote
            source={body}
            options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
            components={mdxComponents}
          />
        </div>
      </section>

      {hasLeadCTA && (
        <section className="pb-12 lg:pb-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <ServiceLeadCTA countrySlug={countrySlug} serviceSlug={serviceSlug} variant="bottom" />
          </div>
        </section>
      )}

      <MoneyPageLinkRings countrySlug={countrySlug} serviceSlug={serviceSlug} />

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
