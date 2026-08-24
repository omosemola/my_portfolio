import React, { useState } from 'react';
import { Globe, ShoppingBag, Layers, Cpu, Smartphone, Check, Briefcase, GitMerge } from 'lucide-react';
import { SERVICES, PROCESS_STEPS } from '../data/portfolioData';

const serviceIcons: Record<string, React.ElementType> = {
  Globe,
  ShoppingBag,
  Layers,
  Cpu,
  Smartphone,
};

export const Services: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'services' | 'process'>('services');

  return (
    <section id="services" className="section-spacing" aria-label="Services and Workflow">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-init">
          <div className="section-eyebrow">
            <Briefcase size={12} />
            <span>CAPABILITIES & WORKFLOW</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>What I Do & How I Work</h2>

            {/* Toggle Switch */}
            <div style={{ display: 'flex', gap: '0.4rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.3rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--glass-border)' }}>
              <button
                className={`skill-tab-button ${activeSubTab === 'services' ? 'active' : ''}`}
                style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
                onClick={() => setActiveSubTab('services')}
              >
                <Globe size={13} />
                <span>Services ({SERVICES.length})</span>
              </button>
              <button
                className={`skill-tab-button ${activeSubTab === 'process' ? 'active' : ''}`}
                style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
                onClick={() => setActiveSubTab('process')}
              >
                <GitMerge size={13} />
                <span>5-Step Process</span>
              </button>
            </div>
          </div>

          <p className="section-desc">
            End-to-end engineering services for startups and businesses, backed by a disciplined delivery workflow.
          </p>
        </div>

        {/* Tab 1: Services Grid */}
        {activeSubTab === 'services' && (
          <div className="services-grid">
            {SERVICES.map((service, idx) => {
              const IconComp = serviceIcons[service.iconName] || Globe;
              return (
                <div key={service.id} className={`service-card reveal-init delay-${(idx % 3 + 1) * 100}`}>
                  <div>
                    <div className="service-icon-box">
                      <IconComp size={22} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.shortDesc}</p>
                  </div>

                  <ul className="service-features-list">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="service-feature-item">
                        <Check size={13} style={{ color: 'var(--color-text-main)', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: 5-Step Process */}
        {activeSubTab === 'process' && (
          <div className="process-grid">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.step} className={`process-card reveal-init delay-${(idx + 1) * 100}`}>
                <div className="process-step-num">{step.step}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <div className="process-step-subtitle">{step.subtitle}</div>
                <p className="process-step-desc">{step.description}</p>

                <div className="process-deliverables">
                  {step.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="deliverable-tag">
                      <span style={{ color: 'var(--color-text-main)' }}>•</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
