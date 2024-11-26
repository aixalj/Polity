"use client";

import * as React from "react";
import type { Config } from "tailwindcss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import Image from "next/image";

import { useState, useEffect } from "react";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ilzanfrmzylbvkoyhefz.supabase.co";
const supabaseKey =
  process.env.SUPABASE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsemFuZnJtenlsYnZrb3loZWZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTAxNTg2MCwiZXhwIjoyMDMwNTkxODYwfQ.NUkkfYlSq3iHkr1hjIK3uMev7VzKt6F_2fqTne4JKNU";
const supabase = createClient(supabaseUrl, supabaseKey);

import { Progress } from "@/components/ui/progress";

import Link from "next/link";
import { networkAccounts } from "./data";

interface Wallet {
  id: string;
  wallet_id: string;
  wallet_name: string;
  allocation: number;
  return: number;
  value: number;
}

interface NetworkAccount {
  name: string;
  walletName: string;
  id: string;
  address: string;
  network: string;
  allocation: number;
  return: number;
  value: number;
  balance: number;
  positions: Position[];
}

interface Position {
  DApp: string;
  TotalValue: number;
  Positions: Positi[];
}

interface Positi {
  Position: string;
  Value: number;
  Asset: string;
  Amount: number;
  Yield: number;
  RewardsEarned: number;
  LockupPeriod: string;
}

