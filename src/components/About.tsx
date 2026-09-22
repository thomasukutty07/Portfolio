import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-20 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#E6E4DD]">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-10 sm:mb-14">
        <span className="w-2 h-2 rounded-full bg-[#1E3A2B]" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-wider text-[#888780]">
          About Me
        </span>
      </div>

      {/* Dominant Philosophy Statement */}
      <div className="max-w-5xl mb-16 sm:mb-20">
        <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141413] leading-[1.12] tracking-tight">
          &ldquo;I enjoy turning ideas into software people can actually use.&rdquo;
        </blockquote>
      </div>

      {/* Grid: 3D Architectural Sculpture on Left, Narrative & Verified Facts on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: 3D Design & System Sculpture (6 cols) */}
        <div className="lg:col-span-6">
          <div className="relative rounded-md border border-[#E6E4DD] bg-[#FFFFFF] overflow-hidden shadow-[0_16px_40px_-12px_rgba(20,20,19,0.06)]">
            <img
              src="/assets/generated/about.jpg"
              alt="Architectural 3D sculpture of intersecting smoked glass and charcoal planes symbolizing modular software craft"
              className="w-full h-auto object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="p-3 bg-[#FAF9F5] border-t border-[#E6E4DD] flex items-center justify-between text-[11px] font-mono text-[#888780]">
              <span>SPATIAL COMPOSITION · SYSTEM ARCHITECTURE</span>
              <span>3D STUDY</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Verified Engineering Scope (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-4 text-base sm:text-lg text-[#5C5D58] leading-relaxed">
            <p>
              I am a full-stack developer based in Kerala, India, specializing in building modern web applications and digital products. My daily work revolves around React, Node.js, Express, and MongoDB.
            </p>
            <p>
              I bridge the gap between intuitive user interfaces and reliable backend systems. Rather than relying on superficial gimmicks, I focus on clean component architectures, robust REST APIs, and database models that hold up under real-world usage.
            </p>
          </div>

          {/* Key Facts Checklist */}
          <div className="pt-4 border-t border-[#E6E4DD] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <span className="text-[#888780] block text-[11px] uppercase tracking-wider">Role &amp; Focus</span>
              <span className="font-semibold text-[#141413]">Full-Stack Web Developer</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#888780] block text-[11px] uppercase tracking-wider">Primary Stack</span>
              <span className="font-semibold text-[#141413]">React, Node.js, Express, MongoDB</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#888780] block text-[11px] uppercase tracking-wider">Location</span>
              <span className="font-semibold text-[#141413]">Idukki, Kerala, India</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#888780] block text-[11px] uppercase tracking-wider">Languages</span>
              <span className="font-semibold text-[#141413]">English, Malayalam</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
