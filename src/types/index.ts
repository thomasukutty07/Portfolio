export interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  contribution: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  framingStyle: 'browser' | 'edge' | 'asymmetric' | 'centered';
}

export interface SecondaryProject {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface CapabilityCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}
