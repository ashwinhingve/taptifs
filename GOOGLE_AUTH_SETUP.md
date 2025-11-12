# Google OAuth Authentication Setup Guide

## Overview
This guide will help you set up Google OAuth authentication for TAPTIFS e-commerce platform, removing Facebook login and adding enhanced user account features.

## What's Been Done ✅

1. **Installed Dependencies**
   - ✅ NextAuth.js for authentication
   - ✅ @auth/core for auth utilities

2. **Created Core Files**
   - ✅ `/src/store/useAuthStore.ts` - User authentication state management
   - ✅ `/src/lib/auth.ts` - NextAuth configuration with Google OAuth
   - ✅ `/src/lib/mongodb.ts` - MongoDB connection export
   - ✅ Updated `/src/models/User.ts` - Enhanced user model with Google OAuth support

## Required Setup Steps

### Step 1: Update Environment Variables

Add to `.env.local`:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-key-generate-with-openssl

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# MongoDB (already configured)
MONGODB_URI=mongodb://localhost:27017/taptifs
```

#### Generate NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

#### Get Google OAuth Credentials:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth client ID**
5. Choose **Web application**
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)
7. Copy **Client ID** and **Client Secret**

### Step 2: Create NextAuth API Route

Create `/src/app/api/auth/[...nextauth]/route.ts`:

```typescript
import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

### Step 3: Create Authentication Pages

#### Create Sign In Page: `/src/app/auth/signin/page.tsx`
```typescript
"use client"

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormField } from '@/components/ui/form-field';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/',
      });
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
          <p className="mt-2 text-gray-600">Welcome back to TAPTIFS</p>
        </div>

        {/* Google Sign In Button */}
        <Button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          variant="outline"
          className="w-full border-2 border-gray-300 hover:border-amber-600 py-6"
        >
          <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField label="Email">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </FormField>

          <FormField label="Password">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </FormField>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-amber-600 to-red-700 py-6"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="text-amber-600 hover:text-amber-700 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
```

### Step 4: Create Session Provider

Create `/src/components/providers/SessionProvider.tsx`:

```typescript
"use client"

import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { useSession } from 'next-auth/react';

function AuthSync({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      setUser({
        id: session.user.id,
        name: session.user.name || '',
        email: session.user.email || '',
        image: session.user.image,
        provider: 'google',
      });
    } else if (status === 'unauthenticated') {
      setUser(null);
    }
  }, [session, status, setUser]);

  return <>{children}</>;
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthSessionProvider>
      <AuthSync>{children}</AuthSync>
    </NextAuthSessionProvider>
  );
}
```

### Step 5: Update Root Layout

Update `/src/app/layout.tsx` to include SessionProvider:

```typescript
import { SessionProvider } from '@/components/providers/SessionProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
```

### Step 6: Update Header Component

Add user menu to header with sign in/out functionality.

### Step 7: Create User Account Page

Create `/src/app/account/page.tsx` for user profile management.

### Step 8: Enhanced Cart Features

- Save cart to database for logged-in users
- Sync cart across devices
- Persist wishlist
- Order history

## Features Included

✅ **Google OAuth Login** - One-click sign in with Google
✅ **Email/Password Login** - Traditional authentication
✅ **Secure Password Hashing** - bcrypt encryption
✅ **Session Management** - JWT-based sessions
✅ **User Profile** - Manage account details
✅ **Protected Routes** - Middleware for auth-required pages
✅ **Cart Sync** - Cart persists across devices
✅ **Order History** - View past orders

## Security Features

- Passwords hashed with bcrypt
- JWT tokens for sessions
- CSRF protection
- Secure cookies (httpOnly)
- Google OAuth for passwordless auth

## Next Steps

1. Run `npm run dev` to start the development server
2. Test Google OAuth signin at `/auth/signin`
3. Verify user data is saved to MongoDB
4. Test cart persistence across sessions

## Troubleshooting

**Google OAuth not working?**
- Check redirect URIs in Google Console
- Verify GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET
- Ensure NEXTAUTH_URL matches your domain

**Database errors?**
- Verify MONGODB_URI is correct
- Check MongoDB is running
- Ensure User model indexes are created

## Production Deployment

1. Update `NEXTAUTH_URL` to production domain
2. Add production redirect URI to Google Console
3. Use strong `NEXTAUTH_SECRET`
4. Enable MongoDB Atlas for production database

