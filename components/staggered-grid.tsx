"use client"

import { motion } from "framer-motion"
import { ReactNode, Children } from "react"

interface StaggeredGridProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggeredGrid({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggeredGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  }

  // To support conditional rendering or single children correctly:
  const arrayChildren = Children.toArray(children).filter(Boolean);

  // To support conditional rendering or single children correctly:
  const arrayChildren = Children.toArray(children).filter(Boolean);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {arrayChildren.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface StaggeredGridProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
}

export function StaggeredGrid({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggeredGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
