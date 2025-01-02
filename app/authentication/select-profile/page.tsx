'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PolityLogo from '@/public/polity.svg';
import { ChevronRight, ArrowRight } from 'lucide-react';
import SelectProfileIcon1 from '@/public/select-profile-icon-1.svg';
import SelectProfileIcon2 from '@/public/select-profile-icon-2.svg';
import SelectProfileIcon3 from '@/public/select-profile-icon-3.svg';

interface ProfileOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

const profileOptions: ProfileOption[] = [
  {
    id: 'clients',
    title: 'Clients',
    description: 'Individuals transacting and investing in digital assets',
    icon: '/select-profile-icon-1.svg',
    href: '/onboarding/',
  },
  {
    id: 'nsp',
    title: 'Network Service Provider',
    description:
      'Provider of infrastructure and technical support to Clients and other Network participants',
    icon: '/select-profile-icon-2.svg',
    href: '/onboarding/nsp',
  },
  {
    id: 'operator',
    title: 'Network Operator',
    description:
      'Provider of transaction validation, network administration, mapping and identity services',
    icon: '/select-profile-icon-3.svg',
    href: '/onboarding/operator',
  },
];

export default function SelectProfilePage() {
  return (
    <main className='w-full h-full flex bg-white flex-col items-center min-h-screen overflow-auto'>
      {/* Logo */}
      <div className='mb-16 mt-5'>
        <Image src={PolityLogo} alt='Polity' priority />
      </div>

      {/* Content */}
      <div className='max-w-[500px] w-full'>
        {/* Title */}
        <h1 className='text-[30px] font-medium text-gray-900 mb-1 text-center'>
          Select Profile
        </h1>

        {/* Description */}
        <p className='text-gray-700 text-[14px] font-normal text-center mb-8'>
          Proceed to onboarding by selecting your role from the list below
        </p>

        {/* Profile Options */}
        <div className='space-y-3'>
          {profileOptions.map((option) => (
            <Link 
              key={option.id} 
              href={option.id === 'clients' ? option.href : '#'}
              className={option.id === 'clients' ? 'block' : 'block pointer-events-none'}
            >
              <div className={`flex items-center justify-between p-4 rounded-[24px] border h-[106px] border-gray-200 transition-all group
                ${option.id === 'clients' 
                  ? 'hover:shadow-sm shadow-inner' 
                  : 'bg-gray-100'}`}>
                <div className='flex items-center justify-between w-full gap-4'>
                  <div className='flex items-center gap-4'>
                    <div className='min-w-[50px] w-[50px] h-[50px] flex items-center justify-center'>
                      <Image
                        src={option.icon}
                        alt={option.title}
                        width={50}
                        height={50}
                        className='w-12 h-12'
                      />
                    </div>
                    <div>
                      <h3 className='text-gray-900 font-medium mb-1'>
                        {option.title}
                      </h3>
                      <p className='text-gray-600 text-sm'>
                        {option.description}
                      </p>
                    </div>
                  </div>
                  {option.id === 'clients' && (
                    <div className='flex items-center justify-center min-w-[30px] w-[30px] h-[30px] rounded-full bg-gray-200'>
                      <ArrowRight className='w-4 h-4 text-gray-600 group-hover:text-[#05603A]' />
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
