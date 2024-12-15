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
      <p className="text-gray-900 text-md font-medium">There are no Contact Names in your Address Book</p>
      <p className="text-gray-600 text-sm font-regular">Create a new contact name to start building your Address Book.</p>
      <div className="flex mt-4"> {/* Flex container for the button */}
        <Button onClick={onNewContact} variant='default'>New Contact</Button> {/* New Contact button */}
      </div>
    </div>
  );
};