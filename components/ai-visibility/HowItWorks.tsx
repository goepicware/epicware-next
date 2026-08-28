"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function HowItWorks() {
  const { steps, closing } = AI_VISIBILITY.howItWorks;
  return (
    <section className="py-20 lg:py-28 section-gradient-1">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">The process</span>
          <h2 className="font-display text-foreground">How it works</h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-border/60" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fadeUp(0.1 * i)} className="relative">
                <div className="flex md:flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-display font-bold text-lg shadow-button relative z-10">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute left-6 top-12 bottom-0 w-px bg-border/60 -translate-x-1/2" />
                  )}
                  <p className="md:mt-4 pb-8 md:pb-0 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p {...fadeUp(0.3)} className="text-center text-muted-foreground italic mt-4">{closing}</motion.p>
      </div>
    </section>
  );
}
