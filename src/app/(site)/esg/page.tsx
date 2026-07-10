import React from 'react';
import { Metadata } from 'next';
import { Globe, Users, Sprout, Recycle } from 'lucide-react';
import { ESGHighlights } from '@/components/home/ESGHighlights';
import { SubpageHero } from '@/components/layout/SubpageHero';

export const metadata: Metadata = {
  title: 'ESG Impact | Bashwara & Company',
  description: 'Our commitment to Environmental, Social, and Governance sustainability.',
};

export default function ESGPage() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <SubpageHero 
        tag="ESG Impact"
        title="Driving Sustainable Impact"
        description="At Bashwara, sustainability isn't an afterthought—it's embedded in our DNA. We measure our success not just in revenue, but in the positive impact we leave on our planet and our communities."
        image="/images/banners/esg_banner.png"
        alt="Sustainable organic agriculture and green solar grids"
      />

      {/* Slide-up transition for the ESG Highlights section */}
      <div className="relative z-10 -mt-10 rounded-t-[40px] overflow-hidden shadow-2xl">
        <ESGHighlights />
      </div>
      
      {/* ESG Targets & Metrics Section */}
      <section className="bg-slate-50 py-24 relative z-10 border-t border-slate-200/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-ocean font-serif text-sm tracking-widest uppercase block font-semibold">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">Sustainability Targets & Metrics</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center group hover:border-gold hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-5 text-green-600">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-4xl md:text-5xl font-bold font-serif text-brand-navy mb-2 group-hover:text-gold transition-colors duration-300">100%</span>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Carbon Neutrality</h3>
              <p className="text-brand-navy/70 text-sm leading-relaxed font-light">
                Targeting complete carbon-neutral operations by 2030 across all offices and logistics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center group hover:border-gold hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-5 text-blue-600">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-4xl md:text-5xl font-bold font-serif text-brand-navy mb-2 group-hover:text-gold transition-colors duration-300">15k+</span>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Lives Empowered</h3>
              <p className="text-brand-navy/70 text-sm leading-relaxed font-light">
                Supporting rural communities with access to healthcare, education, and clean water.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center group hover:border-gold hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-5 text-emerald-600">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-4xl md:text-5xl font-bold font-serif text-brand-navy mb-2 group-hover:text-gold transition-colors duration-300">1,200</span>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Organic Acres</h3>
              <p className="text-brand-navy/70 text-sm leading-relaxed font-light">
                Acres of agricultural land under sustainable and fair-trade spice farming contracts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center group hover:border-gold hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-5 text-amber-600">
                <Recycle className="w-6 h-6" />
              </div>
              <span className="text-4xl md:text-5xl font-bold font-serif text-brand-navy mb-2 group-hover:text-gold transition-colors duration-300">85%</span>
              <h3 className="text-lg font-bold text-brand-navy mb-2">Waste Recycled</h3>
              <p className="text-brand-navy/70 text-sm leading-relaxed font-light">
                Of manufacturing byproducts and plastics recycled or upcycled in our divisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
