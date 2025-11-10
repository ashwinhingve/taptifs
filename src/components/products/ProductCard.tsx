"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/useCartStore";
import type { ProductData } from "@/data/products";
import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  product: ProductData;
  showSaleBadge?: boolean;
}

export function ProductCard({ product, showSaleBadge = false }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const itemQuantity = useCartStore((state) => state.getItemQuantity(product.id));

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product, 1);
    setTimeout(() => setIsAdding(false), 1000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group bg-card rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Product Image */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          {!imageError ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100">
              <div className="text-center p-6">
                <svg className="w-20 h-20 mx-auto text-amber-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <p className="text-sm font-medium text-amber-700">{product.name}</p>
              </div>
            </div>
          )}
          {product.featured && !showSaleBadge && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
              Featured
            </div>
          )}
          {showSaleBadge && discount > 0 ? (
            <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded shadow-md">
              SALE
            </div>
          ) : discount > 0 ? (
            <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs font-semibold px-2 py-1 rounded">
              {discount}% OFF
            </div>
          ) : null}
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col flex-1">
          {/* Category */}
          <p className="text-xs text-muted-foreground mb-1">{product.category}</p>

          {/* Product Name */}
          <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2 flex-1">
            {product.short_description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.average_rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.review_count})
            </span>
          </div>

          {/* Price & Buttons */}
          <div className="flex flex-col gap-3 mt-auto">
            {/* Price */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleAddToCart}
                disabled={isAdding}
                className="flex-1 relative"
              >
                {isAdding ? (
                  "Added!"
                ) : mounted && itemQuantity > 0 ? (
                  <span>In Cart ({itemQuantity})</span>
                ) : (
                  "Add to Cart"
                )}
              </Button>

              {product.amazonUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(product.amazonUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className="flex-1 border-[#FF9900] text-[#FF9900] hover:bg-[#FF9900] hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Amazon
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