const PositionsTable: React.FC<{
  wallets: Wallet[];
  networkAccounts: NetworkAccount[];
}> = ({ wallets, networkAccounts }) => {
  return (
    <div className="relative w-full gap-3 flex flex-col">
      {networkAccounts?.map((account) =>
        account.positions?.map((position) => (
          <div key={position.DApp}>
            <div className="pl-4 py-4 relative flex justify-between w-full justify-items-stretch flex-row place-content-between	">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src={`/icons/DApps/${position.DApp}.svg`}
                    alt={position.DApp}
                    className="rounded-full border border-gray-200 bg-gray-50"
                    width={40}
                    height={40}
                  />
                  <h2 className="w-full text-2xl">{position.DApp}</h2>
                </div>
                <div className="w-48 px-6 flex-none items-start justify-start">
                  <p className="text-sm text-gray-600">Total Value</p>
                  {position.TotalValue.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1 overflow-y-scroll">
              <div className="w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs">
                <div className="w-9 flex-none"></div>
                <div className="w-full  px-6 py-3">Position</div>

                <div className="w-48 flex-none px-6 py-3">Value</div>
              </div>
              {Array.isArray(networkAccounts[0].positions) ? (
                <div>
                  {position.Positions.map((positi) => (
                    <Collapsible
                      key={positi.Position}
                      className="w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm "
                    >
                      <CollapsibleTrigger className="w-full ease-in-out duration-200">
                        <div className="w-full flex text-left  text-gray-900">
                          <div className="w-9 flex-none h-16 flex items-center justify-center align-middle">
                            <svg
                              className="mx-auto"
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
                          </div>
                          <div className=" w-full font-medium break-keep whitespace-nowrap px-6 py-3 flex items-center gap-2 h-16 ">
                            {positi.Position !== "Borrowing" && (
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="31"
                                  height="31"
                                  rx="7.5"
                                  fill="white"
                                />
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="31"
                                  height="31"
                                  rx="7.5"
                                  stroke="#EAECF0"
                                />
                                <g clip-path="url(#clip0_106_46577)">
                                  <path
                                    d="M9.33337 15.9999L15.7615 19.214C15.849 19.2577 15.8927 19.2795 15.9386 19.2882C15.9792 19.2958 16.0209 19.2958 16.0615 19.2882C16.1074 19.2795 16.1511 19.2577 16.2386 19.214L22.6667 15.9999M9.33337 19.3332L15.7615 22.5473C15.849 22.591 15.8927 22.6129 15.9386 22.6215C15.9792 22.6291 16.0209 22.6291 16.0615 22.6215C16.1074 22.6129 16.1511 22.591 16.2386 22.5473L22.6667 19.3332M9.33337 12.6665L15.7615 9.45247C15.849 9.40874 15.8927 9.38688 15.9386 9.37827C15.9792 9.37065 16.0209 9.37065 16.0615 9.37827C16.1074 9.38688 16.1511 9.40874 16.2386 9.45247L22.6667 12.6665L16.2386 15.8806C16.1511 15.9244 16.1074 15.9462 16.0615 15.9548C16.0209 15.9624 15.9792 15.9624 15.9386 15.9548C15.8927 15.9462 15.849 15.9244 15.7615 15.8806L9.33337 12.6665Z"
                                    stroke="#667085"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_106_46577">
                                    <rect
                                      width="16"
                                      height="16"
                                      fill="white"
                                      transform="translate(8 8)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            )}
                            {positi.Position !== "Staking" && (
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="31"
                                  height="31"
                                  rx="7.5"
                                  fill="white"
                                />
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width="31"
                                  height="31"
                                  rx="7.5"
                                  stroke="#EAECF0"
                                />
                                <path
                                  d="M10 10V22M22 16H12.6667M12.6667 16L17.3333 20.6667M12.6667 16L17.3333 11.3333"
                                  stroke="#667085"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            )}
                            {position.Positions[0].Position}
                          </div>

                          <div className="w-48 flex-none px-6 py-3 h-16 flex text-md items-center">
                            {position.Positions[0].Value.toLocaleString(
                              "en-US",
                              {
                                style: "currency",
                                currency: "USD",
                              }
                            )}
                          </div>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="items-start">
                        <div className="flex  w-full pt-2 pb-0.5  text-xs text-gray-600">
                          <div className="w-9 flex-none"></div>
                          <p className="w-56 flex-none items-center px-6">
                            {positi.Position === "Staking"
                              ? "Asset Staked"
                              : "Asset Borrowed"}
                          </p>
                          {positi.Position !== "Staking" && (
                            <p className="w-full  px-6">Collateral Asset</p>
                          )}
                          <p className="w-full  px-6 ">Amount</p>
                          <p className="w-full  px-6 ">Annual Yield (%)</p>
                          {positi.Position !== "Borrowing" && (
                            <p className="w-full  px-6">Rewards Earned</p>
                          )}
                          {positi.Position !== "Borrowing" && (
                            <p className="w-full  px-6">Lockup Period</p>
                          )}
                          <p className="w-48 flex-none px-6">Value</p>
                        </div>

                        <div
                          key={position.Positions[0].Position}
                          className="w-full  flex text-gray-600 text-sm"
                        >
                          <div className="w-9 flex-none"></div>
                          <div className="w-56 flex-none px-6 py-3 flex items-center gap-3 max-h-16">
                            <Image
                              src={`/icons/networks/${account.id}.svg`}
                              alt={account.id}
                              width={24}
                              height={24}
                            />

                            <div className="w-full font-medium">
                              <p className="text-sm">{positi.Asset}</p>
                            </div>
                          </div>
                          {positi.Position !== "Staking" && (
                            <div className="w-full  px-6 py-3 h-16 flex text-sm items-center gap-3">
                              <Image
                                src={`/icons/networks/${account.id}.svg`}
                                alt={account.id}
                                width={24}
                                height={24}
                              />
                              {positi.Amount} {positi.Asset}
                            </div>
                          )}
                          <div className="w-full  px-6 py-3 h-16 flex items-center gap-3">
                            {positi.Amount} {positi.Asset}
                          </div>
                          <div className="w-full flex-auto px-6 py-3 h-16 items-center flex">
                            {positi.Yield.toFixed(2)} %
                          </div>
                          {positi.Position !== "Borrowing" && (
                            <div className="w-full flex-auto px-6 text-teal-600 py-3 h-16 items-center flex">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                className="mr-1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_106_46635)">
                                  <path
                                    d="M6 3V11M6 3H4.23214C3.97166 3 3.72185 2.89464 3.53766 2.70711C3.35348 2.51957 3.25 2.26522 3.25 2C3.25 1.73478 3.35348 1.48043 3.53766 1.29289C3.72185 1.10536 3.97166 1 4.23214 1C5.60714 1 6 3 6 3ZM6 3H7.76786C8.02834 3 8.27815 2.89464 8.46234 2.70711C8.64652 2.51957 8.75 2.26522 8.75 2C8.75 1.73478 8.64652 1.48043 8.46234 1.29289C8.27815 1.10536 8.02834 1 7.76786 1C6.39286 1 6 3 6 3ZM10 5.5V9.4C10 9.96005 10 10.2401 9.89101 10.454C9.79513 10.6422 9.64215 10.7951 9.45399 10.891C9.24008 11 8.96005 11 8.4 11L3.6 11C3.03995 11 2.75992 11 2.54601 10.891C2.35785 10.7951 2.20487 10.6422 2.10899 10.454C2 10.2401 2 9.96005 2 9.4V5.5M1 3.8L1 4.7C1 4.98003 1 5.12004 1.0545 5.22699C1.10243 5.32108 1.17892 5.39757 1.273 5.4455C1.37996 5.5 1.51997 5.5 1.8 5.5L10.2 5.5C10.48 5.5 10.62 5.5 10.727 5.4455C10.8211 5.39757 10.8976 5.32108 10.9455 5.227C11 5.12004 11 4.98003 11 4.7V3.8C11 3.51997 11 3.37996 10.9455 3.27301C10.8976 3.17892 10.8211 3.10243 10.727 3.0545C10.62 3 10.48 3 10.2 3L1.8 3C1.51997 3 1.37996 3 1.273 3.0545C1.17892 3.10243 1.10243 3.17892 1.0545 3.273C1 3.37996 1 3.51997 1 3.8Z"
                                    stroke="#0E9384"
                                    stroke-width="1.25"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_106_46635">
                                    <rect width="12" height="12" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              {positi.RewardsEarned} {positi.Asset} ($102.34)
                            </div>
                          )}
                          {positi.Position !== "Borrowing" && (
                            <div className="w-full flex-auto px-6 py-3 h-16 items-center flex">
                              {positi.LockupPeriod}
                            </div>
                          )}
                          <div className="w-48 flex-none px-6 py-3 h-16 items-center flex">
                            {positi.Value.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              ) : (
                <p>No Positions to display.</p>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export { PositionsTable };
