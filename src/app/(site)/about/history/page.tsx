'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HistoryPage() {
  const milestones = [
    { year: '2008', title: 'Inception & Trading', desc: 'Bashwara & Company founded as a logistics coordinator and general import enterprise.' },
    { year: '2012', title: 'Gem & Jewellery Ventures', desc: 'Secured ethical gemstone mining concessions and globally deployed our sapphire trade route.' },
    { year: '2016', title: 'Manufacturing Integration', desc: 'Established specialized polymer extrusion and high-precision plastic injection molding divisions.' },
    { year: '2021', title: 'Ceylon Spice & Agro Expansion', desc: 'Introduced carbon-neutral, single-origin organic spice exports to international culinary hubs.' },
    { year: 'Present', title: 'Digital Conglomerate', desc: 'Pivoted into highly automated pipelines and custom B2B inventory platforms across six sectors.' }
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-ocean font-bold tracking-widest uppercase mb-3 block"
          >
            Chronicle
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-navy"
          >
            Our History
          </motion.h1>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </div>

        {/* Hero image for history */}
        <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-100 h-96 mb-16 relative">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" 
            alt="Corporate skyscraper building under clean bright blue sky" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent flex items-end p-8">
            <p className="text-white text-lg font-serif italic">"Crafting a legacy of industrial trust since 2008."</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-brand-ocean/30 ml-4 md:ml-8 space-y-12">
          {milestones.map((m, i) => (
            <motion.div 
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="relative pl-8 md:pl-12"
            >
              {/* Pulsing indicator dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-brand-ocean rounded-full ring-4 ring-brand-ocean/10 animate-pulse" />
              
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-2xl font-serif font-bold text-gold block mb-2">{m.year}</span>
                <h3 className="text-xl font-bold text-brand-navy mb-2">{m.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
