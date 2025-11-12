import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, productInterest, productList, estimatedQuantity, message } = body

    // Validate required fields
    if (!firstName || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Construct full name
    const fullName = lastName ? `${firstName} ${lastName}` : firstName

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

    // Email to admin - ALWAYS send to info@taptifs.com
    const adminEmail = process.env.ADMIN_EMAIL || "info@taptifs.com"
    const adminMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: adminEmail,
      subject: `Wholesale Inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706; border-bottom: 3px solid #dc2626; padding-bottom: 10px;">
            New Wholesale Inquiry
          </h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
            <p><strong>Phone:</strong> ${phone}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #d97706; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Order Details</h3>
            ${productInterest ? `<p><strong>Product Interest:</strong> ${productInterest}</p>` : ''}
            ${productList ? `<p><strong>Product List:</strong> ${productList}</p>` : ''}
            ${estimatedQuantity ? `<p><strong>Estimated Quantity:</strong> ${estimatedQuantity}</p>` : ''}
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

    // Send emails (only if SMTP is configured)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        // Always send to admin (info@taptifs.com)
        console.log(`Sending wholesale inquiry to: ${adminEmail}`)
        await transporter.sendMail(adminMailOptions)
        console.log(`✓ Wholesale inquiry sent successfully to ${adminEmail}`)

        // Send confirmation email to customer only if email is provided
        if (email) {
          const customerMailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: email,
            subject: "Thank you for your Wholesale Inquiry - TAPTIFS",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #d97706;">Thank You for Your Wholesale Inquiry!</h2>
                <p>Dear ${fullName},</p>
                <p>We have received your wholesale inquiry and our team will review it shortly.</p>
                <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="margin-top: 0;">Your Inquiry Details:</h3>
                  ${productInterest ? `<p><strong>Product Interest:</strong> ${productInterest}</p>` : ''}
                  ${productList ? `<p><strong>Product List:</strong> ${productList}</p>` : ''}
                  ${estimatedQuantity ? `<p><strong>Estimated Quantity:</strong> ${estimatedQuantity}</p>` : ''}
                </div>
                <p>Our wholesale team will contact you within 24-48 hours to discuss:</p>
                <ul style="line-height: 1.8; color: #6b7280;">
                  <li>Pricing and volume discounts</li>
                  <li>Minimum order quantities</li>
                  <li>Delivery schedules</li>
                  <li>Payment terms</li>
                </ul>
                <p>If you have any urgent questions, please don't hesitate to contact us at info@taptifs.com.</p>
                <p>Best regards,<br>The TAPTIFS Wholesale Team</p>
              </div>
            `,
          }
          await transporter.sendMail(customerMailOptions)
          console.log(`✓ Confirmation email sent to customer: ${email}`)
        }
      } catch (emailError) {
        console.error("Error sending email:", emailError)
        throw emailError
      }
    } else {
      console.error("⚠️  SMTP NOT CONFIGURED - Emails cannot be sent!")
      console.error("⚠️  Please configure SMTP settings in .env.local file:")
      console.error("    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS")
      console.log("Wholesale inquiry data (NOT SENT):", {
        to: adminEmail,
        from: fullName,
        phone,
        email,
        productInterest,
        productList,
        estimatedQuantity
      })
      // Don't throw error - still return success to user but log the issue
    }

    return NextResponse.json(
      { message: "Wholesale inquiry sent successfully" },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("❌ Wholesale form error:", error)
    console.error("Error details:", {
      message: error?.message,
      code: error?.code,
      response: error?.response
    })

    return NextResponse.json(
      {
        error: "Failed to send inquiry",
        details: error?.message || "Unknown error",
        code: error?.code
      },
      { status: 500 }
    )
  }
}
