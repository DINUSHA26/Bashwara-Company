import React from 'react';
import { Metadata } from 'next';
import { Download, TrendingUp, Shield } from 'lucide-react';
import { SubpageHero } from '@/components/layout/SubpageHero';

export const metadata: Metadata = {
  title: 'Investor Relations | Bashwara & Company',
  description: 'Financial highlights, annual reports, and corporate governance for our investors.',
};

export default function InvestorRelationsPage() {
  return (
    <div className="bg-white min-h-screen overflow-hidden text-brand-navy">
      {/* Full-Screen Investor Relations Hero */}
      <SubpageHero 
        tag="Investor Relations"
        title="Delivering Consistent Value"
        description="Transparent reporting, robust financial health, and steadfast corporate governance form the bedrock of our commitment to shareholders."
        image="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=1600&auto=format&fit=crop"
        alt="Corporate office room overlooking bright skylines under bright sun"
      />

      {/* Slide-up Content Section */}
      <section className="py-24 bg-slate-50 relative z-10 -mt-10 rounded-t-[40px] shadow-2xl border-t border-slate-200/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-ocean font-serif text-sm tracking-widest uppercase block font-semibold">Financial & Corporate Center</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">Governance & Reports</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Financial Reports', icon: TrendingUp, desc: 'Access our quarterly and annual financial statements.' },
              { title: 'Corporate Governance', icon: Shield, desc: 'Review our governance frameworks and board charters.' },
              { title: 'Presentations', icon: Download, desc: 'Download recent AGM presentations and investor packs.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl text-center group hover:border-gold hover:shadow-md transition-all">
                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-brand-ocean" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed font-light">{item.desc}</p>
                <button className="text-amber-600 font-bold hover:text-brand-navy transition-colors text-sm uppercase tracking-wide inline-flex items-center gap-2">
                  View Archive
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
