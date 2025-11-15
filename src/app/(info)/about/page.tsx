"use client"

import React from "react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection"
import { CountUpStat } from "@/components/shared/CountUpStat"
import { Timeline } from "@/components/shared/Timeline"
import { TeamMemberCard } from "@/components/shared/TeamMemberCard"
import { CertificationBadge } from "@/components/shared/CertificationBadge"
import { ClientsPartners } from "@/components/shared/ClientsPartners"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Heart,
  Leaf,
  Shield,
  Users,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  CheckCircle,
  Package,
  Globe,
  Sparkles,
} from "lucide-react"

export default function AboutPage() {
  const timelineItems = [
    {
      year: "2019",
      title: "The Beginning",
      description: "TAPTIFS was founded with a mission to make premium superfoods accessible to everyone. Started with a small team and big dreams.",
      icon: <Sparkles className="w-8 h-8 text-white" />,
    },
    {
      year: "2020",
      title: "First Milestone",
      description: "Reached 10,000 happy customers and expanded our product line to include organic spices and seeds from around the world.",
      icon: <Users className="w-8 h-8 text-white" />,
    },
    {
      year: "2021",
      title: "Quality Certified",
      description: "Received ISO 22000 certification and FSSAI approval, ensuring the highest quality standards for all our products.",
      icon: <Award className="w-8 h-8 text-white" />,
    },
    {
      year: "2022",
      title: "Going Global",
      description: "Expanded operations to serve customers across 50+ cities in India with plans for international expansion.",
      icon: <Globe className="w-8 h-8 text-white" />,
    },
    {
      year: "2023",
      title: "Innovation Hub",
      description: "Launched our research facility to develop new superfood blends and innovative healthy snack options.",
      icon: <Lightbulb className="w-8 h-8 text-white" />,
    },
    {
      year: "2024",
      title: "Sustainability Focus",
      description: "Committed to 100% sustainable packaging and partnered with local farmers to support organic farming practices.",
      icon: <Leaf className="w-8 h-8 text-white" />,
    },
  ]

  const teamMembers = [
    {
      name: "Mr. Akhilesh Deshmukh",
      role: "Founder & Proprietor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "B.Com (Economics), MBA (Business Analyst). Expertise in finance, business strategy, supply chain & quality management. Leads the overall growth, innovation, and vision of the company.",
      linkedin: "https://linkedin.com",
      email: "taptiagrofood@gmail.com",
    },
    {
      name: "Mr. Bhavesh Deshmukh",
      role: "Product Partnership & Marketing Head",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "B.Com, LLB. Expertise in business partnerships, sales & offline distribution. Handles product collaborations, retail sales & marketing strategies.",
      linkedin: "https://linkedin.com",
      email: "taptiagrofood@gmail.com",
    },
    {
      name: "Mr. Ayush Deshmukh",
      role: "Co-Founder & Procurement Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "B.Sc. Agriculture. Expertise in farming, agri-markets, vendor management. Manages raw material procurement, farmer connect & product quality.",
      linkedin: "https://linkedin.com",
      email: "taptiagrofood@gmail.com",
    },
    {
      name: "Mr. Dipanshu Deshmukh",
      role: "Sales & Market Expansion Head",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "B.Sc. Agriculture. Expertise in sales, customer relations, market expansion. Focuses on retail growth, distribution channels & regional markets.",
      linkedin: "https://linkedin.com",
      email: "taptiagrofood@gmail.com",
    },
    {
      name: "Ms. Pravina Sakre",
      role: "Social Media & Creative Marketing Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "B.Tech. Expertise in social media, branding, packaging design & eCommerce. Drives online presence, digital campaigns & creative strategies.",
      linkedin: "https://linkedin.com",
      email: "taptiagrofood@gmail.com",
    },
  ]

  const certifications = [
    {
      name: "FSSAI Licensed",
      description: "Licensed by Food Safety and Standards Authority of India (License No. 21425150001179) for quality assurance and food safety.",
      icon: <CheckCircle className="w-12 h-12 text-white" />,
    },
    {
      name: "GST Registered",
      description: "Registered under GST (No. 23GGLPD7346M1ZZ) ensuring transparency and compliance with Indian tax regulations.",
      icon: <Shield className="w-12 h-12 text-white" />,
    },
    {
      name: "Organic Certified",
      description: "Working with certified organic suppliers like Almighty Organics Pvt. Ltd. to ensure 100% organic authenticity.",
      icon: <Leaf className="w-12 h-12 text-white" />,
    },
    {
      name: "Quality Assured",
      description: "Hygienic processing and premium packaging with certified organic raw materials from trusted partners.",
      icon: <Package className="w-12 h-12 text-white" />,
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Our
              <span className="block bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                Story
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              A trusted food brand committed to delivering pure, authentic, and high-quality products.
              Sourced directly from our farms and trusted farmers, hygienically packed, and delivered with care.
              Now available on Amazon, Flipkart, Meesho, and expanding to retail stores across India.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <AnimatedSection direction="left">
              <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To deliver pure, natural, and healthy food products to every home—combining taste, health, and authenticity. We source directly from our own farms and trusted farmers, ensuring 100% adulteration-free products that bring traditional taste with modern trust.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  "The Taste of Purity" - To become a household name synonymous with pure, authentic, and high-quality food products. We are committed to expanding from online marketplaces to retail stores, making premium quality food accessible to every Indian household.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Our Impact
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CountUpStat
              end={6}
              suffix="+"
              label="Years of Excellence"
              icon={<Award className="w-12 h-12" />}
            />
            <CountUpStat
              end={50000}
              suffix="+"
              label="Happy Customers"
              icon={<Users className="w-12 h-12" />}
            />
            <CountUpStat
              end={100}
              suffix="+"
              label="Premium Products"
              icon={<Package className="w-12 h-12" />}
            />
            <CountUpStat
              end={50}
              suffix="+"
              label="Cities Served"
              icon={<Globe className="w-12 h-12" />}
            />
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in superfoods
            </p>
          </AnimatedSection>

          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Customer First</h3>
                <p className="text-gray-600">
                  Every decision we make starts with our customers' health and satisfaction in mind.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every product is rigorously tested and certified.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  Committed to eco-friendly practices and supporting sustainable farming communities.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Constantly researching and developing new products to meet evolving health needs.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
                <p className="text-gray-600">
                  Building a community of health-conscious individuals supporting each other's wellness journey.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Transparency</h3>
                <p className="text-gray-600">
                  Complete transparency in sourcing, pricing, and production processes.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              The passionate people behind TAPTIFS, dedicated to bringing you the finest superfoods
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1} direction="up">
                <TeamMemberCard member={member} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Partners */}
      <ClientsPartners />

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Quality Certifications
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Certified excellence you can trust
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <StaggerItem key={index}>
                <CertificationBadge certification={cert} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join thousands of satisfied customers who have transformed their lives with TAPTIFS superfoods
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl">
                  Shop Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-10 py-6 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
