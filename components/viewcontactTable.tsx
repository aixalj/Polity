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

import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from '@/components/ui/pagination';

import { useState, useEffect } from 'react';

import { createClient } from '@supabase/supabase-js';

/*const supabaseUrl = 'https://ilzanfrmzylbvkoyhefz.supabase.co';
const supabaseKey =
  process.env.SUPABASE_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsemFuZnJtenlsYnZrb3loZWZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTAxNTg2MCwiZXhwIjoyMDMwNTkxODYwfQ.NUkkfYlSq3iHkr1hjIK3uMev7VzKt6F_2fqTne4JKNU';
const supabase = createClient(supabaseUrl, supabaseKey);*/

import { supabase } from '@/lib/supabase-browser';

import { Progress } from '@/components/ui/progress';

import { ArrowLeft } from 'lucide-react';

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

const ViewContactTable: React.FC<{
  wallets: Wallet[];
  networkAccounts: NetworkAccount[];
}> = ({ wallets, networkAccounts }) => {
  // ... existing code ...

  // Add state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = networkAccounts.length; // Example calculation
  const itemsPerPage = 10; // Set your desired items per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className='relative w-full flex flex-col'>
      <div className='py-2.5 relative flex justify-between w-full justify-items-stretch flex-row place-content-between	'>
        <div className='flex items-center gap-2'>
          <Link href='/addressbook'>
            {' '}
            <ArrowLeft />
          </Link>
          <h2 className='text-xl font-medium'>Contact Name</h2>
        </div>
        <div className='flex gap-3'>
          <Button>Edit Contact</Button> {/* Open modal on click */}
        </div>
      </div>

      <div className='w-full flex flex-col gap-1 overflow-y-scroll'>
      
      
        {/* Static Collapsible for Bitcoin */}
        <Collapsible
          key="bitcoin"
          className='w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm '>
          <CollapsibleTrigger className='w-full ease-in-out duration-200'>
            <div className='w-full flex text-left text-gray-900'>
              <div className='w-9 flex-none h-16 flex items-center justify-center align-middle'>
                {/* SVG for Bitcoin */}
                <svg
                  className='mx-auto'
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
                    fill='white'
                  />
                  <rect
                    x='0.5'
                    y='0.5'
                    width='19'
                    height='19'
                    rx='5.5'
                    stroke='#D0D5DD'
                  />
                  <path
                    d='M13 12.0001C13.412 12.0001 13.6472 11.5297 13.4 11.2001L10.4 7.20008C10.2 6.93341 9.8 6.93341 9.6 7.20008L6.6 11.2001C6.35279 11.5297 6.58798 12.0001 7 12.0001H13Z'
                    fill='#1D2939'
                  />
                </svg>
              </div>
              <div className='w-80 font-medium break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-2 h-16 '>
                <Image
                  src={'/icons/networks/BTC.svg'}
                  alt='BTC'
                  width={32}
                  height={32}
                />
                <div className='flex flex-col'>
                  <p> Bitcoin</p>
                  <p>2 addresses</p>
                </div>
              </div>
              <div className='w-36 flex-auto px-6 py-3 h-16 flex items-center'></div>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className='items-start'>
            <div className='flex gap-2 items-center break-keep text-xs'>
              <div className='w-9 flex-none flex items-center justify-center align-middle'></div>
              <p className='break-keep w-auto whitespace-nowrap pl-3 text-gray-600'>
              Addresses
              </p>
              <div className='w-full bg-gray-300 h-[1px]'></div>
            </div>
            {/* Static Account for Bitcoin */}
            <div key="account1" className='w-full flex text-gray-900 text-md'>
              <div className='w-9 flex-none'></div>
              <div className='w-80 flex-none px-6 py-3 flex items-center gap-3 max-h-16'>
                <Image
                  src={'/icons/tokens/BTC.svg'}
                  alt='Bitcoin Account'
                  width={24}
                  height={24}
                />
                <div className='w-full font-medium'>
                  <p className='text-sm'>Bitcoin Account 1</p>
                  <p className='text-xs text-gray-700'>
                    Bitcoin Network (1A2B...3C4D)
                  </p>
                </div>
              </div>
              <div className='w-60 flex-none px-6 py-3 h-16 flex items-center gap-3'>
                50.00%
                <Progress value={50} />
              </div>
              <div className='w-36 flex-auto px-6 py-3 h-16 items-center flex'>
                5.00% ($500.00)
              </div>
              <div className='w-36 flex-auto px-6 py-3 h-16 items-center flex'>
                $10,000.00
              </div>
              <div className='w-36 flex-auto px-6 py-3 h-16 items-center flex'>
                100.00 BTC
              </div>
            </div>
            {/* Add more static accounts as needed */}
          </CollapsibleContent>
        </Collapsible>
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
    </div>
  );
};

export { ViewContactTable };
