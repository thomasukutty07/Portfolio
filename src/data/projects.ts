import type { Project, SecondaryProject } from '../types';

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'quickbite',
    num: '01',
    title: 'QuickBite',
    category: 'Food Delivery Platform',
    description:
      'A full-stack food ordering and delivery web application that enables customers to explore diverse menus, add items to a dynamic cart, and execute authenticated online orders.',
    contribution: [
      'Built full-stack application using React, Node.js, Express, and MongoDB.',
      'Integrated Razorpay payment gateway for secure online transactions.',
      'Implemented JWT authentication with role-based access for users and administrators.',
      'Developed an admin dashboard to manage menu items and live orders.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay', 'Tailwind CSS'],
    liveUrl: 'https://silver-platypus-609adb.netlify.app/',
    githubUrl: 'https://github.com/thomasmern007',
    image: '/assets/projects/quickbite.png',
    framingStyle: 'browser'
  },
  {
    id: 'fildex',
    num: '02',
    title: 'Fildex Solutions',
    category: 'Recruitment SaaS Platform',
    description:
      'A talent acquisition and candidate management platform built for an Irish recruitment company, connecting employers with technical candidates across European tech hubs.',
    contribution: [
      'Developed responsive web interface using React and Tailwind CSS.',
      'Built backend REST APIs with Node.js and Express to manage job postings and candidate records.',
      'Implemented real-time messaging between candidates and recruiters using Socket.IO.',
      'Integrated Stripe for recurring subscriptions and Brevo API for transactional email services.'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Stripe', 'Brevo API', 'Tailwind CSS'],
    liveUrl: 'https://fildex.ie',
    githubUrl: 'https://github.com/thomasmern007',
    image: '/assets/projects/fildex.png',
    framingStyle: 'edge'
  },
  {
    id: 'urbanhunt',
    num: '03',
    title: 'UrbanHunt',
    category: 'E-Commerce Platform',
    description:
      'A responsive digital storefront featuring multi-category product catalog browsing, persistent shopping cart management, user accounts, and administrative controls.',
    contribution: [
      'Engineered storefront UI with React and Tailwind CSS with category filters and mobile responsiveness.',
      'Built RESTful endpoints on Node.js and Express for catalog querying and order state handling.',
      'Implemented JWT-based user authentication and protected admin routes for product management.',
      'Structured MongoDB schemas to support product catalogs, user profiles, and orders.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    liveUrl: 'https://e-com-1-8ewb.onrender.com/#/shop/home',
    githubUrl: 'https://github.com/thomasukutty07/UrbanHut',
    image: '/assets/projects/urbanhunt.png',
    framingStyle: 'asymmetric'
  },
  {
    id: 'baytebar',
    num: '04',
    title: 'Baytebar IT Solutions',
    category: 'Corporate Web Platform',
    description:
      'A corporate web presence built for an IT consulting and software studio, articulating service capabilities, digital solutions, and client inquiry channels.',
    contribution: [
      'Engineered modern, responsive front-end interface using React, Tailwind CSS, and Vite.',
      'Constructed modular component hierarchy for clean maintenance and fast page rendering.',
      'Integrated client inquiry workflows with front-end form validation.',
      'Optimized layout performance and cross-viewport accessibility across all screen sizes.'
    ],
    technologies: ['React', 'Tailwind CSS', 'Vite', 'REST APIs'],
    liveUrl: 'https://www.baytebar.com/',
    githubUrl: 'https://github.com/thomasmern007',
    image: '/assets/projects/baytebar.png',
    framingStyle: 'centered'
  }
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    id: 'hoobank',
    title: 'HooBank',
    category: 'Fintech Landing Interface',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    description: 'Modern banking interface with responsive layout, clean component architecture, and structured design tokens.',
    liveUrl: 'https://stunning-scone-45b046.netlify.app/',
    githubUrl: 'https://github.com/thomasmern007'
  },
  {
    id: 'cineflix',
    title: 'CineFlix',
    category: 'Movie Discovery Web App',
    technologies: ['React', 'TMDB REST API', 'Tailwind CSS', 'Vite'],
    description: 'Entertainment discovery web application integrating TMDB APIs for real-time movie queries, posters, and category exploration.',
    liveUrl: 'https://dynamic-cocada-c83d76.netlify.app/',
    githubUrl: 'https://github.com/thomasmern007'
  },
  {
    id: 'church-cms',
    title: 'Church Management System',
    category: 'Administrative MERN Platform',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    description: 'Internal administrative web platform for organizing community member records, family groupings, and role-based permissions.',
    githubUrl: 'https://github.com/thomasmern007'
  }
];
