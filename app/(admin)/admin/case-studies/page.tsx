import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Pencil, Trash2 } from "lucide-react"
import Image from "next/image"

export default async function AdminCaseStudies() {
  const supabase = await createClient()

  // Fetch case studies. Use dummy data if it fails.
  const { data: caseStudies, error } = await supabase.from("case_studies").select("*").order("created_at", { ascending: false })
  
  const displayCaseStudies = error || !caseStudies ? [
    { id: 1, title: "AI-Powered Diagnostics Platform", client: "MedTech Innovations", published: true, thumbnail: "/placeholder.svg?height=100&width=160" },
    { id: 2, title: "Real-Time Fraud Detection", client: "GlobalBank Corp", published: true, thumbnail: "/placeholder.svg?height=100&width=160" },
    { id: 3, title: "AI Demand Forecasting", client: "RetailMax", published: false, thumbnail: "/placeholder.svg?height=100&width=160" },
  ] : caseStudies

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Case Studies</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Case Study
        </Button>
      </div>

      <div className="rounded-md border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-32">Thumbnail</TableHead>
              <TableHead>Title & Client</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayCaseStudies.map((study) => (
              <TableRow key={study.id}>
                <TableCell>
                  <div className="relative h-16 w-24 overflow-hidden rounded-md border border-border bg-muted">
                    <Image src={study.thumbnail} alt={study.title} fill className="object-cover" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{study.title}</div>
                  <div className="text-sm text-muted-foreground">{study.client}</div>
                </TableCell>
                <TableCell>
                  {study.published ? (
                    <Badge variant="default" className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">Published</Badge>
                  ) : (
                    <Badge variant="secondary">Draft</Badge>
                  )}
                </TableCell>
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
