import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Project } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  useEffect(() => {
    // Track active section on scroll across 4 main sections
    const sectionIds = ['hero', 'projects', 'about', 'contact'];
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

    // Smooth reveal animation on scroll
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
      {/* Ambient Backdrop Glow */}
      <div className="ambient-glow-bg" aria-hidden="true">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      {/* Sticky Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Streamlined 4-Section Layout */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* 1. Hero Introduction & Interactive Code Terminal */}
        <Hero />

        {/* 2. Featured Projects & Case Studies */}
        <Projects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />

        {/* 3. About & Core Tech Stack (Combined & Compact) */}
        <About />

        {/* 4. Experience & Contact Brief (Combined & Compact) */}
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
