'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: 2008, label: 'Established', prefix: 'Since ' },
  { value: 6, label: 'Business Sectors', suffix: '' },
  { value: 50, label: 'Employees Globally', suffix: '+' },
  { value: 10, label: 'Countries Reached', suffix: '+' },
];

function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Ease out expo
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeOut * (to - from) + from));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, to, from, duration]);

  return <span ref={ref}>{count}</span>;
}

export function StatsCounter() {
  return (
    <section className="bg-brand-deep py-16 text-white relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col items-center justify-center py-8 px-2 sm:px-4 ${
                idx === 0 || idx === 2 ? 'border-r border-white/10' : ''
              } ${
                idx === 0 || idx === 1 ? 'border-b border-white/10 md:border-b-0' : ''
              } ${
                idx === 1 ? 'md:border-r md:border-white/10' : ''
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gold mb-3 flex flex-col xl:flex-row items-center justify-center gap-1 xl:gap-2 leading-tight text-center">
                {stat.prefix && <span>{stat.prefix.trim()}</span>}
                <div className="flex items-center justify-center">
                  <Counter to={stat.value} />
                  {stat.suffix}
                </div>
              </div>
              <div className="text-[11px] sm:text-xs lg:text-base text-white/80 uppercase tracking-widest text-center mt-1 sm:mt-2 xl:mt-0">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
