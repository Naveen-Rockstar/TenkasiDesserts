import React from 'react';

export default function CategoryBrowser({ onSelectCategory }) {
  const categories = [
    {
      id: 'brownies',
      name: 'Brownies',
      imageUrl: '/categories/brownies.png',
    },
    {
      id: 'cakes',
      name: 'Cakes',
      imageUrl: '/categories/cakes.png',
    },
    {
      id: 'tubs',
      name: 'Dessert Tubs',
      imageUrl: '/categories/tubs.png',
    },
    {
      id: 'pastries',
      name: 'Pastries',
      imageUrl: '/categories/pastries.png',
    },
    {
      id: 'beverages',
      name: 'Beverages',
      imageUrl: '/categories/beverages.png',
    },
    {
      id: 'giftboxes',
      name: 'Gift Boxes',
      imageUrl: '/categories/giftboxes.png',
    },
  ];

  const handleCategoryClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    const target = document.getElementById('menu');
    if (target) {
      const revealParent = target.closest('.reveal-on-scroll');
      if (revealParent) revealParent.classList.add('reveal-visible');
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-10 sm:py-16 bg-[#FAF6F0] text-[#241410] border-b border-[#241410]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-7 sm:mb-10 space-y-1.5 sm:space-y-2">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D95B32] font-bold block">
            EXPLORE OUR CREATIONS
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#241410] tracking-tight">
            Browse by Category
          </h2>
        </div>

        {/* 6 Circular Categories: 3 cols on mobile, 6 cols on tablet/desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-6 justify-items-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group flex flex-col items-center space-y-2 sm:space-y-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D95B32] rounded-2xl p-1.5 sm:p-2 active:scale-95 transition-transform duration-200"
              aria-label={`Filter by ${cat.name}`}
            >
              {/* Circular Photo Container */}
              <div className="w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-xs group-hover:shadow-md transition-all duration-300 bg-[#F4EDE3] p-1 border border-[#241410]/8">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = '/images/branded-fallback.svg'; }}
                  className="w-full h-full object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Label */}
              <span className="font-heading font-bold text-xs sm:text-sm text-[#241410] group-hover:text-[#D95B32] transition-colors text-center tracking-tight leading-tight">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}