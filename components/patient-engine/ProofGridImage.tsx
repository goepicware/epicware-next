import Image from "next/image";

/**
 * Real EpicMap ranking-grid screenshot (public/assets/EpicMapImageforweb.png,
 * already used elsewhere on the site — e.g. app/products/epicmap/page.tsx).
 * The top band (the search-term/location filter row and the "Scan Centre"
 * address block) is covered with a blurred panel so no client name or
 * location is legible; the ranking grid and stats below it, which is the
 * actual proof, stay sharp. Coordinates are percentages of the image's
 * native 1448×1086 box, measured directly against the source file with a
 * pixel-grid overlay.
 *
 * The container uses a fixed aspect-[1448/1086] rather than next/image's
 * usual w-full/h-auto pairing: a percentage `height` on an absolutely
 * positioned child only resolves against a containing block with a
 * definite (non-auto) height, and h-auto makes the wrapper's height
 * content-driven — the redaction box lands in the wrong place without an
 * explicit ratio here, even though its left/top/width look fine in
 * isolation.
 */
export default function ProofGridImage() {
  return (
    <figure className="max-w-xl mx-auto mb-10">
      <div className="relative aspect-[1448/1086] rounded-2xl overflow-hidden border border-border/60 shadow-card">
        <Image
          src="/assets/EpicMapImageforweb.png"
          alt="EpicMap Google Maps ranking grid showing rank numbers across a scan area"
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          loading="lazy"
          className="object-cover"
        />
        {/* Redacted band — filter bar + "Scan Centre" address, blurred so no client name or location is legible */}
        <div
          className="absolute rounded-lg"
          style={{
            left: "24%",
            top: "14%",
            width: "63%",
            height: "15%",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            background: "rgba(255,255,255,0.4)",
          }}
          aria-hidden="true"
        />
      </div>
      <figcaption className="text-center text-xs text-muted-foreground mt-3">
        Real ranking grid, client details hidden.
      </figcaption>
    </figure>
  );
}
