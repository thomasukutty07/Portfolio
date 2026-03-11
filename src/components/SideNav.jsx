import React from 'react';

export default function SideNav({ sections, activeSection, scrollToSection }) {
  return (
    <nav className="side-nav" aria-label="Section navigation">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={`side-dot ${activeSection === id ? 'active' : ''}`}
          onClick={() => scrollToSection(id)}
          aria-label={label}
          title={label}
          style={{ position: 'relative' }}
        >
          <span className="side-dot-label">{label}</span>
        </button>
      ))}
    </nav>
  );
}
