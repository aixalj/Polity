import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PolityLogo from '@/public/polity.svg';
import Avatar from '@/public/avatar.jpg';
import { UserPlus } from 'lucide-react';

export default function InvestorPortal() {
  return (
    <main className='w-full h-full flex bg-gray-50 flex-col items-center min-h-screen overflow-auto '>
      <div className='flex flex-col items-left gap-4 border-b border-gray-200/80 w-full py-5 px-24 bg-white'>
        <Image src={PolityLogo} alt='Polity Logo' />
      </div>
      <div className='flex flex-col items-center gap-1 pt-20'>
          <h1 className='text-2xl font-medium'>Investor Portal</h1>
        <p className='text-sm text-gray-600 mb-10'>
          Click on your Avatar to enter your Avatar Dashboard.
        </p>

        <div className='border border-gray-200 rounded-2xl py-10 px-14 flex flex-col items-center gap-2 mb-6'>
          <div className='w-16 h-16 rounded-[10px] border border-gray-200 overflow-hidden'>
            <Image
              src={Avatar}
              alt='Avatar'
              width={64}
              height={64}
            />
          </div>
          <p className='font-medium'>AristoInvest</p>
          <div className='flex items-center gap-1 text-xs text-green-600 bg-green-50/50 border border-green-200 rounded-[4px] px-2 py-1'>
            <span className='w-2 h-2 rounded-full bg-green-500' />
            <span>Connected</span>
          </div>
        </div>

        <Link href='/onboarding/select-your-account'>
          <Button variant='outline' className='mt-4'>
            <UserPlus className='w-5 h-5' />
            Create Avatar
          </Button>
        </Link>
      </div>
    </main>
  );
}
