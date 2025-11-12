"use client"

import React from "react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection"
import { Tractor, Package, Globe2, ShieldCheck } from "lucide-react"

interface Service {
  title: string
  description: string[]
  icon: React.ReactNode
  gradient: string
}

const services: Service[] = [
  {
    title: "Product Sourcing & Farming",
    description: [
      "Direct sourcing from our own farms and trusted farmers",
      "Organic and natural farming practices",
    ],
    icon: <Tractor className="w-10 h-10 text-white" />,
    gradient: "from-green-500 to-green-700",
  },
  {
    title: "Private Label & Bulk Supply",
    description: [
      "Bulk orders for retailers, wholesalers, and distributors",
      "Customized packaging & private labeling for partners",
    ],
    icon: <Package className="w-10 h-10 text-white" />,
    gradient: "from-amber-500 to-amber-700",
  },
  {
    title: "Online & Offline Distribution",
    description: [
      "Availability on Amazon, Flipkart, Meesho",
      "Expanding to retail shops and supermarkets",
    ],
    icon: <Globe2 className="w-10 h-10 text-white" />,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Quality Assurance & Packaging",
    description: [
      "100% adulteration-free products",
      "Hygienic, premium, and eco-friendly packaging",
    ],
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    gradient: "from-red-500 to-red-700",
  },
]

export function ServicesShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Comprehensive solutions from farm to kitchen, ensuring quality at every step
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-gray-100 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <ul className="space-y-3 flex-grow">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}></span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection direction="up" className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Interested in partnering with us or ordering in bulk?
            </p>
            <a
              href="/wholesale"
              className="inline-block bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us for Wholesale Inquiries
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
