import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { 
  MOTION_VIEWPORT, 
  sectionFadeVariant, 
  itemFadeVariant 
} from '../utils/motion';

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
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT}
          variants={sectionFadeVariant}
        >
          <motion.div className="section-eyebrow" variants={itemFadeVariant}>
            <FolderGit2 size={13} />
            <span>PRODUCTION SOFTWARE SHOWCASE</span>
          </motion.div>
          <motion.h2 className="section-title" variants={itemFadeVariant}>Selected Projects</motion.h2>
          <motion.p className="section-desc" variants={itemFadeVariant}>
            Full-stack web and mobile applications engineered with type-safe architectures, secure authentication, and resilient payment integrations.
          </motion.p>

          {/* Interactive Category Filter Pills */}
          <motion.div className="projects-filter-bar" style={{ marginTop: '1.75rem' }} variants={itemFadeVariant}>
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
          </motion.div>
        </motion.div>

        {/* Projects Layout */}
        <div className="projects-container">
          {/* Primary Featured Flagship Project */}
          <AnimatePresence mode="popLayout">
            {featuredProject && (
              <motion.div
                key={featuredProject.id}
                layout
                initial={{ opacity: 0, y: 25, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.985 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard
                  project={featuredProject}
                  onOpenCaseStudy={onOpenCaseStudy}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Secondary Bento Grid Projects */}
          <AnimatePresence mode="popLayout">
            {secondaryProjects.length > 0 && (
              <motion.div 
                key={`grid-${activeCategory}`}
                className={`project-secondary-grid ${!featuredProject ? 'grid-only' : ''}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {secondaryProjects.map((project) => (
                  <motion.div 
                    key={project.id} 
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProjectCard
                      project={project}
                      onOpenCaseStudy={onOpenCaseStudy}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
