'use client';

import React, { useState } from 'react';
import Check1 from '@/public/Check-1.svg';
import Check2 from '@/public/Check-2.svg';
import Check3 from '@/public/Check-3.svg';
import Check4 from '@/public/Check-4.svg';

import Image from 'next/image';
import WCCryptoIcon from '@/public/WCcryptoicons.svg';
import NetworkAccountWallet from '@/public/NetworkAccountWallet.svg';
import { Lock03 } from '@untitled-ui/icons-react';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import WalletConnect from '@/components/ui/modals/walletConnect'; // Import the WalletConnect component

interface connectTodAppProps {
  isOpen: boolean;
  onClose: () => void;
  networkAccountName: string; // New prop for network account name
  balance: string; // New prop for balance
}

const ConnectTodApp: React.FC<connectTodAppProps> = ({ isOpen, onClose, networkAccountName, balance }) => {
  const [showWalletConnect, setShowWalletConnect] = useState(false); // State for WalletConnect modal

  const handleCancel = () => {
    onClose(); // Hide the ConnectTodApp modal
    setShowWalletConnect(true); // Show the WalletConnect modal

  };
  return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        lightCloseIcon
        className='bg-[#3396FF] p-1 rounded-[36px] shadow-xl w-[448px] h-auto flex flex-col '
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
          <h2 className='text-lg font-medium mb-1 text-gray-50'>
            WalletConnect
          </h2>
          <p className=' text-gray-50 text-sm font-regular'>
            Use the WalletConnect URI for a quick and secure pairing.
          </p>
        </div>

        <div className='bg-white px-6 pt-4 pb-5 rounded-[32px] shadow-md flex-grow overflow-hidden flex flex-col items-center justify-center'>
          <Image src={WCCryptoIcon} alt='WC-icon' width={16} height={16} />

          <div className='flex items-center gap-1 font-normal text-sm mb-2'>
            <Lock03 width={16} height={16} />
            app.dhedge.org
          </div>
          <div className='flex items-center gap-1 font-normal text-sm mb-2'>
            <div> Ethereum </div>
            <div> ETH </div>
          </div>
          <div className='text-center'>
            <p>Connect to this site?</p>
            <p>
              By clicking connect, you allow this app to connect to your Network
              Account.
            </p>
          </div>
          <div className='flex items-center gap-2 border border-gray-300 rounded-lg p-2'>
          <Image src={NetworkAccountWallet} alt='WC-icon' width={16} height={16} />
          <p>{networkAccountName} - Balance: {balance}</p> {/* Updated to show network account name and balance */}
          </div>
          <div className='flex flex-col gap-4 justify-start w-full pt-5'>
            <Button
              type='submit'
              variant='default'
              className='w-full border border-[#2a7fe7] bg-[#3396FF] hover:bg-[#3396FF]/90 shadow-[0_4px_10px_rgba(231,243,255,0.5)] transition duration-300'
            >
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
              Connect Now
            </Button>
            <Button type='submit' variant='secondary' onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    {showWalletConnect && <WalletConnect isOpen={showWalletConnect} onConnect={() => {/* handle connection logic */}} onClose={() => setShowWalletConnect(false)} />} {/* Render WalletConnect modal */}    </>
  );
};

export default ConnectTodApp;
