import React from 'react';
import { Truck, Phone, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, OUTLETS } from '../data/businessData';

export default function DeliveryBanner({ onOpenZomato }) {
  return (
    <section className="bg-caramel text-espresso border-y border-caramel-700/20 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Delivery & Ordering Notification Strip */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-2 border-b border-espresso/15">
          
          <div className="flex items-center space-x-3 text-center lg:text-left">
            <div className="w-10 h-10 rounded-full bg-espresso text-caramel flex items-center justify-center flex-shrink-0 shadow-sm">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-base sm:text-lg block leading-tight">
                Fresh Counter Pickups &amp; Doorstep Delivery Across Tenkasi
              </span>
              <span className="text-xs text-espresso/80 font-medium">
                Koolakadai Bazaar • Melagaram • ICI Stall • Pre-orders delivered to your doorstep
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${encodeURIComponent("Hi Tenkasi Desserts! I would like to order fresh desserts for delivery/pickup.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-espresso hover:bg-dark-chocolate text-cream-100 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-caramel text-caramel" />
              <span>WhatsApp: {BUSINESS_CONFIG.phone}</span>
            </a>

            <button
              onClick={onOpenZomato}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white text-espresso text-xs font-bold transition-colors shadow-sm"
            >
              <span className="w-4 h-4 rounded bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">z</span>
              <span>Order on Zomato</span>
            </button>
          </div>

        </div>

        {/* Bottom: Our Branches Ticker (Inspired by The Grand Sweets branch banner) */}
        <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
          <div className="flex items-center space-x-2 font-bold uppercase tracking-wider text-[11px] text-espresso/90">
            <MapPin className="w-3.5 h-3.5 text-espresso" />
            <span>Our Branches:</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-espresso/90">
            {OUTLETS.map((outlet, index) => (
              <a
                key={outlet.id}
                href={outlet.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-semibold flex items-center space-x-1"
                title={`Open ${outlet.name} on Google Maps`}
              >
                <span>{outlet.name.split('/')[0]}</span>
                <span className="text-[10px] opacity-75">({outlet.tag})</span>
                {index < OUTLETS.length - 1 && <span className="opacity-40 ml-2 hidden sm:inline">•</span>}
              </a>
            ))}
          </div>

          <div className="hidden xl:flex items-center space-x-1.5 text-espresso/80 text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 text-espresso" />
            <span>Daily Kitchen Batches</span>
          </div>
        </div>

      </div>
    </section>
  );
}
