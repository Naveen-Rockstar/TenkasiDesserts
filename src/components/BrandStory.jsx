import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="our-story" className="py-12 sm:py-20 lg:py-28 bg-[#FAF6F0] text-[#241410] scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Feature Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#F4EDE3] p-5 sm:p-10 lg:p-14 border border-[#241410]/5 relative overflow-hidden shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Chef / Kitchen Photography with Overlay Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-[#241410]">
                <img
                  src="/images/brand/pastry-chef-kitchen.jpg"
                  alt="Tenkasi Desserts pastry artisan baking fresh daily"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#241410]/90 backdrop-blur-md border border-white/15 text-white space-y-0.5">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#D95B32] font-bold block">
                    Our Daily Promise
                  </span>
                  <p className="font-heading font-extrabold text-sm sm:text-lg text-white leading-tight">
                    Baked Fresh Daily With Love, Just For You
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Craftsmanship Story */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 text-[#D95B32]">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current animate-pulse-slow" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold">
                    The Tenkasi Craft
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#241410] tracking-tight leading-[1.12]">
                  Bite into Our Best
                </h2>

                <p className="text-[#6C534D] text-sm sm:text-lg font-light leading-relaxed">
                  Discover our handcrafted selection of desserts, carefully prepared with fresh ingredients and bold flavors. Whether you're craving classic comfort brownies or innovative celebration cakes.
                </p>

                <p className="text-[#6C534D] text-xs sm:text-sm leading-relaxed font-light">
                  Tenkasi Desserts was born with a single commitment: to bake honest, indulgent desserts with authentic 54% Dutch cocoa, pure dairy butter, and artisanal technique. We refuse compound chocolate fillers, vegetable shortening, or artificial aftertastes.
                </p>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#menu"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 min-h-[46px] px-6 py-3 rounded-full bg-[#D95B32] hover:bg-[#C44C24] active:scale-[0.98] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md"
                >
                  <span>Explore Our Best</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Chef / Team Profile Note */}
              <div className="pt-3 sm:pt-4 border-t border-[#241410]/10 flex items-center justify-between gap-4">
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-heading font-extrabold text-sm sm:text-base text-[#241410]">
                      Tenkasi Pastry Studio
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#D95B32] font-semibold">/ Head Artisans</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#6C534D] max-w-md font-light leading-relaxed">
                    Morning kitchen dispatches to Koolakadai Bazaar, Melagaram &amp; ICI Stall counters.
                  </p>
                </div>

                {/* Small thumbnail of fresh creations */}
                <div className="hidden sm:block w-14 h-14 rounded-2xl overflow-hidden border border-[#241410]/15 flex-shrink-0 shadow-sm">
                  <img
                    src="/images/products/the-brownie-dub.jpg"
                    alt="Fresh brownies"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}