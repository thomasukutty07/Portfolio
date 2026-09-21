import React from 'react';
import type { Project } from '../types';
import { IconArrowUpRight, IconGithub, IconCheck } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const indexStr = String(index + 1).padStart(2, '0');

  return (
    <article
      aria-labelledby={`project-title-${project.id}`}
      className="card-border rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
    >
      <div>
        {/* Top bar: index and category */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#E6E4DD]">
          <span className="font-mono text-xs uppercase tracking-wider text-[#5C5D58]">
            Project {indexStr}
          </span>
          <span className="inline-block text-xs font-mono px-2.5 py-1 rounded bg-[#F3F1EC] text-[#5C5D58] border border-[#E6E4DD]">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          id={`project-title-${project.id}`}
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#141413] mb-4"
        >
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-[#5C5D58] text-base leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Technical Implementation Details */}
        <div className="mb-8">
          <h4 className="text-xs uppercase font-mono tracking-wider text-[#878882] mb-3">
            Implementation Highlights
          </h4>
          <ul className="space-y-2 text-sm text-[#5C5D58]">
            {project.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <IconCheck size={15} className="text-[#1E3A2B] shrink-0 mt-0.5" />
                <span className="leading-snug">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Technology tags */}
        <div className="pt-6 border-t border-[#E6E4DD] mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded bg-[#F3F1EC] text-[#141413] border border-[#E6E4DD]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A2B] hover:text-[#2D5A43] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B] rounded-sm py-1"
            >
              <span>Live Application</span>
              <IconArrowUpRight size={14} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5C5D58] hover:text-[#141413] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B] rounded-sm py-1"
            >
              <IconGithub size={15} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
