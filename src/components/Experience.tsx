import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full py-20 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#E6E4DD]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#E6E4DD]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1E3A2B]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#888780]">
              Track Record
            </span>
          </div>
          <h2 className="text-section-heading text-[#141413]">
            Experience &amp; History
          </h2>
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider">
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#E6E4DD] text-[#141413] rounded-sm hover:bg-[#F3F1EB] transition-colors"
          >
            <span>View Full Resume</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* Timeline entries */}
      <div className="space-y-16 max-w-4xl">
        {/* Role 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline pb-12 border-b border-[#E6E4DD]">
          <div className="md:col-span-3 text-xs font-mono font-semibold text-[#888780]">
            NOV 2024 — PRESENT
          </div>
          <div className="md:col-span-9 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold text-[#141413]">
                Full-Stack Web Developer
              </h3>
              <span className="text-xs font-semibold text-[#1E3A2B] uppercase tracking-wider">
                Baytebar IT Solutions · Kerala, India
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#5C5D58] leading-relaxed">
              Developing responsive client web applications and backend APIs. Building modular React and Tailwind CSS interfaces, implementing Node.js REST endpoints, and maintaining version control and collaborative workflows with Git and GitHub.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {['React', 'Node.js', 'Express', 'Tailwind CSS', 'REST APIs', 'Git', 'Vite'].map((tech) => (
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

        {/* Role 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline pb-12 border-b border-[#E6E4DD]">
          <div className="md:col-span-3 text-xs font-mono font-semibold text-[#888780]">
            DEC 2024 — JUL 2025
          </div>
          <div className="md:col-span-9 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold text-[#141413]">
                Freelance Full-Stack Developer
              </h3>
              <span className="text-xs font-semibold text-[#1E3A2B] uppercase tracking-wider">
                Independent Client Practice · Remote
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#5C5D58] leading-relaxed">
              Delivered custom full-stack web applications and database integrations for independent clients. Implemented JWT authentication, structured MongoDB database schemas, integrated payment gateways (Razorpay, Stripe), and managed deployment cycles.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'Razorpay', 'Tailwind CSS'].map((tech) => (
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

        {/* Education (Clean Grid) */}
        <div className="space-y-6 pt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#888780] block">
            Academic Background
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-4 bg-[#FFFFFF] border border-[#E6E4DD] rounded-md space-y-1">
              <span className="font-mono text-[#888780] block">2025 — Present</span>
              <strong className="text-[#141413] block text-sm font-bold">BCA (Computer Applications)</strong>
              <span className="text-[#5C5D58]">IGNOU</span>
            </div>
            <div className="p-4 bg-[#FFFFFF] border border-[#E6E4DD] rounded-md space-y-1">
              <span className="font-mono text-[#888780] block">2021 — 2023</span>
              <strong className="text-[#141413] block text-sm font-bold">Higher Secondary (Commerce)</strong>
              <span className="text-[#5C5D58]">Kerala State Board</span>
            </div>
            <div className="p-4 bg-[#FFFFFF] border border-[#E6E4DD] rounded-md space-y-1">
              <span className="font-mono text-[#888780] block">2018 — 2021</span>
              <strong className="text-[#141413] block text-sm font-bold">SSLC</strong>
              <span className="text-[#5C5D58]">Kerala State Board</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
