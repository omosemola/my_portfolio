import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Cpu, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockups';
import { GithubIcon } from './SocialIcons';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="modal-window"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="modal-top-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="modal-category">{project.category} CASE STUDY</span>
            <span className="tech-pill accent">Production Ready</span>
          </div>

          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="modal-content-scroll">
          {/* Header Title Section */}
          <div className="modal-header-section">
            <h2 id="case-study-title" className="modal-title">
              {project.title}
            </h2>
            <p className="modal-tagline">{project.tagline}</p>

            {/* Technologies */}
            <div className="project-tech-list" style={{ marginTop: '0.75rem', marginBottom: '0' }}>
              {project.technologies.map((t) => (
                <span key={t} className="tech-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Embedded UI Mockup */}
          <div style={{ background: '#080808', padding: '1rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <ProjectMockup type={project.mockupType} />
          </div>

          {/* Key Metrics Stats if available */}
          {caseStudy.stats && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {caseStudy.stats.map((s, idx) => (
                <div key={idx} style={{ background: 'var(--glass-bg)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-main)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} style={{ color: 'var(--color-text-main)' }} />
              Executive Overview
            </h3>
            <p style={{ color: 'var(--color-text-body)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
              {caseStudy.overview}
            </p>
          </div>

          {/* Problem & Solution 2-Column Grid */}
          <div className="modal-grid-2col">
            <div className="case-card">
              <div className="case-card-title">
                <AlertCircle size={18} />
                <span>The Problem</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {caseStudy.problem}
              </p>
            </div>

            <div className="case-card">
              <div className="case-card-title">
                <CheckCircle2 size={18} />
                <span>The Engineering Solution</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={16} style={{ color: 'var(--color-text-main)' }} />
              Core Architecture Features
            </h3>
            <div className="features-list">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div key={idx} className="feature-bullet">
                  <CheckCircle2 size={16} className="bullet-icon" />
                  <div>
                    <div className="bullet-title">{feat.title}</div>
                    <div className="bullet-desc">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture Breakdown */}
          <div className="case-card">
            <div className="case-card-title">
              <Cpu size={18} />
              <span>Technical Architecture Stack</span>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              {caseStudy.architecture.map((item, idx) => (
                <li key={idx} style={{ fontSize: '0.875rem', color: 'var(--color-text-body)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--color-text-main)', fontFamily: 'var(--font-mono)' }}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Production UI Screenshot Gallery if available */}
          {project.images && project.images.length > 0 && (
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} style={{ color: 'var(--color-text-main)' }} />
                Production Application Screens
              </h3>
              <div className="case-study-gallery-grid">
                {project.images.map((img, idx) => (
                  <div key={idx} className="case-study-gallery-card">
                    <img src={img} alt={`${project.title} screenshot ${idx + 1}`} loading="lazy" />
                    <div className="case-study-gallery-label">
                      <span>{project.imageLabels?.[idx] || `Production View 0${idx + 1}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Outcomes */}
          <div className="modal-grid-2col">
            <div className="case-card">
              <div className="case-card-title">
                <span>Key Challenge & Resolution</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {caseStudy.challenges}
              </p>
            </div>

            <div className="case-card">
              <div className="case-card-title">
                <span>Final Outcome</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {caseStudy.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer-actions">
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Visit Live Application</span>
                <ArrowUpRight size={16} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <GithubIcon size={16} />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>

          <button className="btn btn-ghost" onClick={onClose}>
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
