"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/meta-tracking";
import Header from "./Header";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";

// Routes that render without the global nav/footer
const STANDALONE_PREFIXES = ["/free-audit", "/audit-landing", "/remove-review", "/ai-visibility"];

export default function ClientLayoutWrapper({
  children,
  liveCountryServices,
}: {
  children: React.ReactNode;
  liveCountryServices: Record<string, string[]>;
}) {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView();
  }, [pathname]);

  const standalone = STANDALONE_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (standalone) {
    return <>{children}</>;
  }

  return (
    <>
      <Header liveCountryServices={liveCountryServices} />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
