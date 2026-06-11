import type { ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import CategoryHero from "@/components/category/CategoryHero";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

interface Feature { feature: string; epicware: string | boolean; competitor: string | boolean }

interface ComparisonPageProps {
  schema: object;
  badge: string;
  h1: string;
  subtitle: string;
  trustSignals: string[];
  competitorName: string;
  epicwareSummary: string;
  competitorSummary: string;
  features: Feature[];
  verdict: ReactNode;
  ctaHref?: string;
}

function Cell({ val }: { val: string | boolean }) {
  if (val === true) return <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />;
  if (val === false) return <XCircle className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm text-muted-foreground">{val}</span>;
}

export default function ComparisonPage({ schema, badge, h1, subtitle, trustSignals, competitorName, epicwareSummary, competitorSummary, features, verdict, ctaHref = "/book-demo" }: ComparisonPageProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CategoryHero badge={badge} h1={h1} subtitle={subtitle}
        ctaPrimary={{ label: "Book a Free Demo", href: "/book-demo" }}
        ctaSecondary={{ label: "Free GBP Audit", href: "/audit" }}
        trustSignals={trustSignals} imageSrc="/assets/epicmap-before-after.png" />

      {/* Overview */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Epicware</p>
              <p className="text-base text-foreground leading-relaxed">{epicwareSummary}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{competitorName}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{competitorSummary}</p>
            </div>
          </div>

          {/* Feature table */}
          <div className="overflow-x-auto rounded-2xl border border-border/60">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center px-4 py-4 font-semibold text-primary">Epicware</th>
                  <th className="text-center px-4 py-4 font-semibold text-muted-foreground">{competitorName}</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-6 py-3.5 text-foreground">{f.feature}</td>
                    <td className="px-4 py-3.5 text-center"><Cell val={f.epicware} /></td>
                    <td className="px-4 py-3.5 text-center"><Cell val={f.competitor} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-10 section-gradient-1">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display text-foreground mb-6">Verdict</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground [&_a]:text-primary [&_a]:font-medium [&_a]:hover:underline [&_strong]:text-foreground">{verdict}</div>
          <div className="mt-8">
            <Link href={ctaHref}
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-105">
              Book a Free Demo →
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
