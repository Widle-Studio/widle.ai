"use client"

import { useState, useEffect, useCallback } from "react"
import { TestimonialCard } from "./testimonial-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Testimonial {
  quote: string
  clientName: string
  role: string
  companyLogo: string
  companyName: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  autoplayInterval?: number
}

export function TestimonialsCarousel({
  testimonials,
  autoplay = true,
  autoplayInterval = 5000,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(goToNext, autoplayInterval)
    return () => clearInterval(interval)
  }, [isAutoPlaying, goToNext, autoplayInterval])

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(autoplay)}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full shrink-0 px-4">
              <div className="mx-auto max-w-3xl">
                <TestimonialCard {...testimonial} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrev}
          className="h-10 w-10 rounded-full border-border bg-card text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "w-6 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            >
              <span className="sr-only">Go to testimonial {index + 1}</span>
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="h-10 w-10 rounded-full border-border bg-card text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
