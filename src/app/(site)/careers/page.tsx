'use client';

import React, { useEffect, useState } from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import { SubpageHero } from '@/components/layout/SubpageHero';

export default function CareersPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mocking fetch from /api/careers
    setJobs([
      { _id: '1', title: 'Senior Polymer Engineer', department: 'Plastics Division', location: 'Colombo', type: 'Full-time' },
      { _id: '2', title: 'Quality Control Inspector', department: 'China Agency', location: 'Guangzhou, CN', type: 'Contract' },
      { _id: '3', title: 'Logistics Coordinator', department: 'Spare Parts', location: 'Colombo', type: 'Full-time' },
    ]);
    setLoading(false);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-hidden text-brand-navy">
      {/* Full-Screen Careers Hero */}
      <SubpageHero 
        tag="Join Our Inspired Team"
        title="Build Your Career With Us"
        description="We are always looking for passionate individuals, visionaries, and skilled professionals to join our corporate trajectory across global sectors."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
        alt="Bashwara Corporate team collaborating in bright modern workspace"
      />

      {/* Main Jobs Listing Section with Elegant Slide-up Card */}
      <section className="py-24 bg-slate-50 relative z-10 -mt-10 rounded-t-[40px] shadow-2xl border-t border-slate-200/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-brand-ocean font-serif text-sm tracking-widest uppercase block font-semibold">Active Opportunities</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy">Open Positions</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {loading ? (
              <div className="text-center py-12 text-brand-navy/50">Loading opportunities...</div>
            ) : jobs.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-brand-navy mb-2">No Open Positions</h3>
                <p className="text-brand-navy/60">Please check back later or submit a general application.</p>
              </div>
            ) : (
              jobs.map((job) => (
                <div key={job._id} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between hover:border-gold hover:shadow-md transition-all group">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-ocean transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-brand-navy/60 font-medium">
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4 text-brand-ocean/80" /> {job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-brand-ocean/80" /> {job.location}</span>
                      <span className="bg-slate-100 text-brand-navy/80 px-2 py-1 rounded text-xs uppercase tracking-wide font-semibold">{job.type}</span>
                    </div>
                  </div>
                  <button className="bg-brand-navy hover:bg-gold text-white hover:text-brand-navy px-6 py-3 rounded-lg font-bold transition-colors shadow-sm">
                    Apply Now
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
