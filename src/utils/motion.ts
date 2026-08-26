import { Variants, Transition } from 'framer-motion';

// Smooth, luxury custom bezier curve (fast start, gradual deceleration)
export const MOTION_TRANSITION: Transition = {
  duration: 0.85,
  ease: [0.16, 1, 0.3, 1],
};

export const MOTION_VIEWPORT = {
  once: false,
  amount: 0.15,
};

// Section Container Variant with staggered children
export const sectionFadeVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
    },
  },
};

// Child item fade in variant
export const itemFadeVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Subtle card pop / scale variant for bento grids & cards
export const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Left to Right / Right to Left slide variants
export const slideInLeftVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const slideInRightVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
