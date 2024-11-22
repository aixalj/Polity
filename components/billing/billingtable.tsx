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

import { billings, Billing } from "./billingdata";
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

const BillingTable: React.FC<{
  billings: Billing[];
}> = ({ billings }) => {
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
          <div className="w-[400px] flex-none px-6 py-3">Product</div>
          <div className="w-36 flex-none px-6 py-3">Billing Date</div>
          <div className="w-36 flex-none px-6 py-3">Amount</div>
          <div className="w-36 flex-none px-6 py-3">USD Value</div>
          <div className="w-36 flex-none px-6 py-3">Status</div>
          <div className="w-20 flex-none px-6 py-3"></div>
        </div>
        <div>
          {Array.isArray(billings) && billings.length > 0 ? (
            <div>
              {billings.map((billing, index) => (
                <div
                  key={index}
                  className="w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm"
                >
                  <div className="w-full flex text-left text-gray-900">
                    <div className="w-[400px] flex-none px-6 py-3 flex items-center gap-3 h-16">
                      <div className="min-w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center rounded-xl">
                        <Image
                          src={"/icons/Lukka.svg"}
                          alt={billing.name}
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="flex flex-col  items-left text-sm ">
                        <span className="text-sm font-medium text-gray-900 ">
                          {billing.name}
                        </span>
                        <span className="text-sm font-regular text-gray-600">
                          {billing.category}
                        </span>
                      </p>
                    </div>
                    <div className="w-36 flex-none px-6 py-3 flex items-center h-16">
                      {billing.billingDate.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                    <div className="w-36 flex-none px-6 py-3 flex items-center gap-1.5 h-16">
                      <Image
                        src={"/icons/tokens/USDT.svg"}
                        alt="USDT"
                        width={16}
                        height={16}
                      />
                      {billing.amount.toFixed(2)}
                      <span>USDT</span>
                    </div>
                    <div className="w-36 flex-none px-6 py-3 flex items-center h-16">
                      ${billing.amount.toFixed(2)}
                    </div>
                    <div className="w-36 flex-none px-6 py-3 flex items-center h-16">
                      <Badge
                        variant={
                          billing.status === "Paid"
                            ? "success"
                            : billing.status === "Pending"
                              ? "warning"
                              : "default"
                        }
                      >
                        {billing.status}
                      </Badge>
                    </div>
                    <div className="w-20 ml-auto flex-none px-6 py-3 flex items-center justify-end h-16">
                      <Button variant="link" size="icon">
                        <DotsVertical className="w-4 h-4" />
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

export { BillingTable };
