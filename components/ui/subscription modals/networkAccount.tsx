'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Lock03, Loading02 } from '@untitled-ui/icons-react';
import WCCryptoIcon from '@/public/WCcryptoicons.svg';
import dot from '@/public/dot.svg';
import ETHNetwork from 'public/icons/networks/ETH.svg';
import DeactivateNetwork from './deactivateNetwork';

interface NetworkAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  networkAccountName: string;
  networkAccountImage: string;
  balance: string;
  addNotification: (title: string, description: string, status: "success" | "error" | "warning" | "info") => void;
}

const NetworkAccountModal: React.FC<NetworkAccountModalProps> = ({
  isOpen,
  onClose,
  networkAccountName,
  networkAccountImage,
  balance,
  addNotification,
}) => {
  const [isDeactivateModalOpen, setDeactivateModalOpen] = useState(false);

  const handleCancelSubscription = () => {
    console.log('Cancel subscription clicked');
    setDeactivateModalOpen(true);
  };

  const handleDeactivateClose = (isDeactivating: boolean) => {
    if (isDeactivating) {
      // If deactivating, close everything
      setDeactivateModalOpen(false);
      onClose();
    } else {
      // If canceling, just close the deactivate modal
      setDeactivateModalOpen(false);
    }
  };

  const networkData = {
    name: networkAccountName,
    network: networkAccountImage.includes('ETH') ? 'ETH' : 
            networkAccountImage.includes('BTC') ? 'BTC' : 
            networkAccountImage.includes('MATIC') ? 'MATIC' : 'ETH',
    price: 1.99,
    walletName: "Main Wallet",
    networkAccountName: networkAccountName,
    deactivationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  };

  return (
    <>
      <Dialog open={isOpen && !isDeactivateModalOpen} onOpenChange={onClose}>
        <DialogContent
          lightCloseIcon
          className='bg-[#3396FF] p-1 rounded-[36px] shadow-xl w-[448px] h-auto flex flex-col'
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
              Network Account
            </h2>
            <p className='text-gray-50 text-sm font-regular'>
              Connect your network account for seamless access.
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
              {networkAccountName}
            </div>
            <div className='flex items-center gap-3 font-normal mb-4'>
              <div className='flex items-center text-xs font-medium gap-1 bg-gray-100 border border-gray-200 rounded-[4px] px-[6px] py-[3px]'>
                <Image src={dot} alt='dot' width={8} height={8} />
                Ethereum
              </div>
              <div className='flex items-center text-xs font-medium gap-1 bg-gray-100 border border-gray-200 rounded-[4px] px-[6px] py-[3px]'>
                <Image src={ETHNetwork} alt='ETH' width={16} height={16} /> ETH
              </div>
            </div>
            <div className='text-center mb-5'>
              <p className='text-lg font-medium mb-1'>Connect to this site?</p>
              <p className='text-sm font-normal text-gray-600'>
                By clicking connect, you allow this app to connect to your Network Account.
              </p>
            </div>
            <div className='flex items-center gap-2 border border-gray-300 rounded-xl p-2 w-full'>
              <Image
                src={networkAccountImage}
                alt='Network Account'
                width={48}
                height={48}
                className='mr-1'
              />
              <div className='flex flex-col'>
                <p className='text-sm font-medium text-gray-900'>
                  Network Account Name: {networkAccountName}
                </p>
                <p className='text-xs font-normal text-gray-600'>
                  Balance: {balance}
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-2 justify-start w-full pt-5'>
              <Button
                type='button'
                variant='default'
                className='w-full border border-[#2a7fe7] bg-[#3396FF] hover:bg-[#3396FF]/90'
                onClick={handleCancelSubscription}
              >
                Cancel Subscription
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isDeactivateModalOpen} onOpenChange={setDeactivateModalOpen}>
        <DeactivateNetwork
          isOpen={isDeactivateModalOpen}
          onClose={handleDeactivateClose}
          networkData={networkData}
        />
      </Dialog>
    </>
  );
};

export default NetworkAccountModal;