'use client';

import React, { useState } from 'react';
import Check1 from '@/public/Check-1.svg';
import Check2 from '@/public/Check-2.svg';
import Check3 from '@/public/Check-3.svg';
import Check4 from '@/public/Check-4.svg';

import Image from 'next/image';
import WCCryptoIcon from '@/public/WCcryptoicons.svg';
import NetworkAccountWallet from '@/public/NetworkAccountWallet.svg';
import ETHNetwork from 'public/icons/networks/ETH.svg';
import POLNetwork from 'public/icons/networks/MATIC.svg';
import dot from '@/public/dot.svg';
import { Lock03, Loading02 } from '@untitled-ui/icons-react';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import WalletConnect from '@/components/ui/modals/walletConnect'; 

interface connectTodAppProps {
  isOpen: boolean;
  onClose: () => void;
  networkAccountName: string;
  networkAccountImage: string;
  balance: string; 
  addNotification: (title: string, description: string, status: "success" | "error" | "warning" | "info") => void; 
  sourcePage: string; // Add this line
}

const ConnectTodApp: React.FC<connectTodAppProps> = ({
  isOpen,
  onClose,
  networkAccountName,
  networkAccountImage,
  balance,
  addNotification,
}) => {
  const [showWalletConnect, setShowWalletConnect] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 

  const handleCancel = () => {
    onClose(); 
    setShowWalletConnect(true); 
  };
  const handleConnect = () => {
    setIsLoading(true); 
    onClose(); 

    setTimeout(() => {
      addNotification("Connection Successful!", "You have successfully connected your wallet.", "success"); 
    }, 200); 

    setTimeout(() => {
      setIsLoading(false); // Reset loading state after 5000 milliseconds
    }, 5000); 
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

          <div className='bg-white px-6 pt-4 pb-3 rounded-[32px] shadow-md flex-grow overflow-hidden flex flex-col items-center justify-center'>
            <Image
              className='mb-4'
              src={WCCryptoIcon}
              alt='WC-icon'
              width={48}
              height={48}
            />

            <div className='flex items-center gap-1 font-medium text-lg mb-2'>
              <Lock03 width={20} height={20} />
              app.dhedge.org
            </div>
            <div className='flex items-center gap-3 font-normal mb-4'>
              <div className='flex items-center text-xs font-medium gap-1 bg-gray-100 border border-gray-200 rounded-[4px] px-[6px] py-[3px]'>
                <Image src={dot} alt='dot' width={8} height={8} />
                 {networkAccountName.split(' ')[0]}
              </div>
              <div className='flex items-center text-xs font-medium gap-1 bg-gray-100 border border-gray-200 rounded-[4px] px-[6px] py-[3px]'>
                <Image src={networkAccountName.split(' ')[0] === 'Polygon' ? POLNetwork : ETHNetwork} alt='ETH' width={16} height={16} /> 
                {networkAccountName.split(' ')[0] === 'Polygon' ? 'POL' : 'ETH'}
              </div>
            </div>
            <div className='text-center mb-5'>
              <p className='text-lg font-medium mb-1'>Connect to this site?</p>
              <p className='text-sm font-normal text-gray-600'>
                By clicking connect, you allow this app to connect to your
                Network Account.
              </p>
            </div>
            <div className='flex items-center gap-2 border border-gray-300 rounded-xl p-2 w-full'>
              <Image
                src={networkAccountImage}
                alt='WC-icon'
                width={48}
                height={48}
                className='mr-1'
              />
              <div className='flex flex-col'>
                <p className='text-sm font-medium text-gray-900'>
                  Network Account Name {networkAccountName}
                </p>
                <p className='text-xs font-normal text-gray-600'>
                  Balance: {balance}
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-2 justify-start w-full pt-5'>
              <Button
                type='submit'
                variant='walletconnect'
                className='w-full'
                onClick={handleConnect} 
              >
                {isLoading ? ( 
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
                    Connect Now
                  </>
                )}
              </Button>
              <Button
                type='submit'
                variant='secondary'
                className='bg-white hover:bg-white'
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {showWalletConnect && (
        <WalletConnect
          isOpen={showWalletConnect}
          onConnect={() => {  
          }}
          onClose={() => setShowWalletConnect(false)}
        />
      )}
    </>
  );
};

export default ConnectTodApp;
