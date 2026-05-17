'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Gem, Settings, Factory, Box, Leaf, Globe } from 'lucide-react';

const SECTORS = [
  { name: 'Gem & Jewellery Division', href: '/sectors/gem-jewellery', icon: Gem },
  { name: 'Vehicle Spare Parts Division', href: '/sectors/spare-parts', icon: Settings },
  { name: 'Motors and Parts', href: '/sectors/motors-parts', icon: Factory },
  { name: 'Plastic Cube Manufacturing', href: '/sectors/plastics', icon: Box },
  { name: 'Spicy and Food Products Export', href: '/sectors/spices', icon: Leaf },
  { name: 'China Import & Export Agency', href: '/sectors/china-agency', icon: Globe },
];

export function MegaMenu({ isOpen, onMouseLeave, onLinkClick }: { isOpen: boolean; onMouseLeave: () => void; onLinkClick?: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onMouseLeave={onMouseLeave}
          className="absolute top-full left-0 w-full bg-brand-deep/95 backdrop-blur-lg border-t border-white/10 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SECTORS.map((sector) => (
                <Link
                  key={sector.href}
                  href={sector.href}
                  onClick={onLinkClick}
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="p-3 bg-brand-navy rounded-md group-hover:bg-brand-ocean transition-colors">
                    <sector.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium group-hover:text-gold transition-colors">
                      {sector.name}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">Explore our operations and capabilities in this sector.</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
