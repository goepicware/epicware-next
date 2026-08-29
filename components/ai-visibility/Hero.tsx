"use client";

import { Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import HeroHeadline, { renderHeadline } from "./HeroHeadline";
import { fadeUp } from "./shared";
import { AI_VISIBILITY, HEADLINE_VARIANTS, DEFAULT_HEADLINE_VARIANT } from "@/lib/ai-visibility-constants";

function scrollToForm(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  const { hero } = AI_VISIBILITY;
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[400px] rounded-full bg-luxury-gold/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div {...fadeUp()} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/90">{hero.eyebrow}</span>
            </motion.div>

            <motion.h1 {...fadeUp(0.05)} className="font-display font-bold text-white leading-[1.15] mb-5 text-[clamp(1.75rem,4.2vw,2.75rem)]">
              <Suspense fallback={renderHeadline(HEADLINE_VARIANTS[DEFAULT_HEADLINE_VARIANT])}>
                <HeroHeadline />
              </Suspense>
            </motion.h1>

            <motion.p {...fadeUp(0.1)} className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              {hero.subheadline}
            </motion.p>

            <motion.a
              {...fadeUp(0.15)}
              href="#audit-form"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-xl bg-luxury-gold text-luxury-gold-foreground font-bold text-base shadow-[0_14px_30px_-10px_rgba(227,162,59,0.55)] hover:-translate-y-0.5 transition-transform duration-200"
            >
              {hero.ctaLabel}
            </motion.a>

            <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-4 mt-4 text-xs text-white/60">
              <span className="inline-flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-luxury-gold" /> Free</span>
              <span className="inline-flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-luxury-gold" /> 60 seconds</span>
              <span className="inline-flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-luxury-gold" /> No credit card</span>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.25)} className="hidden lg:block relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]">
            <Image
              src="/assets/ai-visibility/hero-chatgpt-search.jpg"
              alt="A real ChatGPT search for &ldquo;best cafe in Tanjong Pagar&rdquo; recommending a specific business"
              fill
              sizes="460px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute left-4 bottom-4 flex items-center gap-2 bg-black/70 backdrop-blur-md text-white px-3.5 py-2.5 rounded-xl text-xs font-semibold">
              <X className="w-3.5 h-3.5 text-[#F0846F]" strokeWidth={3} />
              {hero.badge}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
