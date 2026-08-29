"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "./shared";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

export default function WhoItsFor() {
  const { kicker, heading, lead, verticals } = AI_VISIBILITY.whoItsFor;
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.span {...fadeUp()} className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
          {kicker}
        </motion.span>
        <motion.h2 {...fadeUp(0.05)} className="font-display text-foreground max-w-2xl mb-4">
          {heading}
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-muted-foreground text-[15.5px] max-w-xl">
          {lead}
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {verticals.map((v, i) => (
            <motion.div key={v.label} {...fadeUp(0.05 * i)} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
              <Image
                src={`/assets/ai-visibility/${v.photo}`}
                alt={v.label}
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3">
                <p className="text-white text-[13.5px] font-semibold">{v.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
