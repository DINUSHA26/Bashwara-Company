'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
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
    <section className="relative h-[60vh] min-h-[500px] w-full flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Sector-specific dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-white/60 text-sm font-medium tracking-wide uppercase mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/sectors" className="hover:text-gold transition-colors">Our Sectors</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gold">{breadcrumb}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
