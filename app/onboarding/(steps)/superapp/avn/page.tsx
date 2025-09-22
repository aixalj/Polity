'use client';

import OnboardingBlock from '@/components/onboardingblock';
import { ImageUserLeft } from '@untitled-ui/icons-react';
import { Notification } from '@/components/ui/notification';
import Image from 'next/image';
import CheckIcon from '@/public/icons/check.svg';

export default function AVN() {
  return (
    <OnboardingBlock
      icon={<ImageUserLeft className='w-8 h-8 text-gray-700' />}
      title='Application Virtual Node'
      description='Your Application Virtual Node is your own digital company and a gateway into the Web3 space. '
      button1link='/onboarding/superapp/nsp'
      button1text='Back'
      button2link='/onboarding/superapp/agreement'
      button2text='Continue'
    >
      <div className='flex flex-col gap-10 px-6 py-5'>
        <div>
          <p className='font-medium text-base mb-2'>
            Built on R3 Corda&apos;s 5.0 pioneering technology and offers
            several advantages:
          </p>
          <ul className='flex flex-col gap-3 '>
            <li className='flex gap-3 text-gray-600 text-sm items-center'>
              <Image src={CheckIcon} alt='Check' width={20} height={20} />
              Control your personal data at all times
            </li>
            <li className='flex gap-3 text-gray-600 text-sm items-center'>
              <Image src={CheckIcon} alt='Check' width={20} height={20} />
              Own and hold your investments in digital assets directly and
              securely
            </li>
            <li className='flex gap-3 text-gray-600 text-sm items-center'>
              <Image src={CheckIcon} alt='Check' width={20} height={20} />
              Contract in the name of your Avatar with Merchants and Providers
            </li>
            <li className='flex gap-3 text-gray-600 text-sm items-center'>
              <Image src={CheckIcon} alt='Check' width={20} height={20} />
              Aggregate Polity-supported wallets and other digital products
              acquired through Polity
            </li>
            <li className='flex gap-3 text-gray-600 text-sm items-center'>
              <Image src={CheckIcon} alt='Check' width={20} height={20} />
              Monitor and control all your subscriptions, contracts and payments
            </li>
            <li className='flex gap-3 text-gray-600 text-sm items-center'>
              <Image src={CheckIcon} alt='Check' width={20} height={20} />
              Maintain your privacy while remaining fully compliant personal
              data at all times
            </li>
            <li className='flex gap-3 text-gray-600 text-sm items-center'>
              <Image src={CheckIcon} alt='Check' width={20} height={20} />
              Recover data from lost devices
            </li>
          </ul>
        </div>
      </div>
    </OnboardingBlock>
  );
}
