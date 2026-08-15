"use client"

import { useEffect, useState } from "react"

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setProgress((scrollPx / winHeightPx) * 100)
    }

    window.addEventListener("scroll", updateScroll)
    return () => window.removeEventListener("scroll", updateScroll)
  }, [])

  return (
    <div className="fixed top-16 left-0 right-0 z-50 h-1 bg-muted">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
