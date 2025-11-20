import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts, products } from "@/data/products";
import { AnnouncementBanner } from "@/components/home/AnnouncementBanner";
import { HeroSlider } from "@/components/home/HeroSlider";
import { CategoryCard } from "@/components/home/CategoryCard";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { ProductionShowcase } from "@/components/home/ProductionShowcase";
import { BenefitBadge } from "@/components/home/BenefitBadge";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { WhatsAppButton } from "@/components/home/WhatsAppButton";
import {
  Wheat,
  Heart,
  Leaf,
  Shield,
  Zap,
  Apple,
  Activity,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  // Get products with discounts for Limited Time Deals
  const dealsProducts = products.filter(p => p.originalPrice && p.originalPrice > p.price);

  return (
    <main>
      {/* Announcement Banner */}
      <AnnouncementBanner />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50 py-20 md:py-32">
        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTYtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6TTEyIDM2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTYtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-transparent to-red-100/20"></div>

        {/* Enhanced Background Product Images with Parallax Effect */}
        <div className="absolute inset-0 pointer-events-none" style={{ perspective: '1000px' }}>
          {/* Saffron threads - top right - moves slower (closer layer) */}
          <div className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 opacity-15 blur-sm parallax-layer-1" style={{ transform: 'translate3d(0, 0, -50px) scale(1.05)', willChange: 'transform' }}>
            <Image
              src="https://images.meesho.com/images/products/438857914/1oyms_512.webp"
              alt="Saffron"
              width={512}
              height={512}
              className="object-cover rounded-full w-full h-full"
            />
          </div>
          {/* Jaggery - bottom left - moves medium (middle layer) */}
          <div className="absolute bottom-20 left-10 w-40 h-40 md:w-56 md:h-56 opacity-15 blur-sm parallax-layer-2" style={{ transform: 'translate3d(0, 0, -100px) scale(1.1)', willChange: 'transform' }}>
            <Image
              src="https://images.meesho.com/images/products/464660549/1znqc_512.webp"
              alt="Jaggery"
              width={512}
              height={512}
              className="object-cover rounded-full w-full h-full"
            />
          </div>
          {/* Chia seeds - middle right - moves fastest (furthest layer) */}
          <div className="absolute top-1/2 right-20 w-28 h-28 md:w-40 md:h-40 opacity-10 blur-sm parallax-layer-3" style={{ transform: 'translate3d(0, 0, -150px) scale(1.15)', willChange: 'transform' }}>
            <Image
              src="https://images.meesho.com/images/products/435066399/nbw6h_512.webp"
              alt="Chia Seeds"
              width={512}
              height={512}
              className="object-cover rounded-full w-full h-full"
            />
          </div>

          {/* Additional Enhanced Images */}
          {/* Dry Fruits - top left - medium depth */}
          <div className="absolute top-32 left-20 w-36 h-36 md:w-44 md:h-44 opacity-12 blur-sm parallax-layer-1" style={{ transform: 'translate3d(0, 0, -75px) scale(1.08)', willChange: 'transform' }}>
            <Image
              src="https://images.meesho.com/images/products/581277662/bynx5_512.avif"
              alt="Dry Fruits"
              width={512}
              height={512}
              className="object-cover rounded-full w-full h-full"
            />
          </div>
          {/* Almonds - bottom right - close layer */}
          <div className="absolute bottom-32 right-32 w-30 h-30 md:w-40 md:h-40 opacity-13 blur-sm parallax-layer-2" style={{ transform: 'translate3d(0, 0, -60px) scale(1.06)', willChange: 'transform' }}>
            <Image
              src="https://images.meesho.com/images/products/610646788/wuofi_512.avif"
              alt="Premium Nuts"
              width={512}
              height={512}
              className="object-cover rounded-full w-full h-full"
            />
          </div>
          {/* Spice Mix - middle left - far layer */}
          <div className="absolute top-[60%] left-[15%] w-24 h-24 md:w-36 md:h-36 opacity-8 blur-md parallax-layer-3" style={{ transform: 'translate3d(0, 0, -120px) scale(1.12)', willChange: 'transform' }}>
            <Image
              src="https://images.meesho.com/images/products/612121311/khjw1_512.avif"
              alt="Spice Mix"
              width={512}
              height={512}
              className="object-cover rounded-full w-full h-full"
            />
          </div>
        </div>

        {/* Enhanced Floating Spice Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Original particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-40 animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-30 animate-float-medium" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-amber-500 rounded-full opacity-35 animate-float-fast" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full opacity-40 animate-float-slow" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-amber-300 rounded-full opacity-25 animate-float-medium" style={{ animationDelay: '1.5s' }}></div>

          {/* Enhanced new particles - more variety */}
          <div className="absolute top-[15%] left-[60%] w-3 h-3 bg-red-400 rounded-full opacity-30 animate-float-slow" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-[30%] right-[15%] w-1.5 h-1.5 bg-orange-400 rounded-full opacity-35 animate-float-medium" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-[45%] left-[15%] w-2 h-2 bg-yellow-500 rounded-full opacity-28 animate-float-fast" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute bottom-[15%] right-[40%] w-2.5 h-2.5 bg-amber-600 rounded-full opacity-32 animate-float-slow" style={{ animationDelay: '1.8s' }}></div>
          <div className="absolute top-[55%] right-[25%] w-1 h-1 bg-red-300 rounded-full opacity-38 animate-float-medium" style={{ animationDelay: '2.2s' }}></div>
          <div className="absolute bottom-[45%] left-[45%] w-2 h-2 bg-orange-300 rounded-full opacity-30 animate-float-fast" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-[80%] left-[70%] w-1.5 h-1.5 bg-amber-400 rounded-full opacity-35 animate-float-slow" style={{ animationDelay: '3.5s' }}></div>
          <div className="absolute top-[25%] right-[50%] w-2.5 h-2.5 bg-yellow-400 rounded-full opacity-28 animate-float-medium" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute bottom-[60%] left-[80%] w-1 h-1 bg-red-500 rounded-full opacity-40 animate-float-fast" style={{ animationDelay: '2.8s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900">
                The Taste of
                <span className="block bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">Purity</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
                100% adulteration-free products sourced directly from our farms and trusted farmers.
                Experience pure, authentic, and high-quality food products that bring traditional taste with modern trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/products">
                  <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/wholesale">
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white transition-all duration-300">
                    Wholesale Inquiry
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Product Collage */}
            <div className="flex-1">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

                {/* Main collage container */}
                <div className="relative bg-gradient-to-br from-amber-100/90 to-orange-100/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Premium Kashmiri Saffron - Top Left */}
                    <div className="relative group overflow-hidden rounded-xl aspect-square">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                      <Image
                        // src="https://images.meesho.com/images/products/438857914/1oyms_512.webp"
                        src="https://images.meesho.com/images/products/612121311/khjw1_512.avif?width=512"
                        alt="Premium Saffron"
                        width={512}
                        height={512}
                        className="w-full h-full object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full font-bold z-10">
                        ⭐ 4.9
                      </div>
                    </div>

                    {/* Natural Jaggery - Top Right */}
                    <div className="relative group overflow-hidden rounded-xl aspect-square mt-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                      <Image
                        src="https://images.meesho.com/images/products/603463542/syhgj_512.avif?width=512"
                        alt="Natural Jaggery"
                        width={512}
                        height={512}
                        className="w-full h-full object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full font-bold z-10">
                        ⭐ 4.7
                      </div>
                    </div>

                    {/* Premium Chia Seeds - Bottom Left */}
                    <div className="relative group overflow-hidden rounded-xl aspect-square -mt-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-amber-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                      <Image
                        src="https://images.meesho.com/images/products/610646788/wuofi_512.avif?width=512"
                        alt="Premium Chia Seeds"
                        width={512}
                        height={512}
                        className="w-full h-full object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-bold z-10">
                        ⭐ 4.5
                      </div>
                    </div>

                    {/* Mixed Dry Fruits - Bottom Right */}
                    <div className="relative group overflow-hidden rounded-xl aspect-square">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                      <Image
                        src="https://images.meesho.com/images/products/581277662/bynx5_512.avif?width=512"
                        alt="Dry Fruits Powder"
                        width={512}
                        height={512}
                        className="w-full h-full object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-orange-600 text-white text-xs px-2 py-1 rounded-full font-bold z-10">
                        ⭐ 4.4
                      </div>
                    </div>
                  </div>

                  {/* Center badge */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-600 to-red-700 text-white px-6 py-3 rounded-full font-bold shadow-xl border-2 border-white">
                    Premium Quality
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Main Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Our Main Categories
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="High Protein & Fiber"
              productImages={products.slice(0, 3).map(p => p.images[0])}
              href="/products?category=High Protein"
              buttonText="Trail Mixes"
            />
            <CategoryCard
              title="Guilt-Free Snacks"
              productImages={products.slice(3, 6).map(p => p.images[0])}
              href="/products?category=Snacks"
              buttonText="Delicious Snacks"
            />
            <CategoryCard
              title="Boost Daily Nutrition"
              productImages={products.slice(6, 9).map(p => p.images[0])}
              href="/products?category=Seeds"
              buttonText="Super Seeds"
            />
            <CategoryCard
              title="Energize Your Day"
              productImages={products.slice(9, 12).map(p => p.images[0])}
              href="/products?category=Cookies"
              buttonText="Millet Cookies"
            />
          </div>
        </div>
      </section>

      {/* Limited Time Deals Section */}
      {dealsProducts.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
                Limited Time Deals
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
            </div>

            <ProductCarousel products={dealsProducts} />
          </div>
        </section>
      )}

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Featured Products
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <CategoryCard
              title="High Protein & Fiber"
              subtitle=""
              productImages={products.slice(0, 3).map(p => p.images[0])}
              href="/products?category=High Protein"
              buttonText="Best of TAPTIFS"
            />
            <CategoryCard
              title="Guilt-Free Snacks"
              subtitle=""
              productImages={products.slice(3, 6).map(p => p.images[0])}
              href="/products?category=Snacks"
              buttonText="Delicious Snacks"
            />
            <CategoryCard
              title="Boost Daily Nutrition"
              subtitle=""
              productImages={products.slice(6, 9).map(p => p.images[0])}
              href="/products?category=Seeds"
              buttonText="Seeds & Mix"
            />
          </div>
        </div>
      </section>

      {/* Product Spotlight Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-red-50 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTYtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6TTEyIDM2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTYtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
                What Makes Our Spices Better?
              </h2>
              <h3 className="text-2xl font-semibold mb-6 text-amber-800">
                Goodness Inside, Quality Outside
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                TAPTIFS spices are a wholesome fusion of tradition and taste,
                crafted with nutrient-rich ingredients sourced from the finest farms.
                Available in delightful variants, each spice offers a unique flavor
                experience. Made with care and natural ingredients, they are ideal for
                everyday cooking—delicious, healthy, and packed with Love.
              </p>
              <Link href="/products">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                  VISIT SHOP
                </Button>
              </Link>
            </div>

            {/* Right Image - Multi-Product Collage */}
            <div className="flex-1">
              <div className="relative">
                {/* Main circular gradient background */}
                <div className="bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 rounded-full w-full aspect-square flex items-center justify-center relative overflow-hidden shadow-2xl border-4 border-white">
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-300/20 via-transparent to-red-300/15 rounded-full"></div>

                  {/* Product images in circular arrangement */}
                  <div className="relative w-[85%] h-[85%] rounded-full bg-gradient-to-br from-amber-100/95 to-orange-100/90 p-4 shadow-inner">
                    <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                      {/* Saffron - Top Left */}
                      <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-square">
                        <Image
                          src="https://images.meesho.com/images/products/612121311/khjw1_512.avif?width=512"
                          alt="Premium Saffron"
                          width={512}
                          height={512}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-2 left-2 text-white text-xs font-bold">Saffron</div>
                        </div>
                      </div>

                      {/* Jaggery - Top Right */}
                      <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-square">
                        <Image
                          src="https://images.meesho.com/images/products/603463542/syhgj_512.avif?width=512"
                          alt="Natural Jaggery"
                          width={512}
                          height={512}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-2 left-2 text-white text-xs font-bold">Jaggery</div>
                        </div>
                      </div>

                      {/* Chia Seeds - Bottom Left */}
                      <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-square">
                        <Image
                          src="https://images.meesho.com/images/products/610646788/wuofi_512.avif?width=512"
                          alt="Chia Seeds"
                          width={512}
                          height={512}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-2 left-2 text-white text-xs font-bold">Chia Seeds</div>
                        </div>
                      </div>

                      {/* Dry Fruits - Bottom Right */}
                      <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-square">
                        <Image
                          src="https://images.meesho.com/images/products/581277662/bynx5_512.avif?width=512"
                          alt="Dry Fruits"
                          width={512}
                          height={512}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-2 left-2 text-white text-xs font-bold">Dry Fruits</div>
                        </div>
                      </div>
                    </div>

                    {/* Center premium badge */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <div className="bg-gradient-to-r from-amber-600 to-red-700 text-white px-4 py-2 rounded-full font-bold shadow-2xl border-2 border-white text-xs md:text-sm whitespace-nowrap">
                        ⭐ Premium Quality
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Callout badges with icons - positioned around the image */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-green-600 text-white px-4 py-3 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    <p className="font-bold text-sm">100% Natural</p>
                  </div>
                </div>

                <div className="absolute top-1/4 -left-6 bg-gradient-to-br from-amber-500 to-orange-600 text-white px-4 py-3 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <Wheat className="w-4 h-4" />
                    <p className="font-bold text-sm">High in Fiber</p>
                  </div>
                </div>

                <div className="absolute bottom-1/4 -right-6 bg-gradient-to-br from-red-500 to-red-700 text-white px-4 py-3 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    <p className="font-bold text-sm">Heart Healthy</p>
                  </div>
                </div>

                <div className="absolute -bottom-4 left-1/4 bg-gradient-to-br from-purple-500 to-purple-700 text-white px-4 py-3 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <p className="font-bold text-sm">Certified Quality</p>
                  </div>
                </div>

                <div className="absolute top-3/4 -left-4 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white px-4 py-3 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <p className="font-bold text-sm">Fresh & Pure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Production Process Showcase Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-red-50 relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTYtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6TTEyIDM2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTYtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative z-10">
          <ProductionShowcase />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Stay Updated with Our Best Offers
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest news on superfoods, special promotions, and delicious
              recipes. Join our community and stay informed about how our products can benefit your health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-4">
              <input
                type="email"
                placeholder="Your email address here"
                className="flex-1 px-6 py-4 rounded-md border-2 border-gray-300 bg-white focus:border-amber-600 focus:outline-none transition-colors duration-300"
              />
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white px-8 py-4 whitespace-nowrap text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                JOIN TODAY
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              By joining, you agree to receive updates and accept our Privacy Policy.
            </p>
          </div>

          {/* Partner Logos */}
          <PartnerLogos />
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}
