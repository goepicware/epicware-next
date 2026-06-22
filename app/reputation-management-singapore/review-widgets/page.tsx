import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "Review Widgets Singapore — Embed Google Reviews",
  description:
    "Display your best Google reviews on your website automatically. Live, auto-updating review widgets for Singapore SMBs. No manual updates.",
  alternates: { canonical: "https://www.epicware.ai/reputation-management-singapore/review-widgets" },
  openGraph: {
    title: "Review Widgets Singapore | Epicware",
    description: "Display your best Google reviews on your website automatically. Live, auto-updating.",
    url: "https://www.epicware.ai/reputation-management-singapore/review-widgets",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Review Widgets Singapore",
  serviceType: "Review Widgets",
  description: "Live, auto-updating Google review widgets for Singapore business websites.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/reputation-management-singapore/review-widgets",
};

export default function ReviewWidgetsPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="REVIEW WIDGETS · SINGAPORE"
      h1="Review Widgets Singapore — Display Your Best Google Reviews Automatically"
      subtitle="Your Google reviews are your most credible marketing content. Review Widgets pull them onto your website automatically — live, always current, no manual updates needed."
      trustSignals={["Live Auto-Updating", "No Manual Updates", "Singapore-Built", "Wall of Love Display"]}
      imageSrc="/assets/review-management-illustration.png"
      openingParagraph="Every page of your website where a potential customer considers buying or booking is an opportunity to show social proof. If your website doesn't display your Google reviews, you're missing a conversion opportunity that costs you nothing."
      whenTitle="When You Need Review Widgets"
      whenContent={
        <div className="space-y-4">
          <p>
            Visitors who see real customer reviews with names and ratings on the page they are about to act on convert
            at higher rates than visitors who don&apos;t. For multi-outlet businesses, review widgets can show
            location-specific reviews on each location page — so a Jurong customer sees Jurong reviews, not a mix
            from all outlets.
          </p>
          <p>
            If your website currently has no reviews displayed, every visitor who would have been persuaded by social
            proof is converting at a lower rate than they could be. The fix is a widget that takes minutes to set up
            and then runs automatically.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Review Widgets"
      howContent={
        <div className="space-y-4">
          <p>
            The Wall of Love widget connects to your Google Business Profile via API and automatically pulls in your
            latest reviews. You configure the display — carousel, grid, or list; star rating filter; number of
            reviews; brand colours. The widget updates in real time as new reviews arrive.
          </p>
          <p>
            For multi-outlet operators, separate widgets per location pull from each individual GBP profile. Your
            website always shows your current rating without anyone logging in to update it.
          </p>
        </div>
      }
      pricingContent={
        <p>
          Review Widgets are included in Epicware&apos;s Foundation plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/reputation-management-singapore"
      parentLabel="Reputation Management Singapore"
      parentSentence={
        <>
          Review Widgets are part of Epicware&apos;s{" "}
          <Link href="/reputation-management-singapore" className="text-primary font-medium hover:underline">
            Reputation Management Singapore
          </Link>{" "}
          suite.
        </>
      }
    />
  );
}
