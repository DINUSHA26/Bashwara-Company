'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import { SectorAnchorNav } from '@/components/sectors/SectorAnchorNav';
import { SectorInquiryFloat } from '@/components/sectors/SectorInquiryFloat';
import { slideIn, fadeUp, stagger } from '@/lib/animations';

const NAV_ITEMS = [
  { id: 'mining', label: 'Ethical Mining' },
  { id: 'catalog', label: 'Precious Gems Catalog' },
  { id: 'logistics', label: 'Export Logistics' },
  { id: 'certification', label: 'Certifications' },
];

export function GemsContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 relative w-full">
      {/* Sticky Sidebar Navigation */}
      <SectorAnchorNav items={NAV_ITEMS} />

      {/* Main Content Area */}
      <div className="flex-1 space-y-24">
        
        {/* Section 1: Ethical Mining */}
        <section id="mining" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Source</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Ethical Mining Operations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Extraction', img: 'bashwara/sectors/gems/extraction' },
                { title: 'Processing', img: 'bashwara/sectors/gems/processing' },
                { title: 'Ecological Care', img: 'bashwara/sectors/gems/ecology' }
              ].map((step, idx) => (
                <div key={idx} className="group relative h-64 rounded-xl overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent z-10" />
                  <h3 className="absolute bottom-4 left-4 z-20 text-white font-bold text-xl">{step.title}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 2: Masonry Catalog */}
        <section id="catalog" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Collection</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Precious & Semi-Precious Gems</h2>
            
            {/* CSS Masonry Layout */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {[
                { name: 'Blue Sapphire', origin: 'Ratnapura', grade: 'AAA', h: 'h-96' },
                { name: 'Padparadscha', origin: 'Sri Lanka', grade: 'Collector', h: 'h-64' },
                { name: 'Yellow Sapphire', origin: 'Pelmadulla', grade: 'AA', h: 'h-80' },
                { name: 'Ruby', origin: 'Madagascar', grade: 'AAA', h: 'h-72' },
                { name: 'Star Sapphire', origin: 'Ratnapura', grade: 'Rare', h: 'h-96' },
                { name: 'Tsavorite', origin: 'Tanzania', grade: 'AA', h: 'h-64' },
              ].map((gem, idx) => (
                <div key={idx} className={`relative rounded-xl overflow-hidden shadow-lg group bg-brand-navy ${gem.h} break-inside-avoid`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-white font-serif font-bold text-xl mb-1">{gem.name}</h3>
                        <p className="text-white/70 text-sm">Origin: {gem.origin}</p>
                      </div>
                      <span className="bg-gold text-brand-navy text-xs font-bold px-2 py-1 rounded">
                        {gem.grade}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 3: Export Logistics */}
        <section id="logistics" className="scroll-mt-32">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
             <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Supply Chain</span>
             <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Secure Export Logistics</h2>
             <div className="bg-white rounded-2xl p-8 border border-surface-border shadow-sm">
                <div className="flex flex-col md:flex-row justify-between relative">
                  <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-surface-border z-0" />
                  {['Mining', 'Grading', 'Packaging', 'Global Courier'].map((step, idx) => (
                    <div key={idx} className="relative z-10 flex flex-col items-center mb-8 md:mb-0">
                      <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg border-4 border-white mb-4 shadow-md">
                        {idx + 1}
                      </div>
                      <span className="font-medium text-brand-navy">{step}</span>
                    </div>
                  ))}
                </div>
             </div>
           </motion.div>
        </section>

      </div>

      <SectorInquiryFloat onClick={() => alert('Open Inquiry Modal for Gems')} />
    </div>
  );
}
