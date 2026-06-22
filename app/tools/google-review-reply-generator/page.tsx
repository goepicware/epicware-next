import type { Metadata } from "next";
import Link from "next/link";
import { Star, ShieldCheck, TrendingUp, Users, ArrowRight } from "lucide-react";
import ReviewReplyGenerator from "@/components/tools/ReviewReplyGenerator";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Free Google Review Reply Generator",
  description:
    "Generate professional replies to Google reviews instantly. Free tool for restaurants, salons, clinics, and local businesses.",
  alternates: { canonical: "https://www.epicware.ai/tools/google-review-reply-generator" },
  openGraph: {
    title: "Free Google Review Reply Generator | Epicware",
    description: "Generate professional replies to Google reviews instantly. Free tool for local businesses.",
    url: "https://www.epicware.ai/tools/google-review-reply-generator",
  },
};

const jsonLdSoftware = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Google Review Reply Generator",
  description: "Generate professional replies to Google reviews instantly. Free tool for restaurants, salons, clinics, and local businesses.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: { "@type": "Organization", name: "Epicware", url: "https://www.epicware.ai" },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Google Review Reply Generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Google Review Reply Generator is a free AI-powered tool that helps business owners create professional, thoughtful responses to customer reviews on Google. Simply paste the review, select your preferred tone, and get a ready-to-use reply in seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Is this tool free to use?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, this tool is completely free. There is no sign-up required and no hidden fees. You can generate as many review replies as you need." },
    },
    {
      "@type": "Question",
      name: "Who should use this tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This tool is designed for local business owners including restaurants, cafes, salons, spas, clinics, dental offices, retail stores, and service providers who receive Google reviews and want to respond professionally.",
      },
    },
  ],
};

const benefits = [
  { icon: ShieldCheck, title: "Build Trust", desc: "Responding shows you care about customer feedback and builds credibility with potential customers." },
  { icon: TrendingUp, title: "Improve Rankings", desc: "Google rewards businesses that actively engage with reviews by boosting their local search visibility." },
  { icon: Users, title: "Win New Customers", desc: "90% of consumers read reviews before visiting. Your responses influence their decision." },
  { icon: Star, title: "Recover Unhappy Customers", desc: "A thoughtful response to negative reviews can turn critics into loyal advocates." },
];

export default function GoogleReviewReplyGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 border border-border/60 text-sm font-semibold text-foreground">
              Free Tool
            </span>
          </div>
          <div className="text-center mb-10">
            <h1 className="font-display font-bold text-foreground mb-5 leading-tight">
              Google Review Reply Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Generate professional responses to Google reviews in seconds.
            </p>
          </div>
          <ReviewReplyGenerator />
        </div>
      </section>

      {/* About section */}
      <section className="section-gradient-2 py-14">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-6">About This Tool</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">What is the Google Review Reply Generator?</h3>
                <p>This is a free AI-powered tool that generates professional responses to Google reviews. It analyzes the customer's review and creates a thoughtful, appropriate reply that you can copy and post directly to Google.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Who is this tool for?</h3>
                <p>This tool is designed for local business owners including restaurants, cafes, salons, spas, clinics, dental offices, retail stores, and service providers who receive Google reviews and want to respond professionally.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">What problem does this solve?</h3>
                <p>Writing thoughtful review responses takes time. Many business owners either skip responding entirely or use generic replies that don't address the customer's specific feedback. This tool generates personalized, professional responses in seconds.</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Looking for more <Link href="/tools" className="text-primary hover:underline">free Google review tools</Link>? Check out our complete collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-8 text-center">
            Why Replying to Google Reviews Matters
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-card border border-border/50 p-8 lg:p-10 text-center">
            <p className="text-xl text-foreground font-medium mb-3">
              Want replies like this sent automatically for every new review?
            </p>
            <p className="text-muted-foreground mb-8">Epicware can do this for you.</p>
            <Link
              href="/products/epicreview"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-foreground text-background font-semibold text-lg hover:bg-foreground/90 transition-all duration-300 group"
            >
              See How Epicware Works
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Link href="/book-demo#form" className="hidden" aria-hidden>Book a demo</Link>
      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
