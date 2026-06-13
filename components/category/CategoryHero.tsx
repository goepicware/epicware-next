"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryHeroProps {
  badge: string;
  h1: string;
  subtitle: React.ReactNode;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  trustSignals: string[];
  overlayClass?: string; // unused after redesign — kept for API compatibility
  imageSrc?: string;
}

export default function CategoryHero({
  badge,
  h1,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  trustSignals,
  imageSrc = "/assets/hero-image.jpg",
}: CategoryHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-24 pb-16">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[90px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-5 py-2 text-sm font-semibold text-primary tracking-wide">
                {badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-foreground mb-6 leading-[1.08]"
            >
              {h1}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              {subtitle}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-dramatic group"
              >
                <Link href={ctaPrimary.href} className="flex items-center gap-2">
                  {ctaPrimary.label}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-border text-foreground hover:bg-muted h-14 px-8 font-semibold text-base"
              >
                <Link href={ctaSecondary.href}>{ctaSecondary.label}</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3"
            >
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/60 rounded-full px-4 py-2 shadow-card"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">{signal}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: blended image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[680px] lg:translate-x-8">
              {/* Ambient glow underneath */}
              <div className="absolute inset-[-15%] bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/15 blur-[80px] rounded-full" />
              {/* Image faded into background with radial mask */}
              <div
                className="relative"
                style={{
                  maskImage: "radial-gradient(ellipse 88% 88% at 52% 48%, black 35%, transparent 78%)",
                  WebkitMaskImage: "radial-gradient(ellipse 88% 88% at 52% 48%, black 35%, transparent 78%)",
                }}
              >
                <Image
                  src={imageSrc}
                  alt=""
                  width={760}
                  height={580}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
