import React from 'react';
import { Metadata } from 'next';
import { ESGHighlights } from '@/components/home/ESGHighlights';

export const metadata: Metadata = {
  title: 'ESG Impact | Bashwara & Company',
  description: 'Our commitment to Environmental, Social, and Governance sustainability.',
};

export default function ESGPage() {
  return (
    <div className="pt-24 min-h-screen bg-brand-navy">
      <div className="container mx-auto px-4 text-center mb-16 pt-8">
        <h1 className="text-5xl font-serif font-bold text-white mb-6">Driving Sustainable Impact</h1>
        <p className="text-lg text-white/70 max-w-3xl mx-auto">
          At Bashwara, sustainability isn't an afterthought—it's embedded in our DNA. We measure our success not just in revenue, but in the positive impact we leave on our planet and our communities.
        </p>
      </div>

      {/* Reuse the Homepage ESG Highlights component for consistency */}
      <ESGHighlights />
      
      <div className="bg-white py-24">
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
