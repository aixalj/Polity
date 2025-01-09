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
import { useState } from 'react';

interface Networks {
  name: string;
  address: string;
  id: string;
  network: string;
  allocation: number;
  return: number;
  value: number;
  balance: number;
}

const NetworkTable: React.FC<{
  networkAccounts: Networks[];
}> = ({ networkAccounts }) => {
  const [openNetworkId, setOpenNetworkId] = useState<string | null>(null);

  return (
    <div className='relative w-full flex flex-col'>
      <div className='p-4 relative flex justify-between w-full justify-items-stretch flex-row place-content-between	'>
        <div className='flex flex-col max-w-[30rem]'>
          <h2 className='text-xl font-medium'>Networks</h2>
        </div>
      </div>
      <div className='w-full flex flex-col gap-1 overflow-y-scroll'>
        <div className='w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs'>
          <div className='w-9 flex-none'></div>
          <div className='w-80 flex-none px-6 py-3'>Network</div>
          <div className='w-60 flex-none px-6 py-3'>Allocation %</div>
          <div className='w-36 flex-auto px-6 py-3'>Return</div>
          <div className='w-36 flex-auto px-6 py-3'>Value</div>
          <div className='w-36 flex-auto px-6 py-3'>Balance</div>
        </div>

        <div>
          {Array.isArray(networkAccounts) ? (
            <div>
              {networkAccounts
                .sort((a, b) => b.value - a.value)
                .slice(0, 3)
                .map((network) => (
                  <Collapsible
                    key={network.id}
                    className='w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-[14px]'
                    open={openNetworkId === network.id}
                    onOpenChange={(open) => {
                      setOpenNetworkId(open ? network.id : null);
                    }}
                  >
                    <CollapsibleTrigger className='w-full ease-in-out duration-200'>
                      <div className='w-full flex text-left text-gray-900'>
                        <div className='w-9 flex-none h-16 flex items-center justify-center align-middle'>
                        <svg
                        className={`mx-auto transition-transform duration-200 ${
                          openNetworkId === network.id ? 'rotate-180' : ''
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
                              openNetworkId === network.id
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
                              openNetworkId === network.id
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
                            src={`/icons/networks/${network.id}.svg`}
                            alt={network.name}
                            width={24}
                            height={24}
                          />
                          {network.network} Network
                        </div>
                        <div className='w-60 flex-none px-6 py-3 h-16 flex items-center gap-3'>
                          {(
                            (network.value /
                              networkAccounts.reduce(
                                (sum, account) => sum + account.value,
                                0
                              )) *
                            100
                          ).toFixed(2)}
                          %
                          <Progress
                            value={
                              (network.value /
                                networkAccounts.reduce(
                                  (sum, account) => sum + account.value,
                                  0
                                )) *
                              100
                            }
                          />
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
                          {((network.return / network.value) * 100).toFixed(2)}%
                          (
                          {network.return.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                          )
                        </div>
                        <div className='w-36 flex-auto px-6 py-3 h-16 flex items-center'>
                          {network.value.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                        </div>
                        <div className='w-36 flex-auto px-6 py-3 h-16 flex items-center'>
                          {network.balance.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}{' '}
                          {network.id}
                        </div>
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
                          (account) => account.network === network.network
                        )
                        .map((account) => (
                          <div
                            key={account.id}
                            className='w-full  flex text-gray-900 text-md'
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
                                  {account.network} (
                                  {account.address?.slice(0, 4)}
                                  ...{account.address?.slice(-4)})
                                </p>
                              </div>
                            </div>
                            <div className='w-60 flex-none px-6 py-3 h-16 flex items-center gap-3'>
                              {(
                                (account.value /
                                  networkAccounts.reduce(
                                    (sum, account) => sum + account.value,
                                    0
                                  )) *
                                100
                              ).toFixed(2)}
                              %
                              <Progress
                                value={
                                  (account.value /
                                    networkAccounts.reduce(
                                      (sum, account) => sum + account.value,
                                      0
                                    )) *
                                  100
                                }
                              />
                            </div>
                            <div className='w-36 flex-auto px-6 py-3 h-16 items-center flex'>
                              {((account.return / account.value) * 100).toFixed(
                                2
                              )}
                              % (
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
                          </div>
                        ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
            </div>
          ) : (
            <p>No networks to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { NetworkTable };
