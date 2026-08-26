import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame, PanInfo } from 'framer-motion';
import {
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  VanillaCssIcon,
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
  { id: 'vanillacss', name: 'Vanilla CSS & Modern Layouts', icon: <VanillaCssIcon size={58} /> },
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
  // Triple array for seamless, infinite wrap during drag & auto-scroll
  const marqueeItems = [...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS];
  
  const trackRef = useRef<HTMLDivElement | null>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const singleSetWidthRef = useRef(0);

  // Measure single loop width for infinite wrap
  useEffect(() => {
    const calculateWidth = () => {
      if (trackRef.current) {
        singleSetWidthRef.current = trackRef.current.scrollWidth / 3;
      }
    };

    calculateWidth();
    // Re-measure on resize or font load
    const timer = setTimeout(calculateWidth, 150);
    window.addEventListener('resize', calculateWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateWidth);
    };
  }, []);

  // Smooth continuous auto-gliding with dynamic physics
  useAnimationFrame((_, delta) => {
    const singleWidth = singleSetWidthRef.current;
    if (singleWidth <= 0) return;

    if (!isDragging) {
      // Gentle auto-glide (slows down when hovered)
      const speed = isHovered ? 16 : 40; // px/sec
      const moveBy = (speed * delta) / 1000;
      let nextX = x.get() - moveBy;

      // Wrap seamlessly
      if (nextX <= -singleWidth) {
        nextX += singleWidth;
      } else if (nextX > 0) {
        nextX -= singleWidth;
      }

      x.set(nextX);
    } else {
      // While dragging, keep wrapping seamlessly
      const currentX = x.get();
      if (currentX <= -singleWidth * 2) {
        x.set(currentX + singleWidth);
      } else if (currentX >= 0) {
        x.set(currentX - singleWidth);
      }
    }
  });

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const singleWidth = singleSetWidthRef.current;
    if (singleWidth <= 0) return;

    // Apply smooth inertia boost on swipe release
    let newX = x.get() + info.velocity.x * 0.12;
    if (newX <= -singleWidth) {
      newX += singleWidth;
    } else if (newX > 0) {
      newX -= singleWidth;
    }
    x.set(newX);
  };

  return (
    <div 
      className="tech-marquee-container" 
      aria-label="Technology Stack Display Board"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label && (
        <div className="tech-marquee-header">
          <span className="tech-marquee-label">{label}</span>
          <span className="tech-marquee-hint">✦ DRAG & SWIPE</span>
        </div>
      )}
      
      <div className="tech-marquee-track-wrapper">
        <motion.div
          ref={trackRef}
          className={`tech-marquee-track ${isDragging ? 'is-dragging' : ''}`}
          style={{ x }}
          drag="x"
          dragElastic={0.06}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default TechMarquee;
