import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

// React - Official React Cyan (#61DAFB)
export const ReactIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 115.3 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(30 57.65 50)" stroke="#61DAFB" strokeWidth="5.5" />
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(90 57.65 50)" stroke="#61DAFB" strokeWidth="5.5" />
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(150 57.65 50)" stroke="#61DAFB" strokeWidth="5.5" />
    <circle cx="57.65" cy="50" r="9.5" fill="#61DAFB" />
  </svg>
);

// TypeScript - Official TS Blue (#3178C6) & White Letters
export const TypeScriptIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="18" fill="#3178C6" />
    <path d="M22 36H52M37 36V74" stroke="#FFFFFF" strokeWidth="7.5" strokeLinecap="round" />
    <path d="M56 68C59 72 65 75 72 75C80 75 85 71 85 64C85 55 74 52 68 49C60 45 57 41 57 35C57 28 63 23 72 23C78 23 83 26 86 29M68 49C76 52 87 56 87 65" stroke="#FFFFFF" strokeWidth="7.5" strokeLinecap="round" />
  </svg>
);

// JavaScript - Official JS Yellow (#F7DF1E) & Black JS Letters (#000000)
export const JavaScriptIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="18" fill="#F7DF1E" />
    <path d="M28 62C28 69 33 74 41 74C49 74 53 69 53 61V36M41 74C37 74 32 72 29 68" stroke="#000000" strokeWidth="8" strokeLinecap="round" />
    <path d="M60 68C63 72 69 74 76 74C84 74 89 70 89 63C89 54 78 51 72 48C64 44 61 40 61 34C61 27 67 22 76 22C82 22 87 25 90 28M72 48C80 51 91 55 91 64" stroke="#000000" strokeWidth="8" strokeLinecap="round" />
  </svg>
);

// Next.js - Official Monochrome / Dark Disc (#000000) with Stylized N (#FFFFFF)
export const NextJsIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="48" fill="#000000" stroke="#383838" strokeWidth="3" />
    <path d="M34 28V72" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
    <path d="M34 28L68 72" stroke="url(#nextGrad)" strokeWidth="7" strokeLinecap="round" />
    <path d="M66 28V50" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
    <defs>
      <linearGradient id="nextGrad" x1="34" y1="28" x2="68" y2="72" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.12" />
      </linearGradient>
    </defs>
  </svg>
);

// Tailwind CSS - Official Sky Cyan (#38BDF8)
export const TailwindIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M26 44C30 30 40 26 50 30C44 38 46 44 54 48C62 52 68 56 66 70C62 84 52 88 42 84C48 76 46 70 38 66C30 62 24 58 26 44Z" fill="#38BDF8" />
    <path d="M52 24C55 15 62 12 68 15C64 20 65 24 70 27C75 30 79 32 78 41C75 50 68 53 62 50C66 45 65 41 60 38C55 35 51 33 52 24Z" fill="#06B6D4" />
  </svg>
);

// Vanilla CSS / CSS3 - Official Shield Blue (#264DE4 & #2965F1)
export const VanillaCssIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18 10L24 78L50 90L76 78L82 10H18Z" fill="#264DE4" />
    <path d="M50 16V83.5L70.5 74L75.5 16H50Z" fill="#2965F1" />
    <path d="M32 28H68L66.5 40H33.5L34.5 52H65L63.5 68L50 72.5L36.5 68L35.5 59H26L28 76L50 83L72 76L74.5 22H25.5L32 28Z" fill="#FFFFFF" />
  </svg>
);

// Flutter - Official Multi-tone Flutter Blues (#54C5F8, #29B6F6, #01579B, #02569B)
export const FlutterIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M58 10L18 50L32 64L86 10H58Z" fill="#54C5F8" />
    <path d="M58 50L38 70L52 84L86 50H58Z" fill="#29B6F6" />
    <path d="M42 74L56 88H86L58 60L42 74Z" fill="#01579B" />
    <path d="M58 60L52 66L66 80L72 74L58 60Z" fill="#02569B" opacity="0.6" />
  </svg>
);

