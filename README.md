# Tenkasi Desserts — Redesign & Conversion Optimization

Production-quality, conversion-optimized redesign built for **Tenkasi Desserts** ([@tenkasi_desserts](https://www.instagram.com/tenkasi_desserts/)), Tenkasi, Tamil Nadu.

---

## 🎨 Inspiration & Redesign References

This redesign synthesizes the strengths of top South Indian confection brands while preserving Tenkasi Desserts' original chocolate-and-brownie focus:

1. **Petti Kadai Inspiration:**
   * Circular category navigation cards with pastel disc backdrops (`Signature Brownies →`, `Celebration Cakes →`, etc.).
   * Product cards with **interactive portion/size variant dropdown selectors** (`<select>`).
   * Clear pricing hierarchy: Struck-through original price, bold active price, and discount percentage badge (`Sale`).
2. **The Grand Sweets & Snacks Inspiration:**
   * "Our Branches" banner listing verified locations (Koolakadai Bazaar, Melagaram, ICI Stall, Coimbatore).
   * Tenkasi & Regional doorstep delivery strip with verified WhatsApp and Zomato ordering badges.
   * Authentic, concise brand heritage presentation without fabricated claims.
3. **Indian Snack House Inspiration:**
   * Premium curated dessert boxes & combo hampers (`Box of Joy - Assorted Brownies`, `The Royal Dessert Hamper`).
   * Clean ecommerce card layout, readable typography, and warm cream surfaces.
4. **Original Brand Identity Preserved:**
   * Espresso (`#190B07`), Dark Chocolate (`#28130D`), Caramel (`#C98749`), Warm Cream (`#F8F0E5`), Muted Cocoa (`#8A7063`), and Deep Cocoa text (`#1C0D08`).
   * Focus on their signature **Brownie Dub**, custom celebration cakes, and chilled rose milk.

---

## 🚀 Key Conversion Features

* **Dual Online Ordering Channels:**
  * **WhatsApp Ordering (Primary):** Direct kitchen dispatch to `+91 79043 01255`. Dynamically pre-fills the message with the selected product and variant:
    `"Hi Tenkasi Desserts, I would like to order The Signature Brownie Dub (Double Indulgence (2 Servings)). Please share availability and ordering details."`
  * **Zomato Food Delivery (Secondary):** Dedicated "Order Online" navigation item, Zomato buttons in Hero and product cards, and a dedicated modal explaining online delivery with immediate WhatsApp fallback.
* **Interactive Celebration Cake Customizer:** Allows customers to select occasion (Birthday, Anniversary, Gathering), preferred flavor, size/weight, date, and custom inscription note, creating a pre-formatted WhatsApp consultation request.
* **4 Verified Outlets with Google Maps Directions:**
  1. **Tenkasi Main / Koolakadai Bazaar:** From VTSR Silks → Koolakadai Bazaar Road (Opp. ABI Electronics), Tenkasi.
  2. **Melagaram Branch:** NMC Complex, 1st Floor (Opp. Vinayaga Mess), Tenkasi.
  3. **Cakes Stall Counter:** Opp. to ICI Boys Higher Secondary School, Tenkasi.
  4. **Coimbatore Counter:** Near Velan Coffee, Lakshmi Mills, Coimbatore.

---

## 📁 Component Architecture

```
src/
├── data/
│   └── businessData.js           # Central business config, outlets, menu items, & variants
├── components/
│   ├── DemoBanner.jsx            # Pitch context & verified business indicator
│   ├── Navbar.jsx                # Responsive header with "Order Online" dropdown & WhatsApp CTA
│   ├── Hero.jsx                  # Split layout hero with headline, verified benefits & brownie showcase
│   ├── DeliveryBanner.jsx        # Branches banner & delivery notification strip
│   ├── CategoryBrowser.jsx       # Petti Kadai inspired circular category cards
│   ├── BestsellersGrid.jsx       # E-commerce cards with variant dropdowns & pricing hierarchy
│   ├── SignatureBrownieFeature.jsx # High-conversion commercial feature on The Brownie Dub
│   ├── CelebrationCakes.jsx      # Dedicated custom cake inquiry & consultation builder
│   ├── BrandStory.jsx            # Concise authentic brand values & Tenkasi heritage
│   ├── Gallery.jsx               # Curated photography grid with accessible lightbox modal
│   ├── OutletsSection.jsx        # Interactive 4-branch switcher with Google Maps links
│   ├── OrderingPanel.jsx         # Dedicated conversion panel for WhatsApp & Zomato
│   ├── Footer.jsx                # Complete footer with verified contact details & links
│   ├── FloatingWhatsApp.jsx      # Non-intrusive floating WhatsApp action button
│   └── ZomatoModal.jsx           # Zomato delivery status & WhatsApp fallback dialog
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🛠️ Build & Development Commands

```bash
# Run local development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```
