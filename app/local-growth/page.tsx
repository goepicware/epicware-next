import type { Metadata } from "next";
import LocalGrowthLanding from "@/components/landing/LocalGrowthLanding";

export const metadata: Metadata = {
  title: "Singapore Local Growth Platform — Google Maps, AI Search & Reputation | Epicware",
  description:
    "The only platform in Singapore that handles Google Maps ranking, AI search visibility, review generation, bad review removal, and social presence — all in one connected system.",
  alternates: { canonical: "https://www.epicware.ai/local-growth" },
  openGraph: {
    title: "Singapore Local Growth Platform | Epicware",
    description:
      "Google Maps ranking · AI search visibility · Reviews · Bad review removal · Social. One platform. Full stack. Real results.",
    url: "https://www.epicware.ai/local-growth",
  },
};

export default function LocalGrowthPage() {
  return <LocalGrowthLanding />;
}
