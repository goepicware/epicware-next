import { PRICING } from "@/lib/site/proof";

const minAdSpendLabel = `S$${PRICING.patientEngineOffer.minAdSpend.toLocaleString("en-SG")}`;

const FOR = [
  "You run an aesthetic clinic with treatments worth investing in",
  `You can invest at least ${minAdSpendLabel}/month in ad spend`,
  "Your clinic can handle more consultations",
  "You want to be measured on enquiries and dollars, not rankings",
];

const NOT_FOR = [
  "You need results in 7 days",
  "You don't want AI answering first-touch WhatsApp enquiries",
  "You can't fund ad spend right now",
  "You want someone to guarantee your sales (nobody honest can)",
];

export default function WhoFor() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-foreground text-center mb-12">
          This Isn&apos;t for Every Clinic. Here&apos;s How to Tell.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
            <h3 className="font-display font-semibold text-foreground text-base mb-4">It&apos;s for you if:</h3>
            <ul className="space-y-3">
              {FOR.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                  <span className="shrink-0" aria-hidden="true">
                    ✅
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-muted/30 p-6">
            <h3 className="font-display font-semibold text-foreground text-base mb-4">
              It&apos;s not for you if:
            </h3>
            <ul className="space-y-3">
              {NOT_FOR.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                  <span className="shrink-0" aria-hidden="true">
                    ❌
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
