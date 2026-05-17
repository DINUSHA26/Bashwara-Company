'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function SectorInquiryFloat({ onClick }: { onClick: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down a bit
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="fixed bottom-8 right-8 z-50 bg-gold text-brand-navy shadow-2xl p-4 rounded-full flex items-center justify-center group"
          aria-label="Inquire Now"
        >
          <MessageSquare className="w-6 h-6 group-hover:hidden block" />
          <span className="hidden group-hover:flex items-center gap-2 font-medium px-2">
            Inquire Now
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
