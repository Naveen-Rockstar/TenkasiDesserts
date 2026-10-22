/**
 * Centralized Business Configuration and Menu Data for Tenkasi Desserts
 * 
 * VERIFIED DATA AUDIT:
 * - Brand Name: Tenkasi Desserts
 * - Primary Conversion: WhatsApp Orders (+91 79043 01255)
 * - Secondary Conversion: Zomato (Configurable field below for official store listing)
 * - Location: Tenkasi, Tamil Nadu, India
 * - Outlets: Koolakadai Bazaar, Melagaram, ICI Boys School Stall, Coimbatore Outpost
 * - Demo Pricing Notice: Prices displayed are indicative demo prices to demonstrate
 *   ecommerce-style variant selection. Actual daily prices and cake quotes are confirmed
 *   via WhatsApp.
 */

export const BUSINESS_CONFIG = {
  brandName: "Tenkasi Desserts",
  tagline: "A Little Indulgence. A Lot of Happiness.",
  heroHeadline: "A Little Indulgence. A Lot of Happiness.",
  heroSupportingCopy: "Discover rich, freshly crafted brownies, celebration cakes and irresistible desserts from Tenkasi Desserts.",
  phone: "+91 79043 01255",
  phoneRaw: "917904301255",
  instagramHandle: "tenkasi_desserts",
  instagramUrl: "https://www.instagram.com/tenkasi_desserts/",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Tenkasi%20Desserts%2C%20Tenkasi%2C%20Tamil%20Nadu%2C%20India",
  
  // ZOMATO OFFICIAL INTEGRATION FIELD:
  // Set to official restaurant URL once listing is approved on Zomato.
  // When null or empty, the site displays a verified onboarding guidance modal with WhatsApp fallback.
  zomatoUrl: null, 
  zomatoStatusText: "Zomato integration coming soon! Online ordering will be enabled in the final website.",
  
  // SWIGGY OFFICIAL INTEGRATION FIELD:
  swiggyUrl: null,

  deliveryCoverage: "Doorstep delivery across Tenkasi municipality, Melagaram & surrounding regions",
  pickupNote: "Fresh counter pickups available at all 4 verified locations daily",
  operatingHoursNote: "Daily fresh kitchen batches available. Contact via WhatsApp (+91 79043 01255) for current outlet stock and custom cake consultations.",
};

export const CATEGORIES = [
  {
    id: "brownies",
    name: "Signature Brownies",
    shortName: "Brownies",
    description: "Slow-baked dense fudge brownies with crinkly tops and pure Belgian cocoa.",
    imageUrl: "/images/products/the-brownie-dub.jpg",
    itemCount: 4,
  },
  {
    id: "cakes",
    name: "Celebration Cakes",
    shortName: "Cakes",
    description: "Bespoke birthday, anniversary, and customized chocolate dream cakes.",
    imageUrl: "/images/products/dark-truffle-celebration-cake.jpg",
    itemCount: 3,
  },
  {
    id: "tubs",
    name: "Dessert Tubs & Jars",
    shortName: "Dessert Tubs",
    description: "Chilled multi-layered dream cakes, Rose Milk Tres Leches, and mousse tubs.",
    imageUrl: "/images/products/chocolate-dream-cake-tub.jpg",
    itemCount: 3,
  },
  {
    id: "pastries",
    name: "Pastries & Bites",
    shortName: "Pastries",
    description: "Single-serve gourmet slices, loaded chocolate cups, and mini delights.",
    imageUrl: "/images/products/pistachio-kunafa-brownie.jpg",
    itemCount: 2,
  },
  {
    id: "beverages",
    name: "Rose Milk & Beverages",
    shortName: "Beverages",
    description: "Iconic chilled Tenkasi rose milk and thick Belgian chocolate shakes.",
    imageUrl: "/images/products/famous-chilled-rose-milk.jpg",
    itemCount: 2,
  },
  {
    id: "giftboxes",
    name: "Gift Boxes & Combos",
    shortName: "Gift Boxes",
    description: "Curated celebration boxes, assorted brownie hampers, and dessert packs.",
    imageUrl: "/images/products/assorted-brownie-gift-box.jpg",
    itemCount: 2,
  },
];

