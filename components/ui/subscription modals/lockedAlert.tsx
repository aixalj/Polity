import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface WarningAlertProps {
  isVisible: boolean;
}

const WarningAlert: React.FC<WarningAlertProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className='bg-rose-50 border border-rose-200 rounded-lg p-4 mb-4'>
      <div className='flex items-start gap-3'>
        <AlertCircle className='h-5 w-5 text-rose-600 mt-0.5' />
        <div className='flex-1'>
          <h3 className='text-sm font-medium text-rose-700'>
          Payment Failed: Limited Access
          </h3>
          <p className='mt-1 text-sm text-rose-700'>
            We&apos;ve noticed you missed your recent payment for your wallet subscription. To avoid any disruption to your premium features, please update your payment information promptly.
          </p>
          <div className='mt-3'>
            <Link href='/marketplace/subscriptions'>
              <Button
                variant='ghost'
                className='p-0 m-0 h-auto bg-transparent hover:bg-transparent text-rose-700 flex items-center gap-1 hover:underline hover:text-rose-800'
              >
                Manage subscription <ArrowRight className='w-4 h-4' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningAlert;