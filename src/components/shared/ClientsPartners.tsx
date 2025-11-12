"use client"

import React from "react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection"
import { Handshake, Award, Leaf, Globe, Gem } from "lucide-react"

interface Partner {
  name: string
  description: string
  icon: React.ReactNode
  color: string
}

const partners: Partner[] = [
  {
    name: "Yashodhara International Pvt. Ltd.",
    description: "National & International Marketing Partner",
    icon: <Globe className="w-12 h-12 text-white" />,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Almighty Organics Pvt. Ltd.",
    description: "Certified Organic Supplier",
    icon: <Leaf className="w-12 h-12 text-white" />,
    color: "from-green-500 to-green-700",
  },
  {
    name: "Deshmukh & Co.",
    description: "Retail Sales Partner",
    icon: <Handshake className="w-12 h-12 text-white" />,
    color: "from-amber-500 to-amber-700",
  },
  {
    name: "Space Automation",
    description: "Website & eCommerce Partner",
    icon: <Award className="w-12 h-12 text-white" />,
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Royal Saffron (Nowhatta, Kashmir)",
    description: "Supplier of 100% Original, Lab-Tested Saffron & Shilajit (Self-grown & authentically sourced)",
    icon: <Gem className="w-12 h-12 text-white" />,
    color: "from-red-500 to-red-700",
  },
]

export function ClientsPartners() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
            Our Clients & Partners
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Trusted partnerships that strengthen our commitment to quality and help us deliver the best products to your doorstep
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  {partner.icon}
                </div>

                {/* Partner Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {partner.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed flex-grow">
                  {partner.description}
                </p>

                {/* Decorative bottom accent */}
                <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${partner.color} mx-auto rounded-full group-hover:w-full transition-all duration-300`}></div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Statement */}
        <AnimatedSection direction="up" className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 shadow-lg border-2 border-amber-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-amber-700">Building relationships based on trust:</span> Our partners share our vision of delivering 100% pure, adulteration-free products. Together, we are committed to bringing the taste of purity to every home across India.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
