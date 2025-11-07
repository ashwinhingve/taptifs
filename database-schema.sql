-- =============================================
-- TAPTIFS Database Schema
-- =============================================
-- This file contains the SQL schema for the TAPTIFS e-commerce application
-- Execute these commands in your Supabase SQL Editor

-- =============================================
-- Enable UUID Extension
-- =============================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- USERS TABLE (extends Supabase auth.users)
-- =============================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  phone TEXT,
  is_wholesale BOOLEAN DEFAULT FALSE,
  wholesale_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- =============================================
-- PRODUCTS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  short_description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  wholesale_price DECIMAL(10, 2),
  category TEXT NOT NULL,
  subcategory TEXT,
  sku TEXT UNIQUE NOT NULL,
  stock_quantity INTEGER DEFAULT 0,
  low_stock_threshold INTEGER DEFAULT 10,
  weight DECIMAL(10, 2), -- in grams
  unit TEXT DEFAULT 'g',
  featured BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  images TEXT[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  average_rating DECIMAL(3, 2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- =============================================
-- PRODUCT REVIEWS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.product_reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  title TEXT,
  comment TEXT,
  images TEXT[] DEFAULT '{}',
  verified_purchase BOOLEAN DEFAULT FALSE,
  helpful_count INTEGER DEFAULT 0,
  is_approved BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(product_id, user_id)
);

-- =============================================
-- ADDRESSES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.addresses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  address_type TEXT CHECK (address_type IN ('shipping', 'billing')) NOT NULL,
  is_default BOOLEAN DEFAULT FALSE,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  address_line1 TEXT NOT NULL,
  address_line2 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'US',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- =============================================
-- ORDERS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  status TEXT CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')) DEFAULT 'pending',
  payment_status TEXT CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')) DEFAULT 'pending',
  payment_method TEXT,
  payment_intent_id TEXT,

  -- Pricing
  subtotal DECIMAL(10, 2) NOT NULL,
  shipping_cost DECIMAL(10, 2) DEFAULT 0,
  tax DECIMAL(10, 2) DEFAULT 0,
  discount DECIMAL(10, 2) DEFAULT 0,
  total DECIMAL(10, 2) NOT NULL,

  -- Shipping Address
  shipping_full_name TEXT NOT NULL,
  shipping_phone TEXT NOT NULL,
  shipping_address_line1 TEXT NOT NULL,
  shipping_address_line2 TEXT,
  shipping_city TEXT NOT NULL,
  shipping_state TEXT NOT NULL,
  shipping_postal_code TEXT NOT NULL,
  shipping_country TEXT NOT NULL,

  -- Tracking
  tracking_number TEXT,
  shipped_at TIMESTAMP WITH TIME ZONE,
  delivered_at TIMESTAMP WITH TIME ZONE,

  -- Notes
  customer_notes TEXT,
  admin_notes TEXT,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- =============================================
-- ORDER ITEMS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.order_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,

  -- Product snapshot (in case product is deleted)
  product_name TEXT NOT NULL,
  product_sku TEXT NOT NULL,
  product_image TEXT,

  quantity INTEGER NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  subtotal DECIMAL(10, 2) NOT NULL,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- =============================================
-- CART TABLE (persistent cart)
-- =============================================
CREATE TABLE IF NOT EXISTS public.cart_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(user_id, product_id)
);

-- =============================================
-- WISHLIST TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.wishlist_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(user_id, product_id)
);

-- =============================================
-- WHOLESALE APPLICATIONS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.wholesale_applications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  company_name TEXT NOT NULL,
  business_type TEXT,
  tax_id TEXT,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  country TEXT DEFAULT 'US',
  website TEXT,
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  notes TEXT,
  reviewed_at TIMESTAMP WITH TIME ZONE,
  reviewed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- =============================================
-- INDEXES for Performance
-- =============================================
CREATE INDEX idx_products_category ON public.products(category);
CREATE INDEX idx_products_slug ON public.products(slug);
CREATE INDEX idx_products_featured ON public.products(featured) WHERE featured = TRUE;
CREATE INDEX idx_orders_user_id ON public.orders(user_id);
CREATE INDEX idx_orders_status ON public.orders(status);
CREATE INDEX idx_order_items_order_id ON public.order_items(order_id);
CREATE INDEX idx_product_reviews_product_id ON public.product_reviews(product_id);
CREATE INDEX idx_cart_items_user_id ON public.cart_items(user_id);
CREATE INDEX idx_wishlist_items_user_id ON public.wishlist_items(user_id);

-- =============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wishlist_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wholesale_applications ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read and update their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Products: Public read access
CREATE POLICY "Anyone can view active products" ON public.products
  FOR SELECT USING (is_active = TRUE);

-- Reviews: Users can create their own reviews and read all approved reviews
CREATE POLICY "Anyone can view approved reviews" ON public.product_reviews
  FOR SELECT USING (is_approved = TRUE);

CREATE POLICY "Users can create reviews" ON public.product_reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reviews" ON public.product_reviews
  FOR UPDATE USING (auth.uid() = user_id);

-- Addresses: Users can manage their own addresses
CREATE POLICY "Users can manage own addresses" ON public.addresses
  FOR ALL USING (auth.uid() = user_id);

-- Orders: Users can view their own orders
CREATE POLICY "Users can view own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id);

-- Order Items: Users can view items from their own orders
CREATE POLICY "Users can view own order items" ON public.order_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Cart: Users can manage their own cart
CREATE POLICY "Users can manage own cart" ON public.cart_items
  FOR ALL USING (auth.uid() = user_id);

-- Wishlist: Users can manage their own wishlist
CREATE POLICY "Users can manage own wishlist" ON public.wishlist_items
  FOR ALL USING (auth.uid() = user_id);

-- Wholesale Applications: Users can view and create their own applications
CREATE POLICY "Users can manage own wholesale applications" ON public.wholesale_applications
  FOR ALL USING (auth.uid() = user_id);

-- =============================================
-- FUNCTIONS & TRIGGERS
-- =============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at trigger to relevant tables
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_product_reviews_updated_at BEFORE UPDATE ON public.product_reviews
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_addresses_updated_at BEFORE UPDATE ON public.addresses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cart_items_updated_at BEFORE UPDATE ON public.cart_items
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_wholesale_applications_updated_at BEFORE UPDATE ON public.wholesale_applications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to update product average rating
CREATE OR REPLACE FUNCTION update_product_rating()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.products
    SET
        average_rating = (
            SELECT COALESCE(AVG(rating), 0)
            FROM public.product_reviews
            WHERE product_id = NEW.product_id AND is_approved = TRUE
        ),
        review_count = (
            SELECT COUNT(*)
            FROM public.product_reviews
            WHERE product_id = NEW.product_id AND is_approved = TRUE
        )
    WHERE id = NEW.product_id;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_product_rating_on_review AFTER INSERT OR UPDATE ON public.product_reviews
    FOR EACH ROW EXECUTE FUNCTION update_product_rating();
