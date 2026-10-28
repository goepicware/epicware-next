import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PRICING } from "@/lib/site/proof";

const feeLabel = `S$${PRICING.plans.fullStack.monthly.toLocaleString("en-SG")}`;
const minAdSpendLabel = `S$${PRICING.patientEngineOffer.minAdSpend.toLocaleString("en-SG")}`;

export const PATIENT_ENGINE_FAQS: { q: string; a: string }[] = [
  {
    q: `${feeLabel} a month is a lot.`,
    a: "It is, which is why the calculator above shows exactly how many new patients cover it. Hiring an ads agency, an SEO agency and a receptionist separately typically costs more, and none of them talk to each other.",
  },
  {
    q: "Will this actually increase my revenue?",
    a: "We increase enquiries. Revenue depends on how you convert them, which is why every enquiry is answered in under 60 seconds and your monthly report tracks results in dollars. More enquiries answered fast is the most reliable lever we know.",
  },
  {
    q: "Can you guarantee sales?",
    a: "No, and be careful of anyone who does. We guarantee a written enquiry target and work free until we hit it.",
  },
  {
    q: "My last agency failed. Why would this be different?",
    a: "Usually agencies fail for one of three reasons: SEO-only with nothing in the meantime, ads-only with nothing compounding, or leads left unanswered. The Engine is built to fix all three. You also get a day-1 baseline and a day-90 re-run, so you'll see the real difference.",
  },
  {
    q: "Is there a contract?",
    a: "No lock-in. Cancel anytime with 30 days' notice. Pay 3 months upfront if you want the setup fee waived.",
  },
  {
    q: "Where does my ad spend go?",
    a: `Directly to Meta and Google, minimum ${minAdSpendLabel}/month. It's separate from our fee.`,
  },
  {
    q: "Do I own my accounts?",
    a: "Yes. Your ad accounts and Google Business Profile stay yours.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16 lg:py-24 section-gradient-1">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-display text-foreground text-center mb-10">Straight Answers</h2>

        <div className="bg-card border border-border/50 rounded-3xl px-6 lg:px-10 py-4 shadow-card">
          <Accordion type="single" collapsible defaultValue="pe-faq-0" className="w-full">
            {PATIENT_ENGINE_FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`pe-faq-${i}`} className="border-border/50 last:border-b-0">
                <AccordionTrigger className="text-left font-semibold text-foreground py-5 text-base hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
