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

import { QrCode01, Send02 } from '@untitled-ui/icons-react';

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
  styleType?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary-destructive' | 'walletconnect'; 
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
    default: 'bg-primary-500 text-white hover:bg-primary-600 shadow-button-primary-default',
    secondary: 'bg-white text-gray-700 hover:bg-gray-50 shadow-button-secondary-default',
    outline: 'border border-gray-200 hover:bg-gray-50',
    ghost: 'hover:bg-gray-100',
    link: 'text-primary-500 hover:underline',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
    'secondary-destructive': 'text-red-500 hover:bg-red-50',
    walletconnect: 'bg-blue-500 text-white hover:bg-blue-600'
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
          <DialogTrigger asChild>
            <Button 
              variant="secondary" 
              size="default"
              className={cn(buttonStyles[styleType], className)}
            >
              <QrCode01 className='w-5 h-5' />
              {!hideText && <span>Receive</span>}
            </Button>
          </DialogTrigger>
          <DialogContent className='border border-gray-200 rounded-3xl p-0 flex flex-col gap-0'>
            <ReceiveModal />
          </DialogContent>
        </Dialog>

        <FSDialog>
          <FSDialogTrigger asChild>
            <Button 
              variant="secondary" 
              size="default"
              className={cn(buttonStyles[styleType], className)}
            >
             <Send02 className='w-5 h-5' />
              {!hideText && <span>Send</span>}
            </Button>
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
