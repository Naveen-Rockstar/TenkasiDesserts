import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessData';

export default function CelebrationCakes() {
  const [occasion, setOccasion] = useState('Birthday Celebration');
  const [flavor, setFlavor] = useState('Signature Dark Chocolate Truffle');
  const [weight, setWeight] = useState('1.0 Kg (Serves 8-10)');
  const [dietary, setDietary] = useState('100% Eggless');
  const [date, setDate] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  const generateWhatsAppMessage = () => {
    let msg = `Hello Tenkasi Desserts!\n\n`;
    msg += `I would like to enquire about a Celebration Cake:\n`;
    msg += `• Occasion: ${occasion}\n`;
    msg += `• Preferred Flavor: ${flavor}\n`;
    msg += `• Size / Weight: ${weight}\n`;
    msg += `• Dietary: ${dietary}\n`;
    if (date) msg += `• Required Date: ${date}\n`;
    if (customNotes) msg += `• Inscription / Notes: ${customNotes}\n`;
    msg += `\nPlease share design references, quotes, and availability.`;
    return encodeURIComponent(msg);
  };

  const handleEnquire = (e) => {
    e.preventDefault();
    const url = `https://wa.me/${BUSINESS_CONFIG.phoneRaw}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cakes" className="py-12 sm:py-20 lg:py-28 bg-[#FAF6F0] text-[#241410] scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 sm:space-y-3 mb-8 sm:mb-16">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D95B32] font-bold block">
            CUSTOM BAKING DESK
          </span>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#241410] tracking-tight">
            Celebration Cakes &amp; Gifting
          </h2>

          <p className="text-[#6C534D] text-xs sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            From vintage Korean bento cakes to multi-tiered milestone centerpieces, our pastry team crafts custom celebration cakes to order.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Cake Photo & Occasion Highlights */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm border border-[#241410]/5 aspect-[16/10] sm:aspect-[4/3] bg-[#241410]">
              <img
                src="/images/products/dark-truffle-celebration-cake.jpg"
                alt="Artisanal chocolate celebration cake baked in Tenkasi"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="rounded-2xl sm:rounded-3xl bg-[#F4EDE3] p-4 sm:p-7 space-y-3 sm:space-y-4 border border-[#241410]/5">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#241410]">
                Celebrations We Cater
              </h3>
              
              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#6C534D]">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D95B32] mt-1.5 flex-shrink-0" />
                  <span>
                    <strong className="text-[#241410] font-semibold">Birthdays &amp; Milestones:</strong> Rich dark chocolate drip, theme inspirations, and custom pastel buttercream.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D95B32] mt-1.5 flex-shrink-0" />
                  <span>
                    <strong className="text-[#241410] font-semibold">Anniversaries &amp; Bento Gifts:</strong> Korean vintage piping, delicate floral details, and personalized inscriptions.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D95B32] mt-1.5 flex-shrink-0" />
                  <span>
                    <strong className="text-[#241410] font-semibold">Hampers &amp; Dessert Assortments:</strong> Custom boxes pairing brownies, dream cake tubs, and chilled rose milk bottles.
                  </span>
                </li>
              </ul>

              <div className="pt-2 text-xs text-[#6C534D] leading-relaxed border-t border-[#241410]/10 font-light">
                <p>
                  <strong className="text-[#241410]">Advance Notice:</strong> We recommend placing custom cake enquiries at least 24 hours ahead to allow adequate setting and bespoke lettering.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Cake Consultation Form */}
          <div className="lg:col-span-7 bg-[#F4EDE3] rounded-2xl sm:rounded-3xl p-4 sm:p-9 shadow-sm border border-[#241410]/5">
            <div className="pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-[#241410]/10">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#241410]">
                Custom Cake Consultation
              </h3>
              <p className="text-[#6C534D] text-xs sm:text-sm mt-1 font-light">
                Select your cake preferences below to start a direct WhatsApp consultation with our bakers.
              </p>
            </div>

            <form onSubmit={handleEnquire} className="space-y-3.5 sm:space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                
                {/* Occasion */}
                <div className="space-y-1 sm:space-y-1.5">
                  <label htmlFor="occasion-select" className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#6C534D] block">
                    Occasion
                  </label>
                  <select
                    id="occasion-select"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#241410]/15 text-sm font-medium text-[#241410] focus:outline-none focus:ring-2 focus:ring-[#D95B32] min-h-[44px] transition-colors"
                  >
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Bento Surprise Gift">Bento Surprise Gift</option>
                    <option value="Milestone Event">Milestone Event</option>
                    <option value="Festival / Family Gathering">Festival / Family Gathering</option>
                  </select>
                </div>

                {/* Flavor */}
                <div className="space-y-1 sm:space-y-1.5">
                  <label htmlFor="flavor-select" className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#6C534D] block">
                    Preferred Flavor
                  </label>
                  <select
                    id="flavor-select"
                    value={flavor}
                    onChange={(e) => setFlavor(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#241410]/15 text-sm font-medium text-[#241410] focus:outline-none focus:ring-2 focus:ring-[#D95B32] min-h-[44px] transition-colors"
                  >
                    <option value="Signature Dark Chocolate Truffle">Signature Dark Chocolate Truffle</option>
                    <option value="Dutch Chocolate Ganache">Dutch Chocolate Ganache</option>
                    <option value="Red Velvet Cream Cheese">Red Velvet Cream Cheese</option>
                    <option value="Belgian Chocolate Fantasy">Belgian Chocolate Fantasy</option>
                    <option value="Butterscotch Crunch">Butterscotch Crunch</option>
                  </select>
                </div>

                {/* Size / Weight */}
                <div className="space-y-1 sm:space-y-1.5">
                  <label htmlFor="weight-select" className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#6C534D] block">
                    Size / Weight
                  </label>
                  <select
                    id="weight-select"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#241410]/15 text-sm font-medium text-[#241410] focus:outline-none focus:ring-2 focus:ring-[#D95B32] min-h-[44px] transition-colors"
                  >
                    <option value="Bento Mini (350g, 1-2 people)">Bento Mini (350g, 1-2 people)</option>
                    <option value="500g (Serves 4-6)">500g (Serves 4-6)</option>
                    <option value="1.0 Kg (Serves 8-10)">1.0 Kg (Serves 8-10)</option>
                    <option value="1.5 Kg (Serves 12-15)">1.5 Kg (Serves 12-15)</option>
                    <option value="2.0 Kg Tiered Celebration">2.0 Kg Tiered Celebration</option>
                  </select>
                </div>

                {/* Required Date */}
                <div className="space-y-1 sm:space-y-1.5">
                  <label htmlFor="date-input" className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#6C534D] block">
                    Required Date
                  </label>
                  <input
                    id="date-input"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#241410]/15 text-sm font-medium text-[#241410] focus:outline-none focus:ring-2 focus:ring-[#D95B32] min-h-[44px] transition-colors"
                  />
                </div>

              </div>

              {/* Dietary Requirement */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#6C534D] block">
                  Dietary Preference
                </span>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {['100% Eggless', 'Standard Baker Recipe'].map((opt) => {
                    const isChecked = dietary === opt;
                    return (
                      <label
                        key={opt}
                        className={`flex items-center justify-center p-2.5 sm:p-3 min-h-[44px] rounded-xl sm:rounded-2xl border text-xs sm:text-sm font-medium cursor-pointer transition-all duration-200 select-none ${
                          isChecked
                            ? 'bg-[#241410] border-[#241410] text-[#FAF6F0] shadow-xs'
                            : 'bg-white border-[#241410]/15 text-[#6C534D] hover:bg-[#FAF6F0]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="cakeDietary"
                          value={opt}
                          checked={isChecked}
                          onChange={(e) => setDietary(e.target.value)}
                          className="sr-only"
                        />
                        <span>{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Cake Inscription / Custom Notes */}
              <div className="space-y-1 sm:space-y-1.5 pt-1">
                <label htmlFor="notes-textarea" className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#6C534D] block">
                  Inscription on Cake / Custom Notes
                </label>
                <textarea
                  id="notes-textarea"
                  rows={2}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="E.g. Inscription 'Happy Birthday Karthik', pastel color theme, toppers..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#241410]/15 text-sm font-medium text-[#241410] focus:outline-none focus:ring-2 focus:ring-[#D95B32] transition-colors resize-none"
                />
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-full bg-[#D95B32] hover:bg-[#C44C24] active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire via WhatsApp</span>
                </button>
                <p className="text-[10px] sm:text-[11px] text-[#6C534D]/70 text-center mt-2">
                  Opens WhatsApp with pre-filled preferences for direct chef consultation.
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}