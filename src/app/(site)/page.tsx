import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsCounter } from '@/components/home/StatsCounter';
import { SectorsGrid } from '@/components/home/SectorsGrid';
import { AboutSnapshot } from '@/components/home/AboutSnapshot';
import { ESGHighlights } from '@/components/home/ESGHighlights';
import { NewsTeaser } from '@/components/home/NewsTeaser';
import { PartnersStrip } from '@/components/home/PartnersStrip';

export const metadata: Metadata = {
  title: 'Home | Bashwara & Company (Pvt) Ltd',
  description: 'A pioneering conglomerate driving sustainable industrial growth, global logistics, and premium manufacturing excellence across six global sectors.',
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bashwara & Company (Pvt) Ltd',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bashwara.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    foundingDate: '2008',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No: 400, Deans Road',
      addressLocality: 'Colombo 10',
      addressCountry: 'LK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94-11-2-627-000',
      contactType: 'customer service',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsCounter />
      <SectorsGrid />
      <AboutSnapshot />
      <PartnersStrip />
      <ESGHighlights />
      <NewsTeaser />
    </>
  );
}
