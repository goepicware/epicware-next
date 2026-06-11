import type { Metadata } from "next";
import Link from "next/link";
import ServiceChildPage from "@/components/services/ServiceChildPage";

export const metadata: Metadata = {
  title: "EpicEngage Email Marketing Singapore — Customer Retention Automation | Epicware",
  description:
    "Automated email campaigns triggered by customer behaviour for Singapore SMBs. Post-visit requests, win-back offers, birthday greetings — all on autopilot.",
  alternates: { canonical: "https://www.epicware.ai/growth-tools/epicengage-email-marketing" },
  openGraph: {
    title: "EpicEngage Email Marketing Singapore | Epicware",
    description: "Automated email campaigns triggered by customer behaviour for Singapore SMBs.",
    url: "https://www.epicware.ai/growth-tools/epicengage-email-marketing",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EpicEngage Email Marketing Singapore",
  serviceType: "Email Marketing",
  description: "Behaviour-triggered email marketing automation for Singapore SMBs.",
  provider: { "@type": "Organization", name: "Epicware Pte. Ltd.", url: "https://epicware.ai" },
  areaServed: { "@type": "Country", name: "Singapore" },
  url: "https://epicware.ai/growth-tools/epicengage-email-marketing",
};

export default function EpicEngageEmailMarketingPage() {
  return (
    <ServiceChildPage
      schema={schema}
      badge="EPICENGAGE · GROWTH TOOLS"
      h1="EpicEngage Email Marketing Singapore — Keep Customers Coming Back Automatically"
      subtitle="Getting a new customer costs five times more than keeping an existing one. EpicEngage runs automated email campaigns for Singapore SMBs — triggered by customer behaviour, requiring nothing from you after setup."
      trustSignals={["Behaviour-Triggered Campaigns", "30-40% Open Rates", "Singapore-Built", "No Agency Retainer"]}
      imageSrc="/assets/how-it-works-campaigns.png"
      openingParagraph="Most Singapore SMBs focus entirely on acquisition — getting new customers through the door. But acquiring a new customer costs five times more than retaining an existing one. Email marketing is the most cost-effective retention channel when done right — personal, timely, and triggered by actual behaviour."
      whenTitle="When You Need Email Marketing"
      whenContent={
        <div className="space-y-4">
          <p>
            If customers visit once and don&apos;t return, you are running a business that continuously pays to
            acquire new customers but retains almost none of them. In Singapore&apos;s F&amp;B, wellness, and service
            sectors, repeat customers generate 3–5x more revenue per acquisition cost than new ones.
          </p>
          <p>
            Email marketing is the most cost-effective retention channel when done right — personal, timely, and
            triggered by actual behaviour rather than sent to a cold list on the first of every month.
          </p>
        </div>
      }
      howTitle="How Epicware Handles Email Marketing"
      howContent={
        <div className="space-y-4">
          <p>
            EpicEngage connects to your customer database and triggers campaigns based on behaviour. A post-visit
            email asking for a review, 30 minutes after the customer leaves. A win-back offer after 60 days of no
            activity. A birthday greeting on the right day. A re-engagement sequence for customers who have not
            opened your emails in 90 days.
          </p>
          <p>
            Each sequence runs automatically once configured. Campaign analytics show open rates, click rates, and
            which campaigns are driving return visits. Singapore businesses running EpicEngage typically see 30–40%
            open rates on warm lists. See also the{" "}
            <Link href="/products/epicengage" className="text-primary font-medium hover:underline">EpicEngage product page</Link>.
          </p>
        </div>
      }
      pricingContent={
        <p>
          EpicEngage is available on Epicware&apos;s Growth plan and above. See full plan details at{" "}
          <Link href="/pricing" className="text-primary font-medium hover:underline">/pricing</Link>.
          No setup fees on Foundation plan. Cancel anytime.
        </p>
      }
      parentHref="/growth-tools"
      parentLabel="Growth Tools"
      parentSentence={
        <>
          EpicEngage Email Marketing is part of Epicware&apos;s{" "}
          <Link href="/growth-tools" className="text-primary font-medium hover:underline">
            Growth Tools
          </Link>{" "}
          service category. See also the{" "}
          <Link href="/products/epicengage" className="text-primary font-medium hover:underline">EpicEngage</Link>{" "}
          product page.
        </>
      }
    />
  );
}