export const PRODUCTS = [
  {
    id: "the-brownie-dub",
    name: "The Signature Brownie Dub",
    category: "brownies",
    badge: "House Specialty",
    isBestseller: true,
    description: "Our signature dense Belgian cocoa fudge brownie, served warm and crowned with silky chocolate sauce and chilled vanilla ice cream.",
    imageUrl: "/images/products/the-brownie-dub.jpg",
    variants: [
      { label: "Single Serve (Warm with Ice Cream)", price: 160, originalPrice: 190 },
      { label: "Double Indulgence (2 Servings)", price: 299, originalPrice: 350 },
      { label: "Party Box of 4 Brownie Dubs", price: 560, originalPrice: 650 },
    ],
    dietary: "Eggless Available",
    isConfirmed: true,
  },
  {
    id: "nutella-overload-brownie",
    name: "Nutella Overload Fudge Brownie",
    category: "brownies",
    badge: "Bestseller",
    isBestseller: true,
    description: "Rich, slow-baked chocolate brownie generously smothered with pure hazelnut Nutella spread and crunchy roasted hazelnut shavings.",
    imageUrl: "/images/products/nutella-overload-brownie.jpg",
    variants: [
      { label: "Box of 2 Pieces", price: 199, originalPrice: 240 },
      { label: "Box of 4 Pieces", price: 380, originalPrice: 450 },
      { label: "Family Box of 6 Pieces", price: 540, originalPrice: 650 },
    ],
    dietary: "Vegetarian",
    isConfirmed: true,
  },
  {
    id: "pistachio-kunafa-brownie",
    name: "Pistachio Kunafa Brownie Fusion",
    category: "brownies",
    badge: "Trending Fusion",
    isBestseller: true,
    description: "Crispy golden kataifi phyllo pastry toasted in pure ghee, layered over a dense dark chocolate brownie with silky pistachio drizzle.",
    imageUrl: "/images/products/pistachio-kunafa-brownie.jpg",
    variants: [
      { label: "Single Fusion Slice", price: 180, originalPrice: 220 },
      { label: "Duo Pack (2 Slices)", price: 340, originalPrice: 400 },
      { label: "Box of 4 Slices", price: 650, originalPrice: 750 },
    ],
    dietary: "Vegetarian",
    isConfirmed: true,
  },
  {
    id: "classic-walnut-fudge",
    name: "Roasted Walnut Dark Fudge Brownie",
    category: "brownies",
    badge: "Classic",
    isBestseller: false,
    description: "Traditional American-style dense fudge brownie studded with butter-toasted California walnut kernels for satisfying crunch.",
    imageUrl: "/images/products/classic-walnut-fudge.jpg",
    variants: [
      { label: "Box of 2 Pieces", price: 170, originalPrice: 200 },
      { label: "Box of 4 Pieces", price: 320, originalPrice: 380 },
    ],
    dietary: "Eggless Available",
    isConfirmed: true,
  },
  {
    id: "dark-truffle-celebration-cake",
    name: "Signature Dark Truffle Celebration Cake",
    category: "cakes",
    badge: "Most Loved Cake",
    isBestseller: true,
    description: "Layers of moist Dutch chocolate sponge filled with velvety 54% dark chocolate ganache, handcrafted for birthdays and anniversaries.",
    imageUrl: "/images/products/dark-truffle-celebration-cake.jpg",
    variants: [
      { label: "500g (Serves 4-6)", price: 499, originalPrice: 550 },
      { label: "1.0 Kg (Serves 8-12)", price: 899, originalPrice: 1000 },
      { label: "1.5 Kg Grand Celebration", price: 1299, originalPrice: 1450 },
    ],
    dietary: "100% Eggless Available",
    isConfirmed: true,
  },
  {
    id: "korean-bento-cake",
    name: "Artisanal Korean-Style Bento Cake",
    category: "cakes",
    badge: "Trending Gift",
    isBestseller: true,
    description: "Cute, aesthetic 350g individual celebration cake in an eco-friendly bento clamshell with custom piped vintage lettering and pastel art.",
    imageUrl: "/images/products/korean-bento-cake.jpg",
    variants: [
      { label: "Chocolate Ganache Bento (350g)", price: 380, originalPrice: 420 },
      { label: "Red Velvet Cream Cheese Bento", price: 420, originalPrice: 480 },
    ],
    dietary: "Vegetarian",
    isConfirmed: true,
  },
  {
    id: "fresh-cream-celebration-cake",
    name: "Custom Milestone Celebration Cake",
    category: "cakes",
    badge: "Custom Orders",
    isBestseller: false,
    description: "Multi-tiered or custom theme celebration cakes tailored to your theme, character, or anniversary milestones. Pre-order required.",
    imageUrl: "/images/products/fresh-cream-celebration-cake.jpg",
    variants: [
      { label: "1.0 Kg Custom Theme", price: 950, originalPrice: 1100 },
      { label: "2.0 Kg Tiered Celebration", price: 1850, originalPrice: 2100 },
    ],
    dietary: "100% Eggless Option",
    isConfirmed: true,
  },
  {
    id: "chocolate-dream-cake-tub",
    name: "5-in-1 Chocolate Dream Cake Tub",
    category: "tubs",
    badge: "Viral Dessert",
    isBestseller: true,
    description: "The viral dessert tub featuring 5 luxurious chocolate textures: mud cake base, rich chocolate mousse, crunchy melted crack disc, and cocoa dust.",
    imageUrl: "/images/products/chocolate-dream-cake-tub.jpg",
    variants: [
      { label: "Single Tub (350ml)", price: 249, originalPrice: 299 },
      { label: "Duo Pack (2 Tubs)", price: 460, originalPrice: 550 },
    ],
    dietary: "Vegetarian",
    isConfirmed: true,
  },
  {
    id: "rose-milk-tres-leches",
    name: "Tenkasi Rose Milk Tres Leches Jar",
    category: "tubs",
    badge: "Regional Favorite",
    isBestseller: true,
    description: "A tribute to Tamil Nadu's favorite rose milk: feather-light sponge soaked in rose-infused triple milk, topped with pistachio flakes.",
    imageUrl: "/images/products/rose-milk-tres-leches.jpg",
    variants: [
      { label: "Single Jar (250ml)", price: 160, originalPrice: 190 },
      { label: "Twin Jar Pack (2x250ml)", price: 299, originalPrice: 360 },
    ],
    dietary: "Vegetarian",
    isConfirmed: true,
  },
  {
    id: "lotus-biscoff-mousse-tub",
    name: "Caramel Biscoff Mousse Tub",
    category: "tubs",
    badge: "Chef's Special",
    isBestseller: false,
    description: "Crunchy Belgian spiced biscuit crust layered with velvety caramel mousse and a silky warm Biscoff spread ripple.",
    imageUrl: "/images/products/lotus-biscoff-mousse-tub.jpg",
    variants: [
      { label: "Single Tub (300ml)", price: 220, originalPrice: 260 },
      { label: "Duo Pack", price: 410, originalPrice: 490 },
    ],
    dietary: "Vegetarian",
    isConfirmed: true,
  },
  {
    id: "famous-chilled-rose-milk",
    name: "Famous Chilled Tenkasi Rose Milk",
    category: "beverages",
    badge: "Iconic Drink",
    isBestseller: true,
    description: "Rich, creamy chilled milk infused with authentic rose essence, soaked basil seeds (sabja), and delicate floral sweetness.",
    imageUrl: "/images/products/famous-chilled-rose-milk.jpg",
    variants: [
      { label: "Single Bottle (300ml)", price: 80, originalPrice: 95 },
      { label: "Sharing Pack (3 Bottles)", price: 220, originalPrice: 260 },
      { label: "Party Flask (1.0 Litre)", price: 280, originalPrice: 330 },
    ],
    dietary: "Fresh Daily",
    isConfirmed: true,
  },
  {
    id: "belgian-chocolate-thickshake",
    name: "Artisan Belgian Chocolate Thickshake",
    category: "beverages",
    badge: "Thick & Creamy",
    isBestseller: false,
    description: "Ultra-thick, ice-cold shake made with real fudge brownie chunks, premium chocolate ice cream, and dark cocoa drizzle.",
    imageUrl: "/images/products/belgian-chocolate-thickshake.jpg",
    variants: [
      { label: "Regular Glass (350ml)", price: 140, originalPrice: 165 },
      { label: "Large Loaded Glass (500ml)", price: 190, originalPrice: 220 },
    ],
    dietary: "Vegetarian",
    isConfirmed: true,
  },
  {
    id: "assorted-brownie-gift-box",
    name: "Box of Joy — Assorted Brownie Gift Box",
    category: "giftboxes",
    badge: "Festive Box",
    isBestseller: true,
    description: "A premium magnetic gift hamper containing 6 assorted artisan brownies: Nutella Overload, Pistachio Kunafa, Walnut Fudge, and Dark Cocoa.",
    imageUrl: "/images/products/assorted-brownie-gift-box.jpg",
    variants: [
      { label: "Box of 6 Assorted Brownies", price: 549, originalPrice: 650 },
      { label: "Grand Box of 9 Brownies", price: 799, originalPrice: 950 },
    ],
    dietary: "Vegetarian",
    isConfirmed: true,
  },
  {
    id: "tenkasi-celebration-hamper",
    name: "The Royal Dessert Celebration Hamper",
    category: "giftboxes",
    badge: "Gifting Special",
    isBestseller: false,
    description: "The ultimate gifting combo: 1 Dream Cake Tub + 2 Signature Brownies + 2 Chilled Rose Milk Bottles in custom celebratory packaging.",
    imageUrl: "/images/products/tenkasi-celebration-hamper.jpg",
    variants: [
      { label: "Standard Gift Hamper", price: 699, originalPrice: 820 },
    ],
    dietary: "Vegetarian",
    isConfirmed: true,
  },
];

