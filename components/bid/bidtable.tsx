import * as React from 'react';
import type { Config } from 'tailwindcss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import Link from 'next/link';

import {
  DotsVertical,
  Download01,
  Edit03,
  Eye,
  File06,
} from '@untitled-ui/icons-react';

import { Notification } from '@/components/ui/notification';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from '@/components/data';

import { Badge } from '@/components/ui/badge';

import { bids, Bid } from './biddata';
import { useState, useEffect } from 'react';
import RebidModal from '@/components/bid/rebidmodal'; // Import the RebidModal

const getTimeRemaining = (endTime: Date) => {
  const total = endTime.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

interface BidTableProps {
  bids: Bid[];
  addNotification: (
    title: string,
    description: string,
    status: 'success' | 'error' | 'warning' | 'info'
  ) => void; // Add this line
}

const formatTimeRemaining = (endTime: Date): string => {
  const time = getTimeRemaining(endTime);

  if (time.days > 0) {
    return `${time.days}d ${time.hours}h`;
  } else if (time.hours > 0) {
    return `${time.hours}h ${time.minutes}m ${time.seconds}s`;
  } else if (time.minutes > 0) {
    return `${time.minutes}m ${time.seconds}s`;
  } else {
    return `${time.seconds}s`;
  }
};

const BidTable: React.FC<{
  bids: Bid[];
  addNotification: (
    title: string,
    description: string,
    status: 'success' | 'error' | 'warning' | 'info'
  ) => void; // Add this line
}> = ({ bids, addNotification }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRebidModalOpen, setRebidModalOpen] = useState(false); // State for modal
  const [selectedBid, setSelectedBid] = useState<Bid | null>(null); // State for selected bid

  // Notification state
  const [notifications, setNotifications] = useState<any[]>([]); // Array to hold notifications

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRebidClick = (bid: Bid) => {
    setSelectedBid(bid); // Set the selected bid
    setRebidModalOpen(true); // Open the modal
  };

  const [notification, setNotification] = useState<{
    title: string;
    description: string;
    status: 'success' | 'error' | 'warning' | 'info'; // Updated to include all status types
  } | null>(null);

  const handleConfirmRebid = (newBid: number) => {
    if (newBid > (selectedBid?.highestBid || 0)) {
      addNotification(
        'Bid Updated',
        `Your bid for ${newBid} has been recorded. Track your auction status in My Bids.`,
        'success'
      );
      setNotifications((prev) => [
        ...prev,
        {
          title: 'Bid Updated',
          description: `Your bid for ${newBid} has been recorded. Track your auction status in My Bids.`,
          status: 'success',
        },
      ]);
    } else {    
    }
    setRebidModalOpen(false); // Close the modal
  };

  return (
    <div className='relative w-full flex flex-col '>
      <RebidModal
        isOpen={isRebidModalOpen}
        onClose={() => setRebidModalOpen(false)}
        timeLeft={selectedBid ? formatTimeRemaining(selectedBid.endTime) : ''}
        currentBid={selectedBid ? selectedBid.yourBid : 0}
        highestBid={selectedBid ? selectedBid.highestBid : 0}
        onConfirm={handleConfirmRebid}
        addNotification={addNotification}
      />
        {/* Render Notifications */}
        <div className='fixed bottom-4 left-4 max-w-sm z-50 rounded-[20px]'>
        {notifications.map((notification, index) => (
          <Notification
            key={index}
            title={notification.title}
            description={notification.description}
            status='success'
            className='shadow-2xl'
            onClose={() => setNotifications((prev) => prev.filter((_, i) => i !== index))}
          />
        ))}
      </div>
      <div className='w-full flex flex-col gap-1 overflow-y-scroll'>
        <div className='w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs'>
          <div className='w-[400px] flex-none px-6 py-3'>Auction</div>
          <div className='min-w-36 flex-none px-6 py-3'>Your Bid</div>
          <div className='min-w-36 flex-auto px-6 py-3'>Highest Bid</div>
          <div className='min-w-36 flex-auto px-6 py-3'>Time Remaining</div>
          <div className='min-w-30 flex-auto px-6 py-3'>Status</div>
          <div className='w-full flex-auto px-6 py-3'></div>
        </div>
        <div>
          {Array.isArray(bids) && bids.length > 0 ? (
            <div>
              {bids.map((bid, index) => (
                <div
                  key={index}
                  className='w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm '
                >
                  <div className='w-full flex text-left text-gray-900'>
                    <div className='w-[400px] break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-3 h-16 '>
                      <div className='min-w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center rounded-xl'>
                        <Image
                          src={'/icons/coinfirm.png'}
                          alt={bid.name}
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className='flex flex-col items-left text-sm '>
                        <span className='text-sm font-medium text-gray-900 '>
                          {bid.name}
                        </span>
                        <span className='text-sm font-regular text-gray-600'>
                          {bid.category}
                        </span>
                      </p>
                    </div>

                    <div className='min-w-36 gap-1.5 flex-auto px-6 py-3 text-sm text-gray-600 h-16 flex items-center'>
                      <Image
                        src={'/icons/tokens/USDT.svg'}
                        alt='USDT'
                        width={16}
                        height={16}
                      />
                      {bid.yourBid.toFixed(2)}
                      <span className=''>USDT</span>
                    </div>
                    <div className='min-w-36 gap-1.5 flex-auto px-6 py-3 text-sm text-gray-600 h-16 flex items-center'>
                      <Image
                        src={'/icons/tokens/USDT.svg'}
                        alt='USDT'
                        width={16}
                        height={16}
                      />
                      {bid.highestBid.toFixed(2)}
                      <span className=''>USDT</span>
                    </div>
                    <div className='min-w-36 flex-auto px-6 py-3 text-sm text-gray-800 h-16 flex items-center'>
                      {formatTimeRemaining(bid.endTime)}
                    </div>
                    <div className='min-w-30 flex-auto px-6 py-3 h-16 flex items-center whitespace-nowrap'>
                      <Badge
                        variant={
                          bid.status === 'Top Bidder'
                            ? 'success'
                            : bid.status === 'Outbid'
                            ? 'warning'
                            : 'success'
                        }
                      >
                        {bid.status}
                      </Badge>
                    </div>
                    <div className='w-full flex-auto justify-end px-6 py-3 h-16 flex items-center whitespace-nowrap'>
                      <Button
                        variant='outline'
                        onClick={() => handleRebidClick(bid)}
                      >
                        <Edit03 className='w-4 h-4' /> Rebid
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No assets to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { BidTable };
