"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection"
import { FAQAccordion } from "@/components/shared/FAQAccordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneInput } from "@/components/ui/phone-input"
import { FormField } from "@/components/ui/form-field"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/home/WhatsAppButton"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      console.log("Submitting contact form:", data)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log("API Response:", result)

      if (response.ok) {
        console.log("✓ Contact form submitted successfully")
        setSubmitStatus("success")
        reset()
      } else {
        console.error("❌ Error submitting contact form:", result)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("❌ Network error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqItems = [
    {
      question: "What are your business hours?",
      answer: "We're open Monday to Saturday from 9:00 AM to 6:00 PM IST. We're closed on Sundays and national holidays. However, you can reach us via email 24/7, and we'll respond within 24 hours.",
    },
    {
      question: "How quickly can I expect a response?",
      answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly or use our WhatsApp contact for faster response.",
    },
    {
      question: "Do you have a physical store I can visit?",
      answer: "Yes! We welcome visitors to our main office and showroom. Please schedule an appointment in advance to ensure someone is available to assist you properly.",
    },
    {
      question: "Can I track my order status through this contact form?",
      answer: "For order tracking, please use your order number and email on our Track Order page. For specific order inquiries, you can contact us through this form or call our customer service.",
    },
    {
      question: "Do you provide bulk order quotes via this form?",
      answer: "For wholesale and bulk order inquiries, please use our dedicated Wholesale page for faster processing and detailed quotes from our wholesale team.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Get In
              <span className="block bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Have questions? We're here to help! Reach out to us through any of the channels below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <StaggerItem>
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Visit Us</h3>
                <p className="text-sm text-gray-600">
                  Multai | Betul | Bhopal | Indore<br />
                  Madhya Pradesh<br />
                  India
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Call Us</h3>
                <a href="tel:+919329216544" className="text-sm text-gray-600 hover:text-amber-600 transition-colors block">
                  +91 93292 16544
                </a>
                <a href="tel:+919770355137" className="text-sm text-gray-600 hover:text-amber-600 transition-colors block">
                  +91 97703 55137
                </a>
                <a href="tel:+918349920943" className="text-sm text-gray-600 hover:text-amber-600 transition-colors block">
                  +91 83499 20943
                </a>
                <a href="tel:+917697661798" className="text-sm text-gray-600 hover:text-amber-600 transition-colors block">
                  +91 76976 61798
                </a>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Email Us</h3>
                <a href="mailto:info@taptifs.com" className="text-sm text-gray-600 hover:text-amber-600 transition-colors block">
                  info@taptifs.com
                </a>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Business Hours</h3>
                <p className="text-sm text-gray-600">
                  Mon - Sat: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Form and Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <FormField label="Your Name" required error={errors.name?.message}>
                    <Input {...register("name")} placeholder="John Doe" error={errors.name?.message} />
                  </FormField>

                  <FormField label="Email Address" required error={errors.email?.message}>
                    <Input {...register("email")} type="email" placeholder="john@example.com" error={errors.email?.message} />
                  </FormField>

                  <FormField label="Phone Number" required error={errors.phone?.message}>
                    <PhoneInput {...register("phone")} placeholder="+91 XXXXX XXXXX" error={errors.phone?.message} />
                  </FormField>

                  <FormField label="Subject" required error={errors.subject?.message}>
                    <Input {...register("subject")} placeholder="How can we help you?" error={errors.subject?.message} />
                  </FormField>

                  <FormField label="Message" required error={errors.message?.message}>
                    <Textarea
                      {...register("message")}
                      placeholder="Tell us more about your inquiry..."
                      error={errors.message?.message}
                      className="min-h-[150px]"
                    />
                  </FormField>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border-2 border-green-500 text-green-800 p-4 rounded-lg flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Message sent successfully!</p>
                        <p className="text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border-2 border-red-500 text-red-800 p-4 rounded-lg">
                      <p className="font-semibold">Error sending message</p>
                      <p className="text-sm">Please try again or contact us directly.</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map and Additional Info */}
            <AnimatedSection direction="right" className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14406.4072885761!2d78.02322538364692!3d21.697417993691133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5dbf06129a6b3%3A0xdccc4f57b964f5b5!2sDESHMUKH%20FARM%20HOUSE%20%F0%9F%8F%A0!5e0!3m2!1sen!2sin!4v1762940168403!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TAPTIFS Location"
                ></iframe>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919329216544"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <p className="text-sm text-gray-600">Chat with us instantly</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919329216544"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Call Now</p>
                      <p className="text-sm text-gray-600">+91 93292 16544</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@taptifs.com"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email Us</p>
                      <p className="text-sm text-gray-600">info@taptifs.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Follow Us
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Stay connected with us on social media for updates, recipes, and health tips
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up">
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://www.facebook.com/share/1ALNnyV4yz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Facebook className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/taptifoodspices/?utm_source=qr&igsh=dXIxb2ZzemM1ZXZ4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Instagram className="w-8 h-8 text-gray-600 group-hover:text-pink-600 transition-colors" />
              </a>
              <a
                href="https://x.com/Tapti_food"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919329216544"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </AnimatedSection>

          <AnimatedSection direction="up" className="max-w-4xl mx-auto">
            <FAQAccordion items={faqItems} />
          </AnimatedSection>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  )
}
