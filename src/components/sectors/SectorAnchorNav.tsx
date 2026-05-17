'use client';

import React, { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
}

export function SectorAnchorNav({ items }: { items: NavItem[] }) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100; // Offset for sticky header
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:block sticky top-24 w-64 flex-shrink-0 self-start">
      <div className="bg-white rounded-xl shadow-lg border border-surface-border p-6">
        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-6">On this page</h4>
        <nav className="flex flex-col gap-3 relative">
          {/* Vertical tracking line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-surface-border -z-10" />
          
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex items-center gap-4 text-sm font-medium transition-all text-left group ${
                activeId === item.id ? 'text-brand-ocean' : 'text-brand-navy/60 hover:text-brand-navy'
              }`}
            >
              <div className={`w-4 h-4 rounded-full border-2 bg-white transition-colors flex-shrink-0 ${
                activeId === item.id ? 'border-brand-ocean' : 'border-surface-border group-hover:border-brand-navy/30'
              }`} />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
