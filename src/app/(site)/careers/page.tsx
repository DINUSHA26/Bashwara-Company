'use client';

import React, { useState } from 'react';
import { TrendingUp, Compass, Heart, Award, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { SubpageHero } from '@/components/layout/SubpageHero';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate submission to the careers endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const whyJoinUsData = [
    {
      icon: <TrendingUp className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />,
      title: 'Growth Opportunities',
      description: 'Clear career progression paths with mentorship from industry veterans across our divisions.',
    },
    {
      icon: <Compass className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />,
      title: 'Dynamic Environment',
      description: 'Work in the fast-paced world of engineering, gemstones, and global logistics with top talent.',
    },
    {
      icon: <Heart className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />,
      title: 'Competitive Benefits',
      description: 'Industry-leading compensation packages, comprehensive healthcare, and employee wellbeing programs.',
    },
    {
      icon: <Award className="w-6 h-6 text-gold group-hover:text-white transition-colors duration-300" />,
      title: 'Impactful Work',
      description: 'Contribute to powering engineering mobility and shaping the global future on a daily basis.',
    },
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden text-brand-navy">
      {/* Full-Screen Careers Hero */}
      <SubpageHero 
        tag="Join Our Inspired Team"
        title="Build Your Career With Us"
        description="We are always looking for passionate individuals, visionaries, and skilled professionals to join our corporate trajectory across global sectors."
        image="/images/banners/careers_banner.png"
        alt="Bashwara Corporate team collaborating in bright modern workspace"
      />

      {/* Why Work With Us Section */}
      <section className="py-24 bg-slate-50 relative z-10 -mt-10 rounded-t-[40px] shadow-2xl border-t border-slate-200/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-ocean font-serif text-sm tracking-widest uppercase block font-semibold">Why Join Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">Why Work With Bashwara & Company?</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinUsData.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col items-center text-center hover:border-gold hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-brand-navy/5 rounded-full mb-6 group-hover:bg-brand-navy transition-colors duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-brand-navy/70 text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Application Section */}
      <section className="py-24 bg-brand-navy text-white relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold font-serif text-sm tracking-widest uppercase block font-semibold">Apply Now</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Submit Your Application</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-12 h-12 text-gold animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-white">Application Submitted!</h3>
                <p className="text-white/70 max-w-md mx-auto leading-relaxed">
                  Thank you for applying. Our talent acquisition team will review your credentials and get back to you shortly if there is a match.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 border border-gold hover:bg-gold hover:text-brand-navy text-gold px-6 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2.5">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none transition-all duration-300 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none transition-all duration-300 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+94 XX XXX XXXX"
                      className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2.5">Position of Interest</label>
                  <input
                    type="text"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="e.g., Sales Executive"
                    className="w-full bg-white/5 border border-white/10 focus:border-gold rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none transition-all duration-300 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gold hover:bg-white text-brand-navy disabled:bg-gold/50 disabled:cursor-not-allowed py-4 rounded-xl font-bold tracking-wider uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
