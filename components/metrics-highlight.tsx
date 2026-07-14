interface MetricsHighlightProps {
  metrics: {
    value: string
    label: string
    description?: string
  }[]
}

export function MetricsHighlight({ metrics }: MetricsHighlightProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-12 sm:py-16 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="metrics-grid"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#metrics-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
          Key Results
        </p>

        <div className="grid gap-8 sm:grid-cols-3 lg:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              {/* Value */}
              <div className="text-5xl font-bold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
                {metric.value}
              </div>

              {/* Label */}
              <p className="mt-3 text-lg font-semibold text-primary-foreground">
                {metric.label}
              </p>

              {/* Description */}
              {metric.description && (
                <p className="mt-1 text-sm text-primary-foreground/70">
                  {metric.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
