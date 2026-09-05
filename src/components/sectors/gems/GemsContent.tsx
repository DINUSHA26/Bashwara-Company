'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gem, ShieldCheck, Globe, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectorInquiryFloat } from '@/components/sectors/SectorInquiryFloat';
import { fadeUp } from '@/lib/animations';

export function GemsContent() {
  return (
    <div className="w-full space-y-20 text-brand-navy">
      
      {/* Executive Overview & Key Stats */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeUp}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/80"
      >
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold-dark font-bold text-xs uppercase tracking-wider mb-4 border border-gold/30">
            <span>Sri Lankan Gem Mining & Global Export</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4 leading-tight">
            Ethically Mined, Authentically Certified Ceylon Gemstones
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Bashwara & Company operates at the forefront of Sri Lanka’s world-renowned gemstone industry. 
            Sourcing directly from alluvial deposits in Ratnapura, Pelmadulla, and Elahera, we deliver untreated and 
            precision-cut Ceylon Sapphires, Rubies, and rare collector gems to international markets with full ethical traceability.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-100">
          {[
            { icon: ShieldCheck, title: "100% Ethical", desc: "NGJA Licensed & Restored Pits" },
            { icon: Award, title: "NGJA / GIA Certified", desc: "Authentic Lab Reports" },
            { icon: Gem, title: "Ceylon Origin", desc: "Direct Source Ratnapura & Elahera" },
            { icon: Globe, title: "Global Export", desc: "Insured Worldwide Delivery" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy">
                <stat.icon className="w-5 h-5 text-gold-dark" />
              </div>
              <h3 className="font-bold text-brand-navy text-lg">{stat.title}</h3>
              <p className="text-slate-500 text-xs leading-normal">{stat.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section 1: Ethical Mining & Field Operations */}
      <section className="space-y-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-gold-dark font-bold tracking-widest uppercase block text-xs mb-2">Sustainable Mining</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">Field Mining & Extraction Operations</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-xl">
              Our traditional and semi-mechanized alluvial mining operations preserve surrounding ecosystems while extracting gem-bearing gravel (<em>illam</em>) from deep water-bearing soil layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Mechanized Pit Excavation',
                subtitle: 'Ratnapura Alluvial Deposits',
                desc: 'Utilizing specialized heavy excavators to reach deep gem-bearing illam layers while adhering strictly to National Gem & Jewellery Authority environmental standards.',
                img: '/images/gems/gem-mining-1.jpg'
              },
              {
                title: 'High-Pressure Sluicing & Separation',
                subtitle: 'Field Gravel Sorting',
                desc: 'Miners use high-volume water pump sluice systems and mechanical shakers to wash clay away and isolate heavy gem gravels naturally without harsh chemicals.',
                img: '/images/gems/gem-mining-3.jpg'
              },
              {
                title: 'Site Rehabilitation & Land Restoration',
                subtitle: 'Eco-Friendly Field Operations',
                desc: 'After extraction, pits are systematically backfilled, topsoil is restored, and land is rehabilitated for agricultural use or reforestation.',
                img: '/images/gems/gem-mining-2.jpg'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col group hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                    Step 0{idx + 1}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider block">{step.subtitle}</span>
                    <h3 className="font-bold text-lg leading-tight">{step.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Ethically Certified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Hero Showcase: Royal Blue Ceylon Sapphire Spotlight */}
      <section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy rounded-3xl overflow-hidden shadow-2xl text-white grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[480px]">
              <img 
                src="/images/gems/blue-sapphire-hand.jpg" 
                alt="Natural Ceylon Royal Blue Cushion Sapphire" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/90" />
            </div>
            
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30 self-start">
                <Gem className="w-3.5 h-3.5" />
                <span>Featured Masterpiece</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-white leading-tight">
                Natural Royal Blue Ceylon Sapphire
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Hand-selected cushion-cut Ceylon Royal Blue Sapphire boasting velvety saturation, flawless light refraction, and superior optical clarity. Sourced directly from our Ratnapura deposit and faceted by master cutters.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  { label: 'Color Grade', value: 'Royal Blue (Vivid Saturation)' },
                  { label: 'Origin', value: 'Ratnapura, Sri Lanka' },
                  { label: 'Cut & Symmetry', value: 'Cushion Cut - Master Precision' },
                  { label: 'Treatment', value: 'Natural (Unheated / Heated available)' },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center text-xs border-b border-white/10 pb-2">
                    <span className="text-slate-400">{spec.label}:</span>
                    <span className="font-semibold text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Precious Gems Collection Catalog */}
      <section className="space-y-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-gold-dark font-bold tracking-widest uppercase block text-xs mb-2">Our Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">Precious & Semi-Precious Gems Catalog</h2>
            </div>
            <p className="text-slate-600 text-sm max-w-lg">
              We offer single investment-grade stones, matched pairs, layout sets, and bulk gem parcels tailored for jewelry houses and collectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Rough & Cut Gemstone Collection',
                origin: 'Sri Lanka Alluvial Fields',
                grade: 'Natural Assortment',
                desc: 'Uncut gem gravel crystals including aquamarine, tourmaline, garnets alongside faceted stones.',
                img: '/images/gems/gem-collection.jpg',
                tag: 'Rough & Cut'
              },
              {
                name: 'Ceylon Blue Sapphire',
                origin: 'Ratnapura & Elahera',
                grade: 'AAA Grade',
                desc: 'World-famous cornflower and royal blue sapphires known for unmatched clarity and brilliance.',
                img: '/images/gems/blue-sapphire.png',
                tag: 'Premium'
              },
              {
                name: 'Padparadscha Sapphire',
                origin: 'Sri Lanka (Exclusive)',
                grade: 'Collector Item',
                desc: 'Extremely rare pinkish-orange sapphires named after the delicate lotus blossom color.',
                img: '/images/gems/padparadscha.png',
                tag: 'Rare'
              },
              {
                name: 'Golden Yellow Sapphire',
                origin: 'Pelmadulla',
                grade: 'Pushparaga AA+',
                desc: 'Vibrant golden canary sapphires sought after for fine jewelry and astrological significance.',
                img: '/images/gems/yellow-sapphire.png',
                tag: 'High Clarity'
              },
              {
                name: 'Ceylon Star Sapphire',
                origin: 'Ratnapura Deposits',
                grade: 'Asterism Rare',
                desc: 'Cabochon-cut sapphires exhibiting crisp, centered six-ray star optical effects.',
                img: '/images/gems/star-sapphire.png',
                tag: 'Specialty'
              },
              {
                name: 'Natural Red Ruby',
                origin: 'Sourced Deposits',
                grade: 'Pigeon Blood AAA',
                desc: 'Rich vivid red untreated rubies cut for high brilliance and deep saturation.',
                img: '/images/gems/ruby.png',
                tag: 'Investment'
              },
            ].map((gem, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="relative h-60 bg-slate-900 overflow-hidden">
                    <img 
                      src={gem.img} 
                      alt={gem.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <span className="absolute top-4 right-4 bg-gold text-brand-navy font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
                      {gem.tag}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-gold text-xs font-medium uppercase tracking-wider">Origin: {gem.origin}</p>
                      <h3 className="font-serif font-bold text-xl leading-tight">{gem.name}</h3>
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <p className="text-slate-600 text-sm leading-relaxed">{gem.desc}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100 text-xs font-semibold text-brand-navy">
                  <span>Grade: {gem.grade}</span>
                  <span className="text-gold-dark flex items-center gap-1">Inquire <ArrowRight className="w-3 h-3" /></span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 3: Export Logistics & Certification Process */}
      <section className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg space-y-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="max-w-2xl mb-10">
            <span className="text-gold-dark font-bold tracking-widest uppercase block text-xs mb-2">Global Trade</span>
            <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">Export Logistics & Certification Standard</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every gemstone exported by Bashwara & Company undergoes strict national testing, authentication, and secure insured transit to ensure 100% compliance and client peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { num: '01', title: 'Rough Sorting & Grading', desc: 'Expert gemologists assess rough stones for clarity, color potential, and optimal yield.' },
              { num: '02', title: 'Precision Faceting', desc: 'Master lapidarists cut stones adhering to international proportion standards.' },
              { num: '03', title: 'NGJA & Lab Certification', desc: 'Stones undergo testing at NGJA or independent gem labs (GIA, Lotus, AGL).' },
              { num: '04', title: 'Sealed & Insured Courier', desc: 'Customs clearance and door-to-door insured shipping via specialized couriers.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-serif font-extrabold text-gold-dark/40 mb-3 block">{step.num}</span>
                  <h3 className="font-bold text-brand-navy text-base mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <SectorInquiryFloat onClick={() => alert('Open Inquiry Modal for Gems')} />
    </div>
  );
}

