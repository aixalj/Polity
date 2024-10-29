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
    <div className="flex flex-col items-center justify-start h-full pb-4 px-4 pt-16 text-center">
      <Image 
        className="h-12 w-12 text-gray-400 mb-4" 
        src={SearchErrorIcon} 
        alt="Search error icon" 
        width={48}
        height={48}
      />
      <p className="text-gray-900 text-md font-semibold">No contact name found</p>
      <p className="text-gray-600 text-sm font-regular">Your search did not match any contact name. Please try again.</p>
      <div className="flex space-x-4 mt-4"> {/* Flex container for buttons */}
        <Button onClick={onClearSearch} variant='secondary' className="text-gray-700 bg-white border border-gray-300/50" >Clear Search</Button> {/* Clear Search button */}
        <Button onClick={onNewContact} variant='default'>New Contact</Button> {/* New Contact button */}
      </div>
    </div>
  );
};