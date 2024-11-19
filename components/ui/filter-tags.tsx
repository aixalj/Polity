"use client";

import { useFilters } from "@/components/ui/filtercontext";
import {
  FILTER_SECTIONS,
  FilterOption,
} from "@/components/ui/transactionfilters";
import { X } from "lucide-react";
import {
  ArrowDown,
  ArrowUp,
  SwitchHorizontal02,
  LayersThree01,
  LayerSingle,
  AlignRight01,
} from "@untitled-ui/icons-react";
import Image from "next/image";
import BTC from "cryptocurrency-icons/svg/color/btc.svg";
import ETH from "cryptocurrency-icons/svg/color/eth.svg";
import LINK from "cryptocurrency-icons/svg/color/link.svg";
import MATIC from "cryptocurrency-icons/svg/color/matic.svg";
import USDC from "cryptocurrency-icons/svg/color/usdc.svg";
import USDT from "cryptocurrency-icons/svg/color/usdt.svg";
import WBTC from "cryptocurrency-icons/svg/color/wbtc.svg";

interface FilterInfo {
  label: string;
  icon?: React.ReactNode;
  bgColor?: string;
}

export function FilterTags() {
  const { selectedFilters, setSelectedFilters } = useFilters();

  if (selectedFilters.length === 0) return null;

  const removeFilter = (filterId: string) => {
    setSelectedFilters(selectedFilters.filter((id) => id !== filterId));
  };

  const getFilterInfo = (filterId: string): FilterInfo => {
    for (const section of Object.values(FILTER_SECTIONS)) {
      const option = section.options.find((opt) => opt.id === filterId);
      if (option) {
        return {
          label: option.label,
          icon: "icon" in option ? option.icon : undefined,
          bgColor: "bgColor" in option ? option.bgColor : undefined,
        };
      }
    }
    return { label: filterId };
  };

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {selectedFilters.map((filterId) => {
        const { label, icon, bgColor } = getFilterInfo(filterId);
        return (
          <div
            key={filterId}
            className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-lg text-sm text-gray-700"
          >
            {icon && bgColor ? (
              <div
                className={`w-4 h-4 ${bgColor} rounded-md flex items-center justify-center`}
              >
                {icon}
              </div>
            ) : (
              icon
            )}
            <span>{label}</span>
            <button
              onClick={() => removeFilter(filterId)}
              className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
