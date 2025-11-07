// Database Types for TAPTIFS

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  is_wholesale: boolean;
  wholesale_approved: boolean;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  price: number;
  wholesale_price?: number;
  category: string;
  subcategory?: string;
  sku: string;
  stock_quantity: number;
  low_stock_threshold: number;
  weight?: number;
  unit: string;
  featured: boolean;
  is_active: boolean;
  images: string[];
  tags: string[];
  average_rating: number;
  review_count: number;
  created_at: string;
  updated_at: string;
}

export interface ProductReview {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  title?: string;
  comment?: string;
  images: string[];
  verified_purchase: boolean;
  helpful_count: number;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
}

export interface Address {
  id: string;
  user_id: string;
  address_type: "shipping" | "billing";
  is_default: boolean;
  full_name: string;
  phone: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  order_number: string;
  user_id?: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  payment_status: "pending" | "completed" | "failed" | "refunded";
  payment_method?: string;
  payment_intent_id?: string;

  // Pricing
  subtotal: number;
  shipping_cost: number;
  tax: number;
  discount: number;
  total: number;

  // Shipping Address
  shipping_full_name: string;
  shipping_phone: string;
  shipping_address_line1: string;
  shipping_address_line2?: string;
  shipping_city: string;
  shipping_state: string;
  shipping_postal_code: string;
  shipping_country: string;

  // Tracking
  tracking_number?: string;
  shipped_at?: string;
  delivered_at?: string;

  // Notes
  customer_notes?: string;
  admin_notes?: string;

  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id?: string;
  product_name: string;
  product_sku: string;
  product_image?: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
  created_at: string;
}

export interface CartItem {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  created_at: string;
  updated_at: string;
  product?: Product; // Joined data
}

export interface WishlistItem {
  id: string;
  user_id: string;
  product_id: string;
  created_at: string;
  product?: Product; // Joined data
}

export interface WholesaleApplication {
  id: string;
  user_id: string;
  company_name: string;
  business_type?: string;
  tax_id?: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  website?: string;
  status: "pending" | "approved" | "rejected";
  notes?: string;
  reviewed_at?: string;
  reviewed_by?: string;
  created_at: string;
  updated_at: string;
}
