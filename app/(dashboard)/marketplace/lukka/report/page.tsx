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
import { toast } from "sonner";

const SuccessIcon = () => (
  <div className="mr-3">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="#D1FADF" />
      <g clipPath="url(#clip0_408_16592)">
        <path
          d="M17.5003 20.0003L19.167 21.667L22.917 17.917M16.1118 13.1826C16.7817 13.1291 17.4176 12.8657 17.929 12.4298C19.1226 11.4127 20.8781 11.4127 22.0716 12.4298C22.5831 12.8657 23.219 13.1291 23.8889 13.1826C25.452 13.3073 26.6933 14.5486 26.8181 16.1118C26.8715 16.7817 27.1349 17.4176 27.5708 17.929C28.5879 19.1226 28.5879 20.8781 27.5708 22.0716C27.1349 22.5831 26.8715 23.219 26.8181 23.8889C26.6933 25.452 25.452 26.6933 23.8889 26.8181C23.219 26.8715 22.5831 27.1349 22.0716 27.5708C20.8781 28.5879 19.1226 28.5879 17.929 27.5708C17.4176 27.1349 16.7817 26.8715 16.1118 26.8181C14.5486 26.6933 13.3073 25.452 13.1826 23.8889C13.1291 23.219 12.8657 22.5831 12.4298 22.0716C11.4127 20.8781 11.4127 19.1226 12.4298 17.929C12.8657 17.4176 13.1291 16.7817 13.1826 16.1118C13.3073 14.5486 14.5486 13.3073 16.1118 13.1826Z"
          stroke="#039855"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_408_16592">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
);

const isValidEthereumAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

const isValidBitcoinAddress = (address: string): boolean => {
  // Basic Bitcoin address validation (supports legacy, segwit, and native segwit)
  return /^(1|3|bc1)[a-zA-Z0-9]{25,62}$/.test(address);
};

export default function Marketplace() {
  const [selectedOption, setSelectedOption] = useState<string>("1");
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [selectedAccount, setSelectedAccount] = useState<string>("");
  const [externalAddress, setExternalAddress] = useState<string>("");
  const [addressError, setAddressError] = useState<string>("");
  const [reports, setReports] = useState(initialReports);

  const validateAddress = (address: string) => {
    if (address.startsWith("0x")) {
      if (!isValidEthereumAddress(address)) {
        setAddressError("Invalid Ethereum address format");
        return false;
      }
    } else {
      if (!isValidBitcoinAddress(address)) {
        setAddressError("Invalid Bitcoin address format");
        return false;
      }
    }
    setAddressError("");
    return true;
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    setExternalAddress(address);
    if (address) {
      validateAddress(address);
    } else {
      setAddressError("");
    }
  };

  const handleGenerateReport = () => {
    const networkIcons: { [key: string]: string } = {
      btc: "BTC",
      eth: "ETH",
      polygon: "MATIC",
    };

    // Get the address based on the selected account
    const accountAddresses: { [key: string]: string } = {
      btc: "0x8f...47d2",
      eth: "0x8f...47d2",
      polygon: "0x8f...47d2",
    };

    // Determine network based on address format for option 2
    let network = networkIcons[selectedAccount] || "Unknown";
    let address =
      selectedOption === "1"
        ? accountAddresses[selectedAccount]
        : externalAddress;

    // For external addresses, detect network from address format
    if (selectedOption === "2") {
      if (externalAddress.toLowerCase().startsWith("0x")) {
        network = "ETH";
      } else {
        network = "BTC";
      }
    }

    const newReport: Report = {
      name: selectedOption === "1" ? `${selectedWallet}` : "External Wallet",
      network,
      address,
      generationDate: new Date(),
      status: "Processing",
    };

    setReports([newReport, ...reports]);

    toast.custom((t) => (
      <div className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="20" fill="#D1FADF" />
          <g clipPath="url(#clip0_408_16592)">
            <path
              d="M17.5003 20.0003L19.167 21.667L22.917 17.917M16.1118 13.1826C16.7817 13.1291 17.4176 12.8657 17.929 12.4298C19.1226 11.4127 20.8781 11.4127 22.0716 12.4298C22.5831 12.8657 23.219 13.1291 23.8889 13.1826C25.452 13.3073 26.6933 14.5486 26.8181 16.1118C26.8715 16.7817 27.1349 17.4176 27.5708 17.929C28.5879 19.1226 28.5879 20.8781 27.5708 22.0716C27.1349 22.5831 26.8715 23.219 26.8181 23.8889C26.6933 25.452 25.452 26.6933 23.8889 26.8181C23.219 26.8715 22.5831 27.1349 22.0716 27.5708C20.8781 28.5879 19.1226 28.5879 17.929 27.5708C17.4176 27.1349 16.7817 26.8715 16.1118 26.8181C14.5486 26.6933 13.3073 25.452 13.1826 23.8889C13.1291 23.219 12.8657 22.5831 12.4298 22.0716C11.4127 20.8781 11.4127 19.1226 12.4298 17.929C12.8657 17.4176 13.1291 16.7817 13.1826 16.1118C13.3073 14.5486 14.5486 13.3073 16.1118 13.1826Z"
              stroke="#039855"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_408_16592">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(10 10)"
              />
            </clipPath>
          </defs>
        </svg>
        <div>
          <div className="font-medium">Report Generation Initiated</div>
          <div className="text-gray-600 text-sm">
            Your AML Risk Report is being processed. Check the Report History
            for status updates.
          </div>
        </div>
      </div>
    ));
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
                    Lukka
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
                      src="/icons/Lukka.svg"
                      alt="Lukka"
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
                  Advanced risk assessment tool for blockchain transactions and
                  crypto-related activity.
                </p>
                <a
                  href="https://lukka.tech/"
                  target="_blank"
                  className="text-sm mt-2 mb-4 cursor-pointer font-semibold text-primary-700"
                >
                  Learn more about Lukka
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
                              <SelectItem value="Second Wallet">
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
                          <div className="flex flex-col gap-1.5">
                            <Input
                              placeholder="Enter Network Address..."
                              value={externalAddress}
                              onChange={handleAddressChange}
                              className={addressError ? "border-red-500" : ""}
                            />
                            {addressError && (
                              <p className="text-sm text-red-500">
                                {addressError}
                              </p>
                            )}
                          </div>
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
                            : !externalAddress.trim() || !!addressError
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
