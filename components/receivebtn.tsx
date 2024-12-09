'use client';

import * as React from 'react';
import { useState } from 'react';
import type { Config } from 'tailwindcss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createContext, ReactNode } from 'react';

import { ReceiveForm } from '@/components/receive';

import { SendModal } from '@/components/ui/send';
import { ReceiveModal } from '@/components/ui/receivemodal';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

import { WalletProvider } from '@/components/ui/formcontext';

import { useWallet } from '@/components/ui/formcontext';

import {
  FSDialog,
  FSDialogContent,
  FSDialogDescription,
  FSDialogHeader,
  FSDialogTitle,
  FSDialogTrigger,
} from '@/components/ui/fsdialog';

interface ReceiveBtnProps {
  variant?: 'wealth' | 'wallet' | 'network';
  hideText?: boolean; 
  className?: string; 
  styleType?: 'default' | 'primary' | 'secondary'; 
}

// const canContinue = () => {
//   if (
//     selectedWallet.length >= 3 &&
//     selectedNetwork.length >= 3 &&
//     selectedAsset.length >= 3
//   ) {
//     return true;
//   }
// };

import Link from 'next/link';

const ReceiveBtn: React.FC<ReceiveBtnProps> = ({
  variant = 'wealth',
  hideText = false,
  className,
  styleType = 'default',
}) => {
  // const {
  //   selectedWallet,
  //   setSelectedWallet,
  //   selectedNetwork,
  //   setSelectedNetwork,
  //   selectedAsset,
  //   setSelectedAsset,
  //   selectedRecipient,
  //   setSelectedRecipient,
  //   selectedPayment,
  //   setSelectedPayment,
  //   availableBalance,
  //   usdEquivalent,
  // } = useWallet();
  const buttonStyles = {
    default:
      'bg-primary-500 text-white hover:bg-primary-600 shadow-button-primary-default   items-center justify-center whitespace-nowrap rounded-xl gap-2 px-4  text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300',
    primary: 'bg-blue-500 text-white',
    secondary:
      'bg-white text-gray-700 hover:bg-gray-100 shadow-button-secondary-default items-center justify-center whitespace-nowrap rounded-xl gap-2 px-4  text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300',
  };

  const svgStyles = {
    default: 'white', 
    primary: 'white', 
    secondary: 'black', 
  };
  return (
    <div className={cn('flex gap-3')}>
      <WalletProvider>
        <Dialog>
          <DialogTrigger
            className={`inline-flex h-9 w-auto ${buttonStyles[styleType]} shadow-button-primary-default   items-center justify-center whitespace-nowrap rounded-xl gap-2 px-4  text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300`}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.83333 10.0001H10V14.1667M2.50833 10.0001H2.5M6.675 14.1667H6.66667M10.0083 17.5001H10M17.5083 10.0001H17.5M2.5 14.1667H3.75M12.9167 10.0001H14.5833M2.5 17.5001H6.66667M10 1.66675V6.66675M14.6667 17.5001H16.1667C16.6334 17.5001 16.8667 17.5001 17.045 17.4093C17.2018 17.3294 17.3293 17.2019 17.4092 17.0451C17.5 16.8668 17.5 16.6335 17.5 16.1667V14.6667C17.5 14.2 17.5 13.9667 17.4092 13.7884C17.3293 13.6316 17.2018 13.5041 17.045 13.4242C16.8667 13.3334 16.6334 13.3334 16.1667 13.3334H14.6667C14.2 13.3334 13.9666 13.3334 13.7883 13.4242C13.6315 13.5041 13.5041 13.6316 13.4242 13.7884C13.3333 13.9667 13.3333 14.2 13.3333 14.6667V16.1667C13.3333 16.6335 13.3333 16.8668 13.4242 17.0451C13.5041 17.2019 13.6315 17.3294 13.7883 17.4093C13.9666 17.5001 14.2 17.5001 14.6667 17.5001ZM14.6667 6.66675H16.1667C16.6334 6.66675 16.8667 6.66675 17.045 6.57592C17.2018 6.49603 17.3293 6.36854 17.4092 6.21174C17.5 6.03348 17.5 5.80013 17.5 5.33341V3.83341C17.5 3.3667 17.5 3.13335 17.4092 2.95509C17.3293 2.79829 17.2018 2.6708 17.045 2.59091C16.8667 2.50008 16.6334 2.50008 16.1667 2.50008H14.6667C14.2 2.50008 13.9666 2.50008 13.7883 2.59091C13.6315 2.6708 13.5041 2.79829 13.4242 2.95509C13.3333 3.13335 13.3333 3.3667 13.3333 3.83341V5.33341C13.3333 5.80013 13.3333 6.03348 13.4242 6.21174C13.5041 6.36854 13.6315 6.49603 13.7883 6.57592C13.9666 6.66675 14.2 6.66675 14.6667 6.66675ZM3.83333 6.66675H5.33333C5.80004 6.66675 6.0334 6.66675 6.21166 6.57592C6.36846 6.49603 6.49594 6.36854 6.57584 6.21174C6.66667 6.03348 6.66667 5.80013 6.66667 5.33341V3.83341C6.66667 3.3667 6.66667 3.13335 6.57584 2.95509C6.49594 2.79829 6.36846 2.6708 6.21166 2.59091C6.0334 2.50008 5.80004 2.50008 5.33333 2.50008H3.83333C3.36662 2.50008 3.13327 2.50008 2.95501 2.59091C2.79821 2.6708 2.67072 2.79829 2.59083 2.95509C2.5 3.13335 2.5 3.3667 2.5 3.83341V5.33341C2.5 5.80013 2.5 6.03348 2.59083 6.21174C2.67072 6.36854 2.79821 6.49603 2.95501 6.57592C3.13327 6.66675 3.36662 6.66675 3.83333 6.66675Z'
                stroke={svgStyles[styleType]}
                stroke-width='1.66667'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>{' '}
            {!hideText && <span>Receive</span>}{' '}
            
          </DialogTrigger>
          <DialogContent className='border border-gray-200 rounded-3xl p-0 flex flex-col gap-0'>
            <ReceiveModal />
          </DialogContent>
        </Dialog>

        <FSDialog>
          <FSDialogTrigger
            className={`inline-flex h-9 w-auto ${buttonStyles[styleType]} shadow-button-primary-default   items-center justify-center whitespace-nowrap rounded-xl gap-2 px-4  text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300`}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.0004 15.8334V10M10.2433 15.9039L16.0587 17.8507C16.5145 18.0033 16.7423 18.0796 16.8829 18.0248C17.0049 17.9773 17.0975 17.8752 17.1328 17.7491C17.1735 17.6038 17.0752 17.3845 16.8787 16.9459L10.6383 3.01866C10.4462 2.58975 10.3501 2.37529 10.2162 2.30884C10.0999 2.2511 9.96334 2.25089 9.84686 2.30824C9.71279 2.37427 9.61601 2.58841 9.42245 3.01671L3.12703 16.9467C2.92895 17.385 2.82991 17.6042 2.87019 17.7496C2.90516 17.8758 2.99747 17.9783 3.11941 18.0261C3.25981 18.0813 3.48806 18.0055 3.94455 17.854L9.82165 15.9034C9.89991 15.8774 9.93904 15.8644 9.97905 15.8593C10.0146 15.8547 10.0505 15.8548 10.086 15.8594C10.126 15.8646 10.1651 15.8777 10.2433 15.9039Z'
                stroke={svgStyles[styleType]}
                stroke-width='1.66667'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>{' '}
            {!hideText && <span>Send</span>} 
          </FSDialogTrigger>
          <FSDialogContent className='flex w-screen h-screen bg-gray-50'>
            <SendModal />
          </FSDialogContent>
        </FSDialog>
      </WalletProvider>
    </div>
  );
};

export { ReceiveBtn };
