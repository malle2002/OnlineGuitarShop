'use client';

import { useTranslations } from 'next-intl';

export default function HeadSection() {
  const t = useTranslations('BrandPage');
  return (
    <section className="px-[2rem] md:px-0 text-center md:text-start w-full md:w-[35rem] md:ml-[10rem] space-y-[2rem]">
      <h2 className="text-6xl font-extrabold">
        {t('header1_1')}{' '}
        <span style={{ color: 'var(--color-whatever)' }}>{t('header1_2')}</span>
      </h2>
      <div>
        <p className="text-center font-bold text-gray-500 text-lg">
          {t('subheader1_1')}
        </p>
        <p className="text-center font-bold text-gray-500 text-lg">
          {t('subheader1_2')}
        </p>
      </div>
    </section>
  );
}
