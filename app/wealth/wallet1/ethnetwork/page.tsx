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
                  <a href="#" className="block transition hover:text-gray-700">
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
                  <a href="#" className="block transition hover:text-gray-700">
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
          <div className="w-full  h-auto border rounded-2xl border-gray-300 p-4 flex flex-col gap-6">
            <div>
              <p className="text-base text-gray-600 flex gap-2 items-center">
                Network Account Value
                <a>
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
                </a>
              </p>
              <h2 className="text-3xl mt-1 font-medium">{formattedNetWorth}</h2>

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
                  9.54% ($20,239.24)
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  Last 24 hours
                </p>
              </div>
            </div>

            <div>
              <AreaChart
                data={data}
                index="date"
                categories={["Value"]}
                colors={["teal", "blue"]}
                showLegend={false}
                showYAxis={true}
                showGradient={true}
                startEndOnly={true}
                className="mt-6 h-72"
              />
            </div>
          </div>

          <div className="w-full flex flex-col xl:flex-row gap-3 h-auto">
            <div className="relative w-full p-4 bg-white rounded-2xl border border-gray-300 flex-1 justify-between flex flex-col duration-300 ease-in-out ">
              <p className="text-base text-gray-600 flex gap-2 items-center">
                Total Assets
                <a>
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
                </a>
              </p>
              <h2 className="text-xl mt-1 font-medium">
                {formattedTotalAssets}
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
                  9.54% ($20,239.24)
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  Last 24 hours
                </p>
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
                <a>
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
                </a>
              </p>
              <h2 className="text-xl mt-1 font-medium">
                {formattedTotalDebts}
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
                  9.54% ($20,239.24)
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  Last 24 hours
                </p>
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
                Total Claimable
                <a>
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
                </a>
              </p>
              <h2 className="text-xl mt-1 font-medium">
                {formattedTotalClaimable}
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
                  9.54% ($20,239.24)
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  Last 24 hours
                </p>
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
          </div>

          <div className="relative w-full  bg-white border rounded-2xl border-gray-300 p-5 flex flex-col gap-6">
            <div className="relative flex justify-between w-full justify-items-stretch flex-row place-content-between	">
              <div className="flex flex-col max-w-[30rem]">
                <h2 className="text-xl font-medium">Allocation</h2>
              </div>
            </div>
            <Tabs defaultValue="assets">
              <TabsList className="absolute right-0 top-0 mt-5 mr-5">
                <TabsTrigger value="assets">Assets</TabsTrigger>
                <TabsTrigger value="protocols">Protocols</TabsTrigger>
                <TabsTrigger value="networks">Networks</TabsTrigger>
              </TabsList>
              <TabsContent className="w-full py-2" value="assets">
                <div className="w-full h-6 flex rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-green-300"></div>
                  <div className="w-full h-full bg-red-300"></div>
                  <div className="w-full h-full bg-blue-300"></div>
                  <div className="w-full h-full bg-yellow-300"></div>
                </div>
                <div className="text-sm text-gray-700 font-medium flex items-center gap-3 mt-4">
                  <div className="flex items-center gap-2 py-1 px-2.5">
                    <div className="size-2 rounded-full bg-green-300"></div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_86_3742)">
                        <rect width="24" height="24" rx="12" fill="#F7931A" />
                        <path
                          d="M23.641 14.9029C22.0383 21.3315 15.5271 25.2438 9.09772 23.6407C2.67102 22.0381 -1.24132 15.5265 0.362068 9.09837C1.96405 2.66903 8.47521 -1.24361 14.9026 0.359081C21.3316 1.96177 25.2437 8.47405 23.6408 14.903L23.6409 14.9029H23.641Z"
                          fill="#F7931A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.2928 10.2903C17.5316 8.6934 16.3158 7.83498 14.6533 7.26233L15.1926 5.09914L13.8758 4.77103L13.3508 6.87726C13.0046 6.79093 12.6491 6.70957 12.2958 6.62892L12.8246 4.50878L11.5086 4.18066L10.969 6.34315C10.6825 6.27793 10.4012 6.21347 10.1282 6.14555L10.1297 6.13874L8.3138 5.68528L7.96351 7.09171C7.96351 7.09171 8.94047 7.31565 8.91988 7.32944C9.45311 7.46252 9.54954 7.81551 9.53353 8.09529L8.91918 10.5597C8.95589 10.569 9.00352 10.5825 9.05608 10.6036L9.01781 10.5941L9.01777 10.5941C8.9853 10.5859 8.95154 10.5775 8.91689 10.5692L8.05578 14.0214C7.99061 14.1834 7.8252 14.4266 7.45239 14.3342C7.46559 14.3534 6.49532 14.0954 6.49532 14.0954L5.84155 15.6027L7.55516 16.0299C7.7428 16.077 7.92822 16.1253 8.11177 16.1731L8.1118 16.1731C8.24007 16.2066 8.36743 16.2398 8.49399 16.2721L7.94908 18.4601L9.26436 18.7883L9.80399 16.6235C10.1633 16.721 10.512 16.811 10.8534 16.8958L10.3156 19.0504L11.6324 19.3785L12.1773 17.1946C14.4227 17.6196 16.1111 17.4482 16.8218 15.4172C17.3944 13.7821 16.7932 12.8389 15.6119 12.2238C16.4723 12.0254 17.1204 11.4595 17.2932 10.2905L17.2928 10.2902L17.2928 10.2903ZM14.2842 14.5091C13.9108 16.0094 11.5625 15.3891 10.4881 15.1054C10.3915 15.0798 10.3051 15.057 10.2315 15.0387L10.9546 12.14C11.0443 12.1624 11.154 12.187 11.2783 12.2149L11.2784 12.2149C12.3897 12.4644 14.6667 12.9754 14.2842 14.5091H14.2842ZM11.5013 10.8696C12.397 11.1087 14.3511 11.6302 14.6914 10.2666H14.6915C15.039 8.8721 13.14 8.45166 12.2125 8.24631C12.1082 8.22321 12.0161 8.20283 11.941 8.1841L11.2854 10.8131C11.3473 10.8285 11.4199 10.8479 11.5013 10.8696Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_86_3742">
                          <rect width="24" height="24" rx="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    BTC • 20%
                  </div>

                  <div className="flex items-center gap-2 py-1 px-2.5">
                    <div className="size-2 rounded-full bg-red-300"></div>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_86_3757)">
                        <circle cx="12" cy="12" r="12" fill="#ECEFF0" />
                        <path
                          opacity="0.6"
                          d="M11.8674 10.2615L7.5 12.2469L11.8674 14.8287L16.2355 12.2469L11.8674 10.2615Z"
                          fill="black"
                        />
                        <path
                          opacity="0.45"
                          d="M7.50146 12.2469L11.8688 14.8286V10.2614V5L7.50146 12.2469Z"
                          fill="black"
                        />
                        <path
                          opacity="0.8"
                          d="M11.8689 5V10.2614V14.8286L16.2363 12.2469L11.8689 5Z"
                          fill="black"
                        />
                        <path
                          opacity="0.45"
                          d="M7.5 13.0754L11.8674 19.23V15.6556L7.5 13.0754Z"
                          fill="black"
                        />
                        <path
                          opacity="0.8"
                          d="M11.8674 15.6556V19.23L16.238 13.0754L11.8674 15.6556Z"
                          fill="black"
                        />
                      </g>
                      <g clip-path="url(#clip1_86_3757)">
                        <circle cx="18" cy="18" r="6" fill="#ECEFF0" />
                        <path
                          opacity="0.6"
                          d="M17.9337 17.1307L15.75 18.1235L17.9337 19.4143L20.1178 18.1235L17.9337 17.1307Z"
                          fill="black"
                        />
                        <path
                          opacity="0.45"
                          d="M15.7507 18.1234L17.9344 19.4143V17.1307V14.5L15.7507 18.1234Z"
                          fill="black"
                        />
                        <path
                          opacity="0.8"
                          d="M17.9346 14.5V17.1307V19.4143L20.1183 18.1234L17.9346 14.5Z"
                          fill="black"
                        />
                        <path
                          opacity="0.45"
                          d="M15.75 18.5377L17.9337 21.615V19.8278L15.75 18.5377Z"
                          fill="black"
                        />
                        <path
                          opacity="0.8"
                          d="M17.9336 19.8278V21.615L20.1189 18.5377L17.9336 19.8278Z"
                          fill="black"
                        />
                      </g>
                      <rect
                        x="11.5"
                        y="11.5"
                        width="13"
                        height="13"
                        rx="6.5"
                        stroke="white"
                      />
                      <defs>
                        <clipPath id="clip0_86_3757">
                          <rect width="24" height="24" rx="12" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_86_3757">
                          <rect
                            x="12"
                            y="12"
                            width="12"
                            height="12"
                            rx="6"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    ETH • 20%
                  </div>

                  <div className="flex items-center gap-2 py-1 px-2.5">
                    <div className="size-2 rounded-full bg-blue-300"></div>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_86_3783)">
                        <rect width="24" height="24" rx="12" fill="#50AF95" />
                        <path
                          d="M23.6383 14.9029C22.0356 21.3315 15.5244 25.2438 9.09503 23.6407C2.66833 22.0381 -1.24401 15.5265 0.359382 9.09837C1.96137 2.66903 8.47253 -1.24361 14.8999 0.359081C21.3289 1.96177 25.241 8.47405 23.6381 14.903L23.6382 14.9029H23.6383Z"
                          fill="#50AF95"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.5184 13.3605C13.4336 13.3668 12.9952 13.393 12.0173 13.393C11.2395 13.393 10.6872 13.3697 10.4935 13.3605C7.48765 13.2283 5.24405 12.705 5.24405 12.0785C5.24405 11.452 7.48765 10.9295 10.4935 10.7952V12.8394C10.6901 12.8535 11.2529 12.8867 12.0307 12.8867C12.9641 12.8867 13.4314 12.8478 13.5156 12.8401V10.7966C16.5151 10.9302 18.7537 11.4535 18.7537 12.0785C18.7537 12.7036 16.5158 13.2268 13.5156 13.3598L13.5184 13.3605ZM13.5184 10.5851V8.7559H17.7044V5.96643H6.30751V8.7559H10.4928V10.5844C7.09097 10.7407 4.53271 11.4146 4.53271 12.2221C4.53271 13.0296 7.09097 13.7027 10.4928 13.8597V19.7215H13.5177V13.8576C16.9118 13.7013 19.4658 13.0281 19.4658 12.2214C19.4658 11.4146 16.9139 10.7414 13.5177 10.5844L13.5184 10.5851Z"
                          fill="white"
                        />
                      </g>
                      <g clip-path="url(#clip1_86_3783)">
                        <circle cx="18" cy="18" r="6" fill="#ECEFF0" />
                        <path
                          opacity="0.6"
                          d="M17.9337 17.1307L15.75 18.1235L17.9337 19.4143L20.1178 18.1235L17.9337 17.1307Z"
                          fill="black"
                        />
                        <path
                          opacity="0.45"
                          d="M15.7507 18.1234L17.9344 19.4143V17.1307V14.5L15.7507 18.1234Z"
                          fill="black"
                        />
                        <path
                          opacity="0.8"
                          d="M17.9346 14.5V17.1307V19.4143L20.1183 18.1234L17.9346 14.5Z"
                          fill="black"
                        />
                        <path
                          opacity="0.45"
                          d="M15.75 18.5377L17.9337 21.615V19.8278L15.75 18.5377Z"
                          fill="black"
                        />
                        <path
                          opacity="0.8"
                          d="M17.9336 19.8278V21.615L20.1189 18.5377L17.9336 19.8278Z"
                          fill="black"
                        />
                      </g>
                      <rect
                        x="11.5"
                        y="11.5"
                        width="13"
                        height="13"
                        rx="6.5"
                        stroke="white"
                      />
                      <defs>
                        <clipPath id="clip0_86_3783">
                          <rect width="24" height="24" rx="12" fill="white" />
                        </clipPath>
                        <clipPath id="clip1_86_3783">
                          <rect
                            x="12"
                            y="12"
                            width="12"
                            height="12"
                            rx="6"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    USDT • 20%
                  </div>

                  <div className="flex items-center gap-2 py-1 px-2.5">
                    <div className="size-2 rounded-full bg-yellow-300"></div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_86_3807)">
                        <rect width="24" height="24" rx="12" fill="#EDF0F4" />
                        <mask
                          id="mask0_86_3807"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <path
                            d="M12.0001 23.7556C18.4925 23.7556 23.7557 18.4924 23.7557 11.9999C23.7557 5.50746 18.4925 0.244263 12.0001 0.244263C5.50758 0.244263 0.244385 5.50746 0.244385 11.9999C0.244385 18.4924 5.50758 23.7556 12.0001 23.7556Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_86_3807)">
                          <path
                            d="M24.8689 -0.868896H-0.868652V24.8687H24.8689V-0.868896Z"
                            fill="url(#paint0_linear_86_3807)"
                          />
                        </g>
                        <path
                          d="M15.3997 14.5368L18.7257 12.6163C18.9018 12.5145 19.0108 12.3254 19.0108 12.1219V8.28142C19.0108 8.07839 18.9013 7.88878 18.7257 7.78702L15.3997 5.86655C15.2236 5.76479 15.0052 5.76527 14.829 5.86655L11.5031 7.78702C11.3269 7.88878 11.218 8.07839 11.218 8.28142V15.1449L8.88565 16.4913L6.55333 15.1449V12.4517L8.88565 11.1053L10.4241 11.9933V10.1865L9.17077 9.46318C9.08437 9.41326 8.98549 9.38686 8.88517 9.38686C8.78485 9.38686 8.68597 9.41326 8.60005 9.46318L5.27413 11.3837C5.09797 11.4854 4.98901 11.6745 4.98901 11.8781V15.7185C4.98901 15.9216 5.09845 16.1112 5.27413 16.2129L8.60005 18.1334C8.77573 18.2347 8.99461 18.2347 9.17077 18.1334L12.4967 16.2134C12.6729 16.1117 12.7818 15.9221 12.7818 15.719V8.85551L12.8241 8.83151L15.1141 7.50911L17.4465 8.85551V11.5488L15.1141 12.8952L13.5781 12.0081V13.8149L14.829 14.5373C15.0052 14.6385 15.2236 14.6385 15.3997 14.5373V14.5368Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_86_3807"
                          x1="-5.57217"
                          y1="1.24646"
                          x2="20.9977"
                          y2="17.506"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#A229C5" />
                          <stop offset="1" stop-color="#7B3FE4" />
                        </linearGradient>
                        <clipPath id="clip0_86_3807">
                          <rect width="24" height="24" rx="12" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    MATIC • 20%
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="w-full " value="protocols">
                <div className="w-full flex gap-2  text-sm items-center bg-gray-50 py-1 px-2 border border-gray-100 rounded-2xl overflow-hidden">
                  <div className="h-20 w-20 items-center relative justify-center flex ">
                    <svg
                      className="absolute w-full h-full"
                      width="86"
                      height="64"
                      viewBox="0 0 86 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_98_28446"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="0"
                        width="65"
                        height="64"
                      >
                        <rect
                          x="10.75"
                          width="64"
                          height="64"
                          rx="32"
                          fill="url(#paint0_radial_98_28446)"
                        />
                      </mask>
                      <g mask="url(#mask0_98_28446)">
                        <g clip-path="url(#clip0_98_28446)">
                          <mask id="path-4-inside-1_98_28446" fill="white">
                            <path d="M8.5332 0H12.3258V3.79259H8.5332V0Z" />
                          </mask>
                          <path
                            d="M12.3258 3.79259V4.09259H12.6258V3.79259H12.3258ZM12.0258 0V3.79259H12.6258V0H12.0258ZM12.3258 3.49259H8.5332V4.09259H12.3258V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-4-inside-1_98_28446)"
                          />
                          <mask id="path-6-inside-2_98_28446" fill="white">
                            <path d="M12.3252 0H16.1178V3.79259H12.3252V0Z" />
                          </mask>
                          <path
                            d="M16.1178 3.79259V4.09259H16.4178V3.79259H16.1178ZM15.8178 0V3.79259H16.4178V0H15.8178ZM16.1178 3.49259H12.3252V4.09259H16.1178V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-6-inside-2_98_28446)"
                          />
                          <mask id="path-8-inside-3_98_28446" fill="white">
                            <path d="M16.118 0H19.9106V3.79259H16.118V0Z" />
                          </mask>
                          <path
                            d="M19.9106 3.79259V4.09259H20.2106V3.79259H19.9106ZM19.6106 0V3.79259H20.2106V0H19.6106ZM19.9106 3.49259H16.118V4.09259H19.9106V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-8-inside-3_98_28446)"
                          />
                          <mask id="path-10-inside-4_98_28446" fill="white">
                            <path d="M19.9111 0H23.7037V3.79259H19.9111V0Z" />
                          </mask>
                          <path
                            d="M23.7037 3.79259V4.09259H24.0037V3.79259H23.7037ZM23.4037 0V3.79259H24.0037V0H23.4037ZM23.7037 3.49259H19.9111V4.09259H23.7037V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-10-inside-4_98_28446)"
                          />
                          <mask id="path-12-inside-5_98_28446" fill="white">
                            <path d="M23.7032 0H27.4958V3.79259H23.7032V0Z" />
                          </mask>
                          <path
                            d="M27.4958 3.79259V4.09259H27.7958V3.79259H27.4958ZM27.1958 0V3.79259H27.7958V0H27.1958ZM27.4958 3.49259H23.7032V4.09259H27.4958V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-12-inside-5_98_28446)"
                          />
                          <mask id="path-14-inside-6_98_28446" fill="white">
                            <path d="M27.4958 0H31.2884V3.79259H27.4958V0Z" />
                          </mask>
                          <path
                            d="M31.2884 3.79259V4.09259H31.5884V3.79259H31.2884ZM30.9884 0V3.79259H31.5884V0H30.9884ZM31.2884 3.49259H27.4958V4.09259H31.2884V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-14-inside-6_98_28446)"
                          />
                          <mask id="path-16-inside-7_98_28446" fill="white">
                            <path d="M31.2881 0H35.0807V3.79259H31.2881V0Z" />
                          </mask>
                          <path
                            d="M35.0807 3.79259V4.09259H35.3807V3.79259H35.0807ZM34.7807 0V3.79259H35.3807V0H34.7807ZM35.0807 3.49259H31.2881V4.09259H35.0807V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-16-inside-7_98_28446)"
                          />
                          <mask id="path-18-inside-8_98_28446" fill="white">
                            <path d="M35.0811 0H38.8736V3.79259H35.0811V0Z" />
                          </mask>
                          <path
                            d="M38.8736 3.79259V4.09259H39.1736V3.79259H38.8736ZM38.5736 0V3.79259H39.1736V0H38.5736ZM38.8736 3.49259H35.0811V4.09259H38.8736V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-18-inside-8_98_28446)"
                          />
                          <mask id="path-20-inside-9_98_28446" fill="white">
                            <path d="M38.874 0H42.6666V3.79259H38.874V0Z" />
                          </mask>
                          <path
                            d="M42.6666 3.79259V4.09259H42.9666V3.79259H42.6666ZM42.3666 0V3.79259H42.9666V0H42.3666ZM42.6666 3.49259H38.874V4.09259H42.6666V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-20-inside-9_98_28446)"
                          />
                          <mask id="path-22-inside-10_98_28446" fill="white">
                            <path d="M42.6663 0H46.4589V3.79259H42.6663V0Z" />
                          </mask>
                          <path
                            d="M46.4589 3.79259V4.09259H46.7589V3.79259H46.4589ZM46.1589 0V3.79259H46.7589V0H46.1589ZM46.4589 3.49259H42.6663V4.09259H46.4589V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-22-inside-10_98_28446)"
                          />
                          <mask id="path-24-inside-11_98_28446" fill="white">
                            <path d="M46.4589 0H50.2515V3.79259H46.4589V0Z" />
                          </mask>
                          <path
                            d="M50.2515 3.79259V4.09259H50.5515V3.79259H50.2515ZM49.9515 0V3.79259H50.5515V0H49.9515ZM50.2515 3.49259H46.4589V4.09259H50.2515V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-24-inside-11_98_28446)"
                          />
                          <mask id="path-26-inside-12_98_28446" fill="white">
                            <path d="M50.251 0H54.0436V3.79259H50.251V0Z" />
                          </mask>
                          <path
                            d="M54.0436 3.79259V4.09259H54.3436V3.79259H54.0436ZM53.7436 0V3.79259H54.3436V0H53.7436ZM54.0436 3.49259H50.251V4.09259H54.0436V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-26-inside-12_98_28446)"
                          />
                          <mask id="path-28-inside-13_98_28446" fill="white">
                            <path d="M54.0441 0H57.8367V3.79259H54.0441V0Z" />
                          </mask>
                          <path
                            d="M57.8367 3.79259V4.09259H58.1367V3.79259H57.8367ZM57.5367 0V3.79259H58.1367V0H57.5367ZM57.8367 3.49259H54.0441V4.09259H57.8367V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-28-inside-13_98_28446)"
                          />
                          <mask id="path-30-inside-14_98_28446" fill="white">
                            <path d="M57.8369 0H61.6295V3.79259H57.8369V0Z" />
                          </mask>
                          <path
                            d="M61.6295 3.79259V4.09259H61.9295V3.79259H61.6295ZM61.3295 0V3.79259H61.9295V0H61.3295ZM61.6295 3.49259H57.8369V4.09259H61.6295V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-30-inside-14_98_28446)"
                          />
                          <mask id="path-32-inside-15_98_28446" fill="white">
                            <path d="M61.6289 0H65.4215V3.79259H61.6289V0Z" />
                          </mask>
                          <path
                            d="M65.4215 3.79259V4.09259H65.7215V3.79259H65.4215ZM65.1215 0V3.79259H65.7215V0H65.1215ZM65.4215 3.49259H61.6289V4.09259H65.4215V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-32-inside-15_98_28446)"
                          />
                          <mask id="path-34-inside-16_98_28446" fill="white">
                            <path d="M65.4218 0H69.2143V3.79259H65.4218V0Z" />
                          </mask>
                          <path
                            d="M69.2143 3.79259V4.09259H69.5143V3.79259H69.2143ZM68.9143 0V3.79259H69.5143V0H68.9143ZM69.2143 3.49259H65.4218V4.09259H69.2143V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-34-inside-16_98_28446)"
                          />
                          <mask id="path-36-inside-17_98_28446" fill="white">
                            <path d="M69.2148 0H73.0074V3.79259H69.2148V0Z" />
                          </mask>
                          <path
                            d="M73.0074 3.79259V4.09259H73.3074V3.79259H73.0074ZM72.7074 0V3.79259H73.3074V0H72.7074ZM73.0074 3.49259H69.2148V4.09259H73.0074V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-36-inside-17_98_28446)"
                          />
                          <mask id="path-38-inside-18_98_28446" fill="white">
                            <path d="M73.007 0H76.7996V3.79259H73.007V0Z" />
                          </mask>
                          <path
                            d="M76.7996 3.79259V4.09259H77.0996V3.79259H76.7996ZM76.4996 0V3.79259H77.0996V0H76.4996ZM76.7996 3.49259H73.007V4.09259H76.7996V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-38-inside-18_98_28446)"
                          />
                          <mask id="path-40-inside-19_98_28446" fill="white">
                            <path d="M8.5332 3.79297H12.3258V7.58556H8.5332V3.79297Z" />
                          </mask>
                          <path
                            d="M12.3258 7.58556V7.88556H12.6258V7.58556H12.3258ZM12.0258 3.79297V7.58556H12.6258V3.79297H12.0258ZM12.3258 7.28556H8.5332V7.88556H12.3258V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-40-inside-19_98_28446)"
                          />
                          <mask id="path-42-inside-20_98_28446" fill="white">
                            <path d="M12.3252 3.79297H16.1178V7.58556H12.3252V3.79297Z" />
                          </mask>
                          <path
                            d="M16.1178 7.58556V7.88556H16.4178V7.58556H16.1178ZM15.8178 3.79297V7.58556H16.4178V3.79297H15.8178ZM16.1178 7.28556H12.3252V7.88556H16.1178V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-42-inside-20_98_28446)"
                          />
                          <mask id="path-44-inside-21_98_28446" fill="white">
                            <path d="M16.118 3.79297H19.9106V7.58556H16.118V3.79297Z" />
                          </mask>
                          <path
                            d="M19.9106 7.58556V7.88556H20.2106V7.58556H19.9106ZM19.6106 3.79297V7.58556H20.2106V3.79297H19.6106ZM19.9106 7.28556H16.118V7.88556H19.9106V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-44-inside-21_98_28446)"
                          />
                          <mask id="path-46-inside-22_98_28446" fill="white">
                            <path d="M19.9111 3.79297H23.7037V7.58556H19.9111V3.79297Z" />
                          </mask>
                          <path
                            d="M19.9111 3.79297H23.7037V7.58556H19.9111V3.79297Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M23.7037 7.58556V7.88556H24.0037V7.58556H23.7037ZM23.4037 3.79297V7.58556H24.0037V3.79297H23.4037ZM23.7037 7.28556H19.9111V7.88556H23.7037V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-46-inside-22_98_28446)"
                          />
                          <mask id="path-48-inside-23_98_28446" fill="white">
                            <path d="M23.7032 3.79297H27.4958V7.58556H23.7032V3.79297Z" />
                          </mask>
                          <path
                            d="M27.4958 7.58556V7.88556H27.7958V7.58556H27.4958ZM27.1958 3.79297V7.58556H27.7958V3.79297H27.1958ZM27.4958 7.28556H23.7032V7.88556H27.4958V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-48-inside-23_98_28446)"
                          />
                          <mask id="path-50-inside-24_98_28446" fill="white">
                            <path d="M27.4961 3.79297H31.2887V7.58556H27.4961V3.79297Z" />
                          </mask>
                          <path
                            d="M31.2887 7.58556V7.88556H31.5887V7.58556H31.2887ZM30.9887 3.79297V7.58556H31.5887V3.79297H30.9887ZM31.2887 7.28556H27.4961V7.88556H31.2887V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-50-inside-24_98_28446)"
                          />
                          <mask id="path-52-inside-25_98_28446" fill="white">
                            <path d="M31.2881 3.79297H35.0807V7.58556H31.2881V3.79297Z" />
                          </mask>
                          <path
                            d="M35.0807 7.58556V7.88556H35.3807V7.58556H35.0807ZM34.7807 3.79297V7.58556H35.3807V3.79297H34.7807ZM35.0807 7.28556H31.2881V7.88556H35.0807V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-52-inside-25_98_28446)"
                          />
                          <mask id="path-54-inside-26_98_28446" fill="white">
                            <path d="M35.0811 3.79297H38.8736V7.58556H35.0811V3.79297Z" />
                          </mask>
                          <path
                            d="M38.8736 7.58556V7.88556H39.1736V7.58556H38.8736ZM38.5736 3.79297V7.58556H39.1736V3.79297H38.5736ZM38.8736 7.28556H35.0811V7.88556H38.8736V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-54-inside-26_98_28446)"
                          />
                          <mask id="path-56-inside-27_98_28446" fill="white">
                            <path d="M38.874 3.79297H42.6666V7.58556H38.874V3.79297Z" />
                          </mask>
                          <path
                            d="M42.6666 7.58556V7.88556H42.9666V7.58556H42.6666ZM42.3666 3.79297V7.58556H42.9666V3.79297H42.3666ZM42.6666 7.28556H38.874V7.88556H42.6666V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-56-inside-27_98_28446)"
                          />
                          <mask id="path-58-inside-28_98_28446" fill="white">
                            <path d="M42.6663 3.79297H46.4589V7.58556H42.6663V3.79297Z" />
                          </mask>
                          <path
                            d="M46.4589 7.58556V7.88556H46.7589V7.58556H46.4589ZM46.1589 3.79297V7.58556H46.7589V3.79297H46.1589ZM46.4589 7.28556H42.6663V7.88556H46.4589V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-58-inside-28_98_28446)"
                          />
                          <mask id="path-60-inside-29_98_28446" fill="white">
                            <path d="M46.4587 3.79297H50.2513V7.58556H46.4587V3.79297Z" />
                          </mask>
                          <path
                            d="M50.2513 7.58556V7.88556H50.5513V7.58556H50.2513ZM49.9513 3.79297V7.58556H50.5513V3.79297H49.9513ZM50.2513 7.28556H46.4587V7.88556H50.2513V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-60-inside-29_98_28446)"
                          />
                          <mask id="path-62-inside-30_98_28446" fill="white">
                            <path d="M50.251 3.79297H54.0436V7.58556H50.251V3.79297Z" />
                          </mask>
                          <path
                            d="M54.0436 7.58556V7.88556H54.3436V7.58556H54.0436ZM53.7436 3.79297V7.58556H54.3436V3.79297H53.7436ZM54.0436 7.28556H50.251V7.88556H54.0436V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-62-inside-30_98_28446)"
                          />
                          <mask id="path-64-inside-31_98_28446" fill="white">
                            <path d="M54.0439 3.79297H57.8365V7.58556H54.0439V3.79297Z" />
                          </mask>
                          <path
                            d="M57.8365 7.58556V7.88556H58.1365V7.58556H57.8365ZM57.5365 3.79297V7.58556H58.1365V3.79297H57.5365ZM57.8365 7.28556H54.0439V7.88556H57.8365V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-64-inside-31_98_28446)"
                          />
                          <mask id="path-66-inside-32_98_28446" fill="white">
                            <path d="M57.8369 3.79297H61.6295V7.58556H57.8369V3.79297Z" />
                          </mask>
                          <path
                            d="M61.6295 7.58556V7.88556H61.9295V7.58556H61.6295ZM61.3295 3.79297V7.58556H61.9295V3.79297H61.3295ZM61.6295 7.28556H57.8369V7.88556H61.6295V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-66-inside-32_98_28446)"
                          />
                          <mask id="path-68-inside-33_98_28446" fill="white">
                            <path d="M61.6289 3.79297H65.4215V7.58556H61.6289V3.79297Z" />
                          </mask>
                          <path
                            d="M61.6289 3.79297H65.4215V7.58556H61.6289V3.79297Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M65.4215 7.58556V7.88556H65.7215V7.58556H65.4215ZM65.1215 3.79297V7.58556H65.7215V3.79297H65.1215ZM65.4215 7.28556H61.6289V7.88556H65.4215V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-68-inside-33_98_28446)"
                          />
                          <mask id="path-70-inside-34_98_28446" fill="white">
                            <path d="M65.4219 3.79297H69.2145V7.58556H65.4219V3.79297Z" />
                          </mask>
                          <path
                            d="M69.2145 7.58556V7.88556H69.5145V7.58556H69.2145ZM68.9145 3.79297V7.58556H69.5145V3.79297H68.9145ZM69.2145 7.28556H65.4219V7.88556H69.2145V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-70-inside-34_98_28446)"
                          />
                          <mask id="path-72-inside-35_98_28446" fill="white">
                            <path d="M69.2148 3.79297H73.0074V7.58556H69.2148V3.79297Z" />
                          </mask>
                          <path
                            d="M73.0074 7.58556V7.88556H73.3074V7.58556H73.0074ZM72.7074 3.79297V7.58556H73.3074V3.79297H72.7074ZM73.0074 7.28556H69.2148V7.88556H73.0074V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-72-inside-35_98_28446)"
                          />
                          <mask id="path-74-inside-36_98_28446" fill="white">
                            <path d="M73.007 3.79297H76.7996V7.58556H73.007V3.79297Z" />
                          </mask>
                          <path
                            d="M76.7996 7.58556V7.88556H77.0996V7.58556H76.7996ZM76.4996 3.79297V7.58556H77.0996V3.79297H76.4996ZM76.7996 7.28556H73.007V7.88556H76.7996V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-74-inside-36_98_28446)"
                          />
                          <mask id="path-76-inside-37_98_28446" fill="white">
                            <path d="M8.5332 7.58496H12.3258V11.3776H8.5332V7.58496Z" />
                          </mask>
                          <path
                            d="M12.3258 11.3776V11.6776H12.6258V11.3776H12.3258ZM12.0258 7.58496V11.3776H12.6258V7.58496H12.0258ZM12.3258 11.0776H8.5332V11.6776H12.3258V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-76-inside-37_98_28446)"
                          />
                          <mask id="path-78-inside-38_98_28446" fill="white">
                            <path d="M12.3252 7.58496H16.1178V11.3776H12.3252V7.58496Z" />
                          </mask>
                          <path
                            d="M16.1178 11.3776V11.6776H16.4178V11.3776H16.1178ZM15.8178 7.58496V11.3776H16.4178V7.58496H15.8178ZM16.1178 11.0776H12.3252V11.6776H16.1178V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-78-inside-38_98_28446)"
                          />
                          <mask id="path-80-inside-39_98_28446" fill="white">
                            <path d="M16.118 7.58496H19.9106V11.3776H16.118V7.58496Z" />
                          </mask>
                          <path
                            d="M19.9106 11.3776V11.6776H20.2106V11.3776H19.9106ZM19.6106 7.58496V11.3776H20.2106V7.58496H19.6106ZM19.9106 11.0776H16.118V11.6776H19.9106V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-80-inside-39_98_28446)"
                          />
                          <mask id="path-82-inside-40_98_28446" fill="white">
                            <path d="M19.9111 7.58496H23.7037V11.3776H19.9111V7.58496Z" />
                          </mask>
                          <path
                            d="M23.7037 11.3776V11.6776H24.0037V11.3776H23.7037ZM23.4037 7.58496V11.3776H24.0037V7.58496H23.4037ZM23.7037 11.0776H19.9111V11.6776H23.7037V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-82-inside-40_98_28446)"
                          />
                          <mask id="path-84-inside-41_98_28446" fill="white">
                            <path d="M23.7032 7.58496H27.4958V11.3776H23.7032V7.58496Z" />
                          </mask>
                          <path
                            d="M27.4958 11.3776V11.6776H27.7958V11.3776H27.4958ZM27.1958 7.58496V11.3776H27.7958V7.58496H27.1958ZM27.4958 11.0776H23.7032V11.6776H27.4958V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-84-inside-41_98_28446)"
                          />
                          <mask id="path-86-inside-42_98_28446" fill="white">
                            <path d="M27.4961 7.58496H31.2887V11.3776H27.4961V7.58496Z" />
                          </mask>
                          <path
                            d="M27.4961 7.58496H31.2887V11.3776H27.4961V7.58496Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M31.2887 11.3776V11.6776H31.5887V11.3776H31.2887ZM30.9887 7.58496V11.3776H31.5887V7.58496H30.9887ZM31.2887 11.0776H27.4961V11.6776H31.2887V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-86-inside-42_98_28446)"
                          />
                          <mask id="path-88-inside-43_98_28446" fill="white">
                            <path d="M31.2881 7.58496H35.0807V11.3776H31.2881V7.58496Z" />
                          </mask>
                          <path
                            d="M35.0807 11.3776V11.6776H35.3807V11.3776H35.0807ZM34.7807 7.58496V11.3776H35.3807V7.58496H34.7807ZM35.0807 11.0776H31.2881V11.6776H35.0807V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-88-inside-43_98_28446)"
                          />
                          <mask id="path-90-inside-44_98_28446" fill="white">
                            <path d="M35.0811 7.58496H38.8736V11.3776H35.0811V7.58496Z" />
                          </mask>
                          <path
                            d="M38.8736 11.3776V11.6776H39.1736V11.3776H38.8736ZM38.5736 7.58496V11.3776H39.1736V7.58496H38.5736ZM38.8736 11.0776H35.0811V11.6776H38.8736V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-90-inside-44_98_28446)"
                          />
                          <mask id="path-92-inside-45_98_28446" fill="white">
                            <path d="M38.874 7.58496H42.6666V11.3776H38.874V7.58496Z" />
                          </mask>
                          <path
                            d="M42.6666 11.3776V11.6776H42.9666V11.3776H42.6666ZM42.3666 7.58496V11.3776H42.9666V7.58496H42.3666ZM42.6666 11.0776H38.874V11.6776H42.6666V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-92-inside-45_98_28446)"
                          />
                          <mask id="path-94-inside-46_98_28446" fill="white">
                            <path d="M42.6663 7.58496H46.4589V11.3776H42.6663V7.58496Z" />
                          </mask>
                          <path
                            d="M46.4589 11.3776V11.6776H46.7589V11.3776H46.4589ZM46.1589 7.58496V11.3776H46.7589V7.58496H46.1589ZM46.4589 11.0776H42.6663V11.6776H46.4589V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-94-inside-46_98_28446)"
                          />
                          <mask id="path-96-inside-47_98_28446" fill="white">
                            <path d="M46.4587 7.58496H50.2513V11.3776H46.4587V7.58496Z" />
                          </mask>
                          <path
                            d="M46.4587 7.58496H50.2513V11.3776H46.4587V7.58496Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M50.2513 11.3776V11.6776H50.5513V11.3776H50.2513ZM49.9513 7.58496V11.3776H50.5513V7.58496H49.9513ZM50.2513 11.0776H46.4587V11.6776H50.2513V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-96-inside-47_98_28446)"
                          />
                          <mask id="path-98-inside-48_98_28446" fill="white">
                            <path d="M50.251 7.58496H54.0436V11.3776H50.251V7.58496Z" />
                          </mask>
                          <path
                            d="M54.0436 11.3776V11.6776H54.3436V11.3776H54.0436ZM53.7436 7.58496V11.3776H54.3436V7.58496H53.7436ZM54.0436 11.0776H50.251V11.6776H54.0436V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-98-inside-48_98_28446)"
                          />
                          <mask id="path-100-inside-49_98_28446" fill="white">
                            <path d="M54.0439 7.58496H57.8365V11.3776H54.0439V7.58496Z" />
                          </mask>
                          <path
                            d="M57.8365 11.3776V11.6776H58.1365V11.3776H57.8365ZM57.5365 7.58496V11.3776H58.1365V7.58496H57.5365ZM57.8365 11.0776H54.0439V11.6776H57.8365V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-100-inside-49_98_28446)"
                          />
                          <mask id="path-102-inside-50_98_28446" fill="white">
                            <path d="M57.8369 7.58496H61.6295V11.3776H57.8369V7.58496Z" />
                          </mask>
                          <path
                            d="M61.6295 11.3776V11.6776H61.9295V11.3776H61.6295ZM61.3295 7.58496V11.3776H61.9295V7.58496H61.3295ZM61.6295 11.0776H57.8369V11.6776H61.6295V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-102-inside-50_98_28446)"
                          />
                          <mask id="path-104-inside-51_98_28446" fill="white">
                            <path d="M61.6289 7.58496H65.4215V11.3776H61.6289V7.58496Z" />
                          </mask>
                          <path
                            d="M65.4215 11.3776V11.6776H65.7215V11.3776H65.4215ZM65.1215 7.58496V11.3776H65.7215V7.58496H65.1215ZM65.4215 11.0776H61.6289V11.6776H65.4215V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-104-inside-51_98_28446)"
                          />
                          <mask id="path-106-inside-52_98_28446" fill="white">
                            <path d="M65.4219 7.58496H69.2145V11.3776H65.4219V7.58496Z" />
                          </mask>
                          <path
                            d="M69.2145 11.3776V11.6776H69.5145V11.3776H69.2145ZM68.9145 7.58496V11.3776H69.5145V7.58496H68.9145ZM69.2145 11.0776H65.4219V11.6776H69.2145V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-106-inside-52_98_28446)"
                          />
                          <mask id="path-108-inside-53_98_28446" fill="white">
                            <path d="M69.2148 7.58496H73.0074V11.3776H69.2148V7.58496Z" />
                          </mask>
                          <path
                            d="M73.0074 11.3776V11.6776H73.3074V11.3776H73.0074ZM72.7074 7.58496V11.3776H73.3074V7.58496H72.7074ZM73.0074 11.0776H69.2148V11.6776H73.0074V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-108-inside-53_98_28446)"
                          />
                          <mask id="path-110-inside-54_98_28446" fill="white">
                            <path d="M73.007 7.58496H76.7996V11.3776H73.007V7.58496Z" />
                          </mask>
                          <path
                            d="M76.7996 11.3776V11.6776H77.0996V11.3776H76.7996ZM76.4996 7.58496V11.3776H77.0996V7.58496H76.4996ZM76.7996 11.0776H73.007V11.6776H76.7996V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-110-inside-54_98_28446)"
                          />
                          <mask id="path-112-inside-55_98_28446" fill="white">
                            <path d="M8.5332 11.3779H12.3258V15.1705H8.5332V11.3779Z" />
                          </mask>
                          <path
                            d="M8.5332 11.3779H12.3258V15.1705H8.5332V11.3779Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M12.3258 15.1705V15.4705H12.6258V15.1705H12.3258ZM12.0258 11.3779V15.1705H12.6258V11.3779H12.0258ZM12.3258 14.8705H8.5332V15.4705H12.3258V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-112-inside-55_98_28446)"
                          />
                          <mask id="path-114-inside-56_98_28446" fill="white">
                            <path d="M12.3252 11.3779H16.1178V15.1705H12.3252V11.3779Z" />
                          </mask>
                          <path
                            d="M16.1178 15.1705V15.4705H16.4178V15.1705H16.1178ZM15.8178 11.3779V15.1705H16.4178V11.3779H15.8178ZM16.1178 14.8705H12.3252V15.4705H16.1178V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-114-inside-56_98_28446)"
                          />
                          <mask id="path-116-inside-57_98_28446" fill="white">
                            <path d="M16.118 11.3779H19.9106V15.1705H16.118V11.3779Z" />
                          </mask>
                          <path
                            d="M19.9106 15.1705V15.4705H20.2106V15.1705H19.9106ZM19.6106 11.3779V15.1705H20.2106V11.3779H19.6106ZM19.9106 14.8705H16.118V15.4705H19.9106V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-116-inside-57_98_28446)"
                          />
                          <mask id="path-118-inside-58_98_28446" fill="white">
                            <path d="M19.9111 11.3779H23.7037V15.1705H19.9111V11.3779Z" />
                          </mask>
                          <path
                            d="M23.7037 15.1705V15.4705H24.0037V15.1705H23.7037ZM23.4037 11.3779V15.1705H24.0037V11.3779H23.4037ZM23.7037 14.8705H19.9111V15.4705H23.7037V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-118-inside-58_98_28446)"
                          />
                          <mask id="path-120-inside-59_98_28446" fill="white">
                            <path d="M23.7032 11.3779H27.4958V15.1705H23.7032V11.3779Z" />
                          </mask>
                          <path
                            d="M27.4958 15.1705V15.4705H27.7958V15.1705H27.4958ZM27.1958 11.3779V15.1705H27.7958V11.3779H27.1958ZM27.4958 14.8705H23.7032V15.4705H27.4958V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-120-inside-59_98_28446)"
                          />
                          <mask id="path-122-inside-60_98_28446" fill="white">
                            <path d="M27.4961 11.3779H31.2887V15.1705H27.4961V11.3779Z" />
                          </mask>
                          <path
                            d="M31.2887 15.1705V15.4705H31.5887V15.1705H31.2887ZM30.9887 11.3779V15.1705H31.5887V11.3779H30.9887ZM31.2887 14.8705H27.4961V15.4705H31.2887V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-122-inside-60_98_28446)"
                          />
                          <mask id="path-124-inside-61_98_28446" fill="white">
                            <path d="M31.2881 11.3779H35.0807V15.1705H31.2881V11.3779Z" />
                          </mask>
                          <path
                            d="M35.0807 15.1705V15.4705H35.3807V15.1705H35.0807ZM34.7807 11.3779V15.1705H35.3807V11.3779H34.7807ZM35.0807 14.8705H31.2881V15.4705H35.0807V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-124-inside-61_98_28446)"
                          />
                          <mask id="path-126-inside-62_98_28446" fill="white">
                            <path d="M35.0811 11.3779H38.8736V15.1705H35.0811V11.3779Z" />
                          </mask>
                          <path
                            d="M38.8736 15.1705V15.4705H39.1736V15.1705H38.8736ZM38.5736 11.3779V15.1705H39.1736V11.3779H38.5736ZM38.8736 14.8705H35.0811V15.4705H38.8736V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-126-inside-62_98_28446)"
                          />
                          <mask id="path-128-inside-63_98_28446" fill="white">
                            <path d="M38.874 11.3779H42.6666V15.1705H38.874V11.3779Z" />
                          </mask>
                          <path
                            d="M42.6666 15.1705V15.4705H42.9666V15.1705H42.6666ZM42.3666 11.3779V15.1705H42.9666V11.3779H42.3666ZM42.6666 14.8705H38.874V15.4705H42.6666V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-128-inside-63_98_28446)"
                          />
                          <mask id="path-130-inside-64_98_28446" fill="white">
                            <path d="M42.6663 11.3779H46.4589V15.1705H42.6663V11.3779Z" />
                          </mask>
                          <path
                            d="M46.4589 15.1705V15.4705H46.7589V15.1705H46.4589ZM46.1589 11.3779V15.1705H46.7589V11.3779H46.1589ZM46.4589 14.8705H42.6663V15.4705H46.4589V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-130-inside-64_98_28446)"
                          />
                          <mask id="path-132-inside-65_98_28446" fill="white">
                            <path d="M46.4587 11.3779H50.2513V15.1705H46.4587V11.3779Z" />
                          </mask>
                          <path
                            d="M50.2513 15.1705V15.4705H50.5513V15.1705H50.2513ZM49.9513 11.3779V15.1705H50.5513V11.3779H49.9513ZM50.2513 14.8705H46.4587V15.4705H50.2513V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-132-inside-65_98_28446)"
                          />
                          <mask id="path-134-inside-66_98_28446" fill="white">
                            <path d="M50.251 11.3779H54.0436V15.1705H50.251V11.3779Z" />
                          </mask>
                          <path
                            d="M54.0436 15.1705V15.4705H54.3436V15.1705H54.0436ZM53.7436 11.3779V15.1705H54.3436V11.3779H53.7436ZM54.0436 14.8705H50.251V15.4705H54.0436V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-134-inside-66_98_28446)"
                          />
                          <mask id="path-136-inside-67_98_28446" fill="white">
                            <path d="M54.0439 11.3779H57.8365V15.1705H54.0439V11.3779Z" />
                          </mask>
                          <path
                            d="M57.8365 15.1705V15.4705H58.1365V15.1705H57.8365ZM57.5365 11.3779V15.1705H58.1365V11.3779H57.5365ZM57.8365 14.8705H54.0439V15.4705H57.8365V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-136-inside-67_98_28446)"
                          />
                          <mask id="path-138-inside-68_98_28446" fill="white">
                            <path d="M57.8369 11.3779H61.6295V15.1705H57.8369V11.3779Z" />
                          </mask>
                          <path
                            d="M61.6295 15.1705V15.4705H61.9295V15.1705H61.6295ZM61.3295 11.3779V15.1705H61.9295V11.3779H61.3295ZM61.6295 14.8705H57.8369V15.4705H61.6295V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-138-inside-68_98_28446)"
                          />
                          <mask id="path-140-inside-69_98_28446" fill="white">
                            <path d="M61.6289 11.3779H65.4215V15.1705H61.6289V11.3779Z" />
                          </mask>
                          <path
                            d="M61.6289 11.3779H65.4215V15.1705H61.6289V11.3779Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M65.4215 15.1705V15.4705H65.7215V15.1705H65.4215ZM65.1215 11.3779V15.1705H65.7215V11.3779H65.1215ZM65.4215 14.8705H61.6289V15.4705H65.4215V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-140-inside-69_98_28446)"
                          />
                          <mask id="path-142-inside-70_98_28446" fill="white">
                            <path d="M65.4219 11.3779H69.2145V15.1705H65.4219V11.3779Z" />
                          </mask>
                          <path
                            d="M69.2145 15.1705V15.4705H69.5145V15.1705H69.2145ZM68.9145 11.3779V15.1705H69.5145V11.3779H68.9145ZM69.2145 14.8705H65.4219V15.4705H69.2145V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-142-inside-70_98_28446)"
                          />
                          <mask id="path-144-inside-71_98_28446" fill="white">
                            <path d="M69.2148 11.3779H73.0074V15.1705H69.2148V11.3779Z" />
                          </mask>
                          <path
                            d="M73.0074 15.1705V15.4705H73.3074V15.1705H73.0074ZM72.7074 11.3779V15.1705H73.3074V11.3779H72.7074ZM73.0074 14.8705H69.2148V15.4705H73.0074V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-144-inside-71_98_28446)"
                          />
                          <mask id="path-146-inside-72_98_28446" fill="white">
                            <path d="M73.007 11.3779H76.7996V15.1705H73.007V11.3779Z" />
                          </mask>
                          <path
                            d="M76.7996 15.1705V15.4705H77.0996V15.1705H76.7996ZM76.4996 11.3779V15.1705H77.0996V11.3779H76.4996ZM76.7996 14.8705H73.007V15.4705H76.7996V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-146-inside-72_98_28446)"
                          />
                          <mask id="path-148-inside-73_98_28446" fill="white">
                            <path d="M8.5332 15.1699H12.3258V18.9625H8.5332V15.1699Z" />
                          </mask>
                          <path
                            d="M12.3258 18.9625V19.2625H12.6258V18.9625H12.3258ZM12.0258 15.1699V18.9625H12.6258V15.1699H12.0258ZM12.3258 18.6625H8.5332V19.2625H12.3258V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-148-inside-73_98_28446)"
                          />
                          <mask id="path-150-inside-74_98_28446" fill="white">
                            <path d="M12.3252 15.1699H16.1178V18.9625H12.3252V15.1699Z" />
                          </mask>
                          <path
                            d="M16.1178 18.9625V19.2625H16.4178V18.9625H16.1178ZM15.8178 15.1699V18.9625H16.4178V15.1699H15.8178ZM16.1178 18.6625H12.3252V19.2625H16.1178V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-150-inside-74_98_28446)"
                          />
                          <mask id="path-152-inside-75_98_28446" fill="white">
                            <path d="M16.118 15.1699H19.9106V18.9625H16.118V15.1699Z" />
                          </mask>
                          <path
                            d="M16.118 15.1699H19.9106V18.9625H16.118V15.1699Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M19.9106 18.9625V19.2625H20.2106V18.9625H19.9106ZM19.6106 15.1699V18.9625H20.2106V15.1699H19.6106ZM19.9106 18.6625H16.118V19.2625H19.9106V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-152-inside-75_98_28446)"
                          />
                          <mask id="path-154-inside-76_98_28446" fill="white">
                            <path d="M19.9111 15.1699H23.7037V18.9625H19.9111V15.1699Z" />
                          </mask>
                          <path
                            d="M23.7037 18.9625V19.2625H24.0037V18.9625H23.7037ZM23.4037 15.1699V18.9625H24.0037V15.1699H23.4037ZM23.7037 18.6625H19.9111V19.2625H23.7037V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-154-inside-76_98_28446)"
                          />
                          <mask id="path-156-inside-77_98_28446" fill="white">
                            <path d="M23.7032 15.1699H27.4958V18.9625H23.7032V15.1699Z" />
                          </mask>
                          <path
                            d="M27.4958 18.9625V19.2625H27.7958V18.9625H27.4958ZM27.1958 15.1699V18.9625H27.7958V15.1699H27.1958ZM27.4958 18.6625H23.7032V19.2625H27.4958V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-156-inside-77_98_28446)"
                          />
                          <mask id="path-158-inside-78_98_28446" fill="white">
                            <path d="M27.4961 15.1699H31.2887V18.9625H27.4961V15.1699Z" />
                          </mask>
                          <path
                            d="M31.2887 18.9625V19.2625H31.5887V18.9625H31.2887ZM30.9887 15.1699V18.9625H31.5887V15.1699H30.9887ZM31.2887 18.6625H27.4961V19.2625H31.2887V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-158-inside-78_98_28446)"
                          />
                          <mask id="path-160-inside-79_98_28446" fill="white">
                            <path d="M31.2881 15.1699H35.0807V18.9625H31.2881V15.1699Z" />
                          </mask>
                          <path
                            d="M35.0807 18.9625V19.2625H35.3807V18.9625H35.0807ZM34.7807 15.1699V18.9625H35.3807V15.1699H34.7807ZM35.0807 18.6625H31.2881V19.2625H35.0807V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-160-inside-79_98_28446)"
                          />
                          <mask id="path-162-inside-80_98_28446" fill="white">
                            <path d="M35.0811 15.1699H38.8736V18.9625H35.0811V15.1699Z" />
                          </mask>
                          <path
                            d="M35.0811 15.1699H38.8736V18.9625H35.0811V15.1699Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M38.8736 18.9625V19.2625H39.1736V18.9625H38.8736ZM38.5736 15.1699V18.9625H39.1736V15.1699H38.5736ZM38.8736 18.6625H35.0811V19.2625H38.8736V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-162-inside-80_98_28446)"
                          />
                          <mask id="path-164-inside-81_98_28446" fill="white">
                            <path d="M38.874 15.1699H42.6666V18.9625H38.874V15.1699Z" />
                          </mask>
                          <path
                            d="M42.6666 18.9625V19.2625H42.9666V18.9625H42.6666ZM42.3666 15.1699V18.9625H42.9666V15.1699H42.3666ZM42.6666 18.6625H38.874V19.2625H42.6666V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-164-inside-81_98_28446)"
                          />
                          <mask id="path-166-inside-82_98_28446" fill="white">
                            <path d="M42.6663 15.1699H46.4589V18.9625H42.6663V15.1699Z" />
                          </mask>
                          <path
                            d="M46.4589 18.9625V19.2625H46.7589V18.9625H46.4589ZM46.1589 15.1699V18.9625H46.7589V15.1699H46.1589ZM46.4589 18.6625H42.6663V19.2625H46.4589V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-166-inside-82_98_28446)"
                          />
                          <mask id="path-168-inside-83_98_28446" fill="white">
                            <path d="M46.4587 15.1699H50.2513V18.9625H46.4587V15.1699Z" />
                          </mask>
                          <path
                            d="M50.2513 18.9625V19.2625H50.5513V18.9625H50.2513ZM49.9513 15.1699V18.9625H50.5513V15.1699H49.9513ZM50.2513 18.6625H46.4587V19.2625H50.2513V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-168-inside-83_98_28446)"
                          />
                          <mask id="path-170-inside-84_98_28446" fill="white">
                            <path d="M50.251 15.1699H54.0436V18.9625H50.251V15.1699Z" />
                          </mask>
                          <path
                            d="M54.0436 18.9625V19.2625H54.3436V18.9625H54.0436ZM53.7436 15.1699V18.9625H54.3436V15.1699H53.7436ZM54.0436 18.6625H50.251V19.2625H54.0436V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-170-inside-84_98_28446)"
                          />
                          <mask id="path-172-inside-85_98_28446" fill="white">
                            <path d="M54.0439 15.1699H57.8365V18.9625H54.0439V15.1699Z" />
                          </mask>
                          <path
                            d="M57.8365 18.9625V19.2625H58.1365V18.9625H57.8365ZM57.5365 15.1699V18.9625H58.1365V15.1699H57.5365ZM57.8365 18.6625H54.0439V19.2625H57.8365V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-172-inside-85_98_28446)"
                          />
                          <mask id="path-174-inside-86_98_28446" fill="white">
                            <path d="M57.8369 15.1699H61.6295V18.9625H57.8369V15.1699Z" />
                          </mask>
                          <path
                            d="M61.6295 18.9625V19.2625H61.9295V18.9625H61.6295ZM61.3295 15.1699V18.9625H61.9295V15.1699H61.3295ZM61.6295 18.6625H57.8369V19.2625H61.6295V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-174-inside-86_98_28446)"
                          />
                          <mask id="path-176-inside-87_98_28446" fill="white">
                            <path d="M61.6289 15.1699H65.4215V18.9625H61.6289V15.1699Z" />
                          </mask>
                          <path
                            d="M65.4215 18.9625V19.2625H65.7215V18.9625H65.4215ZM65.1215 15.1699V18.9625H65.7215V15.1699H65.1215ZM65.4215 18.6625H61.6289V19.2625H65.4215V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-176-inside-87_98_28446)"
                          />
                          <mask id="path-178-inside-88_98_28446" fill="white">
                            <path d="M65.4219 15.1699H69.2145V18.9625H65.4219V15.1699Z" />
                          </mask>
                          <path
                            d="M69.2145 18.9625V19.2625H69.5145V18.9625H69.2145ZM68.9145 15.1699V18.9625H69.5145V15.1699H68.9145ZM69.2145 18.6625H65.4219V19.2625H69.2145V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-178-inside-88_98_28446)"
                          />
                          <mask id="path-180-inside-89_98_28446" fill="white">
                            <path d="M69.2148 15.1699H73.0074V18.9625H69.2148V15.1699Z" />
                          </mask>
                          <path
                            d="M73.0074 18.9625V19.2625H73.3074V18.9625H73.0074ZM72.7074 15.1699V18.9625H73.3074V15.1699H72.7074ZM73.0074 18.6625H69.2148V19.2625H73.0074V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-180-inside-89_98_28446)"
                          />
                          <mask id="path-182-inside-90_98_28446" fill="white">
                            <path d="M73.007 15.1699H76.7996V18.9625H73.007V15.1699Z" />
                          </mask>
                          <path
                            d="M76.7996 18.9625V19.2625H77.0996V18.9625H76.7996ZM76.4996 15.1699V18.9625H77.0996V15.1699H76.4996ZM76.7996 18.6625H73.007V19.2625H76.7996V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-182-inside-90_98_28446)"
                          />
                          <mask id="path-184-inside-91_98_28446" fill="white">
                            <path d="M8.5332 18.9629H12.3258V22.7555H8.5332V18.9629Z" />
                          </mask>
                          <path
                            d="M12.3258 22.7555V23.0555H12.6258V22.7555H12.3258ZM12.0258 18.9629V22.7555H12.6258V18.9629H12.0258ZM12.3258 22.4555H8.5332V23.0555H12.3258V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-184-inside-91_98_28446)"
                          />
                          <mask id="path-186-inside-92_98_28446" fill="white">
                            <path d="M12.3252 18.9629H16.1178V22.7555H12.3252V18.9629Z" />
                          </mask>
                          <path
                            d="M16.1178 22.7555V23.0555H16.4178V22.7555H16.1178ZM15.8178 18.9629V22.7555H16.4178V18.9629H15.8178ZM16.1178 22.4555H12.3252V23.0555H16.1178V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-186-inside-92_98_28446)"
                          />
                          <mask id="path-188-inside-93_98_28446" fill="white">
                            <path d="M16.118 18.963H19.9106V22.7556H16.118V18.963Z" />
                          </mask>
                          <path
                            d="M19.9106 22.7556V23.0556H20.2106V22.7556H19.9106ZM19.6106 18.963V22.7556H20.2106V18.963H19.6106ZM19.9106 22.4556H16.118V23.0556H19.9106V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-188-inside-93_98_28446)"
                          />
                          <mask id="path-190-inside-94_98_28446" fill="white">
                            <path d="M19.9111 18.9629H23.7037V22.7555H19.9111V18.9629Z" />
                          </mask>
                          <path
                            d="M23.7037 22.7555V23.0555H24.0037V22.7555H23.7037ZM23.4037 18.9629V22.7555H24.0037V18.9629H23.4037ZM23.7037 22.4555H19.9111V23.0555H23.7037V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-190-inside-94_98_28446)"
                          />
                          <mask id="path-192-inside-95_98_28446" fill="white">
                            <path d="M23.7032 18.963H27.4958V22.7556H23.7032V18.963Z" />
                          </mask>
                          <path
                            d="M27.4958 22.7556V23.0556H27.7958V22.7556H27.4958ZM27.1958 18.963V22.7556H27.7958V18.963H27.1958ZM27.4958 22.4556H23.7032V23.0556H27.4958V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-192-inside-95_98_28446)"
                          />
                          <mask id="path-194-inside-96_98_28446" fill="white">
                            <path d="M27.4958 18.963H31.2884V22.7556H27.4958V18.963Z" />
                          </mask>
                          <path
                            d="M27.4958 18.963H31.2884V22.7556H27.4958V18.963Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M31.2884 22.7556V23.0556H31.5884V22.7556H31.2884ZM30.9884 18.963V22.7556H31.5884V18.963H30.9884ZM31.2884 22.4556H27.4958V23.0556H31.2884V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-194-inside-96_98_28446)"
                          />
                          <mask id="path-196-inside-97_98_28446" fill="white">
                            <path d="M31.2881 18.9629H35.0807V22.7555H31.2881V18.9629Z" />
                          </mask>
                          <path
                            d="M35.0807 22.7555V23.0555H35.3807V22.7555H35.0807ZM34.7807 18.9629V22.7555H35.3807V18.9629H34.7807ZM35.0807 22.4555H31.2881V23.0555H35.0807V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-196-inside-97_98_28446)"
                          />
                          <mask id="path-198-inside-98_98_28446" fill="white">
                            <path d="M35.0811 18.963H38.8736V22.7556H35.0811V18.963Z" />
                          </mask>
                          <path
                            d="M38.8736 22.7556V23.0556H39.1736V22.7556H38.8736ZM38.5736 18.963V22.7556H39.1736V18.963H38.5736ZM38.8736 22.4556H35.0811V23.0556H38.8736V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-198-inside-98_98_28446)"
                          />
                          <mask id="path-200-inside-99_98_28446" fill="white">
                            <path d="M38.874 18.9629H42.6666V22.7555H38.874V18.9629Z" />
                          </mask>
                          <path
                            d="M42.6666 22.7555V23.0555H42.9666V22.7555H42.6666ZM42.3666 18.9629V22.7555H42.9666V18.9629H42.3666ZM42.6666 22.4555H38.874V23.0555H42.6666V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-200-inside-99_98_28446)"
                          />
                          <mask id="path-202-inside-100_98_28446" fill="white">
                            <path d="M42.6663 18.963H46.4589V22.7556H42.6663V18.963Z" />
                          </mask>
                          <path
                            d="M46.4589 22.7556V23.0556H46.7589V22.7556H46.4589ZM46.1589 18.963V22.7556H46.7589V18.963H46.1589ZM46.4589 22.4556H42.6663V23.0556H46.4589V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-202-inside-100_98_28446)"
                          />
                          <mask id="path-204-inside-101_98_28446" fill="white">
                            <path d="M46.4589 18.963H50.2515V22.7556H46.4589V18.963Z" />
                          </mask>
                          <path
                            d="M50.2515 22.7556V23.0556H50.5515V22.7556H50.2515ZM49.9515 18.963V22.7556H50.5515V18.963H49.9515ZM50.2515 22.4556H46.4589V23.0556H50.2515V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-204-inside-101_98_28446)"
                          />
                          <mask id="path-206-inside-102_98_28446" fill="white">
                            <path d="M50.251 18.9629H54.0436V22.7555H50.251V18.9629Z" />
                          </mask>
                          <path
                            d="M50.251 18.9629H54.0436V22.7555H50.251V18.9629Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M54.0436 22.7555V23.0555H54.3436V22.7555H54.0436ZM53.7436 18.9629V22.7555H54.3436V18.9629H53.7436ZM54.0436 22.4555H50.251V23.0555H54.0436V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-206-inside-102_98_28446)"
                          />
                          <mask id="path-208-inside-103_98_28446" fill="white">
                            <path d="M54.0441 18.963H57.8367V22.7556H54.0441V18.963Z" />
                          </mask>
                          <path
                            d="M57.8367 22.7556V23.0556H58.1367V22.7556H57.8367ZM57.5367 18.963V22.7556H58.1367V18.963H57.5367ZM57.8367 22.4556H54.0441V23.0556H57.8367V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-208-inside-103_98_28446)"
                          />
                          <mask id="path-210-inside-104_98_28446" fill="white">
                            <path d="M57.8369 18.9629H61.6295V22.7555H57.8369V18.9629Z" />
                          </mask>
                          <path
                            d="M61.6295 22.7555V23.0555H61.9295V22.7555H61.6295ZM61.3295 18.9629V22.7555H61.9295V18.9629H61.3295ZM61.6295 22.4555H57.8369V23.0555H61.6295V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-210-inside-104_98_28446)"
                          />
                          <mask id="path-212-inside-105_98_28446" fill="white">
                            <path d="M61.6289 18.9629H65.4215V22.7555H61.6289V18.9629Z" />
                          </mask>
                          <path
                            d="M61.6289 18.9629H65.4215V22.7555H61.6289V18.9629Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M65.4215 22.7555V23.0555H65.7215V22.7555H65.4215ZM65.1215 18.9629V22.7555H65.7215V18.9629H65.1215ZM65.4215 22.4555H61.6289V23.0555H65.4215V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-212-inside-105_98_28446)"
                          />
                          <mask id="path-214-inside-106_98_28446" fill="white">
                            <path d="M65.4218 18.963H69.2143V22.7556H65.4218V18.963Z" />
                          </mask>
                          <path
                            d="M69.2143 22.7556V23.0556H69.5143V22.7556H69.2143ZM68.9143 18.963V22.7556H69.5143V18.963H68.9143ZM69.2143 22.4556H65.4218V23.0556H69.2143V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-214-inside-106_98_28446)"
                          />
                          <mask id="path-216-inside-107_98_28446" fill="white">
                            <path d="M69.2148 18.9629H73.0074V22.7555H69.2148V18.9629Z" />
                          </mask>
                          <path
                            d="M73.0074 22.7555V23.0555H73.3074V22.7555H73.0074ZM72.7074 18.9629V22.7555H73.3074V18.9629H72.7074ZM73.0074 22.4555H69.2148V23.0555H73.0074V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-216-inside-107_98_28446)"
                          />
                          <mask id="path-218-inside-108_98_28446" fill="white">
                            <path d="M73.007 18.963H76.7996V22.7556H73.007V18.963Z" />
                          </mask>
                          <path
                            d="M76.7996 22.7556V23.0556H77.0996V22.7556H76.7996ZM76.4996 18.963V22.7556H77.0996V18.963H76.4996ZM76.7996 22.4556H73.007V23.0556H76.7996V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-218-inside-108_98_28446)"
                          />
                          <mask id="path-220-inside-109_98_28446" fill="white">
                            <path d="M8.5332 22.7559H12.3258V26.5485H8.5332V22.7559Z" />
                          </mask>
                          <path
                            d="M12.3258 26.5485V26.8485H12.6258V26.5485H12.3258ZM12.0258 22.7559V26.5485H12.6258V22.7559H12.0258ZM12.3258 26.2485H8.5332V26.8485H12.3258V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-220-inside-109_98_28446)"
                          />
                          <mask id="path-222-inside-110_98_28446" fill="white">
                            <path d="M12.3252 22.7559H16.1178V26.5485H12.3252V22.7559Z" />
                          </mask>
                          <path
                            d="M12.3252 22.7559H16.1178V26.5485H12.3252V22.7559Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M16.1178 26.5485V26.8485H16.4178V26.5485H16.1178ZM15.8178 22.7559V26.5485H16.4178V22.7559H15.8178ZM16.1178 26.2485H12.3252V26.8485H16.1178V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-222-inside-110_98_28446)"
                          />
                          <mask id="path-224-inside-111_98_28446" fill="white">
                            <path d="M16.118 22.7559H19.9106V26.5485H16.118V22.7559Z" />
                          </mask>
                          <path
                            d="M19.9106 26.5485V26.8485H20.2106V26.5485H19.9106ZM19.6106 22.7559V26.5485H20.2106V22.7559H19.6106ZM19.9106 26.2485H16.118V26.8485H19.9106V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-224-inside-111_98_28446)"
                          />
                          <mask id="path-226-inside-112_98_28446" fill="white">
                            <path d="M19.9111 22.7559H23.7037V26.5485H19.9111V22.7559Z" />
                          </mask>
                          <path
                            d="M23.7037 26.5485V26.8485H24.0037V26.5485H23.7037ZM23.4037 22.7559V26.5485H24.0037V22.7559H23.4037ZM23.7037 26.2485H19.9111V26.8485H23.7037V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-226-inside-112_98_28446)"
                          />
                          <mask id="path-228-inside-113_98_28446" fill="white">
                            <path d="M23.7032 22.7559H27.4958V26.5485H23.7032V22.7559Z" />
                          </mask>
                          <path
                            d="M27.4958 26.5485V26.8485H27.7958V26.5485H27.4958ZM27.1958 22.7559V26.5485H27.7958V22.7559H27.1958ZM27.4958 26.2485H23.7032V26.8485H27.4958V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-228-inside-113_98_28446)"
                          />
                          <mask id="path-230-inside-114_98_28446" fill="white">
                            <path d="M27.4961 22.7559H31.2887V26.5485H27.4961V22.7559Z" />
                          </mask>
                          <path
                            d="M31.2887 26.5485V26.8485H31.5887V26.5485H31.2887ZM30.9887 22.7559V26.5485H31.5887V22.7559H30.9887ZM31.2887 26.2485H27.4961V26.8485H31.2887V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-230-inside-114_98_28446)"
                          />
                          <mask id="path-232-inside-115_98_28446" fill="white">
                            <path d="M31.2881 22.7559H35.0807V26.5485H31.2881V22.7559Z" />
                          </mask>
                          <path
                            d="M35.0807 26.5485V26.8485H35.3807V26.5485H35.0807ZM34.7807 22.7559V26.5485H35.3807V22.7559H34.7807ZM35.0807 26.2485H31.2881V26.8485H35.0807V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-232-inside-115_98_28446)"
                          />
                          <mask id="path-234-inside-116_98_28446" fill="white">
                            <path d="M35.0811 22.7559H38.8736V26.5485H35.0811V22.7559Z" />
                          </mask>
                          <path
                            d="M38.8736 26.5485V26.8485H39.1736V26.5485H38.8736ZM38.5736 22.7559V26.5485H39.1736V22.7559H38.5736ZM38.8736 26.2485H35.0811V26.8485H38.8736V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-234-inside-116_98_28446)"
                          />
                          <mask id="path-236-inside-117_98_28446" fill="white">
                            <path d="M38.874 22.7559H42.6666V26.5485H38.874V22.7559Z" />
                          </mask>
                          <path
                            d="M38.874 22.7559H42.6666V26.5485H38.874V22.7559Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M42.6666 26.5485V26.8485H42.9666V26.5485H42.6666ZM42.3666 22.7559V26.5485H42.9666V22.7559H42.3666ZM42.6666 26.2485H38.874V26.8485H42.6666V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-236-inside-117_98_28446)"
                          />
                          <mask id="path-238-inside-118_98_28446" fill="white">
                            <path d="M42.6663 22.7559H46.4589V26.5485H42.6663V22.7559Z" />
                          </mask>
                          <path
                            d="M46.4589 26.5485V26.8485H46.7589V26.5485H46.4589ZM46.1589 22.7559V26.5485H46.7589V22.7559H46.1589ZM46.4589 26.2485H42.6663V26.8485H46.4589V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-238-inside-118_98_28446)"
                          />
                          <mask id="path-240-inside-119_98_28446" fill="white">
                            <path d="M46.4587 22.7559H50.2513V26.5485H46.4587V22.7559Z" />
                          </mask>
                          <path
                            d="M50.2513 26.5485V26.8485H50.5513V26.5485H50.2513ZM49.9513 22.7559V26.5485H50.5513V22.7559H49.9513ZM50.2513 26.2485H46.4587V26.8485H50.2513V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-240-inside-119_98_28446)"
                          />
                          <mask id="path-242-inside-120_98_28446" fill="white">
                            <path d="M50.251 22.7559H54.0436V26.5485H50.251V22.7559Z" />
                          </mask>
                          <path
                            d="M54.0436 26.5485V26.8485H54.3436V26.5485H54.0436ZM53.7436 22.7559V26.5485H54.3436V22.7559H53.7436ZM54.0436 26.2485H50.251V26.8485H54.0436V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-242-inside-120_98_28446)"
                          />
                          <mask id="path-244-inside-121_98_28446" fill="white">
                            <path d="M54.0439 22.7559H57.8365V26.5485H54.0439V22.7559Z" />
                          </mask>
                          <path
                            d="M57.8365 26.5485V26.8485H58.1365V26.5485H57.8365ZM57.5365 22.7559V26.5485H58.1365V22.7559H57.5365ZM57.8365 26.2485H54.0439V26.8485H57.8365V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-244-inside-121_98_28446)"
                          />
                          <mask id="path-246-inside-122_98_28446" fill="white">
                            <path d="M57.8369 22.7559H61.6295V26.5485H57.8369V22.7559Z" />
                          </mask>
                          <path
                            d="M61.6295 26.5485V26.8485H61.9295V26.5485H61.6295ZM61.3295 22.7559V26.5485H61.9295V22.7559H61.3295ZM61.6295 26.2485H57.8369V26.8485H61.6295V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-246-inside-122_98_28446)"
                          />
                          <mask id="path-248-inside-123_98_28446" fill="white">
                            <path d="M61.6289 22.7559H65.4215V26.5485H61.6289V22.7559Z" />
                          </mask>
                          <path
                            d="M65.4215 26.5485V26.8485H65.7215V26.5485H65.4215ZM65.1215 22.7559V26.5485H65.7215V22.7559H65.1215ZM65.4215 26.2485H61.6289V26.8485H65.4215V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-248-inside-123_98_28446)"
                          />
                          <mask id="path-250-inside-124_98_28446" fill="white">
                            <path d="M65.4219 22.7559H69.2145V26.5485H65.4219V22.7559Z" />
                          </mask>
                          <path
                            d="M69.2145 26.5485V26.8485H69.5145V26.5485H69.2145ZM68.9145 22.7559V26.5485H69.5145V22.7559H68.9145ZM69.2145 26.2485H65.4219V26.8485H69.2145V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-250-inside-124_98_28446)"
                          />
                          <mask id="path-252-inside-125_98_28446" fill="white">
                            <path d="M69.2148 22.7559H73.0074V26.5485H69.2148V22.7559Z" />
                          </mask>
                          <path
                            d="M73.0074 26.5485V26.8485H73.3074V26.5485H73.0074ZM72.7074 22.7559V26.5485H73.3074V22.7559H72.7074ZM73.0074 26.2485H69.2148V26.8485H73.0074V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-252-inside-125_98_28446)"
                          />
                          <mask id="path-254-inside-126_98_28446" fill="white">
                            <path d="M73.007 22.7559H76.7996V26.5485H73.007V22.7559Z" />
                          </mask>
                          <path
                            d="M73.007 22.7559H76.7996V26.5485H73.007V22.7559Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M76.7996 26.5485V26.8485H77.0996V26.5485H76.7996ZM76.4996 22.7559V26.5485H77.0996V22.7559H76.4996ZM76.7996 26.2485H73.007V26.8485H76.7996V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-254-inside-126_98_28446)"
                          />
                          <mask id="path-256-inside-127_98_28446" fill="white">
                            <path d="M8.5332 26.5479H12.3258V30.3404H8.5332V26.5479Z" />
                          </mask>
                          <path
                            d="M12.3258 30.3404V30.6404H12.6258V30.3404H12.3258ZM12.0258 26.5479V30.3404H12.6258V26.5479H12.0258ZM12.3258 30.0404H8.5332V30.6404H12.3258V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-256-inside-127_98_28446)"
                          />
                          <mask id="path-258-inside-128_98_28446" fill="white">
                            <path d="M12.3252 26.5479H16.1178V30.3404H12.3252V26.5479Z" />
                          </mask>
                          <path
                            d="M16.1178 30.3404V30.6404H16.4178V30.3404H16.1178ZM15.8178 26.5479V30.3404H16.4178V26.5479H15.8178ZM16.1178 30.0404H12.3252V30.6404H16.1178V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-258-inside-128_98_28446)"
                          />
                          <mask id="path-260-inside-129_98_28446" fill="white">
                            <path d="M16.118 26.5479H19.9106V30.3404H16.118V26.5479Z" />
                          </mask>
                          <path
                            d="M19.9106 30.3404V30.6404H20.2106V30.3404H19.9106ZM19.6106 26.5479V30.3404H20.2106V26.5479H19.6106ZM19.9106 30.0404H16.118V30.6404H19.9106V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-260-inside-129_98_28446)"
                          />
                          <mask id="path-262-inside-130_98_28446" fill="white">
                            <path d="M19.9111 26.5479H23.7037V30.3404H19.9111V26.5479Z" />
                          </mask>
                          <path
                            d="M23.7037 30.3404V30.6404H24.0037V30.3404H23.7037ZM23.4037 26.5479V30.3404H24.0037V26.5479H23.4037ZM23.7037 30.0404H19.9111V30.6404H23.7037V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-262-inside-130_98_28446)"
                          />
                          <mask id="path-264-inside-131_98_28446" fill="white">
                            <path d="M23.7032 26.5479H27.4958V30.3404H23.7032V26.5479Z" />
                          </mask>
                          <path
                            d="M27.4958 30.3404V30.6404H27.7958V30.3404H27.4958ZM27.1958 26.5479V30.3404H27.7958V26.5479H27.1958ZM27.4958 30.0404H23.7032V30.6404H27.4958V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-264-inside-131_98_28446)"
                          />
                          <mask id="path-266-inside-132_98_28446" fill="white">
                            <path d="M27.4961 26.5479H31.2887V30.3404H27.4961V26.5479Z" />
                          </mask>
                          <path
                            d="M31.2887 30.3404V30.6404H31.5887V30.3404H31.2887ZM30.9887 26.5479V30.3404H31.5887V26.5479H30.9887ZM31.2887 30.0404H27.4961V30.6404H31.2887V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-266-inside-132_98_28446)"
                          />
                          <mask id="path-268-inside-133_98_28446" fill="white">
                            <path d="M31.2881 26.5479H35.0807V30.3404H31.2881V26.5479Z" />
                          </mask>
                          <path
                            d="M31.2881 26.5479H35.0807V30.3404H31.2881V26.5479Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M35.0807 30.3404V30.6404H35.3807V30.3404H35.0807ZM34.7807 26.5479V30.3404H35.3807V26.5479H34.7807ZM35.0807 30.0404H31.2881V30.6404H35.0807V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-268-inside-133_98_28446)"
                          />
                          <mask id="path-270-inside-134_98_28446" fill="white">
                            <path d="M35.0811 26.5479H38.8736V30.3404H35.0811V26.5479Z" />
                          </mask>
                          <path
                            d="M38.8736 30.3404V30.6404H39.1736V30.3404H38.8736ZM38.5736 26.5479V30.3404H39.1736V26.5479H38.5736ZM38.8736 30.0404H35.0811V30.6404H38.8736V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-270-inside-134_98_28446)"
                          />
                          <mask id="path-272-inside-135_98_28446" fill="white">
                            <path d="M38.874 26.5479H42.6666V30.3404H38.874V26.5479Z" />
                          </mask>
                          <path
                            d="M42.6666 30.3404V30.6404H42.9666V30.3404H42.6666ZM42.3666 26.5479V30.3404H42.9666V26.5479H42.3666ZM42.6666 30.0404H38.874V30.6404H42.6666V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-272-inside-135_98_28446)"
                          />
                          <mask id="path-274-inside-136_98_28446" fill="white">
                            <path d="M42.6663 26.5479H46.4589V30.3404H42.6663V26.5479Z" />
                          </mask>
                          <path
                            d="M46.4589 30.3404V30.6404H46.7589V30.3404H46.4589ZM46.1589 26.5479V30.3404H46.7589V26.5479H46.1589ZM46.4589 30.0404H42.6663V30.6404H46.4589V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-274-inside-136_98_28446)"
                          />
                          <mask id="path-276-inside-137_98_28446" fill="white">
                            <path d="M46.4587 26.5479H50.2513V30.3404H46.4587V26.5479Z" />
                          </mask>
                          <path
                            d="M50.2513 30.3404V30.6404H50.5513V30.3404H50.2513ZM49.9513 26.5479V30.3404H50.5513V26.5479H49.9513ZM50.2513 30.0404H46.4587V30.6404H50.2513V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-276-inside-137_98_28446)"
                          />
                          <mask id="path-278-inside-138_98_28446" fill="white">
                            <path d="M50.251 26.5479H54.0436V30.3404H50.251V26.5479Z" />
                          </mask>
                          <path
                            d="M54.0436 30.3404V30.6404H54.3436V30.3404H54.0436ZM53.7436 26.5479V30.3404H54.3436V26.5479H53.7436ZM54.0436 30.0404H50.251V30.6404H54.0436V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-278-inside-138_98_28446)"
                          />
                          <mask id="path-280-inside-139_98_28446" fill="white">
                            <path d="M54.0439 26.5479H57.8365V30.3404H54.0439V26.5479Z" />
                          </mask>
                          <path
                            d="M54.0439 26.5479H57.8365V30.3404H54.0439V26.5479Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M57.8365 30.3404V30.6404H58.1365V30.3404H57.8365ZM57.5365 26.5479V30.3404H58.1365V26.5479H57.5365ZM57.8365 30.0404H54.0439V30.6404H57.8365V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-280-inside-139_98_28446)"
                          />
                          <mask id="path-282-inside-140_98_28446" fill="white">
                            <path d="M57.8369 26.5479H61.6295V30.3404H57.8369V26.5479Z" />
                          </mask>
                          <path
                            d="M61.6295 30.3404V30.6404H61.9295V30.3404H61.6295ZM61.3295 26.5479V30.3404H61.9295V26.5479H61.3295ZM61.6295 30.0404H57.8369V30.6404H61.6295V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-282-inside-140_98_28446)"
                          />
                          <mask id="path-284-inside-141_98_28446" fill="white">
                            <path d="M61.6289 26.5479H65.4215V30.3404H61.6289V26.5479Z" />
                          </mask>
                          <path
                            d="M65.4215 30.3404V30.6404H65.7215V30.3404H65.4215ZM65.1215 26.5479V30.3404H65.7215V26.5479H65.1215ZM65.4215 30.0404H61.6289V30.6404H65.4215V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-284-inside-141_98_28446)"
                          />
                          <mask id="path-286-inside-142_98_28446" fill="white">
                            <path d="M65.4219 26.5479H69.2145V30.3404H65.4219V26.5479Z" />
                          </mask>
                          <path
                            d="M69.2145 30.3404V30.6404H69.5145V30.3404H69.2145ZM68.9145 26.5479V30.3404H69.5145V26.5479H68.9145ZM69.2145 30.0404H65.4219V30.6404H69.2145V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-286-inside-142_98_28446)"
                          />
                          <mask id="path-288-inside-143_98_28446" fill="white">
                            <path d="M69.2148 26.5479H73.0074V30.3404H69.2148V26.5479Z" />
                          </mask>
                          <path
                            d="M73.0074 30.3404V30.6404H73.3074V30.3404H73.0074ZM72.7074 26.5479V30.3404H73.3074V26.5479H72.7074ZM73.0074 30.0404H69.2148V30.6404H73.0074V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-288-inside-143_98_28446)"
                          />
                          <mask id="path-290-inside-144_98_28446" fill="white">
                            <path d="M73.007 26.5479H76.7996V30.3404H73.007V26.5479Z" />
                          </mask>
                          <path
                            d="M76.7996 30.3404V30.6404H77.0996V30.3404H76.7996ZM76.4996 26.5479V30.3404H77.0996V26.5479H76.4996ZM76.7996 30.0404H73.007V30.6404H76.7996V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-290-inside-144_98_28446)"
                          />
                          <mask id="path-292-inside-145_98_28446" fill="white">
                            <path d="M8.5332 30.3408H12.3258V34.1334H8.5332V30.3408Z" />
                          </mask>
                          <path
                            d="M12.3258 34.1334V34.4334H12.6258V34.1334H12.3258ZM12.0258 30.3408V34.1334H12.6258V30.3408H12.0258ZM12.3258 33.8334H8.5332V34.4334H12.3258V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-292-inside-145_98_28446)"
                          />
                          <mask id="path-294-inside-146_98_28446" fill="white">
                            <path d="M12.3252 30.3408H16.1178V34.1334H12.3252V30.3408Z" />
                          </mask>
                          <path
                            d="M16.1178 34.1334V34.4334H16.4178V34.1334H16.1178ZM15.8178 30.3408V34.1334H16.4178V30.3408H15.8178ZM16.1178 33.8334H12.3252V34.4334H16.1178V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-294-inside-146_98_28446)"
                          />
                          <mask id="path-296-inside-147_98_28446" fill="white">
                            <path d="M16.118 30.3407H19.9106V34.1333H16.118V30.3407Z" />
                          </mask>
                          <path
                            d="M19.9106 34.1333V34.4333H20.2106V34.1333H19.9106ZM19.6106 30.3407V34.1333H20.2106V30.3407H19.6106ZM19.9106 33.8333H16.118V34.4333H19.9106V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-296-inside-147_98_28446)"
                          />
                          <mask id="path-298-inside-148_98_28446" fill="white">
                            <path d="M19.9111 30.3408H23.7037V34.1334H19.9111V30.3408Z" />
                          </mask>
                          <path
                            d="M23.7037 34.1334V34.4334H24.0037V34.1334H23.7037ZM23.4037 30.3408V34.1334H24.0037V30.3408H23.4037ZM23.7037 33.8334H19.9111V34.4334H23.7037V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-298-inside-148_98_28446)"
                          />
                          <mask id="path-300-inside-149_98_28446" fill="white">
                            <path d="M23.7032 30.3407H27.4958V34.1333H23.7032V30.3407Z" />
                          </mask>
                          <path
                            d="M23.7032 30.3407H27.4958V34.1333H23.7032V30.3407Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M27.4958 34.1333V34.4333H27.7958V34.1333H27.4958ZM27.1958 30.3407V34.1333H27.7958V30.3407H27.1958ZM27.4958 33.8333H23.7032V34.4333H27.4958V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-300-inside-149_98_28446)"
                          />
                          <mask id="path-302-inside-150_98_28446" fill="white">
                            <path d="M27.4958 30.3407H31.2884V34.1333H27.4958V30.3407Z" />
                          </mask>
                          <path
                            d="M31.2884 34.1333V34.4333H31.5884V34.1333H31.2884ZM30.9884 30.3407V34.1333H31.5884V30.3407H30.9884ZM31.2884 33.8333H27.4958V34.4333H31.2884V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-302-inside-150_98_28446)"
                          />
                          <mask id="path-304-inside-151_98_28446" fill="white">
                            <path d="M31.2881 30.3408H35.0807V34.1334H31.2881V30.3408Z" />
                          </mask>
                          <path
                            d="M35.0807 34.1334V34.4334H35.3807V34.1334H35.0807ZM34.7807 30.3408V34.1334H35.3807V30.3408H34.7807ZM35.0807 33.8334H31.2881V34.4334H35.0807V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-304-inside-151_98_28446)"
                          />
                          <mask id="path-306-inside-152_98_28446" fill="white">
                            <path d="M35.0811 30.3407H38.8736V34.1333H35.0811V30.3407Z" />
                          </mask>
                          <path
                            d="M38.8736 34.1333V34.4333H39.1736V34.1333H38.8736ZM38.5736 30.3407V34.1333H39.1736V30.3407H38.5736ZM38.8736 33.8333H35.0811V34.4333H38.8736V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-306-inside-152_98_28446)"
                          />
                          <mask id="path-308-inside-153_98_28446" fill="white">
                            <path d="M38.874 30.3408H42.6666V34.1334H38.874V30.3408Z" />
                          </mask>
                          <path
                            d="M42.6666 34.1334V34.4334H42.9666V34.1334H42.6666ZM42.3666 30.3408V34.1334H42.9666V30.3408H42.3666ZM42.6666 33.8334H38.874V34.4334H42.6666V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-308-inside-153_98_28446)"
                          />
                          <mask id="path-310-inside-154_98_28446" fill="white">
                            <path d="M42.6663 30.3407H46.4589V34.1333H42.6663V30.3407Z" />
                          </mask>
                          <path
                            d="M46.4589 34.1333V34.4333H46.7589V34.1333H46.4589ZM46.1589 30.3407V34.1333H46.7589V30.3407H46.1589ZM46.4589 33.8333H42.6663V34.4333H46.4589V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-310-inside-154_98_28446)"
                          />
                          <mask id="path-312-inside-155_98_28446" fill="white">
                            <path d="M46.4589 30.3407H50.2515V34.1333H46.4589V30.3407Z" />
                          </mask>
                          <path
                            d="M50.2515 34.1333V34.4333H50.5515V34.1333H50.2515ZM49.9515 30.3407V34.1333H50.5515V30.3407H49.9515ZM50.2515 33.8333H46.4589V34.4333H50.2515V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-312-inside-155_98_28446)"
                          />
                          <mask id="path-314-inside-156_98_28446" fill="white">
                            <path d="M50.251 30.3408H54.0436V34.1334H50.251V30.3408Z" />
                          </mask>
                          <path
                            d="M54.0436 34.1334V34.4334H54.3436V34.1334H54.0436ZM53.7436 30.3408V34.1334H54.3436V30.3408H53.7436ZM54.0436 33.8334H50.251V34.4334H54.0436V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-314-inside-156_98_28446)"
                          />
                          <mask id="path-316-inside-157_98_28446" fill="white">
                            <path d="M54.0441 30.3407H57.8367V34.1333H54.0441V30.3407Z" />
                          </mask>
                          <path
                            d="M57.8367 34.1333V34.4333H58.1367V34.1333H57.8367ZM57.5367 30.3407V34.1333H58.1367V30.3407H57.5367ZM57.8367 33.8333H54.0441V34.4333H57.8367V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-316-inside-157_98_28446)"
                          />
                          <mask id="path-318-inside-158_98_28446" fill="white">
                            <path d="M57.8369 30.3408H61.6295V34.1334H57.8369V30.3408Z" />
                          </mask>
                          <path
                            d="M61.6295 34.1334V34.4334H61.9295V34.1334H61.6295ZM61.3295 30.3408V34.1334H61.9295V30.3408H61.3295ZM61.6295 33.8334H57.8369V34.4334H61.6295V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-318-inside-158_98_28446)"
                          />
                          <mask id="path-320-inside-159_98_28446" fill="white">
                            <path d="M61.6289 30.3408H65.4215V34.1334H61.6289V30.3408Z" />
                          </mask>
                          <path
                            d="M65.4215 34.1334V34.4334H65.7215V34.1334H65.4215ZM65.1215 30.3408V34.1334H65.7215V30.3408H65.1215ZM65.4215 33.8334H61.6289V34.4334H65.4215V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-320-inside-159_98_28446)"
                          />
                          <mask id="path-322-inside-160_98_28446" fill="white">
                            <path d="M65.4218 30.3407H69.2143V34.1333H65.4218V30.3407Z" />
                          </mask>
                          <path
                            d="M65.4218 30.3407H69.2143V34.1333H65.4218V30.3407Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M69.2143 34.1333V34.4333H69.5143V34.1333H69.2143ZM68.9143 30.3407V34.1333H69.5143V30.3407H68.9143ZM69.2143 33.8333H65.4218V34.4333H69.2143V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-322-inside-160_98_28446)"
                          />
                          <mask id="path-324-inside-161_98_28446" fill="white">
                            <path d="M69.2148 30.3408H73.0074V34.1334H69.2148V30.3408Z" />
                          </mask>
                          <path
                            d="M73.0074 34.1334V34.4334H73.3074V34.1334H73.0074ZM72.7074 30.3408V34.1334H73.3074V30.3408H72.7074ZM73.0074 33.8334H69.2148V34.4334H73.0074V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-324-inside-161_98_28446)"
                          />
                          <mask id="path-326-inside-162_98_28446" fill="white">
                            <path d="M73.007 30.3407H76.7996V34.1333H73.007V30.3407Z" />
                          </mask>
                          <path
                            d="M76.7996 34.1333V34.4333H77.0996V34.1333H76.7996ZM76.4996 30.3407V34.1333H77.0996V30.3407H76.4996ZM76.7996 33.8333H73.007V34.4333H76.7996V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-326-inside-162_98_28446)"
                          />
                          <mask id="path-328-inside-163_98_28446" fill="white">
                            <path d="M8.5332 34.1338H12.3258V37.9264H8.5332V34.1338Z" />
                          </mask>
                          <path
                            d="M12.3258 37.9264V38.2264H12.6258V37.9264H12.3258ZM12.0258 34.1338V37.9264H12.6258V34.1338H12.0258ZM12.3258 37.6264H8.5332V38.2264H12.3258V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-328-inside-163_98_28446)"
                          />
                          <mask id="path-330-inside-164_98_28446" fill="white">
                            <path d="M12.3252 34.1338H16.1178V37.9264H12.3252V34.1338Z" />
                          </mask>
                          <path
                            d="M12.3252 34.1338H16.1178V37.9264H12.3252V34.1338Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M16.1178 37.9264V38.2264H16.4178V37.9264H16.1178ZM15.8178 34.1338V37.9264H16.4178V34.1338H15.8178ZM16.1178 37.6264H12.3252V38.2264H16.1178V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-330-inside-164_98_28446)"
                          />
                          <mask id="path-332-inside-165_98_28446" fill="white">
                            <path d="M16.118 34.1338H19.9106V37.9264H16.118V34.1338Z" />
                          </mask>
                          <path
                            d="M19.9106 37.9264V38.2264H20.2106V37.9264H19.9106ZM19.6106 34.1338V37.9264H20.2106V34.1338H19.6106ZM19.9106 37.6264H16.118V38.2264H19.9106V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-332-inside-165_98_28446)"
                          />
                          <mask id="path-334-inside-166_98_28446" fill="white">
                            <path d="M19.9111 34.1338H23.7037V37.9264H19.9111V34.1338Z" />
                          </mask>
                          <path
                            d="M23.7037 37.9264V38.2264H24.0037V37.9264H23.7037ZM23.4037 34.1338V37.9264H24.0037V34.1338H23.4037ZM23.7037 37.6264H19.9111V38.2264H23.7037V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-334-inside-166_98_28446)"
                          />
                          <mask id="path-336-inside-167_98_28446" fill="white">
                            <path d="M23.7032 34.1338H27.4958V37.9264H23.7032V34.1338Z" />
                          </mask>
                          <path
                            d="M27.4958 37.9264V38.2264H27.7958V37.9264H27.4958ZM27.1958 34.1338V37.9264H27.7958V34.1338H27.1958ZM27.4958 37.6264H23.7032V38.2264H27.4958V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-336-inside-167_98_28446)"
                          />
                          <mask id="path-338-inside-168_98_28446" fill="white">
                            <path d="M27.4961 34.1338H31.2887V37.9264H27.4961V34.1338Z" />
                          </mask>
                          <path
                            d="M31.2887 37.9264V38.2264H31.5887V37.9264H31.2887ZM30.9887 34.1338V37.9264H31.5887V34.1338H30.9887ZM31.2887 37.6264H27.4961V38.2264H31.2887V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-338-inside-168_98_28446)"
                          />
                          <mask id="path-340-inside-169_98_28446" fill="white">
                            <path d="M31.2881 34.1338H35.0807V37.9264H31.2881V34.1338Z" />
                          </mask>
                          <path
                            d="M35.0807 37.9264V38.2264H35.3807V37.9264H35.0807ZM34.7807 34.1338V37.9264H35.3807V34.1338H34.7807ZM35.0807 37.6264H31.2881V38.2264H35.0807V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-340-inside-169_98_28446)"
                          />
                          <mask id="path-342-inside-170_98_28446" fill="white">
                            <path d="M35.0811 34.1338H38.8736V37.9264H35.0811V34.1338Z" />
                          </mask>
                          <path
                            d="M38.8736 37.9264V38.2264H39.1736V37.9264H38.8736ZM38.5736 34.1338V37.9264H39.1736V34.1338H38.5736ZM38.8736 37.6264H35.0811V38.2264H38.8736V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-342-inside-170_98_28446)"
                          />
                          <mask id="path-344-inside-171_98_28446" fill="white">
                            <path d="M38.874 34.1338H42.6666V37.9264H38.874V34.1338Z" />
                          </mask>
                          <path
                            d="M38.874 34.1338H42.6666V37.9264H38.874V34.1338Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M42.6666 37.9264V38.2264H42.9666V37.9264H42.6666ZM42.3666 34.1338V37.9264H42.9666V34.1338H42.3666ZM42.6666 37.6264H38.874V38.2264H42.6666V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-344-inside-171_98_28446)"
                          />
                          <mask id="path-346-inside-172_98_28446" fill="white">
                            <path d="M42.6663 34.1338H46.4589V37.9264H42.6663V34.1338Z" />
                          </mask>
                          <path
                            d="M46.4589 37.9264V38.2264H46.7589V37.9264H46.4589ZM46.1589 34.1338V37.9264H46.7589V34.1338H46.1589ZM46.4589 37.6264H42.6663V38.2264H46.4589V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-346-inside-172_98_28446)"
                          />
                          <mask id="path-348-inside-173_98_28446" fill="white">
                            <path d="M46.4587 34.1338H50.2513V37.9264H46.4587V34.1338Z" />
                          </mask>
                          <path
                            d="M50.2513 37.9264V38.2264H50.5513V37.9264H50.2513ZM49.9513 34.1338V37.9264H50.5513V34.1338H49.9513ZM50.2513 37.6264H46.4587V38.2264H50.2513V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-348-inside-173_98_28446)"
                          />
                          <mask id="path-350-inside-174_98_28446" fill="white">
                            <path d="M50.251 34.1338H54.0436V37.9264H50.251V34.1338Z" />
                          </mask>
                          <path
                            d="M54.0436 37.9264V38.2264H54.3436V37.9264H54.0436ZM53.7436 34.1338V37.9264H54.3436V34.1338H53.7436ZM54.0436 37.6264H50.251V38.2264H54.0436V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-350-inside-174_98_28446)"
                          />
                          <mask id="path-352-inside-175_98_28446" fill="white">
                            <path d="M54.0439 34.1338H57.8365V37.9264H54.0439V34.1338Z" />
                          </mask>
                          <path
                            d="M57.8365 37.9264V38.2264H58.1365V37.9264H57.8365ZM57.5365 34.1338V37.9264H58.1365V34.1338H57.5365ZM57.8365 37.6264H54.0439V38.2264H57.8365V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-352-inside-175_98_28446)"
                          />
                          <mask id="path-354-inside-176_98_28446" fill="white">
                            <path d="M57.8369 34.1338H61.6295V37.9264H57.8369V34.1338Z" />
                          </mask>
                          <path
                            d="M61.6295 37.9264V38.2264H61.9295V37.9264H61.6295ZM61.3295 34.1338V37.9264H61.9295V34.1338H61.3295ZM61.6295 37.6264H57.8369V38.2264H61.6295V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-354-inside-176_98_28446)"
                          />
                          <mask id="path-356-inside-177_98_28446" fill="white">
                            <path d="M61.6289 34.1338H65.4215V37.9264H61.6289V34.1338Z" />
                          </mask>
                          <path
                            d="M65.4215 37.9264V38.2264H65.7215V37.9264H65.4215ZM65.1215 34.1338V37.9264H65.7215V34.1338H65.1215ZM65.4215 37.6264H61.6289V38.2264H65.4215V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-356-inside-177_98_28446)"
                          />
                          <mask id="path-358-inside-178_98_28446" fill="white">
                            <path d="M65.4219 34.1338H69.2145V37.9264H65.4219V34.1338Z" />
                          </mask>
                          <path
                            d="M69.2145 37.9264V38.2264H69.5145V37.9264H69.2145ZM68.9145 34.1338V37.9264H69.5145V34.1338H68.9145ZM69.2145 37.6264H65.4219V38.2264H69.2145V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-358-inside-178_98_28446)"
                          />
                          <mask id="path-360-inside-179_98_28446" fill="white">
                            <path d="M69.2148 34.1338H73.0074V37.9264H69.2148V34.1338Z" />
                          </mask>
                          <path
                            d="M73.0074 37.9264V38.2264H73.3074V37.9264H73.0074ZM72.7074 34.1338V37.9264H73.3074V34.1338H72.7074ZM73.0074 37.6264H69.2148V38.2264H73.0074V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-360-inside-179_98_28446)"
                          />
                          <mask id="path-362-inside-180_98_28446" fill="white">
                            <path d="M73.007 34.1338H76.7996V37.9264H73.007V34.1338Z" />
                          </mask>
                          <path
                            d="M76.7996 37.9264V38.2264H77.0996V37.9264H76.7996ZM76.4996 34.1338V37.9264H77.0996V34.1338H76.4996ZM76.7996 37.6264H73.007V38.2264H76.7996V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-362-inside-180_98_28446)"
                          />
                          <mask id="path-364-inside-181_98_28446" fill="white">
                            <path d="M8.5332 37.9258H12.3258V41.7184H8.5332V37.9258Z" />
                          </mask>
                          <path
                            d="M12.3258 41.7184V42.0184H12.6258V41.7184H12.3258ZM12.0258 37.9258V41.7184H12.6258V37.9258H12.0258ZM12.3258 41.4184H8.5332V42.0184H12.3258V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-364-inside-181_98_28446)"
                          />
                          <mask id="path-366-inside-182_98_28446" fill="white">
                            <path d="M12.3252 37.9258H16.1178V41.7184H12.3252V37.9258Z" />
                          </mask>
                          <path
                            d="M16.1178 41.7184V42.0184H16.4178V41.7184H16.1178ZM15.8178 37.9258V41.7184H16.4178V37.9258H15.8178ZM16.1178 41.4184H12.3252V42.0184H16.1178V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-366-inside-182_98_28446)"
                          />
                          <mask id="path-368-inside-183_98_28446" fill="white">
                            <path d="M16.118 37.9258H19.9106V41.7184H16.118V37.9258Z" />
                          </mask>
                          <path
                            d="M19.9106 41.7184V42.0184H20.2106V41.7184H19.9106ZM19.6106 37.9258V41.7184H20.2106V37.9258H19.6106ZM19.9106 41.4184H16.118V42.0184H19.9106V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-368-inside-183_98_28446)"
                          />
                          <mask id="path-370-inside-184_98_28446" fill="white">
                            <path d="M19.9111 37.9258H23.7037V41.7184H19.9111V37.9258Z" />
                          </mask>
                          <path
                            d="M23.7037 41.7184V42.0184H24.0037V41.7184H23.7037ZM23.4037 37.9258V41.7184H24.0037V37.9258H23.4037ZM23.7037 41.4184H19.9111V42.0184H23.7037V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-370-inside-184_98_28446)"
                          />
                          <mask id="path-372-inside-185_98_28446" fill="white">
                            <path d="M23.7032 37.9258H27.4958V41.7184H23.7032V37.9258Z" />
                          </mask>
                          <path
                            d="M27.4958 41.7184V42.0184H27.7958V41.7184H27.4958ZM27.1958 37.9258V41.7184H27.7958V37.9258H27.1958ZM27.4958 41.4184H23.7032V42.0184H27.4958V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-372-inside-185_98_28446)"
                          />
                          <mask id="path-374-inside-186_98_28446" fill="white">
                            <path d="M27.4961 37.9258H31.2887V41.7184H27.4961V37.9258Z" />
                          </mask>
                          <path
                            d="M31.2887 41.7184V42.0184H31.5887V41.7184H31.2887ZM30.9887 37.9258V41.7184H31.5887V37.9258H30.9887ZM31.2887 41.4184H27.4961V42.0184H31.2887V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-374-inside-186_98_28446)"
                          />
                          <mask id="path-376-inside-187_98_28446" fill="white">
                            <path d="M31.2881 37.9258H35.0807V41.7184H31.2881V37.9258Z" />
                          </mask>
                          <path
                            d="M31.2881 37.9258H35.0807V41.7184H31.2881V37.9258Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M35.0807 41.7184V42.0184H35.3807V41.7184H35.0807ZM34.7807 37.9258V41.7184H35.3807V37.9258H34.7807ZM35.0807 41.4184H31.2881V42.0184H35.0807V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-376-inside-187_98_28446)"
                          />
                          <mask id="path-378-inside-188_98_28446" fill="white">
                            <path d="M35.0811 37.9258H38.8736V41.7184H35.0811V37.9258Z" />
                          </mask>
                          <path
                            d="M38.8736 41.7184V42.0184H39.1736V41.7184H38.8736ZM38.5736 37.9258V41.7184H39.1736V37.9258H38.5736ZM38.8736 41.4184H35.0811V42.0184H38.8736V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-378-inside-188_98_28446)"
                          />
                          <mask id="path-380-inside-189_98_28446" fill="white">
                            <path d="M38.874 37.9258H42.6666V41.7184H38.874V37.9258Z" />
                          </mask>
                          <path
                            d="M42.6666 41.7184V42.0184H42.9666V41.7184H42.6666ZM42.3666 37.9258V41.7184H42.9666V37.9258H42.3666ZM42.6666 41.4184H38.874V42.0184H42.6666V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-380-inside-189_98_28446)"
                          />
                          <mask id="path-382-inside-190_98_28446" fill="white">
                            <path d="M42.6663 37.9258H46.4589V41.7184H42.6663V37.9258Z" />
                          </mask>
                          <path
                            d="M46.4589 41.7184V42.0184H46.7589V41.7184H46.4589ZM46.1589 37.9258V41.7184H46.7589V37.9258H46.1589ZM46.4589 41.4184H42.6663V42.0184H46.4589V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-382-inside-190_98_28446)"
                          />
                          <mask id="path-384-inside-191_98_28446" fill="white">
                            <path d="M46.4587 37.9258H50.2513V41.7184H46.4587V37.9258Z" />
                          </mask>
                          <path
                            d="M50.2513 41.7184V42.0184H50.5513V41.7184H50.2513ZM49.9513 37.9258V41.7184H50.5513V37.9258H49.9513ZM50.2513 41.4184H46.4587V42.0184H50.2513V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-384-inside-191_98_28446)"
                          />
                          <mask id="path-386-inside-192_98_28446" fill="white">
                            <path d="M50.251 37.9258H54.0436V41.7184H50.251V37.9258Z" />
                          </mask>
                          <path
                            d="M54.0436 41.7184V42.0184H54.3436V41.7184H54.0436ZM53.7436 37.9258V41.7184H54.3436V37.9258H53.7436ZM54.0436 41.4184H50.251V42.0184H54.0436V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-386-inside-192_98_28446)"
                          />
                          <mask id="path-388-inside-193_98_28446" fill="white">
                            <path d="M54.0439 37.9258H57.8365V41.7184H54.0439V37.9258Z" />
                          </mask>
                          <path
                            d="M57.8365 41.7184V42.0184H58.1365V41.7184H57.8365ZM57.5365 37.9258V41.7184H58.1365V37.9258H57.5365ZM57.8365 41.4184H54.0439V42.0184H57.8365V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-388-inside-193_98_28446)"
                          />
                          <mask id="path-390-inside-194_98_28446" fill="white">
                            <path d="M57.8369 37.9258H61.6295V41.7184H57.8369V37.9258Z" />
                          </mask>
                          <path
                            d="M57.8369 37.9258H61.6295V41.7184H57.8369V37.9258Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M61.6295 41.7184V42.0184H61.9295V41.7184H61.6295ZM61.3295 37.9258V41.7184H61.9295V37.9258H61.3295ZM61.6295 41.4184H57.8369V42.0184H61.6295V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-390-inside-194_98_28446)"
                          />
                          <mask id="path-392-inside-195_98_28446" fill="white">
                            <path d="M61.6289 37.9258H65.4215V41.7184H61.6289V37.9258Z" />
                          </mask>
                          <path
                            d="M65.4215 41.7184V42.0184H65.7215V41.7184H65.4215ZM65.1215 37.9258V41.7184H65.7215V37.9258H65.1215ZM65.4215 41.4184H61.6289V42.0184H65.4215V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-392-inside-195_98_28446)"
                          />
                          <mask id="path-394-inside-196_98_28446" fill="white">
                            <path d="M65.4219 37.9258H69.2145V41.7184H65.4219V37.9258Z" />
                          </mask>
                          <path
                            d="M69.2145 41.7184V42.0184H69.5145V41.7184H69.2145ZM68.9145 37.9258V41.7184H69.5145V37.9258H68.9145ZM69.2145 41.4184H65.4219V42.0184H69.2145V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-394-inside-196_98_28446)"
                          />
                          <mask id="path-396-inside-197_98_28446" fill="white">
                            <path d="M69.2148 37.9258H73.0074V41.7184H69.2148V37.9258Z" />
                          </mask>
                          <path
                            d="M73.0074 41.7184V42.0184H73.3074V41.7184H73.0074ZM72.7074 37.9258V41.7184H73.3074V37.9258H72.7074ZM73.0074 41.4184H69.2148V42.0184H73.0074V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-396-inside-197_98_28446)"
                          />
                          <mask id="path-398-inside-198_98_28446" fill="white">
                            <path d="M73.007 37.9258H76.7996V41.7184H73.007V37.9258Z" />
                          </mask>
                          <path
                            d="M76.7996 41.7184V42.0184H77.0996V41.7184H76.7996ZM76.4996 37.9258V41.7184H77.0996V37.9258H76.4996ZM76.7996 41.4184H73.007V42.0184H76.7996V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-398-inside-198_98_28446)"
                          />
                          <mask id="path-400-inside-199_98_28446" fill="white">
                            <path d="M8.5332 41.7188H12.3258V45.5113H8.5332V41.7188Z" />
                          </mask>
                          <path
                            d="M8.5332 41.7188H12.3258V45.5113H8.5332V41.7188Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M12.3258 45.5113V45.8113H12.6258V45.5113H12.3258ZM12.0258 41.7188V45.5113H12.6258V41.7188H12.0258ZM12.3258 45.2113H8.5332V45.8113H12.3258V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-400-inside-199_98_28446)"
                          />
                          <mask id="path-402-inside-200_98_28446" fill="white">
                            <path d="M12.3252 41.7188H16.1178V45.5113H12.3252V41.7188Z" />
                          </mask>
                          <path
                            d="M16.1178 45.5113V45.8113H16.4178V45.5113H16.1178ZM15.8178 41.7188V45.5113H16.4178V41.7188H15.8178ZM16.1178 45.2113H12.3252V45.8113H16.1178V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-402-inside-200_98_28446)"
                          />
                          <mask id="path-404-inside-201_98_28446" fill="white">
                            <path d="M16.118 41.7188H19.9106V45.5113H16.118V41.7188Z" />
                          </mask>
                          <path
                            d="M19.9106 45.5113V45.8113H20.2106V45.5113H19.9106ZM19.6106 41.7188V45.5113H20.2106V41.7188H19.6106ZM19.9106 45.2113H16.118V45.8113H19.9106V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-404-inside-201_98_28446)"
                          />
                          <mask id="path-406-inside-202_98_28446" fill="white">
                            <path d="M19.9111 41.7188H23.7037V45.5113H19.9111V41.7188Z" />
                          </mask>
                          <path
                            d="M23.7037 45.5113V45.8113H24.0037V45.5113H23.7037ZM23.4037 41.7188V45.5113H24.0037V41.7188H23.4037ZM23.7037 45.2113H19.9111V45.8113H23.7037V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-406-inside-202_98_28446)"
                          />
                          <mask id="path-408-inside-203_98_28446" fill="white">
                            <path d="M23.7032 41.7188H27.4958V45.5113H23.7032V41.7188Z" />
                          </mask>
                          <path
                            d="M27.4958 45.5113V45.8113H27.7958V45.5113H27.4958ZM27.1958 41.7188V45.5113H27.7958V41.7188H27.1958ZM27.4958 45.2113H23.7032V45.8113H27.4958V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-408-inside-203_98_28446)"
                          />
                          <mask id="path-410-inside-204_98_28446" fill="white">
                            <path d="M27.4961 41.7188H31.2887V45.5113H27.4961V41.7188Z" />
                          </mask>
                          <path
                            d="M31.2887 45.5113V45.8113H31.5887V45.5113H31.2887ZM30.9887 41.7188V45.5113H31.5887V41.7188H30.9887ZM31.2887 45.2113H27.4961V45.8113H31.2887V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-410-inside-204_98_28446)"
                          />
                          <mask id="path-412-inside-205_98_28446" fill="white">
                            <path d="M31.2881 41.7188H35.0807V45.5113H31.2881V41.7188Z" />
                          </mask>
                          <path
                            d="M35.0807 45.5113V45.8113H35.3807V45.5113H35.0807ZM34.7807 41.7188V45.5113H35.3807V41.7188H34.7807ZM35.0807 45.2113H31.2881V45.8113H35.0807V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-412-inside-205_98_28446)"
                          />
                          <mask id="path-414-inside-206_98_28446" fill="white">
                            <path d="M35.0811 41.7188H38.8736V45.5113H35.0811V41.7188Z" />
                          </mask>
                          <path
                            d="M38.8736 45.5113V45.8113H39.1736V45.5113H38.8736ZM38.5736 41.7188V45.5113H39.1736V41.7188H38.5736ZM38.8736 45.2113H35.0811V45.8113H38.8736V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-414-inside-206_98_28446)"
                          />
                          <mask id="path-416-inside-207_98_28446" fill="white">
                            <path d="M38.874 41.7188H42.6666V45.5113H38.874V41.7188Z" />
                          </mask>
                          <path
                            d="M42.6666 45.5113V45.8113H42.9666V45.5113H42.6666ZM42.3666 41.7188V45.5113H42.9666V41.7188H42.3666ZM42.6666 45.2113H38.874V45.8113H42.6666V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-416-inside-207_98_28446)"
                          />
                          <mask id="path-418-inside-208_98_28446" fill="white">
                            <path d="M42.6663 41.7188H46.4589V45.5113H42.6663V41.7188Z" />
                          </mask>
                          <path
                            d="M46.4589 45.5113V45.8113H46.7589V45.5113H46.4589ZM46.1589 41.7188V45.5113H46.7589V41.7188H46.1589ZM46.4589 45.2113H42.6663V45.8113H46.4589V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-418-inside-208_98_28446)"
                          />
                          <mask id="path-420-inside-209_98_28446" fill="white">
                            <path d="M46.4587 41.7188H50.2513V45.5113H46.4587V41.7188Z" />
                          </mask>
                          <path
                            d="M46.4587 41.7188H50.2513V45.5113H46.4587V41.7188Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M50.2513 45.5113V45.8113H50.5513V45.5113H50.2513ZM49.9513 41.7188V45.5113H50.5513V41.7188H49.9513ZM50.2513 45.2113H46.4587V45.8113H50.2513V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-420-inside-209_98_28446)"
                          />
                          <mask id="path-422-inside-210_98_28446" fill="white">
                            <path d="M50.251 41.7188H54.0436V45.5113H50.251V41.7188Z" />
                          </mask>
                          <path
                            d="M54.0436 45.5113V45.8113H54.3436V45.5113H54.0436ZM53.7436 41.7188V45.5113H54.3436V41.7188H53.7436ZM54.0436 45.2113H50.251V45.8113H54.0436V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-422-inside-210_98_28446)"
                          />
                          <mask id="path-424-inside-211_98_28446" fill="white">
                            <path d="M54.0439 41.7188H57.8365V45.5113H54.0439V41.7188Z" />
                          </mask>
                          <path
                            d="M57.8365 45.5113V45.8113H58.1365V45.5113H57.8365ZM57.5365 41.7188V45.5113H58.1365V41.7188H57.5365ZM57.8365 45.2113H54.0439V45.8113H57.8365V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-424-inside-211_98_28446)"
                          />
                          <mask id="path-426-inside-212_98_28446" fill="white">
                            <path d="M57.8369 41.7188H61.6295V45.5113H57.8369V41.7188Z" />
                          </mask>
                          <path
                            d="M61.6295 45.5113V45.8113H61.9295V45.5113H61.6295ZM61.3295 41.7188V45.5113H61.9295V41.7188H61.3295ZM61.6295 45.2113H57.8369V45.8113H61.6295V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-426-inside-212_98_28446)"
                          />
                          <mask id="path-428-inside-213_98_28446" fill="white">
                            <path d="M61.6289 41.7188H65.4215V45.5113H61.6289V41.7188Z" />
                          </mask>
                          <path
                            d="M65.4215 45.5113V45.8113H65.7215V45.5113H65.4215ZM65.1215 41.7188V45.5113H65.7215V41.7188H65.1215ZM65.4215 45.2113H61.6289V45.8113H65.4215V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-428-inside-213_98_28446)"
                          />
                          <mask id="path-430-inside-214_98_28446" fill="white">
                            <path d="M65.4219 41.7188H69.2145V45.5113H65.4219V41.7188Z" />
                          </mask>
                          <path
                            d="M65.4219 41.7188H69.2145V45.5113H65.4219V41.7188Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M69.2145 45.5113V45.8113H69.5145V45.5113H69.2145ZM68.9145 41.7188V45.5113H69.5145V41.7188H68.9145ZM69.2145 45.2113H65.4219V45.8113H69.2145V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-430-inside-214_98_28446)"
                          />
                          <mask id="path-432-inside-215_98_28446" fill="white">
                            <path d="M69.2148 41.7188H73.0074V45.5113H69.2148V41.7188Z" />
                          </mask>
                          <path
                            d="M73.0074 45.5113V45.8113H73.3074V45.5113H73.0074ZM72.7074 41.7188V45.5113H73.3074V41.7188H72.7074ZM73.0074 45.2113H69.2148V45.8113H73.0074V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-432-inside-215_98_28446)"
                          />
                          <mask id="path-434-inside-216_98_28446" fill="white">
                            <path d="M73.007 41.7188H76.7996V45.5113H73.007V41.7188Z" />
                          </mask>
                          <path
                            d="M76.7996 45.5113V45.8113H77.0996V45.5113H76.7996ZM76.4996 41.7188V45.5113H77.0996V41.7188H76.4996ZM76.7996 45.2113H73.007V45.8113H76.7996V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-434-inside-216_98_28446)"
                          />
                          <mask id="path-436-inside-217_98_28446" fill="white">
                            <path d="M8.5332 45.5107H12.3258V49.3033H8.5332V45.5107Z" />
                          </mask>
                          <path
                            d="M12.3258 49.3033V49.6033H12.6258V49.3033H12.3258ZM12.0258 45.5107V49.3033H12.6258V45.5107H12.0258ZM12.3258 49.0033H8.5332V49.6033H12.3258V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-436-inside-217_98_28446)"
                          />
                          <mask id="path-438-inside-218_98_28446" fill="white">
                            <path d="M12.3252 45.5107H16.1178V49.3033H12.3252V45.5107Z" />
                          </mask>
                          <path
                            d="M16.1178 49.3033V49.6033H16.4178V49.3033H16.1178ZM15.8178 45.5107V49.3033H16.4178V45.5107H15.8178ZM16.1178 49.0033H12.3252V49.6033H16.1178V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-438-inside-218_98_28446)"
                          />
                          <mask id="path-440-inside-219_98_28446" fill="white">
                            <path d="M16.118 45.5107H19.9106V49.3033H16.118V45.5107Z" />
                          </mask>
                          <path
                            d="M19.9106 49.3033V49.6033H20.2106V49.3033H19.9106ZM19.6106 45.5107V49.3033H20.2106V45.5107H19.6106ZM19.9106 49.0033H16.118V49.6033H19.9106V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-440-inside-219_98_28446)"
                          />
                          <mask id="path-442-inside-220_98_28446" fill="white">
                            <path d="M19.9111 45.5107H23.7037V49.3033H19.9111V45.5107Z" />
                          </mask>
                          <path
                            d="M23.7037 49.3033V49.6033H24.0037V49.3033H23.7037ZM23.4037 45.5107V49.3033H24.0037V45.5107H23.4037ZM23.7037 49.0033H19.9111V49.6033H23.7037V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-442-inside-220_98_28446)"
                          />
                          <mask id="path-444-inside-221_98_28446" fill="white">
                            <path d="M23.7032 45.5107H27.4958V49.3033H23.7032V45.5107Z" />
                          </mask>
                          <path
                            d="M27.4958 49.3033V49.6033H27.7958V49.3033H27.4958ZM27.1958 45.5107V49.3033H27.7958V45.5107H27.1958ZM27.4958 49.0033H23.7032V49.6033H27.4958V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-444-inside-221_98_28446)"
                          />
                          <mask id="path-446-inside-222_98_28446" fill="white">
                            <path d="M27.4961 45.5107H31.2887V49.3033H27.4961V45.5107Z" />
                          </mask>
                          <path
                            d="M31.2887 49.3033V49.6033H31.5887V49.3033H31.2887ZM30.9887 45.5107V49.3033H31.5887V45.5107H30.9887ZM31.2887 49.0033H27.4961V49.6033H31.2887V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-446-inside-222_98_28446)"
                          />
                          <mask id="path-448-inside-223_98_28446" fill="white">
                            <path d="M31.2881 45.5107H35.0807V49.3033H31.2881V45.5107Z" />
                          </mask>
                          <path
                            d="M31.2881 45.5107H35.0807V49.3033H31.2881V45.5107Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M35.0807 49.3033V49.6033H35.3807V49.3033H35.0807ZM34.7807 45.5107V49.3033H35.3807V45.5107H34.7807ZM35.0807 49.0033H31.2881V49.6033H35.0807V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-448-inside-223_98_28446)"
                          />
                          <mask id="path-450-inside-224_98_28446" fill="white">
                            <path d="M35.0811 45.5107H38.8736V49.3033H35.0811V45.5107Z" />
                          </mask>
                          <path
                            d="M38.8736 49.3033V49.6033H39.1736V49.3033H38.8736ZM38.5736 45.5107V49.3033H39.1736V45.5107H38.5736ZM38.8736 49.0033H35.0811V49.6033H38.8736V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-450-inside-224_98_28446)"
                          />
                          <mask id="path-452-inside-225_98_28446" fill="white">
                            <path d="M38.874 45.5107H42.6666V49.3033H38.874V45.5107Z" />
                          </mask>
                          <path
                            d="M42.6666 49.3033V49.6033H42.9666V49.3033H42.6666ZM42.3666 45.5107V49.3033H42.9666V45.5107H42.3666ZM42.6666 49.0033H38.874V49.6033H42.6666V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-452-inside-225_98_28446)"
                          />
                          <mask id="path-454-inside-226_98_28446" fill="white">
                            <path d="M42.6663 45.5107H46.4589V49.3033H42.6663V45.5107Z" />
                          </mask>
                          <path
                            d="M46.4589 49.3033V49.6033H46.7589V49.3033H46.4589ZM46.1589 45.5107V49.3033H46.7589V45.5107H46.1589ZM46.4589 49.0033H42.6663V49.6033H46.4589V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-454-inside-226_98_28446)"
                          />
                          <mask id="path-456-inside-227_98_28446" fill="white">
                            <path d="M46.4587 45.5107H50.2513V49.3033H46.4587V45.5107Z" />
                          </mask>
                          <path
                            d="M50.2513 49.3033V49.6033H50.5513V49.3033H50.2513ZM49.9513 45.5107V49.3033H50.5513V45.5107H49.9513ZM50.2513 49.0033H46.4587V49.6033H50.2513V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-456-inside-227_98_28446)"
                          />
                          <mask id="path-458-inside-228_98_28446" fill="white">
                            <path d="M50.251 45.5107H54.0436V49.3033H50.251V45.5107Z" />
                          </mask>
                          <path
                            d="M54.0436 49.3033V49.6033H54.3436V49.3033H54.0436ZM53.7436 45.5107V49.3033H54.3436V45.5107H53.7436ZM54.0436 49.0033H50.251V49.6033H54.0436V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-458-inside-228_98_28446)"
                          />
                          <mask id="path-460-inside-229_98_28446" fill="white">
                            <path d="M54.0439 45.5107H57.8365V49.3033H54.0439V45.5107Z" />
                          </mask>
                          <path
                            d="M57.8365 49.3033V49.6033H58.1365V49.3033H57.8365ZM57.5365 45.5107V49.3033H58.1365V45.5107H57.5365ZM57.8365 49.0033H54.0439V49.6033H57.8365V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-460-inside-229_98_28446)"
                          />
                          <mask id="path-462-inside-230_98_28446" fill="white">
                            <path d="M57.8369 45.5107H61.6295V49.3033H57.8369V45.5107Z" />
                          </mask>
                          <path
                            d="M61.6295 49.3033V49.6033H61.9295V49.3033H61.6295ZM61.3295 45.5107V49.3033H61.9295V45.5107H61.3295ZM61.6295 49.0033H57.8369V49.6033H61.6295V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-462-inside-230_98_28446)"
                          />
                          <mask id="path-464-inside-231_98_28446" fill="white">
                            <path d="M61.6289 45.5107H65.4215V49.3033H61.6289V45.5107Z" />
                          </mask>
                          <path
                            d="M65.4215 49.3033V49.6033H65.7215V49.3033H65.4215ZM65.1215 45.5107V49.3033H65.7215V45.5107H65.1215ZM65.4215 49.0033H61.6289V49.6033H65.4215V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-464-inside-231_98_28446)"
                          />
                          <mask id="path-466-inside-232_98_28446" fill="white">
                            <path d="M65.4219 45.5107H69.2145V49.3033H65.4219V45.5107Z" />
                          </mask>
                          <path
                            d="M69.2145 49.3033V49.6033H69.5145V49.3033H69.2145ZM68.9145 45.5107V49.3033H69.5145V45.5107H68.9145ZM69.2145 49.0033H65.4219V49.6033H69.2145V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-466-inside-232_98_28446)"
                          />
                          <mask id="path-468-inside-233_98_28446" fill="white">
                            <path d="M69.2148 45.5107H73.0074V49.3033H69.2148V45.5107Z" />
                          </mask>
                          <path
                            d="M73.0074 49.3033V49.6033H73.3074V49.3033H73.0074ZM72.7074 45.5107V49.3033H73.3074V45.5107H72.7074ZM73.0074 49.0033H69.2148V49.6033H73.0074V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-468-inside-233_98_28446)"
                          />
                          <mask id="path-470-inside-234_98_28446" fill="white">
                            <path d="M73.007 45.5107H76.7996V49.3033H73.007V45.5107Z" />
                          </mask>
                          <path
                            d="M76.7996 49.3033V49.6033H77.0996V49.3033H76.7996ZM76.4996 45.5107V49.3033H77.0996V45.5107H76.4996ZM76.7996 49.0033H73.007V49.6033H76.7996V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-470-inside-234_98_28446)"
                          />
                          <mask id="path-472-inside-235_98_28446" fill="white">
                            <path d="M8.5332 49.3037H12.3258V53.0963H8.5332V49.3037Z" />
                          </mask>
                          <path
                            d="M12.3258 53.0963V53.3963H12.6258V53.0963H12.3258ZM12.0258 49.3037V53.0963H12.6258V49.3037H12.0258ZM12.3258 52.7963H8.5332V53.3963H12.3258V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-472-inside-235_98_28446)"
                          />
                          <mask id="path-474-inside-236_98_28446" fill="white">
                            <path d="M12.3252 49.3037H16.1178V53.0963H12.3252V49.3037Z" />
                          </mask>
                          <path
                            d="M16.1178 53.0963V53.3963H16.4178V53.0963H16.1178ZM15.8178 49.3037V53.0963H16.4178V49.3037H15.8178ZM16.1178 52.7963H12.3252V53.3963H16.1178V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-474-inside-236_98_28446)"
                          />
                          <mask id="path-476-inside-237_98_28446" fill="white">
                            <path d="M16.118 49.3037H19.9106V53.0963H16.118V49.3037Z" />
                          </mask>
                          <path
                            d="M19.9106 53.0963V53.3963H20.2106V53.0963H19.9106ZM19.6106 49.3037V53.0963H20.2106V49.3037H19.6106ZM19.9106 52.7963H16.118V53.3963H19.9106V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-476-inside-237_98_28446)"
                          />
                          <mask id="path-478-inside-238_98_28446" fill="white">
                            <path d="M19.9111 49.3037H23.7037V53.0963H19.9111V49.3037Z" />
                          </mask>
                          <path
                            d="M19.9111 49.3037H23.7037V53.0963H19.9111V49.3037Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M23.7037 53.0963V53.3963H24.0037V53.0963H23.7037ZM23.4037 49.3037V53.0963H24.0037V49.3037H23.4037ZM23.7037 52.7963H19.9111V53.3963H23.7037V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-478-inside-238_98_28446)"
                          />
                          <mask id="path-480-inside-239_98_28446" fill="white">
                            <path d="M23.7032 49.3037H27.4958V53.0963H23.7032V49.3037Z" />
                          </mask>
                          <path
                            d="M27.4958 53.0963V53.3963H27.7958V53.0963H27.4958ZM27.1958 49.3037V53.0963H27.7958V49.3037H27.1958ZM27.4958 52.7963H23.7032V53.3963H27.4958V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-480-inside-239_98_28446)"
                          />
                          <mask id="path-482-inside-240_98_28446" fill="white">
                            <path d="M27.4958 49.3037H31.2884V53.0963H27.4958V49.3037Z" />
                          </mask>
                          <path
                            d="M31.2884 53.0963V53.3963H31.5884V53.0963H31.2884ZM30.9884 49.3037V53.0963H31.5884V49.3037H30.9884ZM31.2884 52.7963H27.4958V53.3963H31.2884V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-482-inside-240_98_28446)"
                          />
                          <mask id="path-484-inside-241_98_28446" fill="white">
                            <path d="M31.2881 49.3037H35.0807V53.0963H31.2881V49.3037Z" />
                          </mask>
                          <path
                            d="M35.0807 53.0963V53.3963H35.3807V53.0963H35.0807ZM34.7807 49.3037V53.0963H35.3807V49.3037H34.7807ZM35.0807 52.7963H31.2881V53.3963H35.0807V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-484-inside-241_98_28446)"
                          />
                          <mask id="path-486-inside-242_98_28446" fill="white">
                            <path d="M35.0811 49.3037H38.8736V53.0963H35.0811V49.3037Z" />
                          </mask>
                          <path
                            d="M38.8736 53.0963V53.3963H39.1736V53.0963H38.8736ZM38.5736 49.3037V53.0963H39.1736V49.3037H38.5736ZM38.8736 52.7963H35.0811V53.3963H38.8736V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-486-inside-242_98_28446)"
                          />
                          <mask id="path-488-inside-243_98_28446" fill="white">
                            <path d="M38.874 49.3037H42.6666V53.0963H38.874V49.3037Z" />
                          </mask>
                          <path
                            d="M42.6666 53.0963V53.3963H42.9666V53.0963H42.6666ZM42.3666 49.3037V53.0963H42.9666V49.3037H42.3666ZM42.6666 52.7963H38.874V53.3963H42.6666V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-488-inside-243_98_28446)"
                          />
                          <mask id="path-490-inside-244_98_28446" fill="white">
                            <path d="M42.6663 49.3037H46.4589V53.0963H42.6663V49.3037Z" />
                          </mask>
                          <path
                            d="M46.4589 53.0963V53.3963H46.7589V53.0963H46.4589ZM46.1589 49.3037V53.0963H46.7589V49.3037H46.1589ZM46.4589 52.7963H42.6663V53.3963H46.4589V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-490-inside-244_98_28446)"
                          />
                          <mask id="path-492-inside-245_98_28446" fill="white">
                            <path d="M46.4589 49.3037H50.2515V53.0963H46.4589V49.3037Z" />
                          </mask>
                          <path
                            d="M50.2515 53.0963V53.3963H50.5515V53.0963H50.2515ZM49.9515 49.3037V53.0963H50.5515V49.3037H49.9515ZM50.2515 52.7963H46.4589V53.3963H50.2515V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-492-inside-245_98_28446)"
                          />
                          <mask id="path-494-inside-246_98_28446" fill="white">
                            <path d="M50.251 49.3037H54.0436V53.0963H50.251V49.3037Z" />
                          </mask>
                          <path
                            d="M54.0436 53.0963V53.3963H54.3436V53.0963H54.0436ZM53.7436 49.3037V53.0963H54.3436V49.3037H53.7436ZM54.0436 52.7963H50.251V53.3963H54.0436V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-494-inside-246_98_28446)"
                          />
                          <mask id="path-496-inside-247_98_28446" fill="white">
                            <path d="M54.0441 49.3037H57.8367V53.0963H54.0441V49.3037Z" />
                          </mask>
                          <path
                            d="M54.0441 49.3037H57.8367V53.0963H54.0441V49.3037Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M57.8367 53.0963V53.3963H58.1367V53.0963H57.8367ZM57.5367 49.3037V53.0963H58.1367V49.3037H57.5367ZM57.8367 52.7963H54.0441V53.3963H57.8367V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-496-inside-247_98_28446)"
                          />
                          <mask id="path-498-inside-248_98_28446" fill="white">
                            <path d="M57.8369 49.3037H61.6295V53.0963H57.8369V49.3037Z" />
                          </mask>
                          <path
                            d="M61.6295 53.0963V53.3963H61.9295V53.0963H61.6295ZM61.3295 49.3037V53.0963H61.9295V49.3037H61.3295ZM61.6295 52.7963H57.8369V53.3963H61.6295V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-498-inside-248_98_28446)"
                          />
                          <mask id="path-500-inside-249_98_28446" fill="white">
                            <path d="M61.6289 49.3037H65.4215V53.0963H61.6289V49.3037Z" />
                          </mask>
                          <path
                            d="M65.4215 53.0963V53.3963H65.7215V53.0963H65.4215ZM65.1215 49.3037V53.0963H65.7215V49.3037H65.1215ZM65.4215 52.7963H61.6289V53.3963H65.4215V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-500-inside-249_98_28446)"
                          />
                          <mask id="path-502-inside-250_98_28446" fill="white">
                            <path d="M65.4218 49.3037H69.2143V53.0963H65.4218V49.3037Z" />
                          </mask>
                          <path
                            d="M69.2143 53.0963V53.3963H69.5143V53.0963H69.2143ZM68.9143 49.3037V53.0963H69.5143V49.3037H68.9143ZM69.2143 52.7963H65.4218V53.3963H69.2143V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-502-inside-250_98_28446)"
                          />
                          <mask id="path-504-inside-251_98_28446" fill="white">
                            <path d="M69.2148 49.3037H73.0074V53.0963H69.2148V49.3037Z" />
                          </mask>
                          <path
                            d="M73.0074 53.0963V53.3963H73.3074V53.0963H73.0074ZM72.7074 49.3037V53.0963H73.3074V49.3037H72.7074ZM73.0074 52.7963H69.2148V53.3963H73.0074V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-504-inside-251_98_28446)"
                          />
                          <mask id="path-506-inside-252_98_28446" fill="white">
                            <path d="M73.007 49.3037H76.7996V53.0963H73.007V49.3037Z" />
                          </mask>
                          <path
                            d="M76.7996 53.0963V53.3963H77.0996V53.0963H76.7996ZM76.4996 49.3037V53.0963H77.0996V49.3037H76.4996ZM76.7996 52.7963H73.007V53.3963H76.7996V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-506-inside-252_98_28446)"
                          />
                          <mask id="path-508-inside-253_98_28446" fill="white">
                            <path d="M8.5332 53.0967H12.3258V56.8893H8.5332V53.0967Z" />
                          </mask>
                          <path
                            d="M8.5332 53.0967H12.3258V56.8893H8.5332V53.0967Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M12.3258 56.8893V57.1893H12.6258V56.8893H12.3258ZM12.0258 53.0967V56.8893H12.6258V53.0967H12.0258ZM12.3258 56.5893H8.5332V57.1893H12.3258V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-508-inside-253_98_28446)"
                          />
                          <mask id="path-510-inside-254_98_28446" fill="white">
                            <path d="M12.3252 53.0967H16.1178V56.8893H12.3252V53.0967Z" />
                          </mask>
                          <path
                            d="M16.1178 56.8893V57.1893H16.4178V56.8893H16.1178ZM15.8178 53.0967V56.8893H16.4178V53.0967H15.8178ZM16.1178 56.5893H12.3252V57.1893H16.1178V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-510-inside-254_98_28446)"
                          />
                          <mask id="path-512-inside-255_98_28446" fill="white">
                            <path d="M16.118 53.0967H19.9106V56.8893H16.118V53.0967Z" />
                          </mask>
                          <path
                            d="M19.9106 56.8893V57.1893H20.2106V56.8893H19.9106ZM19.6106 53.0967V56.8893H20.2106V53.0967H19.6106ZM19.9106 56.5893H16.118V57.1893H19.9106V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-512-inside-255_98_28446)"
                          />
                          <mask id="path-514-inside-256_98_28446" fill="white">
                            <path d="M19.9111 53.0967H23.7037V56.8893H19.9111V53.0967Z" />
                          </mask>
                          <path
                            d="M23.7037 56.8893V57.1893H24.0037V56.8893H23.7037ZM23.4037 53.0967V56.8893H24.0037V53.0967H23.4037ZM23.7037 56.5893H19.9111V57.1893H23.7037V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-514-inside-256_98_28446)"
                          />
                          <mask id="path-516-inside-257_98_28446" fill="white">
                            <path d="M23.7032 53.0967H27.4958V56.8893H23.7032V53.0967Z" />
                          </mask>
                          <path
                            d="M27.4958 56.8893V57.1893H27.7958V56.8893H27.4958ZM27.1958 53.0967V56.8893H27.7958V53.0967H27.1958ZM27.4958 56.5893H23.7032V57.1893H27.4958V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-516-inside-257_98_28446)"
                          />
                          <mask id="path-518-inside-258_98_28446" fill="white">
                            <path d="M27.4961 53.0967H31.2887V56.8893H27.4961V53.0967Z" />
                          </mask>
                          <path
                            d="M31.2887 56.8893V57.1893H31.5887V56.8893H31.2887ZM30.9887 53.0967V56.8893H31.5887V53.0967H30.9887ZM31.2887 56.5893H27.4961V57.1893H31.2887V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-518-inside-258_98_28446)"
                          />
                          <mask id="path-520-inside-259_98_28446" fill="white">
                            <path d="M31.2881 53.0967H35.0807V56.8893H31.2881V53.0967Z" />
                          </mask>
                          <path
                            d="M35.0807 56.8893V57.1893H35.3807V56.8893H35.0807ZM34.7807 53.0967V56.8893H35.3807V53.0967H34.7807ZM35.0807 56.5893H31.2881V57.1893H35.0807V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-520-inside-259_98_28446)"
                          />
                          <mask id="path-522-inside-260_98_28446" fill="white">
                            <path d="M35.0811 53.0967H38.8736V56.8893H35.0811V53.0967Z" />
                          </mask>
                          <path
                            d="M38.8736 56.8893V57.1893H39.1736V56.8893H38.8736ZM38.5736 53.0967V56.8893H39.1736V53.0967H38.5736ZM38.8736 56.5893H35.0811V57.1893H38.8736V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-522-inside-260_98_28446)"
                          />
                          <mask id="path-524-inside-261_98_28446" fill="white">
                            <path d="M38.874 53.0967H42.6666V56.8893H38.874V53.0967Z" />
                          </mask>
                          <path
                            d="M42.6666 56.8893V57.1893H42.9666V56.8893H42.6666ZM42.3666 53.0967V56.8893H42.9666V53.0967H42.3666ZM42.6666 56.5893H38.874V57.1893H42.6666V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-524-inside-261_98_28446)"
                          />
                          <mask id="path-526-inside-262_98_28446" fill="white">
                            <path d="M42.6663 53.0967H46.4589V56.8893H42.6663V53.0967Z" />
                          </mask>
                          <path
                            d="M42.6663 53.0967H46.4589V56.8893H42.6663V53.0967Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M46.4589 56.8893V57.1893H46.7589V56.8893H46.4589ZM46.1589 53.0967V56.8893H46.7589V53.0967H46.1589ZM46.4589 56.5893H42.6663V57.1893H46.4589V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-526-inside-262_98_28446)"
                          />
                          <mask id="path-528-inside-263_98_28446" fill="white">
                            <path d="M46.4587 53.0967H50.2513V56.8893H46.4587V53.0967Z" />
                          </mask>
                          <path
                            d="M50.2513 56.8893V57.1893H50.5513V56.8893H50.2513ZM49.9513 53.0967V56.8893H50.5513V53.0967H49.9513ZM50.2513 56.5893H46.4587V57.1893H50.2513V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-528-inside-263_98_28446)"
                          />
                          <mask id="path-530-inside-264_98_28446" fill="white">
                            <path d="M50.251 53.0967H54.0436V56.8893H50.251V53.0967Z" />
                          </mask>
                          <path
                            d="M54.0436 56.8893V57.1893H54.3436V56.8893H54.0436ZM53.7436 53.0967V56.8893H54.3436V53.0967H53.7436ZM54.0436 56.5893H50.251V57.1893H54.0436V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-530-inside-264_98_28446)"
                          />
                          <mask id="path-532-inside-265_98_28446" fill="white">
                            <path d="M54.0439 53.0967H57.8365V56.8893H54.0439V53.0967Z" />
                          </mask>
                          <path
                            d="M57.8365 56.8893V57.1893H58.1365V56.8893H57.8365ZM57.5365 53.0967V56.8893H58.1365V53.0967H57.5365ZM57.8365 56.5893H54.0439V57.1893H57.8365V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-532-inside-265_98_28446)"
                          />
                          <mask id="path-534-inside-266_98_28446" fill="white">
                            <path d="M57.8369 53.0967H61.6295V56.8893H57.8369V53.0967Z" />
                          </mask>
                          <path
                            d="M61.6295 56.8893V57.1893H61.9295V56.8893H61.6295ZM61.3295 53.0967V56.8893H61.9295V53.0967H61.3295ZM61.6295 56.5893H57.8369V57.1893H61.6295V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-534-inside-266_98_28446)"
                          />
                          <mask id="path-536-inside-267_98_28446" fill="white">
                            <path d="M61.6289 53.0967H65.4215V56.8893H61.6289V53.0967Z" />
                          </mask>
                          <path
                            d="M65.4215 56.8893V57.1893H65.7215V56.8893H65.4215ZM65.1215 53.0967V56.8893H65.7215V53.0967H65.1215ZM65.4215 56.5893H61.6289V57.1893H65.4215V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-536-inside-267_98_28446)"
                          />
                          <mask id="path-538-inside-268_98_28446" fill="white">
                            <path d="M65.4219 53.0967H69.2145V56.8893H65.4219V53.0967Z" />
                          </mask>
                          <path
                            d="M69.2145 56.8893V57.1893H69.5145V56.8893H69.2145ZM68.9145 53.0967V56.8893H69.5145V53.0967H68.9145ZM69.2145 56.5893H65.4219V57.1893H69.2145V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-538-inside-268_98_28446)"
                          />
                          <mask id="path-540-inside-269_98_28446" fill="white">
                            <path d="M69.2148 53.0967H73.0074V56.8893H69.2148V53.0967Z" />
                          </mask>
                          <path
                            d="M69.2148 53.0967H73.0074V56.8893H69.2148V53.0967Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M73.0074 56.8893V57.1893H73.3074V56.8893H73.0074ZM72.7074 53.0967V56.8893H73.3074V53.0967H72.7074ZM73.0074 56.5893H69.2148V57.1893H73.0074V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-540-inside-269_98_28446)"
                          />
                          <mask id="path-542-inside-270_98_28446" fill="white">
                            <path d="M73.007 53.0967H76.7996V56.8893H73.007V53.0967Z" />
                          </mask>
                          <path
                            d="M76.7996 56.8893V57.1893H77.0996V56.8893H76.7996ZM76.4996 53.0967V56.8893H77.0996V53.0967H76.4996ZM76.7996 56.5893H73.007V57.1893H76.7996V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-542-inside-270_98_28446)"
                          />
                          <mask id="path-544-inside-271_98_28446" fill="white">
                            <path d="M8.5332 56.8887H12.3258V60.6813H8.5332V56.8887Z" />
                          </mask>
                          <path
                            d="M12.3258 60.6813V60.9813H12.6258V60.6813H12.3258ZM12.0258 56.8887V60.6813H12.6258V56.8887H12.0258ZM12.3258 60.3813H8.5332V60.9813H12.3258V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-544-inside-271_98_28446)"
                          />
                          <mask id="path-546-inside-272_98_28446" fill="white">
                            <path d="M12.3252 56.8887H16.1178V60.6813H12.3252V56.8887Z" />
                          </mask>
                          <path
                            d="M16.1178 60.6813V60.9813H16.4178V60.6813H16.1178ZM15.8178 56.8887V60.6813H16.4178V56.8887H15.8178ZM16.1178 60.3813H12.3252V60.9813H16.1178V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-546-inside-272_98_28446)"
                          />
                          <mask id="path-548-inside-273_98_28446" fill="white">
                            <path d="M16.118 56.8887H19.9106V60.6813H16.118V56.8887Z" />
                          </mask>
                          <path
                            d="M19.9106 60.6813V60.9813H20.2106V60.6813H19.9106ZM19.6106 56.8887V60.6813H20.2106V56.8887H19.6106ZM19.9106 60.3813H16.118V60.9813H19.9106V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-548-inside-273_98_28446)"
                          />
                          <mask id="path-550-inside-274_98_28446" fill="white">
                            <path d="M19.9111 56.8887H23.7037V60.6813H19.9111V56.8887Z" />
                          </mask>
                          <path
                            d="M23.7037 60.6813V60.9813H24.0037V60.6813H23.7037ZM23.4037 56.8887V60.6813H24.0037V56.8887H23.4037ZM23.7037 60.3813H19.9111V60.9813H23.7037V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-550-inside-274_98_28446)"
                          />
                          <mask id="path-552-inside-275_98_28446" fill="white">
                            <path d="M23.7032 56.8887H27.4958V60.6813H23.7032V56.8887Z" />
                          </mask>
                          <path
                            d="M27.4958 60.6813V60.9813H27.7958V60.6813H27.4958ZM27.1958 56.8887V60.6813H27.7958V56.8887H27.1958ZM27.4958 60.3813H23.7032V60.9813H27.4958V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-552-inside-275_98_28446)"
                          />
                          <mask id="path-554-inside-276_98_28446" fill="white">
                            <path d="M27.4961 56.8887H31.2887V60.6813H27.4961V56.8887Z" />
                          </mask>
                          <path
                            d="M27.4961 56.8887H31.2887V60.6813H27.4961V56.8887Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M31.2887 60.6813V60.9813H31.5887V60.6813H31.2887ZM30.9887 56.8887V60.6813H31.5887V56.8887H30.9887ZM31.2887 60.3813H27.4961V60.9813H31.2887V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-554-inside-276_98_28446)"
                          />
                          <mask id="path-556-inside-277_98_28446" fill="white">
                            <path d="M31.2881 56.8887H35.0807V60.6813H31.2881V56.8887Z" />
                          </mask>
                          <path
                            d="M35.0807 60.6813V60.9813H35.3807V60.6813H35.0807ZM34.7807 56.8887V60.6813H35.3807V56.8887H34.7807ZM35.0807 60.3813H31.2881V60.9813H35.0807V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-556-inside-277_98_28446)"
                          />
                          <mask id="path-558-inside-278_98_28446" fill="white">
                            <path d="M35.0811 56.8887H38.8736V60.6813H35.0811V56.8887Z" />
                          </mask>
                          <path
                            d="M38.8736 60.6813V60.9813H39.1736V60.6813H38.8736ZM38.5736 56.8887V60.6813H39.1736V56.8887H38.5736ZM38.8736 60.3813H35.0811V60.9813H38.8736V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-558-inside-278_98_28446)"
                          />
                          <mask id="path-560-inside-279_98_28446" fill="white">
                            <path d="M38.874 56.8887H42.6666V60.6813H38.874V56.8887Z" />
                          </mask>
                          <path
                            d="M42.6666 60.6813V60.9813H42.9666V60.6813H42.6666ZM42.3666 56.8887V60.6813H42.9666V56.8887H42.3666ZM42.6666 60.3813H38.874V60.9813H42.6666V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-560-inside-279_98_28446)"
                          />
                          <mask id="path-562-inside-280_98_28446" fill="white">
                            <path d="M42.6663 56.8887H46.4589V60.6813H42.6663V56.8887Z" />
                          </mask>
                          <path
                            d="M46.4589 60.6813V60.9813H46.7589V60.6813H46.4589ZM46.1589 56.8887V60.6813H46.7589V56.8887H46.1589ZM46.4589 60.3813H42.6663V60.9813H46.4589V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-562-inside-280_98_28446)"
                          />
                          <mask id="path-564-inside-281_98_28446" fill="white">
                            <path d="M46.4587 56.8887H50.2513V60.6813H46.4587V56.8887Z" />
                          </mask>
                          <path
                            d="M50.2513 60.6813V60.9813H50.5513V60.6813H50.2513ZM49.9513 56.8887V60.6813H50.5513V56.8887H49.9513ZM50.2513 60.3813H46.4587V60.9813H50.2513V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-564-inside-281_98_28446)"
                          />
                          <mask id="path-566-inside-282_98_28446" fill="white">
                            <path d="M50.251 56.8887H54.0436V60.6813H50.251V56.8887Z" />
                          </mask>
                          <path
                            d="M54.0436 60.6813V60.9813H54.3436V60.6813H54.0436ZM53.7436 56.8887V60.6813H54.3436V56.8887H53.7436ZM54.0436 60.3813H50.251V60.9813H54.0436V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-566-inside-282_98_28446)"
                          />
                          <mask id="path-568-inside-283_98_28446" fill="white">
                            <path d="M54.0439 56.8887H57.8365V60.6813H54.0439V56.8887Z" />
                          </mask>
                          <path
                            d="M57.8365 60.6813V60.9813H58.1365V60.6813H57.8365ZM57.5365 56.8887V60.6813H58.1365V56.8887H57.5365ZM57.8365 60.3813H54.0439V60.9813H57.8365V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-568-inside-283_98_28446)"
                          />
                          <mask id="path-570-inside-284_98_28446" fill="white">
                            <path d="M57.8369 56.8887H61.6295V60.6813H57.8369V56.8887Z" />
                          </mask>
                          <path
                            d="M57.8369 56.8887H61.6295V60.6813H57.8369V56.8887Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M61.6295 60.6813V60.9813H61.9295V60.6813H61.6295ZM61.3295 56.8887V60.6813H61.9295V56.8887H61.3295ZM61.6295 60.3813H57.8369V60.9813H61.6295V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-570-inside-284_98_28446)"
                          />
                          <mask id="path-572-inside-285_98_28446" fill="white">
                            <path d="M61.6289 56.8887H65.4215V60.6813H61.6289V56.8887Z" />
                          </mask>
                          <path
                            d="M65.4215 60.6813V60.9813H65.7215V60.6813H65.4215ZM65.1215 56.8887V60.6813H65.7215V56.8887H65.1215ZM65.4215 60.3813H61.6289V60.9813H65.4215V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-572-inside-285_98_28446)"
                          />
                          <mask id="path-574-inside-286_98_28446" fill="white">
                            <path d="M65.4219 56.8887H69.2145V60.6813H65.4219V56.8887Z" />
                          </mask>
                          <path
                            d="M69.2145 60.6813V60.9813H69.5145V60.6813H69.2145ZM68.9145 56.8887V60.6813H69.5145V56.8887H68.9145ZM69.2145 60.3813H65.4219V60.9813H69.2145V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-574-inside-286_98_28446)"
                          />
                          <mask id="path-576-inside-287_98_28446" fill="white">
                            <path d="M69.2148 56.8887H73.0074V60.6813H69.2148V56.8887Z" />
                          </mask>
                          <path
                            d="M73.0074 60.6813V60.9813H73.3074V60.6813H73.0074ZM72.7074 56.8887V60.6813H73.3074V56.8887H72.7074ZM73.0074 60.3813H69.2148V60.9813H73.0074V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-576-inside-287_98_28446)"
                          />
                          <mask id="path-578-inside-288_98_28446" fill="white">
                            <path d="M73.007 56.8887H76.7996V60.6813H73.007V56.8887Z" />
                          </mask>
                          <path
                            d="M76.7996 60.6813V60.9813H77.0996V60.6813H76.7996ZM76.4996 56.8887V60.6813H77.0996V56.8887H76.4996ZM76.7996 60.3813H73.007V60.9813H76.7996V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-578-inside-288_98_28446)"
                          />
                          <mask id="path-580-inside-289_98_28446" fill="white">
                            <path d="M8.5332 60.6816H12.3258V64.4742H8.5332V60.6816Z" />
                          </mask>
                          <path
                            d="M12.3258 64.4742V64.7742H12.6258V64.4742H12.3258ZM12.0258 60.6816V64.4742H12.6258V60.6816H12.0258ZM12.3258 64.1742H8.5332V64.7742H12.3258V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-580-inside-289_98_28446)"
                          />
                          <mask id="path-582-inside-290_98_28446" fill="white">
                            <path d="M12.3252 60.6816H16.1178V64.4742H12.3252V60.6816Z" />
                          </mask>
                          <path
                            d="M12.3252 60.6816H16.1178V64.4742H12.3252V60.6816Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M16.1178 64.4742V64.7742H16.4178V64.4742H16.1178ZM15.8178 60.6816V64.4742H16.4178V60.6816H15.8178ZM16.1178 64.1742H12.3252V64.7742H16.1178V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-582-inside-290_98_28446)"
                          />
                          <mask id="path-584-inside-291_98_28446" fill="white">
                            <path d="M16.118 60.6816H19.9106V64.4742H16.118V60.6816Z" />
                          </mask>
                          <path
                            d="M19.9106 64.4742V64.7742H20.2106V64.4742H19.9106ZM19.6106 60.6816V64.4742H20.2106V60.6816H19.6106ZM19.9106 64.1742H16.118V64.7742H19.9106V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-584-inside-291_98_28446)"
                          />
                          <mask id="path-586-inside-292_98_28446" fill="white">
                            <path d="M19.9111 60.6816H23.7037V64.4742H19.9111V60.6816Z" />
                          </mask>
                          <path
                            d="M23.7037 64.4742V64.7742H24.0037V64.4742H23.7037ZM23.4037 60.6816V64.4742H24.0037V60.6816H23.4037ZM23.7037 64.1742H19.9111V64.7742H23.7037V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-586-inside-292_98_28446)"
                          />
                          <mask id="path-588-inside-293_98_28446" fill="white">
                            <path d="M23.7032 60.6816H27.4958V64.4742H23.7032V60.6816Z" />
                          </mask>
                          <path
                            d="M27.4958 64.4742V64.7742H27.7958V64.4742H27.4958ZM27.1958 60.6816V64.4742H27.7958V60.6816H27.1958ZM27.4958 64.1742H23.7032V64.7742H27.4958V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-588-inside-293_98_28446)"
                          />
                          <mask id="path-590-inside-294_98_28446" fill="white">
                            <path d="M27.4961 60.6816H31.2887V64.4742H27.4961V60.6816Z" />
                          </mask>
                          <path
                            d="M31.2887 64.4742V64.7742H31.5887V64.4742H31.2887ZM30.9887 60.6816V64.4742H31.5887V60.6816H30.9887ZM31.2887 64.1742H27.4961V64.7742H31.2887V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-590-inside-294_98_28446)"
                          />
                          <mask id="path-592-inside-295_98_28446" fill="white">
                            <path d="M31.2881 60.6816H35.0807V64.4742H31.2881V60.6816Z" />
                          </mask>
                          <path
                            d="M35.0807 64.4742V64.7742H35.3807V64.4742H35.0807ZM34.7807 60.6816V64.4742H35.3807V60.6816H34.7807ZM35.0807 64.1742H31.2881V64.7742H35.0807V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-592-inside-295_98_28446)"
                          />
                          <mask id="path-594-inside-296_98_28446" fill="white">
                            <path d="M35.0811 60.6816H38.8736V64.4742H35.0811V60.6816Z" />
                          </mask>
                          <path
                            d="M38.8736 64.4742V64.7742H39.1736V64.4742H38.8736ZM38.5736 60.6816V64.4742H39.1736V60.6816H38.5736ZM38.8736 64.1742H35.0811V64.7742H38.8736V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-594-inside-296_98_28446)"
                          />
                          <mask id="path-596-inside-297_98_28446" fill="white">
                            <path d="M38.874 60.6816H42.6666V64.4742H38.874V60.6816Z" />
                          </mask>
                          <path
                            d="M42.6666 64.4742V64.7742H42.9666V64.4742H42.6666ZM42.3666 60.6816V64.4742H42.9666V60.6816H42.3666ZM42.6666 64.1742H38.874V64.7742H42.6666V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-596-inside-297_98_28446)"
                          />
                          <mask id="path-598-inside-298_98_28446" fill="white">
                            <path d="M42.6663 60.6816H46.4589V64.4742H42.6663V60.6816Z" />
                          </mask>
                          <path
                            d="M46.4589 64.4742V64.7742H46.7589V64.4742H46.4589ZM46.1589 60.6816V64.4742H46.7589V60.6816H46.1589ZM46.4589 64.1742H42.6663V64.7742H46.4589V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-598-inside-298_98_28446)"
                          />
                          <mask id="path-600-inside-299_98_28446" fill="white">
                            <path d="M46.4587 60.6816H50.2513V64.4742H46.4587V60.6816Z" />
                          </mask>
                          <path
                            d="M50.2513 64.4742V64.7742H50.5513V64.4742H50.2513ZM49.9513 60.6816V64.4742H50.5513V60.6816H49.9513ZM50.2513 64.1742H46.4587V64.7742H50.2513V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-600-inside-299_98_28446)"
                          />
                          <mask id="path-602-inside-300_98_28446" fill="white">
                            <path d="M50.251 60.6816H54.0436V64.4742H50.251V60.6816Z" />
                          </mask>
                          <path
                            d="M54.0436 64.4742V64.7742H54.3436V64.4742H54.0436ZM53.7436 60.6816V64.4742H54.3436V60.6816H53.7436ZM54.0436 64.1742H50.251V64.7742H54.0436V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-602-inside-300_98_28446)"
                          />
                          <mask id="path-604-inside-301_98_28446" fill="white">
                            <path d="M54.0439 60.6816H57.8365V64.4742H54.0439V60.6816Z" />
                          </mask>
                          <path
                            d="M57.8365 64.4742V64.7742H58.1365V64.4742H57.8365ZM57.5365 60.6816V64.4742H58.1365V60.6816H57.5365ZM57.8365 64.1742H54.0439V64.7742H57.8365V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-604-inside-301_98_28446)"
                          />
                          <mask id="path-606-inside-302_98_28446" fill="white">
                            <path d="M57.8369 60.6816H61.6295V64.4742H57.8369V60.6816Z" />
                          </mask>
                          <path
                            d="M61.6295 64.4742V64.7742H61.9295V64.4742H61.6295ZM61.3295 60.6816V64.4742H61.9295V60.6816H61.3295ZM61.6295 64.1742H57.8369V64.7742H61.6295V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-606-inside-302_98_28446)"
                          />
                          <mask id="path-608-inside-303_98_28446" fill="white">
                            <path d="M61.6289 60.6816H65.4215V64.4742H61.6289V60.6816Z" />
                          </mask>
                          <path
                            d="M65.4215 64.4742V64.7742H65.7215V64.4742H65.4215ZM65.1215 60.6816V64.4742H65.7215V60.6816H65.1215ZM65.4215 64.1742H61.6289V64.7742H65.4215V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-608-inside-303_98_28446)"
                          />
                          <mask id="path-610-inside-304_98_28446" fill="white">
                            <path d="M65.4219 60.6816H69.2145V64.4742H65.4219V60.6816Z" />
                          </mask>
                          <path
                            d="M69.2145 64.4742V64.7742H69.5145V64.4742H69.2145ZM68.9145 60.6816V64.4742H69.5145V60.6816H68.9145ZM69.2145 64.1742H65.4219V64.7742H69.2145V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-610-inside-304_98_28446)"
                          />
                          <mask id="path-612-inside-305_98_28446" fill="white">
                            <path d="M69.2148 60.6816H73.0074V64.4742H69.2148V60.6816Z" />
                          </mask>
                          <path
                            d="M69.2148 60.6816H73.0074V64.4742H69.2148V60.6816Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M73.0074 64.4742V64.7742H73.3074V64.4742H73.0074ZM72.7074 60.6816V64.4742H73.3074V60.6816H72.7074ZM73.0074 64.1742H69.2148V64.7742H73.0074V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-612-inside-305_98_28446)"
                          />
                          <mask id="path-614-inside-306_98_28446" fill="white">
                            <path d="M73.007 60.6816H76.7996V64.4742H73.007V60.6816Z" />
                          </mask>
                          <path
                            d="M76.7996 64.4742V64.7742H77.0996V64.4742H76.7996ZM76.4996 60.6816V64.4742H77.0996V60.6816H76.4996ZM76.7996 64.1742H73.007V64.7742H76.7996V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-614-inside-306_98_28446)"
                          />
                        </g>
                        <rect
                          x="-13.7227"
                          y="0.5"
                          width="112.778"
                          height="82.437"
                          stroke="#D0D5DD"
                        />
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_98_28446"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="trangray(42.75 32) rotate(92.2605) scale(30.4237)"
                        >
                          <stop stop-color="#D9D9D9" />
                          <stop
                            offset="1"
                            stop-color="#D9D9D9"
                            stop-opacity="0"
                          />
                        </radialGradient>
                        <clipPath id="clip0_98_28446">
                          <rect
                            x="-14.2227"
                            width="113.778"
                            height="83.437"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="z-10">
                      <svg
                        className="shadow-sm rounded-lg relative z-10"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="10" fill="white" />
                        <rect
                          width="40"
                          height="40"
                          rx="10"
                          fill="url(#paint0_linear_98_28443)"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="39"
                          height="39"
                          rx="9.5"
                          stroke="url(#paint1_linear_98_28443)"
                          stroke-opacity="0.3"
                        />
                        <path
                          d="M25.8778 28.0903C24.1693 29.3316 22.1117 30.0001 19.9999 30.0001C17.8881 30.0001 15.8305 29.3316 14.1221 28.0903M24.3836 11.0122C26.2817 11.9379 27.838 13.4408 28.8294 15.3054C29.8208 17.17 30.1965 19.3006 29.9026 21.3919M10.0973 21.3918C9.80343 19.3005 10.1791 17.1699 11.1705 15.3053C12.162 13.4407 13.7182 11.9378 15.6163 11.0121M25.4999 20.0001C25.4999 23.0377 23.0375 25.5001 19.9999 25.5001C16.9623 25.5001 14.4999 23.0377 14.4999 20.0001C14.4999 16.9626 16.9623 14.5001 19.9999 14.5001C23.0375 14.5001 25.4999 16.9626 25.4999 20.0001Z"
                          stroke="#D0D5DD"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_98_28443"
                            x1="20"
                            y1="0"
                            x2="20"
                            y2="40"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#F6F6F6" />
                            <stop
                              offset="0.385412"
                              stop-color="#F2F4F7"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_98_28443"
                            x1="20"
                            y1="0"
                            x2="20"
                            y2="40"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0468566" stop-color="#98A2B3" />
                            <stop
                              offset="1"
                              stop-color="#98A2B3"
                              stop-opacity="0.3"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 w-full pr-4">
                    <h3 className="font-medium text-gray-900">
                      No data available yet
                    </h3>
                    <p className="text-gray-600">
                      Currently, there are no data points to display in your
                      Allocation chart. Once you start allocating funds to your
                      portfolio, their balances and distribution will appear
                      here.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent className="w-full " value="networks">
                <div className="w-full flex gap-2  text-sm items-center bg-gray-50 py-1 px-2 border border-gray-100 rounded-2xl overflow-hidden">
                  <div className="h-20 w-20 items-center relative justify-center flex ">
                    <svg
                      className="absolute w-full h-full"
                      width="86"
                      height="64"
                      viewBox="0 0 86 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_98_28446"
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="0"
                        width="65"
                        height="64"
                      >
                        <rect
                          x="10.75"
                          width="64"
                          height="64"
                          rx="32"
                          fill="url(#paint0_radial_98_28446)"
                        />
                      </mask>
                      <g mask="url(#mask0_98_28446)">
                        <g clip-path="url(#clip0_98_28446)">
                          <mask id="path-4-inside-1_98_28446" fill="white">
                            <path d="M8.5332 0H12.3258V3.79259H8.5332V0Z" />
                          </mask>
                          <path
                            d="M12.3258 3.79259V4.09259H12.6258V3.79259H12.3258ZM12.0258 0V3.79259H12.6258V0H12.0258ZM12.3258 3.49259H8.5332V4.09259H12.3258V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-4-inside-1_98_28446)"
                          />
                          <mask id="path-6-inside-2_98_28446" fill="white">
                            <path d="M12.3252 0H16.1178V3.79259H12.3252V0Z" />
                          </mask>
                          <path
                            d="M16.1178 3.79259V4.09259H16.4178V3.79259H16.1178ZM15.8178 0V3.79259H16.4178V0H15.8178ZM16.1178 3.49259H12.3252V4.09259H16.1178V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-6-inside-2_98_28446)"
                          />
                          <mask id="path-8-inside-3_98_28446" fill="white">
                            <path d="M16.118 0H19.9106V3.79259H16.118V0Z" />
                          </mask>
                          <path
                            d="M19.9106 3.79259V4.09259H20.2106V3.79259H19.9106ZM19.6106 0V3.79259H20.2106V0H19.6106ZM19.9106 3.49259H16.118V4.09259H19.9106V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-8-inside-3_98_28446)"
                          />
                          <mask id="path-10-inside-4_98_28446" fill="white">
                            <path d="M19.9111 0H23.7037V3.79259H19.9111V0Z" />
                          </mask>
                          <path
                            d="M23.7037 3.79259V4.09259H24.0037V3.79259H23.7037ZM23.4037 0V3.79259H24.0037V0H23.4037ZM23.7037 3.49259H19.9111V4.09259H23.7037V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-10-inside-4_98_28446)"
                          />
                          <mask id="path-12-inside-5_98_28446" fill="white">
                            <path d="M23.7032 0H27.4958V3.79259H23.7032V0Z" />
                          </mask>
                          <path
                            d="M27.4958 3.79259V4.09259H27.7958V3.79259H27.4958ZM27.1958 0V3.79259H27.7958V0H27.1958ZM27.4958 3.49259H23.7032V4.09259H27.4958V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-12-inside-5_98_28446)"
                          />
                          <mask id="path-14-inside-6_98_28446" fill="white">
                            <path d="M27.4958 0H31.2884V3.79259H27.4958V0Z" />
                          </mask>
                          <path
                            d="M31.2884 3.79259V4.09259H31.5884V3.79259H31.2884ZM30.9884 0V3.79259H31.5884V0H30.9884ZM31.2884 3.49259H27.4958V4.09259H31.2884V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-14-inside-6_98_28446)"
                          />
                          <mask id="path-16-inside-7_98_28446" fill="white">
                            <path d="M31.2881 0H35.0807V3.79259H31.2881V0Z" />
                          </mask>
                          <path
                            d="M35.0807 3.79259V4.09259H35.3807V3.79259H35.0807ZM34.7807 0V3.79259H35.3807V0H34.7807ZM35.0807 3.49259H31.2881V4.09259H35.0807V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-16-inside-7_98_28446)"
                          />
                          <mask id="path-18-inside-8_98_28446" fill="white">
                            <path d="M35.0811 0H38.8736V3.79259H35.0811V0Z" />
                          </mask>
                          <path
                            d="M38.8736 3.79259V4.09259H39.1736V3.79259H38.8736ZM38.5736 0V3.79259H39.1736V0H38.5736ZM38.8736 3.49259H35.0811V4.09259H38.8736V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-18-inside-8_98_28446)"
                          />
                          <mask id="path-20-inside-9_98_28446" fill="white">
                            <path d="M38.874 0H42.6666V3.79259H38.874V0Z" />
                          </mask>
                          <path
                            d="M42.6666 3.79259V4.09259H42.9666V3.79259H42.6666ZM42.3666 0V3.79259H42.9666V0H42.3666ZM42.6666 3.49259H38.874V4.09259H42.6666V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-20-inside-9_98_28446)"
                          />
                          <mask id="path-22-inside-10_98_28446" fill="white">
                            <path d="M42.6663 0H46.4589V3.79259H42.6663V0Z" />
                          </mask>
                          <path
                            d="M46.4589 3.79259V4.09259H46.7589V3.79259H46.4589ZM46.1589 0V3.79259H46.7589V0H46.1589ZM46.4589 3.49259H42.6663V4.09259H46.4589V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-22-inside-10_98_28446)"
                          />
                          <mask id="path-24-inside-11_98_28446" fill="white">
                            <path d="M46.4589 0H50.2515V3.79259H46.4589V0Z" />
                          </mask>
                          <path
                            d="M50.2515 3.79259V4.09259H50.5515V3.79259H50.2515ZM49.9515 0V3.79259H50.5515V0H49.9515ZM50.2515 3.49259H46.4589V4.09259H50.2515V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-24-inside-11_98_28446)"
                          />
                          <mask id="path-26-inside-12_98_28446" fill="white">
                            <path d="M50.251 0H54.0436V3.79259H50.251V0Z" />
                          </mask>
                          <path
                            d="M54.0436 3.79259V4.09259H54.3436V3.79259H54.0436ZM53.7436 0V3.79259H54.3436V0H53.7436ZM54.0436 3.49259H50.251V4.09259H54.0436V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-26-inside-12_98_28446)"
                          />
                          <mask id="path-28-inside-13_98_28446" fill="white">
                            <path d="M54.0441 0H57.8367V3.79259H54.0441V0Z" />
                          </mask>
                          <path
                            d="M57.8367 3.79259V4.09259H58.1367V3.79259H57.8367ZM57.5367 0V3.79259H58.1367V0H57.5367ZM57.8367 3.49259H54.0441V4.09259H57.8367V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-28-inside-13_98_28446)"
                          />
                          <mask id="path-30-inside-14_98_28446" fill="white">
                            <path d="M57.8369 0H61.6295V3.79259H57.8369V0Z" />
                          </mask>
                          <path
                            d="M61.6295 3.79259V4.09259H61.9295V3.79259H61.6295ZM61.3295 0V3.79259H61.9295V0H61.3295ZM61.6295 3.49259H57.8369V4.09259H61.6295V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-30-inside-14_98_28446)"
                          />
                          <mask id="path-32-inside-15_98_28446" fill="white">
                            <path d="M61.6289 0H65.4215V3.79259H61.6289V0Z" />
                          </mask>
                          <path
                            d="M65.4215 3.79259V4.09259H65.7215V3.79259H65.4215ZM65.1215 0V3.79259H65.7215V0H65.1215ZM65.4215 3.49259H61.6289V4.09259H65.4215V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-32-inside-15_98_28446)"
                          />
                          <mask id="path-34-inside-16_98_28446" fill="white">
                            <path d="M65.4218 0H69.2143V3.79259H65.4218V0Z" />
                          </mask>
                          <path
                            d="M69.2143 3.79259V4.09259H69.5143V3.79259H69.2143ZM68.9143 0V3.79259H69.5143V0H68.9143ZM69.2143 3.49259H65.4218V4.09259H69.2143V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-34-inside-16_98_28446)"
                          />
                          <mask id="path-36-inside-17_98_28446" fill="white">
                            <path d="M69.2148 0H73.0074V3.79259H69.2148V0Z" />
                          </mask>
                          <path
                            d="M73.0074 3.79259V4.09259H73.3074V3.79259H73.0074ZM72.7074 0V3.79259H73.3074V0H72.7074ZM73.0074 3.49259H69.2148V4.09259H73.0074V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-36-inside-17_98_28446)"
                          />
                          <mask id="path-38-inside-18_98_28446" fill="white">
                            <path d="M73.007 0H76.7996V3.79259H73.007V0Z" />
                          </mask>
                          <path
                            d="M76.7996 3.79259V4.09259H77.0996V3.79259H76.7996ZM76.4996 0V3.79259H77.0996V0H76.4996ZM76.7996 3.49259H73.007V4.09259H76.7996V3.49259Z"
                            fill="#D0D5DD"
                            mask="url(#path-38-inside-18_98_28446)"
                          />
                          <mask id="path-40-inside-19_98_28446" fill="white">
                            <path d="M8.5332 3.79297H12.3258V7.58556H8.5332V3.79297Z" />
                          </mask>
                          <path
                            d="M12.3258 7.58556V7.88556H12.6258V7.58556H12.3258ZM12.0258 3.79297V7.58556H12.6258V3.79297H12.0258ZM12.3258 7.28556H8.5332V7.88556H12.3258V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-40-inside-19_98_28446)"
                          />
                          <mask id="path-42-inside-20_98_28446" fill="white">
                            <path d="M12.3252 3.79297H16.1178V7.58556H12.3252V3.79297Z" />
                          </mask>
                          <path
                            d="M16.1178 7.58556V7.88556H16.4178V7.58556H16.1178ZM15.8178 3.79297V7.58556H16.4178V3.79297H15.8178ZM16.1178 7.28556H12.3252V7.88556H16.1178V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-42-inside-20_98_28446)"
                          />
                          <mask id="path-44-inside-21_98_28446" fill="white">
                            <path d="M16.118 3.79297H19.9106V7.58556H16.118V3.79297Z" />
                          </mask>
                          <path
                            d="M19.9106 7.58556V7.88556H20.2106V7.58556H19.9106ZM19.6106 3.79297V7.58556H20.2106V3.79297H19.6106ZM19.9106 7.28556H16.118V7.88556H19.9106V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-44-inside-21_98_28446)"
                          />
                          <mask id="path-46-inside-22_98_28446" fill="white">
                            <path d="M19.9111 3.79297H23.7037V7.58556H19.9111V3.79297Z" />
                          </mask>
                          <path
                            d="M19.9111 3.79297H23.7037V7.58556H19.9111V3.79297Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M23.7037 7.58556V7.88556H24.0037V7.58556H23.7037ZM23.4037 3.79297V7.58556H24.0037V3.79297H23.4037ZM23.7037 7.28556H19.9111V7.88556H23.7037V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-46-inside-22_98_28446)"
                          />
                          <mask id="path-48-inside-23_98_28446" fill="white">
                            <path d="M23.7032 3.79297H27.4958V7.58556H23.7032V3.79297Z" />
                          </mask>
                          <path
                            d="M27.4958 7.58556V7.88556H27.7958V7.58556H27.4958ZM27.1958 3.79297V7.58556H27.7958V3.79297H27.1958ZM27.4958 7.28556H23.7032V7.88556H27.4958V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-48-inside-23_98_28446)"
                          />
                          <mask id="path-50-inside-24_98_28446" fill="white">
                            <path d="M27.4961 3.79297H31.2887V7.58556H27.4961V3.79297Z" />
                          </mask>
                          <path
                            d="M31.2887 7.58556V7.88556H31.5887V7.58556H31.2887ZM30.9887 3.79297V7.58556H31.5887V3.79297H30.9887ZM31.2887 7.28556H27.4961V7.88556H31.2887V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-50-inside-24_98_28446)"
                          />
                          <mask id="path-52-inside-25_98_28446" fill="white">
                            <path d="M31.2881 3.79297H35.0807V7.58556H31.2881V3.79297Z" />
                          </mask>
                          <path
                            d="M35.0807 7.58556V7.88556H35.3807V7.58556H35.0807ZM34.7807 3.79297V7.58556H35.3807V3.79297H34.7807ZM35.0807 7.28556H31.2881V7.88556H35.0807V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-52-inside-25_98_28446)"
                          />
                          <mask id="path-54-inside-26_98_28446" fill="white">
                            <path d="M35.0811 3.79297H38.8736V7.58556H35.0811V3.79297Z" />
                          </mask>
                          <path
                            d="M38.8736 7.58556V7.88556H39.1736V7.58556H38.8736ZM38.5736 3.79297V7.58556H39.1736V3.79297H38.5736ZM38.8736 7.28556H35.0811V7.88556H38.8736V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-54-inside-26_98_28446)"
                          />
                          <mask id="path-56-inside-27_98_28446" fill="white">
                            <path d="M38.874 3.79297H42.6666V7.58556H38.874V3.79297Z" />
                          </mask>
                          <path
                            d="M42.6666 7.58556V7.88556H42.9666V7.58556H42.6666ZM42.3666 3.79297V7.58556H42.9666V3.79297H42.3666ZM42.6666 7.28556H38.874V7.88556H42.6666V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-56-inside-27_98_28446)"
                          />
                          <mask id="path-58-inside-28_98_28446" fill="white">
                            <path d="M42.6663 3.79297H46.4589V7.58556H42.6663V3.79297Z" />
                          </mask>
                          <path
                            d="M46.4589 7.58556V7.88556H46.7589V7.58556H46.4589ZM46.1589 3.79297V7.58556H46.7589V3.79297H46.1589ZM46.4589 7.28556H42.6663V7.88556H46.4589V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-58-inside-28_98_28446)"
                          />
                          <mask id="path-60-inside-29_98_28446" fill="white">
                            <path d="M46.4587 3.79297H50.2513V7.58556H46.4587V3.79297Z" />
                          </mask>
                          <path
                            d="M50.2513 7.58556V7.88556H50.5513V7.58556H50.2513ZM49.9513 3.79297V7.58556H50.5513V3.79297H49.9513ZM50.2513 7.28556H46.4587V7.88556H50.2513V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-60-inside-29_98_28446)"
                          />
                          <mask id="path-62-inside-30_98_28446" fill="white">
                            <path d="M50.251 3.79297H54.0436V7.58556H50.251V3.79297Z" />
                          </mask>
                          <path
                            d="M54.0436 7.58556V7.88556H54.3436V7.58556H54.0436ZM53.7436 3.79297V7.58556H54.3436V3.79297H53.7436ZM54.0436 7.28556H50.251V7.88556H54.0436V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-62-inside-30_98_28446)"
                          />
                          <mask id="path-64-inside-31_98_28446" fill="white">
                            <path d="M54.0439 3.79297H57.8365V7.58556H54.0439V3.79297Z" />
                          </mask>
                          <path
                            d="M57.8365 7.58556V7.88556H58.1365V7.58556H57.8365ZM57.5365 3.79297V7.58556H58.1365V3.79297H57.5365ZM57.8365 7.28556H54.0439V7.88556H57.8365V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-64-inside-31_98_28446)"
                          />
                          <mask id="path-66-inside-32_98_28446" fill="white">
                            <path d="M57.8369 3.79297H61.6295V7.58556H57.8369V3.79297Z" />
                          </mask>
                          <path
                            d="M61.6295 7.58556V7.88556H61.9295V7.58556H61.6295ZM61.3295 3.79297V7.58556H61.9295V3.79297H61.3295ZM61.6295 7.28556H57.8369V7.88556H61.6295V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-66-inside-32_98_28446)"
                          />
                          <mask id="path-68-inside-33_98_28446" fill="white">
                            <path d="M61.6289 3.79297H65.4215V7.58556H61.6289V3.79297Z" />
                          </mask>
                          <path
                            d="M61.6289 3.79297H65.4215V7.58556H61.6289V3.79297Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M65.4215 7.58556V7.88556H65.7215V7.58556H65.4215ZM65.1215 3.79297V7.58556H65.7215V3.79297H65.1215ZM65.4215 7.28556H61.6289V7.88556H65.4215V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-68-inside-33_98_28446)"
                          />
                          <mask id="path-70-inside-34_98_28446" fill="white">
                            <path d="M65.4219 3.79297H69.2145V7.58556H65.4219V3.79297Z" />
                          </mask>
                          <path
                            d="M69.2145 7.58556V7.88556H69.5145V7.58556H69.2145ZM68.9145 3.79297V7.58556H69.5145V3.79297H68.9145ZM69.2145 7.28556H65.4219V7.88556H69.2145V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-70-inside-34_98_28446)"
                          />
                          <mask id="path-72-inside-35_98_28446" fill="white">
                            <path d="M69.2148 3.79297H73.0074V7.58556H69.2148V3.79297Z" />
                          </mask>
                          <path
                            d="M73.0074 7.58556V7.88556H73.3074V7.58556H73.0074ZM72.7074 3.79297V7.58556H73.3074V3.79297H72.7074ZM73.0074 7.28556H69.2148V7.88556H73.0074V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-72-inside-35_98_28446)"
                          />
                          <mask id="path-74-inside-36_98_28446" fill="white">
                            <path d="M73.007 3.79297H76.7996V7.58556H73.007V3.79297Z" />
                          </mask>
                          <path
                            d="M76.7996 7.58556V7.88556H77.0996V7.58556H76.7996ZM76.4996 3.79297V7.58556H77.0996V3.79297H76.4996ZM76.7996 7.28556H73.007V7.88556H76.7996V7.28556Z"
                            fill="#D0D5DD"
                            mask="url(#path-74-inside-36_98_28446)"
                          />
                          <mask id="path-76-inside-37_98_28446" fill="white">
                            <path d="M8.5332 7.58496H12.3258V11.3776H8.5332V7.58496Z" />
                          </mask>
                          <path
                            d="M12.3258 11.3776V11.6776H12.6258V11.3776H12.3258ZM12.0258 7.58496V11.3776H12.6258V7.58496H12.0258ZM12.3258 11.0776H8.5332V11.6776H12.3258V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-76-inside-37_98_28446)"
                          />
                          <mask id="path-78-inside-38_98_28446" fill="white">
                            <path d="M12.3252 7.58496H16.1178V11.3776H12.3252V7.58496Z" />
                          </mask>
                          <path
                            d="M16.1178 11.3776V11.6776H16.4178V11.3776H16.1178ZM15.8178 7.58496V11.3776H16.4178V7.58496H15.8178ZM16.1178 11.0776H12.3252V11.6776H16.1178V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-78-inside-38_98_28446)"
                          />
                          <mask id="path-80-inside-39_98_28446" fill="white">
                            <path d="M16.118 7.58496H19.9106V11.3776H16.118V7.58496Z" />
                          </mask>
                          <path
                            d="M19.9106 11.3776V11.6776H20.2106V11.3776H19.9106ZM19.6106 7.58496V11.3776H20.2106V7.58496H19.6106ZM19.9106 11.0776H16.118V11.6776H19.9106V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-80-inside-39_98_28446)"
                          />
                          <mask id="path-82-inside-40_98_28446" fill="white">
                            <path d="M19.9111 7.58496H23.7037V11.3776H19.9111V7.58496Z" />
                          </mask>
                          <path
                            d="M23.7037 11.3776V11.6776H24.0037V11.3776H23.7037ZM23.4037 7.58496V11.3776H24.0037V7.58496H23.4037ZM23.7037 11.0776H19.9111V11.6776H23.7037V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-82-inside-40_98_28446)"
                          />
                          <mask id="path-84-inside-41_98_28446" fill="white">
                            <path d="M23.7032 7.58496H27.4958V11.3776H23.7032V7.58496Z" />
                          </mask>
                          <path
                            d="M27.4958 11.3776V11.6776H27.7958V11.3776H27.4958ZM27.1958 7.58496V11.3776H27.7958V7.58496H27.1958ZM27.4958 11.0776H23.7032V11.6776H27.4958V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-84-inside-41_98_28446)"
                          />
                          <mask id="path-86-inside-42_98_28446" fill="white">
                            <path d="M27.4961 7.58496H31.2887V11.3776H27.4961V7.58496Z" />
                          </mask>
                          <path
                            d="M27.4961 7.58496H31.2887V11.3776H27.4961V7.58496Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M31.2887 11.3776V11.6776H31.5887V11.3776H31.2887ZM30.9887 7.58496V11.3776H31.5887V7.58496H30.9887ZM31.2887 11.0776H27.4961V11.6776H31.2887V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-86-inside-42_98_28446)"
                          />
                          <mask id="path-88-inside-43_98_28446" fill="white">
                            <path d="M31.2881 7.58496H35.0807V11.3776H31.2881V7.58496Z" />
                          </mask>
                          <path
                            d="M35.0807 11.3776V11.6776H35.3807V11.3776H35.0807ZM34.7807 7.58496V11.3776H35.3807V7.58496H34.7807ZM35.0807 11.0776H31.2881V11.6776H35.0807V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-88-inside-43_98_28446)"
                          />
                          <mask id="path-90-inside-44_98_28446" fill="white">
                            <path d="M35.0811 7.58496H38.8736V11.3776H35.0811V7.58496Z" />
                          </mask>
                          <path
                            d="M38.8736 11.3776V11.6776H39.1736V11.3776H38.8736ZM38.5736 7.58496V11.3776H39.1736V7.58496H38.5736ZM38.8736 11.0776H35.0811V11.6776H38.8736V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-90-inside-44_98_28446)"
                          />
                          <mask id="path-92-inside-45_98_28446" fill="white">
                            <path d="M38.874 7.58496H42.6666V11.3776H38.874V7.58496Z" />
                          </mask>
                          <path
                            d="M42.6666 11.3776V11.6776H42.9666V11.3776H42.6666ZM42.3666 7.58496V11.3776H42.9666V7.58496H42.3666ZM42.6666 11.0776H38.874V11.6776H42.6666V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-92-inside-45_98_28446)"
                          />
                          <mask id="path-94-inside-46_98_28446" fill="white">
                            <path d="M42.6663 7.58496H46.4589V11.3776H42.6663V7.58496Z" />
                          </mask>
                          <path
                            d="M46.4589 11.3776V11.6776H46.7589V11.3776H46.4589ZM46.1589 7.58496V11.3776H46.7589V7.58496H46.1589ZM46.4589 11.0776H42.6663V11.6776H46.4589V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-94-inside-46_98_28446)"
                          />
                          <mask id="path-96-inside-47_98_28446" fill="white">
                            <path d="M46.4587 7.58496H50.2513V11.3776H46.4587V7.58496Z" />
                          </mask>
                          <path
                            d="M46.4587 7.58496H50.2513V11.3776H46.4587V7.58496Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M50.2513 11.3776V11.6776H50.5513V11.3776H50.2513ZM49.9513 7.58496V11.3776H50.5513V7.58496H49.9513ZM50.2513 11.0776H46.4587V11.6776H50.2513V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-96-inside-47_98_28446)"
                          />
                          <mask id="path-98-inside-48_98_28446" fill="white">
                            <path d="M50.251 7.58496H54.0436V11.3776H50.251V7.58496Z" />
                          </mask>
                          <path
                            d="M54.0436 11.3776V11.6776H54.3436V11.3776H54.0436ZM53.7436 7.58496V11.3776H54.3436V7.58496H53.7436ZM54.0436 11.0776H50.251V11.6776H54.0436V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-98-inside-48_98_28446)"
                          />
                          <mask id="path-100-inside-49_98_28446" fill="white">
                            <path d="M54.0439 7.58496H57.8365V11.3776H54.0439V7.58496Z" />
                          </mask>
                          <path
                            d="M57.8365 11.3776V11.6776H58.1365V11.3776H57.8365ZM57.5365 7.58496V11.3776H58.1365V7.58496H57.5365ZM57.8365 11.0776H54.0439V11.6776H57.8365V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-100-inside-49_98_28446)"
                          />
                          <mask id="path-102-inside-50_98_28446" fill="white">
                            <path d="M57.8369 7.58496H61.6295V11.3776H57.8369V7.58496Z" />
                          </mask>
                          <path
                            d="M61.6295 11.3776V11.6776H61.9295V11.3776H61.6295ZM61.3295 7.58496V11.3776H61.9295V7.58496H61.3295ZM61.6295 11.0776H57.8369V11.6776H61.6295V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-102-inside-50_98_28446)"
                          />
                          <mask id="path-104-inside-51_98_28446" fill="white">
                            <path d="M61.6289 7.58496H65.4215V11.3776H61.6289V7.58496Z" />
                          </mask>
                          <path
                            d="M65.4215 11.3776V11.6776H65.7215V11.3776H65.4215ZM65.1215 7.58496V11.3776H65.7215V7.58496H65.1215ZM65.4215 11.0776H61.6289V11.6776H65.4215V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-104-inside-51_98_28446)"
                          />
                          <mask id="path-106-inside-52_98_28446" fill="white">
                            <path d="M65.4219 7.58496H69.2145V11.3776H65.4219V7.58496Z" />
                          </mask>
                          <path
                            d="M69.2145 11.3776V11.6776H69.5145V11.3776H69.2145ZM68.9145 7.58496V11.3776H69.5145V7.58496H68.9145ZM69.2145 11.0776H65.4219V11.6776H69.2145V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-106-inside-52_98_28446)"
                          />
                          <mask id="path-108-inside-53_98_28446" fill="white">
                            <path d="M69.2148 7.58496H73.0074V11.3776H69.2148V7.58496Z" />
                          </mask>
                          <path
                            d="M73.0074 11.3776V11.6776H73.3074V11.3776H73.0074ZM72.7074 7.58496V11.3776H73.3074V7.58496H72.7074ZM73.0074 11.0776H69.2148V11.6776H73.0074V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-108-inside-53_98_28446)"
                          />
                          <mask id="path-110-inside-54_98_28446" fill="white">
                            <path d="M73.007 7.58496H76.7996V11.3776H73.007V7.58496Z" />
                          </mask>
                          <path
                            d="M76.7996 11.3776V11.6776H77.0996V11.3776H76.7996ZM76.4996 7.58496V11.3776H77.0996V7.58496H76.4996ZM76.7996 11.0776H73.007V11.6776H76.7996V11.0776Z"
                            fill="#D0D5DD"
                            mask="url(#path-110-inside-54_98_28446)"
                          />
                          <mask id="path-112-inside-55_98_28446" fill="white">
                            <path d="M8.5332 11.3779H12.3258V15.1705H8.5332V11.3779Z" />
                          </mask>
                          <path
                            d="M8.5332 11.3779H12.3258V15.1705H8.5332V11.3779Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M12.3258 15.1705V15.4705H12.6258V15.1705H12.3258ZM12.0258 11.3779V15.1705H12.6258V11.3779H12.0258ZM12.3258 14.8705H8.5332V15.4705H12.3258V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-112-inside-55_98_28446)"
                          />
                          <mask id="path-114-inside-56_98_28446" fill="white">
                            <path d="M12.3252 11.3779H16.1178V15.1705H12.3252V11.3779Z" />
                          </mask>
                          <path
                            d="M16.1178 15.1705V15.4705H16.4178V15.1705H16.1178ZM15.8178 11.3779V15.1705H16.4178V11.3779H15.8178ZM16.1178 14.8705H12.3252V15.4705H16.1178V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-114-inside-56_98_28446)"
                          />
                          <mask id="path-116-inside-57_98_28446" fill="white">
                            <path d="M16.118 11.3779H19.9106V15.1705H16.118V11.3779Z" />
                          </mask>
                          <path
                            d="M19.9106 15.1705V15.4705H20.2106V15.1705H19.9106ZM19.6106 11.3779V15.1705H20.2106V11.3779H19.6106ZM19.9106 14.8705H16.118V15.4705H19.9106V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-116-inside-57_98_28446)"
                          />
                          <mask id="path-118-inside-58_98_28446" fill="white">
                            <path d="M19.9111 11.3779H23.7037V15.1705H19.9111V11.3779Z" />
                          </mask>
                          <path
                            d="M23.7037 15.1705V15.4705H24.0037V15.1705H23.7037ZM23.4037 11.3779V15.1705H24.0037V11.3779H23.4037ZM23.7037 14.8705H19.9111V15.4705H23.7037V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-118-inside-58_98_28446)"
                          />
                          <mask id="path-120-inside-59_98_28446" fill="white">
                            <path d="M23.7032 11.3779H27.4958V15.1705H23.7032V11.3779Z" />
                          </mask>
                          <path
                            d="M27.4958 15.1705V15.4705H27.7958V15.1705H27.4958ZM27.1958 11.3779V15.1705H27.7958V11.3779H27.1958ZM27.4958 14.8705H23.7032V15.4705H27.4958V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-120-inside-59_98_28446)"
                          />
                          <mask id="path-122-inside-60_98_28446" fill="white">
                            <path d="M27.4961 11.3779H31.2887V15.1705H27.4961V11.3779Z" />
                          </mask>
                          <path
                            d="M31.2887 15.1705V15.4705H31.5887V15.1705H31.2887ZM30.9887 11.3779V15.1705H31.5887V11.3779H30.9887ZM31.2887 14.8705H27.4961V15.4705H31.2887V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-122-inside-60_98_28446)"
                          />
                          <mask id="path-124-inside-61_98_28446" fill="white">
                            <path d="M31.2881 11.3779H35.0807V15.1705H31.2881V11.3779Z" />
                          </mask>
                          <path
                            d="M35.0807 15.1705V15.4705H35.3807V15.1705H35.0807ZM34.7807 11.3779V15.1705H35.3807V11.3779H34.7807ZM35.0807 14.8705H31.2881V15.4705H35.0807V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-124-inside-61_98_28446)"
                          />
                          <mask id="path-126-inside-62_98_28446" fill="white">
                            <path d="M35.0811 11.3779H38.8736V15.1705H35.0811V11.3779Z" />
                          </mask>
                          <path
                            d="M38.8736 15.1705V15.4705H39.1736V15.1705H38.8736ZM38.5736 11.3779V15.1705H39.1736V11.3779H38.5736ZM38.8736 14.8705H35.0811V15.4705H38.8736V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-126-inside-62_98_28446)"
                          />
                          <mask id="path-128-inside-63_98_28446" fill="white">
                            <path d="M38.874 11.3779H42.6666V15.1705H38.874V11.3779Z" />
                          </mask>
                          <path
                            d="M42.6666 15.1705V15.4705H42.9666V15.1705H42.6666ZM42.3666 11.3779V15.1705H42.9666V11.3779H42.3666ZM42.6666 14.8705H38.874V15.4705H42.6666V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-128-inside-63_98_28446)"
                          />
                          <mask id="path-130-inside-64_98_28446" fill="white">
                            <path d="M42.6663 11.3779H46.4589V15.1705H42.6663V11.3779Z" />
                          </mask>
                          <path
                            d="M46.4589 15.1705V15.4705H46.7589V15.1705H46.4589ZM46.1589 11.3779V15.1705H46.7589V11.3779H46.1589ZM46.4589 14.8705H42.6663V15.4705H46.4589V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-130-inside-64_98_28446)"
                          />
                          <mask id="path-132-inside-65_98_28446" fill="white">
                            <path d="M46.4587 11.3779H50.2513V15.1705H46.4587V11.3779Z" />
                          </mask>
                          <path
                            d="M50.2513 15.1705V15.4705H50.5513V15.1705H50.2513ZM49.9513 11.3779V15.1705H50.5513V11.3779H49.9513ZM50.2513 14.8705H46.4587V15.4705H50.2513V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-132-inside-65_98_28446)"
                          />
                          <mask id="path-134-inside-66_98_28446" fill="white">
                            <path d="M50.251 11.3779H54.0436V15.1705H50.251V11.3779Z" />
                          </mask>
                          <path
                            d="M54.0436 15.1705V15.4705H54.3436V15.1705H54.0436ZM53.7436 11.3779V15.1705H54.3436V11.3779H53.7436ZM54.0436 14.8705H50.251V15.4705H54.0436V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-134-inside-66_98_28446)"
                          />
                          <mask id="path-136-inside-67_98_28446" fill="white">
                            <path d="M54.0439 11.3779H57.8365V15.1705H54.0439V11.3779Z" />
                          </mask>
                          <path
                            d="M57.8365 15.1705V15.4705H58.1365V15.1705H57.8365ZM57.5365 11.3779V15.1705H58.1365V11.3779H57.5365ZM57.8365 14.8705H54.0439V15.4705H57.8365V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-136-inside-67_98_28446)"
                          />
                          <mask id="path-138-inside-68_98_28446" fill="white">
                            <path d="M57.8369 11.3779H61.6295V15.1705H57.8369V11.3779Z" />
                          </mask>
                          <path
                            d="M61.6295 15.1705V15.4705H61.9295V15.1705H61.6295ZM61.3295 11.3779V15.1705H61.9295V11.3779H61.3295ZM61.6295 14.8705H57.8369V15.4705H61.6295V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-138-inside-68_98_28446)"
                          />
                          <mask id="path-140-inside-69_98_28446" fill="white">
                            <path d="M61.6289 11.3779H65.4215V15.1705H61.6289V11.3779Z" />
                          </mask>
                          <path
                            d="M61.6289 11.3779H65.4215V15.1705H61.6289V11.3779Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M65.4215 15.1705V15.4705H65.7215V15.1705H65.4215ZM65.1215 11.3779V15.1705H65.7215V11.3779H65.1215ZM65.4215 14.8705H61.6289V15.4705H65.4215V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-140-inside-69_98_28446)"
                          />
                          <mask id="path-142-inside-70_98_28446" fill="white">
                            <path d="M65.4219 11.3779H69.2145V15.1705H65.4219V11.3779Z" />
                          </mask>
                          <path
                            d="M69.2145 15.1705V15.4705H69.5145V15.1705H69.2145ZM68.9145 11.3779V15.1705H69.5145V11.3779H68.9145ZM69.2145 14.8705H65.4219V15.4705H69.2145V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-142-inside-70_98_28446)"
                          />
                          <mask id="path-144-inside-71_98_28446" fill="white">
                            <path d="M69.2148 11.3779H73.0074V15.1705H69.2148V11.3779Z" />
                          </mask>
                          <path
                            d="M73.0074 15.1705V15.4705H73.3074V15.1705H73.0074ZM72.7074 11.3779V15.1705H73.3074V11.3779H72.7074ZM73.0074 14.8705H69.2148V15.4705H73.0074V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-144-inside-71_98_28446)"
                          />
                          <mask id="path-146-inside-72_98_28446" fill="white">
                            <path d="M73.007 11.3779H76.7996V15.1705H73.007V11.3779Z" />
                          </mask>
                          <path
                            d="M76.7996 15.1705V15.4705H77.0996V15.1705H76.7996ZM76.4996 11.3779V15.1705H77.0996V11.3779H76.4996ZM76.7996 14.8705H73.007V15.4705H76.7996V14.8705Z"
                            fill="#D0D5DD"
                            mask="url(#path-146-inside-72_98_28446)"
                          />
                          <mask id="path-148-inside-73_98_28446" fill="white">
                            <path d="M8.5332 15.1699H12.3258V18.9625H8.5332V15.1699Z" />
                          </mask>
                          <path
                            d="M12.3258 18.9625V19.2625H12.6258V18.9625H12.3258ZM12.0258 15.1699V18.9625H12.6258V15.1699H12.0258ZM12.3258 18.6625H8.5332V19.2625H12.3258V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-148-inside-73_98_28446)"
                          />
                          <mask id="path-150-inside-74_98_28446" fill="white">
                            <path d="M12.3252 15.1699H16.1178V18.9625H12.3252V15.1699Z" />
                          </mask>
                          <path
                            d="M16.1178 18.9625V19.2625H16.4178V18.9625H16.1178ZM15.8178 15.1699V18.9625H16.4178V15.1699H15.8178ZM16.1178 18.6625H12.3252V19.2625H16.1178V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-150-inside-74_98_28446)"
                          />
                          <mask id="path-152-inside-75_98_28446" fill="white">
                            <path d="M16.118 15.1699H19.9106V18.9625H16.118V15.1699Z" />
                          </mask>
                          <path
                            d="M16.118 15.1699H19.9106V18.9625H16.118V15.1699Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M19.9106 18.9625V19.2625H20.2106V18.9625H19.9106ZM19.6106 15.1699V18.9625H20.2106V15.1699H19.6106ZM19.9106 18.6625H16.118V19.2625H19.9106V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-152-inside-75_98_28446)"
                          />
                          <mask id="path-154-inside-76_98_28446" fill="white">
                            <path d="M19.9111 15.1699H23.7037V18.9625H19.9111V15.1699Z" />
                          </mask>
                          <path
                            d="M23.7037 18.9625V19.2625H24.0037V18.9625H23.7037ZM23.4037 15.1699V18.9625H24.0037V15.1699H23.4037ZM23.7037 18.6625H19.9111V19.2625H23.7037V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-154-inside-76_98_28446)"
                          />
                          <mask id="path-156-inside-77_98_28446" fill="white">
                            <path d="M23.7032 15.1699H27.4958V18.9625H23.7032V15.1699Z" />
                          </mask>
                          <path
                            d="M27.4958 18.9625V19.2625H27.7958V18.9625H27.4958ZM27.1958 15.1699V18.9625H27.7958V15.1699H27.1958ZM27.4958 18.6625H23.7032V19.2625H27.4958V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-156-inside-77_98_28446)"
                          />
                          <mask id="path-158-inside-78_98_28446" fill="white">
                            <path d="M27.4961 15.1699H31.2887V18.9625H27.4961V15.1699Z" />
                          </mask>
                          <path
                            d="M31.2887 18.9625V19.2625H31.5887V18.9625H31.2887ZM30.9887 15.1699V18.9625H31.5887V15.1699H30.9887ZM31.2887 18.6625H27.4961V19.2625H31.2887V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-158-inside-78_98_28446)"
                          />
                          <mask id="path-160-inside-79_98_28446" fill="white">
                            <path d="M31.2881 15.1699H35.0807V18.9625H31.2881V15.1699Z" />
                          </mask>
                          <path
                            d="M35.0807 18.9625V19.2625H35.3807V18.9625H35.0807ZM34.7807 15.1699V18.9625H35.3807V15.1699H34.7807ZM35.0807 18.6625H31.2881V19.2625H35.0807V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-160-inside-79_98_28446)"
                          />
                          <mask id="path-162-inside-80_98_28446" fill="white">
                            <path d="M35.0811 15.1699H38.8736V18.9625H35.0811V15.1699Z" />
                          </mask>
                          <path
                            d="M35.0811 15.1699H38.8736V18.9625H35.0811V15.1699Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M38.8736 18.9625V19.2625H39.1736V18.9625H38.8736ZM38.5736 15.1699V18.9625H39.1736V15.1699H38.5736ZM38.8736 18.6625H35.0811V19.2625H38.8736V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-162-inside-80_98_28446)"
                          />
                          <mask id="path-164-inside-81_98_28446" fill="white">
                            <path d="M38.874 15.1699H42.6666V18.9625H38.874V15.1699Z" />
                          </mask>
                          <path
                            d="M42.6666 18.9625V19.2625H42.9666V18.9625H42.6666ZM42.3666 15.1699V18.9625H42.9666V15.1699H42.3666ZM42.6666 18.6625H38.874V19.2625H42.6666V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-164-inside-81_98_28446)"
                          />
                          <mask id="path-166-inside-82_98_28446" fill="white">
                            <path d="M42.6663 15.1699H46.4589V18.9625H42.6663V15.1699Z" />
                          </mask>
                          <path
                            d="M46.4589 18.9625V19.2625H46.7589V18.9625H46.4589ZM46.1589 15.1699V18.9625H46.7589V15.1699H46.1589ZM46.4589 18.6625H42.6663V19.2625H46.4589V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-166-inside-82_98_28446)"
                          />
                          <mask id="path-168-inside-83_98_28446" fill="white">
                            <path d="M46.4587 15.1699H50.2513V18.9625H46.4587V15.1699Z" />
                          </mask>
                          <path
                            d="M50.2513 18.9625V19.2625H50.5513V18.9625H50.2513ZM49.9513 15.1699V18.9625H50.5513V15.1699H49.9513ZM50.2513 18.6625H46.4587V19.2625H50.2513V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-168-inside-83_98_28446)"
                          />
                          <mask id="path-170-inside-84_98_28446" fill="white">
                            <path d="M50.251 15.1699H54.0436V18.9625H50.251V15.1699Z" />
                          </mask>
                          <path
                            d="M54.0436 18.9625V19.2625H54.3436V18.9625H54.0436ZM53.7436 15.1699V18.9625H54.3436V15.1699H53.7436ZM54.0436 18.6625H50.251V19.2625H54.0436V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-170-inside-84_98_28446)"
                          />
                          <mask id="path-172-inside-85_98_28446" fill="white">
                            <path d="M54.0439 15.1699H57.8365V18.9625H54.0439V15.1699Z" />
                          </mask>
                          <path
                            d="M57.8365 18.9625V19.2625H58.1365V18.9625H57.8365ZM57.5365 15.1699V18.9625H58.1365V15.1699H57.5365ZM57.8365 18.6625H54.0439V19.2625H57.8365V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-172-inside-85_98_28446)"
                          />
                          <mask id="path-174-inside-86_98_28446" fill="white">
                            <path d="M57.8369 15.1699H61.6295V18.9625H57.8369V15.1699Z" />
                          </mask>
                          <path
                            d="M61.6295 18.9625V19.2625H61.9295V18.9625H61.6295ZM61.3295 15.1699V18.9625H61.9295V15.1699H61.3295ZM61.6295 18.6625H57.8369V19.2625H61.6295V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-174-inside-86_98_28446)"
                          />
                          <mask id="path-176-inside-87_98_28446" fill="white">
                            <path d="M61.6289 15.1699H65.4215V18.9625H61.6289V15.1699Z" />
                          </mask>
                          <path
                            d="M65.4215 18.9625V19.2625H65.7215V18.9625H65.4215ZM65.1215 15.1699V18.9625H65.7215V15.1699H65.1215ZM65.4215 18.6625H61.6289V19.2625H65.4215V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-176-inside-87_98_28446)"
                          />
                          <mask id="path-178-inside-88_98_28446" fill="white">
                            <path d="M65.4219 15.1699H69.2145V18.9625H65.4219V15.1699Z" />
                          </mask>
                          <path
                            d="M69.2145 18.9625V19.2625H69.5145V18.9625H69.2145ZM68.9145 15.1699V18.9625H69.5145V15.1699H68.9145ZM69.2145 18.6625H65.4219V19.2625H69.2145V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-178-inside-88_98_28446)"
                          />
                          <mask id="path-180-inside-89_98_28446" fill="white">
                            <path d="M69.2148 15.1699H73.0074V18.9625H69.2148V15.1699Z" />
                          </mask>
                          <path
                            d="M73.0074 18.9625V19.2625H73.3074V18.9625H73.0074ZM72.7074 15.1699V18.9625H73.3074V15.1699H72.7074ZM73.0074 18.6625H69.2148V19.2625H73.0074V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-180-inside-89_98_28446)"
                          />
                          <mask id="path-182-inside-90_98_28446" fill="white">
                            <path d="M73.007 15.1699H76.7996V18.9625H73.007V15.1699Z" />
                          </mask>
                          <path
                            d="M76.7996 18.9625V19.2625H77.0996V18.9625H76.7996ZM76.4996 15.1699V18.9625H77.0996V15.1699H76.4996ZM76.7996 18.6625H73.007V19.2625H76.7996V18.6625Z"
                            fill="#D0D5DD"
                            mask="url(#path-182-inside-90_98_28446)"
                          />
                          <mask id="path-184-inside-91_98_28446" fill="white">
                            <path d="M8.5332 18.9629H12.3258V22.7555H8.5332V18.9629Z" />
                          </mask>
                          <path
                            d="M12.3258 22.7555V23.0555H12.6258V22.7555H12.3258ZM12.0258 18.9629V22.7555H12.6258V18.9629H12.0258ZM12.3258 22.4555H8.5332V23.0555H12.3258V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-184-inside-91_98_28446)"
                          />
                          <mask id="path-186-inside-92_98_28446" fill="white">
                            <path d="M12.3252 18.9629H16.1178V22.7555H12.3252V18.9629Z" />
                          </mask>
                          <path
                            d="M16.1178 22.7555V23.0555H16.4178V22.7555H16.1178ZM15.8178 18.9629V22.7555H16.4178V18.9629H15.8178ZM16.1178 22.4555H12.3252V23.0555H16.1178V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-186-inside-92_98_28446)"
                          />
                          <mask id="path-188-inside-93_98_28446" fill="white">
                            <path d="M16.118 18.963H19.9106V22.7556H16.118V18.963Z" />
                          </mask>
                          <path
                            d="M19.9106 22.7556V23.0556H20.2106V22.7556H19.9106ZM19.6106 18.963V22.7556H20.2106V18.963H19.6106ZM19.9106 22.4556H16.118V23.0556H19.9106V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-188-inside-93_98_28446)"
                          />
                          <mask id="path-190-inside-94_98_28446" fill="white">
                            <path d="M19.9111 18.9629H23.7037V22.7555H19.9111V18.9629Z" />
                          </mask>
                          <path
                            d="M23.7037 22.7555V23.0555H24.0037V22.7555H23.7037ZM23.4037 18.9629V22.7555H24.0037V18.9629H23.4037ZM23.7037 22.4555H19.9111V23.0555H23.7037V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-190-inside-94_98_28446)"
                          />
                          <mask id="path-192-inside-95_98_28446" fill="white">
                            <path d="M23.7032 18.963H27.4958V22.7556H23.7032V18.963Z" />
                          </mask>
                          <path
                            d="M27.4958 22.7556V23.0556H27.7958V22.7556H27.4958ZM27.1958 18.963V22.7556H27.7958V18.963H27.1958ZM27.4958 22.4556H23.7032V23.0556H27.4958V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-192-inside-95_98_28446)"
                          />
                          <mask id="path-194-inside-96_98_28446" fill="white">
                            <path d="M27.4958 18.963H31.2884V22.7556H27.4958V18.963Z" />
                          </mask>
                          <path
                            d="M27.4958 18.963H31.2884V22.7556H27.4958V18.963Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M31.2884 22.7556V23.0556H31.5884V22.7556H31.2884ZM30.9884 18.963V22.7556H31.5884V18.963H30.9884ZM31.2884 22.4556H27.4958V23.0556H31.2884V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-194-inside-96_98_28446)"
                          />
                          <mask id="path-196-inside-97_98_28446" fill="white">
                            <path d="M31.2881 18.9629H35.0807V22.7555H31.2881V18.9629Z" />
                          </mask>
                          <path
                            d="M35.0807 22.7555V23.0555H35.3807V22.7555H35.0807ZM34.7807 18.9629V22.7555H35.3807V18.9629H34.7807ZM35.0807 22.4555H31.2881V23.0555H35.0807V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-196-inside-97_98_28446)"
                          />
                          <mask id="path-198-inside-98_98_28446" fill="white">
                            <path d="M35.0811 18.963H38.8736V22.7556H35.0811V18.963Z" />
                          </mask>
                          <path
                            d="M38.8736 22.7556V23.0556H39.1736V22.7556H38.8736ZM38.5736 18.963V22.7556H39.1736V18.963H38.5736ZM38.8736 22.4556H35.0811V23.0556H38.8736V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-198-inside-98_98_28446)"
                          />
                          <mask id="path-200-inside-99_98_28446" fill="white">
                            <path d="M38.874 18.9629H42.6666V22.7555H38.874V18.9629Z" />
                          </mask>
                          <path
                            d="M42.6666 22.7555V23.0555H42.9666V22.7555H42.6666ZM42.3666 18.9629V22.7555H42.9666V18.9629H42.3666ZM42.6666 22.4555H38.874V23.0555H42.6666V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-200-inside-99_98_28446)"
                          />
                          <mask id="path-202-inside-100_98_28446" fill="white">
                            <path d="M42.6663 18.963H46.4589V22.7556H42.6663V18.963Z" />
                          </mask>
                          <path
                            d="M46.4589 22.7556V23.0556H46.7589V22.7556H46.4589ZM46.1589 18.963V22.7556H46.7589V18.963H46.1589ZM46.4589 22.4556H42.6663V23.0556H46.4589V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-202-inside-100_98_28446)"
                          />
                          <mask id="path-204-inside-101_98_28446" fill="white">
                            <path d="M46.4589 18.963H50.2515V22.7556H46.4589V18.963Z" />
                          </mask>
                          <path
                            d="M50.2515 22.7556V23.0556H50.5515V22.7556H50.2515ZM49.9515 18.963V22.7556H50.5515V18.963H49.9515ZM50.2515 22.4556H46.4589V23.0556H50.2515V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-204-inside-101_98_28446)"
                          />
                          <mask id="path-206-inside-102_98_28446" fill="white">
                            <path d="M50.251 18.9629H54.0436V22.7555H50.251V18.9629Z" />
                          </mask>
                          <path
                            d="M50.251 18.9629H54.0436V22.7555H50.251V18.9629Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M54.0436 22.7555V23.0555H54.3436V22.7555H54.0436ZM53.7436 18.9629V22.7555H54.3436V18.9629H53.7436ZM54.0436 22.4555H50.251V23.0555H54.0436V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-206-inside-102_98_28446)"
                          />
                          <mask id="path-208-inside-103_98_28446" fill="white">
                            <path d="M54.0441 18.963H57.8367V22.7556H54.0441V18.963Z" />
                          </mask>
                          <path
                            d="M57.8367 22.7556V23.0556H58.1367V22.7556H57.8367ZM57.5367 18.963V22.7556H58.1367V18.963H57.5367ZM57.8367 22.4556H54.0441V23.0556H57.8367V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-208-inside-103_98_28446)"
                          />
                          <mask id="path-210-inside-104_98_28446" fill="white">
                            <path d="M57.8369 18.9629H61.6295V22.7555H57.8369V18.9629Z" />
                          </mask>
                          <path
                            d="M61.6295 22.7555V23.0555H61.9295V22.7555H61.6295ZM61.3295 18.9629V22.7555H61.9295V18.9629H61.3295ZM61.6295 22.4555H57.8369V23.0555H61.6295V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-210-inside-104_98_28446)"
                          />
                          <mask id="path-212-inside-105_98_28446" fill="white">
                            <path d="M61.6289 18.9629H65.4215V22.7555H61.6289V18.9629Z" />
                          </mask>
                          <path
                            d="M61.6289 18.9629H65.4215V22.7555H61.6289V18.9629Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M65.4215 22.7555V23.0555H65.7215V22.7555H65.4215ZM65.1215 18.9629V22.7555H65.7215V18.9629H65.1215ZM65.4215 22.4555H61.6289V23.0555H65.4215V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-212-inside-105_98_28446)"
                          />
                          <mask id="path-214-inside-106_98_28446" fill="white">
                            <path d="M65.4218 18.963H69.2143V22.7556H65.4218V18.963Z" />
                          </mask>
                          <path
                            d="M69.2143 22.7556V23.0556H69.5143V22.7556H69.2143ZM68.9143 18.963V22.7556H69.5143V18.963H68.9143ZM69.2143 22.4556H65.4218V23.0556H69.2143V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-214-inside-106_98_28446)"
                          />
                          <mask id="path-216-inside-107_98_28446" fill="white">
                            <path d="M69.2148 18.9629H73.0074V22.7555H69.2148V18.9629Z" />
                          </mask>
                          <path
                            d="M73.0074 22.7555V23.0555H73.3074V22.7555H73.0074ZM72.7074 18.9629V22.7555H73.3074V18.9629H72.7074ZM73.0074 22.4555H69.2148V23.0555H73.0074V22.4555Z"
                            fill="#D0D5DD"
                            mask="url(#path-216-inside-107_98_28446)"
                          />
                          <mask id="path-218-inside-108_98_28446" fill="white">
                            <path d="M73.007 18.963H76.7996V22.7556H73.007V18.963Z" />
                          </mask>
                          <path
                            d="M76.7996 22.7556V23.0556H77.0996V22.7556H76.7996ZM76.4996 18.963V22.7556H77.0996V18.963H76.4996ZM76.7996 22.4556H73.007V23.0556H76.7996V22.4556Z"
                            fill="#D0D5DD"
                            mask="url(#path-218-inside-108_98_28446)"
                          />
                          <mask id="path-220-inside-109_98_28446" fill="white">
                            <path d="M8.5332 22.7559H12.3258V26.5485H8.5332V22.7559Z" />
                          </mask>
                          <path
                            d="M12.3258 26.5485V26.8485H12.6258V26.5485H12.3258ZM12.0258 22.7559V26.5485H12.6258V22.7559H12.0258ZM12.3258 26.2485H8.5332V26.8485H12.3258V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-220-inside-109_98_28446)"
                          />
                          <mask id="path-222-inside-110_98_28446" fill="white">
                            <path d="M12.3252 22.7559H16.1178V26.5485H12.3252V22.7559Z" />
                          </mask>
                          <path
                            d="M12.3252 22.7559H16.1178V26.5485H12.3252V22.7559Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M16.1178 26.5485V26.8485H16.4178V26.5485H16.1178ZM15.8178 22.7559V26.5485H16.4178V22.7559H15.8178ZM16.1178 26.2485H12.3252V26.8485H16.1178V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-222-inside-110_98_28446)"
                          />
                          <mask id="path-224-inside-111_98_28446" fill="white">
                            <path d="M16.118 22.7559H19.9106V26.5485H16.118V22.7559Z" />
                          </mask>
                          <path
                            d="M19.9106 26.5485V26.8485H20.2106V26.5485H19.9106ZM19.6106 22.7559V26.5485H20.2106V22.7559H19.6106ZM19.9106 26.2485H16.118V26.8485H19.9106V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-224-inside-111_98_28446)"
                          />
                          <mask id="path-226-inside-112_98_28446" fill="white">
                            <path d="M19.9111 22.7559H23.7037V26.5485H19.9111V22.7559Z" />
                          </mask>
                          <path
                            d="M23.7037 26.5485V26.8485H24.0037V26.5485H23.7037ZM23.4037 22.7559V26.5485H24.0037V22.7559H23.4037ZM23.7037 26.2485H19.9111V26.8485H23.7037V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-226-inside-112_98_28446)"
                          />
                          <mask id="path-228-inside-113_98_28446" fill="white">
                            <path d="M23.7032 22.7559H27.4958V26.5485H23.7032V22.7559Z" />
                          </mask>
                          <path
                            d="M27.4958 26.5485V26.8485H27.7958V26.5485H27.4958ZM27.1958 22.7559V26.5485H27.7958V22.7559H27.1958ZM27.4958 26.2485H23.7032V26.8485H27.4958V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-228-inside-113_98_28446)"
                          />
                          <mask id="path-230-inside-114_98_28446" fill="white">
                            <path d="M27.4961 22.7559H31.2887V26.5485H27.4961V22.7559Z" />
                          </mask>
                          <path
                            d="M31.2887 26.5485V26.8485H31.5887V26.5485H31.2887ZM30.9887 22.7559V26.5485H31.5887V22.7559H30.9887ZM31.2887 26.2485H27.4961V26.8485H31.2887V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-230-inside-114_98_28446)"
                          />
                          <mask id="path-232-inside-115_98_28446" fill="white">
                            <path d="M31.2881 22.7559H35.0807V26.5485H31.2881V22.7559Z" />
                          </mask>
                          <path
                            d="M35.0807 26.5485V26.8485H35.3807V26.5485H35.0807ZM34.7807 22.7559V26.5485H35.3807V22.7559H34.7807ZM35.0807 26.2485H31.2881V26.8485H35.0807V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-232-inside-115_98_28446)"
                          />
                          <mask id="path-234-inside-116_98_28446" fill="white">
                            <path d="M35.0811 22.7559H38.8736V26.5485H35.0811V22.7559Z" />
                          </mask>
                          <path
                            d="M38.8736 26.5485V26.8485H39.1736V26.5485H38.8736ZM38.5736 22.7559V26.5485H39.1736V22.7559H38.5736ZM38.8736 26.2485H35.0811V26.8485H38.8736V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-234-inside-116_98_28446)"
                          />
                          <mask id="path-236-inside-117_98_28446" fill="white">
                            <path d="M38.874 22.7559H42.6666V26.5485H38.874V22.7559Z" />
                          </mask>
                          <path
                            d="M38.874 22.7559H42.6666V26.5485H38.874V22.7559Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M42.6666 26.5485V26.8485H42.9666V26.5485H42.6666ZM42.3666 22.7559V26.5485H42.9666V22.7559H42.3666ZM42.6666 26.2485H38.874V26.8485H42.6666V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-236-inside-117_98_28446)"
                          />
                          <mask id="path-238-inside-118_98_28446" fill="white">
                            <path d="M42.6663 22.7559H46.4589V26.5485H42.6663V22.7559Z" />
                          </mask>
                          <path
                            d="M46.4589 26.5485V26.8485H46.7589V26.5485H46.4589ZM46.1589 22.7559V26.5485H46.7589V22.7559H46.1589ZM46.4589 26.2485H42.6663V26.8485H46.4589V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-238-inside-118_98_28446)"
                          />
                          <mask id="path-240-inside-119_98_28446" fill="white">
                            <path d="M46.4587 22.7559H50.2513V26.5485H46.4587V22.7559Z" />
                          </mask>
                          <path
                            d="M50.2513 26.5485V26.8485H50.5513V26.5485H50.2513ZM49.9513 22.7559V26.5485H50.5513V22.7559H49.9513ZM50.2513 26.2485H46.4587V26.8485H50.2513V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-240-inside-119_98_28446)"
                          />
                          <mask id="path-242-inside-120_98_28446" fill="white">
                            <path d="M50.251 22.7559H54.0436V26.5485H50.251V22.7559Z" />
                          </mask>
                          <path
                            d="M54.0436 26.5485V26.8485H54.3436V26.5485H54.0436ZM53.7436 22.7559V26.5485H54.3436V22.7559H53.7436ZM54.0436 26.2485H50.251V26.8485H54.0436V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-242-inside-120_98_28446)"
                          />
                          <mask id="path-244-inside-121_98_28446" fill="white">
                            <path d="M54.0439 22.7559H57.8365V26.5485H54.0439V22.7559Z" />
                          </mask>
                          <path
                            d="M57.8365 26.5485V26.8485H58.1365V26.5485H57.8365ZM57.5365 22.7559V26.5485H58.1365V22.7559H57.5365ZM57.8365 26.2485H54.0439V26.8485H57.8365V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-244-inside-121_98_28446)"
                          />
                          <mask id="path-246-inside-122_98_28446" fill="white">
                            <path d="M57.8369 22.7559H61.6295V26.5485H57.8369V22.7559Z" />
                          </mask>
                          <path
                            d="M61.6295 26.5485V26.8485H61.9295V26.5485H61.6295ZM61.3295 22.7559V26.5485H61.9295V22.7559H61.3295ZM61.6295 26.2485H57.8369V26.8485H61.6295V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-246-inside-122_98_28446)"
                          />
                          <mask id="path-248-inside-123_98_28446" fill="white">
                            <path d="M61.6289 22.7559H65.4215V26.5485H61.6289V22.7559Z" />
                          </mask>
                          <path
                            d="M65.4215 26.5485V26.8485H65.7215V26.5485H65.4215ZM65.1215 22.7559V26.5485H65.7215V22.7559H65.1215ZM65.4215 26.2485H61.6289V26.8485H65.4215V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-248-inside-123_98_28446)"
                          />
                          <mask id="path-250-inside-124_98_28446" fill="white">
                            <path d="M65.4219 22.7559H69.2145V26.5485H65.4219V22.7559Z" />
                          </mask>
                          <path
                            d="M69.2145 26.5485V26.8485H69.5145V26.5485H69.2145ZM68.9145 22.7559V26.5485H69.5145V22.7559H68.9145ZM69.2145 26.2485H65.4219V26.8485H69.2145V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-250-inside-124_98_28446)"
                          />
                          <mask id="path-252-inside-125_98_28446" fill="white">
                            <path d="M69.2148 22.7559H73.0074V26.5485H69.2148V22.7559Z" />
                          </mask>
                          <path
                            d="M73.0074 26.5485V26.8485H73.3074V26.5485H73.0074ZM72.7074 22.7559V26.5485H73.3074V22.7559H72.7074ZM73.0074 26.2485H69.2148V26.8485H73.0074V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-252-inside-125_98_28446)"
                          />
                          <mask id="path-254-inside-126_98_28446" fill="white">
                            <path d="M73.007 22.7559H76.7996V26.5485H73.007V22.7559Z" />
                          </mask>
                          <path
                            d="M73.007 22.7559H76.7996V26.5485H73.007V22.7559Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M76.7996 26.5485V26.8485H77.0996V26.5485H76.7996ZM76.4996 22.7559V26.5485H77.0996V22.7559H76.4996ZM76.7996 26.2485H73.007V26.8485H76.7996V26.2485Z"
                            fill="#D0D5DD"
                            mask="url(#path-254-inside-126_98_28446)"
                          />
                          <mask id="path-256-inside-127_98_28446" fill="white">
                            <path d="M8.5332 26.5479H12.3258V30.3404H8.5332V26.5479Z" />
                          </mask>
                          <path
                            d="M12.3258 30.3404V30.6404H12.6258V30.3404H12.3258ZM12.0258 26.5479V30.3404H12.6258V26.5479H12.0258ZM12.3258 30.0404H8.5332V30.6404H12.3258V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-256-inside-127_98_28446)"
                          />
                          <mask id="path-258-inside-128_98_28446" fill="white">
                            <path d="M12.3252 26.5479H16.1178V30.3404H12.3252V26.5479Z" />
                          </mask>
                          <path
                            d="M16.1178 30.3404V30.6404H16.4178V30.3404H16.1178ZM15.8178 26.5479V30.3404H16.4178V26.5479H15.8178ZM16.1178 30.0404H12.3252V30.6404H16.1178V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-258-inside-128_98_28446)"
                          />
                          <mask id="path-260-inside-129_98_28446" fill="white">
                            <path d="M16.118 26.5479H19.9106V30.3404H16.118V26.5479Z" />
                          </mask>
                          <path
                            d="M19.9106 30.3404V30.6404H20.2106V30.3404H19.9106ZM19.6106 26.5479V30.3404H20.2106V26.5479H19.6106ZM19.9106 30.0404H16.118V30.6404H19.9106V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-260-inside-129_98_28446)"
                          />
                          <mask id="path-262-inside-130_98_28446" fill="white">
                            <path d="M19.9111 26.5479H23.7037V30.3404H19.9111V26.5479Z" />
                          </mask>
                          <path
                            d="M23.7037 30.3404V30.6404H24.0037V30.3404H23.7037ZM23.4037 26.5479V30.3404H24.0037V26.5479H23.4037ZM23.7037 30.0404H19.9111V30.6404H23.7037V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-262-inside-130_98_28446)"
                          />
                          <mask id="path-264-inside-131_98_28446" fill="white">
                            <path d="M23.7032 26.5479H27.4958V30.3404H23.7032V26.5479Z" />
                          </mask>
                          <path
                            d="M27.4958 30.3404V30.6404H27.7958V30.3404H27.4958ZM27.1958 26.5479V30.3404H27.7958V26.5479H27.1958ZM27.4958 30.0404H23.7032V30.6404H27.4958V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-264-inside-131_98_28446)"
                          />
                          <mask id="path-266-inside-132_98_28446" fill="white">
                            <path d="M27.4961 26.5479H31.2887V30.3404H27.4961V26.5479Z" />
                          </mask>
                          <path
                            d="M31.2887 30.3404V30.6404H31.5887V30.3404H31.2887ZM30.9887 26.5479V30.3404H31.5887V26.5479H30.9887ZM31.2887 30.0404H27.4961V30.6404H31.2887V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-266-inside-132_98_28446)"
                          />
                          <mask id="path-268-inside-133_98_28446" fill="white">
                            <path d="M31.2881 26.5479H35.0807V30.3404H31.2881V26.5479Z" />
                          </mask>
                          <path
                            d="M31.2881 26.5479H35.0807V30.3404H31.2881V26.5479Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M35.0807 30.3404V30.6404H35.3807V30.3404H35.0807ZM34.7807 26.5479V30.3404H35.3807V26.5479H34.7807ZM35.0807 30.0404H31.2881V30.6404H35.0807V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-268-inside-133_98_28446)"
                          />
                          <mask id="path-270-inside-134_98_28446" fill="white">
                            <path d="M35.0811 26.5479H38.8736V30.3404H35.0811V26.5479Z" />
                          </mask>
                          <path
                            d="M38.8736 30.3404V30.6404H39.1736V30.3404H38.8736ZM38.5736 26.5479V30.3404H39.1736V26.5479H38.5736ZM38.8736 30.0404H35.0811V30.6404H38.8736V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-270-inside-134_98_28446)"
                          />
                          <mask id="path-272-inside-135_98_28446" fill="white">
                            <path d="M38.874 26.5479H42.6666V30.3404H38.874V26.5479Z" />
                          </mask>
                          <path
                            d="M42.6666 30.3404V30.6404H42.9666V30.3404H42.6666ZM42.3666 26.5479V30.3404H42.9666V26.5479H42.3666ZM42.6666 30.0404H38.874V30.6404H42.6666V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-272-inside-135_98_28446)"
                          />
                          <mask id="path-274-inside-136_98_28446" fill="white">
                            <path d="M42.6663 26.5479H46.4589V30.3404H42.6663V26.5479Z" />
                          </mask>
                          <path
                            d="M46.4589 30.3404V30.6404H46.7589V30.3404H46.4589ZM46.1589 26.5479V30.3404H46.7589V26.5479H46.1589ZM46.4589 30.0404H42.6663V30.6404H46.4589V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-274-inside-136_98_28446)"
                          />
                          <mask id="path-276-inside-137_98_28446" fill="white">
                            <path d="M46.4587 26.5479H50.2513V30.3404H46.4587V26.5479Z" />
                          </mask>
                          <path
                            d="M50.2513 30.3404V30.6404H50.5513V30.3404H50.2513ZM49.9513 26.5479V30.3404H50.5513V26.5479H49.9513ZM50.2513 30.0404H46.4587V30.6404H50.2513V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-276-inside-137_98_28446)"
                          />
                          <mask id="path-278-inside-138_98_28446" fill="white">
                            <path d="M50.251 26.5479H54.0436V30.3404H50.251V26.5479Z" />
                          </mask>
                          <path
                            d="M54.0436 30.3404V30.6404H54.3436V30.3404H54.0436ZM53.7436 26.5479V30.3404H54.3436V26.5479H53.7436ZM54.0436 30.0404H50.251V30.6404H54.0436V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-278-inside-138_98_28446)"
                          />
                          <mask id="path-280-inside-139_98_28446" fill="white">
                            <path d="M54.0439 26.5479H57.8365V30.3404H54.0439V26.5479Z" />
                          </mask>
                          <path
                            d="M54.0439 26.5479H57.8365V30.3404H54.0439V26.5479Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M57.8365 30.3404V30.6404H58.1365V30.3404H57.8365ZM57.5365 26.5479V30.3404H58.1365V26.5479H57.5365ZM57.8365 30.0404H54.0439V30.6404H57.8365V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-280-inside-139_98_28446)"
                          />
                          <mask id="path-282-inside-140_98_28446" fill="white">
                            <path d="M57.8369 26.5479H61.6295V30.3404H57.8369V26.5479Z" />
                          </mask>
                          <path
                            d="M61.6295 30.3404V30.6404H61.9295V30.3404H61.6295ZM61.3295 26.5479V30.3404H61.9295V26.5479H61.3295ZM61.6295 30.0404H57.8369V30.6404H61.6295V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-282-inside-140_98_28446)"
                          />
                          <mask id="path-284-inside-141_98_28446" fill="white">
                            <path d="M61.6289 26.5479H65.4215V30.3404H61.6289V26.5479Z" />
                          </mask>
                          <path
                            d="M65.4215 30.3404V30.6404H65.7215V30.3404H65.4215ZM65.1215 26.5479V30.3404H65.7215V26.5479H65.1215ZM65.4215 30.0404H61.6289V30.6404H65.4215V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-284-inside-141_98_28446)"
                          />
                          <mask id="path-286-inside-142_98_28446" fill="white">
                            <path d="M65.4219 26.5479H69.2145V30.3404H65.4219V26.5479Z" />
                          </mask>
                          <path
                            d="M69.2145 30.3404V30.6404H69.5145V30.3404H69.2145ZM68.9145 26.5479V30.3404H69.5145V26.5479H68.9145ZM69.2145 30.0404H65.4219V30.6404H69.2145V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-286-inside-142_98_28446)"
                          />
                          <mask id="path-288-inside-143_98_28446" fill="white">
                            <path d="M69.2148 26.5479H73.0074V30.3404H69.2148V26.5479Z" />
                          </mask>
                          <path
                            d="M73.0074 30.3404V30.6404H73.3074V30.3404H73.0074ZM72.7074 26.5479V30.3404H73.3074V26.5479H72.7074ZM73.0074 30.0404H69.2148V30.6404H73.0074V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-288-inside-143_98_28446)"
                          />
                          <mask id="path-290-inside-144_98_28446" fill="white">
                            <path d="M73.007 26.5479H76.7996V30.3404H73.007V26.5479Z" />
                          </mask>
                          <path
                            d="M76.7996 30.3404V30.6404H77.0996V30.3404H76.7996ZM76.4996 26.5479V30.3404H77.0996V26.5479H76.4996ZM76.7996 30.0404H73.007V30.6404H76.7996V30.0404Z"
                            fill="#D0D5DD"
                            mask="url(#path-290-inside-144_98_28446)"
                          />
                          <mask id="path-292-inside-145_98_28446" fill="white">
                            <path d="M8.5332 30.3408H12.3258V34.1334H8.5332V30.3408Z" />
                          </mask>
                          <path
                            d="M12.3258 34.1334V34.4334H12.6258V34.1334H12.3258ZM12.0258 30.3408V34.1334H12.6258V30.3408H12.0258ZM12.3258 33.8334H8.5332V34.4334H12.3258V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-292-inside-145_98_28446)"
                          />
                          <mask id="path-294-inside-146_98_28446" fill="white">
                            <path d="M12.3252 30.3408H16.1178V34.1334H12.3252V30.3408Z" />
                          </mask>
                          <path
                            d="M16.1178 34.1334V34.4334H16.4178V34.1334H16.1178ZM15.8178 30.3408V34.1334H16.4178V30.3408H15.8178ZM16.1178 33.8334H12.3252V34.4334H16.1178V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-294-inside-146_98_28446)"
                          />
                          <mask id="path-296-inside-147_98_28446" fill="white">
                            <path d="M16.118 30.3407H19.9106V34.1333H16.118V30.3407Z" />
                          </mask>
                          <path
                            d="M19.9106 34.1333V34.4333H20.2106V34.1333H19.9106ZM19.6106 30.3407V34.1333H20.2106V30.3407H19.6106ZM19.9106 33.8333H16.118V34.4333H19.9106V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-296-inside-147_98_28446)"
                          />
                          <mask id="path-298-inside-148_98_28446" fill="white">
                            <path d="M19.9111 30.3408H23.7037V34.1334H19.9111V30.3408Z" />
                          </mask>
                          <path
                            d="M23.7037 34.1334V34.4334H24.0037V34.1334H23.7037ZM23.4037 30.3408V34.1334H24.0037V30.3408H23.4037ZM23.7037 33.8334H19.9111V34.4334H23.7037V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-298-inside-148_98_28446)"
                          />
                          <mask id="path-300-inside-149_98_28446" fill="white">
                            <path d="M23.7032 30.3407H27.4958V34.1333H23.7032V30.3407Z" />
                          </mask>
                          <path
                            d="M23.7032 30.3407H27.4958V34.1333H23.7032V30.3407Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M27.4958 34.1333V34.4333H27.7958V34.1333H27.4958ZM27.1958 30.3407V34.1333H27.7958V30.3407H27.1958ZM27.4958 33.8333H23.7032V34.4333H27.4958V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-300-inside-149_98_28446)"
                          />
                          <mask id="path-302-inside-150_98_28446" fill="white">
                            <path d="M27.4958 30.3407H31.2884V34.1333H27.4958V30.3407Z" />
                          </mask>
                          <path
                            d="M31.2884 34.1333V34.4333H31.5884V34.1333H31.2884ZM30.9884 30.3407V34.1333H31.5884V30.3407H30.9884ZM31.2884 33.8333H27.4958V34.4333H31.2884V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-302-inside-150_98_28446)"
                          />
                          <mask id="path-304-inside-151_98_28446" fill="white">
                            <path d="M31.2881 30.3408H35.0807V34.1334H31.2881V30.3408Z" />
                          </mask>
                          <path
                            d="M35.0807 34.1334V34.4334H35.3807V34.1334H35.0807ZM34.7807 30.3408V34.1334H35.3807V30.3408H34.7807ZM35.0807 33.8334H31.2881V34.4334H35.0807V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-304-inside-151_98_28446)"
                          />
                          <mask id="path-306-inside-152_98_28446" fill="white">
                            <path d="M35.0811 30.3407H38.8736V34.1333H35.0811V30.3407Z" />
                          </mask>
                          <path
                            d="M38.8736 34.1333V34.4333H39.1736V34.1333H38.8736ZM38.5736 30.3407V34.1333H39.1736V30.3407H38.5736ZM38.8736 33.8333H35.0811V34.4333H38.8736V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-306-inside-152_98_28446)"
                          />
                          <mask id="path-308-inside-153_98_28446" fill="white">
                            <path d="M38.874 30.3408H42.6666V34.1334H38.874V30.3408Z" />
                          </mask>
                          <path
                            d="M42.6666 34.1334V34.4334H42.9666V34.1334H42.6666ZM42.3666 30.3408V34.1334H42.9666V30.3408H42.3666ZM42.6666 33.8334H38.874V34.4334H42.6666V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-308-inside-153_98_28446)"
                          />
                          <mask id="path-310-inside-154_98_28446" fill="white">
                            <path d="M42.6663 30.3407H46.4589V34.1333H42.6663V30.3407Z" />
                          </mask>
                          <path
                            d="M46.4589 34.1333V34.4333H46.7589V34.1333H46.4589ZM46.1589 30.3407V34.1333H46.7589V30.3407H46.1589ZM46.4589 33.8333H42.6663V34.4333H46.4589V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-310-inside-154_98_28446)"
                          />
                          <mask id="path-312-inside-155_98_28446" fill="white">
                            <path d="M46.4589 30.3407H50.2515V34.1333H46.4589V30.3407Z" />
                          </mask>
                          <path
                            d="M50.2515 34.1333V34.4333H50.5515V34.1333H50.2515ZM49.9515 30.3407V34.1333H50.5515V30.3407H49.9515ZM50.2515 33.8333H46.4589V34.4333H50.2515V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-312-inside-155_98_28446)"
                          />
                          <mask id="path-314-inside-156_98_28446" fill="white">
                            <path d="M50.251 30.3408H54.0436V34.1334H50.251V30.3408Z" />
                          </mask>
                          <path
                            d="M54.0436 34.1334V34.4334H54.3436V34.1334H54.0436ZM53.7436 30.3408V34.1334H54.3436V30.3408H53.7436ZM54.0436 33.8334H50.251V34.4334H54.0436V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-314-inside-156_98_28446)"
                          />
                          <mask id="path-316-inside-157_98_28446" fill="white">
                            <path d="M54.0441 30.3407H57.8367V34.1333H54.0441V30.3407Z" />
                          </mask>
                          <path
                            d="M57.8367 34.1333V34.4333H58.1367V34.1333H57.8367ZM57.5367 30.3407V34.1333H58.1367V30.3407H57.5367ZM57.8367 33.8333H54.0441V34.4333H57.8367V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-316-inside-157_98_28446)"
                          />
                          <mask id="path-318-inside-158_98_28446" fill="white">
                            <path d="M57.8369 30.3408H61.6295V34.1334H57.8369V30.3408Z" />
                          </mask>
                          <path
                            d="M61.6295 34.1334V34.4334H61.9295V34.1334H61.6295ZM61.3295 30.3408V34.1334H61.9295V30.3408H61.3295ZM61.6295 33.8334H57.8369V34.4334H61.6295V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-318-inside-158_98_28446)"
                          />
                          <mask id="path-320-inside-159_98_28446" fill="white">
                            <path d="M61.6289 30.3408H65.4215V34.1334H61.6289V30.3408Z" />
                          </mask>
                          <path
                            d="M65.4215 34.1334V34.4334H65.7215V34.1334H65.4215ZM65.1215 30.3408V34.1334H65.7215V30.3408H65.1215ZM65.4215 33.8334H61.6289V34.4334H65.4215V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-320-inside-159_98_28446)"
                          />
                          <mask id="path-322-inside-160_98_28446" fill="white">
                            <path d="M65.4218 30.3407H69.2143V34.1333H65.4218V30.3407Z" />
                          </mask>
                          <path
                            d="M65.4218 30.3407H69.2143V34.1333H65.4218V30.3407Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M69.2143 34.1333V34.4333H69.5143V34.1333H69.2143ZM68.9143 30.3407V34.1333H69.5143V30.3407H68.9143ZM69.2143 33.8333H65.4218V34.4333H69.2143V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-322-inside-160_98_28446)"
                          />
                          <mask id="path-324-inside-161_98_28446" fill="white">
                            <path d="M69.2148 30.3408H73.0074V34.1334H69.2148V30.3408Z" />
                          </mask>
                          <path
                            d="M73.0074 34.1334V34.4334H73.3074V34.1334H73.0074ZM72.7074 30.3408V34.1334H73.3074V30.3408H72.7074ZM73.0074 33.8334H69.2148V34.4334H73.0074V33.8334Z"
                            fill="#D0D5DD"
                            mask="url(#path-324-inside-161_98_28446)"
                          />
                          <mask id="path-326-inside-162_98_28446" fill="white">
                            <path d="M73.007 30.3407H76.7996V34.1333H73.007V30.3407Z" />
                          </mask>
                          <path
                            d="M76.7996 34.1333V34.4333H77.0996V34.1333H76.7996ZM76.4996 30.3407V34.1333H77.0996V30.3407H76.4996ZM76.7996 33.8333H73.007V34.4333H76.7996V33.8333Z"
                            fill="#D0D5DD"
                            mask="url(#path-326-inside-162_98_28446)"
                          />
                          <mask id="path-328-inside-163_98_28446" fill="white">
                            <path d="M8.5332 34.1338H12.3258V37.9264H8.5332V34.1338Z" />
                          </mask>
                          <path
                            d="M12.3258 37.9264V38.2264H12.6258V37.9264H12.3258ZM12.0258 34.1338V37.9264H12.6258V34.1338H12.0258ZM12.3258 37.6264H8.5332V38.2264H12.3258V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-328-inside-163_98_28446)"
                          />
                          <mask id="path-330-inside-164_98_28446" fill="white">
                            <path d="M12.3252 34.1338H16.1178V37.9264H12.3252V34.1338Z" />
                          </mask>
                          <path
                            d="M12.3252 34.1338H16.1178V37.9264H12.3252V34.1338Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M16.1178 37.9264V38.2264H16.4178V37.9264H16.1178ZM15.8178 34.1338V37.9264H16.4178V34.1338H15.8178ZM16.1178 37.6264H12.3252V38.2264H16.1178V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-330-inside-164_98_28446)"
                          />
                          <mask id="path-332-inside-165_98_28446" fill="white">
                            <path d="M16.118 34.1338H19.9106V37.9264H16.118V34.1338Z" />
                          </mask>
                          <path
                            d="M19.9106 37.9264V38.2264H20.2106V37.9264H19.9106ZM19.6106 34.1338V37.9264H20.2106V34.1338H19.6106ZM19.9106 37.6264H16.118V38.2264H19.9106V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-332-inside-165_98_28446)"
                          />
                          <mask id="path-334-inside-166_98_28446" fill="white">
                            <path d="M19.9111 34.1338H23.7037V37.9264H19.9111V34.1338Z" />
                          </mask>
                          <path
                            d="M23.7037 37.9264V38.2264H24.0037V37.9264H23.7037ZM23.4037 34.1338V37.9264H24.0037V34.1338H23.4037ZM23.7037 37.6264H19.9111V38.2264H23.7037V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-334-inside-166_98_28446)"
                          />
                          <mask id="path-336-inside-167_98_28446" fill="white">
                            <path d="M23.7032 34.1338H27.4958V37.9264H23.7032V34.1338Z" />
                          </mask>
                          <path
                            d="M27.4958 37.9264V38.2264H27.7958V37.9264H27.4958ZM27.1958 34.1338V37.9264H27.7958V34.1338H27.1958ZM27.4958 37.6264H23.7032V38.2264H27.4958V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-336-inside-167_98_28446)"
                          />
                          <mask id="path-338-inside-168_98_28446" fill="white">
                            <path d="M27.4961 34.1338H31.2887V37.9264H27.4961V34.1338Z" />
                          </mask>
                          <path
                            d="M31.2887 37.9264V38.2264H31.5887V37.9264H31.2887ZM30.9887 34.1338V37.9264H31.5887V34.1338H30.9887ZM31.2887 37.6264H27.4961V38.2264H31.2887V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-338-inside-168_98_28446)"
                          />
                          <mask id="path-340-inside-169_98_28446" fill="white">
                            <path d="M31.2881 34.1338H35.0807V37.9264H31.2881V34.1338Z" />
                          </mask>
                          <path
                            d="M35.0807 37.9264V38.2264H35.3807V37.9264H35.0807ZM34.7807 34.1338V37.9264H35.3807V34.1338H34.7807ZM35.0807 37.6264H31.2881V38.2264H35.0807V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-340-inside-169_98_28446)"
                          />
                          <mask id="path-342-inside-170_98_28446" fill="white">
                            <path d="M35.0811 34.1338H38.8736V37.9264H35.0811V34.1338Z" />
                          </mask>
                          <path
                            d="M38.8736 37.9264V38.2264H39.1736V37.9264H38.8736ZM38.5736 34.1338V37.9264H39.1736V34.1338H38.5736ZM38.8736 37.6264H35.0811V38.2264H38.8736V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-342-inside-170_98_28446)"
                          />
                          <mask id="path-344-inside-171_98_28446" fill="white">
                            <path d="M38.874 34.1338H42.6666V37.9264H38.874V34.1338Z" />
                          </mask>
                          <path
                            d="M38.874 34.1338H42.6666V37.9264H38.874V34.1338Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M42.6666 37.9264V38.2264H42.9666V37.9264H42.6666ZM42.3666 34.1338V37.9264H42.9666V34.1338H42.3666ZM42.6666 37.6264H38.874V38.2264H42.6666V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-344-inside-171_98_28446)"
                          />
                          <mask id="path-346-inside-172_98_28446" fill="white">
                            <path d="M42.6663 34.1338H46.4589V37.9264H42.6663V34.1338Z" />
                          </mask>
                          <path
                            d="M46.4589 37.9264V38.2264H46.7589V37.9264H46.4589ZM46.1589 34.1338V37.9264H46.7589V34.1338H46.1589ZM46.4589 37.6264H42.6663V38.2264H46.4589V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-346-inside-172_98_28446)"
                          />
                          <mask id="path-348-inside-173_98_28446" fill="white">
                            <path d="M46.4587 34.1338H50.2513V37.9264H46.4587V34.1338Z" />
                          </mask>
                          <path
                            d="M50.2513 37.9264V38.2264H50.5513V37.9264H50.2513ZM49.9513 34.1338V37.9264H50.5513V34.1338H49.9513ZM50.2513 37.6264H46.4587V38.2264H50.2513V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-348-inside-173_98_28446)"
                          />
                          <mask id="path-350-inside-174_98_28446" fill="white">
                            <path d="M50.251 34.1338H54.0436V37.9264H50.251V34.1338Z" />
                          </mask>
                          <path
                            d="M54.0436 37.9264V38.2264H54.3436V37.9264H54.0436ZM53.7436 34.1338V37.9264H54.3436V34.1338H53.7436ZM54.0436 37.6264H50.251V38.2264H54.0436V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-350-inside-174_98_28446)"
                          />
                          <mask id="path-352-inside-175_98_28446" fill="white">
                            <path d="M54.0439 34.1338H57.8365V37.9264H54.0439V34.1338Z" />
                          </mask>
                          <path
                            d="M57.8365 37.9264V38.2264H58.1365V37.9264H57.8365ZM57.5365 34.1338V37.9264H58.1365V34.1338H57.5365ZM57.8365 37.6264H54.0439V38.2264H57.8365V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-352-inside-175_98_28446)"
                          />
                          <mask id="path-354-inside-176_98_28446" fill="white">
                            <path d="M57.8369 34.1338H61.6295V37.9264H57.8369V34.1338Z" />
                          </mask>
                          <path
                            d="M61.6295 37.9264V38.2264H61.9295V37.9264H61.6295ZM61.3295 34.1338V37.9264H61.9295V34.1338H61.3295ZM61.6295 37.6264H57.8369V38.2264H61.6295V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-354-inside-176_98_28446)"
                          />
                          <mask id="path-356-inside-177_98_28446" fill="white">
                            <path d="M61.6289 34.1338H65.4215V37.9264H61.6289V34.1338Z" />
                          </mask>
                          <path
                            d="M65.4215 37.9264V38.2264H65.7215V37.9264H65.4215ZM65.1215 34.1338V37.9264H65.7215V34.1338H65.1215ZM65.4215 37.6264H61.6289V38.2264H65.4215V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-356-inside-177_98_28446)"
                          />
                          <mask id="path-358-inside-178_98_28446" fill="white">
                            <path d="M65.4219 34.1338H69.2145V37.9264H65.4219V34.1338Z" />
                          </mask>
                          <path
                            d="M69.2145 37.9264V38.2264H69.5145V37.9264H69.2145ZM68.9145 34.1338V37.9264H69.5145V34.1338H68.9145ZM69.2145 37.6264H65.4219V38.2264H69.2145V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-358-inside-178_98_28446)"
                          />
                          <mask id="path-360-inside-179_98_28446" fill="white">
                            <path d="M69.2148 34.1338H73.0074V37.9264H69.2148V34.1338Z" />
                          </mask>
                          <path
                            d="M73.0074 37.9264V38.2264H73.3074V37.9264H73.0074ZM72.7074 34.1338V37.9264H73.3074V34.1338H72.7074ZM73.0074 37.6264H69.2148V38.2264H73.0074V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-360-inside-179_98_28446)"
                          />
                          <mask id="path-362-inside-180_98_28446" fill="white">
                            <path d="M73.007 34.1338H76.7996V37.9264H73.007V34.1338Z" />
                          </mask>
                          <path
                            d="M76.7996 37.9264V38.2264H77.0996V37.9264H76.7996ZM76.4996 34.1338V37.9264H77.0996V34.1338H76.4996ZM76.7996 37.6264H73.007V38.2264H76.7996V37.6264Z"
                            fill="#D0D5DD"
                            mask="url(#path-362-inside-180_98_28446)"
                          />
                          <mask id="path-364-inside-181_98_28446" fill="white">
                            <path d="M8.5332 37.9258H12.3258V41.7184H8.5332V37.9258Z" />
                          </mask>
                          <path
                            d="M12.3258 41.7184V42.0184H12.6258V41.7184H12.3258ZM12.0258 37.9258V41.7184H12.6258V37.9258H12.0258ZM12.3258 41.4184H8.5332V42.0184H12.3258V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-364-inside-181_98_28446)"
                          />
                          <mask id="path-366-inside-182_98_28446" fill="white">
                            <path d="M12.3252 37.9258H16.1178V41.7184H12.3252V37.9258Z" />
                          </mask>
                          <path
                            d="M16.1178 41.7184V42.0184H16.4178V41.7184H16.1178ZM15.8178 37.9258V41.7184H16.4178V37.9258H15.8178ZM16.1178 41.4184H12.3252V42.0184H16.1178V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-366-inside-182_98_28446)"
                          />
                          <mask id="path-368-inside-183_98_28446" fill="white">
                            <path d="M16.118 37.9258H19.9106V41.7184H16.118V37.9258Z" />
                          </mask>
                          <path
                            d="M19.9106 41.7184V42.0184H20.2106V41.7184H19.9106ZM19.6106 37.9258V41.7184H20.2106V37.9258H19.6106ZM19.9106 41.4184H16.118V42.0184H19.9106V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-368-inside-183_98_28446)"
                          />
                          <mask id="path-370-inside-184_98_28446" fill="white">
                            <path d="M19.9111 37.9258H23.7037V41.7184H19.9111V37.9258Z" />
                          </mask>
                          <path
                            d="M23.7037 41.7184V42.0184H24.0037V41.7184H23.7037ZM23.4037 37.9258V41.7184H24.0037V37.9258H23.4037ZM23.7037 41.4184H19.9111V42.0184H23.7037V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-370-inside-184_98_28446)"
                          />
                          <mask id="path-372-inside-185_98_28446" fill="white">
                            <path d="M23.7032 37.9258H27.4958V41.7184H23.7032V37.9258Z" />
                          </mask>
                          <path
                            d="M27.4958 41.7184V42.0184H27.7958V41.7184H27.4958ZM27.1958 37.9258V41.7184H27.7958V37.9258H27.1958ZM27.4958 41.4184H23.7032V42.0184H27.4958V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-372-inside-185_98_28446)"
                          />
                          <mask id="path-374-inside-186_98_28446" fill="white">
                            <path d="M27.4961 37.9258H31.2887V41.7184H27.4961V37.9258Z" />
                          </mask>
                          <path
                            d="M31.2887 41.7184V42.0184H31.5887V41.7184H31.2887ZM30.9887 37.9258V41.7184H31.5887V37.9258H30.9887ZM31.2887 41.4184H27.4961V42.0184H31.2887V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-374-inside-186_98_28446)"
                          />
                          <mask id="path-376-inside-187_98_28446" fill="white">
                            <path d="M31.2881 37.9258H35.0807V41.7184H31.2881V37.9258Z" />
                          </mask>
                          <path
                            d="M31.2881 37.9258H35.0807V41.7184H31.2881V37.9258Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M35.0807 41.7184V42.0184H35.3807V41.7184H35.0807ZM34.7807 37.9258V41.7184H35.3807V37.9258H34.7807ZM35.0807 41.4184H31.2881V42.0184H35.0807V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-376-inside-187_98_28446)"
                          />
                          <mask id="path-378-inside-188_98_28446" fill="white">
                            <path d="M35.0811 37.9258H38.8736V41.7184H35.0811V37.9258Z" />
                          </mask>
                          <path
                            d="M38.8736 41.7184V42.0184H39.1736V41.7184H38.8736ZM38.5736 37.9258V41.7184H39.1736V37.9258H38.5736ZM38.8736 41.4184H35.0811V42.0184H38.8736V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-378-inside-188_98_28446)"
                          />
                          <mask id="path-380-inside-189_98_28446" fill="white">
                            <path d="M38.874 37.9258H42.6666V41.7184H38.874V37.9258Z" />
                          </mask>
                          <path
                            d="M42.6666 41.7184V42.0184H42.9666V41.7184H42.6666ZM42.3666 37.9258V41.7184H42.9666V37.9258H42.3666ZM42.6666 41.4184H38.874V42.0184H42.6666V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-380-inside-189_98_28446)"
                          />
                          <mask id="path-382-inside-190_98_28446" fill="white">
                            <path d="M42.6663 37.9258H46.4589V41.7184H42.6663V37.9258Z" />
                          </mask>
                          <path
                            d="M46.4589 41.7184V42.0184H46.7589V41.7184H46.4589ZM46.1589 37.9258V41.7184H46.7589V37.9258H46.1589ZM46.4589 41.4184H42.6663V42.0184H46.4589V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-382-inside-190_98_28446)"
                          />
                          <mask id="path-384-inside-191_98_28446" fill="white">
                            <path d="M46.4587 37.9258H50.2513V41.7184H46.4587V37.9258Z" />
                          </mask>
                          <path
                            d="M50.2513 41.7184V42.0184H50.5513V41.7184H50.2513ZM49.9513 37.9258V41.7184H50.5513V37.9258H49.9513ZM50.2513 41.4184H46.4587V42.0184H50.2513V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-384-inside-191_98_28446)"
                          />
                          <mask id="path-386-inside-192_98_28446" fill="white">
                            <path d="M50.251 37.9258H54.0436V41.7184H50.251V37.9258Z" />
                          </mask>
                          <path
                            d="M54.0436 41.7184V42.0184H54.3436V41.7184H54.0436ZM53.7436 37.9258V41.7184H54.3436V37.9258H53.7436ZM54.0436 41.4184H50.251V42.0184H54.0436V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-386-inside-192_98_28446)"
                          />
                          <mask id="path-388-inside-193_98_28446" fill="white">
                            <path d="M54.0439 37.9258H57.8365V41.7184H54.0439V37.9258Z" />
                          </mask>
                          <path
                            d="M57.8365 41.7184V42.0184H58.1365V41.7184H57.8365ZM57.5365 37.9258V41.7184H58.1365V37.9258H57.5365ZM57.8365 41.4184H54.0439V42.0184H57.8365V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-388-inside-193_98_28446)"
                          />
                          <mask id="path-390-inside-194_98_28446" fill="white">
                            <path d="M57.8369 37.9258H61.6295V41.7184H57.8369V37.9258Z" />
                          </mask>
                          <path
                            d="M57.8369 37.9258H61.6295V41.7184H57.8369V37.9258Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M61.6295 41.7184V42.0184H61.9295V41.7184H61.6295ZM61.3295 37.9258V41.7184H61.9295V37.9258H61.3295ZM61.6295 41.4184H57.8369V42.0184H61.6295V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-390-inside-194_98_28446)"
                          />
                          <mask id="path-392-inside-195_98_28446" fill="white">
                            <path d="M61.6289 37.9258H65.4215V41.7184H61.6289V37.9258Z" />
                          </mask>
                          <path
                            d="M65.4215 41.7184V42.0184H65.7215V41.7184H65.4215ZM65.1215 37.9258V41.7184H65.7215V37.9258H65.1215ZM65.4215 41.4184H61.6289V42.0184H65.4215V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-392-inside-195_98_28446)"
                          />
                          <mask id="path-394-inside-196_98_28446" fill="white">
                            <path d="M65.4219 37.9258H69.2145V41.7184H65.4219V37.9258Z" />
                          </mask>
                          <path
                            d="M69.2145 41.7184V42.0184H69.5145V41.7184H69.2145ZM68.9145 37.9258V41.7184H69.5145V37.9258H68.9145ZM69.2145 41.4184H65.4219V42.0184H69.2145V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-394-inside-196_98_28446)"
                          />
                          <mask id="path-396-inside-197_98_28446" fill="white">
                            <path d="M69.2148 37.9258H73.0074V41.7184H69.2148V37.9258Z" />
                          </mask>
                          <path
                            d="M73.0074 41.7184V42.0184H73.3074V41.7184H73.0074ZM72.7074 37.9258V41.7184H73.3074V37.9258H72.7074ZM73.0074 41.4184H69.2148V42.0184H73.0074V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-396-inside-197_98_28446)"
                          />
                          <mask id="path-398-inside-198_98_28446" fill="white">
                            <path d="M73.007 37.9258H76.7996V41.7184H73.007V37.9258Z" />
                          </mask>
                          <path
                            d="M76.7996 41.7184V42.0184H77.0996V41.7184H76.7996ZM76.4996 37.9258V41.7184H77.0996V37.9258H76.4996ZM76.7996 41.4184H73.007V42.0184H76.7996V41.4184Z"
                            fill="#D0D5DD"
                            mask="url(#path-398-inside-198_98_28446)"
                          />
                          <mask id="path-400-inside-199_98_28446" fill="white">
                            <path d="M8.5332 41.7188H12.3258V45.5113H8.5332V41.7188Z" />
                          </mask>
                          <path
                            d="M8.5332 41.7188H12.3258V45.5113H8.5332V41.7188Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M12.3258 45.5113V45.8113H12.6258V45.5113H12.3258ZM12.0258 41.7188V45.5113H12.6258V41.7188H12.0258ZM12.3258 45.2113H8.5332V45.8113H12.3258V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-400-inside-199_98_28446)"
                          />
                          <mask id="path-402-inside-200_98_28446" fill="white">
                            <path d="M12.3252 41.7188H16.1178V45.5113H12.3252V41.7188Z" />
                          </mask>
                          <path
                            d="M16.1178 45.5113V45.8113H16.4178V45.5113H16.1178ZM15.8178 41.7188V45.5113H16.4178V41.7188H15.8178ZM16.1178 45.2113H12.3252V45.8113H16.1178V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-402-inside-200_98_28446)"
                          />
                          <mask id="path-404-inside-201_98_28446" fill="white">
                            <path d="M16.118 41.7188H19.9106V45.5113H16.118V41.7188Z" />
                          </mask>
                          <path
                            d="M19.9106 45.5113V45.8113H20.2106V45.5113H19.9106ZM19.6106 41.7188V45.5113H20.2106V41.7188H19.6106ZM19.9106 45.2113H16.118V45.8113H19.9106V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-404-inside-201_98_28446)"
                          />
                          <mask id="path-406-inside-202_98_28446" fill="white">
                            <path d="M19.9111 41.7188H23.7037V45.5113H19.9111V41.7188Z" />
                          </mask>
                          <path
                            d="M23.7037 45.5113V45.8113H24.0037V45.5113H23.7037ZM23.4037 41.7188V45.5113H24.0037V41.7188H23.4037ZM23.7037 45.2113H19.9111V45.8113H23.7037V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-406-inside-202_98_28446)"
                          />
                          <mask id="path-408-inside-203_98_28446" fill="white">
                            <path d="M23.7032 41.7188H27.4958V45.5113H23.7032V41.7188Z" />
                          </mask>
                          <path
                            d="M27.4958 45.5113V45.8113H27.7958V45.5113H27.4958ZM27.1958 41.7188V45.5113H27.7958V41.7188H27.1958ZM27.4958 45.2113H23.7032V45.8113H27.4958V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-408-inside-203_98_28446)"
                          />
                          <mask id="path-410-inside-204_98_28446" fill="white">
                            <path d="M27.4961 41.7188H31.2887V45.5113H27.4961V41.7188Z" />
                          </mask>
                          <path
                            d="M31.2887 45.5113V45.8113H31.5887V45.5113H31.2887ZM30.9887 41.7188V45.5113H31.5887V41.7188H30.9887ZM31.2887 45.2113H27.4961V45.8113H31.2887V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-410-inside-204_98_28446)"
                          />
                          <mask id="path-412-inside-205_98_28446" fill="white">
                            <path d="M31.2881 41.7188H35.0807V45.5113H31.2881V41.7188Z" />
                          </mask>
                          <path
                            d="M35.0807 45.5113V45.8113H35.3807V45.5113H35.0807ZM34.7807 41.7188V45.5113H35.3807V41.7188H34.7807ZM35.0807 45.2113H31.2881V45.8113H35.0807V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-412-inside-205_98_28446)"
                          />
                          <mask id="path-414-inside-206_98_28446" fill="white">
                            <path d="M35.0811 41.7188H38.8736V45.5113H35.0811V41.7188Z" />
                          </mask>
                          <path
                            d="M38.8736 45.5113V45.8113H39.1736V45.5113H38.8736ZM38.5736 41.7188V45.5113H39.1736V41.7188H38.5736ZM38.8736 45.2113H35.0811V45.8113H38.8736V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-414-inside-206_98_28446)"
                          />
                          <mask id="path-416-inside-207_98_28446" fill="white">
                            <path d="M38.874 41.7188H42.6666V45.5113H38.874V41.7188Z" />
                          </mask>
                          <path
                            d="M42.6666 45.5113V45.8113H42.9666V45.5113H42.6666ZM42.3666 41.7188V45.5113H42.9666V41.7188H42.3666ZM42.6666 45.2113H38.874V45.8113H42.6666V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-416-inside-207_98_28446)"
                          />
                          <mask id="path-418-inside-208_98_28446" fill="white">
                            <path d="M42.6663 41.7188H46.4589V45.5113H42.6663V41.7188Z" />
                          </mask>
                          <path
                            d="M46.4589 45.5113V45.8113H46.7589V45.5113H46.4589ZM46.1589 41.7188V45.5113H46.7589V41.7188H46.1589ZM46.4589 45.2113H42.6663V45.8113H46.4589V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-418-inside-208_98_28446)"
                          />
                          <mask id="path-420-inside-209_98_28446" fill="white">
                            <path d="M46.4587 41.7188H50.2513V45.5113H46.4587V41.7188Z" />
                          </mask>
                          <path
                            d="M46.4587 41.7188H50.2513V45.5113H46.4587V41.7188Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M50.2513 45.5113V45.8113H50.5513V45.5113H50.2513ZM49.9513 41.7188V45.5113H50.5513V41.7188H49.9513ZM50.2513 45.2113H46.4587V45.8113H50.2513V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-420-inside-209_98_28446)"
                          />
                          <mask id="path-422-inside-210_98_28446" fill="white">
                            <path d="M50.251 41.7188H54.0436V45.5113H50.251V41.7188Z" />
                          </mask>
                          <path
                            d="M54.0436 45.5113V45.8113H54.3436V45.5113H54.0436ZM53.7436 41.7188V45.5113H54.3436V41.7188H53.7436ZM54.0436 45.2113H50.251V45.8113H54.0436V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-422-inside-210_98_28446)"
                          />
                          <mask id="path-424-inside-211_98_28446" fill="white">
                            <path d="M54.0439 41.7188H57.8365V45.5113H54.0439V41.7188Z" />
                          </mask>
                          <path
                            d="M57.8365 45.5113V45.8113H58.1365V45.5113H57.8365ZM57.5365 41.7188V45.5113H58.1365V41.7188H57.5365ZM57.8365 45.2113H54.0439V45.8113H57.8365V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-424-inside-211_98_28446)"
                          />
                          <mask id="path-426-inside-212_98_28446" fill="white">
                            <path d="M57.8369 41.7188H61.6295V45.5113H57.8369V41.7188Z" />
                          </mask>
                          <path
                            d="M61.6295 45.5113V45.8113H61.9295V45.5113H61.6295ZM61.3295 41.7188V45.5113H61.9295V41.7188H61.3295ZM61.6295 45.2113H57.8369V45.8113H61.6295V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-426-inside-212_98_28446)"
                          />
                          <mask id="path-428-inside-213_98_28446" fill="white">
                            <path d="M61.6289 41.7188H65.4215V45.5113H61.6289V41.7188Z" />
                          </mask>
                          <path
                            d="M65.4215 45.5113V45.8113H65.7215V45.5113H65.4215ZM65.1215 41.7188V45.5113H65.7215V41.7188H65.1215ZM65.4215 45.2113H61.6289V45.8113H65.4215V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-428-inside-213_98_28446)"
                          />
                          <mask id="path-430-inside-214_98_28446" fill="white">
                            <path d="M65.4219 41.7188H69.2145V45.5113H65.4219V41.7188Z" />
                          </mask>
                          <path
                            d="M65.4219 41.7188H69.2145V45.5113H65.4219V41.7188Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M69.2145 45.5113V45.8113H69.5145V45.5113H69.2145ZM68.9145 41.7188V45.5113H69.5145V41.7188H68.9145ZM69.2145 45.2113H65.4219V45.8113H69.2145V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-430-inside-214_98_28446)"
                          />
                          <mask id="path-432-inside-215_98_28446" fill="white">
                            <path d="M69.2148 41.7188H73.0074V45.5113H69.2148V41.7188Z" />
                          </mask>
                          <path
                            d="M73.0074 45.5113V45.8113H73.3074V45.5113H73.0074ZM72.7074 41.7188V45.5113H73.3074V41.7188H72.7074ZM73.0074 45.2113H69.2148V45.8113H73.0074V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-432-inside-215_98_28446)"
                          />
                          <mask id="path-434-inside-216_98_28446" fill="white">
                            <path d="M73.007 41.7188H76.7996V45.5113H73.007V41.7188Z" />
                          </mask>
                          <path
                            d="M76.7996 45.5113V45.8113H77.0996V45.5113H76.7996ZM76.4996 41.7188V45.5113H77.0996V41.7188H76.4996ZM76.7996 45.2113H73.007V45.8113H76.7996V45.2113Z"
                            fill="#D0D5DD"
                            mask="url(#path-434-inside-216_98_28446)"
                          />
                          <mask id="path-436-inside-217_98_28446" fill="white">
                            <path d="M8.5332 45.5107H12.3258V49.3033H8.5332V45.5107Z" />
                          </mask>
                          <path
                            d="M12.3258 49.3033V49.6033H12.6258V49.3033H12.3258ZM12.0258 45.5107V49.3033H12.6258V45.5107H12.0258ZM12.3258 49.0033H8.5332V49.6033H12.3258V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-436-inside-217_98_28446)"
                          />
                          <mask id="path-438-inside-218_98_28446" fill="white">
                            <path d="M12.3252 45.5107H16.1178V49.3033H12.3252V45.5107Z" />
                          </mask>
                          <path
                            d="M16.1178 49.3033V49.6033H16.4178V49.3033H16.1178ZM15.8178 45.5107V49.3033H16.4178V45.5107H15.8178ZM16.1178 49.0033H12.3252V49.6033H16.1178V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-438-inside-218_98_28446)"
                          />
                          <mask id="path-440-inside-219_98_28446" fill="white">
                            <path d="M16.118 45.5107H19.9106V49.3033H16.118V45.5107Z" />
                          </mask>
                          <path
                            d="M19.9106 49.3033V49.6033H20.2106V49.3033H19.9106ZM19.6106 45.5107V49.3033H20.2106V45.5107H19.6106ZM19.9106 49.0033H16.118V49.6033H19.9106V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-440-inside-219_98_28446)"
                          />
                          <mask id="path-442-inside-220_98_28446" fill="white">
                            <path d="M19.9111 45.5107H23.7037V49.3033H19.9111V45.5107Z" />
                          </mask>
                          <path
                            d="M23.7037 49.3033V49.6033H24.0037V49.3033H23.7037ZM23.4037 45.5107V49.3033H24.0037V45.5107H23.4037ZM23.7037 49.0033H19.9111V49.6033H23.7037V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-442-inside-220_98_28446)"
                          />
                          <mask id="path-444-inside-221_98_28446" fill="white">
                            <path d="M23.7032 45.5107H27.4958V49.3033H23.7032V45.5107Z" />
                          </mask>
                          <path
                            d="M27.4958 49.3033V49.6033H27.7958V49.3033H27.4958ZM27.1958 45.5107V49.3033H27.7958V45.5107H27.1958ZM27.4958 49.0033H23.7032V49.6033H27.4958V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-444-inside-221_98_28446)"
                          />
                          <mask id="path-446-inside-222_98_28446" fill="white">
                            <path d="M27.4961 45.5107H31.2887V49.3033H27.4961V45.5107Z" />
                          </mask>
                          <path
                            d="M31.2887 49.3033V49.6033H31.5887V49.3033H31.2887ZM30.9887 45.5107V49.3033H31.5887V45.5107H30.9887ZM31.2887 49.0033H27.4961V49.6033H31.2887V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-446-inside-222_98_28446)"
                          />
                          <mask id="path-448-inside-223_98_28446" fill="white">
                            <path d="M31.2881 45.5107H35.0807V49.3033H31.2881V45.5107Z" />
                          </mask>
                          <path
                            d="M31.2881 45.5107H35.0807V49.3033H31.2881V45.5107Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M35.0807 49.3033V49.6033H35.3807V49.3033H35.0807ZM34.7807 45.5107V49.3033H35.3807V45.5107H34.7807ZM35.0807 49.0033H31.2881V49.6033H35.0807V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-448-inside-223_98_28446)"
                          />
                          <mask id="path-450-inside-224_98_28446" fill="white">
                            <path d="M35.0811 45.5107H38.8736V49.3033H35.0811V45.5107Z" />
                          </mask>
                          <path
                            d="M38.8736 49.3033V49.6033H39.1736V49.3033H38.8736ZM38.5736 45.5107V49.3033H39.1736V45.5107H38.5736ZM38.8736 49.0033H35.0811V49.6033H38.8736V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-450-inside-224_98_28446)"
                          />
                          <mask id="path-452-inside-225_98_28446" fill="white">
                            <path d="M38.874 45.5107H42.6666V49.3033H38.874V45.5107Z" />
                          </mask>
                          <path
                            d="M42.6666 49.3033V49.6033H42.9666V49.3033H42.6666ZM42.3666 45.5107V49.3033H42.9666V45.5107H42.3666ZM42.6666 49.0033H38.874V49.6033H42.6666V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-452-inside-225_98_28446)"
                          />
                          <mask id="path-454-inside-226_98_28446" fill="white">
                            <path d="M42.6663 45.5107H46.4589V49.3033H42.6663V45.5107Z" />
                          </mask>
                          <path
                            d="M46.4589 49.3033V49.6033H46.7589V49.3033H46.4589ZM46.1589 45.5107V49.3033H46.7589V45.5107H46.1589ZM46.4589 49.0033H42.6663V49.6033H46.4589V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-454-inside-226_98_28446)"
                          />
                          <mask id="path-456-inside-227_98_28446" fill="white">
                            <path d="M46.4587 45.5107H50.2513V49.3033H46.4587V45.5107Z" />
                          </mask>
                          <path
                            d="M50.2513 49.3033V49.6033H50.5513V49.3033H50.2513ZM49.9513 45.5107V49.3033H50.5513V45.5107H49.9513ZM50.2513 49.0033H46.4587V49.6033H50.2513V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-456-inside-227_98_28446)"
                          />
                          <mask id="path-458-inside-228_98_28446" fill="white">
                            <path d="M50.251 45.5107H54.0436V49.3033H50.251V45.5107Z" />
                          </mask>
                          <path
                            d="M54.0436 49.3033V49.6033H54.3436V49.3033H54.0436ZM53.7436 45.5107V49.3033H54.3436V45.5107H53.7436ZM54.0436 49.0033H50.251V49.6033H54.0436V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-458-inside-228_98_28446)"
                          />
                          <mask id="path-460-inside-229_98_28446" fill="white">
                            <path d="M54.0439 45.5107H57.8365V49.3033H54.0439V45.5107Z" />
                          </mask>
                          <path
                            d="M57.8365 49.3033V49.6033H58.1365V49.3033H57.8365ZM57.5365 45.5107V49.3033H58.1365V45.5107H57.5365ZM57.8365 49.0033H54.0439V49.6033H57.8365V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-460-inside-229_98_28446)"
                          />
                          <mask id="path-462-inside-230_98_28446" fill="white">
                            <path d="M57.8369 45.5107H61.6295V49.3033H57.8369V45.5107Z" />
                          </mask>
                          <path
                            d="M61.6295 49.3033V49.6033H61.9295V49.3033H61.6295ZM61.3295 45.5107V49.3033H61.9295V45.5107H61.3295ZM61.6295 49.0033H57.8369V49.6033H61.6295V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-462-inside-230_98_28446)"
                          />
                          <mask id="path-464-inside-231_98_28446" fill="white">
                            <path d="M61.6289 45.5107H65.4215V49.3033H61.6289V45.5107Z" />
                          </mask>
                          <path
                            d="M65.4215 49.3033V49.6033H65.7215V49.3033H65.4215ZM65.1215 45.5107V49.3033H65.7215V45.5107H65.1215ZM65.4215 49.0033H61.6289V49.6033H65.4215V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-464-inside-231_98_28446)"
                          />
                          <mask id="path-466-inside-232_98_28446" fill="white">
                            <path d="M65.4219 45.5107H69.2145V49.3033H65.4219V45.5107Z" />
                          </mask>
                          <path
                            d="M69.2145 49.3033V49.6033H69.5145V49.3033H69.2145ZM68.9145 45.5107V49.3033H69.5145V45.5107H68.9145ZM69.2145 49.0033H65.4219V49.6033H69.2145V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-466-inside-232_98_28446)"
                          />
                          <mask id="path-468-inside-233_98_28446" fill="white">
                            <path d="M69.2148 45.5107H73.0074V49.3033H69.2148V45.5107Z" />
                          </mask>
                          <path
                            d="M73.0074 49.3033V49.6033H73.3074V49.3033H73.0074ZM72.7074 45.5107V49.3033H73.3074V45.5107H72.7074ZM73.0074 49.0033H69.2148V49.6033H73.0074V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-468-inside-233_98_28446)"
                          />
                          <mask id="path-470-inside-234_98_28446" fill="white">
                            <path d="M73.007 45.5107H76.7996V49.3033H73.007V45.5107Z" />
                          </mask>
                          <path
                            d="M76.7996 49.3033V49.6033H77.0996V49.3033H76.7996ZM76.4996 45.5107V49.3033H77.0996V45.5107H76.4996ZM76.7996 49.0033H73.007V49.6033H76.7996V49.0033Z"
                            fill="#D0D5DD"
                            mask="url(#path-470-inside-234_98_28446)"
                          />
                          <mask id="path-472-inside-235_98_28446" fill="white">
                            <path d="M8.5332 49.3037H12.3258V53.0963H8.5332V49.3037Z" />
                          </mask>
                          <path
                            d="M12.3258 53.0963V53.3963H12.6258V53.0963H12.3258ZM12.0258 49.3037V53.0963H12.6258V49.3037H12.0258ZM12.3258 52.7963H8.5332V53.3963H12.3258V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-472-inside-235_98_28446)"
                          />
                          <mask id="path-474-inside-236_98_28446" fill="white">
                            <path d="M12.3252 49.3037H16.1178V53.0963H12.3252V49.3037Z" />
                          </mask>
                          <path
                            d="M16.1178 53.0963V53.3963H16.4178V53.0963H16.1178ZM15.8178 49.3037V53.0963H16.4178V49.3037H15.8178ZM16.1178 52.7963H12.3252V53.3963H16.1178V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-474-inside-236_98_28446)"
                          />
                          <mask id="path-476-inside-237_98_28446" fill="white">
                            <path d="M16.118 49.3037H19.9106V53.0963H16.118V49.3037Z" />
                          </mask>
                          <path
                            d="M19.9106 53.0963V53.3963H20.2106V53.0963H19.9106ZM19.6106 49.3037V53.0963H20.2106V49.3037H19.6106ZM19.9106 52.7963H16.118V53.3963H19.9106V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-476-inside-237_98_28446)"
                          />
                          <mask id="path-478-inside-238_98_28446" fill="white">
                            <path d="M19.9111 49.3037H23.7037V53.0963H19.9111V49.3037Z" />
                          </mask>
                          <path
                            d="M19.9111 49.3037H23.7037V53.0963H19.9111V49.3037Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M23.7037 53.0963V53.3963H24.0037V53.0963H23.7037ZM23.4037 49.3037V53.0963H24.0037V49.3037H23.4037ZM23.7037 52.7963H19.9111V53.3963H23.7037V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-478-inside-238_98_28446)"
                          />
                          <mask id="path-480-inside-239_98_28446" fill="white">
                            <path d="M23.7032 49.3037H27.4958V53.0963H23.7032V49.3037Z" />
                          </mask>
                          <path
                            d="M27.4958 53.0963V53.3963H27.7958V53.0963H27.4958ZM27.1958 49.3037V53.0963H27.7958V49.3037H27.1958ZM27.4958 52.7963H23.7032V53.3963H27.4958V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-480-inside-239_98_28446)"
                          />
                          <mask id="path-482-inside-240_98_28446" fill="white">
                            <path d="M27.4958 49.3037H31.2884V53.0963H27.4958V49.3037Z" />
                          </mask>
                          <path
                            d="M31.2884 53.0963V53.3963H31.5884V53.0963H31.2884ZM30.9884 49.3037V53.0963H31.5884V49.3037H30.9884ZM31.2884 52.7963H27.4958V53.3963H31.2884V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-482-inside-240_98_28446)"
                          />
                          <mask id="path-484-inside-241_98_28446" fill="white">
                            <path d="M31.2881 49.3037H35.0807V53.0963H31.2881V49.3037Z" />
                          </mask>
                          <path
                            d="M35.0807 53.0963V53.3963H35.3807V53.0963H35.0807ZM34.7807 49.3037V53.0963H35.3807V49.3037H34.7807ZM35.0807 52.7963H31.2881V53.3963H35.0807V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-484-inside-241_98_28446)"
                          />
                          <mask id="path-486-inside-242_98_28446" fill="white">
                            <path d="M35.0811 49.3037H38.8736V53.0963H35.0811V49.3037Z" />
                          </mask>
                          <path
                            d="M38.8736 53.0963V53.3963H39.1736V53.0963H38.8736ZM38.5736 49.3037V53.0963H39.1736V49.3037H38.5736ZM38.8736 52.7963H35.0811V53.3963H38.8736V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-486-inside-242_98_28446)"
                          />
                          <mask id="path-488-inside-243_98_28446" fill="white">
                            <path d="M38.874 49.3037H42.6666V53.0963H38.874V49.3037Z" />
                          </mask>
                          <path
                            d="M42.6666 53.0963V53.3963H42.9666V53.0963H42.6666ZM42.3666 49.3037V53.0963H42.9666V49.3037H42.3666ZM42.6666 52.7963H38.874V53.3963H42.6666V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-488-inside-243_98_28446)"
                          />
                          <mask id="path-490-inside-244_98_28446" fill="white">
                            <path d="M42.6663 49.3037H46.4589V53.0963H42.6663V49.3037Z" />
                          </mask>
                          <path
                            d="M46.4589 53.0963V53.3963H46.7589V53.0963H46.4589ZM46.1589 49.3037V53.0963H46.7589V49.3037H46.1589ZM46.4589 52.7963H42.6663V53.3963H46.4589V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-490-inside-244_98_28446)"
                          />
                          <mask id="path-492-inside-245_98_28446" fill="white">
                            <path d="M46.4589 49.3037H50.2515V53.0963H46.4589V49.3037Z" />
                          </mask>
                          <path
                            d="M50.2515 53.0963V53.3963H50.5515V53.0963H50.2515ZM49.9515 49.3037V53.0963H50.5515V49.3037H49.9515ZM50.2515 52.7963H46.4589V53.3963H50.2515V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-492-inside-245_98_28446)"
                          />
                          <mask id="path-494-inside-246_98_28446" fill="white">
                            <path d="M50.251 49.3037H54.0436V53.0963H50.251V49.3037Z" />
                          </mask>
                          <path
                            d="M54.0436 53.0963V53.3963H54.3436V53.0963H54.0436ZM53.7436 49.3037V53.0963H54.3436V49.3037H53.7436ZM54.0436 52.7963H50.251V53.3963H54.0436V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-494-inside-246_98_28446)"
                          />
                          <mask id="path-496-inside-247_98_28446" fill="white">
                            <path d="M54.0441 49.3037H57.8367V53.0963H54.0441V49.3037Z" />
                          </mask>
                          <path
                            d="M54.0441 49.3037H57.8367V53.0963H54.0441V49.3037Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M57.8367 53.0963V53.3963H58.1367V53.0963H57.8367ZM57.5367 49.3037V53.0963H58.1367V49.3037H57.5367ZM57.8367 52.7963H54.0441V53.3963H57.8367V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-496-inside-247_98_28446)"
                          />
                          <mask id="path-498-inside-248_98_28446" fill="white">
                            <path d="M57.8369 49.3037H61.6295V53.0963H57.8369V49.3037Z" />
                          </mask>
                          <path
                            d="M61.6295 53.0963V53.3963H61.9295V53.0963H61.6295ZM61.3295 49.3037V53.0963H61.9295V49.3037H61.3295ZM61.6295 52.7963H57.8369V53.3963H61.6295V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-498-inside-248_98_28446)"
                          />
                          <mask id="path-500-inside-249_98_28446" fill="white">
                            <path d="M61.6289 49.3037H65.4215V53.0963H61.6289V49.3037Z" />
                          </mask>
                          <path
                            d="M65.4215 53.0963V53.3963H65.7215V53.0963H65.4215ZM65.1215 49.3037V53.0963H65.7215V49.3037H65.1215ZM65.4215 52.7963H61.6289V53.3963H65.4215V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-500-inside-249_98_28446)"
                          />
                          <mask id="path-502-inside-250_98_28446" fill="white">
                            <path d="M65.4218 49.3037H69.2143V53.0963H65.4218V49.3037Z" />
                          </mask>
                          <path
                            d="M69.2143 53.0963V53.3963H69.5143V53.0963H69.2143ZM68.9143 49.3037V53.0963H69.5143V49.3037H68.9143ZM69.2143 52.7963H65.4218V53.3963H69.2143V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-502-inside-250_98_28446)"
                          />
                          <mask id="path-504-inside-251_98_28446" fill="white">
                            <path d="M69.2148 49.3037H73.0074V53.0963H69.2148V49.3037Z" />
                          </mask>
                          <path
                            d="M73.0074 53.0963V53.3963H73.3074V53.0963H73.0074ZM72.7074 49.3037V53.0963H73.3074V49.3037H72.7074ZM73.0074 52.7963H69.2148V53.3963H73.0074V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-504-inside-251_98_28446)"
                          />
                          <mask id="path-506-inside-252_98_28446" fill="white">
                            <path d="M73.007 49.3037H76.7996V53.0963H73.007V49.3037Z" />
                          </mask>
                          <path
                            d="M76.7996 53.0963V53.3963H77.0996V53.0963H76.7996ZM76.4996 49.3037V53.0963H77.0996V49.3037H76.4996ZM76.7996 52.7963H73.007V53.3963H76.7996V52.7963Z"
                            fill="#D0D5DD"
                            mask="url(#path-506-inside-252_98_28446)"
                          />
                          <mask id="path-508-inside-253_98_28446" fill="white">
                            <path d="M8.5332 53.0967H12.3258V56.8893H8.5332V53.0967Z" />
                          </mask>
                          <path
                            d="M8.5332 53.0967H12.3258V56.8893H8.5332V53.0967Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M12.3258 56.8893V57.1893H12.6258V56.8893H12.3258ZM12.0258 53.0967V56.8893H12.6258V53.0967H12.0258ZM12.3258 56.5893H8.5332V57.1893H12.3258V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-508-inside-253_98_28446)"
                          />
                          <mask id="path-510-inside-254_98_28446" fill="white">
                            <path d="M12.3252 53.0967H16.1178V56.8893H12.3252V53.0967Z" />
                          </mask>
                          <path
                            d="M16.1178 56.8893V57.1893H16.4178V56.8893H16.1178ZM15.8178 53.0967V56.8893H16.4178V53.0967H15.8178ZM16.1178 56.5893H12.3252V57.1893H16.1178V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-510-inside-254_98_28446)"
                          />
                          <mask id="path-512-inside-255_98_28446" fill="white">
                            <path d="M16.118 53.0967H19.9106V56.8893H16.118V53.0967Z" />
                          </mask>
                          <path
                            d="M19.9106 56.8893V57.1893H20.2106V56.8893H19.9106ZM19.6106 53.0967V56.8893H20.2106V53.0967H19.6106ZM19.9106 56.5893H16.118V57.1893H19.9106V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-512-inside-255_98_28446)"
                          />
                          <mask id="path-514-inside-256_98_28446" fill="white">
                            <path d="M19.9111 53.0967H23.7037V56.8893H19.9111V53.0967Z" />
                          </mask>
                          <path
                            d="M23.7037 56.8893V57.1893H24.0037V56.8893H23.7037ZM23.4037 53.0967V56.8893H24.0037V53.0967H23.4037ZM23.7037 56.5893H19.9111V57.1893H23.7037V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-514-inside-256_98_28446)"
                          />
                          <mask id="path-516-inside-257_98_28446" fill="white">
                            <path d="M23.7032 53.0967H27.4958V56.8893H23.7032V53.0967Z" />
                          </mask>
                          <path
                            d="M27.4958 56.8893V57.1893H27.7958V56.8893H27.4958ZM27.1958 53.0967V56.8893H27.7958V53.0967H27.1958ZM27.4958 56.5893H23.7032V57.1893H27.4958V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-516-inside-257_98_28446)"
                          />
                          <mask id="path-518-inside-258_98_28446" fill="white">
                            <path d="M27.4961 53.0967H31.2887V56.8893H27.4961V53.0967Z" />
                          </mask>
                          <path
                            d="M31.2887 56.8893V57.1893H31.5887V56.8893H31.2887ZM30.9887 53.0967V56.8893H31.5887V53.0967H30.9887ZM31.2887 56.5893H27.4961V57.1893H31.2887V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-518-inside-258_98_28446)"
                          />
                          <mask id="path-520-inside-259_98_28446" fill="white">
                            <path d="M31.2881 53.0967H35.0807V56.8893H31.2881V53.0967Z" />
                          </mask>
                          <path
                            d="M35.0807 56.8893V57.1893H35.3807V56.8893H35.0807ZM34.7807 53.0967V56.8893H35.3807V53.0967H34.7807ZM35.0807 56.5893H31.2881V57.1893H35.0807V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-520-inside-259_98_28446)"
                          />
                          <mask id="path-522-inside-260_98_28446" fill="white">
                            <path d="M35.0811 53.0967H38.8736V56.8893H35.0811V53.0967Z" />
                          </mask>
                          <path
                            d="M38.8736 56.8893V57.1893H39.1736V56.8893H38.8736ZM38.5736 53.0967V56.8893H39.1736V53.0967H38.5736ZM38.8736 56.5893H35.0811V57.1893H38.8736V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-522-inside-260_98_28446)"
                          />
                          <mask id="path-524-inside-261_98_28446" fill="white">
                            <path d="M38.874 53.0967H42.6666V56.8893H38.874V53.0967Z" />
                          </mask>
                          <path
                            d="M42.6666 56.8893V57.1893H42.9666V56.8893H42.6666ZM42.3666 53.0967V56.8893H42.9666V53.0967H42.3666ZM42.6666 56.5893H38.874V57.1893H42.6666V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-524-inside-261_98_28446)"
                          />
                          <mask id="path-526-inside-262_98_28446" fill="white">
                            <path d="M42.6663 53.0967H46.4589V56.8893H42.6663V53.0967Z" />
                          </mask>
                          <path
                            d="M42.6663 53.0967H46.4589V56.8893H42.6663V53.0967Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M46.4589 56.8893V57.1893H46.7589V56.8893H46.4589ZM46.1589 53.0967V56.8893H46.7589V53.0967H46.1589ZM46.4589 56.5893H42.6663V57.1893H46.4589V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-526-inside-262_98_28446)"
                          />
                          <mask id="path-528-inside-263_98_28446" fill="white">
                            <path d="M46.4587 53.0967H50.2513V56.8893H46.4587V53.0967Z" />
                          </mask>
                          <path
                            d="M50.2513 56.8893V57.1893H50.5513V56.8893H50.2513ZM49.9513 53.0967V56.8893H50.5513V53.0967H49.9513ZM50.2513 56.5893H46.4587V57.1893H50.2513V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-528-inside-263_98_28446)"
                          />
                          <mask id="path-530-inside-264_98_28446" fill="white">
                            <path d="M50.251 53.0967H54.0436V56.8893H50.251V53.0967Z" />
                          </mask>
                          <path
                            d="M54.0436 56.8893V57.1893H54.3436V56.8893H54.0436ZM53.7436 53.0967V56.8893H54.3436V53.0967H53.7436ZM54.0436 56.5893H50.251V57.1893H54.0436V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-530-inside-264_98_28446)"
                          />
                          <mask id="path-532-inside-265_98_28446" fill="white">
                            <path d="M54.0439 53.0967H57.8365V56.8893H54.0439V53.0967Z" />
                          </mask>
                          <path
                            d="M57.8365 56.8893V57.1893H58.1365V56.8893H57.8365ZM57.5365 53.0967V56.8893H58.1365V53.0967H57.5365ZM57.8365 56.5893H54.0439V57.1893H57.8365V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-532-inside-265_98_28446)"
                          />
                          <mask id="path-534-inside-266_98_28446" fill="white">
                            <path d="M57.8369 53.0967H61.6295V56.8893H57.8369V53.0967Z" />
                          </mask>
                          <path
                            d="M61.6295 56.8893V57.1893H61.9295V56.8893H61.6295ZM61.3295 53.0967V56.8893H61.9295V53.0967H61.3295ZM61.6295 56.5893H57.8369V57.1893H61.6295V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-534-inside-266_98_28446)"
                          />
                          <mask id="path-536-inside-267_98_28446" fill="white">
                            <path d="M61.6289 53.0967H65.4215V56.8893H61.6289V53.0967Z" />
                          </mask>
                          <path
                            d="M65.4215 56.8893V57.1893H65.7215V56.8893H65.4215ZM65.1215 53.0967V56.8893H65.7215V53.0967H65.1215ZM65.4215 56.5893H61.6289V57.1893H65.4215V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-536-inside-267_98_28446)"
                          />
                          <mask id="path-538-inside-268_98_28446" fill="white">
                            <path d="M65.4219 53.0967H69.2145V56.8893H65.4219V53.0967Z" />
                          </mask>
                          <path
                            d="M69.2145 56.8893V57.1893H69.5145V56.8893H69.2145ZM68.9145 53.0967V56.8893H69.5145V53.0967H68.9145ZM69.2145 56.5893H65.4219V57.1893H69.2145V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-538-inside-268_98_28446)"
                          />
                          <mask id="path-540-inside-269_98_28446" fill="white">
                            <path d="M69.2148 53.0967H73.0074V56.8893H69.2148V53.0967Z" />
                          </mask>
                          <path
                            d="M69.2148 53.0967H73.0074V56.8893H69.2148V53.0967Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M73.0074 56.8893V57.1893H73.3074V56.8893H73.0074ZM72.7074 53.0967V56.8893H73.3074V53.0967H72.7074ZM73.0074 56.5893H69.2148V57.1893H73.0074V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-540-inside-269_98_28446)"
                          />
                          <mask id="path-542-inside-270_98_28446" fill="white">
                            <path d="M73.007 53.0967H76.7996V56.8893H73.007V53.0967Z" />
                          </mask>
                          <path
                            d="M76.7996 56.8893V57.1893H77.0996V56.8893H76.7996ZM76.4996 53.0967V56.8893H77.0996V53.0967H76.4996ZM76.7996 56.5893H73.007V57.1893H76.7996V56.5893Z"
                            fill="#D0D5DD"
                            mask="url(#path-542-inside-270_98_28446)"
                          />
                          <mask id="path-544-inside-271_98_28446" fill="white">
                            <path d="M8.5332 56.8887H12.3258V60.6813H8.5332V56.8887Z" />
                          </mask>
                          <path
                            d="M12.3258 60.6813V60.9813H12.6258V60.6813H12.3258ZM12.0258 56.8887V60.6813H12.6258V56.8887H12.0258ZM12.3258 60.3813H8.5332V60.9813H12.3258V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-544-inside-271_98_28446)"
                          />
                          <mask id="path-546-inside-272_98_28446" fill="white">
                            <path d="M12.3252 56.8887H16.1178V60.6813H12.3252V56.8887Z" />
                          </mask>
                          <path
                            d="M16.1178 60.6813V60.9813H16.4178V60.6813H16.1178ZM15.8178 56.8887V60.6813H16.4178V56.8887H15.8178ZM16.1178 60.3813H12.3252V60.9813H16.1178V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-546-inside-272_98_28446)"
                          />
                          <mask id="path-548-inside-273_98_28446" fill="white">
                            <path d="M16.118 56.8887H19.9106V60.6813H16.118V56.8887Z" />
                          </mask>
                          <path
                            d="M19.9106 60.6813V60.9813H20.2106V60.6813H19.9106ZM19.6106 56.8887V60.6813H20.2106V56.8887H19.6106ZM19.9106 60.3813H16.118V60.9813H19.9106V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-548-inside-273_98_28446)"
                          />
                          <mask id="path-550-inside-274_98_28446" fill="white">
                            <path d="M19.9111 56.8887H23.7037V60.6813H19.9111V56.8887Z" />
                          </mask>
                          <path
                            d="M23.7037 60.6813V60.9813H24.0037V60.6813H23.7037ZM23.4037 56.8887V60.6813H24.0037V56.8887H23.4037ZM23.7037 60.3813H19.9111V60.9813H23.7037V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-550-inside-274_98_28446)"
                          />
                          <mask id="path-552-inside-275_98_28446" fill="white">
                            <path d="M23.7032 56.8887H27.4958V60.6813H23.7032V56.8887Z" />
                          </mask>
                          <path
                            d="M27.4958 60.6813V60.9813H27.7958V60.6813H27.4958ZM27.1958 56.8887V60.6813H27.7958V56.8887H27.1958ZM27.4958 60.3813H23.7032V60.9813H27.4958V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-552-inside-275_98_28446)"
                          />
                          <mask id="path-554-inside-276_98_28446" fill="white">
                            <path d="M27.4961 56.8887H31.2887V60.6813H27.4961V56.8887Z" />
                          </mask>
                          <path
                            d="M27.4961 56.8887H31.2887V60.6813H27.4961V56.8887Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M31.2887 60.6813V60.9813H31.5887V60.6813H31.2887ZM30.9887 56.8887V60.6813H31.5887V56.8887H30.9887ZM31.2887 60.3813H27.4961V60.9813H31.2887V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-554-inside-276_98_28446)"
                          />
                          <mask id="path-556-inside-277_98_28446" fill="white">
                            <path d="M31.2881 56.8887H35.0807V60.6813H31.2881V56.8887Z" />
                          </mask>
                          <path
                            d="M35.0807 60.6813V60.9813H35.3807V60.6813H35.0807ZM34.7807 56.8887V60.6813H35.3807V56.8887H34.7807ZM35.0807 60.3813H31.2881V60.9813H35.0807V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-556-inside-277_98_28446)"
                          />
                          <mask id="path-558-inside-278_98_28446" fill="white">
                            <path d="M35.0811 56.8887H38.8736V60.6813H35.0811V56.8887Z" />
                          </mask>
                          <path
                            d="M38.8736 60.6813V60.9813H39.1736V60.6813H38.8736ZM38.5736 56.8887V60.6813H39.1736V56.8887H38.5736ZM38.8736 60.3813H35.0811V60.9813H38.8736V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-558-inside-278_98_28446)"
                          />
                          <mask id="path-560-inside-279_98_28446" fill="white">
                            <path d="M38.874 56.8887H42.6666V60.6813H38.874V56.8887Z" />
                          </mask>
                          <path
                            d="M42.6666 60.6813V60.9813H42.9666V60.6813H42.6666ZM42.3666 56.8887V60.6813H42.9666V56.8887H42.3666ZM42.6666 60.3813H38.874V60.9813H42.6666V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-560-inside-279_98_28446)"
                          />
                          <mask id="path-562-inside-280_98_28446" fill="white">
                            <path d="M42.6663 56.8887H46.4589V60.6813H42.6663V56.8887Z" />
                          </mask>
                          <path
                            d="M46.4589 60.6813V60.9813H46.7589V60.6813H46.4589ZM46.1589 56.8887V60.6813H46.7589V56.8887H46.1589ZM46.4589 60.3813H42.6663V60.9813H46.4589V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-562-inside-280_98_28446)"
                          />
                          <mask id="path-564-inside-281_98_28446" fill="white">
                            <path d="M46.4587 56.8887H50.2513V60.6813H46.4587V56.8887Z" />
                          </mask>
                          <path
                            d="M50.2513 60.6813V60.9813H50.5513V60.6813H50.2513ZM49.9513 56.8887V60.6813H50.5513V56.8887H49.9513ZM50.2513 60.3813H46.4587V60.9813H50.2513V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-564-inside-281_98_28446)"
                          />
                          <mask id="path-566-inside-282_98_28446" fill="white">
                            <path d="M50.251 56.8887H54.0436V60.6813H50.251V56.8887Z" />
                          </mask>
                          <path
                            d="M54.0436 60.6813V60.9813H54.3436V60.6813H54.0436ZM53.7436 56.8887V60.6813H54.3436V56.8887H53.7436ZM54.0436 60.3813H50.251V60.9813H54.0436V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-566-inside-282_98_28446)"
                          />
                          <mask id="path-568-inside-283_98_28446" fill="white">
                            <path d="M54.0439 56.8887H57.8365V60.6813H54.0439V56.8887Z" />
                          </mask>
                          <path
                            d="M57.8365 60.6813V60.9813H58.1365V60.6813H57.8365ZM57.5365 56.8887V60.6813H58.1365V56.8887H57.5365ZM57.8365 60.3813H54.0439V60.9813H57.8365V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-568-inside-283_98_28446)"
                          />
                          <mask id="path-570-inside-284_98_28446" fill="white">
                            <path d="M57.8369 56.8887H61.6295V60.6813H57.8369V56.8887Z" />
                          </mask>
                          <path
                            d="M57.8369 56.8887H61.6295V60.6813H57.8369V56.8887Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M61.6295 60.6813V60.9813H61.9295V60.6813H61.6295ZM61.3295 56.8887V60.6813H61.9295V56.8887H61.3295ZM61.6295 60.3813H57.8369V60.9813H61.6295V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-570-inside-284_98_28446)"
                          />
                          <mask id="path-572-inside-285_98_28446" fill="white">
                            <path d="M61.6289 56.8887H65.4215V60.6813H61.6289V56.8887Z" />
                          </mask>
                          <path
                            d="M65.4215 60.6813V60.9813H65.7215V60.6813H65.4215ZM65.1215 56.8887V60.6813H65.7215V56.8887H65.1215ZM65.4215 60.3813H61.6289V60.9813H65.4215V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-572-inside-285_98_28446)"
                          />
                          <mask id="path-574-inside-286_98_28446" fill="white">
                            <path d="M65.4219 56.8887H69.2145V60.6813H65.4219V56.8887Z" />
                          </mask>
                          <path
                            d="M69.2145 60.6813V60.9813H69.5145V60.6813H69.2145ZM68.9145 56.8887V60.6813H69.5145V56.8887H68.9145ZM69.2145 60.3813H65.4219V60.9813H69.2145V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-574-inside-286_98_28446)"
                          />
                          <mask id="path-576-inside-287_98_28446" fill="white">
                            <path d="M69.2148 56.8887H73.0074V60.6813H69.2148V56.8887Z" />
                          </mask>
                          <path
                            d="M73.0074 60.6813V60.9813H73.3074V60.6813H73.0074ZM72.7074 56.8887V60.6813H73.3074V56.8887H72.7074ZM73.0074 60.3813H69.2148V60.9813H73.0074V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-576-inside-287_98_28446)"
                          />
                          <mask id="path-578-inside-288_98_28446" fill="white">
                            <path d="M73.007 56.8887H76.7996V60.6813H73.007V56.8887Z" />
                          </mask>
                          <path
                            d="M76.7996 60.6813V60.9813H77.0996V60.6813H76.7996ZM76.4996 56.8887V60.6813H77.0996V56.8887H76.4996ZM76.7996 60.3813H73.007V60.9813H76.7996V60.3813Z"
                            fill="#D0D5DD"
                            mask="url(#path-578-inside-288_98_28446)"
                          />
                          <mask id="path-580-inside-289_98_28446" fill="white">
                            <path d="M8.5332 60.6816H12.3258V64.4742H8.5332V60.6816Z" />
                          </mask>
                          <path
                            d="M12.3258 64.4742V64.7742H12.6258V64.4742H12.3258ZM12.0258 60.6816V64.4742H12.6258V60.6816H12.0258ZM12.3258 64.1742H8.5332V64.7742H12.3258V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-580-inside-289_98_28446)"
                          />
                          <mask id="path-582-inside-290_98_28446" fill="white">
                            <path d="M12.3252 60.6816H16.1178V64.4742H12.3252V60.6816Z" />
                          </mask>
                          <path
                            d="M12.3252 60.6816H16.1178V64.4742H12.3252V60.6816Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M16.1178 64.4742V64.7742H16.4178V64.4742H16.1178ZM15.8178 60.6816V64.4742H16.4178V60.6816H15.8178ZM16.1178 64.1742H12.3252V64.7742H16.1178V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-582-inside-290_98_28446)"
                          />
                          <mask id="path-584-inside-291_98_28446" fill="white">
                            <path d="M16.118 60.6816H19.9106V64.4742H16.118V60.6816Z" />
                          </mask>
                          <path
                            d="M19.9106 64.4742V64.7742H20.2106V64.4742H19.9106ZM19.6106 60.6816V64.4742H20.2106V60.6816H19.6106ZM19.9106 64.1742H16.118V64.7742H19.9106V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-584-inside-291_98_28446)"
                          />
                          <mask id="path-586-inside-292_98_28446" fill="white">
                            <path d="M19.9111 60.6816H23.7037V64.4742H19.9111V60.6816Z" />
                          </mask>
                          <path
                            d="M23.7037 64.4742V64.7742H24.0037V64.4742H23.7037ZM23.4037 60.6816V64.4742H24.0037V60.6816H23.4037ZM23.7037 64.1742H19.9111V64.7742H23.7037V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-586-inside-292_98_28446)"
                          />
                          <mask id="path-588-inside-293_98_28446" fill="white">
                            <path d="M23.7032 60.6816H27.4958V64.4742H23.7032V60.6816Z" />
                          </mask>
                          <path
                            d="M27.4958 64.4742V64.7742H27.7958V64.4742H27.4958ZM27.1958 60.6816V64.4742H27.7958V60.6816H27.1958ZM27.4958 64.1742H23.7032V64.7742H27.4958V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-588-inside-293_98_28446)"
                          />
                          <mask id="path-590-inside-294_98_28446" fill="white">
                            <path d="M27.4961 60.6816H31.2887V64.4742H27.4961V60.6816Z" />
                          </mask>
                          <path
                            d="M31.2887 64.4742V64.7742H31.5887V64.4742H31.2887ZM30.9887 60.6816V64.4742H31.5887V60.6816H30.9887ZM31.2887 64.1742H27.4961V64.7742H31.2887V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-590-inside-294_98_28446)"
                          />
                          <mask id="path-592-inside-295_98_28446" fill="white">
                            <path d="M31.2881 60.6816H35.0807V64.4742H31.2881V60.6816Z" />
                          </mask>
                          <path
                            d="M35.0807 64.4742V64.7742H35.3807V64.4742H35.0807ZM34.7807 60.6816V64.4742H35.3807V60.6816H34.7807ZM35.0807 64.1742H31.2881V64.7742H35.0807V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-592-inside-295_98_28446)"
                          />
                          <mask id="path-594-inside-296_98_28446" fill="white">
                            <path d="M35.0811 60.6816H38.8736V64.4742H35.0811V60.6816Z" />
                          </mask>
                          <path
                            d="M38.8736 64.4742V64.7742H39.1736V64.4742H38.8736ZM38.5736 60.6816V64.4742H39.1736V60.6816H38.5736ZM38.8736 64.1742H35.0811V64.7742H38.8736V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-594-inside-296_98_28446)"
                          />
                          <mask id="path-596-inside-297_98_28446" fill="white">
                            <path d="M38.874 60.6816H42.6666V64.4742H38.874V60.6816Z" />
                          </mask>
                          <path
                            d="M42.6666 64.4742V64.7742H42.9666V64.4742H42.6666ZM42.3666 60.6816V64.4742H42.9666V60.6816H42.3666ZM42.6666 64.1742H38.874V64.7742H42.6666V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-596-inside-297_98_28446)"
                          />
                          <mask id="path-598-inside-298_98_28446" fill="white">
                            <path d="M42.6663 60.6816H46.4589V64.4742H42.6663V60.6816Z" />
                          </mask>
                          <path
                            d="M46.4589 64.4742V64.7742H46.7589V64.4742H46.4589ZM46.1589 60.6816V64.4742H46.7589V60.6816H46.1589ZM46.4589 64.1742H42.6663V64.7742H46.4589V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-598-inside-298_98_28446)"
                          />
                          <mask id="path-600-inside-299_98_28446" fill="white">
                            <path d="M46.4587 60.6816H50.2513V64.4742H46.4587V60.6816Z" />
                          </mask>
                          <path
                            d="M50.2513 64.4742V64.7742H50.5513V64.4742H50.2513ZM49.9513 60.6816V64.4742H50.5513V60.6816H49.9513ZM50.2513 64.1742H46.4587V64.7742H50.2513V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-600-inside-299_98_28446)"
                          />
                          <mask id="path-602-inside-300_98_28446" fill="white">
                            <path d="M50.251 60.6816H54.0436V64.4742H50.251V60.6816Z" />
                          </mask>
                          <path
                            d="M54.0436 64.4742V64.7742H54.3436V64.4742H54.0436ZM53.7436 60.6816V64.4742H54.3436V60.6816H53.7436ZM54.0436 64.1742H50.251V64.7742H54.0436V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-602-inside-300_98_28446)"
                          />
                          <mask id="path-604-inside-301_98_28446" fill="white">
                            <path d="M54.0439 60.6816H57.8365V64.4742H54.0439V60.6816Z" />
                          </mask>
                          <path
                            d="M57.8365 64.4742V64.7742H58.1365V64.4742H57.8365ZM57.5365 60.6816V64.4742H58.1365V60.6816H57.5365ZM57.8365 64.1742H54.0439V64.7742H57.8365V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-604-inside-301_98_28446)"
                          />
                          <mask id="path-606-inside-302_98_28446" fill="white">
                            <path d="M57.8369 60.6816H61.6295V64.4742H57.8369V60.6816Z" />
                          </mask>
                          <path
                            d="M61.6295 64.4742V64.7742H61.9295V64.4742H61.6295ZM61.3295 60.6816V64.4742H61.9295V60.6816H61.3295ZM61.6295 64.1742H57.8369V64.7742H61.6295V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-606-inside-302_98_28446)"
                          />
                          <mask id="path-608-inside-303_98_28446" fill="white">
                            <path d="M61.6289 60.6816H65.4215V64.4742H61.6289V60.6816Z" />
                          </mask>
                          <path
                            d="M65.4215 64.4742V64.7742H65.7215V64.4742H65.4215ZM65.1215 60.6816V64.4742H65.7215V60.6816H65.1215ZM65.4215 64.1742H61.6289V64.7742H65.4215V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-608-inside-303_98_28446)"
                          />
                          <mask id="path-610-inside-304_98_28446" fill="white">
                            <path d="M65.4219 60.6816H69.2145V64.4742H65.4219V60.6816Z" />
                          </mask>
                          <path
                            d="M69.2145 64.4742V64.7742H69.5145V64.4742H69.2145ZM68.9145 60.6816V64.4742H69.5145V60.6816H68.9145ZM69.2145 64.1742H65.4219V64.7742H69.2145V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-610-inside-304_98_28446)"
                          />
                          <mask id="path-612-inside-305_98_28446" fill="white">
                            <path d="M69.2148 60.6816H73.0074V64.4742H69.2148V60.6816Z" />
                          </mask>
                          <path
                            d="M69.2148 60.6816H73.0074V64.4742H69.2148V60.6816Z"
                            fill="#F9FAFB"
                          />
                          <path
                            d="M73.0074 64.4742V64.7742H73.3074V64.4742H73.0074ZM72.7074 60.6816V64.4742H73.3074V60.6816H72.7074ZM73.0074 64.1742H69.2148V64.7742H73.0074V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-612-inside-305_98_28446)"
                          />
                          <mask id="path-614-inside-306_98_28446" fill="white">
                            <path d="M73.007 60.6816H76.7996V64.4742H73.007V60.6816Z" />
                          </mask>
                          <path
                            d="M76.7996 64.4742V64.7742H77.0996V64.4742H76.7996ZM76.4996 60.6816V64.4742H77.0996V60.6816H76.4996ZM76.7996 64.1742H73.007V64.7742H76.7996V64.1742Z"
                            fill="#D0D5DD"
                            mask="url(#path-614-inside-306_98_28446)"
                          />
                        </g>
                        <rect
                          x="-13.7227"
                          y="0.5"
                          width="112.778"
                          height="82.437"
                          stroke="#D0D5DD"
                        />
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_98_28446"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="trangray(42.75 32) rotate(92.2605) scale(30.4237)"
                        >
                          <stop stop-color="#D9D9D9" />
                          <stop
                            offset="1"
                            stop-color="#D9D9D9"
                            stop-opacity="0"
                          />
                        </radialGradient>
                        <clipPath id="clip0_98_28446">
                          <rect
                            x="-14.2227"
                            width="113.778"
                            height="83.437"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="z-10">
                      <svg
                        className="shadow-sm rounded-lg relative z-10"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="40" height="40" rx="10" fill="white" />
                        <rect
                          width="40"
                          height="40"
                          rx="10"
                          fill="url(#paint0_linear_98_28443)"
                        />
                        <rect
                          x="0.5"
                          y="0.5"
                          width="39"
                          height="39"
                          rx="9.5"
                          stroke="url(#paint1_linear_98_28443)"
                          stroke-opacity="0.3"
                        />
                        <path
                          d="M25.8778 28.0903C24.1693 29.3316 22.1117 30.0001 19.9999 30.0001C17.8881 30.0001 15.8305 29.3316 14.1221 28.0903M24.3836 11.0122C26.2817 11.9379 27.838 13.4408 28.8294 15.3054C29.8208 17.17 30.1965 19.3006 29.9026 21.3919M10.0973 21.3918C9.80343 19.3005 10.1791 17.1699 11.1705 15.3053C12.162 13.4407 13.7182 11.9378 15.6163 11.0121M25.4999 20.0001C25.4999 23.0377 23.0375 25.5001 19.9999 25.5001C16.9623 25.5001 14.4999 23.0377 14.4999 20.0001C14.4999 16.9626 16.9623 14.5001 19.9999 14.5001C23.0375 14.5001 25.4999 16.9626 25.4999 20.0001Z"
                          stroke="#D0D5DD"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_98_28443"
                            x1="20"
                            y1="0"
                            x2="20"
                            y2="40"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#F6F6F6" />
                            <stop
                              offset="0.385412"
                              stop-color="#F2F4F7"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_98_28443"
                            x1="20"
                            y1="0"
                            x2="20"
                            y2="40"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0468566" stop-color="#98A2B3" />
                            <stop
                              offset="1"
                              stop-color="#98A2B3"
                              stop-opacity="0.3"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 w-full pr-4">
                    <h3 className="font-medium text-gray-900">
                      No data available yet
                    </h3>
                    <p className="text-gray-600">
                      Currently, there are no data points to display in your
                      Allocation chart. Once you start allocating funds to your
                      portfolio, their balances and distribution will appear
                      here.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <AssetTable />
        </div>
      </div>
    </main>
  );
}
