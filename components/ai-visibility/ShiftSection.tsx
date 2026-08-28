"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function ShiftSection() {
  const { shift } = AI_VISIBILITY;
  return (
    <section className="py-20 lg:py-28 section-gradient-1">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2 {...fadeUp()} className="font-display text-foreground mb-6">
          {shift.header}
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-muted-foreground leading-relaxed text-[1.05rem]">
          {shift.body}
        </motion.p>
      </div>
    </section>
  );
}
