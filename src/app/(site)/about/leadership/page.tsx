'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LeadershipPage() {
  const leaders = [
    { name: 'Deshamanya Deva Bashwara', role: 'Chairman / Founder', bio: 'With over 25 years of pioneering enterprise experience, guiding the strategic vision of the conglomerate.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' },
    { name: 'Dr. Anura Senanayake', role: 'Chief Executive Officer', bio: 'Leading global expansion projects across gemstone logistics and heavy industrial vehicle parts sectors.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop' },
    { name: 'Minoli Wijewardene', role: 'Director - ESG & Corporate Affairs', bio: 'Championing carbon-neutral spice supply chains and sustainable polymer molding operations.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' }
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
            Governance
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-navy"
          >
            Leadership Profile
          </motion.h1>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </div>

        {/* Board introduction */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 mb-16 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" 
              alt="Bright light board meeting" 
              className="rounded-2xl object-cover h-48 w-full shadow-sm"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">Board of Directors</h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Our executive board matches generations of deep industrial wisdom with rigorous, modern data-driven methodologies, keeping Bashwara & Company on a trajectory of compound corporate growth.
            </p>
          </div>
        </div>

        {/* Board Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div 
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200/60 group hover:shadow-md transition-shadow"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-brand-ocean tracking-wide uppercase block mb-1">{leader.role}</span>
                <h3 className="text-lg font-serif font-bold text-brand-navy mb-3">{leader.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
