import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  sku: string;
  description: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  stock: number;
  images: string[];
  weight?: string;
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
    unit?: string;
  };
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  averageRating: number;
  totalReviews: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    subcategory: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    originalPrice: {
      type: Number,
      min: 0,
    },
    discountPercentage: {
      type: Number,
      min: 0,
      max: 100,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    images: {
      type: [String],
      default: [],
    },
    weight: {
      type: String,
    },
    dimensions: {
      length: Number,
      width: Number,
      height: Number,
      unit: {
        type: String,
        default: 'cm',
      },
    },
    tags: {
      type: [String],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalReviews: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
ProductSchema.index({ slug: 1 });
ProductSchema.index({ sku: 1 });
ProductSchema.index({ category: 1, isActive: 1 });
ProductSchema.index({ isFeatured: 1, isActive: 1 });
ProductSchema.index({ averageRating: -1 });

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
