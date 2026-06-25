"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { GripVertical, Pencil, Trash2 } from "lucide-react"

interface Testimonial {
  id: number
  client_name: string
  company_name: string
  role: string
  order: number
}

interface SortableTestimonialsProps {
  testimonials: Testimonial[]
}

function SortableTableRow({
  testimonial,
  onDelete,
}: {
  testimonial: Testimonial
  onDelete: (id: number) => void
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: testimonial.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
    position: "relative" as const,
  }

  return (
    <TableRow ref={setNodeRef} style={style} className={isDragging ? "bg-muted/50" : ""}>
      <TableCell className="w-12">
        <Button
          variant="ghost"
          size="icon"
          className="cursor-move text-muted-foreground hover:text-foreground"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-4 w-4" />
        </Button>
      </TableCell>
      <TableCell className="font-medium">{testimonial.client_name}</TableCell>
      <TableCell>{testimonial.company_name}</TableCell>
      <TableCell>{testimonial.role}</TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="icon">
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(testimonial.id)}
            className="text-destructive hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

export function SortableTestimonials({ testimonials: initialTestimonials }: SortableTestimonialsProps) {
  const [items, setItems] = useState(initialTestimonials)
  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((i) => i.id === active.id)
      const newIndex = items.findIndex((i) => i.id === over.id)

      const newItems = arrayMove(items, oldIndex, newIndex)
      setItems(newItems)

      // Save new order to database
      setIsSaving(true)
      try {
        const updates = newItems.map((item, index) => ({
          id: item.id,
          client_name: item.client_name,
          company_name: item.company_name,
          role: item.role,
          order: index, // New order based on array position
        }))

        const { error } = await supabase.from("testimonials").upsert(updates)

        if (error) {
          console.error("Failed to save order:", error)
          setItems(initialTestimonials) // Revert on error
        } else {
          router.refresh()
        }
      } catch (err) {
        console.error(err)
        setItems(initialTestimonials)
      } finally {
        setIsSaving(false)
      }
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Are you sure you want to delete this testimonial?")) return

    try {
      const { error } = await supabase.from("testimonials").delete().eq("id", id)
      if (!error) {
        setItems(items.filter((i) => i.id !== id))
        router.refresh()
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="rounded-md border border-border">
      <div className="relative w-full overflow-auto">
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
            {items.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  No testimonials found.
                </TableCell>
              </TableRow>
            )}
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
                {items.map((testimonial) => (
                  <SortableTableRow
                    key={testimonial.id}
                    testimonial={testimonial}
                    onDelete={handleDelete}
                  />
                ))}
              </SortableContext>
            </DndContext>
          </TableBody>
        </Table>
      </div>
      {isSaving && (
        <div className="absolute top-2 right-2 rounded-md bg-secondary/80 px-2 py-1 text-xs text-secondary-foreground backdrop-blur-sm">
          Saving order...
        </div>
      )}
    </div>
  )
}
