import React from 'react';
import { GitMerge } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="section-spacing" aria-label="Development Process">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <GitMerge size={13} />
            <span>WORKFLOW</span>
          </div>
          <h2 className="section-title">How I Work</h2>
          <p className="section-desc">
            A disciplined, structured five-step lifecycle ensuring ideas translate smoothly into production-ready software.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="process-grid">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="process-card">
              <div className="process-step-num">{step.step}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <div className="process-step-subtitle">{step.subtitle}</div>
              <p className="process-step-desc">{step.description}</p>

              <div className="process-deliverables">
                {step.deliverables.map((deliv, idx) => (
                  <div key={idx} className="deliverable-tag">
                    <span style={{ color: '#FFFFFF' }}>•</span>
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
