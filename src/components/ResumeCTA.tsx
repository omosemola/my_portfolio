import React, { useState } from 'react';
import { FileText, Download, Check } from 'lucide-react';

export const ResumeCTA: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadClick = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="resume" className="section-spacing" style={{ paddingTop: '2rem', paddingBottom: '4rem' }} aria-label="Resume Download">
      <div className="container">
        <div className="resume-banner">
          <div>
            <div className="section-eyebrow" style={{ background: 'rgba(49, 46, 129, 0.4)', borderColor: 'rgba(99, 102, 241, 0.4)' }}>
              <FileText size={13} />
              <span>CURRICULUM VITAE</span>
            </div>
            <h2 className="resume-heading">Want the full story?</h2>
            <p className="resume-text">
              Download my comprehensive resume for a detailed breakdown of my technical projects, engineering journey, and full-stack skill set.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
            <a
              href="/resume.pdf"
              download="Richard_Dairo_Resume.pdf"
              className="btn btn-accent"
              onClick={handleDownloadClick}
              style={{ whiteSpace: 'nowrap' }}
              aria-label="Download Richard Dairo Resume PDF"
            >
              {downloaded ? (
                <>
                  <Check size={18} />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download size={18} />
                  <span>Download Resume (PDF)</span>
                </>
              )}
            </a>

            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-subtle)', fontFamily: 'var(--font-mono)' }}>
              Updated for 2026 • PDF Format
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
