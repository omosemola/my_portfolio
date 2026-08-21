import React from 'react';
import { History, CheckCircle, Award } from 'lucide-react';
import { EXPERIENCE_TIMELINE, ACHIEVEMENTS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-spacing" aria-label="Experience and Career Timeline">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <History size={13} />
            <span>TIMELINE</span>
          </div>
          <h2 className="section-title">Experience & Journey</h2>
          <p className="section-desc">
            A timeline of hands-on engineering, product development milestones, and full-stack software delivery.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-wrap">
          <div className="timeline-line"></div>

          {EXPERIENCE_TIMELINE.map((item) => (
            <div key={item.id} className="timeline-entry">
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-org">{item.organization}</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="timeline-period">{item.period}</span>
                    <span className="tech-pill accent" style={{ fontSize: '0.6875rem' }}>{item.badge}</span>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <div className="timeline-bullets">
                  {item.highlights.map((bullet, idx) => (
                    <div key={idx} className="timeline-bullet-item">
                      <CheckCircle size={15} style={{ color: '#FFFFFF', flexShrink: 0, marginTop: '2px' }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech-list" style={{ marginBottom: 0, marginTop: '1rem' }}>
                  {item.techStack.map((tech) => (
                    <span key={tech} className="tech-pill" style={{ fontSize: '0.6875rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Capabilities Summary */}
        <div style={{ marginTop: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Core Technical Capabilities
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
              Proven competency across the modern full-stack development spectrum.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {ACHIEVEMENTS.map((ach, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Award size={16} style={{ color: '#FFFFFF' }} />
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFFFFF' }}>{ach.title}</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
