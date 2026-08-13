import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar } from "lucide-react"
import { AnimateIn } from "./animate-in"

interface BlogCardProps {
  image: string
  category: string
  title: string
  excerpt: string
  date: string
  href: string
}

export function BlogCard({
  image,
  category,
  title,
  excerpt,
  date,
  href,
}: BlogCardProps) {
  return (
    <AnimateIn direction="up">
      <Link href={href} className="group block">
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden bg-muted">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              {category}
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            {/* Meta */}
            <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <time dateTime={date}>{date}</time>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-semibold leading-tight text-card-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
              {excerpt}
            </p>

            {/* Read More */}
            <div className="flex items-center text-sm font-medium text-accent">
              <span>Read Article</span>
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </article>
      </Link>
    </AnimateIn>
  )
}