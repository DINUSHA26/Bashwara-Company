'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectorAnchorNav } from '@/components/sectors/SectorAnchorNav';
import { SectorInquiryFloat } from '@/components/sectors/SectorInquiryFloat';
import { fadeUp } from '@/lib/animations';

const NAV_ITEMS = [
  { id: 'facility', label: 'Manufacturing Facility' },
  { id: 'portfolio', label: 'Products Portfolio' },
  { id: 'circular', label: 'Circular Economy' },
];

const PRODUCTS = [
  {
    name: 'Industrial Heavy-Duty Storage Crates',
    spec: 'High-Density Polyethylene (HDPE)',
    desc: 'Robust, stackable plastic crates designed for agricultural produce and industrial parts transit.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Reinforced Double-Face Plastic Pallet',
    spec: '1200mm x 1000mm | Anti-Slip Surface',
    desc: 'High load capacity pallets built for automated warehouses and chemical storage racks.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Custom Precision Injection Molded Cubes',
    spec: 'Polypropylene (PP) | Tolerances < 0.1mm',
    desc: 'Custom-engineered component storage cubes and boxes developed for high-end electronic assembly.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
  },
];

export function PlasticsContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 relative w-full">
      {/* Sticky Sidebar Navigation */}
      <SectorAnchorNav items={NAV_ITEMS} />

      {/* Main Content Area */}
      <div className="flex-1 space-y-24">
        
        {/* Section 1: Facility */}
        <section id="facility" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Capabilities</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Plastic Cube Manufacturing</h2>
            <p className="text-brand-navy/70 leading-relaxed max-w-3xl mb-8 font-light">
              Our state-of-the-art plastic manufacturing facility is equipped with high-pressure precision injection molding machinery. We specialize in producing heavy-duty crates, double-face pallets, and custom high-precision engineering components.
            </p>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">2,500 Tons</h4>
                <p className="text-brand-navy/80 text-sm font-medium">Clamping force of our largest injection molding machine.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">ISO 9001</h4>
                <p className="text-brand-navy/80 text-sm font-medium">Certified quality management systems for precision mold assembly.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">120,000 Pcs</h4>
                <p className="text-brand-navy/80 text-sm font-medium">Monthly production capacity of logistics crates.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Portfolio */}
        <section id="portfolio" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Catalog</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Plastics Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRODUCTS.map((prod, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col">
                  <div className="h-48 overflow-hidden bg-slate-100 relative">
                    <img 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold text-gold uppercase tracking-wider mb-1.5">{prod.spec}</span>
                    <h3 className="font-bold text-lg text-brand-navy mb-3 group-hover:text-brand-ocean transition-colors">{prod.name}</h3>
                    <p className="text-brand-navy/70 text-sm leading-relaxed font-light mt-auto">{prod.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 3: Circular */}
        <section id="circular" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Sustainability</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Circular Polymer Economy</h2>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between relative">
                <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-slate-200 z-0" />
                {[
                  { name: 'Polymer Collection', desc: 'Sourcing clean post-industrial plastic waste.' },
                  { name: 'Eco Granulation', desc: 'Shredding and compounding into reusable pellets.' },
                  { name: 'Precision Molding', desc: 'Combining virgin polymer and recycled granulate.' },
                  { name: 'Product Lifecycle', desc: '100% recyclable crates and logistics containers.' }
                ].map((step, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col items-center text-center max-w-[200px] mb-8 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg border-4 border-white mb-4 shadow-md group-hover:bg-gold">
                      {idx + 1}
                    </div>
                    <strong className="text-brand-navy text-sm font-bold mb-1 block">{step.name}</strong>
                    <span className="text-brand-navy/60 text-xs leading-relaxed font-light">{step.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

      </div>

      <SectorInquiryFloat onClick={() => alert('Open Inquiry Modal for Plastics')} />
    </div>
  );
}
