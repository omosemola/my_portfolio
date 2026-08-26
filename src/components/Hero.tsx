import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Mail, Code2, FolderGit2, Wrench, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveTerminal } from './InteractiveTerminal';
import { TechMarquee } from './TechMarquee';
import { GithubIcon, TwitterIcon } from './SocialIcons';
import { 
  MOTION_VIEWPORT, 
  sectionFadeVariant, 
  itemFadeVariant, 
  slideInRightVariant 
} from '../utils/motion';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      <div className="container-wide" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* Left Column: Personal Brand & Intro */}
          <motion.div 
            className="hero-content"
            initial="hidden"
            whileInView="visible"
            viewport={MOTION_VIEWPORT}
            variants={sectionFadeVariant}
          >
            {/* Eyebrow Badge */}
            <motion.div className="hero-badge-row" variants={itemFadeVariant}>
              <div className="section-eyebrow" style={{ marginBottom: 0 }}>
                <Code2 size={12} />
                <span>{PERSONAL_INFO.eyebrow}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 className="hero-title" variants={itemFadeVariant}>
              {PERSONAL_INFO.heroHeading}
              <span className="hero-highlight">{PERSONAL_INFO.heroHighlight}</span>
            </motion.h1>

            {/* Supporting Bio */}
            <motion.p className="hero-description" variants={itemFadeVariant}>
              {PERSONAL_INFO.heroParagraph}
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div className="hero-actions" variants={itemFadeVariant}>
              <a
                href="#projects"
                className="btn btn-primary hero-btn-featured"
                id="hero-cta-projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                <span>View Featured Work</span>
                <ArrowRight size={15} />
              </a>

              <div className="animated-link-wrapper-demo">
                <div className="animated-link-effect-demo" aria-hidden="true">
                  <div></div>
                </div>
                <a
                  href="#contact"
                  className="animated-link-demo"
                  id="hero-cta-contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  <MessageSquare size={15} />
                  <span>Let's Talk</span>
                </a>
              </div>
            </motion.div>

            {/* Quick Navigation Chips */}
            <motion.div className="hero-mobile-nav-chips" variants={itemFadeVariant}>
              <span className="quick-nav-label">Quick Jump:</span>
              <div className="quick-nav-pills">
                <button
                  type="button"
                  className="quick-chip"
                  onClick={() => scrollToSection('projects')}
                >
                  <FolderGit2 size={13} />
                  <span>Projects</span>
                </button>

                <button
                  type="button"
                  className="quick-chip"
                  onClick={() => scrollToSection('about')}
                >
                  <Wrench size={13} />
                  <span>Tech Stack</span>
                </button>

                <a
                  href="/resume.pdf"
                  download="Richard_Dairo_Resume.pdf"
                  className="quick-chip"
                >
                  <FileText size={13} />
                  <span>Resume (PDF)</span>
                </a>

                <button
                  type="button"
                  className="quick-chip"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail size={13} />
                  <span>Contact</span>
                </button>
              </div>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div className="hero-socials" variants={itemFadeVariant}>
              <span className="socials-lead-text">Connect:</span>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="social-link"
                aria-label="Send Direct Email"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter Profile"
              >
                <TwitterIcon size={14} />
                <span>Twitter</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Terminal (Desktop & Mobile Responsive) */}
          <motion.div 
            className="hero-visual"
            initial="hidden"
            whileInView="visible"
            viewport={MOTION_VIEWPORT}
            variants={slideInRightVariant}
          >
            <InteractiveTerminal />
          </motion.div>
        </div>

        {/* Horizontal Moving Tech Stack Display Board (Logos Only) */}
        <motion.div 
          className="hero-marquee-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT}
          variants={itemFadeVariant}
        >
          <TechMarquee label="CORE PRODUCTION TECH STACK" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
