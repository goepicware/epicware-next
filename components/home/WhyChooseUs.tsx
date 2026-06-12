"use client";

import { motion } from "framer-motion";
import { Trash2, Globe, LayoutDashboard, Brain } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: Trash2,
    headline: "The Only Platform That Removes Bad Reviews",
    explanation:
      "Every competitor will tell you to \"respond professionally.\" We actually get them removed. Our Bad Review Removal service tackles fake, malicious, and policy-violating reviews — and you only pay if the review comes down.",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    stat: "Pay $0 if we fail",
  },
  {
    icon: Globe,
    headline: "Built for Singapore SMBs. Not Adapted for Them.",
    explanation:
      "Most local SEO tools are US or UK products re-skinned for Asia. Epicware is built from the ground up for Singapore's dense, review-driven, multi-outlet SMB market — F&B chains, clinics, salons, car workshops, tuition centres.",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    stat: "Singapore-native since 2023",
  },
  {
    icon: LayoutDashboard,
    headline: "A Platform, Not an Agency. Your Dashboard, Not Our Retainer.",
    explanation:
      "Agencies sell your time back to you. Epicware gives you a self-serve platform that runs GBP optimisation, review generation, rank tracking, and post scheduling — without a monthly agency bill or waiting on someone else's team.",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    stat: "No retainers. Cancel anytime.",
  },
  {
    icon: Brain,
    headline: "AI Search Visibility Before Your Competitors Know It Exists",
    explanation:
      "ChatGPT, Perplexity, and Google AI Overviews now answer \"best clinic in Tampines.\" Epicware's GEO module gets your business cited in those answers — not just ranked on the old-school blue links.",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    stat: "GEO · AEO · AI Overviews",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 section-gradient-2 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/6 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-5">
            Why Choose Us
          </span>
          <h2 className="font-display text-foreground max-w-2xl mx-auto">
            Why Singapore SMB Owners Call Us First
          </h2>
          <div className="divider-glow mx-auto w-24 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIFFERENTIATORS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.headline}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="card-feature group block h-full"
              >
                <div className="card-feature-inner p-8 lg:p-10 flex flex-col gap-5 h-full">
                  <div className="flex items-start justify-between">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 ring-1 ring-border/50 shadow-card`}
                      whileHover={{ scale: 1.12, rotate: -6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Icon className={`w-7 h-7 ${item.iconColor}`} />
                    </motion.div>
                    <span className="text-xs font-semibold text-foreground/70 bg-muted rounded-full px-3 py-1.5 border border-border/60">
                      {item.stat}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-foreground mb-3">
                      {item.headline}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
