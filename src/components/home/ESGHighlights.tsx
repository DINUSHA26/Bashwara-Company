'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, ShieldCheck } from 'lucide-react';

const ESG_PILLARS = [
  {
    icon: Leaf,
    title: 'Environmental',
    desc: 'Committed to carbon-neutral operations by 2030, sustainable sourcing in spices, and eco-friendly mining reclamation.',
    color: 'bg-[#2E8B57]',
  },
  {
    icon: Users,
    title: 'Social',
    desc: 'Empowering local communities through fair-trade practices, rigorous labor standards, and rural education programs.',
    color: 'bg-brand-ocean',
  },
  {
    icon: ShieldCheck,
    title: 'Governance',
    desc: 'Maintaining transparent corporate structures with zero-tolerance policies on corruption and strict international compliance.',
    color: 'bg-gold',
  },
];

export function ESGHighlights() {
  return (
    <section className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Sustainability</span>
          <h2 className="text-4xl font-serif font-bold mb-4">Our ESG Commitment</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We integrate Environmental, Social, and Governance principles into the core of our corporate strategy, ensuring long-term value for all stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ESG_PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className={`w-14 h-14 rounded-full ${pillar.color} flex items-center justify-center mb-6`}>
                <pillar.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-white/70 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
