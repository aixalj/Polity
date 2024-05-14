"use client";

import Image from "next/image";
import type { Config } from "tailwindcss";

import { WalletTable } from "@/components/wallettable";

import { NetworkTable } from "@/components/networktable";

import { AssetTable } from "@/components/assettable";

import { PageHeader } from "@/components/pageheader";

import Stats from "@/components/stats";

import Allocation from "@/components/allocation";

import { TimeProvider } from "@/components/ui/timecontext";

function Wallet2() {
  return (
    <main className="w-full h-full">
      <TimeProvider>
        <div className="mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll">
          <PageHeader variant="custom" />

          <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
            <Stats variant="wallet" />

            <Allocation />

            <WalletTable />

            <NetworkTable />

            <AssetTable />
          </div>
        </div>
      </TimeProvider>
    </main>
  );
}

export default Wallet2;
