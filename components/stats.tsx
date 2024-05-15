"use client";

import Image from "next/image";
import type { Config } from "tailwindcss";
import React, { createContext, useState, ReactNode } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart } from "@tremor/react";

import { Progress } from "@/components/ui/progress";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { useTime } from "@/components/ui/timecontext";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { AreaChartUsageExampleWithCustomTooltip } from "@/components/charttooltip";

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from "@/components/data";

type FinancialData = {
  assets: number[];
  debts: number[];
  claimable: number[];
};

function calculateNetWorth(data: FinancialData): {
  totalAssets: number;
  totalDebts: number;
  totalClaimable: number;
  netWorth: number;
} {
  const totalAssets = data.assets.reduce((acc, curr) => acc + curr, 0);
  const totalDebts = data.debts.reduce((acc, curr) => acc + curr, 0);
  const totalClaimable = data.claimable.reduce((acc, curr) => acc + curr, 0);
  const netWorth = totalAssets - totalDebts + totalClaimable;
  return {
    totalAssets,
    totalDebts,
    totalClaimable,
    netWorth,
  };
}

interface StatsProps {
  variant?: "wealth" | "wallet" | "network";
}

// Define the props structure if not already defined

export function Stats({ variant = "wealth" }: StatsProps) {
  const financialData = {
    assets: [173346, 29338, 1923.12],
    debts: [8947, 9843.33],
    claimable: [982.12, 73.24],
  };

  const { totalAssets, totalDebts, totalClaimable, netWorth } =
    calculateNetWorth(financialData);

  // Currency formatter
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Format financial data as currency
  const formattedNetWorth = currencyFormatter.format(netWorth);
  const formattedTotalAssets = currencyFormatter.format(totalAssets);
  const formattedTotalDebts = currencyFormatter.format(totalDebts);
  const formattedTotalClaimable = currencyFormatter.format(totalClaimable);

  const { selectedTime, setSelectedTime } = useTime();

  const timeLabel =
    selectedTime === "pastday"
      ? "Last 24 Hours"
      : selectedTime === "pastweek"
      ? "Last 7 Days"
      : selectedTime === "pastmonth"
      ? "Last 30 Days"
      : selectedTime === "threemonths"
      ? "Last 3 Months"
      : selectedTime === "yeartodate"
      ? "Year to Date"
      : selectedTime === "pastyear"
      ? "Last Year"
      : selectedTime === "alltime"
      ? "All Time"
      : "";

  return (
    <main className="w-full h-full flex flex-col gap-3">
      <div className="w-full  h-auto border rounded-2xl border-gray-300 p-4 flex flex-col gap-6">
        <div>
          <p className="text-base text-gray-600 flex gap-2 items-center">
            {variant === "wealth"
              ? "Net Worth"
              : variant === "wallet"
              ? "Wallet Value"
              : "Network Account Value"}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="-mr-2 group-hover:mr-0.5 transition-all duration-200 hover:shadow-sm">
                  {" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_83_101861)">
                      <path
                        d="M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                        stroke="#475467"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_83_101861">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </TooltipTrigger>
                <TooltipContent>
                  {variant === "wealth"
                    ? "Total Value of Assets minus Debts in USD (all Wallets)"
                    : variant === "wallet"
                    ? "Total Value of Assets minus Debts in USD (this Wallet)"
                    : "Total Value of Assets minus Debts in USD (this Network)"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
          <h2 className="text-3xl mt-1 font-medium">
            {wealth.netWorth.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h2>

          <div className="flex mt-2 items-center gap-2">
            <div className="bg-teal-100 border border-teal-200 py-0.5 pl-2 pr-3 flex gap-1 items-center rounded-md text-sm text-teal-800 font-medium">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 3.5L7.06568 7.43432C6.86768 7.63232 6.76867 7.73133 6.65451 7.76842C6.55409 7.80105 6.44591 7.80105 6.34549 7.76842C6.23133 7.73133 6.13232 7.63232 5.93431 7.43431L4.56568 6.06568C4.36768 5.86768 4.26867 5.76867 4.15451 5.73158C4.05409 5.69895 3.94591 5.69895 3.84549 5.73158C3.73133 5.76867 3.63232 5.86768 3.43431 6.06569L1 8.5M11 3.5H7.5M11 3.5V7"
                  stroke="#107569"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {selectedTime === "pastday"
                ? `1.27% (${(wealth.netWorth * 0.0127).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })})`
                : selectedTime === "pastweek"
                ? `2.45% (${(wealth.netWorth * 0.0245).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })})`
                : selectedTime === "pastmonth"
                ? `6.54% (${(wealth.netWorth * 0.0654).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })})`
                : selectedTime === "threemonths"
                ? `2.54% (${(wealth.netWorth * 0.0254).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })})`
                : selectedTime === "yeartodate"
                ? `6.54% (${(wealth.netWorth * 0.0654).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })})`
                : selectedTime === "pastyear"
                ? `7.54% (${(wealth.netWorth * 0.0754).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })})`
                : selectedTime === "alltime"
                ? `32.87% (${(wealth.netWorth * 0.3287330566).toLocaleString(
                    "en-US",
                    {
                      style: "currency",
                      currency: "USD",
                    }
                  )})`
                : `6.54% (${(wealth.netWorth * 0.0654).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })})`}
            </div>
            <p className="text-gray-600 text-sm font-medium">{timeLabel}</p>
          </div>
        </div>

        <div>
          {/* <TimeTest /> */}
          <AreaChartUsageExampleWithCustomTooltip />
        </div>
      </div>

      <div className="w-full flex flex-col xl:flex-row gap-3 h-auto">
        <div className="relative w-full p-4 bg-white rounded-2xl border border-gray-300 flex-1 justify-between flex flex-col duration-300 ease-in-out ">
          <p className="text-base text-gray-600 flex gap-2 items-center">
            Total Assets
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="-mr-2 group-hover:mr-0.5 transition-all duration-200 hover:shadow-sm">
                  {" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_83_101861)">
                      <path
                        d="M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                        stroke="#475467"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_83_101861">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Total Value of Assets Held in USD (Including Wallet and
                    Protocols)
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
          <h2 className="text-xl mt-1 font-medium">
            {wealth.totalAssets.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h2>

          <div className="flex mt-6 items-center gap-2">
            <div className="bg-teal-100 border border-teal-200 py-0.5 pl-2 pr-3 flex gap-1 items-center rounded-md text-sm text-teal-800 font-medium">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 3.5L7.06568 7.43432C6.86768 7.63232 6.76867 7.73133 6.65451 7.76842C6.55409 7.80105 6.44591 7.80105 6.34549 7.76842C6.23133 7.73133 6.13232 7.63232 5.93431 7.43431L4.56568 6.06568C4.36768 5.86768 4.26867 5.76867 4.15451 5.73158C4.05409 5.69895 3.94591 5.69895 3.84549 5.73158C3.73133 5.76867 3.63232 5.86768 3.43431 6.06569L1 8.5M11 3.5H7.5M11 3.5V7"
                  stroke="#107569"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {selectedTime === "pastday"
                ? "1.86% ($3,415.41)"
                : selectedTime === "pastweek"
                ? "9.54% ($20,239.24)"
                : selectedTime === "pastmonth"
                ? "3.54% ($20,239.24)"
                : selectedTime === "threemonths"
                ? "2.54% ($20,239.24)"
                : selectedTime === "yeartodate"
                ? "6.54% ($20,239.24)"
                : selectedTime === "pastyear"
                ? "7.54% ($20,239.24)"
                : selectedTime === "alltime"
                ? "3.54% ($20,239.24)"
                : "6.54% ($20,239.24)"}
            </div>
            <p className="text-gray-600 text-sm font-medium">{timeLabel}</p>
          </div>

          <svg
            className="absolute right-0 top-0 mt-4 mr-4"
            width="83"
            height="42"
            viewBox="0 0 83 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3335 41C12.6994 37.2114 16.4087 22.6447 28.0002 21C38.6869 19.4836 44.0586 33.4626 54.6668 31C67.5312 28.0136 68.3361 2.08312 81.3335 1"
              stroke="#15B79E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="relative w-full p-4 bg-white rounded-2xl border border-gray-300 flex-1 justify-between flex flex-col duration-300 ease-in-out ">
          <p className="text-base text-gray-600 flex gap-2 items-center">
            Total Debts
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="-mr-2 group-hover:mr-0.5 transition-all duration-200 hover:shadow-sm">
                  {" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_83_101861)">
                      <path
                        d="M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                        stroke="#475467"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_83_101861">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total Value of Assets Borrowed in USD from Protocols</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
          <h2 className="text-xl mt-1 font-medium">
            {wealth.totalDebts.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h2>

          <div className="flex mt-6 items-center gap-2">
            <div className="bg-gray-100 border border-gray-200 py-0.5 px-2 flex gap-1 items-center rounded-md text-sm text-gray-800 font-medium">
              0.00%
            </div>
            <p className="text-gray-600 text-sm font-medium">{timeLabel}</p>
          </div>

          {/* <svg
            className="absolute right-0 top-0 mt-4 mr-4"
            width="83"
            height="42"
            viewBox="0 0 83 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3335 41C12.6994 37.2114 16.4087 22.6447 28.0002 21C38.6869 19.4836 44.0586 33.4626 54.6668 31C67.5312 28.0136 68.3361 2.08312 81.3335 1"
              stroke="#15B79E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg> */}
        </div>
        <div className="relative w-full p-4 bg-white rounded-2xl border border-gray-300 flex-1 justify-between flex flex-col duration-300 ease-in-out ">
          <p className="text-base text-gray-600 flex gap-2 items-center">
            Total Claimable
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="-mr-2 group-hover:mr-0.5 transition-all duration-200 hover:shadow-sm">
                  {" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_83_101861)">
                      <path
                        d="M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                        stroke="#475467"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_83_101861">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Total Claimable Interest and Rewards in USD from DeFi
                    Protocol Deposits
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
          <h2 className="text-xl mt-1 font-medium">
            {wealth.totalClaimable.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h2>

          <div className="flex mt-6 items-center gap-2">
            <div className="bg-gray-100 border border-gray-200 py-0.5 px-2 flex gap-1 items-center rounded-md text-sm text-gray-800 font-medium">
              0.00%
            </div>
            <p className="text-gray-600 text-sm font-medium">{timeLabel}</p>
          </div>
          {/* 
          <svg
            className="absolute right-0 top-0 mt-4 mr-4"
            width="83"
            height="42"
            viewBox="0 0 83 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3335 41C12.6994 37.2114 16.4087 22.6447 28.0002 21C38.6869 19.4836 44.0586 33.4626 54.6668 31C67.5312 28.0136 68.3361 2.08312 81.3335 1"
              stroke="#15B79E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg> */}
        </div>
      </div>
    </main>
  );
}

export default Stats;
