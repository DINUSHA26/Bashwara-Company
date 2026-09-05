'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Wrench, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { fadeUp } from '@/lib/animations';

const SPARE_PARTS = [
  { 
    name: 'Front Shock Absorber Strut & Coil Assembly', 
    fitment: 'Suzuki Wagon R (MH34S/44S), Alto K10, Swift',
    category: 'Suspension & Steering', 
    cond: 'Brand New', 
    img: '/images/spare-parts/shock-absorber-real.png' 
  },
  { 
    name: 'Ventilated Brake Disc Rotors & Ceramic Pads Set', 
    fitment: 'Toyota Land Cruiser Prado 120/150, Hilux Revo, Fortuner',
    category: 'Braking System', 
    cond: 'Brand New', 
    img: '/images/spare-parts/brake-pads-real.png' 
  },
  { 
    name: 'Heavy-Duty 12V 120A Alternator Generator Unit', 
    fitment: 'Toyota Axio, Premio, Allion, KDH HiAce (1NZ-FE / 2KD)',
    category: 'Electrical & Lighting', 
    cond: 'Brand New', 
    img: '/images/spare-parts/alternator-real.png' 
  },
  { 
    name: '1NZ-FE 1.5L Complete Japanese Engine Block Assembly', 
    fitment: 'Toyota Corolla Axio, Premio, Allion, Fielder (NZE141 / NZE161)',
    category: 'Engine & Drivetrain', 
    cond: 'Reconditioned / Tested', 
    img: '/images/motors-parts/induction_motor.png' 
  },
  { 
    name: 'CVT Automatic Transmission Gearbox Unit', 
    fitment: 'Toyota Axio Hybrid, Vitz KSP130, Honda Vezel RU1, Fit GP5',
    category: 'Engine & Drivetrain', 
    cond: 'Reconditioned', 
    img: '/images/spare-parts/part_5_gearbox.jpg' 
  },
  { 
    name: 'Commercial Heavy-Duty Clutch Disc & Pressure Plate Kit', 
    fitment: 'Isuzu Elf NHR/NKR, Mitsubishi Canter FE444, Hilux Vigo',
    category: 'Engine & Drivetrain', 
    cond: 'Brand New', 
    img: '/images/spare-parts/part_6_clutch.jpg' 
  },
  { 
    name: 'LED Matrix Crystal Projector Headlight Unit Pair', 
    fitment: 'Toyota Hilux Revo / ROCCO (2018-2024)',
    category: 'Electrical & Lighting', 
    cond: 'Brand New Original', 
    img: '/images/spare-parts/part_7_headlight.jpg' 
  },
  { 
    name: 'High-Performance 4-Piston Hydraulic Brake Caliper Unit', 
    fitment: 'Honda Vezel RU3, Fit GP5, Grace, Nissan X-Trail T32',
    category: 'Braking System', 
    cond: 'Brand New', 
    img: '/images/spare-parts/part_11_caliper.jpg' 
  },
  { 
    name: 'Adaptive Air Suspension Strut Unit', 
    fitment: 'Toyota Land Cruiser V8 URJ202, Mitsubishi Montero V98W',
    category: 'Suspension & Steering', 
    cond: 'Brand New', 
    img: '/images/spare-parts/part_12_strut.jpg' 
  },
  { 
    name: 'Synthetic Engine Oil Filter Element (Cartridge)', 
    fitment: 'Toyota Premio, Allion, Axio, Prius ZVW30, CH-R, Aqua',
    category: 'Filters & Maintenance', 
    cond: 'Brand New', 
    img: '/images/spare-parts/part_8_oilfilter.jpg' 
  },
  { 
    name: 'Heavy-Duty Spin-On Diesel Fuel & Oil Filter Unit', 
    fitment: 'Isuzu Forward / Elf, Mitsubishi Fuso Canter, Leyland Bus',
    category: 'Filters & Maintenance', 
    cond: 'Brand New', 
    img: '/images/spare-parts/filter-real.jpg' 
  },
  { 
    name: 'Drilled Slotted Steel Brake Rotors Pair', 
    fitment: 'Toyota Axio WXB, Premio FEX, Honda Civic FC1, Vezel',
    category: 'Braking System', 
    cond: 'Brand New', 
    img: '/images/spare-parts/part_9_wheel.jpg' 
  },
  { 
    name: 'Acoustic Laminated Front Windshield Glass Unit', 
    fitment: 'Toyota HiAce KDH200, Axio NZE161, Honda Vezel RU1',
    category: 'Body & Glass', 
    cond: 'Brand New (DOT Certified)', 
    img: '/images/spare-parts/part_10_glass.jpg' 
  },
  { 
    name: '12V Maintenance-Free Heavy-Duty Automotive Battery', 
    fitment: 'Universal Fit - Toyota, Honda, Nissan, Suzuki Vehicles',
    category: 'Electrical & Lighting', 
    cond: 'Brand New', 
    img: '/images/spare-parts/battery-real.jpg' 
  },
  { 
    name: 'Performance Coilover Adjustable Suspension Kit', 
    fitment: 'Honda Civic FC1, Toyota Swift, Axio WXB',
    category: 'Suspension & Steering', 
    cond: 'Brand New', 
    img: '/images/spare-parts/suspension-real.jpg' 
  },
  { 
    name: 'OEM Factory Alloy Wheel Rim & Hub Assembly', 
    fitment: 'Toyota Land Cruiser Prado, Hilux Revo, Montero V98',
    category: 'Body & Glass', 
    cond: 'Brand New', 
    img: '/images/spare-parts/wheel-rim-real.jpg' 
  }
];

