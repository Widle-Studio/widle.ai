import { SectionHeader } from "@/components/section-header"

export function ComparisonSection() {
  return (
    <section className="bg-secondary/20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Comparison"
          headline="How we stack up"
          subtext="See how Widle compares against traditional consulting firms and freelancers."
        />

        <div className="mt-12 overflow-x-auto rounded-xl border bg-background shadow-sm lg:mt-16">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-secondary/50 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold text-foreground">Dimension</th>
                <th className="px-6 py-4 font-semibold text-foreground">Consulting Firms</th>
                <th className="px-6 py-4 font-semibold text-foreground">Local / Boutique</th>
                <th className="bg-primary/10 px-6 py-4 font-bold text-primary">Widle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 font-medium">Time to Value</td>
                <td className="px-6 py-4 text-muted-foreground">3-6+ months</td>
                <td className="px-6 py-4 text-muted-foreground">Variable</td>
                <td className="bg-primary/5 px-6 py-4 font-bold text-primary">Weeks</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 font-medium">Cost</td>
                <td className="px-6 py-4 text-muted-foreground">$$$$</td>
                <td className="px-6 py-4 text-muted-foreground">$</td>
                <td className="bg-primary/5 px-6 py-4 font-bold text-primary">$$</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 font-medium">Scalability</td>
                <td className="px-6 py-4 text-muted-foreground">High</td>
                <td className="px-6 py-4 text-muted-foreground">Low</td>
                <td className="bg-primary/5 px-6 py-4 font-bold text-primary">High</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 font-medium">Ongoing Support</td>
                <td className="px-6 py-4 text-muted-foreground">Billable</td>
                <td className="px-6 py-4 text-muted-foreground">None</td>
                <td className="bg-primary/5 px-6 py-4 font-bold text-primary">Included</td>
              </tr>
              <tr className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 font-medium">Domain Expertise</td>
                <td className="px-6 py-4 text-muted-foreground">Generic</td>
                <td className="px-6 py-4 text-muted-foreground">Narrow</td>
                <td className="bg-primary/5 px-6 py-4 font-bold text-primary">Operations-first</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
