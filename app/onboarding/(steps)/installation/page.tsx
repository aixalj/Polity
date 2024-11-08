'use client';

import { useState, useEffect } from 'react';
import OnboardingBlock from '@/components/onboardingblock';
import Wallet from '@/public/walletgraphic.svg';
import { File02 } from '@untitled-ui/icons-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Notification } from '@/components/ui/notification';

import InstallationBg from '@/public/installationbg.svg';
import Check2 from '@/public/icons/check2.svg';

export default function Installation() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='w-full h-full flex flex-col gap-6'>
      <div
        className='relative h-fit pt-24 items-center text-center gap-0 flex  
flex-col  p-0     max-w-screen-sm mx-auto w-full'
      >
        <div className='relative  flex  w-full h-full'>
          {' '}
          <Image
            className='absolute -top-12 left-0 w-full h-full'
            src={InstallationBg}
            alt='Installation Background'
          />
          <div
            style={{
              boxShadow:
                '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
            }}
            className='w-32 h-32 z-10  relative mx-auto rounded-full  bg-white border flex items-center justify-center border-gray-200'
          >
            <div className='w-24 h-24 rounded-full border border-dashed bg-white border-gray-300 flex items-center justify-center'>
              <div
                style={{
                  background:
                    'linear-gradient(180deg, #E8F5F4 0%, rgba(232, 245, 244, 0.20) 100%), #FFF',
                  boxShadow:
                    '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                }}
                className='w-16 h-16 rounded-full border border-primary-100 flex items-center justify-center'
              >
                {isLoading ? (
                  <div className='spinner'></div>
                ) : (
                  <Image src={Check2} alt='Check' />
                )}
              </div>
            </div>
          </div>
        </div>
        <h1 className='text-xl font-medium mt-11'>
          {isLoading
            ? 'Your Avatar Virtual Node is currently installing'
            : 'Avatar Virtual Node is installed'}
        </h1>

        <>
          <p className='text-gray-600 text-sm mb-14 text-balance mt-1'>
            Your Avatar Virtual Node is now in the process of installation.
            Please wait while the installation completes.
          </p>
          <div className='inline-flex mx-auto gap-4'>
            <Link href='/onboarding/wallet/provider'>
              <Button>Continue to Wallet Setup</Button>
            </Link>
          </div>
        </>
      </div>
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top: 4px solid #1b665e; /* Change this color to match your primary color */
          border-radius: 50%;
          width: 32px;
          height: 32px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
