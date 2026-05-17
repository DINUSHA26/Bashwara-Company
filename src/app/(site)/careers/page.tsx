'use client';

import React, { useEffect, useState } from 'react';
import { MapPin, Briefcase } from 'lucide-react';

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
    <div className="pt-24 pb-24 bg-surface-light min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Join Us</span>
          <h1 className="text-5xl font-serif font-bold text-brand-navy mb-6">Build Your Career With Us</h1>
          <p className="text-lg text-brand-navy/70">
            We are always looking for passionate individuals to join our inspired team across our global sectors.
          </p>
        </div>

        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-12 text-brand-navy/50">Loading opportunities...</div>
          ) : jobs.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-surface-border">
              <h3 className="text-xl font-bold text-brand-navy mb-2">No Open Positions</h3>
              <p className="text-brand-navy/60">Please check back later or submit a general application.</p>
            </div>
          ) : (
            jobs.map((job) => (
              <div key={job._id} className="bg-white p-8 rounded-2xl border border-surface-border shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between hover:border-gold hover:shadow-md transition-all group">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-ocean transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-brand-navy/60 font-medium">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="bg-surface-light px-2 py-1 rounded">{job.type}</span>
                  </div>
                </div>
                <button className="bg-brand-navy hover:bg-gold text-white hover:text-brand-navy px-6 py-3 rounded-lg font-bold transition-colors">
                  Apply Now
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
