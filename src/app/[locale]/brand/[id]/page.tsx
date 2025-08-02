import BodySection from '@/components/Brands/BodySection';
import HeadSection from '@/components/Brands/HeadSection';
import { Model } from '@/generated/graphql';
import { getBrandModels } from '@/services/brandService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'List',
  description: 'A list of guitar models',
};

export default async function BrandPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const brandModels: Model[] = await getBrandModels(id, 'name', 'ASC');

  const filterTypes = [...new Set(brandModels.map((m) => m.type!))];

  return (
    <div className="py-[5rem] space-y-[10rem]">
      <HeadSection />
      <BodySection
        id={id}
        brandModels={brandModels}
        filterTypes={filterTypes}
      />
    </div>
  );
}
