import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectorHero } from '@/components/sectors/SectorHero';

// Note: In a full app, each sector's specific content would be broken into separate components.
// Here we scaffold the layout handler for the dynamic route.

const SECTOR_DATA: Record<string, any> = {
  'gem-jewellery': {
    title: 'Gem & Jewellery Division',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2000&auto=format&fit=crop',
    revalidate: 3600,
  },
  'spare-parts': {
    title: 'Vehicle Spare Parts Division',
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=2000&auto=format&fit=crop',
    revalidate: 0, // CSR
  },
  'motors-parts': {
    title: 'Motors and Parts',
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=2000&auto=format&fit=crop',
    revalidate: 7200,
  },
  'plastics': {
    title: 'Plastic Cube Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
    revalidate: 3600,
  },
  'spices': {
    title: 'Spicy & Food Products Export',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop',
    revalidate: 3600,
  },
  'china-agency': {
    title: 'China Import & Export Agency',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop',
    revalidate: 0, // SSR
  }
};

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = SECTOR_DATA[resolvedParams.sector];
  if (!data) return { title: 'Not Found' };
  
  return {
    title: `${data.title} | Bashwara & Company`,
    description: `Explore the capabilities and offerings of the ${data.title}.`,
  };
}

import { GemsContent } from '@/components/sectors/gems/GemsContent';
import { SparePartsContent } from '@/components/sectors/spare-parts/SparePartsContent';

export default async function SectorPage({ params }: { params: Promise<{ sector: string }> }) {
  const resolvedParams = await params;
  const data = SECTOR_DATA[resolvedParams.sector];
  
  if (!data) {
    notFound();
  }

  return (
    <div className="bg-surface-light min-h-screen pb-24">
      <SectorHero 
        title={data.title}
        image={data.image}
        breadcrumb={data.title}
      />
      
      <div className="container mx-auto px-4 mt-12">
        {resolvedParams.sector === 'gem-jewellery' ? (
          <GemsContent />
        ) : resolvedParams.sector === 'spare-parts' ? (
          <SparePartsContent />
        ) : (
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-surface-border min-h-[600px] flex items-center justify-center">
            <p className="text-xl text-brand-navy/60 font-medium">
              {data.title} Content Module Loading...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
