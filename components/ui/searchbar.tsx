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
  const [hasError, setHasError] = useState(false); // State for error tracking

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
    const errorState = newValue !== '' && results.length === 0;
    setHasError(errorState); // Update error state
    onErrorChange(errorState);
    console.log('Search Input:', newValue); // Log the current search input
  };

  const handleSelect = (item: SearchResult) => {
    setSelected(item);
    console.log('Selected Item:', item); // Log the selected item
    onSelect(item.name); // Notify parent component of selection
    onSearch(item.name); // Notify parent component of search term change
    setHasError(false); // Clear error state on selection
    onErrorChange(false);
  };

  return (
    <div className="relative w-full">
      <Search className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${hasError ? 'text-gray-500 top-1/3' : 'text-gray-500'}`} />
      <Input
        type="text"
        placeholder={placeholder}
        className={`pl-10 pr-4 w-full h-10 focus:border-primary-500 focus:ring focus:ring-primary-50 focus:ring-opacity-50 border-0.5 ${
          hasError ? 'border-rose-400 focus:border-rose-400 focus:outline-none focus:ring-0 bg-rose-50' : 'border-gray-300'
        }`}
        value={value}
        onChange={handleInputChange}
      />
      {hasError && (
        <p className="mt-1 text-rose-600 text-sm">Please enter a contact name to continue.</p>
      )}
      {results.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border border-gray-200 mt-1 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {results.map((item) => (
            <li
              key={`${item.type}-${item.name}-${item.addressName || ''}`}
              className={`px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-50 flex justify-between items-center ${
                selected === item ? 'bg-gray-50 rounded-lg' : ''
              }`}
              onClick={() => handleSelect(item)}
            >
              <div className="flex flex-col">
                <span className="font-medium">{item.name}</span>
                {item.addressName && (
                  <span className="text-sm text-gray-500">{item.addressName}</span>
                )}
              </div>
              {selected === item && <Check className="h-4 w-4 primary-600" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};