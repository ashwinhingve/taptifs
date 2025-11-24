"use client"

import React from "react"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { RefreshCw, XCircle, CheckCircle, Clock, AlertTriangle, Phone } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Refund &amp;
              <span className="block bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                Cancellation Policy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Your satisfaction is our priority
            </p>
            <p className="text-base text-gray-600">
              Last Updated: November 24, 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection direction="up" className="space-y-8">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At Tapti Food & Spices (TAPTIFS™), we are committed to ensuring your complete satisfaction with every purchase. This Refund and Cancellation Policy outlines the terms and conditions for order cancellations, returns, and refunds. Please read this policy carefully before placing an order.
              </p>
            </div>

            {/* Order Cancellation */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Order Cancellation Policy</h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Cancellation by Customer</h3>
                      <p className="mb-2">
                        You may cancel your order under the following conditions:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Before Shipment:</strong> Orders can be cancelled free of charge any time before the product is shipped. To cancel, please contact us immediately at info@taptifs.com or call +91-93292 16544.</li>
                        <li><strong>After Shipment:</strong> Once the order has been shipped, cancellation is not possible. However, you may refuse delivery or initiate a return after receiving the product (subject to return conditions).</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Cancellation by TAPTIFS</h3>
                      <p className="mb-2">
                        We reserve the right to cancel any order in the following circumstances:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Product unavailability or out of stock</li>
                        <li>Pricing or product information errors</li>
                        <li>Payment verification issues or suspected fraud</li>
                        <li>Unserviceable delivery location</li>
                        <li>Force majeure events (natural disasters, strikes, etc.)</li>
                      </ul>
                      <p className="mt-2">
                        If we cancel your order, you will be notified via email or phone, and any payment made will be refunded in full.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Policy */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Return Policy</h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Eligible Returns</h3>
                      <p className="mb-2">
                        Due to the nature of food products, we have specific return conditions to ensure quality and safety:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>Damaged Products:</strong> Products received in damaged condition (broken seal, leaking packaging, crushed items)</li>
                        <li><strong>Defective Products:</strong> Products with quality issues, contamination, or foreign particles</li>
                        <li><strong>Incorrect Products:</strong> Wrong product or quantity delivered</li>
                        <li><strong>Expired Products:</strong> Products delivered past their expiry date (though this is extremely rare as we maintain strict quality control)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Non-Returnable Items</h3>
                      <p className="mb-2">
                        The following items are NOT eligible for return:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Products with opened or tampered packaging (unless defective)</li>
                        <li>Products returned after 7 days of delivery</li>
                        <li>Products damaged due to misuse or improper storage</li>
                        <li>Products purchased during special sales (unless damaged/defective)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Return Process</h3>
                      <p className="mb-2">
                        To initiate a return:
                      </p>
                      <ol className="list-decimal list-inside ml-4 space-y-2">
                        <li>Contact us within 7 days of delivery at info@taptifs.com or call +91-93292 16544</li>
                        <li>Provide your order number, product details, and reason for return (with photos if applicable)</li>
                        <li>Our team will review your request and provide return authorization if eligible</li>
                        <li>Pack the product securely in its original packaging</li>
                        <li>Ship the product to the return address provided (return shipping may be arranged by us for damaged/defective items)</li>
                        <li>Once we receive and inspect the returned product, your refund will be processed</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Refund Policy</h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Refund Eligibility</h3>
                      <p className="mb-2">
                        Refunds will be issued in the following cases:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Order cancelled before shipment</li>
                        <li>Approved returns for damaged, defective, or incorrect products</li>
                        <li>Payment charged twice for the same order</li>
                        <li>Order cancelled by TAPTIFS due to unavailability or other reasons</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Refund Methods</h3>
                      <p className="mb-2">
                        Refunds will be processed using the original payment method:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Credit/Debit Card: Refund to the same card</li>
                        <li>Net Banking: Refund to the same bank account</li>
                        <li>UPI/Digital Wallets: Refund to the same wallet</li>
                        <li>Cash on Delivery: Bank transfer (provide bank details)</li>
                      </ul>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Refund Timeline</h3>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li><strong>Cancellation before shipment:</strong> 5-7 business days</li>
                          <li><strong>Return refunds:</strong> 7-10 business days after receiving and inspecting the returned product</li>
                          <li><strong>Failed delivery refunds:</strong> 7-10 business days after confirmation</li>
                        </ul>
                        <p className="mt-2 text-sm italic">
                          Note: Refund timelines may vary depending on your bank or payment provider.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Replacement Policy */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Replacement Policy</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  In case of damaged or defective products, we offer free replacement as an alternative to refunds:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Replacement is subject to product availability</li>
                  <li>Request replacement within 7 days of delivery</li>
                  <li>Original product must be returned in original packaging</li>
                  <li>No additional charges for replacement shipping</li>
                  <li>Replacement typically takes 5-7 business days from the date of return pickup</li>
                </ul>
                <p className="mt-3">
                  To request a replacement, contact us with your order details and we will arrange the replacement at no extra cost.
                </p>
              </div>
            </div>

            {/* Marketplace Orders */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Orders Through Marketplace Platforms</h2>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      For orders placed through Amazon, Flipkart, Meesho, or other marketplace platforms:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      <li>Cancellation, return, and refund policies of the respective marketplace will apply</li>
                      <li>Follow the platform&apos;s process for initiating returns or cancellations</li>
                      <li>Refund timelines will be as per the marketplace&apos;s standard policies</li>
                      <li>For assistance, you may contact us directly, but final resolution will be as per marketplace guidelines</li>
                    </ul>
                    <p className="mt-3">
                      We recommend reviewing the return and refund policies of the specific marketplace platform before placing your order.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Charges */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Shipping Charges for Returns</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  Shipping charges for returns depend on the reason:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Damaged/Defective/Incorrect Products:</strong> We will bear the return shipping cost. We will arrange reverse pickup at no charge to you.</li>
                  <li><strong>Change of Mind:</strong> As food products are non-returnable once opened, returns for change of mind are generally not accepted unless the product is unopened and in original condition. In such cases, return shipping costs will be borne by the customer.</li>
                </ul>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Quality Commitment</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  At TAPTIFS, we take pride in our commitment to quality:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>All products are 100% adulteration-free and sourced from trusted farms</li>
                  <li>Hygienic processing and premium packaging standards</li>
                  <li>FSSAI Licensed (License No. 21425150001179) ensuring food safety</li>
                  <li>Multiple quality checks before dispatch</li>
                  <li>Proper packaging to prevent damage during transit</li>
                </ul>
                <p className="mt-3">
                  Our goal is to minimize the need for returns by delivering the highest quality products. However, if you do encounter any issues, we are here to resolve them promptly.
                </p>
              </div>
            </div>

            {/* Exceptions */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Exceptions and Special Cases</h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  In certain exceptional circumstances, we may make exceptions to this policy at our discretion:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Bulk or wholesale orders may have different terms (discussed at the time of order)</li>
                  <li>Promotional or discounted items may have specific return conditions</li>
                  <li>During peak seasons or special circumstances, processing times may vary</li>
                </ul>
                <p className="mt-3">
                  If you have a unique situation, please contact our customer support team who will do their best to assist you.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For any questions about cancellations, returns, or refunds, please contact our customer support team:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Tapti Food & Spices (TAPTIFS™)</strong></p>
                    <p>Email: info@taptifs.com</p>
                    <p>Phone: +91-93292 16544 | +91-97703 55137 | +91-83499 20943 | +91-76976 61798</p>
                    <p>Business Hours: Monday to Saturday, 9:00 AM - 6:00 PM IST</p>
                    <p>Address: Multai, Betul, Bhopal, Indore, Madhya Pradesh</p>
                    <p>FSSAI License: 21425150001179</p>
                  </div>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Our customer support team is dedicated to resolving your concerns promptly and ensuring your satisfaction with every purchase.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
