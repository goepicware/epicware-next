import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, MessageSquare, LinkIcon } from "lucide-react";
import FinalCTA from "@/components/home/FinalCTA";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Free Local SEO Tools for Singapore SMBs",
  description:
    "Free, practical tools to help you get more Google reviews, visibility, and repeat customers. No signup required.",
  alternates: { canonical: "https://www.epicware.ai/tools" },
  openGraph: {
    title: "Free Local SEO Tools for Singapore SMBs | Epicware",
    description: "Free tools for restaurants, salons, clinics and spas to improve Google reviews, online visibility, and customer engagement.",
    url: "https://www.epicware.ai/tools",
  },
};

const tools = [
  {
    href: "/tools/google-review-reply-generator",
    icon: Star,
    name: "Google Review Reply Generator",
    desc: "Generate professional replies to Google reviews instantly. Perfect for busy business owners who want to respond quickly and professionally.",
    color: "from-secondary/10 to-accent/10",
  },
  {
    href: "/tools/google-review-request-generator",
    icon: MessageSquare,
    name: "Google Review Request Message Generator",
    desc: "Create effective WhatsApp, SMS, and email messages to ask customers for Google reviews without sounding awkward.",
    color: "from-primary/10 to-secondary/10",
  },
  {
    href: "/tools/backlink-opportunity-finder",
    icon: LinkIcon,
    name: "Backlink Opportunity Finder",
    desc: "AI-powered backlink dashboard with pre-written outreach emails. Find high-value backlink opportunities and track your link building campaign.",
    color: "from-accent/10 to-primary/10",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Local SEO Tools for Singapore SMBs | Epicware",
  description: "Free tools for restaurants, salons, clinics and spas to improve Google reviews, online visibility, and customer engagement.",
  provider: {
    "@type": "Organization",
    name: "Epicware",
    url: "https://www.epicware.ai",
  },
};

export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient pt-28 pb-14">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide mb-5">
            100% FREE · NO SIGNUP
          </div>
          <h1 className="font-display font-bold text-foreground mb-5 leading-tight">
            Free Tools for Local Businesses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Free, practical tools to help you get more reviews, visibility, and repeat customers.
          </p>
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.href}
                className="group relative flex flex-col p-8 rounded-3xl bg-card border border-border/50 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <tool.icon className="w-8 h-8 text-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-3">{tool.name}</h2>
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed">{tool.desc}</p>
                </div>
                <Link
                  href={tool.href}
                  className="inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 group/btn"
                >
                  Use Tool
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="section-gradient-2 py-14">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-6">About These Free Google Review Tools</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">What are these tools?</h3>
                <p>These are free online tools that help local businesses manage their Google reviews more effectively. The <Link href="/tools/google-review-reply-generator" className="text-primary hover:underline">review reply generator</Link> creates professional responses to customer reviews. The <Link href="/tools/google-review-request-generator" className="text-primary hover:underline">review request generator</Link> creates messages to ask customers for reviews.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Who are these tools for?</h3>
                <p>These tools are designed for restaurants, cafes, salons, spas, clinics, retail stores, and other local service businesses that want to improve their online reputation without spending money on expensive software.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">What problem do these tools solve?</h3>
                <p>Many business owners struggle to find the right words when responding to reviews or asking for feedback. These tools generate professional, ready-to-use text in seconds, saving time and ensuring consistent, high-quality communication with customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
