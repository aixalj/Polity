'use client';

import Image from 'next/image';
import type { Config } from 'tailwindcss';
import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { TimeForm } from '@/components/timeform';
import { ReceiveBtn } from '@/components/receivebtn';

import { WalletProvider } from '@/components/ui/formcontext';

import Stats from '@/components/stats';

import Allocation from '@/components/allocation';
import { TimeProvider } from '@/components/ui/timecontext';
import React from 'react';
import { Notification } from '@/components/ui/notification';
import BTC from '@/public/icons/networks/BTC.svg';

import { Button } from '@/components/ui/button';
import { AssetTable } from '@/components/assettable';
import { PositionsTable } from '@/components/positionstable';
import { Dapps } from '@/components/dapps';
import WalletConnect from '@/components/ui/modals/walletConnect';
import ConnectTodApp from '@/components/ui/modals/connectTodApp';
import BTCdApps from '@/public/icons/dApps/BTC-dApps.svg';
import POLdApps from '@/public/icons/dApps/POL-dApps.svg';
import MATIC from '@/public/icons/networks/MATIC.svg';
import ETHdApps from 'public/icons/dApps/ETH-dApps.svg';


import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from '@/components/data';

function BitcoinOne() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [isWalletConnectOpen, setIsWalletConnectOpen] = useState(false);
  const [isConnectTodAppOpen, setIsConnectTodAppOpen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]); 

// Determine the network account name and balance based on the current page
const currentPath = window.location.pathname;

