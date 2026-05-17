import React from 'react';
import { Metadata } from 'next';
import { NewsTeaser } from '@/components/home/NewsTeaser';

export const metadata: Metadata = {
  title: 'News & Media | Bashwara & Company',
  description: 'Latest news, press releases, and media updates from our global divisions.',
};

export default function NewsPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 text-center mb-12">
        <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Media Center</span>
        <h1 className="text-5xl font-serif font-bold text-brand-navy mb-6">News & Updates</h1>
      </div>
      
      {/* Reusing the NewsTeaser grid component which is already designed for listing */}
      <div className="-mt-12">
        <NewsTeaser />
      </div>
    </div>
  );
}
