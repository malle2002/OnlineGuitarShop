'use client';

import { Model } from '@/generated/graphql';
import FilterSearch from '../filter-search';
import Image from 'next/image';
import { NumberToPriceConverter } from '@/lib/number-toPrice-converter';
import { useEffect, useRef, useState } from 'react';

interface Props {
  brandId: number;
  brandModels: Model[];
  filterTypes: string[];
  handleModelClick: (brandId: number, guitarId: string) => void;
}

export default function BrandModelsWithFilter({
  brandId,
  brandModels,
  filterTypes,
  handleModelClick,
}: Props) {
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  const filteredModels = brandModels.filter((model) => {
    const matchesType = selectedType ? model.type === selectedType : true;
    const matchesSearch =
      model.name?.toLowerCase().includes(searchTerm.toLowerCase()) ?? true;
    return matchesType && matchesSearch;
  });

  const visibleModels = filteredModels.slice(0, visibleCount);
  const hasMore = visibleModels.length < filteredModels.length;

  // <<------- Infinite scroll trigger
  useEffect(() => {
    if (!hasMore || !loadMoreRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setVisibleCount((prev) => prev + 6);
      }
    });

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasMore, visibleCount, filteredModels]);

  useEffect(() => {
    setVisibleCount(6);
  }, [selectedType, searchTerm]);

  return (
    <div className="flex flex-col space-y-[15rem]">
      {/* Filters */}
      <FilterSearch
        filterTypes={filterTypes}
        onTypeChange={setSelectedType}
        onSearchChange={setSearchTerm}
      />

      {/* Models */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[5rem] gap-x-[2rem] py-[5rem] mx-auto">
        {visibleModels.length > 0 ? (
          visibleModels.map((model) => (
            <div
              key={model.id}
              className="w-[25rem] h-auto space-y-[2em] flex flex-col justify-start cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => handleModelClick(brandId, model.id)}
            >
              <Image
                src={model.image!}
                width={400}
                height={400}
                alt={'Image of ' + model.name}
                className="object-contain w-[25rem] h-auto"
              />
              <div className="text-start space-y-[0.5rem]">
                <h1 className="text-base font-semibold text-gray-600">
                  {model.name}
                </h1>
                <p
                  className="text-md text-gray-400"
                  style={{ fontWeight: 300 }}
                >
                  {NumberToPriceConverter(model.price!)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No models match your search criteria
          </p>
        )}
      </div>

      {/* Load more trigger */}
      {hasMore && <div ref={loadMoreRef} className="h-[1px] w-full" />}
    </div>
  );
}
