'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SubpageHero } from '@/components/layout/SubpageHero';
import { ArrowRight, Gem, Settings, Factory, Box, Leaf, Globe } from 'lucide-react';

const SECTORS_LIST = [
  {
    slug: 'gem-jewellery',
    name: 'Gem & Jewellery Division',
    icon: Gem,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop',
    desc: 'Ethical gemstone mining and exquisite Ceylon sapphire trading networks supplying premier international luxury jewelry markets.',
  },
  {
    slug: 'spare-parts',
    name: 'Vehicle Spare Parts Division',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=600&auto=format&fit=crop',
    desc: 'Authorized global distributor supplying certified OEM automotive components and custom high-durability spare replacement parts.',
  },
  {
    slug: 'motors-parts',
    name: 'Motors and Parts',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=600&auto=format&fit=crop',
    desc: 'Heavy industrial power units, assembly logistics, and massive hydraulic heavy equipment distribution pipelines.',
  },
  {
    slug: 'plastics',
    name: 'Plastic Cube Manufacturing',
    icon: Box,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
    desc: 'Advanced injection molding, polymer extrusion, and high-precision plastic components supplying international supply chains.',
  },
  {
    slug: 'spices',
    name: 'Spicy & Food Products Export',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop',
    desc: 'Vibrant organic single-origin Ceylon spices including Grade-A cinnamon, cardamom, and black pepper processing facilities.',
  },
  {
    slug: 'china-agency',
    name: 'China Import & Export Agency',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop',
    desc: 'Customs brokerage, complete freight clearing logistics, and dedicated trading pipelines connecting East Asia and South Asia.',
  }
];

export default function SectorsListingPage() {
  return (
    <div className="bg-white min-h-screen overflow-hidden text-brand-navy">
      
      {/* Premium collage/emphasize sector hero banner */}
      <SubpageHero 
        tag="Our Scope"
        title="Conglomerate Sectors"
        description="Spanning six highly specialized and integrated business sectors driving sustainable value creation in South Asia and global markets."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
        alt="Diverse industrial conglomerate collage representing all six sectors"
      />

      {/* Intro Block */}
      <div className="container mx-auto px-4 max-w-4xl text-center mt-20 mb-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-brand-navy mb-8"
        >
          Explore our diverse sectors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Spanning six highly specialized and integrated business sectors, Bashwara & Company is a dynamically growing conglomerate in South Asia, creating long-term sustainable value across industries that shape economies. With a steadfast commitment to innovation, quality, and excellence, we lead with purpose, driving progress across local and international markets.
        </motion.p>
      </div>

      {/* Dynamic Colorful Sector Grid */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTORS_LIST.map((sector, i) => (
            <motion.div
              key={sector.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Colorful Image */}
                <div className="relative h-60 w-full overflow-hidden bg-brand-navy/10">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Glassmorphic Icon Badge overlay */}
                  <div className="absolute top-4 left-4 p-3 bg-brand-navy/80 backdrop-blur-md rounded-xl border border-white/20">
                    <sector.icon className="w-6 h-6 text-gold" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-ocean transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {sector.desc}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href={`/sectors/${sector.slug}`}
                  className="inline-flex items-center gap-2 text-gold font-bold text-sm tracking-wide uppercase hover:text-brand-ocean transition-colors"
                >
                  Explore Sector <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
