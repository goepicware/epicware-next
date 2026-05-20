"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    industry: "Restaurant · Singapore",
    metric: "4.1 → 4.8★",
    metricLabel: "Google Rating in 60 days",
    story:
      "A multi-outlet restaurant chain was struggling with inconsistent reviews across locations. After implementing EpicReview, they collected 3× more reviews per month and lifted their average rating across all outlets.",
    client: "Multi-outlet F&B group, Singapore",
    href: "/case-studies/restaurant-multi-outlet-growth-singapore",
    accentColor: "text-primary",
    bgColor: "bg-primary/6",
  },
  {
    industry: "Healthcare Clinic · Singapore",
    metric: "#1 on Google Maps",
    metricLabel: "Local pack ranking in 90 days",
    story:
      "A GP clinic in central Singapore was invisible on Google Maps despite years in operation. Our Local SEO and GBP Optimisation service moved them to the top 3 results, tripling inbound call volume.",
    client: "GP clinic, Central Singapore",
    href: "/case-studies/clinic-review-growth-singapore",
    accentColor: "text-secondary",
    bgColor: "bg-secondary/6",
  },
  {
    industry: "Nail & Hair Salon · Singapore",
    metric: "68% fewer no-shows",
    metricLabel: "via WhatsApp automation",
    story:
      "A busy nail salon was losing revenue to no-shows and last-minute cancellations. Kairo's WhatsApp automation sent reminders and allowed quick rescheduling — turning a painful problem into a competitive advantage.",
    client: "Independent nail salon, Singapore",
    href: "/case-studies/salon-whatsapp-automation",
    accentColor: "text-accent",
    bgColor: "bg-accent/6",
  },
];

export default function ResultsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  const slide = SLIDES[current];

  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            Real Results
          </span>
          <h2 className="font-display text-foreground">
            Businesses that grow with Epicware
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="card-elevated p-10 lg:p-14"
            >
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className={`shrink-0 ${slide.bgColor} rounded-3xl p-8 text-center min-w-[180px]`}>
                  <div className={`text-4xl lg:text-5xl font-black font-display ${slide.accentColor} mb-2 leading-none`}>
                    {slide.metric}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {slide.metricLabel}
                  </div>
                </div>

                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">
                    {slide.industry}
                  </span>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    {slide.story}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6 italic">
                    — {slide.client}
                  </p>
                  <Link
                    href={slide.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                  >
                    Read full case study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous result"
              className="w-11 h-11 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next result"
              className="w-11 h-11 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
