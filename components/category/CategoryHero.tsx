"use client";

import Link from "next/link";
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
  overlayClass: string;
  imageSrc?: string;
}

export default function CategoryHero({
  badge,
  h1,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  trustSignals,
  overlayClass,
  imageSrc = "/assets/hero-image.jpg",
}: CategoryHeroProps) {
  return (
    <section className="relative min-h-[76vh] flex items-center overflow-hidden pt-24 pb-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${imageSrc}')` }}
      />
      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${overlayClass}`} />
      {/* Subtle noise texture */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 backdrop-blur-sm rounded-full px-5 py-2 text-sm font-semibold text-white tracking-wide">
            {badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-white mb-6 max-w-3xl"
          style={{ lineHeight: 1.1 }}
        >
          {h1}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-white/80 mb-10 max-w-2xl leading-relaxed"
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
            className="bg-white text-foreground hover:bg-white/90 h-14 px-8 rounded-full font-semibold text-base group"
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
            className="rounded-full border-white/40 text-white hover:bg-white/10 h-14 px-8 font-semibold text-base"
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
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-sm font-medium text-white/90">{signal}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
