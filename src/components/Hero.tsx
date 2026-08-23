import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Mail, Code2, FolderGit2, Wrench, FileText, Terminal, Sparkles, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { ReactIcon, TypeScriptIcon, SupabaseIcon, PaystackIcon, FlutterIcon } from './TechIcons';

export const Hero: React.FC = () => {
  const [mobileTab, setMobileTab] = useState<'stack' | 'terminal'>('stack');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

          {/* Right Column: Desktop Terminal & Mobile Touch Showcase Card */}
          <div className="hero-visual reveal-init delay-100">
            {/* Desktop View: Full Interactive Terminal */}
            <div className="hero-desktop-visual">
              <InteractiveTerminal />
            </div>

            {/* Mobile View: High-Impact Touch Showcase Card */}
            <div className="hero-mobile-visual glass-panel">
              <div className="mobile-visual-header">
                <div className="visual-header-brand">
                  <div className="brand-dot active"></div>
                  <span>Core Production Stack</span>
                </div>

                <div className="mobile-tab-switch">
                  <button
                    type="button"
                    className={`mini-tab-btn ${mobileTab === 'stack' ? 'active' : ''}`}
                    onClick={() => setMobileTab('stack')}
                  >
                    <Sparkles size={11} />
                    <span>Stack</span>
                  </button>
                  <button
                    type="button"
                    className={`mini-tab-btn ${mobileTab === 'terminal' ? 'active' : ''}`}
                    onClick={() => setMobileTab('terminal')}
                  >
                    <Terminal size={11} />
                    <span>Terminal</span>
                  </button>
                </div>
              </div>

              {mobileTab === 'stack' ? (
                <div className="mobile-stack-grid">
                  <div className="mobile-tech-card" onClick={() => scrollToSection('projects')}>
                    <div className="tech-icon-circle"><ReactIcon size={18} /></div>
                    <div className="tech-text-wrap">
                      <span className="tech-main">React 18 & Next.js</span>
                      <span className="tech-sub">SSR Web Apps</span>
                    </div>
                  </div>

                  <div className="mobile-tech-card" onClick={() => scrollToSection('projects')}>
                    <div className="tech-icon-circle"><TypeScriptIcon size={18} /></div>
                    <div className="tech-text-wrap">
                      <span className="tech-main">TypeScript</span>
                      <span className="tech-sub">Strict Type Safety</span>
                    </div>
                  </div>

                  <div className="mobile-tech-card" onClick={() => scrollToSection('projects')}>
                    <div className="tech-icon-circle"><SupabaseIcon size={18} /></div>
                    <div className="tech-text-wrap">
                      <span className="tech-main">Supabase & Postgres</span>
                      <span className="tech-sub">Database & Auth RLS</span>
                    </div>
                  </div>

                  <div className="mobile-tech-card" onClick={() => scrollToSection('projects')}>
                    <div className="tech-icon-circle"><PaystackIcon size={18} /></div>
                    <div className="tech-text-wrap">
                      <span className="tech-main">Paystack Gateway</span>
                      <span className="tech-sub">Fintech & Webhooks</span>
                    </div>
                  </div>

                  <div className="mobile-stack-bottom-banner" onClick={() => scrollToSection('projects')}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FlutterIcon size={16} />
                      <span style={{ fontSize: '0.8rem', color: '#FFFFFF', fontWeight: 600 }}>
                        Flutter & Dart Mobile Apps
                      </span>
                    </div>
                    <ChevronRight size={14} style={{ color: 'var(--color-text-subtle)' }} />
                  </div>
                </div>
              ) : (
                <div className="mobile-terminal-snippet">
                  <div className="snippet-line"><span className="kw">const</span> dev = <span className="str">"Richard Dairo"</span>;</div>
                  <div className="snippet-line"><span className="kw">const</span> status = <span className="str">"Available for contracts"</span>;</div>
                  <div className="snippet-line"><span className="fn">deploy</span>(<span className="str">"production"</span>);</div>
                  <div className="snippet-output">✔ Campus Marketplace: Online</div>
                  <div className="snippet-output">✔ Paystack Webhook: Verified</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
