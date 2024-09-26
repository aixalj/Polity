"use client";

import * as React from "react";
import { useState, useEffect, useRef, RefObject } from "react";
import type { Config } from "tailwindcss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { useTime } from "@/components/ui/timecontext";

import {
  ArrowDown,
  ArrowUp,
  SwitchHorizontal02,
  LayersThree01,
  LayerSingle,
  AlignRight01,
} from "@untitled-ui/icons-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { blo } from "blo";

import BTC from "cryptocurrency-icons/svg/color/btc.svg";
import ETH from "cryptocurrency-icons/svg/color/eth.svg";
import LINK from "cryptocurrency-icons/svg/color/link.svg";
import MATIC from "cryptocurrency-icons/svg/color/matic.svg";
import USDC from "cryptocurrency-icons/svg/color/usdc.svg";
import USDT from "cryptocurrency-icons/svg/color/usdt.svg";
import WBTC from "cryptocurrency-icons/svg/color/wbtc.svg";
// import WETH from "cryptocurrency-icons/svg/color/weth.svg";

// const tokenIcons = {
//   BTC: btc,
//   ETH: eth,
//   LINK: link,
//   MATIC: matic,
//   USDC: usdc,
//   USDT: usdt,
// };

import {
  format,
  isToday,
  isYesterday,
  isSameYear,
  subDays,
  subWeeks,
  subMonths,
  startOfYear,
} from "date-fns";

import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";

import { Transaction } from "../transactionData";

interface ExchangeRates {
  [key: string]: string;
}

function groupTransactionsByDate(transactions: Transaction[]) {
  const groups: { [key: string]: Transaction[] } = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.timestamp);
    let dateString: string;

    if (isToday(date)) {
      dateString = "Today";
    } else if (isYesterday(date)) {
      dateString = "Yesterday";
    } else if (isSameYear(date, new Date())) {
      dateString = format(date, "MMMM d, yyyy");
    } else {
      dateString = format(date, "MMMM d, yyyy");
    }

    if (!groups[dateString]) {
      groups[dateString] = [];
    }
    groups[dateString].push(transaction);
  });

  return groups;
}

