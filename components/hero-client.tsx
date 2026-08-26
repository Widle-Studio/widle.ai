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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        <motion.div
          className="flex flex-col items-start text-left max-w-2xl mx-auto lg:mx-0 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="mb-8 inline-flex items-center gap-2 text-sm sm:text-base font-medium tracking-wide text-muted-foreground border-b border-muted-foreground/30 pb-2">
            A Creative Software Engineering Agency!
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-balance text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl leading-[1.05] text-[#3b6df8]">
            We Build.<br />We Scale.<br />We Automate!
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-8 text-balance text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground font-bold max-w-lg lg:max-w-none">
            Innovative software solutions & Retool expertise to power your business!
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap items-center gap-4">
            <Button variant="outline" asChild className="h-14 rounded-full border-border/50 bg-background/30 backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105 active:scale-95 px-10 text-lg font-semibold">
              <Link href="/case-studies">
                View Projects
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full aspect-square lg:h-[700px] flex items-center justify-center lg:-mr-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#3b6df8]/20 blur-[100px] lg:blur-[150px] rounded-full -z-10" />
          <div className="relative w-full h-full max-h-[450px] sm:max-h-[550px] lg:max-h-[650px] max-w-[450px] sm:max-w-[550px] lg:max-w-[650px] ml-auto">
            <Image src="/hero-image.png" alt="Hero Graphic" fill className="object-contain drop-shadow-[0_15px_35px_rgba(59,109,248,0.2)]" priority />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
