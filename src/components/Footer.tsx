import React from 'react';
import { ArrowUp, Mail, FileText, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrap" aria-label="Site Footer">
      <div className="container-wide">
        {/* Main Footer Bento Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Status Identity */}
          <div className="footer-brand-col">
            <a
              href="#hero"
              className="nav-brand"
              style={{ marginBottom: '1rem', display: 'inline-flex' }}
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <div className="brand-badge brand-badge-img">
                <img src="/logo.png" alt={PERSONAL_INFO.name} className="brand-logo-img" />
              </div>
              <div className="brand-text">
                <span className="brand-name">{PERSONAL_INFO.name}</span>
                <span className="brand-role">SOFTWARE DEVELOPER</span>
              </div>
            </a>

            <p className="footer-brand-bio">
              Software Developer & Digital Product Builder. Designing clean interfaces, reliable databases, and scalable payment pipelines for modern web & mobile products.
            </p>

            <div className="status-badge" style={{ marginTop: '1.25rem', width: 'fit-content' }}>
              <span className="status-dot"></span>
              <span>{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="#hero"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('hero');
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  Engineering & Stack
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Work & Downloads */}
          <div>
            <h4 className="footer-col-title">Featured Work</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="#projects"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  <span>Campus Marketplace</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  <span>E-Commerce Platform</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="footer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('projects');
                  }}
                >
                  <span>Flutter Mobile App</span>
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  download="Richard_Dairo_Resume.pdf"
                  className="footer-link-item"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-text-main)', fontWeight: 600 }}
                >
                  <FileText size={13} />
                  <span>Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Direct Connect */}
          <div>
            <h4 className="footer-col-title">Connect</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-item"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-item"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-item"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <TwitterIcon size={14} />
                  <span>Twitter / X</span>
                  <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="footer-link-item"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Mail size={14} />
                  <span>Direct Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span>© {new Date().getFullYear()} Richard Dairo. All rights reserved.</span>
            <span style={{ color: 'var(--color-text-subtle)' }}>•</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
              Built with React, TypeScript & Supabase
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