// Node.js - Official Node Green (#5FA04E & #68A063)
export const NodeIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 10L86 31V71L50 92L14 71V31L50 10Z" fill="#5FA04E" fillOpacity="0.18" stroke="#5FA04E" strokeWidth="6" strokeLinejoin="round" />
    <path d="M50 10V51M86 71L50 51M14 71L50 51" stroke="#5FA04E" strokeWidth="5.5" strokeLinejoin="round" />
    <circle cx="50" cy="51" r="5" fill="#68A063" />
  </svg>
);

// PostgreSQL - Official Elephant Blue (#336791)
export const PostgresIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 15C32 15 22 28 22 45C22 62 30 75 42 80C42 85 46 88 50 88C54 88 58 85 58 80C70 75 78 62 78 45C78 28 68 15 50 15Z" fill="#336791" fillOpacity="0.25" stroke="#336791" strokeWidth="6" />
    <path d="M38 40C38 35 44 32 50 32C56 32 62 35 62 40V55C62 60 56 63 50 63C44 63 38 60 38 55V40Z" fill="#FFFFFF" fillOpacity="0.2" stroke="#FFFFFF" strokeWidth="4.5" />
    <path d="M32 52H22M68 52H78" stroke="#336791" strokeWidth="6" strokeLinecap="round" />
    <circle cx="44" cy="43" r="3" fill="#FFFFFF" />
    <circle cx="56" cy="43" r="3" fill="#FFFFFF" />
  </svg>
);

// Supabase - Official Supabase Emerald Gradient (#3ECF8E to #24B47E)
export const SupabaseIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M56 12L18 58H50L44 88L82 42H50L56 12Z" fill="url(#supaGrad)" stroke="#3ECF8E" strokeWidth="3" strokeLinejoin="round" />
    <defs>
      <linearGradient id="supaGrad" x1="18" y1="12" x2="82" y2="88" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3ECF8E" />
        <stop offset="1" stopColor="#24B47E" />
      </linearGradient>
    </defs>
  </svg>
);

// Paystack - Official Paystack Cyan Bars (#00C3F7)
export const PaystackIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="18" y="24" width="64" height="12" rx="6" fill="#00C3F7" />
    <rect x="18" y="44" width="46" height="12" rx="6" fill="#00C3F7" />
    <rect x="18" y="64" width="64" height="12" rx="6" fill="#00C3F7" />
  </svg>
);

// Git - Official Git Coral Red/Orange (#F05032)
export const GitIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M48 15L85 52L52 85L15 48L48 15Z" fill="#F05032" stroke="#F05032" strokeWidth="3" strokeLinejoin="round" />
    <circle cx="48" cy="40" r="6" fill="#FFFFFF" />
    <circle cx="65" cy="57" r="6" fill="#FFFFFF" />
    <circle cx="48" cy="65" r="6" fill="#FFFFFF" />
    <path d="M48 40V65M48 50L65 57" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" />
  </svg>
);

// Docker - Official Docker Blue (#2496ED)
export const DockerIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="24" y="40" width="10" height="10" rx="2" fill="#2496ED" />
    <rect x="37" y="40" width="10" height="10" rx="2" fill="#2496ED" />
    <rect x="50" y="40" width="10" height="10" rx="2" fill="#2496ED" />
    <rect x="37" y="27" width="10" height="10" rx="2" fill="#2496ED" />
    <rect x="50" y="27" width="10" height="10" rx="2" fill="#2496ED" />
    <rect x="50" y="14" width="10" height="10" rx="2" fill="#2496ED" />
    <path d="M14 55C14 55 18 78 50 78C75 78 86 65 86 55C86 55 82 52 70 54C68 47 62 44 62 44C62 44 45 44 28 55H14Z" fill="#2496ED" stroke="#2496ED" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="75" cy="58" r="2.5" fill="#FFFFFF" />
  </svg>
);

// Security / RLS - Official Emerald Green Shield (#10B981)
export const ShieldSecurityIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 14L80 26V50C80 70 65 84 50 88C35 84 20 70 20 50V26L50 14Z" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="6" strokeLinejoin="round" />
    <path d="M38 50L46 58L62 42" stroke="#10B981" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// REST APIs & Webhooks - Official Violet/Indigo (#8B5CF6)
export const ApiIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="15" y="25" width="70" height="50" rx="10" stroke="#8B5CF6" strokeWidth="5" fill="#8B5CF6" fillOpacity="0.18" />
    <path d="M30 50H45M45 42V58M55 42L65 50L55 58M72 42V58" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
