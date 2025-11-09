"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useCartStore } from "@/store/useCartStore"
import { Button } from "@/components/ui/button"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/AnimatedSection"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Package } from "lucide-react"
import { motion } from "framer-motion"

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems, clearCart } = useCartStore()

  const totalPrice = getTotalPrice()
  const totalItems = getTotalItems()
  const shipping = totalPrice > 500 ? 0 : 50
  const tax = totalPrice * 0.05 // 5% tax
  const finalTotal = totalPrice + shipping + tax

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up">
            <div className="max-w-2xl mx-auto text-center py-20 bg-white rounded-2xl shadow-lg">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-red-100 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-16 h-16 text-amber-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-8 text-lg">
                Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
              </p>
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white px-10 py-6 text-lg shadow-lg"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Browse Products
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-red-50 py-12 md:py-16 border-b">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Shopping
              <span className="block bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                Cart
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              You have {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="left">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Cart Items</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearCart}
                    className="text-red-600 border-red-300 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear Cart
                  </Button>
                </div>

                <StaggerContainer className="space-y-4">
                  {items.map((item, index) => (
                    <StaggerItem key={item.product.id}>
                      <motion.div
                        layout
                        className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
                      >
                        {/* Product Image */}
                        <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-bold text-lg text-gray-800 mb-1">
                                {item.product.name}
                              </h3>
                              <p className="text-sm text-gray-600">{item.product.category}</p>
                            </div>
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-semibold text-gray-700">Quantity:</span>
                              <div className="flex items-center gap-2 bg-white rounded-lg border-2 border-gray-200">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="w-12 text-center font-bold text-gray-800">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <div className="text-sm text-gray-600 mb-1">
                                ₹{item.product.price} × {item.quantity}
                              </div>
                              <div className="text-xl font-bold text-amber-600">
                                ₹{(item.product.price * item.quantity).toLocaleString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Continue Shopping */}
              <Link href="/products">
                <Button
                  variant="outline"
                  className="w-full border-2 border-amber-600 text-amber-700 hover:bg-amber-50"
                >
                  Continue Shopping
                </Button>
              </Link>
            </AnimatedSection>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-semibold">₹{totalPrice.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    {shipping === 0 ? (
                      <span className="font-semibold text-green-600">FREE</span>
                    ) : (
                      <span className="font-semibold">₹{shipping}</span>
                    )}
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span>Tax (5%)</span>
                    <span className="font-semibold">₹{tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                      ₹{finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Free Shipping Banner */}
                {shipping > 0 && (
                  <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Package className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-amber-900 mb-1">
                          Add ₹{(500 - totalPrice).toLocaleString()} more for FREE shipping!
                        </p>
                        <p className="text-amber-700">Orders above ₹500 get free delivery</p>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  className="w-full bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl mb-4"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Easy returns within 7 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>100% authentic products</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
