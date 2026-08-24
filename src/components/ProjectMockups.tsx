import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, ShieldCheck, CheckCircle2, CreditCard, Tag, Wifi, Battery, Zap, ChevronRight, User } from 'lucide-react';

interface MockupProps {
  type: 'marketplace' | 'ecommerce' | 'mobile';
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

export const ProjectMockup: React.FC<MockupProps> = ({ type }) => {
  const [activeMarketplaceTab, setActiveMarketplaceTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Auto-swipe every 4 seconds unless paused by user interaction
  useEffect(() => {
    if (type !== 'marketplace' || isPaused) return;

    const interval = setInterval(() => {
      setActiveMarketplaceTab((prev) => (prev + 1) % MARKETPLACE_PREVIEWS.length);
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

    if (diff > threshold) {
      // Swiped Left -> Next Image
      setActiveMarketplaceTab((prev) => (prev + 1) % MARKETPLACE_PREVIEWS.length);
    } else if (diff < -threshold) {
      // Swiped Right -> Previous Image
      setActiveMarketplaceTab((prev) => (prev - 1 + MARKETPLACE_PREVIEWS.length) % MARKETPLACE_PREVIEWS.length);
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
    return (
      <div className="mockup-window ecommerce-mockup">
        {/* Browser Top Bar */}
        <div className="mockup-header">
          <div className="mockup-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="mockup-url-bar">
            <ShieldCheck size={12} className="text-emerald" />
            <span>shop.digitalstorefront.io/cart</span>
          </div>
          <div className="mockup-badge-live">CART ENGINE</div>
        </div>

        {/* E-commerce Mockup Content */}
        <div className="mockup-body ecom-body">
          <div className="ecom-left">
            <div className="ecom-section-header">
              <span>Featured Catalog</span>
              <span className="ecom-filter-badge"><Tag size={10} /> Active Filter: Essentials</span>
            </div>
            <div className="ecom-catalog-row">
              <div className="ecom-prod-card">
                <div className="prod-thumb prod-1"></div>
                <div className="prod-info">
                  <span className="prod-name">Minimal Desk Mat Pro</span>
                  <span className="prod-price">₦18,500</span>
                </div>
              </div>
              <div className="ecom-prod-card">
                <div className="prod-thumb prod-2"></div>
                <div className="prod-info">
                  <span className="prod-name">Alloy Laptop Riser</span>
                  <span className="prod-price">₦26,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Slide-out Cart Drawer Preview */}
          <div className="ecom-cart-drawer">
            <div className="cart-drawer-header">
              <div className="cart-title">
                <ShoppingBag size={14} className="text-yellow" />
                <span>Your Cart (2 items)</span>
              </div>
            </div>

            <div className="cart-items-list">
              <div className="cart-mini-item">
                <div className="cart-thumb"></div>
                <div className="cart-desc">
                  <div className="c-name">Minimal Desk Mat Pro</div>
                  <div className="c-sub">Qty: 1 • Slate Gray</div>
                </div>
                <div className="c-price">₦18,500</div>
              </div>
            </div>

            <div className="cart-summary-box">
              <div className="summary-line">
                <span>Subtotal</span>
                <span>₦18,500</span>
              </div>
              <div className="summary-line">
                <span>Shipping</span>
                <span className="text-emerald">Free</span>
              </div>
              <div className="summary-line total">
                <span>Total</span>
                <span className="text-yellow font-bold">₦18,500</span>
              </div>
              <div className="checkout-btn-preview">
                <CreditCard size={13} />
                <span>Pay via Paystack</span>
              </div>
            </div>
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
