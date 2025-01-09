import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NetworkAccountModal from '@/components/ui/subscription modals/networkAccount'; // Adjust the import path as necessary
import Image from 'next/image';
import { Subscription } from './subscriptiondata';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FSDialog, FSDialogContent } from '@/components/ui/fsdialog';
import { SubscribeModal } from '@/components/ui/subscribemodal';
import {
  SubscribeProvider,
  useSubscribe,
} from '@/components/ui/subscribecontext';
import { WalletProvider } from '@/components/ui/formcontext';
import NoSubscription from '@/components/ui/subscription modals/noSubscription';
import { Notification } from '@/components/ui/notification';

const getTimeRemaining = (endTime: Date) => {
  const total = endTime.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

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

const SubscriptionTable: React.FC<{
  subscriptions: Subscription[];
}> = ({ subscriptions }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<Subscription | null>(
    null
  );
  const [activeTab, setActiveTab] = useState<'active' | 'inactive'>('active');
  const [notifications, setNotifications] = useState<
    Array<{
      title: string;
      description: string;
      status: 'success' | 'error' | 'warning' | 'info';
    }>
  >([]);

  const handleOpenSubscribeModal = () => {
    setIsSubscribeModalOpen(true); // Open the subscribe modal
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOpenModal = (subscription: Subscription) => {
    if (subscription.status === 'Inactive') {
      if (subscription.network === 'Fireblocks') {
        setSelectedAccount({
          ...subscription,
          isFireblocksInactive: true,
        });
        setIsModalOpen(true);
      } else if (subscription.network === 'MATIC') {
        setSelectedAccount({
          ...subscription,
          status: 'Inactive',
        });
        setIsModalOpen(true);
      } else {
        setIsSubscribeModalOpen(true);
      }
    } else {
      setSelectedAccount(subscription);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAccount(null);
  };

  const filteredSubscriptions = subscriptions.filter((subscription) =>
    activeTab === 'active'
      ? subscription.status === 'Active' || subscription.status === 'Pending'
      : subscription.status === 'Inactive'
  );

  const handleInstallClick = (subscription: Subscription) => {
    if (subscription.name.includes('Safeheron')) {
      setSelectedAccount(subscription);
      setIsModalOpen(true);
    } else {
      // Handle other install cases
      console.log('Installing...');
    }
  };

  const addNotification = (
    title: string,
    description: string,
    status: 'success' | 'error' | 'warning' | 'info'
  ) => {
    setNotifications((prev) => [...prev, { title, description, status }]);
  };

  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        setNotifications([]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notifications]);

  return (
    <div className='relative w-full min-w-[1024px] max-w-[1440px] mx-auto flex flex-col overscroll-y-none'>
      <Tabs
        defaultValue='active'
        className='w-full'
        onValueChange={(value) => setActiveTab(value as 'active' | 'inactive')}
      >
        <TabsList className='mb-4'>
          <TabsTrigger value='active' className='px-4'>
            Active
          </TabsTrigger>
          <TabsTrigger value='inactive' className='px-4'>
            Inactive
          </TabsTrigger>
        </TabsList>

        <div className='w-full flex flex-col gap-1 overscroll-y-none'>
          <div className='w-full flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs'>
            <div className='w-64 flex-none px-6 py-3'>Product</div>
            <div className='w-36 flex-none px-6 py-3'>Cost</div>
            <div className='w-32 flex-none px-6 py-3'>Value</div>
            <div className='w-32 flex-none px-6 py-3'>Started</div>
            <div className='w-32 flex-none px-6 py-3'>Renews</div>
            <div className='w-32 flex-none px-6 py-3'>Status</div>
            <div className='flex-1 pl-0 pr-6 py-3 flex justify-end min-w-[180px]'></div>
          </div>
          <div>
            {Array.isArray(filteredSubscriptions) &&
            filteredSubscriptions.length > 0 ? (
              <div>
                {filteredSubscriptions.map((subscription, index) => (
                  <div
                    key={index}
                    className='w-full flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm'
                  >
                    <div className='w-full flex text-left text-gray-900'>
                      <div className='w-64 break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-3 h-16'>
                        <div className='min-w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center rounded-xl'>
                          <Image
                            src={`/icons/networks/${subscription.network}.svg`}
                            alt={subscription.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <p className='flex flex-col items-left text-sm '>
                          <span className='text-sm font-medium text-gray-900 '>
                            {subscription.name}
                          </span>
                          <span className='text-sm font-regular text-gray-600'>
                            {subscription.category}
                          </span>
                        </p>
                      </div>

                      <div className='w-36 flex-none px-6 py-3 text-sm text-gray-600 h-16 flex items-center gap-1.5'>
                        <Image
                          src={'/icons/tokens/USDT.svg'}
                          alt='USDT'
                          width={16}
                          height={16}
                        />
                        {subscription.yourBid.toFixed(2)}
                        <span className=''>USDT</span>
                      </div>
                      <div className='w-32 flex-none px-6 py-3 text-sm text-gray-600 h-16 flex items-center gap-1.5'>
                        ${subscription.yourBid.toFixed(2)}
                      </div>
                      <div className='w-32 flex-none px-6 py-3 text-sm text-gray-800 h-16 flex items-center'>
                        {subscription.startTime.toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </div>
                      <div className='w-32 flex-none px-6 py-3 text-sm text-gray-800 h-16 flex items-center'>
                        {subscription.endTime.toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </div>
                      <div className='w-32 flex-none px-6 py-3 h-16 flex items-center whitespace-nowrap'>
                        <Badge
                          variant={
                            subscription.status === 'Active'
                              ? 'success'
                              : subscription.status === 'Deactivated'
                              ? 'destructive'
                              : subscription.status === 'Pending'
                              ? 'pending'
                              : 'destructive'
                          }
                        >
                          {subscription.status}
                        </Badge>
                      </div>
                      <div className='flex-1 pl-0 pr-6 py-3 h-16 flex items-center justify-end whitespace-nowrap gap-2 min-w-[180px]'>
                        {subscription.status === 'Pending' ? (
                          <Button
                            variant='outline'
                            onClick={() => handleInstallClick(subscription)}
                          >
                            Install
                          </Button>
                        ) : subscription.status !== 'Inactive' ? (
                          <div className='w-[76px]'></div>
                        ) : null}
                        <Button
                          variant='outline'
                          className={
                            subscription.status === 'Inactive'
                              ? 'w-[100px]'
                              : 'w-[76px]'
                          }
                          onClick={() => {
                            if (subscription.status === 'Inactive') {
                              handleOpenModal(subscription);
                            } else {
                              setSelectedAccount(subscription);
                              setIsModalOpen(true);
                            }
                          }}
                        >
                          {subscription.status === 'Inactive'
                            ? 'Resubscribe'
                            : 'Manage'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <NoSubscription />
            )}
          </div>
        </div>
      </Tabs>

      {/* Network Account Modal */}
      {selectedAccount && (
        <NetworkAccountModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          networkAccountName={selectedAccount.name}
          networkAccountImage={`/icons/networks/${selectedAccount.network}.svg`}
          balance={`${selectedAccount.yourBid.toFixed(2)} USDT`}
          networkAccountNumber={selectedAccount.id || '1'}
          addNotification={addNotification}
          status={selectedAccount.status}
          onResubscribe={handleOpenSubscribeModal}
          isDFNS={selectedAccount.network === 'DFNS'}
        />
      )}

      {/* Subscribe Modal */}
      <FSDialog
        open={isSubscribeModalOpen}
        onOpenChange={setIsSubscribeModalOpen}
      >
        <FSDialogContent className=' w-full overflow-y-auto bg-white rounded-xl'>
          <WalletProvider>
            <SubscribeProvider>
              <SubscribeModal
                provider={
                  selectedAccount?.network === 'Fireblocks' ||
                  selectedAccount?.network === 'Safeheron' ||
                  selectedAccount?.network === 'DFNS'
                    ? selectedAccount.network
                    : 'DFNS'
                }
                initialTab='confirm'
              />
            </SubscribeProvider>
          </WalletProvider>
        </FSDialogContent>
      </FSDialog>

      {/* Add fixed positioning container for notifications */}
      <div className='fixed bottom-4 left-4 z-[100] flex flex-col gap-2 w-[416px]'>
        {notifications.map((notification, index) => (
          <Notification
            key={index}
            title={notification.title}
            description={notification.description}
            status={notification.status}
            className='shadow-2xl'
            onClose={() => {
              setNotifications((prev) => prev.filter((_, i) => i !== index));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { SubscriptionTable };
