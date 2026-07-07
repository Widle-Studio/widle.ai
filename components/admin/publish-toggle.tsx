"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface PublishToggleProps {
  id: number
  table: string
  initialStatus: boolean
}

export function PublishToggle({ id, table, initialStatus }: PublishToggleProps) {
  const [isPublished, setIsPublished] = useState(initialStatus)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleToggle(checked: boolean) {
    setIsLoading(true)
    // Optimistic update
    setIsPublished(checked)

    try {
      const { error } = await supabase
        .from(table)
        .update({ published: checked })
        .eq("id", id)

      if (error) {
        // Revert on error
        setIsPublished(!checked)
        console.error("Failed to update status:", error)
      } else {
        router.refresh()
      }
    } catch (err) {
      setIsPublished(!checked)
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={isPublished}
        onCheckedChange={handleToggle}
        disabled={isLoading}
      />
      <span className="text-sm font-medium">
        {isPublished ? "Published" : "Draft"}
      </span>
    </div>
  )
}
