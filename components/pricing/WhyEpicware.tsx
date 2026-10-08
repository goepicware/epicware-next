import AgencyTaxReceipt from "./why/AgencyTaxReceipt";
import SplitTimeline from "./why/SplitTimeline";
import FourNumbers from "./why/FourNumbers";
import ValueStack from "./why/ValueStack";
import GuaranteeSeal from "./why/GuaranteeSeal";
import VisualProof from "./why/VisualProof";
import AuditCTA from "./why/AuditCTA";
import StickyMiniCTA from "./why/StickyMiniCTA";

export default function WhyEpicware() {
  return (
    <section id="why-epicware">
      <AgencyTaxReceipt />
      <SplitTimeline />
      <FourNumbers />
      <ValueStack />
      <GuaranteeSeal />
      <VisualProof />
      <AuditCTA />
      <StickyMiniCTA />
    </section>
  );
}
