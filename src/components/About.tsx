import React from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Database, 
  GitBranch, 
  BarChart3 
} from 'lucide-react';
import { STATS } from '../data/portfolioData';

const WORKFLOW_PIPELINE = [
  { step: '01', title: 'Architecture & Schema', desc: 'Database ERDs, API contract specs, and UI wireframes.' },
  { step: '02', title: 'Software Execution', desc: 'Next.js components, typed API endpoints, and Supabase RLS.' },
  { step: '03', title: 'Fintech & Security', desc: 'Paystack webhook verification and escrow balance safeguards.' },
  { step: '04', title: 'Automated CI/CD', desc: 'GitHub Actions test pipelines and instant edge deployment.' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing" aria-label="Engineering Background & Architecture">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header reveal-init">
          <div className="section-eyebrow">
            <UserCheck size={12} />
            <span>ENGINEERING PHILOSOPHY & ARCHITECTURE</span>
          </div>
          <h2 className="section-title">Built for Production, Scaled for Growth</h2>
          <p className="section-desc">
            Software developer blending clean frontend interfaces with resilient backend architecture and secure fintech payment pipelines.
          </p>
        </div>

        {/* Bento Grid: Philosophy + Impact Metrics + Delivery Pipeline */}
        <div className="about-bento-grid reveal-init delay-100">
          {/* Card 1: Core Philosophy & Execution (Large Card) */}
          <div className="glass-panel about-philosophy-card">
            <div className="card-header-badge-row">
              <div className="status-badge" style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}>
                <span className="status-dot"></span>
                <span>Software Engineering Mindset</span>
              </div>
              <span className="code-pill-tag">Production-Ready</span>
            </div>

            <h3 className="about-card-heading">Engineering Digital Products That Deliver Real Business Value</h3>

            <p className="about-narrative-text">
              I specialize in taking complex product roadmaps and translating them into robust, performant software. From designing normalized PostgreSQL schemas and setting up secure Paystack webhook split-payments down to building responsive, accessible client interfaces in React and Flutter, I engineer with longevity and user delight in mind.
            </p>

            {/* 4 Core Pillars */}
            <div className="engineering-pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon"><Zap size={16} /></div>
                <div>
                  <div className="pillar-title">Web & Mobile Engineering</div>
                  <div className="pillar-desc">Next.js 18, React SSR, TypeScript & modular component architecture.</div>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon"><ShieldCheck size={16} /></div>
                <div>
                  <div className="pillar-title">Fintech & Security</div>
                  <div className="pillar-desc">Paystack webhook listeners, Supabase RLS & cryptographic hash verification.</div>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon"><Smartphone size={16} /></div>
                <div>
                  <div className="pillar-title">Mobile Engineering</div>
                  <div className="pillar-desc">Cross-platform Flutter & Dart apps with offline SQLite caching.</div>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon"><Database size={16} /></div>
                <div>
                  <div className="pillar-title">Relational Databases</div>
                  <div className="pillar-desc">Postgres indexing, transactional integrity & automated Supabase migrations.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 & 3 Right Column Wrapper */}
          <div className="about-side-cards-col">
            {/* Impact Metrics (Stats Grid) */}
            <div className="glass-panel about-metrics-card">
              <div className="metrics-card-header">
                <BarChart3 size={16} />
                <span>Verified Impact Metrics</span>
              </div>

              <div className="metrics-2x2-grid">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="metric-box">
                    <div className="metric-number">{stat.value}</div>
                    <div className="metric-label">{stat.label}</div>
                    <div className="metric-sub">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Workflow Pipeline */}
            <div className="glass-panel about-pipeline-card">
              <div className="pipeline-card-header">
                <GitBranch size={16} />
                <span>4-Stage Delivery Pipeline</span>
              </div>

              <div className="pipeline-steps-list">
                {WORKFLOW_PIPELINE.map((item, idx) => (
                  <div key={idx} className="pipeline-step-item">
                    <div className="pipeline-step-num">{item.step}</div>
                    <div className="pipeline-step-info">
                      <div className="pipeline-step-title">{item.title}</div>
                      <div className="pipeline-step-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
