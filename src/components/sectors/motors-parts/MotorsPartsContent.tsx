'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectorAnchorNav } from '@/components/sectors/SectorAnchorNav';
import { SectorInquiryFloat } from '@/components/sectors/SectorInquiryFloat';
import { fadeUp } from '@/lib/animations';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'products', label: 'Motors & Generators' },
  { id: 'quality', label: 'Quality Standards' },
];

const PRODUCTS = [
  {
    name: 'Industrial Three-Phase Induction Motor',
    spec: '0.75kW - 375kW | IP55 Protection',
    desc: 'High-performance cast iron motors designed for rugged industrial manufacturing environments.',
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'High-Output Synchronous Generator',
    spec: '10kVA - 2000kVA | Brushless Design',
    desc: 'Reliable backup and continuous power generation systems engineered for hospitals and factories.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Heavy-Duty Industrial Centrifugal Pump',
    spec: 'Flow rate up to 500m³/h | Cast Iron',
    desc: 'Designed for fluid transport, water supply systems, and intensive industrial processes.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
  },
];

export function MotorsPartsContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 relative w-full">
      {/* Sticky Sidebar Navigation */}
      <SectorAnchorNav items={NAV_ITEMS} />

      {/* Main Content Area */}
      <div className="flex-1 space-y-24">
        
        {/* Section 1: Overview */}
        <section id="overview" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Industrial Power</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Motors and Parts Division</h2>
            <p className="text-brand-navy/70 leading-relaxed max-w-3xl mb-8 font-light">
              Bashwara & Company delivers high-efficiency industrial electric motors, generators, and heavy engineering components. We partner with world-renowned European and Japanese manufacturers to supply parts that power factories, water supply networks, and backup energy grids across Sri Lanka.
            </p>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">15+ Years</h4>
                <p className="text-brand-navy/80 text-sm font-medium">Of engineering supply expertise in Sri Lanka.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">100%</h4>
                <p className="text-brand-navy/80 text-sm font-medium">European & Japanese OEM parts guarantee.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">24/7</h4>
                <p className="text-brand-navy/80 text-sm font-medium">Engineering support and replacement supply.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Products */}
        <section id="products" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Portfolio</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Heavy Industrial Components</h2>
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

        {/* Section 3: Quality */}
        <section id="quality" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Compliance</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Quality Testing & Calibration</h2>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between relative">
                <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-slate-200 z-0" />
                {[
                  { name: 'Insulation Testing', desc: 'Winding resistance and insulation check.' },
                  { name: 'Dynamic Balancing', desc: 'Rotor balancing at high operational speeds.' },
                  { name: 'Load Testing', desc: 'Full capacity heat and efficiency run.' },
                  { name: 'OEM Certification', desc: 'Final calibration certificate release.' }
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

      <SectorInquiryFloat onClick={() => alert('Open Inquiry Modal for Motors & Parts')} />
    </div>
  );
}
