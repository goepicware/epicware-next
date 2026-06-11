import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Epicware",
  alternates: { canonical: "https://www.epicware.ai/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> › Privacy Policy
        </nav>

        <h1 className="font-display font-bold text-foreground text-[clamp(2rem,5vw,3.75rem)] mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last Updated: Oct 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Account information (name, email, business details)</li>
              <li>Payment information (processed securely by third-party providers)</li>
              <li>Customer data you upload to our platform</li>
              <li>Communications with our support team</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new features and services</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
              <li>Service providers who assist in operating our platform</li>
              <li>Professional advisors and consultants</li>
              <li>Law enforcement when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your account and associated data at any time.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. Some features may not function properly if you disable cookies.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">Our services are not intended for children under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Changes to Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through our services. The latest version is always available at epicware.ai/privacy.</p>
          </section>
          <div className="border-t border-muted" />
          <section>
            <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us at{" "}
              <a href="mailto:support@epicware.ai" className="text-primary hover:underline">support@epicware.ai</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
