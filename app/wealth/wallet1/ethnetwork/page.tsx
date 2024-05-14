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

import Stats from "@/components/stats";

import Allocation from "@/components/allocation";
import { TimeProvider } from "@/components/ui/timecontext";

import { Button } from "@/components/ui/button";
import { AssetTable } from "@/components/assettable";

function BitcoinOne() {
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
                    <a
                      href="#"
                      className="block transition hover:text-gray-700"
                    >
                      {" "}
                      Wealth{" "}
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
                    <a
                      href="#"
                      className="block transition hover:text-gray-700"
                    >
                      {" "}
                      Wallet Name{" "}
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
                      Network Account Name{" "}
                    </a>
                  </li>
                </ol>
              </nav>
              <div className="w-full  mt-4 flex items-center justify-between">
                {" "}
                <div className="flex gap-3 items-center">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_87_16450)">
                      <rect width="48" height="48" rx="12" fill="#ECEFF0" />
                      <g clip-path="url(#clip1_87_16450)">
                        <rect width="48" height="48" rx="6" fill="#ECEFF0" />
                        <circle cx="24" cy="24" r="24" fill="#ECEFF0" />
                        <path
                          opacity="0.6"
                          d="M23.7347 20.5229L15 24.4939L23.7347 29.6574L32.4711 24.4939L23.7347 20.5229Z"
                          fill="black"
                        />
                        <path
                          opacity="0.45"
                          d="M15.0029 24.4937L23.7377 29.6572V20.5228V10L15.0029 24.4937Z"
                          fill="black"
                        />
                        <path
                          opacity="0.8"
                          d="M23.7378 10V20.5228V29.6572L32.4725 24.4937L23.7378 10Z"
                          fill="black"
                        />
                        <path
                          opacity="0.45"
                          d="M15 26.1509L23.7347 38.4601V31.3111L15 26.1509Z"
                          fill="black"
                        />
                        <path
                          opacity="0.8"
                          d="M23.7349 31.3111V38.4601L32.4761 26.1509L23.7349 31.3111Z"
                          fill="black"
                        />
                      </g>
                    </g>
                    <rect
                      x="0.5"
                      y="0.5"
                      width="47"
                      height="47"
                      rx="11.5"
                      stroke="#D0D5DD"
                    />
                    <defs>
                      <clipPath id="clip0_87_16450">
                        <rect width="48" height="48" rx="12" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_87_16450">
                        <rect width="48" height="48" rx="6" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div>
                    <h1 className="text-2xl font-medium leading-tight">
                      Network Account Name
                    </h1>{" "}
                    <p className="text-sm text-gray-700">
                      Ethereum (0xD2...05F6)
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="default">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83333 10.0001H10V14.1667M2.50833 10.0001H2.5M6.675 14.1667H6.66667M10.0083 17.5001H10M17.5083 10.0001H17.5M2.5 14.1667H3.75M12.9167 10.0001H14.5833M2.5 17.5001H6.66667M10 1.66675V6.66675M14.6667 17.5001H16.1667C16.6334 17.5001 16.8667 17.5001 17.045 17.4093C17.2018 17.3294 17.3293 17.2019 17.4092 17.0451C17.5 16.8668 17.5 16.6335 17.5 16.1667V14.6667C17.5 14.2 17.5 13.9667 17.4092 13.7884C17.3293 13.6316 17.2018 13.5041 17.045 13.4242C16.8667 13.3334 16.6334 13.3334 16.1667 13.3334H14.6667C14.2 13.3334 13.9666 13.3334 13.7883 13.4242C13.6315 13.5041 13.5041 13.6316 13.4242 13.7884C13.3333 13.9667 13.3333 14.2 13.3333 14.6667V16.1667C13.3333 16.6335 13.3333 16.8668 13.4242 17.0451C13.5041 17.2019 13.6315 17.3294 13.7883 17.4093C13.9666 17.5001 14.2 17.5001 14.6667 17.5001ZM14.6667 6.66675H16.1667C16.6334 6.66675 16.8667 6.66675 17.045 6.57592C17.2018 6.49603 17.3293 6.36854 17.4092 6.21174C17.5 6.03348 17.5 5.80013 17.5 5.33341V3.83341C17.5 3.3667 17.5 3.13335 17.4092 2.95509C17.3293 2.79829 17.2018 2.6708 17.045 2.59091C16.8667 2.50008 16.6334 2.50008 16.1667 2.50008H14.6667C14.2 2.50008 13.9666 2.50008 13.7883 2.59091C13.6315 2.6708 13.5041 2.79829 13.4242 2.95509C13.3333 3.13335 13.3333 3.3667 13.3333 3.83341V5.33341C13.3333 5.80013 13.3333 6.03348 13.4242 6.21174C13.5041 6.36854 13.6315 6.49603 13.7883 6.57592C13.9666 6.66675 14.2 6.66675 14.6667 6.66675ZM3.83333 6.66675H5.33333C5.80004 6.66675 6.0334 6.66675 6.21166 6.57592C6.36846 6.49603 6.49594 6.36854 6.57584 6.21174C6.66667 6.03348 6.66667 5.80013 6.66667 5.33341V3.83341C6.66667 3.3667 6.66667 3.13335 6.57584 2.95509C6.49594 2.79829 6.36846 2.6708 6.21166 2.59091C6.0334 2.50008 5.80004 2.50008 5.33333 2.50008H3.83333C3.36662 2.50008 3.13327 2.50008 2.95501 2.59091C2.79821 2.6708 2.67072 2.79829 2.59083 2.95509C2.5 3.13335 2.5 3.3667 2.5 3.83341V5.33341C2.5 5.80013 2.5 6.03348 2.59083 6.21174C2.67072 6.36854 2.79821 6.49603 2.95501 6.57592C3.13327 6.66675 3.36662 6.66675 3.83333 6.66675Z"
                        stroke="white"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Receive
                  </Button>
                  <Button variant="default">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0004 15.8334V10M10.2433 15.9039L16.0587 17.8507C16.5145 18.0033 16.7423 18.0796 16.8829 18.0248C17.0049 17.9773 17.0975 17.8752 17.1328 17.7491C17.1735 17.6038 17.0752 17.3845 16.8787 16.9459L10.6383 3.01866C10.4462 2.58975 10.3501 2.37529 10.2162 2.30884C10.0999 2.2511 9.96334 2.25089 9.84686 2.30824C9.71279 2.37427 9.61601 2.58841 9.42245 3.01671L3.12703 16.9467C2.92895 17.385 2.82991 17.6042 2.87019 17.7496C2.90516 17.8758 2.99747 17.9783 3.11941 18.0261C3.25981 18.0813 3.48806 18.0055 3.94455 17.854L9.82165 15.9034C9.89991 15.8774 9.93904 15.8644 9.97905 15.8593C10.0146 15.8547 10.0505 15.8548 10.086 15.8594C10.126 15.8646 10.1651 15.8777 10.2433 15.9039Z"
                        stroke="white"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Send
                  </Button>
                </div>
              </div>

              <div className="w-full  mt-5 flex items-center justify-between pb-1">
                {" "}
                <div>
                  <Tabs defaultValue="overview">
                    <TabsList className="mt-4">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="assets">Assets</TabsTrigger>
                      <TabsTrigger value="dApps">dApps</TabsTrigger>
                      <TabsTrigger value="positions">Positions</TabsTrigger>
                      <TabsTrigger value="nfts">NFTs</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <h2 className="text-2xl font-medium">Overview</h2>{" "}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.0442 10.7441C16.8127 12.9191 15.5804 14.9572 13.5412 16.1345C10.1533 18.0905 5.8212 16.9297 3.86519 13.5418L3.65686 13.1809M2.95515 9.25578C3.18665 7.08086 4.41898 5.04276 6.45813 3.86545C9.84604 1.90944 14.1781 3.07023 16.1341 6.45813L16.3425 6.81898M2.91101 15.055L3.52105 12.7783L5.79776 13.3883M14.202 6.61161L16.4787 7.22165L17.0888 4.94495"
                        stroke="#344054"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Update Data
                  </Button>

                  <Select defaultValue="light">
                    <SelectTrigger className="w-48 gap-2 ">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 8.33342H2.5M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4388 17.2275 16.9684C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33342C17.5 5.93328 17.5 5.23322 17.2275 4.69844C16.9878 4.22803 16.6054 3.84558 16.135 3.6059C15.6002 3.33341 14.9001 3.33341 13.5 3.33341H6.5C5.09987 3.33341 4.3998 3.33341 3.86502 3.6059C3.39462 3.84558 3.01217 4.22803 2.77248 4.69844C2.5 5.23322 2.5 5.93328 2.5 7.33341V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9684C3.01217 17.4388 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z"
                          stroke="#344054"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <SelectValue placeholder="Past Day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Past Day</SelectItem>
                      <SelectItem value="dark">Past Week</SelectItem>
                      <SelectItem value="pastmonth">Past Month</SelectItem>
                      <SelectItem value="threemonths">Three Months</SelectItem>
                      <SelectItem value="yeartodate">Year to Date</SelectItem>
                      <SelectItem value="pastyear">Past Year</SelectItem>
                      <SelectItem value="alltime">All Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
            <Stats variant="network" />

            <Allocation />

            <AssetTable />
          </div>
        </div>
      </TimeProvider>
    </main>
  );
}

export default BitcoinOne;
