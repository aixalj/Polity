"use client";

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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { GetServerSideProps } from "next";

import { SideBar } from "@/components/ui/sidebar";

import { WalletTable } from "@/components/wallettable";

import { NetworkTable } from "@/components/networktable";

import { AssetTable } from "@/components/assettable";

import { PageHeader } from "@/components/pageheader";

import Stats from "@/components/stats";

import Allocation from "@/components/allocation";

import { TimeProvider } from "@/components/ui/timecontext";

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

// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = "https://ilzanfrmzylbvkoyhefz.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsemFuZnJtenlsYnZrb3loZWZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTAxNTg2MCwiZXhwIjoyMDMwNTkxODYwfQ.NUkkfYlSq3iHkr1hjIK3uMev7VzKt6F_2fqTne4JKNU";
// const supabase = createClient(supabaseUrl, supabaseKey);

// async function getData() {
//   const { data, error } = await supabase
//     .from("wallets")
//     .select("id, wallet_id, wallet_name, allocation, return, value");

//   if (error) {
//     console.error("Error fetching data:", error.message);
//     throw new Error("Failed to fetch wallets");
//   }

//   return data;
// }

const chartdata = [
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
  { date: "Dec 23", Value: 324, Sponsored: 0 },
];

// Define the props structure if not already defined

function Home() {
  // try {
  //   const wallets = await getData();
  //   console.log("Wallets fetched:", wallets); // Check what data is received right before rendering

  return (
    <main className="w-full h-full">
      <TimeProvider>
        <div className="mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll">
          <PageHeader />

          <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
            <Stats />

            <Allocation />

            {/* <WalletTable wallets={wallets} /> */}

            <NetworkTable />

            <AssetTable />
          </div>
        </div>
      </TimeProvider>
    </main>
  );
  // } catch (error) {
  //   const e = error as Error; // Type assertion
  //   console.error(e.message); // Now you can safely access Error properties like message
  // }
}

export default Home;
