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
          <div className="hero-content reveal-init">
            {/* Status & Eyebrow Badge Row */}
            <div className="hero-badge-row">
              <div className="status-badge">
                <span className="status-dot"></span>
                <span>{PERSONAL_INFO.status}</span>
              </div>

              <div className="section-eyebrow" style={{ marginBottom: 0 }}>
                <Code2 size={12} />
                <span>{PERSONAL_INFO.eyebrow}</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              {PERSONAL_INFO.heroHeading}
              <span className="hero-highlight">{PERSONAL_INFO.heroHighlight}</span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="hero-description">
              {PERSONAL_INFO.heroParagraph}
            </p>

            {/* Call to Actions (2-column on mobile) */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" id="hero-cta-projects">
                <span>View Work</span>
                <ArrowRight size={14} />
              </a>

              <a href="#contact" className="btn btn-secondary" id="hero-cta-contact">
                <MessageSquare size={14} />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Links Pill Bar */}
            <div className="hero-socials">
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

          {/* Right Column: Interactive Code Terminal */}
          <div className="hero-visual reveal-init delay-100">
            <InteractiveTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};
