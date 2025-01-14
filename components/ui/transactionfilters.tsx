"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenuCustom,
  DropdownMenuCustomCheckboxItem,
  DropdownMenuCustomContent,
  DropdownMenuCustomLabel,
  DropdownMenuCustomSeparator,
  DropdownMenuCustomTrigger,
} from "@/components/ui/dropdown-menu-custom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState, useMemo } from "react";
import {
  ArrowDown,
  ArrowUp,
  SwitchHorizontal02,
  LayersThree01,
  LayerSingle,
  AlignRight01,
  ChevronDown,
} from "@untitled-ui/icons-react";

import Image from "next/image";
import BTC from "cryptocurrency-icons/svg/color/btc.svg";
import ETH from "cryptocurrency-icons/svg/color/eth.svg";
import LINK from "cryptocurrency-icons/svg/color/link.svg";
import MATIC from "cryptocurrency-icons/svg/color/matic.svg";
import USDC from "cryptocurrency-icons/svg/color/usdc.svg";
import USDT from "cryptocurrency-icons/svg/color/usdt.svg";
import WBTC from "cryptocurrency-icons/svg/color/wbtc.svg";
import { useFilters } from "@/components/ui/filtercontext";

export interface FilterOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
  bgColor?: string;
}

interface FilterSection {
  id: string;
  label: string;
  options: FilterOption[];
}

export const FILTER_SECTIONS: Record<string, FilterSection> = {
  transactionMethod: {
    id: "transactionMethod",
    label: "Transaction Method",
    options: [
      {
        id: "all_methods",
        label: "All Methods",
        icon: <ArrowDown className="w-4 h-4 text-gray-500" />,
      },
      {
        id: "send",
        label: "Send",
        icon: <ArrowUp className="w-4 h-4 text-gray-500" />,
      },
      {
        id: "receive",
        label: "Receive",
        icon: <ArrowDown className="w-4 h-4 text-gray-500" />,
      },
      {
        id: "swap",
        label: "Swap",
        icon: <SwitchHorizontal02 className="w-4 h-4 text-gray-500" />,
      },
      {
        id: "stake",
        label: "Stake",
        icon: <LayersThree01 className="w-4 h-4 text-gray-500" />,
      },
      {
        id: "unstake",
        label: "Unstake",
        icon: <LayerSingle className="w-4 h-4 text-gray-500" />,
      },
      {
        id: "lend",
        label: "Lend",
        icon: <AlignRight01 className="w-4 h-4 text-gray-500" />,
      },
    ],
  },
  wallets: {
    id: "wallets",
    label: "Wallets",
    options: [
      { id: "all_wallets", label: "All Wallets" },
      {
        id: "main_wallet",
        label: "Main Wallet",
        bgColor: "bg-emerald-100",
      },
      {
        id: "second_wallet",
        label: "Second Wallet",
        bgColor: "bg-blue-100",
      },
    ],
  },
  networks: {
    id: "networks",
    label: "Networks",
    options: [
      { id: "all_networks", label: "All Networks" },
      {
        id: "bitcoin",
        label: "Bitcoin Network",
        icon: <Image src={BTC} alt="BTC" width={20} height={20} />,
        bgColor: "bg-gray-100",
      },
      {
        id: "ethereum",
        label: "Ethereum Network",
        icon: <Image src={ETH} alt="ETH" width={20} height={20} />,
        bgColor: "bg-gray-100",
      },
      {
        id: "polygon",
        label: "Polygon Network",
        icon: <Image src={MATIC} alt="MATIC" width={20} height={20} />,
        bgColor: "bg-gray-100",
      },
    ],
  },
  networkAccounts: {
    id: "networkAccounts",
    label: "Network Accounts",
    options: [
      { id: "all_accounts", label: "All Network Accounts" },
      ...Array(3)
        .fill(null)
        .map((_, i) => ({
          id: `account${i + 1}`,
          label: `Network Account Name${i === 0 ? "" : ` ${i + 1}`}`,
          icon: <Image src={ETH} alt="ETH" width={20} height={20} />,
          bgColor: "bg-gray-100",
        })),
    ],
  },
  assets: {
    id: "assets",
    label: "Assets",
    options: [
      { id: "all_assets", label: "All Assets" },
      {
        id: "btc",
        label: "Bitcoin (BTC)",
        icon: <Image src={BTC} alt="BTC" width={20} height={20} />,
        bgColor: "bg-gray-100",
      },
      {
        id: "eth",
        label: "Ethereum (ETH)",
        icon: <Image src={ETH} alt="ETH" width={20} height={20} />,
        bgColor: "bg-gray-100",
      },
      {
        id: "usdc",
        label: "USD Coin (USDC)",
        icon: <Image src={USDC} alt="USDC" width={20} height={20} />,
        bgColor: "bg-gray-100",
      },
      {
        id: "usdt",
        label: "Tether (USDT)",
        icon: <Image src={USDT} alt="USDT" width={20} height={20} />,
        bgColor: "bg-gray-100",
      },
      {
        id: "matic",
        label: "Polygon (MATIC)",
        icon: <Image src={MATIC} alt="MATIC" width={20} height={20} />,
        bgColor: "bg-gray-100",
      },
      {
        id: "link",
        label: "Chainlink (LINK)",
        icon: <Image src={LINK} alt="LINK" width={20} height={20} />,
        bgColor: "bg-gray-100",
      },
      {
        id: "wbtc",
        label: "Wrapped Bitcoin (WBTC)",
        icon: <Image src={WBTC} alt="WBTC" width={20} height={20} />,
        bgColor: "bg-gray-100",
      },
    ],
  },
} as const;

