"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Plus, LogOut, Package, Edit, Trash2 } from "lucide-react"
import { products as initialProducts, categories } from "@/data/products"
import type { ProductData } from "@/data/products"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [products, setProducts] = useState<ProductData[]>(initialProducts)
  const [editingProduct, setEditingProduct] = useState<ProductData | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
      // Load products from localStorage if available
      const savedProducts = localStorage.getItem("adminProducts")
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts))
      }
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    localStorage.removeItem("adminUser")
    router.push("/admin/login")
  }

  const handleDeleteProduct = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter(p => p.id !== id)
      setProducts(updatedProducts)
      localStorage.setItem("adminProducts", JSON.stringify(updatedProducts))
    }
  }

  const handleEditProduct = (product: ProductData) => {
    setEditingProduct(product)
    setShowAddForm(true)
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-base text-gray-600">Tapti Food & Spices</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base text-gray-600 mb-1">Total Products</p>
                <p className="text-3xl font-bold text-gray-800">{products.length}</p>
              </div>
              <Package className="w-12 h-12 text-amber-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base text-gray-600 mb-1">Active Products</p>
                <p className="text-3xl font-bold text-green-600">
                  {products.filter(p => p.is_active).length}
                </p>
              </div>
              <Package className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base text-gray-600 mb-1">Categories</p>
                <p className="text-3xl font-bold text-blue-600">{categories.length}</p>
              </div>
              <Package className="w-12 h-12 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Add Product Button */}
        <div className="mb-6">
          <Button
            onClick={() => {
              setEditingProduct(null)
              setShowAddForm(!showAddForm)
            }}
            className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white"
          >
            <Plus className="w-5 h-5 mr-2" />
            {showAddForm ? "Hide Form" : "Add New Product"}
          </Button>
        </div>

        {/* Add/Edit Product Form */}
        {showAddForm && (
          <ProductForm
            product={editingProduct}
            products={products}
            setProducts={setProducts}
            onClose={() => {
              setShowAddForm(false)
              setEditingProduct(null)
            }}
          />
        )}

        {/* Products List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-800">Products List</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Image</th>
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Name</th>
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Category</th>
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Price</th>
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Stock</th>
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-base font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-base font-medium text-gray-800">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.sku}</p>
                    </td>
                    <td className="px-6 py-4 text-base text-gray-700">{product.category}</td>
                    <td className="px-6 py-4 text-base font-semibold text-gray-800">₹{product.price}</td>
                    <td className="px-6 py-4 text-base text-gray-700">{product.stock_quantity}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          product.is_active
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.is_active ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditProduct(product)}
                          className="border-blue-500 text-blue-500 hover:bg-blue-50"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteProduct(product.id)}
                          className="border-red-500 text-red-500 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

// Product Form Component
function ProductForm({
  product,
  products,
  setProducts,
  onClose,
}: {
  product: ProductData | null
  products: ProductData[]
  setProducts: (products: ProductData[]) => void
  onClose: () => void
}) {
  const [formData, setFormData] = useState<Partial<ProductData>>(
    product || {
      name: "",
      slug: "",
      description: "",
      short_description: "",
      price: 0,
      originalPrice: 0,
      category: "Superfoods",
      subcategory: "",
      sku: "",
      stock_quantity: 0,
      weight: 0,
      unit: "g",
      featured: false,
      is_active: true,
      images: [""],
      tags: [],
      average_rating: 0,
      review_count: 0,
      amazonUrl: "",
    }
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newProduct: ProductData = {
      id: product?.id || Date.now().toString(),
      name: formData.name!,
      slug: formData.slug || formData.name!.toLowerCase().replace(/\s+/g, "-"),
      description: formData.description!,
      short_description: formData.short_description!,
      price: Number(formData.price),
      originalPrice: formData.originalPrice ? Number(formData.originalPrice) : undefined,
      category: formData.category!,
      subcategory: formData.subcategory,
      sku: formData.sku!,
      stock_quantity: Number(formData.stock_quantity),
      weight: formData.weight ? Number(formData.weight) : undefined,
      unit: formData.unit!,
      featured: formData.featured!,
      is_active: formData.is_active!,
      images: formData.images!,
      tags: formData.tags!,
      average_rating: Number(formData.average_rating),
      review_count: Number(formData.review_count),
      amazonUrl: formData.amazonUrl,
    }

    let updatedProducts
    if (product) {
      // Edit existing product
      updatedProducts = products.map(p => p.id === product.id ? newProduct : p)
    } else {
      // Add new product
      updatedProducts = [...products, newProduct]
    }

    setProducts(updatedProducts)
    localStorage.setItem("adminProducts", JSON.stringify(updatedProducts))
    alert(product ? "Product updated successfully!" : "Product added successfully!")
    onClose()
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {product ? "Edit Product" : "Add New Product"}
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">Product Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
            required
          />
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">SKU *</label>
          <input
            type="text"
            value={formData.sku}
            onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-base font-semibold text-gray-700 mb-2">Short Description *</label>
          <input
            type="text"
            value={formData.short_description}
            onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-base font-semibold text-gray-700 mb-2">Description *</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">Category *</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
            required
          >
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">Subcategory</label>
          <input
            type="text"
            value={formData.subcategory}
            onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
          />
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">Price *</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
            required
          />
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">Original Price</label>
          <input
            type="number"
            value={formData.originalPrice || ""}
            onChange={(e) => setFormData({ ...formData, originalPrice: Number(e.target.value) })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
          />
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">Stock Quantity *</label>
          <input
            type="number"
            value={formData.stock_quantity}
            onChange={(e) => setFormData({ ...formData, stock_quantity: Number(e.target.value) })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
            required
          />
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">Weight</label>
          <input
            type="number"
            value={formData.weight || ""}
            onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
          />
        </div>

        <div>
          <label className="block text-base font-semibold text-gray-700 mb-2">Unit *</label>
          <select
            value={formData.unit}
            onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
            required
          >
            <option value="g">Grams (g)</option>
            <option value="kg">Kilograms (kg)</option>
            <option value="ml">Milliliters (ml)</option>
            <option value="l">Liters (l)</option>
            <option value="pcs">Pieces (pcs)</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-base font-semibold text-gray-700 mb-2">Image URL *</label>
          <input
            type="url"
            value={formData.images?.[0] || ""}
            onChange={(e) => setFormData({ ...formData, images: [e.target.value] })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-base font-semibold text-gray-700 mb-2">Amazon URL</label>
          <input
            type="url"
            value={formData.amazonUrl || ""}
            onChange={(e) => setFormData({ ...formData, amazonUrl: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
            placeholder="https://www.amazon.in/..."
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-base font-semibold text-gray-700 mb-2">Tags (comma separated)</label>
          <input
            type="text"
            value={formData.tags?.join(", ") || ""}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value.split(",").map(t => t.trim()) })}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-base"
            placeholder="organic, healthy, premium"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-base font-semibold text-gray-700">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
            />
            Featured Product
          </label>
        </div>

        <div>
          <label className="flex items-center gap-2 text-base font-semibold text-gray-700">
            <input
              type="checkbox"
              checked={formData.is_active}
              onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
              className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
            />
            Active
          </label>
        </div>

        <div className="md:col-span-2 flex gap-4">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white py-3 text-base font-semibold"
          >
            {product ? "Update Product" : "Add Product"}
          </Button>
          <Button
            type="button"
            onClick={onClose}
            variant="outline"
            className="flex-1 border-2 border-gray-300 py-3 text-base font-semibold"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
