'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import { slideIn, fadeUp } from '@/lib/animations';

export function AboutSnapshot() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                alt="Bashwara Corporate Leadership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold rounded-full -z-10 blur-3xl opacity-20" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full lg:w-1/2"
          >
            <span className="text-brand-steel font-bold tracking-widest uppercase mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-8 leading-tight">
              A Legacy of Trust, Innovation, and Global Impact
            </h2>
            <div className="space-y-6 text-lg text-brand-navy/70 leading-relaxed">
              <p>
                Founded in 2008, Bashwara & Company (Pvt) Ltd has evolved from a local trading enterprise into a dynamic, multi-sector conglomerate representing Sri Lankan excellence on the global stage.
              </p>
              <p>
                Our commitment to quality, sustainability, and ethical business practices drives everything we do. Whether we are unearthing precious gems, manufacturing high-grade polymers, or exporting authentic Ceylon spices, we remain dedicated to elevating industry standards and enriching communities.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-brand-navy/10 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-gold">18+</div>
                <div className="text-sm uppercase tracking-wide font-medium mt-1">Years of Excellence</div>
              </div>
              <div className="w-px h-12 bg-brand-navy/10" />
              <div>
                <div className="text-3xl font-bold text-gold">ISO</div>
                <div className="text-sm uppercase tracking-wide font-medium mt-1">Certified Quality</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
