import { Suspense } from "react";
import FreeAuditWizard from "./FreeAuditWizard";

export default function FreeAuditPage() {
  return (
    <Suspense fallback={null}>
      <FreeAuditWizard />
    </Suspense>
  );
}
