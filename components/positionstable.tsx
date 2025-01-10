'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useState } from 'react';

import {
  LayersThree01,
  AlignRight01,
  AlignLeft01,
  Drop,
  ChevronDownDouble,
  Gift01,
} from '@untitled-ui/icons-react';

interface Positi {
  Position: string;
  Value: number;
  Asset?: string;
  Amount?: number;
  Yield: number;
  RewardsEarned: number;
  LockupPeriod?: string;
}

interface NetworkAccount {
  positions: {
    DApp: string;
    TotalValue: number;
    Positions: Positi[];
  }[];
}

interface Wallet {
  id: string;
  wallet_id: string;
  wallet_name: string;
  allocation: number;
  return: number;
  value: number;
}

const PositionIcons = {
  Staking: (
    <div className='w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center'>
      <LayersThree01 className='w-5 h-5 text-gray-500' />
    </div>
  ),
  Lending: (
    <div className='w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center'>
      <AlignRight01 className='w-5 h-5 text-gray-500' />
    </div>
  ),
  Borrowing: (
    <div className='w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center'>
      <AlignLeft01 className='w-5 h-5 text-gray-500' />
    </div>
  ),
  Deposits: (
    <div className='w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center'>
      <ChevronDownDouble className='w-5 h-5 text-gray-500' />
    </div>
  ),
  'Liquidity Pools': (
    <div className='w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center'>
      <Drop className='w-5 h-5 text-gray-500' />
    </div>
  ),
};

