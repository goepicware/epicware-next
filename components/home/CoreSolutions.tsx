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
    color: "text-primary",
    bg: "bg-primary/8",
    comingSoon: false,
  },
  {
    icon: Star,
    title: "GBP Optimisation",
    description:
      "Maximise your Google Business Profile to convert more views into calls, clicks, and visits every single day.",
    href: "/services/google-business-profile-optimization",
    color: "text-secondary",
    bg: "bg-secondary/8",
    comingSoon: false,
  },
  {
    icon: MessageSquare,
    title: "Reputation Management",
    description:
      "Collect, monitor, and respond to Google reviews on autopilot. Build the social proof that wins new customers.",
    href: "/services/reputation-management",
    color: "text-primary",
    bg: "bg-primary/8",
    comingSoon: false,
  },
  {
    icon: Sparkles,
    title: "EpicSocial",
    description:
      "AI-generated posts built from your Google data. Posted to Facebook, Instagram, and TikTok. Zero effort on your end.",
    href: "/products/epicsocial",
    color: "text-secondary",
    bg: "bg-secondary/8",
    comingSoon: true,
  },
];

export default function CoreSolutions() {
  return (
    <section className="py-24 lg:py-32 section-gradient-1">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-foreground max-w-2xl mx-auto">
            Everything your local business needs to dominate search
          </h2>
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
                  className={`card-feature group block h-full ${solution.comingSoon ? "cursor-default" : ""}`}
                >
                  <div className="card-feature-inner p-8 lg:p-10 flex flex-col gap-5">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${solution.bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-6 h-6 ${solution.color}`} />
                      </div>
                      {solution.comingSoon && (
                        <span className="text-xs font-bold bg-secondary/15 text-secondary px-3 py-1 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                    {!solution.comingSoon && (
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary mt-auto pt-2">
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
