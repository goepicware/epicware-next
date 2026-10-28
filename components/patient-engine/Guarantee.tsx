import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { PRICING } from "@/lib/site/proof";

const minAdSpendLabel = `S$${PRICING.patientEngineOffer.minAdSpend.toLocaleString("en-SG")}`;

const CONDITIONS = [
  `Ad spend of at least ${minAdSpendLabel}/month throughout`,
  "Enquiries answered through the AI WhatsApp Assistant",
  "Account access (ads, Google Business Profile, website) given within 7 days",
  "Day-1 baseline recorded before we start",
];

export default function Guarantee() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
            <ShieldCheck className="w-8 h-8 text-primary" aria-hidden="true" />
          </div>
          <h2 className="font-display text-foreground mb-4">
            Hit Your Enquiry Target in 90 Days, or We Keep Working Free.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            After your audit, we write a qualified-enquiry target into your agreement, based on your baseline,
            your ad spend and your market. If you don&apos;t hit it within 90 days, we keep working at no fee
            until you do.
          </p>
        </div>

        <p className="text-sm text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          A qualified enquiry is a real person who is interested in your service and reaches you by phone,
          booking or WhatsApp.
        </p>

        <div className="rounded-2xl border border-border/60 bg-card p-6 mb-8">
          <h3 className="font-display font-semibold text-foreground text-base mb-4">
            The conditions, stated plainly:
          </h3>
          <ul className="space-y-3">
            {CONDITIONS.map((condition) => (
              <li key={condition} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-foreground/80 leading-relaxed">{condition}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border-2 border-foreground/15 bg-muted/30 p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-foreground mb-2">The honest part</p>
          <p className="text-sm text-foreground/80 leading-relaxed">
            We don&apos;t guarantee sales. We can&apos;t control your pricing, your consultations or your front
            desk. We guarantee the enquiries, because that&apos;s the part we control, and we put our fee on
            the line for it.
          </p>
        </div>
      </div>
    </section>
  );
}
