import React, { useState } from 'react';
import { 
  Wrench, 
  Atom, 
  FileCode, 
  Code2, 
  Layout, 
  Smartphone, 
  Database, 
  Server, 
  Network, 
  CreditCard, 
  DollarSign, 
  Webhook, 
  ShieldCheck, 
  KeyRound, 
  Lock, 
  GitBranch, 
  Cloud, 
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Map icon names to Lucide icons
const iconMap: Record<string, React.ElementType> = {
  Atom,
  FileCode,
  Code2,
  Layout,
  Smartphone,
  Database,
  Server,
  Network,
  CreditCard,
  DollarSign,
  Webhook,
  ShieldCheck,
  KeyRound,
  Lock,
  GitBranch,
  Cloud,
  Cpu,
};

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const allSkills = SKILL_CATEGORIES.flatMap(cat => 
    cat.skills.map(s => ({ ...s, categoryName: cat.name }))
  );

  const displayedSkills = activeCategoryId === 'all'
    ? allSkills
    : (SKILL_CATEGORIES.find(c => c.id === activeCategoryId)?.skills.map(s => ({
        ...s,
        categoryName: SKILL_CATEGORIES.find(c => c.id === activeCategoryId)?.name || ''
      })) || []);

  return (
    <section id="skills" className="section-spacing" aria-label="Technical Skills and Stack">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Wrench size={13} />
            <span>TECH STACK</span>
          </div>
          <h2 className="section-title">Tools I Build With</h2>
          <p className="section-desc">
            Carefully chosen, production-proven tools that allow me to architect robust full-stack applications with speed and reliability.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-nav-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeCategoryId === 'all'}
            className={`skill-tab-button ${activeCategoryId === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategoryId('all')}
          >
            All Technologies ({allSkills.length})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategoryId === cat.id}
              className={`skill-tab-button ${activeCategoryId === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategoryId(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {displayedSkills.map((skill, idx) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            return (
              <div key={`${skill.name}-${idx}`} className="skill-item-card">
                <div>
                  <div className="skill-card-top">
                    <div className="skill-name-wrap">
                      <div className="skill-icon-box">
                        <IconComponent size={18} />
                      </div>
                      <span>{skill.name}</span>
                    </div>
                    <span className="tech-pill accent">{skill.tag}</span>
                  </div>

                  <p className="skill-note">
                    {skill.practicalNote}
                  </p>
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '0.65rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.6875rem' }}>
                  <span style={{ color: 'var(--color-text-subtle)', fontFamily: 'var(--font-mono)' }}>{skill.categoryName}</span>
                  <span style={{ color: '#34D399', fontWeight: 600 }}>{skill.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
