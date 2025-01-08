'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loading02 } from '@untitled-ui/icons-react';
import { usePathname } from 'next/navigation';
import { Notification } from '@/components/ui/notification';
import { CheckVerified01 } from '@untitled-ui/icons-react';
import OnramperSVG from './onramper-widget';

interface OnramperModalProps {
  isOpen: boolean;
  onClose: () => void;
  setNotifications: React.Dispatch<
    React.SetStateAction<Array<{ title: string }>>
  >;
}

const OnramperModal: React.FC<OnramperModalProps> = ({
  isOpen,
  onClose,
  setNotifications,
}) => {
  const [selectedWallet, setSelectedWallet] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const isUniapp = pathname?.includes('uniapp');
  const [showWidget, setShowWidget] = useState(false);

  const handleContinue = () => {
    setIsLoading(true);
    setShowWidget(true);
    onClose();

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent
          lightCloseIcon={false}
          className='bg-white p-1 rounded-2xl w-[448px] h-auto flex flex-col'
        >
          <div className='px-9 pt-5 flex-shrink-0'>
            <div className='flex justify-start mb-2'>
              <Image
                src='/onramper.svg'
                alt='Onramper'
                width={128}
                height={32}
              />
            </div>
            <h2 className='text-lg font-medium mb-2 text-gray-900'>
              Buy Crypto with Cash
            </h2>
            <p className='mb-3 text-gray-700 text-sm font-regular'>
              Select the wallet and network account you would like to purchase
              and deposit the assets into.
            </p>
          </div>

          <div className='bg-white px-6 pt-3 pb-6 rounded-xl flex-grow overflow-hidden'>
            <div className='flex flex-col gap-4'>
              <div>
                <p className='text-sm mb-1.5 text-gray-700'>Wallet</p>
                <Select onValueChange={setSelectedWallet}>
                  <SelectTrigger className='w-full h-10 rounded-xl border-gray-300 data-[state=open]:ring-2 data-[state=open]:ring-[#DCF0EE] data-[state=open]:border-[#1F756B]'>
                    <SelectValue placeholder='Select a Wallet...' />
                  </SelectTrigger>
                  <SelectContent className='bg-white rounded-2xl'>
                    <SelectItem value='main'>
                      <div className='flex items-center gap-2'>
                        <Image
                          src='/wallets/wallet1.svg'
                          alt='My Wallet'
                          width={24}
                          height={24}
                        />
                        <span>{isUniapp ? 'My Wallet' : 'Main Wallet'}</span>
                      </div>
                    </SelectItem>
                    {!isUniapp && (
                      <SelectItem value='second'>
                        <div className='flex items-center gap-2'>
                          <Image
                            src='/wallets/wallet2.svg'
                            alt='Second Wallet'
                            width={24}
                            height={24}
                          />
                          <span>Second Wallet</span>
                        </div>
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <p className='text-sm mb-1.5 text-gray-700'>Network Account</p>
                <Select onValueChange={setSelectedNetwork}>
                  <SelectTrigger className='w-full h-10 rounded-xl border-gray-300 data-[state=open]:ring-2 data-[state=open]:ring-[#DCF0EE] data-[state=open]:border-[#1F756B]'>
                    <SelectValue placeholder='Select a Network Account...' />
                  </SelectTrigger>
                  <SelectContent className='bg-white rounded-2xl'>
                    <SelectItem value='BTC'>
                      <div className='flex items-center gap-2'>
                        <img
                          src='/icons/networks/BTC.svg'
                          className='w-5 h-5'
                        />
                        <span>Bitcoin Network Account Name (428f...47d2)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value='ETH'>
                      <div className='flex items-center gap-2'>
                        <img
                          src='/icons/networks/ETH.svg'
                          className='w-5 h-5'
                        />
                        <span>Ethereum Network Account Name (0xD2...05F6)</span>
                      </div>
                    </SelectItem>
                    <SelectItem value='POL'>
                      <div className='flex items-center gap-2'>
                        <img
                          src='/icons/networks/MATIC.svg'
                          className='w-5 h-5'
                        />
                        <span> Polygon Network Account Name (0x8f...47d2)</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='mt-4'>
                <Button
                  className='w-full'
                  disabled={!selectedWallet || !selectedNetwork}
                  onClick={handleContinue}
                >
                  {isLoading ? (
                    <>
                      <Loading02 width={20} height={20} />
                      Processing...
                    </>
                  ) : (
                    'Continue'
                  )}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {showWidget && (
        <Dialog open={showWidget} onOpenChange={() => setShowWidget(false)}>
          <DialogContent className='p-0 bg-transparent border-none shadow-none [&>button]:hidden'>
            <OnramperSVG
              setNotifications={setNotifications}
              onClose={() => setShowWidget(false)}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default OnramperModal;
