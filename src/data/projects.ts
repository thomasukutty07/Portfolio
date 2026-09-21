import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'quickbite',
    title: 'QuickBite',
    category: 'Full-Stack Application',
    summary: 'A food delivery web application featuring menu browsing, cart management, payment processing, and order handling.',
    details: [
      'Built with React on the frontend and Node.js with Express on the backend.',
      'Implemented JWT-based authentication with role-based access control.',
      'Integrated Razorpay payment gateway for transaction handling.',
      'Developed an admin dashboard for managing food items and viewing incoming orders.',
      'Utilized Cloudinary for media storage and MongoDB for database persistence.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/thomasukutty07',
    liveUrl: 'https://quick-bite-neon.vercel.app/'
  },
  {
    id: 'fildex',
    title: 'Fildex Solutions',
    category: 'Web Platform',
    summary: 'A recruitment platform developed for an Irish recruitment company, featuring candidate management and service showcases.',
    details: [
      'Built a responsive web frontend using React and Tailwind CSS.',
      'Constructed backend APIs using Node.js and MongoDB for listing and applicant management.',
      'Implemented real-time messaging features using Socket.IO.',
      'Integrated Stripe for subscription processing and Brevo API for email communication.',
      'Developed administrative controls for job listings and candidate review.'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Stripe', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/thomasukutty07',
    liveUrl: 'https://fildex.ie'
  },
  {
    id: 'urbanhunt',
    title: 'UrbanHunt',
    category: 'E-Commerce Platform',
    summary: 'A full-stack e-commerce web application with product catalogs, user authentication, and shopping cart functionality.',
    details: [
      'Architected RESTful APIs using Express and Node.js connected to MongoDB.',
      'Implemented authentication using JSON Web Tokens (JWT) and route protection.',
      'Created an admin interface for managing product catalog inventory and orders.',
      'Engineered shopping cart persistence and user checkout flow.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/thomasukutty07/UrbanHut',
    liveUrl: 'https://e-com-1-8ewb.onrender.com/#/shop/home'
  },
  {
    id: 'baytebar',
    title: 'Baytebar IT Solutions',
    category: 'Corporate Website',
    summary: 'A corporate web platform built for an IT services company, showcasing services, team members, and company background.',
    details: [
      'Developed the frontend interface with React and Tailwind CSS.',
      'Focused on responsive layout design across desktop, tablet, and mobile viewports.',
      'Structured clean component hierarchies and modular code organization.',
      'Maintained version control using Git and documented system features.'
    ],
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/thomasukutty07',
    liveUrl: 'https://baytebar.com/'
  },
  {
    id: 'hoobank',
    title: 'HooBank',
    category: 'UI/UX Concept',
    summary: 'A modern banking interface concept demonstrating structured design tokens, responsive cards, and clean typography.',
    details: [
      'Implemented responsive component layouts using Tailwind CSS utility patterns.',
      'Structured modular card components with visual hierarchy.',
      'Applied accessible color contrast across light and dark surfaces.'
    ],
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/thomasukutty07',
    liveUrl: 'https://stunning-scone-45b046.netlify.app/'
  },
  {
    id: 'cineflix',
    title: 'CineFlix',
    category: 'API Integration',
    summary: 'A movie discovery web application integrating the TMDB REST API with client-side search and category filtering.',
    details: [
      'Connected to external TMDB endpoints to fetch and render movie metadata.',
      'Implemented real-time client-side search query handling and filter states.',
      'Built responsive media grid views with modal detail cards.'
    ],
    technologies: ['React', 'TMDB API', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/thomasukutty07',
    liveUrl: 'https://dynamic-cocada-c83d76.netlify.app/'
  }
];
