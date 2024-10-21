'use client';

import * as React from 'react';
import { Button } from './button';
import { Edit, Eye, Star } from 'lucide-react';
import { Address } from '@/components/ui/addressbookData';
import { Pagination } from '@/components/ui/pagination';

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

interface AddressesTableProps {
  addresses: Address[];
  onEdit: (addressId: string) => void;
  onView: (addressId: string) => void;
  onToggleFavorite: (addressId: string) => void;
}

const AddressesTable: React.FC<AddressesTableProps> = ({
  addresses,
  onEdit,
  onView,
  onToggleFavorite,
}) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const totalItems = addresses.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedAddresses = addresses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const networkIconMap: { [key: string]: any } = {
    ethereum: ETH,
    'ethereum network': ETH,
    bitcoin: BTC,
    'bitcoin network': BTC,
    polygon: MATIC,
    'polygon network': MATIC,
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
    <div className='relative w-full flex flex-col h-full'>
      <div className='flex-grow overflow-y-auto'>
        <div className='w-full min-w-fit flex bg-gray-100 rounded-xl font-medium text-gray-500 text-xs sticky top-0'>
          <div className='w-10 px-2 py-3'></div>
          <div className='flex-grow px-5 py-3'>Contact</div>
          <div className='w-1/4 px-6 py-3'>Network</div>
          <div className='w-1/6 px-6 py-3'>Asset</div>
          <div className='w-1/4 px-6 py-3'>Address</div>
          <div className='w-32 px-6 py-3'></div>
        </div>
        <div className='w-full flex flex-col gap-1'>
          {paginatedAddresses.map((address) => {
            const networkLower = address.network.toLowerCase().replace(' network', '');

            return (
              <div
                key={address.id}
                className='w-full min-w-fit flex hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm'
              >
                <div className='w-10 px-2 py-3 flex items-center justify-center'></div>
                <div className='flex-grow px-6 py-3 flex items-center'>
                  <div className='rounded-full overflow-hidden bg-gray-200 w-8 h-8 mr-2'>
                    <Image
                      src={'/bastion.png'}
                      alt={address.asset}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <p className='font-medium'>{address.contactName}</p>
                    <p className='text-sm text-gray-500'>
                      {address.addressname}
                    </p>
                  </div>
                </div>
                <div className='w-1/4 px-6 py-3 flex items-center'>
                  <div className='w-8 h-8 flex-shrink-0 mr-2'>
                    <Image
                      src={networkIconMap[networkLower] || '/default-network-icon.svg'}
                      alt={address.network}
                      width={32}
                      height={32}
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <span>{address.network}</span>
                </div>
                <div className='w-1/6 px-6 py-3 flex items-center'>
                  <div className='w-5 h-5 mr-2'>
                    <Image
                      src={getAssetIcon(address.asset)}
                      alt={address.asset}
                      width={20}
                      height={20}
                    />
                  </div>
                  {address.asset}
                </div>
                <div className='w-1/4 px-6 py-3 flex items-center'>
                  {address.address}
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
                    onClick={() => onView(address.id)}
                  >
                    <Eye className='h-4 w-4' />
                    View
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='sticky bottom-0 bg-white border-gray-200 mt-4 py-4'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export { AddressesTable };