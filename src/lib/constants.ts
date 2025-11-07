// Application Constants

export const SITE_NAME = "TAPTIFS";
export const SITE_DESCRIPTION = "Premium Quality Food & Spices";

// Product Categories
export const PRODUCT_CATEGORIES = [
  "Spices",
  "Blends",
  "Seasonings",
  "Herbs",
  "Gift Sets",
] as const;

// Order Status
export const ORDER_STATUS = {
  PENDING: "pending",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
} as const;

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
  REFUNDED: "refunded",
} as const;

// Pagination
export const PRODUCTS_PER_PAGE = 12;
export const RECIPES_PER_PAGE = 9;

// Currency
export const CURRENCY = "USD";
export const CURRENCY_SYMBOL = "$";

// Shipping
export const FREE_SHIPPING_THRESHOLD = 50;
export const STANDARD_SHIPPING_COST = 5.99;

// Product Review
export const MAX_REVIEW_LENGTH = 500;
export const MIN_REVIEW_LENGTH = 10;

// Image Sizes
export const IMAGE_SIZES = {
  THUMBNAIL: { width: 200, height: 200 },
  SMALL: { width: 400, height: 400 },
  MEDIUM: { width: 800, height: 800 },
  LARGE: { width: 1200, height: 1200 },
};

// Social Media Links
export const SOCIAL_LINKS = {
  FACEBOOK: "https://facebook.com/taptifs",
  INSTAGRAM: "https://instagram.com/taptifs",
  TWITTER: "https://twitter.com/taptifs",
};

// Contact Info
export const CONTACT_EMAIL = "info@taptifs.com";
export const CONTACT_PHONE = "+1 (555) 123-4567";