const PositionsTable = ({
  networkAccounts,
  wallets,
}: {
  networkAccounts: NetworkAccount[];
  wallets: Wallet[];
}) => {
  const [openWalletId, setOpenWalletId] = useState<string | null>(null);

  return (
    <div className='relative w-full gap-3 flex flex-col'>
      {networkAccounts?.map((account) =>
        account.positions?.map((position) => (
          <div key={position.DApp}>
            <div className='pl-4 py-4 relative flex justify-between w-full'>
              <div className='w-full flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center gap-2'>
                  <Image
                    src={`/icons/dApps/${position.DApp}.svg`}
                    alt={position.DApp}
                    className='rounded-full border border-gray-200 bg-gray-50'
                    width={40}
                    height={40}
                  />
                  <h2 className='w-full text-2xl'>{position.DApp}</h2>
                </div>
                <div className='w-48 px-6 flex-none items-start justify-start'>
                  <p className='text-sm text-gray-600'>Total Value</p>
                  {position.TotalValue.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </div>
              </div>
            </div>

            <div className='w-full flex flex-col gap-1'>
              <div className='w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs'>
                <div className='w-9 flex-none'></div>
                <div className='w-full px-6 py-3'>Position</div>
                <div className='w-48 flex-none px-6 py-3'>Value</div>
              </div>

              {/* Position rows */}
              {position.Positions.map((positi) => (
                <Collapsible
                  key={positi.Position}
                  className='w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm'
                >
                  <CollapsibleTrigger
                    className='w-full'
                    onClick={() =>
                      setOpenWalletId(
                        openWalletId === positi.Position
                          ? null
                          : positi.Position
                      )
                    }
                  >
                    <div className='w-full flex text-left text-gray-900'>
                      <div className='w-9 flex-none h-16 flex items-center justify-center'>
                        <svg
                          className={`mx-auto transition-transform duration-200 ${
                            openWalletId === positi.Position ? 'rotate-180' : ''
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
                              openWalletId === positi.Position
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
                              openWalletId === positi.Position
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
                      <div className='w-full px-6 py-3 flex items-center gap-2 h-16'>
                        {
                          PositionIcons[
                            positi.Position as keyof typeof PositionIcons
                          ]
                        }
                        {positi.Position}
                      </div>
                      <div className='w-48 flex-none px-6 py-3 h-16 flex items-center'>
                        {positi.Value.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </div>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent className='items-start'>
                    {positi.Position === 'Staking' && (
                      <>
                        <div className='flex w-full pt-2 pb-0.5 text-xs text-gray-600'>
                          <div className='w-9 flex-none'></div>
                          <div className='w-56 flex-none px-6'>
                            Asset Staked
                          </div>
                          <div className='w-full px-6'>Amount Staked</div>
                          <div className='w-full px-6'>Annual Yield (%)</div>
                          <div className='w-full px-6'>Rewards Earned</div>
                          <div className='w-full px-6'>Lock-up Period</div>
                          <div className='w-48 flex-none px-6'>Value</div>
                        </div>

                        <div className='w-full flex text-gray-600 text-sm'>
                          <div className='w-9 flex-none'></div>
                          <div className='w-56 flex-none px-6 py-3 flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
                              <Image
                                className=''
                                src='/icons/networks/Tether.svg'
                                alt='Tether'
                                width={32}
                                height={32}
                              />
                            </div>
                            <p>SYMBOL</p>
                          </div>
                          <div className='w-full px-6 py-3 flex items-center'>
                            9.99 SYM
                          </div>
                          <div className='w-full px-6 ml-[4px] py-3 flex items-center'>
                            9.99%
                          </div>
                          <div className='w-full px-5 py-3 ml-[6px] flex items-center text-teal-600 whitespace-nowrap'>
                            <Gift01 className='w-3 h-3 text-teal-600 mr-1' />
                            9.99 SYM ($9.99)
                          </div>
                          <div className='w-full px-6 py-3 flex items-center'>
                            30 days
                          </div>
                          <div className='w-48 flex-none px-6 py-3 flex items-center'>
                            $98,765.43
                          </div>
                        </div>
                      </>
                    )}

                    {positi.Position === 'Lending' && (
                      <>
                        <div className='flex w-full pt-2 pb-0.5 text-xs text-gray-600'>
                          <div className='w-9 flex-none'></div>
                          <div className='w-56 flex-none px-6'>Asset Lent</div>
                          <div className='w-44 flex-none'></div>
                          <div className='w-full px-6'>Amount Lent</div>
                          <div className='w-full px-6'>Annual Yield (%)</div>
                          <div className='w-full px-6'>Rewards Earned</div>
                          <div className='w-48 flex-none px-6'>Value</div>
                        </div>

                        <div className='w-full flex text-gray-600 text-sm'>
                          <div className='w-9 flex-none'></div>
                          <div className='w-56 flex-none px-6 py-3 flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
                              <Image
                                className=''
                                src='/icons/networks/USDC.svg'
                                alt='USDC'
                                width={32}
                                height={32}
                              />
                            </div>
                            <p>SYMBOL</p>
                          </div>
                          <div className='w-44 flex-none'></div>
                          <div className='w-full px-6 py-3 flex items-center'>
                            9.99 SYM
                          </div>
                          <div className='w-full py-3 flex items-center'>
                            9.99%
                          </div>
                          <div className='w-56 px-3 py-3 flex items-center text-teal-600 whitespace-nowrap'>
                            <Gift01 className='w-3 h-3 text-teal-600 mr-1' />
                            9.99 SYM ($9.99)
                          </div>
                          <div className='w-48 flex-none px-6 py-3 flex items-center'>
                            $98,765.43
                          </div>
                        </div>
                      </>
                    )}

                    {positi.Position === 'Borrowing' && (
                      <>
                        <div className='flex w-full pt-2 pb-0.5 text-xs text-gray-600'>
                          <div className='w-9 flex-none'></div>
                          <div className='w-56 flex-none px-6'>
                            Asset Borrowed
                          </div>
                          <div className='w-44 flex-none'></div>
                          <div className='w-full px-6'>Collateral Asset</div>
                          <div className='w-full px-6'>Amount</div>
                          <div className='w-full px-6'>Annual Yield (%)</div>
                          <div className='w-48 flex-none px-6'>Value</div>
                        </div>

                        <div className='w-full flex text-gray-600 text-sm'>
                          <div className='w-9 flex-none'></div>
                          <div className='w-56 flex-none px-6 py-3 flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
                              <Image
                                className=''
                                src='/icons/networks/USDC.svg'
                                alt='USDC'
                                width={32}
                                height={32}
                              />
                            </div>
                            <p>SYMBOL</p>
                          </div>
                          <div className='w-44 flex-none'></div>
                          <div className='w-56  px-6 py-3 flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
                              <Image
                                className=''
                                src='/icons/networks/USDC.svg'
                                alt='USDC'
                                width={32}
                                height={32}
                              />
                            </div>
                            <p>SYMBOL</p>
                          </div>
                          <div className='w-full px-6 ml-[13px] whitespace-nowrap py-3 flex items-center'>
                            9.99 SYM
                          </div>
                          <div className='w-full px-6 py-3 flex items-center whitespace-nowrap'>
                            99.99%
                          </div>
                          <div className='w-48 flex-none px-6 py-3 flex items-center'>
                            $98,765.43
                          </div>
                        </div>
                      </>
                    )}

                    {positi.Position === 'Deposits' && (
                      <>
                        <div className='flex w-full pt-2 pb-0.5 text-xs text-gray-600'>
                          <div className='w-9 flex-none'></div>
                          <div className='w-56 flex-none px-6'>
                            Asset Deposited
                          </div>
                          <div className='w-80 flex-none'></div>
                          <div className='w-full px-6'>Annual Yield (%)</div>
                          <div className='w-full px-6'>Rewards Earned</div>

                          <div className='w-48 flex-none px-6'>Value</div>
                        </div>

                        <div className='w-full flex text-gray-600 text-sm'>
                          <div className='w-9 flex-none'></div>
                          <div className='w-56 flex-none px-6 py-3 flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
                              <Image
                                className=''
                                src='/icons/networks/Tether.svg'
                                alt='Tether'
                                width={32}
                                height={32}
                              />
                            </div>
                            <p>SYMBOL</p>
                          </div>
                          <div className='w-80 flex-none'></div>
                          <div className='w-full px-6 py-3 flex items-center'>
                            9.99 SYM
                          </div>
                          <div className='w-full px-5 py-3 ml-[8px] flex items-center text-teal-600 whitespace-nowrap'>
                            <Gift01 className='w-3 h-3 text-teal-600 mr-1' />
                            9.99 SYM ($9.99)
                          </div>
                          <div className='w-48 flex-none px-6 py-3 flex items-center'>
                            $98,765.43
                          </div>
                        </div>
                      </>
                    )}

                    {positi.Position === 'Liquidity Pools' && (
                      <>
                        <div className='flex w-full pt-2 pb-0.5 text-xs text-gray-600'>
                          <div className='w-9 flex-none'></div>
                          <div className='w-56 flex-none px-6'>Pool</div>
                          <div className='w-80 flex-none'></div>
                          <div className='w-full px-6'>Balance</div>
                          <div className='w-full px-6'>Rewards Earned</div>
                          <div className='w-48 flex-none px-6'>Value</div>
                        </div>

                        <div className='w-full flex text-gray-600 text-sm'>
                          <div className='w-9 flex-none'></div>
                          <div className='w-56 flex-none px-6 py-3 flex items-center gap-3'>
                            <div className=' flex items-center justify-center'>
                              <div className='flex flex-row'>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger className='-mr-2 group-hover:mr-0.5 transition-all duration-200 hover:shadow-sm'>
                                      {' '}
                                      <Image
                                        className='rounded-full'
                                        src='/icons/networks/ETH.svg'
                                        alt='ETH'
                                        width={32}
                                        height={32}
                                      />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>BTC</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger className='-mr-2 group-hover:mr-0.5 transition-all duration-200 '>
                                      {' '}
                                      <Image
                                        className=''
                                        src='/icons/networks/Tether.svg'
                                        alt='Tether'
                                        width={32}
                                        height={32}
                                      />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>ETH</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger className='-mr-2 group-hover:mr-0.5 transition-all duration-200 '>
                                      {' '}
                                      <Image
                                        className=''
                                        src='/icons/networks/USDC.svg'
                                        alt='USDC'
                                        width={32}
                                        height={32}
                                      />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Polygon</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger className='-mr-2 group-hover:mr-0.5 transition-all duration-200 '>
                                      {' '}
                                      <Image
                                        className=''
                                        src='/icons/networks/LUSD.svg'
                                        alt='LUSD'
                                        width={32}
                                        height={32}
                                      />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Polygon</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </div>
                            </div>
                            <p>SYMBOL</p>
                          </div>
                          <div className='w-80 flex-none'></div>

                          <div className='w-full px-6 py-3 flex items-center whitespace-nowrap'>
                            9.99 SYM
                          </div>
                          <div className='w-full px-5 py-3 flex ml-[8px] items-center text-teal-600 whitespace-nowrap'>
                            <Gift01 className='w-3 h-3 text-teal-600 mr-1' />
                            9.99 SYM ($9.99)
                          </div>
                          <div className='w-48 flex-none px-6 py-3 flex items-center'>
                            $98,765.43
                          </div>
                        </div>
                      </>
                    )}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export { PositionsTable };
