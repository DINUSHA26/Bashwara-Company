import React from 'react';
import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Bashwara & Company',
  description: 'Get in touch with our corporate headquarters.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 bg-surface-light min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Reach Out</span>
          <h1 className="text-5xl font-serif font-bold text-brand-navy mb-6">Contact Us</h1>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            Whether you are looking to partner with one of our sectors or have a general inquiry, our team is ready to assist you.
          </p>
        </div>

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
            
            {/* Simple Map Placeholder */}
            <div className="h-64 bg-gray-300 rounded-2xl overflow-hidden shadow-md flex items-center justify-center relative group">
               {/* In a real app, integrate an iframe to Google Maps */}
               <MapPin className="w-10 h-10 text-brand-navy/50 absolute z-10" />
               <div className="absolute inset-0 bg-white/20 group-hover:bg-white/0 transition-colors" />
               <span className="text-brand-navy/60 font-medium z-10 mt-16">Google Maps Integration</span>
            </div>
          </div>

          {/* General Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-surface-border">
            <h3 className="text-2xl font-bold mb-8 text-brand-navy">Send us a message</h3>
            <form className="space-y-6" action="/api/inquiry" method="POST">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-brand-navy/80 mb-2">Full Name *</label>
                   <input required type="text" className="w-full border border-surface-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-brand-navy/80 mb-2">Email Address *</label>
                   <input required type="email" className="w-full border border-surface-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean" />
                 </div>
               </div>
               
               <div>
                 <label className="block text-sm font-medium text-brand-navy/80 mb-2">Subject / Interested Sector *</label>
                 <select required className="w-full border border-surface-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean bg-white">
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
                 <textarea required rows={5} className="w-full border border-surface-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-ocean focus:ring-1 focus:ring-brand-ocean"></textarea>
               </div>

               <button type="button" onClick={() => alert('Validation & Submit handled by Server Action/API')} className="bg-brand-ocean hover:bg-brand-deep text-white font-bold py-4 px-8 rounded-lg transition-colors">
                 Submit Message
               </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
