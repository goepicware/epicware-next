"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const PLANS = [
  {
    name: "Foundation",
    badge: null,
    monthlyPrice: 149,
    annualPrice: 127,
    subtitle: "Everything to collect reviews and respond automatically.",
    outcome: null,
    guarantee: null,
    features: [
      "4–5 star review collection via QR standee",
      "1-click WhatsApp service recovery",
      "AI review responses (auto-reply)",
      "AI Review Chat",
      "Email / SMS / WhatsApp broadcast campaigns",
      "CRM up to 1,000 customers",
      "Wall of Love embeddable widget",
      "Multi-platform dashboard",
      "5,000 emails / month",
    ],
    highlight: false,
    perOutlet: false,
  },
  {
    name: "Authority",
    badge: "Most Popular",
    monthlyPrice: 599,
    annualPrice: 509,
    subtitle: "Everything in Foundation, plus full Local SEO and rank tracking.",
    outcome: "Top 5 on Google Map Pack & AI search. Steady ranking lift.",
    guarantee:
      "Rank Top 3 on Google Maps for 1 tracked keyword within 90 days — or we extend free until achieved.",
    features: [
      "Complete GBP audit (80-point) + full optimisation",
      "5 SEO-optimised GBP posts per week",
      "Blue Ocean keyword research",
      "Local Maps grid scan",
      "Ranking intelligence dashboard",
      "Competitor monitoring (ongoing)",
      "GEO/AEO AI Citation for 1 tracked keyword/month",
      "Article generation + backlinking",
      "Bi-weekly performance reporting",
      "CRM up to 5,000 customers",
    ],
    highlight: true,
    perOutlet: true,
  },
  {
    name: "Domination",
    badge: "Best Value",
    monthlyPrice: 1500,
    annualPrice: 1275,
    subtitle:
      "Everything in Authority, plus full AI search visibility and SEO content.",
    outcome: "Top 3 on Google Search, Maps & AI. Named by ChatGPT/Gemini.",
    guarantee:
      "Rank Top 3 for 3 tracked keywords + cited by ChatGPT/Gemini within 120 days — or free until achieved.",
    features: [
      "GEO/AEO AI Citation for 3 tracked keywords/month",
      "20 tracked keywords (full territory intelligence)",
      "10 SEO blog posts per month",
      "Website SEO for 20 keywords",
      "GEO Audit",
      "GEO Implementation (content, schema & authority signals for LLM recommendation)",
      "Monthly GEO Monitoring Report",
      "Link building (authority signals)",
      "Dedicated growth strategist",
      "Monthly Revenue Impact Report",
    ],
    highlight: false,
    perOutlet: true,
  },
  {
    name: "Full Stack",
    badge: "New",
    monthlyPrice: 2200,
    annualPrice: 1870,
    subtitle:
      "Everything in Domination, plus paid ad management across Meta and Google.",
    outcome:
      "Immediate leads from day 1 + Top 3 on Google Search, Maps & AI. Organic and paid working together.",
    guarantee:
      "Top 3 rankings within 120 days + measurable lead flow from ads within 30 days — or we extend free.",
    features: [
      "Meta (Facebook & Instagram) paid ad management",
      "Google Search & Display ad management",
      "Ad creative strategy + copy (EPIC Framework)",
      "Monthly ad performance reporting",
      "Retargeting campaigns (website + review audiences)",
      "Ad spend billed separately",
    ],
    note: "Ad spend is billed separately and is not included in the monthly fee.",
    highlight: false,
    perOutlet: true,
  },
];

function formatPrice(p: number) {
  return p.toLocaleString("en-SG");
}

export default function PricingCards() {
  const [annual, setAnnual] = useState(false);

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
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div className="mb-1">
                  <span className="font-display font-bold text-4xl text-foreground">
                    ${formatPrice(annual ? plan.annualPrice : plan.monthlyPrice)}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">/mo</span>
                </div>
                {plan.perOutlet && (
                  <p className="text-xs text-muted-foreground mb-1">
                    Includes 1 outlet · +$99/additional outlet
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
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80 leading-snug">
                        {f}
                      </span>
                    </li>
                  ))}
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

      {/* Add-ons */}
      <div className="rounded-3xl border border-border/60 bg-muted/30 p-8">
        <h3 className="font-display font-semibold text-foreground text-lg mb-5">
          Add-Ons
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              name: "Bad Review Removal",
              price: "$200 / review",
              note: "Pay only if successfully removed. No charge if the review stays up.",
              highlight: true,
            },
            {
              name: "Additional Outlet",
              price: "+$99 / outlet / month",
              note: "Add any number of additional outlets to any plan.",
              highlight: false,
            },
            {
              name: "WordPress Maintenance",
              price: "$1,500 one-time",
              note: "Full WordPress site audit, update, and security hardening.",
              highlight: false,
            },
          ].map((a) => (
            <div
              key={a.name}
              className={`rounded-2xl p-5 border ${a.highlight ? "border-primary/30 bg-primary/5" : "border-border/60 bg-card"}`}
            >
              <p className="font-semibold text-foreground text-sm mb-1">
                {a.name}
              </p>
              <p
                className={`font-bold text-lg mb-2 ${a.highlight ? "text-primary" : "text-foreground"}`}
              >
                {a.price}
              </p>
              <p className="text-xs text-muted-foreground leading-snug">
                {a.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
