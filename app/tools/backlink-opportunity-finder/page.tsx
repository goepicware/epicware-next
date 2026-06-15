import type { Metadata } from "next";
import Link from "next/link";
import BacklinkTool from "@/components/tools/BacklinkTool";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Free Backlink Opportunity Finder — SaaS & Local | Epicware",
  description:
    "AI-powered backlink finder. Discover listicles and roundups where your brand should be mentioned, with pre-written outreach emails included.",
  alternates: { canonical: "https://www.epicware.ai/tools/backlink-opportunity-finder" },
  openGraph: {
    title: "Free Backlink Opportunity Finder for SaaS & Local Businesses | Epicware",
    description: "Find listicles mentioning your competitors and get pre-written outreach copy — free.",
    url: "https://www.epicware.ai/tools/backlink-opportunity-finder",
  },
};

export default function BacklinkOpportunityFinderPage() {
  return (
    <>
      <h1 className="sr-only">Free Backlink Opportunity Finder</h1>
      <BacklinkTool />

      <section className="py-12 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Want Epicware to build backlinks for your Singapore business?{" "}
            <Link href="/book-demo#form" className="text-primary font-medium hover:underline">
              Book a strategy call →
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">
            Back to <Link href="/tools" className="text-primary hover:underline">all free tools</Link>
          </p>
        </div>
      </section>

      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
