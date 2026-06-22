import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Local SEO for Singapore SMBs — Solutions by Industry",
  description:
    "Epicware's Local SEO and Reputation Management platform serves F&B, healthcare, beauty, tuition, dental, auto, retail, and wellness businesses across Singapore.",
  alternates: {
    canonical: "https://www.epicware.ai/industries",
  },
  openGraph: {
    title: "Local SEO for Singapore SMBs — Solutions by Industry | Epicware",
    description:
      "Epicware's Local SEO and Reputation Management platform serves F&B, healthcare, beauty, tuition, dental, auto, retail, physiotherapy, and wellness businesses across Singapore.",
    url: "https://www.epicware.ai/industries",
  },
};

const INDUSTRIES = [
  {
    label: "F&B Restaurants",
    href: "/industries/restaurants",
    pain: "In Singapore's F&B market, two positions on Google Maps separates a full restaurant from an empty one.",
    icon: "🍜",
  },
  {
    label: "Medical Clinics",
    href: "/industries/healthcare-clinics",
    pain: "One fake bad review from a competitor can cost a clinic dozens of new patients each month.",
    icon: "🏥",
  },
  {
    label: "Hair & Beauty Salons",
    href: "/industries/nail-hair-salons",
    pain: "Customers search for specific services and stylists — without visibility, your booking calendar stays empty.",
    icon: "✂️",
  },
  {
    label: "Tuition Centres",
    href: "/industries/tuition-centres",
    pain: "Singapore parents read every review and compare at least 3 centres before calling for a trial class.",
    icon: "📚",
  },
  {
    label: "Wellness Centres & Spas",
    href: "/industries/wellness-centres",
    pain: "A single subjective bad review can move a wellness centre's average rating below the trust threshold.",
    icon: "🧘",
  },
  {
    label: "Dental Clinics",
    href: "/industries/dental-clinics",
    pain: "Patients search by procedure — without the right GBP categories, your clinic misses high-intent searches.",
    icon: "🦷",
  },
  {
    label: "Car Workshops",
    href: "/industries/car-workshops",
    pain: "Auto workshops are disproportionately targeted by fake competitor reviews and false claims.",
    icon: "🔧",
  },
  {
    label: "Physiotherapy Clinics",
    href: "/industries/physiotherapy",
    pain: "Physio patients search by condition — condition-specific GBP listings determine who gets the appointment.",
    icon: "🏃",
  },
  {
    label: "Retail Stores",
    href: "/industries/retail-stores",
    pain: "Shoppers check Google Maps before visiting — wrong hours or no photos mean missed walk-in traffic.",
    icon: "🛍️",
  },
];

export default function IndustriesHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center hero-gradient overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[110px]" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-5 py-2 text-sm font-semibold text-primary tracking-wide mb-6">
            EPICWARE · INDUSTRY SOLUTIONS
          </span>
          <h1 className="font-display font-bold text-foreground mb-6 leading-[1.08]">
            Local SEO &amp; Reputation Management for Every Singapore Industry
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            The same platform. ICP-specific results. Choose your industry to see
            exactly how Epicware works for your business type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8 rounded-full font-semibold text-base group"
            >
              <Link href="/book-demo#form" className="flex items-center gap-2">
                Book a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-transparent border border-foreground/30 text-foreground hover:bg-muted h-14 px-8 font-semibold text-base"
            >
              <Link href="/audit">Free GBP Audit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry cards */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="rounded-2xl border border-border/60 bg-card p-7 hover:shadow-card transition-all duration-300 flex flex-col gap-4 group hover:-translate-y-1"
              >
                <div className="text-3xl">{ind.icon}</div>
                <h2 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {ind.label}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {ind.pain}
                </p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  See How It Works <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
