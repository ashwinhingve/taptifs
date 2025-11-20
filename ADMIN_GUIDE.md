# Admin Panel Guide - Tapti Food & Spices

## Overview
The admin panel allows you to manage products for your Tapti Food & Spices website.

## Accessing the Admin Panel

### Login URL
Navigate to: `http://localhost:3000/login`

### Default Admin Credentials
- **Email:** `admin@taptifs.com`
- **Password:** `tapti@admin2024`

The login page automatically detects admin credentials and redirects to the admin dashboard.

⚠️ **Important:** Change these credentials in production!

## Features

### 1. Dashboard Overview
After logging in, you'll see:
- Total number of products
- Active products count
- Total categories
- Complete product list with management options

### 2. Add New Product
Click the "Add New Product" button to open the product form.

#### Required Fields:
- **Product Name** - Full name of the product
- **SKU** - Stock Keeping Unit (unique identifier)
- **Short Description** - Brief product description (shown in cards)
- **Description** - Full product description
- **Category** - Select from available categories
- **Price** - Selling price in ₹
- **Stock Quantity** - Available stock
- **Unit** - Measurement unit (g, kg, ml, l, pcs)
- **Image URL** - Product image URL

#### Optional Fields:
- **Subcategory** - Additional categorization
- **Original Price** - MRP (for showing discounts)
- **Weight** - Product weight/volume
- **Amazon URL** - Link to Amazon listing
- **Tags** - Comma-separated tags for SEO
- **Featured** - Check to feature product
- **Active** - Uncheck to hide product from website

### 3. Edit Product
Click the edit icon (✏️) next to any product to modify its details.

### 4. Delete Product
Click the delete icon (🗑️) to remove a product. Confirmation required.

### 5. View Products
All products are displayed in a table with:
- Product image
- Name and SKU
- Category
- Price
- Stock quantity
- Status (Active/Inactive)
- Action buttons

## Data Storage

Currently, products are stored in **localStorage** (browser storage). This means:

### ✅ Advantages:
- No backend required
- Instant updates
- Simple implementation

### ⚠️ Limitations:
- Data is browser-specific
- Clearing browser data will reset products
- Not suitable for multi-admin environments
- Not persistent across devices

### 🔄 For Production:
Consider implementing a proper backend with:
- Database (PostgreSQL, MongoDB, etc.)
- API endpoints for CRUD operations
- Authentication with JWT tokens
- Image upload to cloud storage (AWS S3, Cloudinary)

## Security Notes

1. **Change Default Password:** Update the hardcoded credentials in `/src/app/admin/login/page.tsx`
2. **Add Proper Auth:** Implement JWT or session-based authentication
3. **Protect Routes:** Add middleware to protect admin routes
4. **Input Validation:** Add server-side validation for all inputs
5. **HTTPS Only:** Use HTTPS in production
6. **Rate Limiting:** Add rate limiting to prevent brute force attacks

## Product Display

Products added via admin panel will automatically appear on:
- Products page (`/products`)
- Homepage (if featured)
- Category pages (based on category selection)

Active products are shown immediately without requiring a page reload.

## Troubleshooting

### Products not showing on website?
1. Check if product is marked as "Active"
2. Clear browser cache
3. Check browser console for errors

### Lost admin access?
The credentials are hardcoded in the login page. Check `/src/app/admin/login/page.tsx`

### Products disappeared?
Check if localStorage was cleared. Products are stored in browser storage under key `adminProducts`

## Future Enhancements

Consider adding:
- [ ] Image upload functionality
- [ ] Bulk product import/export (CSV)
- [ ] Product categories management
- [ ] Order management
- [ ] Analytics dashboard
- [ ] Multi-admin support
- [ ] Product variants (sizes, colors)
- [ ] Inventory alerts
- [ ] SEO optimization fields

## Support

For technical issues or questions:
- Email: info@taptifs.com
- Phone: +91-93292 16544
