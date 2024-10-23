'use client';

import * as React from 'react';
import { Button } from './button';
import { Edit, Eye } from 'lucide-react';
import { Pagination } from '@/components/ui/pagination';
import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { FavoriteStar } from './favoritestar';
import { Notification } from '@/components/ui/notification';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { blo } from 'blo';

import Image from 'next/image';
import BTC from 'cryptocurrency-icons/svg/color/btc.svg';
import ETH from 'cryptocurrency-icons/svg/color/eth.svg';
import LINK from 'cryptocurrency-icons/svg/color/link.svg';
import MATIC from 'cryptocurrency-icons/svg/color/matic.svg';
import USDC from 'cryptocurrency-icons/svg/color/usdc.svg';
import USDT from 'cryptocurrency-icons/svg/color/usdt.svg';
import WBTC from 'cryptocurrency-icons/svg/color/wbtc.svg';
import SOL from 'cryptocurrency-icons/svg/color/sol.svg';
import ADA from 'cryptocurrency-icons/svg/color/ada.svg';
import DOT from 'cryptocurrency-icons/svg/color/dot.svg';

import ETHNetwork from 'public/icons/networks/ETH.svg';
import BTCNetwork from 'public/icons/networks/BTC.svg';
import POLNetwork from 'public/icons/networks/MATIC.svg';

interface Address {
  id: string;
  contactName: string;
  addressname: string;
  network: string;
  asset: string;
  address: string;
  isFavorite?: boolean;
}

interface AddressesTableProps {
  addresses: Address[];
  onEdit: (addressId: string) => void;
  onView: (addressId: string) => void;
  onToggleFavorite: (addressId: string) => void;
  favorites: string[];
  searchTerm: string; // New prop for filtering
}

