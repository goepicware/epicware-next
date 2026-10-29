/**
 * Caption line under a visual: either a link to the real source backing a
 * number shown in the graphic (`source`), or an explicit "Illustrative
 * example" label for a graphic that doesn't carry a real figure. Every
 * number inside components/visuals/** must be backed by one of these two —
 * never shown bare, per the visuals brief's "Honest data" rule.
 */
export function SourceCaption({ href, label }: { href: string; label: string }) {
  return (
    <p className="text-center text-[11px] text-muted-foreground mt-3">
      Source:{" "}
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
        {label}
      </a>
    </p>
  );
}

export function IllustrativeCaption({ text = "Illustrative example" }: { text?: string }) {
  return <p className="text-center text-[11px] text-muted-foreground mt-3">{text}</p>;
}
