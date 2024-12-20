'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Notification } from '@/components/ui/notification';

interface NetworkData {
  name: string;
  network: string;
  price: number;
  walletName: string;
  networkAccountName: string;
  deactivationDate: Date;
  isDFNSCancellation?: boolean;
  subscriptions?: Array<{
    name: string;
    network: string;
    price: number;
  }>;
}

interface DeactivateNetworkProps {
  isOpen: boolean;
  onClose: (result: boolean) => void;
  networkData: NetworkData;
  addNotification: (
    title: string,
    description: string,
    status: 'success' | 'error' | 'warning' | 'info'
  ) => void;
  isFromTable?: boolean;
}

const DeactivateNetwork: React.FC<DeactivateNetworkProps> = ({
  isOpen,
  onClose,
  networkData,
  addNotification,
  isFromTable,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    console.log('Closing all modals');
    onClose(false);
  };

  const handleCancel = () => {
    setIsLoading(false);
    onClose(false);
  };

  const handleDeactivate = async () => {
    setIsLoading(true);
    console.log('Deactivating network account');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      addNotification(
        'Network Account Deactivated',
        `Your ${networkData?.name} has been successfully deactivated.`,
        'success'
      );

      if (isFromTable && !networkData.isDFNSCancellation) {
        const event = new Event('closeAllModals');
        window.dispatchEvent(event);
      } else {
        onClose(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleOutsideClick = () => {
    onClose(false); // Close deactivate modal
    // Force close parent modal too
    const event = new Event('closeAllModals');
    window.dispatchEvent(event);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) handleOutsideClick();
        }}
      >
        <DialogContent
          onInteractOutside={handleOutsideClick}
          lightCloseIcon
          className='bg-rose-600 p-1 rounded-2xl shadow-xl max-w-[90%] w-[410px] h-auto flex flex-col'
        >
          <div className='px-8 pt-5 flex-shrink-0'>
            <div className='flex justify-start mb-2'>
            <XCircle
              className='h-6 w-6 text-gray-50'
            />
            </div>

            <h2 className='text-lg font-medium mb-1.5 text-gray-50'>
              Deactivate Network Account
            </h2>
            <p className='mb-4 text-gray-50 text-sm font-regular'>
              You&apos;ll lose access to this Network Account at the end of your
              subscription on {networkData.deactivationDate.toLocaleDateString()}.
            </p>
          </div>

          <div className='bg-white px-6 py-4 rounded-xl shadow-md flex-grow overflow-hidden'>
            <div className='space-y-6'>
              {networkData.isDFNSCancellation ? (
                <>
                  <div className='space-y-4 mb-6'>
                    {networkData.subscriptions?.map((sub) => (
                      <div
                        key={sub.network}
                        className='flex items-center justify-between py-2'
                      >
                        <div className='flex items-center gap-3'>
                          <Image
                            src={`/icons/networks/${sub.network}.svg`}
                            alt={sub.name}
                            width={36}
                            height={36}
                          />
                          <div>
                            <p className='text-sm font-medium'>{sub.name}</p>
                            <p className='text-xs text-gray-600'>
                              {sub.network === 'DFNS'
                                ? 'Wallet Name'
                                : 'Network Account Name'}
                            </p>
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <Image
                            src='/icons/tokens/USDT.svg'
                            alt='USDT'
                            width={16}
                            height={16}
                          />
                          <span className='ml-1 text-sm font-semibold'>
                            {sub.price.toFixed(2)} USDT
                          </span>
                          <span className='text-xs text-gray-500 ml-1'>
                            per month
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='flex items-center justify-between py-2 border-t border-gray-100'>
                    <span className='text-sm font-medium'>Total</span>
                    <div className='flex items-center'>
                      <Image
                        src='/icons/tokens/USDT.svg'
                        alt='USDT'
                        width={16}
                        height={16}
                      />
                      <span className='ml-1 text-sm font-semibold'>
                        15.96 USDT
                      </span>
                      <span className='text-xs text-gray-500 ml-1'>
                        per month
                      </span>
                    </div>
                  </div>
                </>
              ) : networkData.name.includes('Safeheron') ? (
                <>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='flex items-center justify-center rounded-xl'>
                      <Image
                        src='/icons/networks/Safeheron.svg'
                        alt='Safeheron'
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium text-gray-800'>
                        Safeheron - Premium
                      </span>
                      <span className='text-xs text-gray-600'>Wallet Name</span>
                    </div>
                    <div className='ml-auto flex flex-col items-right'>
                      <div className='flex items-center'>
                        <Image
                          src='/icons/tokens/USDT.svg'
                          alt='USDT'
                          width={16}
                          height={16}
                        />
                        <span className='ml-1 text-sm font-semibold'>
                          9.99 USDT
                        </span>
                      </div>
                      <span className='text-sm text-gray-500 text-right'>
                        per month
                      </span>
                    </div>
                  </div>

                  {['Bitcoin', 'Ethereum', 'Polygon'].map((network) => (
                    <div
                      key={network}
                      className='flex items-center justify-between py-2'
                    >
                      <div className='flex items-center gap-3'>
                        <Image
                          src={`/icons/networks/${
                            network === 'Bitcoin'
                              ? 'BTC'
                              : network === 'Ethereum'
                              ? 'ETH'
                              : 'MATIC'
                          }.svg`}
                          alt={network}
                          width={36}
                          height={36}
                        />
                        <div>
                          <p className='text-sm font-medium'>
                            {network} Network Account
                          </p>
                          <p className='text-xs text-gray-600'>
                            Network Account Name
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col items-end'>
                        <div className='flex items-center'>
                          <Image
                            src='/icons/tokens/USDT.svg'
                            alt='USDT'
                            width={16}
                            height={16}
                          />
                          <span className='ml-1 text-sm font-semibold'>
                            1.99 USDT
                          </span>
                        </div>
                        <span className='text-xs text-gray-500'>per month</span>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className='flex items-center justify-between mb-6'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='min-w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center rounded-xl'>
                      <Image
                        src={`/icons/networks/${networkData.network}.svg`}
                        alt={networkData.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium'>
                        {networkData.name}
                      </span>
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
                      <span className='ml-1'>
                        {networkData.price.toFixed(2)} USDT
                      </span>
                      <span className='text-sm text-gray-500 ml-1'>
                        per month
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <p className='text-sm font-medium text-gray-600 mb-2'>
                  PAYMENT METHOD
                </p>
                <div className='space-y-2'>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm'>Wallet</span>
                    <span className='text-sm font-medium'>
                      {networkData.walletName}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-sm'>Network Account</span>
                    <span className='text-sm font-medium'>
                      {networkData.networkAccountName}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className='text-sm font-medium text-gray-600 mb-2'>
                  DEACTIVATION IMPACTS
                </p>
                <div className='space-y-2'>
                  <div className='flex items-center gap-2 text-sm'>
                    <div className='text-emerald-500'>✓</div>
                    <span>
                      You will still own all coins, tokens, and positions in the
                      Network Accounts and across all protocols.
                    </span>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <div className='text-rose-500'>✕</div>
                    <span>
                      Lose access to WalletConnect and all WalletConnect related
                      features
                    </span>
                  </div>
                  <div className='flex items-center gap-2 text-sm'>
                    <div className='text-rose-500'>✕</div>
                    <span>
                      Inability to view the dashboard chart and analytics
                    </span>
                  </div>
                </div>
              </div>

              <div className='flex gap-4 mt-6'>
                <Button
                  onClick={handleCancel}
                  className='w-1/2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  variant='secondary'
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleDeactivate}
                  className='w-1/2 bg-rose-600 text-white hover:bg-rose-700'
                  variant='destructive'
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className='flex items-center gap-2'>
                      <div className='h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent' />
                      Deactivating...
                    </div>
                  ) : (
                    'Yes, Deactivate'
                  )}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeactivateNetwork;
