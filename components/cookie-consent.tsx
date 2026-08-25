"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

type CookiePreferences = {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true
    analytics: false,
    marketing: false,
  })

  const handleSave = (prefsToSave: CookiePreferences) => {
    localStorage.setItem("cookiePreferences", JSON.stringify(prefsToSave))
    setPreferences(prefsToSave)
    setShowBanner(false)
    setShowDetails(false)

    // Here you would typically trigger your tag manager or analytics scripts
    // if (prefsToSave.analytics) {
    //   window.initAnalytics()
    // }
  }

  useEffect(() => {
    const savedPreferences = localStorage.getItem("cookiePreferences")

    if (!savedPreferences) {
      // Check for legacy consent format
      const legacyConsent = localStorage.getItem("cookieConsent")
      if (legacyConsent === "true") {
        setTimeout(() => handleSave({ essential: true, analytics: true, marketing: true }), 0)
      } else {
        // Delay showing the banner slightly for better UX
        const timer = setTimeout(() => setShowBanner(true), 1500)
        return () => clearTimeout(timer)
      }
    } else {
      try {
        const parsed = JSON.parse(savedPreferences)
        setTimeout(() => setPreferences(parsed), 0)
      } catch (e) {
        console.error("Failed to parse cookie preferences", e)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleAcceptAll = () => {
    handleSave({
      essential: true,
      analytics: true,
      marketing: true,
    })
  }

  const handleRejectNonEssential = () => {
    handleSave({
      essential: true,
      analytics: false,
      marketing: false,
    })
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return // Cannot toggle essential
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none"
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-border/50 bg-background/80 p-6 shadow-2xl backdrop-blur-xl pointer-events-auto">
            {!showDetails ? (
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight">We value your privacy</h3>
                  <p className="text-sm text-muted-foreground">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                    By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="outline" onClick={() => setShowDetails(true)} className="flex-1 md:flex-none">
                    Customize
                  </Button>
                  <Button variant="secondary" onClick={handleRejectNonEssential} className="flex-1 md:flex-none">
                    Reject Non-Essential
                  </Button>
                  <Button onClick={handleAcceptAll} className="flex-1 md:flex-none bg-primary text-primary-foreground hover:bg-primary/90">
                    Accept All
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-border/50 pb-4">
                  <h3 className="text-lg font-semibold tracking-tight">Customize Cookie Preferences</h3>
                  <Button variant="ghost" size="icon" onClick={() => setShowDetails(false)}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>

                <div className="space-y-4">
                  {/* Essential */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-sm">Essential Cookies</h4>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">Always Active</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        These cookies are necessary for the website to function and cannot be switched off in our systems.
                        They are usually only set in response to actions made by you which amount to a request for services.
                      </p>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">Analytics Cookies</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                        They help us to know which pages are the most and least popular and see how visitors move around the site.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${preferences.analytics ? 'bg-primary' : 'bg-muted'}`}
                      role="switch"
                      aria-checked={preferences.analytics}
                    >
                      <span aria-hidden="true" className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out ${preferences.analytics ? 'translate-x-2' : '-translate-x-2'}`} />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">Marketing Cookies</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        These cookies may be set through our site by our advertising partners.
                        They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${preferences.marketing ? 'bg-primary' : 'bg-muted'}`}
                      role="switch"
                      aria-checked={preferences.marketing}
                    >
                      <span aria-hidden="true" className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out ${preferences.marketing ? 'translate-x-2' : '-translate-x-2'}`} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-4 border-t border-border/50">
                  <Button variant="ghost" onClick={() => setShowDetails(false)}>
                    Back
                  </Button>
                  <Button onClick={() => handleSave(preferences)}>
                    Save Preferences
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
