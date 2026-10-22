import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight, Check, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export default function SignatureBrownieFeature({ onSelectCategory }) {
  const [selectedVariant, setSelectedVariant] = useState('Warm with Ice Cream');

  const preparations = [
    {
      id: 'warm-ice-cream',
      name: 'Warm with Ice Cream',
      desc: 'Served warm with a velvety vanilla ice cream scoop and molten dark chocolate drizzle',
      imageUrl: '/images/products/the-brownie-dub.jpg',
      alt: 'Warm signature brownie served with cold vanilla ice cream and dark cocoa sauce',
      badge: 'House Favorite',
    },
    {
      id: 'nutella-loaded',
      name: 'Nutella Loaded Fudge',
      desc: 'Generously blanketed with pure hazelnut Nutella spread and crunchy roasted nut shavings',
      imageUrl: '/images/products/nutella-overload-brownie.jpg',
      alt: 'Nutella loaded fudge brownie topped with roasted hazelnuts',
      badge: 'Nutella Special',
    },
    {
      id: 'pistachio-kunafa',
      name: 'Pistachio Kunafa Fusion',
      desc: 'Crisp golden kataifi pastry toasted in pure ghee, layered over dense fudge with pistachio drizzle',
      imageUrl: '/images/products/pistachio-kunafa-brownie.jpg',
      alt: 'Pistachio Kunafa fusion layered brownie slice with golden kataifi pastry',
      badge: 'Trending Fusion',
    },
    {
      id: 'classic-fudge',
      name: 'Classic Dark Cocoa Fudge',
      desc: 'Slow-baked with 54% dark Dutch cocoa for a delicate crinkle crust and gooey, melting center',
      imageUrl: '/images/products/classic-walnut-fudge.jpg',
      alt: 'Classic slow baked dark cocoa fudge brownie with signature crinkle top',
      badge: '100% Vegetarian',
    },
  ];

  // Preload preparation images on mount
  useEffect(() => {
    preparations.forEach((prep) => {
      const img = new Image();
      img.src = prep.imageUrl;
    });
  }, []);

  const activePrep = preparations.find((p) => p.name === selectedVariant) || preparations[0];

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(
    `Hello Tenkasi Desserts! I would like to order the Signature Brownie (${selectedVariant} preparation). Please confirm availability.`
  )}`;

  return (
    <section id="signature-brownie" className="py-12 sm:py-20 lg:py-28 bg-[#241410] text-[#FAF6F0] relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Subtle warm ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#D95B32]/12 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D95B32]/8 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: Interactive Image Container with Smooth Crossfade */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#1C0D0A] shadow-2xl border border-white/10 aspect-[4/3] sm:aspect-[4/3]">
              {preparations.map((prep) => {
                const isActive = prep.name === selectedVariant;
                return (
                  <div
                    key={prep.id}
                    className={`absolute inset-0 transition-all duration-500 ease-out motion-reduce:transition-none ${
                      isActive
                        ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                        : 'opacity-0 scale-[0.98] z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={prep.imageUrl}
                      alt={prep.alt}
                      loading="eager"
                      onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                );
              })}
            </div>

            {/* Preparation Attributes Bar */}
            <div className="mt-3 sm:mt-4 px-1 flex flex-wrap items-center justify-between text-xs text-[#FAF6F0]/70 gap-2">
              <span className="font-light">
                54% Belgian Cocoa &middot; Crinkle Crust &middot; Fudgy Center
              </span>
              <span className="text-[#D95B32] font-semibold">
                Fresh Daily Batch
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Preparation Selector */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2.5">
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D95B32] font-bold">
                  OUR SIGNATURE CREATION
                </span>
                <span className="h-[1px] w-8 bg-[#D95B32]/40" />
              </div>
              
              <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                The Signature Brownie Dub
              </h2>

              <p className="text-[#FAF6F0]/80 text-xs sm:text-base leading-relaxed font-light">
                Slow-baked with genuine 54% dark Dutch cocoa and pure dairy butter, each brownie delivers a delicate papery crinkle crust and a dense, melting fudge center. Served fresh daily across our Tenkasi counters.
              </p>
            </div>

            {/* Preparation Selector */}
            <div className="space-y-2 sm:space-y-2.5 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[#D95B32]">
                  Select Your Preparation:
                </span>
                <span className="text-[11px] text-[#FAF6F0]/60 font-light">
                  Tap to preview
                </span>
              </div>

              <div className="space-y-2 sm:space-y-2.5">
                {preparations.map((prep) => {
                  const isSelected = selectedVariant === prep.name;
                  return (
                    <button
                      key={prep.id}
                      type="button"
                      onClick={() => setSelectedVariant(prep.name)}
                      className={`w-full text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200 flex items-center justify-between group active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D95B32] ${
                        isSelected
                          ? 'bg-white/10 border-[#D95B32] text-white shadow-md ring-1 ring-[#D95B32]/50'
                          : 'bg-white/[0.03] border-white/10 hover:border-white/20 text-[#FAF6F0]/80 hover:bg-white/[0.06]'
                      }`}
                      aria-pressed={isSelected}
                    >
                      <div className="space-y-0.5 sm:space-y-1 pr-3">
                        <div className="flex items-center space-x-2">
                          <span className="font-heading font-bold text-xs sm:text-base text-white">
                            {prep.name}
                          </span>
                          {isSelected && (
                            <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-[#D95B32]/25 text-[#D95B32] tracking-wide uppercase">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#FAF6F0]/70 leading-relaxed font-light">
                          {prep.desc}
                        </p>
                      </div>

                      <div className="flex-shrink-0 flex items-center justify-center">
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center border transition-all ${
                            isSelected
                              ? 'border-[#D95B32] bg-[#D95B32] text-white'
                              : 'border-white/20 text-transparent group-hover:border-white/40'
                          }`}
                        >
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions: Terracotta WhatsApp pill button */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 min-h-[48px] py-3.5 px-6 rounded-full bg-[#D95B32] hover:bg-[#C44C24] active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order {activePrep.name} on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  if (onSelectCategory) onSelectCategory('brownies');
                  const el = document.getElementById('menu');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center space-x-2 min-h-[48px] py-3.5 px-6 rounded-full border border-white/25 hover:border-white active:bg-white/10 active:scale-[0.98] text-white text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-white/5"
              >
                <span>Browse Full Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] sm:text-xs text-[#FAF6F0]/60 pt-1 leading-relaxed">
              Counter pickups available at Koolakadai Bazaar, Melagaram &amp; ICI Stall. Doorstep delivery across Tenkasi municipality.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
