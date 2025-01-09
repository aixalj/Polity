import React from 'react';
import Image from 'next/image'; // If you're using Next.js for image optimization
import savedIcon from '@/public/saved-modal-graphic.svg'; // Adjust the import path as necessar
import { Button } from '@/components/ui/button';
import { Dialog } from '@headlessui/react'; // Import Dialog component

interface NewAddressSavedProps {
  isOpen: boolean; // Prop to control the open state
  onClose: () => void; // Function to close the modal
  contactName: string; // Prop to receive the contact name
}

const NewAddressSaved: React.FC<NewAddressSavedProps> = ({
  isOpen,
  onClose,
  contactName,
}) => {
  return (
<Dialog open={isOpen} onClose={onClose} className='relative z-50'>
<div className='fixed inset-0 flex items-center justify-center bg-[#F2F4F7] bg-opacity-50 z-50'>
  <Dialog.Panel className='bg-white rounded-2xl shadow-lg p-6 w-[410px] h-[410px]'>
    <div className='flex flex-col items-center'>
      <Image
        src={savedIcon}
        alt='Saved Icon'
        width={210}
        height={210}
        className='mb-24'
      />
      <h2 className='text-xl font-medium'>New Address Saved</h2>
      <p className='text-center font-regular text-sm text-gray-600 mt-2'>
      Your new address is now added to your Address Book.
      </p>
      <Button
        onClick={onClose}
        variant='default'
        className='mt-4 w-full bg-teal-700 text-white py-2 px-4 rounded-xl hover:bg-teal-600 transition'
      >
        Done
      </Button>
    </div>
  </Dialog.Panel>
</div>
</Dialog>

  );
};

export default NewAddressSaved;
