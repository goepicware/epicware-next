import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Epicware Products — Local SEO & Reputation Tools | Singapore",
  description:
    "Four AI-native tools for Singapore SMBs. Rank higher, earn more reviews, remove bad ones, and grow — all from one platform. No agency. No retainer.",
  alternates: { canonical: "https://www.epicware.ai/products" },
  openGraph: {
    title: "Epicware Products — Four Tools. One Platform. Built for Singapore SMBs.",
    description:
      "EpicMap tracks your rank. EpicReview manages your reputation. EpicEngage keeps customers coming back. EpicSocial keeps you visible.",
    url: "https://www.epicware.ai/products",
  },
};

const TRUST = [
  "500+ Outlets Managed",
  "Singapore-Built",
  "AI-Native",
  "No Agency Retainer",
];

const PRODUCTS = [
  {
    name: "EpicMap",
    descriptor: "Local Rank Tracking & GBP Optimisation",
    href: "/products/epicmap",
    description:
      "See exactly where your business ranks on Google Maps across every Singapore district — and let EpicMap fix the gaps automatically.",
    features: [
      "Visual map grid: rank positions across all districts",
      "19-point GBP audit with auto-fix recommendations",
      "Competitor rank comparison per keyword",
      "Weekly auto-generated GBP posts",
    ],
    accent: "from-blue-500/10 to-indigo-500/5",
    badge: "Local SEO",
  },
  {
    name: "EpicReview",
    descriptor: "Review Management & Reputation Control",
    href: "/products/epicreview",
    description:
      "Generate more reviews, respond to every one automatically, and remove the fake or unfair ones that are costing you customers.",
    features: [
      "Automated review request campaigns (WhatsApp + email)",
      "AI-generated personalised review responses",
      "Real-time review monitoring across all outlets",
      "Bad Review Removal ($200/review, pay on success) ⭐",
    ],
    accent: "from-primary/10 to-secondary/5",
    badge: "Reputation",
  },
  {
    name: "EpicEngage",
    descriptor: "Email Marketing for Local Businesses",
    href: "/products/epicengage",
    description:
      "Turn one-time customers into regulars with automated email campaigns that feel personal — built directly into the same platform you use for reviews and rankings.",
    features: [
      "Drag-and-drop email campaign builder",
      "Automated follow-up sequences",
      "Audience segmentation by outlet",
      "Campaign analytics and open rate tracking",
    ],
    accent: "from-emerald-500/10 to-teal-500/5",
    badge: "Email",
  },
  {
    name: "EpicSocial",
    descriptor: "Social Scheduling & GBP Post Management",
    href: "/products/epicsocial",
    description:
      "Schedule social media posts and Google Business Profile updates from one dashboard — so your business stays visible without you logging into five different apps every week.",
    features: [
      "Multi-platform social scheduling (Facebook + Instagram)",
      "GBP post scheduling with AI-generated content",
      "Content calendar view across all outlets",
      "PostForMe: auto-generate posts from your business details",
    ],
    accent: "from-violet-500/10 to-purple-500/5",
    badge: "Social",
  },
];

export default function ProductsHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center hero-gradient overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[110px]" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-5 py-2 text-sm font-semibold text-primary tracking-wide mb-6">
            EPICWARE PRODUCTS · SINGAPORE
          </div>
          <h1 className="font-display font-bold text-foreground mb-6 leading-[1.08]">
            Four Products. One Platform.
            <br />
            Built for Singapore SMBs.
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            EpicMap tracks your rank. EpicReview manages your reputation.
            EpicEngage keeps customers coming back. EpicSocial keeps you visible.
            All in one dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 group"
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
              className="rounded-full border-border text-foreground hover:bg-muted h-14 px-8 font-semibold text-base"
            >
              <Link href="/audit">Free GBP Audit</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {TRUST.map((t) => (
              <div
                key={t}
                className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/60 rounded-full px-4 py-2"
              >
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground/80">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening paragraph */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most local SEO tools give you a dashboard full of numbers and leave you to figure out what
            to do next. Epicware&apos;s four products don&apos;t just show you the problem — they fix it. Each
            module is built for a specific job, and they all work together inside one platform. No
            switching tabs. No agency middleman. No waiting on a monthly report.
          </p>
        </div>
      </section>

      {/* Product cards */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className={`relative rounded-3xl border border-border/60 bg-gradient-to-br ${product.accent} p-8 flex flex-col hover:shadow-elegant transition-shadow duration-300`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
                      {product.badge}
                    </span>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      {product.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">{product.descriptor}</p>
                  </div>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="bg-foreground hover:bg-foreground/90 text-background rounded-full font-semibold group self-start"
                >
                  <Link href={product.href} className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 section-gradient-1">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h2 className="font-display font-bold text-foreground mb-4">
            Not sure which product you need?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free demo — we&apos;ll show you all four live on your actual business profile
            and tell you which combination fits your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8 rounded-full font-semibold group"
            >
              <Link href="/book-demo#form" className="flex items-center gap-2">
                Book My Free Demo →
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border text-foreground hover:bg-muted h-14 px-8 font-semibold"
            >
              <Link href="/audit">Or start with a free audit</Link>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
