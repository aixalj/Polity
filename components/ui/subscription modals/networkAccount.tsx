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
import { Notification } from '@/components/ui/notification';

interface NetworkAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  networkAccountName: string;
  networkAccountImage: string;
  balance: string;
  networkAccountNumber: string;
  addNotification: (
    title: string,
    description: string,
    status: 'success' | 'error' | 'warning' | 'info'
  ) => void;
}

const NetworkAccountModal: React.FC<NetworkAccountModalProps> = ({
  isOpen,
  onClose,
  networkAccountName,
  networkAccountImage,
  balance,
  networkAccountNumber,
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
    network: networkAccountImage.includes('ETH')
      ? 'ETH'
      : networkAccountImage.includes('BTC')
      ? 'BTC'
      : networkAccountImage.includes('MATIC')
      ? 'MATIC'
      : 'ETH',
    price: 1.99,
    walletName: 'Main Wallet',
    networkAccountName: networkAccountName,
    deactivationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  };

  const handleNotification = (
    title: string,
    description: string,
    status: 'success' | 'error' | 'warning' | 'info'
  ) => {
    Notification({ title, description, status });
  };

  return (
    <>
      <Dialog open={isOpen && !isDeactivateModalOpen} onOpenChange={onClose}>
        <DialogContent
          lightCloseIcon={false}
          className='bg-white border border-gray-300 p-0 rounded-[24px] shadow-xl w-[448px] h-auto flex flex-col'
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
            <Image
              className='mb-4'
              src={networkAccountImage}
              alt='WC-icon'
              width={48}
              height={48}
            />
            <h2 className='text-lg font-medium mb-1 text-gray-700'>
              {networkAccountName}
            </h2>
            <p className='text-gray-700 text-sm font-regular'>
              Network Account {networkAccountNumber}
            </p>
            <div className='flex items-center gap-2 text-gray-700 text-sm font-regular mt-1'>
              <Image
                src='/wallets/wallet1.svg'
                alt='Wallet'
                width={16}
                height={16}
              />
              <span>Main Wallet</span>
            </div>
          </div>
          <div className=' bg-gray-50 py-2 mb-2'>
            <p className='text-xs font-medium text-gray-600 w-full pl-6'>
              <strong>Subscription</strong>
            </p>
          </div>
          <div className='px-6 flex items-center gap-3 mb-4'>
            <div className='flex items-center justify-center rounded-xl'>
              <Image
                src={`/icons/networks/${networkData.network}.svg`}
                alt={networkData.name}
                width={36}
                height={36}
              />
            </div>
            <div className='flex flex-col'>
              <span className='text-sm font-medium'>{networkData.name}</span>
              <span className='text-sm text-gray-600'>
                Network Account Name
              </span>
            </div>
            <div className='ml-auto flex items-center'>
              <Image
                src='/icons/tokens/USDT.svg'
                alt='USDT'
                width={16}
                height={16}
              />
              <span className='ml-1'>{networkData.price.toFixed(2)} USDT</span>
              <span className='text-sm text-gray-500 ml-1'>per month</span>
            </div>
          </div>
          <div className=' bg-gray-50 py-2 mb-2'>
            <p className='text-xs font-medium text-gray-600 w-full pl-6'>
              <strong>Subscription Details</strong>
            </p>
          </div>
          <p className='px-6 text-sm mb-2 w-full flex justify-between'>
            <strong className='font-medium'>Wallet Status</strong>{' '}
            <strong className='font-semibold ml-auto'>
              {networkAccountName}
            </strong>
          </p>
          <p className='px-6 text-sm mb-2 w-full flex justify-between'>
            <strong className='font-medium'>Started</strong>{' '}
            <strong className='font-semibold ml-auto'>18 Jul 2023</strong>
          </p>
          <p className='px-6 text-sm mb-2 w-full flex justify-between'>
            <strong className='font-medium'>Renews on</strong>{' '}
            <strong className='font-semibold ml-auto'>18 Aug 2023</strong>
          </p>
          <div className=' bg-gray-50 py-2 mb-2'>
            <p className='text-xs font-medium text-gray-600 w-full pl-6'>
              <strong>Payment Method</strong>
            </p>
          </div>
          <p className='px-6 text-sm mb-2 w-full flex justify-between'>
            <strong className='font-medium'>Wallet</strong>{' '}
            <div className='flex items-center gap-2 text-gray-700 text-sm font-regular mt-1'>
              <Image
                src='/wallets/wallet1.svg'
                alt='Wallet'
                width={16}
                height={16}
              />
              <span>Main Wallet</span>
            </div>
          </p>
          <p className='px-6 text-sm mb-2 w-full flex justify-between'>
            <strong className='font-medium'>Network Account</strong>{' '}
            <strong className='font-semibold ml-auto'>
            Network Account Name {networkAccountNumber}
            </strong>
          </p>
          <div className=' px-6 pt-4 pb-3 rounded-[32px] flex-grow overflow-hidden flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-2 justify-start w-full pt-5'>
              <Button
                type='button'
                variant='default'
                className='w-full border border-rose-300 bg-white hover:bg-rose-300/90 text-rose-700'
                onClick={handleCancelSubscription}
              >
                Cancel Subscription
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isDeactivateModalOpen}
        onOpenChange={setDeactivateModalOpen}
      >
        <DeactivateNetwork
          isOpen={isDeactivateModalOpen}
          onClose={handleDeactivateClose}
          networkData={networkData}
          addNotification={handleNotification}
        />
      </Dialog>
    </>
  );
};

export default NetworkAccountModal;
