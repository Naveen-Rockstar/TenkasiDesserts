import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { PRODUCTS, CATEGORIES, BUSINESS_CONFIG } from '../data/businessData';

export default function BestsellersGrid({ activeCategory, setActiveCategory, onOpenZomato }) {
  // Track selected variant index per product
  const [selectedVariants, setSelectedVariants] = useState({});
  const [modalProduct, setModalProduct] = useState(null);

  const filterOptions = [
    { id: 'all', label: 'All Items' },
    ...CATEGORIES.map((c) => ({ id: c.id, label: c.shortName })),
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.category === activeCategory);

  // Keyboard accessibility and body scroll lock for product modal
  useEffect(() => {
    if (!modalProduct) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalProduct(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [modalProduct]);

  const handleVariantChange = (productId, variantIndex) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: parseInt(variantIndex, 10),
    }));
  };

  const getActiveVariant = (product) => {
    const idx = selectedVariants[product.id] ?? 0;
    return product.variants?.[idx] || { label: 'Standard', price: 160 };
  };

  const createWhatsAppOrderLink = (product) => {
    const variant = getActiveVariant(product);
    const msg = `Hello Tenkasi Desserts! I would like to order ${product.name} (${variant.label} - ₹${variant.price}). Please confirm availability.`;
    return `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(msg)}`;
  };

  const cycleCategory = (direction) => {
    const currentIndex = filterOptions.findIndex(f => f.id === activeCategory);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= filterOptions.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = filterOptions.length - 1;
    setActiveCategory(filterOptions[nextIndex].id);
  };

  return (
    <section id="menu" className="py-12 sm:py-20 lg:py-28 bg-[#FAF6F0] text-[#241410] scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D95B32] font-bold block">
            Handcrafted In Tenkasi
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#241410] tracking-tight">
            Our Premium Products
          </h2>
          <p className="text-[#6C534D] text-xs sm:text-base font-light max-w-xl mx-auto leading-relaxed">
            Every dessert is slow-baked with pure Belgian cocoa, real dairy butter, and artisanal care. Select your treat to order fresh.
          </p>
        </div>

        {/* Filter Pills with Horizontal Touch Scrolling on Mobile */}
        <div className="flex items-center justify-between gap-3 mb-8 sm:mb-12 pb-1">
          
          {/* Scrollable Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {filterOptions.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D95B32] shrink-0 min-h-[38px] flex items-center ${
                    isActive
                      ? 'bg-[#241410] text-[#FAF6F0] shadow-sm'
                      : 'bg-[#F4EDE3] text-[#6C534D] hover:bg-[#EADBC8] hover:text-[#241410]'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Arrow Navigation */}
          <div className="hidden sm:flex items-center space-x-2 flex-shrink-0 pl-2">
            <button
              onClick={() => cycleCategory('prev')}
              className="w-9 h-9 rounded-full border border-[#241410]/20 hover:border-[#241410] flex items-center justify-center text-[#241410] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D95B32]"
              aria-label="Previous category"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => cycleCategory('next')}
              className="w-9 h-9 rounded-full border border-[#241410]/20 hover:border-[#241410] flex items-center justify-center text-[#241410] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D95B32]"
              aria-label="Next category"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Product Cards Grid: Single column on small mobile, 2 col on tablet, 3-4 col on desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-7 lg:gap-8 items-stretch">
            {filteredProducts.map((product) => {
              const activeVariant = getActiveVariant(product);

              return (
                <article
                  key={product.id}
                  className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#F4EDE3] p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative border border-[#241410]/5"
                >
                  <div>
                    {/* Top Row: Dietary Pill & Live Active Price */}
                    <div className="flex items-center justify-between w-full mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-white/90 text-[10px] uppercase font-bold text-[#6C534D] tracking-wider border border-[#241410]/5">
                        {product.dietary || 'Fresh Daily'}
                      </span>

                      <span className="font-heading font-extrabold text-base sm:text-lg text-[#241410] transition-all">
                        ₹{activeVariant.price}
                      </span>
                    </div>

                    {/* Center: Image Display with subtle rounded framing & hover zoom */}
                    <div
                      className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#241410]/5 mb-3.5 flex items-center justify-center cursor-pointer group-hover:bg-[#241410]/10 transition-colors"
                      onClick={() => setModalProduct(product)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setModalProduct(product)}
                      aria-label={`View details for ${product.name}`}
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Quick view overlay on hover */}
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="px-3 py-1.5 rounded-full bg-white/95 text-[#241410] shadow-md flex items-center space-x-1.5 text-xs font-semibold">
                          <Eye className="w-3.5 h-3.5 text-[#D95B32]" />
                          <span>View Details</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Editorial Details: Title & Description */}
                    <div className="space-y-1 mb-3">
                      <h3
                        onClick={() => setModalProduct(product)}
                        className="font-heading font-bold text-base sm:text-lg text-[#241410] hover:text-[#D95B32] transition-colors leading-snug cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>
                      <p className="text-[#6C534D] text-xs leading-relaxed line-clamp-2 font-light">
                        {product.description}
                      </p>
                    </div>

                    {/* Variant Selector: Touch-Friendly on Mobile */}
                    {product.variants && product.variants.length > 1 && (
                      <div className="mb-3.5 pt-2.5 border-t border-[#241410]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs text-[#6C534D]">
                        <span className="font-semibold text-[#241410] text-[11px] sm:text-xs">Portion / Size:</span>
                        <select
                          value={selectedVariants[product.id] ?? 0}
                          onChange={(e) => handleVariantChange(product.id, e.target.value)}
                          className="w-full sm:w-auto bg-white px-2.5 py-1.5 rounded-lg border border-[#241410]/15 font-semibold text-[#241410] text-xs focus:outline-none focus:ring-2 focus:ring-[#D95B32] cursor-pointer min-h-[38px]"
                          aria-label={`Select portion size for ${product.name}`}
                        >
                          {product.variants.map((v, i) => (
                            <option key={i} value={i} className="text-[#241410]">
                              {v.label} (₹{v.price})
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Primary CTA Button: Touch-Friendly 48px Height */}
                  <div className="w-full pt-1">
                    <a
                      href={createWhatsAppOrderLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-1.5 min-h-[46px] py-3 px-4 rounded-full bg-[#D95B32] hover:bg-[#C44C24] active:scale-[0.98] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm group-hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#241410]"
                    >
                      <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>

                </article>
              );
            })}
          </div>
        ) : (
          /* Branded Empty State for Categories like Pastries */
          <div className="py-12 px-5 sm:px-6 rounded-2xl sm:rounded-3xl bg-[#F4EDE3] border border-[#241410]/10 text-center max-w-xl mx-auto space-y-3.5">
            <div className="w-11 h-11 mx-auto rounded-full bg-[#D95B32]/10 text-[#D95B32] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-[#241410]">Fresh Daily Counter Specialty</h3>
            <p className="text-xs sm:text-sm text-[#6C534D] font-light leading-relaxed">
              Our artisanal pastries, loaded chocolate cups, and mini dessert bites are prepared fresh every morning in limited batches at our Koolakadai Bazaar &amp; Melagaram counters.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent("Hello Tenkasi Desserts! What fresh pastries and dessert bites do you have available today at your counters?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 min-h-[44px] px-5 py-2.5 rounded-full bg-[#D95B32] hover:bg-[#C44C24] text-white text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire Today's Pastry Display</span>
              </a>
              <button
                onClick={() => setActiveCategory('all')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 min-h-[44px] px-5 py-2.5 rounded-full border border-[#241410]/20 hover:border-[#241410] text-[#241410] text-xs font-semibold transition-colors"
              >
                <span>View All Menu Items</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Product Detail Modal: Mobile-Optimized with Scroll Trapping & Touch Sizing */}
      {modalProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#241410]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-prod-title"
          onClick={() => setModalProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#FAF6F0] relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalProduct(null)}
              className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-[#241410]/80 hover:bg-[#241410] text-white flex items-center justify-center transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[16/10] bg-[#241410]">
              <img
                src={modalProduct.imageUrl}
                alt={modalProduct.name}
                onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-7 space-y-3.5 text-[#241410]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 id="modal-prod-title" className="font-heading text-xl sm:text-2xl font-bold text-[#241410]">
                    {modalProduct.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#D95B32] block mt-0.5">
                    {modalProduct.dietary} &middot; Fresh Daily Batch
                  </span>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#241410]">
                    ₹{getActiveVariant(modalProduct).price}
                  </span>
                </div>
              </div>

              <p className="text-[#6C534D] text-xs sm:text-sm leading-relaxed font-light">
                {modalProduct.description}
              </p>

              {modalProduct.variants && modalProduct.variants.length > 1 && (
                <div className="space-y-1.5 pt-1">
                  <label htmlFor="modal-variant-select" className="text-xs font-bold uppercase tracking-wider text-[#6C534D] block">
                    Choose Portion / Box Size:
                  </label>
                  <select
                    id="modal-variant-select"
                    value={selectedVariants[modalProduct.id] ?? 0}
                    onChange={(e) => handleVariantChange(modalProduct.id, e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#241410]/15 text-xs sm:text-sm font-semibold text-[#241410] focus:outline-none focus:ring-2 focus:ring-[#D95B32] min-h-[44px]"
                  >
                    {modalProduct.variants.map((v, i) => (
                      <option key={i} value={i}>
                        {v.label} — ₹{v.price}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={createWhatsAppOrderLink(modalProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 min-h-[48px] px-6 py-3 rounded-full bg-[#D95B32] hover:bg-[#C44C24] active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp</span>
                </a>
                
                <button
                  onClick={() => {
                    setModalProduct(null);
                    onOpenZomato();
                  }}
                  className="px-5 py-3 min-h-[44px] rounded-full border border-[#241410]/20 hover:border-red-500 text-[#241410] text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors active:scale-[0.98]"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-red-600 text-white flex items-center justify-center text-[9px] font-bold font-serif">
                    z
                  </span>
                  <span>Zomato</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}