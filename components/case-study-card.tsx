import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

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
    <Link href={href} className="group block">
      <article className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        {/* Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          {/* Tag */}
          <span className="absolute left-4 top-4 rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-accent-foreground">
            {tag}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="mb-2 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>

          {/* Description */}
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>

          {/* Arrow CTA */}
          <div className="flex items-center text-sm font-medium text-accent">
            <span>View Case Study</span>
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </article>
    </Link>
  )
}
