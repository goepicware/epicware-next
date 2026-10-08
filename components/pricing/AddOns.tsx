const ADD_ONS = [
  {
    name: "Bad Review Removal",
    price: "$200 / review",
    note: "Charged upfront. Refunded in full if not removed within 3 months.",
    highlight: true,
  },
  {
    name: "10-Page Website Build",
    price: "$3,000 one-time",
    note: "A professionally designed 10-page website, built for local SEO and conversions.",
    highlight: false,
  },
  {
    name: "WordPress Maintenance",
    price: "$500 / month",
    note: "Ongoing updates, security hardening, backups, and performance monitoring for your WordPress site.",
    highlight: false,
  },
];

export default function AddOns() {
  return (
    <div className="rounded-3xl border border-border/60 bg-muted/30 p-8">
      <h3 className="font-display font-semibold text-foreground text-lg mb-5">
        Add-Ons
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {ADD_ONS.map((a) => (
          <div
            key={a.name}
            className={`rounded-2xl p-5 border ${a.highlight ? "border-primary/30 bg-primary/5" : "border-border/60 bg-card"}`}
          >
            <p className="font-semibold text-foreground text-sm mb-1">
              {a.name}
            </p>
            <p
              className={`font-bold text-lg mb-2 ${a.highlight ? "text-primary" : "text-foreground"}`}
            >
              {a.price}
            </p>
            <p className="text-xs text-muted-foreground leading-snug">
              {a.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
