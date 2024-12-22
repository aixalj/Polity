'use client';

import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import checkicon from '@/public/checkicon-expired-modal.svg';
import Image from 'next/image';

interface LinkExpiredProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LinkExpired({ isOpen, onClose }: LinkExpiredProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] p-0 bg-white rounded-[20px] shadow-xl">
        <div className="p-6 flex flex-col items-start">
          {/* Icon */}
          <div className="mb-4 ">
            <Image src={checkicon} alt="Check Icon" width={48} height={48} />
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Link Expired or Used
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-left text-sm mb-6">
            The link you&apos;ve attempted to use has either been used already or it&apos;s expired. 
            Please proceed directly to the Login page to continue or request a new link.
          </p>

          {/* Done Button */}
          <Button 
            onClick={onClose}
            className="w-full text-white"
            variant='default'
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
