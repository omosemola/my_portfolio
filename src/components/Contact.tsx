import React, { useState } from 'react';
import { MessageSquare, Mail, Send, Check, Copy, CheckCircle2, Download, FileText, History } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_TIMELINE } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide project details.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/rdairo175@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _replyto: formData.email,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send via endpoint');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setTimeout(() => setIsSuccess(false), 7000);
    } catch {
      // Direct mailto trigger fallback
      const mailtoUrl = `mailto:rdairo175@gmail.com?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Richard,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-spacing" aria-label="Contact and Inquiries">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-init">
          <div className="section-eyebrow">
            <MessageSquare size={12} />
            <span>LET'S WORK TOGETHER</span>
          </div>
          <h2 className="section-title">Start a Project or Hire Me</h2>
          <p className="section-desc">
            Have a product to build or need a software developer for your team? Send a message or download my resume below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left Column: Direct Info, Resume CTA & Experience Summary */}
          <div className="contact-info-col reveal-init delay-100">
            {/* Email Box */}
            <div className="contact-card-box">
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="contact-box-label">Direct Email</div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-box-val">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <button className="btn-ghost" onClick={handleCopyEmail} title="Copy email">
                {emailCopied ? <Check size={16} style={{ color: '#22C55E' }} /> : <Copy size={16} />}
              </button>
            </div>

            {/* Compact Resume CTA */}
            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '2px' }}>
                  <FileText size={15} />
                  <span>Curriculum Vitae</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                  Download Richard Dairo's Resume (PDF)
                </div>
              </div>

              <a
                href="/resume.pdf"
                download="Richard_Dairo_Resume.pdf"
                className="btn btn-secondary"
                onClick={() => {
                  setDownloaded(true);
                  setTimeout(() => setDownloaded(false), 2500);
                }}
                style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem', minHeight: '38px' }}
              >
                {downloaded ? <Check size={14} /> : <Download size={14} />}
                <span>{downloaded ? 'Downloaded' : 'Resume'}</span>
              </a>
            </div>

            {/* Compact Career Timeline Brief */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '1rem' }}>
                <History size={15} />
                <span>Experience Milestones</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {EXPERIENCE_TIMELINE.map((item) => (
                  <div key={item.id} style={{ borderLeft: '2px solid var(--glass-border-hover)', paddingLeft: '0.85rem' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text-main)' }}>{item.role}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{item.organization} • {item.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card reveal-init delay-200" style={{ padding: '2rem' }}>
            {isSuccess && (
              <div className="form-feedback-toast" role="status">
                <CheckCircle2 size={20} />
                <div>
                  <strong>Message Sent!</strong>
                  <div style={{ fontSize: '0.8rem' }}>Richard will get back to you shortly.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label htmlFor="contact-name" className="form-label">Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label htmlFor="contact-email" className="form-label">Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="alex@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label htmlFor="contact-message" className="form-label">Message *</label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="Tell me about your product requirements..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                disabled={isSubmitting}
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
