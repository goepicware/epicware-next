// Replace CLIENTS with actual logo image files once collected.
// Current: styled text-logos from real Epicware clients.
const CLIENTS = [
  { name: "Sushi Tei", style: "font-black tracking-tight" },
  { name: "Ajmir Biryani", style: "font-bold italic" },
  { name: "BeeCroft Animal Hospital", style: "font-semibold tracking-tight text-xs uppercase" },
  { name: "Epikebab", style: "font-black tracking-widest uppercase" },
  { name: "Indigo Education", style: "font-bold" },
  { name: "Mirage Aesthetics", style: "font-black italic" },
];

export default function TrustBar() {
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-10 bg-background border-y border-border/40 overflow-hidden">
      <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-7">
        Trusted by 200+ local businesses in Singapore
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-14 whitespace-nowrap items-center"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {items.map((client, i) => (
            <span
              key={i}
              className={`text-sm text-foreground/40 hover:text-foreground/70 transition-colors duration-300 shrink-0 ${client.style}`}
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
