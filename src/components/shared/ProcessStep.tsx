"use client"

import React from "react"
import { AnimatedSection } from "./AnimatedSection"

export interface Step {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ProcessStepProps {
  steps: Step[];
  className?: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  steps,
  className = "",
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
      {steps.map((step, index) => (
        <AnimatedSection
          key={index}
          delay={index * 0.15}
          direction="up"
        >
          <div className="relative">
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-amber-300 to-transparent -z-10" />
            )}

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full group hover:scale-105">
              {/* Number Circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                {step.icon || step.number}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-800 text-center mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}
