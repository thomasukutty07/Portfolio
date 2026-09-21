import React from 'react';
import { CAPABILITY_GROUPS } from '../data/capabilities';
import { IconCheck } from './Icons';

export const Capabilities: React.FC = () => {
  return (
    <section
      id="capabilities"
      aria-label="Technical Capabilities"
      className="py-24 border-b border-[#E6E4DD]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#E6E4DD]">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#5C5D58] block mb-2">
              Proficiencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413]">
              Technical Capabilities
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C5D58] max-w-md">
            Technologies, frameworks, and foundational concepts utilized across frontend, backend, and database development.
          </p>
        </div>

        {/* 4-column Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITY_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="card-border rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-[#141413] pb-4 mb-4 border-b border-[#E6E4DD]">
                  {group.category}
                </h3>

                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-[#5C5D58]">
                      <IconCheck size={14} className="text-[#1E3A2B] shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
