import React from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section
      id="work"
      aria-label="Selected Projects"
      className="py-24 border-b border-[#E6E4DD]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E6E4DD]">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#5C5D58] block mb-2">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413]">
              Selected Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C5D58] max-w-md">
            Full-stack web applications, e-commerce systems, and client interfaces built with the MERN stack and modern tooling.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
