import { createClient } from "@/lib/supabase/server"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default async function AdminLeads() {
  const supabase = await createClient()

  // Fetch leads. Use dummy data if it fails.
  const { data: leads, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false })
  
  const displayLeads = error || !leads ? [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", company: "TechCorp", source: "ai_readiness_quiz", date: "2024-12-16" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", company: "Innovate Inc", source: "website", date: "2024-12-15" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com", company: "RetailCo", source: "ai_readiness_quiz", date: "2024-12-14" },
  ] : leads

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Leads</h1>
      </div>

      <div className="rounded-md border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Source</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="whitespace-nowrap">{lead.date || lead.created_at}</TableCell>
                <TableCell>
                  <div className="font-medium">{lead.name}</div>
                  <div className="text-sm text-muted-foreground">{lead.email}</div>
                </TableCell>
                <TableCell>{lead.company}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-secondary/50">
                    {lead.source}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
