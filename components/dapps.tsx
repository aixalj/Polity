import * as React from "react";
import type { Config } from "tailwindcss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import ETHNetwork from 'public/icons/networks/ETH.svg';
import POLNetwork from 'public/icons/networks/MATIC.svg';

import { Progress } from "@/components/ui/progress";

import Link from "next/link";
import Image from "next/image";
interface DappsProps {
  network?: 'eth' | 'btc' | 'pol';
  isLoading?: boolean;
  error?: string;
}

const Dapps = ({ network = 'eth', isLoading = false, error }: DappsProps) => {
  // Helper function to get network-specific currency label
  const getCurrencyLabel = () => {
    switch (network) {
      case 'btc':
        return 'BTC';
      case 'pol':
        return 'MATIC';
      default:
        return 'ETH';
    }
  };

  if (isLoading) {
    return (
      <div className="relative w-full flex flex-col">
        {/* Add loading state UI here */}
        <div className="p-4">Loading dApps...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative w-full flex flex-col">
        {/* Add error state UI here */}
        <div className="p-4 text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-col">
      <div className="p-4 relative flex justify-between w-full justify-items-stretch flex-row place-content-between	">
        <div className="flex flex-col max-w-[30rem]">
          <h2 className="text-xl font-medium">Connected dApps</h2>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-3 bg-gray-50 rounded-2xl p-3">
        <div className="flex flex-col gap-4 items-center bg-white border border-gray-200 px-4 py-3 rounded-2xl">
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="32" height="32" rx="16" fill="#00A0D0" />
            <path
              d="M24.25 24.6506L20.9444 22.9006V12.8293L24.25 14.4146V24.6506ZM8.75 26L12.0647 24.4939V15.878L8.75 17.4634V26ZM14.8075 23.364L18.1998 21.9976V6L14.8056 7.5061L14.8075 23.364Z"
              fill="white"
            />
          </svg>

          <div className="flex flex-col gap-2 items-center">
            <a
              href="#"
              className="text-sm cursor-pointer font-medium flex gap-1 items-center"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66663 10.5333C2.66663 9.41323 2.66663 8.85318 2.88461 8.42535C3.07636 8.04903 3.38232 7.74307 3.75864 7.55132C4.18647 7.33333 4.74652 7.33333 5.86663 7.33333H10.1333C11.2534 7.33333 11.8134 7.33333 12.2413 7.55132C12.6176 7.74307 12.9236 8.04903 13.1153 8.42535C13.3333 8.85318 13.3333 9.41323 13.3333 10.5333V10.8C13.3333 11.9201 13.3333 12.4802 13.1153 12.908C12.9236 13.2843 12.6176 13.5903 12.2413 13.782C11.8134 14 11.2534 14 10.1333 14H5.86663C4.74652 14 4.18647 14 3.75864 13.782C3.38232 13.5903 3.07636 13.2843 2.88461 12.908C2.66663 12.4802 2.66663 11.9201 2.66663 10.8V10.5333Z"
                  fill="#101828"
                />
                <path
                  d="M11.3333 7.33333V5.33333C11.3333 3.49238 9.84091 2 7.99996 2C6.15901 2 4.66663 3.49238 4.66663 5.33333V7.33333M5.86663 14H10.1333C11.2534 14 11.8134 14 12.2413 13.782C12.6176 13.5903 12.9236 13.2843 13.1153 12.908C13.3333 12.4802 13.3333 11.9201 13.3333 10.8V10.5333C13.3333 9.41323 13.3333 8.85318 13.1153 8.42535C12.9236 8.04903 12.6176 7.74307 12.2413 7.55132C11.8134 7.33333 11.2534 7.33333 10.1333 7.33333H5.86663C4.74652 7.33333 4.18647 7.33333 3.75864 7.55132C3.38232 7.74307 3.07636 8.04903 2.88461 8.42535C2.66663 8.85318 2.66663 9.41323 2.66663 10.5333V10.8C2.66663 11.9201 2.66663 12.4802 2.88461 12.908C3.07636 13.2843 3.38232 13.5903 3.75864 13.782C4.18647 14 4.74652 14 5.86663 14Z"
                  stroke="#101828"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              app.dhedge.org
            </a>
            <div className="flex flex-row gap-2">
              <div className="pl-1.5 pr-2 py-0.5 bg-gray-100 rounded-md border border-gray-200 justify-start items-center gap-1 inline-flex">
                <div className="w-1.5 h-1.5  bg-emerald-500 rounded-full"></div>

                <div className="text-center text-gray-800 text-xs font-medium ">
                  {network === 'eth' ? 'Ethereum' : 'Polygon'}
                </div>
              </div>
              <div className="pl-1.5 pr-2 py-0.5 bg-gray-100 rounded-md border border-gray-200 justify-start items-center gap-1 inline-flex">
              
                <Image src={network === 'eth' ? ETHNetwork : POLNetwork} alt='ETH' width={11} height={11} /> 

                <div className="text-center text-gray-800 text-xs font-medium ">
                  {getCurrencyLabel()}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <Button
              size="sm"
              className="rounded-lg font-semibold"
              variant="outline"
            >
              Open dApp{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 6L14 2M14 2H10M14 2L8.66667 7.33333M6.66667 3.33333H5.2C4.0799 3.33333 3.51984 3.33333 3.09202 3.55132C2.71569 3.74307 2.40973 4.04903 2.21799 4.42535C2 4.85318 2 5.41323 2 6.53333V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14H9.46667C10.5868 14 11.1468 14 11.5746 13.782C11.951 13.5903 12.2569 13.2843 12.4487 12.908C12.6667 12.4802 12.6667 11.9201 12.6667 10.8V9.33333"
                  stroke="#344054"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <Button
              size="sm"
              // className="bg-red-50 shadow-none text-rose-700 rounded-lg font-semibold hover:bg-rose-100"
              variant="secondary-destructive"
            >
              Disconnect
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center bg-white border border-gray-200 px-4 py-3 rounded-2xl">
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="32" height="32" rx="16" fill="#00A0D0" />
            <path
              d="M24.25 24.6506L20.9444 22.9006V12.8293L24.25 14.4146V24.6506ZM8.75 26L12.0647 24.4939V15.878L8.75 17.4634V26ZM14.8075 23.364L18.1998 21.9976V6L14.8056 7.5061L14.8075 23.364Z"
              fill="white"
            />
          </svg>

          <div className="flex flex-col gap-2 items-center">
            <a
              href="#"
              className="text-sm cursor-pointer font-medium flex gap-1 items-center"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66663 10.5333C2.66663 9.41323 2.66663 8.85318 2.88461 8.42535C3.07636 8.04903 3.38232 7.74307 3.75864 7.55132C4.18647 7.33333 4.74652 7.33333 5.86663 7.33333H10.1333C11.2534 7.33333 11.8134 7.33333 12.2413 7.55132C12.6176 7.74307 12.9236 8.04903 13.1153 8.42535C13.3333 8.85318 13.3333 9.41323 13.3333 10.5333V10.8C13.3333 11.9201 13.3333 12.4802 13.1153 12.908C12.9236 13.2843 12.6176 13.5903 12.2413 13.782C11.8134 14 11.2534 14 10.1333 14H5.86663C4.74652 14 4.18647 14 3.75864 13.782C3.38232 13.5903 3.07636 13.2843 2.88461 12.908C2.66663 12.4802 2.66663 11.9201 2.66663 10.8V10.5333Z"
                  fill="#101828"
                />
                <path
                  d="M11.3333 7.33333V5.33333C11.3333 3.49238 9.84091 2 7.99996 2C6.15901 2 4.66663 3.49238 4.66663 5.33333V7.33333M5.86663 14H10.1333C11.2534 14 11.8134 14 12.2413 13.782C12.6176 13.5903 12.9236 13.2843 13.1153 12.908C13.3333 12.4802 13.3333 11.9201 13.3333 10.8V10.5333C13.3333 9.41323 13.3333 8.85318 13.1153 8.42535C12.9236 8.04903 12.6176 7.74307 12.2413 7.55132C11.8134 7.33333 11.2534 7.33333 10.1333 7.33333H5.86663C4.74652 7.33333 4.18647 7.33333 3.75864 7.55132C3.38232 7.74307 3.07636 8.04903 2.88461 8.42535C2.66663 8.85318 2.66663 9.41323 2.66663 10.5333V10.8C2.66663 11.9201 2.66663 12.4802 2.88461 12.908C3.07636 13.2843 3.38232 13.5903 3.75864 13.782C4.18647 14 4.74652 14 5.86663 14Z"
                  stroke="#101828"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              app.dhedge.org
            </a>
            <div className="flex flex-row gap-2">
              <div className="pl-1.5 pr-2 py-0.5 bg-gray-100 rounded-md border border-gray-200 justify-start items-center gap-1 inline-flex">
                <div className="w-1.5 h-1.5  bg-emerald-500 rounded-full"></div>

                <div className="text-center text-gray-800 text-xs font-medium ">
                  {network === 'eth' ? 'Ethereum' : 'Polygon'}
                </div>
              </div>
              <div className="pl-1.5 pr-2 py-0.5 bg-gray-100 rounded-md border border-gray-200 justify-start items-center gap-1 inline-flex">
              
                <Image src={network === 'eth' ? ETHNetwork : POLNetwork} alt='ETH' width={11} height={11} /> 

                <div className="text-center text-gray-800 text-xs font-medium ">
                  {getCurrencyLabel()}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <Button
              size="sm"
              className="rounded-lg font-semibold"
              variant="outline"
            >
              Open dApp{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 6L14 2M14 2H10M14 2L8.66667 7.33333M6.66667 3.33333H5.2C4.0799 3.33333 3.51984 3.33333 3.09202 3.55132C2.71569 3.74307 2.40973 4.04903 2.21799 4.42535C2 4.85318 2 5.41323 2 6.53333V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14H9.46667C10.5868 14 11.1468 14 11.5746 13.782C11.951 13.5903 12.2569 13.2843 12.4487 12.908C12.6667 12.4802 12.6667 11.9201 12.6667 10.8V9.33333"
                  stroke="#344054"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <Button
              size="sm"
              // className="bg-red-50 shadow-none text-rose-700 rounded-lg font-semibold hover:bg-rose-100"
              variant="secondary-destructive"
            >
              Disconnect
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center bg-white border border-gray-200 px-4 py-3 rounded-2xl">
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="32" height="32" rx="16" fill="#00A0D0" />
            <path
              d="M24.25 24.6506L20.9444 22.9006V12.8293L24.25 14.4146V24.6506ZM8.75 26L12.0647 24.4939V15.878L8.75 17.4634V26ZM14.8075 23.364L18.1998 21.9976V6L14.8056 7.5061L14.8075 23.364Z"
              fill="white"
            />
          </svg>

          <div className="flex flex-col gap-2 items-center">
            <a
              href="#"
              className="text-sm cursor-pointer font-medium flex gap-1 items-center"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66663 10.5333C2.66663 9.41323 2.66663 8.85318 2.88461 8.42535C3.07636 8.04903 3.38232 7.74307 3.75864 7.55132C4.18647 7.33333 4.74652 7.33333 5.86663 7.33333H10.1333C11.2534 7.33333 11.8134 7.33333 12.2413 7.55132C12.6176 7.74307 12.9236 8.04903 13.1153 8.42535C13.3333 8.85318 13.3333 9.41323 13.3333 10.5333V10.8C13.3333 11.9201 13.3333 12.4802 13.1153 12.908C12.9236 13.2843 12.6176 13.5903 12.2413 13.782C11.8134 14 11.2534 14 10.1333 14H5.86663C4.74652 14 4.18647 14 3.75864 13.782C3.38232 13.5903 3.07636 13.2843 2.88461 12.908C2.66663 12.4802 2.66663 11.9201 2.66663 10.8V10.5333Z"
                  fill="#101828"
                />
                <path
                  d="M11.3333 7.33333V5.33333C11.3333 3.49238 9.84091 2 7.99996 2C6.15901 2 4.66663 3.49238 4.66663 5.33333V7.33333M5.86663 14H10.1333C11.2534 14 11.8134 14 12.2413 13.782C12.6176 13.5903 12.9236 13.2843 13.1153 12.908C13.3333 12.4802 13.3333 11.9201 13.3333 10.8V10.5333C13.3333 9.41323 13.3333 8.85318 13.1153 8.42535C12.9236 8.04903 12.6176 7.74307 12.2413 7.55132C11.8134 7.33333 11.2534 7.33333 10.1333 7.33333H5.86663C4.74652 7.33333 4.18647 7.33333 3.75864 7.55132C3.38232 7.74307 3.07636 8.04903 2.88461 8.42535C2.66663 8.85318 2.66663 9.41323 2.66663 10.5333V10.8C2.66663 11.9201 2.66663 12.4802 2.88461 12.908C3.07636 13.2843 3.38232 13.5903 3.75864 13.782C4.18647 14 4.74652 14 5.86663 14Z"
                  stroke="#101828"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              app.dhedge.org
            </a>
            <div className="flex flex-row gap-2">
              <div className="pl-1.5 pr-2 py-0.5 bg-gray-100 rounded-md border border-gray-200 justify-start items-center gap-1 inline-flex">
                <div className="w-1.5 h-1.5  bg-emerald-500 rounded-full"></div>

                <div className="text-center text-gray-800 text-xs font-medium ">
                  {network === 'eth' ? 'Ethereum' : 'Polygon'}
                </div>
              </div>
              <div className="pl-1.5 pr-2 py-0.5 bg-gray-100 rounded-md border border-gray-200 justify-start items-center gap-1 inline-flex">
              
                <Image src={network === 'eth' ? ETHNetwork : POLNetwork} alt='ETH' width={11} height={11} /> 

                <div className="text-center text-gray-800 text-xs font-medium ">
                  {getCurrencyLabel()}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <Button
              size="sm"
              className="rounded-lg font-semibold"
              variant="outline"
            >
              Open dApp{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 6L14 2M14 2H10M14 2L8.66667 7.33333M6.66667 3.33333H5.2C4.0799 3.33333 3.51984 3.33333 3.09202 3.55132C2.71569 3.74307 2.40973 4.04903 2.21799 4.42535C2 4.85318 2 5.41323 2 6.53333V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14H9.46667C10.5868 14 11.1468 14 11.5746 13.782C11.951 13.5903 12.2569 13.2843 12.4487 12.908C12.6667 12.4802 12.6667 11.9201 12.6667 10.8V9.33333"
                  stroke="#344054"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <Button
              size="sm"
              // className="bg-red-50 shadow-none text-rose-700 rounded-lg font-semibold hover:bg-rose-100"
              variant="secondary-destructive"
            >
              Disconnect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dapps };
