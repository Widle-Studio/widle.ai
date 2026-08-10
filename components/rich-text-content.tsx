import Image from "next/image"
import { ReactNode } from "react"

interface RichTextContentProps {
  children: ReactNode
}

export function RichTextContent({ children }: RichTextContentProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-primary prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-img:rounded-xl">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

// Reusable content blocks for CMS simulation
export function ContentHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 mt-12 text-2xl font-bold tracking-tight text-foreground first:mt-0 sm:text-3xl">
      {children}
    </h2>
  )
}

export function ContentSubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 mt-8 text-xl font-semibold tracking-tight text-foreground">
      {children}
    </h3>
  )
}

export function ContentParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 leading-relaxed text-muted-foreground">
      {children}
    </p>
  )
}

export function ContentList({ items }: { items: string[] }) {
  return (
    <ul className="mb-6 space-y-2 pl-6">
      {items.map((item, index) => (
        <li key={index} className="list-disc text-muted-foreground marker:text-primary">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function ContentBlockquote({ children, author }: { children: ReactNode; author?: string }) {
  return (
    <blockquote className="my-8 border-l-4 border-primary bg-secondary/30 py-4 pl-6 pr-4">
      <p className="text-lg italic text-foreground">{children}</p>
      {author && (
        <cite className="mt-2 block text-sm not-italic text-muted-foreground">
          — {author}
        </cite>
      )}
    </blockquote>
  )
}

export function ContentImage({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        className="w-full rounded-xl object-cover"
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
