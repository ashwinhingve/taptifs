"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Input } from "@/components/ui/input"
import { FormField } from "@/components/ui/form-field"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Mail, Lock, User, Phone, Eye, EyeOff, LogIn, UserPlus } from "lucide-react"
import { motion } from "framer-motion"

// Login schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
})

// Register schema
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type LoginFormData = z.infer<typeof loginSchema>
type RegisterFormData = z.infer<typeof registerSchema>

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const registerForm = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onLoginSubmit = (data: LoginFormData) => {
    console.log("Login:", data)
    // Handle login logic
  }

  const onRegisterSubmit = (data: RegisterFormData) => {
    console.log("Register:", data)
    // Handle registration logic
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                Welcome Back
              </span>
            </h1>
            <p className="text-gray-600">
              {activeTab === "login"
                ? "Sign in to access your account"
                : "Create an account to get started"}
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Tabs */}
            <div className="grid grid-cols-2 bg-gray-50">
              <button
                onClick={() => setActiveTab("login")}
                className={`py-4 text-center font-semibold transition-all duration-300 ${
                  activeTab === "login"
                    ? "bg-white text-amber-600 border-b-4 border-amber-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <LogIn className="w-5 h-5 inline-block mr-2" />
                Login
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`py-4 text-center font-semibold transition-all duration-300 ${
                  activeTab === "register"
                    ? "bg-white text-amber-600 border-b-4 border-amber-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <UserPlus className="w-5 h-5 inline-block mr-2" />
                Register
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8">
              {/* Login Form */}
              {activeTab === "login" && (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
                    <FormField label="Email Address" required error={loginForm.formState.errors.email?.message}>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          {...loginForm.register("email")}
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10"
                          error={loginForm.formState.errors.email?.message}
                        />
                      </div>
                    </FormField>

                    <FormField label="Password" required error={loginForm.formState.errors.password?.message}>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          {...loginForm.register("password")}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-10 pr-10"
                          error={loginForm.formState.errors.password?.message}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormField>

                    <div className="flex items-center justify-between">
                      <Checkbox
                        {...loginForm.register("remember")}
                        label="Remember me"
                      />
                      <Link href="#" className="text-sm text-amber-600 hover:text-amber-700 font-medium">
                        Forgot Password?
                      </Link>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white py-6 text-lg font-semibold shadow-lg"
                    >
                      Sign In
                    </Button>
                  </form>
                </motion.div>
              )}

              {/* Register Form */}
              {activeTab === "register" && (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-6">
                    <FormField label="Full Name" required error={registerForm.formState.errors.name?.message}>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          {...registerForm.register("name")}
                          placeholder="John Doe"
                          className="pl-10"
                          error={registerForm.formState.errors.name?.message}
                        />
                      </div>
                    </FormField>

                    <FormField label="Email Address" required error={registerForm.formState.errors.email?.message}>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          {...registerForm.register("email")}
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10"
                          error={registerForm.formState.errors.email?.message}
                        />
                      </div>
                    </FormField>

                    <FormField label="Phone Number" required error={registerForm.formState.errors.phone?.message}>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          {...registerForm.register("phone")}
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className="pl-10"
                          error={registerForm.formState.errors.phone?.message}
                        />
                      </div>
                    </FormField>

                    <FormField label="Password" required error={registerForm.formState.errors.password?.message}>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          {...registerForm.register("password")}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-10 pr-10"
                          error={registerForm.formState.errors.password?.message}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormField>

                    <FormField label="Confirm Password" required error={registerForm.formState.errors.confirmPassword?.message}>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          {...registerForm.register("confirmPassword")}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="pl-10 pr-10"
                          error={registerForm.formState.errors.confirmPassword?.message}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormField>

                    <Checkbox
                      {...registerForm.register("terms")}
                      label={
                        <span className="text-sm">
                          I agree to the{" "}
                          <Link href="#" className="text-amber-600 hover:text-amber-700 font-medium">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-amber-600 hover:text-amber-700 font-medium">
                            Privacy Policy
                          </Link>
                        </span>
                      }
                      error={registerForm.formState.errors.terms?.message}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white py-6 text-lg font-semibold shadow-lg"
                    >
                      Create Account
                    </Button>
                  </form>
                </motion.div>
              )}

              {/* Social Login */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Google</span>
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700">Facebook</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-8">
            {activeTab === "login" ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setActiveTab("register")}
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  Sign up now
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setActiveTab("login")}
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </AnimatedSection>
      </div>
    </div>
  )
}
