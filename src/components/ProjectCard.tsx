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
      <div className="project-card-primary" id={`project-${project.id}`}>
        {/* Visual Mockup Column */}
        <div className="project-visual-col">
          <ProjectMockup type={project.mockupType} />
        </div>

        {/* Details Column */}
        <div className="project-details-col">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span className="project-category-badge">★ PRIMARY FEATURED PROJECT</span>
              <span className="tech-pill accent">{project.category}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-desc">{project.description}</p>

            {/* Tech Stack Chips */}
            <div className="project-tech-list">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="project-actions">
            <button
              className="btn btn-accent"
              onClick={() => onOpenCaseStudy(project)}
              aria-label={`View Case Study for ${project.title}`}
            >
              <BookOpen size={16} />
              <span>Full Case Study</span>
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label={`Visit live demo of ${project.title}`}
              >
                <span>Live Demo</span>
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Secondary Project Layout (Grid Cards)
  return (
    <div className="project-card-secondary" id={`project-${project.id}`}>
      {/* Mockup Preview Area */}
      <div className="secondary-visual-wrap">
        <ProjectMockup type={project.mockupType} />
      </div>

      {/* Details Body */}
      <div className="secondary-details-wrap">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
            <span className="project-category-badge">{project.category}</span>
          </div>

          <h3 className="project-title" style={{ fontSize: '1.35rem' }}>{project.title}</h3>
          <p className="project-tagline" style={{ fontSize: '0.875rem' }}>{project.tagline}</p>
          <p className="project-desc" style={{ fontSize: '0.8125rem', marginBottom: '1.25rem' }}>
            {project.description}
          </p>

          <div className="project-tech-list" style={{ marginBottom: '1.25rem' }}>
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-pill" style={{ fontSize: '0.6875rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-actions">
          <button
            className="btn btn-primary"
            style={{ fontSize: '0.8125rem', padding: '0.6rem 1.1rem', minHeight: '40px' }}
            onClick={() => onOpenCaseStudy(project)}
            aria-label={`View Case Study for ${project.title}`}
          >
            <BookOpen size={14} />
            <span>Case Study</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: '0.8125rem', padding: '0.6rem 1rem', minHeight: '40px' }}
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <GithubIcon size={14} />
              <span>Code</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ fontSize: '0.8125rem', padding: '0.5rem 0.75rem' }}
              aria-label={`Live link for ${project.title}`}
            >
              <span>Demo</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
