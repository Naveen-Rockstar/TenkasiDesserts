import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export default function Hero({ onOpenZomato }) {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(
    "Hello Tenkasi Desserts! I'm visiting your website and would like to order fresh desserts today."
  )}`;

  return (
    <section
      id="hero"
      className="relative bg-[#1A0B08] text-[#FAF6F0] overflow-hidden"
    >
      {/* Subtle Warm Ambient Lighting */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] lg:w-[700px] h-[500px] bg-[#D95B32]/12 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#D95B32]/8 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* =========================================================================
          DESKTOP HERO LAYOUT (PRESERVED 100% UNCHANGED)
          ========================================================================= */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <img
          src="/images/hero/hero-dessert-assortment.jpg"
          alt="Artisanal dessert assortment featuring Belgian brownies, celebration cakes, and dessert creations"
          fetchPriority="high"
          loading="eager"
          onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
          className="w-full h-full object-cover object-right-center animate-hero-image-reveal motion-reduce:animate-none"
        />
        {/* Editorial Contrast Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#1A0B08] via-[#1A0B08]/92 via-45% to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#1A0B08] via-transparent to-[#1A0B08]/40 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Desktop Main Container */}
      <div className="hidden lg:block relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 xl:py-24">
        <div className="grid grid-cols-12 gap-12 items-center min-h-[560px]">
          
          {/* Desktop Left Editorial Column */}
          <div className="col-span-7 xl:col-span-6 space-y-7">
            {/* Eyebrow */}
            <div className="animate-hero-fade-up motion-reduce:animate-none">
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D95B32] animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#EADBC8] font-bold">
                  HANDCRAFTED DESSERTS &bull; TENKASI
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="animate-hero-fade-up motion-reduce:animate-none font-heading font-extrabold text-white tracking-tight text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.08] text-balance">
              Something Sweet<br />
              <span className="text-[#FAF6F0]/90">for Every Craving.</span>
            </h1>

            {/* Supporting Text */}
            <p className="animate-hero-fade-up motion-reduce:animate-none text-[#FAF6F0]/85 text-lg font-light leading-relaxed max-w-xl text-pretty">
              From indulgent brownies and delightful cakes to creamy dessert tubs and refreshing treats, discover your next favourite at Tenkasi Desserts.
            </p>

            {/* CTAs */}
            <div className="animate-hero-fade-up motion-reduce:animate-none pt-2 flex items-center gap-3.5">
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#D95B32] hover:bg-[#C44C24] text-white font-semibold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white group"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-0.5" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/25 hover:border-white hover:bg-white/5 text-[#FAF6F0] font-semibold text-sm tracking-wider uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-[#D95B32]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Variety Chips Strip (Desktop Only) */}
            <div className="animate-hero-fade-up motion-reduce:animate-none pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs text-[#FAF6F0]/75 font-light">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D95B32] mr-1">
                Full Variety:
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Fudge Brownies</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Celebration Cakes</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Dessert Tubs</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Rose Milk</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Gift Boxes</span>
            </div>
          </div>

          {/* Desktop Right Accent Badge */}
          <div className="col-span-5 xl:col-span-6 flex justify-end items-end h-full">
            <div className="px-5 py-3 rounded-2xl bg-[#1A0B08]/85 backdrop-blur-md border border-white/15 text-xs text-[#FAF6F0] shadow-2xl flex items-center space-x-3 pointer-events-none mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D95B32] animate-pulse" />
              <div>
                <p className="font-heading font-bold text-white text-xs tracking-tight">Tenkasi Artisanal Bakery</p>
                <p className="text-[10px] text-[#FAF6F0]/70 font-light">Morning Kitchen Batches &bull; 54% Dutch Cocoa &bull; Real Dairy</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          DELIBERATE MOBILE-FIRST HERO LAYOUT (<1024px)
          - Full-bleed appetizing photography with seamless bottom gradient melt
          - High-contrast, beautifully spaced text below image (NO awkward overlaps)
          - No narrow dark card, no decorative floating badge clutter
          - Clamp typography, 48px touch targets, compact height
          ========================================================================= */}
      <div className="lg:hidden flex flex-col w-full">
        
        {/* Mobile Full-Bleed Food Photography Banner */}
        <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-[#140806]">
          <img
            src="/images/hero/hero-dessert-assortment.jpg"
            alt="Tenkasi Desserts handcrafted chocolate brownies, cakes, and dessert tubs"
            fetchPriority="high"
            loading="eager"
            onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
            className="w-full h-full object-cover object-center animate-hero-image-reveal motion-reduce:animate-none"
          />
          {/* Bottom vignette gradient melting into dark chocolate body */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-[#1A0B08] via-[#1A0B08]/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Mobile Content Block: Clear, High-Contrast & Touch-Friendly */}
        <div className="relative z-10 px-5 sm:px-6 pt-3 pb-10 space-y-4">
          
          {/* Eyebrow */}
          <div className="animate-hero-fade-up motion-reduce:animate-none">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D95B32] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#EADBC8] font-bold">
                HANDCRAFTED DESSERTS &bull; TENKASI
              </span>
            </div>
          </div>

          {/* Headline with fluid clamp sizing */}
          <h1 className="animate-hero-fade-up motion-reduce:animate-none font-heading font-extrabold text-white tracking-tight text-[1.85rem] sm:text-4xl leading-[1.12] text-balance">
            Something Sweet<br />
            <span className="text-[#FAF6F0]/90">for Every Craving.</span>
          </h1>

          {/* Concise, readable supporting text */}
          <p className="animate-hero-fade-up motion-reduce:animate-none text-[#FAF6F0]/85 text-sm sm:text-base font-light leading-relaxed text-pretty">
            From indulgent brownies and delightful cakes to creamy dessert tubs and refreshing treats, discover your next favourite at Tenkasi Desserts.
          </p>

          {/* Primary & Secondary Action Buttons (Touch-friendly 48px height) */}
          <div className="animate-hero-fade-up motion-reduce:animate-none pt-2 flex flex-col sm:flex-row items-stretch gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3.5 rounded-full bg-[#D95B32] hover:bg-[#C44C24] active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md text-center group"
            >
              <span>Explore Our Menu</span>
              <ArrowDown className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3.5 rounded-full border border-white/25 hover:border-white active:bg-white/10 active:scale-[0.98] text-[#FAF6F0] font-semibold text-xs uppercase tracking-wider transition-all text-center"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-[#D95B32]" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}