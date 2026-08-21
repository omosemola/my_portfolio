import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About & Stack' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="navbar-container" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="nav-brand"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
          >
            <div className="brand-badge">RD</div>
            <div className="brand-text">
              <span className="brand-name">Richard Dairo</span>
              <span className="brand-role">FULL-STACK DEV</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="nav-desktop-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hire Me CTA */}
          <div className="nav-actions">
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ minHeight: '40px', padding: '0.5rem 1.15rem', fontSize: '0.8125rem' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              <MessageSquare size={13} />
              <span>Let's Talk</span>
            </a>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-header">
          <div className="nav-brand">
            <div className="brand-badge">RD</div>
            <div className="brand-text">
              <span className="brand-name">Richard Dairo</span>
              <span className="brand-role">FULL-STACK DEV</span>
            </div>
          </div>

          <button
            type="button"
            className="btn-ghost"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
            style={{ padding: '0.4rem' }}
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-drawer-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </a>
          ))}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="status-badge" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>
            <span className="status-dot"></span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          <a
            href="#contact"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
          >
            <MessageSquare size={15} />
            <span>Start a Project</span>
          </a>
        </div>
      </div>
    </>
  );
};
