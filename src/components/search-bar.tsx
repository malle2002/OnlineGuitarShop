'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-[25rem]" ref={dropdownRef}>
      <div
        className={`flex flex-row items-center justify-between py-[1rem] px-[1.5rem] border rounded-xs cursor-pointer
            ${isFocused ? 'text-whatever border-whatever' : 'border-gray-300 text-black'}
            `}
      >
        <Image
          src={'/search-icon.svg'}
          width={80}
          height={80}
          alt="search-icon"
          className="translate-y-0.5 w-[2rem] h-[2rem]"
        />
        <input
          placeholder="Search by name"
          name="name"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="flex-1 text-lg font-semibold outline-none ml-2 bg-transparent text-center"
        />
      </div>
    </div>
  );
}
