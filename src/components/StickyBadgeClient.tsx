'use client';

import { useStickyBadge } from '@/context/NavbarStickyBadgeContext';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function StickyBadgeClient() {
  const [tab, setTab] = useState<'Specifications' | 'Players'>(
    'Specifications'
  );
  const { guitar } = useStickyBadge();

  const specs = new Map();
  specs.set('Body Wood', guitar?.specs.bodyWood);
  specs.set('Neck Wood', guitar?.specs.neckWood);
  specs.set('Fingerboard', guitar?.specs.fingerboardWood);
  specs.set('Pickups', guitar?.specs.pickups);
  specs.set('Tuners', guitar?.specs.tuners);
  specs.set('Scale Length', guitar?.specs.scaleLength);
  specs.set('Bridge', guitar?.specs.bridge);

  const t = useTranslations('GuitarPage');

  const [currentPage, setCurrentPage] = useState(0);

  // Prefetch next musician images
  useEffect(() => {
    const nextMusicians = guitar?.musicians?.slice(
      (currentPage + 1) * 2,
      (currentPage + 1) * 2 + 2
    );
    nextMusicians?.forEach((m) => {
      if (m?.musicianImage) {
        const img = new window.Image();
        img.src = m.musicianImage;
      }
    });
  }, [currentPage, guitar?.musicians]);

  return (
    <div className="w-full space-y-[10rem]">
      <div className="w-full md:w-[30rem] md:mx-[10rem]">
        <h1 className="text-6xl font-extrabold text-center">{guitar?.name}</h1>
      </div>

      <section className="flex flex-row md:pt-[10rem]">
        <div
          onClick={() => setTab('Specifications')}
          className={`${tab == 'Specifications' ? 'border-whatever border-b-4' : 'border-gray-400 border-b-2'} w-full cursor-pointer`}
        >
          <h1
            className={`text-center mb-[0.5rem] text-lg ${tab == 'Specifications' ? 'text-whatever font-bold' : ''}`}
          >
            {t('Tab1')}
          </h1>
        </div>
        <div
          onClick={() => setTab('Players')}
          className={`${tab == 'Players' ? 'border-whatever border-b-4' : 'border-gray-400 border-b-2'}  w-full cursor-pointer`}
        >
          <h1
            className={`text-center mb-[0.5rem] text-lg ${tab == 'Players' ? 'text-whatever font-bold' : ''}`}
          >
            {t('Tab2')}
          </h1>
        </div>
      </section>

      {tab == 'Specifications' && (
        <section className="w-full px-[5rem] md:px-[10rem] space-y-[3rem]">
          <p>{guitar?.description}</p>
          <ul className="list-disc ml-[2rem]">
            {[...specs].map(([key, value], index) => (
              <li key={index}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </section>
      )}

      {tab == 'Players' && (
        <section className="w-full px-[1rem] md:px-[10rem] space-y-4">
          <div className="justify-center flex flex-col md:flex-row gap-x-[2rem] gap-y-[2rem]">
            {guitar?.musicians
              ?.slice(currentPage * 2, currentPage * 2 + 2)
              .map((musician) => (
                <div
                  key={musician.name}
                  className="flex flex-col w-full md:w-[25rem] bg-[#FFEFE8] p-[1rem] justify-between h-full"
                >
                  <div className="h-[20rem] w-full overflow-hidden rounded-sm">
                    <Image
                      src={musician.musicianImage!}
                      width={540}
                      height={540}
                      alt={'Image of ' + musician.name}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>

                  <div className="mt-[1rem]">
                    <p className="text-center text-gray-600 text-lg font-semibold">
                      {musician.name}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {Array.from({
              length: Math.ceil((guitar?.musicians?.length || 0) / 2),
            }).map((_, i) => (
              <button
                key={i}
                className={`size-3 self-center rounded-full ${
                  i === currentPage ? 'bg-black size-4' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentPage(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
