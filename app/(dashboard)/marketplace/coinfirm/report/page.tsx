"use client";

import Image from "next/image";
import type { Config } from "tailwindcss";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart } from "@tremor/react";

import { Progress } from "@/components/ui/progress";

import { useState } from "react";

import { Subscribe } from "@/components/subscribe";
import { SubscribeProvider } from "@/components/ui/subscribecontext";

import {
  RadioGroup,
  RadioGroupItem,
  RadioOption,
} from "@/components/ui/largeradio";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { Lightning01, PackageSearch } from "@untitled-ui/icons-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { BuyReport } from "@/components/buyreport";
import { SubscriptionTable } from "@/components/subscription/subscriptiontable";
import { subscriptions } from "@/components/subscription/subscriptiondata";
import {
  reports as initialReports,
  type Report,
} from "@/components/report/reportdata";
import { ReportTable } from "@/components/report/reporttable";

export default function Marketplace() {
  const [selectedOption, setSelectedOption] = useState<string>("1");
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [selectedAccount, setSelectedAccount] = useState<string>("");
  const [reports, setReports] = useState(initialReports);

  const handleGenerateReport = () => {
    const networkIcons: { [key: string]: string } = {
      btc: "BTC",
      eth: "ETH",
      polygon: "MATIC",
    };

    const newReport: Report = {
      name: selectedWallet,
      network: networkIcons[selectedAccount] || "Unknown",
      address: "0x8f...47d2",
      generationDate: new Date(),
      status: "Processing",
    };

    setReports([newReport, ...reports]);
  };

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
                    Marketplace{" "}
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
                  <a href="#" className="block transition ">
                    {" "}
                    Coinfirm{" "}
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
                    AML Risk Report{" "}
                  </a>
                </li>
              </ol>
            </nav>

            <div className="w-full  mt-4 flex items-center justify-between">
              {" "}
              <div>
                <div className="flex items-center gap-2 text-lg mb-3 font-medium">
                  <div className="border w-8 h-8 overflow-hidden  rounded-lg border-gray-300 flex items-center justify-center">
                    <img
                      src="https://www.fintechfutures.com/files/2021/09/coinfirm.jpg"
                      alt="Coinfirm"
                      width={32}
                      height={32}
                    />
                  </div>
                  <h2>Coinfirm</h2>
                </div>
                <h1 className="text-3xl font-medium leading-tight">
                  AML Risk Report
                </h1>{" "}
                <p className="text-sm text-gray-700 my-2 text-balance">
                  The Coinfirm AML Risk Report provides you with advanced
                  personal risk analysis for any blockchain address, enhancing
                  your vigilance against money laundering and terrorism
                  financing activities.
                </p>
                <a
                  href="https://lukka.tech/"
                  target="_blank"
                  className="text-sm mt-2 mb-4 cursor-pointer font-semibold text-primary-700"
                >
                  Learn more about Coinfirm
                </a>
              </div>
              <div className="flex gap-3">
                <BuyReport />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Lightning01 className="w-5 h-5" />
                      Generate Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[512px] rounded-3xl">
                    <div className="pb-3  flex flex-col">
                      <div className="w-full mb-4 flex justify-between items-center">
                        <PackageSearch className="w-8 h-8 text-gray-700" />
                      </div>
                      <div className="text-xl mb-1">
                        <div>Enter Network Address</div>
                      </div>
                      <div className="text-gray-600 flex text-sm flex-col items-start gap-4 ">
                        Enter the network account address you&apos;re interested
                        in analyzing to generate a comprehensive analysis
                        report, or input any address to begin a random
                        assessment.
                      </div>
                    </div>
                    <div>
                      <RadioGroup
                        value={selectedOption}
                        onValueChange={setSelectedOption}
                        defaultValue="1"
                      >
                        <RadioOption
                          value="1"
                          title="Internal Network Address"
                          description="Select a Wallet and corresponding Network Account"
                        >
                          <Select
                            onValueChange={(value) => {
                              setSelectedWallet(value);
                              setSelectedAccount("");
                            }}
                            value={selectedWallet}
                          >
                            <SelectTrigger className="w-full h-11 border-gray-300 text-gray-500 font-regular gap-2">
                              <SelectValue
                                className="text-gray-500 font-regular"
                                placeholder="Select a Wallet..."
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Main Wallet">
                                <div className="flex items-center gap-2">
                                  <img
                                    src="/wallets/wallet1.svg"
                                    alt="Wallet 1"
                                    width={24}
                                    height={24}
                                  />

                                  <p className="text-gray-900 font-medium">
                                    Main Wallet
                                  </p>
                                </div>
                              </SelectItem>
                              <SelectItem value="MATIC">
                                <div className="flex items-center gap-2">
                                  <img
                                    src="/wallets/wallet2.svg"
                                    alt="Wallet 2"
                                    width={24}
                                    height={24}
                                  />

                                  <p className="text-gray-900 font-medium">
                                    Second Wallet
                                  </p>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <Select
                            onValueChange={setSelectedAccount}
                            value={selectedAccount}
                            disabled={!selectedWallet}
                          >
                            <SelectTrigger
                              className={`w-full h-11 border-gray-300 text-gray-500 font-regular gap-2 ${
                                !selectedWallet
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                            >
                              <SelectValue
                                className="text-gray-500 font-regular"
                                placeholder="Select a network account..."
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="btc">
                                <div className="flex items-center gap-2">
                                  <img
                                    src="/icons/networks/BTC.svg"
                                    alt="Ethereum"
                                    width={24}
                                    height={24}
                                  />
                                  <p className="text-gray-900 font-medium">
                                    Network Account Name (0x8f...47d2)
                                  </p>
                                </div>
                              </SelectItem>
                              <SelectItem value="eth">
                                <div className="flex items-center gap-2">
                                  <img
                                    src="/icons/networks/ETH.svg"
                                    alt="Ethereum"
                                    width={24}
                                    height={24}
                                  />
                                  <p className="text-gray-900 font-medium">
                                    Network Account Name (0x8f...47d2)
                                  </p>
                                </div>
                              </SelectItem>

                              <SelectItem value="polygon">
                                <div className="flex items-center gap-2">
                                  <img
                                    src="/icons/networks/MATIC.svg"
                                    alt="Polygon"
                                    width={24}
                                    height={24}
                                  />

                                  <p className="text-gray-900 font-medium">
                                    Network Account Name (0x8f...47d2)
                                  </p>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </RadioOption>
                        <div className="flex items-center gap-2">
                          <div className="w-full h-[1px] bg-gray-200"></div>
                          <p className="text-sm text-gray-600">OR</p>
                          <div className="w-full h-[1px] bg-gray-200"></div>
                        </div>
                        <RadioOption
                          value="2"
                          title="External Network Address"
                          description="Select to manually enter a network address"
                        >
                          <Input placeholder="Enter Network Address..." />
                        </RadioOption>
                      </RadioGroup>
                    </div>
                    <DialogClose asChild>
                      <Button
                        className="w-full"
                        onClick={handleGenerateReport}
                        disabled={
                          selectedOption === "1"
                            ? !selectedWallet || !selectedAccount
                            : false
                        }
                      >
                        <Lightning01 className="w-5 h-5" />
                        Generate Report
                      </Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
            <div className="relative w-full flex flex-col pb-40">
              <div className="py-4 relative flex w-full flex-row justify-between">
                <h2 className="text-2xl font-medium">Report History</h2>
                <p>Available Reports: {reports.length}</p>
              </div>
              <ReportTable reports={reports} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