const TransactionTable: React.FC<{
  transactions: Transaction[];
}> = ({ transactions }) => {
  const { selectedTime } = useTime();
  const [filteredTransactions, setFilteredTransactions] =
    useState<Transaction[]>(transactions);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});

  useEffect(() => {
    const now = new Date();
    let filteredData: Transaction[];

    switch (selectedTime) {
      case "pastday":
        filteredData = transactions.filter(
          (t) => new Date(t.timestamp) >= subDays(now, 0)
        );
        break;
      case "pastweek":
        filteredData = transactions.filter(
          (t) => new Date(t.timestamp) >= subWeeks(now, 1)
        );
        break;
      case "pastmonth":
        filteredData = transactions.filter(
          (t) => new Date(t.timestamp) >= subMonths(now, 1)
        );
        break;
      case "threemonths":
        filteredData = transactions.filter(
          (t) => new Date(t.timestamp) >= subMonths(now, 3)
        );
        break;
      case "yeartodate":
        filteredData = transactions.filter(
          (t) => new Date(t.timestamp) >= startOfYear(now)
        );
        break;
      case "pastyear":
        filteredData = transactions.filter(
          (t) => new Date(t.timestamp) >= subMonths(now, 12)
        );
        break;
      case "alltime":
      default:
        filteredData = transactions;
    }

    setFilteredTransactions(filteredData);
  }, [selectedTime, transactions]);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          "https://api.coinbase.com/v2/exchange-rates"
        );
        const data = await response.json();
        setExchangeRates(data.data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRates();
    // Fetch rates every 5 minutes
    const interval = setInterval(fetchExchangeRates, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const getUSDValue = (value: number, token: string): string => {
    if (exchangeRates[token]) {
      const usdValue = value / parseFloat(exchangeRates[token]);
      return usdValue.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }
    return "N/A";
  };

  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setOpenTooltipId(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTooltip = (id: string) => {
    setOpenTooltipId((prevId) => (prevId === id ? null : id));
  };

  const groupedTransactions = groupTransactionsByDate(filteredTransactions);

  return (
    <div className="relative w-full flex flex-col ">
      <div className="w-full flex flex-col gap-1 overflow-y-scroll">
        <div className="w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs">
          <div className="w-9 flex-none"></div>
          <div className="w-40 flex-none px-6 py-3">Type</div>
          <div className="w-96 flex-none px-6 py-3">Transaction</div>
          <div className="w-36 flex-auto px-6 py-3">From</div>
          <div className="w-36 flex-auto px-6 py-3">To</div>
        </div>
        <div>
          {Object.entries(groupedTransactions).map(
            ([date, dateTransactions]) => (
              <div key={date} className="gap-1 flex flex-col">
                <div className="flex gap-2 mb-1 mt-2 items-center break-keep text-xs">
                  <p className="break-keep w-auto whitespace-nowrap text-gray-600">
                    {date}
                  </p>
                  <div className="w-full bg-gray-300 h-[1px]"></div>
                </div>
                {dateTransactions.map((transaction: Transaction) => (
                  <Collapsible
                    key={transaction.transactionHash}
                    className="w-full min-w-fit flex flex-col hover:bg-gray-50 data-[state=open]:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm"
                  >
                    <div className="w-full ease-in-out duration-200">
                      <div className="w-full flex text-left  text-gray-900">
                        <CollapsibleTrigger className="w-9 flex-none h-16 flex items-center justify-center align-middle">
                          <svg
                            className="mx-auto"
                            // className={`mx-auto transition-transform duration-200 ${
                            //   open ? "transform rotate-180" : ""
                            // }`}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="19"
                              height="19"
                              rx="5.5"
                              fill="white"
                            />
                            <rect
                              x="0.5"
                              y="0.5"
                              width="19"
                              height="19"
                              rx="5.5"
                              stroke="#D0D5DD"
                            />
                            <path
                              d="M13 12.0001C13.412 12.0001 13.6472 11.5297 13.4 11.2001L10.4 7.20008C10.2 6.93341 9.8 6.93341 9.6 7.20008L6.6 11.2001C6.35279 11.5297 6.58798 12.0001 7 12.0001H13Z"
                              fill="#1D2939"
                            />
                          </svg>
                        </CollapsibleTrigger>
                        <div className="w-40 font-medium break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-2 h-16 ">
                          <div className="w-8 h-8 rounded-lg border flex items-center justify-center border-gray-200">
                            {transaction.method === "Receive" ? (
                              <ArrowDown className="w-4 h-4 text-gray-500" />
                            ) : transaction.method === "Swap" ? (
                              <SwitchHorizontal02 className="w-4 h-4 text-gray-500" />
                            ) : transaction.method === "Stake" ? (
                              <LayersThree01 className="w-4 h-4 text-gray-500" />
                            ) : transaction.method === "Unstake" ? (
                              <LayerSingle className="w-4 h-4 text-gray-500" />
                            ) : transaction.method === "Lend" ? (
                              <AlignRight01 className="w-4 h-4 text-gray-500" />
                            ) : (
                              <ArrowUp className="w-4 h-4 text-gray-500" />
                            )}
                          </div>
                          <div className="flex flex-col">
                            <p className="text-gray-900 text-sm font-medium">
                              {transaction.method}
                            </p>
                            <p className="text-gray-600 text-xs font-normal">
                              {new Date(
                                transaction.timestamp
                              ).toLocaleTimeString("en-US", {
                                hour12: false,
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="w-96 flex-none px-6 py-3 h-16 flex items-center gap-2">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100">
                              <Image
                                alt={transaction.token}
                                src={
                                  transaction.token === "ETH"
                                    ? ETH
                                    : transaction.token === "USDC"
                                      ? USDC
                                      : transaction.token === "USDT"
                                        ? USDT
                                        : transaction.token === "BTC"
                                          ? BTC
                                          : transaction.token === "MATIC"
                                            ? MATIC
                                            : transaction.token === "LINK"
                                              ? LINK
                                              : transaction.token === "WBTC"
                                                ? WBTC
                                                : null
                                }
                                width={24}
                                height={24}
                              />
                            </div>
                            <div>
                              <p
                                className={`${transaction.method === "Receive" ? "text-teal-600" : transaction.method === "Swap" ? "text-rose-600" : "text-rose-600"} text-sm font-medium`}
                              >
                                {transaction.method === "Receive" ? "+" : "-"}
                                {transaction.value} {transaction.token}
                              </p>
                              <p className="text-gray-600 text-xs">
                                {getUSDValue(
                                  transaction.value,
                                  transaction.token
                                )}
                              </p>
                            </div>
                          </div>
                          {transaction.method === "Swap" && (
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200">
                                <SwitchHorizontal02 className="w-3 h-3 text-gray-500" />
                              </div>
                              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100">
                                <Image
                                  alt={transaction.toToken || ""}
                                  src={
                                    transaction.toToken === "ETH"
                                      ? ETH
                                      : transaction.toToken === "USDC"
                                        ? USDC
                                        : transaction.toToken === "USDT"
                                          ? USDT
                                          : transaction.toToken === "BTC"
                                            ? BTC
                                            : transaction.toToken === "MATIC"
                                              ? MATIC
                                              : transaction.toToken === "LINK"
                                                ? LINK
                                                : transaction.toToken === "WBTC"
                                                  ? WBTC
                                                  : null
                                  }
                                  width={24}
                                  height={24}
                                />
                              </div>
                              <div>
                                <p
                                  className={`text-teal-600 font-medium text-sm`}
                                >
                                  +{transaction.valueTo} {transaction.toToken}
                                </p>
                                <p className="text-gray-600 text-xs">
                                  {getUSDValue(
                                    transaction.valueTo || 0,
                                    transaction.toToken || ""
                                  )}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="w-36 flex-auto text-gray-700 text-sm font-medium  px-6 py-3 h-16 flex items-center">
                          <div ref={tooltipRef}>
                            {/^\d/.test(transaction.fromAddress) ? (
                              <TooltipProvider>
                                <Tooltip
                                  open={
                                    openTooltipId ===
                                    transaction.transactionHash
                                  }
                                  onOpenChange={() =>
                                    toggleTooltip(transaction.transactionHash)
                                  }
                                >
                                  <TooltipTrigger
                                    onClick={(e) => {
                                      e.preventDefault();
                                      toggleTooltip(
                                        transaction.transactionHash
                                      );
                                      navigator.clipboard.writeText(
                                        transaction.fromAddress
                                      );
                                    }}
                                    asChild
                                  >
                                    <span
                                      className="underline underline-offset-4 cursor-pointer flex items-center gap-2"
                                      onClick={() => {
                                        navigator.clipboard.writeText(
                                          transaction.fromAddress
                                        );
                                        const tooltip = document.querySelector(
                                          `[id="${transaction.fromAddress}"]`
                                        );
                                        if (tooltip) {
                                          tooltip.textContent = "Copied!";
                                          setTimeout(() => {
                                            if (tooltip) {
                                              tooltip.textContent =
                                                "Click to copy";
                                            }
                                          }, 2000);
                                        }
                                      }}
                                    >
                                      <div className="w-6 h-6 overflow-hidden rounded-md border border-gray-200">
                                        <Image
                                          alt={transaction.fromAddress}
                                          src={blo(
                                            `0x${transaction.fromAddress.slice(2)}`
                                          )}
                                          width={24}
                                          height={24}
                                        />
                                      </div>
                                      {`${transaction.fromAddress.slice(0, 4)}...${transaction.fromAddress.slice(-4)}`}
                                      <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clip-path="url(#clip0_1278_40151)">
                                          <path
                                            d="M2.5 7.5C2.03406 7.5 1.80109 7.5 1.61732 7.42388C1.37229 7.32239 1.17761 7.12771 1.07612 6.88268C1 6.69891 1 6.46594 1 6V2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H6C6.46594 1 6.69891 1 6.88268 1.07612C7.12771 1.17761 7.32239 1.37229 7.42388 1.61732C7.5 1.80109 7.5 2.03406 7.5 2.5M6.1 11H9.4C9.96005 11 10.2401 11 10.454 10.891C10.6422 10.7951 10.7951 10.6422 10.891 10.454C11 10.2401 11 9.96005 11 9.4V6.1C11 5.53995 11 5.25992 10.891 5.04601C10.7951 4.85785 10.6422 4.70487 10.454 4.60899C10.2401 4.5 9.96005 4.5 9.4 4.5H6.1C5.53995 4.5 5.25992 4.5 5.04601 4.60899C4.85785 4.70487 4.70487 4.85785 4.60899 5.04601C4.5 5.25992 4.5 5.53995 4.5 6.1V9.4C4.5 9.96005 4.5 10.2401 4.60899 10.454C4.70487 10.6422 4.85785 10.7951 5.04601 10.891C5.25992 11 5.53995 11 6.1 11Z"
                                            stroke="#344054"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_1278_40151">
                                            <rect
                                              width="12"
                                              height="12"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p id={transaction.fromAddress}>
                                      Click to copy
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ) : (
                              transaction.fromAddress
                            )}
                          </div>
                        </div>

                        <div className="w-36 flex-auto px-6 py-3 h-16 text-gray-700 text-sm font-medium flex items-center">
                          <div ref={tooltipRef}>
                            {/^\d/.test(transaction.toAddress) ? (
                              <TooltipProvider>
                                <Tooltip
                                  open={
                                    openTooltipId ===
                                    transaction.transactionHash +
                                      transaction.toAddress
                                  }
                                  onOpenChange={() =>
                                    toggleTooltip(
                                      transaction.transactionHash +
                                        transaction.toAddress
                                    )
                                  }
                                >
                                  <TooltipTrigger
                                    onClick={(e) => {
                                      e.preventDefault();
                                      toggleTooltip(
                                        transaction.transactionHash +
                                          transaction.toAddress
                                      );
                                      navigator.clipboard.writeText(
                                        transaction.toAddress
                                      );
                                    }}
                                    asChild
                                  >
                                    <span
                                      className="underline underline-offset-4 cursor-pointer flex items-center gap-2"
                                      onClick={() => {
                                        navigator.clipboard.writeText(
                                          transaction.toAddress
                                        );
                                        const tooltip = document.querySelector(
                                          `[id="${transaction.toAddress}"]`
                                        );
                                        if (tooltip) {
                                          tooltip.textContent = "Copied!";
                                          setTimeout(() => {
                                            if (tooltip) {
                                              tooltip.textContent =
                                                "Click to copy";
                                            }
                                          }, 2000);
                                        }
                                      }}
                                    >
                                      <div className="w-6 h-6 overflow-hidden rounded-md border border-gray-200">
                                        <Image
                                          alt={transaction.toAddress}
                                          src={blo(
                                            `0x${transaction.toAddress.slice(2)}`
                                          )}
                                          width={24}
                                          height={24}
                                        />
                                      </div>
                                      {`${transaction.toAddress.slice(0, 4)}...${transaction.toAddress.slice(-4)}`}
                                      <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g clip-path="url(#clip0_1278_40151)">
                                          <path
                                            d="M2.5 7.5C2.03406 7.5 1.80109 7.5 1.61732 7.42388C1.37229 7.32239 1.17761 7.12771 1.07612 6.88268C1 6.69891 1 6.46594 1 6V2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H6C6.46594 1 6.69891 1 6.88268 1.07612C7.12771 1.17761 7.32239 1.37229 7.42388 1.61732C7.5 1.80109 7.5 2.03406 7.5 2.5M6.1 11H9.4C9.96005 11 10.2401 11 10.454 10.891C10.6422 10.7951 10.7951 10.6422 10.891 10.454C11 10.2401 11 9.96005 11 9.4V6.1C11 5.53995 11 5.25992 10.891 5.04601C10.7951 4.85785 10.6422 4.70487 10.454 4.60899C10.2401 4.5 9.96005 4.5 9.4 4.5H6.1C5.53995 4.5 5.25992 4.5 5.04601 4.60899C4.85785 4.70487 4.70487 4.85785 4.60899 5.04601C4.5 5.25992 4.5 5.53995 4.5 6.1V9.4C4.5 9.96005 4.5 10.2401 4.60899 10.454C4.70487 10.6422 4.85785 10.7951 5.04601 10.891C5.25992 11 5.53995 11 6.1 11Z"
                                            stroke="#344054"
                                            strokeWidth="1.25"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_1278_40151">
                                            <rect
                                              width="12"
                                              height="12"
                                              fill="white"
                                            />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p id={transaction.toAddress}>
                                      Click to copy
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ) : (
                              transaction.toAddress
                            )}
                          </div>
                        </div>
                        {/* <div className="w-36 flex-auto px-6 py-3 h-16 flex items-center"></div> */}
                      </div>
                    </div>
                    <CollapsibleContent className="items-start">
                      <div className="flex gap-2 items-center break-keep text-xs">
                        {/* <div className="w-9 flex-none flex items-center justify-center align-middle"></div> */}
                        <p className="break-keep w-auto whitespace-nowrap pl-6 text-gray-600">
                          Transaction Details
                        </p>
                        <div className="w-full bg-gray-300 h-[1px]"></div>
                      </div>
                      <div className="grid grid-cols-2 w-full py-4 divide-x">
                        <div className="flex flex-col">
                          <div className="px-6 h-11 items-center text-gray-700 flex justify-between">
                            <p className="text-xs">Type</p>
                            <p className="text-sm">{transaction.method}</p>
                          </div>
                          <div className="px-6 h-11 items-center flex text-gray-700 justify-between border-t">
                            <p className="text-xs">Time</p>
                            <p className="texr-sm">
                              {new Date(transaction.timestamp).toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}
                            </p>
                          </div>
                          <div className="px-6 h-11 text-gray-700 items-center flex justify-between border-t">
                            <p className="text-xs">Quantity</p>
                            <p className="text-sm">{transaction.value}</p>
                          </div>
                          <div className="px-6 h-11 items-center flex text-gray-700 justify-between border-t">
                            <p className="text-xs">Transaction Fee</p>
                            <p className="text-sm">
                              {transaction.transactionFee}
                            </p>
                          </div>
                          <div className="px-6 h-11 items-center text-gray-700 flex justify-between border-t">
                            <p className="text-xs">Transaction Hash</p>
                            <p className="text-sm">
                              <span
                                className="underline underline-offset-4 cursor-pointer flex items-center gap-2"
                                onClick={() =>
                                  navigator.clipboard.writeText(
                                    transaction.transactionHash
                                  )
                                }
                              >
                                {`${transaction.transactionHash.slice(0, 4)}...${transaction.transactionHash.slice(-4)}`}
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_1278_40151)">
                                    <path
                                      d="M2.5 7.5C2.03406 7.5 1.80109 7.5 1.61732 7.42388C1.37229 7.32239 1.17761 7.12771 1.07612 6.88268C1 6.69891 1 6.46594 1 6V2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H6C6.46594 1 6.69891 1 6.88268 1.07612C7.12771 1.17761 7.32239 1.37229 7.42388 1.61732C7.5 1.80109 7.5 2.03406 7.5 2.5M6.1 11H9.4C9.96005 11 10.2401 11 10.454 10.891C10.6422 10.7951 10.7951 10.6422 10.891 10.454C11 10.2401 11 9.96005 11 9.4V6.1C11 5.53995 11 5.25992 10.891 5.04601C10.7951 4.85785 10.6422 4.70487 10.454 4.60899C10.2401 4.5 9.96005 4.5 9.4 4.5H6.1C5.53995 4.5 5.25992 4.5 5.04601 4.60899C4.85785 4.70487 4.70487 4.85785 4.60899 5.04601C4.5 5.25992 4.5 5.53995 4.5 6.1V9.4C4.5 9.96005 4.5 10.2401 4.60899 10.454C4.70487 10.6422 4.85785 10.7951 5.04601 10.891C5.25992 11 5.53995 11 6.1 11Z"
                                      stroke="#344054"
                                      strokeWidth="1.25"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1278_40151">
                                      <rect
                                        width="12"
                                        height="12"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="flex text-gray-700 text-sm flex-col">
                          <div className="px-6 h-11 items-center flex justify-between">
                            <p className="text-xs">Status</p>
                            <p>{transaction.status}</p>
                          </div>
                          <div className="px-6 h-11 items-center flex justify-between border-t">
                            <p className="text-xs">Network</p>
                            <p>{transaction.network}</p>
                          </div>
                          <div className="px-6 h-11 items-center flex justify-between border-t">
                            <p className="text-xs">Wallet</p>
                            <p>{transaction.wallet}</p>
                          </div>
                          <div className="px-6 h-11 items-center flex justify-between border-t">
                            <p className="text-xs">From</p>
                            <p>
                              <div ref={tooltipRef}>
                                {/^\d/.test(transaction.fromAddress) ? (
                                  <TooltipProvider>
                                    <Tooltip
                                      open={
                                        openTooltipId ===
                                        transaction.transactionHash +
                                          transaction.fromAddress
                                      }
                                      onOpenChange={() =>
                                        toggleTooltip(
                                          transaction.transactionHash +
                                            transaction.fromAddress
                                        )
                                      }
                                    >
                                      <TooltipTrigger
                                        onClick={(e) => {
                                          e.preventDefault();
                                          toggleTooltip(
                                            transaction.transactionHash +
                                              transaction.fromAddress
                                          );
                                          navigator.clipboard.writeText(
                                            transaction.fromAddress
                                          );
                                        }}
                                        asChild
                                      >
                                        <span
                                          className="underline underline-offset-4 cursor-pointer flex items-center gap-2"
                                          onClick={() => {
                                            navigator.clipboard.writeText(
                                              transaction.fromAddress
                                            );
                                            const tooltip =
                                              document.querySelector(
                                                `[id="${transaction.fromAddress}"]`
                                              );
                                            if (tooltip) {
                                              tooltip.textContent = "Copied!";
                                              setTimeout(() => {
                                                if (tooltip) {
                                                  tooltip.textContent =
                                                    "Click to copy";
                                                }
                                              }, 2000);
                                            }
                                          }}
                                        >
                                          <div className="w-6 h-6 overflow-hidden rounded-md border border-gray-200">
                                            <Image
                                              alt={transaction.fromAddress}
                                              src={blo(
                                                `0x${transaction.fromAddress.slice(2)}`
                                              )}
                                              width={24}
                                              height={24}
                                            />
                                          </div>
                                          {`${transaction.fromAddress.slice(0, 4)}...${transaction.fromAddress.slice(-4)}`}
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g clip-path="url(#clip0_1278_40151)">
                                              <path
                                                d="M2.5 7.5C2.03406 7.5 1.80109 7.5 1.61732 7.42388C1.37229 7.32239 1.17761 7.12771 1.07612 6.88268C1 6.69891 1 6.46594 1 6V2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H6C6.46594 1 6.69891 1 6.88268 1.07612C7.12771 1.17761 7.32239 1.37229 7.42388 1.61732C7.5 1.80109 7.5 2.03406 7.5 2.5M6.1 11H9.4C9.96005 11 10.2401 11 10.454 10.891C10.6422 10.7951 10.7951 10.6422 10.891 10.454C11 10.2401 11 9.96005 11 9.4V6.1C11 5.53995 11 5.25992 10.891 5.04601C10.7951 4.85785 10.6422 4.70487 10.454 4.60899C10.2401 4.5 9.96005 4.5 9.4 4.5H6.1C5.53995 4.5 5.25992 4.5 5.04601 4.60899C4.85785 4.70487 4.70487 4.85785 4.60899 5.04601C4.5 5.25992 4.5 5.53995 4.5 6.1V9.4C4.5 9.96005 4.5 10.2401 4.60899 10.454C4.70487 10.6422 4.85785 10.7951 5.04601 10.891C5.25992 11 5.53995 11 6.1 11Z"
                                                stroke="#344054"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_1278_40151">
                                                <rect
                                                  width="12"
                                                  height="12"
                                                  fill="white"
                                                />
                                              </clipPath>
                                            </defs>
                                          </svg>
                                        </span>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p id={transaction.fromAddress}>
                                          Click to copy
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                ) : (
                                  transaction.fromAddress
                                )}
                              </div>
                            </p>
                          </div>
                          <div className="px-6 h-11 items-center flex justify-between border-t">
                            <p className="text-xs">To</p>
                            <p>
                              <div ref={tooltipRef}>
                                {/^\d/.test(transaction.toAddress) ? (
                                  <TooltipProvider>
                                    <Tooltip
                                      open={
                                        openTooltipId ===
                                        transaction.transactionHash +
                                          transaction.toAddress +
                                          transaction.toAddress
                                      }
                                      onOpenChange={() =>
                                        toggleTooltip(
                                          transaction.transactionHash +
                                            transaction.toAddress +
                                            transaction.toAddress
                                        )
                                      }
                                    >
                                      <TooltipTrigger
                                        onClick={(e) => {
                                          e.preventDefault();
                                          toggleTooltip(
                                            transaction.transactionHash +
                                              transaction.toAddress +
                                              transaction.toAddress
                                          );
                                          navigator.clipboard.writeText(
                                            transaction.toAddress
                                          );
                                        }}
                                        asChild
                                      >
                                        <span
                                          className="underline underline-offset-4 cursor-pointer flex items-center gap-2"
                                          onClick={() => {
                                            navigator.clipboard.writeText(
                                              transaction.toAddress
                                            );
                                            const tooltip =
                                              document.querySelector(
                                                `[id="${transaction.toAddress}"]`
                                              );
                                            if (tooltip) {
                                              tooltip.textContent = "Copied!";
                                              setTimeout(() => {
                                                if (tooltip) {
                                                  tooltip.textContent =
                                                    "Click to copy";
                                                }
                                              }, 2000);
                                            }
                                          }}
                                        >
                                          <div className="w-6 h-6 overflow-hidden rounded-md border border-gray-200">
                                            <Image
                                              alt={transaction.toAddress}
                                              src={blo(
                                                `0x${transaction.toAddress.slice(2)}`
                                              )}
                                              width={24}
                                              height={24}
                                            />
                                          </div>
                                          {`${transaction.toAddress.slice(0, 4)}...${transaction.toAddress.slice(-4)}`}
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g clip-path="url(#clip0_1278_40151)">
                                              <path
                                                d="M2.5 7.5C2.03406 7.5 1.80109 7.5 1.61732 7.42388C1.37229 7.32239 1.17761 7.12771 1.07612 6.88268C1 6.69891 1 6.46594 1 6V2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H6C6.46594 1 6.69891 1 6.88268 1.07612C7.12771 1.17761 7.32239 1.37229 7.42388 1.61732C7.5 1.80109 7.5 2.03406 7.5 2.5M6.1 11H9.4C9.96005 11 10.2401 11 10.454 10.891C10.6422 10.7951 10.7951 10.6422 10.891 10.454C11 10.2401 11 9.96005 11 9.4V6.1C11 5.53995 11 5.25992 10.891 5.04601C10.7951 4.85785 10.6422 4.70487 10.454 4.60899C10.2401 4.5 9.96005 4.5 9.4 4.5H6.1C5.53995 4.5 5.25992 4.5 5.04601 4.60899C4.85785 4.70487 4.70487 4.85785 4.60899 5.04601C4.5 5.25992 4.5 5.53995 4.5 6.1V9.4C4.5 9.96005 4.5 10.2401 4.60899 10.454C4.70487 10.6422 4.85785 10.7951 5.04601 10.891C5.25992 11 5.53995 11 6.1 11Z"
                                                stroke="#344054"
                                                strokeWidth="1.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              />
                                            </g>
                                            <defs>
                                              <clipPath id="clip0_1278_40151">
                                                <rect
                                                  width="12"
                                                  height="12"
                                                  fill="white"
                                                />
                                              </clipPath>
                                            </defs>
                                          </svg>
                                        </span>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p id={transaction.toAddress}>
                                          Click to copy
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                ) : (
                                  transaction.toAddress
                                )}
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export { TransactionTable };
