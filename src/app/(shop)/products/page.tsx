"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.average_rating - a.average_rating);
        break;
      case "featured":
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Our Products</h1>
        <p className="text-muted-foreground">
          Discover our premium selection of {filteredProducts.length} spices
          and food products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-20 space-y-6">
            {/* Categories */}
            <div className="bg-card rounded-lg p-4 shadow-md">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-3 py-2 rounded transition ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded transition ${
                      selectedCategory === category.name
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm opacity-70">
                        ({category.count})
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-card rounded-lg p-4 shadow-md">
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([0, parseInt(e.target.value)])
                  }
                  className="w-full"
                />
                <div className="space-y-2">
                  {[
                    { label: "Under ₹200", max: 200 },
                    { label: "₹200 - ₹500", max: 500 },
                    { label: "₹500 - ₹1000", max: 1000 },
                    { label: "Above ₹1000", max: 2000 },
                  ].map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange([0, range.max])}
                      className="w-full text-left px-3 py-1.5 rounded text-sm hover:bg-muted transition"
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="bg-card rounded-lg p-4 shadow-md">
              <h3 className="font-semibold mb-3">Quick Filters</h3>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSortBy("featured");
                    setPriceRange([0, 2000]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Sort & View Options */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-muted/50 p-4 rounded-lg">
            <div className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} products
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm font-medium">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 rounded-md border border-input bg-background text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="w-24 h-24 mx-auto text-muted-foreground opacity-20 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters to see more results
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setPriceRange([0, 2000]);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
