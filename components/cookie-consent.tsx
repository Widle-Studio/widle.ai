<<<<<<< SEARCH
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if the user has already consented
    const storedConsent = localStorage.getItem("cookieConsent")
    if (!storedConsent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setShowConsent(true), 1500)
      return () => clearTimeout(timer)
    } else {
      try {
        const parsed = JSON.parse(storedConsent)
        // Ensure state is updated correctly without synchronous effect violation
        setTimeout(() => setPreferences((prev) => ({ ...prev, ...parsed })), 0)
      } catch {
        // Fallback for old format
      }
    }
  }, [])

  const savePreferences = (newPrefs: typeof preferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(newPrefs))
    setPreferences(newPrefs)
    setShowPreferences(false)
    setShowConsent(false)
  }

  const handleAcceptAll = () => {
    savePreferences({ essential: true, analytics: true, marketing: true })
  }

  const handleRejectNonEssential = () => {
    savePreferences({ essential: true, analytics: false, marketing: false })
  }

  const handleSavePreferences = () => {
    savePreferences(preferences)
  }

  if (!showConsent && !showPreferences) return null

  return (
    <>
      {showConsent && !showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pb-safe">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-2xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-in slide-in-from-bottom-10 duration-500">
            <div className="text-sm text-muted-foreground flex-1">
              <p>
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                By clicking &quot;Accept All&quot;, you consent to our use of cookies. Read our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> for more details.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row shrink-0 items-center gap-3">
              <Button variant="outline" onClick={() => setShowPreferences(true)}>
                Manage Preferences
              </Button>
              <Button variant="outline" onClick={handleRejectNonEssential}>
                Reject Non-Essential
              </Button>
              <Button onClick={handleAcceptAll}>
                Accept All
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showPreferences} onOpenChange={(open) => {
        if (!open && !localStorage.getItem("cookieConsent")) {
            // if closed without saving and not previously saved, keep banner
            setShowPreferences(false)
        } else {
            setShowPreferences(open)
        }
      }}>
        <DialogContent className="sm:max-w-[425px]" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie settings. Essential cookies are required for the site to function properly.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="essential" className="flex flex-col space-y-1">
                <span>Essential</span>
                <span className="font-normal text-xs text-muted-foreground">Strictly necessary for the website to function.</span>
              </Label>
              <Switch id="essential" checked={true} disabled />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="analytics" className="flex flex-col space-y-1">
                <span>Analytics</span>
                <span className="font-normal text-xs text-muted-foreground">Help us improve by measuring site usage.</span>
              </Label>
              <Switch
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
              />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="marketing" className="flex flex-col space-y-1">
                <span>Marketing</span>
                <span className="font-normal text-xs text-muted-foreground">Used to deliver personalized advertisements.</span>
              </Label>
              <Switch
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-end gap-2">
            <Button variant="outline" onClick={() => setShowPreferences(false)}>
              Cancel
            </Button>
            <Button onClick={handleSavePreferences}>Save Preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
=======
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

type CookiePreferences = {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if the user has already consented
    const savedPreferences = localStorage.getItem("cookiePreferences")

    if (!savedPreferences) {
      // Legacy check just in case
      const legacyConsent = localStorage.getItem("cookieConsent")
      if (legacyConsent === "true") {
        handleSave({ essential: true, analytics: true, marketing: true })
      } else {
        // Delay showing the banner slightly for better UX
        const timer = setTimeout(() => setShowBanner(true), 1500)
        return () => clearTimeout(timer)
      }
    } else {
      try {
        setPreferences(JSON.parse(savedPreferences))
      } catch (e) {
        console.error("Failed to parse cookie preferences", e)
      }
    }
  }, [])

  const handleSave = (prefsToSave: CookiePreferences) => {
    localStorage.setItem("cookiePreferences", JSON.stringify(prefsToSave))
    setPreferences(prefsToSave)
    setShowBanner(false)
    setShowPreferences(false)

    // Future integration point:
    // if (typeof window !== "undefined") {
    //   window.dispatchEvent(new CustomEvent('cookiePreferencesSaved', { detail: prefsToSave }));
    // }
  }

  const handleAcceptAll = () => {
    handleSave({
      essential: true,
      analytics: true,
      marketing: true,
    })
  }

  const handleDeclineAll = () => {
    handleSave({
      essential: true,
      analytics: false,
      marketing: false,
    })
  }

  const handleSavePreferences = () => {
    handleSave(preferences)
  }

  if (!showBanner && !showPreferences) return null

  return (
    <>
      {showBanner && !showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pb-safe">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-2xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-in slide-in-from-bottom-10 duration-500">
            <div className="text-sm text-muted-foreground flex-1">
              <p>
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                Read our <a href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</a> for more details.
              </p>
            </div>
            <div className="flex flex-wrap shrink-0 items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => setShowPreferences(true)}>
                Customize
              </Button>
              <Button variant="outline" size="sm" onClick={handleDeclineAll}>
                Decline Optional
              </Button>
              <Button size="sm" onClick={handleAcceptAll}>
                Accept All
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie settings. You can enable or disable different types of cookies below.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="flex items-start justify-between space-x-4">
              <div className="grid gap-1.5">
                <Label className="text-base font-semibold">Strictly Necessary</Label>
                <p className="text-sm text-muted-foreground">
                  These cookies are essential for the website to function properly. They cannot be disabled.
                </p>
              </div>
              <Switch checked={true} disabled />
            </div>

            <div className="flex items-start justify-between space-x-4">
              <div className="grid gap-1.5">
                <Label htmlFor="analytics" className="text-base font-semibold">Analytics</Label>
                <p className="text-sm text-muted-foreground">
                  Allow us to analyze site usage so we can measure and improve performance.
                </p>
              </div>
              <Switch
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, analytics: checked }))}
              />
            </div>

            <div className="flex items-start justify-between space-x-4">
              <div className="grid gap-1.5">
                <Label htmlFor="marketing" className="text-base font-semibold">Marketing</Label>
                <p className="text-sm text-muted-foreground">
                  Used by our advertising partners to build a profile of your interests and show relevant ads.
                </p>
              </div>
              <Switch
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, marketing: checked }))}
              />
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2 sm:space-x-2">
            <Button variant="outline" onClick={handleDeclineAll} className="w-full sm:w-auto">
              Decline Optional
            </Button>
            <Button variant="default" onClick={handleSavePreferences} className="w-full sm:w-auto">
              Save Preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
>>>>>>> REPLACE