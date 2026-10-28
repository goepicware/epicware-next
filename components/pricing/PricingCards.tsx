"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PLANS, formatPrice } from "@/lib/pricing-data";

// Each of these feature names is linked only once across the page — in the
// first plan where it appears — not in every plan that repeats it.
// `match` tolerates the US/UK "optimization"/"optimisation" spelling used
// interchangeably in the plan data.
const FEATURE_LINKS: { match: RegExp; href: string; key: string }[] = [
  { key: "gbp-opt", match: /Google Business Profile Optimi[sz]ation/i, href: "/locations/singapore/google-business-profile" },
  { key: "local-seo", match: /local SEO/i, href: "/locations/singapore/local-seo" },
  { key: "ai-search", match: /AI search visibility/i, href: "/locations/singapore/ai-search-visibility" },
  { key: "bad-review", match: /Bad Review Removal/i, href: "/locations/singapore/review-removal" },
  { key: "ai-review-response", match: /AI review responses/i, href: "/services/review-management/ai-review-response" },
];

function linkifyFeatureOnce(text: string, used: Set<string>) {
  for (const { key, match, href } of FEATURE_LINKS) {
    if (used.has(key)) continue;
    const found = text.match(match);
    if (!found || found.index === undefined) continue;
    used.add(key);
    const idx = found.index;
    const matched = found[0];
    const before = text.slice(0, idx);
    const after = text.slice(idx + matched.length);
    return (
      <>
        {before}
        <Link href={href} className="text-primary font-medium hover:underline">
          {matched}
        </Link>
        {after}
      </>
    );
  }
  return text;
}

function NewChip() {
  return (
    <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded-full bg-secondary text-white text-[10px] font-bold leading-none tracking-wide align-middle">
      New
    </span>
  );
}

export default function PricingCards() {
  const [annual, setAnnual] = useState(false);
  // Tracks which feature names already got their one link, in plan order —
  // each of FEATURE_LINKS is linked only once, in the first plan it appears.
  const linkedFeatures = new Set<string>();

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <span
          className={`text-sm font-semibold ${!annual ? "text-foreground" : "text-muted-foreground"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => setAnnual((v) => !v)}
          className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${annual ? "bg-primary" : "bg-muted"}`}
          aria-label="Toggle annual billing"
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${annual ? "translate-x-6" : "translate-x-0"}`}
          />
        </button>
        <span
          className={`text-sm font-semibold ${annual ? "text-foreground" : "text-muted-foreground"}`}
        >
          Annual
          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
            Save 15%
          </span>
        </span>
      </div>
      <p className="text-center text-xs text-muted-foreground -mt-6 mb-10">
        Annual is optional. Monthly is always available, cancel anytime with 30 days&apos; notice.
      </p>

      {/* Plan grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {PLANS.map((plan) => (
          <div key={plan.name} className="relative">
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-3.5 left-0 right-0 flex justify-center z-10">
                <span
                  className={`inline-flex items-center px-4 py-1 rounded-full text-xs font-bold tracking-wide ${
                    plan.highlight
                      ? "bg-primary text-white"
                      : plan.badge === "New"
                        ? "bg-secondary text-white"
                        : "bg-foreground text-background"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>
            )}

            {/* Card */}
            <div
              className={`rounded-3xl border bg-card flex flex-col h-full transition-shadow duration-300 hover:shadow-card-hover ${
                plan.highlight ? "border-primary/40" : "border-border/60"
              }`}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Plan name */}
                <h3 className="font-display font-bold text-foreground text-xl mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-snug">
                  {linkifyFeatureOnce(plan.subtitle, linkedFeatures)}
                </p>

                {/* Price */}
                <div className="mb-1">
                  <span className="font-display font-bold text-4xl text-foreground">
                    ${formatPrice(annual ? plan.annualPrice : plan.monthlyPrice)}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">/mo</span>
                </div>

                {plan.perOutlet > 0 && (
                  <p className="text-xs text-muted-foreground mb-1">
                    Includes 1 outlet · +${formatPrice(plan.perOutlet)}/additional outlet
                  </p>
                )}
                {annual && (
                  <p className="text-xs text-green-700 font-medium mb-4">
                    Billed annually — save $
                    {formatPrice(
                      (plan.monthlyPrice - plan.annualPrice) * 12
                    )}
                    /yr
                  </p>
                )}
                {!annual && <div className="mb-4" />}

                {/* CTA */}
                <Link
                  href="/book-demo#form"
                  className={`inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 mb-6 ${
                    plan.highlight
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Book Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => {
                    const label = typeof f === "string" ? f : f.label;
                    const isNew = typeof f === "object" && f.isNew;
                    return (
                      <li key={label} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80 leading-snug">
                          {linkifyFeatureOnce(label, linkedFeatures)}
                          {isNew && <NewChip />}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Outcome + Guarantee */}
                {(plan.outcome || plan.guarantee) && (
                  <div className="mt-6 pt-5 border-t border-border/40 space-y-3">
                    {plan.outcome && (
                      <p className="text-xs font-semibold text-foreground leading-snug">
                        <span className="text-primary">Outcome: </span>
                        {plan.outcome}
                      </p>
                    )}
                    {plan.guarantee && (
                      <p className="text-xs text-muted-foreground leading-snug">
                        <span className="font-semibold text-foreground">
                          Guarantee:{" "}
                        </span>
                        {plan.guarantee}
                      </p>
                    )}
                  </div>
                )}

                {"note" in plan && plan.note && (
                  <p className="mt-4 text-xs text-muted-foreground italic">
                    {plan.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enterprise */}
      <div className="rounded-3xl border border-border/60 bg-card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-display font-bold text-foreground text-xl">
              Enterprise
            </h3>
            <span className="text-sm text-muted-foreground">
              Custom — $5,000–$10,000/month
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-3 max-w-2xl">
            Designed for large businesses and multi-location brands that need a
            dedicated account manager, custom integrations, API access, priority
            SLA, bespoke strategy, and multi-location management at scale.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Dedicated account manager",
              "Custom integrations & API",
              "Priority support & SLA",
              "Multi-location management",
              "Custom reporting",
              "Bespoke strategy",
            ].map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-xs font-medium text-foreground/80 border border-border/60"
              >
                <CheckCircle2 className="w-3 h-3 text-primary" />
                {f}
              </span>
            ))}
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-105 shrink-0"
        >
          Contact Us <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
