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

import { bids, Bid } from "./biddata";
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

const BidTable: React.FC<{
  bids: Bid[];
}> = ({ bids }) => {
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
          <div className="w-[400px] flex-none px-6 py-3">Auction</div>
          <div className="min-w-36 flex-none px-6 py-3">Your Bid</div>
          <div className="min-w-36 flex-auto px-6 py-3">Highest Bid</div>
          <div className="min-w-36 flex-auto px-6 py-3">Time Remaining</div>
          <div className="min-w-30 flex-auto px-6 py-3">Status</div>
          <div className="w-full flex-auto px-6 py-3"></div>

          {/* <div className="w-36 flex-auto px-6 py-3">Balance</div> */}
        </div>
        <div>
          {Array.isArray(bids) && bids.length > 0 ? (
            <div>
              {bids
                // .sort((a, b) => b.value - a.value)
                .map((bid, index) => (
                  <div
                    key={index}
                    className="w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm "
                  >
                    <div className="w-full flex text-left  text-gray-900">
                      <div className="w-[400px] break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-3 h-16 ">
                        <div className="min-w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center rounded-xl">
                          <Image
                            src={"/icons/coinfirm.png"}
                            alt={bid.name}
                            width={20}
                            height={20}
                          />
                        </div>
                        <p className="flex flex-col  items-left text-sm ">
                          <span className="text-sm font-medium text-gray-900 ">
                            {bid.name}
                          </span>
                          <span className="text-sm font-regular text-gray-600">
                            {bid.category}
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
                        {bid.yourBid.toFixed(2)}
                        <span className="">USDT</span>
                      </div>
                      <div className="min-w-36 gap-1.5 flex-auto  px-6 py-3 text-sm text-gray-600 h-16 flex items-center">
                        <Image
                          src={"/icons/tokens/USDT.svg"}
                          alt="USDT"
                          width={16}
                          height={16}
                        />
                        {bid.highestBid.toFixed(2)}
                        <span className="">USDT</span>
                      </div>
                      <div className="min-w-36 flex-auto px-6 py-3 text-sm text-gray-800 h-16 flex items-center">
                        {formatTimeRemaining(bid.endTime)}
                      </div>
                      <div className="min-w-30 flex-auto  px-6 py-3 h-16 flex items-center whitespace-nowrap">
                        <Badge
                          variant={
                            bid.status === "Top Bidder"
                              ? "success"
                              : bid.status === "Outbid"
                                ? "warning"
                                : "success"
                          }
                        >
                          {bid.status}
                        </Badge>
                      </div>
                      <div className="w-full flex-auto justify-end  px-6 py-3 h-16 flex items-center whitespace-nowrap">
                        <Button variant="outline">
                          <Edit03 className="w-4 h-4" /> Rebid
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
