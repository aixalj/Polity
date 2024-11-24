'use client';

import { ViewContactTable } from '@/components/viewcontactTable';

import { Button } from '@/components/ui/button';

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from '@/components/data';

function ViewContact() {
  return (
    <main className='w-full h-full'>
      <div className='mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll pb-40'>
        <div className='w-full sticky top-0 backdrop-blur-md	z-10 bg-white/60'>
          <div className='max-w-screen-xl mx-auto px-6 pt-6 pb-4'>
            <nav aria-label='Breadcrumb' className='mb-4'>
              <ol className='flex items-center gap-1 text-xs text-gray-600'>
                <li>
                  <a
                    href='#'
                    className='block transition hover:text-gray-700 font-semibold'
                  >
                    Avatar Name
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
                    Address Book
                  </a>
                </li>
              </ol>
            </nav>
            <div className='w-full mt-4 flex items-center justify-between'>
              <div>
                <h1 className='text-3xl font-medium leading-tight'>
                  Address Book
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 pb-40'>
          <ViewContactTable
            wallets={wallets}
            networkAccounts={networkAccounts}
          />
        </div>
      </div>
    </main>
  );
}

export default ViewContact;
