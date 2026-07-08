"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ImageUpload } from "@/components/admin/image-upload"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  client: z.string().min(2, {
    message: "Client name must be at least 2 characters.",
  }),
  thumbnail: z.string().optional(),
})

type CaseStudyFormValues = z.infer<typeof formSchema>

interface CaseStudyFormProps {
  initialData?: CaseStudyFormValues & { id: number }
  onSuccess?: () => void
}

export function CaseStudyForm({ initialData, onSuccess }: CaseStudyFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const form = useForm<CaseStudyFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      client: "",
      thumbnail: "",
    },
  })

  async function onSubmit(values: CaseStudyFormValues) {
    setIsLoading(true)
    
    try {
      if (initialData?.id) {
        const { error } = await supabase
          .from("case_studies")
          .update({
            title: values.title,
            client: values.client,
            thumbnail: values.thumbnail,
          })
          .eq("id", initialData.id)

        if (error) throw error
      } else {
        const { error } = await supabase
          .from("case_studies")
          .insert([
            {
              title: values.title,
              client: values.client,
              thumbnail: values.thumbnail,
              published: false,
            },
          ])

        if (error) throw error
      }

      form.reset()
      router.refresh()
      if (onSuccess) onSuccess()
      
    } catch (error) {
      console.error("Error saving case study:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g. AI-Powered Diagnostics" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="client"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. MedTech Innovations" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thumbnail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail Image</FormLabel>
              <FormControl>
                <ImageUpload 
                  bucket="images" 
                  defaultImage={field.value} 
                  onUpload={(url) => field.onChange(url)} 
                />
              </FormControl>
              <FormDescription>
                Upload a cover image for this case study.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Case Study"}
        </Button>
      </form>
    </Form>
  )
}
