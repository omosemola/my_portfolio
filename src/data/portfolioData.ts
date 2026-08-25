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
  mockupType: 'marketplace' | 'ecommerce' | 'mobile' | 'pastry';
  images?: string[];
  imageLabels?: string[];
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
  email: "rdairo175@gmail.com",
  github: "https://github.com/omosemola",
  twitter: "https://x.com/richarddairo",
  resumeUrl: "/resume.pdf",
};

export const STATS = [
  { value: "5+ Years", label: "Engineering Journey", desc: "Software dev & frontend engineering since 2021" },
  { value: "100%", label: "Type-Safe & Scalable", desc: "TypeScript, Supabase & clean architectures" },
  { value: "Full Stack", label: "End-to-End Delivery", desc: "UI, DB, Authentication & Payment Gateways" },
  { value: "0ms", label: "Zero Compromise UX", desc: "Fast, accessible, and responsive across devices" },
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
      { name: "Vanilla CSS", level: "Expert", iconName: "Layout", practicalNote: "CSS Grid, Flexbox layouts, CSS variables, and modern keyframe animations", tag: "Core" },
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
    title: "Lightson Marketplace",
    tagline: "Multi-vendor campus commerce connecting student buyers with food vendors, groceries, and trusted campus merchants.",
    description: "A full-stack marketplace web application built for campus ecosystems featuring authenticated vendor storefronts, categorized discovery with instant search, interactive carts, merchant partner onboarding, real-time dispatch tracking, and automated Paystack payment settlements.",
    category: "Marketplace",
    featured: true,
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Paystack", "Row Level Security", "Vercel"],
    githubUrl: "https://github.com/omosemola/light",
    liveUrl: "https://lightsonmarketplace.com",
    mockupType: "marketplace",
    images: [
      "/projects/marketplace-1.png",
      "/projects/marketplace-2.png",
      "/projects/marketplace-3.png"
    ],
    imageLabels: [
      "Student Onboarding & Study Essentials",
      "Customer Storefront & Food Ordering",
      "Merchant Partner Portal & POS Terminal"
    ],
    caseStudy: {
      overview: "Lightson Marketplace bridges the gap between student entrepreneurs, campus kitchens, and the campus student body. Students frequently trade meals, groceries, gadgets, and services through fragmented social chat groups without payment protection or catalog search. This platform delivers a complete authenticated commerce and delivery ecosystem.",
      problem: "Trading within university communities was fragmented across WhatsApp groups, high risk of unverified cash transactions, lack of order visibility, zero catalog search capability, and no streamlined payout tracking for student vendors.",
      solution: "Engineered a production-ready marketplace platform featuring verified student & merchant storefronts, instant food & grocery catalog discovery, smart cart system, merchant partner onboarding portal, live dispatch tracking, and secure Paystack settlement webhooks.",
      keyFeatures: [
        { title: "Customer Storefront & Fast Ordering", desc: "Browse hot meals, snacks, groceries, stationery, and tech gadgets with instant keyword filtering." },
        { title: "Merchant Partner Portal & POS", desc: "Automated onboarding for campus stores with stock management, order alerts, and merchant terminals." },
        { title: "Student Deals & Live Tracking", desc: "Real-time dispatch tracking with rewards and automated order progress updates." },
        { title: "Escrow Payment & Split Payouts", desc: "Integrated Paystack multi-split checkout with serverless webhooks for automated vendor disbursements." },
        { title: "Role-Based Auth & PostgreSQL RLS", desc: "Supabase authentication with Row-Level Security ensuring strict isolation between customer carts and merchant stores." }
      ],
      architecture: [
        "Frontend: React + TypeScript with modular components, responsive glassmorphism UI, and zero layout shifts",
        "Backend: Supabase with PostgreSQL database, Row-Level Security policies, and realtime subscription events",
        "Auth: Supabase Auth supporting student authentication and Google OAuth single sign-on",
        "Payments: Paystack API with verified webhook handlers for idempotent order capture and multi-split settlements",
        "Hosting: Vercel Edge Network with global asset optimization"
      ],
      challenges: "Handling multi-vendor cart checkout where students order from different kitchens or vendors in a single session, requiring atomic database transactions and distinct webhook notification channels.",
      outcome: "Shipped a full-stack campus commerce engine empowering dozens of student businesses, speeding up daily dorm food delivery, and safeguarding transactions.",
      stats: [
        { label: "Architecture", value: "Multi-Vendor Hub" },
        { label: "Data Security", value: "100% RLS Protected" },
        { label: "Payment Gateway", value: "Paystack Multi-Split" },
      ]
    }
  },
  {
    id: "ecommerce-store",
    title: "Frankie Styles — Luxury E-Commerce Atelier",
    tagline: "Bespoke fashion storefront with dynamic category filtering, custom measurement sizing, and Paystack checkout.",
    description: "A luxury digital storefront engineered for Frankie Styles, a high-end menswear and traditional couture atelier. Features dynamic collection browsing, multi-category filtering (Agbadas, Kaftans, Dry Lace, Jalabiya, Isi Agu), custom sizing specifications, persistent cart bag, and Paystack payment gateway integration.",
    category: "E-Commerce",
    featured: false,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Paystack", "PostgreSQL", "REST APIs", "Vercel"],
    githubUrl: "https://github.com/omosemola/frankiestyles",
    liveUrl: "https://frankiestylesng.com",
    mockupType: "ecommerce",
    images: [
      "/projects/ecommerce-1.png",
      "/projects/ecommerce-2.png",
      "/projects/ecommerce-3.png",
      "/projects/ecommerce-4.png"
    ],
    imageLabels: [
      "Bespoke Couture Atelier Hero & Brand Story",
      "The Catalogue & Category Filtering Engine",
      "New Arrivals Luxury Kaftan Collection Grid",
      "Interactive Product Detail, Custom Sizing & Bag"
    ],
    caseStudy: {
      overview: "Frankie Styles is an exclusive luxury fashion and menswear atelier specializing in masterfully structured Agbadas, refined Kaftans, Dry Lace, and bespoke African couture. The e-commerce platform was engineered to reflect the brand's haute couture identity with fast browsing, custom tailoring measurements, and seamless checkout.",
      problem: "High-end fashion brands often struggle with generic template stores that fail to convey couture prestige, lack proper custom measurement size workflows for bespoke attire, and suffer from sluggish catalog loading speeds.",
      solution: "Engineered a bespoke, high-performance luxury storefront featuring curated editorial galleries, multi-category taxonomy (Agbadas, Kaftans, Dry Lace, Jalabiya, Isi Agu), interactive size and custom-measure selectors, persistent cart bag, and direct Paystack payment verification.",
      keyFeatures: [
        { title: "Curated Luxury Catalog", desc: "Browse high-resolution editorial collections with dynamic category and two-piece set filters." },
        { title: "Bespoke Sizing & Custom Measure", desc: "Interactive size selection covering standard chest sizing through to custom tailor measurements." },
        { title: "Instant Add to Bag & Persistent Cart", desc: "Frictionless slide-out shopping bag with real-time currency calculation and local storage recovery." },
        { title: "Paystack Payment Gateway", desc: "Direct card, bank transfer, and USSD payment processing with automated order confirmation." },
        { title: "Editorial Lookbook & Fitting Booking", desc: "Integrated booking funnel for private atelier fitting sessions and custom couture appointments." }
      ],
      architecture: [
        "Frontend: React + TypeScript with luxury editorial typography and responsive glassmorphism UI",
        "State Management: React Context with persistent shopping bag state",
        "Payments: Paystack API with serverless transaction verification",
        "Hosting: Vercel Edge Network with global CDN image delivery"
      ],
      challenges: "Delivering crisp, ultra-high-resolution apparel photography with instant load times while supporting custom multi-parameter sizing specifications for bespoke orders.",
      outcome: "Launched a prestigious luxury storefront with sub-second page transitions, increasing order volume and international customer inquiries.",
      stats: [
        { label: "Catalog Speed", value: "< 1.0s FCP" },
        { label: "Checkout Engine", value: "Paystack Verified" },
        { label: "Design Style", value: "Luxury Atelier" },
      ]
    }
  },
  {
    id: "rent9ja",
    title: "Rent9ja — Smart Property & Apartment Rental Mobile App",
    tagline: "Cross-platform mobile application connecting tenants with verified rental apartments, instant inspection scheduling, and secure escrow rent payments.",
    description: "A cross-platform mobile application engineered with Flutter and Dart for iOS and Android, dedicated to streamlining apartment rentals across Nigerian urban centers. Features verified property feeds, interactive neighborhood filters, biometric tenant authentication, push notifications for inspection bookings, offline-first caching, digital tenancy agreements, and secure Paystack payment gateway integration.",
    category: "Mobile App",
    featured: false,
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Paystack", "REST APIs", "Codemagic", "Git"],
    githubUrl: "https://github.com/omosemola/rent9ja",
    liveUrl: "https://github.com/omosemola/rent9ja#readme",
    mockupType: "mobile",
    caseStudy: {
      overview: "Rent9ja is a native-feel mobile application designed to modernize urban apartment search, tenant-landlord communication, and lease payments across Nigeria. By providing direct access to verified listings with offline caching and mobile push alerts, Rent9ja eliminates unauthorized agents and secures tenant caution deposits in escrow.",
      problem: "Searching for rental apartments on mobile web or through fragmented social chat groups is inefficient, high risk for rental fraud, and lacks real-time mobile push notifications for inspection availability and payment confirmations.",
      solution: "Developed a high-performance cross-platform mobile app featuring GPS-enabled neighborhood search, offline listing caching, direct landlord in-app chat, instant inspection calendar scheduling, and biometric-secured Paystack escrow checkout.",
      keyFeatures: [
        { title: "Verified Listings & GPS Search", desc: "Browse high-resolution photo tours of apartments, studio flats, and duplexes with nearby amenities and verified landlord badges." },
        { title: "In-App Inspection Scheduling", desc: "Select physical or virtual inspection time slots with automatic calendar sync and push notification reminders." },
        { title: "Secure Paystack Escrow Checkout", desc: "Mobile-optimized card and bank transfer checkout holding rental deposits securely until inspection confirmation." },
        { title: "Direct In-App Chat & Offers", desc: "Real-time chat enabling tenants to negotiate tenancy terms directly with verified property managers." },
        { title: "Offline-First Data Caching", desc: "Local SQLite database caching allowing saved property records and leases to be viewed without active mobile data." }
      ],
      architecture: [
        "Framework: Flutter SDK (Dart) with Clean Architecture and Provider / Riverpod state management",
        "Backend: Supabase with PostgreSQL database, Row-Level Security policies for tenant and landlord data isolation",
        "Auth: Biometric login (FaceID / Fingerprint) and Supabase JWT authentication",
        "Payments: Paystack Mobile SDK & serverless webhooks for escrow payment capture",
        "CI/CD: Automated build & APK/IPA release pipeline configured with Codemagic"
      ],
      challenges: "Ensuring seamless offline-to-online synchronization for chat messages and inspection bookings in areas with fluctuating mobile cellular connectivity.",
      outcome: "Engineered a fluid, high-conversion mobile app that simplifies apartment hunting, protects tenant security deposits, and automates rent collections.",
      stats: [
        { label: "Platforms", value: "iOS & Android" },
        { label: "Architecture", value: "Clean Architecture" },
        { label: "Payment Engine", value: "Paystack Escrow" },
      ]
    }
  },
  {
    id: "pastry-home",
    title: "Pastry Home by Layo — Confectionery & Ordering Platform",
    tagline: "Gourmet bakery storefront with dynamic cart, location-based delivery calculation, and frictionless checkout.",
    description: "A fast, appetizing digital bakery and pastry ordering web application engineered for Pastry Home by Layo. Features fresh oven pastry catalogs (Small Chops, Custom Cakes, Banana Breads, Meat Pies, Chin Chin), persistent cart state, dynamic location-based delivery fee calculations, WhatsApp instant ordering, and seamless Paystack checkout.",
    category: "E-Commerce",
    featured: false,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Paystack", "REST APIs", "Vercel"],
    githubUrl: "https://github.com/omosemola/pastryhomebylayo",
    liveUrl: "https://pastryhomebylayo.shop",
    mockupType: "pastry",
    images: [
      "/projects/pastry-1.png",
      "/projects/pastry-2.png",
      "/projects/pastry-3.png"
    ],
    imageLabels: [
      "Artisanal Bakery Hero & Instant Ordering",
      "Fresh From The Oven Pastry Catalog",
      "Dynamic Delivery Calculation & Fast Checkout"
    ],
    caseStudy: {
      overview: "Pastry Home by Layo is a boutique artisanal bakery renowned for gourmet pastries, celebratory cakes, small chops, and fresh-baked confectioneries. The platform was built to transition direct social media order intake into a high-conversion, automated digital ordering storefront.",
      problem: "Handling high-volume daily bakery and catering orders over instant messaging led to order mix-ups, delayed delivery fee calculations for different regional zones, and friction during peak order hours.",
      solution: "Engineered a responsive, mouth-watering e-commerce storefront with categorized menu browsing, real-time cart persistence, automatic regional delivery fee calculation (e.g. Lekki, Magboro, Mainland), WhatsApp order dispatch, and direct Paystack payment verification.",
      keyFeatures: [
        { title: "Fresh From The Oven Catalog", desc: "Showcases artisanal cakes, small chops boxes, cheese steaks, and banana breads with instant price tags." },
        { title: "Location-Based Delivery Engine", desc: "Dynamic shipping fee calculator mapping specific delivery zones across Lagos and Ogun states." },
        { title: "Real-Time Cart Drawer", desc: "Persistent shopping cart preserving item selections, quantities, and subtotal computations." },
        { title: "Dual Checkout Channels", desc: "Frictionless card/transfer checkout via Paystack alongside direct WhatsApp order confirmation." },
        { title: "Mobile-First Ordering UI", desc: "Optimized for one-thumb mobile browsing and rapid checkout completion in under 60 seconds." }
      ],
      architecture: [
        "Frontend: React + TypeScript with responsive glassmorphic UI and fast image delivery",
        "State Management: Custom React hooks with persistent localStorage synchronization",
        "Payments: Paystack checkout integration with serverless transaction verification",
        "Hosting: Vercel Edge Network with high-availability asset caching"
      ],
      challenges: "Implementing dynamic zonal delivery fee calculations based on customer neighborhood selection while maintaining instant single-page checkout responsiveness.",
      outcome: "Streamlined daily bakery operations, reduced order processing time by 75%, and unlocked a seamless online shopping experience for pastry lovers.",
      stats: [
        { label: "Order Velocity", value: "< 60s Checkout" },
        { label: "Delivery Logic", value: "Zone-Based Dynamic" },
        { label: "Conversion", value: "Paystack + WhatsApp" },
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
    role: "Full-Stack Product Engineer & Atelier Builder",
    organization: "Independent Products & Client Platforms",
    location: "Remote",
    badge: "Current",
    description: "Architecting and shipping production web applications, multi-vendor marketplace engines, and bespoke luxury e-commerce platforms.",
    highlights: [
      "Engineered Lightson Marketplace with Supabase, PostgreSQL, and Paystack split-payment settlements.",
      "Shipped Frankie Styles luxury couture atelier with dynamic category taxonomies and custom sizing selectors.",
      "Integrated Row Level Security policies, token authentication, and serverless webhook pipelines.",
      "Maintained automated CI/CD deployments across Vercel and Netlify with zero layout shifts."
    ],
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Paystack", "Flutter", "Vercel"]
  },
  {
    id: "exp-2",
    period: "2022 — 2024",
    role: "Frontend Engineer & Web App Developer",
    organization: "Digital Product Initiatives",
    location: "Remote",
    badge: "Milestone",
    description: "Constructed high-performance web applications, interactive checkout flows, and cross-platform mobile apps with Flutter.",
    highlights: [
      "Built modern e-commerce storefronts with persistent carts and Paystack gateway integrations.",
      "Engineered cross-platform mobile apps with Flutter, integrating REST endpoints and offline state caching.",
      "Designed reusable glassmorphism UI components and scalable design token systems.",
      "Achieved 98+ Lighthouse scores across mobile and desktop web audits."
    ],
    techStack: ["React", "TypeScript", "JavaScript (ES6+)", "Flutter", "REST APIs", "Git", "Tailwind CSS"]
  },
  {
    id: "exp-3",
    period: "2021 — 2022",
    role: "Frontend Developer & UI Engineer",
    organization: "Web Development & Frontend Inception",
    location: "Remote",
    badge: "Inception",
    description: "Commenced software development and frontend engineering journey, building responsive web layouts, interactive dashboards, and client-side logic.",
    highlights: [
      "Mastered modern JavaScript (ES6+), React component lifecycles, and asynchronous API integrations.",
      "Developed responsive, accessible web interfaces utilizing semantic HTML5 and modern CSS3 Grid/Flexbox.",
      "Established foundational mastery of Git version control, branching workflows, and clean code principles."
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "React", "Git", "REST APIs"]
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
