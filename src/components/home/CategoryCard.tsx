import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  subtitle?: string;
  productImages: string[];
  href: string;
  buttonText?: string;
}

export function CategoryCard({
  title,
  subtitle,
  productImages,
  href,
  buttonText = "Shop Now",
}: CategoryCardProps) {
  return (
    <div className="bg-[#f5f1e8] rounded-lg p-6 flex flex-col items-center text-center group hover:shadow-lg transition-shadow">
      {/* Title and Arrow */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        {subtitle && <p className="text-base text-gray-600 mb-3">{subtitle}</p>}
        <Link href={href}>
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto hover:bg-red-700 transition-colors cursor-pointer">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </Link>
      </div>

      {/* Product Images */}
      <div className="relative w-full h-48 mb-4 flex items-center justify-center gap-2 overflow-hidden">
        {productImages.slice(0, 3).map((img, idx) => (
          <div
            key={idx}
            className="flex-1 flex items-center justify-center"
            style={{
              transform: idx === 1 ? 'scale(1.1)' : 'scale(0.85)',
              zIndex: idx === 1 ? 10 : 1,
            }}
          >
            <Image
              src={img}
              alt={`${title} product ${idx + 1}`}
              width={120}
              height={120}
              className="object-contain drop-shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <Link href={href} className="w-full">
        <div className="w-full bg-blue-900 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition-colors cursor-pointer">
          {buttonText}
        </div>
      </Link>
    </div>
  );
}
