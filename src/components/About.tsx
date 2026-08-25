import React from 'react';
import { 
  UserCheck, 
  GitBranch, 
  Sparkles 
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

        {/* Bento Grid: Impact Metrics + Delivery Pipeline */}
        <div className="about-bento-grid reveal-init delay-100">
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
    </section>
  );
};
export default About;
