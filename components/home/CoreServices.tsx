"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, MapPin, Building2, Sparkles, ShieldCheck, Star, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: Search,
    badge: "Technical · On-Page · Content",
    badgeClass: "bg-[#185FA5]/10 text-[#185FA5] border-[#185FA5]/30",
    title: "SEO Services",
    href: "/locations/singapore/seo",
    cta: "Rank Your Website",
    body: "Google Maps brings you nearby customers; your website brings everyone else. Our SEO services in Singapore get your site ranking for the searches your customers actually make, from \"best dentist in Tampines\" to \"aircon servicing near me\". We fix technical issues, optimise every page around one clear keyword, write service pages and blogs your customers want to read, and build high-authority backlinks and citations. Every ranking and lead is tracked live, so you always know what is working and what we are doing next.",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    highlight: true,
  },
  {
    icon: MapPin,
    badge: "Google Maps 3-Pack",
    badgeClass: "bg-secondary/10 text-secondary border-secondary/20",
    title: "Local SEO",
    href: "/locations/singapore/local-seo",
    cta: "Get Into the 3-Pack",
    body: "When Singapore customers search \"near me\", the top three results on Google Maps get the first look, and rankings change street by street. As a local SEO agency, we work to put you in that 3-Pack for the keywords and districts that matter to your business. We map your visibility on a live grid with EpicMap, fix your Google Business Profile and citations, publish fresh posts every week, and track competitors outlet by outlet. Whether you serve one neighbourhood or the whole island, you see exactly where you rank.",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    highlight: false,
  },
  {
    icon: Building2,
    badge: "19-Point GBP Audit",
    badgeClass: "bg-accent/10 text-accent-foreground border-accent/20",
    title: "Google Business Profile Optimisation",
    href: "/locations/singapore/google-business-profile",
    cta: "Optimise Your GBP",
    body: "Your Google Business Profile is the most valuable piece of digital real estate your business owns, and most SMBs leave much of it unused. Our team runs a 19-point audit on every profile you manage, fixes the gaps that hold your ranking back, publishes weekly posts and tracks your keyword rank across Singapore's districts on a live map grid. Whether you run one outlet or ten, every profile stays complete, consistent and active, without you having to touch it every day.",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    highlight: false,
  },
  {
    icon: Sparkles,
    badge: "ChatGPT · Gemini · AI Overviews",
    badgeClass: "bg-primary/10 text-primary border-primary/30",
    title: "AI Search Optimisation (GEO)",
    href: "/locations/singapore/ai-search-visibility",
    cta: "Get Recommended by AI",
    body: "Your customers no longer only Google you. They ask ChatGPT, Gemini, Perplexity and Google AI Overviews which clinic, salon or restaurant to choose, and the AI names just a few businesses. Our GEO and AEO team works to make yours one of them. We structure your website and Google Business Profile so AI can read and trust them, add the right schema, and earn mentions on the sites AI tools cite. Every win is tracked with a dated screenshot, so you see exactly when AI starts recommending you.",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    badge: "Google · Facebook · TripAdvisor",
    badgeClass: "bg-secondary/10 text-secondary border-secondary/20",
    title: "Online Reputation Management",
    href: "/locations/singapore/review-management",
    cta: "Protect Your Reputation",
    body: "Customers check your star rating before they ever call you. One unanswered 1-star review or a fake attack from a competitor can quietly send them to the business next door. Our online reputation management team protects your rating across Google, Facebook and TripAdvisor: we monitor every outlet in real time, reply to every review in your brand voice, grow fresh 5-star reviews, and challenge fake or policy-breaking reviews through Google's official process. You get one live view of your reputation, outlet by outlet.",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    highlight: false,
  },
  {
    icon: Star,
    badge: "WhatsApp & Email Automation",
    badgeClass: "bg-accent/10 text-accent-foreground border-accent/20",
    title: "Review Management",
    href: "/locations/singapore/review-management",
    cta: "Automate Review Requests",
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
            Core Growth Services
          </span>
          <h2 className="font-display text-foreground max-w-2xl mx-auto">
            Our AI Powered Marketing Services in Singapore
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Everything a local business needs to get found on Google, recommended by AI and trusted by
            customers, delivered by one Singapore team.
          </p>
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
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
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
