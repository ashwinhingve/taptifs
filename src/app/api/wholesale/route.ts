import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessName, contactName, email, phone, productInterest, estimatedQuantity, message } = body

    // Validate required fields
    if (!businessName || !contactName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `Wholesale Inquiry from ${businessName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706; border-bottom: 3px solid #dc2626; padding-bottom: 10px;">
            New Wholesale Inquiry
          </h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Business Information</h3>
            <p><strong>Business Name:</strong> ${businessName}</p>
            <p><strong>Contact Person:</strong> ${contactName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #d97706; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Order Details</h3>
            <p><strong>Product Interest:</strong> ${productInterest || "Not specified"}</p>
            <p><strong>Estimated Quantity:</strong> ${estimatedQuantity || "Not specified"}</p>
          </div>
          ${message ? `
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">Additional Message:</h3>
              <p style="line-height: 1.6; color: #6b7280;">${message}</p>
            </div>
          ` : ''}
          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px;">
            This inquiry was sent from the TAPTIFS wholesale page.
          </p>
        </div>
      `,
    }

    // Confirmation email to customer
    const customerMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: "Thank you for your Wholesale Inquiry - TAPTIFS",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">Thank You for Your Wholesale Inquiry!</h2>
          <p>Dear ${contactName},</p>
          <p>We have received your wholesale inquiry for <strong>${businessName}</strong> and our team will review it shortly.</p>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Inquiry Details:</h3>
            <p><strong>Product Interest:</strong> ${productInterest || "Not specified"}</p>
            <p><strong>Estimated Quantity:</strong> ${estimatedQuantity || "Not specified"}</p>
          </div>
          <p>Our wholesale team will contact you within 24-48 hours to discuss:</p>
          <ul style="line-height: 1.8; color: #6b7280;">
            <li>Pricing and volume discounts</li>
            <li>Minimum order quantities</li>
            <li>Delivery schedules</li>
            <li>Payment terms</li>
          </ul>
          <p>If you have any urgent questions, please don't hesitate to contact us.</p>
          <p>Best regards,<br>The TAPTIFS Wholesale Team</p>
        </div>
      `,
    }

    // Send emails (only if SMTP is configured)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(adminMailOptions)
      await transporter.sendMail(customerMailOptions)
    } else {
      console.log("SMTP not configured. Wholesale inquiry:", { businessName, contactName, email, phone, productInterest, estimatedQuantity })
    }

    return NextResponse.json(
      { message: "Wholesale inquiry sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Wholesale form error:", error)
    return NextResponse.json(
      { error: "Failed to send inquiry" },
      { status: 500 }
    )
  }
}