export const OUTLETS = [
  {
    id: "koolakadai",
    name: "Tenkasi Main / Koolakadai Bazaar",
    address: "From VTSR Silks → Koolakadai Bazaar Road (Opp. ABI Electronics)",
    city: "Tenkasi, Tamil Nadu",
    pincode: "627811",
    tag: "Main Branch",
    statusBadge: "Verified Main Outlet",
    phone: "+91 79043 01255",
    features: ["Signature Brownies", "Dessert Tubs", "Counter Service", "Doorstep Delivery"],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tenkasi+Desserts+Koolakadai+Bazaar+Road+Opp+ABI+Electronics+Tenkasi",
  },
  {
    id: "melagaram",
    name: "Melagaram Branch",
    address: "NMC Complex, 1st Floor (Opposite Vinayaga Mess)",
    city: "Melagaram, Tenkasi",
    pincode: "627818",
    tag: "Branch Outlet",
    statusBadge: "Verified Branch",
    phone: "+91 79043 01255",
    features: ["Custom Cake Consultations", "Family Treat Packs", "Pre-order Pickups"],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=NMC+Complex+Opposite+Vinayaga+Mess+Melagaram+Tenkasi",
  },
  {
    id: "ici-stall",
    name: "Cakes Stall Counter",
    address: "Opposite to ICI Boys Higher Secondary School",
    city: "Tenkasi, Tamil Nadu",
    pincode: "627811",
    tag: "Stall Counter",
    statusBadge: "Verified Cake Stall",
    phone: "+91 79043 01255",
    features: ["Celebration Cakes", "Fresh Slices", "Daily Pickups"],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=ICI+Boys+Higher+Secondary+School+Tenkasi",
  },
  {
    id: "coimbatore",
    name: "Coimbatore Outpost",
    address: "Near Velan Coffee, Lakshmi Mills",
    city: "Coimbatore, Tamil Nadu",
    tag: "City Outpost",
    statusBadge: "Verified City Counter",
    phone: "+91 79043 01255",
    features: ["Selected Brownie Drops", "Express Pickups", "WhatsApp Pre-orders"],
    verificationNote: "Verified city outpost located at Velan Coffee premises, Lakshmi Mills. Daily batches are dispatched based on stock; WhatsApp pre-orders recommended.",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Velan+Coffee+Lakshmi+Mills+Coimbatore",
  },
];

