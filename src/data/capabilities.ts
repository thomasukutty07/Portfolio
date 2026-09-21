import type { CapabilityGroup } from '../types';

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    category: 'Frontend Development',
    skills: [
      'React.js',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5 & Semantic Markup',
      'CSS3 & Responsive Layouts',
      'Component Architecture'
    ]
  },
  {
    category: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express.js',
      'REST API Design',
      'JWT Authentication',
      'MVC Architecture',
      'Middleware Integration'
    ]
  },
  {
    category: 'Databases & Storage',
    skills: [
      'MongoDB',
      'Mongoose ODM',
      'Schema Modeling',
      'CRUD Operations',
      'Data Indexing & Queries'
    ]
  },
  {
    category: 'Workflow & Tools',
    skills: [
      'Git & GitHub',
      'Vite Build Tooling',
      'Postman API Testing',
      'Technical Documentation',
      'VS Code & Terminal Workflows'
    ]
  }
];
