"use client";

export function PartnerLogos() {
  const partners = [
    { name: "Amazon", logo: "🛒" },
    { name: "Flipkart", logo: "🛍️" },
    { name: "meesho", logo: "🛵" },
    // { name: "Swiggy", logo: "🥘" },
    // { name: "Zomato", logo: "🍴" },
  ];

  return (
    <div className="py-8">
      <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="text-center opacity-80 hover:opacity-100 transition-opacity"
          >
            <div className="text-4xl mb-2">{partner.logo}</div>
            <p className="text-sm font-medium text-gray-600">{partner.name}</p>
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
