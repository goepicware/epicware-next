import { MapPin, Sparkles } from "lucide-react";
import { FICTIONAL_CLINIC_NAME } from "./fixtures";

type Variant = "ads" | "chat" | "maps" | "ai";

/**
 * Small UI-chrome visual for each HowItWorks part — pure HTML/CSS/SVG, no
 * raster images. Fictional clinic name only; no real figures or claims.
 */
export default function PartVisual({ variant }: { variant: Variant }) {
  if (variant === "ads") {
    return (
      <div className="rounded-xl border border-border/60 bg-background p-3" aria-hidden="true">
        <span className="inline-block text-[9px] font-semibold uppercase tracking-wide text-foreground/70 bg-muted px-1.5 py-0.5 rounded mb-2">
          Sponsored
        </span>
        <p className="text-xs font-semibold text-foreground leading-snug mb-1">
          {FICTIONAL_CLINIC_NAME} — Book a Consultation
        </p>
        <p className="text-[10px] text-muted-foreground leading-snug mb-2">
          Aesthetic treatments in Singapore. Enquire on WhatsApp today.
        </p>
        <span className="inline-flex items-center text-[10px] font-semibold text-white bg-primary rounded-full px-2.5 py-1">
          Book Now
        </span>
      </div>
    );
  }

  if (variant === "chat") {
    return (
      <div className="rounded-xl border border-border/60 bg-[#ECE5DD] p-3 space-y-1.5" aria-hidden="true">
        <div className="flex justify-end">
          <div className="max-w-[75%] bg-[#DCF8C6] rounded-xl rounded-tr-sm px-2.5 py-1.5 text-[10px] text-foreground leading-snug">
            Any slots this week?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[80%] bg-white rounded-xl rounded-tl-sm px-2.5 py-1.5 text-[10px] text-foreground leading-snug">
            Yes — Thu 3pm works. Hold it for you?
          </div>
        </div>
      </div>
    );
  }

  if (variant === "maps") {
    return (
      <div className="rounded-xl border border-border/60 bg-background p-3 dot-pattern" aria-hidden="true">
        <div className="flex items-center gap-1.5 mb-2">
          <MapPin className="w-3 h-3 text-primary" />
          <span className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
            Local ranking
          </span>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {[1, 2, 2, 1, 2, 2, 1, 2, 1, 2].map((rank, i) => (
            <span
              key={i}
              className={`flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-bold text-white ${
                rank === 1 ? "bg-emerald-600" : "bg-emerald-400"
              }`}
            >
              {rank}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // "ai"
  return (
    <div className="rounded-xl border border-border/60 bg-background p-3" aria-hidden="true">
      <div className="flex items-center gap-1.5 mb-2">
        <Sparkles className="w-3 h-3 text-secondary" />
        <span className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground">AI answer</span>
      </div>
      <p className="text-[10px] text-muted-foreground leading-snug mb-1.5">
        &ldquo;Best aesthetic clinic in Singapore for a consultation?&rdquo;
      </p>
      <p className="text-[10px] text-foreground leading-snug">
        One option patients mention is <span className="font-semibold">{FICTIONAL_CLINIC_NAME}</span>, which
        has...
      </p>
    </div>
  );
}
