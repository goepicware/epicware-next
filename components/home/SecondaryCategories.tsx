"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MapPin, Sparkles, Zap, ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    icon: Star,
    title: "Reputation Management",
    href: "/reputation-management-singapore",
    cta: "Manage Your Reputation",
    description:
      "Negative reviews cost you walk-ins. One 2-star review visible to everyone within a 1km radius can wipe out a week of marketing spend. Epicware's Reputation Management suite handles review generation, AI-written responses, real-time monitoring, and — uniquely — bad review removal. Stop managing your reputation manually. Let the platform do it.",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    badge: "Most Popular",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  {
    icon: MapPin,
    title: "Local SEO Services",
    href: "/local-seo-singapore",
    cta: "Rank on Google Maps",
    description:
      "Showing up on Google Maps when someone searches \"best [your business] near me\" isn't luck — it's infrastructure. Epicware's Local SEO module optimises your Google Business Profile, tracks your rank across Singapore districts, builds citations, and schedules GBP posts on autopilot. Set it up once. The platform handles the rest.",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    badge: null,
    badgeColor: "",
  },
  {
    icon: Sparkles,
    title: "AI & GEO Visibility",
    href: "/ai-search-visibility-singapore",
    cta: "Get Cited by AI Search",
    description:
      "Google's AI Overviews, ChatGPT, and Perplexity are replacing the first page of search results. When someone asks an AI \"which dental clinic should I go to in Clementi?\", is your business in the answer? Epicware's GEO module gets you cited in AI-generated responses — the next frontier of local visibility that most Singapore businesses haven't even heard of yet.",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    badge: "New",
    badgeColor: "bg-accent/10 text-accent-foreground border-accent/20",
  },
  {
    icon: Zap,
    title: "Growth Tools",
    href: "/growth-tools",
    cta: "Grow Your Customer Base",
    description:
      "Getting found is step one. Converting visitors into loyal customers is step two. Epicware's Growth Tools — EpicEngage email marketing, EpicSocial scheduling, and Website SEO Builder — close the loop between discovery and retention, all inside the same platform you already use for reviews and rankings.",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    badge: null,
    badgeColor: "",
  },
];

export default function SecondaryCategories() {
  return (
    <section className="relative py-24 lg:py-32 section-gradient-1 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/6 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
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
            Platform Modules
          </span>
          <h2 className="font-display text-foreground max-w-2xl mx-auto">
            Everything Your Local Business Needs to Dominate Search
          </h2>
          <div className="divider-glow mx-auto w-24 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={cat.href} className="card-feature group block h-full">
                  <div className="card-feature-inner p-8 lg:p-10 flex flex-col gap-5 h-full">
                    <div className="flex items-start justify-between">
                      <motion.div
                        className={`w-14 h-14 rounded-2xl ${cat.iconBg} flex items-center justify-center shrink-0 ring-1 ring-border/50 shadow-card`}
                        whileHover={{ scale: 1.12, rotate: -6 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <Icon className={`w-7 h-7 ${cat.iconColor}`} />
                      </motion.div>
                      {cat.badge && (
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${cat.badgeColor}`}>
                          {cat.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-foreground mb-3">{cat.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{cat.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary mt-auto pt-4 border-t border-border/30">
                      {cat.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
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
