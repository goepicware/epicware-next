"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const SLIDES = [
  {
    industry: "Restaurant · Singapore",
    metric: "4.1→4.8★",
    metricLabel: "Google rating in 60 days",
    story:
      "A multi-outlet restaurant chain was struggling with inconsistent reviews across locations. After implementing EpicReview, they collected 3× more reviews per month and lifted their average rating across all outlets.",
    client: "Multi-outlet F&B group, Singapore",
    href: "/case-studies/restaurant-multi-outlet-growth-singapore",
    accentClass: "text-accent",
    indicatorClass: "bg-accent",
  },
  {
    industry: "Healthcare Clinic · Singapore",
    metric: "#1",
    metricLabel: "on Google Maps in 90 days",
    story:
      "A GP clinic in central Singapore was invisible on Google Maps despite years in operation. Our Local SEO and GBP Optimisation moved them to the top 3 results, tripling inbound call volume.",
    client: "GP clinic, Central Singapore",
    href: "/case-studies/clinic-review-growth-singapore",
    accentClass: "text-secondary",
    indicatorClass: "bg-secondary",
  },
  {
    industry: "Nail & Hair Salon · Singapore",
    metric: "68%",
    metricLabel: "fewer no-shows via WhatsApp",
    story:
      "A busy nail salon was losing revenue to no-shows and last-minute cancellations. Kairo's WhatsApp automation sent reminders and allowed quick rescheduling — turning a painful problem into a competitive advantage.",
    client: "Independent nail salon, Singapore",
    href: "/case-studies/salon-whatsapp-automation",
    accentClass: "text-primary",
    indicatorClass: "bg-primary",
  },
];

export default function ResultsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  const slide = SLIDES[current];

  return (
    <section className="relative py-24 lg:py-32 section-dark overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/25 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/60 mb-5">
            Real Results
          </span>
          <h2 className="font-display text-white">
            Businesses that grow with Epicware
          </h2>
        </motion.div>

        {/* Progress indicators */}
        <div className="flex gap-2 mb-8 justify-center">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? `w-12 ${slide.indicatorClass}` : "w-6 bg-white/20 hover:bg-white/35"
              }`}
            />
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card-dark p-10 lg:p-14"
            >
              <Quote className="w-8 h-8 text-white/12 mb-6" />

              <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Metric block */}
                <div className="shrink-0 text-center lg:text-left">
                  <div className={`text-5xl lg:text-6xl font-black font-display ${slide.accentClass} number-glow leading-none mb-2`}>
                    {slide.metric}
                  </div>
                  <div className="text-sm text-white/45 font-medium max-w-[150px] leading-snug">
                    {slide.metricLabel}
                  </div>
                </div>

                {/* Vertical divider */}
                <div className="hidden lg:block w-px self-stretch bg-white/10 shrink-0" />

                {/* Story */}
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4 block">
                    {slide.industry}
                  </span>
                  <p className="text-lg text-white/65 leading-relaxed mb-6">
                    {slide.story}
                  </p>
                  <p className="text-sm text-white/30 mb-6 italic">
                    — {slide.client}
                  </p>
                  <Link
                    href={slide.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${slide.accentClass} hover:gap-3 transition-all duration-300`}
                  >
                    Read full case study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={prev}
              aria-label="Previous result"
              className="w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-white/45 hover:text-white hover:bg-white/15 transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-white/25 font-medium tabular-nums">
              {current + 1} / {SLIDES.length}
            </span>
            <button
              onClick={next}
              aria-label="Next result"
              className="w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-white/45 hover:text-white hover:bg-white/15 transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
