import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Premium Quality
                <span className="block text-primary">Spices & Food</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                Discover authentic flavors from around the world. Elevate your
                culinary creations with our handpicked selection of premium
                spices and seasonings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/products">
                  <Button size="lg" className="text-lg px-8">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/wholesale">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Wholesale Inquiry
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="flex-1">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-48 h-48 mx-auto text-primary opacity-20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                    <p className="text-muted-foreground mt-4">
                      Your Product Image Here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Sourced from the finest farms and producers worldwide
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Free shipping on orders over $50 with quick processing
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-muted-foreground">
                100% satisfaction guarantee or your money back
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular spices and seasonings, loved by home
              cooks and professional chefs alike
            </p>
          </div>

          {/* Real Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Cooking?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who trust TAPTIFS for their
            culinary needs. Start shopping today!
          </p>
          <Link href="/products">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get exclusive offers, recipes, and cooking tips delivered to your
              inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-input bg-background"
              />
              <Button size="lg" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
