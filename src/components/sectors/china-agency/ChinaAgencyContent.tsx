'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectorAnchorNav } from '@/components/sectors/SectorAnchorNav';
import { SectorInquiryFloat } from '@/components/sectors/SectorInquiryFloat';
import { fadeUp } from '@/lib/animations';

const NAV_ITEMS = [
  { id: 'sourcing', label: 'Procurement Sourcing' },
  { id: 'services', label: 'Agency Services' },
  { id: 'verification', label: 'Quality & Verification' },
];

const SERVICES = [
  {
    name: 'Guangzhou Sourcing & Supplier Audit',
    spec: 'Guangdong / Zhejiang Industrial Hubs',
    desc: 'Verify factory legitimacy, production capacity, and social compliance before signing purchase orders.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Cargo Consolidation & Warehousing',
    spec: 'Yiwu & Shenzhen Transit Facilities',
    desc: 'Consolidate multiple vendor shipments into full containers (FCL) to optimize ocean freight costs.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Sri Lanka Customs Clearing & Delivery',
    spec: 'Colombo Port Clearance | Door-to-Door',
    desc: 'Handle full import documentation, duty tariff clearance, and secure domestic transport to warehouses.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop',
  },
];

export function ChinaAgencyContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 relative w-full">
      {/* Sticky Sidebar Navigation */}
      <SectorAnchorNav items={NAV_ITEMS} />

      {/* Main Content Area */}
      <div className="flex-1 space-y-24">
        
        {/* Section 1: Sourcing */}
        <section id="sourcing" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Procurement</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">China Import & Export Agency</h2>
            <p className="text-brand-navy/70 leading-relaxed max-w-3xl mb-8 font-light">
              Our dedicated China Import & Export Agency bridges the gap between Sri Lankan businesses and top-tier manufacturers in China. Operating offices in Guangzhou and Shenzhen, we handle the entire import chain—from factory sourcing and cost negotiation to quality inspection, ocean freight, and customs clearing.
            </p>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">Guangzhou</h4>
                <p className="text-brand-navy/80 text-sm font-medium">Headquarters and consolidation warehouse location.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">100%</h4>
                <p className="text-brand-navy/80 text-sm font-medium">Visual pre-shipment quality checks completed on cargo.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-gold text-3xl font-serif font-bold">FCL / LCL</h4>
                <p className="text-brand-navy/80 text-sm font-medium">Consolidation options tailored for business scaling.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Services */}
        <section id="services" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Capabilities</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Consolidation & Sourcing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES.map((srv, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col">
                  <div className="h-48 overflow-hidden bg-slate-100 relative">
                    <img 
                      src={srv.image} 
                      alt={srv.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold text-gold uppercase tracking-wider mb-1.5">{srv.spec}</span>
                    <h3 className="font-bold text-lg text-brand-navy mb-3 group-hover:text-brand-ocean transition-colors">{srv.name}</h3>
                    <p className="text-brand-navy/70 text-sm leading-relaxed font-light mt-auto">{srv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 3: Verification */}
        <section id="verification" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Quality Assurance</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Supply Chain Verification</h2>
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between relative">
                <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-slate-200 z-0" />
                {[
                  { name: 'Factory Audit', desc: 'Validating licensing and raw material stock.' },
                  { name: 'Inline Inspection', desc: 'Confirming technical specs during assembly.' },
                  { name: 'Pre-Ship Check', desc: 'Random carton inspection and seal audit.' },
                  { name: 'Port Delivery', desc: 'Filing custom declarations and vessel loading.' }
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

      <SectorInquiryFloat onClick={() => alert('Open Inquiry Modal for China Agency')} />
    </div>
  );
}
