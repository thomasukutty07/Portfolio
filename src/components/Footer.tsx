import React from 'react';
import { IconArrowDown } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E6E4DD] py-12 bg-[#FAF9F5]" aria-label="Page Footer">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-xs text-[#5C5D58] font-mono">
          © {currentYear} Thomasukutty Reji. Built with React &amp; Tailwind CSS.
        </div>

        <div className="flex items-center gap-6 text-xs text-[#5C5D58] font-mono">
          <a
            href="https://github.com/thomasukutty07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#141413] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/thomasukutty-reji-431b9027b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#141413] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:thomasmern007@gmail.com"
            className="hover:text-[#141413] transition-colors"
          >
            Email
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-[#141413] transition-colors flex items-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B] rounded-sm py-0.5"
            aria-label="Back to top"
          >
            <span>Top</span>
            <IconArrowDown size={12} className="rotate-180" />
          </button>
        </div>
      </div>
    </footer>
  );
};
