"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const ROWS = [
  { label: "Reporting", agency: "A monthly PDF", epicware: "Live data in our own AI software" },
  { label: "Proof", agency: "Claims and averages", epicware: "Dated screenshots of #1 results on Google and AI" },
  { label: "Scope", agency: "Website rankings only", epicware: "Google Maps, website, AI search and reviews together" },
  { label: "Reviews", agency: "Not included", epicware: "Review growth, replies and bad review removal" },
  { label: "Multiple outlets", agency: "Managed one by one", epicware: "Every outlet tracked side by side" },
  { label: "Built by", agency: "Marketers", epicware: "Operators who built and exited NinjaOS" },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 section-gradient-1">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
            Why Epicware
          </span>
          <h2 className="font-display text-foreground max-w-2xl mx-auto">
            Why Singapore Businesses Choose Epicware as Their AI-Powered Digital Marketing Agency
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="overflow-x-auto rounded-2xl border border-border/60 mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th scope="col" className="text-left px-5 py-4 font-semibold text-foreground">
                  &nbsp;
                </th>
                <th scope="col" className="text-left px-5 py-4 font-semibold text-muted-foreground">
                  Typical SEO agency
                </th>
                <th scope="col" className="text-left px-5 py-4 font-semibold text-primary bg-primary/5">
                  Epicware
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 1 ? "bg-muted/10" : ""}>
                  <td className="px-5 py-4 font-medium text-foreground whitespace-nowrap">{row.label}</td>
                  <td className="px-5 py-4 text-muted-foreground">{row.agency}</td>
                  <td className="px-5 py-4 text-foreground font-medium bg-primary/5">{row.epicware}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="text-center">
          <Link
            href="/book-demo#form"
            className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
