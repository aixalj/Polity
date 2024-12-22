'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PolityLogo from '@/public/polity.svg';

export default function WelcomePage() {
  return (
    <main className='w-full h-full flex bg-white flex-col items-center min-h-screen overflow-auto'>
      {/* Logo */}
      <div className='flex flex-col items-center gap-4 w-full py-5 px-24'>
        <Image src={PolityLogo} alt='Polity Logo' />
      </div>

      <div className='flex flex-col items-center w-full py-56 px-24'>
        {/* Private Alpha Badge */}
        <div className='mb-4'>
          <span className='px-3 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 border border-gray-200 rounded-md'>
            Private Alpha
          </span>
        </div>

        {/* Title */}
        <h1 className='text-4xl font-semibold text-gray-900 mb-4 text-center'>
          Welcome to Polity Network
        </h1>

        {/* Description */}
        <p className='text-gray-700 text-[14px] font-normal text-center mb-8 max-w-[600px]'>
          The first enterprise-grade network and digital products and
          services&apos; marketplace for the tokenised world
        </p>

        {/* Action Buttons */}
        <div className='flex gap-4'>
          <Link href='/authentication/login'>
            <Button
              variant='outline'
              className='px-6 py-2 border border-gray-200 hover:bg-gray-50'
            >
              Go to Login
            </Button>
          </Link>
          <Link href='/authentication/registration/auth'>
            <Button variant='default' className='px-6 py-2'>
              Proceed to Registration
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
