'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectorAnchorNav } from '@/components/sectors/SectorAnchorNav';
import { fadeUp } from '@/lib/animations';

const NAV_ITEMS = [
  { id: 'inventory', label: 'Global Inventory' },
  { id: 'inquiry-matrix', label: 'Interactive Inquiry Matrix' },
];

const SPARE_PARTS = [
  { 
    name: 'LED Matrix Headlight Assembly', 
    category: 'Headlights', 
    cond: 'Brand New', 
    price: 'High-Tier', 
    img: '/images/spare-parts/led-headlight.png' 
  },
  { 
    name: 'Bi-Xenon Adaptive Headlight', 
    category: 'Headlights', 
    cond: 'Reconditioned', 
    price: 'Mid-Tier', 
    img: '/images/spare-parts/xenon-headlight.png' 
  },
  { 
    name: 'Premium Synthetic Oil Filter', 
    category: 'Oil Filters', 
    cond: 'Brand New', 
    price: 'Entry-Tier', 
    img: '/images/spare-parts/synthetic-oil-filter.png' 
  },
  { 
    name: 'Heavy-Duty Spin-On Oil Filter', 
    category: 'Oil Filters', 
    cond: 'Brand New', 
    price: 'Entry-Tier', 
    img: '/images/spare-parts/heavy-duty-oil-filter.png' 
  },
  { 
    name: 'Acoustic Laminated Windshield Glass', 
    category: 'Glass', 
    cond: 'Brand New', 
    price: 'Mid-Tier', 
    img: '/images/spare-parts/windshield-glass.png' 
  },
  { 
    name: 'Tempered Side Window Glass', 
    category: 'Glass', 
    cond: 'Used', 
    price: 'Entry-Tier', 
    img: '/images/spare-parts/side-glass.png' 
  },
  { 
    name: 'V8 Engine Block Assembly', 
    category: 'Engine', 
    cond: 'Reconditioned', 
    price: 'High-Tier', 
    img: '/images/spare-parts/v8-engine.png' 
  },
  { 
    name: '6-Speed Automatic Transmission', 
    category: 'Engine', 
    cond: 'Reconditioned', 
    price: 'High-Tier', 
    img: '/images/spare-parts/transmission.png' 
  },
  { 
    name: 'Carbon Fiber High-Torque Clutch Kit', 
    category: 'Engine', 
    cond: 'Brand New', 
    price: 'Mid-Tier', 
    img: '/images/spare-parts/clutch-kit.png' 
  },
  { 
    name: 'Adaptive Air Suspension Strut', 
    category: 'Suspension', 
    cond: 'Brand New', 
    price: 'Mid-Tier', 
    img: '/images/spare-parts/air-strut.png' 
  },
  { 
    name: 'Drilled Carbon-Ceramic Brake Rotors', 
    category: 'Suspension', 
    cond: 'Brand New', 
    price: 'High-Tier', 
    img: '/images/spare-parts/brake-rotors.png' 
  },
  { 
    name: '6-Piston High-Performance Calipers', 
    category: 'Suspension', 
    cond: 'Brand New', 
    price: 'Mid-Tier', 
    img: '/images/spare-parts/brake-caliper.png' 
  }
];

const CATEGORIES = ['All', 'Headlights', 'Oil Filters', 'Glass', 'Engine', 'Suspension'];

