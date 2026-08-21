import React from 'react';
import { Globe, ShoppingBag, Layers, Cpu, Smartphone, Check, Briefcase } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

const serviceIcons: Record<string, React.ElementType> = {
  Globe,
  ShoppingBag,
  Layers,
  Cpu,
  Smartphone,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="section-spacing" aria-label="Services and Capabilities">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-init">
          <div className="section-eyebrow">
            <Briefcase size={13} />
            <span>CAPABILITIES</span>
          </div>
          <h2 className="section-title">What I Can Build</h2>
          <p className="section-desc">
            End-to-end engineering services for startups, businesses, and entrepreneurs looking to ship functional digital products.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {SERVICES.map((service, idx) => {
            const IconComp = serviceIcons[service.iconName] || Globe;
            return (
              <div key={service.id} className={`service-card reveal-init delay-${(idx % 3 + 1) * 100}`}>
                <div>
                  <div className="service-icon-box">
                    <IconComp size={26} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.shortDesc}</p>
                </div>

                <ul className="service-features-list">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="service-feature-item">
                      <Check size={14} style={{ color: '#FFFFFF', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
