'use client';

import React, { useState } from 'react';
import Check1 from '@/public/Check-1.svg';
import Check2 from '@/public/Check-2.svg';
import Check3 from '@/public/Check-3.svg';
import Check4 from '@/public/Check-4.svg';

import Image from 'next/image';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import { Loading02, AlertCircle } from '@untitled-ui/icons-react';
import BlowFish from '@/components/ui/blowfish';

interface WalletConnectProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({
  isOpen,
  onClose,
  onConnect,
}) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // New state for error message
  const [isWalletConnectOpen, setIsWalletConnectOpen] = useState(false); // Add this line

  const handleOpenModal = () => {
    setLoading(false); // Reset loading state
    setErrorMessage(null); // Reset error message
    setIsWalletConnectOpen(true); // Open the wallet connect modal
  };

  const handleClose = () => {
    if (!loading) {
      onClose();
    }
  };

  const handleClick = async () => {
    if (loading) return;

    setLoading(true);
    setErrorMessage(null);

    try {
      await onConnect();
      // Don't call onClose() here anymore since the parent will handle it
    } catch (error) {
      setErrorMessage('Error setting up connection, please try again.');
    }

    setLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        lightCloseIcon
        className='bg-[#3396FF] p-1 rounded-[36px] shadow-xl w-[448px] h-auto flex flex-col [&>button>svg]:w-5 [&>button>svg]:h-5'
      >
        <div className='px-8 pt-5 flex-shrink-0'>
          <div className='flex justify-start mb-4'>
            <svg
              width='28'
              height='16'
              viewBox='0 0 28 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.26063 3.12611C10.535 -1.04204 17.4651 -1.04204 21.7395 3.12611L22.254 3.62777C22.4677 3.83617 22.4677 4.17406 22.254 4.38248L20.4941 6.09849C20.3873 6.20271 20.2141 6.20271 20.1072 6.09849L19.3994 5.40817C16.4173 2.50036 11.5827 2.50036 8.60084 5.40817L7.84271 6.14746C7.73585 6.25166 7.5626 6.25166 7.45574 6.14746L5.69598 4.43142C5.48226 4.22302 5.48226 3.88512 5.69598 3.67671L6.26063 3.12611ZM25.3788 6.67504L26.9451 8.2023C27.1586 8.41069 27.1586 8.74871 26.9451 8.95707L19.883 15.8437C19.6693 16.0521 19.3229 16.0521 19.1091 15.8437L14.0967 10.956C14.0434 10.9039 13.9568 10.9039 13.9034 10.956L8.89125 15.8437C8.67753 16.0521 8.33102 16.0521 8.1173 15.8437L1.05507 8.95687C0.841346 8.74851 0.841346 8.41069 1.05507 8.20222L2.62126 6.67496C2.83498 6.46654 3.18149 6.46654 3.39521 6.67496L8.40747 11.5627C8.46091 11.6147 8.54753 11.6147 8.60096 11.5627L13.613 6.67496C13.8267 6.46654 14.1732 6.46654 14.387 6.67494L19.3992 11.5627C19.4527 11.6147 19.5392 11.6147 19.5928 11.5627L24.6049 6.67504C24.8187 6.46664 25.1651 6.46664 25.3788 6.67504Z'
                fill='white'
              />
            </svg>
          </div>
          <h2 className='text-[20px] font-medium mb-1 text-gray-50'>
            WalletConnect
          </h2>
          <p className=' text-gray-50 text-sm font-regular'>
            Use the WalletConnect URI for a quick and secure pairing.
          </p>
        </div>

        <div className='bg-white px-6 pt-4 pb-5 rounded-[32px] shadow-md flex-grow overflow-hidden'>
          <div className='-mx-6 bg-gray-50 py-2 mb-3'>
            <p className='text-xs font-medium text-gray-600 w-full pl-6'>
              <strong>HOW TO CONNECT</strong>
            </p>
          </div>
          <ul>
            <li className='flex items-center gap-2 font-normal text-sm mb-2 text-gray-800'>
              <Image src={Check1} alt='Check 1' width={16} height={16} />
              Open a WalletConnect supported dApp
            </li>
            <li className='flex items-center gap-2 font-normal text-sm mb-2 text-gray-800'>
              <Image src={Check2} alt='Check 2' width={16} height={16} />
              Select WalletConnect as the wallet
            </li>
            <li className='flex items-center gap-2 font-normal text-sm mb-2 text-gray-800'>
              <Image src={Check3} alt='Check 3' width={16} height={16} />
              Copy the pairing code
            </li>
            <li className='flex items-center gap-2 font-normal text-sm text-gray-800'>
              <Image src={Check4} alt='Check 4' width={16} height={16} />
              Click ‘Connect Now’
            </li>
          </ul>
          <div className='flex justify-start w-full pt-5'>
            <Button
              type='submit'
              variant='walletconnect'
              className='w-full'
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loading02 width={20} height={20} />
                  Connecting...
                </>
              ) : (
                <>
                  <svg
                    width='28'
                    height='16'
                    viewBox='0 0 28 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.26063 3.12611C10.535 -1.04204 17.4651 -1.04204 21.7395 3.12611L22.254 3.62777C22.4677 3.83617 22.4677 4.17406 22.254 4.38248L20.4941 6.09849C20.3873 6.20271 20.2141 6.20271 20.1072 6.09849L19.3994 5.40817C16.4173 2.50036 11.5827 2.50036 8.60084 5.40817L7.84271 6.14746C7.73585 6.25166 7.5626 6.25166 7.45574 6.14746L5.69598 4.43142C5.48226 4.22302 5.48226 3.88512 5.69598 3.67671L6.26063 3.12611ZM25.3788 6.67504L26.9451 8.2023C27.1586 8.41069 27.1586 8.74871 26.9451 8.95707L19.883 15.8437C19.6693 16.0521 19.3229 16.0521 19.1091 15.8437L14.0967 10.956C14.0434 10.9039 13.9568 10.9039 13.9034 10.956L8.89125 15.8437C8.67753 16.0521 8.33102 16.0521 8.1173 15.8437L1.05507 8.95687C0.841346 8.74851 0.841346 8.41069 1.05507 8.20222L2.62126 6.67496C2.83498 6.46654 3.18149 6.46654 3.39521 6.67496L8.40747 11.5627C8.46091 11.6147 8.54753 11.6147 8.60096 11.5627L13.613 6.67496C13.8267 6.46654 14.1732 6.46654 14.387 6.67494L19.3992 11.5627C19.4527 11.6147 19.5392 11.6147 19.5928 11.5627L24.6049 6.67504C24.8187 6.46664 25.1651 6.46664 25.3788 6.67504Z'
                      fill='white'
                    />
                  </svg>
                  Connect to dApp
                </>
              )}
            </Button>
          </div>
          {errorMessage && ( // Conditionally render the error message
            <div className='flex items-center text-rose-700 bg-rose-50 rounded-xl mt-3 p-4'>
              <AlertCircle width={20} height={20} className='mr-3' />
              <p className=' text-sm font-semibold rounded-xl'>
                {errorMessage}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WalletConnect;
