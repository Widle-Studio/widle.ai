export function StatsSection() {
  const stats = [
    { value: "200+", label: "PROJECTS DELIVERED" },
    { value: "50+", label: "AI EXPERTS" },
    { value: "5+", label: "YEARS EXPERIENCE" },
  ]

  return (
    <section className="bg-background py-20 sm:py-24 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-2">
              <span className="text-5xl font-bold tracking-tight text-primary">{stat.value}</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
