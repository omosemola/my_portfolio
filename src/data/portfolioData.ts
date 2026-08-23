export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Marketplace' | 'E-Commerce' | 'Mobile App' | 'Full-Stack';
  featured: boolean;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  mockupType: 'marketplace' | 'ecommerce' | 'mobile';
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    keyFeatures: { title: string; desc: string }[];
    architecture: string[];
    challenges: string;
    outcome: string;
    stats?: { label: string; value: string }[];
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    iconName: string;
    practicalNote: string;
    tag: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  badge: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const PERSONAL_INFO = {
  name: "Richard Dairo",
  role: "Software Developer & Digital Product Builder",
  eyebrow: "SOFTWARE DEVELOPER",
  heroHeading: "Building digital products that ",
  heroHighlight: "solve real problems.",
  heroSubtitle: "Software Developer & Digital Product Builder",
  heroParagraph: "I design and build modern web applications, marketplaces, and digital products with clean interfaces, reliable functionality, and scalable technologies — from the interface users see to the backend systems that make them work.",
  status: "Available for new projects & opportunities",
  location: "Remote / Global",
  email: "richarddairo.dev@gmail.com",
  github: "https://github.com/omosemola",
  linkedin: "https://linkedin.com/in/richarddairo",
  twitter: "https://x.com/richarddairo",
  resumeUrl: "/resume.pdf",
};

