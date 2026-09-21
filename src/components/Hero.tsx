import React from 'react';
import { IconArrowDown, IconArrowUpRight, IconMapPin } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#E6E4DD]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          {/* Metadata tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3F1EC] border border-[#E6E4DD] text-xs font-mono text-[#5C5D58] mb-8">
            <IconMapPin size={13} className="text-[#1E3A2B]" />
            <span>Kerala, India</span>
            <span className="w-1 h-1 rounded-full bg-[#D1CFBF]" />
            <span>Full-Stack Web Development</span>
          </div>

          {/* Primary Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#141413] leading-[1.12] mb-8">
            Thomasukutty Reji
            <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-[#5C5D58] mt-3">
              Full-Stack Developer specializing in the MERN stack.
            </span>
          </h1>

          {/* Factual Narrative */}
          <p className="text-base sm:text-lg text-[#5C5D58] leading-relaxed max-w-2xl mb-10 font-normal">
            I build full-stack web applications from database schema design to responsive user interfaces. My core stack centers on React, Node.js, Express, and MongoDB, with a focus on clear REST API design, authentication, and maintainable code structure.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#1E3A2B] text-[#FAF9F5] text-sm font-semibold hover:bg-[#2D5A43] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B] focus-visible:ring-offset-2"
            >
              <span>View Selected Projects</span>
              <IconArrowDown size={14} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#FFFFFF] border border-[#E6E4DD] text-[#141413] text-sm font-medium hover:border-[#141413] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B]"
            >
              <span>Get in Touch</span>
              <IconArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Editorial Footnote Strip */}
        <div className="mt-16 pt-8 border-t border-[#E6E4DD] grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <span className="block text-xs uppercase font-mono tracking-wider text-[#878882] mb-1">Primary Stack</span>
            <span className="text-sm font-semibold text-[#141413]">React, Node.js, Express, MongoDB</span>
          </div>
          <div>
            <span className="block text-xs uppercase font-mono tracking-wider text-[#878882] mb-1">Experience</span>
            <span className="text-sm font-semibold text-[#141413]">Full-Stack Web Developer</span>
          </div>
          <div>
            <span className="block text-xs uppercase font-mono tracking-wider text-[#878882] mb-1">Company</span>
            <span className="text-sm font-semibold text-[#141413]">Baytebar IT Solutions</span>
          </div>
          <div>
            <span className="block text-xs uppercase font-mono tracking-wider text-[#878882] mb-1">Workflow</span>
            <span className="text-sm font-semibold text-[#141413]">Git, REST APIs, Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
