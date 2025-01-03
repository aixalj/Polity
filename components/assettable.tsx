import * as React from 'react';
import type { Config } from 'tailwindcss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import Link from 'next/link';

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from '@/components/data';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface AssetTableProps {
  variant: 'default' | 'network';
  asset: Asset;
}

interface Asset {
  name: string;
  symbol: string;
  allocation: number;
  price: number;
  return: number;
  value: number;
  balance: number;
}

const AssetTable: React.FC<{
  getAllAssets: Asset[];
}> = ({ getAllAssets }) => {
  return (
    <div className='relative w-full flex flex-col '>
      {/* {variant === "default" ? ( */}
      <div className='p-4 relative flex justify-between w-full justify-items-stretch flex-row place-content-between	'>
        <div className='flex flex-col max-w-[30rem]'>
          <h2 className='text-xl font-medium'>Assets</h2>
        </div>
      </div>
      {/* // ) : null} */}
      <div className='w-full flex flex-col gap-1 overflow-y-scroll'>
        <div className='w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs'>
          <div className='w-60 flex-none px-6 py-3'>Asset</div>
          <div className='w-60 flex-none px-6 py-3'>Allocation %</div>
          <div className='w-36 flex-auto px-6 py-3'>Price</div>
          <div className='w-48 flex-auto px-6 py-3'>Return</div>
          <div className='w-36 flex-auto px-6 py-3'>Value</div>
          <div className='w-36 flex-auto px-6 py-3'>Balance</div>
        </div>
        <div>
          {Array.isArray(getAllAssets) && getAllAssets.length > 0 ? (
            <div>
              {getAllAssets
                .sort((a, b) => b.value - a.value)
                .map((asset, index) => (
                  <div
                    key={index}
                    className='w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-[14px] '
                  >
                    <div className='w-full flex text-left  text-gray-900'>
                      <div className='w-60 break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-2 h-16 '>
                        <Image
                          src={`/icons/tokens/${asset.symbol}.svg`}
                          alt={asset.name}
                          width={24}
                          height={24}
                        />
                        <p className='flex gap-2 items-center font-medium'>
                          {asset.name}
                          <span className='font-regular text-gray-600'>
                            {asset.symbol}
                          </span>
                        </p>
                      </div>
                      <div className='w-60 flex-none px-6 py-3 h-16 flex items-center gap-3'>
                        {(
                          (asset.value /
                            getAllAssets.reduce(
                              (sum, asset) => sum + asset.value,
                              0
                            )) *
                          100
                        ).toFixed(2)}
                        %
                        <Progress
                          value={
                            (asset.value /
                              getAllAssets.reduce(
                                (sum, asset) => sum + asset.value,
                                0
                              )) *
                            100
                          }
                        />
                      </div>
                      <div className='w-36 flex-auto  px-6 py-3 h-16 flex items-center'>
                        {asset.price.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </div>
                      <div className='w-48 flex-auto px-6 py-3 h-16 flex items-center whitespace-nowrap text-teal-700 font-semibold'>
                        <div className='flex items-center gap-1 mr-1'>
                          <svg
                            width='12'
                            height='12'
                            viewBox='0 0 12 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M11 3.5L7.06568 7.43432C6.86768 7.63232 6.76867 7.73133 6.65451 7.76842C6.55409 7.80105 6.44591 7.80105 6.34549 7.76842C6.23133 7.73133 6.13232 7.63232 5.93431 7.43431L4.56568 6.06568C4.36768 5.86768 4.26867 5.76867 4.15451 5.73158C4.05409 5.69895 3.94591 5.69895 3.84549 5.73158C3.73133 5.76867 3.63232 5.86768 3.43431 6.06569L1 8.5M11 3.5H7.5M11 3.5V7'
                              stroke='#0f766e'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </div>
                        {((asset.return / asset.value) * 100).toFixed(2)}% (
                        {asset.return.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                        )
                      </div>

                      <div className='w-36 flex-auto px-6 py-3 h-16 flex items-center'>
                        {asset.value.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </div>
                      <div className='w-36 flex-auto px-6 py-3 h-16 items-center flex whitespace-nowrap'>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              {Math.floor(asset.balance).toLocaleString()}{' '}
                              {asset.symbol}
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                {asset.balance.toLocaleString(undefined, {
                                  maximumFractionDigits: 8,
                                })}{' '}
                                {asset.symbol}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p>No assets to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { AssetTable };
