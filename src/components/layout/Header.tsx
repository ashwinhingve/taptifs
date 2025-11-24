"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { useCartStore } from "@/store/useCartStore";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo and Brand */}
        <Link
          href="/"
          className="flex items-center space-x-3 group transition-opacity hover:opacity-80"
          aria-label="Tapti Food & Spices - Home"
        >
          <div className="relative h-12 w-12 md:h-16 md:w-16 shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Tapti Food & Spices Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent leading-tight">
              Tapti Food &amp; Spices
            </span>
            <span className="text-xs md:text-sm font-semibold text-muted-foreground hidden sm:block">
              शुद्धता का वादा - The Taste of Purity
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center" aria-label="Main navigation">
          <Navigation />
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Search Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex hover:bg-amber-50 hover:text-amber-700 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* User Account */}
          <Link href="/login">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-amber-50 hover:text-amber-700 transition-colors"
              aria-label="User account"
            >
              <User className="h-5 w-5" />
            </Button>
          </Link>

          {/* Shopping Cart */}
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-amber-50 hover:text-amber-700 transition-colors"
              aria-label={`Shopping cart${mounted && totalItems > 0 ? ` with ${totalItems} items` : ''}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-amber-600 to-red-700 text-xs text-white flex items-center justify-center font-bold shadow-md">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-amber-50 hover:text-amber-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
