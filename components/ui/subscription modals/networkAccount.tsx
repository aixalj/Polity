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
import { Badge } from "@/components/ui/badge";

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
          <div className='px-6 pt-6 flex-shrink-0'>
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
            <Badge
              variant={
                "success"
              }
              className="ml-auto"
            >
              Active
            </Badge>
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
          <p className='px-6 text-sm w-full flex justify-between'>
            <strong className='font-medium'>Network Account</strong>{' '}
            <div className='flex items-center gap-2 ml-auto'>
              <Image
                src={networkAccountImage}
                alt='Network'
                width={16}
                height={16}
              />
              <strong className='font-semibold'>
                Network Account Name {networkAccountNumber}
              </strong>
            </div>
          </p>
          <div className=' px-6 pb-5 rounded-[32px] flex-grow overflow-hidden flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-2 justify-start w-full'>
              <Button
                type='button'
                variant='destructive'
                className='w-full border border-rose-300 bg-white hover:bg-rose-300/20 text-rose-700'
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
