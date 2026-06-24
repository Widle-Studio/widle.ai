import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTABannerProps {
  headline: string
  description?: string
  buttonText: string
  buttonHref: string
  variant?: "primary" | "accent"
}

export function CTABanner({
  headline,
  description,
  buttonText,
  buttonHref,
  variant = "primary",
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "primary" && "bg-primary",
        variant === "accent" && "bg-accent"
      )}
    >
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
              id="cta-pattern"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#cta-pattern)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          {/* Text Content */}
          <div className="max-w-2xl">
            <h2
              className={cn(
                "text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl",
                variant === "primary" && "text-primary-foreground",
                variant === "accent" && "text-accent-foreground"
              )}
            >
              {headline}
            </h2>
            {description && (
              <p
                className={cn(
                  "mt-3 text-pretty text-base sm:text-lg",
                  variant === "primary" && "text-primary-foreground/80",
                  variant === "accent" && "text-accent-foreground/80"
                )}
              >
                {description}
              </p>
            )}
          </div>

          {/* CTA Button */}
          <div className="shrink-0">
            <Button
              
              size="lg"
              className={cn(
                "group",
                variant === "primary" &&
                  "bg-background text-foreground hover:bg-background/90",
                variant === "accent" &&
                  "bg-background text-foreground hover:bg-background/90"
              )}
            >
              <Link href={buttonHref}>
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
