import React from 'react';
import { SECONDARY_PROJECTS } from '../data/projects';

export const AdditionalWork: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#E6E4DD]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#E6E4DD]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#888780] block mb-2">
            Archive
          </span>
          <h2 className="text-section-heading text-[#141413]">
            Additional Projects
          </h2>
        </div>
        <p className="text-sm text-[#5C5D58] max-w-md">
          Secondary applications, prototypes, and targeted web experiments.
        </p>
      </div>

      {/* Clean list with hover highlight */}
      <div className="divide-y divide-[#E6E4DD] border-y border-[#E6E4DD]">
        {SECONDARY_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FFFFFF] px-4 -mx-4 rounded-sm transition-colors"
          >
            <div className="space-y-1 max-w-xl">
              <h3 className="text-lg font-bold text-[#141413]">
                {project.title}
              </h3>
              <p className="text-xs text-[#5C5D58] leading-relaxed">
                {project.description}
              </p>
              <p className="text-[11px] font-mono text-[#888780] pt-1">
                {project.category} · {project.technologies.join(' · ')}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider flex-shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E3A2B] hover:underline inline-flex items-center gap-1 font-bold"
                >
                  <span>Live</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888780] hover:text-[#141413] transition-colors inline-flex items-center gap-1"
                >
                  <span>Code</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
