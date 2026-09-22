import React, { useState } from 'react';

interface CapabilityItem {
  num: string;
  title: string;
  summary: string;
  technologies: string[];
}

const CAPABILITIES_LIST: CapabilityItem[] = [
  {
    num: '01',
    title: 'FRONTEND DEVELOPMENT',
    summary:
      'Engineering fast, responsive, and accessible client interfaces using React, modern JavaScript (ES6+), TypeScript, and Tailwind CSS. Focused on component modularity and smooth user interactions.',
    technologies: ['React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3']
  },
  {
    num: '02',
    title: 'BACKEND & REST APIs',
    summary:
      'Architecting server-side services with Node.js and Express. Designing predictable RESTful API endpoints, request validation, middleware pipelines, and MVC project structures.',
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'MVC Architecture', 'Middleware']
  },
  {
    num: '03',
    title: 'DATABASE & DATA MODELING',
    summary:
      'Structuring flexible, scalable document databases using MongoDB and Mongoose ODM. Designing relationship schemas, data validation rules, and optimized query access patterns.',
    technologies: ['MongoDB', 'Mongoose ODM', 'Schema Design', 'Data Modeling', 'Query Optimization']
  },
  {
    num: '04',
    title: 'PRODUCT ENGINEERING',
    summary:
      'Connecting complete end-to-end user workflows: secure JWT authentication, protected routes, role-based access controls, and production deployment lifecycles.',
    technologies: ['JWT Authentication', 'Protected Routes', 'State Management', 'Git & GitHub']
  },
  {
    num: '05',
    title: 'INTEGRATIONS & PAYMENTS',
    summary:
      'Integrating third-party APIs, real-time messaging with Socket.IO, and payment gateways including Razorpay and Stripe for commercial web platforms.',
    technologies: ['Razorpay', 'Stripe', 'Socket.IO', 'Brevo API', 'Third-Party Webhooks']
  }
];

export const Capabilities: React.FC = () => {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <section id="capabilities" className="relative w-full py-20 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#E6E4DD]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20 pb-8 border-b border-[#E6E4DD]">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1E3A2B]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#888780]">
              Capabilities
            </span>
          </div>
          <h2 className="text-section-heading text-[#141413]">
            What I Build
          </h2>
        </div>
        <p className="text-sm text-[#5C5D58] max-w-md leading-relaxed">
          Full-stack capabilities grounded in production applications. No synthetic ratings or percentage bars.
        </p>
      </div>

      {/* Large Numbered List */}
      <div className="divide-y divide-[#E6E4DD] border-y border-[#E6E4DD]">
        {CAPABILITIES_LIST.map((item) => (
          <div
            key={item.num}
            onMouseEnter={() => setActiveHover(item.num)}
            onMouseLeave={() => setActiveHover(null)}
            className={`py-8 sm:py-12 transition-colors duration-200 px-3 -mx-3 rounded-sm ${
              activeHover === item.num ? 'bg-[#FFFFFF]' : 'bg-transparent'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Number (2 cols) */}
              <div className="lg:col-span-2">
                <span className="text-num-display text-[#1E3A2B] font-mono block">
                  {item.num}
                </span>
              </div>

              {/* Title & Summary (6 cols) */}
              <div className="lg:col-span-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141413]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5C5D58] leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {/* Technologies (4 cols) */}
              <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-1.5 pt-2 lg:pt-1">
                {item.technologies.map((tech) => (
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
        ))}
      </div>
    </section>
  );
};