export function TransactionFilters() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedFilters, setSelectedFilters } = useFilters();
  const [tempFilters, setTempFilters] = useState<string[]>([]);

  // Collapsible states
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const hasChanges = useMemo(() => {
    return (
      JSON.stringify(tempFilters.sort()) !==
      JSON.stringify(selectedFilters.sort())
    );
  }, [tempFilters, selectedFilters]);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setTempFilters(selectedFilters);
    }
    setIsOpen(open);
  };

  const handleApply = () => {
    setSelectedFilters(tempFilters);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempFilters(selectedFilters);
    setIsOpen(false);
  };

  const handleReset = () => {
    setTempFilters([]);
  };

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const renderFilterOption = (option: FilterOption) => (
    <DropdownMenuCustomCheckboxItem
      key={option.id}
      checked={tempFilters.includes(option.id)}
      onCheckedChange={() => {
        setTempFilters((prev) =>
          prev.includes(option.id)
            ? prev.filter((id) => id !== option.id)
            : [...prev, option.id]
        );
      }}
      className="flex items-center justify-between gap-2 py-2 px-3"
    >
      <div className="flex items-center gap-2">
        {option.icon &&
          (option.bgColor ? (
            <div
              className={`w-5 h-5 ${option.bgColor} rounded-lg flex items-center justify-center`}
            >
              {option.icon}
            </div>
          ) : (
            option.icon
          ))}
        {option.label}
      </div>
      <div className="flex h-4 w-4 items-center justify-center rounded border border-primary">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={tempFilters.includes(option.id) ? "block" : "hidden"}
        >
          <path
            d="M8.33337 2.5L3.75004 7.08333L1.66671 5"
            stroke="currentColor"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </DropdownMenuCustomCheckboxItem>
  );

  return (
    <DropdownMenuCustom open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuCustomTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
              stroke="currentColor"
              strokeWidth="1.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Filters
          {selectedFilters.length > 0 && (
            <span className="  bg-teal-100 border border-teal-200 text-teal-800 rounded-[5px] w-5 h-5 flex items-center justify-center text-xs">
              {selectedFilters.length}
            </span>
          )}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuCustomTrigger>
      <DropdownMenuCustomContent className="w-[440px]">
        <div className="p-2 space-y-2">
          {Object.values(FILTER_SECTIONS).map((section) => (
            <Collapsible
              key={section.id}
              open={openSections[section.id]}
              onOpenChange={() => toggleSection(section.id)}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
                <h4 className="text-sm font-medium">{section.label}</h4>
                <svg
                  className={`transform transition-transform ${
                    openSections[section.id] ? "rotate-180" : ""
                  }`}
                  width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <rect
                              x='0.5'
                              y='0.5'
                              width='19'
                              height='19'
                              rx='5.5'
                              className={`fill-white ${
                                openSections[section.id]
                                  ? 'fill-white'
                                  : 'group-hover:fill-[#F2F4F7]'
                              }`}
                            />
                            <rect
                              x='0.5'
                              y='0.5'
                              width='19'
                              height='19'
                              rx='5.5'
                              className={`${
                                openSections[section.id]
                                  ? 'stroke-[#D0D5DD]'
                                  : 'stroke-transparent group-hover:stroke-[#D0D5DD]'
                              }`}
                            />
                            <path
                              d='M14 8L10 12L6 8'
                              stroke='#475467'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2">
                {section.options.map(renderFilterOption)}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        <DropdownMenuCustomSeparator />

        <div className="flex justify-between p-2">
          <Button
            variant="outline"
            onClick={handleReset}
            disabled={tempFilters.length === 0}
          >
            Reset
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              onClick={handleApply}
              disabled={!hasChanges}
              className="bg-teal-600 hover:bg-teal-700"
            >
              Apply
            </Button>
          </div>
        </div>
      </DropdownMenuCustomContent>
    </DropdownMenuCustom>
  );
}
