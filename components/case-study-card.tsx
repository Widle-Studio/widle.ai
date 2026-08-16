import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimateIn } from "./animate-in"

interface CaseStudyCardProps {
  image: string
  tag: string
  title: string
  description: string
  href: string
}

export function CaseStudyCard({
  image,
  tag,
  title,
  description,
  href,
}: CaseStudyCardProps) {
  return (
    <AnimateIn direction="up">
      <Link href={href} className="group block h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50">
          <div className="relative aspect-video overflow-hidden bg-muted">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-accent">
              {tag}
            </div>
            <h3 className="mb-3 text-xl font-semibold text-card-foreground">
              {title}
            </h3>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="mt-auto flex items-center text-sm font-medium text-primary">
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </AnimateIn>
  )
}