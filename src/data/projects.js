const whatsappLink = 'https://wa.me/923032972568'
const githubProfile = 'https://github.com/MohammadOsama786'

export const projects = [
  {
    id: 1,
    title: 'Arrow Line Master',
    category: 'Android',
    featured: true,
    image: '/images/projects/arrow-line-master.svg',
    description:
      'A polished Android puzzle game with progressive levels, difficulty modes, daily challenges, haptic feedback, achievements and local progress saving.',
    challenge:
      'Create a scalable puzzle game that remains simple for new users while supporting advanced levels and premium interactions.',
    solution:
      'Designed and developed reusable Jetpack Compose game components, saved progress, animations, accessibility support, daily rewards and state-driven gameplay.',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'MVVM',
      'DataStore',
      'Animations',
      'Android SDK',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 2,
    title: 'ServoMart Enterprise Application',
    category: 'Android',
    featured: true,
    image: '/images/projects/servomart.svg',
    description:
      'An enterprise Android application supporting authentication, customer accounts, product discovery, ordering, notifications and business-system integration.',
    challenge:
      'Connect customer-facing mobile workflows with authentication and established enterprise data processes.',
    solution:
      'Implemented API-connected screens, authentication flows, notifications and structured ordering functionality while protecting confidential company information.',
    technologies: [
      'Android',
      'Java',
      'Kotlin',
      'Firebase',
      'Retrofit',
      'REST APIs',
      'SQL Server',
      'SAP',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: true,
  },
  {
    id: 3,
    title: 'University Learning Management System',
    category: 'Web & Mobile',
    featured: true,
    image: '/images/projects/university-lms.svg',
    description:
      'My final-year project: a learning management system designed to connect students, teachers and administrators through one organized digital platform.',
    challenge:
      'Simplify course management, learning materials, announcements, assignments and communication for university users.',
    solution:
      'Designed role-based interfaces and structured learning workflows for students, instructors and administrators with a responsive user experience.',
    technologies: [
      'UI/UX',
      'Figma',
      'Authentication',
      'Database',
      'Course Management',
      'Responsive Design',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 4,
    title: 'Fruit Disease Detection App',
    category: 'AI & ML',
    featured: true,
    image: '/images/projects/fruit-disease-detection.svg',
    description:
      'A mobile application that analyzes fruit images and identifies possible diseases using machine-learning technology.',
    challenge:
      'Provide users with a simple method for capturing or uploading an image and receiving a disease-prediction result.',
    solution:
      'Combined an image-processing interface with Google ML Kit and TensorFlow-based classification planning.',
    technologies: [
      'Android',
      'Kotlin',
      'Google ML Kit',
      'TensorFlow',
      'Image Classification',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 5,
    title: 'Weather Forecast App',
    category: 'Android',
    featured: false,
    image: '/images/projects/weather-app.svg',
    description:
      'A weather application that displays current conditions and forecast information through a clean and responsive mobile interface.',
    challenge:
      'Present API-driven weather data clearly while handling loading, empty and error states.',
    solution:
      'Designed an organized dashboard for temperature, location, forecasts and weather details using reusable components.',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'REST API',
      'Retrofit',
      'Coroutines',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: githubProfile,
    },
    privateProject: false,
  },
  {
    id: 6,
    title: 'Duck Hunt Mobile Game',
    category: 'Games',
    featured: false,
    image: '/images/projects/duck-hunt.svg',
    description:
      'An interactive mobile shooting game inspired by classic arcade gameplay, with scoring, movement and touch-based interactions.',
    challenge:
      'Create responsive game controls, target movement and scoring while maintaining smooth performance.',
    solution:
      'Developed structured gameplay logic, touch interaction, score handling and reusable game-screen components.',
    technologies: [
      'Android',
      'Kotlin',
      'Game Logic',
      'Animations',
      'Touch Controls',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 7,
    title: 'Wallpaper Application',
    category: 'Android',
    featured: false,
    image: '/images/projects/wallpaper-app.svg',
    description:
      'A mobile wallpaper application for browsing, previewing, saving and applying high-quality wallpapers.',
    challenge:
      'Manage image-heavy content while providing fast navigation and a smooth browsing experience.',
    solution:
      'Designed category browsing, full-screen previews, favourites and download-related user flows.',
    technologies: [
      'Android',
      'Kotlin',
      'Firebase',
      'Image Loading',
      'Local Storage',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 8,
    title: 'Language Translator App',
    category: 'Android',
    featured: false,
    image: '/images/projects/translator-app.svg',
    description:
      'A translation application designed to translate text between multiple languages through a simple mobile interface.',
    challenge:
      'Create an easy language-selection and translation experience with clear input and output states.',
    solution:
      'Built language-selection, text-input, translated-output and copy-sharing user flows.',
    technologies: [
      'Kotlin',
      'Android',
      'Translation API',
      'REST API',
      'Material Design',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 9,
    title: 'Sketch & Drawing App',
    category: 'Android',
    featured: false,
    image: '/images/projects/sketch-app.svg',
    description:
      'A mobile drawing application with freehand sketching, colour selection, brush controls, undo and image-saving functionality.',
    challenge:
      'Support natural drawing interactions while keeping editing controls simple and accessible.',
    solution:
      'Created a canvas-based interface with touch drawing, configurable tools and document-saving flows.',
    technologies: [
      'Android',
      'Kotlin',
      'Canvas',
      'Touch Input',
      'Local Storage',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 10,
    title: 'WhatsApp Status Saver',
    category: 'Android',
    featured: false,
    image: '/images/projects/status-saver.svg',
    description:
      'A utility application for browsing and saving available WhatsApp image and video statuses to local storage.',
    challenge:
      'Organize media access, permissions and saving functionality in a simple interface.',
    solution:
      'Designed separate image and video sections with preview, save and sharing actions.',
    technologies: [
      'Android',
      'Kotlin',
      'Media Storage',
      'Permissions',
      'File Handling',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 11,
    title: 'Library Management App',
    category: 'Android',
    featured: false,
    image: '/images/projects/library-app.svg',
    description:
      'A library-management application for organizing books, members, borrowing records and return information.',
    challenge:
      'Make book and member records easy to search, update and manage.',
    solution:
      'Created structured screens for book listings, user records, issue-return workflows and administrative actions.',
    technologies: [
      'Android',
      'Kotlin',
      'Firebase',
      'Database',
      'CRUD',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 12,
    title: 'Student Hostel Finder',
    category: 'Academic',
    featured: false,
    image: '/images/projects/hostel-finder.svg',
    description:
      'A university project designed to help students discover suitable hostels based on location, facilities, pricing and availability.',
    challenge:
      'Centralize hostel information and make comparison easier for students moving to a new city.',
    solution:
      'Designed searchable listings, hostel details, filters, contact information and map-related user flows.',
    technologies: [
      'Mobile App',
      'Firebase',
      'Maps',
      'Search & Filters',
      'Figma',
      'UI/UX',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 13,
    title: 'Student Complaint Management App',
    category: 'Academic',
    featured: false,
    image: '/images/projects/student-complaint.svg',
    description:
      'A university project allowing students to submit complaints and track their progress through an organized digital workflow.',
    challenge:
      'Improve communication between students and university departments while maintaining complaint transparency.',
    solution:
      'Created complaint submission, category selection, status tracking and administrative response flows.',
    technologies: [
      'Android',
      'Firebase',
      'Authentication',
      'Database',
      'Notifications',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 14,
    title: 'PDF Utility Application',
    category: 'Android',
    featured: false,
    image: '/images/projects/pdf-app.svg',
    description:
      'A document utility application designed for viewing, organizing and working with PDF files on mobile devices.',
    challenge:
      'Make common PDF actions accessible through a clean and understandable mobile workflow.',
    solution:
      'Designed file browsing, PDF preview, document details, sharing and utility-action screens.',
    technologies: [
      'Android',
      'Kotlin',
      'PDF',
      'File Handling',
      'Storage Access',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 15,
    title: 'QR Code Scanner & Generator',
    category: 'Android',
    featured: false,
    image: '/images/projects/qr-scanner.svg',
    description:
      'A mobile utility application for scanning QR codes and generating new codes from text, links and contact information.',
    challenge:
      'Provide fast camera-based scanning with clear results and useful follow-up actions.',
    solution:
      'Designed scanning, permission handling, result display, history and QR-generation functionality.',
    technologies: [
      'Kotlin',
      'Android',
      'Camera',
      'ML Kit',
      'QR Code',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 16,
    title: 'React Native & TypeScript App Collection',
    category: 'Cross-Platform',
    featured: true,
    image: '/images/projects/react-native.svg',
    description:
      'A collection of cross-platform mobile interfaces, application concepts and interactive projects developed using React Native and TypeScript.',
    challenge:
      'Create reusable interfaces and application logic that work consistently across Android and iOS.',
    solution:
      'Used reusable TypeScript components, structured navigation, state handling and responsive UI patterns.',
    technologies: [
      'React Native',
      'TypeScript',
      'JavaScript',
      'Navigation',
      'REST APIs',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: githubProfile,
    },
    privateProject: false,
  },
  {
    id: 17,
    title: 'Flutter App & Game Collection',
    category: 'Cross-Platform',
    featured: true,
    image: '/images/projects/flutter-projects.svg',
    description:
      'A collection of mobile applications and game concepts developed using Flutter and Dart for cross-platform deployment.',
    challenge:
      'Maintain consistent designs, navigation and interactions across different mobile devices.',
    solution:
      'Built reusable widgets, responsive screens, navigation flows and state-driven interfaces.',
    technologies: [
      'Flutter',
      'Dart',
      'Cross-Platform',
      'Firebase',
      'Game UI',
      'Figma',
    ],
    links: {
      demo: whatsappLink,
      code: githubProfile,
    },
    privateProject: false,
  },
  {
    id: 18,
    title: 'Android Authentication Starter',
    category: 'Android',
    featured: false,
    image: '/images/projects/auth-starter.svg',
    description:
      'A reusable authentication foundation with email login, Google sign-in, OTP verification, validation and session handling.',
    challenge:
      'Make common authentication requirements reusable and easy to maintain.',
    solution:
      'Structured authentication flows with clear loading, success, validation and error states.',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Firebase Auth',
      'Google Sign-In',
      'OTP',
      'MVVM',
    ],
    links: {
      demo: whatsappLink,
      code: githubProfile,
    },
    privateProject: false,
  },
  {
    id: 19,
    title: 'REST API Explorer',
    category: 'Android',
    featured: false,
    image: '/images/projects/api-explorer.svg',
    description:
      'A demonstration application for API integration, loading states, error handling, pagination and offline-aware user experiences.',
    challenge:
      'Display network-driven content reliably across slow connections and unexpected API responses.',
    solution:
      'Used repository-style architecture with clear loading, success, empty and failure states.',
    technologies: [
      'Kotlin',
      'Retrofit',
      'Coroutines',
      'MVVM',
      'JSON',
      'REST APIs',
    ],
    links: {
      demo: whatsappLink,
      code: githubProfile,
    },
    privateProject: false,
  },
  {
    id: 20,
    title: 'TikTok Content Automation',
    category: 'Automation',
    featured: false,
    image: '/images/projects/tiktok-automation.svg',
    description:
      'An automation concept for organizing TikTok content workflows, captions, publishing plans and repetitive marketing tasks.',
    challenge:
      'Reduce manual work involved in preparing and organizing short-form content campaigns.',
    solution:
      'Planned structured workflows for content generation, caption preparation, scheduling and performance tracking.',
    technologies: [
      'Automation',
      'TikTok',
      'Content Strategy',
      'Python',
      'APIs',
      'Digital Marketing',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 21,
    title: 'Rafhad Technology Solutions',
    category: 'Web & Marketing',
    featured: true,
    image: '/images/projects/rafhad.svg',
    description:
      'A digital-services portfolio combining business websites, mobile solutions, creative campaigns and online-growth support.',
    challenge:
      'Present multiple digital services clearly without weakening the primary offer.',
    solution:
      'Organized services into focused packages supported by concise copy, visual proof and direct calls to action.',
    technologies: [
      'WordPress',
      'UI/UX',
      'Meta Ads',
      'Google Ads',
      'Content',
      'Web Design',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
  {
    id: 22,
    title: 'Brand Campaign Collection',
    category: 'Creative',
    featured: false,
    image: '/images/projects/creative-campaigns.svg',
    description:
      'Selected social-media campaigns for automotive, food, retail, software and technology brands.',
    challenge:
      'Create consistent promotional visuals while adapting to different products, audiences and campaign goals.',
    solution:
      'Developed campaign systems using clear visual hierarchy, product-focused compositions and platform-ready dimensions.',
    technologies: [
      'Creative Direction',
      'Figma',
      'Canva',
      'Photoshop',
      'Copywriting',
      'Social Media',
    ],
    links: {
      demo: whatsappLink,
      code: '',
    },
    privateProject: false,
  },
]