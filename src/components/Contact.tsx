import React, { useState } from 'react';
import { MessageSquare, Mail, Send, Check, Copy, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  budget: string;
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
    projectType: 'Marketplace Platform',
    budget: '$1,000 - $3,000',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message about your project.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'Marketplace Platform',
        budget: '$1,000 - $3,000',
        message: '',
      });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 800);
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
            <MessageSquare size={13} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">Have a project in mind?</h2>
          <p className="section-desc">
            Let's turn your idea into something people can actually use. Reach out directly or fill out the project brief below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-col reveal-init delay-100">
            <div className="contact-card-box">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div style={{ flexGrow: 1 }}>
                <div className="contact-box-label">Direct Email</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="contact-box-val"
                  style={{ color: '#FFFFFF', wordBreak: 'break-all' }}
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <button
                className="btn-ghost"
                onClick={handleCopyEmail}
                title="Copy email address"
                aria-label="Copy email"
              >
                {emailCopied ? <Check size={16} style={{ color: '#FFFFFF' }} /> : <Copy size={16} />}
              </button>
            </div>

            <div className="glass-panel" style={{ padding: '2.25rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                Availability Status
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Currently available for selected freelance development contracts, marketplace builds, and full-stack product development.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#FFFFFF' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFFFFF', boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)' }}></span>
                  <span>Average response time: &lt; 24 hours</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#CBD5E1' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.4)' }}></span>
                  <span>Timezone: GMT / Flexible for global collaboration</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20from%20Portfolio`}
                className="btn btn-secondary"
                style={{ flexGrow: 1 }}
              >
                <Mail size={16} />
                <span>Open Mail Client</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card reveal-init delay-200">
            {isSuccess && (
              <div className="form-feedback-toast" role="status">
                <CheckCircle2 size={22} />
                <div>
                  <strong>Message Sent Successfully!</strong>
                  <div style={{ fontSize: '0.825rem', marginTop: '3px' }}>
                    Thank you for reaching out, Richard will get back to you shortly.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span style={{ color: '#FFFFFF' }}>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Email Address <span style={{ color: '#FFFFFF' }}>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="e.g. alex@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div className="form-group">
                  <label htmlFor="contact-project-type" className="form-label">
                    Project Type
                  </label>
                  <select
                    id="contact-project-type"
                    className="form-select"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    <option value="Marketplace Platform">Marketplace Platform</option>
                    <option value="E-Commerce Store">E-Commerce Store</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile Application">Mobile Application (Flutter)</option>
                    <option value="API / Payment Integration">API & Payment Integration</option>
                    <option value="Other Consultation">Other Consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-budget" className="form-label">
                    Approx. Scope / Budget
                  </label>
                  <select
                    id="contact-budget"
                    className="form-select"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="<$1,000">Small Scope (&lt; $1,000)</option>
                    <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                    <option value="$3,000 - $5,000">$3,000 – $5,000</option>
                    <option value="$5,000+">$5,000+</option>
                    <option value="Flexible">To be discussed</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Project Details <span style={{ color: '#FFFFFF' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about your product requirements, desired features, and timeline..."
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
                style={{ width: '100%', marginTop: '0.75rem' }}
                disabled={isSubmitting}
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Project Inquiry</span>
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
