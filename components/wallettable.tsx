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

interface Wallet {
  id: string;
  wallet_id: string;
  wallet_name: string;
  allocation: number;
  return: number;
  value: number;
}

interface WalletTableProps {
  wallets: Wallet[];
}

const WalletTable: React.FC<WalletTableProps> = ({ wallets }) => {
  // const [wallets, setWallets] = useState<Array<{ id: string; name: string }>>(
  //   []
  // );

  // useEffect(() => {
  //   const fetchWallets = async () => {
  //     const { data, error } = await supabase
  //       .from("wallets")
  //       .select("id, wallet_name");

  //     if (error) {
  //       console.error("Error fetching wallets:", error);
  //     } else {
  //       console.log("Received data:", data); // Added console log for received data
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
                        src={`/wallets/${wallet.wallet_id}.svg`}
                        alt={wallet.wallet_name}
                        width={24}
                        height={24}
                      />
                      {wallet.wallet_name}
                    </div>
                    <div className="w-60 flex-none px-6 py-3 h-16 flex items-center gap-3">
                      {wallet.allocation.toFixed(2)}%
                      <Progress value={wallet.allocation} />
                    </div>
                    <div className="w-36 flex-auto  px-6 py-3 h-16 flex items-center">
                      {wallet.return.toFixed(2)}% ($0.00)
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 flex items-center">
                      ${wallet.value.toFixed(2)}
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
                  <div className="w-full  flex text-gray-900 text-md">
                    <div className="w-9 flex-none"></div>
                    <div className="w-80 flex-none px-6 py-3 flex items-center gap-3 max-h-16">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_82_25188)">
                          <rect width="24" height="24" rx="7" fill="#F7931A" />
                          <g clip-path="url(#clip1_82_25188)">
                            <rect
                              width="24"
                              height="24"
                              rx="6"
                              fill="#F7931A"
                            />
                            <path
                              d="M23.6412 14.9029C22.0385 21.3315 15.5274 25.2438 9.09796 23.6407C2.67126 22.0381 -1.24108 15.5265 0.362312 9.09837C1.96429 2.66903 8.47546 -1.24361 14.9029 0.359081C21.3318 1.96177 25.2439 8.47405 23.641 14.903L23.6412 14.9029H23.6412Z"
                              fill="#F7931A"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M17.293 10.2903C17.5318 8.6934 16.316 7.83498 14.6535 7.26233L15.1929 5.09914L13.8761 4.77103L13.351 6.87726C13.0049 6.79093 12.6493 6.70957 12.296 6.62892L12.8248 4.50878L11.5089 4.18066L10.9692 6.34315C10.6828 6.27793 10.4014 6.21347 10.1284 6.14555L10.1299 6.13874L8.31404 5.68528L7.96376 7.09171C7.96376 7.09171 8.94071 7.31565 8.92012 7.32944C9.45336 7.46252 9.54978 7.81551 9.53377 8.09529L8.91942 10.5597C8.95614 10.569 9.00377 10.5825 9.05632 10.6036L9.01805 10.5941L9.01802 10.5941C8.98554 10.5859 8.95179 10.5775 8.91713 10.5692L8.05602 14.0214C7.99085 14.1834 7.82545 14.4266 7.45264 14.3342C7.46583 14.3534 6.49556 14.0954 6.49556 14.0954L5.8418 15.6027L7.5554 16.0299C7.74304 16.077 7.92847 16.1253 8.11201 16.1731L8.11204 16.1731C8.24032 16.2066 8.36768 16.2398 8.49423 16.2721L7.94933 18.4601L9.2646 18.7883L9.80423 16.6235C10.1635 16.721 10.5123 16.811 10.8536 16.8958L10.3158 19.0504L11.6327 19.3785L12.1775 17.1946C14.423 17.6196 16.1113 17.4482 16.822 15.4172C17.3946 13.7821 16.7935 12.8389 15.6122 12.2238C16.4726 12.0254 17.1207 11.4595 17.2935 10.2905L17.2931 10.2902L17.293 10.2903ZM14.2844 14.5091C13.911 16.0094 11.5628 15.3891 10.4884 15.1054C10.3917 15.0798 10.3054 15.057 10.2317 15.0387L10.9548 12.14C11.0446 12.1624 11.1543 12.187 11.2785 12.2149L11.2786 12.2149C12.3899 12.4644 14.6669 12.9754 14.2845 14.5091H14.2844ZM11.5015 10.8696C12.3973 11.1087 14.3513 11.6302 14.6916 10.2666H14.6918C15.0393 8.8721 13.1402 8.45166 12.2128 8.24631C12.1084 8.22321 12.0164 8.20283 11.9412 8.1841L11.2856 10.8131C11.3475 10.8285 11.4201 10.8479 11.5015 10.8696Z"
                              fill="white"
                            />
                          </g>
                        </g>
                        <rect
                          x="0.375"
                          y="0.375"
                          width="23.25"
                          height="23.25"
                          rx="6.625"
                          stroke="#D0D5DD"
                          stroke-width="0.75"
                        />
                        <defs>
                          <clipPath id="clip0_82_25188">
                            <rect width="24" height="24" rx="7" fill="white" />
                          </clipPath>
                          <clipPath id="clip1_82_25188">
                            <rect width="24" height="24" rx="6" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <div className="w-full font-medium">
                        <p className="text-sm">Network Account Name</p>
                        <p className="text-xs text-gray-700">
                          Bitcoin (428f...47d2)
                        </p>
                      </div>
                    </div>
                    <div className="w-60 flex-none px-6 py-3 h-16 flex items-center gap-3">
                      0.00%
                      <Progress value={33} />
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                      0.00% ($0.00)
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                      $0.00
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                      0.00 BTC
                    </div>
                  </div>
                  <div className="w-full  flex text-gray-900 text-md">
                    <div className="w-9 flex-none"></div>
                    <div className="w-80 flex-none px-6 py-3 flex items-center gap-3 max-h-16">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_82_25206)">
                          <rect width="24" height="24" rx="7" fill="#ECEFF0" />
                          <g clip-path="url(#clip1_82_25206)">
                            <rect
                              width="24"
                              height="24"
                              rx="6"
                              fill="#ECEFF0"
                            />
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
                              d="M11.8691 5V10.2614V14.8286L16.2365 12.2469L11.8691 5Z"
                              fill="black"
                            />
                            <path
                              opacity="0.45"
                              d="M7.5 13.0754L11.8674 19.23V15.6556L7.5 13.0754Z"
                              fill="black"
                            />
                            <path
                              opacity="0.8"
                              d="M11.8672 15.6556V19.23L16.2378 13.0754L11.8672 15.6556Z"
                              fill="black"
                            />
                          </g>
                        </g>
                        <rect
                          x="0.375"
                          y="0.375"
                          width="23.25"
                          height="23.25"
                          rx="6.625"
                          stroke="#D0D5DD"
                          stroke-width="0.75"
                        />
                        <defs>
                          <clipPath id="clip0_82_25206">
                            <rect width="24" height="24" rx="7" fill="white" />
                          </clipPath>
                          <clipPath id="clip1_82_25206">
                            <rect width="24" height="24" rx="6" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <div className="w-full font-medium">
                        <p className="text-sm">Network Account Name</p>
                        <p className="text-xs text-gray-700">
                          Ethereum (0X8f...47d2)
                        </p>
                      </div>
                    </div>
                    <div className="w-60 flex-none px-6 py-3 h-16 flex items-center gap-3">
                      0.00%
                      <Progress value={33} />
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                      0.00% ($0.00)
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                      $0.00
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                      0.00 BTC
                    </div>
                  </div>
                  <div className="w-full  flex text-gray-900 text-md">
                    <div className="w-9 flex-none"></div>
                    <div className="w-80 flex-none px-6 py-3 flex items-center gap-3 max-h-16">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_82_25224)">
                          <rect
                            width="24"
                            height="24"
                            rx="7"
                            fill="url(#paint0_linear_82_25224)"
                          />
                          <g clip-path="url(#clip1_82_25224)">
                            <rect
                              width="24"
                              height="24"
                              rx="6"
                              fill="url(#paint1_linear_82_25224)"
                            />
                            <mask
                              id="mask0_82_25224"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <path
                                d="M11.9998 23.7556C18.4923 23.7556 23.7555 18.4924 23.7555 11.9999C23.7555 5.50746 18.4923 0.244263 11.9998 0.244263C5.50734 0.244263 0.244141 5.50746 0.244141 11.9999C0.244141 18.4924 5.50734 23.7556 11.9998 23.7556Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_82_25224)">
                              <path
                                d="M24.8685 -0.868896H-0.869141V24.8687H24.8685V-0.868896Z"
                                fill="url(#paint2_linear_82_25224)"
                              />
                            </g>
                            <path
                              d="M15.4 14.5368L18.7259 12.6163C18.9021 12.5145 19.011 12.3254 19.011 12.1219V8.28142C19.011 8.07839 18.9016 7.88878 18.7259 7.78702L15.4 5.86655C15.2238 5.76479 15.0054 5.76527 14.8293 5.86655L11.5033 7.78702C11.3272 7.88878 11.2182 8.07839 11.2182 8.28142V15.1449L8.8859 16.4913L6.55358 15.1449V12.4517L8.8859 11.1053L10.4243 11.9933V10.1865L9.17102 9.46318C9.08462 9.41326 8.98574 9.38686 8.88542 9.38686C8.7851 9.38686 8.68622 9.41326 8.6003 9.46318L5.27438 11.3837C5.09822 11.4854 4.98926 11.6745 4.98926 11.8781V15.7185C4.98926 15.9216 5.0987 16.1112 5.27438 16.2129L8.6003 18.1334C8.77598 18.2347 8.99486 18.2347 9.17102 18.1334L12.4969 16.2134C12.6731 16.1117 12.7821 15.9221 12.7821 15.719V8.85551L12.8243 8.83151L15.1144 7.50911L17.4467 8.85551V11.5488L15.1144 12.8952L13.5784 12.0081V13.8149L14.8293 14.5373C15.0054 14.6385 15.2238 14.6385 15.4 14.5373V14.5368Z"
                              fill="white"
                            />
                          </g>
                        </g>
                        <rect
                          x="0.375"
                          y="0.375"
                          width="23.25"
                          height="23.25"
                          rx="6.625"
                          stroke="#D0D5DD"
                          stroke-width="0.75"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_82_25224"
                            x1="-4.38598"
                            y1="1.97255"
                            x2="20.3902"
                            y2="17.1344"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#A229C5" />
                            <stop offset="1" stop-color="#7B3FE4" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_82_25224"
                            x1="-4.38598"
                            y1="1.97255"
                            x2="20.3902"
                            y2="17.1344"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#A229C5" />
                            <stop offset="1" stop-color="#7B3FE4" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_82_25224"
                            x1="-5.57266"
                            y1="1.24646"
                            x2="20.9973"
                            y2="17.506"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#A229C5" />
                            <stop offset="1" stop-color="#7B3FE4" />
                          </linearGradient>
                          <clipPath id="clip0_82_25224">
                            <rect width="24" height="24" rx="7" fill="white" />
                          </clipPath>
                          <clipPath id="clip1_82_25224">
                            <rect width="24" height="24" rx="6" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <div className="w-full font-medium">
                        <p className="text-sm">Network Account Name</p>
                        <p className="text-xs text-gray-700">
                          Polygon (0X92...4qu1)
                        </p>
                      </div>
                    </div>
                    <div className="w-60 flex-none px-6 py-3 h-16 flex items-center gap-3">
                      0.00%
                      <Progress value={33} />
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                      0.00% ($0.00)
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                      $0.00
                    </div>
                    <div className="w-36 flex-auto px-6 py-3 h-16 items-center flex">
                      0.00 BTC
                    </div>
                  </div>
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
