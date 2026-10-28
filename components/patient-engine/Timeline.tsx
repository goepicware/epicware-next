const PHASES = [
  {
    name: "Switch On",
    weeks: "Weeks 1–2",
    body:
      "Ads go live. The AI WhatsApp Assistant starts answering every enquiry in under 60 seconds. We go after policy-violating reviews dragging your rating down. Your day-1 baseline is recorded so every result after this is measured against something real.",
    whatYouSee: "Enquiries arriving, and none left unanswered.",
  },
  {
    name: "Get Found",
    weeks: "Weeks 2–8",
    body:
      "Your Google Business Profile is rebuilt from the ground up. Maps rankings start climbing for the treatments that make you money. Your clinic begins appearing in AI search answers.",
    whatYouSee: "Calls and direction requests from Google Maps, plus your first AI citations.",
  },
  {
    name: "Own It",
    weeks: "Weeks 8–12 and beyond",
    body:
      "Organic enquiries grow alongside paid ones. Your cost per enquiry starts dropping. On day 90 we re-run your missed-revenue audit so you can compare it against day 1.",
    whatYouSee: "More enquiries for the same spend, and a growing share you don't pay per click for.",
  },
];

export default function Timeline() {
  return (
    <section className="py-16 lg:py-24 section-gradient-1">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-foreground text-center mb-12">
          Exactly What You&apos;ll See, Phase by Phase.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PHASES.map((phase, i) => (
            <div key={phase.name} className="flex gap-4 lg:flex-col lg:gap-0">
              {/* Mobile: vertical line + dot. Desktop: top badge row */}
              <div className="flex flex-col items-center lg:hidden">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                {i < PHASES.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>

              <div className="card-feature flex-1 lg:mb-0">
                <div className="card-feature-inner p-6 h-full flex flex-col gap-4">
                  <div className="hidden lg:flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-wide text-primary bg-primary/8 border border-primary/15 rounded-full px-3 py-1">
                      {phase.weeks}
                    </span>
                  </div>
                  <span className="inline-flex lg:hidden items-center text-xs font-bold uppercase tracking-wide text-primary bg-primary/8 border border-primary/15 rounded-full px-3 py-1 self-start">
                    {phase.weeks}
                  </span>

                  <h3 className="font-display font-semibold text-foreground text-lg leading-snug">
                    {phase.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.body}</p>

                  <div className="mt-auto pt-4 border-t border-border/40">
                    <p className="text-xs font-semibold text-foreground">
                      <span className="text-primary">What you see: </span>
                      {phase.whatYouSee}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
