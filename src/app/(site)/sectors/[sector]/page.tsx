import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectorHero } from '@/components/sectors/SectorHero';
import { GemsContent } from '@/components/sectors/gems/GemsContent';
import { SparePartsContent } from '@/components/sectors/spare-parts/SparePartsContent';
import { MotorsPartsContent } from '@/components/sectors/motors-parts/MotorsPartsContent';
import { PlasticsContent } from '@/components/sectors/plastics/PlasticsContent';
import { SpicesContent } from '@/components/sectors/spices/SpicesContent';
import { ChinaAgencyContent } from '@/components/sectors/china-agency/ChinaAgencyContent';

const SECTOR_DATA: Record<string, any> = {
  'gem-jewellery': {
    title: 'Gem & Jewellery Division',
    image: '/images/sectors/banners/gem_jewellery.png',
    revalidate: 3600,
  },
  'spare-parts': {
    title: 'Vehicle Spare Parts Division',
    image: '/images/sectors/banners/spare_parts.png',
    revalidate: 0, // CSR
  },
  'motors-parts': {
    title: 'Motors and Parts',
    image: '/images/sectors/banners/motors_parts.png',
    revalidate: 7200,
  },
  'plastics': {
    title: 'Plastic Cube Manufacturing',
    image: '/images/sectors/banners/plastics.png',
    revalidate: 3600,
  },
  'spices': {
    title: 'Spicy & Food Products Export',
    image: '/images/sectors/banners/spices.png',
    revalidate: 3600,
  },
  'china-agency': {
    title: 'China Import & Export Agency',
    image: '/images/sectors/banners/china_agency.png',
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

export default async function SectorPage({ params }: { params: Promise<{ sector: string }> }) {
  const resolvedParams = await params;
  const data = SECTOR_DATA[resolvedParams.sector];
  
  if (!data) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen overflow-hidden text-brand-navy">
      {/* Full-Screen Sector Detail Hero matching Homepage style */}
      <SectorHero 
        title={data.title}
        image={data.image}
        breadcrumb={data.title}
      />
      
      {/* Dynamic Sector Content Module with Slide-Up Transition */}
      <section className="py-20 bg-slate-50 relative z-10 -mt-10 rounded-t-[40px] shadow-2xl border-t border-slate-200/50">
        <div className="container mx-auto px-4">
          {resolvedParams.sector === 'gem-jewellery' ? (
            <GemsContent />
          ) : resolvedParams.sector === 'spare-parts' ? (
            <SparePartsContent />
          ) : resolvedParams.sector === 'motors-parts' ? (
            <MotorsPartsContent />
          ) : resolvedParams.sector === 'plastics' ? (
            <PlasticsContent />
          ) : resolvedParams.sector === 'spices' ? (
            <SpicesContent />
          ) : resolvedParams.sector === 'china-agency' ? (
            <ChinaAgencyContent />
          ) : (
            notFound()
          )}
        </div>
      </section>
    </div>
  );
}
