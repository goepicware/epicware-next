import type { ReactNode } from "react";
import Link from "next/link";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

interface GuidePageProps {
  schema: object;
  badge: string;
  h1: string;
  subtitle: string;
  trustSignals: string[];
  imageSrc?: string;
  intro: ReactNode;
  body: ReactNode;
  ctaHref: string;
  ctaLabel: string;
}

export default function GuidePage({ schema, badge, h1, subtitle, trustSignals, imageSrc = "/assets/epicmap-before-after.png", intro, body, ctaHref, ctaLabel }: GuidePageProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CategoryHero badge={badge} h1={h1} subtitle={subtitle}
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo#form" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={trustSignals} imageSrc={imageSrc} />
      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-lg text-muted-foreground mb-8 space-y-4">{intro}</div>
          <div className="prose prose-lg max-w-none text-muted-foreground
            [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3
            [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:space-y-2 [&_ul]:mb-4 [&_ol]:space-y-2 [&_ol]:mb-4 [&_li]:leading-relaxed
            [&_strong]:text-foreground [&_strong]:font-semibold
            [&_a]:text-primary [&_a]:font-medium [&_a]:hover:underline">
            {body}
          </div>
          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <Link href={ctaHref}
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300">
              {ctaLabel} →
            </Link>
          </div>
        </div>
      </article>
      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
