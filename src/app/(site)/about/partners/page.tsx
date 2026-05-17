'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PartnersPage() {
  const partnerTypes = [
    { title: 'Global Logistics Partners', desc: 'Secure high-value logistics carriers managing air freight for sapphire distributions.' },
    { title: 'Agricultural Collaboratives', desc: 'Over 120 certified smallholder farmers in Sri Lanka maintaining high quality organic spice harvests.' },
    { title: 'Automotive OEMs', desc: 'Direct supply lines from certified spare parts manufacturers across Japan, Germany, and Korea.' },
    { title: 'Industrial Polymer Suppliers', desc: 'Direct petrochemical manufacturers providing clean eco-responsible polymer compounds.' }
  ];

  const AsianPartners = [
    {
      name: 'Sinochem Group',
      country: 'China',
      logo: 'SC',
      bg: 'from-cyan-500/10 to-blue-500/10 text-cyan-600',
      intro: 'A leading state-owned chemical giant supplying high-grade eco-friendly polymer raw materials to our Plastic Cube Manufacturing division.'
    },
    {
      name: 'Toyota Tsusho',
      country: 'Japan',
      logo: 'TT',
      bg: 'from-red-500/10 to-rose-500/10 text-red-600',
      intro: 'Strategic trade partner supplying authentic Japanese OEM mechanical components and engine replacement units for our Motors division.'
    },
    {
      name: 'COSCO Shipping',
      country: 'China',
      logo: 'CS',
      bg: 'from-blue-500/10 to-indigo-500/10 text-blue-600',
      intro: 'Global maritime shipping partner managing high-capacity transport lines linking Colombo Port with prominent industrial East Asian harbors.'
    },
    {
      name: 'Denso Corporation',
      country: 'Japan',
      logo: 'DN',
      bg: 'from-emerald-500/10 to-teal-500/10 text-emerald-600',
      intro: 'Providing cutting-edge automotive electronic components and vehicle thermal systems for our global distribution channels.'
    },
    {
      name: 'BYD Auto',
      country: 'China',
      logo: 'BYD',
      bg: 'from-slate-700/10 to-slate-900/10 text-slate-800',
      intro: 'Collaborative partner in logistics fleet electrification, aiding our agricultural division in transitioning to clean transportation.'
    },
    {
      name: 'Mitsui & Co.',
      country: 'Japan',
      logo: 'MC',
      bg: 'from-amber-500/10 to-orange-500/10 text-amber-600',
      intro: 'Major Japanese trading house collaborating on international export lines for Ceylon spice shipments to premium East Asian markets.'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-ocean font-bold tracking-widest uppercase mb-3 block"
          >
            Alliances
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-navy"
          >
            Our Partners & Alliances
          </motion.h1>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </div>

        {/* Global Connection Image */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 mb-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">Strategic Collaborations</h2>
            <p className="text-slate-600 leading-relaxed text-base">
              At Bashwara & Company, we believe long-term compound growth is unlocked via powerful, mutual, value-adding networks. We actively maintain active partnerships with globally certified organizations across six operational sectors.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop" 
              alt="Light corporate handshakes and partnerships" 
              className="rounded-2xl object-cover h-64 w-full shadow-sm"
            />
          </div>
        </div>

        {/* Partner categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {partnerTypes.map((pt, i) => (
            <motion.div 
              key={pt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-inner flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{pt.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{pt.desc}</p>
              </div>
              <div className="mt-6 flex gap-4 text-xs font-semibold uppercase tracking-wider text-brand-ocean">
                <span>Certified Alliance</span>
                <span>•</span>
                <span>Global Compliance</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* East Asian Corporate Partners Section */}
        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200/60">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-ocean uppercase tracking-widest block mb-2">Global Network</span>
            <h2 className="text-3xl font-serif font-bold text-brand-navy">China & Japan Corporate Partners</h2>
            <div className="w-12 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AsianPartners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Custom CSS Logo Circle */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${partner.bg} flex items-center justify-center font-bold text-xl tracking-wider mb-5 shadow-sm`}>
                    {partner.logo}
                  </div>
                  
                  <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">{partner.country} Partner</span>
                  <h3 className="text-lg font-bold text-brand-navy mb-3">{partner.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{partner.intro}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  <span>Supply Chain</span>
                  <span>Active Alliance</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
