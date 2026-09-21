export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company?: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface CapabilityGroup {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormStatus {
  submitting: boolean;
  success: boolean;
  error: string | null;
}

export interface NavSection {
  id: string;
  label: string;
}
