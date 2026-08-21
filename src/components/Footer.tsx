import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap" aria-label="Site Footer">
      <div className="container-wide">
        <div className="footer-grid">
          {/* Brand & Bio */}
          <div>
            <div className="nav-brand" style={{ marginBottom: '0.75rem' }}>
              <div className="brand-badge">RD</div>
              <div className="brand-text">
                <span className="brand-name">{PERSONAL_INFO.name}</span>
                <span className="brand-role">FULL-STACK</span>
              </div>
            </div>
            <p className="footer-brand-bio">
              {PERSONAL_INFO.heroSubtitle}. Building clean interfaces, reliable functionality, and scalable digital products.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#about" className="footer-link-item">About Me</a></li>
              <li><a href="#skills" className="footer-link-item">Tech Stack & Skills</a></li>
              <li><a href="#projects" className="footer-link-item">Featured Projects</a></li>
              <li><a href="#services" className="footer-link-item">Services & Capabilities</a></li>
              <li><a href="#experience" className="footer-link-item">Career Journey</a></li>
              <li><a href="#process" className="footer-link-item">Development Process</a></li>
              <li><a href="#contact" className="footer-link-item">Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Social Links */}
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
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="footer-link-item"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Mail size={14} />
                  <span>Email</span>
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
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          <div>
            © 2026 Richard Dairo. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)', fontFamily: 'var(--font-mono)' }}>
              Built with React, TypeScript & Supabase Architecture
            </span>

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
      </div>
    </footer>
  );
};
