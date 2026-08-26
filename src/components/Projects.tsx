import React, { useState } from 'react';
import { FolderGit2 } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

type CategoryFilter = 'all' | 'Marketplace' | 'E-Commerce' | 'Mobile App';

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const featuredProject = filteredProjects.find((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-spacing" aria-label="Featured Projects">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-header reveal-init">
          <div className="section-eyebrow">
            <FolderGit2 size={13} />
            <span>PRODUCTION SOFTWARE SHOWCASE</span>
          </div>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-desc">
            Full-stack web and mobile applications engineered with type-safe architectures, secure authentication, and resilient payment integrations.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="projects-filter-bar" style={{ marginTop: '1.75rem' }}>
            <div className="projects-filter-pills">
              <button
                type="button"
                className={`filter-pill-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                <span>All Projects</span>
                <span className="filter-count">{PROJECTS.length}</span>
              </button>

              <button
                type="button"
                className={`filter-pill-btn ${activeCategory === 'Marketplace' ? 'active' : ''}`}
                onClick={() => setActiveCategory('Marketplace')}
              >
                <span>Marketplace</span>
                <span className="filter-count">
                  {PROJECTS.filter((p) => p.category === 'Marketplace').length}
                </span>
              </button>

              <button
                type="button"
                className={`filter-pill-btn ${activeCategory === 'E-Commerce' ? 'active' : ''}`}
                onClick={() => setActiveCategory('E-Commerce')}
              >
                <span>E-Commerce</span>
                <span className="filter-count">
                  {PROJECTS.filter((p) => p.category === 'E-Commerce').length}
                </span>
              </button>

              <button
                type="button"
                className={`filter-pill-btn ${activeCategory === 'Mobile App' ? 'active' : ''}`}
                onClick={() => setActiveCategory('Mobile App')}
              >
                <span>Mobile Apps</span>
                <span className="filter-count">
                  {PROJECTS.filter((p) => p.category === 'Mobile App').length}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Projects Layout */}
        <div className="projects-container">
          {/* Primary Featured Flagship Project */}
          {featuredProject && (
            <div className="reveal-init delay-100">
              <ProjectCard
                project={featuredProject}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            </div>
          )}

          {/* Secondary Bento Grid Projects */}
          {secondaryProjects.length > 0 && (
            <div className={`project-secondary-grid ${!featuredProject ? 'grid-only' : ''}`}>
              {secondaryProjects.map((project) => (
                <div key={project.id} className="reveal-visible">
                  <ProjectCard
                    project={project}
                    onOpenCaseStudy={onOpenCaseStudy}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
