"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Star, MessageSquare, Sparkles, ArrowRight } from "lucide-react";

const SOLUTIONS = [
  {
    icon: MapPin,
    title: "Local SEO Singapore",
    description:
      "Rank in the top 3 on Google Maps. We manage your entire local search presence with proven, data-driven strategies.",
    href: "/services/local-seo-singapore",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    stat: "200+ businesses ranked",
    comingSoon: false,
  },
  {
    icon: Star,
    title: "GBP Optimisation",
    description:
      "Maximise your Google Business Profile to convert more views into calls, clicks, and visits every single day.",
    href: "/services/google-business-profile-optimization",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    stat: "3× more profile views",
    comingSoon: false,
  },
  {
    icon: MessageSquare,
    title: "Reputation Management",
    description:
      "Collect, monitor, and respond to Google reviews on autopilot. Build the social proof that wins new customers.",
    href: "/services/reputation-management",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    stat: "500+ reviews collected",
    comingSoon: false,
  },
  {
    icon: Sparkles,
    title: "EpicSocial",
    description:
      "AI-generated posts built from your Google data. Posted to Facebook, Instagram, and TikTok. Zero effort on your end.",
    href: "/products/epicsocial",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    stat: "AI-powered · Coming 2026",
    comingSoon: true,
  },
];

export default function CoreSolutions() {
  return (
    <section className="relative py-24 lg:py-32 section-gradient-1 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/6 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      {/* Subtle dot overlay */}
      <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-5">
            What We Do
          </span>
          <h2 className="font-display text-foreground max-w-2xl mx-auto">
            Everything your local business needs to dominate search
          </h2>
          <div className="divider-glow mx-auto w-24 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLUTIONS.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={solution.href}
                  className={`card-feature group block h-full ${solution.comingSoon ? "pointer-events-none" : ""}`}
                >
                  <div className="card-feature-inner p-8 lg:p-10 flex flex-col gap-5 h-full">
                    <div className="flex items-start justify-between">
                      <motion.div
                        className={`w-14 h-14 rounded-2xl ${solution.iconBg} flex items-center justify-center shrink-0 ring-1 ring-border/50 shadow-card`}
                        whileHover={{ scale: 1.12, rotate: -6 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Icon className={`w-7 h-7 ${solution.iconColor}`} />
                      </motion.div>
                      {solution.comingSoon && (
                        <span className="text-xs font-bold bg-secondary/12 text-secondary px-3 py-1.5 rounded-full border border-secondary/20">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display font-bold text-foreground mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${solution.iconColor} bg-border/40 rounded-full px-3 py-1`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                        {solution.stat}
                      </span>
                    </div>

                    {!solution.comingSoon && (
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary mt-auto pt-4 border-t border-border/30">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
