import React from 'react';
import { FEATURED_PROJECTS } from '../data/projects';
import type { Project } from '../types';

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="relative w-full py-20 sm:py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Section Masthead */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-24 pb-8 border-b border-[#E6E4DD]">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1E3A2B]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#888780]">
              Engineering Evidence
            </span>
          </div>
          <h2 className="text-section-heading text-[#141413]">
            Selected Work
          </h2>
        </div>
        <div className="max-w-md text-xs sm:text-sm text-[#5C5D58] leading-relaxed">
          <p>
            Real full-stack web applications and client platforms. Every project below is verified production software running live.
          </p>
        </div>
      </div>

      {/* Projects Sequence (4 distinct, visually confident compositions) */}
      <div className="space-y-24 sm:space-y-36">
        {FEATURED_PROJECTS.map((project, index) => {
          // Project 01: QuickBite (Main Featured - Full Width Dominant Visual)
          if (index === 0) {
            return <FeaturedLeadProject key={project.id} project={project} />;
          }
          // Project 02: Fildex (Split Spread: Large Image Left, Architecture Details Right)
          if (index === 1) {
            return <SplitImageLeftProject key={project.id} project={project} />;
          }
          // Project 03: UrbanHunt (Split Spread: Details Left, Large Image Right)
          if (index === 2) {
            return <SplitImageRightProject key={project.id} project={project} />;
          }
          // Project 04: Baytebar IT Solutions (Quieter, Architectural Frame)
          return <MinimalistStudioProject key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

// 01 QuickBite: Dominant Full-Width Visual Spread
const FeaturedLeadProject: React.FC<ProjectCardProps> = ({ project }) => (
  <article className="space-y-8 group">
    {/* Title & Metadata Header */}
    <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-[#E6E4DD]">
      <div className="flex items-baseline gap-4">
        <span className="text-num-display text-[#1E3A2B] font-mono">
          /{project.num}
        </span>
        <div>
          <h3 className="text-project-heading text-[#141413]">
            {project.title}
          </h3>
          <span className="text-xs uppercase tracking-wider text-[#5C5D58] font-semibold">
            {project.category} · Featured Platform
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1E3A2B] text-[#FAF9F5] rounded-sm hover:bg-[#294D3B] transition-colors"
          >
            <span>Live Project</span>
            <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#E6E4DD] text-[#141413] rounded-sm hover:bg-[#F3F1EB] transition-colors"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>

    {/* Dominant Real Screenshot */}
    <div className="relative rounded-md border border-[#E6E4DD] bg-[#FFFFFF] overflow-hidden shadow-[0_16px_48px_-12px_rgba(20,20,19,0.08)]">
      <div className="bg-[#FAF9F5] border-b border-[#E6E4DD] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E6E4DD]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E6E4DD]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E6E4DD]" />
        </div>
        <span className="text-[11px] font-mono text-[#888780]">
          QUICKBITE · FOOD ORDERING &amp; DELIVERY PLATFORM
        </span>
        <span className="text-[11px] font-mono text-[#1E3A2B] font-semibold">
          LIVE MERN APP
        </span>
      </div>
      <img
        src={project.image}
        alt={`${project.title} production application screenshot`}
        className="w-full h-auto object-cover object-top aspect-[16/9] sm:aspect-[21/9]"
        loading="lazy"
      />
    </div>

    {/* Project Deep Dive Grid */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2 items-start">
      <div className="md:col-span-6 space-y-3">
        <p className="text-base sm:text-lg text-[#5C5D58] leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="md:col-span-6 space-y-4">
        <div className="space-y-1.5 text-xs text-[#5C5D58]">
          <span className="font-semibold text-[#141413] block uppercase tracking-wider text-[11px]">
            Key Technical Implementations:
          </span>
          <ul className="space-y-1 pl-3 border-l-2 border-[#1E3A2B]/40">
            {project.contribution.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 bg-[#F3F1EB] text-[#141413] border border-[#E6E4DD] rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </article>
);

// 02 Fildex Solutions: Asymmetric Split (Image Left, Details Right)
const SplitImageLeftProject: React.FC<ProjectCardProps> = ({ project }) => (
  <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
    <div className="lg:col-span-7">
      <div className="rounded-md border border-[#E6E4DD] bg-[#FFFFFF] overflow-hidden shadow-[0_16px_40px_-12px_rgba(20,20,19,0.06)] group-hover:shadow-[0_20px_48px_-10px_rgba(20,20,19,0.1)] transition-shadow duration-300">
        <div className="bg-[#FAF9F5] border-b border-[#E6E4DD] px-4 py-2 flex items-center justify-between text-[11px] font-mono text-[#888780]">
          <span>FILDEX.IE · PRODUCTION TALENT SAAS</span>
          <span className="text-[#1E3A2B]">LIVE PLATFORM</span>
        </div>
        <img
          src={project.image}
          alt={`${project.title} live interface`}
          className="w-full h-auto object-cover object-top aspect-[16/10]"
          loading="lazy"
        />
      </div>
    </div>

    <div className="lg:col-span-5 space-y-5">
      <div className="space-y-1">
        <span className="text-num-display text-[#1E3A2B] font-mono block">
          /{project.num}
        </span>
        <h3 className="text-project-heading text-[#141413]">
          {project.title}
        </h3>
        <p className="text-xs uppercase tracking-wider text-[#5C5D58] font-semibold">
          {project.category}
        </p>
      </div>

      <p className="text-sm sm:text-base text-[#5C5D58] leading-relaxed">
        {project.description}
      </p>

      <div className="space-y-1 text-xs text-[#5C5D58] pt-1">
        <span className="font-semibold text-[#141413] block uppercase tracking-wider text-[11px]">
          Engineering Highlights:
        </span>
        <ul className="space-y-1 pl-3 border-l-2 border-[#E6E4DD]">
          {project.contribution.slice(0, 3).map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-2 py-0.5 bg-[#F3F1EB] text-[#5C5D58] rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 text-xs font-semibold uppercase tracking-wider pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A2B] hover:underline inline-flex items-center gap-1 font-bold"
          >
            <span>Live Site</span>
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
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>
  </article>
);

// 03 UrbanHunt: Inverse Asymmetric Split (Details Left, Image Right)
const SplitImageRightProject: React.FC<ProjectCardProps> = ({ project }) => (
  <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
    <div className="lg:col-span-5 order-2 lg:order-1 space-y-5">
      <div className="space-y-1">
        <span className="text-num-display text-[#1E3A2B] font-mono block">
          /{project.num}
        </span>
        <h3 className="text-project-heading text-[#141413]">
          {project.title}
        </h3>
        <p className="text-xs uppercase tracking-wider text-[#5C5D58] font-semibold">
          {project.category}
        </p>
      </div>

      <p className="text-sm sm:text-base text-[#5C5D58] leading-relaxed">
        {project.description}
      </p>

      <div className="space-y-1 text-xs text-[#5C5D58] pt-1">
        <span className="font-semibold text-[#141413] block uppercase tracking-wider text-[11px]">
          Engineering Highlights:
        </span>
        <ul className="space-y-1 pl-3 border-l-2 border-[#E6E4DD]">
          {project.contribution.slice(0, 3).map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-2 py-0.5 bg-[#F3F1EB] text-[#5C5D58] rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 text-xs font-semibold uppercase tracking-wider pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A2B] hover:underline inline-flex items-center gap-1 font-bold"
          >
            <span>Live Site</span>
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
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>

    <div className="lg:col-span-7 order-1 lg:order-2">
      <div className="rounded-md border border-[#E6E4DD] bg-[#FFFFFF] overflow-hidden shadow-[0_16px_40px_-12px_rgba(20,20,19,0.06)]">
        <div className="bg-[#FAF9F5] border-b border-[#E6E4DD] px-4 py-2 flex items-center justify-between text-[11px] font-mono text-[#888780]">
          <span>URBANHUNT · E-COMMERCE STOREFRONT</span>
          <span className="text-[#1E3A2B]">LIVE STORE</span>
        </div>
        <img
          src={project.image}
          alt={`${project.title} live store interface`}
          className="w-full h-auto object-cover object-top aspect-[16/10]"
          loading="lazy"
        />
      </div>
    </div>
  </article>
);

// 04 Baytebar IT Solutions: Quieter Minimalist Spread
const MinimalistStudioProject: React.FC<ProjectCardProps> = ({ project }) => (
  <article className="space-y-8 pt-6 border-t border-[#E6E4DD]">
    <div className="flex flex-wrap items-baseline justify-between gap-4">
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <span className="text-2xl sm:text-3xl font-bold font-mono text-[#1E3A2B]">
            /{project.num}
          </span>
          <h3 className="text-2xl font-bold text-[#141413]">
            {project.title}
          </h3>
        </div>
        <p className="text-xs uppercase tracking-wider text-[#5C5D58] font-semibold">
          {project.category} · Corporate Consulting Platform
        </p>
      </div>

      <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A2B] hover:underline inline-flex items-center gap-1 font-bold"
          >
            <span>Live Site</span>
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
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-8">
        <div className="rounded-md border border-[#E6E4DD] bg-[#FFFFFF] overflow-hidden shadow-[0_12px_32px_-8px_rgba(20,20,19,0.05)]">
          <img
            src={project.image}
            alt={`${project.title} corporate interface`}
            className="w-full h-auto object-cover object-top aspect-[16/9]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="lg:col-span-4 space-y-4">
        <p className="text-sm text-[#5C5D58] leading-relaxed">
          {project.description}
        </p>
        <div className="space-y-1 text-xs text-[#5C5D58]">
          <span className="font-semibold text-[#141413] block uppercase tracking-wider text-[11px]">
            What I Built:
          </span>
          <ul className="space-y-1 pl-3 border-l-2 border-[#E6E4DD]">
            {project.contribution.slice(0, 3).map((item, idx) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2 py-0.5 bg-[#F3F1EB] text-[#5C5D58] rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </article>
);
