"use client";

import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Search, Check } from 'lucide-react';
import { getAllContacts, getAllAddresses, Contact, Address } from '@/components/ui/addressbookData';
import { SearchError } from '@/components/ui/searchError';

interface SearchBarProps {
  placeholder: string;
}

interface SearchResult {
  name: string;
  addressName?: string;
  type: 'contact' | 'address';
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState<SearchResult | null>(null);

  const allItems = useMemo(() => {
    const contacts: SearchResult[] = getAllContacts().map(c => ({ name: c.name, type: 'contact' as const }));
    const addresses: SearchResult[] = getAllAddresses().map(a => ({ name: a.contactName, addressName: a.addressname, type: 'address' as const }));
    return [...contacts, ...addresses];
  }, []);

  const results = useMemo(() => {
    if (!searchTerm) return [];
    return allItems.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.addressName && item.addressName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [allItems, searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setSelected(null);
  };

  const handleSelect = (item: SearchResult) => {
    setSelected(item);
    setSearchTerm(item.name);
    // Here you would trigger the display of the selected contact or address
  };
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-10 pr-4 w-full"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {results.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border border-gray-200 mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {results.map((item) => (
            <li
              key={`${item.type}-${item.name}-${item.addressName || ''}`}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center ${
                selected === item ? 'bg-blue-100' : ''
              }`}
              onClick={() => handleSelect(item)}
            >
              <div className="flex flex-col">
                <span className="font-medium">{item.name}</span>
                {item.addressName && (
                  <span className="text-sm text-gray-500">{item.addressName}</span>
                )}
              </div>
              {selected === item && <Check className="h-4 w-4 text-blue-500" />}
            </li>
          ))}
        </ul>
      )}
      {results.length === 0 && searchTerm !== '' && (
        <SearchError message="No results found. Please try a different search term." />
      )}
    </div>
  );
}