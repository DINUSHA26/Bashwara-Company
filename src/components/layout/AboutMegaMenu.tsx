'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Compass, Users, History, Handshake } from 'lucide-react';

const ABOUT_LINKS = [
  {
    name: 'Vision & Mission',
    href: '/about/vision-mission',
    desc: 'Discover our core purpose, vision for South Asia, and corporate values.',
    icon: Compass
  },
  {
    name: 'Leadership Profile',
    href: '/about/leadership',
    desc: 'Meet the executive board driving our conglomerate trajectory.',
    icon: Users
  },
  {
    name: 'Our History',
    href: '/about/history',
    desc: 'Explore our milestones and heritage established since 2008.',
    icon: History
  },
  {
    name: 'Our Partners',
    href: '/about/partners',
    desc: 'Explore our active strategic alliances across China, Japan, and globally.',
    icon: Handshake
  }
];

export function AboutMegaMenu({ isOpen, onMouseLeave, onLinkClick }: { isOpen: boolean; onMouseLeave: () => void; onLinkClick?: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          onMouseLeave={onMouseLeave}
          className="absolute top-full left-0 w-full bg-brand-deep/95 backdrop-blur-lg border-t border-white/10 shadow-2xl z-50"
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ABOUT_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onLinkClick}
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="p-3 bg-brand-navy rounded-md group-hover:bg-brand-ocean transition-colors flex-shrink-0">
                    <link.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium group-hover:text-gold transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-white/60 text-sm mt-1 leading-relaxed">{link.desc}</p>
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
