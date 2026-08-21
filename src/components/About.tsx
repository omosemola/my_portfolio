import React from 'react';
import { UserCheck, CheckCircle, Wrench } from 'lucide-react';
import { STATS } from '../data/portfolioData';
import { 
  ReactIcon, 
  TypeScriptIcon, 
  TailwindIcon, 
  FlutterIcon, 
  NodeIcon, 
  SupabaseIcon, 
  PaystackIcon, 
  GitIcon 
} from './TechIcons';

const CORE_TOOLS = [
  { name: 'Next.js & React 18', category: 'Frontend', note: 'SSR & component architecture', icon: <ReactIcon size={20} /> },
  { name: 'TypeScript', category: 'Language', note: 'Strict end-to-end type safety', icon: <TypeScriptIcon size={20} /> },
  { name: 'Supabase & Postgres', category: 'Database & Auth', note: 'Row-level security & functions', icon: <SupabaseIcon size={20} /> },
  { name: 'Paystack Gateway', category: 'Fintech', note: 'Split payments & webhooks', icon: <PaystackIcon size={20} /> },
  { name: 'Node.js & Express', category: 'Backend API', note: 'RESTful API microservices', icon: <NodeIcon size={20} /> },
  { name: 'Flutter & Dart', category: 'Mobile App', note: 'iOS & Android cross-platform', icon: <FlutterIcon size={20} /> },
  { name: 'Tailwind CSS', category: 'Styling', note: 'Responsive design systems', icon: <TailwindIcon size={20} /> },
  { name: 'Git & GitHub Actions', category: 'DevOps', note: 'Automated CI/CD deployments', icon: <GitIcon size={20} /> },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing" aria-label="About & Tech Stack">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header reveal-init">
          <div className="section-eyebrow">
            <UserCheck size={12} />
            <span>ABOUT & CORE TECH STACK</span>
          </div>
          <h2 className="section-title">Engineering Problem Solver</h2>
          <p className="section-desc">
            Full-stack developer focused on building production web applications, multi-vendor marketplaces, and mobile apps with clean interfaces and reliable architecture.
          </p>
        </div>

        {/* Top 2-Column: Bio & Stats */}
        <div className="about-grid" style={{ marginBottom: '3.5rem' }}>
          {/* Bio Narrative */}
          <div className="about-narrative reveal-init delay-100">
            <p className="about-text">
              I specialize in turning complex product goals into fast, reliable software. From database schemas and payment gateway integrations down to responsive interface components, I handle the full development lifecycle.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem', marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#FFFFFF' }}>
                <CheckCircle size={15} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                <span>Multi-Vendor Marketplaces</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#FFFFFF' }}>
                <CheckCircle size={15} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                <span>E-Commerce Checkout Systems</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#FFFFFF' }}>
                <CheckCircle size={15} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                <span>Paystack Payment Webhooks</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#FFFFFF' }}>
                <CheckCircle size={15} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                <span>Postgres & Supabase RLS</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid reveal-init delay-200">
            {STATS.map((stat, idx) => (
              <div key={idx} className="stat-card" style={{ padding: '1.35rem 1.25rem' }}>
                <div className="stat-value" style={{ fontSize: '2rem' }}>{stat.value}</div>
                <div className="stat-title" style={{ fontSize: '0.9rem' }}>{stat.label}</div>
                <div className="stat-desc" style={{ fontSize: '0.78rem' }}>{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Core Tech Stack Strip */}
        <div className="glass-panel reveal-init delay-300" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Wrench size={16} style={{ color: '#FFFFFF' }} />
              <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF' }}>Production Tech Stack</h3>
            </div>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-subtle)' }}>
              8 Core Production Tools
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {CORE_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.85rem 1rem',
                  background: 'rgba(255, 255, 255, 0.035)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all 0.2s var(--ease-smooth)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', background: '#FFFFFF', color: '#0C0F17', borderRadius: '8px', flexShrink: 0 }}>
                  {tool.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>{tool.name}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{tool.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
