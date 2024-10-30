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

interface ViewAddressProps {
  isOpen: boolean;
  onClose: () => void;
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
  if (!isOpen || !addressData) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(addressData.address);
    alert('Network address copied to clipboard!'); // Optional: Show a notification
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
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const getNetworkIcon = () => {
    switch (addressData.network) {
      case 'Ethereum Network':
        return (
          <Image src={ETHNetwork} alt='Ethereum Network' className='h-5 w-5 mr-2' />
        );
      case 'Bitcoin Network':
        return (
          <Image src={BTCNetwork} alt='Bitcoin Network' className='h-5 w-5 mr-2' />
        );
      case 'Polygon Network':
        return (
          <Image src={POLNetwork} alt='Polygon Network' className='h-5 w-5 mr-2' />
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

  const assetDetails = addressData.asset ? getAssetDetails(addressData.asset) : null;

  return (
    <div className='fixed inset-0 bg-gray-200 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-primary-500 p-1 rounded-2xl shadow-xl max-w-[90%] w-[410px] h-auto flex flex-col relative'>
        <div className='px-8 pt-6 flex-shrink-0'>
          <button
            onClick={onClose}
            className='absolute top-2 right-2 text-gray-50 hover:text-gray-100'
            aria-label='Close'
          >
            <X className='h-6 w-6' />
          </button>
          <div className='flex justify-start mb-2'>
            <Eye className='h-6 w-6 text-gray-50' />
          </div>
          <h2 className='text-lg font-medium mb-1.5 text-gray-50'>
            View Address
          </h2>
          <p className='mb-4 text-gray-50 text-sm font-regular whitespace-nowrap'>
            View the details below for this address.
          </p>
        </div>

        <div className='bg-white px-4 pt-6 pb-6 rounded-xl shadow-md flex-grow overflow-hidden'>
          <div className='-mx-4 bg-gray-50 py-2 mb-1'>
            <p className='text-xs font-medium text-gray-600 w-full pl-4'>
              <strong>CONTACT DETAILS</strong>
            </p>
          </div>
          <p className='text-sm mb-2 w-full flex justify-between'>
            <strong className='font-medium'>Contact Name:</strong>{' '}
            <strong className='font-semibold ml-auto'>
              {addressData.contactName}
            </strong>
          </p>
          <p className='text-sm mb-2 flex justify-between'>
            <strong className='font-medium'>Address Name:</strong>{' '}
            <strong className='font-semibold ml-auto'>
              {addressData.addressname}
            </strong>
          </p>
          <p className='text-sm mb-2 flex justify-between items-center'>
            <strong className='font-medium'>Network:</strong>{' '}
            <strong className='font-semibold ml-auto flex items-center'>
              {getNetworkIcon()}
              {addressData.network}
            </strong>
          </p>
          {assetDetails && (
            <p className='text-sm mb-2 flex justify-between items-center'>
              <strong className='font-medium'>Asset:</strong>{' '}
              <strong className='font-semibold ml-auto flex items-center'>
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
            <strong className='font-medium'>Network Address:</strong>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span
                    className='flex items-center cursor-pointer'
                    onClick={() => copyToClipboard(addressData.address)}
                  >
                    <strong className='font-semibold ml-auto'>
                      {truncateAddress(addressData.address, 20)}
                    </strong>
                    <Copy className='h-4 w-4 text-gray-600 ml-2' />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{copiedAddress ? 'Copied!' : 'Click to copy'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewAddress;