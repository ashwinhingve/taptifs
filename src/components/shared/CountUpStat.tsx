"use client"

import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

export interface CountUpStatProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export const CountUpStat: React.FC<CountUpStatProps> = ({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  label,
  icon,
  className = "",
}) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let startTime: number
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

        // Ease-out function for smoother animation
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(easeOut * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [inView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className={`text-center p-6 ${className}`}
    >
      {icon && (
        <div className="flex justify-center mb-4 text-amber-600">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-600 font-medium">
        {label}
      </div>
    </motion.div>
  )
}
