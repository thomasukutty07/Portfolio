import React from 'react';
import { IconMapPin } from './Icons';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Thomasukutty Reji"
      className="py-24 border-b border-[#E6E4DD]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Heading + Bio) */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase font-mono tracking-widest text-[#5C5D58] block mb-2">
              Background & Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413] mb-8">
              Engineering with clarity and practical implementation.
            </h2>

            <div className="space-y-5 text-[#5C5D58] text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I am a full-stack developer based in Kerala, India, focusing on the MERN stack (MongoDB, Express.js, React, and Node.js). My background involves developing applications that combine structured backend APIs with responsive, accessible user interfaces.
              </p>
              <p>
                In my development process, I prioritize clean architectural separation: modeling relational and document schemas thoughtfully, writing predictable REST endpoints, handling authentication and authorization cleanly, and delivering frontend code that performs consistently across devices.
              </p>
              <p>
                Whether working as part of a team at Baytebar IT Solutions or delivering custom web applications for clients, I value clear technical communication, Git-based version control, and building features that solve genuine operational problems.
              </p>
            </div>
          </div>

          {/* Right Column (Key Principles / Summary Card) */}
          <div className="lg:col-span-5 card-border rounded-lg p-6 sm:p-8 bg-[#FFFFFF]">
            <h3 className="text-xs uppercase font-mono tracking-wider text-[#878882] pb-3 mb-5 border-b border-[#E6E4DD]">
              Core Focus Areas
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-[#141413] mb-1.5">
                  Full-Stack Architecture
                </h4>
                <p className="text-sm text-[#5C5D58] leading-relaxed">
                  Connecting React client interfaces with Node.js/Express backends and MongoDB databases for cohesive data flow.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-[#141413] mb-1.5">
                  API & Authentication Design
                </h4>
                <p className="text-sm text-[#5C5D58] leading-relaxed">
                  Implementing token-based JWT authentication, route protection, and structured REST endpoints.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-[#141413] mb-1.5">
                  Responsive Frontend Engineering
                </h4>
                <p className="text-sm text-[#5C5D58] leading-relaxed">
                  Building modular components with Tailwind CSS that adapt cleanly to desktop, tablet, and mobile screens.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E6E4DD] flex items-center gap-2 text-xs text-[#5C5D58]">
              <IconMapPin size={14} className="text-[#1E3A2B]" />
              <span>Based in Idukki, Kerala, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
