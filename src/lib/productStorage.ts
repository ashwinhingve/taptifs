import { products as initialProducts } from "@/data/products"
import type { ProductData } from "@/data/products"

// Helper functions for product storage
export const getProducts = (): ProductData[] => {
  if (typeof window === "undefined") return initialProducts

  const savedProducts = localStorage.getItem("adminProducts")
  if (savedProducts) {
    try {
      return JSON.parse(savedProducts)
    } catch (e) {
      console.error("Error parsing saved products:", e)
      return initialProducts
    }
  }
  return initialProducts
}

export const saveProducts = (products: ProductData[]): void => {
  if (typeof window === "undefined") return
  localStorage.setItem("adminProducts", JSON.stringify(products))
}

export const getActiveProducts = (): ProductData[] => {
  return getProducts().filter(p => p.is_active)
}
