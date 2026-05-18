import React from 'react';
import { Metadata } from 'next';
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
        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop"
        alt="Sustainable organic agriculture and green solar grids"
      />

      {/* Slide-up transition for the ESG Highlights section */}
      <div className="relative z-10 -mt-10 rounded-t-[40px] overflow-hidden shadow-2xl">
        <ESGHighlights />
      </div>
      
      <div className="bg-white py-24 relative z-10">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-brand-navy mb-8">Download Our 2026 ESG Report</h2>
            <button className="bg-brand-ocean hover:bg-brand-deep text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg">
               Download PDF (4.2 MB)
            </button>
         </div>
      </div>
    </div>
  );
}
