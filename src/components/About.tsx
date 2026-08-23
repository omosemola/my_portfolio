import React, { useState } from 'react';
import { 
  UserCheck, 
  Wrench, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Database, 
  GitBranch, 
  Sparkles 
} from 'lucide-react';
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

interface ToolItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'fintech' | 'devops';
  categoryLabel: string;
  badge: 'Expert' | 'Production-Ready' | 'Advanced';
  note: string;
  icon: React.ReactNode;
}

const TOOLS_DATA: ToolItem[] = [
  { 
    id: 'nextjs', 
    name: 'React 18 & Next.js', 
    category: 'frontend', 
    categoryLabel: 'Frontend', 
    badge: 'Expert', 
    note: 'App Router, Server Components & SSR performance', 
    icon: <ReactIcon size={22} /> 
  },
  { 
    id: 'typescript', 
    name: 'TypeScript', 
    category: 'frontend', 
    categoryLabel: 'Language', 
    badge: 'Expert', 
    note: 'Strict end-to-end type safety & modular interfaces', 
    icon: <TypeScriptIcon size={22} /> 
  },
  { 
    id: 'supabase', 
    name: 'Supabase & Postgres', 
    category: 'backend', 
    categoryLabel: 'Database & Auth', 
    badge: 'Expert', 
    note: 'Row-Level Security (RLS) & real-time triggers', 
    icon: <SupabaseIcon size={22} /> 
  },
  { 
    id: 'paystack', 
    name: 'Paystack Gateway', 
    category: 'fintech', 
    categoryLabel: 'Fintech', 
    badge: 'Expert', 
    note: 'Split payments, verified webhooks & automated settlement', 
    icon: <PaystackIcon size={22} /> 
  },
  { 
    id: 'nodejs', 
    name: 'Node.js & Express', 
    category: 'backend', 
    categoryLabel: 'Backend API', 
    badge: 'Advanced', 
    note: 'High-throughput RESTful APIs & middleware security', 
    icon: <NodeIcon size={22} /> 
  },
  { 
    id: 'flutter', 
    name: 'Flutter & Dart', 
    category: 'frontend', 
    categoryLabel: 'Mobile App', 
    badge: 'Production-Ready', 
    note: 'Cross-platform iOS & Android with offline SQLite caching', 
    icon: <FlutterIcon size={22} /> 
  },
  { 
    id: 'tailwind', 
    name: 'Tailwind CSS', 
    category: 'frontend', 
    categoryLabel: 'Styling', 
    badge: 'Expert', 
    note: 'Custom design systems, responsive glassmorphism & tokens', 
    icon: <TailwindIcon size={22} /> 
  },
  { 
    id: 'postgres', 
    name: 'PostgreSQL Relational DB', 
    category: 'backend', 
    categoryLabel: 'Database', 
    badge: 'Advanced', 
    note: 'Schema normalization, indexing & transactional integrity', 
    icon: <PostgresIcon size={22} /> 
  },
  { 
    id: 'docker', 
    name: 'Docker Containers', 
    category: 'devops', 
    categoryLabel: 'DevOps', 
    badge: 'Production-Ready', 
    note: 'Multi-stage Dockerfiles & containerized environments', 
    icon: <DockerIcon size={22} /> 
  },
  { 
    id: 'git', 
    name: 'Git & CI/CD Pipelines', 
    category: 'devops', 
    categoryLabel: 'DevOps', 
    badge: 'Expert', 
    note: 'GitHub Actions, automated test suites & Vercel edge deployment', 
    icon: <GitIcon size={22} /> 
  },
];

const WORKFLOW_PIPELINE = [
  { step: '01', title: 'Architecture & Schema', desc: 'Database ERDs, API contract specs, and UI wireframes.' },
  { step: '02', title: 'Software Execution', desc: 'Next.js components, typed API endpoints, and Supabase RLS.' },
  { step: '03', title: 'Fintech & Security', desc: 'Paystack webhook verification and escrow balance safeguards.' },
  { step: '04', title: 'Automated CI/CD', desc: 'GitHub Actions test pipelines and instant edge deployment.' },
];

export const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'fintech' | 'devops'>('all');

  const filteredTools = activeCategory === 'all' 
    ? TOOLS_DATA 
    : TOOLS_DATA.filter((t) => t.category === activeCategory);

  return (
    <section id="about" className="section-spacing" aria-label="Engineering Background & Tech Stack">
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

        {/* Top Bento Grid: Philosophy + Impact Metrics + Delivery Pipeline */}
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
                <Sparkles size={16} />
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

        {/* Bottom Bento: Interactive Core Production Tech Stack */}
        <div className="glass-panel about-tech-stack-panel reveal-init delay-200" style={{ marginTop: '2.5rem' }}>
          {/* Panel Header with Category Filter Switcher */}
          <div className="tech-stack-header-row">
            <div className="tech-stack-title-wrap">
              <div className="tech-stack-icon-box">
                <Wrench size={18} />
              </div>
              <div>
                <h3 className="tech-stack-heading">Core Production Tech Stack</h3>
                <p className="tech-stack-subheading">Tools and frameworks I use daily to architect and deploy systems.</p>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="category-filter-pills">
              <button
                type="button"
                className={`category-pill-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Tools ({TOOLS_DATA.length})
              </button>
              <button
                type="button"
                className={`category-pill-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
                onClick={() => setActiveCategory('frontend')}
              >
                Frontend ({TOOLS_DATA.filter((t) => t.category === 'frontend').length})
              </button>
              <button
                type="button"
                className={`category-pill-btn ${activeCategory === 'backend' ? 'active' : ''}`}
                onClick={() => setActiveCategory('backend')}
              >
                Backend & DB ({TOOLS_DATA.filter((t) => t.category === 'backend').length})
              </button>
              <button
                type="button"
                className={`category-pill-btn ${activeCategory === 'fintech' ? 'active' : ''}`}
                onClick={() => setActiveCategory('fintech')}
              >
                Fintech ({TOOLS_DATA.filter((t) => t.category === 'fintech').length})
              </button>
              <button
                type="button"
                className={`category-pill-btn ${activeCategory === 'devops' ? 'active' : ''}`}
                onClick={() => setActiveCategory('devops')}
              >
                DevOps ({TOOLS_DATA.filter((t) => t.category === 'devops').length})
              </button>
            </div>
          </div>

          {/* Interactive Tools Grid */}
          <div className="interactive-tools-grid">
            {filteredTools.map((tool) => (
              <div key={tool.id} className="interactive-tool-card">
                <div className="tool-card-top">
                  <div className="tool-brand-medallion">
                    {tool.icon}
                  </div>
                  <span className={`tool-mastery-badge badge-${tool.badge.toLowerCase().replace(/[^a-z]/g, '')}`}>
                    {tool.badge}
                  </span>
                </div>

                <div className="tool-info-content">
                  <div className="tool-name-row">
                    <span className="tool-title">{tool.name}</span>
                    <span className="tool-cat-tag">{tool.categoryLabel}</span>
                  </div>
                  <p className="tool-note-text">{tool.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
