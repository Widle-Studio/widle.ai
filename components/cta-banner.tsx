import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimateIn } from "./animate-in"

interface CTABannerProps {
  headline: string
  description: string
  buttonText: string
  buttonHref: string
  variant?: "primary" | "secondary" | "accent"
  className?: string
}

export function CTABanner({
  headline,
  description,
  buttonText,
  buttonHref,
  variant = "primary",
  className,
}: CTABannerProps) {
  return (
    <AnimateIn direction="up">
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-3xl",
          variant === "primary" && "bg-primary text-primary-foreground",
          variant === "secondary" && "bg-secondary text-secondary-foreground",
          variant === "accent" && "bg-accent text-accent-foreground",
          className
        )}
      >
        {/* Background glow effects */}
        <div className="absolute -top-24 -right-24 -z-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 -z-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {headline}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 opacity-90">
              {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={buttonHref}
                className={cn(
                  "group flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold shadow-sm transition-all hover:scale-105",
                  variant === "primary" && "bg-background text-foreground hover:bg-background/90",
                  variant === "secondary" && "bg-primary text-primary-foreground hover:bg-primary/90",
                  variant === "accent" && "bg-background text-foreground hover:bg-background/90"
                )}
              >
                {buttonText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimateIn>
  )
}