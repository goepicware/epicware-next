"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How is Epicware different from hiring a local SEO agency?",
    a: "Agencies sell time. Epicware sells a platform. With an agency, you pay a monthly retainer for someone else to log into your Google account and make changes on a schedule. With Epicware, you get a self-serve dashboard where everything — GBP optimisation, review generation, rank tracking, post scheduling — runs automatically. You see the results in real time. No waiting for a monthly report. No retainer. Pay for what you use.",
  },
  {
    q: "Can you actually remove a bad Google review?",
    a: "Yes — for reviews that violate Google's content policies (fake reviews, spam, conflict of interest, off-topic content). We identify the specific policy violation, submit a formal removal request through Google's official channels, and escalate if needed. You pay $200 per review only if it's successfully removed. We don't promise to remove every review — we promise to fight the ones that shouldn't be there.",
  },
  {
    q: "How long does it take to see results on Google Maps?",
    a: "Most clients see measurable rank improvement within 30–60 days of activating GBP optimisation and review generation. Google's algorithm weights review velocity, GBP completeness, and posting frequency — all of which Epicware manages from day one. The GBP Category Audit (free at epicware.ai/audit) shows you exactly where you're losing ground before you spend a dollar.",
  },
  {
    q: "I have multiple outlets. Can Epicware manage all of them?",
    a: "Yes — multi-outlet management is one of Epicware's core strengths. Each additional outlet is $99/month. You get a single dashboard with unified analytics across all profiles, individual rank tracking per outlet, and the ability to post, respond to reviews, and run campaigns across all locations simultaneously. F&B chains, salon groups, and clinic networks are our highest-usage segment.",
  },
  {
    q: "Is Epicware only for Singapore businesses?",
    a: "No. Epicware is Singapore-built and Singapore-native, but the platform serves businesses in Malaysia, the UAE, the UK, and the US. Local SEO fundamentals are the same everywhere — Google Business Profile, review velocity, citation consistency. The platform adapts to any market. Singapore is our home and our sharpest focus, but if you're an SMB anywhere in the world with a GBP listing, Epicware works for you.",
  },
  {
    q: "What does onboarding look like? How long does setup take?",
    a: "Most clients are fully set up within 48 hours. Onboarding involves connecting your Google Business Profile(s), completing a 19-point GBP audit, and activating your first review request campaign. Our team walks you through the setup on a live call if needed. For multi-outlet clients (5+ locations), we offer a managed onboarding service included in the Authority and Domination plans.",
  },
];

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-24 lg:py-32 section-gradient-2 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-foreground">Common Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card border border-border/50 rounded-3xl px-6 lg:px-10 py-4 shadow-card"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-border/50 last:border-b-0"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground py-5 text-base hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
