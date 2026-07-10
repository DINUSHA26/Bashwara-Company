'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { stagger, fadeUp } from '@/lib/animations';

const SECTORS = [
  { id: 'gem-jewellery', name: 'Gem & Jewellery', desc: 'Ethical mining and global export of premium Sri Lankan sapphires.', image: '/images/sectors/gem_jewellery.png' },
  { id: 'spare-parts', name: 'Vehicle Spare Parts', desc: 'Comprehensive auto components distribution network.', image: '/images/sectors/spare_parts.png' },
  { id: 'motors-parts', name: 'Motors & Parts', desc: 'Heavy industrial electric motors and manufacturing systems.', image: '/images/sectors/motors_parts.png' },
  { id: 'plastics', name: 'Plastic Manufacturing', desc: 'High-capacity polymer injection and molding operations.', image: '/images/sectors/plastics.png' },
  { id: 'spices', name: 'Spicy & Food Export', desc: 'Organic farming and global distribution of Ceylon spices.', image: '/images/sectors/spices.png' },
  { id: 'china-agency', name: 'China Import Agency', desc: 'Streamlined sourcing, QC, and logistics handling.', image: '/images/sectors/china_agency.png' },
];

export function SectorsGrid() {
  return (
    <section id="sectors" className="py-24 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-4 font-serif">Our Business Sectors</h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SECTORS.map((sector) => (
            <motion.div key={sector.id} variants={fadeUp} className="group relative h-96 overflow-hidden rounded-xl bg-brand-navy cursor-pointer">
              <Link href={`/sectors/${sector.id}`} className="absolute inset-0 z-10" aria-label={sector.name} />
              <motion.img
                src={sector.image}
                alt={sector.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  {sector.name}
                </h3>
                <p className="text-white/80 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {sector.desc}
                </p>
                <div
                  className="inline-flex items-center gap-2 text-gold font-medium uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                >
                  Explore Division <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
