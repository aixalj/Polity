'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PolityLogo from '@/public/polity.svg';
import SelectProfile from '@/public/select-profile-icon.svg';
import SelectProfileSuper from '@/public/select-profile-icon-super.svg';
import USDTIcon from '@/public/icons/tokens/USDT.svg';
import CheckIconNew from '@/public/CheckIconNew.svg';
import { useState } from 'react';

import {
  ArrowRight,
  Wallet03,
  Users03,
  Link02,
  UserCheck01,
  ImageUserLeft,
  Key02,
} from '@untitled-ui/icons-react';

import * as React from 'react';

const Onboarding = () => {
  const [isSuperApp, setIsSuperApp] = useState(false); // State to toggle sidebar

  const handleStartNowClick = () => {
    setIsSuperApp(false); // Show UniApp sidebar
  };

  const handleGetFullAccessClick = () => {
    setIsSuperApp(true); // Show SuperApp sidebar
  };

  return (
    <main className='w-full h-full flex bg-gray-50 flex-col items-center pt-6 min-h-screen overflow-auto '>
      <Image src={PolityLogo} alt='Polity Logo' />
      <div className='flex flex-col gap-1 items-center py-8 w-full max-w-4xl'>
        <h1 className='text-2xl '>Select your account</h1>
        <p className='text text-md font-regular text-gray-700 mb-8'>
          Select the right application for you—upgrade to the SuperApp anytime.
        </p>
        <div className='flex gap-6 w-full h-auto bg-white border border-gray-200/80 shadow-sm rounded-[40px] p-8'>
          <div className='flex h-full w-full flex-col py-8 px-[42px] gap-3'>
            <div
              className='w-16 h-16 border border-gray-200 flex items-center justify-center rounded-[10px]'
              style={{
                background: 'linear-gradient(180deg, #FFF 0%, #F2F4F7 100%)',
              }}
            >
              <Image src={SelectProfile} alt='Profile Logo' />
            </div>
            <div>
              <p
                className='text-xs font-semibold uppercase bg-gradient-to-r from-[#1F756B] to-[#2ED3B7] bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #1F756B 0%, #2ED3B7 100%)',
                }}
              >
                Start Now
              </p>
              <h2 className='text text-2xl font-medium mt-1 mb-2 '>
                Polity UniApp
              </h2>
              <p className='text-sm font-regular text-gray-700'>
                Limited access to functionalities
              </p>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center gap-1'>
                <Image src={USDTIcon} alt='Tether Icon' />{' '}
                <p className='text-2xl font-semibold text-gray-900 flex items-center'>
                  <span className='font-medium text-lg mr-1'>$</span>0.00
                </p>
              </div>
              <div>
                <p className='text-sm font-medium text-gray-700'>
                  FREE forever
                </p>
              </div>
            </div>
            <Link href='/onboarding/uniapp/avatar'>
            <Button variant='outline' onClick={handleStartNowClick}>
              Start Now <ArrowRight className='w-5 h-5' />
            </Button>
            </Link>
            <div className='w-full h-px bg-gray-300' />
            <ul className='list-disc list-inside text-sm space-y-2.5  text-gray-700'>
              <li className='flex items-center gap-3 py-0.5 text-gray-700 text-sm font-medium'>
                <Wallet03 className='w-5 h-5' /> Wallet setup
              </li>
              <li className='flex items-center gap-3 py-0.5 text-gray-700 text-sm font-medium'>
                <Users03 className='w-5 h-5' /> Avatar Identity
              </li>
              <li className='flex items-center gap-3 py-0.5 text-gray-700 text-sm font-medium'>
                <Link02 className='w-5 h-5' /> Connect with NSP
              </li>
              <li className='flex items-center gap-3 py-0.5 line-through text-gray-700 text-sm font-medium'>
                <UserCheck01 className='w-5 h-5' /> Identity Verification
              </li>
              <li className='flex items-center gap-3 py-0.5 line-through text-gray-700 text-sm font-medium'>
                <ImageUserLeft className='w-5 h-5' /> Avatar Virtual Node
              </li>
            </ul>
            <ul className='list-disc list-inside text-sm space-y-2.5  text-gray-800'>
              <li className='flex items-center gap-3 py-0.5 text-gray-700 text-sm font-regular'>
                <Image
                  src={CheckIconNew}
                  className='w-5 h-5'
                  alt='Check Icon'
                />{' '}
                Always free to use
              </li>
              <li className='flex items-center gap-3 py-0.5 text-gray-800 text-sm font-regular'>
                <Image
                  src={CheckIconNew}
                  className='w-5 h-5'
                  alt='Check Icon'
                />{' '}
                Permissionless gateway to DeFi
              </li>
              <li className='flex items-center gap-3 py-0.5  text-gray-800 text-sm font-regular'>
                <Image
                  src={CheckIconNew}
                  className='w-5 h-5'
                  alt='Check Icon'
                />{' '}
                Access to local NSP marketplace
              </li>
            </ul>
          </div>
          <div
            className='flex h-full w-full flex-col gap-3 border border-solid py-8 px-[42px] rounded-[24px]'
            style={{
              background:
                'linear-gradient(to bottom, #F6FEFC, #F0FDF9) padding-box, linear-gradient(0deg, #1F756B, #1F756B) border-box',
              borderRadius: '24px',
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: 'transparent',
            }}
          >
            <div className='flex items-start justify-between gap-2'>
              <div
                className='w-16 h-16 border border-gray-200 flex items-center justify-center rounded-[10px]'
                style={{
                  background: 'linear-gradient(180deg, #FFF 0%, #E8F5F4 100%)',
                }}
              >
                <Image src={SelectProfileSuper} alt='Profile Logo' />
              </div>
              <div className='bg-purple-100 border border-purple-200 rounded-[800px] py-1 px-2.5'>
                <p className='text-xs font-medium text-purple-800 line-through'>
                  One time payment
                </p>
              </div>
            </div>
            <div>
              <p
                className='text-xs font-semibold uppercase  bg-gradient-to-r from-[#1F756B] to-[#2ED3B7] bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #1F756B 0%, #2ED3B7 100%)',
                }}
              >
                FULL ACCESS
              </p>
              <h2 className='text-2xl font-medium mt-1 mb-2 '>
                Polity SuperApp
              </h2>
              <p className='text-sm font-regular text-gray-700'>
                Full access to functionalities
              </p>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center gap-1'>
                <Image className='w-4 h-4' src={USDTIcon} alt='Tether Icon' />{' '}
                <p className='text-2xl font-semibold text-gray-900 flex items-center'>
                  <span className='font-medium text-lg mr-1'>$</span>0.00
                </p>
                <p className='text-sm font-medium text-gray-600 whitespace-nowrap'>
                  <span className='text-xl font-medium text-gray-600 line-through mr-1'>
                    19.99
                  </span>
                  per Avatar Virtual Node
                </p>
              </div>
              <div>
                <p className='text-sm font-medium text-gray-700'>
                  Waived until 01/01/26
                </p>
              </div>
            </div>
            <Link href='/onboarding/superapp/verification'>
            <Button onClick={handleGetFullAccessClick}>
              <Key02 className='w-5 h-5' />
              Get full access
            </Button>
            </Link>
            <div className='w-full h-px bg-teal-100' />
            <ul className='list-disc list-inside text-sm space-y-2.5  text-primary-700'>
              <li className='flex items-center gap-3 py-0.5 text-primary-700 text-sm font-medium'>
                <Wallet03 className='w-5 h-5' /> Wallet setup
              </li>
              <li className='flex items-center gap-3 py-0.5 text-primary-700 text-sm font-medium'>
                <Users03 className='w-5 h-5' /> Avatar Identity
              </li>
              <li className='flex items-center gap-3  text-primary-700 text-sm font-medium'>
                <Link02 className='w-5 h-5' /> Connect with NSP
              </li>
              <li className='flex items-center gap-3 py-0.5 text-primary-700 text-sm font-medium'>
                <UserCheck01 className='w-5 h-5' /> Identity Verification
              </li>
              <li className='flex items-center gap-3 py-0.5 text-primary-700 text-sm font-medium'>
                <ImageUserLeft className='w-5 h-5' /> Avatar Virtual Node
              </li>
            </ul>
            <ul className='list-disc list-inside text-sm space-y-2.5  text-gray-800'>
              <li className='flex items-center gap-3 py-0.5 text-gray-700 text-sm font-regular'>
                <Image
                  src={CheckIconNew}
                  className='w-5 h-5'
                  alt='Check Icon'
                />{' '}
                Always permissionless DeFi{' '}
              </li>
              <li className='flex items-center gap-3 py-0.5 text-gray-800 text-sm font-regular'>
                <Image
                  src={CheckIconNew}
                  className='w-5 h-5'
                  alt='Check Icon'
                />{' '}
                Permissioned access to CeFi and TradFi
              </li>
              <li className='flex items-center gap-3 py-0.5  text-gray-800 text-sm font-regular'>
                <Image
                  src={CheckIconNew}
                  className='w-5 h-5'
                  alt='Check Icon'
                />{' '}
                Access to global Polity marketplace
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Onboarding;