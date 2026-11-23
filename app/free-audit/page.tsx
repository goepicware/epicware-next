import { Suspense } from "react";
import FreeAuditWizard from "./FreeAuditWizard";
import AuditExplainer from "./AuditExplainer";

export default function FreeAuditPage() {
  return (
    <>
      <div className="sr-only">
        <h1>Free SEO, Google Business Profile and AI Search Visibility Audit</h1>
        <p>
          Get a free audit of your Google rankings, Google Business Profile, customer
          reviews and AI search visibility. See your biggest gaps and quickest wins —
          no account needed.
        </p>
      </div>
      <Suspense fallback={null}>
        <FreeAuditWizard />
      </Suspense>
      <AuditExplainer />
    </>
  );
}
