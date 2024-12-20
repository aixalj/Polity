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
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

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
  status: string;
  onResubscribe?: () => void;
  isDFNS?: boolean;
  isFireblocksInactive?: boolean;
}

const NetworkAccountModal: React.FC<NetworkAccountModalProps> = ({
  isOpen,
  onClose,
  networkAccountName,
  networkAccountImage,
  balance,
  networkAccountNumber,
  addNotification,
  status,
  onResubscribe,
  isDFNS = false,
  isFireblocksInactive = false,
}) => {
  const [isDeactivateModalOpen, setDeactivateModalOpen] = useState(false);
  const [networkToDeactivate, setNetworkToDeactivate] = useState<string | null>(
    null
  );
  const [deactivatedNetworks, setDeactivatedNetworks] = useState<string[]>([]);
  const [resubscribeModal, setResubscribeModal] = useState<{
    isOpen: boolean;
    network: string | null;
  }>({ isOpen: false, network: null });
  const [isDFNSDeactivated, setIsDFNSDeactivated] = useState(false);

  const handleCancelSubscription = () => {
    if (isDFNS) {
      const dfnsSubscriptions = [
        {
          name: 'DFNS - Premium',
          network: 'DFNS',
          price: 9.99,
        },
        {
          name: 'Bitcoin Network Account',
          network: 'BTC',
          price: 1.99,
        },
        {
          name: 'Ethereum Network Account',
          network: 'ETH',
          price: 1.99,
        },
        {
          name: 'Polygon Network Account',
          network: 'MATIC',
          price: 1.99,
        },
      ];

      setDeactivateModalOpen(true);
      networkData.isDFNSCancellation = true;
      networkData.subscriptions = dfnsSubscriptions;
    } else {
      setDeactivateModalOpen(true);
    }
  };

  const handleDeactivateClose = (isDeactivating: boolean) => {
    if (isDeactivating) {
      if (networkToDeactivate) {
        setDeactivatedNetworks([...deactivatedNetworks, networkToDeactivate]);
      } else if (isDFNS) {
        setIsDFNSDeactivated(true);
        setDeactivatedNetworks(['Bitcoin', 'Ethereum']);
      }
    }
    setDeactivateModalOpen(false);
    setNetworkToDeactivate(null);
  };

  const networkData: {
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
  } = {
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

  const handleNetworkCancel = (network: string) => {
    setNetworkToDeactivate(network);
    setDeactivateModalOpen(true);
  };

  React.useEffect(() => {
    const handleCloseAll = () => {
      onClose();
      setDeactivateModalOpen(false);
    };

    window.addEventListener('closeAllModals', handleCloseAll);
    return () => window.removeEventListener('closeAllModals', handleCloseAll);
  }, [onClose]);

  const closeAllModals = () => {
    setResubscribeModal({ isOpen: false, network: null });
    setDeactivateModalOpen(false);
    onClose();
  };

  return (
    <>
      <Dialog
        open={isOpen && !isDeactivateModalOpen && !resubscribeModal.isOpen}
        onOpenChange={onClose}
      >
        <DialogContent
          lightCloseIcon={false}
          className='bg-white border border-gray-300 p-0 rounded-[24px] shadow-xl w-[448px] h-auto flex flex-col'
        >
          {isFireblocksInactive ? (
            <>
              <div className='px-6 pt-6 flex-shrink-0'>
                <Image
                  className='mb-4'
                  src={networkAccountImage}
                  alt='Fireblocks-icon'
                  width={48}
                  height={48}
                />
                <h2 className='text-lg font-medium mb-1 text-gray-900'>
                  Fireblocks - Premium
                </h2>
                <p className='text-gray-700 text-sm font-regular'>
                  Wallet Name
                </p>
                <div className='flex justify-end items-center gap-2 mt-2'>
                  <span className='text-sm text-gray-600'>Total</span>
                  <div className='flex items-center'>
                    <Image
                      src='/icons/tokens/USDT.svg'
                      alt='USDT'
                      width={20}
                      height={20}
                    />
                    <span className='text-lg font-semibold ml-1'>
                      15.96 USDT
                    </span>
                  </div>
                </div>
                <p className='text-sm text-gray-500 text-right'>
                  USD Equivalent ≈ $15.96
                </p>
              </div>

              <div className='bg-gray-50 py-2 mb-2'>
                <p className='text-xs font-medium text-gray-600 w-full pl-6'>
                  <strong>SUBSCRIPTION</strong>
                </p>
              </div>
              <div className='px-6'>
                <div className='flex items-center gap-3 mb-2'>
                  <div className='flex items-center justify-center rounded-xl'>
                    <Image
                      src='/icons/networks/Fireblocks.svg'
                      alt='Fireblocks'
                      width={36}
                      height={36}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-800'>
                      Fireblocks - Premium
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
                

                <div className='flex items-center justify-between py-2'>
                  <div className='flex items-center gap-3'>
                    <Image
                      src='/icons/networks/MATIC.svg'
                      alt='Polygon'
                      width={36}
                      height={36}
                    />
                    <div>
                      <p className='text-sm font-medium'>
                        Polygon Network Account
                      </p>
                      <p className='text-xs text-gray-600'>
                        Network Account Name
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='flex flex-col items-end'>
                      <div className='flex items-center'>
                        <Image
                          src='/icons/tokens/USDT.svg'
                          alt='USDT'
                          width={16}
                          height={16}
                        />
                        <span className='ml-1 text-sm font-semibold'>
                          <span className='line-through text-gray-400'>
                            1.99 USDT
                          </span>
                        </span>
                      </div>
                      <span className='text-xs text-gray-500'>per month</span>
                    </div>
                    <Button
                      variant='outline'
                      className='text-primary hover:text-primary'
                      onClick={() =>
                        setResubscribeModal({
                          isOpen: true,
                          network: 'Polygon',
                        })
                      }
                    >
                      Resubscribe
                    </Button>
                  </div>
                </div>
              </div>

              <div className='bg-gray-50 py-2 mb-1'>
                <p className='text-xs font-medium text-gray-600 w-full pl-6'>
                  <strong>SUBSCRIPTION DETAILS</strong>
                </p>
              </div>

              <div className='px-6'>
                <div className='flex justify-between items-center py-2'>
                  <span className='text-sm text-gray-700'>Wallet Status</span>
                  <Badge variant='destructive'>Deactivated</Badge>
                </div>
                <div className='flex justify-between items-center py-2'>
                  <span className='text-sm text-gray-700'>Started</span>
                  <span className='text-sm text-gray-700'>18 Jul 2023</span>
                </div>
                <div className='flex justify-between items-center py-2'>
                  <span className='text-sm text-gray-700'>Cancelled on</span>
                  <span className='text-sm text-gray-700'>18 Aug 2023</span>
                </div>
              </div>

              <div className='bg-gray-50 py-2 mb-1'>
                <p className='text-xs font-medium text-gray-600 w-full pl-6'>
                  <strong>PAYMENT METHOD</strong>
                </p>
              </div>

              <div className='px-6'>
                <div className='flex justify-between items-center py-2'>
                  <span className='text-sm text-gray-700'>Wallet</span>
                  <span className='text-sm text-gray-700'>Wallet Name</span>
                </div>
                <div className='flex justify-between items-center py-2'>
                  <span className='text-sm text-gray-700'>Network Account</span>
                  <span className='text-sm text-gray-700'>
                    Network Account Name (0x8f...47d2)
                  </span>
                </div>
              </div>

              <div className='px-6 pb-5 mt-4'>
                <Button
                  type='button'
                  variant='default'
                  className='w-full'
                  onClick={onResubscribe}
                >
                  Resubscribe
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className='px-6 pt-6 flex-shrink-0'>
                <Image
                  className='mb-4'
                  src={networkAccountImage}
                  alt='WC-icon'
                  width={48}
                  height={48}
                />
                <h2 className='text-lg font-medium mb-1 text-gray-900'>
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
                <div className='flex justify-end items-center gap-2 -mt-12'>
                  <div className='flex flex-col items-end'>
                    <span className='text-xs text-gray-600'>Total</span>
                    <div className='flex items-center'>
                      <Image
                        src='/icons/tokens/USDT.svg'
                        alt='USDT'
                        width={16}
                        height={16}
                      />
                      <span className='text-sm font-medium ml-1'>
                        {balance}
                      </span>
                    </div>
                  </div>
                </div>
                <p className='text-xs text-gray-500 text-right'>
                  USD Equivalent ≈ ${parseFloat(balance).toFixed(2)}
                </p>
              </div>
              <div className='bg-gray-50 py-2'>
                <p className='text-xs font-medium text-gray-600 w-full pl-6'>
                  <strong>SUBSCRIPTION</strong>
                </p>
              </div>
              <div className='px-6'>
                {isDFNS ? (
                  <>
                    {/* DFNS Premium row */}
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-3'>
                        <Image
                          src={networkAccountImage}
                          alt='DFNS'
                          width={36}
                          height={36}
                        />
                        <div>
                          <p className='text-sm font-medium'>DFNS - Premium</p>
                          <p className='text-xs text-gray-600'>Wallet Name</p>
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
                            9.99 USDT
                          </span>
                        </div>
                        <span className='text-xs text-gray-500'>per month</span>
                      </div>
                      <div className='w-[3%]'></div>
                    </div>

                    {/* Filter networks based on active status */}
                    {['Bitcoin', 'Ethereum'].map((network) => (
                      <div
                        key={network}
                        className='flex items-center justify-between py-2'
                      >
                        <div className='flex items-center gap-3'>
                          <Image
                            src={`/icons/networks/${
                              network === 'Bitcoin' ? 'BTC' : 'ETH'
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
                              {deactivatedNetworks.includes(network) ? (
                                <span className='line-through text-gray-400'>
                                  1.99 USDT
                                </span>
                              ) : (
                                '1.99 USDT'
                              )}
                            </span>
                          </div>
                          <span className='text-xs text-gray-500'>
                            per month
                          </span>
                        </div>
                        <Button
                          variant={
                            deactivatedNetworks.includes(network)
                              ? 'outline'
                              : 'ghost'
                          }
                          className={
                            deactivatedNetworks.includes(network)
                              ? 'text-primary hover:text-primary'
                              : 'text-rose-600 hover:text-rose-700 border border-rose-300'
                          }
                          onClick={() => {
                            if (deactivatedNetworks.includes(network)) {
                              setResubscribeModal({ isOpen: true, network });
                            } else {
                              handleNetworkCancel(network);
                            }
                          }}
                        >
                          {deactivatedNetworks.includes(network)
                            ? 'Resubscribe'
                            : 'Cancel'}
                        </Button>
                      </div>
                    ))}
                  </>
                ) : networkAccountName.includes('Fireblocks') ? (
                  <>
                    {/* Original single network display for Fireblocks */}
                    <div className='flex items-center gap-3 mb-2'>
                      <div className='flex items-center justify-center rounded-xl'>
                        <Image
                          src='/icons/networks/Fireblocks.svg'
                          alt='Fireblocks'
                          width={36}
                          height={36}
                        />
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-sm font-medium text-gray-800'>
                          Fireblocks - Premium
                        </span>
                        <span className='text-xs text-gray-600'>
                          Wallet Name
                        </span>
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
                      <div className='w-[26%]'></div>
                    </div>

                    {/* Polygon Network Account row */}
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-3'>
                        <Image
                          src='/icons/networks/BTC.svg'
                          alt='BTC'
                          width={36}
                          height={36}
                        />
                        <div>
                          <p className='text-sm font-medium'>
                            Bitcoin Network Account
                          </p>
                          <p className='text-xs text-gray-600'>
                            Network Account Name
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center gap-4'>
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
                          <span className='text-xs text-gray-500'>
                            per month
                          </span>
                        </div>
                        <Button
                          variant='outline'
                          className='text-primary hover:text-primary opacity-50 cursor-not-allowed'
                          disabled
                        >
                          Resubscribe
                        </Button>
                      </div>
                    </div>
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-3'>
                        <Image
                          src='/icons/networks/ETH.svg'
                          alt='ETH'
                          width={36}
                          height={36}
                        />
                        <div>
                          <p className='text-sm font-medium'>
                            Ethereum Network Account
                          </p>
                          <p className='text-xs text-gray-600'>
                            Network Account Name
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center gap-4'>
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
                          <span className='text-xs text-gray-500'>
                            per month
                          </span>
                        </div>
                        <Button
                          variant='outline'
                          className='text-primary hover:text-primary opacity-50 cursor-not-allowed'
                          disabled
                        >
                          Resubscribe
                        </Button>
                      </div>
                    </div>
                    <div className='flex items-center justify-between py-2'>
                      <div className='flex items-center gap-3'>
                        <Image
                          src='/icons/networks/MATIC.svg'
                          alt='Polygon'
                          width={36}
                          height={36}
                        />
                        <div>
                          <p className='text-sm font-medium'>
                            Polygon Network Account
                          </p>
                          <p className='text-xs text-gray-600'>
                            Network Account Name
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center gap-4'>
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
                          <span className='text-xs text-gray-500'>
                            per month
                          </span>
                        </div>
                        <Button
                          variant='outline'
                          className='text-primary hover:text-primary opacity-50 cursor-not-allowed'
                          disabled
                        >
                          Resubscribe
                        </Button>
                      </div>
                    </div>
                  </>
                ) : networkAccountName.includes('Safeheron') ? (
                  <>
                    {/* Original single network display for Safeheron */}
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
                        <span className='text-xs text-gray-600'>
                          Wallet Name
                        </span>
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
                      <div className='w-[18%]'></div>
                    </div>

                    {/* Additional network rows */}
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
                        <div className='flex items-center gap-4'>
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
                            <span className='text-xs text-gray-500'>
                              per month
                            </span>
                          </div>
                          <Button
                            variant='ghost'
                            disabled
                            className='text-rose-600 hover:text-rose-700 border border-rose-300'
                            onClick={() => handleNetworkCancel(network)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  // Original single network display
                  <div className='flex items-center gap-3'>
                    <div className='flex items-center justify-center rounded-xl'>
                      <Image
                        src={`/icons/networks/${networkData.network}.svg`}
                        alt={networkData.name}
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium text-gray-800'>
                        {networkData.name}
                      </span>
                      <span className='text-xs text-gray-600'>
                        Network Account Name
                      </span>
                    </div>
                    <div className='ml-auto flex flex-col items-right'>
                      <div className='flex items-center'>
                        {' '}
                        <Image
                          src='/icons/tokens/USDT.svg'
                          alt='USDT'
                          width={16}
                          height={16}
                        />
                        <span className='ml-1 text-sm font-semibold'>
                          {networkData.price.toFixed(2)} USDT
                        </span>
                      </div>
                      <span className='text-sm text-gray-500 text-right'>
                        per month
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='bg-gray-50 py-2'>
                <p className='text-xs font-medium text-gray-600 w-full pl-6'>
                  <strong>SUBSCRIPTION DETAILS</strong>
                </p>
              </div>
              <div className='flex flex-col !gap-2'>
                <p className='px-6 text-sm w-full flex justify-between'>
                  <strong className='font-medium text-sm text-gray-700'>
                    Wallet Status
                  </strong>{' '}
                  <Badge
                    variant={
                      status === 'Active' && !isDFNSDeactivated
                        ? 'success'
                        : status === 'Pending'
                        ? 'pending'
                        : 'destructive'
                    }
                    className='ml-auto'
                  >
                    {isDFNSDeactivated ? 'Inactive' : status}
                  </Badge>
                </p>
                <p className='px-6 text-sm w-full flex justify-between'>
                  <strong className='font-medium text-sm text-gray-700'>
                    Started
                  </strong>{' '}
                  <strong className='font-semibold ml-auto text-sm text-gray-700'>
                    18 Jul 2023
                  </strong>
                </p>
                <p className='px-6 text-sm w-full flex justify-between'>
                  <strong className='font-medium text-sm text-gray-700'>
                    Renews on
                  </strong>{' '}
                  <strong className='font-semibold ml-auto text-sm text-gray-700'>
                    18 Aug 2023
                  </strong>
                </p>
              </div>
              <div className=' bg-gray-50 py-2'>
                <p className='text-xs font-medium text-gray-600 w-full pl-6'>
                  <strong>PAYMENT METHOD</strong>
                </p>
              </div>
              <div className='flex flex-col !gap-2 mb-2'>
                <p className='px-6 text-sm w-full flex justify-between'>
                  <strong className='font-medium text-sm text-gray-700'>
                    Wallet
                  </strong>{' '}
                  <div className='flex items-center gap-2 text-gray-700 text-sm font-regular mt-1'>
                    <Image
                      src='/wallets/wallet1.svg'
                      alt='Wallet'
                      width={16}
                      height={16}
                    />
                    <span className='text-sm text-gray-700 font-semibold'>
                      Main Wallet
                    </span>
                  </div>
                </p>
                <p className='px-6 text-sm w-full flex justify-between'>
                  <strong className='font-medium text-sm text-gray-700'>
                    Network Account
                  </strong>{' '}
                  <div className='flex items-center gap-2 ml-auto'>
                    <Image
                      src={networkAccountImage}
                      alt='Network'
                      width={16}
                      height={16}
                    />
                    <strong className='font-semibold text-sm text-gray-700'>
                      Network Account Name {networkAccountNumber}
                    </strong>
                  </div>
                </p>
              </div>
              <div className=' px-6 pb-5 rounded-[32px] flex-grow flex flex-col items-center justify-center w-full'>
                {status === 'Pending' ? (
                  <div className='flex gap-2 w-full'>
                    <Link
                      href='/onboarding/superapp/wallet/customize'
                      className='w-1/2'
                    >
                      <Button
                        type='button'
                        variant='secondary'
                        className='w-full !bg-white hover:!bg-gray-50'
                      >
                        Install Wallet
                      </Button>
                    </Link>
                    <Button
                      type='button'
                      variant='secondary-destructive'
                      className='w-1/2 !bg-white !border-rose-300 hover:!bg-rose-50 !hover:border-rose-300 !focus:border-white !focus:bg-none !focus:shadow-button-destructive-focus-none !focus-visible:ring-0'
                      onClick={handleCancelSubscription}
                    >
                      Cancel Subscription
                    </Button>
                  </div>
                ) : (
                  <Button
                    type='button'
                    variant={
                      status === 'Inactive' || isDFNSDeactivated
                        ? 'secondary'
                        : 'secondary-destructive'
                    }
                    className={
                      status === 'Inactive' || isDFNSDeactivated
                        ? 'w-full !bg-white hover:!bg-gray-50 !text-gray-700 !border-gray-300'
                        : 'w-full !bg-white !border-rose-300 hover:!bg-rose-50 !hover:border-rose-300 !focus:border-white !focus:bg-none !focus:shadow-button-destructive-focus-none !focus-visible:ring-0'
                    }
                    onClick={
                      status === 'Inactive' || isDFNSDeactivated
                        ? onResubscribe
                        : handleCancelSubscription
                    }
                  >
                    {status === 'Inactive' || isDFNSDeactivated
                      ? 'Resubscribe'
                      : 'Cancel Subscription'}
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {isDeactivateModalOpen && (
        <DeactivateNetwork
          isOpen={isDeactivateModalOpen}
          onClose={handleDeactivateClose}
          networkData={{
            ...networkData,
            name: networkToDeactivate
              ? `${networkToDeactivate} Network Account`
              : networkData.name,
            network: networkToDeactivate
              ? networkToDeactivate === 'Bitcoin'
                ? 'BTC'
                : networkToDeactivate === 'Ethereum'
                ? 'ETH'
                : 'MATIC'
              : networkData.network,
            price: 1.99,
            isDFNSCancellation: isDFNS && !networkToDeactivate,
            subscriptions:
              isDFNS && !networkToDeactivate
                ? [
                    {
                      name: 'DFNS - Premium',
                      network: 'DFNS',
                      price: 9.99,
                    },
                    {
                      name: 'Bitcoin Network Account',
                      network: 'BTC',
                      price: 1.99,
                    },
                    {
                      name: 'Ethereum Network Account',
                      network: 'ETH',
                      price: 1.99,
                    },
                  ]
                : undefined,
          }}
          addNotification={addNotification}
          isFromTable={true}
        />
      )}

      {resubscribeModal.isOpen && (
        <NetworkAccountModal
          isOpen={resubscribeModal.isOpen}
          onClose={closeAllModals}
          networkAccountName={`${resubscribeModal.network} Network Account`}
          networkAccountImage={`/icons/networks/${
            resubscribeModal.network === 'Bitcoin'
              ? 'BTC'
              : resubscribeModal.network === 'Ethereum'
              ? 'ETH'
              : 'MATIC'
          }.svg`}
          balance='1.99 USDT'
          networkAccountNumber={networkAccountNumber}
          addNotification={addNotification}
          status='Inactive'
          onResubscribe={() => {
            console.log(`Resubscribing to ${resubscribeModal.network}`);
            setResubscribeModal({ isOpen: false, network: null });
            setDeactivatedNetworks(
              deactivatedNetworks.filter((n) => n !== resubscribeModal.network)
            );
          }}
        />
      )}
    </>
  );
};

export default NetworkAccountModal;
