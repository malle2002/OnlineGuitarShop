'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface Props {
  filterTypes: string[];
  filter: string;
  setFilter: (type: string) => void;
}

export default function CustomDropdown({
  filterTypes,
  filter,
  setFilter,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (type: string) => {
    setFilter(type);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[15rem]" ref={dropdownRef}>
      {/* Trigger */}
      <div
        className={`flex items-center justify-between py-[1rem] px-[1.5rem] border rounded-xs cursor-pointer
          ${isOpen ? 'text-whatever border-whatever' : 'border-gray-300 text-black'}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={'/filter-icon.svg'}
          width={80}
          height={80}
          alt="filter-icon"
          className="translate-y-0.5 w-[2rem] h-[2rem]"
        />
        <span
          className={`${isOpen ? 'text-whatever' : 'text-gray-400'} text-lg font-semibold text-center`}
        >
          {filter !== null && filter != '' ? filter : 'Filter by type'}
        </span>
        <ChevronDown
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-xs border border-orange-100 bg-white shadow-md py-0.5 space-y-[0.5rem]">
          <div
            onClick={() => handleSelect('')}
            className={`px-4 py-2 cursor-pointer font-bold text-xl
              ${filter === '' ? 'bg-[#FFEFE9] border-1 text-[#FF8C60]' : 'text-gray-400'}`}
          >
            All Types
          </div>
          {filterTypes.map((type) => (
            <div
              key={type}
              onClick={() => {
                handleSelect(type);
              }}
              className={`px-4 py-2  cursor-pointer font-bold text-xl
                ${filter === type ? 'bg-[#FFEFE9] border-1 text-[#FF8C60]' : 'text-gray-400'}
              `}
            >
              {type.charAt(0) + type.slice(1).toLowerCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
