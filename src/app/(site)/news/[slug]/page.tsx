import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  // In a real app, fetch the article title based on the slug.
  return {
    title: `News Article | Bashwara & Company`,
  };
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  // Mock data structure
  const article = {
    title: 'Bashwara Opens State-of-the-Art Spice Processing Facility',
    publishedAt: 'October 12, 2026',
    content: 'Long form HTML or Markdown content goes here...',
  };

  if (!article) return notFound();

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-12">
          <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">Press Release</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-brand-navy/50 font-medium">Published on {article.publishedAt}</p>
        </div>
        
        <div className="prose prose-lg prose-blue max-w-none text-brand-navy/80">
          <p>
            Colombo, Sri Lanka — Bashwara & Company (Pvt) Ltd has officially inaugurated its new
            state-of-the-art spice processing and export facility, aimed directly at serving the
            rapidly growing European organic market.
          </p>
          <p>
            The facility holds rigorous ISO 22000 and HACCP certifications, reinforcing the
            conglomerate's commitment to uncompromising quality...
          </p>
        </div>
      </div>
    </article>
  );
}
