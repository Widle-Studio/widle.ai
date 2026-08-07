import { AnimateIn } from "./animate-in"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow?: string
  headline: string
  subtext?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  eyebrow,
  headline,
  subtext,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <AnimateIn direction="up" delay={0.1}>
      <div
        className={cn(
          "mx-auto max-w-3xl",
          align === "center" && "text-center",
          align === "left" && "text-left",
          className
        )}
      >
        {/* Eyebrow */}
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
        )}

        {/* Headline */}
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {headline}
        </h2>

        {/* Subtext */}
        {subtext && (
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtext}
          </p>
        )}
      </div>
    </AnimateIn>
  )
}
