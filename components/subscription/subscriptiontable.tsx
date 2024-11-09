import * as React from "react";
import type { Config } from "tailwindcss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";

import {
  DotsVertical,
  Download01,
  Edit03,
  Eye,
  File06,
} from "@untitled-ui/icons-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from "@/components/data";

import { Badge } from "@/components/ui/badge";

import { subscriptions, Subscription } from "./subscriptiondata";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full flex flex-col ">
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
          {Array.isArray(subscriptions) && subscriptions.length > 0 ? (
            <div>
              {subscriptions.map((subscription, index) => (
                <div
                  key={index}
                  className="w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm "
                >
                  <div className="w-full flex text-left  text-gray-900">
                    <div className="w-[320px] break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-3 h-16 ">
                      <div className="min-w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center rounded-xl">
                        <Image
                          src={`/icons/networks/${subscription.network}.svg`}
                          alt={subscription.name}
                          width={40}
                          height={40}
                        />
                      </div>
                      <p className="flex flex-col  items-left text-sm ">
                        <span className="text-sm font-medium text-gray-900 ">
                          {subscription.name}
                        </span>
                        <span className="text-sm font-regular text-gray-600">
                          {subscription.category}
                        </span>
                      </p>
                    </div>

                    <div className="min-w-36 gap-1.5 flex-auto  px-6 py-3 text-sm text-gray-600 h-16 flex items-center">
                      <Image
                        src={"/icons/tokens/USDT.svg"}
                        alt="USDT"
                        width={16}
                        height={16}
                      />
                      {subscription.yourBid.toFixed(2)}
                      <span className="">USDT</span>
                    </div>
                    <div className="min-w-28 gap-1.5 flex-auto  px-6 py-3 text-sm text-gray-600 h-16 flex items-center">
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
                    <div className="min-w-30 flex-auto  px-6 py-3 h-16 flex items-center whitespace-nowrap">
                      <Badge
                        variant={
                          subscription.status === "Top Bidder"
                            ? "success"
                            : subscription.status === "Outbid"
                              ? "warning"
                              : "success"
                        }
                      >
                        {subscription.status}
                      </Badge>
                    </div>
                    <div className="w-full flex-auto justify-end  px-6 py-3 h-16 flex items-center whitespace-nowrap">
                      <Button variant="outline">Manage</Button>
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

export { SubscriptionTable };
