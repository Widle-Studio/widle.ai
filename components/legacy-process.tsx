"use client"

import Image from "next/image"
import { SectionHeader } from "@/components/section-header"

const processSteps = [
  {
    title: "Tell Us What You Need",
    description: "We specialize in developing Retool apps that evolve seamlessly with your business.",
    icon: "/images/home/comment.png"
  },
  {
    title: "Quick Call",
    description: "We can assist you in building a Retool app that scales with your business.",
    icon: "/images/home/personcall.png"
  },
  {
    title: "Detailed Price Quotation",
    description: "Comprehensive Estimates Tailored to Your Project Needs",
    icon: "/images/home/money-bag__2_.png"
  },
  {
    title: "Start of Work",
    description: "Initiate Your Journey Toward Success with a Dedicated Team",
    icon: "/images/home/start-work.png"
  },
  {
    title: "Receive Delivery",
    description: "We provide comprehensive training and support for all our Retool clients.",
    icon: "/images/home/delivery.png"
  },
  {
    title: "Support for the Future",
    description: "We provide training and support to all our Retool clients.",
    icon: "/images/home/futur.png"
  }
]

export function LegacyProcess() {
  return (
    <section className="bg-secondary/10 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Process"
          headline="How We Work With You"
          subtext="A streamlined approach to transforming your ideas into powerful enterprise solutions."
        />

        <div className="mt-16 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border/50 z-0"></div>

          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-6 relative z-10">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="h-24 w-24 rounded-2xl bg-white border border-border/50 shadow-sm flex items-center justify-center p-5 mb-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-md relative bg-gradient-to-b from-white to-gray-50">
                  <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-sm border-2 border-background">
                    {idx + 1}
                  </div>
                  <div className="relative w-full h-full">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      fill
                      className="object-contain"
                      // Fallback to a default if the icon wasn't downloaded perfectly
                      onError={(e) => { e.currentTarget.src = "/images/home/retool-icon1.png" }}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-3 leading-tight">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
