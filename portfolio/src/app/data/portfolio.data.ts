export interface NavLink {
  label: string;
  href: string;
}

export type SkillCategoryIcon = 'frontend' | 'backend' | 'integration';

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: SkillCategoryIcon;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  featured?: boolean;
  image?: string;
  images?: ProjectImage[];
  highlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

export const portfolio = {
  name: 'Muhammad Shahroz Amir',
  shortName: 'Shahroz',
  title: 'Front-End Developer',
  subtitle: 'UI-Focused Software Engineer',
  tagline:
    'I build polished, responsive interfaces with Angular — and wire them up to real backends through clean API integrations.',
  summary:
    'UI-focused Frontend Developer who crafts clean, responsive, and user-friendly web applications with Angular — and connects them to production systems through REST API integrations, authentication flows, and data-driven features. Experienced in building reusable components, scalable frontend architecture, and maintainable, high-performance apps. Passionate about sharp UI/UX, solid integrations, problem-solving, and turning ideas into production-ready features while collaborating effectively within teams.',
  location: 'Multan, Pakistan',
  email: 'shahrozamir033@gmail.com',
  phone: '0323-6220437',
  resumeUrl: '/Shahroz-Resume.pdf',
  profileImageUrl: '/profile.jpg',
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ] as NavLink[],
  skillCategories: [
    {
      title: 'Frontend',
      subtitle: 'Interfaces users love',
      icon: 'frontend',
      skills: [
        'Angular 16+',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'SCSS',
        'Tailwind CSS',
        'PrimeNG',
        'Angular Material',
      ],
    },
    {
      title: 'Backend',
      subtitle: 'APIs & server logic',
      icon: 'backend',
      skills: ['Node.js', 'NestJS', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Integration & Tools',
      subtitle: 'Connect, test & ship',
      icon: 'integration',
      skills: [
        'REST API Integration',
        'Authentication Flows',
        'Postman',
        'Git',
        'GitHub',
        'Responsive Design',
        'Deployment',
      ],
    },
  ] as SkillCategory[],
  experience: [
    {
      role: 'Front-End Developer',
      company: 'Technovez',
      location: 'Multan',
      period: 'Aug 2024 – Present',
      highlights: [
        'Building reusable UI components and integrating REST APIs.',
        'Collaborating with teams to deliver production-ready applications.',
        'Working on large-scale business and management platforms.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Technovez',
      location: 'Multan',
      period: 'Mar 2024 – Jul 2024',
      highlights: [
        'Assisted in frontend development, debugging, and feature implementation.',
        'Gained hands-on experience with Angular workflows and Git.',
      ],
    },
  ] as Experience[],
  projects: [
    {
      title: 'WalletWise',
      description:
        'Production-ready personal finance web app for tracking spending, managing budgets, hitting savings goals, and understanding money through interactive reports — built as a mobile-first PWA with a NestJS REST API and Supabase data layer, deployed on Netlify and Render.',
      tags: ['Angular 21', 'NestJS', 'Supabase', 'Tailwind CSS', 'Chart.js', 'PWA', 'JWT'],
      gradient: 'from-blue-500/20 to-teal-500/5',
      featured: true,
      liveUrl: 'https://yourwalletwise.netlify.app',
      image: '/projects/walletwise/walletwise-hero.png',
      images: [
        {
          src: '/projects/walletwise/walletwise-hero.png',
          alt: 'WalletWise dashboard on laptop and mobile — Personal Finance PWA',
        },
        {
          src: '/projects/walletwise/walletwise-mobile-views.png',
          alt: 'WalletWise login, dashboard, and transactions on mobile',
        },
        {
          src: '/projects/walletwise/walletwise-architecture.png',
          alt: 'WalletWise full-stack architecture with Angular, NestJS, and Supabase',
        },
      ],
      highlights: [
        'Responsive PWA dashboard with live balance, Chart.js spending analytics, and recent transactions',
        'Full transaction management — CRUD, date/type filters, search, receipts, and mobile quick-add',
        'Savings goals with progress tracking and fund contributions linked to expenses',
        'Monthly reports with income vs expense charts, category breakdown, and CSV export',
        'JWT authentication, password reset, profile & avatar settings, custom categories, and budget limits',
        'Super Admin panel for user management, account status control, and usage stats',
        'Dark/light theme with persisted preference, bottom nav, and installable Add to Home Screen PWA',
        'NestJS REST API with Swagger docs, Supabase PostgreSQL + storage, and production CORS/env setup',
      ],
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-featured online store with product catalog, cart management, and checkout flows — UI built in Angular with REST API integrations powering catalog, cart, and orders.',
      tags: ['Angular', 'REST API', 'UI + Integrations'],
      gradient: 'from-sky-500/20 to-cyan-500/5',
    },
    {
      title: 'Social Media Web App',
      description:
        'Modern social-style application with feeds, profiles, and interactive UI — integrated with backend services for auth, user data, and content delivery.',
      tags: ['Angular', 'API Integration', 'Authentication'],
      gradient: 'from-violet-500/20 to-purple-500/5',
    },
    {
      title: 'Admin Dashboard Suite',
      description:
        'Enterprise admin panels with data tables, charts, and role-based access — rich UI with PrimeNG and Angular Material, backed by API-driven data and permissions.',
      tags: ['PrimeNG', 'Angular Material', 'REST APIs'],
      gradient: 'from-amber-500/20 to-orange-500/5',
    },
    {
      title: 'Business Management Platform',
      description:
        'Large-scale management system with modular components, API integrations, and production-ready workflows.',
      tags: ['Angular', 'NestJS', 'REST APIs'],
      gradient: 'from-emerald-500/20 to-teal-500/5',
    },
  ] as Project[],
  education: [
    {
      degree: 'BS Software Engineering',
      institution: 'NFC-IET, Multan',
      period: '2022 – 2026',
    },
  ] as Education[],
  languages: ['English (Fluent)', 'Urdu (Native)', 'Hindi (Fluent)'],
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/DevShahroz',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/m-shahroz-amir',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:shahrozamir033@gmail.com',
      icon: 'email',
    },
  ] as SocialLink[],
};
