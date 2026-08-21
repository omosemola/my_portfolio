import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand Logo */}
          <a href="#hero" className="nav-brand" aria-label="Richard Dairo Portfolio Home">
            <div className="brand-badge">RD</div>
            <div className="brand-text">
              <span className="brand-name">{PERSONAL_INFO.name}</span>
              <span className="brand-role">FULL-STACK</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop-links" aria-label="Main Navigation">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action & Mobile Toggle */}
          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary" style={{ minHeight: '40px', padding: '0.5rem 1.1rem', fontSize: '0.875rem' }}>
              <span>Let's Talk</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="nav-brand">
            <div className="brand-badge">RD</div>
            <div className="brand-text">
              <span className="brand-name">{PERSONAL_INFO.name}</span>
              <span className="brand-role">FULL-STACK</span>
            </div>
          </div>
          <button
            className="modal-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mobile-drawer-links">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href="#contact"
            className="btn btn-accent"
            style={{ width: '100%' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
            🟢 {PERSONAL_INFO.status}
          </div>
        </div>
      </div>
    </>
  );
};
