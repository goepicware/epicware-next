import { ArrowRight, ArrowDown } from "lucide-react";

const PARTS = [
  {
    name: "Paid Ads (Meta + Google).",
    body: "Fast enquiries from week two, so you're not waiting months to see a return.",
  },
  {
    name: "AI WhatsApp Assistant.",
    body: "Every enquiry is answered in under 60 seconds, day or night, so the leads you pay for don't go cold.",
  },
  {
    name: "Google Maps + Local SEO.",
    body:
      "Your profile is rebuilt so patients searching nearby find you first, and those enquiries cost you nothing per click.",
  },
  {
    name: "AI Search Citations.",
    body:
      "When patients ask ChatGPT, Gemini or Google's AI for the best clinic for a treatment in Singapore, your clinic is in the answer.",
  },
];

function PartCard({ index, name, body }: { index: number; name: string; body: string }) {
  return (
    <div className="card-feature flex-1">
      <div className="card-feature-inner p-5 h-full flex flex-col gap-3">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
          {index}
        </div>
        <h3 className="font-display font-semibold text-foreground text-base leading-snug">{name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-foreground text-center mb-12">
          One Engine. Four Parts. Each One Feeds the Next.
        </h2>

        {/* Desktop: loop diagram */}
        <div className="hidden lg:block relative pb-16">
          <div className="flex items-stretch gap-3">
            {PARTS.map((part, i) => (
              <div key={part.name} className="flex items-stretch gap-3 flex-1">
                <PartCard index={i + 1} name={part.name} body={part.body} />
                {i < PARTS.length - 1 && (
                  <div className="flex items-center shrink-0">
                    <ArrowRight className="w-6 h-6 text-primary/50" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Loop-back arrow from part 4 back to part 1 */}
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="absolute left-0 right-0 bottom-0 w-full h-16"
            aria-hidden="true"
          >
            <defs>
              <marker id="loopArrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="var(--secondary)" />
              </marker>
            </defs>
            <path
              d="M 960 8 C 960 70, 520 70, 500 70 C 480 70, 40 70, 40 8"
              fill="none"
              stroke="var(--secondary)"
              strokeWidth="2"
              strokeDasharray="6 5"
              markerEnd="url(#loopArrowHead)"
            />
          </svg>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 text-xs font-semibold text-foreground bg-background px-3 py-1 rounded-full border border-secondary/20">
            Cost per enquiry drops
          </span>
        </div>

        {/* Mobile: vertical stepped flow */}
        <div className="lg:hidden flex flex-col items-center gap-3">
          {PARTS.map((part, i) => (
            <div key={part.name} className="w-full flex flex-col items-center">
              <div className="card-feature w-full">
                <div className="card-feature-inner p-5 flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base leading-snug">{part.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{part.body}</p>
                </div>
              </div>
              {i < PARTS.length - 1 && <ArrowDown className="w-5 h-5 text-primary/50 my-2" aria-hidden="true" />}
            </div>
          ))}
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-foreground bg-secondary/8 px-3 py-1.5 rounded-full border border-secondary/20">
            <ArrowDown className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
            Cost per enquiry drops
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto leading-relaxed">
          The result: ads pay the bills while Maps and AI build an asset you own. As free enquiries grow, every
          dollar of ad spend works harder.
        </p>
      </div>
    </section>
  );
}
