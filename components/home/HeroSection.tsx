"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
                LOCAL SEO & REPUTATION PLATFORM · SINGAPORE
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.06)}
              className="font-display font-bold text-foreground mb-6 leading-[1.08]"
            >
              Singapore&apos;s #1
              <br />
              Local SEO &amp;
              <br />
              <span className="gradient-text">Reputation Platform</span>
              <br />
              for SMBs
            </motion.h1>

            <motion.p
              {...fadeUp(0.12)}
              className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg"
            >
              Rank higher on Google Maps, generate more reviews, and remove bad ones —
              all from one dashboard built for Singapore businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.18)}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-dramatic group"
              >
                <Link href="/book-demo#form" className="flex items-center gap-2">
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full h-14 px-8 font-semibold text-base border-[1.5px] border-[#185FA5] text-[#185FA5] bg-transparent hover:bg-[#185FA5] hover:text-white transition-colors duration-200"
              >
                <Link href="/audit">Get Your Free GBP Audit →</Link>
              </Button>
            </motion.div>

            {/* Trust stats */}
            <motion.div {...fadeUp(0.24)} className="flex items-center gap-6 pt-2 flex-wrap">
              <div>
                <div className="text-3xl font-display font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground mt-1">outlets managed</div>
              </div>
              <div className="w-px h-10 bg-border/60" />
              <div>
                <div className="text-3xl font-display font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground mt-1">reputation issues handled</div>
              </div>
              <div className="w-px h-10 bg-border/60" />
              <div>
                <div className="text-sm font-semibold text-foreground">Built for</div>
                <div className="text-3xl font-display font-bold text-foreground leading-none">SMBs</div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: hero image ── */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glow halo */}
            <div className="absolute inset-[-4%] rounded-[2rem] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/15 blur-3xl pointer-events-none" />

            {/* Image — contained, no hard borders */}
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/assets/HeroBanner.png"
                alt="Singapore SMB owner growing their business with Epicware"
                width={1672}
                height={941}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Thin left-edge fade to blend with page background */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent pointer-events-none" style={{ width: '30%' }} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
