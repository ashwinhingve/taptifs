import mongoose, { Schema, Document } from 'mongoose';

export interface IWishlistItem extends Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const WishlistItemSchema = new Schema<IWishlistItem>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Unique constraint: one wishlist entry per user per product
WishlistItemSchema.index({ userId: 1, productId: 1 }, { unique: true });
WishlistItemSchema.index({ userId: 1 });

export default mongoose.models.WishlistItem ||
  mongoose.model<IWishlistItem>('WishlistItem', WishlistItemSchema);
