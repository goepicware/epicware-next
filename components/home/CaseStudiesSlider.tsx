"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const CASE_STUDIES = [
  {
    tag: "Medical Aesthetics · 2 outlets",
    title: "Top 3 in 60 Days: How a Singapore Medical Aesthetic Clinic Won Orchard and Hougang",
    stats: ["#1 Map Pack, Hougang", "#1 ChatGPT recommendation, Orchard", "+25% calls & enquiries"],
    href: "/case-studies/aesthetic-clinic-seo-singapore",
  },
  {
    tag: "F&B · 5 outlets",
    title: "How a 5-Outlet Singapore Restaurant Chain Became the Answer on Google Maps, Search and AI Overviews",
    stats: ["+24.1% organic traffic", "13.6K organic clicks", "17.3K AI Overview impressions"],
    href: "/case-studies/multi-outlet-restaurant-seo-case-study-singapore",
  },
  {
    tag: "Hair Salons · 4 outlets",
    title: "How a Singapore Salon Chain Grew to 150+ Reviews and Ranked in the Top 3",
    stats: ["Rank 7 → Top 3", "30 → 150+ reviews per outlet"],
    href: "/case-studies/salon-whatsapp-automation",
  },
  {
    tag: "F&B · 6 outlets",
    title: "How a Singapore Restaurant Group Grew to 200+ Reviews Per Outlet",
    stats: ["45 → 200+ reviews per outlet", "Centralised multi-outlet dashboard"],
    href: "/case-studies/restaurant-multi-outlet-growth-singapore",
  },
  {
    tag: "Healthcare · Multi-clinic",
    title: "How a Singapore Clinic Network Raised Their Google Rating to 4.7",
    stats: ["3 fake reviews removed", "3.8 → 4.7 rating"],
    href: "/case-studies/clinic-review-growth-singapore",
  },
  {
    tag: "Hair Salons · 4 outlets",
    title: "Hair Salon SEO Singapore: Google Maps and Reviews Case Study",
    stats: ["4 outlets on one dashboard", "Local SEO + review generation"],
    href: "/case-studies/hair-salon-seo-singapore",
  },
];

export default function CaseStudiesSlider() {
  return (
    <section className="py-20 lg:py-28 bg-[#fafaff]">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Real Results
          </span>
          <h2 className="font-display text-foreground">Case Studies From Singapore Businesses</h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Read exactly what we did for each client and the numbers it produced.
          </p>
        </motion.div>

        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:mx-0 lg:px-0">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.href}
              {...fadeUp(0.05 * i)}
              className="group shrink-0 w-[300px] snap-start lg:w-auto bg-card border border-border/60 rounded-2xl p-6 flex flex-col hover:border-primary/40 hover:shadow-card transition-all duration-300"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">{cs.tag}</span>
              <h3 className="font-display font-semibold text-foreground text-base mb-4 leading-snug">
                {cs.title}
              </h3>
              <ul className="space-y-1.5 mb-5 flex-1">
                {cs.stats.map((stat) => (
                  <li key={stat} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {stat}
                  </li>
                ))}
              </ul>
              <Link
                href={cs.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary flex items-center gap-1.5 mt-auto group-hover:underline"
              >
                Read the full case study <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            See all case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
