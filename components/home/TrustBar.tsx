const INDUSTRIES = [
  "🍜 Restaurants",
  "✂️ Nail & Hair Salons",
  "🏥 Healthcare Clinics",
  "📚 Tuition Centres",
  "🧘 Wellness Centres",
  "🛒 Retail Shops",
  "🔧 Home Services",
  "🦷 Dental Clinics",
];

export default function TrustBar() {
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="py-10 bg-background border-y border-border/40 overflow-hidden">
      <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
        Trusted by 200+ local businesses in Singapore
      </p>
      <div className="relative">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {items.map((item, i) => (
            <span
              key={i}
              className="text-base font-medium text-muted-foreground/70 shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
