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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
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
                  123 Spice Street, Organic Plaza<br />
                  Mumbai, Maharashtra 400001<br />
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
                <a href="tel:+919876543210" className="text-sm text-gray-600 hover:text-amber-600 transition-colors block">
                  +91 98765 43210
                </a>
                <a href="tel:+912233445566" className="text-sm text-gray-600 hover:text-amber-600 transition-colors block">
                  +91 22 3344 5566
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
                <a href="mailto:support@taptifs.com" className="text-sm text-gray-600 hover:text-amber-600 transition-colors block">
                  support@taptifs.com
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8583761867895!2d72.82770431490185!3d19.074919387086968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c68507a4d9%3A0x54f4d0a9e1154899!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
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
                    href="https://wa.me/919876543210"
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
                    href="tel:+919876543210"
                    className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Call Now</p>
                      <p className="text-sm text-gray-600">+91 98765 43210</p>
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Facebook className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Instagram className="w-8 h-8 text-gray-600 group-hover:text-pink-600 transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Twitter className="w-8 h-8 text-gray-600 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-8 h-8 text-gray-600 group-hover:text-blue-700 transition-colors" />
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
