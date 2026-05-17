import React from 'react';
import { Metadata } from 'next';
import { Download, TrendingUp, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investor Relations | Bashwara & Company',
  description: 'Financial highlights, annual reports, and corporate governance for our investors.',
};

export default function InvestorRelationsPage() {
  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Investors</span>
          <h1 className="text-5xl font-serif font-bold text-brand-navy mb-6">Delivering Consistent Value</h1>
          <p className="text-lg text-brand-navy/70">
            Transparent reporting, robust financial health, and steadfast corporate governance form the bedrock of our commitment to shareholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
          {[
            { title: 'Financial Reports', icon: TrendingUp, desc: 'Access our quarterly and annual financial statements.' },
            { title: 'Corporate Governance', icon: Shield, desc: 'Review our governance frameworks and board charters.' },
            { title: 'Presentations', icon: Download, desc: 'Download recent AGM presentations and investor packs.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-light border border-surface-border p-8 rounded-2xl text-center group hover:border-gold transition-colors">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-brand-ocean" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
              <p className="text-brand-navy/60 mb-6">{item.desc}</p>
              <button className="text-gold font-medium hover:underline inline-flex items-center gap-2">
                View Archive
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
