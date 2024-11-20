'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog'; // Import Dialog component
import { Plus, Minus } from 'lucide-react'; // Import icons for increment/decrement
import { X } from 'lucide-react'; // Import the close icon
import { DialogClose } from '@radix-ui/react-dialog';

interface RebidModalProps {
  isOpen: boolean;
  onClose: () => void;
  timeLeft: string;
  currentBid: number;
  highestBid: number;
  onConfirm: (newBid: number) => void;
}

const RebidModal: React.FC<RebidModalProps> = ({
  isOpen,
  onClose,
  timeLeft,
  currentBid,
  highestBid,
  onConfirm,
}) => {
  const [newBid, setNewBid] = useState(currentBid || 0); // Ensure it has a default value

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (newBid > highestBid) {
      onConfirm(newBid);
    } else {
      alert('Your bid must be higher than the current highest bid.');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        lightCloseIcon
        className='bg-white rounded-xl w-[410px] h-auto flex flex-col'
      >
        <DialogClose
          className='absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none text-blue-500' // Change to your desired color
        >
          <X className='h-4 w-4' />
        </DialogClose>

        <div className='px-6 pt-6 flex-shrink-0'>
          <h2 className='text-lg font-medium mb-1.5 text-gray-900'>Rebid</h2>
          <p className='mb-4 text-gray-600 text-sm font-regular'>
            Adjust your bid for the current auction.
          </p>
        </div>

        <div className='bg-white px-6 pt-4 pb-4 rounded-xl flex-grow overflow-hidden'>
          <p className='text-sm mb-2 flex justify-between'>
            <strong className='font-medium'>Time Left:</strong>
            <strong className='font-semibold ml-auto'>{timeLeft}</strong>
          </p>
          <p className='text-sm mb-2 flex justify-between'>
            <strong className='font-medium'>Your Bid:</strong>
            <strong className='font-semibold ml-auto'>{currentBid} USDT</strong>
          </p>
          <p className='text-sm mb-2 flex justify-between'>
            <strong className='font-medium'>Current Highest Bid:</strong>
            <strong className='font-semibold ml-auto'>{highestBid} USDT</strong>
          </p>
          <div className='flex items-center justify-between mb-4'>
            <button onClick={() => setNewBid(newBid - 1)} className='p-2'>
              <Minus className='h-5 w-5' />
            </button>
            <input
              type='number'
              value={newBid}
              onChange={(e) => setNewBid(Number(e.target.value))}
              className='border rounded-md text-center w-20'
            />
            <button onClick={() => setNewBid(newBid + 1)} className='p-2'>
              <Plus className='h-5 w-5' />
            </button>
          </div>
          <button
            onClick={handleConfirm}
            className='bg-green-500 text-white rounded-md py-2'
          >
            Confirm New Bid
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RebidModal;
