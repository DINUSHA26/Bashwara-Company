'use client';

import React from 'react';

const LOGOS = [
  'ISO 9001', 'ISO 22000', 'HACCP', 'GMP Certified', 'FSC', 'Fair Trade', 'CE Mark'
];

export function PartnersStrip() {
  return (
    <div className="w-full bg-white py-12 border-y border-brand-navy/10 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Double the array for seamless scrolling */}
        {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
          <div key={idx} className="mx-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="text-2xl font-bold text-brand-navy/40 font-serif tracking-widest">{logo}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
