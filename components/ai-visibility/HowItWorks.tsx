"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function HowItWorks() {
  const { kicker, heading, steps } = AI_VISIBILITY.howItWorks;
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.span {...fadeUp()} className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
          {kicker}
        </motion.span>
        <motion.h2 {...fadeUp(0.05)} className="font-display text-foreground">
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-11">
          {steps.map((step, i) => (
            <motion.div key={step.num} {...fadeUp(0.1 * i)}>
              <div className="w-[34px] h-[34px] rounded-full bg-primary/10 text-primary font-display font-bold text-[15px] flex items-center justify-center mb-4">
                {step.num}
              </div>
              <h3 className="font-semibold text-foreground text-[16.5px] mb-2">{step.title}</h3>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
