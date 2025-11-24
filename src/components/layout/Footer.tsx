import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Tapti Food & Spices Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
                  Tapti Food &amp; Spices
                </h3>
                <p className="text-xs font-medium text-muted-foreground">शुद्धता का वादा</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              100% adulteration-free premium food and spices sourced directly from our farms. Experience the taste of purity.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3">
              <Link
                href="https://www.facebook.com/share/1ALNnyV4yz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.instagram.com/taptifoodspices/?utm_source=qr&igsh=dXIxb2ZzemM1ZXZ4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://x.com/Tapti_food"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 transition-colors"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://wa.me/919329216544"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-700 transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/products" className="hover:text-amber-700 hover:underline transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-700 hover:underline transition-colors">
                  Spices &amp; Masalas
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-700 hover:underline transition-colors">
                  Organic Oils
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-700 hover:underline transition-colors">
                  Premium Teas
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="hover:text-amber-700 hover:underline transition-colors">
                  Wholesale Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-amber-700 hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-700 hover:underline transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-700 hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-700 hover:underline transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900">Legal &amp; Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-700 hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-amber-700 hover:underline transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-amber-700 hover:underline transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-700 hover:underline transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-700 hover:underline transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-8"></div>

        {/* Certifications & Registration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">FSSAI Licensed</p>
            <p className="text-sm text-muted-foreground">License No: 21425150001179</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">GST Registered</p>
            <p className="text-sm text-muted-foreground">GST No: 23GGLPD7346M1ZZ</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">UDYAM Registration</p>
            <p className="text-sm text-muted-foreground">UDYAM-MP-08-0030813</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Our Locations</p>
              <p className="text-sm text-muted-foreground">Multai | Betul | Bhopal | Indore</p>
              <p className="text-sm text-muted-foreground">Madhya Pradesh, India</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Email Us</p>
              <a
                href="mailto:info@taptifs.com"
                className="text-sm text-muted-foreground hover:text-amber-700 hover:underline transition-colors"
              >
                info@taptifs.com
              </a>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Call Us</p>
              <p className="text-sm text-muted-foreground">+91-93292 16544</p>
              <p className="text-sm text-muted-foreground">+91-97703 55137</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Tapti Food &amp; Spices (TAPTIFS™). All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Made with care for your health and happiness
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
