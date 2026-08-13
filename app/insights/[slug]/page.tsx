import { redirect } from "next/navigation"

export default async function InsightsRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  // Redirect to case studies where the data now lives
  redirect(`/case-studies/${slug}`)
}
