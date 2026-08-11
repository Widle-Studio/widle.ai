"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Mail, Clock, ShieldCheck, ArrowRight, CalendarDays, FileText, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            eyebrow="Contact Us"
            headline="Whatever it may be, we are glad to hear from you!"
            subtext="Reach out to discuss your enterprise requirements, get technical guidance, or explore partnership opportunities with Widle."
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
            
            {/* Contact Information */}
            <div className="space-y-12 pr-0 lg:pr-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Live Chat */}
                <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Live chat</h4>
                  <p className="text-sm text-muted-foreground mb-4">Click the button to start. Wait time: approximately 20 minutes.</p>
                  <a href="#" className="text-sm font-medium text-primary hover:underline">CHAT WITH US →</a>
                </div>

                {/* Submit Request */}
                <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Submit a request</h4>
                  <p className="text-sm text-muted-foreground mb-4">Send a request directly to us! Typical response time: within 1 business day.</p>
                  <a href="#form" className="text-sm font-medium text-primary hover:underline">SUBMIT →</a>
                </div>

                {/* Schedule */}
                <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all sm:col-span-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <CalendarDays className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Schedule a meeting</h4>
                  <p className="text-sm text-muted-foreground mb-4">Set up a meeting with us! We are available: Monday - Friday 9:00 am - 7:00 pm IST.</p>
                  <a href="https://calendly.com/widlestudio/30-minute-introductory-meeting" target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:underline">SCHEDULE →</a>
                </div>

              </div>

              <div className="p-6 rounded-2xl bg-secondary/20">
                <h4 className="font-semibold mb-2">Direct Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@widle.studio</p>
                  <p className="flex items-center"><Clock className="w-4 h-4 mr-2" /> +91-7016620913</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="form" className="relative rounded-3xl border bg-card p-8 shadow-sm">
              <div className="mb-8">
                 <h3 className="text-2xl font-bold">Let&apos;s work together</h3>
                 <p className="text-sm text-muted-foreground mt-2">Have a project? Let&apos;s make great things!</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your name <span className="text-destructive">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Your email <span className="text-destructive">*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Your contact</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Your message (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Briefly describe your use case, technical stack, or goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="rounded-md bg-emerald-500/15 p-4 border border-emerald-500/30">
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium flex items-center">
                      <ShieldCheck className="h-4 w-4 mr-2" /> Message sent successfully! An engineer will contact you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-md bg-destructive/15 p-4 border border-destructive/30">
                    <p className="text-sm text-destructive font-medium flex items-center">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Process Section */}
          <div className="mt-32 border-t border-border pt-20">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight">Our Simplest Yet Robust Process To Get Your Project Estimation</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { step: "01", title: "Send us your requirement", desc: "Put forward your inquiry with us on this page. And one of our representatives will see you in 1 business day, for further communication" },
                 { step: "02", title: "Sign NDA", desc: "We sign NDA with all of our customers and make you feel secure. By doing so we would like to assure you of the privacy of your idea and project." },
                 { step: "03", title: "Analyzing your requirement", desc: "Once you share the details of your requirement, we will analyze it. Our team of scrum masters will read and analyze the same, and will get back to you within a few hours." },
                 { step: "04", title: "Get your estimation", desc: "Once our team is done with analyzing the scope of work and compilation of necessary resources required for the project, we will get back to you with the Estimated Cost and Timeline." },
               ].map(s => (
                 <div key={s.step} className="relative p-6 bg-card border border-border rounded-xl">
                   <div className="absolute -top-5 left-6 bg-primary text-primary-foreground text-xl font-bold py-1 px-3 rounded-lg shadow-sm">
                     {s.step}
                   </div>
                   <h4 className="text-lg font-semibold mt-4 mb-3">{s.title}</h4>
                   <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                 </div>
               ))}
             </div>
          </div>
          
          {/* Our Promise Section */}
          <div className="mt-32 border-t border-border pt-20">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight">Our promise</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-6 bg-card border border-border rounded-xl">
                 <h4 className="text-xl font-semibold mb-3">Quality Deliverance</h4>
                 <p className="text-muted-foreground leading-relaxed">
                   We deliver only premium quality products to our clients by bringing them compelling & profitable apps, while also meeting all there project expectations at the best industry price.
                 </p>
               </div>
               <div className="p-6 bg-card border border-border rounded-xl">
                 <h4 className="text-xl font-semibold mb-3">Dedication to every client</h4>
                 <p className="text-muted-foreground leading-relaxed">
                   From the first idea till the end of the development process, we believe each client is unique and should be treated with the best care possible.
                 </p>
               </div>
               <div className="p-6 bg-card border border-border rounded-xl">
                 <h4 className="text-xl font-semibold mb-3">Trust & Confidence</h4>
                 <p className="text-muted-foreground leading-relaxed">
                   We believe trust and confidence in our team is an engine to a productive and outstanding development lifecycle.
                 </p>
               </div>
             </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
