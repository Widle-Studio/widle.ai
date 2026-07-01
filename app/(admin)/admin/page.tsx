import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, FileStack, FileText, Users, Activity } from "lucide-react"

export default async function AdminDashboard() {
  const supabase = await createClient()

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
    fetchCount("services", 0),
    fetchCount("case_studies", 0),
    fetchCount("posts", 0),
    fetchCount("leads", 0),
  ])

  const stats = [
    { name: "Services", value: servicesCount, icon: Briefcase, color: "text-blue-500" },
    { name: "Case Studies", value: caseStudiesCount, icon: FileStack, color: "text-indigo-500" },
    { name: "Blog Posts", value: postsCount, icon: FileText, color: "text-purple-500" },
    { name: "New Leads", value: leadsCount, icon: Users, color: "text-emerald-500" },
  ]

  // Mocking some simple activity data since we don't have an analytics table yet
  const activityData = [
    { label: "New lead from AI Readiness Quiz", time: "2 hours ago" },
    { label: "Published Case Study: MedTech Innovations", time: "5 hours ago" },
    { label: "Updated Service: LLMs & RAG", time: "Yesterday" },
    { label: "New lead from Website Contact Form", time: "Yesterday" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.name} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.name}
                </CardTitle>
                <div className={`p-2 rounded-full bg-secondary/50 ${stat.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityData.map((activity, i) => (
                <div key={i} className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
                  <p className="text-sm font-medium">{activity.label}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <a href="/admin/posts" className="block text-sm text-primary hover:underline">Write a new blog post →</a>
            <a href="/admin/case-studies" className="block text-sm text-primary hover:underline">Publish a case study →</a>
            <a href="/admin/leads" className="block text-sm text-primary hover:underline">View latest leads →</a>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
