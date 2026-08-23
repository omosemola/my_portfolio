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
  
  // Initialize Theme from LocalStorage or System Preference
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('richard_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Apply Theme attribute to documentElement whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('richard_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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
      {/* Ambient Backdrop Glow Mesh */}
      <div className="ambient-glow-bg" aria-hidden="true">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      {/* Sticky Glass Navbar with Theme Toggle */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Projects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
};

export default App;
