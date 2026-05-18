'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SubpageHero } from '@/components/layout/SubpageHero';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen overflow-hidden text-brand-navy">
      {/* Full-Screen Contact Hero */}
      <SubpageHero 
        tag="Reach Out"
        title="Contact Us"
        description="Whether you are looking to partner with one of our sectors or have a general corporate inquiry, our team is fully ready to assist you."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop"
        alt="Bashwara Corporate Headquarters Reception & Lounge Area"
      />

      {/* Main Form and Location Details Section with slide-up parallax look */}
      <section className="py-24 bg-slate-50 relative z-10 -mt-10 rounded-t-[40px] shadow-2xl border-t border-slate-200/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Info & Map */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div className="bg-brand-navy text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 font-serif text-gold">Corporate Office</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Address</strong>
                      <span className="text-white/80">No: 400, Deans Road,<br />Colombo 10, Sri Lanka</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Telephone</strong>
                      <span className="text-white/80">011 2 627 000</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Email</strong>
                      <span className="text-white/80">info@cau.bashwara.com</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block mb-1">Business Hours</strong>
                      <span className="text-white/80">Mon - Fri: 8:30 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Map Placeholder */}
              <div className="h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-md border border-slate-300/40 flex items-center justify-center relative group">
                 <MapPin className="w-10 h-10 text-brand-navy/30 absolute z-10" />
                 <div className="absolute inset-0 bg-white/20 group-hover:bg-white/0 transition-colors" />
                 <span className="text-brand-navy/60 font-semibold z-10 mt-16 text-sm">Google Maps Location</span>
              </div>
            </div>

            {/* General Contact Form */}
            <div className="w-full lg:w-2/3 bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-slate-200/80">
              <h3 className="text-2xl font-bold mb-8 text-brand-navy">Send us a message</h3>
              <form className="space-y-6" action="/api/inquiry" method="POST">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-medium text-brand-navy/80 mb-2">Full Name *</label>
                     <input required type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-brand-navy/80 mb-2">Email Address *</label>
                     <input required type="email" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean" />
                   </div>
                 </div>
                 
                 <div>
                   <label className="block text-sm font-medium text-brand-navy/80 mb-2">Subject / Interested Sector *</label>
                   <select required className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean bg-white text-brand-navy">
                     <option value="">Select an option</option>
                     <option value="Gems">Gem & Jewellery</option>
                     <option value="SpareParts">Vehicle Spare Parts</option>
                     <option value="Motors">Motors and Parts</option>
                     <option value="Plastics">Plastic Manufacturing</option>
                     <option value="Spices">Spices & Food Export</option>
                     <option value="ChinaAgency">China Import Agency</option>
                     <option value="General">General Inquiry</option>
                   </select>
                 </div>

                 <div>
                   <label className="block text-sm font-medium text-brand-navy/80 mb-2">Message *</label>
                   <textarea required rows={5} className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean"></textarea>
                 </div>

                 <button type="button" onClick={() => alert('Inquiry successfully recorded!')} className="bg-brand-ocean hover:bg-brand-deep text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-sm">
                   Submit Message
                 </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
