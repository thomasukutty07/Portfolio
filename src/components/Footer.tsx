import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FAF9F5] border-t border-[#E6E4DD] py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Name & Copyright */}
        <div className="text-center sm:text-left">
          <div className="font-bold text-sm tracking-tight text-[#141413]">
            THOMASUKUTTY REJI
          </div>
          <p className="text-xs text-[#888780] mt-1">
            © {new Date().getFullYear()} Thomasukutty Reji · Full-Stack Developer. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#5C5D58]">
          <a href="#work" className="hover:text-[#141413] transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-[#141413] transition-colors">
            About
          </a>
          <a href="#capabilities" className="hover:text-[#141413] transition-colors">
            Capabilities
          </a>
          <a href="#experience" className="hover:text-[#141413] transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-[#141413] transition-colors">
            Contact
          </a>
        </nav>

        {/* Back to top */}
        <div>
          <button
            onClick={scrollToTop}
            className="text-xs font-semibold uppercase tracking-wider text-[#141413] hover:text-[#1E3A2B] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
