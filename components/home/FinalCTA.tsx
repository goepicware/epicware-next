import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a14] via-[#0d0a1a] to-[#0d0d0d]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-secondary/15 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-6 block">
          Ready to Grow?
        </span>
        <h2 className="font-display font-bold text-white mb-6 text-balance">
          Let&apos;s get your business to the top of Google Maps
        </h2>
        <p className="text-lg text-white/60 mb-10 leading-relaxed">
          Book a free strategy call or run your Google Business Profile audit in 60 seconds — no commitment required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 h-14 px-8 rounded-full font-semibold text-base group"
          >
            <Link href="/book-demo#form" className="flex items-center gap-2">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-accent text-accent hover:bg-accent/10 h-14 px-8 font-semibold text-base"
          >
            <Link href="/audit">Get Free GBP Audit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
