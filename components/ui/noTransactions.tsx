import React from 'react';
import Image from 'next/image';
import { Button } from './button'; 
import EmptyStateIcon from 'public/empty-state-graphic.svg'; // Reuse the same icon

interface NoContactsProps {
  onNewContact: () => void; // Prop for new contact functionality
}

export const NoContacts: React.FC<NoContactsProps> = ({ onNewContact }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg h-auto pb-8 px-4 pt-0 text-center">
      <Image 
        className="h-auto w-auto mb-0" 
        src={EmptyStateIcon} 
        alt="No contacts icon" 
        width={100}
        height={100}
      />
      <p className="text-gray-900 text-md font-medium">No transactions found</p>
      <p className="text-gray-600 text-sm font-regular">It looks like you haven&apos;t made any transactions yet. When you do, they&apos;ll show up here.</p>
    </div>
  );
};