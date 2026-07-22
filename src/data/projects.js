export const projects = [
  {
    id: 1,
    title: 'Arrow Line Master',
    category: 'Android',
    featured: true,
    image: '/images/projects/arrow-line-master.svg',
    description:
      'A polished Android puzzle game with progressive levels, daily challenges, haptic feedback, accessibility support and local progress saving.',
    challenge:
      'Design a scalable puzzle experience that feels simple for new users while supporting advanced levels and premium interactions.',
    solution:
      'Built a modular Jetpack Compose interface with reusable game components, saved progress, difficulty modes, animations and accessible feedback.',
    technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'DataStore', 'Animations'],
    links: { demo: '#contact', code: '' },
    privateProject: false,
  },
  {
    id: 2,
    title: 'ServoMart Enterprise App',
    category: 'Android',
    featured: true,
    image: '/images/projects/servomart.svg',
    description:
      'An enterprise mobile workflow for authentication, product discovery, ordering and integration with business systems.',
    challenge:
      'Connect customer-facing mobile workflows with secure authentication and established enterprise data processes.',
    solution:
      'Implemented API-connected screens, authentication flows, notifications and structured order handling while protecting confidential business data.',
    technologies: ['Android', 'Firebase', 'REST APIs', 'Retrofit', 'SQL Server', 'SAP'],
    links: { demo: '#contact', code: '' },
    privateProject: true,
  },
  {
    id: 3,
    title: 'Android Authentication Starter',
    category: 'Android',
    featured: false,
    image: '/images/projects/auth-starter.svg',
    description:
      'A reusable authentication foundation for Android apps with clear UI states and production-ready flow planning.',
    challenge:
      'Make common authentication requirements easy to understand, reuse and maintain across different applications.',
    solution:
      'Structured email, Google and OTP flows with state handling, validation, error messaging and session management patterns.',
    technologies: ['Kotlin', 'Compose', 'Firebase Auth', 'Google Sign-In', 'OTP'],
    links: { demo: '#contact', code: 'https://github.com/your-github-username' },
    privateProject: false,
  },
  {
    id: 4,
    title: 'REST API Explorer',
    category: 'Android',
    featured: false,
    image: '/images/projects/api-explorer.svg',
    description:
      'A demonstration app for clean API integration, loading states, errors, pagination and offline-aware UX.',
    challenge:
      'Present network-driven content reliably across slow connections and unexpected API responses.',
    solution:
      'Used a repository-style architecture with clear success, loading and failure states designed for maintainability.',
    technologies: ['Kotlin', 'Retrofit', 'Coroutines', 'MVVM', 'JSON'],
    links: { demo: '#contact', code: 'https://github.com/your-github-username' },
    privateProject: false,
  },
  {
    id: 5,
    title: 'Rafhad Technology Solutions',
    category: 'Web & Marketing',
    featured: true,
    image: '/images/projects/rafhad.svg',
    description:
      'A digital-services portfolio combining business websites, creative campaigns and online growth support.',
    challenge:
      'Present multiple digital services clearly without confusing the customer or weakening the primary offer.',
    solution:
      'Organized services into focused packages supported by concise copy, visual proof and direct calls to action.',
    technologies: ['WordPress', 'UI/UX', 'Meta Ads', 'Google Ads', 'Content'],
    links: { demo: '#contact', code: '' },
    privateProject: false,
  },
  {
    id: 6,
    title: 'Brand Campaign Collection',
    category: 'Creative',
    featured: false,
    image: '/images/projects/creative-campaigns.svg',
    description:
      'Selected social-media campaigns for automotive, food, retail and technology brands.',
    challenge:
      'Create consistent promotional visuals while adapting to different products, audiences and campaign goals.',
    solution:
      'Developed campaign systems using clear hierarchy, product-focused compositions and platform-ready formats.',
    technologies: ['Creative Direction', 'Canva', 'Photoshop', 'Copywriting', 'Social Media'],
    links: { demo: '#contact', code: '' },
    privateProject: false,
  },
]
