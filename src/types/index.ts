// Main Types Export

export * from "./database";

// =============================================
// UI/Component Types
// =============================================

export interface NavItem {
  href: string;
  label: string;
  children?: NavItem[];
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface SortOption {
  label: string;
  value: string;
}

// =============================================
// Cart & Checkout Types
// =============================================

export interface CartState {
  items: CartItemWithProduct[];
  total: number;
  itemCount: number;
}

export interface CartItemWithProduct {
  id: string;
  product_id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    images: string[];
    stock_quantity: number;
  };
}

export interface CheckoutFormData {
  email: string;
  shipping: {
    full_name: string;
    phone: string;
    address_line1: string;
    address_line2?: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  payment_method: "card" | "paypal";
  customer_notes?: string;
}

// =============================================
// Product Filters Types
// =============================================

export interface ProductFilters {
  category?: string;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  inStock?: boolean;
  featured?: boolean;
  search?: string;
}

export interface ProductSort {
  field: "price" | "name" | "created_at" | "average_rating";
  direction: "asc" | "desc";
}

// =============================================
// Pagination Types
// =============================================

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// =============================================
// API Response Types
// =============================================

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationState;
}

// =============================================
// Form Types
// =============================================

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  email: string;
  password: string;
  full_name: string;
  phone?: string;
}

export interface ReviewFormData {
  rating: number;
  title?: string;
  comment: string;
  images?: File[];
}

export interface AddressFormData {
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
}

export interface WholesaleFormData {
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
}
