'use client';

import { useState } from 'react'; // Import useState
import OnboardingBlock from '@/components/onboardingblock';

import {
  Link02,
  MessageCircle01,
  Image03,
  LinkExternal01,
} from '@untitled-ui/icons-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import nspImage1 from '@/public/nsp-image-1.svg';
import nspImage2 from '@/public/nsp-image-2.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Agreement() {
  const [selectedProvider, setSelectedProvider] = useState(''); // State for selected provider

  const handleProviderChange = (value: string) => {
    setSelectedProvider(value); // Update state on selection
  };

  return (
    <OnboardingBlock
      icon={<Link02 className='w-8 h-8 text-gray-700' />}
      title='Connect to a Network Service Provider'
      description='Provider of virtual nodes and technical support to Clients and other network participants.'
      button1link='/onboarding/avatar'
      button1text='Back'
      button2link={selectedProvider === 'uniapp' ? '/onboarding/installation' : '/onboarding/avn'} // Conditional link
      button2text='Continue'
      button3link='/onboarding/skip'
      button3text='Skip for Now' 
    >
      <div className='grid grid-cols-2 gap-4 px-6 py-4'>
        <div className='w-full gap-3 flex flex-col'>
          <div className='-mx-6'>
            <div className='inline-block py-2 pl-6 text-gray-600 font-medium bg-gray-50 text-xs w-full leading-2'>
              STEP 1
            </div>
          </div>
          <div className='w-full rounded-xl flex items-center justify-center'>
            <Image src={nspImage1} alt='NSP Image' width={300} height={300} />
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[14px] font-medium text-gray-900'>
              Create your Element account
            </h3>
            <p className='text-sm text-gray-600 font-regular mb-2.5'>
              Element is built on Matrix, the decentralized open standard for
              secure and sovereign real time communication.
            </p>
            <div className='flex gap-3 max-w-screen-sm mx-auto w-full justify-betwee mb-2.5'>
              <Link href='https://app.element.io'>
                <Button variant='default'>
                  Go to Element <LinkExternal01 className='w-5 h-5' />{' '}
                </Button>
              </Link>
            </div>
            <Link href='#' className='text-sm text-primary-500 font-semibold'>
              Learn more about Element
            </Link>
          </div>
        </div>
        <div className='w-full gap-3 flex flex-col'>
          <div className='-mx-6'>
            <div className='inline-block py-2 pl-6 text-gray-600 font-medium bg-gray-50 text-xs w-full leading-2'>
              STEP 2
            </div>
          </div>
          <div className='w-full rounded-xl flex items-center justify-center'>
            <Image src={nspImage2} alt='NSP Image' width={300} height={300} />
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[14px] font-medium text-gray-900'>
              Copy your Matrix User ID{' '}
            </h3>
            <p className='text-sm text-gray-600 font-regular mb-2.5'>
              Once you get set up with Element, a unique Matrix User ID will be
              created. Keep it handy as you will need it for the following step.{' '}
            </p>
            <Link href='#' className='text-sm text-primary-500 font-semibold'>
              Read Element user guide
            </Link>
          </div>
        </div>
      </div>
      <div className='px-6 pb-5 flex flex-col gap-4'>
        <div className='-mx-6'>
          <div className='inline-block py-2 pl-6 text-gray-600 font-medium bg-gray-50 text-xs w-full leading-2'>
            STEP 3
          </div>
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label>Select a Network Service Provider</Label>
          <Select onValueChange={handleProviderChange}> {/* Update to handle selection */}
            <SelectTrigger>
              <SelectValue placeholder='Select a Network Service Provider...' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='uniapp'>UniApp</SelectItem> {/* Added UniApp option */}
              <SelectItem value='bastion'>Bastion</SelectItem>
              <SelectItem value='element'>Element</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label>Matrix User ID</Label>
          <Input placeholder='@username:matrix.org' />
          <p className='text-sm text-gray-600'>
            Please insert your Matrix User ID (@username:matrix.org) found in
            your Element application.
          </p>
        </div>
      </div>
    </OnboardingBlock>
  );
}