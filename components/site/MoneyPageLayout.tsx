import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { mdxComponents } from "@/components/site/mdxComponents";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import { getService, type Service } from "@/lib/site/services";
import { getCountry, type Country } from "@/lib/site/countries";
import MoneyPageLinkRings from "@/components/site/MoneyPageLinkRings";

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
        <div className="container mx-auto px-6 max-w-3xl">
          <MDXRemote
            source={body}
            options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
            components={mdxComponents}
          />
        </div>
      </section>

      <MoneyPageLinkRings countrySlug={countrySlug} serviceSlug={serviceSlug} h1={h1} />

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
