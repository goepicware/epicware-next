"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import SampleReport from "./SampleReport";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function FeatureGrid() {
  const { features } = AI_VISIBILITY;
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp()}>
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">{features.kicker}</span>
          <h2 className="font-display text-foreground max-w-xl">{features.heading}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {features.items.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(0.1 * i)} className="bg-card border border-border/60 rounded-2xl p-6 shadow-card">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl mb-4">{f.emoji}</div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp(0.15)} className="text-center text-muted-foreground text-[15px] leading-relaxed max-w-2xl mx-auto mt-14 mb-6">
          {features.reportCaption}
        </motion.p>

        <div className="max-w-2xl mx-auto">
          <SampleReport />
        </div>
      </div>
    </section>
  );
}
