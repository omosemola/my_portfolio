import React from 'react';
import { History, CheckCircle, Award } from 'lucide-react';
import { EXPERIENCE_TIMELINE, ACHIEVEMENTS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-spacing" aria-label="Experience and Career Timeline">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-init">
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

          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <div key={item.id} className={`timeline-entry reveal-init delay-${(idx + 1) * 100}`}>
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-org">{item.organization}</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="timeline-period">{item.period}</span>
                    <span className="tech-pill accent" style={{ fontSize: '0.7rem' }}>{item.badge}</span>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>

                <div className="timeline-bullets">
                  {item.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="timeline-bullet-item">
                      <CheckCircle size={16} style={{ color: '#FFFFFF', flexShrink: 0, marginTop: '2px' }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tech-list" style={{ marginBottom: 0, marginTop: '1.25rem' }}>
                  {item.techStack.map((tech) => (
                    <span key={tech} className="tech-pill" style={{ fontSize: '0.7rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Capabilities Summary */}
        <div style={{ marginTop: '5rem' }} className="reveal-init">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.6rem' }}>
              Core Technical Capabilities
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>
              Proven competency across the modern full-stack development spectrum.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {ACHIEVEMENTS.map((ach, idx) => (
              <div key={idx} className={`glass-panel reveal-init delay-${(idx % 3 + 1) * 100}`} style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <Award size={18} style={{ color: '#FFFFFF' }} />
                  <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#FFFFFF' }}>{ach.title}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
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
