'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, ChevronRight, Gem, Settings, Factory, Box, Leaf, Globe } from 'lucide-react';

const SECTORS = [
  { name: 'Gem & Jewellery Division', href: '/sectors/gem-jewellery', icon: Gem },
  { name: 'Vehicle Spare Parts Division', href: '/sectors/spare-parts', icon: Settings },
  { name: 'Motors and Parts', href: '/sectors/motors-parts', icon: Factory },
  { name: 'Plastic Cube Manufacturing', href: '/sectors/plastics', icon: Box },
  { name: 'Spicy and Food Products Export', href: '/sectors/spices', icon: Leaf },
  { name: 'China Import & Export Agency', href: '/sectors/china-agency', icon: Globe },
];

export function MobileDrawer({ isOpen, onClose, navLinks }: { isOpen: boolean; onClose: () => void; navLinks: any[] }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-brand-navy/95 backdrop-blur-xl lg:hidden overflow-y-auto"
        >
          <div className="flex flex-col pt-24 px-6 pb-12 min-h-screen">
            <Accordion.Root type="single" collapsible className="w-full flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/10 last:border-0">
                  {link.subLinks ? (
                    <Accordion.Item value={link.name} className="w-full">
                      <Accordion.Header>
                        <Accordion.Trigger className="w-full flex items-center justify-between py-4 text-white text-lg font-medium group">
                          {link.name}
                          <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180 text-gold" />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        <div className="flex flex-col gap-1 pb-4 pl-4">
                          {link.subLinks.map((sub: any) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={onClose}
                              className="flex items-center gap-3 py-3 text-white/80 hover:text-white min-h-[48px]"
                            >
                              <ChevronRight className="w-4 h-4 text-gold" />
                              <span className="text-sm">{sub.name}</span>
                            </Link>
                          ))}
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  ) : link.isSectors ? (
                    <Accordion.Item value="sectors" className="w-full">
                      <Accordion.Header>
                        <Accordion.Trigger className="w-full flex items-center justify-between py-4 text-white text-lg font-medium group">
                          {link.name}
                          <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180 text-gold" />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        <div className="flex flex-col gap-1 pb-4 pl-4">
                          {SECTORS.map((sector) => (
                            <Link
                              key={sector.href}
                              href={sector.href}
                              onClick={onClose}
                              className="flex items-center gap-3 py-3 text-white/80 hover:text-white min-h-[48px]"
                            >
                              <sector.icon className="w-5 h-5 text-gold" />
                              <span className="text-sm">{sector.name}</span>
                            </Link>
                          ))}
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-4 text-white text-lg font-medium min-h-[48px]"
                    >
                      {link.name}
                      {link.hasDropdown && <ChevronRight className="w-5 h-5 text-white/50" />}
                    </Link>
                  )}
                </div>
              ))}
            </Accordion.Root>

            <div className="mt-auto pt-12 flex items-center justify-center gap-6">
               <button className="text-white text-sm font-medium tracking-wide border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-brand-navy transition-colors min-h-[48px]">
                 Contact Us
               </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
