import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-10 max-w-7xl mx-auto overflow-hidden">
      {/* Top Identity & Role Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E6E4DD] pb-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#1E3A2B]" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#5C5D58]">
            Thomasukutty Reji
          </span>
          <span className="text-xs text-[#888780]">/</span>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#141413]">
            Full-Stack Developer
          </span>
        </div>
        <div className="text-xs text-[#888780] font-mono tracking-wide hidden sm:block">
          KERALA, INDIA · OPEN TO OPPORTUNITIES
        </div>
      </div>

      {/* Main Headline & Supporting Narrative */}
      <div className="space-y-4 max-w-5xl mb-8 sm:mb-12">
        <h1 className="text-hero-headline text-[#141413]">
          I build digital products.
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#5C5D58] tracking-tight">
          From interface to backend.
        </p>
      </div>

      {/* Grid: Actions & Factual Summary on Left, 3D Hero Sculpture on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-6 pb-2">
          <p className="text-base sm:text-lg text-[#5C5D58] leading-relaxed max-w-lg">
            Engineering full-stack web applications with React, Node.js, Express, and MongoDB. I focus on clean software architecture, reliable APIs, and intuitive user experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF9F5] bg-[#1E3A2B] hover:bg-[#294D3B] transition-colors rounded-sm"
            >
              View My Work ↓
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#141413] bg-transparent hover:bg-[#F3F1EB] border border-[#E6E4DD] transition-colors rounded-sm"
            >
              Contact Me →
            </a>
          </div>

          <div className="pt-6 border-t border-[#E6E4DD] grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-[#888780] block text-[11px] uppercase tracking-wider">Core Stack</span>
              <span className="font-semibold text-[#141413]">MERN · TypeScript · APIs</span>
            </div>
            <div>
              <span className="text-[#888780] block text-[11px] uppercase tracking-wider">Focus</span>
              <span className="font-semibold text-[#141413]">Web Products &amp; Platforms</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dominant 3D Visual Identity (7 cols) */}
        <div className="lg:col-span-7 w-full">
          <div className="relative rounded-md border border-[#E6E4DD] bg-[#FFFFFF] overflow-hidden shadow-[0_20px_50px_-15px_rgba(20,20,19,0.08)]">
            <img
              src="/assets/generated/hero.jpg"
              alt="Bespoke 3D product sculpture representing digital craft and software architecture"
              className="w-full h-auto object-cover aspect-[16/9] sm:aspect-[16/10]"
              loading="eager"
            />
            <div className="absolute bottom-3 right-4 px-3 py-1 bg-[#FAF9F5]/90 backdrop-blur-sm border border-[#E6E4DD] rounded-sm text-[11px] font-mono text-[#5C5D58]">
              3D VISUAL IDENTITY · DIGITAL CRAFT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
