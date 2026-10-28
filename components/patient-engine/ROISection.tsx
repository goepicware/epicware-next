import ROICalculator from "./ROICalculator";
import ROIReportMockup from "./ROIReportMockup";

export default function ROISection() {
  return (
    <section id="roi-calculator" className="py-16 lg:py-24 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-display text-foreground mb-3">How You Make Your Money Back</h2>
          <p className="text-muted-foreground mb-4">Do the maths with your numbers, not ours.</p>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Forget our promises for a second. Put in what a new patient is worth to you and see how many it
            takes to cover the whole investment.
          </p>
        </div>

        <ROIReportMockup />

        <ROICalculator />
      </div>
    </section>
  );
}
