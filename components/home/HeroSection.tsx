"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "500+", label: "Reviews Collected" },
  { value: "200+", label: "Businesses Ranked" },
  { value: "4.8★", label: "Avg Rating Lift" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-24 pb-20">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-secondary/8 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/6 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="inline-block mb-6">
          <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-5 py-2 text-sm font-semibold text-primary tracking-wide">
            AI-POWERED GROWTH PLATFORM · SINGAPORE
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.05)}
          className="font-display font-bold text-foreground mb-6"
        >
          Rank higher. Get more reviews.
          <br />
          <span className="gradient-text">Grow your local business.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Epicware combines done-for-you Local SEO services, AI-powered reputation management, and smart automation — so your business shows up first when customers search.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          {...fadeUp(0.15)}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-dramatic group"
          >
            <Link href="/book-demo#form" className="flex items-center gap-2">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-accent text-accent hover:bg-accent/8 hover:text-accent h-14 px-8 font-semibold text-base"
          >
            <Link href="/audit">Get Free GBP Audit</Link>
          </Button>
        </motion.div>

        {/* Stats chips */}
        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-wrap justify-center gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border/50 rounded-2xl px-6 py-4 text-center shadow-card"
            >
              <div className="text-2xl font-bold font-display text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
