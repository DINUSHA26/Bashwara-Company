'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Slide {
  id: string;
  title: string;
  heading: React.ReactNode;
  description: string;
  image: string;
  alt: string;
}

const SLIDES: Slide[] = [
  {
    id: 'our_inspired_people',
    title: 'Our Inspired People',
    heading: (
      <>
        Empowering Our <span className="text-gold">Inspired People</span>
      </>
    ),
    description: 'Nurturing talent, fostering innovation, and driving a collaborative corporate culture to lead Sri Lankan enterprise.',
    image: '/images/hero/our_inspired_people.png',
    alt: 'Our Inspired People - Bashwara & Company Team',
  },
  {
    id: 'precious_heritage',
    title: 'Precious Heritage',
    heading: (
      <>
        Preserving <span className="text-gold">Precious Heritage</span>
      </>
    ),
    description: 'Showcasing world-renowned Ceylon Sapphires and handcrafted luxury fine jewelry with pure authenticity.',
    image: '/images/hero/precious_heritage.png',
    alt: 'Precious Heritage - Gem & Jewellery Division',
  },
  {
    id: 'engineering_mobility',
    title: 'Engineering Mobility',
    heading: (
      <>
        Powering <span className="text-gold">Engineering Mobility</span>
      </>
    ),
    description: 'Delivering high-performance automotive spare parts and state-of-the-art industrial electric motors.',
    image: '/images/hero/engineering_mobility.png',
    alt: 'Engineering Mobility - Vehicle Parts & Motors Division',
  },
  {
    id: 'shaping_the_future',
    title: 'Shaping The Future',
    heading: (
      <>
        Shaping The <span className="text-gold">Global Future</span>
      </>
    ),
    description: 'Integrating world-class maritime logistics, supply chain solutions, and robust industrial infrastructure.',
    image: '/images/hero/shaping_the_future.png',
    alt: 'Shaping the Future - Global Logistics and Infrastructure',
  },
  {
    id: 'esg_impact',
    title: 'ESG Impact',
    heading: (
      <>
        Pioneering <span className="text-gold">ESG Impact</span>
      </>
    ),
    description: 'Embedding carbon-neutral operations, fair trade agricultural supply, and sustainable resource management.',
    image: '/images/hero/esg_impact.png',
    alt: 'ESG Impact - Sustainability and Ceylon Spices',
  },
  {
    id: 'everyday_moments',
    title: 'Everyday Moments',
    heading: (
      <>
        Enriching <span className="text-gold">Everyday Moments</span>
      </>
    ),
    description: 'Creating premium lifestyle consumer goods, gemstone masterpieces, and durable manufacturing components.',
    image: '/images/hero/everyday_moments.png',
    alt: 'Everyday Moments - Premium Gemstones and Manufacturing',
  },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    resetTimer();
  };

  const scrollToSectors = () => {
    document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-brand-navy">
      {/* Background Parallax Layer with AnimatePresence Slider */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={activeIndex}
            src={SLIDES[activeIndex].image}
            alt={SLIDES[activeIndex].alt}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent mix-blend-multiply" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold font-serif text-lg tracking-widest uppercase mb-4 block"
          >
            Since 2008
          </motion.span>
          
          <div className="relative w-full min-h-[220px] md:min-h-[240px] flex items-center justify-center mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-x-0 mx-auto"
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
                  {SLIDES[activeIndex].heading}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                  {SLIDES[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          >
            <button 
              onClick={scrollToSectors}
              className="bg-gold hover:bg-white text-brand-navy px-8 py-4 rounded-sm font-medium transition-colors flex items-center gap-2 group cursor-pointer"
            >
              Explore Our Sectors
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Interactive Ticker Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-navy/70 backdrop-blur-md border-t border-white/10 py-3.5 md:py-5 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center items-center gap-3 md:gap-6 lg:gap-8 xl:gap-14 text-sm font-medium uppercase tracking-widest">
            {SLIDES.map((slide, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleTabClick(index)}
                  className={`relative py-2.5 px-3 flex items-center justify-center md:justify-start gap-2.5 transition-all duration-300 outline-none text-left cursor-pointer group rounded ${
                    isActive ? 'text-white font-semibold' : 'text-white/60 hover:text-white/90'
                  }`}
                >
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    {isActive ? (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                      </>
                    ) : (
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white/40 group-hover:bg-white/75 transition-colors"></span>
                    )}
                  </span>
                  <span className="text-xs sm:text-sm tracking-wider whitespace-nowrap">{slide.title}</span>
                  
                  {/* Progress Indicator for Active Tab */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabProgress"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4, ease: 'linear' }}
                      key={activeIndex}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
