# widle.ai Quickstart & Access Guide

Welcome to the newly rebuilt widle.ai platform! This document outlines how to access all the frontend pages, how to log in to the admin CMS, and how to manage the content of your website.

---

## 🌍 Frontend Pages (Public)

The website is fully deployed and accessible to the public. Here are the main routes you can visit:

*   **Homepage:** [`/`](/) - The main landing page featuring the hero section, dynamic services, case studies, partner logos, and testimonials.
*   **Services Listing (To be built if needed):** `/services`
*   **Dynamic Service Detail Pages:** `/services/[slug]`
    *   *Examples:* `/services/llms-rag`, `/services/ai-agents`, `/services/mlops`, `/services/computer-vision`, `/services/predictive-analytics`, `/services/ai-consulting`
*   **Case Studies Listing (To be built if needed):** `/case-studies`
*   **Dynamic Case Study Detail Pages:** `/case-studies/[slug]`
    *   *Examples:* `/case-studies/medtech-ai-diagnostics`, `/case-studies/fintech-fraud-detection`, `/case-studies/retail-demand-forecasting`
*   **AI Readiness Quiz:** [`/ai-readiness-quiz`](/ai-readiness-quiz) - An interactive 5-question quiz that captures leads and sends a personalized email via Resend.
*   **Contact/Lead Capture (API):** `/api/contact` - Accepts POST requests from the frontend forms.

---

## 🔐 Admin CMS Panel

The custom Content Management System (CMS) allows you to manage the data that dynamically populates the frontend website.

### How to Access the Admin Panel:

1.  Navigate to the login page: **[`/admin/login`](/admin/login)**
2.  By default (as configured in the code for easy access while testing), you can use the dummy credentials:
    *   **Email:** `admin@widle.ai`
    *   **Password:** `password`
3.  Click "Sign in" and you will be redirected to the main dashboard.

*(Note: To use true, secure Supabase authentication in production, you will need to add real users in your Supabase Dashboard under Authentication -> Users, and remove the "dummy login" override in `app/admin/login/page.tsx`)*.

### CMS Features:

*   **Dashboard (`/admin`):** View real-time counts of your Services, Case Studies, Posts, and Leads, along with a recent activity feed.
*   **Services (`/admin/services`):**
    *   View all services.
    *   Click "Add Service" to create a new one using the form (Title, Slug, Status).
    *   Edit or Delete existing services.
*   **Case Studies (`/admin/case-studies`):**
    *   View all case studies and their thumbnails.
    *   Click the **Publish Toggle** to instantly switch a case study from "Draft" to "Published" (which makes it visible on the public frontend).
    *   Upload images directly to the Supabase `images` storage bucket using the Add/Edit forms.
*   **Blog Posts (`/admin/posts`):**
    *   Manage your articles and easily toggle their published status.
*   **Leads (`/admin/leads`):**
    *   View all captured leads from the AI Readiness Quiz and Contact forms in one unified table.
*   **Testimonials (`/admin/testimonials`):**
    *   View all client testimonials.
    *   Use the **Drag-and-Drop** handle (the 6-dot icon on the left of each row) to reorder how the testimonials appear in the frontend carousel.

---

## 🛠 Required Environment Variables

For the application to function correctly in production (and for local development), ensure the following environment variables are set in your `.env.local` file (or in the Render dashboard):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Neon PostgreSQL Connection (Used by the server-side API routes)
DATABASE_URL=your_neon_postgres_connection_string

# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key

# Optional: Custom CRM Webhook (Stitch)
STITCH_WEBHOOK_URL=your_webhook_url

# Site URL for SEO and Sitemap generation
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 🤖 The AI Chatbot

The website now features a sticky AI chatbot in the bottom right corner of all pages.
*   It is powered by the **Vercel AI SDK** and **OpenAI's `gpt-4o-mini`**.
*   It uses a custom system prompt to act as an enterprise AI sales assistant for widle.ai.
*   *Note: Ensure you have an `OPENAI_API_KEY` configured in your environment variables for this feature to work properly.*
