// Real Google Maps screenshot with privacy overlays on clinic name + reviewer identities.
// Overlay positions are % of image height/width — tweak if the source image changes.
// backdrop-filter:blur gives the "intentionally redacted" journalism look rather than a solid bar.

const OVERLAYS = [
  // "Standard Clinic & Surgery" subtitle under the header
  { top: "4.2%",  left: "12%",  width: "64%", height: "3.2%",  radius: "5px" },
  // Ryan Phua — avatar
  { top: "22.0%", left: "0.5%", width: "11%", height: "4.8%",  radius: "50%" },
  // Ryan Phua — name + "2 reviews"
  { top: "21.8%", left: "13%",  width: "38%", height: "5.0%",  radius: "6px" },
  // Denise Yoo — avatar
  { top: "50.0%", left: "0.5%", width: "11%", height: "4.8%",  radius: "50%" },
  // Denise Yoo — name + "3 reviews"
  { top: "49.8%", left: "13%",  width: "32%", height: "5.0%",  radius: "6px" },
  // Kelly Ho — avatar (has Local Guide badge)
  { top: "70.5%", left: "0.5%", width: "11%", height: "5.2%",  radius: "50%" },
  // Kelly Ho — name + "Local Guide · 20 reviews · 17 photos"
  { top: "70.3%", left: "13%",  width: "58%", height: "5.0%",  radius: "6px" },
];

export default function ReviewScreenshot() {
  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.40)] select-none ring-1 ring-white/5"
      aria-hidden="true"
    >
      {/* Screenshot */}
      <img
        src="/assets/google-reviews-real.jpg"
        alt=""
        className="w-full h-auto block"
        draggable={false}
      />

      {/* Privacy overlays */}
      {OVERLAYS.map((o, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: o.top,
            left: o.left,
            width: o.width,
            height: o.height,
            borderRadius: o.radius,
            backdropFilter: "blur(14px) brightness(0.5)",
            WebkitBackdropFilter: "blur(14px) brightness(0.5)",
            background: "rgba(10, 10, 14, 0.55)",
          }}
        />
      ))}

      {/* "Names blurred" label */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
        <svg className="w-3 h-3 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span className="text-[10px] text-white/70 font-medium leading-none">Names blurred</span>
      </div>
    </div>
  );
}
