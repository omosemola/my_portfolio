import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, CheckCircle2, Wifi, Battery, Zap, ChevronRight, User } from 'lucide-react';

interface MockupProps {
  type: 'marketplace' | 'ecommerce' | 'mobile' | 'pastry';
}

const MARKETPLACE_PREVIEWS = [
  {
    id: 'onboarding',
    title: 'Student Onboarding',
    badge: 'Stationery, Tech Gadgets & Essentials',
    url: 'lightson-marketplace.app/welcome',
    image: '/projects/marketplace-1.png'
  },
  {
    id: 'storefront',
    title: 'Customer Storefront',
    badge: 'Food Ordering & Category Discovery',
    url: 'lightson-marketplace.app/explore',
    image: '/projects/marketplace-2.png'
  },
  {
    id: 'merchant',
    title: 'Merchant Partner Portal',
    badge: 'Store Onboarding & POS Terminal',
    url: 'lightson-marketplace.app/merchant/onboarding',
    image: '/projects/marketplace-3.png'
  }
];

const ECOMMERCE_PREVIEWS = [
  {
    id: 'hero',
    title: 'Bespoke Atelier Hero',
    badge: 'Luxury Kaftans & Agbadas',
    url: 'frankiestylesng.com',
    image: '/projects/ecommerce-1.png'
  },
  {
    id: 'catalogue',
    title: 'The Catalogue',
    badge: 'Category Filters & Sizing',
    url: 'frankiestylesng.com/shop',
    image: '/projects/ecommerce-2.png'
  },
  {
    id: 'arrivals',
    title: 'New Arrivals',
    badge: 'Luxury Kaftan Sets & Lace',
    url: 'frankiestylesng.com/collections',
    image: '/projects/ecommerce-3.png'
  },
  {
    id: 'product',
    title: 'Product & Bag Checkout',
    badge: 'Custom Sizing & Paystack',
    url: 'frankiestylesng.com/product/2',
    image: '/projects/ecommerce-4.png'
  }
];

const PASTRY_PREVIEWS = [
  {
    id: 'hero',
    title: 'Bakery Home & Taste Hero',
    badge: 'Artisanal Cakes & Pastries',
    url: 'pastryhomebylayo.shop',
    image: '/projects/pastry-1.png'
  },
  {
    id: 'catalog',
    title: 'Fresh From The Oven Catalog',
    badge: 'Small Chops, Cakes & Meat Pies',
    url: 'pastryhomebylayo.shop/shop',
    image: '/projects/pastry-2.png'
  },
  {
    id: 'checkout',
    title: 'Fast Checkout & Order Summary',
    badge: 'Location Delivery & Paystack',
    url: 'pastryhomebylayo.shop/checkout.html',
    image: '/projects/pastry-3.png'
  }
];

