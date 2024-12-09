import * as React from 'react';
import { useState } from 'react';
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

import { TrendUp01, QrCode01, Send02 } from '@untitled-ui/icons-react';
import { ReceiveBtn } from '@/components/receivebtn'

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from '@/components/data';

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

const AssetTab: React.FC<{
  getAllAssets: Asset[];
}> = ({ getAllAssets }) => {
  return (
    <div className='relative w-full flex flex-col'>
      <div className='p-4 relative flex justify-between w-full justify-items-stretch flex-row place-content-between'>
        <div className='flex flex-col max-w-[30rem]'>
          <h2 className='text-xl font-medium'>Assets</h2>
        </div>
      </div>
      <div className='w-full flex flex-col gap-1 overflow-y-scroll'>
        <div className='w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs'>
          <div className='w-56 flex-none px-6 py-3'>Asset</div>
          <div className='w-48 flex-auto px-6 py-3'>Price</div>
          <div className='w-48 flex-auto px-2 py-3'>Return</div>
          <div className='w-48 flex-auto px-4 py-3'>Value</div>
          <div className='w-48 flex-auto px-3 py-3'>Balance</div>
          <div className='w-24 flex-auto py-3'></div>
        </div>
        <div>
          {Array.isArray(getAllAssets) && getAllAssets.length > 0 ? (
            <div>
              {getAllAssets
                .sort((a, b) => b.value - a.value)
                .map((asset, index) => (
                  <div
                    key={index}
                    className='w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-[14px]'
                  >
                    <div className='w-full flex text-left text-gray-900'>
                      <div className='w-56 break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-2 h-16'>
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
                      <div className='w-48 flex-auto px-6 py-3 h-16 flex items-center'>
                        {asset.price.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </div>
                      <div className='w-48 flex-auto text-teal-700 px-2 py-3 h-16 flex items-center whitespace-nowrap'>
                        <TrendUp01 className='mr-1 w-5 h-5' />
                        {((asset.return / asset.value) * 100).toFixed(2)}% (
                        {asset.return.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                        )
                      </div>

                      <div className='w-48 flex-auto px-6 py-3 h-16 flex items-center'>
                        {asset.value.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </div>
                      <div className='w-48 flex-auto px-6 py-3 h-16 flex items-center whitespace-nowrap'>
                        {asset.balance.toFixed(2)} {asset.symbol}
                      </div>
                      <div className=' flex-auto py-3 h-16 flex items-center whitespace-nowrap'>
                        <ReceiveBtn variant="network" hideText={true} className='' />                       
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

export { AssetTab };
