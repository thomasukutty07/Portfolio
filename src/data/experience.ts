import type { ExperienceItem, EducationItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'baytebar',
    role: 'Full-Stack Web Developer',
    company: 'Baytebar IT Solutions',
    period: 'Nov 2024 — Present',
    location: 'Kerala, India',
    description:
      'Developing responsive client web applications and backend APIs for an IT solutions firm.',
    responsibilities: [
      'Developed responsive web applications using React.js and Tailwind CSS.',
      'Built backend APIs using Node.js and Express to power application features.',
      'Integrated RESTful APIs for seamless frontend-backend communication.',
      'Collaborated with designers and developers to deliver client application features.',
      'Maintained version control, code quality, and branch collaboration using Git and GitHub.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'REST APIs', 'Git', 'Vite']
  },
  {
    id: 'freelance',
    role: 'Freelance Full-Stack Developer',
    company: 'Independent Client Practice',
    period: 'Dec 2024 — Jul 2025',
    location: 'Remote',
    description:
      'Delivered custom full-stack web applications and database integrations for independent clients.',
    responsibilities: [
      'Developed custom MERN stack web applications tailored to specific client needs.',
      'Implemented JWT authentication systems and secure protected routes.',
      'Constructed and optimized MongoDB database schemas for product and order management.',
      'Integrated third-party payment gateways and transactional communication services.',
      'Managed codebase repositories, client revisions, and deployment workflows with Git.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'Razorpay', 'Tailwind CSS']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    period: '2025 — Present'
  },
  {
    degree: 'Higher Secondary (Commerce)',
    institution: 'Kerala State Board',
    period: '2021 — 2023'
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Kerala State Board',
    period: '2018 — 2021'
  }
];
