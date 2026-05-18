import React from 'react';
import { Metadata } from 'next';
import { NewsTeaser } from '@/components/home/NewsTeaser';
import { SubpageHero } from '@/components/layout/SubpageHero';

export const metadata: Metadata = {
  title: 'News & Media | Bashwara & Company',
  description: 'Latest news, press releases, and media updates from our global divisions.',
};

export default function NewsPage() {
  return (
    <div className="bg-white min-h-screen overflow-hidden text-brand-navy">
      {/* Full-Screen News Hero */}
      <SubpageHero 
        tag="Media Center"
        title="News & Updates"
        description="Latest news, press releases, corporate milestones, and media coverage across our global conglomerate operations."
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop"
        alt="Modern conference center presentation room with bright white lights"
      />

      {/* Slide-up Content Section */}
      <section className="py-24 bg-slate-50 relative z-10 -mt-10 rounded-t-[40px] shadow-2xl border-t border-slate-200/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-ocean font-serif text-sm tracking-widest uppercase block font-semibold">Latest Coverage</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">Corporate Press Releases</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="-mt-12">
            <NewsTeaser />
          </div>
        </div>
      </section>
    </div>
  );
}
