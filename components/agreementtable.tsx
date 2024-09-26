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
  DotsVertical,
  Download01,
  Eye,
  File06,
} from "@untitled-ui/icons-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
          <div className="w-[480px] flex-none px-6 py-3">Agreement</div>
          <div className="w-60 flex-none px-6 py-3">
            Network Service Provider
          </div>
          <div className="min-w-36 flex-auto px-6 py-3">Date Signed</div>
          <div className="min-w-36 flex-auto px-6 py-3">Status</div>
          <div className="w-full flex-auto px-6 py-3"></div>
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
                      <div className="w-[480px] break-keep whitespace-nowrap flex-none px-6 py-3 flex items-center gap-3 h-16 ">
                        <div className="min-w-10 h-10 bg-white border border-gray-200 shadow-sm flex items-center justify-center rounded-xl">
                          <File06 className="w-5 h-5 text-gray-600" />
                        </div>
                        <p className="flex gap-2 items-center text-sm text-gray-900 font-medium">
                          {agreement.name}
                        </p>
                      </div>
                      <div className="w-60 flex-none px-6 py-3 h-16 flex items-center gap-2.5">
                        <div className="rounded-full bg-gray-200 w-6 h-6"></div>
                        <div>
                          <p className="text-sm text-gray-900 font-medium">
                            {agreement.nspName}
                          </p>
                          <p className="text-xs text-gray-700">
                            @{agreement.nspUsername}
                          </p>
                        </div>
                      </div>
                      <div className="min-w-36 flex-auto  px-6 py-3 text-sm text-gray-800 h-16 flex items-center">
                        {new Date(agreement.dateSigned).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric", year: "numeric" }
                        )}
                      </div>
                      <div className="min-w-36 flex-auto  px-6 py-3 h-16 flex items-center whitespace-nowrap">
                        {agreement.status}
                      </div>
                      <div className="w-full flex-auto justify-end  px-6 py-3 h-16 flex items-center whitespace-nowrap">
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <DotsVertical className="w-5 h-5 text-gray-600" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 text-gray-700 mr-2" />{" "}
                              View Agreement
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download01 className="w-4 h-4 text-gray-700 mr-2" />
                              Download Agreement
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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
