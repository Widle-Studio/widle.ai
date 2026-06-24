import { Breadcrumb } from "@/components/breadcrumb"
import type { LucideIcon } from "lucide-react"

interface ServiceHeroProps {
  title: string
  subtitle: string
  icon: LucideIcon
}

export function ServiceHero({ title, subtitle, icon: Icon }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-24 pb-16 sm:pt-28 sm:pb-20">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Glow Effect */}
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: title },
          ]}
        />

        <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:h-20 sm:w-20">
            <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>

          {/* Title & Subtitle */}
          <div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-2 text-pretty text-lg text-muted-foreground sm:text-xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
