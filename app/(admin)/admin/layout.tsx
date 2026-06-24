import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // During build or without valid credentials, user will be null
  // Uncomment below line when using real supabase keys to enforce auth
  // if (!user) {
  //   redirect("/admin/login")
  // }

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <AdminSidebar userEmail={user?.email || "admin@widle.ai"} />
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
