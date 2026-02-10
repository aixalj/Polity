import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface WarningAlertProps {
  isVisible: boolean;
}

const WarningAlert: React.FC<WarningAlertProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className='bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4'>
      <div className='flex items-start gap-3'>
        <AlertTriangle className='h-5 w-5 text-amber-600 mt-0.5' />
        <div className='flex-1'>
          <h3 className='text-sm font-medium text-amber-800'>
            Payment Reminder: Action Required
          </h3>
          <p className='mt-1 text-sm text-amber-700'>
            We&apos;ve noticed you missed your recent payment for your wallet subscription. To avoid any disruption to your premium features, please update your payment information promptly.
          </p>
          <div className='mt-3'>
            <Link href='/hub/subscriptions'>
              <Button
                variant='ghost'
                className='p-0 m-0 h-auto bg-transparent hover:bg-transparent text-amber-700 flex items-center gap-1 hover:underline hover:text-amber-800'
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