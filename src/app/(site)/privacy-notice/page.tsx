import React from 'react';
import { SubpageHero } from '@/components/layout/SubpageHero';

export default function PrivacyNoticePage() {
  return (
    <div className="bg-white min-h-screen text-brand-navy">
      <SubpageHero 
        tag="Legal"
        title="Privacy Notice"
        description="Learn how we collect, use, protect and handle your personal data."
        image="/images/banners/contact_banner.png"
      />

      <section className="py-16 lg:py-24 bg-white relative z-10 -mt-10 rounded-t-[40px] shadow-2xl border-t border-slate-200/50">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4 text-brand-navy">1. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4 text-brand-navy">2. How We Use Collected Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Bashwara & Company may collect and use Users' personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>To improve customer service</li>
              <li>To personalize user experience</li>
              <li>To send periodic emails and respond to inquiries</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4 text-brand-navy">3. How We Protect Your Information</h2>
            <p className="text-slate-600 leading-relaxed">
              We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
