import { PROOF, type ProofValue } from "@/lib/site/proof";
import TrackedCta from "./TrackedCta";
import ProofGridImage from "./ProofGridImage";

/** Renders nothing for an unverified stat — PROOF.* entries fail loudly rather than silently printing a null value. */
function Stat({ label, stat }: { label: string; stat: ProofValue }) {
  if (!stat.verified) return null;
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 text-center">
      <p className="font-display font-bold text-4xl text-foreground mb-2">{stat.value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export default function Proof() {
  return (
    <section className="py-16 lg:py-24 section-gradient-1">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-foreground text-center mb-6">
          The Engine Is New. The Hardest Part Is Already Proven.
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Ads are the fast half: anyone with a budget can switch them on. The slow, hard half is getting a
          business to the top of Google Maps and into AI answers. That&apos;s what most agencies can&apos;t
          deliver, and it&apos;s what we already do every month.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          <Stat label="brands served" stat={PROOF.brandsServed} />
          <Stat label="outlets managed" stat={PROOF.outletsManaged} />
          <Stat label="negative reviews removed" stat={PROOF.reviewsRemoved} />
        </div>

        <ProofGridImage />

        <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-3 leading-relaxed">
          Singapore businesses across aesthetics, F&amp;B and salons now rank #1 on Google Maps and get cited
          in AI search for their core services, through the same Maps and AI work that powers the Engine.
        </p>

        <p className="text-center text-sm text-muted-foreground mb-6">
          We keep our clients&apos; names private. Book a strategy call and we&apos;ll walk you through live
          results on screen.
        </p>

        <div className="text-center">
          <TrackedCta
            href="/book-demo?service=full-stack&country=singapore#form"
            ctaType="strategy_call"
            ctaLocation="proof"
            className="inline-flex items-center justify-center min-h-11 py-2.5 text-sm font-semibold text-primary hover:underline"
          >
            Book a Strategy Call →
          </TrackedCta>
        </div>
      </div>
    </section>
  );
}
