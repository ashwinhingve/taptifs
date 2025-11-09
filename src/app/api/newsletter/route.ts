import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
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

    // Email to admin (to track newsletter subscriptions)
    const adminMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706;">New Newsletter Subscriber</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    // Welcome email to subscriber
    const welcomeMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: "Welcome to TAPTIFS Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #d97706 0%, #dc2626 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">Welcome to TAPTIFS!</h1>
          </div>
          <div style="background: white; padding: 40px; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; line-height: 1.6;">Thank you for subscribing to our newsletter!</p>
            <p style="line-height: 1.6; color: #6b7280;">
              You'll now receive exclusive updates about:
            </p>
            <ul style="line-height: 1.8; color: #6b7280;">
              <li>New superfood products</li>
              <li>Special promotions and discounts</li>
              <li>Healthy recipes and tips</li>
              <li>Wellness advice from our experts</li>
            </ul>
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="margin: 0; color: #374151;">
                <strong>Get 10% off your first order!</strong><br>
                Use code: <span style="color: #d97706; font-size: 18px; font-weight: bold;">WELCOME10</span>
              </p>
            </div>
            <p style="text-align: center; margin-top: 30px;">
              <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/products" style="background: linear-gradient(135deg, #d97706 0%, #dc2626 100%); color: white; padding: 12px 32px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                Start Shopping
              </a>
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 40px; text-align: center;">
              You're receiving this email because you subscribed to TAPTIFS newsletter.<br>
              If you wish to unsubscribe, please click <a href="#" style="color: #d97706;">here</a>.
            </p>
          </div>
        </div>
      `,
    }

    // Send emails (only if SMTP is configured)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(adminMailOptions)
      await transporter.sendMail(welcomeMailOptions)
    } else {
      console.log("SMTP not configured. Newsletter subscription:", email)
    }

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    )
  }
}
