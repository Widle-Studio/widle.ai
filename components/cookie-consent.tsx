"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setShowConsent(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pb-safe">
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-2xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-in slide-in-from-bottom-10 duration-500">
        <div className="text-sm text-muted-foreground flex-1">
          <p>
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
            By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for more details.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <Button variant="outline" onClick={() => setShowConsent(false)}>
            Decline
          </Button>
          <Button onClick={handleAccept}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  )
}
