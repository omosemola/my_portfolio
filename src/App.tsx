import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Experience } from './components/Experience';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Project } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  useEffect(() => {
    // 1. Track active navbar section on scroll
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'services', 'experience', 'process', 'contact'];
    const sectionObservers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' }
        );
        observer.observe(el);
        sectionObservers.push(observer);
      }
    });

    // 2. Smooth reveal animation on scroll for all sections & cards
    const revealElements = document.querySelectorAll('.reveal-init');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => {
      sectionObservers.forEach((obs) => obs.disconnect());
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-base text-main relative">
      {/* Ambient Animated Glow Mesh for Glassmorphism Depth */}
      <div className="ambient-glow-bg" aria-hidden="true">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Sticky Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
        <Services />
        <Process />
        <Experience />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
};

export default App;
