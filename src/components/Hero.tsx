import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Mail, Code2, Sparkles, Terminal, CheckCircle2, ShieldCheck, Play } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { ReactIcon, TypeScriptIcon, SupabaseIcon, PaystackIcon } from './TechIcons';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stack' | 'status'>('stack');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      <div className="container-wide">
        <div className="hero-grid">
          {/* Left Column: Personal Brand & Intro */}
          <div className="hero-content reveal-init">
            {/* Status & Role Pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
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

            {/* Paragraph Subtitle */}
            <p className="hero-description">
              {PERSONAL_INFO.heroParagraph}
            </p>

            {/* Call to Actions */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" id="hero-cta-projects">
                <span>Explore Work</span>
                <ArrowRight size={15} />
              </a>

              <a href="#contact" className="btn btn-secondary" id="hero-cta-contact">
                <MessageSquare size={15} />
                <span>Let's Talk</span>
              </a>

              <button
                type="button"
                className="btn btn-ghost"
                onClick={handleCopyEmail}
                style={{ fontSize: '0.8125rem' }}
                title="Copy Email Address"
              >
                <Mail size={14} />
                <span>{copiedEmail ? 'Email Copied!' : PERSONAL_INFO.email}</span>
              </button>
            </div>

            {/* Developer Proof Points */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#E2E8F0' }}>
                <CheckCircle2 size={15} style={{ color: '#FFFFFF' }} />
                <span>Paystack Payments</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#E2E8F0' }}>
                <ShieldCheck size={15} style={{ color: '#FFFFFF' }} />
                <span>Postgres & Supabase RLS</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#E2E8F0' }}>
                <Sparkles size={15} style={{ color: '#FFFFFF' }} />
                <span>Full-Stack & Mobile</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="hero-socials">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <TwitterIcon size={14} />
                <span>Twitter</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Developer Workspace Card */}
          <div className="hero-visual reveal-init delay-100">
            <div className="glass-panel" style={{ padding: 0, borderRadius: 'var(--radius-xl)' }}>
              {/* Header Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.25rem', background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid var(--glass-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.25)' }}></div>
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.25)' }}></div>
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.25)' }}></div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-subtle)', marginLeft: '0.4rem' }}>
                    richard-dairo.dev
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    className={`skill-tab-button ${activeTab === 'stack' ? 'active' : ''}`}
                    style={{ padding: '0.3rem 0.75rem', fontSize: '0.725rem' }}
                    onClick={() => setActiveTab('stack')}
                  >
                    <Sparkles size={12} />
                    <span>Core Stack</span>
                  </button>
                  <button
                    className={`skill-tab-button ${activeTab === 'status' ? 'active' : ''}`}
                    style={{ padding: '0.3rem 0.75rem', fontSize: '0.725rem' }}
                    onClick={() => setActiveTab('status')}
                  >
                    <Terminal size={12} />
                    <span>System Status</span>
                  </button>
                </div>
              </div>

              {/* Card Body Content */}
              <div style={{ padding: '1.5rem' }}>
                {activeTab === 'stack' ? (
                  <div>
                    <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-subtle)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                      Primary Production Toolkit
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#FFFFFF', color: '#0C0F17', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <ReactIcon size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>React & Next.js</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Frontend Framework</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#FFFFFF', color: '#0C0F17', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <TypeScriptIcon size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>TypeScript</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Strict Type Safety</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#FFFFFF', color: '#0C0F17', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <SupabaseIcon size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>Supabase & Postgres</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Database & RLS</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: '#FFFFFF', color: '#0C0F17', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <PaystackIcon size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>Paystack API</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Fintech Webhooks</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      <span style={{ fontSize: '0.78rem', color: '#E2E8F0' }}>Build Strategy: Multi-Tenant Marketplaces & E-Commerce</span>
                      <Play size={12} style={{ color: '#FFFFFF' }} />
                    </div>
                  </div>
                ) : (
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', lineHeight: '1.7' }}>
                    <div style={{ color: 'var(--color-text-subtle)', marginBottom: '0.5rem' }}>// Real-time System Verification</div>
                    <div style={{ color: '#FFFFFF' }}>✔ Postgres Database RLS: Connected</div>
                    <div style={{ color: '#FFFFFF' }}>✔ Paystack Webhook Listener: Active</div>
                    <div style={{ color: '#FFFFFF' }}>✔ TypeScript Strict Mode: 0 Errors</div>
                    <div style={{ color: '#FFFFFF' }}>✔ Production Vercel Edge: Healthy</div>
                    <div style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem' }}>Ready for new freelance contracts & product builds.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
