import React, { useState } from 'react';
import { MapPin, Navigation, Phone, MessageCircle, ExternalLink, AlertCircle } from 'lucide-react';
import { OUTLETS, BUSINESS_CONFIG } from '../data/businessData';

export default function OutletsSection() {
  const [selectedOutlet, setSelectedOutlet] = useState(OUTLETS[0]);

  const outletWhatsAppUrl = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent(
    `Hello Tenkasi Desserts! I want to visit or place a pickup/delivery order for your ${selectedOutlet.name} location.`
  )}`;

  return (
    <section id="visit-us" className="py-12 sm:py-20 lg:py-28 bg-[#241410] text-[#FAF6F0] scroll-mt-16 sm:scroll-mt-20 relative overflow-hidden">
      {/* Subtle ambient warmth */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#D95B32]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#D95B32]/8 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 sm:space-y-3 mb-8 sm:mb-16">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D95B32] font-bold">
              VERIFIED LOCATIONS
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-[#D95B32]/40" />
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Visit Our Outlets &amp; Counters
          </h2>

          <p className="text-[#FAF6F0]/80 text-xs sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Pick up fresh brownies, custom celebration cakes, and chilled dessert tubs directly from our verified counters across Tenkasi.
          </p>
        </div>

        {/* Layout: Outlet Selector + Active Detail Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Outlet Selector */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#D95B32] font-bold">
                Select Location:
              </span>
              <span className="text-[11px] text-[#FAF6F0]/60 font-light">
                {OUTLETS.length} verified listings
              </span>
            </div>

            <div className="divide-y divide-white/10 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden">
              {OUTLETS.map((outlet) => {
                const isSelected = selectedOutlet.id === outlet.id;
                return (
                  <button
                    key={outlet.id}
                    type="button"
                    onClick={() => setSelectedOutlet(outlet)}
                    className={`w-full text-left p-3.5 sm:p-5 transition-all duration-200 flex items-start justify-between group active:scale-[0.99] focus:outline-none focus-visible:bg-white/10 ${
                      isSelected
                        ? 'bg-white/[0.08] text-white'
                        : 'hover:bg-white/[0.04] text-[#FAF6F0]/70'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="space-y-1 pr-3">
                      <div className="flex items-center space-x-2">
                        <span className={`font-heading font-bold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-[#FAF6F0] group-hover:text-white'}`}>
                          {outlet.name}
                        </span>
                      </div>
                      
                      <p className="text-[11px] sm:text-xs text-[#FAF6F0]/60 line-clamp-1 font-light">
                        {outlet.address}
                      </p>
                      
                      <div className="pt-0.5 flex items-center space-x-2">
                        <span className={`text-[9px] sm:text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full ${
                          isSelected ? 'bg-[#D95B32]/25 text-[#D95B32]' : 'bg-white/5 text-[#FAF6F0]/50'
                        }`}>
                          {outlet.statusBadge || outlet.tag}
                        </span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 pt-1">
                      <div
                        className={`w-3 h-3 rounded-full transition-all ${
                          isSelected ? 'bg-[#D95B32] scale-100 shadow-sm' : 'bg-white/20 scale-75 group-hover:bg-white/40'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Operating Notice Note */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-[#FAF6F0]/70 space-y-1">
              <p className="font-semibold text-[#D95B32]">Daily Kitchen Operations:</p>
              <p className="font-light leading-relaxed text-[11px] sm:text-xs">{BUSINESS_CONFIG.operatingHoursNote}</p>
            </div>
          </div>

          {/* Right Column: Active Outlet Detail Area */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-white/[0.04] border border-white/10 space-y-5 sm:space-y-6">
            
            {/* Header info */}
            <div className="pb-4 sm:pb-5 border-b border-white/10 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#D95B32] font-bold px-3 py-1 rounded-full bg-[#D95B32]/15">
                  {selectedOutlet.statusBadge || selectedOutlet.tag}
                </span>

                <a
                  href={selectedOutlet.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 min-h-[38px] px-3.5 py-1.5 rounded-full bg-[#D95B32] hover:bg-[#C44C24] active:scale-95 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 fill-white" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h3 className="font-heading text-xl sm:text-3xl font-extrabold text-white pt-1">
                {selectedOutlet.name}
              </h3>
              
              <p className="text-xs sm:text-sm text-[#FAF6F0]/70 font-light">
                {selectedOutlet.city} {selectedOutlet.pincode ? `· PIN: ${selectedOutlet.pincode}` : ''}
              </p>
            </div>

            {/* Specific verification note if present */}
            {selectedOutlet.verificationNote && (
              <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed text-[11px] sm:text-xs">{selectedOutlet.verificationNote}</p>
              </div>
            )}

            {/* Verified Address Block */}
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#D95B32]">
                Verified Address &amp; Landmark:
              </span>
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D95B32] flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-medium text-white leading-snug">{selectedOutlet.address}</p>
                  <p className="text-xs text-[#FAF6F0]/60 font-light">{selectedOutlet.city}</p>
                </div>
              </div>
            </div>

            {/* Offerings at this Location */}
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#D95B32]">
                Counter Offerings:
              </span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {selectedOutlet.features.map((feat, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-[#FAF6F0]/80 font-light"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: Direct WhatsApp & Call */}
            <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <a
                href={outletWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center space-x-2 min-h-[48px] px-6 py-3.5 rounded-full bg-[#D95B32] hover:bg-[#C44C24] active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire via WhatsApp</span>
              </a>

              <a
                href={`tel:${selectedOutlet.phone}`}
                className="inline-flex items-center justify-center space-x-2 min-h-[48px] px-6 py-3.5 rounded-full border border-white/20 hover:border-white active:bg-white/10 active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider transition-colors hover:bg-white/5"
              >
                <Phone className="w-4 h-4 text-[#D95B32]" />
                <span>Call {selectedOutlet.phone}</span>
              </a>
            </div>

            <p className="text-[11px] sm:text-xs text-[#FAF6F0]/60 font-light">
              {BUSINESS_CONFIG.deliveryCoverage}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}