import type { ExperienceItem, EducationItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Full-Stack Web Developer',
    company: 'Baytebar IT Solutions',
    period: 'Nov 2024 – Present',
    responsibilities: [
      'Develop responsive web applications using React.js and Tailwind CSS.',
      'Build backend APIs using Node.js and Express to support application features.',
      'Integrate RESTful APIs for frontend-backend data communication.',
      'Collaborate with developers and designers using Git and GitHub version control.',
      'Prepare technical documentation for implemented system features.'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'REST APIs', 'Git']
  },
  {
    role: 'Freelance Full-Stack Developer',
    period: 'Dec 2024 – Present',
    responsibilities: [
      'Develop custom MERN stack web applications based on client specifications.',
      'Implement JWT authentication mechanisms and REST API integrations.',
      'Design and optimize MongoDB schemas and database models.',
      'Test, debug, and maintain project codebases across GitHub repositories.'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST APIs']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    period: '2025 – Present'
  },
  {
    degree: 'Higher Secondary (Commerce)',
    institution: 'Kerala State Board',
    period: '2021 – 2023'
  },
  {
    degree: 'SSLC',
    institution: 'Kerala State Board',
    period: '2018 – 2021'
  }
];
