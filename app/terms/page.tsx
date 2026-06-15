import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Epicware",
  description: "Epicware's Terms of Service — the terms governing use of the Epicware Local SEO and Reputation Management platform.",
  alternates: { canonical: "https://www.epicware.ai/terms" },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> › Terms &amp; Conditions
        </nav>

        <h1 className="font-display font-bold text-foreground text-[clamp(2rem,5vw,3.75rem)] mb-4">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground mb-12">Last Updated: Oct 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">By accessing or using Epicware's services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
            <p className="text-muted-foreground leading-relaxed">Epicware provides AI-powered local growth services including but not limited to: EpicReview (review management), EpicMap (local SEO), EpicEngage (customer engagement), and EpicSocial (social scheduling). All services are provided "as is" and subject to availability.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">Payment is due according to the pricing plan selected. All fees are non-refundable unless otherwise stated. We reserve the right to change pricing with 30 days notice. Failure to pay may result in service suspension or termination.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">4.1 No Refunds</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">All fees paid under this Agreement are non-refundable and non-cancellable. Subscriber acknowledges and agrees that the Company will not issue, and Subscriber is not entitled to receive, any refunds, reimbursements, or credits of any kind, including but not limited to partial, prorated, discounted, or promotional refunds, regardless of whether the Service is used, unused, or terminated early by Subscriber.</p>
            <p className="text-muted-foreground leading-relaxed">This no-refund policy applies to all subscription plans, credits, and any add-on or ancillary services, including but not limited to VIP Services, Done-For-You services, Warmup Services, and any other additional features or offerings.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">All content, features, and functionality of Epicware services are owned by Epicware Pte Ltd and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute our content without written permission.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">6. User Content</h2>
            <p className="text-muted-foreground leading-relaxed">You retain ownership of any content you upload to our services. By uploading content, you grant Epicware a worldwide, non-exclusive license to use, store, and process your content to provide our services. You are responsible for ensuring you have rights to all content you upload.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Prohibited Uses</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You agree not to use Epicware services to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or viruses</li>
              <li>Harass, abuse, or harm others</li>
              <li>Collect user data without consent</li>
              <li>Impersonate others or misrepresent affiliations</li>
            </ul>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Service Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice. We are not liable for any modification, suspension, or discontinuation of services.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">Epicware shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">You agree to indemnify and hold Epicware harmless from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">Either party may terminate this agreement at any time with written notice. Upon termination, your right to use our services ceases immediately. Provisions that should survive termination (including payment obligations and limitation of liability) shall remain in effect.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">These terms shall be governed by the laws of Singapore. Any disputes shall be resolved in the courts of Singapore.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms and Conditions, please contact us at{" "}
              <a href="mailto:support@epicware.ai" className="text-primary hover:underline">support@epicware.ai</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
