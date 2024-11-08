'use client';

import * as React from 'react';
import type { Config } from 'tailwindcss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import { usePathname } from 'next/navigation';

import CheckIcon from '@/public/icons/check.svg';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useState } from 'react';
import Image from 'next/image';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from '@/components/data';

import Link from 'next/link';
import {
  CreditCardCheck,
  CreditCardEdit,
  CreditCardSearch,
  ImageUserLeft,
  Link02,
  MessageCircle01,
  PencilLine,
  UserCheck01,
  Users03,
} from '@untitled-ui/icons-react';
import SelectProfileSuper from '@/public/select-profile-icon-super.svg';

const avatarVirtualNodeLinks = [
  {
    href: '/onboarding/superapp/verification',
    icon: UserCheck01,
    text: 'Identity Verification',
  },
  {
    href: '/onboarding/superapp/avatar',
    icon: Users03,
    text: 'Avatar Identity',
    className: 'font-medium',
  },
  {
    href: '/onboarding/superapp/nsp',
    icon: Link02,
    text: 'Connect with NSP',
    className: 'font-medium',
  },
  {
    href: '/onboarding/superapp/avn',
    icon: ImageUserLeft,
    text: 'Avatar Virtual Node',
    className: 'font-medium',
  },
  {
    href: '/onboarding/superapp/agreement',
    icon: PencilLine,
    text: 'Sign Agreement',
    className: 'font-medium',
  },
];

const walletSetupLinks = [
  {
    href: '/onboarding/superapp/wallet/provider',
    icon: CreditCardSearch,
    text: 'Select Provider',
  },
  {
    href: '/onboarding/superapp/wallet/customize',
    icon: CreditCardEdit,
    text: 'Customize Wallet',
  },
  //{
  //href: '/onboarding/wallet/confirm',
  //icon: CreditCardCheck,
  //text: 'Confirm Wallet',
  //},
  {
    href: '/onboarding/superapp/wallet/agreement',
    icon: PencilLine,
    text: 'Sign Agreement',
  },
];

const OnboardSideBar = () => {
  const pathname = usePathname();

  const isWalletSection = pathname.startsWith('/onboarding/superapp/wallet');
  const isAvatarSection =
    pathname.startsWith('/onboarding/superapp') && !isWalletSection;
  const isInstallationPage = pathname === '/onboarding/superapp/installation';
  const isWalletSetupPage = pathname === '/onboarding/superapp/wallet/setup';

  const isLinkComplete = (currentPath: string, linkHref: string) => {
    if (isInstallationPage) {
      return true; // All avatar links are complete on the installation page
    }

    if (isWalletSetupPage) {
      return true; // All wallet links are complete on the wallet setup page
    }

    const currentIndex = currentPath.startsWith('/onboarding/wallet')
      ? walletSetupLinks.findIndex((link) => link.href === currentPath)
      : avatarVirtualNodeLinks.findIndex((link) => link.href === currentPath);

    const linkIndex = currentPath.startsWith('/onboarding/wallet')
      ? walletSetupLinks.findIndex((link) => link.href === linkHref)
      : avatarVirtualNodeLinks.findIndex((link) => link.href === linkHref);

    return linkIndex < currentIndex;
  };

  return (
    <div className='px-2 pt-8 pb-2 hidden sm:flex sm:flex-col'>
      <a href='index.html' className='px-4 py-1'>
        <img
          className='h-6'
          src='https://polity.li/images/PolityLogo-Full-Main.svg'
          alt='Logo'
        />
      </a>
      <div className='flex items-center mt-4 pb-4 gap-1 px-4'>
        <Image
          className='w-16 h-16 mr-2'
          src={SelectProfileSuper}
          alt='Profile Logo'
        />
        <div>
          <h1 className='text-xl font-medium'>SuperApp</h1>
          <p className='text-sm font-medium text-gray-700'>
            Application Onboarding
          </p>
        </div>
      </div>
      <div className='px-4'>
        <p className='text-sm text-balance text-gray-600'>
          Set up your account by following this easy onboarding guide below.
        </p>
      </div>

      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear h-full'>
        <nav className='mt-3 w-80 h-full'>
          <div className='h-full gap-3 flex flex-col justify-between'>
            <ul className='flex px-4 flex-col gap-1'>
              <li className='flex gap-2 whitespace-nowrap pb-2.5 pr-3 items-center text-xs text-gray-500'>
                AVATAR VIRTUAL NODE
                <div className='w-full bg-gray-300 h-[1px]'></div>
                <div className='min-w-5 h-5 rounded-full border border-gray-300 bg-white'>
                  {(isWalletSection || isInstallationPage) && (
                    <Image src={CheckIcon} alt='Check' width={20} height={20} />
                  )}
                </div>
              </li>
              {isAvatarSection &&
                avatarVirtualNodeLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className={`group focus:ring-0 ${
                        pathname === link.href
                          ? 'w-full outline-none focus:tap-highlight-transparent hover:text-black hover:bg-white hover:shadow-sm focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-800 shadow-sm'
                          : isLinkComplete(pathname, link.href)
                            ? 'w-full outline-none focus:tap-highlight-transparent hover:text-black hover:bg-white hover:shadow-sm focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-600 '
                            : 'w-full outline-none focus:tap-highlight-transparent hover:text-black hover:bg-white hover:shadow-sm focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-600 target:bg-white target:text-black border border-transparent '
                      }`}
                      href={link.href}
                    >
                      <link.icon className='w-6 h-6 mr-1' />
                      {link.text}
                      {isLinkComplete(pathname, link.href) && (
                        <Image
                          src={CheckIcon}
                          alt='Check'
                          className='ml-auto'
                          width={20}
                          height={20}
                        />
                      )}
                    </Link>
                  </li>
                ))}
            </ul>
            <ul className='flex px-4 flex-col gap-1'>
              <li className='flex gap-2 whitespace-nowrap pr-3 pb-2.5 items-center text-xs text-gray-500'>
                WALLET SETUP
                <div className='w-full bg-gray-300 h-[1px]'></div>
                <div className='min-w-5 h-5 rounded-full border border-gray-300 bg-white'>
                  {isWalletSetupPage && (
                    <Image src={CheckIcon} alt='Check' width={20} height={20} />
                  )}
                </div>
              </li>
              {isWalletSection &&
                walletSetupLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className={`group focus:ring-0 ${
                        pathname === link.href
                          ? 'w-full outline-none focus:tap-highlight-transparent hover:text-black hover:bg-white hover:shadow-sm focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-800 shadow-sm'
                          : isLinkComplete(pathname, link.href)
                            ? 'w-full outline-none focus:tap-highlight-transparent hover:text-black hover:bg-white hover:shadow-sm focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-600 '
                            : 'w-full outline-none focus:tap-highlight-transparent hover:text-black hover:bg-white hover:shadow-sm focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-600 target:bg-white target:text-black border border-transparent '
                      }`}
                      href={link.href}
                    >
                      <link.icon className='w-5 h-5' />
                      {link.text}
                      {isLinkComplete(pathname, link.href) && (
                        <Image
                          src={CheckIcon}
                          alt='Check'
                          className='ml-auto'
                          width={20}
                          height={20}
                        />
                      )}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export { OnboardSideBar as OnboardSideBarSuperApp };
