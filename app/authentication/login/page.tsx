'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PolityLogo from '@/public/polity.svg';
import { Wallet02 } from '@untitled-ui/icons-react';
import { Notification } from '@/components/ui/notification';
import { LinkExpired } from '@/components/authentication/modals/linkExpired';
import Link from 'next/link';
interface NotificationType {
  title: string;
  description: string;
  status: 'success' | 'error' | 'warning' | 'info';
}

export default function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [isLinkExpiredOpen, setIsLinkExpiredOpen] = useState(false);

  // Example of showing error notification
  const handleContinue = () => {
    setNotifications([
      {
        title: 'Authorization Failed',
        description: 'The email or password you entered is incorrect. Please try again.',
        status: 'error',
      },
      ...notifications,
    ]);
  };

  const handleRequestLink = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLinkExpiredOpen(true);
  };

  return (
    <main className='w-full h-full flex bg-white flex-col items-center min-h-screen overflow-auto'>
      {/* Logo */}
      <div className='flex flex-col items-center gap-4 w-full py-5 px-24'>
        <Image src={PolityLogo} alt='Polity Logo' />
      </div>

      {/* Private MVP Badge */}
      <div className='flex flex-col items-center w-full py-24 px-24'>
        <div className='mb-4'>
          <span className='px-3 py-1.5 text-sm font-medium text-gray-800 bg-gray-100 border border-gray-200 rounded-md'>
            Private MVP
          </span>
        </div>

        {/* Title and Description */}
        <h1 className='text-2xl font-medium text-gray-900 text-[32px] mb-2'>
          Client Login
        </h1>
        <p className='text-gray-900 font-normal text-[14px] text-center mb-5 max-w-md'>
          You can log in, add an additional authentication method, or request an
          onboarding link from Bastion Cooperative.
        </p>

        {/* Email Input */}
        <div className='w-full max-w-md mb-4'>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-3 rounded-xl text-[14px] h-10 border border-gray-200 focus:border-[#05603A] focus:outline-none focus:ring-2 focus:ring-[#DCF0EE]'
          />
        </div>

        {/* Continue Button */}
        <Link href='/onboarding' className='w-full flex items-center justify-center'>
        <Button 
          variant='default' 
          className='w-full max-w-md text-white mb-4'
        //   onClick={handleContinue}
        >
          Continue
        </Button>
        </Link>

        {/* OR Divider */}
        <div className='w-full max-w-md flex items-center justify-center mb-4'>
          <div className='border-t border-gray-200 flex-grow' />
          <span className='px-4 text-sm text-gray-500'>OR</span>
          <div className='border-t border-gray-200 flex-grow' />
        </div>

        {/* Social Buttons */}
        <div className='w-full max-w-md space-y-3 mb-7'>
          <Button
            variant='secondary'
            className='w-full flex items-center justify-center gap-2 border border-gray-200 !bg-white !shadow-sm'
          >
            <Image src='/google.svg' alt='Google' width={20} height={20} />
            Connect with Google
          </Button>

          <Button
            variant='secondary'
            className='w-full flex items-center justify-center gap-2 border border-gray-200 !bg-white !shadow-sm'
          >
            <Image src='/apple.svg' alt='Apple' width={20} height={20} />
            Connect with Apple
          </Button>

          <div className='w-full max-w-md flex items-center justify-center mb-4'>
            <div className='border-t border-gray-200 flex-grow' />
            <span className='px-4 text-sm text-gray-500'>OR</span>
            <div className='border-t border-gray-200 flex-grow' />
          </div>

          <Button
            variant='secondary'
            className='w-full flex items-center justify-center gap-2 border border-gray-200 !bg-white !shadow-sm'
          >
            <Wallet02 className='w-4 h-4' />
            Continue with a wallet
          </Button>
        </div>

        {/* Request Link */}
        {/* <a 
          href='#' 
          className='text-primary-500 hover:text-primary-600 text-[14px] font-semibold'
          onClick={handleRequestLink}
        >
          Request a link from Bastion Cooperative
        </a> */}
      </div>

      {/* Link Expired Modal */}
      <LinkExpired 
        isOpen={isLinkExpiredOpen}
        onClose={() => setIsLinkExpiredOpen(false)}
      />

      {/* Notifications */}
      <div className='fixed bottom-4 left-4 z-[100] flex flex-col gap-2 w-[430px] rounded-[20px]'>
        {notifications.map((notification, index) => (
          <Notification
            key={index}
            title='Login Authorization Failed'
            description='Please verify the provided credentials and attempt the login again. If the problem continues, reach out to our support team for further assistance.'
            status='error'
            className='shadow-2xl'
            onClose={() => {
              setNotifications((prev) => prev.filter((_, i) => i !== index));
            }}
          />
        ))}
      </div>
    </main>
  );
}
