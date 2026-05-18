'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface SectorHeroProps {
  title: string;
  image: string;
  breadcrumb: string;
}

export function SectorHero({ title, image, breadcrumb }: SectorHeroProps) {
  // If the image doesn't start with http, use a generic industrial unsplash fallback
  const imgSrc = image.startsWith('http') ? image : 'https://images.unsplash.com/photo-1504917595217-d4f39066cb88?q=80&w=2000&auto=format&fit=crop';
  
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 z-0">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover opacity-65 scale-100 transform transition-transform duration-1000 ease-out"
        />
        {/* Exact Home-style gradients and color multiplier blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-brand-navy/25" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Breadcrumbs - Centered */}
          <div className="flex items-center justify-center gap-2 text-white/70 text-xs md:text-sm font-medium tracking-wide uppercase mb-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/45" />
            <Link href="/sectors" className="hover:text-gold transition-colors">Our Sectors</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/45" />
            <span className="text-gold font-semibold">{breadcrumb}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide leading-tight">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
