'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectorAnchorNav } from '@/components/sectors/SectorAnchorNav';
import { SectorInquiryFloat } from '@/components/sectors/SectorInquiryFloat';
import { fadeUp } from '@/lib/animations';

const NAV_ITEMS = [
  { id: 'cultivation', label: 'Spice Cultivation' },
  { id: 'portfolio', label: 'Spices Portfolio' },
  { id: 'logistics', label: 'Global Supply Chain' },
];

const PRODUCTS = [
  {
    name: 'Alba Grade Ceylon Cinnamon',
    spec: 'Authentic Cinnamomum Verum | AAA Grade',
    desc: 'The highest grade Ceylon Cinnamon quills, carefully hand-scraped and packed with organic certification.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Green Cardamom (LGB Grade)',
    spec: 'Bulk density > 410g/l | Clean Sorted',
    desc: 'Sourced from the misty hills of Kandy, featuring rich aroma and intense green coloration.',
    image: 'https://images.unsplash.com/photo-1509356861254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Black Pepper (550G/L Grade)',
    spec: 'Moisture < 12% | Steam Sterilized',
    desc: 'Premium dried black pepper with high piperine content, graded and processed for international exports.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop',
  },
];

export function SpicesContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 relative w-full">
      {/* Sticky Sidebar Navigation */}
      <SectorAnchorNav items={NAV_ITEMS} />

      {/* Main Content Area */}
      <div className="flex-1 space-y-24">
        
        {/* Section 1: Cultivation */}
        <section id="cultivation" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Agriculture</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Ceylon Spice Cultivation</h2>
            <p className="text-brand-navy/70 leading-relaxed max-w-3xl mb-8 font-light">
              Bashwara Spicy & Food Division exports premium, authentic Ceylon Spices. Partnering with over 1,200 smallholder farmers in Sri Lanka, we practice sustainable agricultural methods and ensure fair-trade compliance, empowering local families while delivering top-quality organic products to global markets.
            </p>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">1,200+</h4>
                <p className="text-brand-navy/80 text-sm font-medium">Local smallholder spice farming partners.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">100%</h4>
                <p className="text-brand-navy/80 text-sm font-medium">Pure Ceylon origin cinnamon, cardamom, and cloves.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">USDA / EU</h4>
                <p className="text-brand-navy/80 text-sm font-medium">Organic certifications available for spice consignments.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Portfolio */}
        <section id="portfolio" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Catalog</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Ceylon Spices Portfolio</h2>
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

        {/* Section 3: Logistics */}
        <section id="logistics" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Supply Chain</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Export Supply Chain Process</h2>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between relative">
                <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-slate-200 z-0" />
                {[
                  { name: 'Harvesting', desc: 'Direct sourcing of mature fresh spices.' },
                  { name: 'Hygienic Drying', desc: 'Sun and oven drying under controlled heat.' },
                  { name: 'Sort & Grading', desc: 'Sieving and hand-sorting by density/size.' },
                  { name: 'Fumigation & Ship', desc: 'Certified phytosanitary packaging and export.' }
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

      <SectorInquiryFloat onClick={() => alert('Open Inquiry Modal for Spices')} />
    </div>
  );
}
