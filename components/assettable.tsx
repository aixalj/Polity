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

import Link from "next/link";

const AssetTable = () => {
  return (
    <div className="relative w-full flex flex-col pb-40">
      <div className="p-4 relative flex justify-between w-full justify-items-stretch flex-row place-content-between	">
        <div className="flex flex-col max-w-[30rem]">
          <h2 className="text-xl font-medium">Assets</h2>
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 overflow-y-scroll">
        <div className="w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs">
          <div className="w-80 flex-none px-6 py-3">Asset</div>
          <div className="w-60 flex-none px-6 py-3">Allocation %</div>
          <div className="w-36 flex-auto px-6 py-3">Price</div>
          <div className="w-36 flex-auto px-6 py-3">Return</div>
          <div className="w-36 flex-auto px-6 py-3">Value</div>
          <div className="w-36 flex-auto px-6 py-3">Balance</div>
        </div>
        <div>
          <div className="w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm ">
            <div className="w-full flex text-left  text-gray-900">
              <div className="w-80 break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-2 h-16 ">
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
                      <rect width="24" height="24" rx="6" fill="#F7931A" />
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
                <p className="flex gap-2 items-center font-medium">
                  Bitcoin
                  <span className="font-regular text-gray-600">BTC</span>
                </p>
              </div>
              <div className="w-60 flex-none px-6 py-3 h-16 flex items-center gap-3">
                0.00%
                <Progress value={33} />
              </div>
              <div className="w-36 flex-auto  px-6 py-3 h-16 flex items-center">
                $87,654.32
              </div>
              <div className="w-36 flex-auto  px-6 py-3 h-16 flex items-center">
                0.00% ($0.00)
              </div>

              <div className="w-36 flex-auto px-6 py-3 h-16 flex items-center">
                $0.00
              </div>
              <div className="w-36 flex-auto px-6 py-3 h-16 flex items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AssetTable };
