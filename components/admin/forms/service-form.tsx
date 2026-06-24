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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  slug: z.string().min(2, {
    message: "Slug must be at least 2 characters.",
  }).regex(/^[a-z0-9-]+$/, {
    message: "Slug can only contain lowercase letters, numbers, and hyphens.",
  }),
  status: z.string().min(1, { message: "Please select a status." }),
})

type ServiceFormValues = z.infer<typeof formSchema>

interface ServiceFormProps {
  initialData?: ServiceFormValues & { id: number }
  onSuccess?: () => void
}

export function ServiceForm({ initialData, onSuccess }: ServiceFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  // 1. Define your form.
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      slug: "",
      status: "Draft",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: ServiceFormValues) {
    setIsLoading(true)
    
    try {
      if (initialData?.id) {
        // Update
        const { error } = await supabase
          .from("services")
          .update({
            title: values.title,
            slug: values.slug,
            status: values.status,
          })
          .eq("id", initialData.id)

        if (error) throw error
      } else {
        // Create
        const { error } = await supabase
          .from("services")
          .insert([
            {
              title: values.title,
              slug: values.slug,
              status: values.status,
            },
          ])

        if (error) throw error
      }

      form.reset()
      router.refresh()
      if (onSuccess) onSuccess()
      
    } catch (error) {
      console.error("Error saving service:", error)
      // You might want to add a toast notification here
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
                <Input placeholder="e.g. LLMs & RAG" {...field} />
              </FormControl>
              <FormDescription>
                The display name of the service.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input placeholder="e.g. llms-rag" {...field} />
              </FormControl>
              <FormDescription>
                The URL-friendly identifier for the service.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Draft">Draft</SelectItem>
                  <SelectItem value="Published">Published</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Service"}
        </Button>
      </form>
    </Form>
  )
}
