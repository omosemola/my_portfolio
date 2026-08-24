import React from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockups';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  // Primary Featured Layout (Campus Marketplace)
  if (project.featured) {
    return (
      <div className="project-card-primary glass-panel" id={`project-${project.id}`}>
        {/* Visual Mockup Column */}
        <div className="project-visual-col">
          <ProjectMockup type={project.mockupType} />
        </div>

        {/* Details Column */}
        <div className="project-details-col">
          <div>
            {/* Category & Status Eyebrow */}
            <div className="project-card-eyebrow-row">
              <span className="project-featured-badge">
                ★ FEATURED FLAGSHIP
              </span>
              <span className="code-pill-tag">{project.category}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-desc">{project.description}</p>

            {/* Embedded Architecture Stats Strip */}
            {project.caseStudy.stats && (
              <div className="project-stats-strip">
                {project.caseStudy.stats.map((stat, idx) => (
                  <div key={idx} className="project-stat-pill">
                    <span className="stat-pill-label">{stat.label}:</span>
                    <span className="stat-pill-value">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Chips */}
            <div className="project-tech-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons Group */}
          <div className="project-actions">
            <button
              className="btn btn-primary"
              onClick={() => onOpenCaseStudy(project)}
              aria-label={`View Case Study for ${project.title}`}
            >
              <BookOpen size={15} />
              <span>Full Case Study</span>
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label={`Visit live demo of ${project.title}`}
              >
                <span>Live Demo</span>
                <ArrowUpRight size={15} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <GithubIcon size={15} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Secondary Project Bento Layout (E-Commerce & Mobile App)
  return (
    <div className="project-card-secondary glass-panel" id={`project-${project.id}`}>
      {/* Mockup Preview Area */}
      <div className="secondary-visual-wrap">
        <ProjectMockup type={project.mockupType} />
      </div>

      {/* Details Body */}
      <div className="secondary-details-wrap">
        <div>
          <div className="project-card-eyebrow-row">
            <span className="project-category-badge">{project.category}</span>
          </div>

          <h3 className="secondary-project-title">{project.title}</h3>
          <p className="project-tagline">{project.tagline}</p>
          <p className="project-desc">{project.description}</p>

          {/* Key Stats Strip */}
          {project.caseStudy.stats && (
            <div className="project-stats-strip mini">
              {project.caseStudy.stats.map((stat, idx) => (
                <div key={idx} className="project-stat-pill">
                  <span className="stat-pill-label">{stat.label}:</span>
                  <span className="stat-pill-value">{stat.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack List */}
          <div className="project-tech-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-pill" style={{ fontSize: '0.72rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          <button
            className="btn btn-primary"
            style={{ fontSize: '0.8125rem', padding: '0.55rem 0.95rem' }}
            onClick={() => onOpenCaseStudy(project)}
            aria-label={`View Case Study for ${project.title}`}
          >
            <BookOpen size={14} />
            <span>Case Study</span>
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: '0.8125rem', padding: '0.55rem 0.95rem' }}
              aria-label={`Live demo for ${project.title}`}
            >
              <span>Live Demo</span>
              <ArrowUpRight size={14} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ fontSize: '0.8125rem', padding: '0.55rem 0.85rem' }}
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <GithubIcon size={14} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
