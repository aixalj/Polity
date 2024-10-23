"use client";

import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Search, Check } from 'lucide-react';
import { getAllContacts, getAllAddresses } from '@/components/ui/addressbookData';

interface SearchBarProps {
  placeholder: string;
  onSelect: (selectedName: string) => void;
  onSearch: (term: string) => void;
  onErrorChange: (hasError: boolean) => void;
  value: string; // Added value prop
}

interface SearchResult {
  name: string;
  addressName?: string;
  type: 'contact' | 'address';
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSelect, onSearch, onErrorChange, value }) => {
  const [selected, setSelected] = useState<SearchResult | null>(null);

  const allItems = useMemo(() => {
    const contacts: SearchResult[] = getAllContacts().map(c => ({ name: c.name, type: 'contact' as const }));
    const addresses: SearchResult[] = getAllAddresses().map(a => ({ name: a.contactName, addressName: a.addressname, type: 'address' as const }));
    return [...contacts, ...addresses];
  }, []);

  const results = useMemo(() => {
    if (!value) return [];
    const lowerSearchTerm = value.toLowerCase();
    return allItems.filter(item => {
      const firstName = item.name.toLowerCase().split(' ')[0];
      return firstName.startsWith(lowerSearchTerm);
    });
  }, [allItems, value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onSelect(''); // Clear the selection when input changes
    onSearch(newValue); // Notify parent component of search term change
    onErrorChange(newValue !== '' && results.length === 0);
    console.log('Search Input:', newValue); // Log the current search input
  };

  const handleSelect = (item: SearchResult) => {
    setSelected(item);
    console.log('Selected Item:', item); // Log the selected item
    onSelect(item.name); // Notify parent component of selection
    onSearch(item.name); // Notify parent component of search term change
    onErrorChange(false);
  };

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-10 pr-4 w-full"
        value={value}
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
    </div>
  );
}