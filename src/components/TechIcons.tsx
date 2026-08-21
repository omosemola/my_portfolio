import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const ReactIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 115.3 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(30 57.65 50)" stroke="currentColor" strokeWidth="6" />
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(90 57.65 50)" stroke="currentColor" strokeWidth="6" />
    <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="rotate(150 57.65 50)" stroke="currentColor" strokeWidth="6" />
    <circle cx="57.65" cy="50" r="10" fill="currentColor" />
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="100" height="100" rx="18" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="5" />
    <path d="M22 36H52M37 36V74" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    <path d="M56 68C59 72 65 75 72 75C80 75 85 71 85 64C85 55 74 52 68 49C60 45 57 41 57 35C57 28 63 23 72 23C78 23 83 26 86 29M68 49C76 52 87 56 87 65" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
  </svg>
);

export const NextJsIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="6" fill="currentColor" fillOpacity="0.08" />
    <path d="M36 30V70M36 30L72 70M64 30V50" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M26 44C30 30 40 26 50 30C44 38 46 44 54 48C62 52 68 56 66 70C62 84 52 88 42 84C48 76 46 70 38 66C30 62 24 58 26 44Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
    <path d="M52 24C55 15 62 12 68 15C64 20 65 24 70 27C75 30 79 32 78 41C75 50 68 53 62 50C66 45 65 41 60 38C55 35 51 33 52 24Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

export const FlutterIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M58 10L18 50L32 64L86 10H58Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
    <path d="M58 50L38 70L52 84L86 50H58Z" fill="currentColor" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
    <path d="M42 74L56 88H86L58 60L42 74Z" fill="currentColor" fillOpacity="0.6" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
  </svg>
);

export const NodeIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 12L85 32V72L50 92L15 72V32L50 12Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
    <path d="M50 12V52M85 72L50 52M15 72L50 52" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
  </svg>
);

export const PostgresIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 15C32 15 22 28 22 45C22 62 30 75 42 80C42 85 46 88 50 88C54 88 58 85 58 80C70 75 78 62 78 45C78 28 68 15 50 15Z" stroke="currentColor" strokeWidth="6" fill="currentColor" fillOpacity="0.1" />
    <path d="M38 40C38 35 44 32 50 32C56 32 62 35 62 40V55C62 60 56 63 50 63C44 63 38 60 38 55V40Z" stroke="currentColor" strokeWidth="5" />
    <path d="M32 52H22M68 52H78" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

export const SupabaseIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M56 12L18 58H50L44 88L82 42H50L56 12Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

export const PaystackIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="18" y="24" width="64" height="12" rx="6" fill="currentColor" />
    <rect x="18" y="44" width="46" height="12" rx="6" fill="currentColor" />
    <rect x="18" y="64" width="64" height="12" rx="6" fill="currentColor" />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M48 15L85 52L52 85L15 48L48 15Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
    <circle cx="48" cy="40" r="7" fill="currentColor" />
    <circle cx="65" cy="57" r="7" fill="currentColor" />
    <circle cx="48" cy="65" r="7" fill="currentColor" />
    <path d="M48 40V65M48 50L65 57" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="24" y="40" width="10" height="10" rx="2" fill="currentColor" />
    <rect x="37" y="40" width="10" height="10" rx="2" fill="currentColor" />
    <rect x="50" y="40" width="10" height="10" rx="2" fill="currentColor" />
    <rect x="37" y="27" width="10" height="10" rx="2" fill="currentColor" />
    <rect x="50" y="27" width="10" height="10" rx="2" fill="currentColor" />
    <rect x="50" y="14" width="10" height="10" rx="2" fill="currentColor" />
    <path d="M14 55C14 55 18 78 50 78C75 78 86 65 86 55C86 55 82 52 70 54C68 47 62 44 62 44C62 44 45 44 28 55H14Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

export const ShieldSecurityIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 14L80 26V50C80 70 65 84 50 88C35 84 20 70 20 50V26L50 14Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
    <path d="M38 50L46 58L62 42" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ApiIcon: React.FC<IconProps> = ({ size = 20, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="15" y="25" width="70" height="50" rx="10" stroke="currentColor" strokeWidth="6" fill="currentColor" fillOpacity="0.08" />
    <path d="M30 50H45M45 42V58M55 42L65 50L55 58M72 42V58" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
