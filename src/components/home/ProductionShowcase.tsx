"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    type: "image",
    src: "/images/7.jpg",
    title: "Premium Sugarcane Fields",
    description: "Sourced from the finest sugarcane farms, ensuring quality from the very beginning",
  },
  {
    id: 2,
    type: "image",
    src: "/images/9.jpg",
    title: "Farm-Fresh Raw Materials",
    description: "Carefully selected raw sugarcane for authentic jaggery production",
  },
  {
    id: 3,
    type: "image",
    src: "/images/3.jpg",
    title: "Traditional Crushing Process",
    description: "Using time-honored methods to extract pure sugarcane juice",
  },
  {
    id: 4,
    type: "video",
    src: "/images/v1.mp4",
    title: "Our Authentic Process",
    description: "Watch how we maintain traditional methods while ensuring modern quality standards",
  },
  {
    id: 5,
    type: "image",
    src: "/images/5.jpg",
    title: "Careful Extraction & Processing",
    description: "Expert handling ensures the preservation of natural nutrients and authentic flavor",
  },
  {
    id: 6,
    type: "image",
    src: "/images/2.jpg",
    title: "Handcrafted with Precision",
    description: "Each batch is carefully poured and shaped with meticulous attention to detail",
  },
  {
    id: 7,
    type: "video",
    src: "/images/v2.mp4",
    title: "Quality in Action",
    description: "See our commitment to excellence in every step of the manufacturing process",
  },
  {
    id: 8,
    type: "image",
    src: "/images/1.jpg",
    title: "Natural Cooling Process",
    description: "Allowing time for the perfect texture and consistency to develop naturally",
  },
  {
    id: 9,
    type: "image",
    src: "/images/4.jpg",
    title: "Pure, Authentic Jaggery",
    description: "The result of traditional craftsmanship and uncompromising quality standards",
  },
  {
    id: 10,
    type: "image",
    src: "/images/6.jpg",
    title: "Quality You Can Trust",
    description: "Every piece reflects our dedication to purity and authenticity",
  },
  {
    id: 11,
    type: "image",
    src: "/images/8.jpg",
    title: "From Our Farm to Your Table",
    description: "Bringing you the goodness of traditional jaggery, made with love and care",
  },
];

export function ProductionShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Handle video playback
  useEffect(() => {
    const currentSlideData = slides[currentSlide];

    // Pause all other videos first
    Object.entries(videoRefs.current).forEach(([key, video]) => {
      if (parseInt(key) !== currentSlide && video) {
        // Only pause if video is not already paused
        if (!video.paused) {
          video.pause();
        }
        video.currentTime = 0;
      }
    });

    // Play current video if it's a video slide
    if (currentSlideData.type === "video" && videoRefs.current[currentSlide]) {
      const video = videoRefs.current[currentSlide];
      if (video) {
        // Reset video to start
        video.currentTime = 0;

        // Attempt to play and handle promise properly
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Handle play errors silently (e.g., autoplay policy, user interaction required)
            if (error.name !== 'AbortError') {
              console.log("Video playback prevented:", error.name);
            }
          });
        }
      }
    }
  }, [currentSlide]);

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
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Our Production Process
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Witness the traditional art of authentic jaggery making - from farm to table
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-red-600 mx-auto mt-4"></div>
      </div>

      {/* Carousel */}
      <div
        className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden bg-gray-900 rounded-2xl shadow-2xl"
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
            {/* Media Content */}
            {slides[currentSlide].type === "image" ? (
              <Image
                src={slides[currentSlide].src}
                alt={slides[currentSlide].title}
                fill
                className="object-cover"
                quality={90}
                priority={currentSlide === 0}
              />
            ) : (
              <video
                ref={(el) => {
                  videoRefs.current[currentSlide] = el;
                }}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                controls
              >
                <source src={slides[currentSlide].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="max-w-3xl"
              >
                <span className="inline-block bg-gradient-to-r from-amber-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Step {currentSlide + 1} of {slides.length}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
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
        <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2 flex-wrap justify-center max-w-md">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-gradient-to-r from-amber-500 to-red-600"
                  : "w-2 bg-white/50 hover:bg-white/75"
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
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm md:text-base">
          Every step in our process is carefully monitored to ensure you receive the highest quality, most authentic jaggery products
        </p>
      </div>
    </div>
  );
}
