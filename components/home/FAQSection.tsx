"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS: { q: string; a: React.ReactNode; schemaText: string }[] = [
  {
    q: "What makes Epicware different from other digital marketing agencies in Singapore?",
    a: "Three things. Our team works inside our own AI software, so you see live rankings, reviews and AI mentions instead of a monthly PDF. We cover Google Maps, your website, AI search and reviews together. And we show proof with dates: real screenshots of clients ranked #1 on Google and AI search.",
    schemaText:
      "Three things. Our team works inside our own AI software, so you see live rankings, reviews and AI mentions instead of a monthly PDF. We cover Google Maps, your website, AI search and reviews together. And we show proof with dates: real screenshots of clients ranked #1 on Google and AI search.",
  },
  {
    q: "Is Epicware an AI digital marketing agency?",
    a: "Yes. Epicware is an AI-powered digital marketing agency in Singapore. Our team covers SEO, local SEO, AI search, reputation management and social content, and runs every account on our own AI software: EpicMap, EpicReview, EpicEngage and EpicSocial.",
    schemaText:
      "Yes. Epicware is an AI-powered digital marketing agency in Singapore. Our team covers SEO, local SEO, AI search, reputation management and social content, and runs every account on our own AI software: EpicMap, EpicReview, EpicEngage and EpicSocial.",
  },
  {
    q: "What services does Epicware offer?",
    a: (
      <>
        <Link href="/seo-agency-singapore" className="text-primary font-medium hover:underline">
          SEO services
        </Link>{" "}
        (technical SEO, on-page optimisation, content and link building), local SEO and Google
        Business Profile optimisation, AI search optimisation (GEO), online reputation management,
        review management and bad review removal. Most clients combine local SEO with website SEO
        and reputation management.
      </>
    ),
    schemaText:
      "SEO services (technical SEO, on-page optimisation, content and link building), local SEO and Google Business Profile optimisation, AI search optimisation (GEO), online reputation management, review management and bad review removal. Most clients combine local SEO with website SEO and reputation management.",
  },
  {
    q: "How long does it take to see results?",
    a: "Google Maps rankings often move within 30–60 days, which is when the results on this page were captured. Website SEO usually shows movement in 3–6 months, and competitive keywords take 6–12 months. You can follow every change live in EpicMap.",
    schemaText:
      "Google Maps rankings often move within 30–60 days, which is when the results on this page were captured. Website SEO usually shows movement in 3–6 months, and competitive keywords take 6–12 months. You can follow every change live in EpicMap.",
  },
  {
    q: "Can you get my business recommended by ChatGPT and Google AI Overviews?",
    a: "Yes. AI tools recommend businesses they can verify across trusted sources: your website, Google Business Profile, reviews, directories and articles that mention you. Our AI search optimisation work strengthens all of them, and the proof section above shows clients cited by ChatGPT, AI Overviews and AI Mode.",
    schemaText:
      "Yes. AI tools recommend businesses they can verify across trusted sources: your website, Google Business Profile, reviews, directories and articles that mention you. Our AI search optimisation work strengthens all of them, and the proof section above shows clients cited by ChatGPT, AI Overviews and AI Mode.",
  },
  {
    q: "Is removing Google reviews legal?",
    a: "Yes. We only request removal of reviews that break Google's own content policies, such as fake reviews, spam, conflicts of interest or harassment. Requests go through Google's official channels. Genuine negative reviews that follow the rules stay up, so we help you reply to them well.",
    schemaText:
      "Yes. We only request removal of reviews that break Google's own content policies, such as fake reviews, spam, conflicts of interest or harassment. Requests go through Google's official channels. Genuine negative reviews that follow the rules stay up, so we help you reply to them well.",
  },
  {
    q: "Can you actually remove a bad Google review?",
    a: "If it breaks Google's policies, usually yes. We assess each review, file formal removal requests and escalate through Google's channels. You pay $200 per review, refunded in full if it isn't removed within 3 months.",
    schemaText:
      "If it breaks Google's policies, usually yes. We assess each review, file formal removal requests and escalate through Google's channels. You pay $200 per review, refunded in full if it isn't removed within 3 months.",
  },
  {
    q: "I have multiple outlets. Can you manage all of them?",
    a: "Yes. Each outlet's Google Business Profile, rankings, reviews and posts are handled separately and reported side by side in one dashboard.",
    schemaText:
      "Yes. Each outlet's Google Business Profile, rankings, reviews and posts are handled separately and reported side by side in one dashboard.",
  },
  {
    q: "Do you only work with Singapore businesses?",
    a: "Our team is based in Singapore and most clients are here, but we also run SEO for businesses in Malaysia, the UAE, the UK and the US.",
    schemaText:
      "Our team is based in Singapore and most clients are here, but we also run SEO for businesses in Malaysia, the UAE, the UK and the US.",
  },
  {
    q: "What does onboarding look like?",
    a: "We get access to your Google Business Profile, Google Analytics 4, Search Console and website. Our team audits your profile, rankings and site, then sends you the keyword plan, profile updates and a 30-day posting calendar to approve before anything goes live.",
    schemaText:
      "We get access to your Google Business Profile, Google Analytics 4, Search Console and website. Our team audits your profile, rankings and site, then sends you the keyword plan, profile updates and a 30-day posting calendar to approve before anything goes live.",
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
        text: faq.schemaText,
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
