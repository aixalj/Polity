'use client';

import Image from 'next/image';
import type { Config } from 'tailwindcss';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart } from '@tremor/react';

import { useEffect, useState } from 'react';

import { Progress } from '@/components/ui/progress';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { GetServerSideProps } from 'next';

import { SideBar } from '@/components/ui/sidebar';

import { WalletTable } from '@/components/wallettable';

import { NetworkTable } from '@/components/networktable';

import { AssetTable } from '@/components/assettable';

import { PageHeader } from '@/components/pageheader';

import Stats from '@/components/stats';

import Allocation from '@/components/allocation';

import { TimeProvider } from '@/components/ui/timecontext';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from '@/components/data';

function Home() {
  return (
    <main className='w-full h-full'>
      <TimeProvider>
        <div className='mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll pb-40'>
          <PageHeader variant='default' />

          <div className='max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 pb-40'>
            <Stats />

            <Allocation getAllAssets={getAllAssets()} />

            <WalletTable wallets={wallets} networkAccounts={networkAccounts} />

            <NetworkTable networkAccounts={networkAccounts} />

            <AssetTable getAllAssets={getAllAssets()} />

            <div className='min-h-[400px] w-full flex'></div>
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
