import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password?: string;
  fullName?: string;
  name?: string;
  phoneNumber?: string;
  image?: string;
  provider?: 'google' | 'credentials';
  googleId?: string;
  role: 'customer' | 'admin' | 'wholesale_buyer';
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      minlength: 6,
      select: false, // Don't return password by default
    },
    fullName: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    },
    provider: {
      type: String,
      enum: ['google', 'credentials'],
      default: 'credentials',
    },
    googleId: {
      type: String,
      sparse: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['customer', 'admin', 'wholesale_buyer'],
      default: 'customer',
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index for email lookups
UserSchema.index({ email: 1 });

// Hash password before saving (only for credentials provider)
UserSchema.pre('save', async function (next) {
  // Skip if password is not modified or doesn't exist (Google OAuth users)
  if (!this.password || !this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    // Set email as verified for Google OAuth users
    if (this.provider === 'google') {
      this.emailVerified = true;
    }

    next();
  } catch (error: any) {
    next(error);
  }
});

// Index for Google ID lookups
UserSchema.index({ googleId: 1 });

// Method to compare password (only for credentials provider)
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  if (!this.password) {
    return false;
  }
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
