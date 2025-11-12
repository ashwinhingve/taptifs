"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection"
import { CountUpStat } from "@/components/shared/CountUpStat"
import { ProcessStep } from "@/components/shared/ProcessStep"
import { FAQAccordion } from "@/components/shared/FAQAccordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { PhoneInput } from "@/components/ui/phone-input"
import { FormField } from "@/components/ui/form-field"
import { Button } from "@/components/ui/button"
import { products } from "@/data/products"
import {
  Package,
  TruckIcon,
  Shield,
  HeadphonesIcon,
  Building2,
  Users,
  Award,
  CheckCircle2,
  FileText
} from "lucide-react"

// Form validation schema
const wholesaleSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().min(10, "Please enter a valid phone number"),
  productInterest: z.string().optional(),
  productList: z.string().optional(),
  estimatedQuantity: z.string().optional(),
  message: z.string().optional(),
})

type WholesaleFormData = z.infer<typeof wholesaleSchema>

export default function WholesalePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WholesaleFormData>({
    resolver: zodResolver(wholesaleSchema),
  })

  const onSubmit = async (data: WholesaleFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      console.log("Submitting wholesale inquiry:", data)
      const response = await fetch("/api/wholesale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log("API Response:", result)

      if (response.ok) {
        console.log("✓ Wholesale inquiry submitted successfully")
        setSubmitStatus("success")
        reset()
      } else {
        console.error("❌ Error submitting wholesale inquiry:", result)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("❌ Network error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const processSteps = [
    {
      number: 1,
      title: "Submit Inquiry",
      description: "Fill out our wholesale inquiry form with your business details and requirements.",
    },
    {
      number: 2,
      title: "Get Quote",
      description: "Our team will contact you within 24-48 hours with a customized quote and pricing.",
    },
    {
      number: 3,
      title: "Place Order",
      description: "Review terms, place your order, and we'll prepare your products for delivery.",
    },
    {
      number: 4,
      title: "Delivery",
      description: "Receive your bulk order with our reliable shipping and ongoing support.",
    },
  ]

  const faqItems = [
    {
      question: "What is the minimum order quantity for wholesale?",
      answer: "Our minimum order quantity varies by product category. Generally, we require a minimum order of 50 units or ₹25,000 worth of products. Please contact our wholesale team for specific product MOQs.",
    },
    {
      question: "Do you offer volume discounts?",
      answer: "Yes! We offer tiered pricing based on order volume. The more you order, the better the price. Discounts range from 15% for smaller wholesale orders up to 40% for large volume purchases.",
    },
    {
      question: "What are the payment terms?",
      answer: "We offer flexible payment terms including advance payment for new customers, and NET 30-60 days terms for established business partners with verified credentials.",
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 3-7 business days depending on your location. We also offer express shipping options for urgent orders. All deliveries include tracking information.",
    },
    {
      question: "Can I get product samples before placing a bulk order?",
      answer: "Absolutely! We provide product samples for qualified wholesale inquiries. Sample costs may apply but are often credited back on your first bulk order.",
    },
    {
      question: "Do you provide private labeling or white labeling?",
      answer: "Yes, we offer private labeling services for bulk orders. Minimum quantities and setup fees apply. Contact our wholesale team to discuss your branding requirements.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Wholesale
              <span className="block bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Partner with TAPTIFS for premium quality superfoods at wholesale prices.
              Perfect for retailers, restaurants, and health-focused businesses.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl"
              onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
                <p className="text-gray-600">
                  100% authentic superfoods sourced directly from trusted suppliers with quality certifications.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TruckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">
                  Reliable nationwide shipping with order tracking and timely delivery guaranteed.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible Terms</h3>
                <p className="text-gray-600">
                  Competitive pricing with volume discounts and flexible payment options for partners.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <HeadphonesIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Dedicated Support</h3>
                <p className="text-gray-600">
                  Personal account manager and 24/7 customer support for all your wholesale needs.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <CountUpStat
              end={500}
              suffix="+"
              label="Business Partners"
              icon={<Building2 className="w-12 h-12" />}
            />
            <CountUpStat
              end={10000}
              suffix="+"
              label="Products Delivered"
              icon={<Package className="w-12 h-12" />}
            />
            <CountUpStat
              end={50}
              suffix="+"
              label="Cities Covered"
              icon={<TruckIcon className="w-12 h-12" />}
            />
            <CountUpStat
              end={1200}
              suffix="+"
              label="Farmers"
              icon={<Users className="w-12 h-12" />}
            />
            <CountUpStat
              end={98}
              suffix="%"
              label="Satisfaction Rate"
              icon={<Award className="w-12 h-12" />}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Our simple 4-step process makes wholesale ordering easy and efficient
            </p>
          </AnimatedSection>

          <ProcessStep steps={processSteps} />
        </div>
      </section>

      {/* Wholesale Inquiry Form */}
      <section id="inquiry-form" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Request a Quote
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Fill out the form below and our wholesale team will get back to you within 24-48 hours
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="First Name" required error={errors.firstName?.message}>
                    <Input {...register("firstName")} placeholder="Contact First Name" error={errors.firstName?.message} />
                  </FormField>

                  <FormField label="Last Name (Optional)" error={errors.lastName?.message}>
                    <Input {...register("lastName")} placeholder="Contact Last Name" error={errors.lastName?.message} />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Phone Number" required error={errors.phone?.message}>
                    <PhoneInput {...register("phone")} placeholder="+91 XXXXX XXXXX" error={errors.phone?.message} />
                  </FormField>

                  <FormField label="Email Address (Optional)" error={errors.email?.message}>
                    <Input {...register("email")} type="email" placeholder="your@email.com" error={errors.email?.message} />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Product Interest (Optional)" error={errors.productInterest?.message}>
                    <Select
                      {...register("productInterest")}
                      error={errors.productInterest?.message}
                      options={[
                        { value: "", label: "Select a category" },
                        { value: "Spices", label: "Spices" },
                        { value: "Spices & Masalas", label: "Spices & Masalas" },
                        { value: "Sweeteners", label: "Sweeteners" },
                        { value: "Superfoods", label: "Superfoods" },
                        { value: "Pulses & Grains", label: "Pulses & Grains" },
                        { value: "Dry Fruits", label: "Dry Fruits" },
                        { value: "Ayurvedic", label: "Ayurvedic" },
                        { value: "Specialty Powders", label: "Specialty Powders" },
                        { value: "Tea & Beverages", label: "Tea & Beverages" },
                        { value: "Cooking Oils & Ghee", label: "Cooking Oils & Ghee" },
                        { value: "all", label: "All Products" },
                      ]}
                    />
                  </FormField>

                  <FormField label="Estimated Quantity (Optional)" error={errors.estimatedQuantity?.message}>
                    <Input
                      {...register("estimatedQuantity")}
                      placeholder="e.g., 100 units, 500kg, etc."
                      error={errors.estimatedQuantity?.message}
                    />
                  </FormField>
                </div>

                <FormField label="Product List" error={errors.productList?.message}>
                  <Select
                    {...register("productList")}
                    error={errors.productList?.message}
                    options={[
                      { value: "", label: "Select a product" },
                      ...products.map(product => ({
                        value: product.name,
                        label: `${product.name} (${product.weight}${product.unit})`
                      }))
                    ]}
                  />
                </FormField>

                <FormField label="Additional Message (Optional)">
                  <Textarea
                    {...register("message")}
                    placeholder="Tell us about your requirements, delivery timeline, or any specific needs..."
                    className="min-h-[120px]"
                  />
                </FormField>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-800 p-4 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Thank you for your inquiry!</p>
                      <p className="text-sm">Our wholesale team will contact you within 24-48 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border-2 border-red-500 text-red-800 p-4 rounded-lg">
                    <p className="font-semibold">Error submitting form</p>
                    <p className="text-sm">Please try again or contact us directly.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
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
    </main>
  )
}
