import Image from "next/image";
import type { Config } from "tailwindcss";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart } from "@tremor/react";

import { Progress } from "@/components/ui/progress";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { AssetTable } from "@/components/assettable";
import { NetworkTable } from "@/components/networktable";

const data = [
  { date: "Jan 23", Value: 232, Sponsored: 0 },
  { date: "Feb 23", Value: 241, Sponsored: 0 },
  { date: "Mar 23", Value: 291, Sponsored: 0 },
  { date: "Apr 23", Value: 101, Sponsored: 0 },
  { date: "May 23", Value: 318, Sponsored: 0 },
  { date: "Jun 23", Value: 205, Sponsored: 0 },
  { date: "Jul 23", Value: 372, Sponsored: 0 },
  { date: "Aug 23", Value: 341, Sponsored: 0 },
  { date: "Sep 23", Value: 387, Sponsored: 120 },
  { date: "Oct 23", Value: 220, Sponsored: 0 },
  { date: "Nov 23", Value: 372, Sponsored: 0 },
  { date: "Dec 23", Value: 321, Sponsored: 0 },
];

const summary = [
  {
    name: "Value",
    value: 3273,
  },
  {
    name: "Sponsored",
    value: 120,
  },
];

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

export default function BitcoinOne() {
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

  return (
    <main className="w-full h-full">
      <div className="mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll">
        <Tabs defaultValue="wallets">
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
                      Marketplace{" "}
                    </a>
                  </li>
                </ol>
              </nav>

              <div className="w-full  mt-4 flex items-center justify-between">
                {" "}
                <div>
                  <h1 className="text-3xl font-medium leading-tight">
                    Marketplace
                  </h1>{" "}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">Billing</Button>
                  <Button variant="outline">My Subscriptions</Button>
                  <Button variant="outline">My Products</Button>
                </div>
              </div>

              <div className="w-full  mt-4 flex items-center pb-1">
                {" "}
                <TabsList className="bg-gray-50">
                  <TabsTrigger value="wallets">Wallets</TabsTrigger>
                  <TabsTrigger value="xchange">X-change</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="risk">Risk</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="dApps">dApps</TabsTrigger>
                </TabsList>
              </div>
            </div>
          </div>
          <TabsContent value="wallets">
            <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
              <div className="relative w-full flex flex-col pb-40">
                <div className="py-4 relative flex w-full flex-row	">
                  <h2 className="text-2xl font-medium">Wallets</h2>
                </div>
                <div className="w-full grid grid-cols-3  gap-3 justify-start ">
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="xchange">
            <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
              <div className="relative w-full flex flex-col pb-40">
                <div className="py-4 relative flex w-full flex-row	">
                  <h2 className="text-2xl font-medium">X-change</h2>
                </div>
                <div className="w-full grid grid-cols-3  gap-3 justify-start ">
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                  <div className="w-full flex flex-col gap-3 max-w-full border border-gray-300 rounded-2xl px-6 pt-6 pb-4">
                    <div>
                      <h3 className="text-2xl font-medium">DFNS</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Network institutional-grade multi-party computation (MPC)
                      wallet. Built on DFNS user infrastructure.
                    </p>
                    <Button className="w-full">Buy Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