export const ProjectMockup: React.FC<MockupProps> = ({ type }) => {
  const [activeMarketplaceTab, setActiveMarketplaceTab] = useState(0);
  const [activeEcommerceTab, setActiveEcommerceTab] = useState(0);
  const [activePastryTab, setActivePastryTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Auto-swipe every 4.2 seconds unless paused by user interaction
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (type === 'marketplace') {
        setActiveMarketplaceTab((prev) => (prev + 1) % MARKETPLACE_PREVIEWS.length);
      } else if (type === 'ecommerce') {
        setActiveEcommerceTab((prev) => (prev + 1) % ECOMMERCE_PREVIEWS.length);
      } else if (type === 'pastry') {
        setActivePastryTab((prev) => (prev + 1) % PASTRY_PREVIEWS.length);
      }
    }, 4200);

    return () => clearInterval(interval);
  }, [type, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setIsPaused(false);
      return;
    }
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 35; // minimum px for swipe gesture

    if (type === 'marketplace') {
      if (diff > threshold) {
        setActiveMarketplaceTab((prev) => (prev + 1) % MARKETPLACE_PREVIEWS.length);
      } else if (diff < -threshold) {
        setActiveMarketplaceTab((prev) => (prev - 1 + MARKETPLACE_PREVIEWS.length) % MARKETPLACE_PREVIEWS.length);
      }
    } else if (type === 'ecommerce') {
      if (diff > threshold) {
        setActiveEcommerceTab((prev) => (prev + 1) % ECOMMERCE_PREVIEWS.length);
      } else if (diff < -threshold) {
        setActiveEcommerceTab((prev) => (prev - 1 + ECOMMERCE_PREVIEWS.length) % ECOMMERCE_PREVIEWS.length);
      }
    } else if (type === 'pastry') {
      if (diff > threshold) {
        setActivePastryTab((prev) => (prev + 1) % PASTRY_PREVIEWS.length);
      } else if (diff < -threshold) {
        setActivePastryTab((prev) => (prev - 1 + PASTRY_PREVIEWS.length) % PASTRY_PREVIEWS.length);
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
    setTimeout(() => setIsPaused(false), 2000);
  };

  if (type === 'marketplace') {
    const currentView = MARKETPLACE_PREVIEWS[activeMarketplaceTab];

    return (
      <div
        className="mockup-window marketplace-real-mockup"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Browser Top Window Bar */}
        <div className="mockup-header">
          <div className="mockup-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="mockup-url-bar">
            <ShieldCheck size={12} className="text-emerald" />
            <span>{currentView.url}</span>
          </div>

          <div className="mockup-badge-live">
            <span className="live-dot-pulse"></span>
            LIVE PLATFORM
          </div>
        </div>

        {/* Real Screenshot Display Area with Touch Swiping */}
        <div
          className="marketplace-display-area"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="marketplace-img-wrapper">
            {/* Sliding Image Track */}
            <div
              className="marketplace-slider-track"
              style={{ transform: `translateX(-${activeMarketplaceTab * 100}%)` }}
            >
              {MARKETPLACE_PREVIEWS.map((preview, index) => (
                <div key={preview.id} className="marketplace-slide">
                  <img
                    src={preview.image}
                    alt={preview.title}
                    className="marketplace-screenshot"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Floating Info Overlay Pill */}
            <div className="marketplace-floating-info">
              <span className="floating-title">{currentView.title}</span>
              <span className="floating-sub">• {currentView.badge}</span>
            </div>

            {/* Swipe Dot Indicators */}
            <div className="marketplace-dot-indicators">
              {MARKETPLACE_PREVIEWS.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`swipe-dot ${dotIdx === activeMarketplaceTab ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMarketplaceTab(dotIdx);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Interactive Screen Selector Strip */}
          <div className="marketplace-nav-strip">
            {MARKETPLACE_PREVIEWS.map((view, idx) => (
              <button
                key={view.id}
                type="button"
                className={`marketplace-nav-tab ${idx === activeMarketplaceTab ? 'active' : ''}`}
                onClick={() => setActiveMarketplaceTab(idx)}
              >
                <span className="tab-number">0{idx + 1}</span>
                <span className="tab-name">{view.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'ecommerce') {
    const currentView = ECOMMERCE_PREVIEWS[activeEcommerceTab];

    return (
      <div
        className="mockup-window marketplace-real-mockup"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Browser Top Bar */}
        <div className="mockup-header">
          <div className="mockup-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="mockup-url-bar">
            <ShieldCheck size={12} className="text-emerald" />
            <span>{currentView.url}</span>
          </div>

          <div className="mockup-badge-live">
            <span className="live-dot-pulse"></span>
            LIVE STORE
          </div>
        </div>

        {/* Real Screenshot Display Area with Touch Swiping */}
        <div
          className="marketplace-display-area"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="marketplace-img-wrapper">
            {/* Sliding Image Track */}
            <div
              className="marketplace-slider-track"
              style={{ transform: `translateX(-${activeEcommerceTab * 100}%)` }}
            >
              {ECOMMERCE_PREVIEWS.map((preview, index) => (
                <div key={preview.id} className="marketplace-slide">
                  <img
                    src={preview.image}
                    alt={preview.title}
                    className="marketplace-screenshot"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Floating Info Overlay Pill */}
            <div className="marketplace-floating-info">
              <span className="floating-title">{currentView.title}</span>
              <span className="floating-sub">• {currentView.badge}</span>
            </div>

            {/* Swipe Dot Indicators */}
            <div className="marketplace-dot-indicators">
              {ECOMMERCE_PREVIEWS.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`swipe-dot ${dotIdx === activeEcommerceTab ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveEcommerceTab(dotIdx);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Interactive Screen Selector Strip */}
          <div className="marketplace-nav-strip">
            {ECOMMERCE_PREVIEWS.map((view, idx) => (
              <button
                key={view.id}
                type="button"
                className={`marketplace-nav-tab ${idx === activeEcommerceTab ? 'active' : ''}`}
                onClick={() => setActiveEcommerceTab(idx)}
              >
                <span className="tab-number">0{idx + 1}</span>
                <span className="tab-name">{view.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'pastry') {
    const currentView = PASTRY_PREVIEWS[activePastryTab];

    return (
      <div
        className="mockup-window marketplace-real-mockup"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Browser Top Bar */}
        <div className="mockup-header">
          <div className="mockup-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="mockup-url-bar">
            <ShieldCheck size={12} className="text-emerald" />
            <span>{currentView.url}</span>
          </div>

          <div className="mockup-badge-live">
            <span className="live-dot-pulse"></span>
            LIVE BAKERY
          </div>
        </div>

        {/* Real Screenshot Display Area with Touch Swiping */}
        <div
          className="marketplace-display-area"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="marketplace-img-wrapper">
            {/* Sliding Image Track */}
            <div
              className="marketplace-slider-track"
              style={{ transform: `translateX(-${activePastryTab * 100}%)` }}
            >
              {PASTRY_PREVIEWS.map((preview, index) => (
                <div key={preview.id} className="marketplace-slide">
                  <img
                    src={preview.image}
                    alt={preview.title}
                    className="marketplace-screenshot"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Floating Info Overlay Pill */}
            <div className="marketplace-floating-info">
              <span className="floating-title">{currentView.title}</span>
              <span className="floating-sub">• {currentView.badge}</span>
            </div>

            {/* Swipe Dot Indicators */}
            <div className="marketplace-dot-indicators">
              {PASTRY_PREVIEWS.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`swipe-dot ${dotIdx === activePastryTab ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePastryTab(dotIdx);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Interactive Screen Selector Strip */}
          <div className="marketplace-nav-strip">
            {PASTRY_PREVIEWS.map((view, idx) => (
              <button
                key={view.id}
                type="button"
                className={`marketplace-nav-tab ${idx === activePastryTab ? 'active' : ''}`}
                onClick={() => setActivePastryTab(idx)}
              >
                <span className="tab-number">0{idx + 1}</span>
                <span className="tab-name">{view.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Mobile Mockup
  return (
    <div className="mockup-window mobile-container-wrap">
      <div className="mobile-phone-frame">
        {/* Notch / Speaker */}
        <div className="phone-top-notch">
          <div className="phone-camera"></div>
          <div className="phone-speaker"></div>
        </div>

        {/* Mobile Status Bar */}
        <div className="phone-status-bar">
          <span className="time">9:41</span>
          <div className="status-icons">
            <Wifi size={11} />
            <Zap size={11} />
            <Battery size={13} />
          </div>
        </div>

        {/* Mobile App Screen Content */}
        <div className="phone-screen-content">
          <div className="mobile-header-bar">
            <div>
              <div className="mobile-greeting">Welcome back 👋</div>
              <div className="mobile-app-title">Dashboard Overview</div>
            </div>
            <div className="mobile-avatar"><User size={14} /></div>
          </div>

          {/* Quick Metrics Carousel Card */}
          <div className="mobile-highlight-card">
            <div className="mobile-card-tag">Flutter Native UI</div>
            <div className="mobile-card-title">Realtime Sync Active</div>
            <div className="mobile-sync-status">
              <CheckCircle2 size={12} className="text-emerald" />
              <span>Offline-first SQLite Caching</span>
            </div>
          </div>

          {/* List Feed */}
          <div className="mobile-feed-title">Recent Transactions</div>
          <div className="mobile-feed-list">
            <div className="mobile-feed-item">
              <div className="feed-icon blue">⚡</div>
              <div className="feed-info">
                <div className="feed-title">API Token Refresh</div>
                <div className="feed-time">2 mins ago</div>
              </div>
              <ChevronRight size={14} className="text-muted" />
            </div>
            <div className="mobile-feed-item">
              <div className="feed-icon green">✓</div>
              <div className="feed-info">
                <div className="feed-title">Payload Verification</div>
                <div className="feed-time">15 mins ago</div>
              </div>
              <ChevronRight size={14} className="text-muted" />
            </div>
          </div>

          {/* Bottom App Navigation */}
          <div className="mobile-bottom-nav">
            <div className="nav-tab active">🏠</div>
            <div className="nav-tab">📊</div>
            <div className="nav-tab">⚡</div>
            <div className="nav-tab">⚙️</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMockup;
