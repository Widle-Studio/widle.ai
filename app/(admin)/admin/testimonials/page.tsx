import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react"

export default async function AdminTestimonials() {
  const supabase = await createClient()

  // Fetch testimonials. Use dummy data if it fails.
  const { data: testimonials, error } = await supabase.from("testimonials").select("*").order("order", { ascending: true })
  
  const displayTestimonials = error || !testimonials ? [
    { id: 1, clientName: "Sarah Chen", companyName: "TechCorp Industries", role: "CTO" },
    { id: 2, clientName: "Michael Torres", companyName: "GlobalServe Inc", role: "VP Operations" },
    { id: 3, clientName: "Dr. Emily Watson", companyName: "BioTech Solutions", role: "Head of AI" },
  ] : testimonials

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Testimonial
        </Button>
      </div>

      <div className="rounded-md border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayTestimonials.map((testimonial) => (
              <TableRow key={testimonial.id}>
                <TableCell>
                  <Button variant="ghost" size="icon" className="cursor-move text-muted-foreground hover:text-foreground">
                    <GripVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
                <TableCell className="font-medium">{testimonial.clientName}</TableCell>
                <TableCell>{testimonial.companyName}</TableCell>
                <TableCell>{testimonial.role}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10 hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
