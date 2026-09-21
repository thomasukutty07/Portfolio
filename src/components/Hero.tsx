import React from 'react';
import { IconArrowDown, IconArrowUpRight, IconCheck } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#E6E4DD]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Typography & Intent (7 cols) */}
          <div className="lg:col-span-7">
            {/* Identity Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase font-mono tracking-widest text-[#141413] font-semibold">
                Thomasukutty Reji
              </span>
              <span className="w-1 h-1 rounded-full bg-[#878882]" aria-hidden="true" />
              <span className="text-xs font-mono text-[#5C5D58]">
                Full-Stack Developer
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-[#141413] leading-[1.08] mb-7">
              I build digital products
              <span className="block text-[#5C5D58] font-normal mt-1">
                from interface to backend.
              </span>
            </h1>

            {/* Narrative */}
            <p className="text-base sm:text-lg text-[#5C5D58] leading-relaxed max-w-xl mb-9 font-normal">
              Specializing in the MERN stack (React, Node.js, Express, MongoDB). I focus on clean REST API design, database modeling, authentication systems, and responsive user interfaces that deliver dependable real-world performance.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#1E3A2B] text-[#FAF9F5] text-sm font-semibold hover:bg-[#2D5A43] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B] focus-visible:ring-offset-2"
              >
                <span>View Selected Work</span>
                <IconArrowDown size={14} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#FFFFFF] border border-[#E6E4DD] text-[#141413] text-sm font-medium hover:border-[#141413] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B]"
              >
                <span>Get in Touch</span>
                <IconArrowUpRight size={14} />
              </a>
            </div>

            {/* Subtle Editorial Metadata Line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#878882] tracking-wider uppercase pt-6 border-t border-[#E6E4DD]">
              <span>Kerala, India</span>
              <span aria-hidden="true">•</span>
              <span>React &amp; Node.js</span>
              <span aria-hidden="true">•</span>
              <span>REST &amp; MongoDB</span>
            </div>
          </div>

          {/* Right Column: Visual Hook & Featured Work Preview (5 cols) */}
          <div className="lg:col-span-5">
            <div className="card-border rounded-xl p-5 sm:p-6 bg-[#FFFFFF] shadow-sm hover:shadow-md transition-shadow group">
              {/* Preview Header Strip */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E6E4DD]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1E3A2B]" aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#141413]">
                    01 / Featured Project
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#878882]">
                  Live Application
                </span>
              </div>

              {/* Realistic Browser Window Interface Preview */}
              <div className="rounded-lg border border-[#E6E4DD] bg-[#FAF9F5] overflow-hidden mb-5">
                {/* Browser Top Bar */}
                <div className="px-3 py-2 bg-[#F3F1EC] border-b border-[#E6E4DD] flex items-center justify-between">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D1CFBF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D1CFBF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D1CFBF]" />
                  </div>
                  <div className="px-3 py-0.5 rounded bg-[#FFFFFF] border border-[#E6E4DD] text-[10px] font-mono text-[#5C5D58] truncate max-w-[200px]">
                    quick-bite-neon.vercel.app
                  </div>
                  <div className="w-8" aria-hidden="true" />
                </div>

                {/* Simulated QuickBite Application View */}
                <div className="p-4 space-y-3.5">
                  {/* App Mini Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-[#1E3A2B]" aria-hidden="true" />
                      <span className="text-xs font-bold tracking-tight text-[#141413]">
                        QuickBite
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EBF2ED] text-[#1E3A2B] font-medium border border-[#1E3A2B]/15">
                      Cart (2 items)
                    </span>
                  </div>

                  {/* Food Item 1 */}
                  <div className="p-2.5 rounded bg-[#FFFFFF] border border-[#E6E4DD] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#141413]">
                        Citrus Quinoa Bowl
                      </div>
                      <div className="text-[10px] text-[#878882] mt-0.5">
                        Fresh greens, avocado, citrus dressing
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#1E3A2B]">$12.50</span>
                      <span className="block text-[9px] text-[#5C5D58] flex items-center justify-end gap-0.5">
                        <IconCheck size={9} className="text-[#1E3A2B]" /> Added
                      </span>
                    </div>
                  </div>

                  {/* Food Item 2 */}
                  <div className="p-2.5 rounded bg-[#FFFFFF] border border-[#E6E4DD] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#141413]">
                        Smoked Brioche Burger
                      </div>
                      <div className="text-[10px] text-[#878882] mt-0.5">
                        Double patty, cheddar, roasted aioli
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#141413]">$14.00</span>
                      <span className="text-[10px] font-mono text-[#1E3A2B] font-medium block">
                        + Add
                      </span>
                    </div>
                  </div>

                  {/* Integrated System Status Strip */}
                  <div className="p-2 rounded bg-[#F3F1EC] border border-[#E6E4DD] flex items-center justify-between text-[9px] font-mono text-[#5C5D58]">
                    <span>Razorpay Payments</span>
                    <span aria-hidden="true">•</span>
                    <span>Order Tracking</span>
                    <span aria-hidden="true">•</span>
                    <span>Role Auth</span>
                  </div>
                </div>
              </div>

              {/* Project Metadata & Direct Action */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#141413] tracking-tight">
                    QuickBite
                  </h3>
                  <p className="text-xs text-[#5C5D58] mt-0.5">
                    Full-Stack Food Delivery Platform
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'].map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#F3F1EC] text-[#141413] border border-[#E6E4DD]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://quick-bite-neon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-2.5 rounded-md border border-[#E6E4DD] text-[#141413] hover:text-[#1E3A2B] hover:border-[#1E3A2B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B]"
                  aria-label="View QuickBite live application"
                >
                  <IconArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
