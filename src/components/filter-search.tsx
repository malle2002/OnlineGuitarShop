'use client';
import CustomDropdown from './dropdown';
import { useState } from 'react';
import SearchBar from './search-bar';

interface Props {
  filterTypes: string[];
  onTypeChange: (type: string) => void;
  onSearchChange: (searchTerm: string) => void;
}

const FilterSearch = ({ filterTypes, onTypeChange, onSearchChange }: Props) => {
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col place-items-center space-y-4 sm:space-y-0 sm:flex-row justify-center gap-[1rem]">
      <CustomDropdown
        filterTypes={filterTypes}
        filter={selectedType}
        setFilter={(type: string) => {
          setSelectedType(type);
          onTypeChange(type);
        }}
      />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(term: string) => {
          setSearchTerm(term);
          onSearchChange(term);
        }}
      />
    </div>
  );
};

export default FilterSearch;
