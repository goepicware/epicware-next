"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: 500, suffix: "+", label: "Reviews Collected" },
  { value: 200, suffix: "+", label: "Businesses Ranked" },
  { value: 4.8, suffix: "★", label: "Avg Rating Lift", decimal: true },
];

function AnimatedCounter({
  value,
  suffix,
  decimal,
}: {
  value: number;
  suffix: string;
  decimal?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(decimal ? "0.0" : "0");

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const steps = 40;
    const stepMs = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setDisplay(
        decimal
          ? (value * eased).toFixed(1)
          : Math.round(value * eased).toString()
      );
      if (step >= steps) clearInterval(timer);
    }, stepMs);
    return () => clearInterval(timer);
  }, [inView, value, decimal]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-24 pb-16">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[90px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <div className="order-2 lg:order-1">
            <motion.div {...fadeUp(0)} className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-5 py-2 text-sm font-semibold text-primary tracking-wide">
                AI-POWERED GROWTH PLATFORM · SINGAPORE
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.06)}
              className="font-display font-bold text-foreground mb-6 leading-[1.08]"
            >
              Rank higher.{" "}
              <br className="hidden sm:block" />
              Get more reviews.
              <br />
              <span className="gradient-text">Grow your local business.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.12)}
              className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg"
            >
              Epicware combines done-for-you Local SEO, AI-powered reputation
              management, and smart automation — so your business shows up
              first when customers search.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.18)}
              className="flex flex-col sm:flex-row gap-4 mb-12"
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

            {/* Animated stat chips */}
            <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-3">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl px-5 py-3.5 text-center shadow-card"
                >
                  <div className="text-xl font-bold font-display text-foreground mb-0.5">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimal={stat.decimal}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: hero image ── */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[360px] lg:max-w-[420px]">
              {/* Glow halo */}
              <div className="absolute inset-[-6%] rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/20 blur-3xl" />

              {/* Image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-premium ring-1 ring-primary/10">
                <Image
                  src="/assets/BusinessOwner.png"
                  alt="Singapore business owner seeing results with Epicware"
                  width={520}
                  height={780}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating badge — Google rating */}
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -left-8 top-[38%] bg-card/95 backdrop-blur-md border border-border/60 rounded-2xl px-4 py-3 shadow-elegant"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">⭐</span>
                  <div>
                    <div className="text-sm font-bold text-foreground leading-none mb-0.5">4.9 Rating</div>
                    <div className="text-xs text-muted-foreground">on Google</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — new review */}
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -right-6 top-[18%] bg-card/95 backdrop-blur-md border border-border/60 rounded-2xl px-4 py-2.5 shadow-elegant"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                  <div className="text-sm font-semibold text-foreground">New 5★ review</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
