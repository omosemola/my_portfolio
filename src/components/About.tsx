import React from 'react';
import { UserCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing" aria-label="About Richard Dairo">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <UserCheck size={13} />
            <span>ABOUT ME</span>
          </div>
          <h2 className="section-title">More than just code.</h2>
          <p className="section-desc">
            I don't just write syntax; I turn complex concepts into intuitive, reliable, and scalable software products that people enjoy using.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Narrative */}
          <div className="about-narrative">
            <p className="about-text">
              I am a <strong>Full-Stack Developer</strong> driven by a passion for solving real-world problems through pragmatic software engineering. My work spans from conceptual user flows and interface architecture down to relational database modeling and secure payment gateway integrations.
            </p>
            <p className="about-text">
              Over the course of building production web and mobile software, I have developed deep hands-on expertise in:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
                <CheckCircle size={15} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                <span>Marketplace Platforms</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
                <CheckCircle size={15} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                <span>E-Commerce Stores</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
                <CheckCircle size={15} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                <span>Payment Gateways (Paystack)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
                <CheckCircle size={15} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                <span>Postgres & Supabase RLS</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
                <CheckCircle size={15} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                <span>Mobile Apps (Flutter)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
                <CheckCircle size={15} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                <span>Automated CI/CD Deployments</span>
              </div>
            </div>

            <div>
              <a href="#projects" className="btn btn-secondary">
                <span>Explore Featured Projects</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Stats & Highlights Grid */}
          <div className="stats-grid">
            {STATS.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-title">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
