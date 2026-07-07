import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface ProcessCardProps {
  step: number
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function ProcessCard({
  step,
  icon: Icon,
  title,
  description,
  className,
}: ProcessCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {/* Step Number Badge */}
      <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center">
        <span className="text-7xl font-bold text-primary/10 transition-colors group-hover:text-primary/20">
          {step}
        </span>
      </div>

      {/* Icon */}
      <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>

      {/* Step Label */}
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
        Step {step}
      </p>

      {/* Title */}
      <h3 className="mb-3 text-lg font-semibold text-card-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Connector Line (visible on larger screens) */}
      <div className="absolute -right-8 top-1/2 hidden h-0.5 w-16 -translate-y-1/2 bg-gradient-to-r from-primary/50 to-transparent lg:block last:hidden" />
    </article>
  )
}
