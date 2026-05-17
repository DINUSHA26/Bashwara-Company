'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 bg-surface-light min-h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-bold tracking-widest uppercase mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-serif font-bold text-brand-navy mb-6"
          >
            A Legacy Since 2008
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-navy/70 leading-relaxed"
          >
            From humble beginnings as a local trading post to a multi-national conglomerate spanning six powerful business sectors, Bashwara & Company represents the pinnacle of Sri Lankan enterprise.
          </motion.p>
        </div>

        {/* Interactive Image & Vision Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            {/* Interactive Image Container */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                alt="Corporate Office"
                className="w-full h-full object-cover"
              />
              {/* Interactive Overlay Overlay */}
              <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-2xl tracking-widest uppercase border border-gold px-8 py-4 rounded-sm">
                  Excellence in Action
                </span>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-8 -right-8 bg-gold text-brand-navy p-8 rounded-xl shadow-xl z-10"
            >
              <div className="text-5xl font-bold font-serif mb-1">18+</div>
              <div className="text-sm font-bold uppercase tracking-widest">Years Operating</div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-gold"></div>
                <h2 className="text-3xl font-serif font-bold text-brand-navy">Our Vision</h2>
              </div>
              <p className="text-brand-navy/70 leading-relaxed text-lg">
                To be the undisputed driving force behind sustainable industrial and commercial innovation in South Asia, enriching lives globally through ethical enterprise.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-brand-ocean"></div>
                <h2 className="text-3xl font-serif font-bold text-brand-navy">Our Mission</h2>
              </div>
              <p className="text-brand-navy/70 leading-relaxed text-lg">
                Delivering unparalleled value across our diverse portfolio through ethical practices, technological advancement, and an unwavering commitment to our stakeholders, our people, and our planet.
              </p>
            </div>

            <div className="pt-8 border-t border-brand-navy/10">
              <h3 className="text-xl font-bold text-brand-navy mb-6">Global Footprint</h3>
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <h4 className="text-4xl font-bold text-brand-ocean mb-2">500+</h4>
                    <p className="text-sm font-medium uppercase tracking-wide text-brand-navy/60">Global Workforce</p>
                 </div>
                 <div>
                    <h4 className="text-4xl font-bold text-brand-ocean mb-2">30+</h4>
                    <p className="text-sm font-medium uppercase tracking-wide text-brand-navy/60">Countries Reached</p>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
