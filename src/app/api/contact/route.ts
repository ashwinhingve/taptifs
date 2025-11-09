import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create transporter (configure with your email service)
    // For production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `Contact Form: ${subject || "New Message"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706; border-bottom: 3px solid #dc2626; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #d97706; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Message:</h3>
            <p style="line-height: 1.6; color: #6b7280;">${message}</p>
          </div>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px;">
            This email was sent from the TAPTIFS contact form.
          </p>
        </div>
      `,
    }

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: "Thank you for contacting TAPTIFS",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">Thank You for Contacting Us!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="line-height: 1.6; color: #6b7280;">${message}</p>
          </div>
          <p>Best regards,<br>The TAPTIFS Team</p>
        </div>
      `,
    }

    // Send emails (only if SMTP is configured)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(adminMailOptions)
      await transporter.sendMail(userMailOptions)
    } else {
      console.log("SMTP not configured. Email content:", { name, email, phone, subject, message })
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
