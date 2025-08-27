// "use client";

import * as React from 'react';
import type { Config } from 'tailwindcss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

import Image from 'next/image';

import { useState, useEffect } from 'react';

import { createClient } from '@supabase/supabase-js';

/*const supabaseUrl = 'https://ilzanfrmzylbvkoyhefz.supabase.co';
const supabaseKey =
  process.env.SUPABASE_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsemFuZnJtenlsYnZrb3loZWZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTAxNTg2MCwiZXhwIjoyMDMwNTkxODYwfQ.NUkkfYlSq3iHkr1hjIK3uMev7VzKt6F_2fqTne4JKNU';
const supabase = createClient(supabaseUrl, supabaseKey);*/

import { Progress } from '@/components/ui/progress';

import Link from 'next/link';
import { networkAccounts } from './data';

interface Wallet {
  id: string;
  wallet_id: string;
  wallet_name: string;
  allocation: number;
  return: number;
  value: number;
}

interface NetworkAccount {
  name: string;
  walletName: string;
  id: string;
  address: string;
  network: string;
  allocation: number;
  return: number;
  value: number;
  balance: number;
}

const WalletTable: React.FC<{
  wallets: Wallet[];
  networkAccounts: NetworkAccount[];
}> = ({ wallets, networkAccounts }) => {
  // Single state to track which wallet is open
  const [openWalletId, setOpenWalletId] = useState<string | null>(null);

  return (
    <div className='relative w-full flex flex-col'>
      <div className='p-4 relative flex justify-between w-full justify-items-stretch flex-row place-content-between	'>
        <div className='flex flex-col max-w-[30rem]'>
          <h2 className='text-xl font-medium'>Wallets</h2>
        </div>
      </div>
      <div className='w-full flex flex-col gap-1 overflow-y-scroll'>
        <div className='w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs'>
          <div className='w-9 flex-none'></div>
          <div className='w-80 flex-none px-6 py-3'>Wallet</div>
          <div className='w-60 flex-none px-6 py-3'>Allocation %</div>
          <div className='w-36 flex-auto px-6 py-3'>Return</div>
          <div className='w-36 flex-auto px-6 py-3'>Value</div>
          <div className='w-36 flex-auto px-6 py-3'>Balance</div>
        </div>
        {Array.isArray(wallets) ? (
          <div>
            {wallets.map((wallet) => (
              <Collapsible
                key={wallet.wallet_id}
                className='w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-[14px]'
                open={openWalletId === wallet.wallet_id}
                onOpenChange={(open) => {
                  setOpenWalletId(open ? wallet.wallet_id : null);
                }}
              >
                <CollapsibleTrigger className='w-full ease-in-out duration-200'>
                  <div className='w-full flex text-left text-gray-900'>
                    <div className='w-9 flex-none h-16 flex items-center justify-center align-middle'>
                      <svg
                        className={`mx-auto transition-transform duration-200 ${
                          openWalletId === wallet.wallet_id ? 'rotate-180' : ''
                        }`}
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          x='0.5'
                          y='0.5'
                          width='19'
                          height='19'
                          rx='5.5'
                          className={`fill-white ${
                            openWalletId === wallet.wallet_id
                              ? 'fill-white'
                              : 'group-hover:fill-[#F2F4F7]'
                          }`}
                        />
                        <rect
                          x='0.5'
                          y='0.5'
                          width='19'
                          height='19'
                          rx='5.5'
                          className={`${
                            openWalletId === wallet.wallet_id
                              ? 'stroke-[#D0D5DD]'
                              : 'stroke-transparent group-hover:stroke-[#D0D5DD]'
                          }`}
                        />
                        <path
                          d='M14 8L10 12L6 8'
                          stroke='#475467'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                    <div className='w-80 font-medium break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-2 h-16 '>
                      <Image
                        src={`/wallets/${wallet.wallet_id}.svg`}
                        alt={wallet.wallet_name}
                        width={24}
                        height={24}
                      />
                      {wallet.wallet_name}
                    </div>
                    <div className='w-60 flex-none px-6 py-3 h-16 flex items-center gap-3 '>
                      {wallet.allocation.toFixed(2)}%
                      <Progress value={wallet.allocation} />
                    </div>
                    <div className='w-36 flex-auto  px-6 py-3 h-16 flex items-center whitespace-nowrap text-teal-700 font-semibold'>
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
                      {((wallet.return / wallet.value) * 100).toFixed(2)}% (
                      {wallet.return.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                      )
                    </div>
                    <div className='w-36 flex-auto px-6 py-3 h-16 flex items-center'>
                      {wallet.value.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </div>
                    <div className='w-36 flex-auto px-6 py-3 h-16 flex items-center'></div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className='items-start'>
                  <div className='flex gap-2 items-center break-keep text-xs'>
                    <div className='w-9 flex-none flex items-center justify-center align-middle'></div>
                    <p className='break-keep w-auto whitespace-nowrap pl-3 text-gray-600'>
                      Network Accounts
                    </p>
                    <div className='w-full bg-gray-300 h-[1px]'></div>
                  </div>
                  {networkAccounts
                    .filter(
                      (account) => account.walletName === wallet.wallet_name
                    )
                    .map((account) => (
                      <Link
                        key={account.id}
                        href={`/wealth/wallet1/${
                          account.id === 'MATIC'
                            ? 'poly'
                            : account.id.toLowerCase()
                        }network`}
                        className='w-full flex text-gray-900 text-md hover:bg-gray-50 transition-colors'
                      >
                        <div className='w-9 flex-none'></div>
                        <div className='w-80 flex-none px-6 py-3 flex items-center gap-3 max-h-16'>
                          <Image
                            src={`/icons/networks/${account.id}.svg`}
                            alt={account.id}
                            width={24}
                            height={24}
                          />
                          <div className='w-full font-medium'>
                            <p className='text-sm'>{account.name}</p>
                            <p className='text-xs text-gray-700'>
                              {account.network} ({account.address?.slice(0, 4)}
                              ...{account.address?.slice(-4)})
                            </p>
                          </div>
                        </div>
                        <div className='w-60 flex-none px-6 py-3 h-16 flex items-center gap-3'>
                          {account.allocation.toFixed(2)}%
                          <Progress value={account.allocation} />
                        </div>
                        <div className='w-36 flex-auto px-6 py-3 h-16 items-center flex'>
                          {((account.return / account.value) * 100).toFixed(2)}%
                          (
                          {account.return.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                          )
                        </div>
                        <div className='w-36 flex-auto px-6 py-3 h-16 items-center flex'>
                          {account.value.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                        </div>
                        <div className='w-36 flex-auto px-6 py-3 h-16 items-center flex'>
                          {account.balance.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}{' '}
                          {account.id}
                        </div>
                      </Link>
                    ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        ) : (
          <p>No wallets to display.</p>
        )}
      </div>
    </div>
  );
};

export { WalletTable };
