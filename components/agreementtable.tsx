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

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from "@/components/data";

import { agreements, Agreement } from "./agreementData";

const AgreementTable: React.FC<{
  agreements: Agreement[];
}> = ({ agreements }) => {
  return (
    <div className="relative w-full flex flex-col ">
      <div className="w-full flex flex-col gap-1 overflow-y-scroll">
        <div className="w-full min-w-fit flex bg-gray-50 rounded-xl font-medium text-gray-500 text-xs">
          <div className="w-96 flex-none px-6 py-3">Agreement</div>
          <div className="w-60 flex-none px-6 py-3">
            Network Service Provider
          </div>
          <div className="w-36 flex-auto px-6 py-3">Date Signed</div>
          <div className="w-36 flex-auto px-6 py-3">Status</div>
          {/* <div className="w-36 flex-auto px-6 py-3">Value</div>
          <div className="w-36 flex-auto px-6 py-3">Balance</div> */}
        </div>
        <div>
          {Array.isArray(agreements) && agreements.length > 0 ? (
            <div>
              {agreements
                // .sort((a, b) => b.value - a.value)
                .map((agreement, index) => (
                  <div
                    key={index}
                    className="w-full min-w-fit flex flex-col hover:bg-gray-50 duration-200 ease-in-out rounded-xl text-sm "
                  >
                    <div className="w-full flex text-left  text-gray-900">
                      <div className="w-96 break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-2 h-16 ">
                        <p className="flex gap-2 items-center font-medium">
                          {agreement.name}
                        </p>
                      </div>
                      <div className="w-60 flex-none px-6 py-3 h-16  items-center gap-3">
                        {agreement.nspName}
                        <p>@{agreement.nspUsername}</p>
                      </div>
                      <div className="w-36 flex-auto  px-6 py-3 h-16 flex items-center">
                        {new Date(agreement.dateSigned).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric", year: "numeric" }
                        )}
                      </div>
                      <div className="w-36 flex-auto  px-6 py-3 h-16 flex items-center whitespace-nowrap">
                        {agreement.status}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p>No assets to display.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { AgreementTable };
