import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with the API key from environment variables.
// If RESEND_API_KEY is not set (e.g., during build or if missing in Vercel), it won't crash on init, but will fail on send.
const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, phone, subject } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields' },
        { status: 400 }
      )
    }

    // Only attempt to send an email if a real API key is configured
    if (process.env.RESEND_API_KEY) {
      const { error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', // Update this to a verified domain on Resend later
        to: ['info@widle.studio'],
        subject: `New Contact Inquiry: ${subject || 'widle.ai Website'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error('Resend error sending email:', error);
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        )
      }
    } else {
      console.log("Mock Email Sent (RESEND_API_KEY not set):", { name, email, phone, subject, message })
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with the API key from environment variables.
// If RESEND_API_KEY is not set (e.g., during build or if missing in Vercel), it won't crash on init, but will fail on send.
const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key');

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, phone, subject } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields' },
        { status: 400 }
      )
    }

    // Only attempt to send an email if a real API key is configured
    if (process.env.RESEND_API_KEY) {
      const { error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', // Update this to a verified domain on Resend later
        to: ['info@widle.ai'],
        subject: `New Contact Inquiry: ${subject || 'widle.ai Website'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error('Resend error sending email:', error);
        return NextResponse.json(
          { error: 'Failed to send email' },
          { status: 500 }
        )
      }
    } else {
      console.log("Mock Email Sent (RESEND_API_KEY not set):", { name, email, phone, subject, message })
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
