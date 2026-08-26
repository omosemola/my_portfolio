import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Database,
  Globe,
  Lock,
  CreditCard,
  Smartphone
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  ReactIcon, 
  TypeScriptIcon, 
  NextJsIcon, 
  TailwindIcon, 
  VanillaCssIcon, 
  FlutterIcon, 
  NodeIcon, 
  PostgresIcon, 
  SupabaseIcon, 
  PaystackIcon, 
  GitIcon, 
  DockerIcon, 
  ShieldSecurityIcon, 
  ApiIcon 
} from './TechIcons';
import { 
  MOTION_VIEWPORT, 
  sectionFadeVariant, 
  itemFadeVariant, 
  cardVariant 
} from '../utils/motion';

// Map tool names to authentic SVG icons
const getTechIcon = (name: string, size = 22) => {
  const n = name.toLowerCase();
  if (n.includes('react')) return <ReactIcon size={size} />;
  if (n.includes('typescript')) return <TypeScriptIcon size={size} />;
  if (n.includes('next.js') || n.includes('nextjs')) return <NextJsIcon size={size} />;
  if (n.includes('tailwind')) return <TailwindIcon size={size} />;
  if (n.includes('css') || n.includes('styling')) return <VanillaCssIcon size={size} />;
  if (n.includes('flutter') || n.includes('dart')) return <FlutterIcon size={size} />;
  if (n.includes('node') || n.includes('express')) return <NodeIcon size={size} />;
  if (n.includes('postgres') || n.includes('sql')) return <PostgresIcon size={size} />;
  if (n.includes('supabase')) return <SupabaseIcon size={size} />;
  if (n.includes('paystack') || n.includes('flutterwave') || n.includes('payment')) return <PaystackIcon size={size} />;
  if (n.includes('git') || n.includes('github')) return <GitIcon size={size} />;
  if (n.includes('docker') || n.includes('ci/cd')) return <DockerIcon size={size} />;
  if (n.includes('auth') || n.includes('security') || n.includes('rls')) return <ShieldSecurityIcon size={size} />;
  return <ApiIcon size={size} />;
};

