'use client';

import * as React from 'react';
import { useState } from 'react';
import type { Config } from 'tailwindcss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SubscribeModal } from '@/components/ui/subscribemodal';
import {
  FSDialog,
  FSDialogContent,
  FSDialogTrigger,
} from '@/components/ui/fsdialog';
import { WalletProvider } from '@/components/ui/formcontext';
import { SubscribeProvider } from '@/components/ui/subscribecontext';

interface SubscribeProps {
  variant?: 'wealth' | 'wallet' | 'network' | 'avatar';
  provider: 'Safeheron' | 'DFNS' | 'Fireblocks';
  disabled?: boolean;
}

const Subscribe: React.FC<SubscribeProps> = ({
  variant = 'wealth',
  provider,
  disabled = false,
}) => {
  const buttonText = variant === 'network' ? 'Buy Now' : 'Subscribe Now';

  return (
    <div className='flex gap-3'>
      <SubscribeProvider>
        <WalletProvider>
          <FSDialog>
            <FSDialogTrigger asChild>
              <Button
                variant='default'
                className='w-full'
                size='default'
                disabled={disabled}
              >
                {buttonText}
              </Button>
            </FSDialogTrigger>
            <FSDialogContent className='flex w-screen h-screen bg-gray-50'>
              <SubscribeModal provider={provider} flowType={variant === 'avatar' ? 'avatar' : 'default'} />
            </FSDialogContent>
          </FSDialog>
        </WalletProvider>
      </SubscribeProvider>
    </div>
  );
};

export { Subscribe };
