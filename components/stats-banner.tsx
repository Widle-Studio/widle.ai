interface Stat {
  value: string
  label: string
}

interface StatsBannerProps {
  stats?: Stat[]
}

const defaultStats: Stat[] = [
  { value: "200+", label: "Projects Delivered" },
  { value: "120+", label: "AI Experts" },
  { value: "10+", label: "Years Experience" },
]

export function StatsBanner({ stats = defaultStats }: StatsBannerProps) {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Value */}
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                {stat.value}
              </div>
              {/* Label */}
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
