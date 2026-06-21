"use client";

import { motion } from "framer-motion";
import { LANDING } from "@/lib/landing-constants";

const { credibility } = LANDING;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function CredibilityBridge() {
  return (
    <section className="bg-[#0A0F1E] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Brand declaration */}
        <motion.div {...fadeUp(0)} className="mb-10">
          <p className="text-2xl md:text-4xl font-extrabold text-white mb-4 italic">
            &ldquo;{credibility.lines[0]}&rdquo;
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {credibility.lines[1]}
          </p>
        </motion.div>

        {/* Capability pills */}
        <motion.div {...fadeUp(0.15)} className="flex flex-wrap justify-center gap-3 mb-10">
          {credibility.pills.map((pill) => (
            <span
              key={pill}
              className="px-4 py-2 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-sm font-semibold"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Founder line */}
        <motion.p {...fadeUp(0.25)} className="text-sm text-gray-500 border-t border-white/10 pt-8 max-w-xl mx-auto">
          {credibility.founderLine}
        </motion.p>

      </div>
    </section>
  );
}
