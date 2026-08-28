"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroClient() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  return (
    <section className="relative mx-auto max-w-7xl px-5 pt-28 pb-20 sm:pt-32 sm:pb-28 lg:px-8 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Text Content Column */}
        <motion.div
          className="flex flex-col items-start text-left max-w-2xl mx-auto lg:mx-0 w-full lg:col-span-7 relative z-20"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2 text-sm sm:text-base font-medium tracking-wide text-muted-foreground border-b border-muted-foreground/30 pb-2">
            A Creative Software Engineering Agency!
          </motion.div>

          <div className="text-balance text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl leading-[1.1] text-[#3b6df8] flex flex-wrap gap-x-3 sm:gap-x-4 lg:gap-x-5">
            <motion.span variants={itemVariants}>We Build.</motion.span>
            <motion.span variants={itemVariants}>We Scale.</motion.span>
            <motion.span variants={itemVariants}>We Automate!</motion.span>
          </div>

          <motion.p variants={itemVariants} className="mt-8 text-balance text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground font-bold max-w-lg lg:max-w-none">
            Innovative software solutions & Retool expertise to power your business!
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-4">
            <Button asChild className="h-14 rounded-full bg-[#3b6df8] hover:bg-[#3b6df8]/90 text-white transition-all hover:scale-105 active:scale-95 px-10 text-lg font-semibold shadow-lg shadow-[#3b6df8]/20">
              <Link href="/case-studies">
                View Projects
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="relative w-full aspect-square lg:h-[700px] flex items-center justify-center lg:col-span-5 lg:-ml-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#3b6df8]/10 blur-[100px] lg:blur-[120px] rounded-full -z-10" />
          <div className="relative w-full h-full max-h-[500px] sm:max-h-[600px] lg:max-h-[750px] max-w-[500px] sm:max-w-[600px] lg:max-w-[750px] mx-auto lg:ml-auto">
            <Image src="/hero-image.png" alt="Hero Graphic" fill className="object-contain drop-shadow-[0_20px_40px_rgba(59,109,248,0.3)] scale-110 sm:scale-125 lg:scale-[1.4] translate-x-4 lg:translate-x-12" priority />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
