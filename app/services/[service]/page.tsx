import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";
import { getService, PAGED_SERVICES } from "@/lib/site/services";
import { COUNTRIES } from "@/lib/site/countries";
import { getSubFeatureContent, isCountryServiceLive } from "@/lib/site/content";
import { getServiceContent } from "@/lib/site/serviceContent";
import { EPICWARE_GOOGLE_RATING, formatGoogleRatingBadge } from "@/lib/site/proof";

/**
 * Global /services/{service}/ pages — market-neutral, always live. Each
 * /locations/{country}/{service}/ page sits under one of these. See
 * lib/site/serviceContent.ts for the rich per-service copy (only "seo"
 * is written so far; the other 5 render the thinner pre-existing layout
 * until their content is approved and added there).
 */

export async function generateStaticParams() {
  return PAGED_SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service || !service.hasPage) return {};
  const content = getServiceContent(slug);
  const canonical = `https://www.epicware.ai/services/${slug}`;
  const title = content ? `${content.h1} | Epicware` : `${service.name} | Epicware`;
  const description = content?.heroDescription ?? service.shortDescription;

  // hreflang: x-default always points at this global page. en-SG points
  // at the Singapore version because it's the only live country-service
  // page today. Other countries get added here only once their page
  // actually goes live (draft:false) — never point hreflang at a noindex
  // draft page.
  const languages: Record<string, string> = { "x-default": canonical };
  for (const country of COUNTRIES) {
    if (isCountryServiceLive(country.slug, slug)) {
      languages[country.hreflang] = `https://www.epicware.ai/locations/${country.slug}/${slug}`;
    }
  }

  return {
    title: { absolute: title },
    description,
    alternates: { canonical, languages },
    openGraph: { title, description, url: canonical },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service || !service.hasPage) notFound();

  const content = getServiceContent(slug);

  const availableSubFeatures = service.subFeatures.filter(
    (f) => getSubFeatureContent(slug, f.slug)?.frontmatter.draft === false
  );

  const liveCountries = COUNTRIES.filter((c) => isCountryServiceLive(c.slug, slug));

  // Content not written yet for this service — render the original thin
  // layout so the other 5 services keep building and linking correctly
  // while their rich content is pending approval.
  if (!content) {
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

        {liveCountries.length > 0 && (
          <section className="py-10 lg:py-14 section-gradient-1">
            <div className="container mx-auto px-6 max-w-3xl">
              <h2 className="font-display text-foreground mb-6">Available In</h2>
              <div className="flex flex-wrap gap-3">
                {liveCountries.map((c) => (
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.h1,
    serviceType: service.name,
    description: content.heroDescription,
    provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
    url: `https://epicware.ai/services/${slug}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(EPICWARE_GOOGLE_RATING.value),
      ratingCount: String(EPICWARE_GOOGLE_RATING.count),
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-28 pb-12 hero-gradient">
        <div className="container mx-auto px-6 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]} />
          <h1 className="font-display font-bold text-foreground mt-5 mb-4 leading-tight">{content.h1}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{content.heroDescription}</p>
          <div className="flex flex-wrap gap-3 mt-7">
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

      {/* What it does / outcomes */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">What You Get</h2>
          <ul className="space-y-3">
            {content.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-base text-muted-foreground leading-relaxed">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 lg:py-16 section-gradient-1">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display text-foreground mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {content.process.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software block */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-4">Run On Our Own Software</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-5">{content.software.description}</p>
          <div className="flex flex-wrap gap-2">
            {content.software.products.map((p) => (
              <span key={p} className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — Singapore results. Hidden entirely when there's neither
          a case study nor a statProof figure to back it — no section
          header with nothing underneath it (see ai-search-visibility,
          which has neither yet). */}
      {(content.caseStudies.length > 0 || content.statProof) && (
        <section className="py-12 lg:py-16 section-gradient-1">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="font-display text-foreground mb-3">Singapore Results</h2>
            {content.proofIntro && (
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">{content.proofIntro}</p>
            )}
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-foreground">{formatGoogleRatingBadge()}</span>
            </div>
            {content.caseStudies.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {content.caseStudies.map((cs) => (
                  <Link
                    key={cs.href}
                    href={cs.href}
                    className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-card transition-shadow duration-300 flex flex-col gap-2 group"
                  >
                    <span className="text-sm font-bold text-primary">{cs.stat}</span>
                    <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{cs.title}</h3>
                    <span className="text-xs font-semibold text-primary flex items-center gap-1 mt-auto">
                      Read case study <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            ) : content.statProof ? (
              <div className="inline-flex items-baseline gap-3 rounded-2xl border border-border/60 bg-card px-6 py-5">
                <span className="text-3xl font-bold text-primary">{content.statProof.value}</span>
                <span className="text-sm text-muted-foreground">{content.statProof.label}</span>
              </div>
            ) : null}
          </div>
        </section>
      )}

      {/* Sub-features, if any */}
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

      {/* FAQ */}
      <section className="py-12 lg:py-16 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {content.faqs.map((f) => (
              <div key={f.question}>
                <h3 className="font-semibold text-foreground mb-2">{f.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose your market — Singapore linked, everything else as one
          plain line, not individually named/greyed-out countries. Draft
          country pages stay unlinked from here regardless of how many
          exist, so this doesn't need updating as more go live one by one;
          revisit when a second market actually launches. */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-3">Choose Your Market</h2>
          <div className="flex flex-wrap items-center gap-4">
            {liveCountries.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}/${slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/5 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                {c.displayName} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
            <span className="text-sm text-muted-foreground">More markets launching soon</span>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
