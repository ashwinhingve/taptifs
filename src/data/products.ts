// Real TAPTI Food & Spices Products Data

export interface ProductData {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  sku: string;
  stock_quantity: number;
  weight?: number;
  unit: string;
  featured: boolean;
  is_active: boolean;
  images: string[];
  tags: string[];
  average_rating: number;
  review_count: number;
  amazonUrl?: string;
}

export const products: ProductData[] = [
  {
    id: "1",
    name: "Premium Chia Seeds",
    slug: "premium-chia-seeds",
    description: "100% Natural Raw Chia Seeds - High in Protein & Fiber. Perfect for smoothies, yogurt, and healthy recipes. Dairy-free and vegan-friendly superfood packed with omega-3 fatty acids.",
    short_description: "Premium Chia Seeds, 100% Natural Raw, High in Fiber",
    price: 250,
    originalPrice: 400,
    category: "Superfoods",
    subcategory: "Seeds",
    sku: "TAPTI-CHIA-001",
    stock_quantity: 50,
    weight: 200,
    unit: "g",
    featured: true,
    is_active: true,
    images: ["https://images.meesho.com/images/products/610646788/wuofi_512.webp"],
    tags: ["chia seeds", "superfood", "healthy", "vegan", "protein"],
    average_rating: 4.5,
    review_count: 23,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "2",
    name: "Natural Jaggery Combo Pack",
    slug: "natural-jaggery-combo",
    description: "Pure Natural Jaggery Combo - 500g Cubes + 500g Powder. Chemical-free traditional sweetener, rich in iron and minerals. Perfect replacement for refined sugar in all your recipes.",
    short_description: "Natural Jaggery Combo | 500g Cubes + 500g Powder",
    price: 313,
    originalPrice: 450,
    category: "Sweeteners",
    subcategory: "Jaggery",
    sku: "TAPTI-JAG-COMBO-001",
    stock_quantity: 40,
    weight: 1000,
    unit: "g",
    featured: true,
    is_active: true,
    images: ["https://images.meesho.com/images/products/603502006/ppnkj_512.webp"],
    tags: ["jaggery", "natural sweetener", "organic", "healthy"],
    average_rating: 4.7,
    review_count: 45,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "3",
    name: "Pure Jaggery Cubes",
    slug: "pure-jaggery-cubes",
    description: "Pure Jaggery Cubes 500g - Natural Gud, Chemical Free. Traditional Indian sweetener made from sugarcane juice. Rich in iron, magnesium, and potassium for better health.",
    short_description: "Pure Jaggery Cubes 500g, Natural Gud, Chemical Free",
    price: 273,
    originalPrice: 350,
    category: "Sweeteners",
    subcategory: "Jaggery",
    sku: "TAPTI-JAG-CUBE-001",
    stock_quantity: 60,
    weight: 500,
    unit: "g",
    featured: false,
    is_active: true,
    images: ["https://images.meesho.com/images/products/603463542/syhgj_512.webp"],
    tags: ["jaggery", "cubes", "natural", "healthy"],
    average_rating: 4.6,
    review_count: 31,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "4",
    name: "Premium Rajma (Kidney Beans)",
    slug: "premium-rajma-kidney-beans",
    description: "Premium Dudh Mogra Speckled Rajma - Protein Rich Kidney Beans. Naturally unpolished, high-quality pulses perfect for authentic North Indian recipes. Excellent source of plant-based protein.",
    short_description: "Premium Dudh Mogra Speckled Rajma, Protein Rich",
    price: 430,
    originalPrice: 550,
    category: "Pulses & Grains",
    subcategory: "Beans",
    sku: "TAPTI-RAJMA-001",
    stock_quantity: 35,
    weight: 1000,
    unit: "g",
    featured: true,
    is_active: true,
    images: ["https://images.meesho.com/images/products/580624828/ot9ue_512.webp"],
    tags: ["rajma", "kidney beans", "pulses", "protein", "dal"],
    average_rating: 4.8,
    review_count: 52,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "5",
    name: "Mixed Dry Fruits Powder",
    slug: "mixed-dry-fruits-powder",
    description: "Natural Dry Fruit Powder - Rich in Protein & Vitamins. Blend of premium dry fruits including almonds, cashews, and pistachios. Perfect for milk, smoothies, and desserts.",
    short_description: "Natural Dry Fruit Powder, Rich in Protein & Vitamins",
    price: 351,
    originalPrice: 500,
    category: "Dry Fruits",
    subcategory: "Powder",
    sku: "TAPTI-DRY-MIX-001",
    stock_quantity: 25,
    weight: 250,
    unit: "g",
    featured: true,
    is_active: true,
    images: ["https://images.meesho.com/images/products/610662805/0hh8f_512.webp"],
    tags: ["dry fruits", "powder", "healthy", "vitamins", "nutrition"],
    average_rating: 4.4,
    review_count: 18,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "6",
    name: "Premium Kashmiri Saffron",
    slug: "premium-kashmiri-saffron",
    description: "Premium Kashmiri Saffron - 100% Pure Natural Kesar. Authentic saffron threads for cooking, desserts, and traditional ceremonies. Known for its rich aroma and deep color.",
    short_description: "Premium Kashmiri Saffron, 100% Pure Natural Kesar",
    price: 192,
    originalPrice: 250,
    category: "Spices",
    subcategory: "Saffron",
    sku: "TAPTI-SAFF-001",
    stock_quantity: 20,
    weight: 1,
    unit: "g",
    featured: true,
    is_active: true,
    images: ["https://images.meesho.com/images/products/612121311/khjw1_512.webp"],
    tags: ["saffron", "kesar", "premium", "kashmiri", "spice"],
    average_rating: 4.9,
    review_count: 67,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "7",
    name: "Mix Dry Fruits Powder Premium",
    slug: "mix-dry-fruits-powder-premium",
    description: "Nutrimix Naturals Premium Dry Fruit Mixture - Mix of finest nuts and dried fruits. Energy-boosting blend rich in healthy fats, protein, and antioxidants.",
    short_description: "Nutrimix Naturals Premium Dry Fruit Mixture",
    price: 331,
    originalPrice: 450,
    category: "Dry Fruits",
    subcategory: "Powder",
    sku: "TAPTI-DRY-PREM-001",
    stock_quantity: 30,
    weight: 200,
    unit: "g",
    featured: false,
    is_active: true,
    images: ["https://images.meesho.com/images/products/581277662/bynx5_512.webp"],
    tags: ["dry fruits", "premium", "nutrition", "healthy"],
    average_rating: 4.5,
    review_count: 22,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "8",
    name: "Crispy Kurodi Papad",
    slug: "crispy-kurodi-papad",
    description: "Crispy Kurodi - Taste of Maharashtra Papad. Authentic traditional papad made with quality ingredients. Perfect accompaniment for Indian meals.",
    short_description: "Crispy Kurodi Taste of Maharashtra Papad",
    price: 190,
    originalPrice: 250,
    category: "Snacks",
    subcategory: "Papad",
    sku: "TAPTI-PAPAD-001",
    stock_quantity: 45,
    weight: 200,
    unit: "g",
    featured: false,
    is_active: true,
    images: ["https://images.meesho.com/images/products/565715264/dus29_512.webp"],
    tags: ["papad", "snacks", "crispy", "traditional"],
    average_rating: 4.3,
    review_count: 15,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "9",
    name: "Organic Chia Seeds 500g",
    slug: "organic-chia-seeds-500g",
    description: "Premium Raw Chia Seeds 500g - High Protein & Fiber. Sugar-free, vegan superfood perfect for weight management and heart health. Rich in omega-3 and antioxidants.",
    short_description: "Premium Raw Chia Seeds 500g, High Protein & Fiber",
    price: 280,
    originalPrice: 400,
    category: "Superfoods",
    subcategory: "Seeds",
    sku: "TAPTI-CHIA-500-001",
    stock_quantity: 40,
    weight: 500,
    unit: "g",
    featured: false,
    is_active: true,
    images: ["https://images.meesho.com/images/products/604759385/sca9q_512.webp"],
    tags: ["chia seeds", "organic", "superfood", "protein"],
    average_rating: 4.6,
    review_count: 28,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "10",
    name: "Pure Jaggery Cubes 150g",
    slug: "pure-jaggery-cubes-150g",
    description: "Pure Jaggery Cubes 150g - Natural Gud, Chemical Free. Small pack perfect for trying. Traditional sweetener rich in minerals and iron.",
    short_description: "Pure Jaggery Cubes 150g, Natural Gud, Chemical Free",
    price: 178,
    originalPrice: 220,
    category: "Sweeteners",
    subcategory: "Jaggery",
    sku: "TAPTI-JAG-150-001",
    stock_quantity: 55,
    weight: 150,
    unit: "g",
    featured: false,
    is_active: true,
    images: ["https://images.meesho.com/images/products/603484448/oguiy_512.webp"],
    tags: ["jaggery", "small pack", "natural"],
    average_rating: 4.5,
    review_count: 19,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "11",
    name: "Royal Kashmiri Saffron 5gm",
    slug: "royal-kashmiri-saffron-5gm",
    description: "Royal Kashmiri Kesar 5gm Threads - Premium quality for cooking & puja. Authentic saffron with certification. Intense aroma and color.",
    short_description: "Royal Kashmiri Kesar 5gm Threads for Cooking & Puja",
    price: 1018,
    originalPrice: 1500,
    category: "Spices",
    subcategory: "Saffron",
    sku: "TAPTI-SAFF-ROYAL-001",
    stock_quantity: 10,
    weight: 5,
    unit: "g",
    featured: true,
    is_active: true,
    images: ["https://images.meesho.com/images/products/612629980/reh7o_512.webp"],
    tags: ["saffron", "royal", "premium", "kashmiri"],
    average_rating: 5.0,
    review_count: 42,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "12",
    name: "Natural Gond Katira",
    slug: "natural-gond-katira",
    description: "Natural Gond Katira - Rich in Fiber for Skin & Hair. Ayurvedic superfood with cooling properties. Excellent for summer drinks and beauty care.",
    short_description: "Natural Gond Katira, Rich in Fiber for Skin & Hair",
    price: 196,
    originalPrice: 280,
    category: "Ayurvedic",
    subcategory: "Herbs",
    sku: "TAPTI-GOND-001",
    stock_quantity: 30,
    weight: 100,
    unit: "g",
    featured: false,
    is_active: true,
    images: ["https://images.meesho.com/images/products/621542930/qwdzn_512.webp"],
    tags: ["gond katira", "ayurvedic", "natural", "health"],
    average_rating: 4.4,
    review_count: 14,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "13",
    name: "Chemical Free Jaggery Powder",
    slug: "chemical-free-jaggery-powder",
    description: "Chemical Free Jaggery Powder - Pure Desi Gud, Healthy. Fine powder form for easy mixing in recipes. Natural sweetener with health benefits.",
    short_description: "Chemical Free Jaggery Powder, Pure Des Gud, Healthy",
    price: 133,
    originalPrice: 180,
    category: "Sweeteners",
    subcategory: "Jaggery",
    sku: "TAPTI-JAG-POW-001",
    stock_quantity: 50,
    weight: 250,
    unit: "g",
    featured: false,
    is_active: true,
    images: ["https://images.meesho.com/images/products/572068187/kbdkk_512.webp"],
    tags: ["jaggery", "powder", "chemical free", "healthy"],
    average_rating: 4.5,
    review_count: 21,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "14",
    name: "Pure Tulsi Powder",
    slug: "pure-tulsi-powder",
    description: "Pure Tulsi Powder - Holy Basil Leaf Powder 100g. Ayurvedic herb known for immunity boosting. Rich in antioxidants and adaptogens.",
    short_description: "Pure Tulsi Powder, Holy Basil Leaf Powder, 100g",
    price: 159,
    originalPrice: 200,
    category: "Ayurvedic",
    subcategory: "Herbs",
    sku: "TAPTI-TULSI-001",
    stock_quantity: 35,
    weight: 100,
    unit: "g",
    featured: false,
    is_active: true,
    images: ["https://images.meesho.com/images/products/572102536/kshyd_512.webp"],
    tags: ["tulsi", "ayurvedic", "immunity", "herbal"],
    average_rating: 4.7,
    review_count: 33,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "15",
    name: "Neem Tulsi Mix Powder",
    slug: "neem-tulsi-mix-powder",
    description: "Neem Tulsi Mix Powder - 100% Natural Herbal Blend. Powerful combination for skin care and immunity. Detoxifying and purifying properties.",
    short_description: "Neem Tulsi Mix Powder, 100% Natural Herbal Blend",
    price: 132,
    originalPrice: 180,
    category: "Ayurvedic",
    subcategory: "Herbs",
    sku: "TAPTI-NEEM-TULSI-001",
    stock_quantity: 40,
    weight: 100,
    unit: "g",
    featured: false,
    is_active: true,
    images: ["https://images.meesho.com/images/products/572085452/cwxnk_512.webp"],
    tags: ["neem", "tulsi", "ayurvedic", "skincare"],
    average_rating: 4.6,
    review_count: 27,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "16",
    name: "Organic Moringa Powder",
    slug: "organic-moringa-powder",
    description: "Organic Moringa Powder - Sahjan Patti Powder, Herbal. Nutrient-dense superfood rich in vitamins, minerals, and amino acids. Immunity booster.",
    short_description: "Organic Moringa Powder Sahjan Patti Powder, Herbal",
    price: 133,
    originalPrice: 180,
    category: "Ayurvedic",
    subcategory: "Superfoods",
    sku: "TAPTI-MORINGA-001",
    stock_quantity: 30,
    weight: 100,
    unit: "g",
    featured: false,
    is_active: true,
    images: ["https://images.meesho.com/images/products/581460345/dk5es_512.webp"],
    tags: ["moringa", "organic", "superfood", "immunity"],
    average_rating: 4.5,
    review_count: 20,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "17",
    name: "Speckled Rajma Premium",
    slug: "speckled-rajma-premium",
    description: "Speckled Rajma - Natural Unpolished, Protein Rich. High-quality kidney beans perfect for traditional recipes. Excellent plant-based protein source.",
    short_description: "Speckled Rajma, Natural Unpolished, Protein Rich",
    price: 431,
    originalPrice: 550,
    category: "Pulses & Grains",
    subcategory: "Beans",
    sku: "TAPTI-RAJMA-PREM-001",
    stock_quantity: 40,
    weight: 1000,
    unit: "g",
    featured: false,
    is_active: true,
    images: ["https://images.meesho.com/images/products/580629150/l3xpe_512.webp"],
    tags: ["rajma", "pulses", "protein", "natural"],
    average_rating: 4.7,
    review_count: 38,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  },
  {
    id: "18",
    name: "Premium Saffron Threads",
    slug: "premium-saffron-threads",
    description: "Premium Kashmiri Saffron Pure Kesar Threads - Natural. Authentic threads with rich color and aroma. Perfect for biryanis, desserts, and milk.",
    short_description: "Premium Kashmiri Saffron Pure Kesar Threads, Natural",
    price: 308,
    originalPrice: 450,
    category: "Spices",
    subcategory: "Saffron",
    sku: "TAPTI-SAFF-THREAD-001",
    stock_quantity: 25,
    weight: 2,
    unit: "g",
    featured: true,
    is_active: true,
    images: ["https://images.meesho.com/images/products/591372768/bjuqt_512.webp"],
    tags: ["saffron", "threads", "kashmiri", "premium"],
    average_rating: 4.8,
    review_count: 51,
    amazonUrl: "https://www.amazon.in/l/27943762031?me=AP7UIG7ND66L"
  }
];

