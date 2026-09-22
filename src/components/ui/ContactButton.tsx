import React from 'react';

interface ContactButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  href = '#contact',
  onClick,
  className = '',
}) => {
  const content = (
    <span
      className={`inline-flex items-center justify-center rounded-full text-white font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-xs sm:text-sm md:text-base select-none whitespace-nowrap shadow-lg ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 10px rgba(181, 1, 167, 0.35), 4px 4px 14px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
        padding: '16px 42px',
        lineHeight: 1,
        letterSpacing: '0.18em',
      }}
    >
      Contact Me
    </span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className="inline-block no-underline p-1">
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent border-0 p-1">
      {content}
    </button>
  );
};
