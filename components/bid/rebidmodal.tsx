'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog'; // Import Dialog component
import { Plus, Minus } from 'lucide-react'; // Import icons for increment/decrement
import { X } from 'lucide-react'; // Import the close icon
import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { BidAmountForm } from '@/components/bid/amountform';
import { SubscribeProvider } from '@/components/ui/subscribecontext';

interface RebidModalProps {
  isOpen: boolean;
  onClose: () => void;
  timeLeft: string;
  currentBid: number;
  highestBid: number;
  onConfirm: (newBid: number) => void;
  addNotification: (title: string, description: string, status: "success" | "error" | "warning" | "info") => void; // Add this line
}

const RebidModal: React.FC<RebidModalProps> = ({
  isOpen,
  onClose,
  timeLeft,
  currentBid,
  highestBid,
  onConfirm,
  addNotification, // Add this line
}) => {
  const [newBid, setNewBid] = useState(currentBid ); // Ensure it has a default value

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (newBid > highestBid) {
      onConfirm(newBid); // Call the function to confirm the new bid
      addNotification("Bid Confirmed!", `Your new bid of ${newBid} has been confirmed!`, "success");
    }  else {
        addNotification("Bid Confirmed!", `Your new bid of ${newBid} has been confirmed!`, "success");
      }
    onClose(); // Ensure the modal closes regardless of the condition
  };

  return (
    <SubscribeProvider>
      {' '}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent
          lightCloseIcon
          className='bg-white rounded-xl w-[458px] h-auto flex flex-col'
        >
          <div className=' flex flex-start pt-1.5 flex-shrink-0'>
            <div>
              <h2 className='text-lg font-medium mb-1.5 text-gray-900'>
                Rebid
              </h2>
              <p className=' text-gray-600 text-sm font-regular'>
                Adjust your bid for the current auction.
              </p>
            </div>

            <DialogClose className='absolute right-4 top-4 rounded-sm pt-2.5 pr-1 disabled:pointer-events-none text-gray-600'>
              <X className='h-4 w-4' />
            </DialogClose>
          </div>

          <div className='bg-white pt-1 pb-2 p-1 rounded-xl flex-grow overflow-hidden'>
            <p className='text-sm mb-3 flex justify-between'>
              <strong className='font-medium text-gray-700'>Time Left:</strong>
              <strong className='font-semibold ml-auto text-gray-700'>{timeLeft}</strong>
            </p>
            <p className='text-sm mb-3 flex justify-between'>
              <strong className='font-medium text-gray-700'>Your Bid:</strong>
              <div className='flex items-center'>
                <Image
                  src='/icons/tokens/USDT.svg'
                  alt='Tether (USDT)'
                  width={16}
                  height={16}
                  className='mr-2.5'
                />
                <strong className='font-semibold ml-auto text-gray-700'>
                  {currentBid} USDT
                </strong>
              </div>
            </p>
            <p className='text-sm mb-3 flex justify-between'>
              <strong className='font-medium text-gray-700'>Current Highest Bid:</strong>
              <div className='flex items-center'>
                <Image
                  src='/icons/tokens/USDT.svg'
                  alt='Tether (USDT)'
                  width={16}
                  height={16}
                  className='mr-2.5'
                />
                <strong className='font-semibold ml-auto text-gray-700'>
                  {highestBid} USDT
                </strong>
              </div>
            </p>
            <div className='w-full h-px mt-8 bg-gray-200'></div>
            <div className='w-full py-6 '>
            <BidAmountForm />
              <p className='text-center text-sm text-gray-700 font-medium'>
                +1 USDT minimum bid increment
              </p>
            </div>
            <Button
              onClick={handleConfirm} // This will now close the modal after confirming
              variant='default'
              className=' w-full text-white rounded-lg py-2'
            >
              Confirm New Bid
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </SubscribeProvider>
  );
};

export default RebidModal;
