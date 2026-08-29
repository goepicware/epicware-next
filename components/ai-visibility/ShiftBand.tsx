"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function ShiftBand() {
  const { shift } = AI_VISIBILITY;
  return (
    <section className="relative bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span {...fadeUp()} className="block text-xs font-bold uppercase tracking-widest text-luxury-gold mb-5">
          Why this matters now
        </motion.span>
        <motion.p {...fadeUp(0.05)} className="font-display font-semibold text-white text-[clamp(1.5rem,3.2vw,2rem)] leading-snug max-w-3xl">
          {shift.quoteLead} <span className="text-luxury-gold">{shift.quoteAccent}</span>
        </motion.p>
        <motion.p {...fadeUp(0.1)} className="text-white/60 text-[15.5px] leading-relaxed max-w-2xl mt-6">
          {shift.body}
        </motion.p>
      </div>
    </section>
  );
}
