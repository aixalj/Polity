import Image from "next/image";
import type { Config } from "tailwindcss";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart } from "@tremor/react";

import { Progress } from "@/components/ui/progress";

import { Subscribe } from "@/components/subscribe";
import { SubscribeProvider } from "@/components/ui/subscribecontext";

import { TransactionTable } from "@/components/ui/transactiontable";

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

export default function AddressBook() {
  return (
    <main className="w-full h-full">
      <div className="mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll">
        <div className="w-full sticky top-0 backdrop-blur-md	z-10  border-b border-gray-100 bg-white/60">
          <div className=" max-w-screen-xl mx-auto p-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 text-xs text-gray-600">
                <li>
                  <a href="#" className="block transition hover:text-gray-700">
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
                    Address Book{" "}
                  </a>
                </li>
              </ol>
            </nav>

            <div className="w-full  mt-4 flex items-center justify-between">
              {" "}
              <div>
                <h1 className="text-3xl font-medium leading-tight">
                  Address Book
                </h1>{" "}
              </div>
              <div className="flex gap-3">
                <Button>Add Recipient</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
          {/* <TransactionTable transactions={getAllTransactions()} /> */}
        </div>
      </div>
    </main>
  );
}
