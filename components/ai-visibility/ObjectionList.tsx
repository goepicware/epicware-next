"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

// Plain always-visible Q&A list, not an accordion — matches the approved
// mockup's direction for this section specifically.
export default function ObjectionList() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6">
        <motion.span {...fadeUp()} className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
          Before you ask
        </motion.span>
        <motion.h2 {...fadeUp(0.05)} className="font-display text-foreground mb-2">
          Common questions
        </motion.h2>

        <div className="mt-8">
          {AI_VISIBILITY.objections.map((item, i) => (
            <motion.div key={item.q} {...fadeUp(0.05 * i)} className="border-b border-border/60 py-5">
              <p className="font-semibold text-foreground text-[15.5px] mb-2 flex gap-2.5">
                <span className="text-primary">Q.</span> {item.q}
              </p>
              <p className="text-[14.5px] text-muted-foreground leading-relaxed pl-6">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
