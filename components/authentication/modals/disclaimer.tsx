'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { File02, AlertSquare } from '@untitled-ui/icons-react';

interface DisclaimerProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}

export function Disclaimer({ isOpen, onClose, onAgree }: DisclaimerProps) {
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[600px] p-0 bg-white rounded-[20px] shadow-xl'>
        {/* Header */}
        <div className='p-6 border-b border-gray-200'>
          <div className='flex flex-col items-start'>
            <AlertSquare className='w-8 h-8 mb-4 text-gray-700' />
            <div className='flex flex-col items-start'>
              <h2 className='text-xl font-medium text-gray-900 mb-1'>
                Disclaimer
              </h2>
            </div>
            <p className='text-gray-600 text-sm'>
              Carefully review the terms outlined in our Disclaimer to ensure
              you fully understand the legal implications and guidelines
              governing your interaction with Polity.
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className='max-h-[60vh] px-6 overflow-y-auto text-sm text-gray-600'>
          <p className='italic mb-4'>
            (Document will continue to be updated as we develop Polity Private
            MVP)
          </p>

          <p className='text-gray-600 text-sm'>
            Your access to and use of the Polity Private Minimum Viable Product
            (“Polity Private MVP”) by Bastion Cooperative (“Bastion”) is at your
            own risk. YOU UNDERSTAND AND AGREE THAT THE SERVICES OF THIS TRIAL
            RELEASE OF POLITY PRIVATE MVP (“SERVICES”) ARE PROVIDED TO YOU ON AN
            “AS IS” AND “AS AVAILABLE” BASIS. WITHOUT LIMITING THE FOREGOING, TO
            THE FULL EXTENT PERMITTED BY LAW, BASTION DISCLAIMS ALL WARRANTIES,
            EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, OR NON-INFRINGEMENT.{' '}
          </p>

          <p className='text-gray-600 text-sm'>
            Bastion makes no representations or warranties of any kind with
            respect to the Services, including any representation or warranty
            that the use of the Services will (a) be timely, uninterrupted or
            error-free or operate in combination with any other software,
            hardware, system or data, (b) meet your requirements or
            expectations, (c) be free of viruses or other harmful components;
            (d) be entirely secure or that the information you share with us
            will be secure.{' '}
          </p>

          <p className='text-gray-600 text-sm'>
            POLITY PRIVATE MVP HAS NOT BEEN SECURITY AUDITED OR PENETRATION
            TESTED AND CAN BE VULNERABLE TO HACKING ATTACKS OR OTHER MALISCIOUS
            INTERFERENCE. The Services are not provided with respect to bank
            deposits, financial instruments, are not insured and are subject to
            risks, including possible loss of the entire principal amount of
            digital currencies you deposit to your wallet(s) at the Polity
            Private MVP. No advice or information, whether oral or written,
            obtained from Bastion through the Services, will create any warranty
            not expressly made herein. The Services may be unavailable in some
            geographic areas or to some individuals and organisations. Your
            eligibility for the Services is subject to the final determination
            by Bastion and/or its compliance service provider(s).{' '}
          </p>

          <p className='text-gray-600 text-sm'>
            TO THE FULL EXTENT PERMISSABLE BY LAW, BASTION, ITS OFFICERS,
            CONTRACTORS AND CONTRIBUTORS WILL NOT BE LIABLE FOR ANY DAMAGES OF
            ANY KIND ARISING FROM THE USE OF SERVICES, OR FROM ANY INFORMATION,
            CONTENT, MATERIALS, SOFTWARE OR OTHER SERVICES INCLUDED ON OR
            OTHERWISE MADE AWAILABE TO YOU THROUGH POLITY PRIVATE MVP, OR ANY
            LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR
            INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE
            LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO
            ACCESS OR USE THE SERVICES; (B) ANY CONTENT OBTAINED FROM THE
            SERVICES; (C) UNAUTHORISED ACCESS, USE OR ALTERATION OF YOUR DATA,
            INCLUDING, BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTIAL,
            PUNITIVE, AND CONSEQUENTIAL DEMAGES UNLESS OTHERWISE SPECIFIED IN
            WRITING.{' '}
          </p>

          {/* Add the rest of the agreement text here */}
          {/* ... */}
        </div>

        {/* Footer */}
        <div className=' border-t border-gray-200'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-start gap-2 px-6 my-4'>
              <input
                type='checkbox'
                id='acknowledgment'
                checked={isAcknowledged}
                onChange={(e) => setIsAcknowledged(e.target.checked)}
                className='mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500'
              />
              <label
                htmlFor='acknowledgment'
                className='text-[14px] text-gray-700 cursor-pointer'
              >
                I acknowledge that I have read and understood the above
                Disclaimer.
              </label>
            </div>
            <div className='w-full flex items-center justify-center'>
              <div className='border-t border-gray-200 flex-grow' />
            </div>
            <div className='px-6 py-4'>
              <Button
                onClick={onAgree}
                className='w-full'
                disabled={!isAcknowledged}
              >
                Agree & Continue
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
