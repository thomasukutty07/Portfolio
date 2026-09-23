import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href = '#',
  onClick,
  className = '',
  label = 'Live Project',
}) => {
  const content = (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] font-semibold uppercase tracking-wider sm:tracking-widest text-[9px] sm:text-xs md:text-sm transition-all duration-300 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95 select-none whitespace-nowrap cursor-pointer ${className}`}
      style={{
        padding: 'clamp(6px, 1.2vw, 13px) clamp(10px, 2.2vw, 30px)',
        lineHeight: 1,
        letterSpacing: '0.1em',
      }}
    >
      {label}
    </span>
  );

  if (href && href !== '#') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="inline-block no-underline p-1"
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent p-1 border-0">
      {content}
    </button>
  );
};