let networkAccountName;
let balance;
let networkAccountImage;
if (currentPath === '/uniapp/wealth/wallet1/btcnetwork') {
  networkAccountName = 'Bitcoin (428f...47d2)'; // Example name for BTC network
  balance = '$657,318.88 (211.9 BTC)'; // Example balance for BTC network
  networkAccountImage = BTCdApps; // Set the image for BTC
} else if (currentPath === '/uniapp/wealth/wallet1/polynetwork') {
  networkAccountName = 'Polygon (0x8f...47d2)'; // Example name for Polygon network
  balance = '$657,318.88 (211.9 MATIC)'; // Example balance for Polygon network
  networkAccountImage = POLdApps; // Set the image for BTC
} else {
  networkAccountName = 'Ethereum (0xD2...05F6)'; // Fallback name for other pages
  balance = '$657,318.88 (211.9 ETH)'; // Fallback balance for other pages
  networkAccountImage = ETHdApps; // Set the image for BTC
}

  const handleOpenModal = () => setIsWalletConnectOpen(true);
  const handleCloseModal = () => setIsWalletConnectOpen(false);
  const handleOpenConnectTodApp = () => { 
    setIsWalletConnectOpen(false);
    setIsConnectTodAppOpen(true);
  };

  const handleCloseConnectTodApp = () => setIsConnectTodAppOpen(false);

  const addNotification = (
    title: string,
    description: string,
    status: 'success' | 'error' | 'warning' | 'info'
  ) => {
    setNotifications((prev) => [...prev, { title, description, status }]);
  };

  return (
    <main className='w-full h-full'>
      <TimeProvider>
        <div className='mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll'>
          <div className='fixed bottom-4 left-4 z-50 w-[416px] rounded-[20px]'>
            {notifications.map((notification, index) => (
              <Notification
                key={index}
                title={notification.title}
                description='Access and transactions through the dApp are enabled. Monitor and manage your activities as needed.'
                status='success'
                className='shadow-2xl'
                onClose={() => {
                  setNotifications((prev) => prev.filter((_, i) => i !== index));
                }}
              />
            ))}
          </div>
          <Tabs
            defaultValue='overview'
            onValueChange={(value) => setSelectedTab(value)}
          >
            <div
              className='w-full sticky top-0 backdrop-blur-md	z-10  border-b border-gray-100 bg-white/60'
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              <div className=' max-w-screen-xl mx-auto p-6'>
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
                          stroke-width='1.66667'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </li>

                    <li>
                      <a
                        href='#'
                        className='block transition hover:text-gray-700 font-semibold'
                      >
                        {' '}
                        Main Wallet{' '}
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
                          stroke-width='1.66667'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </li>

                    <li>
                      <a
                        href='#'
                        className='block transition text-gray-800 font-semibold'
                      >
                        {' '}
                        Network Account Name{' '}
                      </a>
                    </li>
                  </ol>
                </nav>
                <div className='w-full  mt-4 flex items-center justify-between'>
                  {' '}
                  <div className='flex gap-3 items-center'>
                  <Image
                      src={BTC}
                      alt={'Bitcoin'}
                      width={48}
                      height={48}
                    />

                    <div>
                      <h1 className='text-2xl font-medium leading-tight'>
                        Network Account Name
                      </h1>{' '}
                      <p className='text-sm text-gray-700'>
                        Bitcoin (428f...47d2)
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-3'>
                    <Button
                      variant='default'
                      className='bg-[#3396FF] hover:bg-[#3396FF]/90'
                      onClick={handleOpenModal}
                    >
                      <svg
                        width='28'
                        height='16'
                        viewBox='0 0 28 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M6.26063 3.12611C10.535 -1.04204 17.4651 -1.04204 21.7395 3.12611L22.254 3.62777C22.4677 3.83617 22.4677 4.17406 22.254 4.38248L20.4941 6.09849C20.3873 6.20271 20.2141 6.20271 20.1072 6.09849L19.3994 5.40817C16.4173 2.50036 11.5827 2.50036 8.60084 5.40817L7.84271 6.14746C7.73585 6.25166 7.5626 6.25166 7.45574 6.14746L5.69598 4.43142C5.48226 4.22302 5.48226 3.88512 5.69598 3.67671L6.26063 3.12611ZM25.3788 6.67504L26.9451 8.2023C27.1586 8.41069 27.1586 8.74871 26.9451 8.95707L19.883 15.8437C19.6693 16.0521 19.3229 16.0521 19.1091 15.8437L14.0967 10.956C14.0434 10.9039 13.9568 10.9039 13.9034 10.956L8.89125 15.8437C8.67753 16.0521 8.33102 16.0521 8.1173 15.8437L1.05507 8.95687C0.841346 8.74851 0.841346 8.41069 1.05507 8.20222L2.62126 6.67496C2.83498 6.46654 3.18149 6.46654 3.39521 6.67496L8.40747 11.5627C8.46091 11.6147 8.54753 11.6147 8.60096 11.5627L13.613 6.67496C13.8267 6.46654 14.1732 6.46654 14.387 6.67494L19.3992 11.5627C19.4527 11.6147 19.5392 11.6147 19.5928 11.5627L24.6049 6.67504C24.8187 6.46664 25.1651 6.46664 25.3788 6.67504Z'
                          fill='white'
                        />
                      </svg>
                      Connect
                    </Button>
                    <WalletProvider>
                      <ReceiveBtn variant='network' />
                    </WalletProvider>
                  </div>
                </div>

                <div className='w-full mt-4 flex flex-col pb-1'>
                  <div>
                    <TabsList className='inline-flex w-auto'>
                      <TabsTrigger value='overview'>Overview</TabsTrigger>
                      <TabsTrigger value='assets'>Assets</TabsTrigger>
                      <TabsTrigger value='dApps'>dApps</TabsTrigger>
                      <TabsTrigger value='positions'>Positions</TabsTrigger>
                      <TabsTrigger
                        value='nfts'
                        disabled={true}
                        className='flex gap-2'
                      >
                        NFTs{' '}
                        <div className='px-2 py-0.5 text-xs text-purple-800 bg-purple-50 border border-purple-200 rounded-lg'>
                          Coming Soon
                        </div>
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <div className='flex gap-3 w-full h-8  mt-4 justify-between items-center'>
                    <h2 className='text-2xl font-medium items-center flex'>
                      {selectedTab === 'overview'
                        ? 'Overview'
                        : selectedTab === 'assets'
                        ? 'Assets'
                        : selectedTab === 'dApps'
                        ? 'dApps'
                        : selectedTab === 'positions'
                        ? 'Positions'
                        : selectedTab === 'nfts'
                        ? 'NFTs'
                        : ''}
                    </h2>{' '}
                    {selectedTab === 'overview' ? (
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
                              stroke-width='1.66667'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                          Update Data
                        </Button>
                        <TimeForm />
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>

            <TabsContent value='overview'>
              <div className='max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full pb-40'>
                <Stats variant='network' />

                <Allocation
                  getAllAssets={getAllAssets().filter(
                    (asset) =>
                      asset.networkAccountName === 'Ethereum network account'
                  )}
                />

                <AssetTable
                  getAllAssets={getAllAssets().filter(
                    (asset) =>
                      asset.networkAccountName === 'Ethereum network account'
                  )}
                />

                <Dapps />
              </div>
            </TabsContent>
            <TabsContent value='assets'>
              <div className='max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full'>
                <AssetTable
                  getAllAssets={getAllAssets().filter(
                    (asset) =>
                      asset.networkAccountName === 'Ethereum network account'
                  )}
                />
              </div>
            </TabsContent>

            <TabsContent value='dApps'>
              <div className='max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full'>
                <div className='flex flex-col items-center justify-center rounded-lg overflow-hidden bg-gray-50 pt-3 pb-12'>
                  <div className='-mb-8'>
                    <svg
                      width='216'
                      height='216'
                      viewBox='0 0 216 216'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g opacity='0.3' filter='url(#filter0_f_99_76756)'>
                        <circle cx='108' cy='108' r='28' fill='#D0D5DD' />
                      </g>
                      <mask
                        id='mask0_99_76756'
                        style={{ maskType: 'alpha' }}
                        maskUnits='userSpaceOnUse'
                        x='44'
                        y='44'
                        width='128'
                        height='128'
                      >
                        <rect
                          x='44'
                          y='44'
                          width='128'
                          height='128'
                          rx='64'
                          fill='url(#paint0_radial_99_76756)'
                        />
                      </mask>
                      <g mask='url(#mask0_99_76756)'>
                        <g clip-path='url(#clip0_99_76756)'>
                          <mask id='path-6-inside-1_99_76756' fill='white'>
                            <path d='M39.5667 44H47.1518V51.5852H39.5667V44Z' />
                          </mask>
                          <path
                            d='M47.1518 51.5852V52.0852H47.6518V51.5852H47.1518ZM46.6518 44V51.5852H47.6518V44H46.6518ZM47.1518 51.0852H39.5667V52.0852H47.1518V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-6-inside-1_99_76756)'
                          />
                          <mask id='path-8-inside-2_99_76756' fill='white'>
                            <path d='M47.1519 44H54.737V51.5852H47.1519V44Z' />
                          </mask>
                          <path
                            d='M54.737 51.5852V52.0852H55.237V51.5852H54.737ZM54.237 44V51.5852H55.237V44H54.237ZM54.737 51.0852H47.1519V52.0852H54.737V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-8-inside-2_99_76756)'
                          />
                          <mask id='path-10-inside-3_99_76756' fill='white'>
                            <path d='M54.7371 44H62.3222V51.5852H54.7371V44Z' />
                          </mask>
                          <path
                            d='M62.3222 51.5852V52.0852H62.8222V51.5852H62.3222ZM61.8222 44V51.5852H62.8222V44H61.8222ZM62.3222 51.0852H54.7371V52.0852H62.3222V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-10-inside-3_99_76756)'
                          />
                          <mask id='path-12-inside-4_99_76756' fill='white'>
                            <path d='M62.3223 44H69.9075V51.5852H62.3223V44Z' />
                          </mask>
                          <path
                            d='M69.9075 51.5852V52.0852H70.4075V51.5852H69.9075ZM69.4075 44V51.5852H70.4075V44H69.4075ZM69.9075 51.0852H62.3223V52.0852H69.9075V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-12-inside-4_99_76756)'
                          />
                          <mask id='path-14-inside-5_99_76756' fill='white'>
                            <path d='M69.9073 44H77.4925V51.5852H69.9073V44Z' />
                          </mask>
                          <path
                            d='M77.4925 51.5852V52.0852H77.9925V51.5852H77.4925ZM76.9925 44V51.5852H77.9925V44H76.9925ZM77.4925 51.0852H69.9073V52.0852H77.4925V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-14-inside-5_99_76756)'
                          />
                          <mask id='path-16-inside-6_99_76756' fill='white'>
                            <path d='M77.4926 44H85.0777V51.5852H77.4926V44Z' />
                          </mask>
                          <path
                            d='M85.0777 51.5852V52.0852H85.5777V51.5852H85.0777ZM84.5777 44V51.5852H85.5777V44H84.5777ZM85.0777 51.0852H77.4926V52.0852H85.0777V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-16-inside-6_99_76756)'
                          />
                          <mask id='path-18-inside-7_99_76756' fill='white'>
                            <path d='M85.078 44H92.6632V51.5852H85.078V44Z' />
                          </mask>
                          <path
                            d='M92.6632 51.5852V52.0852H93.1632V51.5852H92.6632ZM92.1632 44V51.5852H93.1632V44H92.1632ZM92.6632 51.0852H85.078V52.0852H92.6632V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-18-inside-7_99_76756)'
                          />
                          <mask id='path-20-inside-8_99_76756' fill='white'>
                            <path d='M92.663 44H100.248V51.5852H92.663V44Z' />
                          </mask>
                          <path
                            d='M100.248 51.5852V52.0852H100.748V51.5852H100.248ZM99.7481 44V51.5852H100.748V44H99.7481ZM100.248 51.0852H92.663V52.0852H100.248V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-20-inside-8_99_76756)'
                          />
                          <mask id='path-22-inside-9_99_76756' fill='white'>
                            <path d='M100.248 44H107.833V51.5852H100.248V44Z' />
                          </mask>
                          <path
                            d='M107.833 51.5852V52.0852H108.333V51.5852H107.833ZM107.333 44V51.5852H108.333V44H107.333ZM107.833 51.0852H100.248V52.0852H107.833V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-22-inside-9_99_76756)'
                          />
                          <mask id='path-24-inside-10_99_76756' fill='white'>
                            <path d='M107.833 44H115.419V51.5852H107.833V44Z' />
                          </mask>
                          <path
                            d='M115.419 51.5852V52.0852H115.919V51.5852H115.419ZM114.919 44V51.5852H115.919V44H114.919ZM115.419 51.0852H107.833V52.0852H115.419V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-24-inside-10_99_76756)'
                          />
                          <mask id='path-26-inside-11_99_76756' fill='white'>
                            <path d='M115.418 44H123.004V51.5852H115.418V44Z' />
                          </mask>
                          <path
                            d='M123.004 51.5852V52.0852H123.504V51.5852H123.004ZM122.504 44V51.5852H123.504V44H122.504ZM123.004 51.0852H115.418V52.0852H123.004V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-26-inside-11_99_76756)'
                          />
                          <mask id='path-28-inside-12_99_76756' fill='white'>
                            <path d='M123.004 44H130.589V51.5852H123.004V44Z' />
                          </mask>
                          <path
                            d='M130.589 51.5852V52.0852H131.089V51.5852H130.589ZM130.089 44V51.5852H131.089V44H130.089ZM130.589 51.0852H123.004V52.0852H130.589V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-28-inside-12_99_76756)'
                          />
                          <mask id='path-30-inside-13_99_76756' fill='white'>
                            <path d='M130.589 44H138.174V51.5852H130.589V44Z' />
                          </mask>
                          <path
                            d='M138.174 51.5852V52.0852H138.674V51.5852H138.174ZM137.674 44V51.5852H138.674V44H137.674ZM138.174 51.0852H130.589V52.0852H138.174V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-30-inside-13_99_76756)'
                          />
                          <mask id='path-32-inside-14_99_76756' fill='white'>
                            <path d='M138.174 44H145.759V51.5852H138.174V44Z' />
                          </mask>
                          <path
                            d='M145.759 51.5852V52.0852H146.259V51.5852H145.759ZM145.259 44V51.5852H146.259V44H145.259ZM145.759 51.0852H138.174V52.0852H145.759V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-32-inside-14_99_76756)'
                          />
                          <mask id='path-34-inside-15_99_76756' fill='white'>
                            <path d='M145.759 44H153.344V51.5852H145.759V44Z' />
                          </mask>
                          <path
                            d='M153.344 51.5852V52.0852H153.844V51.5852H153.344ZM152.844 44V51.5852H153.844V44H152.844ZM153.344 51.0852H145.759V52.0852H153.344V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-34-inside-15_99_76756)'
                          />
                          <mask id='path-36-inside-16_99_76756' fill='white'>
                            <path d='M153.344 44H160.93V51.5852H153.344V44Z' />
                          </mask>
                          <path
                            d='M160.93 51.5852V52.0852H161.43V51.5852H160.93ZM160.43 44V51.5852H161.43V44H160.43ZM160.93 51.0852H153.344V52.0852H160.93V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-36-inside-16_99_76756)'
                          />
                          <mask id='path-38-inside-17_99_76756' fill='white'>
                            <path d='M160.93 44H168.515V51.5852H160.93V44Z' />
                          </mask>
                          <path
                            d='M168.515 51.5852V52.0852H169.015V51.5852H168.515ZM168.015 44V51.5852H169.015V44H168.015ZM168.515 51.0852H160.93V52.0852H168.515V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-38-inside-17_99_76756)'
                          />
                          <mask id='path-40-inside-18_99_76756' fill='white'>
                            <path d='M168.515 44H176.1V51.5852H168.515V44Z' />
                          </mask>
                          <path
                            d='M176.1 51.5852V52.0852H176.6V51.5852H176.1ZM175.6 44V51.5852H176.6V44H175.6ZM176.1 51.0852H168.515V52.0852H176.1V51.0852Z'
                            fill='#D0D5DD'
                            mask='url(#path-40-inside-18_99_76756)'
                          />
                          <mask id='path-42-inside-19_99_76756' fill='white'>
                            <path d='M39.5667 51.5859H47.1518V59.1711H39.5667V51.5859Z' />
                          </mask>
                          <path
                            d='M47.1518 59.1711V59.6711H47.6518V59.1711H47.1518ZM46.6518 51.5859V59.1711H47.6518V51.5859H46.6518ZM47.1518 58.6711H39.5667V59.6711H47.1518V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-42-inside-19_99_76756)'
                          />
                          <mask id='path-44-inside-20_99_76756' fill='white'>
                            <path d='M47.1519 51.5859H54.737V59.1711H47.1519V51.5859Z' />
                          </mask>
                          <path
                            d='M54.737 59.1711V59.6711H55.237V59.1711H54.737ZM54.237 51.5859V59.1711H55.237V51.5859H54.237ZM54.737 58.6711H47.1519V59.6711H54.737V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-44-inside-20_99_76756)'
                          />
                          <mask id='path-46-inside-21_99_76756' fill='white'>
                            <path d='M54.7371 51.5859H62.3222V59.1711H54.7371V51.5859Z' />
                          </mask>
                          <path
                            d='M62.3222 59.1711V59.6711H62.8222V59.1711H62.3222ZM61.8222 51.5859V59.1711H62.8222V51.5859H61.8222ZM62.3222 58.6711H54.7371V59.6711H62.3222V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-46-inside-21_99_76756)'
                          />
                          <mask id='path-48-inside-22_99_76756' fill='white'>
                            <path d='M62.3223 51.5859H69.9075V59.1711H62.3223V51.5859Z' />
                          </mask>
                          <path
                            d='M62.3223 51.5859H69.9075V59.1711H62.3223V51.5859Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M69.9075 59.1711V59.6711H70.4075V59.1711H69.9075ZM69.4075 51.5859V59.1711H70.4075V51.5859H69.4075ZM69.9075 58.6711H62.3223V59.6711H69.9075V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-48-inside-22_99_76756)'
                          />
                          <mask id='path-50-inside-23_99_76756' fill='white'>
                            <path d='M69.9071 51.5859H77.4923V59.1711H69.9071V51.5859Z' />
                          </mask>
                          <path
                            d='M77.4923 59.1711V59.6711H77.9923V59.1711H77.4923ZM76.9923 51.5859V59.1711H77.9923V51.5859H76.9923ZM77.4923 58.6711H69.9071V59.6711H77.4923V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-50-inside-23_99_76756)'
                          />
                          <mask id='path-52-inside-24_99_76756' fill='white'>
                            <path d='M77.4926 51.5859H85.0777V59.1711H77.4926V51.5859Z' />
                          </mask>
                          <path
                            d='M85.0777 59.1711V59.6711H85.5777V59.1711H85.0777ZM84.5777 51.5859V59.1711H85.5777V51.5859H84.5777ZM85.0777 58.6711H77.4926V59.6711H85.0777V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-52-inside-24_99_76756)'
                          />
                          <mask id='path-54-inside-25_99_76756' fill='white'>
                            <path d='M85.078 51.5859H92.6632V59.1711H85.078V51.5859Z' />
                          </mask>
                          <path
                            d='M92.6632 59.1711V59.6711H93.1632V59.1711H92.6632ZM92.1632 51.5859V59.1711H93.1632V51.5859H92.1632ZM92.6632 58.6711H85.078V59.6711H92.6632V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-54-inside-25_99_76756)'
                          />
                          <mask id='path-56-inside-26_99_76756' fill='white'>
                            <path d='M92.663 51.5859H100.248V59.1711H92.663V51.5859Z' />
                          </mask>
                          <path
                            d='M100.248 59.1711V59.6711H100.748V59.1711H100.248ZM99.7481 51.5859V59.1711H100.748V51.5859H99.7481ZM100.248 58.6711H92.663V59.6711H100.248V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-56-inside-26_99_76756)'
                          />
                          <mask id='path-58-inside-27_99_76756' fill='white'>
                            <path d='M100.248 51.5859H107.833V59.1711H100.248V51.5859Z' />
                          </mask>
                          <path
                            d='M107.833 59.1711V59.6711H108.333V59.1711H107.833ZM107.333 51.5859V59.1711H108.333V51.5859H107.333ZM107.833 58.6711H100.248V59.6711H107.833V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-58-inside-27_99_76756)'
                          />
                          <mask id='path-60-inside-28_99_76756' fill='white'>
                            <path d='M107.833 51.5859H115.419V59.1711H107.833V51.5859Z' />
                          </mask>
                          <path
                            d='M115.419 59.1711V59.6711H115.919V59.1711H115.419ZM114.919 51.5859V59.1711H115.919V51.5859H114.919ZM115.419 58.6711H107.833V59.6711H115.419V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-60-inside-28_99_76756)'
                          />
                          <mask id='path-62-inside-29_99_76756' fill='white'>
                            <path d='M115.418 51.5859H123.004V59.1711H115.418V51.5859Z' />
                          </mask>
                          <path
                            d='M123.004 59.1711V59.6711H123.504V59.1711H123.004ZM122.504 51.5859V59.1711H123.504V51.5859H122.504ZM123.004 58.6711H115.418V59.6711H123.004V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-62-inside-29_99_76756)'
                          />
                          <mask id='path-64-inside-30_99_76756' fill='white'>
                            <path d='M123.004 51.5859H130.589V59.1711H123.004V51.5859Z' />
                          </mask>
                          <path
                            d='M130.589 59.1711V59.6711H131.089V59.1711H130.589ZM130.089 51.5859V59.1711H131.089V51.5859H130.089ZM130.589 58.6711H123.004V59.6711H130.589V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-64-inside-30_99_76756)'
                          />
                          <mask id='path-66-inside-31_99_76756' fill='white'>
                            <path d='M130.589 51.5859H138.174V59.1711H130.589V51.5859Z' />
                          </mask>
                          <path
                            d='M138.174 59.1711V59.6711H138.674V59.1711H138.174ZM137.674 51.5859V59.1711H138.674V51.5859H137.674ZM138.174 58.6711H130.589V59.6711H138.174V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-66-inside-31_99_76756)'
                          />
                          <mask id='path-68-inside-32_99_76756' fill='white'>
                            <path d='M138.174 51.5859H145.759V59.1711H138.174V51.5859Z' />
                          </mask>
                          <path
                            d='M145.759 59.1711V59.6711H146.259V59.1711H145.759ZM145.259 51.5859V59.1711H146.259V51.5859H145.259ZM145.759 58.6711H138.174V59.6711H145.759V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-68-inside-32_99_76756)'
                          />
                          <mask id='path-70-inside-33_99_76756' fill='white'>
                            <path d='M145.759 51.5859H153.344V59.1711H145.759V51.5859Z' />
                          </mask>
                          <path
                            d='M145.759 51.5859H153.344V59.1711H145.759V51.5859Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M153.344 59.1711V59.6711H153.844V59.1711H153.344ZM152.844 51.5859V59.1711H153.844V51.5859H152.844ZM153.344 58.6711H145.759V59.6711H153.344V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-70-inside-33_99_76756)'
                          />
                          <mask id='path-72-inside-34_99_76756' fill='white'>
                            <path d='M153.344 51.5859H160.93V59.1711H153.344V51.5859Z' />
                          </mask>
                          <path
                            d='M160.93 59.1711V59.6711H161.43V59.1711H160.93ZM160.43 51.5859V59.1711H161.43V51.5859H160.43ZM160.93 58.6711H153.344V59.6711H160.93V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-72-inside-34_99_76756)'
                          />
                          <mask id='path-74-inside-35_99_76756' fill='white'>
                            <path d='M160.93 51.5859H168.515V59.1711H160.93V51.5859Z' />
                          </mask>
                          <path
                            d='M168.515 59.1711V59.6711H169.015V59.1711H168.515ZM168.015 51.5859V59.1711H169.015V51.5859H168.015ZM168.515 58.6711H160.93V59.6711H168.515V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-74-inside-35_99_76756)'
                          />
                          <mask id='path-76-inside-36_99_76756' fill='white'>
                            <path d='M168.515 51.5859H176.1V59.1711H168.515V51.5859Z' />
                          </mask>
                          <path
                            d='M176.1 59.1711V59.6711H176.6V59.1711H176.1ZM175.6 51.5859V59.1711H176.6V51.5859H175.6ZM176.1 58.6711H168.515V59.6711H176.1V58.6711Z'
                            fill='#D0D5DD'
                            mask='url(#path-76-inside-36_99_76756)'
                          />
                          <mask id='path-78-inside-37_99_76756' fill='white'>
                            <path d='M39.5667 59.1699H47.1518V66.7551H39.5667V59.1699Z' />
                          </mask>
                          <path
                            d='M47.1518 66.7551V67.2551H47.6518V66.7551H47.1518ZM46.6518 59.1699V66.7551H47.6518V59.1699H46.6518ZM47.1518 66.2551H39.5667V67.2551H47.1518V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-78-inside-37_99_76756)'
                          />
                          <mask id='path-80-inside-38_99_76756' fill='white'>
                            <path d='M47.1519 59.1699H54.737V66.7551H47.1519V59.1699Z' />
                          </mask>
                          <path
                            d='M54.737 66.7551V67.2551H55.237V66.7551H54.737ZM54.237 59.1699V66.7551H55.237V59.1699H54.237ZM54.737 66.2551H47.1519V67.2551H54.737V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-80-inside-38_99_76756)'
                          />
                          <mask id='path-82-inside-39_99_76756' fill='white'>
                            <path d='M54.7371 59.1699H62.3222V66.7551H54.7371V59.1699Z' />
                          </mask>
                          <path
                            d='M62.3222 66.7551V67.2551H62.8222V66.7551H62.3222ZM61.8222 59.1699V66.7551H62.8222V59.1699H61.8222ZM62.3222 66.2551H54.7371V67.2551H62.3222V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-82-inside-39_99_76756)'
                          />
                          <mask id='path-84-inside-40_99_76756' fill='white'>
                            <path d='M62.3223 59.1699H69.9075V66.7551H62.3223V59.1699Z' />
                          </mask>
                          <path
                            d='M69.9075 66.7551V67.2551H70.4075V66.7551H69.9075ZM69.4075 59.1699V66.7551H70.4075V59.1699H69.4075ZM69.9075 66.2551H62.3223V67.2551H69.9075V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-84-inside-40_99_76756)'
                          />
                          <mask id='path-86-inside-41_99_76756' fill='white'>
                            <path d='M69.9071 59.1699H77.4923V66.7551H69.9071V59.1699Z' />
                          </mask>
                          <path
                            d='M77.4923 66.7551V67.2551H77.9923V66.7551H77.4923ZM76.9923 59.1699V66.7551H77.9923V59.1699H76.9923ZM77.4923 66.2551H69.9071V67.2551H77.4923V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-86-inside-41_99_76756)'
                          />
                          <mask id='path-88-inside-42_99_76756' fill='white'>
                            <path d='M77.4926 59.1699H85.0777V66.7551H77.4926V59.1699Z' />
                          </mask>
                          <path
                            d='M77.4926 59.1699H85.0777V66.7551H77.4926V59.1699Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M85.0777 66.7551V67.2551H85.5777V66.7551H85.0777ZM84.5777 59.1699V66.7551H85.5777V59.1699H84.5777ZM85.0777 66.2551H77.4926V67.2551H85.0777V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-88-inside-42_99_76756)'
                          />
                          <mask id='path-90-inside-43_99_76756' fill='white'>
                            <path d='M85.078 59.1699H92.6632V66.7551H85.078V59.1699Z' />
                          </mask>
                          <path
                            d='M92.6632 66.7551V67.2551H93.1632V66.7551H92.6632ZM92.1632 59.1699V66.7551H93.1632V59.1699H92.1632ZM92.6632 66.2551H85.078V67.2551H92.6632V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-90-inside-43_99_76756)'
                          />
                          <mask id='path-92-inside-44_99_76756' fill='white'>
                            <path d='M92.663 59.1699H100.248V66.7551H92.663V59.1699Z' />
                          </mask>
                          <path
                            d='M100.248 66.7551V67.2551H100.748V66.7551H100.248ZM99.7481 59.1699V66.7551H100.748V59.1699H99.7481ZM100.248 66.2551H92.663V67.2551H100.248V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-92-inside-44_99_76756)'
                          />
                          <mask id='path-94-inside-45_99_76756' fill='white'>
                            <path d='M100.248 59.1699H107.833V66.7551H100.248V59.1699Z' />
                          </mask>
                          <path
                            d='M107.833 66.7551V67.2551H108.333V66.7551H107.833ZM107.333 59.1699V66.7551H108.333V59.1699H107.333ZM107.833 66.2551H100.248V67.2551H107.833V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-94-inside-45_99_76756)'
                          />
                          <mask id='path-96-inside-46_99_76756' fill='white'>
                            <path d='M107.833 59.1699H115.419V66.7551H107.833V59.1699Z' />
                          </mask>
                          <path
                            d='M115.419 66.7551V67.2551H115.919V66.7551H115.419ZM114.919 59.1699V66.7551H115.919V59.1699H114.919ZM115.419 66.2551H107.833V67.2551H115.419V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-96-inside-46_99_76756)'
                          />
                          <mask id='path-98-inside-47_99_76756' fill='white'>
                            <path d='M115.418 59.1699H123.004V66.7551H115.418V59.1699Z' />
                          </mask>
                          <path
                            d='M115.418 59.1699H123.004V66.7551H115.418V59.1699Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M123.004 66.7551V67.2551H123.504V66.7551H123.004ZM122.504 59.1699V66.7551H123.504V59.1699H122.504ZM123.004 66.2551H115.418V67.2551H123.004V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-98-inside-47_99_76756)'
                          />
                          <mask id='path-100-inside-48_99_76756' fill='white'>
                            <path d='M123.004 59.1699H130.589V66.7551H123.004V59.1699Z' />
                          </mask>
                          <path
                            d='M130.589 66.7551V67.2551H131.089V66.7551H130.589ZM130.089 59.1699V66.7551H131.089V59.1699H130.089ZM130.589 66.2551H123.004V67.2551H130.589V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-100-inside-48_99_76756)'
                          />
                          <mask id='path-102-inside-49_99_76756' fill='white'>
                            <path d='M130.589 59.1699H138.174V66.7551H130.589V59.1699Z' />
                          </mask>
                          <path
                            d='M138.174 66.7551V67.2551H138.674V66.7551H138.174ZM137.674 59.1699V66.7551H138.674V59.1699H137.674ZM138.174 66.2551H130.589V67.2551H138.174V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-102-inside-49_99_76756)'
                          />
                          <mask id='path-104-inside-50_99_76756' fill='white'>
                            <path d='M138.174 59.1699H145.759V66.7551H138.174V59.1699Z' />
                          </mask>
                          <path
                            d='M145.759 66.7551V67.2551H146.259V66.7551H145.759ZM145.259 59.1699V66.7551H146.259V59.1699H145.259ZM145.759 66.2551H138.174V67.2551H145.759V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-104-inside-50_99_76756)'
                          />
                          <mask id='path-106-inside-51_99_76756' fill='white'>
                            <path d='M145.759 59.1699H153.344V66.7551H145.759V59.1699Z' />
                          </mask>
                          <path
                            d='M153.344 66.7551V67.2551H153.844V66.7551H153.344ZM152.844 59.1699V66.7551H153.844V59.1699H152.844ZM153.344 66.2551H145.759V67.2551H153.344V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-106-inside-51_99_76756)'
                          />
                          <mask id='path-108-inside-52_99_76756' fill='white'>
                            <path d='M153.344 59.1699H160.93V66.7551H153.344V59.1699Z' />
                          </mask>
                          <path
                            d='M160.93 66.7551V67.2551H161.43V66.7551H160.93ZM160.43 59.1699V66.7551H161.43V59.1699H160.43ZM160.93 66.2551H153.344V67.2551H160.93V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-108-inside-52_99_76756)'
                          />
                          <mask id='path-110-inside-53_99_76756' fill='white'>
                            <path d='M160.93 59.1699H168.515V66.7551H160.93V59.1699Z' />
                          </mask>
                          <path
                            d='M168.515 66.7551V67.2551H169.015V66.7551H168.515ZM168.015 59.1699V66.7551H169.015V59.1699H168.015ZM168.515 66.2551H160.93V67.2551H168.515V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-110-inside-53_99_76756)'
                          />
                          <mask id='path-112-inside-54_99_76756' fill='white'>
                            <path d='M168.515 59.1699H176.1V66.7551H168.515V59.1699Z' />
                          </mask>
                          <path
                            d='M176.1 66.7551V67.2551H176.6V66.7551H176.1ZM175.6 59.1699V66.7551H176.6V59.1699H175.6ZM176.1 66.2551H168.515V67.2551H176.1V66.2551Z'
                            fill='#D0D5DD'
                            mask='url(#path-112-inside-54_99_76756)'
                          />
                          <mask id='path-114-inside-55_99_76756' fill='white'>
                            <path d='M39.5667 66.7559H47.1518V74.341H39.5667V66.7559Z' />
                          </mask>
                          <path
                            d='M39.5667 66.7559H47.1518V74.341H39.5667V66.7559Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M47.1518 74.341V74.841H47.6518V74.341H47.1518ZM46.6518 66.7559V74.341H47.6518V66.7559H46.6518ZM47.1518 73.841H39.5667V74.841H47.1518V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-114-inside-55_99_76756)'
                          />
                          <mask id='path-116-inside-56_99_76756' fill='white'>
                            <path d='M47.1519 66.7559H54.737V74.341H47.1519V66.7559Z' />
                          </mask>
                          <path
                            d='M54.737 74.341V74.841H55.237V74.341H54.737ZM54.237 66.7559V74.341H55.237V66.7559H54.237ZM54.737 73.841H47.1519V74.841H54.737V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-116-inside-56_99_76756)'
                          />
                          <mask id='path-118-inside-57_99_76756' fill='white'>
                            <path d='M54.7371 66.7559H62.3222V74.341H54.7371V66.7559Z' />
                          </mask>
                          <path
                            d='M62.3222 74.341V74.841H62.8222V74.341H62.3222ZM61.8222 66.7559V74.341H62.8222V66.7559H61.8222ZM62.3222 73.841H54.7371V74.841H62.3222V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-118-inside-57_99_76756)'
                          />
                          <mask id='path-120-inside-58_99_76756' fill='white'>
                            <path d='M62.3223 66.7559H69.9075V74.341H62.3223V66.7559Z' />
                          </mask>
                          <path
                            d='M69.9075 74.341V74.841H70.4075V74.341H69.9075ZM69.4075 66.7559V74.341H70.4075V66.7559H69.4075ZM69.9075 73.841H62.3223V74.841H69.9075V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-120-inside-58_99_76756)'
                          />
                          <mask id='path-122-inside-59_99_76756' fill='white'>
                            <path d='M69.9071 66.7559H77.4923V74.341H69.9071V66.7559Z' />
                          </mask>
                          <path
                            d='M77.4923 74.341V74.841H77.9923V74.341H77.4923ZM76.9923 66.7559V74.341H77.9923V66.7559H76.9923ZM77.4923 73.841H69.9071V74.841H77.4923V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-122-inside-59_99_76756)'
                          />
                          <mask id='path-124-inside-60_99_76756' fill='white'>
                            <path d='M77.4926 66.7559H85.0777V74.341H77.4926V66.7559Z' />
                          </mask>
                          <path
                            d='M85.0777 74.341V74.841H85.5777V74.341H85.0777ZM84.5777 66.7559V74.341H85.5777V66.7559H84.5777ZM85.0777 73.841H77.4926V74.841H85.0777V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-124-inside-60_99_76756)'
                          />
                          <mask id='path-126-inside-61_99_76756' fill='white'>
                            <path d='M85.078 66.7559H92.6632V74.341H85.078V66.7559Z' />
                          </mask>
                          <path
                            d='M92.6632 74.341V74.841H93.1632V74.341H92.6632ZM92.1632 66.7559V74.341H93.1632V66.7559H92.1632ZM92.6632 73.841H85.078V74.841H92.6632V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-126-inside-61_99_76756)'
                          />
                          <mask id='path-128-inside-62_99_76756' fill='white'>
                            <path d='M92.663 66.7559H100.248V74.341H92.663V66.7559Z' />
                          </mask>
                          <path
                            d='M100.248 74.341V74.841H100.748V74.341H100.248ZM99.7481 66.7559V74.341H100.748V66.7559H99.7481ZM100.248 73.841H92.663V74.841H100.248V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-128-inside-62_99_76756)'
                          />
                          <mask id='path-130-inside-63_99_76756' fill='white'>
                            <path d='M100.248 66.7559H107.833V74.341H100.248V66.7559Z' />
                          </mask>
                          <path
                            d='M107.833 74.341V74.841H108.333V74.341H107.833ZM107.333 66.7559V74.341H108.333V66.7559H107.333ZM107.833 73.841H100.248V74.841H107.833V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-130-inside-63_99_76756)'
                          />
                          <mask id='path-132-inside-64_99_76756' fill='white'>
                            <path d='M107.833 66.7559H115.419V74.341H107.833V66.7559Z' />
                          </mask>
                          <path
                            d='M115.419 74.341V74.841H115.919V74.341H115.419ZM114.919 66.7559V74.341H115.919V66.7559H114.919ZM115.419 73.841H107.833V74.841H115.419V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-132-inside-64_99_76756)'
                          />
                          <mask id='path-134-inside-65_99_76756' fill='white'>
                            <path d='M115.418 66.7559H123.004V74.341H115.418V66.7559Z' />
                          </mask>
                          <path
                            d='M123.004 74.341V74.841H123.504V74.341H123.004ZM122.504 66.7559V74.341H123.504V66.7559H122.504ZM123.004 73.841H115.418V74.841H123.004V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-134-inside-65_99_76756)'
                          />
                          <mask id='path-136-inside-66_99_76756' fill='white'>
                            <path d='M123.004 66.7559H130.589V74.341H123.004V66.7559Z' />
                          </mask>
                          <path
                            d='M130.589 74.341V74.841H131.089V74.341H130.589ZM130.089 66.7559V74.341H131.089V66.7559H130.089ZM130.589 73.841H123.004V74.841H130.589V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-136-inside-66_99_76756)'
                          />
                          <mask id='path-138-inside-67_99_76756' fill='white'>
                            <path d='M130.589 66.7559H138.174V74.341H130.589V66.7559Z' />
                          </mask>
                          <path
                            d='M138.174 74.341V74.841H138.674V74.341H138.174ZM137.674 66.7559V74.341H138.674V66.7559H137.674ZM138.174 73.841H130.589V74.841H138.174V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-138-inside-67_99_76756)'
                          />
                          <mask id='path-140-inside-68_99_76756' fill='white'>
                            <path d='M138.174 66.7559H145.759V74.341H138.174V66.7559Z' />
                          </mask>
                          <path
                            d='M145.759 74.341V74.841H146.259V74.341H145.759ZM145.259 66.7559V74.341H146.259V66.7559H145.259ZM145.759 73.841H138.174V74.841H145.759V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-140-inside-68_99_76756)'
                          />
                          <mask id='path-142-inside-69_99_76756' fill='white'>
                            <path d='M145.759 66.7559H153.344V74.341H145.759V66.7559Z' />
                          </mask>
                          <path
                            d='M145.759 66.7559H153.344V74.341H145.759V66.7559Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M153.344 74.341V74.841H153.844V74.341H153.344ZM152.844 66.7559V74.341H153.844V66.7559H152.844ZM153.344 73.841H145.759V74.841H153.344V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-142-inside-69_99_76756)'
                          />
                          <mask id='path-144-inside-70_99_76756' fill='white'>
                            <path d='M153.344 66.7559H160.93V74.341H153.344V66.7559Z' />
                          </mask>
                          <path
                            d='M160.93 74.341V74.841H161.43V74.341H160.93ZM160.43 66.7559V74.341H161.43V66.7559H160.43ZM160.93 73.841H153.344V74.841H160.93V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-144-inside-70_99_76756)'
                          />
                          <mask id='path-146-inside-71_99_76756' fill='white'>
                            <path d='M160.93 66.7559H168.515V74.341H160.93V66.7559Z' />
                          </mask>
                          <path
                            d='M168.515 74.341V74.841H169.015V74.341H168.515ZM168.015 66.7559V74.341H169.015V66.7559H168.015ZM168.515 73.841H160.93V74.841H168.515V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-146-inside-71_99_76756)'
                          />
                          <mask id='path-148-inside-72_99_76756' fill='white'>
                            <path d='M168.515 66.7559H176.1V74.341H168.515V66.7559Z' />
                          </mask>
                          <path
                            d='M176.1 74.341V74.841H176.6V74.341H176.1ZM175.6 66.7559V74.341H176.6V66.7559H175.6ZM176.1 73.841H168.515V74.841H176.1V73.841Z'
                            fill='#D0D5DD'
                            mask='url(#path-148-inside-72_99_76756)'
                          />
                          <mask id='path-150-inside-73_99_76756' fill='white'>
                            <path d='M39.5667 74.3398H47.1518V81.925H39.5667V74.3398Z' />
                          </mask>
                          <path
                            d='M47.1518 81.925V82.425H47.6518V81.925H47.1518ZM46.6518 74.3398V81.925H47.6518V74.3398H46.6518ZM47.1518 81.425H39.5667V82.425H47.1518V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-150-inside-73_99_76756)'
                          />
                          <mask id='path-152-inside-74_99_76756' fill='white'>
                            <path d='M47.1519 74.3398H54.737V81.925H47.1519V74.3398Z' />
                          </mask>
                          <path
                            d='M54.737 81.925V82.425H55.237V81.925H54.737ZM54.237 74.3398V81.925H55.237V74.3398H54.237ZM54.737 81.425H47.1519V82.425H54.737V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-152-inside-74_99_76756)'
                          />
                          <mask id='path-154-inside-75_99_76756' fill='white'>
                            <path d='M54.7371 74.3398H62.3222V81.925H54.7371V74.3398Z' />
                          </mask>
                          <path
                            d='M54.7371 74.3398H62.3222V81.925H54.7371V74.3398Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M62.3222 81.925V82.425H62.8222V81.925H62.3222ZM61.8222 74.3398V81.925H62.8222V74.3398H61.8222ZM62.3222 81.425H54.7371V82.425H62.3222V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-154-inside-75_99_76756)'
                          />
                          <mask id='path-156-inside-76_99_76756' fill='white'>
                            <path d='M62.3223 74.3398H69.9075V81.925H62.3223V74.3398Z' />
                          </mask>
                          <path
                            d='M69.9075 81.925V82.425H70.4075V81.925H69.9075ZM69.4075 74.3398V81.925H70.4075V74.3398H69.4075ZM69.9075 81.425H62.3223V82.425H69.9075V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-156-inside-76_99_76756)'
                          />
                          <mask id='path-158-inside-77_99_76756' fill='white'>
                            <path d='M69.9071 74.3398H77.4923V81.925H69.9071V74.3398Z' />
                          </mask>
                          <path
                            d='M77.4923 81.925V82.425H77.9923V81.925H77.4923ZM76.9923 74.3398V81.925H77.9923V74.3398H76.9923ZM77.4923 81.425H69.9071V82.425H77.4923V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-158-inside-77_99_76756)'
                          />
                          <mask id='path-160-inside-78_99_76756' fill='white'>
                            <path d='M77.4926 74.3398H85.0777V81.925H77.4926V74.3398Z' />
                          </mask>
                          <path
                            d='M85.0777 81.925V82.425H85.5777V81.925H85.0777ZM84.5777 74.3398V81.925H85.5777V74.3398H84.5777ZM85.0777 81.425H77.4926V82.425H85.0777V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-160-inside-78_99_76756)'
                          />
                          <mask id='path-162-inside-79_99_76756' fill='white'>
                            <path d='M85.078 74.3398H92.6632V81.925H85.078V74.3398Z' />
                          </mask>
                          <path
                            d='M92.6632 81.925V82.425H93.1632V81.925H92.6632ZM92.1632 74.3398V81.925H93.1632V74.3398H92.1632ZM92.6632 81.425H85.078V82.425H92.6632V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-162-inside-79_99_76756)'
                          />
                          <mask id='path-164-inside-80_99_76756' fill='white'>
                            <path d='M92.663 74.3398H100.248V81.925H92.663V74.3398Z' />
                          </mask>
                          <path
                            d='M92.663 74.3398H100.248V81.925H92.663V74.3398Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M100.248 81.925V82.425H100.748V81.925H100.248ZM99.7481 74.3398V81.925H100.748V74.3398H99.7481ZM100.248 81.425H92.663V82.425H100.248V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-164-inside-80_99_76756)'
                          />
                          <mask id='path-166-inside-81_99_76756' fill='white'>
                            <path d='M100.248 74.3398H107.833V81.925H100.248V74.3398Z' />
                          </mask>
                          <path
                            d='M107.833 81.925V82.425H108.333V81.925H107.833ZM107.333 74.3398V81.925H108.333V74.3398H107.333ZM107.833 81.425H100.248V82.425H107.833V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-166-inside-81_99_76756)'
                          />
                          <mask id='path-168-inside-82_99_76756' fill='white'>
                            <path d='M107.833 74.3398H115.419V81.925H107.833V74.3398Z' />
                          </mask>
                          <path
                            d='M115.419 81.925V82.425H115.919V81.925H115.419ZM114.919 74.3398V81.925H115.919V74.3398H114.919ZM115.419 81.425H107.833V82.425H115.419V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-168-inside-82_99_76756)'
                          />
                          <mask id='path-170-inside-83_99_76756' fill='white'>
                            <path d='M115.418 74.3398H123.004V81.925H115.418V74.3398Z' />
                          </mask>
                          <path
                            d='M123.004 81.925V82.425H123.504V81.925H123.004ZM122.504 74.3398V81.925H123.504V74.3398H122.504ZM123.004 81.425H115.418V82.425H123.004V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-170-inside-83_99_76756)'
                          />
                          <mask id='path-172-inside-84_99_76756' fill='white'>
                            <path d='M123.004 74.3398H130.589V81.925H123.004V74.3398Z' />
                          </mask>
                          <path
                            d='M130.589 81.925V82.425H131.089V81.925H130.589ZM130.089 74.3398V81.925H131.089V74.3398H130.089ZM130.589 81.425H123.004V82.425H130.589V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-172-inside-84_99_76756)'
                          />
                          <mask id='path-174-inside-85_99_76756' fill='white'>
                            <path d='M130.589 74.3398H138.174V81.925H130.589V74.3398Z' />
                          </mask>
                          <path
                            d='M138.174 81.925V82.425H138.674V81.925H138.174ZM137.674 74.3398V81.925H138.674V74.3398H137.674ZM138.174 81.425H130.589V82.425H138.174V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-174-inside-85_99_76756)'
                          />
                          <mask id='path-176-inside-86_99_76756' fill='white'>
                            <path d='M138.174 74.3398H145.759V81.925H138.174V74.3398Z' />
                          </mask>
                          <path
                            d='M145.759 81.925V82.425H146.259V81.925H145.759ZM145.259 74.3398V81.925H146.259V74.3398H145.259ZM145.759 81.425H138.174V82.425H145.759V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-176-inside-86_99_76756)'
                          />
                          <mask id='path-178-inside-87_99_76756' fill='white'>
                            <path d='M145.759 74.3398H153.344V81.925H145.759V74.3398Z' />
                          </mask>
                          <path
                            d='M153.344 81.925V82.425H153.844V81.925H153.344ZM152.844 74.3398V81.925H153.844V74.3398H152.844ZM153.344 81.425H145.759V82.425H153.344V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-178-inside-87_99_76756)'
                          />
                          <mask id='path-180-inside-88_99_76756' fill='white'>
                            <path d='M153.344 74.3398H160.93V81.925H153.344V74.3398Z' />
                          </mask>
                          <path
                            d='M160.93 81.925V82.425H161.43V81.925H160.93ZM160.43 74.3398V81.925H161.43V74.3398H160.43ZM160.93 81.425H153.344V82.425H160.93V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-180-inside-88_99_76756)'
                          />
                          <mask id='path-182-inside-89_99_76756' fill='white'>
                            <path d='M160.93 74.3398H168.515V81.925H160.93V74.3398Z' />
                          </mask>
                          <path
                            d='M168.515 81.925V82.425H169.015V81.925H168.515ZM168.015 74.3398V81.925H169.015V74.3398H168.015ZM168.515 81.425H160.93V82.425H168.515V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-182-inside-89_99_76756)'
                          />
                          <mask id='path-184-inside-90_99_76756' fill='white'>
                            <path d='M168.515 74.3398H176.1V81.925H168.515V74.3398Z' />
                          </mask>
                          <path
                            d='M176.1 81.925V82.425H176.6V81.925H176.1ZM175.6 74.3398V81.925H176.6V74.3398H175.6ZM176.1 81.425H168.515V82.425H176.1V81.425Z'
                            fill='#D0D5DD'
                            mask='url(#path-184-inside-90_99_76756)'
                          />
                          <mask id='path-186-inside-91_99_76756' fill='white'>
                            <path d='M39.5667 81.9259H47.1518V89.5111H39.5667V81.9259Z' />
                          </mask>
                          <path
                            d='M47.1518 89.5111V90.0111H47.6518V89.5111H47.1518ZM46.6518 81.9259V89.5111H47.6518V81.9259H46.6518ZM47.1518 89.0111H39.5667V90.0111H47.1518V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-186-inside-91_99_76756)'
                          />
                          <mask id='path-188-inside-92_99_76756' fill='white'>
                            <path d='M47.1519 81.9259H54.737V89.5111H47.1519V81.9259Z' />
                          </mask>
                          <path
                            d='M54.737 89.5111V90.0111H55.237V89.5111H54.737ZM54.237 81.9259V89.5111H55.237V81.9259H54.237ZM54.737 89.0111H47.1519V90.0111H54.737V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-188-inside-92_99_76756)'
                          />
                          <mask id='path-190-inside-93_99_76756' fill='white'>
                            <path d='M54.7371 81.9259H62.3222V89.5111H54.7371V81.9259Z' />
                          </mask>
                          <path
                            d='M62.3222 89.5111V90.0111H62.8222V89.5111H62.3222ZM61.8222 81.9259V89.5111H62.8222V81.9259H61.8222ZM62.3222 89.0111H54.7371V90.0111H62.3222V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-190-inside-93_99_76756)'
                          />
                          <mask id='path-192-inside-94_99_76756' fill='white'>
                            <path d='M62.3223 81.9259H69.9075V89.5111H62.3223V81.9259Z' />
                          </mask>
                          <path
                            d='M69.9075 89.5111V90.0111H70.4075V89.5111H69.9075ZM69.4075 81.9259V89.5111H70.4075V81.9259H69.4075ZM69.9075 89.0111H62.3223V90.0111H69.9075V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-192-inside-94_99_76756)'
                          />
                          <mask id='path-194-inside-95_99_76756' fill='white'>
                            <path d='M69.9073 81.9259H77.4925V89.5111H69.9073V81.9259Z' />
                          </mask>
                          <path
                            d='M77.4925 89.5111V90.0111H77.9925V89.5111H77.4925ZM76.9925 81.9259V89.5111H77.9925V81.9259H76.9925ZM77.4925 89.0111H69.9073V90.0111H77.4925V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-194-inside-95_99_76756)'
                          />
                          <mask id='path-196-inside-96_99_76756' fill='white'>
                            <path d='M77.4926 81.9259H85.0777V89.5111H77.4926V81.9259Z' />
                          </mask>
                          <path
                            d='M77.4926 81.9259H85.0777V89.5111H77.4926V81.9259Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M85.0777 89.5111V90.0111H85.5777V89.5111H85.0777ZM84.5777 81.9259V89.5111H85.5777V81.9259H84.5777ZM85.0777 89.0111H77.4926V90.0111H85.0777V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-196-inside-96_99_76756)'
                          />
                          <mask id='path-198-inside-97_99_76756' fill='white'>
                            <path d='M85.078 81.9258H92.6632V89.511H85.078V81.9258Z' />
                          </mask>
                          <path
                            d='M92.6632 89.511V90.011H93.1632V89.511H92.6632ZM92.1632 81.9258V89.511H93.1632V81.9258H92.1632ZM92.6632 89.011H85.078V90.011H92.6632V89.011Z'
                            fill='#D0D5DD'
                            mask='url(#path-198-inside-97_99_76756)'
                          />
                          <mask id='path-200-inside-98_99_76756' fill='white'>
                            <path d='M92.663 81.9259H100.248V89.5111H92.663V81.9259Z' />
                          </mask>
                          <path
                            d='M100.248 89.5111V90.0111H100.748V89.5111H100.248ZM99.7481 81.9259V89.5111H100.748V81.9259H99.7481ZM100.248 89.0111H92.663V90.0111H100.248V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-200-inside-98_99_76756)'
                          />
                          <mask id='path-202-inside-99_99_76756' fill='white'>
                            <path d='M100.248 81.9259H107.833V89.5111H100.248V81.9259Z' />
                          </mask>
                          <path
                            d='M107.833 89.5111V90.0111H108.333V89.5111H107.833ZM107.333 81.9259V89.5111H108.333V81.9259H107.333ZM107.833 89.0111H100.248V90.0111H107.833V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-202-inside-99_99_76756)'
                          />
                          <mask id='path-204-inside-100_99_76756' fill='white'>
                            <path d='M107.833 81.9259H115.419V89.5111H107.833V81.9259Z' />
                          </mask>
                          <path
                            d='M115.419 89.5111V90.0111H115.919V89.5111H115.419ZM114.919 81.9259V89.5111H115.919V81.9259H114.919ZM115.419 89.0111H107.833V90.0111H115.419V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-204-inside-100_99_76756)'
                          />
                          <mask id='path-206-inside-101_99_76756' fill='white'>
                            <path d='M115.418 81.9259H123.004V89.5111H115.418V81.9259Z' />
                          </mask>
                          <path
                            d='M123.004 89.5111V90.0111H123.504V89.5111H123.004ZM122.504 81.9259V89.5111H123.504V81.9259H122.504ZM123.004 89.0111H115.418V90.0111H123.004V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-206-inside-101_99_76756)'
                          />
                          <mask id='path-208-inside-102_99_76756' fill='white'>
                            <path d='M123.004 81.9259H130.589V89.5111H123.004V81.9259Z' />
                          </mask>
                          <path
                            d='M123.004 81.9259H130.589V89.5111H123.004V81.9259Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M130.589 89.5111V90.0111H131.089V89.5111H130.589ZM130.089 81.9259V89.5111H131.089V81.9259H130.089ZM130.589 89.0111H123.004V90.0111H130.589V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-208-inside-102_99_76756)'
                          />
                          <mask id='path-210-inside-103_99_76756' fill='white'>
                            <path d='M130.589 81.9259H138.174V89.5111H130.589V81.9259Z' />
                          </mask>
                          <path
                            d='M138.174 89.5111V90.0111H138.674V89.5111H138.174ZM137.674 81.9259V89.5111H138.674V81.9259H137.674ZM138.174 89.0111H130.589V90.0111H138.174V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-210-inside-103_99_76756)'
                          />
                          <mask id='path-212-inside-104_99_76756' fill='white'>
                            <path d='M138.174 81.9259H145.759V89.5111H138.174V81.9259Z' />
                          </mask>
                          <path
                            d='M145.759 89.5111V90.0111H146.259V89.5111H145.759ZM145.259 81.9259V89.5111H146.259V81.9259H145.259ZM145.759 89.0111H138.174V90.0111H145.759V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-212-inside-104_99_76756)'
                          />
                          <mask id='path-214-inside-105_99_76756' fill='white'>
                            <path d='M145.759 81.9259H153.344V89.5111H145.759V81.9259Z' />
                          </mask>
                          <path
                            d='M145.759 81.9259H153.344V89.5111H145.759V81.9259Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M153.344 89.5111V90.0111H153.844V89.5111H153.344ZM152.844 81.9259V89.5111H153.844V81.9259H152.844ZM153.344 89.0111H145.759V90.0111H153.344V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-214-inside-105_99_76756)'
                          />
                          <mask id='path-216-inside-106_99_76756' fill='white'>
                            <path d='M153.344 81.9259H160.93V89.5111H153.344V81.9259Z' />
                          </mask>
                          <path
                            d='M160.93 89.5111V90.0111H161.43V89.5111H160.93ZM160.43 81.9259V89.5111H161.43V81.9259H160.43ZM160.93 89.0111H153.344V90.0111H160.93V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-216-inside-106_99_76756)'
                          />
                          <mask id='path-218-inside-107_99_76756' fill='white'>
                            <path d='M160.93 81.9259H168.515V89.5111H160.93V81.9259Z' />
                          </mask>
                          <path
                            d='M168.515 89.5111V90.0111H169.015V89.5111H168.515ZM168.015 81.9259V89.5111H169.015V81.9259H168.015ZM168.515 89.0111H160.93V90.0111H168.515V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-218-inside-107_99_76756)'
                          />
                          <mask id='path-220-inside-108_99_76756' fill='white'>
                            <path d='M168.515 81.9259H176.1V89.5111H168.515V81.9259Z' />
                          </mask>
                          <path
                            d='M176.1 89.5111V90.0111H176.6V89.5111H176.1ZM175.6 81.9259V89.5111H176.6V81.9259H175.6ZM176.1 89.0111H168.515V90.0111H176.1V89.0111Z'
                            fill='#D0D5DD'
                            mask='url(#path-220-inside-108_99_76756)'
                          />
                          <mask id='path-222-inside-109_99_76756' fill='white'>
                            <path d='M39.5667 89.5117H47.1518V97.0969H39.5667V89.5117Z' />
                          </mask>
                          <path
                            d='M47.1518 97.0969V97.5969H47.6518V97.0969H47.1518ZM46.6518 89.5117V97.0969H47.6518V89.5117H46.6518ZM47.1518 96.5969H39.5667V97.5969H47.1518V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-222-inside-109_99_76756)'
                          />
                          <mask id='path-224-inside-110_99_76756' fill='white'>
                            <path d='M47.1519 89.5117H54.737V97.0969H47.1519V89.5117Z' />
                          </mask>
                          <path
                            d='M47.1519 89.5117H54.737V97.0969H47.1519V89.5117Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M54.737 97.0969V97.5969H55.237V97.0969H54.737ZM54.237 89.5117V97.0969H55.237V89.5117H54.237ZM54.737 96.5969H47.1519V97.5969H54.737V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-224-inside-110_99_76756)'
                          />
                          <mask id='path-226-inside-111_99_76756' fill='white'>
                            <path d='M54.7371 89.5117H62.3222V97.0969H54.7371V89.5117Z' />
                          </mask>
                          <path
                            d='M62.3222 97.0969V97.5969H62.8222V97.0969H62.3222ZM61.8222 89.5117V97.0969H62.8222V89.5117H61.8222ZM62.3222 96.5969H54.7371V97.5969H62.3222V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-226-inside-111_99_76756)'
                          />
                          <mask id='path-228-inside-112_99_76756' fill='white'>
                            <path d='M62.3223 89.5117H69.9075V97.0969H62.3223V89.5117Z' />
                          </mask>
                          <path
                            d='M69.9075 97.0969V97.5969H70.4075V97.0969H69.9075ZM69.4075 89.5117V97.0969H70.4075V89.5117H69.4075ZM69.9075 96.5969H62.3223V97.5969H69.9075V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-228-inside-112_99_76756)'
                          />
                          <mask id='path-230-inside-113_99_76756' fill='white'>
                            <path d='M69.9071 89.5117H77.4923V97.0969H69.9071V89.5117Z' />
                          </mask>
                          <path
                            d='M77.4923 97.0969V97.5969H77.9923V97.0969H77.4923ZM76.9923 89.5117V97.0969H77.9923V89.5117H76.9923ZM77.4923 96.5969H69.9071V97.5969H77.4923V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-230-inside-113_99_76756)'
                          />
                          <mask id='path-232-inside-114_99_76756' fill='white'>
                            <path d='M77.4926 89.5117H85.0777V97.0969H77.4926V89.5117Z' />
                          </mask>
                          <path
                            d='M85.0777 97.0969V97.5969H85.5777V97.0969H85.0777ZM84.5777 89.5117V97.0969H85.5777V89.5117H84.5777ZM85.0777 96.5969H77.4926V97.5969H85.0777V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-232-inside-114_99_76756)'
                          />
                          <mask id='path-234-inside-115_99_76756' fill='white'>
                            <path d='M85.078 89.5117H92.6632V97.0969H85.078V89.5117Z' />
                          </mask>
                          <path
                            d='M92.6632 97.0969V97.5969H93.1632V97.0969H92.6632ZM92.1632 89.5117V97.0969H93.1632V89.5117H92.1632ZM92.6632 96.5969H85.078V97.5969H92.6632V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-234-inside-115_99_76756)'
                          />
                          <mask id='path-236-inside-116_99_76756' fill='white'>
                            <path d='M92.663 89.5117H100.248V97.0969H92.663V89.5117Z' />
                          </mask>
                          <path
                            d='M100.248 97.0969V97.5969H100.748V97.0969H100.248ZM99.7481 89.5117V97.0969H100.748V89.5117H99.7481ZM100.248 96.5969H92.663V97.5969H100.248V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-236-inside-116_99_76756)'
                          />
                          <mask id='path-238-inside-117_99_76756' fill='white'>
                            <path d='M100.248 89.5117H107.833V97.0969H100.248V89.5117Z' />
                          </mask>
                          <path
                            d='M100.248 89.5117H107.833V97.0969H100.248V89.5117Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M107.833 97.0969V97.5969H108.333V97.0969H107.833ZM107.333 89.5117V97.0969H108.333V89.5117H107.333ZM107.833 96.5969H100.248V97.5969H107.833V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-238-inside-117_99_76756)'
                          />
                          <mask id='path-240-inside-118_99_76756' fill='white'>
                            <path d='M107.833 89.5117H115.419V97.0969H107.833V89.5117Z' />
                          </mask>
                          <path
                            d='M115.419 97.0969V97.5969H115.919V97.0969H115.419ZM114.919 89.5117V97.0969H115.919V89.5117H114.919ZM115.419 96.5969H107.833V97.5969H115.419V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-240-inside-118_99_76756)'
                          />
                          <mask id='path-242-inside-119_99_76756' fill='white'>
                            <path d='M115.418 89.5117H123.004V97.0969H115.418V89.5117Z' />
                          </mask>
                          <path
                            d='M123.004 97.0969V97.5969H123.504V97.0969H123.004ZM122.504 89.5117V97.0969H123.504V89.5117H122.504ZM123.004 96.5969H115.418V97.5969H123.004V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-242-inside-119_99_76756)'
                          />
                          <mask id='path-244-inside-120_99_76756' fill='white'>
                            <path d='M123.004 89.5117H130.589V97.0969H123.004V89.5117Z' />
                          </mask>
                          <path
                            d='M130.589 97.0969V97.5969H131.089V97.0969H130.589ZM130.089 89.5117V97.0969H131.089V89.5117H130.089ZM130.589 96.5969H123.004V97.5969H130.589V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-244-inside-120_99_76756)'
                          />
                          <mask id='path-246-inside-121_99_76756' fill='white'>
                            <path d='M130.589 89.5117H138.174V97.0969H130.589V89.5117Z' />
                          </mask>
                          <path
                            d='M138.174 97.0969V97.5969H138.674V97.0969H138.174ZM137.674 89.5117V97.0969H138.674V89.5117H137.674ZM138.174 96.5969H130.589V97.5969H138.174V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-246-inside-121_99_76756)'
                          />
                          <mask id='path-248-inside-122_99_76756' fill='white'>
                            <path d='M138.174 89.5117H145.759V97.0969H138.174V89.5117Z' />
                          </mask>
                          <path
                            d='M145.759 97.0969V97.5969H146.259V97.0969H145.759ZM145.259 89.5117V97.0969H146.259V89.5117H145.259ZM145.759 96.5969H138.174V97.5969H145.759V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-248-inside-122_99_76756)'
                          />
                          <mask id='path-250-inside-123_99_76756' fill='white'>
                            <path d='M145.759 89.5117H153.344V97.0969H145.759V89.5117Z' />
                          </mask>
                          <path
                            d='M153.344 97.0969V97.5969H153.844V97.0969H153.344ZM152.844 89.5117V97.0969H153.844V89.5117H152.844ZM153.344 96.5969H145.759V97.5969H153.344V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-250-inside-123_99_76756)'
                          />
                          <mask id='path-252-inside-124_99_76756' fill='white'>
                            <path d='M153.344 89.5117H160.93V97.0969H153.344V89.5117Z' />
                          </mask>
                          <path
                            d='M160.93 97.0969V97.5969H161.43V97.0969H160.93ZM160.43 89.5117V97.0969H161.43V89.5117H160.43ZM160.93 96.5969H153.344V97.5969H160.93V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-252-inside-124_99_76756)'
                          />
                          <mask id='path-254-inside-125_99_76756' fill='white'>
                            <path d='M160.93 89.5117H168.515V97.0969H160.93V89.5117Z' />
                          </mask>
                          <path
                            d='M168.515 97.0969V97.5969H169.015V97.0969H168.515ZM168.015 89.5117V97.0969H169.015V89.5117H168.015ZM168.515 96.5969H160.93V97.5969H168.515V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-254-inside-125_99_76756)'
                          />
                          <mask id='path-256-inside-126_99_76756' fill='white'>
                            <path d='M168.515 89.5117H176.1V97.0969H168.515V89.5117Z' />
                          </mask>
                          <path
                            d='M168.515 89.5117H176.1V97.0969H168.515V89.5117Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M176.1 97.0969V97.5969H176.6V97.0969H176.1ZM175.6 89.5117V97.0969H176.6V89.5117H175.6ZM176.1 96.5969H168.515V97.5969H176.1V96.5969Z'
                            fill='#D0D5DD'
                            mask='url(#path-256-inside-126_99_76756)'
                          />
                          <mask id='path-258-inside-127_99_76756' fill='white'>
                            <path d='M39.5667 97.0957H47.1518V104.681H39.5667V97.0957Z' />
                          </mask>
                          <path
                            d='M47.1518 104.681V105.181H47.6518V104.681H47.1518ZM46.6518 97.0957V104.681H47.6518V97.0957H46.6518ZM47.1518 104.181H39.5667V105.181H47.1518V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-258-inside-127_99_76756)'
                          />
                          <mask id='path-260-inside-128_99_76756' fill='white'>
                            <path d='M47.1519 97.0957H54.737V104.681H47.1519V97.0957Z' />
                          </mask>
                          <path
                            d='M54.737 104.681V105.181H55.237V104.681H54.737ZM54.237 97.0957V104.681H55.237V97.0957H54.237ZM54.737 104.181H47.1519V105.181H54.737V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-260-inside-128_99_76756)'
                          />
                          <mask id='path-262-inside-129_99_76756' fill='white'>
                            <path d='M54.7371 97.0957H62.3222V104.681H54.7371V97.0957Z' />
                          </mask>
                          <path
                            d='M62.3222 104.681V105.181H62.8222V104.681H62.3222ZM61.8222 97.0957V104.681H62.8222V97.0957H61.8222ZM62.3222 104.181H54.7371V105.181H62.3222V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-262-inside-129_99_76756)'
                          />
                          <mask id='path-264-inside-130_99_76756' fill='white'>
                            <path d='M62.3223 97.0957H69.9075V104.681H62.3223V97.0957Z' />
                          </mask>
                          <path
                            d='M69.9075 104.681V105.181H70.4075V104.681H69.9075ZM69.4075 97.0957V104.681H70.4075V97.0957H69.4075ZM69.9075 104.181H62.3223V105.181H69.9075V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-264-inside-130_99_76756)'
                          />
                          <mask id='path-266-inside-131_99_76756' fill='white'>
                            <path d='M69.9071 97.0957H77.4923V104.681H69.9071V97.0957Z' />
                          </mask>
                          <path
                            d='M77.4923 104.681V105.181H77.9923V104.681H77.4923ZM76.9923 97.0957V104.681H77.9923V97.0957H76.9923ZM77.4923 104.181H69.9071V105.181H77.4923V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-266-inside-131_99_76756)'
                          />
                          <mask id='path-268-inside-132_99_76756' fill='white'>
                            <path d='M77.4926 97.0957H85.0777V104.681H77.4926V97.0957Z' />
                          </mask>
                          <path
                            d='M85.0777 104.681V105.181H85.5777V104.681H85.0777ZM84.5777 97.0957V104.681H85.5777V97.0957H84.5777ZM85.0777 104.181H77.4926V105.181H85.0777V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-268-inside-132_99_76756)'
                          />
                          <mask id='path-270-inside-133_99_76756' fill='white'>
                            <path d='M85.078 97.0957H92.6632V104.681H85.078V97.0957Z' />
                          </mask>
                          <path
                            d='M85.078 97.0957H92.6632V104.681H85.078V97.0957Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M92.6632 104.681V105.181H93.1632V104.681H92.6632ZM92.1632 97.0957V104.681H93.1632V97.0957H92.1632ZM92.6632 104.181H85.078V105.181H92.6632V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-270-inside-133_99_76756)'
                          />
                          <mask id='path-272-inside-134_99_76756' fill='white'>
                            <path d='M92.663 97.0957H100.248V104.681H92.663V97.0957Z' />
                          </mask>
                          <path
                            d='M100.248 104.681V105.181H100.748V104.681H100.248ZM99.7481 97.0957V104.681H100.748V97.0957H99.7481ZM100.248 104.181H92.663V105.181H100.248V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-272-inside-134_99_76756)'
                          />
                          <mask id='path-274-inside-135_99_76756' fill='white'>
                            <path d='M100.248 97.0957H107.833V104.681H100.248V97.0957Z' />
                          </mask>
                          <path
                            d='M107.833 104.681V105.181H108.333V104.681H107.833ZM107.333 97.0957V104.681H108.333V97.0957H107.333ZM107.833 104.181H100.248V105.181H107.833V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-274-inside-135_99_76756)'
                          />
                          <mask id='path-276-inside-136_99_76756' fill='white'>
                            <path d='M107.833 97.0957H115.419V104.681H107.833V97.0957Z' />
                          </mask>
                          <path
                            d='M115.419 104.681V105.181H115.919V104.681H115.419ZM114.919 97.0957V104.681H115.919V97.0957H114.919ZM115.419 104.181H107.833V105.181H115.419V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-276-inside-136_99_76756)'
                          />
                          <mask id='path-278-inside-137_99_76756' fill='white'>
                            <path d='M115.418 97.0957H123.004V104.681H115.418V97.0957Z' />
                          </mask>
                          <path
                            d='M123.004 104.681V105.181H123.504V104.681H123.004ZM122.504 97.0957V104.681H123.504V97.0957H122.504ZM123.004 104.181H115.418V105.181H123.004V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-278-inside-137_99_76756)'
                          />
                          <mask id='path-280-inside-138_99_76756' fill='white'>
                            <path d='M123.004 97.0957H130.589V104.681H123.004V97.0957Z' />
                          </mask>
                          <path
                            d='M130.589 104.681V105.181H131.089V104.681H130.589ZM130.089 97.0957V104.681H131.089V97.0957H130.089ZM130.589 104.181H123.004V105.181H130.589V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-280-inside-138_99_76756)'
                          />
                          <mask id='path-282-inside-139_99_76756' fill='white'>
                            <path d='M130.589 97.0957H138.174V104.681H130.589V97.0957Z' />
                          </mask>
                          <path
                            d='M130.589 97.0957H138.174V104.681H130.589V97.0957Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M138.174 104.681V105.181H138.674V104.681H138.174ZM137.674 97.0957V104.681H138.674V97.0957H137.674ZM138.174 104.181H130.589V105.181H138.174V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-282-inside-139_99_76756)'
                          />
                          <mask id='path-284-inside-140_99_76756' fill='white'>
                            <path d='M138.174 97.0957H145.759V104.681H138.174V97.0957Z' />
                          </mask>
                          <path
                            d='M145.759 104.681V105.181H146.259V104.681H145.759ZM145.259 97.0957V104.681H146.259V97.0957H145.259ZM145.759 104.181H138.174V105.181H145.759V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-284-inside-140_99_76756)'
                          />
                          <mask id='path-286-inside-141_99_76756' fill='white'>
                            <path d='M145.759 97.0957H153.344V104.681H145.759V97.0957Z' />
                          </mask>
                          <path
                            d='M153.344 104.681V105.181H153.844V104.681H153.344ZM152.844 97.0957V104.681H153.844V97.0957H152.844ZM153.344 104.181H145.759V105.181H153.344V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-286-inside-141_99_76756)'
                          />
                          <mask id='path-288-inside-142_99_76756' fill='white'>
                            <path d='M153.344 97.0957H160.93V104.681H153.344V97.0957Z' />
                          </mask>
                          <path
                            d='M160.93 104.681V105.181H161.43V104.681H160.93ZM160.43 97.0957V104.681H161.43V97.0957H160.43ZM160.93 104.181H153.344V105.181H160.93V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-288-inside-142_99_76756)'
                          />
                          <mask id='path-290-inside-143_99_76756' fill='white'>
                            <path d='M160.93 97.0957H168.515V104.681H160.93V97.0957Z' />
                          </mask>
                          <path
                            d='M168.515 104.681V105.181H169.015V104.681H168.515ZM168.015 97.0957V104.681H169.015V97.0957H168.015ZM168.515 104.181H160.93V105.181H168.515V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-290-inside-143_99_76756)'
                          />
                          <mask id='path-292-inside-144_99_76756' fill='white'>
                            <path d='M168.515 97.0957H176.1V104.681H168.515V97.0957Z' />
                          </mask>
                          <path
                            d='M176.1 104.681V105.181H176.6V104.681H176.1ZM175.6 97.0957V104.681H176.6V97.0957H175.6ZM176.1 104.181H168.515V105.181H176.1V104.181Z'
                            fill='#D0D5DD'
                            mask='url(#path-292-inside-144_99_76756)'
                          />
                          <mask id='path-294-inside-145_99_76756' fill='white'>
                            <path d='M39.5667 104.681H47.1518V112.267H39.5667V104.681Z' />
                          </mask>
                          <path
                            d='M47.1518 112.267V112.767H47.6518V112.267H47.1518ZM46.6518 104.681V112.267H47.6518V104.681H46.6518ZM47.1518 111.767H39.5667V112.767H47.1518V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-294-inside-145_99_76756)'
                          />
                          <mask id='path-296-inside-146_99_76756' fill='white'>
                            <path d='M47.1519 104.681H54.737V112.267H47.1519V104.681Z' />
                          </mask>
                          <path
                            d='M54.737 112.267V112.767H55.237V112.267H54.737ZM54.237 104.681V112.267H55.237V104.681H54.237ZM54.737 111.767H47.1519V112.767H54.737V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-296-inside-146_99_76756)'
                          />
                          <mask id='path-298-inside-147_99_76756' fill='white'>
                            <path d='M54.7371 104.681H62.3222V112.267H54.7371V104.681Z' />
                          </mask>
                          <path
                            d='M62.3222 112.267V112.767H62.8222V112.267H62.3222ZM61.8222 104.681V112.267H62.8222V104.681H61.8222ZM62.3222 111.767H54.7371V112.767H62.3222V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-298-inside-147_99_76756)'
                          />
                          <mask id='path-300-inside-148_99_76756' fill='white'>
                            <path d='M62.3223 104.681H69.9075V112.267H62.3223V104.681Z' />
                          </mask>
                          <path
                            d='M69.9075 112.267V112.767H70.4075V112.267H69.9075ZM69.4075 104.681V112.267H70.4075V104.681H69.4075ZM69.9075 111.767H62.3223V112.767H69.9075V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-300-inside-148_99_76756)'
                          />
                          <mask id='path-302-inside-149_99_76756' fill='white'>
                            <path d='M69.9073 104.681H77.4925V112.267H69.9073V104.681Z' />
                          </mask>
                          <path
                            d='M69.9073 104.681H77.4925V112.267H69.9073V104.681Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M77.4925 112.267V112.767H77.9925V112.267H77.4925ZM76.9925 104.681V112.267H77.9925V104.681H76.9925ZM77.4925 111.767H69.9073V112.767H77.4925V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-302-inside-149_99_76756)'
                          />
                          <mask id='path-304-inside-150_99_76756' fill='white'>
                            <path d='M77.4926 104.681H85.0777V112.267H77.4926V104.681Z' />
                          </mask>
                          <path
                            d='M85.0777 112.267V112.767H85.5777V112.267H85.0777ZM84.5777 104.681V112.267H85.5777V104.681H84.5777ZM85.0777 111.767H77.4926V112.767H85.0777V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-304-inside-150_99_76756)'
                          />
                          <mask id='path-306-inside-151_99_76756' fill='white'>
                            <path d='M85.078 104.682H92.6632V112.267H85.078V104.682Z' />
                          </mask>
                          <path
                            d='M92.6632 112.267V112.767H93.1632V112.267H92.6632ZM92.1632 104.682V112.267H93.1632V104.682H92.1632ZM92.6632 111.767H85.078V112.767H92.6632V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-306-inside-151_99_76756)'
                          />
                          <mask id='path-308-inside-152_99_76756' fill='white'>
                            <path d='M92.663 104.681H100.248V112.267H92.663V104.681Z' />
                          </mask>
                          <path
                            d='M100.248 112.267V112.767H100.748V112.267H100.248ZM99.7481 104.681V112.267H100.748V104.681H99.7481ZM100.248 111.767H92.663V112.767H100.248V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-308-inside-152_99_76756)'
                          />
                          <mask id='path-310-inside-153_99_76756' fill='white'>
                            <path d='M100.248 104.681H107.833V112.267H100.248V104.681Z' />
                          </mask>
                          <path
                            d='M107.833 112.267V112.767H108.333V112.267H107.833ZM107.333 104.681V112.267H108.333V104.681H107.333ZM107.833 111.767H100.248V112.767H107.833V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-310-inside-153_99_76756)'
                          />
                          <mask id='path-312-inside-154_99_76756' fill='white'>
                            <path d='M107.833 104.681H115.419V112.267H107.833V104.681Z' />
                          </mask>
                          <path
                            d='M115.419 112.267V112.767H115.919V112.267H115.419ZM114.919 104.681V112.267H115.919V104.681H114.919ZM115.419 111.767H107.833V112.767H115.419V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-312-inside-154_99_76756)'
                          />
                          <mask id='path-314-inside-155_99_76756' fill='white'>
                            <path d='M115.418 104.681H123.004V112.267H115.418V104.681Z' />
                          </mask>
                          <path
                            d='M123.004 112.267V112.767H123.504V112.267H123.004ZM122.504 104.681V112.267H123.504V104.681H122.504ZM123.004 111.767H115.418V112.767H123.004V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-314-inside-155_99_76756)'
                          />
                          <mask id='path-316-inside-156_99_76756' fill='white'>
                            <path d='M123.004 104.681H130.589V112.267H123.004V104.681Z' />
                          </mask>
                          <path
                            d='M130.589 112.267V112.767H131.089V112.267H130.589ZM130.089 104.681V112.267H131.089V104.681H130.089ZM130.589 111.767H123.004V112.767H130.589V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-316-inside-156_99_76756)'
                          />
                          <mask id='path-318-inside-157_99_76756' fill='white'>
                            <path d='M130.589 104.681H138.174V112.267H130.589V104.681Z' />
                          </mask>
                          <path
                            d='M138.174 112.267V112.767H138.674V112.267H138.174ZM137.674 104.681V112.267H138.674V104.681H137.674ZM138.174 111.767H130.589V112.767H138.174V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-318-inside-157_99_76756)'
                          />
                          <mask id='path-320-inside-158_99_76756' fill='white'>
                            <path d='M138.174 104.681H145.759V112.267H138.174V104.681Z' />
                          </mask>
                          <path
                            d='M145.759 112.267V112.767H146.259V112.267H145.759ZM145.259 104.681V112.267H146.259V104.681H145.259ZM145.759 111.767H138.174V112.767H145.759V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-320-inside-158_99_76756)'
                          />
                          <mask id='path-322-inside-159_99_76756' fill='white'>
                            <path d='M145.759 104.681H153.344V112.267H145.759V104.681Z' />
                          </mask>
                          <path
                            d='M153.344 112.267V112.767H153.844V112.267H153.344ZM152.844 104.681V112.267H153.844V104.681H152.844ZM153.344 111.767H145.759V112.767H153.344V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-322-inside-159_99_76756)'
                          />
                          <mask id='path-324-inside-160_99_76756' fill='white'>
                            <path d='M153.344 104.681H160.93V112.267H153.344V104.681Z' />
                          </mask>
                          <path
                            d='M153.344 104.681H160.93V112.267H153.344V104.681Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M160.93 112.267V112.767H161.43V112.267H160.93ZM160.43 104.681V112.267H161.43V104.681H160.43ZM160.93 111.767H153.344V112.767H160.93V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-324-inside-160_99_76756)'
                          />
                          <mask id='path-326-inside-161_99_76756' fill='white'>
                            <path d='M160.93 104.681H168.515V112.267H160.93V104.681Z' />
                          </mask>
                          <path
                            d='M168.515 112.267V112.767H169.015V112.267H168.515ZM168.015 104.681V112.267H169.015V104.681H168.015ZM168.515 111.767H160.93V112.767H168.515V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-326-inside-161_99_76756)'
                          />
                          <mask id='path-328-inside-162_99_76756' fill='white'>
                            <path d='M168.515 104.681H176.1V112.267H168.515V104.681Z' />
                          </mask>
                          <path
                            d='M176.1 112.267V112.767H176.6V112.267H176.1ZM175.6 104.681V112.267H176.6V104.681H175.6ZM176.1 111.767H168.515V112.767H176.1V111.767Z'
                            fill='#D0D5DD'
                            mask='url(#path-328-inside-162_99_76756)'
                          />
                          <mask id='path-330-inside-163_99_76756' fill='white'>
                            <path d='M39.5667 112.268H47.1518V119.853H39.5667V112.268Z' />
                          </mask>
                          <path
                            d='M47.1518 119.853V120.353H47.6518V119.853H47.1518ZM46.6518 112.268V119.853H47.6518V112.268H46.6518ZM47.1518 119.353H39.5667V120.353H47.1518V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-330-inside-163_99_76756)'
                          />
                          <mask id='path-332-inside-164_99_76756' fill='white'>
                            <path d='M47.1519 112.268H54.737V119.853H47.1519V112.268Z' />
                          </mask>
                          <path
                            d='M47.1519 112.268H54.737V119.853H47.1519V112.268Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M54.737 119.853V120.353H55.237V119.853H54.737ZM54.237 112.268V119.853H55.237V112.268H54.237ZM54.737 119.353H47.1519V120.353H54.737V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-332-inside-164_99_76756)'
                          />
                          <mask id='path-334-inside-165_99_76756' fill='white'>
                            <path d='M54.7371 112.268H62.3222V119.853H54.7371V112.268Z' />
                          </mask>
                          <path
                            d='M62.3222 119.853V120.353H62.8222V119.853H62.3222ZM61.8222 112.268V119.853H62.8222V112.268H61.8222ZM62.3222 119.353H54.7371V120.353H62.3222V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-334-inside-165_99_76756)'
                          />
                          <mask id='path-336-inside-166_99_76756' fill='white'>
                            <path d='M62.3223 112.268H69.9075V119.853H62.3223V112.268Z' />
                          </mask>
                          <path
                            d='M69.9075 119.853V120.353H70.4075V119.853H69.9075ZM69.4075 112.268V119.853H70.4075V112.268H69.4075ZM69.9075 119.353H62.3223V120.353H69.9075V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-336-inside-166_99_76756)'
                          />
                          <mask id='path-338-inside-167_99_76756' fill='white'>
                            <path d='M69.9071 112.268H77.4923V119.853H69.9071V112.268Z' />
                          </mask>
                          <path
                            d='M77.4923 119.853V120.353H77.9923V119.853H77.4923ZM76.9923 112.268V119.853H77.9923V112.268H76.9923ZM77.4923 119.353H69.9071V120.353H77.4923V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-338-inside-167_99_76756)'
                          />
                          <mask id='path-340-inside-168_99_76756' fill='white'>
                            <path d='M77.4926 112.268H85.0777V119.853H77.4926V112.268Z' />
                          </mask>
                          <path
                            d='M85.0777 119.853V120.353H85.5777V119.853H85.0777ZM84.5777 112.268V119.853H85.5777V112.268H84.5777ZM85.0777 119.353H77.4926V120.353H85.0777V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-340-inside-168_99_76756)'
                          />
                          <mask id='path-342-inside-169_99_76756' fill='white'>
                            <path d='M85.078 112.268H92.6632V119.853H85.078V112.268Z' />
                          </mask>
                          <path
                            d='M92.6632 119.853V120.353H93.1632V119.853H92.6632ZM92.1632 112.268V119.853H93.1632V112.268H92.1632ZM92.6632 119.353H85.078V120.353H92.6632V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-342-inside-169_99_76756)'
                          />
                          <mask id='path-344-inside-170_99_76756' fill='white'>
                            <path d='M92.663 112.268H100.248V119.853H92.663V112.268Z' />
                          </mask>
                          <path
                            d='M100.248 119.853V120.353H100.748V119.853H100.248ZM99.7481 112.268V119.853H100.748V112.268H99.7481ZM100.248 119.353H92.663V120.353H100.248V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-344-inside-170_99_76756)'
                          />
                          <mask id='path-346-inside-171_99_76756' fill='white'>
                            <path d='M100.248 112.268H107.833V119.853H100.248V112.268Z' />
                          </mask>
                          <path
                            d='M100.248 112.268H107.833V119.853H100.248V112.268Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M107.833 119.853V120.353H108.333V119.853H107.833ZM107.333 112.268V119.853H108.333V112.268H107.333ZM107.833 119.353H100.248V120.353H107.833V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-346-inside-171_99_76756)'
                          />
                          <mask id='path-348-inside-172_99_76756' fill='white'>
                            <path d='M107.833 112.268H115.419V119.853H107.833V112.268Z' />
                          </mask>
                          <path
                            d='M115.419 119.853V120.353H115.919V119.853H115.419ZM114.919 112.268V119.853H115.919V112.268H114.919ZM115.419 119.353H107.833V120.353H115.419V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-348-inside-172_99_76756)'
                          />
                          <mask id='path-350-inside-173_99_76756' fill='white'>
                            <path d='M115.418 112.268H123.004V119.853H115.418V112.268Z' />
                          </mask>
                          <path
                            d='M123.004 119.853V120.353H123.504V119.853H123.004ZM122.504 112.268V119.853H123.504V112.268H122.504ZM123.004 119.353H115.418V120.353H123.004V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-350-inside-173_99_76756)'
                          />
                          <mask id='path-352-inside-174_99_76756' fill='white'>
                            <path d='M123.004 112.268H130.589V119.853H123.004V112.268Z' />
                          </mask>
                          <path
                            d='M130.589 119.853V120.353H131.089V119.853H130.589ZM130.089 112.268V119.853H131.089V112.268H130.089ZM130.589 119.353H123.004V120.353H130.589V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-352-inside-174_99_76756)'
                          />
                          <mask id='path-354-inside-175_99_76756' fill='white'>
                            <path d='M130.589 112.268H138.174V119.853H130.589V112.268Z' />
                          </mask>
                          <path
                            d='M138.174 119.853V120.353H138.674V119.853H138.174ZM137.674 112.268V119.853H138.674V112.268H137.674ZM138.174 119.353H130.589V120.353H138.174V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-354-inside-175_99_76756)'
                          />
                          <mask id='path-356-inside-176_99_76756' fill='white'>
                            <path d='M138.174 112.268H145.759V119.853H138.174V112.268Z' />
                          </mask>
                          <path
                            d='M145.759 119.853V120.353H146.259V119.853H145.759ZM145.259 112.268V119.853H146.259V112.268H145.259ZM145.759 119.353H138.174V120.353H145.759V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-356-inside-176_99_76756)'
                          />
                          <mask id='path-358-inside-177_99_76756' fill='white'>
                            <path d='M145.759 112.268H153.344V119.853H145.759V112.268Z' />
                          </mask>
                          <path
                            d='M153.344 119.853V120.353H153.844V119.853H153.344ZM152.844 112.268V119.853H153.844V112.268H152.844ZM153.344 119.353H145.759V120.353H153.344V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-358-inside-177_99_76756)'
                          />
                          <mask id='path-360-inside-178_99_76756' fill='white'>
                            <path d='M153.344 112.268H160.93V119.853H153.344V112.268Z' />
                          </mask>
                          <path
                            d='M160.93 119.853V120.353H161.43V119.853H160.93ZM160.43 112.268V119.853H161.43V112.268H160.43ZM160.93 119.353H153.344V120.353H160.93V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-360-inside-178_99_76756)'
                          />
                          <mask id='path-362-inside-179_99_76756' fill='white'>
                            <path d='M160.93 112.268H168.515V119.853H160.93V112.268Z' />
                          </mask>
                          <path
                            d='M168.515 119.853V120.353H169.015V119.853H168.515ZM168.015 112.268V119.853H169.015V112.268H168.015ZM168.515 119.353H160.93V120.353H168.515V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-362-inside-179_99_76756)'
                          />
                          <mask id='path-364-inside-180_99_76756' fill='white'>
                            <path d='M168.515 112.268H176.1V119.853H168.515V112.268Z' />
                          </mask>
                          <path
                            d='M176.1 119.853V120.353H176.6V119.853H176.1ZM175.6 112.268V119.853H176.6V112.268H175.6ZM176.1 119.353H168.515V120.353H176.1V119.353Z'
                            fill='#D0D5DD'
                            mask='url(#path-364-inside-180_99_76756)'
                          />
                          <mask id='path-366-inside-181_99_76756' fill='white'>
                            <path d='M39.5667 119.852H47.1518V127.437H39.5667V119.852Z' />
                          </mask>
                          <path
                            d='M47.1518 127.437V127.937H47.6518V127.437H47.1518ZM46.6518 119.852V127.437H47.6518V119.852H46.6518ZM47.1518 126.937H39.5667V127.937H47.1518V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-366-inside-181_99_76756)'
                          />
                          <mask id='path-368-inside-182_99_76756' fill='white'>
                            <path d='M47.1519 119.852H54.737V127.437H47.1519V119.852Z' />
                          </mask>
                          <path
                            d='M54.737 127.437V127.937H55.237V127.437H54.737ZM54.237 119.852V127.437H55.237V119.852H54.237ZM54.737 126.937H47.1519V127.937H54.737V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-368-inside-182_99_76756)'
                          />
                          <mask id='path-370-inside-183_99_76756' fill='white'>
                            <path d='M54.7371 119.852H62.3222V127.437H54.7371V119.852Z' />
                          </mask>
                          <path
                            d='M62.3222 127.437V127.937H62.8222V127.437H62.3222ZM61.8222 119.852V127.437H62.8222V119.852H61.8222ZM62.3222 126.937H54.7371V127.937H62.3222V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-370-inside-183_99_76756)'
                          />
                          <mask id='path-372-inside-184_99_76756' fill='white'>
                            <path d='M62.3223 119.852H69.9075V127.437H62.3223V119.852Z' />
                          </mask>
                          <path
                            d='M69.9075 127.437V127.937H70.4075V127.437H69.9075ZM69.4075 119.852V127.437H70.4075V119.852H69.4075ZM69.9075 126.937H62.3223V127.937H69.9075V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-372-inside-184_99_76756)'
                          />
                          <mask id='path-374-inside-185_99_76756' fill='white'>
                            <path d='M69.9071 119.852H77.4923V127.437H69.9071V119.852Z' />
                          </mask>
                          <path
                            d='M77.4923 127.437V127.937H77.9923V127.437H77.4923ZM76.9923 119.852V127.437H77.9923V119.852H76.9923ZM77.4923 126.937H69.9071V127.937H77.4923V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-374-inside-185_99_76756)'
                          />
                          <mask id='path-376-inside-186_99_76756' fill='white'>
                            <path d='M77.4926 119.852H85.0777V127.437H77.4926V119.852Z' />
                          </mask>
                          <path
                            d='M85.0777 127.437V127.937H85.5777V127.437H85.0777ZM84.5777 119.852V127.437H85.5777V119.852H84.5777ZM85.0777 126.937H77.4926V127.937H85.0777V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-376-inside-186_99_76756)'
                          />
                          <mask id='path-378-inside-187_99_76756' fill='white'>
                            <path d='M85.078 119.852H92.6632V127.437H85.078V119.852Z' />
                          </mask>
                          <path
                            d='M85.078 119.852H92.6632V127.437H85.078V119.852Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M92.6632 127.437V127.937H93.1632V127.437H92.6632ZM92.1632 119.852V127.437H93.1632V119.852H92.1632ZM92.6632 126.937H85.078V127.937H92.6632V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-378-inside-187_99_76756)'
                          />
                          <mask id='path-380-inside-188_99_76756' fill='white'>
                            <path d='M92.663 119.852H100.248V127.437H92.663V119.852Z' />
                          </mask>
                          <path
                            d='M100.248 127.437V127.937H100.748V127.437H100.248ZM99.7481 119.852V127.437H100.748V119.852H99.7481ZM100.248 126.937H92.663V127.937H100.248V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-380-inside-188_99_76756)'
                          />
                          <mask id='path-382-inside-189_99_76756' fill='white'>
                            <path d='M100.248 119.852H107.833V127.437H100.248V119.852Z' />
                          </mask>
                          <path
                            d='M107.833 127.437V127.937H108.333V127.437H107.833ZM107.333 119.852V127.437H108.333V119.852H107.333ZM107.833 126.937H100.248V127.937H107.833V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-382-inside-189_99_76756)'
                          />
                          <mask id='path-384-inside-190_99_76756' fill='white'>
                            <path d='M107.833 119.852H115.419V127.437H107.833V119.852Z' />
                          </mask>
                          <path
                            d='M115.419 127.437V127.937H115.919V127.437H115.419ZM114.919 119.852V127.437H115.919V119.852H114.919ZM115.419 126.937H107.833V127.937H115.419V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-384-inside-190_99_76756)'
                          />
                          <mask id='path-386-inside-191_99_76756' fill='white'>
                            <path d='M115.418 119.852H123.004V127.437H115.418V119.852Z' />
                          </mask>
                          <path
                            d='M123.004 127.437V127.937H123.504V127.437H123.004ZM122.504 119.852V127.437H123.504V119.852H122.504ZM123.004 126.937H115.418V127.937H123.004V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-386-inside-191_99_76756)'
                          />
                          <mask id='path-388-inside-192_99_76756' fill='white'>
                            <path d='M123.004 119.852H130.589V127.437H123.004V119.852Z' />
                          </mask>
                          <path
                            d='M130.589 127.437V127.937H131.089V127.437H130.589ZM130.089 119.852V127.437H131.089V119.852H130.089ZM130.589 126.937H123.004V127.937H130.589V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-388-inside-192_99_76756)'
                          />
                          <mask id='path-390-inside-193_99_76756' fill='white'>
                            <path d='M130.589 119.852H138.174V127.437H130.589V119.852Z' />
                          </mask>
                          <path
                            d='M138.174 127.437V127.937H138.674V127.437H138.174ZM137.674 119.852V127.437H138.674V119.852H137.674ZM138.174 126.937H130.589V127.937H138.174V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-390-inside-193_99_76756)'
                          />
                          <mask id='path-392-inside-194_99_76756' fill='white'>
                            <path d='M138.174 119.852H145.759V127.437H138.174V119.852Z' />
                          </mask>
                          <path
                            d='M138.174 119.852H145.759V127.437H138.174V119.852Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M145.759 127.437V127.937H146.259V127.437H145.759ZM145.259 119.852V127.437H146.259V119.852H145.259ZM145.759 126.937H138.174V127.937H145.759V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-392-inside-194_99_76756)'
                          />
                          <mask id='path-394-inside-195_99_76756' fill='white'>
                            <path d='M145.759 119.852H153.344V127.437H145.759V119.852Z' />
                          </mask>
                          <path
                            d='M153.344 127.437V127.937H153.844V127.437H153.344ZM152.844 119.852V127.437H153.844V119.852H152.844ZM153.344 126.937H145.759V127.937H153.344V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-394-inside-195_99_76756)'
                          />
                          <mask id='path-396-inside-196_99_76756' fill='white'>
                            <path d='M153.344 119.852H160.93V127.437H153.344V119.852Z' />
                          </mask>
                          <path
                            d='M160.93 127.437V127.937H161.43V127.437H160.93ZM160.43 119.852V127.437H161.43V119.852H160.43ZM160.93 126.937H153.344V127.937H160.93V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-396-inside-196_99_76756)'
                          />
                          <mask id='path-398-inside-197_99_76756' fill='white'>
                            <path d='M160.93 119.852H168.515V127.437H160.93V119.852Z' />
                          </mask>
                          <path
                            d='M168.515 127.437V127.937H169.015V127.437H168.515ZM168.015 119.852V127.437H169.015V119.852H168.015ZM168.515 126.937H160.93V127.937H168.515V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-398-inside-197_99_76756)'
                          />
                          <mask id='path-400-inside-198_99_76756' fill='white'>
                            <path d='M168.515 119.852H176.1V127.437H168.515V119.852Z' />
                          </mask>
                          <path
                            d='M176.1 127.437V127.937H176.6V127.437H176.1ZM175.6 119.852V127.437H176.6V119.852H175.6ZM176.1 126.937H168.515V127.937H176.1V126.937Z'
                            fill='#D0D5DD'
                            mask='url(#path-400-inside-198_99_76756)'
                          />
                          <mask id='path-402-inside-199_99_76756' fill='white'>
                            <path d='M39.5667 127.438H47.1518V135.023H39.5667V127.438Z' />
                          </mask>
                          <path
                            d='M39.5667 127.438H47.1518V135.023H39.5667V127.438Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M47.1518 135.023V135.523H47.6518V135.023H47.1518ZM46.6518 127.438V135.023H47.6518V127.438H46.6518ZM47.1518 134.523H39.5667V135.523H47.1518V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-402-inside-199_99_76756)'
                          />
                          <mask id='path-404-inside-200_99_76756' fill='white'>
                            <path d='M47.1519 127.438H54.737V135.023H47.1519V127.438Z' />
                          </mask>
                          <path
                            d='M54.737 135.023V135.523H55.237V135.023H54.737ZM54.237 127.438V135.023H55.237V127.438H54.237ZM54.737 134.523H47.1519V135.523H54.737V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-404-inside-200_99_76756)'
                          />
                          <mask id='path-406-inside-201_99_76756' fill='white'>
                            <path d='M54.7371 127.438H62.3222V135.023H54.7371V127.438Z' />
                          </mask>
                          <path
                            d='M62.3222 135.023V135.523H62.8222V135.023H62.3222ZM61.8222 127.438V135.023H62.8222V127.438H61.8222ZM62.3222 134.523H54.7371V135.523H62.3222V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-406-inside-201_99_76756)'
                          />
                          <mask id='path-408-inside-202_99_76756' fill='white'>
                            <path d='M62.3223 127.438H69.9075V135.023H62.3223V127.438Z' />
                          </mask>
                          <path
                            d='M69.9075 135.023V135.523H70.4075V135.023H69.9075ZM69.4075 127.438V135.023H70.4075V127.438H69.4075ZM69.9075 134.523H62.3223V135.523H69.9075V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-408-inside-202_99_76756)'
                          />
                          <mask id='path-410-inside-203_99_76756' fill='white'>
                            <path d='M69.9071 127.438H77.4923V135.023H69.9071V127.438Z' />
                          </mask>
                          <path
                            d='M77.4923 135.023V135.523H77.9923V135.023H77.4923ZM76.9923 127.438V135.023H77.9923V127.438H76.9923ZM77.4923 134.523H69.9071V135.523H77.4923V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-410-inside-203_99_76756)'
                          />
                          <mask id='path-412-inside-204_99_76756' fill='white'>
                            <path d='M77.4926 127.438H85.0777V135.023H77.4926V127.438Z' />
                          </mask>
                          <path
                            d='M85.0777 135.023V135.523H85.5777V135.023H85.0777ZM84.5777 127.438V135.023H85.5777V127.438H84.5777ZM85.0777 134.523H77.4926V135.523H85.0777V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-412-inside-204_99_76756)'
                          />
                          <mask id='path-414-inside-205_99_76756' fill='white'>
                            <path d='M85.078 127.438H92.6632V135.023H85.078V127.438Z' />
                          </mask>
                          <path
                            d='M92.6632 135.023V135.523H93.1632V135.023H92.6632ZM92.1632 127.438V135.023H93.1632V127.438H92.1632ZM92.6632 134.523H85.078V135.523H92.6632V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-414-inside-205_99_76756)'
                          />
                          <mask id='path-416-inside-206_99_76756' fill='white'>
                            <path d='M92.663 127.438H100.248V135.023H92.663V127.438Z' />
                          </mask>
                          <path
                            d='M100.248 135.023V135.523H100.748V135.023H100.248ZM99.7481 127.438V135.023H100.748V127.438H99.7481ZM100.248 134.523H92.663V135.523H100.248V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-416-inside-206_99_76756)'
                          />
                          <mask id='path-418-inside-207_99_76756' fill='white'>
                            <path d='M100.248 127.438H107.833V135.023H100.248V127.438Z' />
                          </mask>
                          <path
                            d='M107.833 135.023V135.523H108.333V135.023H107.833ZM107.333 127.438V135.023H108.333V127.438H107.333ZM107.833 134.523H100.248V135.523H107.833V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-418-inside-207_99_76756)'
                          />
                          <mask id='path-420-inside-208_99_76756' fill='white'>
                            <path d='M107.833 127.438H115.419V135.023H107.833V127.438Z' />
                          </mask>
                          <path
                            d='M115.419 135.023V135.523H115.919V135.023H115.419ZM114.919 127.438V135.023H115.919V127.438H114.919ZM115.419 134.523H107.833V135.523H115.419V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-420-inside-208_99_76756)'
                          />
                          <mask id='path-422-inside-209_99_76756' fill='white'>
                            <path d='M115.418 127.438H123.004V135.023H115.418V127.438Z' />
                          </mask>
                          <path
                            d='M115.418 127.438H123.004V135.023H115.418V127.438Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M123.004 135.023V135.523H123.504V135.023H123.004ZM122.504 127.438V135.023H123.504V127.438H122.504ZM123.004 134.523H115.418V135.523H123.004V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-422-inside-209_99_76756)'
                          />
                          <mask id='path-424-inside-210_99_76756' fill='white'>
                            <path d='M123.004 127.438H130.589V135.023H123.004V127.438Z' />
                          </mask>
                          <path
                            d='M130.589 135.023V135.523H131.089V135.023H130.589ZM130.089 127.438V135.023H131.089V127.438H130.089ZM130.589 134.523H123.004V135.523H130.589V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-424-inside-210_99_76756)'
                          />
                          <mask id='path-426-inside-211_99_76756' fill='white'>
                            <path d='M130.589 127.438H138.174V135.023H130.589V127.438Z' />
                          </mask>
                          <path
                            d='M138.174 135.023V135.523H138.674V135.023H138.174ZM137.674 127.438V135.023H138.674V127.438H137.674ZM138.174 134.523H130.589V135.523H138.174V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-426-inside-211_99_76756)'
                          />
                          <mask id='path-428-inside-212_99_76756' fill='white'>
                            <path d='M138.174 127.438H145.759V135.023H138.174V127.438Z' />
                          </mask>
                          <path
                            d='M145.759 135.023V135.523H146.259V135.023H145.759ZM145.259 127.438V135.023H146.259V127.438H145.259ZM145.759 134.523H138.174V135.523H145.759V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-428-inside-212_99_76756)'
                          />
                          <mask id='path-430-inside-213_99_76756' fill='white'>
                            <path d='M145.759 127.438H153.344V135.023H145.759V127.438Z' />
                          </mask>
                          <path
                            d='M153.344 135.023V135.523H153.844V135.023H153.344ZM152.844 127.438V135.023H153.844V127.438H152.844ZM153.344 134.523H145.759V135.523H153.344V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-430-inside-213_99_76756)'
                          />
                          <mask id='path-432-inside-214_99_76756' fill='white'>
                            <path d='M153.344 127.438H160.93V135.023H153.344V127.438Z' />
                          </mask>
                          <path
                            d='M153.344 127.438H160.93V135.023H153.344V127.438Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M160.93 135.023V135.523H161.43V135.023H160.93ZM160.43 127.438V135.023H161.43V127.438H160.43ZM160.93 134.523H153.344V135.523H160.93V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-432-inside-214_99_76756)'
                          />
                          <mask id='path-434-inside-215_99_76756' fill='white'>
                            <path d='M160.93 127.438H168.515V135.023H160.93V127.438Z' />
                          </mask>
                          <path
                            d='M168.515 135.023V135.523H169.015V135.023H168.515ZM168.015 127.438V135.023H169.015V127.438H168.015ZM168.515 134.523H160.93V135.523H168.515V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-434-inside-215_99_76756)'
                          />
                          <mask id='path-436-inside-216_99_76756' fill='white'>
                            <path d='M168.515 127.438H176.1V135.023H168.515V127.438Z' />
                          </mask>
                          <path
                            d='M176.1 135.023V135.523H176.6V135.023H176.1ZM175.6 127.438V135.023H176.6V127.438H175.6ZM176.1 134.523H168.515V135.523H176.1V134.523Z'
                            fill='#D0D5DD'
                            mask='url(#path-436-inside-216_99_76756)'
                          />
                          <mask id='path-438-inside-217_99_76756' fill='white'>
                            <path d='M39.5667 135.021H47.1518V142.607H39.5667V135.021Z' />
                          </mask>
                          <path
                            d='M47.1518 142.607V143.107H47.6518V142.607H47.1518ZM46.6518 135.021V142.607H47.6518V135.021H46.6518ZM47.1518 142.107H39.5667V143.107H47.1518V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-438-inside-217_99_76756)'
                          />
                          <mask id='path-440-inside-218_99_76756' fill='white'>
                            <path d='M47.1519 135.021H54.737V142.607H47.1519V135.021Z' />
                          </mask>
                          <path
                            d='M54.737 142.607V143.107H55.237V142.607H54.737ZM54.237 135.021V142.607H55.237V135.021H54.237ZM54.737 142.107H47.1519V143.107H54.737V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-440-inside-218_99_76756)'
                          />
                          <mask id='path-442-inside-219_99_76756' fill='white'>
                            <path d='M54.7371 135.021H62.3222V142.607H54.7371V135.021Z' />
                          </mask>
                          <path
                            d='M62.3222 142.607V143.107H62.8222V142.607H62.3222ZM61.8222 135.021V142.607H62.8222V135.021H61.8222ZM62.3222 142.107H54.7371V143.107H62.3222V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-442-inside-219_99_76756)'
                          />
                          <mask id='path-444-inside-220_99_76756' fill='white'>
                            <path d='M62.3223 135.021H69.9075V142.607H62.3223V135.021Z' />
                          </mask>
                          <path
                            d='M69.9075 142.607V143.107H70.4075V142.607H69.9075ZM69.4075 135.021V142.607H70.4075V135.021H69.4075ZM69.9075 142.107H62.3223V143.107H69.9075V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-444-inside-220_99_76756)'
                          />
                          <mask id='path-446-inside-221_99_76756' fill='white'>
                            <path d='M69.9071 135.021H77.4923V142.607H69.9071V135.021Z' />
                          </mask>
                          <path
                            d='M77.4923 142.607V143.107H77.9923V142.607H77.4923ZM76.9923 135.021V142.607H77.9923V135.021H76.9923ZM77.4923 142.107H69.9071V143.107H77.4923V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-446-inside-221_99_76756)'
                          />
                          <mask id='path-448-inside-222_99_76756' fill='white'>
                            <path d='M77.4926 135.021H85.0777V142.607H77.4926V135.021Z' />
                          </mask>
                          <path
                            d='M85.0777 142.607V143.107H85.5777V142.607H85.0777ZM84.5777 135.021V142.607H85.5777V135.021H84.5777ZM85.0777 142.107H77.4926V143.107H85.0777V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-448-inside-222_99_76756)'
                          />
                          <mask id='path-450-inside-223_99_76756' fill='white'>
                            <path d='M85.078 135.021H92.6632V142.607H85.078V135.021Z' />
                          </mask>
                          <path
                            d='M85.078 135.021H92.6632V142.607H85.078V135.021Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M92.6632 142.607V143.107H93.1632V142.607H92.6632ZM92.1632 135.021V142.607H93.1632V135.021H92.1632ZM92.6632 142.107H85.078V143.107H92.6632V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-450-inside-223_99_76756)'
                          />
                          <mask id='path-452-inside-224_99_76756' fill='white'>
                            <path d='M92.663 135.021H100.248V142.607H92.663V135.021Z' />
                          </mask>
                          <path
                            d='M100.248 142.607V143.107H100.748V142.607H100.248ZM99.7481 135.021V142.607H100.748V135.021H99.7481ZM100.248 142.107H92.663V143.107H100.248V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-452-inside-224_99_76756)'
                          />
                          <mask id='path-454-inside-225_99_76756' fill='white'>
                            <path d='M100.248 135.021H107.833V142.607H100.248V135.021Z' />
                          </mask>
                          <path
                            d='M107.833 142.607V143.107H108.333V142.607H107.833ZM107.333 135.021V142.607H108.333V135.021H107.333ZM107.833 142.107H100.248V143.107H107.833V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-454-inside-225_99_76756)'
                          />
                          <mask id='path-456-inside-226_99_76756' fill='white'>
                            <path d='M107.833 135.021H115.419V142.607H107.833V135.021Z' />
                          </mask>
                          <path
                            d='M115.419 142.607V143.107H115.919V142.607H115.419ZM114.919 135.021V142.607H115.919V135.021H114.919ZM115.419 142.107H107.833V143.107H115.419V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-456-inside-226_99_76756)'
                          />
                          <mask id='path-458-inside-227_99_76756' fill='white'>
                            <path d='M115.418 135.021H123.004V142.607H115.418V135.021Z' />
                          </mask>
                          <path
                            d='M123.004 142.607V143.107H123.504V142.607H123.004ZM122.504 135.021V142.607H123.504V135.021H122.504ZM123.004 142.107H115.418V143.107H123.004V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-458-inside-227_99_76756)'
                          />
                          <mask id='path-460-inside-228_99_76756' fill='white'>
                            <path d='M123.004 135.021H130.589V142.607H123.004V135.021Z' />
                          </mask>
                          <path
                            d='M130.589 142.607V143.107H131.089V142.607H130.589ZM130.089 135.021V142.607H131.089V135.021H130.089ZM130.589 142.107H123.004V143.107H130.589V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-460-inside-228_99_76756)'
                          />
                          <mask id='path-462-inside-229_99_76756' fill='white'>
                            <path d='M130.589 135.021H138.174V142.607H130.589V135.021Z' />
                          </mask>
                          <path
                            d='M138.174 142.607V143.107H138.674V142.607H138.174ZM137.674 135.021V142.607H138.674V135.021H137.674ZM138.174 142.107H130.589V143.107H138.174V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-462-inside-229_99_76756)'
                          />
                          <mask id='path-464-inside-230_99_76756' fill='white'>
                            <path d='M138.174 135.021H145.759V142.607H138.174V135.021Z' />
                          </mask>
                          <path
                            d='M145.759 142.607V143.107H146.259V142.607H145.759ZM145.259 135.021V142.607H146.259V135.021H145.259ZM145.759 142.107H138.174V143.107H145.759V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-464-inside-230_99_76756)'
                          />
                          <mask id='path-466-inside-231_99_76756' fill='white'>
                            <path d='M145.759 135.021H153.344V142.607H145.759V135.021Z' />
                          </mask>
                          <path
                            d='M153.344 142.607V143.107H153.844V142.607H153.344ZM152.844 135.021V142.607H153.844V135.021H152.844ZM153.344 142.107H145.759V143.107H153.344V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-466-inside-231_99_76756)'
                          />
                          <mask id='path-468-inside-232_99_76756' fill='white'>
                            <path d='M153.344 135.021H160.93V142.607H153.344V135.021Z' />
                          </mask>
                          <path
                            d='M160.93 142.607V143.107H161.43V142.607H160.93ZM160.43 135.021V142.607H161.43V135.021H160.43ZM160.93 142.107H153.344V143.107H160.93V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-468-inside-232_99_76756)'
                          />
                          <mask id='path-470-inside-233_99_76756' fill='white'>
                            <path d='M160.93 135.021H168.515V142.607H160.93V135.021Z' />
                          </mask>
                          <path
                            d='M168.515 142.607V143.107H169.015V142.607H168.515ZM168.015 135.021V142.607H169.015V135.021H168.015ZM168.515 142.107H160.93V143.107H168.515V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-470-inside-233_99_76756)'
                          />
                          <mask id='path-472-inside-234_99_76756' fill='white'>
                            <path d='M168.515 135.021H176.1V142.607H168.515V135.021Z' />
                          </mask>
                          <path
                            d='M176.1 142.607V143.107H176.6V142.607H176.1ZM175.6 135.021V142.607H176.6V135.021H175.6ZM176.1 142.107H168.515V143.107H176.1V142.107Z'
                            fill='#D0D5DD'
                            mask='url(#path-472-inside-234_99_76756)'
                          />
                          <mask id='path-474-inside-235_99_76756' fill='white'>
                            <path d='M39.5667 142.607H47.1518V150.193H39.5667V142.607Z' />
                          </mask>
                          <path
                            d='M47.1518 150.193V150.693H47.6518V150.193H47.1518ZM46.6518 142.607V150.193H47.6518V142.607H46.6518ZM47.1518 149.693H39.5667V150.693H47.1518V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-474-inside-235_99_76756)'
                          />
                          <mask id='path-476-inside-236_99_76756' fill='white'>
                            <path d='M47.1519 142.607H54.737V150.193H47.1519V142.607Z' />
                          </mask>
                          <path
                            d='M54.737 150.193V150.693H55.237V150.193H54.737ZM54.237 142.607V150.193H55.237V142.607H54.237ZM54.737 149.693H47.1519V150.693H54.737V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-476-inside-236_99_76756)'
                          />
                          <mask id='path-478-inside-237_99_76756' fill='white'>
                            <path d='M54.7371 142.607H62.3222V150.193H54.7371V142.607Z' />
                          </mask>
                          <path
                            d='M62.3222 150.193V150.693H62.8222V150.193H62.3222ZM61.8222 142.607V150.193H62.8222V142.607H61.8222ZM62.3222 149.693H54.7371V150.693H62.3222V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-478-inside-237_99_76756)'
                          />
                          <mask id='path-480-inside-238_99_76756' fill='white'>
                            <path d='M62.3223 142.607H69.9075V150.193H62.3223V142.607Z' />
                          </mask>
                          <path
                            d='M62.3223 142.607H69.9075V150.193H62.3223V142.607Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M69.9075 150.193V150.693H70.4075V150.193H69.9075ZM69.4075 142.607V150.193H70.4075V142.607H69.4075ZM69.9075 149.693H62.3223V150.693H69.9075V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-480-inside-238_99_76756)'
                          />
                          <mask id='path-482-inside-239_99_76756' fill='white'>
                            <path d='M69.9073 142.607H77.4925V150.193H69.9073V142.607Z' />
                          </mask>
                          <path
                            d='M77.4925 150.193V150.693H77.9925V150.193H77.4925ZM76.9925 142.607V150.193H77.9925V142.607H76.9925ZM77.4925 149.693H69.9073V150.693H77.4925V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-482-inside-239_99_76756)'
                          />
                          <mask id='path-484-inside-240_99_76756' fill='white'>
                            <path d='M77.4926 142.607H85.0777V150.193H77.4926V142.607Z' />
                          </mask>
                          <path
                            d='M85.0777 150.193V150.693H85.5777V150.193H85.0777ZM84.5777 142.607V150.193H85.5777V142.607H84.5777ZM85.0777 149.693H77.4926V150.693H85.0777V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-484-inside-240_99_76756)'
                          />
                          <mask id='path-486-inside-241_99_76756' fill='white'>
                            <path d='M85.078 142.607H92.6632V150.193H85.078V142.607Z' />
                          </mask>
                          <path
                            d='M92.6632 150.193V150.693H93.1632V150.193H92.6632ZM92.1632 142.607V150.193H93.1632V142.607H92.1632ZM92.6632 149.693H85.078V150.693H92.6632V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-486-inside-241_99_76756)'
                          />
                          <mask id='path-488-inside-242_99_76756' fill='white'>
                            <path d='M92.663 142.607H100.248V150.193H92.663V142.607Z' />
                          </mask>
                          <path
                            d='M100.248 150.193V150.693H100.748V150.193H100.248ZM99.7481 142.607V150.193H100.748V142.607H99.7481ZM100.248 149.693H92.663V150.693H100.248V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-488-inside-242_99_76756)'
                          />
                          <mask id='path-490-inside-243_99_76756' fill='white'>
                            <path d='M100.248 142.607H107.833V150.193H100.248V142.607Z' />
                          </mask>
                          <path
                            d='M107.833 150.193V150.693H108.333V150.193H107.833ZM107.333 142.607V150.193H108.333V142.607H107.333ZM107.833 149.693H100.248V150.693H107.833V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-490-inside-243_99_76756)'
                          />
                          <mask id='path-492-inside-244_99_76756' fill='white'>
                            <path d='M107.833 142.607H115.419V150.193H107.833V142.607Z' />
                          </mask>
                          <path
                            d='M115.419 150.193V150.693H115.919V150.193H115.419ZM114.919 142.607V150.193H115.919V142.607H114.919ZM115.419 149.693H107.833V150.693H115.419V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-492-inside-244_99_76756)'
                          />
                          <mask id='path-494-inside-245_99_76756' fill='white'>
                            <path d='M115.418 142.607H123.004V150.193H115.418V142.607Z' />
                          </mask>
                          <path
                            d='M123.004 150.193V150.693H123.504V150.193H123.004ZM122.504 142.607V150.193H123.504V142.607H122.504ZM123.004 149.693H115.418V150.693H123.004V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-494-inside-245_99_76756)'
                          />
                          <mask id='path-496-inside-246_99_76756' fill='white'>
                            <path d='M123.004 142.607H130.589V150.193H123.004V142.607Z' />
                          </mask>
                          <path
                            d='M130.589 150.193V150.693H131.089V150.193H130.589ZM130.089 142.607V150.193H131.089V142.607H130.089ZM130.589 149.693H123.004V150.693H130.589V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-496-inside-246_99_76756)'
                          />
                          <mask id='path-498-inside-247_99_76756' fill='white'>
                            <path d='M130.589 142.607H138.174V150.193H130.589V142.607Z' />
                          </mask>
                          <path
                            d='M130.589 142.607H138.174V150.193H130.589V142.607Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M138.174 150.193V150.693H138.674V150.193H138.174ZM137.674 142.607V150.193H138.674V142.607H137.674ZM138.174 149.693H130.589V150.693H138.174V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-498-inside-247_99_76756)'
                          />
                          <mask id='path-500-inside-248_99_76756' fill='white'>
                            <path d='M138.174 142.607H145.759V150.193H138.174V142.607Z' />
                          </mask>
                          <path
                            d='M145.759 150.193V150.693H146.259V150.193H145.759ZM145.259 142.607V150.193H146.259V142.607H145.259ZM145.759 149.693H138.174V150.693H145.759V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-500-inside-248_99_76756)'
                          />
                          <mask id='path-502-inside-249_99_76756' fill='white'>
                            <path d='M145.759 142.607H153.344V150.193H145.759V142.607Z' />
                          </mask>
                          <path
                            d='M153.344 150.193V150.693H153.844V150.193H153.344ZM152.844 142.607V150.193H153.844V142.607H152.844ZM153.344 149.693H145.759V150.693H153.344V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-502-inside-249_99_76756)'
                          />
                          <mask id='path-504-inside-250_99_76756' fill='white'>
                            <path d='M153.344 142.607H160.93V150.193H153.344V142.607Z' />
                          </mask>
                          <path
                            d='M160.93 150.193V150.693H161.43V150.193H160.93ZM160.43 142.607V150.193H161.43V142.607H160.43ZM160.93 149.693H153.344V150.693H160.93V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-504-inside-250_99_76756)'
                          />
                          <mask id='path-506-inside-251_99_76756' fill='white'>
                            <path d='M160.93 142.607H168.515V150.193H160.93V142.607Z' />
                          </mask>
                          <path
                            d='M168.515 150.193V150.693H169.015V150.193H168.515ZM168.015 142.607V150.193H169.015V142.607H168.015ZM168.515 149.693H160.93V150.693H168.515V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-506-inside-251_99_76756)'
                          />
                          <mask id='path-508-inside-252_99_76756' fill='white'>
                            <path d='M168.515 142.607H176.1V150.193H168.515V142.607Z' />
                          </mask>
                          <path
                            d='M176.1 150.193V150.693H176.6V150.193H176.1ZM175.6 142.607V150.193H176.6V142.607H175.6ZM176.1 149.693H168.515V150.693H176.1V149.693Z'
                            fill='#D0D5DD'
                            mask='url(#path-508-inside-252_99_76756)'
                          />
                          <mask id='path-510-inside-253_99_76756' fill='white'>
                            <path d='M39.5667 150.193H47.1518V157.779H39.5667V150.193Z' />
                          </mask>
                          <path
                            d='M39.5667 150.193H47.1518V157.779H39.5667V150.193Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M47.1518 157.779V158.279H47.6518V157.779H47.1518ZM46.6518 150.193V157.779H47.6518V150.193H46.6518ZM47.1518 157.279H39.5667V158.279H47.1518V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-510-inside-253_99_76756)'
                          />
                          <mask id='path-512-inside-254_99_76756' fill='white'>
                            <path d='M47.1519 150.193H54.737V157.779H47.1519V150.193Z' />
                          </mask>
                          <path
                            d='M54.737 157.779V158.279H55.237V157.779H54.737ZM54.237 150.193V157.779H55.237V150.193H54.237ZM54.737 157.279H47.1519V158.279H54.737V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-512-inside-254_99_76756)'
                          />
                          <mask id='path-514-inside-255_99_76756' fill='white'>
                            <path d='M54.7371 150.193H62.3222V157.779H54.7371V150.193Z' />
                          </mask>
                          <path
                            d='M62.3222 157.779V158.279H62.8222V157.779H62.3222ZM61.8222 150.193V157.779H62.8222V150.193H61.8222ZM62.3222 157.279H54.7371V158.279H62.3222V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-514-inside-255_99_76756)'
                          />
                          <mask id='path-516-inside-256_99_76756' fill='white'>
                            <path d='M62.3223 150.193H69.9075V157.779H62.3223V150.193Z' />
                          </mask>
                          <path
                            d='M69.9075 157.779V158.279H70.4075V157.779H69.9075ZM69.4075 150.193V157.779H70.4075V150.193H69.4075ZM69.9075 157.279H62.3223V158.279H69.9075V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-516-inside-256_99_76756)'
                          />
                          <mask id='path-518-inside-257_99_76756' fill='white'>
                            <path d='M69.9071 150.193H77.4923V157.779H69.9071V150.193Z' />
                          </mask>
                          <path
                            d='M77.4923 157.779V158.279H77.9923V157.779H77.4923ZM76.9923 150.193V157.779H77.9923V150.193H76.9923ZM77.4923 157.279H69.9071V158.279H77.4923V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-518-inside-257_99_76756)'
                          />
                          <mask id='path-520-inside-258_99_76756' fill='white'>
                            <path d='M77.4926 150.193H85.0777V157.779H77.4926V150.193Z' />
                          </mask>
                          <path
                            d='M85.0777 157.779V158.279H85.5777V157.779H85.0777ZM84.5777 150.193V157.779H85.5777V150.193H84.5777ZM85.0777 157.279H77.4926V158.279H85.0777V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-520-inside-258_99_76756)'
                          />
                          <mask id='path-522-inside-259_99_76756' fill='white'>
                            <path d='M85.078 150.193H92.6632V157.779H85.078V150.193Z' />
                          </mask>
                          <path
                            d='M92.6632 157.779V158.279H93.1632V157.779H92.6632ZM92.1632 150.193V157.779H93.1632V150.193H92.1632ZM92.6632 157.279H85.078V158.279H92.6632V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-522-inside-259_99_76756)'
                          />
                          <mask id='path-524-inside-260_99_76756' fill='white'>
                            <path d='M92.663 150.193H100.248V157.779H92.663V150.193Z' />
                          </mask>
                          <path
                            d='M100.248 157.779V158.279H100.748V157.779H100.248ZM99.7481 150.193V157.779H100.748V150.193H99.7481ZM100.248 157.279H92.663V158.279H100.248V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-524-inside-260_99_76756)'
                          />
                          <mask id='path-526-inside-261_99_76756' fill='white'>
                            <path d='M100.248 150.193H107.833V157.779H100.248V150.193Z' />
                          </mask>
                          <path
                            d='M107.833 157.779V158.279H108.333V157.779H107.833ZM107.333 150.193V157.779H108.333V150.193H107.333ZM107.833 157.279H100.248V158.279H107.833V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-526-inside-261_99_76756)'
                          />
                          <mask id='path-528-inside-262_99_76756' fill='white'>
                            <path d='M107.833 150.193H115.419V157.779H107.833V150.193Z' />
                          </mask>
                          <path
                            d='M107.833 150.193H115.419V157.779H107.833V150.193Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M115.419 157.779V158.279H115.919V157.779H115.419ZM114.919 150.193V157.779H115.919V150.193H114.919ZM115.419 157.279H107.833V158.279H115.419V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-528-inside-262_99_76756)'
                          />
                          <mask id='path-530-inside-263_99_76756' fill='white'>
                            <path d='M115.418 150.193H123.004V157.779H115.418V150.193Z' />
                          </mask>
                          <path
                            d='M123.004 157.779V158.279H123.504V157.779H123.004ZM122.504 150.193V157.779H123.504V150.193H122.504ZM123.004 157.279H115.418V158.279H123.004V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-530-inside-263_99_76756)'
                          />
                          <mask id='path-532-inside-264_99_76756' fill='white'>
                            <path d='M123.004 150.193H130.589V157.779H123.004V150.193Z' />
                          </mask>
                          <path
                            d='M130.589 157.779V158.279H131.089V157.779H130.589ZM130.089 150.193V157.779H131.089V150.193H130.089ZM130.589 157.279H123.004V158.279H130.589V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-532-inside-264_99_76756)'
                          />
                          <mask id='path-534-inside-265_99_76756' fill='white'>
                            <path d='M130.589 150.193H138.174V157.779H130.589V150.193Z' />
                          </mask>
                          <path
                            d='M138.174 157.779V158.279H138.674V157.779H138.174ZM137.674 150.193V157.779H138.674V150.193H137.674ZM138.174 157.279H130.589V158.279H138.174V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-534-inside-265_99_76756)'
                          />
                          <mask id='path-536-inside-266_99_76756' fill='white'>
                            <path d='M138.174 150.193H145.759V157.779H138.174V150.193Z' />
                          </mask>
                          <path
                            d='M145.759 157.779V158.279H146.259V157.779H145.759ZM145.259 150.193V157.779H146.259V150.193H145.259ZM145.759 157.279H138.174V158.279H145.759V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-536-inside-266_99_76756)'
                          />
                          <mask id='path-538-inside-267_99_76756' fill='white'>
                            <path d='M145.759 150.193H153.344V157.779H145.759V150.193Z' />
                          </mask>
                          <path
                            d='M153.344 157.779V158.279H153.844V157.779H153.344ZM152.844 150.193V157.779H153.844V150.193H152.844ZM153.344 157.279H145.759V158.279H153.344V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-538-inside-267_99_76756)'
                          />
                          <mask id='path-540-inside-268_99_76756' fill='white'>
                            <path d='M153.344 150.193H160.93V157.779H153.344V150.193Z' />
                          </mask>
                          <path
                            d='M160.93 157.779V158.279H161.43V157.779H160.93ZM160.43 150.193V157.779H161.43V150.193H160.43ZM160.93 157.279H153.344V158.279H160.93V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-540-inside-268_99_76756)'
                          />
                          <mask id='path-542-inside-269_99_76756' fill='white'>
                            <path d='M160.93 150.193H168.515V157.779H160.93V150.193Z' />
                          </mask>
                          <path
                            d='M160.93 150.193H168.515V157.779H160.93V150.193Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M168.515 157.779V158.279H169.015V157.779H168.515ZM168.015 150.193V157.779H169.015V150.193H168.015ZM168.515 157.279H160.93V158.279H168.515V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-542-inside-269_99_76756)'
                          />
                          <mask id='path-544-inside-270_99_76756' fill='white'>
                            <path d='M168.515 150.193H176.1V157.779H168.515V150.193Z' />
                          </mask>
                          <path
                            d='M176.1 157.779V158.279H176.6V157.779H176.1ZM175.6 150.193V157.779H176.6V150.193H175.6ZM176.1 157.279H168.515V158.279H176.1V157.279Z'
                            fill='#D0D5DD'
                            mask='url(#path-544-inside-270_99_76756)'
                          />
                          <mask id='path-546-inside-271_99_76756' fill='white'>
                            <path d='M39.5667 157.777H47.1518V165.363H39.5667V157.777Z' />
                          </mask>
                          <path
                            d='M47.1518 165.363V165.863H47.6518V165.363H47.1518ZM46.6518 157.777V165.363H47.6518V157.777H46.6518ZM47.1518 164.863H39.5667V165.863H47.1518V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-546-inside-271_99_76756)'
                          />
                          <mask id='path-548-inside-272_99_76756' fill='white'>
                            <path d='M47.1519 157.777H54.737V165.363H47.1519V157.777Z' />
                          </mask>
                          <path
                            d='M54.737 165.363V165.863H55.237V165.363H54.737ZM54.237 157.777V165.363H55.237V157.777H54.237ZM54.737 164.863H47.1519V165.863H54.737V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-548-inside-272_99_76756)'
                          />
                          <mask id='path-550-inside-273_99_76756' fill='white'>
                            <path d='M54.7371 157.777H62.3222V165.363H54.7371V157.777Z' />
                          </mask>
                          <path
                            d='M62.3222 165.363V165.863H62.8222V165.363H62.3222ZM61.8222 157.777V165.363H62.8222V157.777H61.8222ZM62.3222 164.863H54.7371V165.863H62.3222V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-550-inside-273_99_76756)'
                          />
                          <mask id='path-552-inside-274_99_76756' fill='white'>
                            <path d='M62.3223 157.777H69.9075V165.363H62.3223V157.777Z' />
                          </mask>
                          <path
                            d='M69.9075 165.363V165.863H70.4075V165.363H69.9075ZM69.4075 157.777V165.363H70.4075V157.777H69.4075ZM69.9075 164.863H62.3223V165.863H69.9075V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-552-inside-274_99_76756)'
                          />
                          <mask id='path-554-inside-275_99_76756' fill='white'>
                            <path d='M69.9071 157.777H77.4923V165.363H69.9071V157.777Z' />
                          </mask>
                          <path
                            d='M77.4923 165.363V165.863H77.9923V165.363H77.4923ZM76.9923 157.777V165.363H77.9923V157.777H76.9923ZM77.4923 164.863H69.9071V165.863H77.4923V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-554-inside-275_99_76756)'
                          />
                          <mask id='path-556-inside-276_99_76756' fill='white'>
                            <path d='M77.4926 157.777H85.0777V165.363H77.4926V157.777Z' />
                          </mask>
                          <path
                            d='M77.4926 157.777H85.0777V165.363H77.4926V157.777Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M85.0777 165.363V165.863H85.5777V165.363H85.0777ZM84.5777 157.777V165.363H85.5777V157.777H84.5777ZM85.0777 164.863H77.4926V165.863H85.0777V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-556-inside-276_99_76756)'
                          />
                          <mask id='path-558-inside-277_99_76756' fill='white'>
                            <path d='M85.078 157.777H92.6632V165.363H85.078V157.777Z' />
                          </mask>
                          <path
                            d='M92.6632 165.363V165.863H93.1632V165.363H92.6632ZM92.1632 157.777V165.363H93.1632V157.777H92.1632ZM92.6632 164.863H85.078V165.863H92.6632V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-558-inside-277_99_76756)'
                          />
                          <mask id='path-560-inside-278_99_76756' fill='white'>
                            <path d='M92.663 157.777H100.248V165.363H92.663V157.777Z' />
                          </mask>
                          <path
                            d='M100.248 165.363V165.863H100.748V165.363H100.248ZM99.7481 157.777V165.363H100.748V157.777H99.7481ZM100.248 164.863H92.663V165.863H100.248V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-560-inside-278_99_76756)'
                          />
                          <mask id='path-562-inside-279_99_76756' fill='white'>
                            <path d='M100.248 157.777H107.833V165.363H100.248V157.777Z' />
                          </mask>
                          <path
                            d='M107.833 165.363V165.863H108.333V165.363H107.833ZM107.333 157.777V165.363H108.333V157.777H107.333ZM107.833 164.863H100.248V165.863H107.833V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-562-inside-279_99_76756)'
                          />
                          <mask id='path-564-inside-280_99_76756' fill='white'>
                            <path d='M107.833 157.777H115.419V165.363H107.833V157.777Z' />
                          </mask>
                          <path
                            d='M115.419 165.363V165.863H115.919V165.363H115.419ZM114.919 157.777V165.363H115.919V157.777H114.919ZM115.419 164.863H107.833V165.863H115.419V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-564-inside-280_99_76756)'
                          />
                          <mask id='path-566-inside-281_99_76756' fill='white'>
                            <path d='M115.418 157.777H123.004V165.363H115.418V157.777Z' />
                          </mask>
                          <path
                            d='M123.004 165.363V165.863H123.504V165.363H123.004ZM122.504 157.777V165.363H123.504V157.777H122.504ZM123.004 164.863H115.418V165.863H123.004V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-566-inside-281_99_76756)'
                          />
                          <mask id='path-568-inside-282_99_76756' fill='white'>
                            <path d='M123.004 157.777H130.589V165.363H123.004V157.777Z' />
                          </mask>
                          <path
                            d='M130.589 165.363V165.863H131.089V165.363H130.589ZM130.089 157.777V165.363H131.089V157.777H130.089ZM130.589 164.863H123.004V165.863H130.589V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-568-inside-282_99_76756)'
                          />
                          <mask id='path-570-inside-283_99_76756' fill='white'>
                            <path d='M130.589 157.777H138.174V165.363H130.589V157.777Z' />
                          </mask>
                          <path
                            d='M138.174 165.363V165.863H138.674V165.363H138.174ZM137.674 157.777V165.363H138.674V157.777H137.674ZM138.174 164.863H130.589V165.863H138.174V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-570-inside-283_99_76756)'
                          />
                          <mask id='path-572-inside-284_99_76756' fill='white'>
                            <path d='M138.174 157.777H145.759V165.363H138.174V157.777Z' />
                          </mask>
                          <path
                            d='M138.174 157.777H145.759V165.363H138.174V157.777Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M145.759 165.363V165.863H146.259V165.363H145.759ZM145.259 157.777V165.363H146.259V157.777H145.259ZM145.759 164.863H138.174V165.863H145.759V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-572-inside-284_99_76756)'
                          />
                          <mask id='path-574-inside-285_99_76756' fill='white'>
                            <path d='M145.759 157.777H153.344V165.363H145.759V157.777Z' />
                          </mask>
                          <path
                            d='M153.344 165.363V165.863H153.844V165.363H153.344ZM152.844 157.777V165.363H153.844V157.777H152.844ZM153.344 164.863H145.759V165.863H153.344V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-574-inside-285_99_76756)'
                          />
                          <mask id='path-576-inside-286_99_76756' fill='white'>
                            <path d='M153.344 157.777H160.93V165.363H153.344V157.777Z' />
                          </mask>
                          <path
                            d='M160.93 165.363V165.863H161.43V165.363H160.93ZM160.43 157.777V165.363H161.43V157.777H160.43ZM160.93 164.863H153.344V165.863H160.93V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-576-inside-286_99_76756)'
                          />
                          <mask id='path-578-inside-287_99_76756' fill='white'>
                            <path d='M160.93 157.777H168.515V165.363H160.93V157.777Z' />
                          </mask>
                          <path
                            d='M168.515 165.363V165.863H169.015V165.363H168.515ZM168.015 157.777V165.363H169.015V157.777H168.015ZM168.515 164.863H160.93V165.863H168.515V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-578-inside-287_99_76756)'
                          />
                          <mask id='path-580-inside-288_99_76756' fill='white'>
                            <path d='M168.515 157.777H176.1V165.363H168.515V157.777Z' />
                          </mask>
                          <path
                            d='M176.1 165.363V165.863H176.6V165.363H176.1ZM175.6 157.777V165.363H176.6V157.777H175.6ZM176.1 164.863H168.515V165.863H176.1V164.863Z'
                            fill='#D0D5DD'
                            mask='url(#path-580-inside-288_99_76756)'
                          />
                          <mask id='path-582-inside-289_99_76756' fill='white'>
                            <path d='M39.5667 165.363H47.1518V172.948H39.5667V165.363Z' />
                          </mask>
                          <path
                            d='M47.1518 172.948V173.448H47.6518V172.948H47.1518ZM46.6518 165.363V172.948H47.6518V165.363H46.6518ZM47.1518 172.448H39.5667V173.448H47.1518V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-582-inside-289_99_76756)'
                          />
                          <mask id='path-584-inside-290_99_76756' fill='white'>
                            <path d='M47.1519 165.363H54.737V172.948H47.1519V165.363Z' />
                          </mask>
                          <path
                            d='M47.1519 165.363H54.737V172.948H47.1519V165.363Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M54.737 172.948V173.448H55.237V172.948H54.737ZM54.237 165.363V172.948H55.237V165.363H54.237ZM54.737 172.448H47.1519V173.448H54.737V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-584-inside-290_99_76756)'
                          />
                          <mask id='path-586-inside-291_99_76756' fill='white'>
                            <path d='M54.7371 165.363H62.3222V172.948H54.7371V165.363Z' />
                          </mask>
                          <path
                            d='M62.3222 172.948V173.448H62.8222V172.948H62.3222ZM61.8222 165.363V172.948H62.8222V165.363H61.8222ZM62.3222 172.448H54.7371V173.448H62.3222V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-586-inside-291_99_76756)'
                          />
                          <mask id='path-588-inside-292_99_76756' fill='white'>
                            <path d='M62.3223 165.363H69.9075V172.948H62.3223V165.363Z' />
                          </mask>
                          <path
                            d='M69.9075 172.948V173.448H70.4075V172.948H69.9075ZM69.4075 165.363V172.948H70.4075V165.363H69.4075ZM69.9075 172.448H62.3223V173.448H69.9075V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-588-inside-292_99_76756)'
                          />
                          <mask id='path-590-inside-293_99_76756' fill='white'>
                            <path d='M69.9071 165.363H77.4923V172.948H69.9071V165.363Z' />
                          </mask>
                          <path
                            d='M77.4923 172.948V173.448H77.9923V172.948H77.4923ZM76.9923 165.363V172.948H77.9923V165.363H76.9923ZM77.4923 172.448H69.9071V173.448H77.4923V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-590-inside-293_99_76756)'
                          />
                          <mask id='path-592-inside-294_99_76756' fill='white'>
                            <path d='M77.4926 165.363H85.0777V172.948H77.4926V165.363Z' />
                          </mask>
                          <path
                            d='M85.0777 172.948V173.448H85.5777V172.948H85.0777ZM84.5777 165.363V172.948H85.5777V165.363H84.5777ZM85.0777 172.448H77.4926V173.448H85.0777V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-592-inside-294_99_76756)'
                          />
                          <mask id='path-594-inside-295_99_76756' fill='white'>
                            <path d='M85.078 165.363H92.6632V172.948H85.078V165.363Z' />
                          </mask>
                          <path
                            d='M92.6632 172.948V173.448H93.1632V172.948H92.6632ZM92.1632 165.363V172.948H93.1632V165.363H92.1632ZM92.6632 172.448H85.078V173.448H92.6632V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-594-inside-295_99_76756)'
                          />
                          <mask id='path-596-inside-296_99_76756' fill='white'>
                            <path d='M92.663 165.363H100.248V172.948H92.663V165.363Z' />
                          </mask>
                          <path
                            d='M100.248 172.948V173.448H100.748V172.948H100.248ZM99.7481 165.363V172.948H100.748V165.363H99.7481ZM100.248 172.448H92.663V173.448H100.248V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-596-inside-296_99_76756)'
                          />
                          <mask id='path-598-inside-297_99_76756' fill='white'>
                            <path d='M100.248 165.363H107.833V172.948H100.248V165.363Z' />
                          </mask>
                          <path
                            d='M107.833 172.948V173.448H108.333V172.948H107.833ZM107.333 165.363V172.948H108.333V165.363H107.333ZM107.833 172.448H100.248V173.448H107.833V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-598-inside-297_99_76756)'
                          />
                          <mask id='path-600-inside-298_99_76756' fill='white'>
                            <path d='M107.833 165.363H115.419V172.948H107.833V165.363Z' />
                          </mask>
                          <path
                            d='M115.419 172.948V173.448H115.919V172.948H115.419ZM114.919 165.363V172.948H115.919V165.363H114.919ZM115.419 172.448H107.833V173.448H115.419V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-600-inside-298_99_76756)'
                          />
                          <mask id='path-602-inside-299_99_76756' fill='white'>
                            <path d='M115.418 165.363H123.004V172.948H115.418V165.363Z' />
                          </mask>
                          <path
                            d='M123.004 172.948V173.448H123.504V172.948H123.004ZM122.504 165.363V172.948H123.504V165.363H122.504ZM123.004 172.448H115.418V173.448H123.004V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-602-inside-299_99_76756)'
                          />
                          <mask id='path-604-inside-300_99_76756' fill='white'>
                            <path d='M123.004 165.363H130.589V172.948H123.004V165.363Z' />
                          </mask>
                          <path
                            d='M130.589 172.948V173.448H131.089V172.948H130.589ZM130.089 165.363V172.948H131.089V165.363H130.089ZM130.589 172.448H123.004V173.448H130.589V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-604-inside-300_99_76756)'
                          />
                          <mask id='path-606-inside-301_99_76756' fill='white'>
                            <path d='M130.589 165.363H138.174V172.948H130.589V165.363Z' />
                          </mask>
                          <path
                            d='M138.174 172.948V173.448H138.674V172.948H138.174ZM137.674 165.363V172.948H138.674V165.363H137.674ZM138.174 172.448H130.589V173.448H138.174V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-606-inside-301_99_76756)'
                          />
                          <mask id='path-608-inside-302_99_76756' fill='white'>
                            <path d='M138.174 165.363H145.759V172.948H138.174V165.363Z' />
                          </mask>
                          <path
                            d='M145.759 172.948V173.448H146.259V172.948H145.759ZM145.259 165.363V172.948H146.259V165.363H145.259ZM145.759 172.448H138.174V173.448H145.759V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-608-inside-302_99_76756)'
                          />
                          <mask id='path-610-inside-303_99_76756' fill='white'>
                            <path d='M145.759 165.363H153.344V172.948H145.759V165.363Z' />
                          </mask>
                          <path
                            d='M153.344 172.948V173.448H153.844V172.948H153.344ZM152.844 165.363V172.948H153.844V165.363H152.844ZM153.344 172.448H145.759V173.448H153.344V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-610-inside-303_99_76756)'
                          />
                          <mask id='path-612-inside-304_99_76756' fill='white'>
                            <path d='M153.344 165.363H160.93V172.948H153.344V165.363Z' />
                          </mask>
                          <path
                            d='M160.93 172.948V173.448H161.43V172.948H160.93ZM160.43 165.363V172.948H161.43V165.363H160.43ZM160.93 172.448H153.344V173.448H160.93V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-612-inside-304_99_76756)'
                          />
                          <mask id='path-614-inside-305_99_76756' fill='white'>
                            <path d='M160.93 165.363H168.515V172.948H160.93V165.363Z' />
                          </mask>
                          <path
                            d='M160.93 165.363H168.515V172.948H160.93V165.363Z'
                            fill='#F9FAFB'
                          />
                          <path
                            d='M168.515 172.948V173.448H169.015V172.948H168.515ZM168.015 165.363V172.948H169.015V165.363H168.015ZM168.515 172.448H160.93V173.448H168.515V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-614-inside-305_99_76756)'
                          />
                          <mask id='path-616-inside-306_99_76756' fill='white'>
                            <path d='M168.515 165.363H176.1V172.948H168.515V165.363Z' />
                          </mask>
                          <path
                            d='M176.1 172.948V173.448H176.6V172.948H176.1ZM175.6 165.363V172.948H176.6V165.363H175.6ZM176.1 172.448H168.515V173.448H176.1V172.448Z'
                            fill='#D0D5DD'
                            mask='url(#path-616-inside-306_99_76756)'
                          />
                        </g>
                        <rect
                          x='-5.44446'
                          y='44.5'
                          width='226.556'
                          height='165.874'
                          stroke='#D0D5DD'
                        />
                      </g>
                      <g filter='url(#filter1_bdd_99_76756)'>
                        <rect
                          x='82'
                          y='82'
                          width='52'
                          height='52'
                          rx='26'
                          fill='white'
                          shape-rendering='crispEdges'
                        />
                        <rect
                          x='82'
                          y='82'
                          width='52'
                          height='52'
                          rx='26'
                          fill='url(#paint1_linear_99_76756)'
                          shape-rendering='crispEdges'
                        />
                        <rect
                          x='82.5'
                          y='82.5'
                          width='51'
                          height='51'
                          rx='25.5'
                          stroke='url(#paint2_linear_99_76756)'
                          stroke-opacity='0.3'
                          shape-rendering='crispEdges'
                        />
                        <path
                          d='M102.107 102.107L96.2149 96.2149M96.2149 119.785L102.108 113.893M113.893 113.893L119.785 119.785M119.785 96.2148L113.893 102.107M124.667 108C124.667 117.205 117.205 124.667 108 124.667C98.7953 124.667 91.3334 117.205 91.3334 108C91.3334 98.7952 98.7953 91.3333 108 91.3333C117.205 91.3333 124.667 98.7952 124.667 108ZM116.333 108C116.333 112.602 112.602 116.333 108 116.333C103.398 116.333 99.6667 112.602 99.6667 108C99.6667 103.398 103.398 99.6666 108 99.6666C112.602 99.6666 116.333 103.398 116.333 108Z'
                          stroke='#D0D5DD'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                      <defs>
                        <filter
                          id='filter0_f_99_76756'
                          x='0'
                          y='0'
                          width='216'
                          height='216'
                          filterUnits='userSpaceOnUse'
                          color-interpolation-filters='sRGB'
                        >
                          <feFlood
                            flood-opacity='0'
                            result='BackgroundImageFix'
                          />
                          <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='BackgroundImageFix'
                            result='shape'
                          />
                          <feGaussianBlur
                            stdDeviation='40'
                            result='effect1_foregroundBlur_99_76756'
                          />
                        </filter>
                        <filter
                          id='filter1_bdd_99_76756'
                          x='62'
                          y='62'
                          width='92'
                          height='92'
                          filterUnits='userSpaceOnUse'
                          color-interpolation-filters='sRGB'
                        >
                          <feFlood
                            flood-opacity='0'
                            result='BackgroundImageFix'
                          />
                          <feGaussianBlur
                            in='BackgroundImageFix'
                            stdDeviation='10'
                          />
                          <feComposite
                            in2='SourceAlpha'
                            operator='in'
                            result='effect1_backgroundBlur_99_76756'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feMorphology
                            radius='2'
                            operator='erode'
                            in='SourceAlpha'
                            result='effect2_dropShadow_99_76756'
                          />
                          <feOffset dy='2' />
                          <feGaussianBlur stdDeviation='2' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.03 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='effect1_backgroundBlur_99_76756'
                            result='effect2_dropShadow_99_76756'
                          />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feMorphology
                            radius='4'
                            operator='erode'
                            in='SourceAlpha'
                            result='effect3_dropShadow_99_76756'
                          />
                          <feOffset dy='6' />
                          <feGaussianBlur stdDeviation='6' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.08 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='effect2_dropShadow_99_76756'
                            result='effect3_dropShadow_99_76756'
                          />
                          <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect3_dropShadow_99_76756'
                            result='shape'
                          />
                        </filter>
                        <radialGradient
                          id='paint0_radial_99_76756'
                          cx='0'
                          cy='0'
                          r='1'
                          gradientUnits='userSpaceOnUse'
                          gradientTransform='translate(108 108) rotate(90) scale(64)'
                        >
                          <stop stop-color='#D9D9D9' />
                          <stop
                            offset='1'
                            stop-color='#D9D9D9'
                            stop-opacity='0'
                          />
                        </radialGradient>
                        <linearGradient
                          id='paint1_linear_99_76756'
                          x1='108'
                          y1='82'
                          x2='108'
                          y2='134'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stop-color='#F6F6F6' />
                          <stop
                            offset='0.385412'
                            stop-color='#F2F4F7'
                            stop-opacity='0'
                          />
                        </linearGradient>
                        <linearGradient
                          id='paint2_linear_99_76756'
                          x1='108'
                          y1='82'
                          x2='108'
                          y2='134'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop offset='0.0468566' stop-color='#98A2B3' />
                          <stop
                            offset='1'
                            stop-color='#98A2B3'
                            stop-opacity='0.3'
                          />
                        </linearGradient>
                        <clipPath id='clip0_99_76756'>
                          <rect
                            x='-5.94446'
                            y='44'
                            width='227.556'
                            height='166.874'
                            fill='white'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2 className='text-lg font-medium text-gray-900'>
                    No dApps found
                  </h2>
                  <p className='text-sm text-gray-600 mt-1 w-full max-w-96 text-center'>
                    You currently don’t have any dApps connected to your wallet.
                    As you connect dApps, their details will be shown here.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value='positions'>
              <div className='max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full'>
                <div>
                  <PositionsTable
                    wallets={wallets}
                    networkAccounts={networkAccounts}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value='nfts'>
              <div className='max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full'></div>
            </TabsContent>
          </Tabs>
        </div>
        <WalletConnect
          isOpen={isWalletConnectOpen}
          onClose={handleCloseModal}
          onConnect={handleOpenConnectTodApp} 
        />
        <ConnectTodApp
          isOpen={isConnectTodAppOpen}
          onClose={() => setIsConnectTodAppOpen(false)}
          networkAccountName={networkAccountName} 
          balance={balance} 
          addNotification={addNotification}
          networkAccountImage={networkAccountImage}
          sourcePage='/uniapp/wealth/wallet1/polynetwork' // Pass the determined source page
        />
      </TimeProvider>
    </main>
  );
}

export default BitcoinOne;
