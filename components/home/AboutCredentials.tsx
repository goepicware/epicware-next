"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Globe } from "lucide-react";

const CREDENTIALS = [
  { icon: ShieldCheck, label: "Google Business Profile Partner" },
  { icon: Globe, label: "Active in SG · MY · UAE · UK · US" },
  { icon: Award, label: "Founded by NinjaOS team — $120M GMV exit" },
  { icon: Users, label: "500+ outlet profiles managed" },
];

export default function AboutCredentials() {
  return (
    <section className="py-24 lg:py-32 section-gradient-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            About Epicware
          </span>
          <h2 className="font-display text-foreground mb-6">
            Built by Operators, Not Agencies.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Epicware is a Singapore-built Local SEO and Reputation Management platform
            serving SMBs across Singapore, Malaysia, UAE, the UK, and the US. Founded by
            the team behind NinjaOS — an F&amp;B SaaS platform that processed over $120M in
            GMV before its 2021 exit — Epicware is built by operators who understand what
            it takes to grow a local business, not just rank it. We&apos;re the only platform
            in Singapore that combines GBP optimisation, AI-powered review management,
            and bad review removal in one self-serve dashboard. No agency retainers.
            No waiting on someone else&apos;s team. Just a platform that works.
          </p>

          {/* Credentials grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CREDENTIALS.map((cred, i) => {
              const Icon = cred.icon;
              return (
                <motion.div
                  key={cred.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 bg-card border border-border/50 rounded-2xl px-4 py-3 shadow-card"
                >
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">{cred.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
