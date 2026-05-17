'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectorAnchorNav } from '@/components/sectors/SectorAnchorNav';
import { fadeUp } from '@/lib/animations';

const NAV_ITEMS = [
  { id: 'inventory', label: 'Global Inventory' },
  { id: 'inquiry-matrix', label: 'Interactive Inquiry Matrix' },
];

export function SparePartsContent() {
  const [filter, setFilter] = useState('All');
  
  return (
    <div className="flex flex-col lg:flex-row gap-12 relative w-full">
      <SectorAnchorNav items={NAV_ITEMS} />

      <div className="flex-1 space-y-24">
        
        {/* Section 1: Inventory */}
        <section id="inventory" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-brand-steel font-bold tracking-widest uppercase mb-2 block text-sm">Catalog</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Heavy & Light Vehicle Components</h2>
            
            <div className="flex gap-4 mb-8">
              {['All', 'Brand New', 'Reconditioned', 'Used'].map((cond) => (
                <button
                  key={cond}
                  onClick={() => setFilter(cond)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === cond ? 'bg-brand-ocean text-white' : 'bg-surface-border text-brand-navy hover:bg-brand-navy/10'
                  }`}
                >
                  {cond}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'V8 Engine Block', category: 'Engine', cond: 'Reconditioned', price: 'High-Tier' },
                { name: 'Air Suspension Kit', category: 'Suspension', cond: 'Brand New', price: 'Mid-Tier' },
                { name: 'Transmission Assembly', category: 'Drivetrain', cond: 'Reconditioned', price: 'High-Tier' },
                { name: 'Brake Calipers Set', category: 'Braking', cond: 'Brand New', price: 'Entry-Tier' },
              ].map((part, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-surface-border shadow-sm flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-brand-navy">{part.name}</h3>
                      <p className="text-sm text-brand-navy/60">{part.category}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded font-bold ${
                      part.cond === 'Brand New' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {part.cond}
                    </span>
                  </div>
                  <div className="mt-auto pt-4 border-t border-surface-border flex justify-between items-center">
                    <span className="text-sm text-brand-navy/70">Price Range: <strong className="text-brand-navy">{part.price}</strong></span>
                    <button className="text-brand-ocean text-sm font-bold hover:underline">Request Price</button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 2: Inquiry Matrix */}
        <section id="inquiry-matrix" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-brand-navy text-white rounded-2xl p-8 shadow-xl">
              <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Direct Order</span>
              <h2 className="text-3xl font-serif font-bold mb-8">Interactive Inquiry Matrix</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Manufacturer</label>
                    <select className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold">
                      <option className="text-brand-navy">Select Manufacturer</option>
                      <option className="text-brand-navy">Toyota</option>
                      <option className="text-brand-navy">Mercedes-Benz</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Model</label>
                    <select className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold">
                      <option className="text-brand-navy">Select Model</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Year</label>
                    <select className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold">
                      <option className="text-brand-navy">Select Year</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Component Category</label>
                    <select className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold">
                      <option className="text-brand-navy">Engine</option>
                      <option className="text-brand-navy">Body</option>
                      <option className="text-brand-navy">Suspension</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Upload Chassis Tag / Photo</label>
                    <input type="file" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold file:text-brand-navy hover:file:bg-white transition-all cursor-pointer" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Part Description</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold" placeholder="Describe the part you need..." />
                </div>

                <button type="submit" className="w-full bg-gold hover:bg-white text-brand-navy font-bold py-4 rounded-lg transition-colors">
                  Submit Inquiry to MongoDB
                </button>
              </form>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