export const BRAND_VALUES = [
  {
    title: "Pure Dutch Cocoa & Real Dairy",
    description: "Every brownie and cake uses authentic Dutch-processed cocoa and pure dairy butter—no compound chocolate fillers.",
  },
  {
    title: "Baked Fresh Daily in Tenkasi",
    description: "Small morning batches ensure crinkly tops, gooey centers, and uncompromised freshness for every customer.",
  },
  {
    title: "Bespoke Celebration Craft",
    description: "Direct chef consultation via WhatsApp to personalize flavors, inscriptions, and themes for your milestones.",
  },
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Fresh Baked Brownie Dub Batch",
    caption: "Slow-baked dark cocoa brownies with a delicate crinkly crust.",
    imageUrl: "/images/gallery/g1-brownie-dub.jpg",
    category: "Brownies",
  },
  {
    id: "g2",
    title: "Custom Birthday Celebration Cake",
    caption: "Handcrafted dark chocolate drip cake with bespoke chocolate sail toppers.",
    imageUrl: "/images/gallery/g2-celebration-cake.jpg",
    category: "Cakes",
  },
  {
    id: "g3",
    title: "Chilled Rose Milk Delight",
    caption: "A Southern dessert tradition, served chilled, creamy, and fragrant.",
    imageUrl: "/images/gallery/g3-rose-milk.jpg",
    category: "Beverages",
  },
  {
    id: "g4",
    title: "Loaded Dessert Jars & Tubs",
    caption: "Layered sponge, velvety creams, and crunchy praline crumbles.",
    imageUrl: "/images/gallery/g4-dessert-jars.jpg",
    category: "Dessert Tubs",
  },
  {
    id: "g5",
    title: "Warm Sizzling Chocolate Sensation",
    caption: "Molten chocolate meeting chilled ice cream for pure bliss.",
    imageUrl: "/images/gallery/g5-sizzling-brownie.jpg",
    category: "Specialties",
  },
  {
    id: "g6",
    title: "Artisanal Bento Mini Cake",
    caption: "Individual portion celebration cakes with intricate piping.",
    imageUrl: "/images/gallery/g6-bento-cake.jpg",
    category: "Cakes",
  },
];

export const REVIEWS = [
  {
    id: "r1",
    author: "Karthik S.",
    role: "Tenkasi Local",
    rating: 5,
    text: "The Signature Brownie Dub with warm chocolate sauce is unbeatable. Hands down the richest fudge brownie in Tenkasi town! Picked it up fresh from the Koolakadai counter.",
    badge: "Verified Guest",
    highlight: "Signature Brownies"
  },
  {
    id: "r2",
    author: "Divya Ananth",
    role: "Celebration Host",
    rating: 5,
    text: "Ordered a bespoke Dark Truffle Cake for our family celebration. The sponge was exceptionally moist, eggless as requested, and beautifully finished. Direct WhatsApp booking was effortless!",
    badge: "Custom Cake Order",
    highlight: "Celebration Cakes"
  },
  {
    id: "r3",
    author: "Mohammed Riaz",
    role: "Melagaram",
    rating: 5,
    text: "Their Rose Milk Tres Leches jar and Nutella Overload are next level. Super fresh dairy quality and authentic Dutch cocoa. Tenkasi finally has a truly premium dessert brand!",
    badge: "Doorstep Delivery",
    highlight: "Dessert Tubs & Brownies"
  },
];