const ARCHITECTURE_FLOWS = [
  {
    id: 'marketplace',
    title: 'Campus Marketplace Stack',
    category: 'Full-Stack Multi-Vendor Web Platform',
    steps: [
      { layer: 'Frontend UI', tool: 'Next.js & TypeScript', role: 'Server-side rendering, responsive vendor store & product discovery' },
      { layer: 'State & Cart', tool: 'React Context & Custom Hooks', role: 'Persistent shopping cart & vendor state management' },
      { layer: 'Database & RLS', tool: 'PostgreSQL on Supabase', role: 'Strict Row-Level Security for multi-vendor data isolation' },
      { layer: 'Fintech Engine', tool: 'Paystack API & Webhooks', role: 'Split payments, escrow disbursement & webhook validation' },
    ],
    highlight: 'Zero data leaks across student vendors via PostgreSQL RLS policies & real-time webhook listeners.'
  },
  {
    id: 'ecommerce',
    title: 'Modern E-Commerce Store',
    category: 'High-Conversion Online Store',
    steps: [
      { layer: 'Storefront', tool: 'React 18 & Tailwind CSS', role: 'Optimized speed, animated cart drawer & instant checkout flow' },
      { layer: 'Backend API', tool: 'Node.js & Express REST API', role: 'Order processing, catalog management & inventory locks' },
      { layer: 'Payment Integration', tool: 'Paystack Popup / Inline SDK', role: 'Frictionless checkout with instant transaction verification' },
      { layer: 'Deployment', tool: 'Vercel & Automated CI/CD', role: 'Global edge distribution with sub-second page loads' },
    ],
    highlight: 'Optimized for mobile-first conversion with animated slide-over cart drawer and instant Paystack verification.'
  },
  {
    id: 'mobile',
    title: 'Cross-Platform Mobile App',
    category: 'Mobile iOS & Android Application',
    steps: [
      { layer: 'Mobile Client', tool: 'Flutter & Dart', role: 'Single unified codebase delivering 60fps native performance' },
      { layer: 'Local Cache', tool: 'SQLite / Hive Local DB', role: 'Instant offline availability with background delta synchronization' },
      { layer: 'Cloud Backend', tool: 'Supabase & REST APIs', role: 'Secure JWT authentication & real-time channel subscriptions' },
      { layer: 'Build Pipeline', tool: 'Codemagic CI/CD', role: 'Automated test suite execution and App Store / APK artifact builds' },
    ],
    highlight: 'Full offline-first support allowing uninterrupted campus usage even in low-connectivity environments.'
  }
];

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [activeArchId, setActiveArchId] = useState<string>('marketplace');

  const allSkills = SKILL_CATEGORIES.flatMap(cat => 
    cat.skills.map(s => ({ ...s, categoryName: cat.name }))
  );

  const displayedSkills = activeCategoryId === 'all'
    ? allSkills
    : (SKILL_CATEGORIES.find(c => c.id === activeCategoryId)?.skills.map(s => ({
        ...s,
        categoryName: SKILL_CATEGORIES.find(c => c.id === activeCategoryId)?.name || ''
      })) || []);

  const currentArch = ARCHITECTURE_FLOWS.find(a => a.id === activeArchId) || ARCHITECTURE_FLOWS[0];

  return (
    <section id="skills" className="section-spacing" aria-label="Technical Skills and Stack">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT}
          variants={sectionFadeVariant}
        >
          <motion.div className="section-eyebrow" variants={itemFadeVariant}>
            <Wrench size={13} />
            <span>CORE STACK & TOOLS</span>
          </motion.div>
          <motion.h2 className="section-title" variants={itemFadeVariant}>Tools I Build With</motion.h2>
          <motion.p className="section-desc" variants={itemFadeVariant}>
            A production-proven technology suite selected for speed, architectural integrity, type safety, and real-world scalability.
          </motion.p>
        </motion.div>

        {/* 1. Master Production Stack Banner (Bento Style) */}
        <motion.div 
          className="tech-master-bento"
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT}
          variants={cardVariant}
        >
          <div className="tech-bento-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Layers size={18} style={{ color: '#FFFFFF' }} />
              <span className="bento-badge-title">DEFAULT PRODUCTION PIPELINE</span>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)', fontFamily: 'var(--font-mono)' }}>
              End-to-End Type Safety & Scale
            </span>
          </div>

          <div className="tech-pipeline-flow">
            <div className="pipeline-node">
              <div className="node-icon-box"><ReactIcon size={24} /></div>
              <div className="node-info">
                <span className="node-title">React & Next.js</span>
                <span className="node-sub">Modern UI Layer</span>
              </div>
            </div>

            <div className="pipeline-arrow"><ArrowRight size={16} /></div>

            <div className="pipeline-node">
              <div className="node-icon-box"><TypeScriptIcon size={24} /></div>
              <div className="node-info">
                <span className="node-title">TypeScript</span>
                <span className="node-sub">Strict Type Safety</span>
              </div>
            </div>

            <div className="pipeline-arrow"><ArrowRight size={16} /></div>

            <div className="pipeline-node">
              <div className="node-icon-box"><SupabaseIcon size={24} /></div>
              <div className="node-info">
                <span className="node-title">Supabase & Postgres</span>
                <span className="node-sub">Database & Auth RLS</span>
              </div>
            </div>

            <div className="pipeline-arrow"><ArrowRight size={16} /></div>

            <div className="pipeline-node">
              <div className="node-icon-box"><PaystackIcon size={24} /></div>
              <div className="node-info">
                <span className="node-title">Paystack Gateway</span>
                <span className="node-sub">Fintech & Webhooks</span>
              </div>
            </div>

            <div className="pipeline-arrow"><ArrowRight size={16} /></div>

            <div className="pipeline-node">
              <div className="node-icon-box"><GitIcon size={24} /></div>
              <div className="node-info">
                <span className="node-title">Git & Vercel</span>
                <span className="node-sub">Automated CI/CD</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Category Filter Switcher */}
        <motion.div 
          className="skills-nav-tabs" 
          role="tablist"
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT}
          variants={itemFadeVariant}
        >
          <button
            role="tab"
            aria-selected={activeCategoryId === 'all'}
            className={`skill-tab-button ${activeCategoryId === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategoryId('all')}
          >
            <Layers size={14} />
            <span>All Tools</span>
            <span className="tab-counter">{allSkills.length}</span>
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategoryId === cat.id}
              className={`skill-tab-button ${activeCategoryId === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategoryId(cat.id)}
            >
              {cat.id === 'frontend' && <Globe size={14} />}
              {cat.id === 'backend' && <Database size={14} />}
              {cat.id === 'payments' && <CreditCard size={14} />}
              {cat.id === 'auth-security' && <Lock size={14} />}
              {cat.id === 'devops' && <Cpu size={14} />}
              <span>{cat.name}</span>
              <span className="tab-counter">{cat.skills.length}</span>
            </button>
          ))}
        </motion.div>

        {/* 3. Redesigned Premium Skill Cards Grid */}
        <motion.div 
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT}
          variants={sectionFadeVariant}
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => {
              return (
                <motion.div 
                  key={`${skill.name}-${activeCategoryId}`} 
                  layout
                  className="skill-card-modern"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3 }}
                >
                  <div className="skill-card-top-row">
                    <div className="skill-icon-medallion">
                      {getTechIcon(skill.name, 24)}
                    </div>
                    <div className="skill-mastery-badge">
                      <span className="mastery-dot"></span>
                      <span>{skill.level}</span>
                    </div>
                  </div>

                  <div className="skill-body-content">
                    <div className="skill-header-meta">
                      <h3 className="skill-name-heading">{skill.name}</h3>
                      <span className="skill-tag-pill">{skill.tag}</span>
                    </div>

                    <p className="skill-practical-note">
                      {skill.practicalNote}
                    </p>
                  </div>

                  <div className="skill-card-footer">
                    <span className="skill-cat-label">{skill.categoryName}</span>
                    <div className="skill-status-bars" title={`Proficiency Level: ${skill.level}`}>
                      <span className="bar-segment filled"></span>
                      <span className="bar-segment filled"></span>
                      <span className={`bar-segment ${skill.level.toLowerCase().includes('expert') || skill.level.toLowerCase().includes('production') ? 'filled' : ''}`}></span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* 4. Interactive Architecture Inspector */}
        <motion.div 
          className="tech-arch-inspector"
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT}
          variants={cardVariant}
        >
          <div className="arch-inspector-header">
            <div>
              <div className="section-eyebrow" style={{ marginBottom: '0.5rem' }}>
                <Zap size={13} />
                <span>HOW I ASSEMBLE ARCHITECTURE</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF' }}>Interactive Pipeline Blueprint</h3>
            </div>

            <div className="arch-tab-group">
              {ARCHITECTURE_FLOWS.map((flow) => (
                <button
                  key={flow.id}
                  className={`arch-tab-btn ${activeArchId === flow.id ? 'active' : ''}`}
                  onClick={() => setActiveArchId(flow.id)}
                >
                  {flow.id === 'marketplace' && <Globe size={14} />}
                  {flow.id === 'ecommerce' && <CreditCard size={14} />}
                  {flow.id === 'mobile' && <Smartphone size={14} />}
                  <span>{flow.title.split(' ')[0]} {flow.title.split(' ')[1]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="arch-flow-viewer">
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                {currentArch.title}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)', fontFamily: 'var(--font-mono)' }}>
                {currentArch.category}
              </div>
            </div>

            <div className="arch-steps-grid">
              {currentArch.steps.map((step, sIdx) => (
                <div key={sIdx} className="arch-step-box">
                  <div className="step-badge-row">
                    <span className="step-num-pill">0{sIdx + 1}</span>
                    <span className="step-layer-title">{step.layer}</span>
                  </div>
                  <div className="step-tool-name">{step.tool}</div>
                  <div className="step-role-desc">{step.role}</div>
                </div>
              ))}
            </div>

            <div className="arch-highlight-bar">
              <ShieldCheck size={18} style={{ color: '#FFFFFF', flexShrink: 0 }} />
              <span><strong>Key Engineering Benefit:</strong> {currentArch.highlight}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

