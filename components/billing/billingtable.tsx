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
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 40 40'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clip-path='url(#clip0_127_5473)'>
                            <rect
                              x='-0.5'
                              y='-0.5'
                              width='41'
                              height='41'
                              rx='8.5'
                              fill='#CBFFEB'
                            />
                            <rect
                              x='-0.5'
                              y='-0.5'
                              width='41'
                              height='41'
                              rx='8.5'
                              stroke='#D0D5DD'
                            />
                            <g clip-path='url(#clip1_127_5473)'>
                              <path
                                d='M26.5454 12C31.1448 12 34.8723 15.6995 34.8723 20.2643C34.8723 24.8291 31.1448 28.4984 26.5454 28.4984H12.2963C7.697 28.4984 4 24.8291 4 20.2643C4 15.6995 7.697 12 12.2963 12H26.5454ZM108.009 12.5375C112.247 12.5375 115.223 15.7297 115.223 20.3247C115.223 24.6212 112.337 27.9627 108.069 27.9627C106.114 27.9627 104.311 27.1871 102.958 25.8446V33.3333H100.313V12.6868H102.657L102.898 14.5667C104.071 13.2234 105.874 12.5375 108.009 12.5375ZM92.7381 12.5375C94.4514 12.5375 98.3893 13.1639 98.3893 19.0711V27.8125H95.7745V19.2204C95.7745 17.1912 95.173 14.8643 92.3479 14.8643C89.9729 14.8643 88.5005 16.6546 88.5005 19.6975V27.8125H85.8848V19.2204C85.8848 16.4156 84.712 14.8643 82.518 14.8643C80.1736 14.8643 78.6706 16.7443 78.6706 19.7872V27.8125H75.9951V12.6868H78.3699L78.5203 14.3277C79.5426 13.3131 81.015 12.5375 82.9093 12.5375C84.8035 12.5375 86.4568 13.4624 87.5381 15.0136C88.7994 13.3727 90.5136 12.5375 92.7381 12.5375ZM72.9578 25.2467C72.9578 25.4262 73.1081 25.4555 73.2585 25.4555H74.6711V27.8125H73.2585C71.9354 27.8125 71.0036 27.1862 70.6134 26.0818C69.2608 27.4242 67.6978 27.9618 65.4123 27.9618C62.7368 27.9618 60.0011 26.4701 60.0011 23.3676C60.0011 20.2652 62.2855 18.5345 66.1329 18.5345H70.2812V17.8184C70.2812 15.879 69.019 14.7755 66.764 14.7755C64.87 14.7755 63.4574 15.5511 63.1567 16.9833L63.0967 17.2818H60.421L60.541 16.7452C61.1424 14.0897 63.4565 12.5384 66.9135 12.5384C70.7608 12.5384 72.9558 14.5677 72.9558 17.9686V25.2467H72.9578ZM123.91 12.5375C127.968 12.5375 130.854 15.4019 130.854 19.5482C130.854 19.9063 130.854 20.4731 130.794 20.8009H119.431V20.8604C119.491 23.7541 121.295 25.6935 123.82 25.6935C125.714 25.6935 127.518 24.679 127.968 22.9785L128.058 22.6507H130.734L130.584 23.277C129.862 26.2604 127.277 27.9609 124.061 27.9609C119.581 27.9609 116.606 24.7687 116.606 20.2341C116.606 15.6399 119.581 12.5375 123.91 12.5375ZM20.6231 20.2643C20.6231 23.5462 23.2388 26.112 26.5445 26.112C29.8504 26.112 32.4661 23.5462 32.4661 20.2643C32.4661 16.9824 29.8208 14.3873 26.5445 14.3873C23.2388 14.3873 20.6231 17.0126 20.6231 20.2643ZM43.95 12.5375C45.7539 12.5375 49.9325 13.2234 49.9325 19.3999V27.8134H47.2568V19.5491C47.2568 17.4311 46.6257 14.8653 43.4989 14.8653C40.7338 14.8653 39.0804 16.8936 39.0804 20.235V27.8134H36.4951V12.6868H38.7797L38.9301 14.3277C40.1921 13.1639 41.996 12.5375 43.95 12.5375ZM112.487 20.235C112.487 16.9833 110.593 14.7755 107.768 14.7755C104.943 14.7755 102.958 17.0428 102.958 20.235C102.958 23.4272 104.852 25.6945 107.677 25.6945C110.502 25.6945 112.487 23.5169 112.487 20.235ZM54.3804 14.3277C55.1619 13.3131 56.2441 12.6868 57.5063 12.6868H59.9411V15.1629H57.5967C55.4627 15.1629 54.5308 17.758 54.5308 20.0857V27.8125H51.8553V12.6868H54.2301L54.3804 14.3277ZM18.2482 20.2643C18.2482 17.9668 19.1801 15.879 20.6831 14.3873H19.4209C16.1142 14.3873 13.4995 17.0126 13.4995 20.2643C13.4995 23.516 15.9943 25.993 19.181 26.112H20.684C19.1801 24.6203 18.2482 22.5618 18.2482 20.2643ZM6.37485 20.2643C6.37485 23.516 8.99053 26.112 12.2963 26.112H13.5585C12.0555 24.6203 11.1237 22.5618 11.1237 20.2643C11.1237 17.9668 12.0555 15.879 13.5585 14.3873H12.2963C8.98961 14.3873 6.37485 17.0126 6.37485 20.2643ZM65.894 25.7842C68.5697 25.7842 70.283 24.0535 70.283 21.3384V20.6223H65.8036C63.759 20.6223 62.6777 21.5774 62.6777 23.2779C62.6777 25.4555 64.7214 25.7842 65.894 25.7842ZM128.058 18.594C127.668 16.2672 126.104 14.7755 123.91 14.7755C121.716 14.7755 120.063 16.357 119.581 18.594H128.058ZM134.973 14.3277C135.754 13.3131 136.836 12.6868 138.099 12.6868H140.533V15.1629H138.189C136.055 15.1629 135.123 17.758 135.123 20.0857V27.8125H132.447V12.6868H134.822L134.973 14.3277Z'
                                fill='black'
                              />
                            </g>
                          </g>
                          <rect
                            x='0.5'
                            y='0.5'
                            width='39'
                            height='39'
                            rx='10.5'
                            stroke='#D0D5DD'
                          />
                          <defs>
                            <clipPath id='clip0_127_5473'>
                              <rect
                                width='40'
                                height='40'
                                rx='11'
                                fill='white'
                              />
                            </clipPath>
                            <clipPath id='clip1_127_5473'>
                              <rect
                                width='32'
                                height='17.3333'
                                fill='white'
                                transform='translate(4 12)'
                              />
                            </clipPath>
                          </defs>
                        </svg>
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
