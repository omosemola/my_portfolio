import React from 'react';
import { FolderGit2 } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const featuredProject = PROJECTS.find((p) => p.featured);
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-spacing" aria-label="Featured Projects">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header reveal-init">
          <div className="section-eyebrow">
            <FolderGit2 size={13} />
            <span>PORTFOLIO</span>
          </div>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-desc">
            Production-oriented web and mobile applications engineered with modern technologies, secure authentication, and payment integrations.
          </p>
        </div>

        {/* Projects Layout */}
        <div className="projects-container">
          {/* Primary Flagship Project */}
          {featuredProject && (
            <div className="reveal-init delay-100">
              <ProjectCard
                project={featuredProject}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            </div>
          )}

          {/* Secondary Grid Projects */}
          <div className="project-secondary-grid">
            {secondaryProjects.map((project, idx) => (
              <div key={project.id} className={`reveal-init delay-${(idx + 2) * 100}`}>
                <ProjectCard
                  project={project}
                  onOpenCaseStudy={onOpenCaseStudy}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
