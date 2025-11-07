import mongoose, { Schema, Document } from 'mongoose';

export interface ICartItem extends Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

const CartItemSchema = new Schema<ICartItem>(
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
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

// Unique constraint: one cart item per user per product
CartItemSchema.index({ userId: 1, productId: 1 }, { unique: true });
CartItemSchema.index({ userId: 1 });

export default mongoose.models.CartItem ||
  mongoose.model<ICartItem>('CartItem', CartItemSchema);
