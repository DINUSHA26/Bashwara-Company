'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { CldImage } from 'next-cloudinary';
import { stagger, fadeUp } from '@/lib/animations';

export function NewsTeaser() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real scenario, this would fetch from /api/news
    // Mocking the data for the UI representation
    setArticles([
      {
        slug: 'new-spice-export-facility',
        title: 'Bashwara Opens State-of-the-Art Spice Processing Facility',
        excerpt: 'Expanding our global reach with a new ISO 22000 certified facility aimed at European markets.',
        publishedAt: new Date().toISOString(),
        coverImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop',
      },
      {
        slug: 'q3-financial-results-2026',
        title: 'Q3 2026: Record Growth in Vehicle Spare Parts Division',
        excerpt: 'The conglomerate reports a 24% YoY growth driven by new manufacturing partnerships.',
        publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
        coverImage: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=600&auto=format&fit=crop',
      },
      {
        slug: 'gem-exhibition-geneva',
        title: 'Showcasing Sri Lankan Sapphires at Geneva Gem Expo',
        excerpt: 'Our luxury gems division takes center stage at the premier European jewelry exhibition.',
        publishedAt: new Date(Date.now() - 86400000 * 12).toISOString(),
        coverImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
      }
    ]);
    setLoading(false);
  }, []);

  return (
    <section className="py-24 bg-surface-light">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-brand-navy mb-4 font-serif">Latest Updates</h2>
            <div className="w-16 h-1 bg-gold" />
          </div>
          <Link href="/news" className="hidden md:flex items-center gap-2 text-brand-steel font-medium hover:text-brand-ocean transition-colors">
            View All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {!loading && (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article) => (
              <motion.div key={article.slug} variants={fadeUp} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-56 w-full overflow-hidden bg-brand-navy/5">
                  <motion.img
                    src={article.coverImage}
                    alt={article.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-brand-navy/0 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-brand-navy/50 mb-3">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2 group-hover:text-brand-ocean transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-brand-navy/70 line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <Link href={`/news/${article.slug}`} className="text-gold font-medium flex items-center gap-1 group/link">
                    Read Story <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
