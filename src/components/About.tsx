import React from 'react';
import { UserCheck, CheckCircle, Wrench, Code2 } from 'lucide-react';
import { STATS } from '../data/portfolioData';
import { 
  ReactIcon, 
  TypeScriptIcon, 
  TailwindIcon, 
  FlutterIcon, 
  NodeIcon, 
  SupabaseIcon, 
  PaystackIcon, 
  GitIcon,
  DockerIcon,
  PostgresIcon
} from './TechIcons';

const CORE_TOOLS = [
  { name: 'React 18 & Next.js', category: 'Frontend', note: 'App router, SSR & performance', icon: <ReactIcon size={20} /> },
  { name: 'TypeScript', category: 'Language', note: 'End-to-end strict type safety', icon: <TypeScriptIcon size={20} /> },
  { name: 'Supabase & Postgres', category: 'Database & Auth', note: 'Row-level security & functions', icon: <SupabaseIcon size={20} /> },
  { name: 'Paystack Gateway', category: 'Fintech', note: 'Split payments & webhook events', icon: <PaystackIcon size={20} /> },
  { name: 'Node.js & Express', category: 'Backend API', note: 'Scalable RESTful microservices', icon: <NodeIcon size={20} /> },
  { name: 'Flutter & Dart', category: 'Mobile App', note: 'Cross-platform iOS & Android', icon: <FlutterIcon size={20} /> },
  { name: 'Tailwind CSS', category: 'Design System', note: 'Modern responsive glass UI', icon: <TailwindIcon size={20} /> },
  { name: 'PostgreSQL Relational DB', category: 'Database', note: 'Complex queries & indexing', icon: <PostgresIcon size={20} /> },
  { name: 'Git & GitHub Actions', category: 'DevOps', note: 'Automated CI/CD workflows', icon: <GitIcon size={20} /> },
  { name: 'Docker Containers', category: 'DevOps', note: 'Reproducible environments', icon: <DockerIcon size={20} /> },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing" aria-label="About & Tech Stack">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header reveal-init">
          <div className="section-eyebrow">
            <UserCheck size={12} />
            <span>ENGINEERING BACKGROUND</span>
          </div>
          <h2 className="section-title">Built for Production & Scale</h2>
          <p className="section-desc">
            Full-stack developer focused on creating reliable digital products, high-converting marketplace platforms, and seamless cross-platform mobile apps.
          </p>
        </div>

        {/* Bento Grid: Bio Narrative & Stats */}
        <div className="about-grid" style={{ marginBottom: '2.5rem' }}>
          {/* Left: Bio Narrative */}
          <div className="glass-panel reveal-init delay-100" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <Code2 size={16} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 700 }}>Engineering Philosophy</h3>
            </div>

            <p className="about-text">
              I specialize in taking complex product requirements and turning them into clean, high-performance software. From architecting robust database schemas and Paystack payment pipelines down to pixel-perfect, accessible user interfaces, I handle the full product development lifecycle.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.875rem', color: '#E2E8F0' }}>
                <CheckCircle size={15} style={{ color: '#22C55E', flexShrink: 0 }} />
                <span>Multi-Vendor Marketplaces</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.875rem', color: '#E2E8F0' }}>
                <CheckCircle size={15} style={{ color: '#22C55E', flexShrink: 0 }} />
                <span>Paystack Webhook Split Pay</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.875rem', color: '#E2E8F0' }}>
                <CheckCircle size={15} style={{ color: '#22C55E', flexShrink: 0 }} />
                <span>Supabase Row-Level Security</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.875rem', color: '#E2E8F0' }}>
                <CheckCircle size={15} style={{ color: '#22C55E', flexShrink: 0 }} />
                <span>Flutter iOS & Android Apps</span>
              </div>
            </div>
          </div>

          {/* Right: Key Stats */}
          <div className="stats-grid reveal-init delay-200">
            {STATS.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-title">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bento: Core Production Tech Stack */}
        <div className="glass-panel reveal-init delay-300" style={{ padding: '2.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                <Wrench size={16} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 700 }}>Production Technology Stack</h3>
            </div>

            <div className="status-badge" style={{ padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}>
              <span>10 Core Production Tools</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {CORE_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.9rem 1.1rem',
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all 0.25s var(--ease-smooth)',
                  cursor: 'default'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: '#FFFFFF', color: '#090B11', borderRadius: '10px', flexShrink: 0, boxShadow: '0 4px 12px rgba(255, 255, 255, 0.15)' }}>
                  {tool.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.925rem', fontWeight: 700, color: '#FFFFFF' }}>{tool.name}</span>
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
