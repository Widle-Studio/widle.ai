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
import { Plus, Pencil, Trash2 } from "lucide-react"
import Image from "next/image"
import { PublishToggle } from "@/components/admin/publish-toggle"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CaseStudyForm } from "@/components/admin/forms/case-study-form"

export default async function AdminCaseStudies() {
  const supabase = await createClient()

  // Fetch case studies.
  const { data: caseStudies, error } = await supabase.from("case_studies").select("*").order("created_at", { ascending: false })
  
  const displayCaseStudies = error || !caseStudies ? [] : caseStudies

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Case Studies</h1>
        
        <Dialog>
          <DialogTrigger >
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Case Study
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Case Study</DialogTitle>
            </DialogHeader>
            <CaseStudyForm />
          </DialogContent>
        </Dialog>
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
            {displayCaseStudies.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground">
                  No case studies found.
                </TableCell>
              </TableRow>
            )}
            {displayCaseStudies.map((study) => (
              <TableRow key={study.id}>
                <TableCell>
                  <div className="relative h-16 w-24 overflow-hidden rounded-md border border-border bg-muted">
                    <Image src={study.thumbnail || "/placeholder.svg?height=100&width=160"} alt={study.title} fill className="object-cover" />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-medium">{study.title}</div>
                  <div className="text-sm text-muted-foreground">{study.client}</div>
                </TableCell>
                <TableCell>
                  <PublishToggle id={study.id} table="case_studies" initialStatus={study.published} />
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Dialog>
                      <DialogTrigger >
                        <Button variant="ghost" size="icon">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Case Study</DialogTitle>
                        </DialogHeader>
                        <CaseStudyForm initialData={study} />
                      </DialogContent>
                    </Dialog>

                    <form action={async () => {
                      "use server"
                      const supabaseServer = await createClient()
                      await supabaseServer.from("case_studies").delete().eq("id", study.id)
                    }}>
                      <Button type="submit" variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10 hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </form>
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
