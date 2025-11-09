"use client"

import React from "react"
import { AnimatedSection } from "./AnimatedSection"
import { Check } from "lucide-react"

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-200 via-amber-400 to-red-400 hidden md:block" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <AnimatedSection
            key={index}
            delay={index * 0.2}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Content */}
              <div className="flex-1">
                <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="text-amber-600 font-bold text-lg mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="relative flex-shrink-0 hidden md:block">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center shadow-lg z-10 relative">
                  {item.icon || <Check className="w-8 h-8 text-white" />}
                </div>
              </div>

              {/* Spacer for alignment */}
              <div className="flex-1 hidden md:block" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
