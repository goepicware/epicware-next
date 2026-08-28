"use client";

import { Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import HeroHeadline from "./HeroHeadline";
import { fadeUp } from "./shared";
import { AI_VISIBILITY, HEADLINE_VARIANTS, DEFAULT_HEADLINE_VARIANT } from "@/lib/ai-visibility-constants";

function scrollToForm(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const { hero } = AI_VISIBILITY;
  return (
    <section className="hero-gradient pt-32 pb-16 lg:pt-44 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div {...fadeUp()} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">AI Search Visibility · Singapore</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.05)} className="font-display font-bold text-foreground leading-[1.1] mb-5 text-[clamp(1.75rem,4.5vw,3rem)]">
              <Suspense fallback={<>{HEADLINE_VARIANTS[DEFAULT_HEADLINE_VARIANT]}</>}>
                <HeroHeadline />
              </Suspense>
            </motion.h1>

            <motion.p {...fadeUp(0.1)} className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              {hero.subheadline}
            </motion.p>

            <motion.a
              {...fadeUp(0.15)}
              href="#audit-form"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02]"
            >
              {hero.ctaLabel}
            </motion.a>
          </div>

          <motion.div {...fadeUp(0.2)} className="hidden lg:block relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)]">
            <Image
              src="/assets/ai-visibility/hero-owner-phone.jpg"
              alt="A Singapore small-business owner checking their phone"
              fill
              sizes="460px"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
