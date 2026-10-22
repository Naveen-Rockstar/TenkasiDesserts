import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/businessData';

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-[#FAF6F0] text-[#241410] border-t border-[#241410]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-16 space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D95B32] font-bold block">
            Guest Testimonials
          </span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#241410] tracking-tight">
            What they say about us
          </h2>
          <p className="text-[#6C534D] text-xs sm:text-base font-light leading-relaxed">
            Real experiences from celebration hosts and dessert lovers across Tenkasi &amp; Melagaram.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl sm:rounded-3xl bg-[#F4EDE3] p-5 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-6 border border-[#241410]/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-3 sm:space-y-4">
                {/* 5 Stars */}
                <div className="flex text-amber-500 space-x-1">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-[15px] text-[#241410] font-normal leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-3 sm:pt-4 border-t border-[#241410]/10 flex items-center justify-between gap-2">
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-base text-[#241410]">
                    {review.author}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#6C534D] font-light">
                    {review.role}
                  </p>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-white/70 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#D95B32] shrink-0">
                  {review.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}