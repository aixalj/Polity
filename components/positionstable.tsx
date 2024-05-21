// "use client";

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
    <div className="relative w-full flex flex-col">
      {networkAccounts?.map((account) =>
        account.positions?.map((position) => (
          <div key={position.DApp}>
            <div className="p-4 relative flex justify-between w-full justify-items-stretch flex-row place-content-between	">
              <div className="w-full flex flex-row justify-between">
                <h2>{position.DApp}</h2>
                <div className="">
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

                <div className="w-48  px-6 py-3">Value</div>
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
                          <div className="w-full font-medium break-keep whitespace-nowrap px-6 py-3 flex items-center gap-2 h-16 ">
                            {/* <Image
                        src={`/wallets/${position.DApp}.svg`}
                        alt={position.DApp}
                        width={24}
                        height={24}
                      /> */}
                            {position.Positions[0].Position}
                          </div>

                          <div className="w-48 flex-auto px-6 py-3 h-16 flex items-center">
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
                            Asset Staked
                          </p>
                          <p className="w-full  px-6 ">Amount Staked</p>
                          <p className="w-full  px-6 ">Annual Yield (%)</p>
                          {positi.Position !== "Borrowing" && (
                            <p className="w-full  px-6">Rewards Earned</p>
                          )}
                          <p className="w-full  px-6">Lockup Period</p>
                          <p className="w-full  px-6">Value</p>
                        </div>

                        <div
                          key={position.Positions[0].Position}
                          className="w-full  flex text-gray-900 text-md"
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
                          <div className="w-full  px-6 py-3 h-16 flex items-center gap-3">
                            {positi.Amount}
                          </div>
                          <div className="w-full flex-auto px-6 py-3 h-16 items-center flex">
                            {positi.Yield}
                          </div>
                          {positi.Position !== "Borrowing" && (
                            <div className="w-full flex-auto px-6 py-3 h-16 items-center flex">
                              {positi.RewardsEarned}
                            </div>
                          )}

                          <div className="w-full flex-auto px-6 py-3 h-16 items-center flex">
                            {positi.LockupPeriod}
                          </div>
                          <div className="w-full flex-auto px-6 py-3 h-16 items-center flex">
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
