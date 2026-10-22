import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export default function Navbar({ onOpenZomato }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Menu', href: '#menu' },
    { label: 'Signature Brownies', href: '#signature-brownie' },
    { label: 'Celebration Cakes', href: '#cakes' },
    { label: 'Our Story', href: '#our-story' },
    { label: 'Outlets', href: '#visit-us' },
  ];

  // Sync active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'menu', 'signature-brownie', 'cakes', 'our-story', 'visit-us'];
      const scrollY = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(`#${sectionIds[i]}`);
          return;
        }
      }
      if (window.scrollY < 180) {
        setActiveSection('#hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile drawer Escape key and body scroll lock
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [mobileMenuOpen]);

  const handleNavLinkClick = (href) => {
    setMobileMenuOpen(false);
    setActiveSection(href);
  };

  const whatsappDirectUrl = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(
    "Hello Tenkasi Desserts! I would like to order fresh desserts today."
  )}`;

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#1C0D0A]/95 backdrop-blur-md text-[#FAF6F0] border-b border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Left: Brand Logo & Wordmark */}
            <a
              href="#hero"
              onClick={() => handleNavLinkClick('#hero')}
              className="flex items-center space-x-2.5 sm:space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D95B32] rounded-lg py-1 group"
              aria-label="Tenkasi Desserts Home"
            >
              <div className="h-9 w-9 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-white/5 border border-white/15 p-1 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src="/tenkasi-desserts-logo.png"
                  alt="Tenkasi Desserts"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-xl tracking-tight text-[#FAF6F0] leading-none">
                  Tenkasi Desserts
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#D95B32] font-semibold mt-0.5 sm:mt-1">
                  Artisanal Bakery
                </span>
              </div>
            </a>

            {/* Centre: Desktop Navigation Links (Unchanged) */}
            <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-normal text-[#FAF6F0]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`py-1.5 transition-all relative ${
                      isActive
                        ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#D95B32]'
                        : 'text-[#FAF6F0]/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right: Desktop Zomato Notice & Terracotta Pill WhatsApp CTA (Unchanged) */}
            <div className="hidden sm:flex items-center space-x-3.5">
              <button
                onClick={onOpenZomato}
                className="px-4 py-2 rounded-full border border-white/20 hover:border-white/50 text-[#FAF6F0] text-xs font-semibold tracking-wide transition-all hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D95B32] flex items-center space-x-1.5"
                title="Check Zomato delivery notice"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-red-600 text-white flex items-center justify-center text-[9px] font-bold font-serif">
                  z
                </span>
                <span>Zomato</span>
              </button>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#D95B32] hover:bg-[#C44C24] text-white font-semibold text-xs tracking-wider transition-all shadow-sm hover:shadow-md flex items-center space-x-1.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions: Touch-Friendly Order Pill & Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden px-3 py-1.5 rounded-full bg-[#D95B32] hover:bg-[#C44C24] text-white font-semibold text-xs flex items-center space-x-1.5 active:scale-95 transition-transform shadow-xs"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Order</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#FAF6F0] hover:text-[#D95B32] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D95B32] active:scale-95 transition-transform"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#140806]/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 right-0 w-[84%] max-w-sm h-full bg-[#1C0D0A] border-l border-white/10 shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-2.5">
                <img
                  src="/tenkasi-desserts-logo.png"
                  alt="Tenkasi Desserts"
                  className="h-8 w-8 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm text-[#FAF6F0]">
                    Tenkasi Desserts
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-[#D95B32]">
                    Artisanal Kitchen
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF6F0] hover:text-[#D95B32] transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Links with 48px Touch Targets */}
            <nav className="mt-5 flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavLinkClick(link.href)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#D95B32]/15 text-white font-semibold border-l-2 border-[#D95B32]'
                        : 'text-[#FAF6F0]/85 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#D95B32]' : 'text-white/20'}`} />
                  </a>
                );
              })}
            </nav>

            {/* Ordering Options in Drawer */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-[#D95B32] font-bold block">
                Quick Order Channels
              </span>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-full bg-[#D95B32] hover:bg-[#C44C24] text-white font-semibold text-xs tracking-wider uppercase active:scale-[0.98] transition-transform shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenZomato();
                }}
                className="w-full py-3 px-4 rounded-full border border-white/20 hover:border-white/50 text-[#FAF6F0] text-xs font-semibold tracking-wide transition-colors flex items-center justify-center space-x-2 active:scale-[0.98]"
              >
                <span className="w-3.5 h-3.5 rounded-full bg-red-600 text-white flex items-center justify-center text-[9px] font-bold font-serif">
                  z
                </span>
                <span>Zomato Delivery Notice</span>
              </button>
            </div>
          </div>

          {/* Drawer Footer with Outlet Notice */}
          <div className="pt-6 border-t border-white/5 text-[11px] text-[#FAF6F0]/60 space-y-1 font-light">
            <div className="flex items-center space-x-1.5 text-[#D95B32]">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="font-semibold text-white">4 Verified Outlets</span>
            </div>
            <p className="text-[10px] leading-relaxed">
              Koolakadai Bazaar &bull; Melagaram &bull; ICI Stall &bull; Coimbatore
            </p>
          </div>
        </div>
      </div>
    </>
  );
}