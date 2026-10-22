import React from 'react';
import { MessageCircle, Gift, Cake, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export default function HighlightCards() {
  const directWhatsAppUrl = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(
    "Hello Tenkasi Desserts! I would like to order fresh daily desserts."
  )}`;

  const hamperWhatsAppUrl = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(
    "Hello Tenkasi Desserts! I would like to enquire about your Celebration Gift Hampers & Brownie Boxes."
  )}`;

  return (
    <section className="py-10 sm:py-16 bg-[#FAF6F0] text-[#241410]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Distinctive Tonal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          
          {/* Card 1: Warm Tan / Sand (Sweet Gifting!) */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#EADBC8] p-5 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-[#8C5427] block">
                Sweet Gifting!
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#241410] leading-tight">
                Gift Boxes &amp; Hampers
              </h3>
              <p className="text-xs sm:text-sm text-[#6C534D] leading-relaxed font-light">
                Curated celebration boxes packed with assorted Belgian brownies, dream cake tubs, and chilled rose milk.
              </p>
            </div>

            {/* Featured image */}
            <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-white/40 shadow-xs">
              <img
                src="/images/products/assorted-brownie-gift-box.jpg"
                alt="Gift hamper of brownies"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <a
                href={hamperWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 min-h-[46px] py-3 px-5 rounded-full bg-[#241410] hover:bg-[#351B15] active:scale-[0.98] text-[#FAF6F0] font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <Gift className="w-3.5 h-3.5 text-[#D95B32]" />
                <span>Order Gift Box</span>
              </a>
            </div>
          </div>

          {/* Card 2: Deep Dark Chocolate (Fresh Bakes Daily!) */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#241410] text-[#FAF6F0] p-5 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/5 relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#D95B32]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2.5 sm:space-y-3 relative z-10">
              {/* Minimal Line-Art Doodle Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-[#D95B32]">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
              </div>

              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-[#D95B32] block">
                  Morning Kitchen Batches
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-tight mt-0.5 sm:mt-1">
                  Fresh Bakes Daily!
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#FAF6F0]/80 leading-relaxed font-light">
                Get your favorite Brownie Dubs, celebration slices, and dessert tubs delivered right to your door across Tenkasi municipality.
              </p>
            </div>

            <div className="relative z-10 pt-2 sm:pt-4">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 min-h-[46px] py-3 px-5 rounded-full bg-[#D95B32] hover:bg-[#C44C24] active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order Today!</span>
              </a>
            </div>
          </div>

          {/* Card 3: Light Warm Cream (Celebrate With Us!) */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#F4EDE3] p-5 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-[#D95B32] block">
                Celebrate With Us!
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#241410] leading-tight">
                Custom Milestone Cakes
              </h3>
              <p className="text-xs sm:text-sm text-[#6C534D] leading-relaxed font-light">
                Vintage Korean bento cakes, dark chocolate drip centerpieces, and eggless custom birthday themes made to order.
              </p>
            </div>

            {/* Featured image */}
            <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-white/40 shadow-xs">
              <img
                src="/images/products/fresh-cream-celebration-cake.jpg"
                alt="Celebration milestone cake"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <a
                href="#cakes"
                className="w-full inline-flex items-center justify-center space-x-2 min-h-[46px] py-3 px-5 rounded-full bg-[#241410] hover:bg-[#351B15] active:scale-[0.98] text-[#FAF6F0] font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
              >
                <Cake className="w-3.5 h-3.5 text-[#D95B32]" />
                <span>Book Cake Enquiry</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}