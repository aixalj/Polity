import * as React from "react";
import type { Config } from "tailwindcss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Progress } from "@/components/ui/progress";

import Image from "next/image";
import Link from "next/link";

interface Networks {
  name: string;
  address: string;
  id: string;
  network: string;
  allocation: number;
  return: number;
  value: number;
  balance: number;
}

const NetworkTable: React.FC<{
  networkAccounts: Networks[];
}> = ({ networkAccounts }) => {
  return (
    <div className="relative w-full flex flex-col">
      <div className="p-4 relative flex justify-between w-full justify-items-stretch flex-row place-content-between	">
        <div className="flex flex-col max-w-[30rem]">
          <h2 className="text-xl font-medium">Networks</h2>
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 overflow-y-scroll">
        <div className="w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs">
          <div className="w-9 flex-none"></div>
          <div className="w-80 flex-none px-6 py-3">Network</div>
          <div className="w-60 flex-none px-6 py-3">Allocation %</div>
          <div className="w-36 flex-auto px-6 py-3">Return</div>
          <div className="w-36 flex-auto px-6 py-3">Value</div>
          <div className="w-36 flex-auto px-6 py-3">Balance</div>
        </div>

        <div>
          {Array.isArray(networkAccounts) ? (
            <div>
              {networkAccounts
                .sort((a, b) => b.value - a.value)
                .slice(0, 3)
                .map((network) => (
                  <Collapsible
                    key={network.id}
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
                        <div className="w-80 font-medium break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-2 h-16 ">
                          <Image
                            src={`/icons/networks/${network.id}.svg`}
                            alt={network.name}
                            width={24}
                            height={24}
                          />
                          {network.network} Network
                        </div>
                        <div className="w-60 flex-none px-6 py-3 h-16 flex items-center gap-3">
                          {(
                            (network.value /
                              networkAccounts.reduce(
                                (sum, account) => sum + account.value,
                                0
                              )) *
                            100
                          ).toFixed(2)}
                          %
                          <Progress
                            value={
                              (network.value /
                                networkAccounts.reduce(
                                  (sum, account) => sum + account.value,
                                  0
                                )) *
                              100
                            }
                          />
                        </div>
                        <div className="w-36 flex-auto  px-6 py-3 h-16 flex items-center">
                          {((network.return / network.value) * 100).toFixed(2)}%
                          (
                          {network.return.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                          )
                        </div>
                        <div className="w-36 flex-auto px-6 py-3 h-16 flex items-center">
                          {network.value.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </div>
                        <div className="w-36 flex-auto px-6 py-3 h-16 flex items-center">
                          {network.balance.toFixed(2)} {network.id}
                        </div>
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
                          (account) => account.network === network.network
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
                                  {account.network} (
                                  {account.address?.slice(0, 4)}
                                  ...{account.address?.slice(-4)})
                                </p>
                              </div>
                            </div>
                            <div className="w-60 flex-none px-6 py-3 h-16 flex items-center gap-3">
                              {(
                                (account.value /
                                  networkAccounts.reduce(
                                    (sum, account) => sum + account.value,
                                    0
                                  )) *
                                100
                              ).toFixed(2)}
                              %
                              <Progress
                                value={
                                  (account.value /
                                    networkAccounts.reduce(
                                      (sum, account) => sum + account.value,
                                      0
                                    )) *
                                  100
                                }
                              />
                            </div>
                            <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                              {((account.return / account.value) * 100).toFixed(
                                2
                              )}
                              % (
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
            <p>No networks to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { NetworkTable };
