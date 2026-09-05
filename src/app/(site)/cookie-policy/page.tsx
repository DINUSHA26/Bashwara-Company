import React from 'react';
import { SubpageHero } from '@/components/layout/SubpageHero';

export default function CookiePolicyPage() {
  return (
    <div className="bg-white min-h-screen text-brand-navy">
      <SubpageHero 
        tag="Legal"
        title="Cookie Policy"
        description="Information about how we use cookies and similar technologies on our website."
        image="/images/banners/contact_banner.png"
      />

      <section className="py-16 lg:py-24 bg-white relative z-10 -mt-10 rounded-t-[40px] shadow-2xl border-t border-slate-200/50">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4 text-brand-navy">1. What Are Cookies?</h2>
            <p className="text-slate-600 leading-relaxed">
              Cookies are small text files that are stored on your browser or the hard drive of your computer or mobile device when you visit a webpage or application. They work to make your experience browsing our site as smooth as possible.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4 text-brand-navy">2. How We Use Cookies</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use cookies for a variety of reasons detailed below:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Essential Cookies:</strong> Required for the operation of our website.</li>
              <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
              <li><strong>Functionality Cookies:</strong> Used to recognize you when you return to our website.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4 text-brand-navy">3. Managing Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
