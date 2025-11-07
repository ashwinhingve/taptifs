# TAPTIFS - Tapti Food & Spices E-commerce Website

A modern, production-ready e-commerce website for premium spices and food products, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### Phase 1: Foundation (COMPLETED ✅)
- ✅ Next.js 14 with App Router and TypeScript
- ✅ Tailwind CSS + shadcn/ui components
- ✅ Responsive layout with Header, Footer, and Navigation
- ✅ Route groups for organized page structure
- ✅ Supabase integration configured
- ✅ Database schema designed
- ✅ Modern homepage with hero section and featured products

### Upcoming Features (Roadmap)
- **E-commerce Core**: Product listings, shopping cart, checkout
- **Payment Integration**: Stripe and PayPal
- **User Authentication**: Login, signup, account management
- **Recipe Blog**: Sanity CMS integration
- **Reviews & Ratings**: Customer feedback system
- **Wholesale Portal**: B2B ordering system
- **Admin Dashboard**: Order and inventory management

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (for database)
- Stripe account (for payments - optional for development)

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your credentials:

```env
# Required for database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Required for payments (add when implementing)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret

# Optional services
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
```

### 3. Set Up Database

1. Create a new project in [Supabase](https://supabase.com)
2. Go to SQL Editor in your Supabase dashboard
3. Copy the contents of `database-schema.sql`
4. Execute the SQL to create all tables and policies

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
taptifs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (shop)/            # Shop route group
│   │   ├── (recipes)/         # Recipes route group
│   │   ├── (account)/         # Account route group
│   │   ├── (wholesale)/       # Wholesale route group
│   │   ├── (info)/            # Info pages route group
│   │   └── api/               # API routes
│   ├── components/            # React components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── layout/            # Header, Footer, Navigation
│   │   ├── products/          # Product components
│   │   ├── cart/              # Cart components
│   │   └── ...
│   ├── lib/                   # Utilities and configurations
│   │   ├── supabase/          # Supabase clients
│   │   ├── utils.ts           # Helper functions
│   │   └── constants.ts       # App constants
│   ├── types/                 # TypeScript type definitions
│   ├── store/                 # State management (Zustand)
│   ├── hooks/                 # Custom React hooks
│   └── styles/                # Global styles
├── database-schema.sql        # Complete database schema
├── .env.example               # Environment variables template
└── components.json            # shadcn/ui configuration
```

## 🗃️ Database Schema

The application uses PostgreSQL (via Supabase) with the following main tables:

- **profiles**: User profile information
- **products**: Product catalog with pricing and inventory
- **product_reviews**: Customer reviews and ratings
- **orders**: Order management with full details
- **order_items**: Individual items in orders
- **cart_items**: Persistent shopping cart
- **wishlist_items**: User wishlists
- **addresses**: Shipping and billing addresses
- **wholesale_applications**: B2B customer applications

All tables have Row Level Security (RLS) enabled for data protection.

## 🎨 Tech Stack

### Core
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI + Tailwind)

### Backend & Database
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **ORM**: Supabase JavaScript Client

### Payment & Services (To be integrated)
- **Payments**: Stripe + PayPal
- **CMS**: Sanity for recipes and blog
- **State Management**: Zustand
- **Email**: Resend or SendGrid

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Environment Variables for Production

Make sure to add all required environment variables in your deployment platform:
- Supabase credentials
- Stripe keys
- Sanity CMS credentials (when added)
- Email service API keys (when added)

## 📝 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Run linter
npm run lint
```

## 🔐 Security

- All database tables use Row Level Security (RLS)
- Authentication handled by Supabase
- Payment processing through secure Stripe integration
- Environment variables for sensitive data
- CORS and CSRF protection

## 📈 Performance Optimizations

- Next.js Image optimization for all product images
- Server-side rendering for SEO
- Code splitting and lazy loading
- Static page generation where possible
- Optimized bundle size with tree-shaking

## 🤝 Contributing

This is a private project, but contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Copyright © 2025 TAPTIFS - Tapti Food & Spices. All rights reserved.

## 📧 Contact

For questions or support, contact: info@taptifs.com

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