// Category data
export const categories = [
  {
    name: "Spices",
    slug: "spices",
    count: 3,
    image: "https://images.meesho.com/images/products/612121311/khjw1_512.webp"
  },
  {
    name: "Sweeteners",
    slug: "sweeteners",
    count: 4,
    image: "https://images.meesho.com/images/products/603502006/ppnkj_512.webp"
  },
  {
    name: "Superfoods",
    slug: "superfoods",
    count: 2,
    image: "https://images.meesho.com/images/products/610646788/wuofi_512.webp"
  },
  {
    name: "Pulses & Grains",
    slug: "pulses-grains",
    count: 2,
    image: "https://images.meesho.com/images/products/580624828/ot9ue_512.webp"
  },
  {
    name: "Dry Fruits",
    slug: "dry-fruits",
    count: 2,
    image: "https://images.meesho.com/images/products/610662805/0hh8f_512.webp"
  },
  {
    name: "Ayurvedic",
    slug: "ayurvedic",
    count: 5,
    image: "https://images.meesho.com/images/products/572102536/kshyd_512.webp"
  }
];

// Get featured products
export const getFeaturedProducts = () => {
  return products.filter(p => p.featured);
};

// Get products by category
export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category === category);
};

// Get product by slug
export const getProductBySlug = (slug: string) => {
  return products.find(p => p.slug === slug);
};