export const STATS = [
  { value: "3+", label: "Flagship Products Built", desc: "From conceptualization to live architecture" },
  { value: "100%", label: "Type-Safe & Scalable", desc: "TypeScript, Supabase & clean architectures" },
  { value: "Full Lifecycle", label: "End-to-End Delivery", desc: "UI, DB, Authentication & Payment Gateways" },
  { value: "0ms", label: "Zero Compromise on UX", desc: "Fast, accessible, and responsive across devices" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces with clean architecture.",
    skills: [
      { name: "React", level: "Advanced", iconName: "Atom", practicalNote: "Component hierarchies, custom hooks, and state management", tag: "Core" },
      { name: "TypeScript", level: "Advanced", iconName: "FileCode", practicalNote: "End-to-end type safety, interfaces, and strict tooling", tag: "Language" },
      { name: "JavaScript (ES6+)", level: "Advanced", iconName: "Code2", practicalNote: "Modern async/await patterns, DOM, and event handling", tag: "Language" },
      { name: "HTML5 & CSS3", level: "Expert", iconName: "Layout", practicalNote: "Semantic markup, CSS variables, Flexbox & Grid layouts", tag: "Design" },
      { name: "Flutter", level: "Proficient", iconName: "Smartphone", practicalNote: "Cross-platform mobile UI and client state management", tag: "Mobile" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Database",
    description: "Architecting reliable relational databases, secure APIs, and serverless logic.",
    skills: [
      { name: "Supabase", level: "Advanced", iconName: "Database", practicalNote: "Row Level Security, realtime subscriptions, and serverless functions", tag: "Backend" },
      { name: "PostgreSQL", level: "Advanced", iconName: "Server", practicalNote: "Relational schemas, foreign keys, indexing, and complex queries", tag: "Database" },
      { name: "REST APIs", level: "Advanced", iconName: "Network", practicalNote: "RESTful endpoint architecture, payloads, and error handling", tag: "API" },
    ],
  },
  {
    id: "payments",
    name: "Payments & Billing",
    description: "Integrating secure online transactions, webhooks, and multi-vendor settlements.",
    skills: [
      { name: "Paystack", level: "Advanced", iconName: "CreditCard", practicalNote: "Popup checkout, transaction verification, webhooks, and split payments", tag: "Fintech" },
      { name: "Flutterwave", level: "Proficient", iconName: "DollarSign", practicalNote: "Multi-currency checkout, card & transfer collections, webhook verification", tag: "Fintech" },
      { name: "Payment Webhooks", level: "Advanced", iconName: "Webhook", practicalNote: "Idempotent payment capture, signature verification, and order provisioning", tag: "Architecture" },
    ],
  },
  {
    id: "auth",
    name: "Authentication & Security",
    description: "Safeguarding user identities, session integrity, and granular access control.",
    skills: [
      { name: "Supabase Auth", level: "Advanced", iconName: "ShieldCheck", practicalNote: "Email/password, session tokens, JWTs, and multi-tenant isolation", tag: "Security" },
      { name: "Google OAuth", level: "Advanced", iconName: "KeyRound", practicalNote: "Social single sign-on flows, consent screens, and profile hydration", tag: "Auth" },
      { name: "Row Level Security", level: "Expert", iconName: "Lock", practicalNote: "Postgres policy enforcement directly in DB layer for data isolation", tag: "Security" },
    ],
  },
  {
    id: "devops",
    name: "Development & Deployment",
    description: "Automated delivery pipelines, version control, and production cloud hosting.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", iconName: "GitBranch", practicalNote: "Branching strategies, code reviews, and version tracking", tag: "VCS" },
      { name: "Vercel & Netlify", level: "Advanced", iconName: "Cloud", practicalNote: "Automated CD/CI deployment, edge routing, and environment config", tag: "Cloud" },
      { name: "Codemagic", level: "Proficient", iconName: "Cpu", practicalNote: "Automated Flutter build pipelines and test builds", tag: "CI/CD" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "campus-marketplace",
    title: "Campus Marketplace",
    tagline: "Multi-vendor campus commerce connecting student buyers with trusted student vendors.",
    description: "A full-stack marketplace platform built for university students to discover, buy, and sell products and services directly around their campus environment. Features vendor storefronts, real-time search, cart management, checkout with local payment gateways, and commission-based settlements.",
    category: "Marketplace",
    featured: true,
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Paystack", "Row Level Security", "Vercel"],
    githubUrl: "https://github.com/richarddairo/campus-marketplace",
    liveUrl: "https://campus-marketplace-demo.vercel.app",
    mockupType: "marketplace",
    caseStudy: {
      overview: "Campus Marketplace bridges the gap between student entrepreneurs and the campus student body. Students frequently trade textbooks, electronics, fashion items, and campus services through fragmented social chat groups without payment security or catalog search. This platform provides a centralized, authenticated marketplace.",
      problem: "Trading within universities was chaotic: fragmented WhatsApp group chats, high risk of unverified transactions, zero search capability, and no streamlined order fulfillment or payment tracking for student vendors.",
      solution: "Engineered a dedicated marketplace web application featuring authenticated vendor storefronts, categorized product discovery with instant text search, interactive cart system, secure escrow-style checkout with Paystack, and vendor analytics.",
      keyFeatures: [
        { title: "Vendor Storefronts & Catalog", desc: "Vendors can register, manage product inventories, set prices, and upload product media." },
        { title: "Smart Discovery & Search", desc: "Filter by campus zones, product categories, and price ranges with instant search." },
        { title: "Shopping Cart & Checkout", desc: "Multi-item cart with automated subtotal calculation and vendor-split checkout." },
        { title: "Payment Integration & Webhooks", desc: "Integrated Paystack popup and verified serverless webhooks to ensure idempotent order creation." },
        { title: "Role-Based Auth & RLS", desc: "PostgreSQL Row Level Security ensures vendors can only edit their own listings and view their orders." },
        { title: "Commission Architecture", desc: "Automated platform fee calculation on successful order settlement." }
      ],
      architecture: [
        "Frontend: React + TypeScript with responsive CSS and clean modular component architecture",
        "Backend: Supabase with PostgreSQL database, Row Level Security (RLS) policies",
        "Auth: Supabase Auth supporting student email verification and Google OAuth",
        "Payments: Paystack checkout integration with verified webhook handlers for order fulfillment",
        "Hosting: Vercel with edge-cached assets and custom domain configuration"
      ],
      challenges: "Handling multi-vendor transactions where a single student cart might contain items from multiple campus vendors, requiring atomic database transactions and distinct order notifications.",
      outcome: "Delivered a production-ready, highly responsive marketplace platform that simplifies campus trade, reduces transaction friction, and empowers student micro-businesses.",
      stats: [
        { label: "Architecture", value: "Multi-Vendor" },
        { label: "Data Security", value: "100% RLS Protected" },
        { label: "Payment Method", value: "Paystack Gateway" },
      ]
    }
  },
  {
    id: "ecommerce-store",
    title: "Modern E-Commerce Platform",
    tagline: "High-performance digital storefront with real-time cart, filtering, and seamless checkout.",
    description: "A fast, modern e-commerce web application engineered for smooth product browsing, multi-attribute filtering, cart persistence, responsive UI, and secure payment processing.",
    category: "E-Commerce",
    featured: false,
    technologies: ["React", "TypeScript", "PostgreSQL", "Paystack", "REST APIs", "CSS Modules", "Netlify"],
    githubUrl: "https://github.com/richarddairo/ecommerce-platform",
    liveUrl: "https://ecommerce-store-demo.netlify.app",
    mockupType: "ecommerce",
    caseStudy: {
      overview: "A sleek, conversion-focused online retail storefront designed to deliver instant page transitions, intuitive product filtering, and an optimized single-page checkout flow.",
      problem: "Many small brand e-commerce stores suffer from slow initial load times, clunky cart drawers, and non-responsive mobile checkout forms that hurt customer conversion rates.",
      solution: "Created an ultra-lightweight, SEO-optimized e-commerce storefront with client-side state caching, instant category filtering, slide-out cart drawer, and frictionless payment gateway integrations.",
      keyFeatures: [
        { title: "Interactive Product Catalog", desc: "Dynamic filtering by categories, tags, price sorting, and search." },
        { title: "Persistent Shopping Cart", desc: "Local state sync ensures shopping carts persist across page reloads and browser sessions." },
        { title: "Fast Checkout Flow", desc: "Streamlined address collection and card/bank transfer integration via Paystack." },
        { title: "Responsive Mobile Experience", desc: "Mobile-first UI tailored for single-thumb navigation and fast mobile checkouts." },
        { title: "SEO & OpenGraph Meta", desc: "Dynamic semantic tags and structured schema for rich search engine indexing." }
      ],
      architecture: [
        "Frontend: React + TypeScript with custom CSS design tokens for zero layout shifts",
        "State Management: React Context with local storage persistence",
        "Payments: Paystack API with callback validation",
        "Deployment: Netlify with automated continuous deployment from GitHub"
      ],
      challenges: "Maintaining fast first-contentful-paint (FCP) and smooth 60fps animations while dynamically loading high-resolution product imagery across mobile viewports.",
      outcome: "Built an e-commerce platform that loads in under 1 second, provides a frictionless shopping experience, and simplifies store administration.",
      stats: [
        { label: "Performance", value: "98+ Lighthouse" },
        { label: "Responsiveness", value: "Mobile First" },
        { label: "Checkout", value: "< 3 Steps" },
      ]
    }
  },
  {
    id: "flutter-mobile-app",
    title: "Cross-Platform Mobile Application",
    tagline: "Native-feel Flutter mobile app with offline-first data caching and clean REST architecture.",
    description: "A cross-platform mobile application engineered with Flutter, featuring custom UI components, robust client-side state management, REST API integration, and prepared for real-device testing via Codemagic CI/CD.",
    category: "Mobile App",
    featured: false,
    technologies: ["Flutter", "Dart", "REST APIs", "Supabase Auth", "Codemagic", "Git"],
    githubUrl: "https://github.com/richarddairo/flutter-mobile-app",
    liveUrl: "https://github.com/richarddairo/flutter-mobile-app#readme",
    mockupType: "mobile",
    caseStudy: {
      overview: "A cross-platform mobile application built to provide a fluid, native mobile experience across Android and iOS devices, with a focus on responsive UI, structured state management, and offline resilience.",
      problem: "Users needed a reliable on-the-go mobile tool that functioned gracefully even under fluctuating mobile network conditions, with quick response times and native mobile ergonomics.",
      solution: "Developed a Flutter application with declarative state management, local device storage caching, clean layered architecture (UI, Domain, Data), and automated build verification with Codemagic.",
      keyFeatures: [
        { title: "Smooth Native Gestures", desc: "Custom Flutter widgets designed for fluid scrolling and tactile touch feedback." },
        { title: "REST API Integration", desc: "Type-safe HTTP client with automatic serialization and structured error handling." },
        { title: "User Authentication", desc: "Secure token storage with automatic session refresh and biometric/password login." },
        { title: "Offline State Caching", desc: "Local database caching to allow users to access cached records without network connectivity." },
        { title: "CI/CD Pipeline", desc: "Configured Codemagic workflows for automated testing and APK/IPA build artifact generation." }
      ],
      architecture: [
        "Framework: Flutter SDK (Dart) with clean modular feature architecture",
        "State Management: Provider / Riverpod pattern for predictable reactive state",
        "Networking: Dio HTTP client with interceptors for authentication tokens",
        "CI/CD: Codemagic pipeline connected to GitHub repository"
      ],
      challenges: "Ensuring state synchronization between local device cache and remote REST endpoints when transitioning from offline mode back to an active network connection.",
      outcome: "Produced a polished, performant mobile codebase ready for real-device distribution, with clean separation of concerns and maintainable code.",
      stats: [
        { label: "Platforms", value: "Android & iOS" },
        { label: "Architecture", value: "Clean Architecture" },
        { label: "CI/CD", value: "Codemagic" },
      ]
    }
  }
];

export const SERVICES: Service[] = [
  {
    id: "web-apps",
    title: "Web Applications",
    shortDesc: "Modern, responsive, full-stack web applications built with clean architecture, fast interfaces, and reliable data backends.",
    iconName: "Globe",
    features: [
      "Custom React & TypeScript frontends",
      "Robust state management & clean components",
      "Responsive design across mobile, tablet & desktop",
      "Accessible, semantic HTML with fast load times"
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    shortDesc: "Conversion-focused digital storefronts with product catalogs, shopping carts, and seamless payment processing.",
    iconName: "ShoppingBag",
    features: [
      "Product catalogs with dynamic filters & search",
      "Interactive cart & checkout workflows",
      "Secure Paystack / Flutterwave integrations",
      "Order notifications & receipt generation"
    ]
  },
  {
    id: "marketplaces",
    title: "Marketplace Platforms",
    shortDesc: "Multi-vendor platforms connecting buyers and sellers with independent vendor dashboards and commission handling.",
    iconName: "Layers",
    features: [
      "Multi-vendor onboarding & storefronts",
      "Database-backed product listings & search",
      "Role-based access control & RLS security",
      "Commission-based transaction workflows"
    ]
  },
  {
    id: "apis-integrations",
    title: "APIs & Integrations",
    shortDesc: "Connecting external payment gateways, authentication providers, and third-party services into unified systems.",
    iconName: "Cpu",
    features: [
      "Payment gateway integration (Paystack / Flutterwave)",
      "Authentication systems & OAuth (Google, Supabase)",
      "Webhook listeners & background job processing",
      "Database modeling & schema optimization"
    ]
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    shortDesc: "Cross-platform mobile applications developed with Flutter for intuitive touch experiences on Android and iOS.",
    iconName: "Smartphone",
    features: [
      "Cross-platform Flutter / Dart development",
      "REST API integration & offline data caching",
      "Modern touch UI & smooth animations",
      "Codemagic CI/CD build configuration"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understanding Problem & Scope",
    description: "Deep dive into the core problem, target audience, business requirements, and essential user flows before writing any code.",
    deliverables: ["Requirement breakdown", "Feature prioritization", "System architecture sketch"]
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Structure & User Experience",
    description: "Map out the database schema, API contracts, component hierarchy, and responsive UI layouts for seamless usability.",
    deliverables: ["Relational DB Schema", "Component Wireframes", "Color & Typography Tokens"]
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Full-Stack Development",
    description: "Develop the frontend interfaces, configure the backend database, write security policies, and integrate third-party APIs.",
    deliverables: ["Type-safe frontend code", "Supabase DB & RLS", "Payment & Auth Integrations"]
  },
  {
    step: "04",
    title: "Test",
    subtitle: "Verification & Polish",
    description: "Rigorous testing across screen resolutions (320px to 4K), validating edge cases, form validations, payment flows, and performance.",
    deliverables: ["Cross-browser verification", "Lighthouse audit", "Payment sandbox testing"]
  },
  {
    step: "05",
    title: "Deploy",
    subtitle: "Production Launch",
    description: "Deploy to production cloud infrastructure (Vercel/Netlify), configure custom domains, SSL certificates, and live monitoring.",
    deliverables: ["Production live URL", "CI/CD automated pipeline", "Documentation & handoff"]
  }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2024 — Present",
    role: "Independent Full-Stack Developer & Product Builder",
    organization: "Self-Directed & Client Projects",
    location: "Remote",
    badge: "Current",
    description: "Architecting and shipping production web applications, multi-vendor marketplace systems, and custom e-commerce storefronts with modern stacks.",
    highlights: [
      "Engineered Campus Marketplace from conceptual design to full-stack implementation with Supabase, PostgreSQL, and Paystack.",
      "Integrated real-time authentication, Row Level Security policies, and secure multi-vendor payment settlement workflows.",
      "Developed responsive web and mobile application interfaces with TypeScript, React, and Flutter.",
      "Managed CI/CD deployment pipelines on Vercel, Netlify, and GitHub Actions with zero-downtime releases."
    ],
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Paystack", "Flutter", "Vercel"]
  },
  {
    id: "exp-2",
    period: "2023 — 2024",
    role: "Software Developer & Frontend Engineer",
    organization: "Digital Product Initiatives",
    location: "Remote",
    badge: "Milestone",
    description: "Focused on building interactive web interfaces, RESTful API integrations, responsive design systems, and mobile prototypes.",
    highlights: [
      "Built modern e-commerce product catalogs, cart engines, and checkout systems with clean state architecture.",
      "Developed cross-platform mobile apps with Flutter, integrating REST APIs and offline caching.",
      "Implemented OAuth authentication workflows and database schemas with relational data integrity.",
      "Optimized frontend performance, achieving 95+ scores on mobile web audits."
    ],
    techStack: ["JavaScript", "TypeScript", "React", "HTML5/CSS3", "REST APIs", "Git", "Flutter"]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Full-Stack Architecture",
    description: "Capable of designing complete systems from database schema to responsive frontend interfaces."
  },
  {
    title: "Marketplace & E-Commerce",
    description: "Experienced in multi-vendor platforms, product listings, cart systems, and checkout workflows."
  },
  {
    title: "Payment Systems Integration",
    description: "Hands-on implementation of Paystack & Flutterwave APIs with webhook verification and settlement logic."
  },
  {
    title: "Database & Security (RLS)",
    description: "PostgreSQL relational schemas with Row Level Security enforcing granular data isolation."
  },
  {
    title: "Mobile Development (Flutter)",
    description: "Cross-platform mobile applications with clean architecture and automated CI/CD builds."
  },
  {
    title: "Production Deployment",
    description: "Automated CD/CI workflows on Vercel and Netlify with custom domain DNS and SSL management."
  }
];
