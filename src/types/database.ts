// Database Types for TAPTIFS (MongoDB with Mongoose)
// Re-export types from Mongoose models for use throughout the application

export type {
  IUser,
  IProduct,
  IReview,
  IAddress,
  IOrder,
  IOrderItem,
  ICartItem,
  IWishlistItem,
  IWholesaleApplication,
} from '@/models';

// Legacy type aliases for backward compatibility (if needed)
// These map the old Supabase types to new MongoDB types
import type { IUser, IProduct, IReview, IAddress, IOrder, IOrderItem, ICartItem, IWishlistItem, IWholesaleApplication } from '@/models';

export type Profile = IUser;
export type Product = IProduct;
export type ProductReview = IReview;
export type Address = IAddress;
export type Order = IOrder;
export type OrderItem = IOrderItem;
export type CartItem = ICartItem;
export type WishlistItem = IWishlistItem;
export type WholesaleApplication = IWholesaleApplication;
