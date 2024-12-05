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
}

const WalletTable: React.FC<{
  wallets: Wallet[];
  networkAccounts: NetworkAccount[];
}> = ({ wallets, networkAccounts }) => {
  // const [wallets, setWallets] = useState<Wallet[]>([]);
  // useEffect(() => {
  //   const fetchWallets = async () => {
  //     const { data, error } = await supabase
  //       .from("wallets")
  //       .select("id, wallet_id, wallet_name, allocation, return, value");

  //     if (error) {
  //       console.error("Error fetching wallets:", error);
  //     } else {
  //       setWallets(data || []);
  //     }
  //   };

  //   fetchWallets();
  // }, []);

  return (
    <div className="relative w-full flex flex-col">
      <div className="p-4 relative flex justify-between w-full justify-items-stretch flex-row place-content-between	">
        <div className="flex flex-col max-w-[30rem]">
          <h2 className="text-xl font-medium">Wallets</h2>
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 overflow-y-scroll">
        <div className="w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs">
          <div className="w-9 flex-none"></div>
          <div className="w-80 flex-none px-6 py-3">Wallet</div>
          <div className="w-60 flex-none px-6 py-3">Allocation %</div>
          <div className="w-36 flex-auto px-6 py-3">Return</div>
          <div className="w-36 flex-auto px-6 py-3">Value</div>
          <div className="w-36 flex-auto px-6 py-3">Balance</div>
        </div>
        {Array.isArray(wallets) ? (
          <div>
            {wallets.map((wallet) => (
              <Collapsible
                key={wallet.id}
                className="w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-[14px] "
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
                    <div className="w-80 font-medium break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-2 h-16 ">
                      <Image
                        src={`/wallets/${wallet.wallet_id}.svg`}
                        alt={wallet.wallet_name}
                        width={24}
                        height={24}
                      />
                      {wallet.wallet_name}
                    </div>
                    <div className="w-60 flex-none px-6 py-3 h-16 flex items-center gap-3 ">
                      {wallet.allocation.toFixed(2)}%
                      <Progress value={wallet.allocation} />
                    </div>
                    <div className="w-36 flex-auto  px-6 py-3 h-16 flex items-center whitespace-nowrap">
                      {((wallet.return / wallet.value) * 100).toFixed(2)}% (
                      {wallet.return.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                      )
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 flex items-center">
                      {wallet.value.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 flex items-center"></div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="items-start">
                  <div className="flex gap-2 items-center break-keep text-xs">
                    <div className="w-9 flex-none flex items-center justify-center align-middle"></div>
                    <p className="break-keep w-auto whitespace-nowrap pl-3 text-gray-600">
                      Network Accounts
                    </p>
                    <div className="w-full bg-gray-300 h-[1px]"></div>
                  </div>
                  {networkAccounts
                    .filter(
                      (account) => account.walletName === wallet.wallet_name
                    )
                    .map((account) => (
                      <div
                        key={account.id}
                        className="w-full  flex text-gray-900 text-md"
                      >
                        <div className="w-9 flex-none"></div>
                        <div className="w-80 flex-none px-6 py-3 flex items-center gap-3 max-h-16">
                          <Image
                            src={`/icons/networks/${account.id}.svg`}
                            alt={account.id}
                            width={24}
                            height={24}
                          />

                          <div className="w-full font-medium">
                            <p className="text-sm">{account.name}</p>
                            <p className="text-xs text-gray-700">
                              {account.network} ({account.address?.slice(0, 4)}
                              ...{account.address?.slice(-4)})
                            </p>
                          </div>
                        </div>
                        <div className="w-60 flex-none px-6 py-3 h-16 flex items-center gap-3">
                          {account.allocation.toFixed(2)}%
                          <Progress value={account.allocation} />
                        </div>
                        <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                          {((account.return / account.value) * 100).toFixed(2)}%
                          (
                          {account.return.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                          )
                        </div>
                        <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                          {account.value.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </div>
                        <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                          {account.balance.toFixed(2)} {account.id}
                        </div>
                      </div>
                    ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        ) : (
          <p>No wallets to display.</p>
        )}
      </div>
    </div>
  );
};

export { WalletTable };
