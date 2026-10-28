import { MapPin, MessageCircle } from "lucide-react";
import { FICTIONAL_CLINIC_NAME } from "./fixtures";

/**
 * Hero product visual — built entirely in HTML/CSS/SVG (no raster image,
 * so no next/image is needed here; the Proof section is the one place
 * that uses a real screenshot). A phone mockup of the AI WhatsApp
 * Assistant answering a booking question, layered over a small ranking
 * grid card. Fictional clinic name throughout, no treatment outcomes or
 * medical claims — the chat is only about booking logistics.
 */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm select-none" aria-hidden="true">
      {/* Ranking grid card, layered behind the phone */}
      <div className="absolute -right-4 -top-6 w-48 rotate-6 rounded-2xl border border-border/60 bg-card shadow-card-hover p-3 dot-pattern">
        <div className="flex items-center gap-1.5 mb-2">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
            Maps Ranking
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 2].map((rank, i) => (
            <span
              key={i}
              className={`flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-bold text-white ${
                rank === 1 ? "bg-emerald-600" : "bg-emerald-400"
              }`}
            >
              {rank}
            </span>
          ))}
        </div>
      </div>

      {/* Phone mockup */}
      <div className="relative rounded-[2.25rem] border-[6px] border-foreground bg-foreground shadow-dramatic overflow-hidden">
        <div className="rounded-[1.75rem] bg-background overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center gap-2.5 px-4 py-3 bg-[#1B1520] text-white">
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4.5 h-4.5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold truncate">{FICTIONAL_CLINIC_NAME}</p>
              <p className="text-[10px] text-white/60 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                AI WhatsApp Assistant · online
              </p>
            </div>
          </div>

          {/* Chat body */}
          <div className="px-3 py-4 space-y-3 bg-[#ECE5DD] min-h-[220px]">
            <div className="flex justify-end">
              <div className="max-w-[80%] bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3 py-2 text-[11px] text-foreground leading-snug shadow-sm">
                Hi! Do you have any slots this week for a consultation?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[85%] bg-white rounded-2xl rounded-tl-sm px-3 py-2 text-[11px] text-foreground leading-snug shadow-sm">
                Hi! Yes — Thursday 3pm or Friday 11am are both open. Want me to hold one for you?
                <span className="block text-[9px] text-muted-foreground mt-1">Replied in 4s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-[11px] text-muted-foreground mt-3">Illustrative example</p>
    </div>
  );
}
