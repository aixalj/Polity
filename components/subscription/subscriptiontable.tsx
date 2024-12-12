import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NetworkAccountModal from "@/components/ui/subscription modals/networkAccount"; // Adjust the import path as necessary
import Image from "next/image";
import { Subscription } from "./subscriptiondata";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const [selectedAccount, setSelectedAccount] = useState<Subscription | null>(null);
  const [activeTab, setActiveTab] = useState<"active" | "inactive">("active");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOpenModal = (subscription: Subscription) => {
    setSelectedAccount(subscription);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAccount(null);
  };

  const filteredSubscriptions = subscriptions.filter(subscription => 
    activeTab === "active" ? subscription.status === "Active" : subscription.status === "Inactive"
  );

  return (
    <div className="relative w-full flex flex-col">
      <Tabs defaultValue="active" className="w-full" onValueChange={(value) => setActiveTab(value as "active" | "inactive")}>
        <TabsList className="mb-4">
          <TabsTrigger value="active" className="px-4">
            Active
          </TabsTrigger>
          <TabsTrigger value="inactive" className="px-4">
            Inactive
          </TabsTrigger>
        </TabsList>

        <div className="w-full flex flex-col gap-1 overflow-y-scroll">
          <div className="w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs">
            <div className="w-[320px] flex-none px-6 py-3">Product</div>
            <div className="min-w-36 flex-none px-6 py-3">Cost</div>
            <div className="min-w-28 flex-auto px-6 py-3">Value</div>
            <div className="min-w-36 flex-auto px-6 py-3">Started</div>
            <div className="min-w-36 flex-auto px-6 py-3">Renews</div>
            <div className="min-w-30 flex-auto px-6 py-3">Status</div>
            <div className="w-full flex-auto px-6 py-3"></div>
          </div>
          <div>
            {Array.isArray(filteredSubscriptions) && filteredSubscriptions.length > 0 ? (
              <div>
                {filteredSubscriptions.map((subscription, index) => (
                  <div
                    key={index}
                    className="w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm "
                  >
                    <div className="w-full flex text-left text-gray-900">
                      <div className="w-[320px] break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-3 h-16 ">
                        <div className="min-w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center rounded-xl">
                          <Image
                            src={`/icons/networks/${subscription.network}.svg`}
                            alt={subscription.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <p className="flex flex-col items-left text-sm ">
                          <span className="text-sm font-medium text-gray-900 ">
                            {subscription.name}
                          </span>
                          <span className="text-sm font-regular text-gray-600">
                            {subscription.category}
                          </span>
                        </p>
                      </div>

                      <div className="min-w-36 gap-1.5 flex-auto px-6 py-3 text-sm text-gray-600 h-16 flex items-center">
                        <Image
                          src={"/icons/tokens/USDT.svg"}
                          alt="USDT"
                          width={16}
                          height={16}
                        />
                        {subscription.yourBid.toFixed(2)}
                        <span className="">USDT</span>
                      </div>
                      <div className="min-w-28 gap-1.5 flex-auto px-6 py-3 text-sm text-gray-600 h-16 flex items-center">
                        ${subscription.yourBid.toFixed(2)}
                      </div>
                      <div className="min-w-36 flex-auto px-6 py-3 text-sm text-gray-800 h-16 flex items-center">
                        {subscription.startTime.toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                      <div className="min-w-36 flex-auto px-6 py-3 text-sm text-gray-800 h-16 flex items-center">
                        {subscription.endTime.toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                      <div className="min-w-30 flex-auto px-6 py-3 h-16 flex items-center whitespace-nowrap">
                        <Badge
                          variant={
                            subscription.status === "Active"
                              ? "success"
                              : subscription.status === "Inactive"
                              ? "secondary"
                              : "success"
                          }
                        >
                          {subscription.status}
                        </Badge>
                      </div>
                      <div className="w-full flex-auto justify-end px-6 py-3 h-16 flex items-center whitespace-nowrap">
                        <Button 
                          variant="outline" 
                          onClick={() => handleOpenModal(subscription)}
                        >
                          {subscription.status === "Inactive" ? "Resubscribe" : "Manage"}
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
      </Tabs>

      {/* Network Account Modal */}
      {selectedAccount && (
        <NetworkAccountModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          networkAccountName={selectedAccount.name}
          networkAccountImage={`/icons/networks/${selectedAccount.network}.svg`}
          balance={`${selectedAccount.yourBid.toFixed(2)} USDT`}
          networkAccountNumber={selectedAccount.id || "1"}
          addNotification={(title, description, status) => {
            console.log(title, description, status);
          }}
        />
      )}
    </div>
  );
};

export { SubscriptionTable };