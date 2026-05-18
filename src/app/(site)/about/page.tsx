'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { SubpageHero } from '@/components/layout/SubpageHero';
import { 
  Compass, 
  Users, 
  History, 
  Handshake, 
  Award, 
  Globe, 
  Shield, 
  Lightbulb, 
  Leaf, 
  Star, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  Heart,
  Eye
} from 'lucide-react';

interface SubSectionCard {
  title: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
  colorClass: string;
  bgGlow: string;
}

interface FootprintPin {
  id: string;
  city: string;
  country: string;
  details: string;
  x: number; // Percent from left
  y: number; // Percent from top
}

export default function AboutPage() {
  const [hoveredPin, setHoveredPin] = useState<FootprintPin | null>(null);

  const subSections: SubSectionCard[] = [
    {
      title: 'Vision & Mission',
      desc: 'Discover our core purpose, vision for South Asia, and corporate values.',
      href: '/about/vision-mission',
      icon: <Compass className="w-6 h-6" />,
      colorClass: 'text-amber-500 border-amber-500/20 bg-amber-500/5',
      bgGlow: 'group-hover:shadow-amber-500/10 group-hover:border-amber-500/40',
    },
    {
      title: 'Leadership Profile',
      desc: 'Meet the executive board driving our conglomerate trajectory.',
      href: '/about/leadership',
      icon: <Users className="w-6 h-6" />,
      colorClass: 'text-sky-500 border-sky-500/20 bg-sky-500/5',
      bgGlow: 'group-hover:shadow-sky-500/10 group-hover:border-sky-500/40',
    },
    {
      title: 'Our History',
      desc: 'Explore our milestones and heritage established since 2008.',
      href: '/about/history',
      icon: <History className="w-6 h-6" />,
      colorClass: 'text-teal-500 border-teal-500/20 bg-teal-500/5',
      bgGlow: 'group-hover:shadow-teal-500/10 group-hover:border-teal-500/40',
    },
    {
      title: 'Our Partners',
      desc: 'Explore our active strategic alliances across China, Japan, and globally.',
      href: '/about/partners',
      icon: <Handshake className="w-6 h-6" />,
      colorClass: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5',
      bgGlow: 'group-hover:shadow-emerald-500/10 group-hover:border-emerald-500/40',
    },
  ];

  const footprintPins: FootprintPin[] = [
    { id: 'colombo', city: 'Colombo (HQ)', country: 'Sri Lanka', details: 'Conglomerate Headquarters, Agri-Spice Processing, Gem Sourcing & Corporate Center', x: 71.5, y: 69.5 },
    { id: 'mumbai', city: 'Mumbai Hub', country: 'India', details: 'South Asian Logistics Coordination, Agricultural Sourcing & Trade Operations', x: 68.0, y: 62.0 },
    { id: 'bangkok', city: 'Bangkok Office', country: 'Thailand', details: 'Southeast Asian Spice Trade, Regional Supply Chain Sourcing & Sales Liaison', x: 76.5, y: 64.0 },
    { id: 'shanghai', city: 'Shanghai Hub', country: 'China', details: 'East Asia Logistics, Supply Chain Management & B2B Trading Hub', x: 80.0, y: 47.0 },
    { id: 'tokyo', city: 'Tokyo Office', country: 'Japan', details: 'Automotive Parts OEM Procurement & Heavy Industrial Motors Alliance', x: 84.5, y: 42.0 },
    { id: 'dubai', city: 'Dubai Trade Hub', country: 'UAE', details: 'Middle East Logistics, Corporate Re-export Center & Trade Financing Office', x: 63.5, y: 56.5 },
    { id: 'sydney', city: 'Sydney Hub', country: 'Australia', details: 'Oceania Regional Distribution Center, Spices Import & Polymer Raw Materials Sales', x: 83.0, y: 83.0 },
    { id: 'singapore', city: 'Singapore Center', country: 'Singapore', details: 'Southeast Asian Shipping Control, Treasury & Regional Trade Headquarters', x: 75.5, y: 69.0 },
  ];

  const visualHighlights = [
    {
      title: 'Leadership',
      desc: 'Meet the visionaries across the Bashwara Executive Board steering our global conglomerate trajectory.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
      href: '/about/leadership',
      action: 'Meet Our Directors'
    },
    {
      title: 'Our Awards',
      desc: 'Celebrating a legacy of sustainable impact, export compliance, and corporate business excellence.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop',
      href: '/about/partners',
      action: 'View Alliances'
    },
    {
      title: 'Our Heritage',
      desc: 'Relive the milestones and rich heritage established since our inception in 2008.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
      href: '/about/history',
      action: 'Explore Timeline'
    }
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden text-brand-navy">
      
      {/* 1. Premium Corporate Banner Section */}
      <SubpageHero 
        tag="Since 2008"
        title="About Bashwara & Company"
        description="A pioneering conglomerate driving sustainable industrial growth, global logistics, and premium manufacturing excellence across six global sectors."
        image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop"
        alt="Bashwara Corporate Headquarters Lobby"
      />

      {/* 2. Main About Intro Section */}
      <section className="py-20 bg-white relative z-10 -mt-10 rounded-t-[40px] shadow-2xl">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative group"
            >
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                  alt="Bashwara Corporate Headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-xl tracking-widest uppercase border border-gold px-6 py-3 rounded">
                    Excellence In Action
                  </span>
                </div>
              </div>
              
              {/* FloatingBadge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-gold text-brand-navy p-6 md:p-8 rounded-2xl shadow-2xl z-10 border border-white/20"
              >
                <div className="text-4xl md:text-5xl font-bold font-serif mb-1">18+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-navy/85">Years of Operations</div>
              </motion.div>
            </motion.div>

            {/* Right Intro Description Side */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-gold font-serif text-sm tracking-widest uppercase block">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-navy leading-tight">
                  A Legacy of Industrial Trust & Progress
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full" />
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                From our humble origins in Colombo to a multi-national presence spanning five continents, Bashwara & Company represents the vanguard of modern Sri Lankan enterprise. Our journey is one of compound growth, robust ethical foundations, and an unwavering commitment to international quality standards.
              </p>

              <p className="text-slate-600 text-base leading-relaxed font-light">
                Today, we integrate world-class maritime logistics, supply chain solutions, sustainable polymer molding, agricultural spice exports, and gemstone sourcing into a unified ecosystem built on corporate social governance and green technology.
              </p>

              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-6 text-center lg:text-left">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-gold">2008</h3>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">Established</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold text-brand-ocean">6</h3>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">Global Sectors</p>
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold text-brand-ocean">100%</h3>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-1">Ethical Sourced</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Navigation Cards (Subpage Links) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-brand-ocean font-serif text-sm tracking-widest uppercase block">Corporate Pillars</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-navy">Explore Our Architecture</h2>
            <p className="text-slate-500 font-light text-sm md:text-base">
              Navigate through the key divisions defining the strategic path, operational history, and leadership of our group.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subSections.map((sec, i) => (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <Link href={sec.href}>
                  <div className={`h-full bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between ${sec.bgGlow}`}>
                    <div className="space-y-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${sec.colorClass}`}>
                        {sec.icon}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-brand-navy tracking-tight group-hover:text-brand-ocean transition-colors">
                          {sec.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-light">
                          {sec.desc}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-gold transition-colors">
                      Learn More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Values Part (Premium Green Gradient Header) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Values Heading Block matching User Mockup style */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-700 pb-1"
            >
              Our Values
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-2xl text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto"
            >
              Strength in diversity, empowered by equality, and driven by sustainability — these principles define &ldquo;BASHWARA & COMPANY&rdquo; and shape everything we do.
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full mt-4" />
          </div>

          {/* Grid of Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: '01',
                title: 'Integrity',
                desc: 'Operating with absolute honesty, transparency, and ethical standards in every transaction and partnership.',
                icon: <Shield className="w-5 h-5 text-emerald-600" />,
                bgClass: 'hover:border-emerald-500/30'
              },
              {
                id: '02',
                title: 'Innovation',
                desc: 'Constantly seeking technological and operational advancements to refine and scale our business models.',
                icon: <Lightbulb className="w-5 h-5 text-emerald-600" />,
                bgClass: 'hover:border-emerald-500/30'
              },
              {
                id: '03',
                title: 'Sustainability',
                desc: 'Enforcing active green methodologies across manufacturing, spice export, and gemstone mining.',
                icon: <Leaf className="w-5 h-5 text-emerald-600" />,
                bgClass: 'hover:border-emerald-500/30'
              },
              {
                id: '04',
                title: 'Excellence',
                desc: 'Delivering unmatched quality to build trust with local and international stakeholders alike.',
                icon: <Star className="w-5 h-5 text-emerald-600" />,
                bgClass: 'hover:border-emerald-500/30'
              }
            ].map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-slate-50 p-8 rounded-2xl border border-slate-200/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md ${val.bgClass}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-500/10">
                    {val.icon}
                  </div>
                  <span className="text-3xl font-bold font-serif text-emerald-500/20">{val.id}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{val.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{val.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Our Global Footprint (Pulsing SVG Vector Map) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          {/* Header Block matching mockup */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-700 pb-1"
            >
              Our Global Footprint
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-slate-600 leading-relaxed font-light max-w-3xl mx-auto"
            >
              With operations across 5 continents and a market reach of over 80 countries, Bashwara & Company is truly a driving force in global business.
            </motion.p>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full mt-4" />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Metrics column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm">
                <h3 className="text-5xl font-bold font-serif text-brand-navy mb-2">20+</h3>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Countries of Operations</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">Direct commercial presence with local logistics, offices, and sourcing centres.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm">
                <h3 className="text-5xl font-bold font-serif text-brand-navy mb-2">80+</h3>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Countries' Market Presence</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">Global B2B exports, luxury gemstones distribution, and organic Ceylon spice trade networks.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm">
                <h3 className="text-5xl font-bold font-serif text-brand-navy mb-2">38,000+</h3>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Employees Worldwide</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">A massive global workforce spanning farming collaboratives, logistics networks, and manufacturing lines.</p>
              </div>
            </motion.div>

            {/* Right World Map with Pins */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/3 bg-white p-2 md:p-6 rounded-3xl border border-slate-200/80 shadow-md relative aspect-[2/1] overflow-hidden flex items-center justify-center"
            >
              {/* Detailed Real World Map Background Illustration - 100% matched aspect ratio */}
              <div 
                className="absolute inset-0 z-0 opacity-20 select-none pointer-events-none bg-no-repeat bg-center filter saturate-50 brightness-95"
                style={{
                  backgroundImage: "url('/world-map-vector.png')",
                  backgroundSize: "100% 100%"
                }}
              />

              {/* Dynamic Coordinate Pins overlay */}
              <div className="absolute inset-0 z-10">
                {footprintPins.map((pin) => {
                  const isHovered = hoveredPin?.id === pin.id;
                  return (
                    <div 
                      key={pin.id}
                      className="absolute group/pin cursor-pointer"
                      style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                      onMouseEnter={() => setHoveredPin(pin)}
                      onMouseLeave={() => setHoveredPin(null)}
                    >
                      {/* Outer pulsing ring */}
                      <span className="absolute -left-3 -top-3 inline-flex h-8 w-8 rounded-full bg-emerald-500/20 animate-ping" />
                      
                      {/* Core Dot Pin */}
                      <div className={`relative w-3.5 h-3.5 rounded-full border-2 border-white transition-all duration-300 shadow-md ${
                        isHovered ? 'bg-gold scale-125' : 'bg-emerald-500'
                      }`}>
                        <div className="absolute -inset-1 rounded-full border border-emerald-500/40 opacity-0 group-hover/pin:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Tooltip Overlay */}
              <AnimatePresence>
                {hoveredPin && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    className="absolute bottom-4 left-4 right-4 md:right-auto md:left-6 md:w-80 bg-brand-navy text-white p-6 rounded-2xl shadow-2xl z-20 border border-white/10 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2 mb-2 text-gold">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-widest">{hoveredPin.country}</span>
                    </div>
                    <h4 className="text-lg font-serif font-bold text-white mb-2">{hoveredPin.city}</h4>
                    <p className="text-white/80 text-xs leading-relaxed font-light">{hoveredPin.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Default Legend in case of no hover */}
              {!hoveredPin && (
                <div className="absolute bottom-6 left-6 text-slate-400 text-xs font-medium flex items-center gap-2 z-10 bg-slate-50/80 px-3 py-1.5 rounded-lg border border-slate-200/50 backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500 animate-bounce" />
                  Hover over the active pins to view global hubs.
                </div>
              )}
            </motion.div>

          </div>

        </div>
      </section>

      {/* 6. Improved About Us Visual Section (Leadership, Awards, Heritage) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-gold font-serif text-sm tracking-widest uppercase block">Conglomerate Trajectory</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-navy">Milestones & Leadership</h2>
            <p className="text-slate-500 font-light text-sm md:text-base">
              Dive deep into our corporate milestones, awards, and early beginnings establishing our solid governance foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visualHighlights.map((hl, idx) => (
              <motion.div
                key={hl.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full"
              >
                {/* Visual Image container with exact Aspect Ratio */}
                <div className="h-[280px] overflow-hidden relative">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={hl.image} 
                    alt={hl.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  {/* Subtle Elegant Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-8 flex flex-col justify-between flex-1">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-brand-navy tracking-tight group-hover:text-brand-ocean transition-colors">
                      {hl.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      {hl.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center">
                    <Link href={hl.href} className="w-full text-center bg-slate-50 border border-slate-200/60 hover:bg-brand-navy hover:text-white hover:border-brand-navy py-3 px-6 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 block">
                      {hl.action}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
