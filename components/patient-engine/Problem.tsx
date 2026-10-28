const TRAPS = [
  {
    title: "The SEO-only trap.",
    body:
      "You pay every month. Rankings “improve” in a report you don't read. Months pass and the phone sounds the same. So you cancel, usually right before it would have started paying off.",
  },
  {
    title: "The ads-only treadmill.",
    body:
      "Leads come in fast, but you pay for every single one, forever. The day you pause the budget, the enquiries stop. You're renting patients, not building anything.",
  },
  {
    title: "The leak nobody talks about.",
    body:
      "A patient messages at 10pm asking about a treatment. Nobody replies until the next morning. By then she's booked with the clinic that answered first.",
  },
];

export default function Problem() {
  return (
    <section className="py-16 lg:py-24 section-gradient-1">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-foreground text-center mb-4">
          You&apos;ve Already Tried Half of This. That&apos;s Why It Didn&apos;t Work.
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Most clinics have been burned in one of two ways.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {TRAPS.map((trap) => (
            <div key={trap.title} className="card-feature">
              <div className="card-feature-inner p-6 h-full flex flex-col">
                <h3 className="font-display font-semibold text-foreground text-lg leading-snug mb-3">
                  {trap.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{trap.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-display font-bold text-foreground text-xl lg:text-2xl max-w-2xl mx-auto leading-snug">
          The problem isn&apos;t the channel. It&apos;s running the channels separately, with nobody answering
          the door.
        </p>
      </div>
    </section>
  );
}
