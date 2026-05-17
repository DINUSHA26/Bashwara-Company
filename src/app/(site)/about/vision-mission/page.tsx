'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VisionMissionPage() {
  const values = [
    { title: 'Integrity', desc: 'Operating with absolute honesty, transparency, and ethical standards in every transaction.' },
    { title: 'Innovation', desc: 'Constantly seeking technological and operational advancements to refine our business models.' },
    { title: 'Sustainability', desc: 'Enforcing green methodologies across manufacturing, spice export, and gemstone mining.' },
    { title: 'Excellence', desc: 'Delivering unmatched quality to build trust with local and international stakeholders.' }
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-ocean font-bold tracking-widest uppercase mb-3 block"
          >
            Philosophy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-navy"
          >
            Vision, Mission & Corporate Values
          </motion.h1>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <span className="text-sm font-bold text-gold uppercase tracking-widest block mb-4">The Future</span>
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Our Vision</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                To be the undisputed driving force behind sustainable industrial and commercial innovation in South Asia, enriching lives globally through ethical enterprise, world-class standards, and forward-thinking technologies.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop" 
              alt="Bright Sunlit Corporate Meeting Room" 
              className="w-full h-64 object-cover rounded-xl shadow-inner border border-slate-100"
            />
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-10 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <span className="text-sm font-bold text-brand-ocean uppercase tracking-widest block mb-4">Our Purpose</span>
              <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Delivering unparalleled value across our diverse portfolio through highly ethical practices, technological advancement, green footprints, and an unwavering commitment to our stakeholders, our people, and our planet.
              </p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" 
              alt="Team Collaborating in Bright Open Office Space" 
              className="w-full h-64 object-cover rounded-xl shadow-inner border border-slate-100"
            />
          </motion.div>
        </div>

        {/* Corporate Values */}
        <div className="bg-slate-50 p-12 rounded-3xl border border-slate-200/60">
          <h3 className="text-3xl font-serif font-bold text-brand-navy text-center mb-12">Core Corporate Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-brand-ocean/10 rounded-lg flex items-center justify-center text-brand-ocean font-bold text-lg mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-2">{v.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
