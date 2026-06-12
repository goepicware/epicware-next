"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STATS = [
  // TODO: replace with real number from Vignesh
  { value: "94%", label: "removal success rate" },
  // TODO: replace with real number from Vignesh
  { value: "500+", label: "bad reviews removed" },
  { value: "$0", label: "risk to you" },
];

export default function NoRemovalNoFee() {
  return (
    <section style={{ background: "#0A1628" }} className="py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl mb-5">
            No removal. No fee.
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Bad review removal across Singapore. If the review doesn&apos;t come down,
            you don&apos;t pay. No upsell. No retainer. That&apos;s the deal.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-3 gap-6 mb-12"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center py-6 px-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <Link
            href="/bad-review-removal-singapore"
            className="inline-flex items-center gap-2 bg-white text-[#0A1628] font-bold px-8 py-4 rounded-full text-base hover:bg-white/90 transition-colors duration-200 group"
          >
            Remove a Bad Review
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
