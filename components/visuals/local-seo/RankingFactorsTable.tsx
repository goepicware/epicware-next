/**
 * Real HTML table backing RankingPillars — the sourced "what Google
 * weighs" breakdown from the original approved content spec, which the
 * page's prose summarised but never rendered as a literal table. The
 * visuals brief requires a real <table> here (not an image), with
 * RankingPillars sitting above it as a scannable summary, not a
 * replacement. Row text matches the approved copy verbatim — nothing new.
 */
const ROWS = [
  {
    factor: "Relevance",
    meaning: "How well your business matches the search",
    moves: "Your primary and secondary categories, services, business description, and the content on your website",
  },
  {
    factor: "Distance",
    meaning: "How far you are from the searcher",
    moves:
      "You can't move your shop, but you can make sure you're properly visible across the whole area you serve",
  },
  {
    factor: "Prominence",
    meaning: "How well-known and trusted you are",
    moves: "Reviews, citations, links, mentions, and how people engage with your profile",
  },
];

export default function RankingFactorsTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border/60">
      <table className="w-full text-sm border-collapse">
        <caption className="sr-only">What Google weighs when ranking local search results</caption>
        <thead>
          <tr className="bg-muted/60 text-left">
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">
              What Google weighs
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">
              What it means
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-foreground">
              What moves it
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr key={row.factor} className={i < ROWS.length - 1 ? "border-b border-border/60" : ""}>
              <th scope="row" className="px-4 py-3 font-semibold text-foreground align-top whitespace-nowrap">
                {row.factor}
              </th>
              <td className="px-4 py-3 text-muted-foreground align-top">{row.meaning}</td>
              <td className="px-4 py-3 text-muted-foreground align-top">{row.moves}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
