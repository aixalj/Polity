import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PolityLogo from '@/public/polity.svg';
import Avatar from '@/public/Avatar.png';
import PlatoInvest from '@/public/PlatoInvest.png';
import { UserPlus01 } from '@untitled-ui/icons-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';

const SHOW_PENDING = false; // Toggle this to control visibility

export default function InvestorPortal() {
  return (
    <main className='w-full h-full flex bg-white flex-col items-center min-h-screen overflow-auto '>
      <div className='flex flex-col items-left gap-4 border-b border-gray-200/80 w-full py-5 px-24 bg-white'>
        <Image src={PolityLogo} alt='Polity Logo' />
      </div>
      <div className='flex flex-col items-center gap-1 pt-20'>
        <h1 className='text-2xl font-medium'>Client Portal</h1>
        <p className='text-sm text-gray-600 mb-10'>
          Click on your Avatar to enter your Avatar Dashboard.
        </p>

        <div className='flex items-center gap-6'>
          {/* Connected Avatar */}
          <Link href='/uniapp'>
            <div className='border border-gray-300 hover:border-gray-300 hover:shadow-sm transition-all duration-200 rounded-2xl py-10 px-14 flex flex-col items-center gap-2 cursor-pointer group relative'>
              <div className='w-16 h-16 rounded-[10px] border border-gray-200 overflow-hidden'>
                <Image src={Avatar} alt='Avatar' width={64} height={64} />
              </div>
              <p className='font-medium'>AristoInvest</p>
              <div className='flex items-center gap-1 text-xs font-medium text-[#05603A] bg-[#D1FADF] border border-[#A6F4C5] rounded-[5px] px-2 py-1'>
                <span className='w-2 h-2 rounded-full bg-[#05603A] mr-0.5' />
                <span className='text-[#05603A]'>Connected</span>
              </div>
              <div className='absolute bottom-0 left-1/2 w-3/4 h-[4px] bg-primary-400 rounded-[4px] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 -translate-x-1/2' />
            </div>
          </Link>

          {/* <Link href='/onboarding/superapp/nsp'> 
          <div className=' border border-gray-300 hover:border-gray-300 hover:shadow-sm transition-all duration-200 rounded-2xl py-10 px-14 flex flex-col items-center gap-2 cursor-pointer group relative'>
            <div className='w-16 h-16 rounded-[10px] border border-gray-200 overflow-hidden'>
              <Image src={PlatoInvest} alt='PlatoInvest' width={64} height={64} />
            </div>
            <p className='font-medium'>PlatoInvest</p>
            <TooltipProvider>
              <Tooltip delayDuration={50}>
                <TooltipTrigger>
                  <div className='flex items-center gap-1 text-xs font-medium text-amber-800 bg-amber-100 border border-amber-200 rounded-[5px] px-2 py-1'>
                    <span className='w-2 h-2 rounded-full bg-amber-800 animate-pulse mr-0.5' />
                    <span className='text-amber-800'>Pending</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side='bottom'
                  sideOffset={10}
                  className='bg-[#0F172A] text-white border-none px-3 py-2 w-[260px] text-xs font-semibold text-center'
                >
                  <div className='absolute left-1/2 top-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-[#0F172A] -translate-x-1/2 -translate-y-full' />
                  <p className='text-xs font-semibold'>
                    Complete your avatar setup to access your investment
                    dashboard.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className='absolute bottom-0 left-1/2 w-3/4 h-[4px] bg-amber-500 rounded-[4px] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 -translate-x-1/2' />
          </div>
           </Link> */}
          {/* <div className=' border border-gray-300 bg-gray-50 h-full w-full justify-center hover:border-gray-300 hover:shadow-sm transition-all duration-200 rounded-2xl py-10 px-14 flex flex-col items-center gap-2 cursor-pointer group relative'>
            <Link href='/onboarding/select-your-account'>
              <div className='flex flex-col items-center gap-2'>
                <UserPlus01 className='w-8 h-8' />
                <span className='text-md font-semibold text-gray-700'>
                  New Avatar
                </span>
              </div>
            </Link>
          </div>*/}
        </div>
      </div>
    </main>
  );
}
