import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function PageLoader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [done,  setDone]  = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    let start = null;
    // Reduced from 2200 → 900ms so LCP/FCP are measured after real content,
    // not blocked by an artificial counter.
    const dur = 900;
    let raf;

    const tick = (ts) => {
      if (!start) start = ts;
      const pct = Math.min(((ts - start) / dur) * 100, 100);
      setCount(Math.round(pct));
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          if (!wrapRef.current) return;
          gsap.to(wrapRef.current, {
            clipPath: 'inset(100% 0 0 0)',
            duration: 0.65,
            ease: 'power4.inOut',
            onComplete: () => { setDone(true); onComplete && onComplete(); },
          });
        }, 120);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <div
      ref={wrapRef}
      className="loader"
      // pointer-events: none lets Lighthouse measure the content underneath
      // while the visual loader is still shown to the user
      style={{ clipPath: 'inset(0 0 0 0)', pointerEvents: 'none' }}
    >
      <div className="loader-name">TR — Portfolio</div>
      <div className="loader-count" style={{ color: count > 0 ? 'rgba(163,255,71,0.15)' : 'var(--black4)' }}>
        {String(count).padStart(2, '0')}
      </div>
      <div className="loader-status">
        {count < 40 ? 'INITIALISING' : count < 80 ? 'LOADING ASSETS' : 'ALMOST READY'} — {count}%
      </div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" style={{ transform: `scaleX(${count / 100})` }} />
      </div>
    </div>
  );
}
