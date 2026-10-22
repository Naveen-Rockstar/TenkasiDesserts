import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(
    "Hello Tenkasi Desserts! I'm browsing your website and want to place an order."
  )}`;

  return (
    <aside 
      className="fixed right-3.5 sm:right-6 z-30 flex items-center flex-col sm:flex-row-reverse gap-2 pointer-events-none"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
      aria-label="Floating WhatsApp Help"
    >
      {/* Optional brief tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto bg-[#241410] text-[#FAF6F0] px-3.5 py-1.5 rounded-full shadow-lg border border-white/10 text-xs flex items-center space-x-2 animate-fade-in-up">
          <span>Order on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button (Compact & Safe on Mobile) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-12 h-12 sm:w-13 sm:h-13 p-3 sm:p-3.5 rounded-full bg-[#D95B32] hover:bg-[#C44C24] active:scale-95 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Chat with Tenkasi Desserts on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
      </a>
    </aside>
  );
}