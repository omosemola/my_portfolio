import React from 'react';
import { ArrowRight, MessageSquare, Mail, Code2, FolderGit2, Wrench, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';
import { TechMarquee } from './TechMarquee';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* Left Column: Personal Brand & Intro */}
          <div className="hero-content reveal-init">
            {/* Eyebrow Badge */}
            <div className="hero-badge-row">
              <div className="section-eyebrow" style={{ marginBottom: 0 }}>
                <Code2 size={12} />
                <span>{PERSONAL_INFO.eyebrow}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              {PERSONAL_INFO.heroHeading}
              <span className="hero-highlight">{PERSONAL_INFO.heroHighlight}</span>
            </h1>

            {/* Supporting Bio */}
            <p className="hero-description">
              {PERSONAL_INFO.heroParagraph}
            </p>

            {/* Call to Action Buttons */}
            <div className="hero-actions">
              <a
                href="#projects"
                className="btn btn-primary"
                id="hero-cta-projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                <span>View Featured Work</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#contact"
                className="btn btn-secondary"
                id="hero-cta-contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                <MessageSquare size={15} />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Quick Navigation Chips */}
            <div className="hero-mobile-nav-chips">
              <span className="quick-nav-label">Quick Jump:</span>
              <div className="quick-nav-pills">
                <button
                  type="button"
                  className="quick-chip"
                  onClick={() => scrollToSection('projects')}
                >
                  <FolderGit2 size={13} />
                  <span>Projects</span>
                </button>

                <button
                  type="button"
                  className="quick-chip"
                  onClick={() => scrollToSection('about')}
                >
                  <Wrench size={13} />
                  <span>Tech Stack</span>
                </button>

                <a
                  href="/resume.pdf"
                  download="Richard_Dairo_Resume.pdf"
                  className="quick-chip"
                >
                  <FileText size={13} />
                  <span>Resume (PDF)</span>
                </a>

                <button
                  type="button"
                  className="quick-chip"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail size={13} />
                  <span>Contact</span>
                </button>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="hero-socials">
              <span className="socials-lead-text">Connect:</span>
              
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

          {/* Right Column: Interactive Terminal (Desktop & Mobile Responsive) */}
          <div className="hero-visual reveal-init delay-100">
            <InteractiveTerminal />
          </div>
        </div>

        {/* Horizontal Moving Tech Stack Display Board (Logos Only) */}
        <div className="hero-marquee-wrapper reveal-init delay-200">
          <TechMarquee label="CORE PRODUCTION TECH STACK" />
        </div>
      </div>
    </section>
  );
};
