import mongoose, { Schema, Document } from 'mongoose';

export interface IWholesaleApplication extends Document {
  _id: mongoose.Types.ObjectId;
  userId?: mongoose.Types.ObjectId;
  businessName: string;
  contactName: string;
  email: string;
  phoneNumber: string;
  businessType: string;
  gstNumber?: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  estimatedMonthlyVolume?: string;
  productsInterested: string[];
  additionalInfo?: string;
  status: 'pending' | 'under_review' | 'approved' | 'rejected';
  reviewedBy?: mongoose.Types.ObjectId;
  reviewedAt?: Date;
  reviewNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const WholesaleApplicationSchema = new Schema<IWholesaleApplication>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    businessName: {
      type: String,
      required: true,
      trim: true,
    },
    contactName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    businessType: {
      type: String,
      required: true,
      trim: true,
    },
    gstNumber: {
      type: String,
      uppercase: true,
      trim: true,
    },
    address: {
      line1: {
        type: String,
        required: true,
        trim: true,
      },
      line2: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      postalCode: {
        type: String,
        required: true,
        trim: true,
      },
      country: {
        type: String,
        required: true,
        default: 'India',
        trim: true,
      },
    },
    estimatedMonthlyVolume: {
      type: String,
      trim: true,
    },
    productsInterested: {
      type: [String],
      default: [],
    },
    additionalInfo: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'under_review', 'approved', 'rejected'],
      default: 'pending',
    },
    reviewedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    reviewedAt: {
      type: Date,
    },
    reviewNotes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
WholesaleApplicationSchema.index({ email: 1 });
WholesaleApplicationSchema.index({ status: 1 });
WholesaleApplicationSchema.index({ userId: 1 });

export default mongoose.models.WholesaleApplication ||
  mongoose.model<IWholesaleApplication>('WholesaleApplication', WholesaleApplicationSchema);
