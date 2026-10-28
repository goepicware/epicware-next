import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { mdxComponents } from "@/components/site/mdxComponents";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import { SERVICES } from "@/lib/site/services";
import { COUNTRIES, type Country } from "@/lib/site/countries";
import { getMoneyPageContent, getHubContent } from "@/lib/site/content";

export default function CountryHubLayout({
  country,
  h1,
  body,
}: {
  country: Country;
  h1: string;
  body: string;
}) {
  // Every service is listed on the hub — live ones link through, drafts
  // show as plain "launching soon" text instead of being hidden, so
  // visitors (and the substance/honesty gates) see the full roadmap
  // rather than a silently incomplete list.
  const servicesWithStatus = SERVICES.map((s) => ({
    service: s,
    isLive: getMoneyPageContent(country.slug, s.slug)?.frontmatter.draft === false,
  }));
  const otherCountries = COUNTRIES.filter((c) => {
    if (c.slug === country.slug) return false;
    if (c.slug === "singapore") return true; // real static page, never a draft
    return getHubContent(c.slug)?.frontmatter.draft === false;
  });

  return (
    <>
      <section className="pt-28 pb-12 hero-gradient">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations" },
              { label: country.displayName },
            ]}
          />
          <h1 className="font-display font-bold text-foreground mt-5 mb-4 leading-tight">{h1}</h1>
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

      {/* Every service, live ones linked, the rest shown as "launching soon" */}
      <section className="py-10 lg:py-14 section-gradient-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-display text-foreground mb-8 text-center">
            Services for {country.displayName} Businesses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesWithStatus.map(({ service: s, isLive }) =>
              isLive ? (
                <Link
                  key={s.slug}
                  href={`/locations/${country.slug}/${s.slug}`}
                  className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card transition-shadow duration-300 flex flex-col gap-3 group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {s.shortDescription}
                  </p>
                </Link>
              ) : (
                <div
                  key={s.slug}
                  className="rounded-2xl border border-dashed border-border/60 bg-card/40 p-6 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-muted-foreground">{s.name}</h3>
                    <span className="text-xs font-medium text-muted-foreground/70 whitespace-nowrap">
                      Launching soon
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed flex-1">
                    {s.shortDescription}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Other markets (draft hubs excluded) */}
      {otherCountries.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-6 max-w-3xl">
            <p className="text-base text-muted-foreground mb-3">Also serving:</p>
            <div className="flex flex-wrap gap-3">
              {otherCountries.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
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
