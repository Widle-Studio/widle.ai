import { AlertCircle, Lightbulb, TrendingUp } from "lucide-react"

interface ChallengeSolutionResultsProps {
  challenge: string
  solution: string
  results: string
}

export function ChallengeSolutionResults({
  challenge,
  solution,
  results,
}: ChallengeSolutionResultsProps) {
  const items = [
    {
      icon: AlertCircle,
      label: "Challenge",
      content: challenge,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/20",
    },
    {
      icon: Lightbulb,
      label: "Solution",
      content: solution,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      icon: TrendingUp,
      label: "Results",
      content: results,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20",
    },
  ]

  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className={`rounded-xl border ${item.borderColor} ${item.bgColor} p-6 lg:p-8`}
            >
              {/* Icon */}
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${item.bgColor}`}
              >
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>

              {/* Label */}
              <h3 className={`mb-3 text-sm font-semibold uppercase tracking-wider ${item.color}`}>
                {item.label}
              </h3>

              {/* Content */}
              <p className="text-base leading-relaxed text-foreground">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
