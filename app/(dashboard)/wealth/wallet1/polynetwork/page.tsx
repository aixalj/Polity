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
if (currentPath === '/wealth/wallet1/btcnetwork') {
  networkAccountName = 'Bitcoin (428f...47d2)'; // Example name for BTC network
  balance = '$657,318.88 (211.9 BTC)'; // Example balance for BTC network
  networkAccountImage = BTCdApps; // Set the image for BTC
} else if (currentPath === '/wealth/wallet1/polynetwork') {
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
                  setNotifications((prev) =>
                    prev.filter((_, i) => i !== index)
                  );
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
                      src={MATIC}
                      alt={'Polygon'}
                      width={48}
                      height={48}
                    />

                    <div>
                      <h1 className='text-2xl font-medium leading-tight'>
                        Network Account Name
                      </h1>{' '}
                      <p className='text-sm text-gray-700'>
                        Polygon (0x8f...47d2)
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
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_82_25224)'>
                        <rect
                          width='48'
                          height='48'
                          rx='7'
                          fill='url(#paint0_linear_82_25224)'
                        />
                        <g clip-path='url(#clip1_82_25224)'>
                          <rect
                            width='48'
                            height='48'
                            rx='6'
                            fill='url(#paint1_linear_82_25224)'
                          />
                          <mask
                            id='mask0_82_25224'
                            maskUnits='userSpaceOnUse'
                            x='0'
                            y='0'
                            width='48'
                            height='48'
                          >
                            <path
                              d='M11.9998 23.7556C18.4923 23.7556 23.7555 18.4924 23.7555 11.9999C23.7555 5.50746 18.4923 0.244263 11.9998 0.244263C5.50734 0.244263 0.244141 5.50746 0.244141 11.9999C0.244141 18.4924 5.50734 23.7556 11.9998 23.7556Z'
                              fill='white'
                            />
                          </mask>
                          <g mask='url(#mask0_82_25224)'>
                            <path
                              d='M24.8685 -0.868896H-0.869141V24.8687H24.8685V-0.868896Z'
                              fill='url(#paint2_linear_82_25224)'
                            />
                          </g>
                          <path
                            d='M15.4 14.5368L18.7259 12.6163C18.9021 12.5145 19.011 12.3254 19.011 12.1219V8.28142C19.011 8.07839 18.9016 7.88878 18.7259 7.78702L15.4 5.86655C15.2238 5.76479 15.0054 5.76527 14.8293 5.86655L11.5033 7.78702C11.3272 7.88878 11.2182 8.07839 11.2182 8.28142V15.1449L8.8859 16.4913L6.55358 15.1449V12.4517L8.8859 11.1053L10.4243 11.9933V10.1865L9.17102 9.46318C9.08462 9.41326 8.98574 9.38686 8.88542 9.38686C8.7851 9.38686 8.68622 9.41326 8.6003 9.46318L5.27438 11.3837C5.09822 11.4854 4.98926 11.6745 4.98926 11.8781V15.7185C4.98926 15.9216 5.0987 16.1112 5.27438 16.2129L8.6003 18.1334C8.77598 18.2347 8.99486 18.2347 9.17102 18.1334L12.4969 16.2134C12.6731 16.1117 12.7821 15.9221 12.7821 15.719V8.85551L12.8243 8.83151L15.1144 7.50911L17.4467 8.85551V11.5488L15.1144 12.8952L13.5784 12.0081V13.8149L14.8293 14.5373C15.0054 14.6385 15.2238 14.6385 15.4 14.5373V14.5368Z'
                            fill='white'
                          />
                        </g>
                      </g>
                      <rect
                        x='0.375'
                        y='0.375'
                        width='23.25'
                        height='23.25'
                        rx='6.625'
                        stroke='#D0D5DD'
                        stroke-width='0.75'
                      />
                      <defs>
                        <linearGradient
                          id='paint0_linear_82_25224'
                          x1='-4.38598'
                          y1='1.97255'
                          x2='20.3902'
                          y2='17.1344'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stop-color='#A229C5' />
                          <stop offset='1' stop-color='#7B3FE4' />
                        </linearGradient>
                        <linearGradient
                          id='paint1_linear_82_25224'
                          x1='-4.38598'
                          y1='1.97255'
                          x2='20.3902'
                          y2='17.1344'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stop-color='#A229C5' />
                          <stop offset='1' stop-color='#7B3FE4' />
                        </linearGradient>
                        <linearGradient
                          id='paint2_linear_82_25224'
                          x1='-5.57266'
                          y1='1.24646'
                          x2='20.9973'
                          y2='17.506'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stop-color='#A229C5' />
                          <stop offset='1' stop-color='#7B3FE4' />
                        </linearGradient>
                        <clipPath id='clip0_82_25224'>
                          <rect width='48' height='48' rx='7' fill='white' />
                        </clipPath>
                        <clipPath id='clip1_82_25224'>
                          <rect width='48' height='48' rx='6' fill='white' />
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
          sourcePage='wealth/wallet1/polynetwork' // Pass the determined source page
        />
      </TimeProvider>
    </main>
  );
}

export default BitcoinOne;
