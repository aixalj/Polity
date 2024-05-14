"use client";

import Image from "next/image";
import type { Config } from "tailwindcss";
import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { TimeForm } from "@/components/timeform";
import { ReceiveBtn } from "@/components/receivebtn";

import Stats from "@/components/stats";

import Allocation from "@/components/allocation";
import { TimeProvider } from "@/components/ui/timecontext";

import { Button } from "@/components/ui/button";
import { AssetTable } from "@/components/assettable";

function BitcoinOne() {
  const [selectedTab, setSelectedTab] = useState("overview");

  return (
    <main className="w-full h-full">
      <TimeProvider>
        <div className="mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll">
          <Tabs
            defaultValue="overview"
            onValueChange={(value) => setSelectedTab(value)}
          >
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
                    <Button
                      variant="default"
                      className="bg-[#3396FF] hover:bg-[#3396FF]/90 "
                    >
                      <svg
                        width="28"
                        height="16"
                        viewBox="0 0 28 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.26063 3.12611C10.535 -1.04204 17.4651 -1.04204 21.7395 3.12611L22.254 3.62777C22.4677 3.83617 22.4677 4.17406 22.254 4.38248L20.4941 6.09849C20.3873 6.20271 20.2141 6.20271 20.1072 6.09849L19.3994 5.40817C16.4173 2.50036 11.5827 2.50036 8.60084 5.40817L7.84271 6.14746C7.73585 6.25166 7.5626 6.25166 7.45574 6.14746L5.69598 4.43142C5.48226 4.22302 5.48226 3.88512 5.69598 3.67671L6.26063 3.12611ZM25.3788 6.67504L26.9451 8.2023C27.1586 8.41069 27.1586 8.74871 26.9451 8.95707L19.883 15.8437C19.6693 16.0521 19.3229 16.0521 19.1091 15.8437L14.0967 10.956C14.0434 10.9039 13.9568 10.9039 13.9034 10.956L8.89125 15.8437C8.67753 16.0521 8.33102 16.0521 8.1173 15.8437L1.05507 8.95687C0.841346 8.74851 0.841346 8.41069 1.05507 8.20222L2.62126 6.67496C2.83498 6.46654 3.18149 6.46654 3.39521 6.67496L8.40747 11.5627C8.46091 11.6147 8.54753 11.6147 8.60096 11.5627L13.613 6.67496C13.8267 6.46654 14.1732 6.46654 14.387 6.67494L19.3992 11.5627C19.4527 11.6147 19.5392 11.6147 19.5928 11.5627L24.6049 6.67504C24.8187 6.46664 25.1651 6.46664 25.3788 6.67504Z"
                          fill="white"
                        />
                      </svg>
                      Connect
                    </Button>
                    <ReceiveBtn variant="network" />
                  </div>
                </div>

                <div className="w-full mt-4 flex flex-col pb-1">
                  <div>
                    <TabsList className="inline-flex w-auto">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="assets">Assets</TabsTrigger>
                      <TabsTrigger value="dApps">dApps</TabsTrigger>
                      <TabsTrigger value="positions">Positions</TabsTrigger>
                      <TabsTrigger
                        value="nfts"
                        disabled={true}
                        className="flex gap-2"
                      >
                        NFTs{" "}
                        <div className="px-2 py-0.5 text-xs text-purple-800 bg-purple-50 border border-purple-200 rounded-lg">
                          Coming Soon
                        </div>
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <div className="flex gap-3 w-full h-8  mt-4 justify-between items-center">
                    <h2 className="text-2xl font-medium items-center flex">
                      {selectedTab === "overview"
                        ? "Overview"
                        : selectedTab === "assets"
                        ? "Assets"
                        : selectedTab === "dApps"
                        ? "dApps"
                        : selectedTab === "positions"
                        ? "Positions"
                        : selectedTab === "nfts"
                        ? "NFTs"
                        : ""}
                    </h2>{" "}
                    {selectedTab === "overview" ? (
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
                        <TimeForm />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>

            <TabsContent value="overview">
              <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
                <Stats variant="network" />

                <Allocation />

                <AssetTable />
              </div>
            </TabsContent>
            <TabsContent value="assets">
              <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
                <AssetTable />
              </div>
            </TabsContent>

            <TabsContent value="dApps">
              <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
                no dApps found
              </div>
            </TabsContent>
            <TabsContent value="positions">
              <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full">
                no positions found
              </div>
            </TabsContent>
            <TabsContent value="nfts">
              <div className="max-w-screen-xl px-6 w-full  mx-auto flex flex-col gap-3 h-full"></div>
            </TabsContent>
          </Tabs>
        </div>
      </TimeProvider>
    </main>
  );
}

export default BitcoinOne;
