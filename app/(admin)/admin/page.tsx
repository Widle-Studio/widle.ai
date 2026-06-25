import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, FileStack, FileText, Users } from "lucide-react"

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Fetch counts from Supabase. Use dummy data if tables don't exist yet.
  const fetchCount = async (table: string, fallback: number) => {
    try {
      const { count, error } = await supabase.from(table).select("*", { count: "exact", head: true })
      if (error) return fallback
      return count || 0
    } catch {
      return fallback
    }
  }

  const [servicesCount, caseStudiesCount, postsCount, leadsCount] = await Promise.all([
    fetchCount("services", 6),
    fetchCount("case_studies", 3),
    fetchCount("posts", 3),
    fetchCount("leads", 12),
  ])

  const stats = [
    { name: "Services", value: servicesCount, icon: Briefcase },
    { name: "Case Studies", value: caseStudiesCount, icon: FileStack },
    { name: "Blog Posts", value: postsCount, icon: FileText },
    { name: "New Leads", value: leadsCount, icon: Users },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.name}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
