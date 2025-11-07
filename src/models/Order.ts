import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  _id: mongoose.Types.ObjectId;
  orderNumber: string;
  userId: mongoose.Types.ObjectId;
  items: mongoose.Types.ObjectId[];
  subtotal: number;
  shippingCost: number;
  taxAmount: number;
  discountAmount: number;
  totalAmount: number;
  orderStatus:
    | 'pending'
    | 'confirmed'
    | 'processing'
    | 'shipped'
    | 'delivered'
    | 'cancelled'
    | 'refunded';
  paymentMethod: 'cod' | 'card' | 'upi' | 'netbanking' | 'wallet';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentId?: string;
  shippingAddressId: mongoose.Types.ObjectId;
  billingAddressId?: mongoose.Types.ObjectId;
  trackingNumber?: string;
  estimatedDelivery?: Date;
  deliveredAt?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: 'OrderItem',
      },
    ],
    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },
    shippingCost: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    taxAmount: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    discountAmount: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    orderStatus: {
      type: String,
      enum: [
        'pending',
        'confirmed',
        'processing',
        'shipped',
        'delivered',
        'cancelled',
        'refunded',
      ],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      enum: ['cod', 'card', 'upi', 'netbanking', 'wallet'],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'refunded'],
      default: 'pending',
    },
    paymentId: {
      type: String,
    },
    shippingAddressId: {
      type: Schema.Types.ObjectId,
      ref: 'Address',
      required: true,
    },
    billingAddressId: {
      type: Schema.Types.ObjectId,
      ref: 'Address',
    },
    trackingNumber: {
      type: String,
    },
    estimatedDelivery: {
      type: Date,
    },
    deliveredAt: {
      type: Date,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
OrderSchema.index({ orderNumber: 1 });
OrderSchema.index({ userId: 1, createdAt: -1 });
OrderSchema.index({ orderStatus: 1 });
OrderSchema.index({ paymentStatus: 1 });

// Auto-generate order number before save if not exists
OrderSchema.pre('save', async function (next) {
  if (!this.orderNumber) {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    this.orderNumber = `ORD-${timestamp}-${random}`;
  }
  next();
});

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
