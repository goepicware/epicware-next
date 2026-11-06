import type { Metadata } from "next";
import Link from "next/link";
import BacklinkTool from "@/components/tools/BacklinkTool";
import StickyMobileCTA from "@/components/products/StickyMobileCTA";

export const metadata: Metadata = {
  title: { absolute: "Free Backlink Opportunity Finder | Epicware" },
  description:
    "Find link and citation opportunities your competitors have and you don't. A free backlink opportunity finder for local businesses.",
  alternates: { canonical: "https://www.epicware.ai/tools/backlink-opportunity-finder" },
  openGraph: {
      images: [{ url: "/assets/HeroBanner-og.jpg", width: 1448, height: 1086, alt: "Epicware" }],
    title: "Free Backlink Opportunity Finder | Epicware",
    description: "Find link and citation opportunities your competitors have and you don't. A free backlink opportunity finder for local businesses.",
    url: "https://www.epicware.ai/tools/backlink-opportunity-finder",
  },
};

export default function BacklinkOpportunityFinderPage() {
  return (
    <>
      <h1 className="sr-only">Free Backlink Opportunity Finder</h1>
      <BacklinkTool />

      <section className="py-12 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-display font-bold text-foreground text-2xl mb-6 text-center">
            Why Backlinks Still Matter for Local SEO
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-10">
            <p>
              A backlink is a link from another website to yours. Google treats each one as a vote of confidence — the more relevant, authoritative sites that link to your business, the more Google trusts your site enough to rank it higher, both in regular search results and in the local Map Pack.
            </p>
            <p>
              For local businesses specifically, the highest-value backlinks usually aren't from generic directories — they're from local news coverage, industry associations, chamber of commerce listings, supplier or partner pages, and niche directories relevant to your industry (e.g. a hawker-centre listing for an F&B business, or a dental-association directory for a clinic).
            </p>
            <p>
              This tool scans your competitors' backlink profiles and surfaces the sites linking to them that aren't yet linking to you — so instead of guessing where to request a link, you get a specific, prioritised list of realistic opportunities.
            </p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Want Epicware to build backlinks for your Singapore business?{" "}
              <Link href="/book-demo#form" className="text-primary font-medium hover:underline">
                Book a strategy call →
              </Link>
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Link building is part of our{" "}
              <Link href="/locations/singapore/seo" className="text-primary font-medium hover:underline">
                SEO services
              </Link>
              ; this free tool shows where to start.
            </p>
            <p className="text-xs text-muted-foreground">
              Back to <Link href="/tools" className="text-primary hover:underline">all free tools</Link>
            </p>
          </div>
        </div>
      </section>

      <StickyMobileCTA />
      <div className="h-20 lg:hidden" />
    </>
  );
}
