import { ArrowRight } from "lucide-react";
import { PRICING } from "@/lib/site/proof";
import TrackedCta from "./TrackedCta";

const { fullStack } = PRICING.plans;
const { setupFee, minAdSpend, reviewsIncludedPerMonth } = PRICING.patientEngineOffer;
const reviewsValue = reviewsIncludedPerMonth * PRICING.reviewRemoval.SGD;

const VALUE_ROWS = [
  { what: "Meta + Google Ads management", why: "Fast enquiries from week two" },
  { what: "Google Maps + local SEO", why: "Rank where nearby patients search" },
  { what: "AI search citation (GEO)", why: "Show up in ChatGPT, Gemini and Google AI answers" },
  { what: "AI WhatsApp Assistant", why: "Every enquiry answered in under 60s, 24/7" },
  { what: "Monthly ROI report in dollars", why: "No vanity metrics, just what came in" },
];

export default function ValueStackPrice() {
  return (
    <section className="py-16 lg:py-24 section-gradient-1">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-foreground text-center mb-12">
          Everything You&apos;d Otherwise Hire Three Agencies For, Run as One System.
        </h2>

        {/* Value table */}
        <div className="rounded-2xl border border-border/60 bg-card overflow-hidden mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/60">
                <th className="text-left text-xs font-bold uppercase tracking-wide text-muted-foreground px-5 py-3">
                  What you get
                </th>
                <th className="text-left text-xs font-bold uppercase tracking-wide text-muted-foreground px-5 py-3">
                  Why it matters
                </th>
              </tr>
            </thead>
            <tbody>
              {VALUE_ROWS.map((row, i) => (
                <tr key={row.what} className={i < VALUE_ROWS.length - 1 ? "border-b border-border/40" : ""}>
                  <td className="text-sm font-semibold text-foreground px-5 py-3.5 align-top">{row.what}</td>
                  <td className="text-sm text-muted-foreground px-5 py-3.5 align-top">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Included extras */}
        <div className="rounded-2xl border border-border/60 bg-card p-6 mb-10">
          <h3 className="font-display font-semibold text-foreground text-base mb-4">
            Plus, at no extra cost
          </h3>
          <ul className="space-y-2.5 text-sm text-foreground/80">
            <li>
              • Up to {reviewsIncludedPerMonth} policy-violating reviews removed every month (S$
              {reviewsValue.toLocaleString("en-SG")} value)
            </li>
            <li>• AI WhatsApp Assistant installed and trained on your treatments</li>
            <li>• Day-90 missed-revenue audit re-run</li>
          </ul>
        </div>

        {/* Price card — visual peak */}
        <div
          id="pricing"
          className="scroll-mt-24 rounded-3xl border-2 border-primary/30 bg-card p-8 lg:p-10 text-center shadow-[0_0_0_1px_rgba(0,0,0,0.02),0_24px_60px_-20px_rgba(0,0,0,0.15)]"
        >
          <div className="mb-2">
            <span className="font-display font-bold text-5xl lg:text-6xl text-foreground">
              S${fullStack.monthly.toLocaleString("en-SG")}
            </span>
            <span className="text-muted-foreground text-lg ml-1">/month</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6">includes 1 outlet</p>

          <div className="text-sm text-foreground/80 space-y-1.5 mb-6">
            <p>
              + ad spend (minimum S${minAdSpend.toLocaleString("en-SG")}/month, paid directly to Meta and
              Google)
            </p>
            <p>+ S${fullStack.perOutlet} per additional outlet for Google Business Profile management</p>
          </div>

          <div className="rounded-xl bg-primary/8 border border-primary/20 px-5 py-3 mb-6 inline-block">
            <p className="text-sm font-semibold text-primary">
              Pay 3 months upfront and your S${setupFee.toLocaleString("en-SG")} setup fee is waived.
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            No lock-in contracts. Cancel anytime with 30 days&apos; notice.
          </p>

          <TrackedCta
            href="/free-audit"
            ctaType="audit"
            ctaLocation="price"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-foreground text-background font-semibold text-base hover:bg-foreground/90 transition-colors"
          >
            Get My Free Missed-Revenue Audit <ArrowRight className="w-4 h-4" />
          </TrackedCta>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-xl mx-auto leading-relaxed">
          We onboard 5 new Engine clinics a month. That&apos;s not a marketing trick. It&apos;s how many we can
          set up properly in Phase 1.
        </p>
      </div>
    </section>
  );
}
