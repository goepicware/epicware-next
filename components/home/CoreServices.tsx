"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2, MapPin, Star, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Trash2,
    badge: "Only on Epicware",
    badgeClass: "bg-[#185FA5]/10 text-[#185FA5] border-[#185FA5]/30",
    title: "Bad Review Removal",
    href: "/bad-review-removal-singapore",
    cta: "Remove a Bad Review",
    price: "$200 per review — pay only if removed",
    body: "One fake review from a competitor. One angry ex-employee. One review that violates Google's own policies — but nobody told you how to fight it. Bad reviews don't just hurt your feelings; they cost you customers every single day they stay up. Epicware is the only platform in Singapore that offers productised Bad Review Removal: we identify policy violations, submit formal removal requests on your behalf, and escalate through Google's channels. You pay $200 per review only when it's successfully removed — zero risk, zero agency retainer.",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    highlight: true,
  },
  {
    icon: MapPin,
    badge: "19-Point GBP Audit",
    badgeClass: "bg-secondary/10 text-secondary border-secondary/20",
    title: "GBP Optimisation",
    href: "/gbp-optimisation-singapore",
    cta: "Optimise Your GBP",
    price: null,
    body: "Your Google Business Profile is the most valuable piece of digital real estate your business owns — and most SMBs are leaving 60% of it unused. Epicware's GBP Optimisation module runs a 19-point audit across every profile you manage, flags critical gaps, auto-generates weekly posts, and tracks your keyword rank across Singapore's districts on a live map grid. Whether you run one outlet or ten, every profile stays optimised and consistent — without you touching it daily.",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    highlight: false,
  },
  {
    icon: Star,
    badge: "WhatsApp & Email Automation",
    badgeClass: "bg-accent/10 text-accent-foreground border-accent/20",
    title: "Review Management",
    href: "/review-management-singapore",
    cta: "Automate Review Requests",
    price: null,
    body: "More reviews. Better reviews. Faster responses. The three levers that determine whether you rank in the Google Maps 3-Pack or get buried by a competitor with half your quality. Epicware automates review request campaigns via WhatsApp and email, generates AI-written responses personalised to each review, and monitors every new review in real time across all your outlets. Stop chasing reviews manually — let the platform run the system while you run your business.",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    highlight: false,
  },
];

export default function CoreServices() {
  return (
    <section className="py-24 lg:py-32 section-gradient-2 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-5">
            Core Services
          </span>
          <h2 className="font-display text-foreground max-w-2xl mx-auto">
            The Services That Move the Needle
          </h2>
          <div className="divider-glow mx-auto w-24 mt-6" />
        </motion.div>

        <div className="flex flex-col gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={service.href}
                  className={`card-feature group block ${service.highlight ? "ring-[2px] ring-[#185FA5]" : ""}`}
                >
                  <div className="card-feature-inner p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-start">
                      {/* Icon + badge */}
                      <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:w-32 lg:shrink-0 lg:text-center">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center ring-1 ring-border/50 shadow-card`}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Icon className={`w-8 h-8 ${service.iconColor}`} />
                        </motion.div>
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${service.badgeClass} whitespace-nowrap`}>
                          {service.badge}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-foreground text-xl mb-2">
                          {service.title}
                        </h3>
                        {service.price && (
                          <p className="text-sm font-semibold text-primary mb-3">{service.price}</p>
                        )}
                        <p className="text-muted-foreground leading-relaxed mb-5">{service.body}</p>
                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                          {service.cta}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
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
