"use client"

import React from "react"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { FileText, ShoppingCart, Package, CreditCard, AlertCircle, Scale } from "lucide-react"

export default function TermsAndConditionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Terms &amp;
              <span className="block bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Please read these terms carefully before using our services
            </p>
            <p className="text-base text-gray-600">
              Last Updated: November 24, 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection direction="up" className="space-y-8">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Tapti Food & Spices (TAPTIFS™). These Terms and Conditions govern your use of our website and the purchase of products from us. By accessing our website or placing an order, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>

            {/* General Terms */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">General Terms</h2>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      By using our website and services, you confirm that:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>You are at least 18 years of age or have parental/guardian consent</li>
                      <li>You have the legal capacity to enter into binding contracts</li>
                      <li>All information you provide is accurate and complete</li>
                      <li>You will comply with all applicable laws and regulations</li>
                      <li>You will not use our services for any unlawful purpose</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Products and Pricing */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Products and Pricing</h2>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      <strong>Product Information:</strong> We strive to ensure that product descriptions, images, and prices on our website are accurate. However, we do not warrant that product descriptions or other content is error-free, complete, or current.
                    </p>
                    <p>
                      <strong>Pricing:</strong> All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise stated. We reserve the right to change prices at any time without prior notice.
                    </p>
                    <p>
                      <strong>Product Availability:</strong> All products are subject to availability. We reserve the right to limit quantities or discontinue any product at any time without notice.
                    </p>
                    <p>
                      <strong>Quality Assurance:</strong> All our products are 100% adulteration-free, sourced directly from our farms and trusted farmers, and comply with FSSAI standards (License No. 21425150001179).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders and Payment */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Orders and Payment</h2>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      <strong>Order Acceptance:</strong> Your order constitutes an offer to purchase our products. We reserve the right to accept or reject any order for any reason. We will send you a confirmation email once your order is accepted.
                    </p>
                    <p>
                      <strong>Payment:</strong> Payment must be made at the time of placing the order through our secure payment gateway or marketplace platforms (Amazon, Flipkart, Meesho). We accept various payment methods including credit/debit cards, UPI, net banking, and digital wallets.
                    </p>
                    <p>
                      <strong>Order Cancellation:</strong> We reserve the right to cancel any order before shipment in cases of:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Product unavailability</li>
                      <li>Pricing errors</li>
                      <li>Payment issues or suspected fraud</li>
                      <li>Delivery address issues</li>
                    </ul>
                    <p>
                      If your order is cancelled, any payment made will be refunded to the original payment method within 7-10 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping and Delivery */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Shipping and Delivery</h2>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      <strong>Delivery Areas:</strong> We currently deliver across India through our marketplace partners and direct shipping channels. International shipping may be available for select products.
                    </p>
                    <p>
                      <strong>Delivery Time:</strong> Estimated delivery times vary based on your location and the platform through which you order. Standard delivery typically takes 5-7 business days for direct orders and may vary for marketplace orders.
                    </p>
                    <p>
                      <strong>Shipping Costs:</strong> Shipping charges are calculated based on order value, weight, and delivery location. Free shipping may be offered on orders above a certain amount.
                    </p>
                    <p>
                      <strong>Risk of Loss:</strong> All items purchased are the responsibility of the buyer once delivered to the shipping address. We are not responsible for lost or stolen packages after successful delivery confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Returns and Refunds */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Returns and Refunds</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  Please refer to our dedicated <a href="/refund-policy" className="text-amber-600 hover:text-red-700 font-semibold underline">Refund and Cancellation Policy</a> for detailed information about returns, refunds, and cancellations.
                </p>
                <p>
                  In general, we accept returns within 7 days of delivery for damaged, defective, or incorrect products. Food items are non-returnable unless they arrive damaged or defective due to quality or safety concerns.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Intellectual Property Rights</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  All content on our website, including text, images, logos, graphics, and designs, is the property of Tapti Food & Spices (TAPTIFS™) and is protected by intellectual property laws.
                </p>
                <p>
                  You may not:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Copy, reproduce, or distribute any content without our written permission</li>
                  <li>Use our trademarks, logos, or brand name without authorization</li>
                  <li>Modify or create derivative works from our content</li>
                  <li>Use our content for commercial purposes without a license</li>
                </ul>
              </div>
            </div>

            {/* User Conduct */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">User Conduct and Prohibited Activities</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  You agree not to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Use our website for any illegal or unauthorized purpose</li>
                  <li>Violate any laws in your jurisdiction</li>
                  <li>Transmit viruses, malware, or harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of our website</li>
                  <li>Collect or harvest personal information of other users</li>
                  <li>Submit false, misleading, or fraudulent information</li>
                  <li>Impersonate any person or entity</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Limitation of Liability</h2>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      To the fullest extent permitted by law, Tapti Food & Spices (TAPTIFS™) shall not be liable for:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Any indirect, incidental, special, or consequential damages</li>
                      <li>Loss of profits, revenue, data, or business opportunities</li>
                      <li>Damages arising from use or inability to use our products or services</li>
                      <li>Errors or omissions in product information</li>
                      <li>Delays or failures in delivery caused by third parties</li>
                    </ul>
                    <p className="mt-3">
                      Our total liability for any claim arising from your use of our services shall not exceed the amount you paid for the product or service in question.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Food Safety and Health */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Food Safety and Health Disclaimer</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  While we ensure all products comply with FSSAI standards and are 100% adulteration-free, customers should:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Check for any personal allergies to ingredients before consumption</li>
                  <li>Follow storage instructions provided on product packaging</li>
                  <li>Consume products before the expiry date</li>
                  <li>Consult healthcare professionals for dietary advice if needed</li>
                </ul>
                <p className="mt-3">
                  We are not responsible for adverse reactions due to personal allergies or improper storage and use of products.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless Tapti Food & Spices (TAPTIFS™), its owners, employees, and partners from any claims, damages, liabilities, costs, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.
              </p>
            </div>

            {/* Governing Law */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Madhya Pradesh, India.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Changes to Terms and Conditions</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms. We encourage you to review these terms periodically.
              </p>
            </div>

            {/* Severability */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Tapti Food & Spices (TAPTIFS™)</strong></p>
                <p>Email: info@taptifs.com</p>
                <p>Phone: +91-93292 16544 | +91-97703 55137 | +91-83499 20943 | +91-76976 61798</p>
                <p>Address: Multai, Betul, Bhopal, Indore, Madhya Pradesh</p>
                <p>FSSAI License: 21425150001179</p>
                <p>GST No.: 23GGLPD7346M1ZZ</p>
                <p>UDYAM Registration: UDYAM-MP-08-0030813</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
