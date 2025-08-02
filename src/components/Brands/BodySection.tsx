'use client';

import { Model } from '@/generated/graphql';
import BrandModelsWithFilterClient from './BrandModelsWithFilterClient';
import { useTranslations } from 'next-intl';

export default function BodySection({
  id,
  brandModels,
  filterTypes,
}: {
  id: number;
  brandModels: Model[];
  filterTypes: string[];
}) {
  const t = useTranslations('BrandPage');
  return (
    <section className="space-y-[5rem]">
      <h2 className="text-5xl font-extrabold text-center">
        {t('header2_1')}{' '}
        <span style={{ color: 'var(--color-whatever)' }}>{t('header2_2')}</span>
      </h2>
      <BrandModelsWithFilterClient
        id={id}
        brandModels={brandModels}
        filterTypes={filterTypes}
      />
    </section>
  );
}
