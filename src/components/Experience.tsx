import React from 'react';
import { EXPERIENCES, EDUCATION } from '../data/experience';
import { IconCheck } from './Icons';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience and Education"
      className="py-24 border-b border-[#E6E4DD]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E6E4DD]">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#5C5D58] block mb-2">
              Career & Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413]">
              Experience
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C5D58] max-w-md">
            Commercial and freelance development work focusing on full-stack web applications, REST APIs, and team workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Work Experience Column (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-sm uppercase font-mono tracking-wider text-[#878882] mb-6">
              Work History
            </h3>

            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="card-border rounded-lg p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-5 border-b border-[#E6E4DD]">
                  <div>
                    <h4 className="text-xl font-semibold text-[#141413]">
                      {exp.role}
                    </h4>
                    {exp.company && (
                      <span className="text-sm font-medium text-[#1E3A2B]">
                        {exp.company}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-[#5C5D58] shrink-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-6 text-sm text-[#5C5D58]">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <IconCheck size={15} className="text-[#1E3A2B] shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E6E4DD]">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-[#F3F1EC] text-[#141413] border border-[#E6E4DD]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Education Column (1 col) */}
          <div>
            <h3 className="text-sm uppercase font-mono tracking-wider text-[#878882] mb-6">
              Education
            </h3>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="card-border rounded-lg p-6"
                >
                  <span className="text-xs font-mono text-[#5C5D58] block mb-2">
                    {edu.period}
                  </span>
                  <h4 className="text-base font-semibold text-[#141413] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-[#5C5D58]">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
