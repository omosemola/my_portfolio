import React from 'react';
import { ArrowRight, MessageSquare, Mail, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      <div className="container-wide">
        <div className="hero-grid">
          {/* Left Column: Personal Brand & Intro */}
          <div className="hero-content">
            {/* Status Pill */}
            <div className="status-badge" style={{ marginBottom: '1.25rem' }}>
              <span className="status-dot"></span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Eyebrow */}
            <div className="section-eyebrow">
              <Code2 size={13} />
              <span>{PERSONAL_INFO.eyebrow}</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              {PERSONAL_INFO.heroHeading}
              <span className="hero-highlight">{PERSONAL_INFO.heroHighlight}</span>
            </h1>

            {/* Supporting Subtitle & Paragraph */}
            <p className="hero-description">
              {PERSONAL_INFO.heroParagraph}
            </p>

            {/* Call to Actions */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-accent" id="hero-cta-projects">
                <span>View My Work</span>
                <ArrowRight size={16} />
              </a>

              <a href="#contact" className="btn btn-secondary" id="hero-cta-contact">
                <MessageSquare size={16} />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-subtle)', textTransform: 'uppercase' }}>
                Connect:
              </span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="social-link"
                aria-label="Send Direct Email"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter Profile"
              >
                <TwitterIcon size={14} />
                <span>Twitter</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Visual Showcase */}
          <div className="hero-visual">
            <InteractiveTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};
