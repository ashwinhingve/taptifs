"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/home.jpg",
    title: "Welcome to Taptifs",
    subtitle: "Premium Quality, Naturally Pure",
    description: "Discover our complete range of authentic Indian spices, organic oils, pure ghee, premium teas, and natural sweeteners - all crafted with tradition and care",
    ctaText: "Explore All Products",
    ctaLink: "/products",
    ctaSecondaryText: "Shop Now",
    ctaSecondaryLink: "/products",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3368291/pexels-photo-3368291.jpeg",
    // image: "https://images.pexels.com/photos/4198936/pexels-photo-4198936.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Premium Kashmiri Saffron",
    subtitle: "The Gold of Spices",
    description: "Hand-picked from the finest farms of Kashmir, experience the world's most precious spice",
    ctaText: "Shop Saffron",
    ctaLink: "/products?category=Spices",
    ctaSecondaryText: "Learn More",
    ctaSecondaryLink: "/products",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Natural Jaggery & Sweeteners",
    subtitle: "Pure Traditional Sweetness",
    description: "100% organic jaggery made from sugarcane, a healthier alternative to refined sugar",
    ctaText: "Explore Now",
    ctaLink: "/products?category=Sweeteners",
    ctaSecondaryText: "View All",
    ctaSecondaryLink: "/products",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Premium Dry Fruits & Seeds",
    subtitle: "Nutrition Meets Taste",
    description: "Handpicked almonds, walnuts, and premium seeds packed with essential nutrients",
    ctaText: "Shop Collection",
    ctaLink: "/products?category=Seeds",
    ctaSecondaryText: "Discover More",
    ctaSecondaryLink: "/products",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Authentic Indian Spices",
    subtitle: "From Our Kitchen to Yours",
    description: "Experience the rich flavors of India with our curated collection of aromatic spices",
    ctaText: "Discover Spices",
    ctaLink: "/products?category=Spices",
    ctaSecondaryText: "View Range",
    ctaSecondaryLink: "/products",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Superfood Trail Mixes",
    subtitle: "Energy in Every Bite",
    description: "Carefully crafted blends of nuts, seeds, and dried fruits for a healthy lifestyle",
    ctaText: "Shop Mixes",
    ctaLink: "/products?category=Snacks",
    ctaSecondaryText: "Explore All",
    ctaSecondaryLink: "/products",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 5, ease: "easeOut" }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl">
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-4"
              >
                <span className="inline-block bg-gradient-to-r from-amber-500 to-red-600 text-white px-4 py-2 rounded-full text-sm md:text-base font-semibold shadow-lg">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href={slides[currentSlide].ctaLink}>
                  <Button
                    size="lg"
                    className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {slides[currentSlide].ctaText}
                  </Button>
                </Link>
                {slides[currentSlide].ctaSecondaryText && (
                  <Link href={slides[currentSlide].ctaSecondaryLink || "/products"}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                    >
                      {slides[currentSlide].ctaSecondaryText}
                    </Button>
                  </Link>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 md:w-12 bg-gradient-to-r from-amber-500 to-red-600"
                : "w-2 md:w-2.5 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-red-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentSlide}
        />
      )}
    </section>
  );
}
