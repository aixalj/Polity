'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import onramperWidget from '@/public/onramper-widget.svg';

interface OnramperSVGProps {
  setNotifications?: React.Dispatch<
    React.SetStateAction<Array<{ title: string }>>
  >;
  onClose?: () => void;
}

const OnramperSVG: React.FC<OnramperSVGProps> = ({
  setNotifications,
  onClose,
}) => {
  const handleClick = () => {
    if (setNotifications) {
      setNotifications([{ title: 'Purchase Successful' }]);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className='p-4'>
      <div className='flex flex-col items-center gap-4'>
        <Image
          src={onramperWidget}
          alt='Onramper Widget'
          width={350}
          height={350}
          className='cursor-pointer'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default OnramperSVG;
