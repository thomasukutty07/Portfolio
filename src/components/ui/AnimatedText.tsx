import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharItem {
  char: string;
  index: number;
}

interface WordItem {
  chars: CharItem[];
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none pointer-events-none">
        {char === ' ' ? '\u00A0' : char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-none"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;

  const words = useMemo(() => {
    let charCounter = 0;
    const rawWords = text.split(' ');
    const structuredWords: WordItem[] = [];

    rawWords.forEach((word, wordIdx) => {
      const chars: CharItem[] = [];
      for (let i = 0; i < word.length; i++) {
        chars.push({ char: word[i], index: charCounter++ });
      }
      structuredWords.push({ chars });
      // Count space if not the last word
      if (wordIdx < rawWords.length - 1) {
        charCounter++;
      }
    });

    return structuredWords;
  }, [text]);

  return (
    <p ref={containerRef} className={className}>
      {words.map((wordObj, wordIdx) => {
        // Find index for the space following this word
        const lastCharIndex =
          wordObj.chars.length > 0 ? wordObj.chars[wordObj.chars.length - 1].index : 0;
        const spaceIndex = lastCharIndex + 1;

        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap">
              {wordObj.chars.map((charObj) => {
                const start = charObj.index / totalChars;
                const end = Math.min(1, (charObj.index + 1) / totalChars);
                return (
                  <Character
                    key={charObj.index}
                    char={charObj.char}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
            </span>
            {wordIdx < words.length - 1 && (
              <Character
                char=" "
                progress={scrollYProgress}
                range={[spaceIndex / totalChars, Math.min(1, (spaceIndex + 1) / totalChars)]}
              />
            )}
          </React.Fragment>
        );
      })}
    </p>
  );
};
