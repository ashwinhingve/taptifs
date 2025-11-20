"use client"

import { useState, useMemo, useEffect } from "react"
import { ProductCard } from "@/components/products/ProductCard"
import { products as initialProducts, categories } from "@/data/products"
import { getProducts } from "@/lib/productStorage"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Filter, X, SlidersHorizontal, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("featured")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000])
  const [searchQuery, setSearchQuery] = useState("")
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [products, setProducts] = useState(initialProducts)

  // Load products from localStorage on mount
  useEffect(() => {
    const loadedProducts = getProducts()
    setProducts(loadedProducts)
  }, [])

  // Get active products only
  const activeProducts = useMemo(() => products.filter(p => p.is_active), [products])

  // Calculate category counts from active products
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    activeProducts.forEach(product => {
      counts[product.category] = (counts[product.category] || 0) + 1
    })
    return counts
  }, [activeProducts])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    // Start with active products only
    let filtered = [...activeProducts]

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      )
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.average_rating - a.average_rating)
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "featured":
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    return filtered
  }, [activeProducts, selectedCategory, sortBy, priceRange, searchQuery])

  const resetFilters = () => {
    setSelectedCategory("all")
    setSortBy("featured")
    setPriceRange([0, 2000])
    setSearchQuery("")
  }

  const FiltersSidebar = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="font-bold text-xl mb-4 text-gray-800">Search Products</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="font-bold text-xl mb-4 text-gray-800">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-amber-500 to-red-600 text-white shadow-md"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <div className="flex justify-between items-center">
              <span>All Products</span>
              <span className="text-base opacity-80">({activeProducts.length})</span>
            </div>
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                selectedCategory === category.name
                  ? "bg-gradient-to-r from-amber-500 to-red-600 text-white shadow-md"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{category.name}</span>
                <span className="text-base opacity-80">({categoryCounts[category.name] || 0})</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="font-bold text-xl mb-4 text-gray-800">Price Range</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-base font-semibold text-gray-700">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: "Under ₹200", max: 200 },
              { label: "₹200 - ₹500", max: 500 },
              { label: "₹500 - ₹1000", max: 1000 },
              { label: "₹1000+", max: 2000 },
            ].map((range) => (
              <button
                key={range.label}
                onClick={() => setPriceRange([0, range.max])}
                className="px-3 py-2 rounded-lg text-base font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reset Filters */}
      <Button
        onClick={resetFilters}
        variant="outline"
        className="w-full border-2 border-gray-300 hover:border-amber-600 hover:bg-amber-50"
      >
        <SlidersHorizontal className="w-4 h-4 mr-2" />
        Reset All Filters
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-red-50 py-12 md:py-16 border-b">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our
              <span className="block bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Discover our premium selection of {filteredProducts.length} authentic superfoods and spices
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <FiltersSidebar />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <Button
              onClick={() => setShowMobileFilters(true)}
              className="w-full bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white shadow-lg"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters & Categories
            </Button>
          </div>

          {/* Main Content */}
          <main className="flex-1">
            {/* Sort & View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-base font-semibold text-gray-700">
                Showing <span className="text-amber-600">{filteredProducts.length}</span> products
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-base font-semibold text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border-2 border-gray-200 bg-white text-base font-medium focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-red-100 rounded-full flex items-center justify-center">
                  <Filter className="w-16 h-16 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">No products found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any products matching your criteria. Try adjusting your filters.
                </p>
                <Button
                  onClick={resetFilters}
                  className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white shadow-lg"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-gray-50 z-50 overflow-y-auto p-6 lg:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <FiltersSidebar />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
