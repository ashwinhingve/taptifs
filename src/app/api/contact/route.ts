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

    // Email to admin - ALWAYS send to info@taptifs.com
    const adminEmail = process.env.ADMIN_EMAIL || "info@taptifs.com"
    const adminMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: adminEmail,
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
      try {
        // Always send to admin (info@taptifs.com)
        console.log(`Sending contact form to: ${adminEmail}`)
        await transporter.sendMail(adminMailOptions)
        console.log(`✓ Contact form sent successfully to ${adminEmail}`)

        // Send confirmation email to user
        await transporter.sendMail(userMailOptions)
        console.log(`✓ Confirmation email sent to customer: ${email}`)
      } catch (emailError) {
        console.error("Error sending email:", emailError)
        throw emailError
      }
    } else {
      console.error("⚠️  SMTP NOT CONFIGURED - Emails cannot be sent!")
      console.error("⚠️  Please configure SMTP settings in .env.local file:")
      console.error("    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS")
      console.log("Contact form data (NOT SENT):", {
        to: adminEmail,
        from: name,
        email,
        phone,
        subject,
        message
      })
      // Don't throw error - still return success to user but log the issue
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("❌ Contact form error:", error)
    console.error("Error details:", {
      message: error?.message,
      code: error?.code,
      response: error?.response
    })

    return NextResponse.json(
      {
        error: "Failed to send message",
        details: error?.message || "Unknown error",
        code: error?.code
      },
      { status: 500 }
    )
  }
}
