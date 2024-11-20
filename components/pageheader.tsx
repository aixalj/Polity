'use client';

import * as React from 'react';
import { useState } from 'react';
import type { Config } from 'tailwindcss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import { ReceiveForm } from '@/components/receive';
import { SendModal } from '@/components/ui/send';
import { ReceiveBtn } from '@/components/receivebtn';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { WalletProvider } from '@/components/ui/formcontext';
import { TimeForm } from '@/components/timeform';

import {
  FSDialog,
  FSDialogContent,
  FSDialogDescription,
  FSDialogHeader,
  FSDialogTitle,
  FSDialogTrigger,
} from '@/components/ui/fsdialog';

interface PageHeaderProps {
  variant?: 'default' | 'custom' | 'mainwallet' | 'secondwallet' | 'mywallet';
}

import Link from 'next/link';

const PageHeader: React.FC<PageHeaderProps> = ({ variant = 'default' }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  function handleSelectChange(value: string): void {
    setSelectedValue(value);
  }

  return (
    <div
      className='w-full sticky top-0 backdrop-blur-md z-10 border-b border-gray-100 bg-white/60'
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
      }}
    >
      <div className='max-w-screen-xl mx-auto p-6'>
        {variant === 'default' ? (
          <nav aria-label='Breadcrumb'>
            <ol className='flex items-center gap-1 text-xs text-gray-600'>
              <li>
                <a
                  href='#'
                  className='block transition hover:text-gray-700 font-semibold'
                >
                  {' '}
                  Wealth{' '}
                </a>
              </li>

              <li className='rtl:rotate-180'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.83337 18.3334L14.1667 1.66675'
                    stroke='#D0D5DD'
                    strokeWidth='1.66667'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </li>

              <li>
                <a
                  href='#'
                  className='block transition text-gray-800 font-semibold'
                >
                  {' '}
                  Overview{' '}
                </a>
              </li>
            </ol>
          </nav>
        ) : (
          <nav aria-label='Breadcrumbs'>
            <ol className='flex items-center gap-1 text-xs text-gray-600'>
              <li>
                <a
                  href='#'
                  className='block transition hover:text-gray-700 font-semibold'
                >
                  {' '}
                  Wealth{' '}
                </a>
              </li>

              <li className='rtl:rotate-180'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.83337 18.3334L14.1667 1.66675'
                    stroke='#D0D5DD'
                    strokeWidth='1.66667'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </li>
              <li>
                <a
                  href='#'
                  className='block transition text-gray-800 font-semibold'
                >
                  {' '}
                  Overview{' '}
                </a>
              </li>

              <li className='rtl:rotate-180'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.83337 18.3334L14.1667 1.66675'
                    stroke='#D0D5DD'
                    strokeWidth='1.66667'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </li>

              {variant === 'mainwallet' ? (
                <>
                  <li>
                    <a
                      href='#'
                      className='block transition text-gray-800 font-semibold'
                    >
                      {' '}
                      Main Wallet{' '}
                    </a>
                  </li>
                </>
              ) : variant === 'secondwallet' ? (
                <>
                  <li>
                    <a
                      href='#'
                      className='block transition text-gray-800 font-semibold'
                    >
                      {' '}
                      Second Wallet{' '}
                    </a>
                  </li>
                </>
              ) : variant === 'mywallet' ? ( // New variant for My Wallet
                <>
                  <li>
                    <a
                      href='#'
                      className='block transition text-gray-800 font-semibold'
                    >
                      {' '}
                      My Wallet{' '}
                    </a>
                  </li>
                </>
              ) : null}
            </ol>
          </nav>
        )}

        <div className='w-full mt-4 flex items-center justify-between'>
          {variant === 'default' ? (
            <h1 className='text-4xl font-medium'>Wealth</h1>
          ) : (
            <div className='flex gap-3 items-center'>
              {variant === 'mainwallet' ? ( // SVG for Main Wallet
                 <Image
                 src={`/wallets/wallet1.svg`}
                 alt={'Main Wallet'}
                 width={48}
                 height={48}
               />
              ) : variant === 'secondwallet' ? (
                <Image
                  src={`/wallets/wallet2.svg`}
                  alt={'Second Wallet'}
                  width={48}
                  height={48}
                />
              ) : null}
              <div>
                {variant === 'mainwallet' ? (
                  <>
                    <h1 className='text-2xl font-medium leading-tight'>
                      Main Wallet
                    </h1>
                    <p className='text-sm text-gray-700'>DFNS</p>
                  </>
                ) : variant === 'secondwallet' ? (
                  <>
                    <h1 className='text-2xl font-medium leading-tight'>
                      Second Wallet
                    </h1>
                    <p className='text-sm text-gray-700'>Safeheron</p>
                  </>
                ) : variant === 'mywallet' ? ( // New variant for My Wallet
                  <>
                    <div className='flex items-start gap-3'>
                   <Image
                                  src={`/wallets/wallet1.svg`}
                                  alt={'Main Wallet'}
                                  width={48}
                                  height={48}
                                />
                    <h1 className='text-2xl font-medium leading-tight'>
                      My Wallet
                    </h1>
                    {/* <p className='text-sm text-gray-700'>Your Wallet Description</p> */}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          )}
          <ReceiveBtn variant='wealth' />
        </div>

        <div className='w-full mt-5 flex items-center justify-between pb-1'>
          <h2 className='text-2xl font-medium'>Overview </h2>
          <div className='flex gap-3'>
            <Button variant='outline'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17.0442 10.7441C16.8127 12.9191 15.5804 14.9572 13.5412 16.1345C10.1533 18.0905 5.8212 16.9297 3.86519 13.5418L3.65686 13.1809M2.95515 9.25578C3.18665 7.08086 4.41898 5.04276 6.45813 3.86545C9.84604 1.90944 14.1781 3.07023 16.1341 6.45813L16.3425 6.81898M2.91101 15.055L3.52105 12.7783L5.79776 13.3883M14.202 6.61161L16.4787 7.22165L17.0888 4.94495'
                  stroke='#344054'
                  strokeWidth='1.66667'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Update Data
            </Button>

            <TimeForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PageHeader };