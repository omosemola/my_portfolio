import React from 'react';
import {
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  NextJsIcon,
  TailwindIcon,
  FlutterIcon,
  NodeIcon,
  PostgresIcon,
  SupabaseIcon,
  PaystackIcon,
  GitIcon,
  DockerIcon,
  ShieldSecurityIcon,
  ApiIcon
} from './TechIcons';

interface TechLogoItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const TECH_LOGOS: TechLogoItem[] = [
  { id: 'react', name: 'React 18 & Next.js', icon: <ReactIcon size={58} /> },
  { id: 'typescript', name: 'TypeScript', icon: <TypeScriptIcon size={58} /> },
  { id: 'javascript', name: 'JavaScript (ES6+)', icon: <JavaScriptIcon size={58} /> },
  { id: 'nextjs', name: 'Next.js', icon: <NextJsIcon size={58} /> },
  { id: 'tailwind', name: 'Tailwind CSS', icon: <TailwindIcon size={58} /> },
  { id: 'flutter', name: 'Flutter & Dart', icon: <FlutterIcon size={58} /> },
  { id: 'nodejs', name: 'Node.js & Express', icon: <NodeIcon size={58} /> },
  { id: 'postgres', name: 'PostgreSQL Relational DB', icon: <PostgresIcon size={58} /> },
  { id: 'supabase', name: 'Supabase Database & Auth', icon: <SupabaseIcon size={58} /> },
  { id: 'paystack', name: 'Paystack Payment Gateway', icon: <PaystackIcon size={58} /> },
  { id: 'docker', name: 'Docker Containers', icon: <DockerIcon size={58} /> },
  { id: 'git', name: 'Git & CI/CD Pipelines', icon: <GitIcon size={58} /> },
  { id: 'security', name: 'Security & RLS Policies', icon: <ShieldSecurityIcon size={58} /> },
  { id: 'api', name: 'RESTful APIs & Webhooks', icon: <ApiIcon size={58} /> },
];

export const TechMarquee: React.FC<{ label?: string }> = ({ label = 'PRODUCTION TECH STACK' }) => {
  // Duplicate array for a perfectly continuous seamless infinite loop
  const marqueeItems = [...TECH_LOGOS, ...TECH_LOGOS];

  return (
    <div className="tech-marquee-container" aria-label="Technology Stack Display Board">
      {label && (
        <div className="tech-marquee-header">
          <span className="tech-marquee-label">{label}</span>
        </div>
      )}
      
      <div className="tech-marquee-track-wrapper">
        <div className="tech-marquee-track">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="tech-marquee-item"
              title={item.name}
              aria-label={item.name}
            >
              <div className="tech-logo-glyph">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
