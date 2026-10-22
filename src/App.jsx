import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryBrowser from './components/CategoryBrowser';
import BestsellersGrid from './components/BestsellersGrid';
import SignatureBrownieFeature from './components/SignatureBrownieFeature';
import BrandStory from './components/BrandStory';
import HighlightCards from './components/HighlightCards';
import CelebrationCakes from './components/CelebrationCakes';
import Gallery from './components/Gallery';
import TestimonialsSection from './components/TestimonialsSection';
import OutletsSection from './components/OutletsSection';
import OrderingPanel from './components/OrderingPanel';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ZomatoModal from './components/ZomatoModal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isZomatoModalOpen, setIsZomatoModalOpen] = useState(false);

  const openZomato = () => setIsZomatoModalOpen(true);
  const closeZomato = () => setIsZomatoModalOpen(false);

  // Scroll-triggered subtle section reveals with mobile-responsive thresholds
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Fallback if IntersectionObserver is unavailable
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('reveal-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // threshold 0 ensures elements of any height (even 9000px tall mobile lists)
        // reveal as soon as their top enters the trigger window
        threshold: 0,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => {
      if (el.classList.contains('reveal-visible')) return;
      // If already within or above the viewport on initial load, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('reveal-visible');
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#241410] flex flex-col font-sans selection:bg-[#D95B32] selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar onOpenZomato={openZomato} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 2. Crave-inspired Editorial Hero (Desktop Preserved + Mobile-First Dedicated Layout) */}
        <Hero onOpenZomato={openZomato} />

        {/* 3. Category Browser Strip */}
        <div className="reveal-on-scroll">
          <CategoryBrowser onSelectCategory={setActiveCategory} />
        </div>

        {/* 4. Our Premium Products (Catalogue & Cards) */}
        <div className="reveal-on-scroll">
          <BestsellersGrid
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            onOpenZomato={openZomato}
          />
        </div>

        {/* 5. Signature Brownie Interactive Feature */}
        <div className="reveal-on-scroll">
          <SignatureBrownieFeature onSelectCategory={setActiveCategory} />
        </div>

        {/* 6. Chef Spotlight: "Bite into Our Best" */}
        <div className="reveal-on-scroll">
          <BrandStory />
        </div>

        {/* 7. 3 Tonal Promotional Cards: Sweet Gifting, Fresh Bakes Daily, Celebrate With Us */}
        <div className="reveal-on-scroll">
          <HighlightCards />
        </div>

        {/* 8. Celebration Cakes Consultation Desk */}
        <div className="reveal-on-scroll">
          <CelebrationCakes />
        </div>

        {/* 9. Visual Dessert Gallery */}
        <div className="reveal-on-scroll">
          <Gallery />
        </div>

        {/* 10. Customer Testimonials: "What they say about us" */}
        <div className="reveal-on-scroll">
          <TestimonialsSection />
        </div>

        {/* 11. Verified Outlets & Counters */}
        <div className="reveal-on-scroll">
          <OutletsSection />
        </div>

        {/* 12. Warm Terracotta Campaign Banner: "Ready For Delicious Desserts?" */}
        <div className="reveal-on-scroll">
          <OrderingPanel onOpenZomato={openZomato} />
        </div>
      </main>

      {/* 13. Professional Footer */}
      <Footer onOpenZomato={openZomato} />

      {/* Quick WhatsApp Floating Action */}
      <FloatingWhatsApp />

      {/* Zomato Pre-Launch Demo Notice Modal */}
      <ZomatoModal isOpen={isZomatoModalOpen} onClose={closeZomato} />
    </div>
  );
}