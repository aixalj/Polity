'use client';

import React, { useState } from 'react';
import { Copy, X, Eye } from 'lucide-react'; // Import the Copy icon
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import ETHNetwork from 'public/icons/networks/ETH.svg'; // Import network icons
import BTCNetwork from 'public/icons/networks/BTC.svg';
import POLNetwork from 'public/icons/networks/MATIC.svg';
import BTC from 'cryptocurrency-icons/svg/color/btc.svg';
import ETH from 'cryptocurrency-icons/svg/color/eth.svg';
import USDT from 'cryptocurrency-icons/svg/color/usdt.svg';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog'; // Import Dialog component

interface ViewAddressProps {
  isOpen: boolean;
  onClose: (closeAll?: boolean) => void;
  addressData: {
    contactName: string;
    addressname: string;
    network: string;
    asset?: string; // Make asset optional
    address: string;
  } | null;
}

const ViewAddress: React.FC<ViewAddressProps> = ({
  isOpen,
  onClose,
  addressData,
}) => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null); // State for copied address
  const [tooltipVisible, setTooltipVisible] = useState(false); // State for tooltip visibility
  if (!isOpen || !addressData) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(addressData.address);
    setCopiedAddress(addressData.address);
    setTooltipVisible(true); // Show tooltip when copied
    setTimeout(() => {
      setCopiedAddress(null);
      setTooltipVisible(false); // Hide tooltip after 2 seconds
    }, 2000);
  };

  // Function to truncate the network address
  const truncateAddress = (address: string, maxLength: number) => {
    if (address.length > maxLength) {
      return `${address.slice(0, maxLength)}...`;
    }
    return address;
  };

  // Function to copy the address to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(text);
    setTooltipVisible(true); // Show tooltip when copied
    setTimeout(() => {
      setCopiedAddress(null);
      setTooltipVisible(false); // Hide tooltip after 2 seconds
    }, 2000);
  };

  const getNetworkIcon = () => {
    switch (addressData.network) {
      case 'Ethereum Network':
        return (
          <Image
            src={ETHNetwork}
            alt='Ethereum Network'
            className='h-5 w-5 mr-2'
          />
        );
      case 'Bitcoin Network':
        return (
          <Image
            src={BTCNetwork}
            alt='Bitcoin Network'
            className='h-5 w-5 mr-2'
          />
        );
      case 'Polygon Network':
        return (
          <Image
            src={POLNetwork}
            alt='Polygon Network'
            className='h-5 w-5 mr-2'
          />
        );
      default:
        return null;
    }
  };

  const getAssetDetails = (asset: string) => {
    const assetLower = asset.toLowerCase();
    switch (assetLower) {
      case 'bitcoin':
      case 'btc':
        return { icon: BTC, name: 'Bitcoin BTC' }; // Bitcoin details
      case 'ethereum':
      case 'eth':
        return { icon: ETH, name: 'Ethereum ETH' }; // Ethereum details
      case 'tether':
      case 'usdt':
        return { icon: USDT, name: 'Tether USDT' }; // Tether details
      default:
        return { icon: '/default-icon.svg', name: 'Unknown Asset' }; // Default details
    }
  };

  const assetDetails = addressData.asset
    ? getAssetDetails(addressData.asset)
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose(true)}>
      <DialogContent
        lightCloseIcon
        className='bg-primary-500 p-1 rounded-2xl shadow-xl  w-[410px] h-auto flex flex-col '
      >
        <div className='px-8 pt-5 flex-shrink-0'>
          <div className='flex justify-start mb-2'>
            <Eye className='h-6 w-6 text-gray-50' />
          </div>
          <h2 className='text-lg font-normal mb-1.5 text-gray-50'>
            View Address
          </h2>
          <p className='mb-4 text-gray-50 text-sm font-regular whitespace-nowrap'>
            View the details below for this address.
          </p>
        </div>

        <div className='bg-white px-6 pt-4 pb-4 rounded-xl shadow-md flex-grow overflow-hidden'>
          <div className='-mx-6 bg-gray-50 py-2 mb-2'>
            <p className='text-xs font-normal text-gray-600 w-full pl-6'>
              <strong className='font-normal'>CONTACT DETAILS</strong>
            </p>
          </div>
          <p className='text-sm mb-2 w-full flex justify-between'>
            <strong className='font-normal'>Contact Name:</strong>{' '}
            <strong className='font-medium ml-auto'>
              {addressData.contactName}
            </strong>
          </p>
          <p className='text-sm mb-2 flex justify-between'>
            <strong className='font-normal'>Address Name:</strong>{' '}
            <strong className='font-medium ml-auto'>
              {addressData.addressname}
            </strong>
          </p>
          <p className='text-sm mb-2 flex justify-between items-center'>
            <strong className='font-normal'>Network:</strong>{' '}
            <strong className='font-medium ml-auto flex items-center'>
              {getNetworkIcon()}
              {addressData.network}
            </strong>
          </p>
          {assetDetails && (
            <p className='text-sm mb-2 flex justify-between items-center'>
              <strong className='font-normal'>Asset:</strong>{' '}
              <strong className='font-medium ml-auto flex items-center'>
                <Image
                  src={assetDetails.icon}
                  alt={assetDetails.name}
                  className='h-5 w-5 mr-2'
                />
                {assetDetails.name}
              </strong>
            </p>
          )}
          <p className='text-sm flex justify-between'>
            <strong className='font-normal'>Network Address:</strong>
            <span className='flex items-center'>
              <strong className='font-medium ml-auto'>
                {truncateAddress(addressData.address, 20)}
              </strong>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span
                      className='flex items-center cursor-pointer'
                      onClick={() => copyToClipboard(addressData.address)}
                    >
                      <Copy className='h-4 w-4 text-gray-600 ml-2' />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{copiedAddress ? 'Copied!' : 'Click to copy'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewAddress;
