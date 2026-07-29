import { LucideIcon } from "lucide-react"

interface SolutionCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function SolutionCard({ title, description, icon: Icon }: SolutionCardProps) {
  return (
    <div className="group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-card-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
