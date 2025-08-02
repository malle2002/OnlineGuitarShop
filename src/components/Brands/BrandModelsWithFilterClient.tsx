'use client';

import { useRouter } from 'next/navigation';
import { Model } from '@/generated/graphql';
import BrandModelsWithFilter from './BrandModelsWithFilter';

interface BrandModelsWithFilterClientProps {
  id: number;
  brandModels: Model[];
  filterTypes: string[];
}

export default function BrandModelsWithFilterClient({
  id,
  brandModels,
  filterTypes,
}: BrandModelsWithFilterClientProps) {
  const router = useRouter();

  const handleModelClick = (brandId: number, guitarId: string) => {
    router.push(`/guitar/${brandId}/${guitarId}`);
  };

  return (
    <BrandModelsWithFilter
      brandId={id}
      brandModels={brandModels}
      filterTypes={filterTypes}
      handleModelClick={handleModelClick}
    />
  );
}
