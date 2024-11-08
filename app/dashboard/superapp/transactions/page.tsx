"use client";

import Image from "next/image";
import type { Config } from "tailwindcss";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart } from "@tremor/react";

import { Progress } from "@/components/ui/progress";

import { Subscribe } from "@/components/subscribe";
import { SubscribeProvider } from "@/components/ui/subscribecontext";

import { TimeForm } from "@/components/timeform";

import { TransactionTable } from "@/components/ui/transactiontable";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TimeProvider, useTime } from "@/components/ui/timecontext";

import { Transaction, transactions } from "@/components/transactionData";

// Function to get all transactions
const getAllTransactions = (): Transaction[] => {
  return transactions;
};

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";

export default function Transactions() {
  const now = new Date();

  return (
    <main className="w-full h-full">
      <TimeProvider>
        <div className="mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll">
          <div className="w-full sticky top-0 backdrop-blur-md	z-10  border-b border-gray-100 bg-white/60">
            <div className=" max-w-screen-xl mx-auto p-6">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1 text-xs text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="block transition hover:text-gray-700"
                    >
                      {" "}
                      Avatar Name{" "}
                    </a>
                  </li>

                  <li className="rtl:rotate-180">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83337 18.3334L14.1667 1.66675"
                        stroke="#D0D5DD"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </li>

                  <li>
                    <a href="#" className="block transition text-gray-800">
                      {" "}
                      Transactions{" "}
                    </a>
                  </li>
                </ol>
              </nav>

              <div className="w-full  mt-4 flex items-center justify-between">
                {" "}
                <div>
                  <h1 className="text-3xl font-medium leading-tight">
                    Transactions
                  </h1>{" "}
                </div>
                <div className="flex gap-3">
                  <Button>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 10V10.8C14 11.9201 14 12.4802 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4802 14 11.9201 14 10.8 14H5.2C4.07989 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4802 2 11.9201 2 10.8V10M11.3333 6.66667L8 10M8 10L4.66667 6.66667M8 10V2"
                        stroke="white"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Export CSV
                  </Button>
                </div>
              </div>
              <div className="w-full  mt-4 flex items-center pb-1">
                <div>
                  {/* <Select defaultValue="All Time">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Past Day">Past Day</SelectItem>
                    <SelectItem value="Past Week">Past Week</SelectItem>
                    <SelectItem value="Past Month">Past Month</SelectItem>
                    <SelectItem value="Three Months">Three Months</SelectItem>
                    <SelectItem value="Year to Date">Year to Date</SelectItem>
                    <SelectItem value="Past Year">Past Year</SelectItem>
                    <SelectItem value="All Time">All Time</SelectItem>
                  </SelectContent>
                </Select> */}
                  <TimeForm defaultValue="alltime" />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
            <TransactionTable transactions={getAllTransactions()} />
          </div>
        </div>
      </TimeProvider>
    </main>
  );
}
