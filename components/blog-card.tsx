import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar } from "lucide-react"

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
    <Link href={href} className="group block">
      <article className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        {/* Thumbnail */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Category Tag */}
          <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Date */}
          <div className="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={date}>{date}</time>
          </div>

          {/* Title */}
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
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
  )
}
