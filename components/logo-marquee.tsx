"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface Logo {
  src: string
  alt: string
}

interface LogoMarqueeProps {
  logos?: Logo[]
  speed?: "slow" | "normal" | "fast"
}

const defaultLogos: Logo[] = [
  { src: "/placeholder.svg?height=40&width=120", alt: "Client 1" },
  { src: "/placeholder.svg?height=40&width=120", alt: "Client 2" },
  { src: "/placeholder.svg?height=40&width=120", alt: "Client 3" },
  { src: "/placeholder.svg?height=40&width=120", alt: "Client 4" },
  { src: "/placeholder.svg?height=40&width=120", alt: "Client 5" },
  { src: "/placeholder.svg?height=40&width=120", alt: "Client 6" },
  { src: "/placeholder.svg?height=40&width=120", alt: "Client 7" },
  { src: "/placeholder.svg?height=40&width=120", alt: "Client 8" },
]

export function LogoMarquee({ logos = defaultLogos, speed = "normal" }: LogoMarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_60s_linear_infinite]",
    normal: "animate-[marquee_40s_linear_infinite]",
    fast: "animate-[marquee_20s_linear_infinite]",
  }

  return (
    <section className="overflow-hidden border-y border-border bg-secondary/30 py-8">
      <div className="relative">
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-secondary/30 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-secondary/30 to-transparent" />

        {/* Marquee Container */}
        <div className="flex">
          <div className={cn("flex shrink-0 items-center gap-12", speedClass[speed])}>
            {logos.map((logo, index) => (
              <div
                key={`original-${index}`}
                className="flex h-12 w-32 items-center justify-center px-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className={cn("flex shrink-0 items-center gap-12", speedClass[speed])}>
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex h-12 w-32 items-center justify-center px-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  )
}
