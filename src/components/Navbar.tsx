import React, { useState, useEffect, useRef, useCallback } from 'react';
import { IconMenu, IconClose, IconArrowUpRight } from './Icons';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll for subtle border trigger
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle Escape key for mobile drawer
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileOpen(false);
          toggleBtnRef.current?.focus();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
    toggleBtnRef.current?.focus();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E6E4DD]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-[#141413] hover:text-[#1E3A2B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B] rounded-sm"
          aria-label="Thomasukutty Reji — Back to top"
        >
          Thomasukutty Reji
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-[#5C5D58] hover:text-[#141413] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B] rounded-sm py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="w-px h-4 bg-[#E6E4DD]" aria-hidden="true" />

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A2B] hover:text-[#2D5A43] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B] rounded-sm py-1"
          >
            <span>Let's Talk</span>
            <IconArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          ref={toggleBtnRef}
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden p-2.5 -mr-2 text-[#141413] hover:text-[#1E3A2B] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B]"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 top-20 z-30 bg-[#FAF9F5] border-t border-[#E6E4DD] px-6 py-8 flex flex-col justify-between md:hidden"
        >
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-2xl font-semibold text-[#141413] hover:text-[#1E3A2B] py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B] rounded-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-8 border-t border-[#E6E4DD] flex flex-col gap-4">
            <div className="text-xs uppercase tracking-wider text-[#5C5D58] font-mono">
              Direct Contact
            </div>
            <a
              href="mailto:thomasmern007@gmail.com"
              className="text-base font-medium text-[#1E3A2B] hover:underline"
            >
              thomasmern007@gmail.com
            </a>
            <div className="text-xs text-[#5C5D58]">
              Kerala, India
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
