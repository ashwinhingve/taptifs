"use client";

import Image from "next/image";

export function PartnerLogos() {
  const partners = [
    {
      name: "Amazon",
      logo: "/logos/amazon.jpg"
    },
    {
      name: "Flipkart",
      logo: "/logos/flipkart.jpg"
    },
    {
      name: "BLINKIT",
      logo: "/logos/blinkit.jpg"
    },
    {
      name: "JIOMART",
      logo: "/logos/jiomart.png"
    },
    {
      name: "meesho",
      logo: "/logos/meesho.jpg"
    },
  ];

  return (
    <div className="py-8">
      <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="text-center opacity-90 hover:opacity-100 transition-opacity"
          >
            <div className="relative w-24 h-12 mb-2 flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-base font-medium text-gray-600">{partner.name}</p>
          </div>
        ))}
      </div>
      {/* Carousel Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === 0 ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
