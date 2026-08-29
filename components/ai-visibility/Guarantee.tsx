"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { GUARANTEE } from "@/lib/ai-visibility-constants";

export default function Guarantee() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          {...fadeUp()}
          className="rounded-[28px] bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d] p-10 lg:p-14 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 items-center text-center sm:text-left"
        >
          <div className="w-24 h-24 rounded-full bg-luxury-gold flex items-center justify-center mx-auto sm:mx-0 shrink-0">
            <span className="font-display font-extrabold text-[13px] text-luxury-gold-foreground text-center leading-tight">
              TOP 3
              <br />
              90 DAYS
            </span>
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-2xl mb-2.5">{GUARANTEE.title}</h3>
            <p className="text-white/70 text-[15px] leading-relaxed max-w-lg mb-2">{GUARANTEE.body}</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-lg">{GUARANTEE.sub}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
