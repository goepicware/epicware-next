"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, PhotoPlaceholder } from "./shared";
import { AI_VISIBILITY } from "@/lib/ai-visibility-constants";

// Photo research came up short on an authentic (non-staged) dental/clinic
// candidate — see docs/superpowers/plans/2026-08-28-ai-visibility-landing-v2.md
// Task 14. Left as a labeled placeholder rather than forcing a staged pick.
const VERTICAL_PHOTOS: (string | null)[] = [
  null, // Clinics & Dental — placeholder
  "who-fnb.jpg",
  "who-salon.jpg",
  "who-car-workshop.jpg",
  "who-tuition.jpg",
];

export default function WhoItsFor() {
  const { body, verticals } = AI_VISIBILITY.whoItsFor;
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 {...fadeUp()} className="font-display text-foreground mb-6 text-center">Who it&apos;s for</motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-muted-foreground leading-relaxed text-[1.05rem] text-center max-w-3xl mx-auto mb-12">
          {body}
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {verticals.map((v, i) => (
            <motion.div key={v.label} {...fadeUp(0.05 * i)} className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card group">
              {VERTICAL_PHOTOS[i] ? (
                <>
                  <Image
                    src={`/assets/ai-visibility/${VERTICAL_PHOTOS[i]}`}
                    alt={v.label}
                    fill
                    sizes="(max-width: 640px) 45vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-xs font-semibold">{v.label}</p>
                  </div>
                </>
              ) : (
                <PhotoPlaceholder label={`${v.label} — no authentic candid photo found`} className="h-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