const CATEGORIES = [
  'All', 
  'Engine & Drivetrain', 
  'Braking System', 
  'Suspension & Steering', 
  'Electrical & Lighting', 
  'Filters & Maintenance', 
  'Body & Glass'
];

export function SparePartsContent() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Inquiry Form state
  const [formData, setFormData] = useState({
    manufacturer: '',
    model: '',
    year: '',
    category: 'Engine & Drivetrain',
    partDescription: '',
    senderName: '',
    senderEmail: '',
    contactNo: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const filteredParts = SPARE_PARTS.filter(part => {
    const matchesCategory = filter === 'All' || part.category === filter;
    const matchesSearch = searchQuery === '' || 
      part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.fitment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      part.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          category: 'Engine & Drivetrain',
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
    <div className="w-full space-y-16 text-brand-navy">
      
      {/* Section 1: Inventory */}
      <section id="inventory" className="scroll-mt-32">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          
          {/* Header & Search Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-gold-dark font-bold tracking-widest uppercase mb-2 block text-xs">Sri Lanka Market Inventory</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-navy">Genuine & Japanese Vehicle Spare Parts</h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                Comprehensive inventory of genuine OEM and high-tier reconditioned spare parts tailored for Toyota, Honda, Suzuki, Nissan, Mitsubishi & Isuzu vehicles in Sri Lanka.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search by part or model (e.g. Wagon R, Axio)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 text-xs font-medium focus:outline-none focus:border-brand-ocean bg-white shadow-sm"
              />
            </div>
          </div>
          
          {/* Category Filter Tab Bar */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-brand-navy text-white shadow-md' 
                    : 'bg-white border border-slate-200 text-brand-navy hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Catalog */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredParts.map((part, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={part.name + idx} 
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-md flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 group justify-between"
                >
                  <div>
                    {/* Actual Spare Part Photo */}
                    <div className="h-56 overflow-hidden relative bg-slate-900 border-b border-slate-100">
                      <img 
                        src={part.img} 
                        alt={part.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col">
                      <div className="flex items-center gap-1.5 text-gold-dark text-xs font-bold uppercase tracking-wider mb-2">
                        <Wrench className="w-3.5 h-3.5" />
                        <span>{part.category}</span>
                      </div>
                      <h3 className="font-bold text-lg text-brand-navy mb-2 leading-snug group-hover:text-brand-ocean transition-colors">{part.name}</h3>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 mb-4 text-xs">
                        <span className="text-slate-500 font-medium block">Sri Lanka Vehicle Fitment:</span>
                        <span className="font-bold text-brand-navy">{part.fitment}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>OEM Certified Part</span>
                    </span>
                    <a href="#inquiry-matrix" className="text-gold-dark hover:underline flex items-center gap-1 font-bold">
                      Inquire <ArrowRight className="w-3 h-3" />
                    </a>
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
  );
}
