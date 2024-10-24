import React from 'react';
import Image from 'next/image';
import { Button } from './button';
import EmptyStateIcon from 'public/empty-state-icon.svg'; // Reuse the same icon

interface NoContactsProps {
  onNewContact: () => void; // Prop for new contact functionality
}

export const NoContacts: React.FC<NoContactsProps> = ({ onNewContact }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full pb-4 px-4 pt-0 text-center">
      <Image 
        className="h-12 w-12 text-gray-400 mb-4" 
        src={EmptyStateIcon} 
        alt="No contacts icon" 
        width={48}
        height={48}
      />
      <p className="text-gray-600 text-lg font-medium">There are no Contact Names in your Address Book</p>
      <p className="text-gray-600 text-lg font-medium">Create a new contact name to start building your Address Book.</p>
      <div className="flex mt-4"> {/* Flex container for the button */}
        <Button onClick={onNewContact} className="bg-blue-500 text-white">New Contact</Button> {/* New Contact button */}
      </div>
    </div>
  );
};