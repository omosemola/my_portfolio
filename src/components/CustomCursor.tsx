import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Direct mouse positions
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring for HUD telemetry badge
  const springBadge = { damping: 25, stiffness: 350, mass: 0.3 };
  const badgeX = useSpring(mouseX, springBadge);
  const badgeY = useSpring(mouseY, springBadge);

  useEffect(() => {
    // Only enable on desktop/laptop devices with fine pointer
    const isFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setIsEnabled(true);

    let throttleTimer: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Throttled coordinate display update for peak performance
      if (!throttleTimer) {
        throttleTimer = window.setTimeout(() => {
          setCoords({ x: e.clientX, y: e.clientY });
          throttleTimer = null;
        }, 35);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Detect hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], [role="tab"], .project-card-primary, .project-card-secondary, .metric-box, .skill-card-modern, .contact-card-box, .arch-tab-btn, .quick-chip, .filter-pill-btn, .theme-toggle-btn, .terminal-card'
      );

      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      if (throttleTimer) window.clearTimeout(throttleTimer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      {/* 1. Precision Crosshair Target Reticle */}
      <motion.div
        className={`dev-crosshair-reticle ${isHovered ? 'hovered' : ''}`}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicked ? 0.8 : isHovered ? 1.35 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      >
        {/* 4 Crosshair Arms */}
        <span className="crosshair-arm arm-top"></span>
        <span className="crosshair-arm arm-bottom"></span>
        <span className="crosshair-arm arm-left"></span>
        <span className="crosshair-arm arm-right"></span>
        <span className="crosshair-center-dot"></span>
      </motion.div>

      {/* 2. Floating Telemetry HUD Badge */}
      <motion.div
        className={`dev-hud-telemetry ${isHovered ? 'hovered' : ''}`}
        style={{
          x: badgeX,
          y: badgeY,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicked ? 0.9 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <span className="hud-coord">X:{coords.x} Y:{coords.y}</span>
        <span className="hud-separator">|</span>
        <span className="hud-status">
          {isHovered ? 'TARGET_ACTIVE' : 'SYS_OK'}
        </span>
      </motion.div>
    </div>
  );
};

export default CustomCursor;
