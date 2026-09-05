import React from 'react';
import { SubpageHero } from '@/components/layout/SubpageHero';

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white min-h-screen text-brand-navy">
      <SubpageHero 
        tag="Legal"
        title="Terms & Conditions"
        description="The rules and guidelines for using the Bashwara & Company portal."
        image="/images/banners/contact_banner.png"
      />

      <section className="py-16 lg:py-24 bg-white relative z-10 -mt-10 rounded-t-[40px] shadow-2xl border-t border-slate-200/50">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4 text-brand-navy">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use the Bashwara & Company portal if you do not agree to take all of the terms and conditions stated on this page.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4 text-brand-navy">2. License</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Unless otherwise stated, Bashwara & Company and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mt-2">
              <li>Republish material from this website</li>
              <li>Sell, rent or sub-license material from this website</li>
              <li>Reproduce, duplicate or copy material from this website</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4 text-brand-navy">3. User Comments</h2>
            <p className="text-slate-600 leading-relaxed">
              Certain parts of this website offer the opportunity for users to post and exchange opinions and information in certain areas of the website. Bashwara & Company does not filter, edit, publish or review Comments prior to their presence on the website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
