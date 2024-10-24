import React from 'react';
import Image from 'next/image';
import { Button } from './button';
import SearchErrorIcon from 'public/search-error-state-icon.svg';

interface SearchErrorProps {
  message: string;
  onClearSearch: () => void; // Added prop for clear search functionality
  onNewContact: () => void; // Added prop for new contact functionality
}

export const SearchError: React.FC<SearchErrorProps> = ({ message, onClearSearch, onNewContact }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full pb-4 px-4 pt-0 text-center">
      <Image 
        className="h-12 w-12 text-gray-400 mb-4" 
        src={SearchErrorIcon} 
        alt="Search error icon" 
        width={48}
        height={48}
      />
      <p className="text-gray-600 text-lg font-medium">No contact name found</p>
      <p className="text-gray-600 text-lg font-medium">Your search did not match any contact name. Please try again.</p>
      <div className="flex space-x-4 mt-4"> {/* Flex container for buttons */}
        <Button onClick={onClearSearch} className="bg-red-500 text-white">Clear Search</Button> {/* Clear Search button */}
        <Button onClick={onNewContact} className="bg-blue-500 text-white">New Contact</Button> {/* New Contact button */}
      </div>
    </div>
  );
};