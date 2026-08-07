import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimateIn } from "./animate-in"
import { StaggeredGrid } from "./staggered-grid"

interface HeroSectionProps {
  headline: string
  highlightedText?: string
  subheadline: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  eyebrow?: string
  className?: string
}

export function HeroSection({
  headline,
  highlightedText,
  subheadline,
  primaryCTA,
  secondaryCTA,
  eyebrow,
  className,
}: HeroSectionProps) {
  return (
    <div className={cn("relative overflow-hidden bg-background pt-24 lg:pt-32", className)}>
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Glow Effect */}
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform-gpu blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-accent opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <StaggeredGrid>
            {eyebrow && (
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                {eyebrow}
              </span>
            )}
            
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              {headline}{" "}
              {highlightedText && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {highlightedText}
                </span>
              )}
            </h1>

            <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              {subheadline}
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={primaryCTA.href}
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 hover:-translate-y-1"
              >
                {primaryCTA.text}
              </Link>
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="group text-sm font-semibold leading-6 text-foreground flex items-center gap-2 hover:text-primary transition-colors"
                >
                  {secondaryCTA.text}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </StaggeredGrid>
        </div>
      </div>
    </div>
  )
}
