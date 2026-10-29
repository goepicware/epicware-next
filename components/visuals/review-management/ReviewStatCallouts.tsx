import StatCallout from "../StatCallout";

/**
 * R2 — problem visual. The two BrightLocal 2026 figures already in the
 * page's copy, as ring-chart callouts.
 */
export default function ReviewStatCallouts() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      <StatCallout
        percent={89}
        label="of consumers expect businesses to respond to reviews"
        sourceHref="https://www.brightlocal.com/blog/smb-report-enough-reviews/"
        sourceLabel="BrightLocal 2026 survey"
      />
      <StatCallout
        percent={42}
        label="are unlikely to use a business that ignores its reviews"
        sourceHref="https://www.brightlocal.com/blog/smb-report-enough-reviews/"
        sourceLabel="BrightLocal 2026 survey"
      />
    </div>
  );
}
