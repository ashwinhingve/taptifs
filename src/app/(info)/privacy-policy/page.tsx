"use client"

import React from "react"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Shield, Lock, Eye, UserCheck, Database, Mail } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Privacy
              <span className="block bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Your privacy is important to us
            </p>
            <p className="text-base text-gray-600">
              Last Updated: November 24, 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection direction="up" className="space-y-8">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Tapti Food & Spices (TAPTIFS™) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us through our online platforms including Amazon, Flipkart, and Meesho.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Information We Collect</h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                      <p className="leading-relaxed">
                        When you place an order or contact us, we may collect personal information such as:
                      </p>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>Name and contact information (email address, phone number)</li>
                        <li>Billing and shipping address</li>
                        <li>Payment information (processed securely through payment gateways)</li>
                        <li>Order history and preferences</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Automatically Collected Information</h3>
                      <p className="leading-relaxed">
                        When you visit our website, we may automatically collect certain information about your device, including:
                      </p>
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                        <li>IP address and browser type</li>
                        <li>Operating system and device information</li>
                        <li>Referring URLs and pages visited</li>
                        <li>Date and time of visits</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about your orders and inquiries</li>
                    <li>Send promotional emails about new products and special offers (with your consent)</li>
                    <li>Improve our website and customer service</li>
                    <li>Prevent fraudulent transactions and ensure security</li>
                    <li>Comply with legal obligations and regulations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Information Sharing and Disclosure</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, shipping partners, email services)</li>
                    <li><strong>Marketplace Platforms:</strong> Amazon, Flipkart, and Meesho for order processing and fulfillment</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Data Security</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights and Choices</h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications at any time</li>
                  <li>Request information about the data we hold about you</li>
                  <li>Withdraw consent where we rely on consent to process your data</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, please contact us at info@taptifs.com or call us at +91-93292 16544.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings, though disabling cookies may affect website functionality.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites, including Amazon, Flipkart, and Meesho. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new &quot;Last Updated&quot; date.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Tapti Food & Spices (TAPTIFS™)</strong></p>
                    <p>Email: info@taptifs.com</p>
                    <p>Phone: +91-93292 16544 | +91-97703 55137 | +91-83499 20943 | +91-76976 61798</p>
                    <p>Address: Multai, Betul, Bhopal, Indore, Madhya Pradesh</p>
                    <p>FSSAI License: 21425150001179</p>
                    <p>GST No.: 23GGLPD7346M1ZZ</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
