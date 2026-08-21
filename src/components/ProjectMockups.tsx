import React from 'react';
import { ShoppingBag, Search, ShieldCheck, CheckCircle2, CreditCard, Layers, Tag, Wifi, Battery, Zap, ChevronRight, User } from 'lucide-react';

interface MockupProps {
  type: 'marketplace' | 'ecommerce' | 'mobile';
}

export const ProjectMockup: React.FC<MockupProps> = ({ type }) => {
  if (type === 'marketplace') {
    return (
      <div className="mockup-window marketplace-mockup">
        {/* Browser Top Bar */}
        <div className="mockup-header">
          <div className="mockup-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="mockup-url-bar">
            <ShieldCheck size={12} className="text-emerald" />
            <span>campus-marketplace.live/explore?campus=main-campus</span>
          </div>
          <div className="mockup-badge-live">LIVE SYSTEM</div>
        </div>

        {/* Mockup Content Area */}
        <div className="mockup-body">
          {/* Header Sub-bar */}
          <div className="mockup-nav-row">
            <div className="mockup-brand">
              <div className="mockup-logo-icon">CM</div>
              <span>CampusMarket</span>
            </div>
            <div className="mockup-search-pill">
              <Search size={12} />
              <span>Search engineering books, dorm essentials...</span>
            </div>
            <div className="mockup-cart-indicator">
              <ShoppingBag size={14} />
              <span className="cart-count">2</span>
            </div>
          </div>

          {/* Categories Pill List */}
          <div className="mockup-pill-strip">
            <span className="pill active">All Items</span>
            <span className="pill">Textbooks & Notes</span>
            <span className="pill">Electronics</span>
            <span className="pill">Dorm Life</span>
            <span className="pill">Services</span>
          </div>

          {/* Product Grid Mockup */}
          <div className="mockup-card-grid">
            {/* Card 1 */}
            <div className="mockup-item-card featured-item">
              <div className="mockup-item-img book-gradient">
                <span className="category-tag">Textbooks</span>
                <span className="vendor-tag">Verified Student Vendor</span>
              </div>
              <div className="mockup-item-details">
                <div className="mockup-item-title">Engineering Mechanics (8th Ed)</div>
                <div className="mockup-item-row">
                  <span className="price">₦14,500</span>
                  <span className="condition">Like New</span>
                </div>
                <div className="mockup-item-footer">
                  <span className="campus-zone">📍 East Hall Campus</span>
                  <span className="status-avail">In Stock</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="mockup-item-card">
              <div className="mockup-item-img tech-gradient">
                <span className="category-tag">Electronics</span>
              </div>
              <div className="mockup-item-details">
                <div className="mockup-item-title">Wireless ANC Headphones</div>
                <div className="mockup-item-row">
                  <span className="price">₦38,000</span>
                  <span className="condition">Open Box</span>
                </div>
                <div className="mockup-item-footer">
                  <span className="campus-zone">📍 Quad Center</span>
                  <span className="status-avail">1 left</span>
                </div>
              </div>
            </div>

            {/* Card 3 (Vendor Dashboard Pill) */}
            <div className="mockup-item-card mini-dash">
              <div className="dash-header">
                <Layers size={13} className="text-yellow" />
                <span>Vendor Multi-Split Escrow</span>
              </div>
              <div className="dash-stat-row">
                <div className="dash-stat">
                  <span className="stat-label">Vendor Payout</span>
                  <span className="stat-val">95%</span>
                </div>
                <div className="dash-stat">
                  <span className="stat-label">Platform Fee</span>
                  <span className="stat-val">5%</span>
                </div>
              </div>
              <div className="dash-badge">
                <CreditCard size={12} />
                <span>Paystack Instant Settlement</span>
              </div>
            </div>
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
