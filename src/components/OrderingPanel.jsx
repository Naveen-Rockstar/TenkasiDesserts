import React from 'react';
import { MessageCircle, Truck, Clock, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export default function OrderingPanel({ onOpenZomato }) {
  const directWhatsAppUrl = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(
    "Hello Tenkasi Desserts! I would like to order fresh desserts for delivery or pickup."
  )}`;

  return (
    <section id="order-online" className="py-10 sm:py-16 lg:py-20 bg-[#FAF6F0] text-white scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Warm Terracotta Banner */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#D95B32] via-[#C44C24] to-[#A33B18] shadow-2xl p-6 sm:p-12 lg:p-16 text-center space-y-5 sm:space-y-8">
          
          {/* Subtle decorative radial background pattern */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #FFFFFF 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-2.5 sm:space-y-3.5">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-white/80 block">
              FRESH KITCHEN DISPATCH DAILY
            </span>

            <h2 className="font-heading text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Ready For Delicious Desserts?
            </h2>

            <p className="text-xs sm:text-base md:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Treat yourself today! Contact our kitchen directly on WhatsApp for instant doorstep delivery across Tenkasi municipality or counter pickups.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 sm:pt-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 min-h-[48px] py-3.5 sm:py-4 px-6 sm:px-8 rounded-full bg-white hover:bg-[#FAF6F0] active:scale-[0.98] text-[#241410] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-4 h-4 fill-[#241410]" />
              <span>Order on WhatsApp ({BUSINESS_CONFIG.phone})</span>
            </a>

            <button
              onClick={onOpenZomato}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 min-h-[48px] py-3.5 sm:py-4 px-6 sm:px-7 rounded-full bg-black/25 hover:bg-black/40 active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-red-600 text-white flex items-center justify-center text-[9px] font-bold font-serif">
                z
              </span>
              <span>Zomato Delivery Notice</span>
            </button>
          </div>

          {/* Service Highlights Strip */}
          <div className="relative z-10 pt-3 sm:pt-4 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 text-xs text-white/90">
            <div className="flex items-center justify-center space-x-2">
              <Truck className="w-4 h-4 text-white shrink-0" />
              <span><strong>Doorstep Delivery:</strong> Tenkasi &amp; Melagaram</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4 text-white shrink-0" />
              <span><strong>Fresh Daily:</strong> Morning Belgian cocoa batches</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4 text-white shrink-0" />
              <span><strong>Counter Pickups:</strong> Koolakadai &amp; Melagaram</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}