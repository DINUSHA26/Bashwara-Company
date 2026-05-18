'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SubpageHeroProps {
  tag: string;
  title: string | React.ReactNode;
  description: string;
  image: string;
  alt: string;
}

export function SubpageHero({ tag, title, description, image, alt }: SubpageHeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* Background Image Layer - Matching Home Page blend and opacity */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-full object-cover opacity-65 scale-100 transform transition-transform duration-1000 ease-out"
        />
        {/* Exact Home-style gradients and color multiplier blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-brand-navy/25" />
      </div>
      
      {/* Hero Content - Centered directly on background, exactly like Home Page */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-16">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gold font-serif text-base md:text-lg tracking-widest uppercase mb-4 block font-medium"
        >
          {tag}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold font-serif text-white tracking-wide mb-6 leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
