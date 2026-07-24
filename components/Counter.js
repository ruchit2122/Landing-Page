'use client';

import { useEffect, useRef, useState } from 'react';

// Parses a display value like "3,000+" into { target: 3000, suffix: "+" }
function parse(value) {
  const match = String(value).match(/^([\d.,]+)(.*)$/);
  if (!match) return { target: 0, suffix: String(value) };
  const target = parseFloat(match[1].replace(/,/g, '')) || 0;
  return { target, suffix: match[2] || '' };
}

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function Counter({ value, duration = 1800, className = '' }) {
  const { target, suffix } = parse(value);
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setDisplay(target);
      return;
    }

    let raf;
    let started = false;

    const run = (start) => {
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(target * easeOutExpo(progress)));
        if (progress < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            run(performance.now());
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
