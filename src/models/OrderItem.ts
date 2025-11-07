import mongoose, { Schema, Document } from 'mongoose';

export interface IOrderItem extends Document {
  _id: mongoose.Types.ObjectId;
  orderId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  productName: string;
  productSku: string;
  productImage?: string;
  quantity: number;
  priceAtPurchase: number;
  subtotal: number;
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<IOrderItem>(
  {
    orderId: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productSku: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    priceAtPurchase: {
      type: Number,
      required: true,
      min: 0,
    },
    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
OrderItemSchema.index({ orderId: 1 });
OrderItemSchema.index({ productId: 1 });

export default mongoose.models.OrderItem ||
  mongoose.model<IOrderItem>('OrderItem', OrderItemSchema);
