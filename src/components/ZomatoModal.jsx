import React, { useEffect } from 'react';
import { X, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export default function ZomatoModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const directWhatsAppUrl = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(
    "Hello Tenkasi Desserts! I wanted to check your delivery availability and order fresh desserts."
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="zomato-modal-title"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-cream-300 relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header styling */}
        <div className="bg-[#35170F] p-6 text-[#FFF8F0] relative border-b border-white/10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-xl shadow-sm flex-shrink-0">
              <span className="italic font-serif">z</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-caramel-400 font-semibold block">
                Delivery Partner
              </span>
              <h3 id="zomato-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-cream-50 leading-tight">
                Zomato Online Ordering
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5 text-chocolate-900">
          {/* Official Client Notice Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-amber-50/90 border border-amber-200/90 text-amber-950 space-y-2">
            <div className="flex items-start space-x-2.5">
              <Clock className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-serif font-bold text-base text-amber-950 leading-snug">
                  Zomato integration coming soon! Online ordering will be enabled in the final website.
                </p>
                <p className="text-xs text-amber-900/80 leading-relaxed font-light">
                  Our live restaurant profile and menu catalog are being prepared for Tenkasi municipality. In the meantime, direct doorstep delivery and counter pickup are active every day via WhatsApp.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Ordering Benefits */}
          <div className="space-y-2.5">
            <span className="text-xs uppercase tracking-wider font-semibold text-cocoa block">
              Order Direct for Instant Delivery:
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-cocoa">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Kitchen-Fresh Pricing:</strong> Direct bakery pricing with zero platform markups.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Immediate Dispatch:</strong> Prompt packaging from our Koolakadai Bazaar &amp; Melagaram kitchens.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Custom Requests:</strong> Add warm chocolate sauce, custom cake inscriptions, or ice cream sides.</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2.5">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-[#E99BB5] hover:bg-[#df8fa9] text-[#35170F] font-bold text-xs uppercase tracking-wider shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35170F]"
            >
              <MessageCircle className="w-4 h-4 fill-[#35170F]" />
              <span>Order on WhatsApp ({BUSINESS_CONFIG.phone})</span>
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl border border-cream-300 hover:bg-cream-100 text-[#65483F] font-medium text-xs transition-colors"
            >
              Close Notice
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
