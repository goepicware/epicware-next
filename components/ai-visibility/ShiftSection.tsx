"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function ShiftSection() {
  const { shift } = AI_VISIBILITY;
  return (
    <section className="py-20 lg:py-28 section-gradient-1">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center">
        <div>
          <motion.h2 {...fadeUp()} className="font-display text-foreground mb-6">{shift.header}</motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-muted-foreground leading-relaxed text-[1.05rem]">{shift.body}</motion.p>
        </div>
        <motion.div {...fadeUp(0.15)} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
          <Image
            src="/assets/ai-visibility/shift-chatgpt-phone.jpg"
            alt="Someone asking an AI assistant a question on their phone"
            fill
            sizes="420px"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