export function SparePartsContent() {
  const [filter, setFilter] = useState('All');
  
  // Inquiry Form state
  const [formData, setFormData] = useState({
    manufacturer: '',
    model: '',
    year: '',
    category: 'Engine',
    partDescription: '',
    senderName: '',
    senderEmail: '',
    contactNo: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const filteredParts = filter === 'All' 
    ? SPARE_PARTS 
    : SPARE_PARTS.filter(part => part.category === filter);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sector: 'SpareParts',
          senderName: formData.senderName,
          senderEmail: formData.senderEmail,
          contactNo: formData.contactNo,
          message: `Inquiry for ${formData.manufacturer} ${formData.model} (${formData.year}) - ${formData.category}. Description: ${formData.partDescription}`,
          metaData: {
            manufacturer: formData.manufacturer,
            model: formData.model,
            year: formData.year,
            category: formData.category,
            partDescription: formData.partDescription,
          },
          recaptchaToken: 'bypass-token-dev'
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMessage('Inquiry successfully registered in MongoDB! Our team will contact you shortly.');
        setFormData({
          manufacturer: '',
          model: '',
          year: '',
          category: 'Engine',
          partDescription: '',
          senderName: '',
          senderEmail: '',
          contactNo: '',
        });
      } else {
        setErrorMessage(data.error || 'Failed to register inquiry in MongoDB.');
      }
    } catch (err) {
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 relative w-full">
      <SectorAnchorNav items={NAV_ITEMS} />

      <div className="flex-1 space-y-24">
        
        {/* Section 1: Inventory */}
        <section id="inventory" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-brand-steel font-bold tracking-widest uppercase mb-2 block text-sm">Catalog</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-8">Heavy & Light Vehicle Components</h2>
            
            {/* Category Filter Tab Bar */}
            <div className="flex flex-wrap gap-3 mb-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat 
                      ? 'bg-brand-ocean text-white shadow-md shadow-brand-ocean/20' 
                      : 'bg-white border border-slate-200 text-brand-navy hover:bg-brand-navy/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid Catalog with Local Assets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredParts.map((part, idx) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={part.name} 
                    className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Quality Local Image */}
                    <div className="h-48 overflow-hidden relative bg-slate-50 border-b border-slate-100">
                      <img 
                        src={part.img} 
                        alt={part.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className={`absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-bold shadow-sm ${
                        part.cond === 'Brand New' ? 'bg-emerald-500 text-white' : 
                        part.cond === 'Reconditioned' ? 'bg-amber-500 text-white' : 
                        'bg-slate-500 text-white'
                      }`}>
                        {part.cond}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs font-bold text-gold uppercase tracking-wider mb-1">{part.category}</span>
                      <h3 className="font-bold text-lg text-brand-navy mb-4 line-clamp-2 group-hover:text-brand-ocean transition-colors">{part.name}</h3>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-sm text-slate-500">Price Range: <strong className="text-brand-navy font-bold">{part.price}</strong></span>
                        <button className="text-brand-ocean text-sm font-bold hover:text-brand-navy transition-colors flex items-center gap-1 group/btn">
                          Request Price
                          <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Inquiry Matrix */}
        <section id="inquiry-matrix" className="scroll-mt-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-brand-navy text-white rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-ocean/10 rounded-full blur-3xl -z-10" />
              
              <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Direct Order</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8">Interactive Inquiry Matrix</h2>
              
              {/* Toast Messages */}
              {successMessage && (
                <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl text-sm font-medium">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="mb-6 p-4 bg-rose-500/20 border border-rose-500/30 text-rose-300 rounded-xl text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Manufacturer *</label>
                    <select 
                      required
                      value={formData.manufacturer}
                      onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:bg-brand-navy"
                    >
                      <option value="" className="text-brand-navy">Select Manufacturer</option>
                      <option value="Toyota" className="text-brand-navy">Toyota</option>
                      <option value="Mercedes-Benz" className="text-brand-navy">Mercedes-Benz</option>
                      <option value="BMW" className="text-brand-navy">BMW</option>
                      <option value="Honda" className="text-brand-navy">Honda</option>
                      <option value="Nissan" className="text-brand-navy">Nissan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Model *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Land Cruiser / C-Class"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Year *</label>
                    <input 
                      type="text"
                      required
                      maxLength={4}
                      placeholder="e.g. 2022"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Component Category *</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:bg-brand-navy"
                    >
                      <option value="Headlights" className="text-brand-navy">Headlights</option>
                      <option value="Oil Filters" className="text-brand-navy">Oil Filters</option>
                      <option value="Glass" className="text-brand-navy">Glass</option>
                      <option value="Engine" className="text-brand-navy">Engine</option>
                      <option value="Suspension" className="text-brand-navy">Suspension</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Upload Chassis Tag / Photo (Optional)</label>
                    <input 
                      type="file" 
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold file:text-brand-navy hover:file:bg-white transition-all cursor-pointer" 
                    />
                  </div>
                </div>

                {/* Contact Information (Required for Database Validation) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. John Doe"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Your Email *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Contact Number</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. +94 77 123 4567"
                      value={formData.contactNo}
                      onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Part Description *</label>
                  <textarea 
                    required
                    rows={4} 
                    value={formData.partDescription}
                    onChange={(e) => setFormData({ ...formData, partDescription: e.target.value })}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold" 
                    placeholder="Describe the specific part, OEM numbers, or fittings you need..." 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full bg-gold hover:bg-white text-brand-navy font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/10 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-brand-navy" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Connecting and Saving to MongoDB...
                    </>
                  ) : (
                    'Submit Inquiry to MongoDB'
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
