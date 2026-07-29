import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { SortableTestimonials } from "@/components/admin/sortable-testimonials"

export default async function AdminTestimonials() {
  const supabase = await createClient()

  // Fetch testimonials.
  const { data: testimonials, error } = await supabase.from("testimonials").select("*").order("order", { ascending: true })

  const displayTestimonials = error || !testimonials ? [] : testimonials

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Testimonial
        </Button>
      </div>

      <SortableTestimonials testimonials={displayTestimonials} />
    </div>
  )
}
