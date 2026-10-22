import React from 'react';
import { Instagram, MapPin, Phone, MessageCircle, ArrowUp, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG, OUTLETS } from '../data/businessData';

export default function Footer({ onOpenZomato }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C0D0A] text-[#FAF6F0] pt-12 sm:pt-16 pb-16 sm:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Brand Column with Mascot Logo */}
          <div className="lg:col-span-4 space-y-3.5 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-white/5 border border-white/15 p-1 flex-shrink-0 flex items-center justify-center">
                <img
                  src="/tenkasi-desserts-logo.png"
                  alt="Tenkasi Desserts Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight leading-none">
                  Tenkasi Desserts
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#D95B32] font-bold mt-1">
                  Artisanal Bakery &amp; Desserts
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF6F0]/70 leading-relaxed font-light">
              Slow-baked chocolate brownies, bespoke celebration cakes, artisanal dessert tubs, and chilled beverages handcrafted fresh daily in Tenkasi, Tamil Nadu.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF6F0] hover:text-[#D95B32] active:scale-95 hover:border-[#D95B32]/50 transition-colors"
                aria-label="Tenkasi Desserts Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF6F0] hover:text-[#D95B32] active:scale-95 hover:border-[#D95B32]/50 transition-colors"
                aria-label="Tenkasi Desserts WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF6F0] hover:text-[#D95B32] active:scale-95 hover:border-[#D95B32]/50 transition-colors"
                aria-label="Tenkasi Desserts on Google Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Collections */}
          <div className="lg:col-span-2 space-y-2.5 sm:space-y-3">
            <p className="font-heading text-xs font-bold text-[#D95B32] uppercase tracking-widest">
              Collections
            </p>
            <ul className="space-y-2 text-xs text-[#FAF6F0]/75">
              <li>
                <a href="#signature-brownie" className="hover:text-white transition-colors py-1 block">
                  Signature Brownie
                </a>
              </li>
              <li>
                <a href="#cakes" className="hover:text-white transition-colors py-1 block">
                  Celebration Cakes
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors py-1 block">
                  Dessert Tubs &amp; Jars
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors py-1 block">
                  Rose Milk &amp; Shakes
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors py-1 block">
                  Gift Boxes &amp; Combos
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors py-1 block">
                  Visual Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Outlets */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <p className="font-heading text-xs font-bold text-[#D95B32] uppercase tracking-widest">
              Verified Outlets
            </p>
            <ul className="space-y-2.5 text-xs text-[#FAF6F0]/75">
              {OUTLETS.map((outlet) => (
                <li key={outlet.id}>
                  <a
                    href={outlet.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors group flex items-start space-x-1.5 py-0.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#D95B32] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white font-semibold block">{outlet.name}</strong>
                      <span className="block text-[#FAF6F0]/50 text-[11px] truncate">{outlet.address}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ordering & Contacts */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <p className="font-heading text-xs font-bold text-[#D95B32] uppercase tracking-widest">
              Order Online &amp; Visit
            </p>
            <div className="space-y-2.5 text-xs text-[#FAF6F0]/75">
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#D95B32] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-white font-medium">
                  {BUSINESS_CONFIG.phone}
                </a>
              </p>

              <p className="flex items-center space-x-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#D95B32] shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium"
                >
                  WhatsApp Ordering Desk
                </a>
              </p>

              <div className="pt-1">
                <button
                  onClick={onOpenZomato}
                  className="inline-flex items-center space-x-1.5 text-xs text-red-400 hover:text-red-300 font-semibold py-1"
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-red-600 text-white flex items-center justify-center text-[9px] font-bold font-serif">
                    z
                  </span>
                  <span>Order on Zomato Notice</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="pt-0.5">
                <a
                  href={BUSINESS_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-[11px] text-[#D95B32] underline underline-offset-4 hover:text-white py-1"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF6F0]/50 gap-4">
          <p className="text-center sm:text-left text-[11px] sm:text-xs">
            &copy; {new Date().getFullYear()} Tenkasi Desserts. Fresh artisanal desserts, celebration cakes &amp; sweet treats.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center space-x-1.5 min-h-[44px] px-3 text-[#D95B32] hover:text-white active:scale-95 transition-colors focus:outline-none"
            aria-label="Back to top of page"
          >
            <span className="text-xs font-semibold">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}