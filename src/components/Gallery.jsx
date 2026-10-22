import React, { useState, useEffect } from 'react';
import { Instagram, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, BUSINESS_CONFIG } from '../data/businessData';

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [selectedImageIndex]);

  return (
    <section id="gallery" className="py-12 sm:py-20 lg:py-28 bg-[#FAF6F0] text-[#241410] scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D95B32] font-bold block">
              Fresh From Our Kitchen
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#241410] tracking-tight">
              Dessert Photography Gallery
            </h2>
            <p className="text-[#6C534D] text-xs sm:text-base font-light leading-relaxed">
              A visual look at our freshly baked crinkle brownies, bespoke celebration cakes, and layered dessert tubs crafted daily in Tenkasi.
            </p>
          </div>

          <a
            href={BUSINESS_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 min-h-[44px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#241410]/20 text-[#241410] hover:bg-[#241410] hover:text-white active:scale-95 font-semibold text-xs uppercase tracking-wider transition-all self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @{BUSINESS_CONFIG.instagramHandle}</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#241410] cursor-pointer shadow-xs hover:shadow-xl active:scale-[0.99] transition-all duration-300 border border-[#241410]/5"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImageIndex(index)}
              aria-label={`View photo: ${item.title}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6 text-white">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#D95B32] font-bold">
                  {item.category}
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/80 line-clamp-1 mt-0.5 font-light">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                {item.category}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal: Touch-Friendly on Mobile */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#140806]/92 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
            }}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 active:scale-95 text-white flex items-center justify-center transition-colors border border-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
            }}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 active:scale-95 text-white flex items-center justify-center transition-colors border border-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div 
            className="max-w-4xl w-full bg-[#1C0D0A] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/9] max-h-[65vh] sm:max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={GALLERY_ITEMS[selectedImageIndex].imageUrl}
                alt={GALLERY_ITEMS[selectedImageIndex].title}
                onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 bg-[#1C0D0A] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#D95B32] font-bold block">
                  {GALLERY_ITEMS[selectedImageIndex].category} &middot; {selectedImageIndex + 1} of {GALLERY_ITEMS.length}
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                  {GALLERY_ITEMS[selectedImageIndex].title}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/70 mt-0.5 font-light">
                  {GALLERY_ITEMS[selectedImageIndex].caption}
                </p>
              </div>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(`Hello Tenkasi Desserts! I saw ${GALLERY_ITEMS[selectedImageIndex].title} in your gallery and would like to order.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 min-h-[44px] px-5 py-2.5 rounded-full bg-[#D95B32] hover:bg-[#C44C24] active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider text-center"
              >
                <span>Order This on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}