const AddressesTable: React.FC<AddressesTableProps> = ({
  addresses,
  onEdit,
  onView,
  onToggleFavorite,
  favorites,
  searchTerm,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [localAddresses, setLocalAddresses] = useState(addresses);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setLocalAddresses(addresses);
  }, [addresses]);

  // Updated filtering logic to use includes for better search functionality
  const filteredAddresses = useMemo(() => {
    return localAddresses.filter((address) => {
      return address.contactName.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [localAddresses, searchTerm]);

  const sortedAddresses = useMemo(() => {
    return [...filteredAddresses].sort((a, b) => {
      if (favorites.includes(a.id) && !favorites.includes(b.id)) return -1;
      if (!favorites.includes(a.id) && favorites.includes(b.id)) return 1;
      return a.contactName.localeCompare(b.contactName);
    });
  }, [filteredAddresses, favorites]);

  const totalItems = sortedAddresses.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedAddresses = sortedAddresses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const toggleTooltip = (id: string) => {
    setOpenTooltipId((prevId) => (prevId === id ? null : id));
  };

  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const handleToggleFavorite = useCallback(
    (addressId: string) => {
      setLocalAddresses((prevAddresses) =>
        prevAddresses.map((addr) =>
          addr.id === addressId
            ? { ...addr, isFavorite: !addr.isFavorite }
            : addr
        )
      );
      onToggleFavorite(addressId);

      const address = localAddresses.find((addr) => addr.id === addressId);
      if (address && !address.isFavorite) {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 5000);
      }
    },
    [onToggleFavorite, localAddresses]
  );

  const getNetworkIcon = (network: string) => {
    const networkLower = network.toLowerCase().replace(' network', '');
    switch (networkLower) {
      case 'bitcoin':
        return BTCNetwork;
      case 'ethereum':
        return ETHNetwork;
      case 'polygon':
        return POLNetwork;
      default:
        return '/networks/default-network-icon.svg';
    }
  };

  const getNetworkName = (network: string) => {
    const networkLower = network.toLowerCase().replace(' network', '');
    switch (networkLower) {
      case 'bitcoin':
        return 'Bitcoin Network';
      case 'ethereum':
        return 'Ethereum Network';
      case 'polygon':
        return 'Polygon Network';
      default:
        return `${network} Network`;
    }
  };

  const getAssetIcon = (asset: string) => {
    switch (asset.toLowerCase()) {
      case 'bitcoin':
      case 'btc':
        return BTC;
      case 'ethereum':
      case 'eth':
        return ETH;
      case 'chainlink':
      case 'link':
        return LINK;
      case 'polygon':
      case 'matic':
        return MATIC;
      case 'usd coin':
      case 'usdc':
        return USDC;
      case 'tether':
      case 'usdt':
        return USDT;
      case 'wrapped bitcoin':
      case 'wbtc':
        return WBTC;
      case 'solana':
      case 'sol':
        return SOL;
      case 'cardano':
      case 'ada':
        return ADA;
      case 'polkadot':
      case 'dot':
        return DOT;
      default:
        return '/default-icon.svg';
    }
  };

  return (
    <div className='flex flex-col h-full'>
      <div className='w-full min-w-fit flex bg-gray-100 rounded-xl font-medium text-gray-500 text-xs'>
        <div className='w-10 px-2 py-3'></div>
        <div className='w-1/4 px-6 py-3'>Contact</div>
        <div className='w-1/5 px-6 py-3'>Network</div>
        <div className='w-1/6 px-6 py-3'>Asset</div>
        <div className='w-1/4 px-6 py-3'>Address</div>
        <div className='w-32 px-6 py-3'></div>
      </div>
      <div className='flex-grow overflow-y-auto'>
        <div className='w-full flex flex-col gap-1'>
          {paginatedAddresses.map((address) => (
            <div
              key={address.id}
              className='w-full min-w-fit flex hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm'
            >
              <div className='w-10 px-2 py-3 flex items-center justify-center'>
                <FavoriteStar
                  isFavorite={favorites.includes(address.id)} 
                  onToggle={() => onToggleFavorite(address.id)}
                />
              </div>
              <div className='w-1/4 px-6 py-3 flex items-center'>
                <div className='rounded-full overflow-hidden bg-gray-200 w-8 h-8 mr-2 flex-shrink-0'>
                  <Image
                    src={'/bastion.png'}
                    alt={address.contactName}
                    width={32}
                    height={32}
                  />
                </div>
                <div className='flex flex-col overflow-hidden'>
                  <p className='font-medium truncate'>{address.contactName}</p>
                  <p className='text-xs text-gray-500 truncate'>
                    {address.addressname}
                  </p>
                </div>
              </div>
              <div className='w-1/5 px-6 py-3 flex items-center'>
                <div className='w-8 h-8 flex-shrink-0 mr-2'>
                  <Image
                    src={getNetworkIcon(address.network)}
                    alt={getNetworkName(address.network)}
                    width={32}
                    height={32}
                    className='w-full h-full object-contain'
                  />
                </div>
                <span className='truncate'>
                  {getNetworkName(address.network)}
                </span>
              </div>
              <div className='w-1/6 px-6 py-3 flex items-center'>
                {address.asset ? (
                  <>
                    <div className='w-5 h-5 mr-2 flex-shrink-0'>
                      <Image
                        src={getAssetIcon(address.asset)}
                        alt={address.asset}
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className='truncate'>{address.asset}</span>
                  </>
                ) : (
                  <span className='text-gray-400'></span>
                )}
              </div>
              <div className='w-1/4 px-6 py-3 flex items-center'>
                <div ref={tooltipRef}>
                  {/^\d/.test(address.address) ? (
                    <TooltipProvider>
                      <Tooltip
                        open={openTooltipId === address.id}
                        onOpenChange={() => toggleTooltip(address.id)}
                      >
                        <TooltipTrigger
                          onClick={(e) => {
                            e.preventDefault();
                            toggleTooltip(address.id);
                            navigator.clipboard.writeText(address.address);
                          }}
                          asChild
                        >
                          <span
                            className='underline underline-offset-4 cursor-pointer flex items-center gap-2'
                            onClick={() => {
                              navigator.clipboard.writeText(address.address);
                              const tooltip = document.querySelector(
                                `[id="${address.id}"]`
                              );
                              if (tooltip) {
                                tooltip.textContent = 'Copied!';
                                setTimeout(() => {
                                  if (tooltip) {
                                    tooltip.textContent = 'Click to copy';
                                  }
                                }, 2000);
                              }
                            }}
                          >
                            <div className='w-6 h-6 overflow-hidden rounded-md border border-gray-200'>
                              <Image
                                alt={address.address}
                                src={blo(`0x${address.address.slice(2)}`)}
                                width={24}
                                height={24}
                              />
                            </div>
                            {`${address.address.slice(0, 4)}...${address.address.slice(-4)}`}
                            <svg
                              width='12'
                              height='12'
                              viewBox='0 0 12 12'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g clipPath='url(#clip0_1278_40151)'>
                                <path
                                  d='M2.5 7.5C2.03406 7.5 1.80109 7.5 1.61732 7.42388C1.37229 7.32239 1.17761 7.12771 1.07612 6.88268C1 6.69891 1 6.46594 1 6V2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H6C6.46594 1 6.69891 1 6.88268 1.07612C7.12771 1.17761 7.32239 1.37229 7.42388 1.61732C7.5 1.80109 7.5 2.03406 7.5 2.5M6.1 11H9.4C9.96005 11 10.2401 11 10.454 10.891C10.6422 10.7951 10.7951 10.6422 10.891 10.454C11 10.2401 11 9.96005 11 9.4V6.1C11 5.53995 11 5.25992 10.891 5.04601C10.7951 4.85785 10.6422 4.70487 10.454 4.60899C10.2401 4.5 9.96005 4.5 9.4 4.5H6.1C5.53995 4.5 5.25992 4.5 5.04601 4.60899C4.85785 4.70487 4.70487 4.85785 4.60899 5.04601C4.5 5.25992 4.5 5.53995 4.5 6.1V9.4C4.5 9.96005 4.5 10.2401 4.60899 10.454C4.70487 10.6422 4.85785 10.7951 5.04601 10.891C5.25992 11 5.53995 11 6.1 11Z'
                                  stroke='#344054'
                                  strokeWidth='1.25'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </g>
                              <defs>
                                <clipPath id='clip0_1278_40151'>
                                  <rect width='12' height='12' fill='white' />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p id={address.id}>Click to copy</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    address.address
                  )}
                </div>
              </div>
              <div className='w-32 px-6 py-3 flex items-center justify-end space-x-4'>
                <Button
                  variant='secondary'
                  size='sm'
                  onClick={() => onEdit(address.id)}
                >
                  <Edit className='h-4 w-4' />
                  Edit
                </Button>
                <Button
                  variant='secondary'
                  size='sm'
                  onClick={() => onView(address.id)} // {{ edit_1 }} Change to View address modal pop up
                >
                  <Eye className='h-4 w-4' />
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-auto pt-4 pb-4 bg-white border-gray-200'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
      {showNotification && (
        <div className='fixed bottom-4 right-4 max-w-sm z-50'>
          <Notification
            title="You've just added this address to your favorites!"
            description="You've successfully added this address to your favorites."
            status='success'
            className='shadow-lg'
            onClose={handleCloseNotification}
          />
        </div>
      )}
    </div>
  );
};

export { AddressesTable };