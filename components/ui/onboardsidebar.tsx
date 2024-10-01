"use client";

import * as React from "react";
import type { Config } from "tailwindcss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  networkAccounts,
  wallets,
  wealth,
  getAllAssets,
} from "@/components/data";

import Link from "next/link";
import {
  ImageUserLeft,
  Link02,
  MessageCircle01,
  PencilLine,
  UserCheck01,
  Users03,
} from "@untitled-ui/icons-react";

const OnboardSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({});

  // Handler to toggle the open state
  const handleOpenChange = (id: string, isOpen: boolean) => {
    setOpenStates((prev) => ({ ...prev, [id]: isOpen }));

    // const MyCollapsible = () => {
    //   const [isOpen, setIsOpen] = useState(false);

    //   const handleOpenChange = (open: boolean) => {
    //     setIsOpen(open);
    //   };
  };

  return (
    <div className="px-2 pt-8 pb-2 hidden sm:flex sm:flex-col">
      <a href="index.html" className="px-4 py-1">
        <img
          className="h-6"
          src="https://polity.li/images/PolityLogo-Full-Main.svg"
          alt="Logo"
        />
      </a>
      <div className="flex flex-col mt-4 pb-3 gap-1 px-4">
        <h1 className="text-xl font-medium">Account Onboarding</h1>
        <p className="text-sm text-gray-600">
          Set up your account by following this easy onboarding guide below.
        </p>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear h-full">
        <nav className="mt-6 w-80 h-full">
          <div className="h-full gap-3 flex flex-col justify-between">
            <ul className="flex px-4 flex-col gap-1">
              <li className="flex gap-2 whitespace-nowrap pb-2.5 items-center text-xs text-gray-500">
                AVATAR VIRTUAL NODE
                <div className="w-full bg-gray-300 h-[1px]"></div>
                <div className="min-w-5 h-5 rounded-full border border-gray-300 bg-white"></div>
              </li>
              <li>
                <Link
                  className={`group focus:ring-0 ${
                    pathname === "/onboarding/verification"
                      ? "   w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      : "w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                  }`}
                  href="#"
                >
                  <UserCheck01 className="w-5 h-5" />
                  Identity Verification
                </Link>
              </li>

              <li>
                <a
                  className={`group focus:ring-0 ${
                    pathname === "/onboarding/avatar"
                      ? "   w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      : "w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                  }`}
                  href="#"
                >
                  <Users03 className="w-5 h-5" />
                  Avatar Identity
                </a>
              </li>

              <li>
                <a
                  className={`group focus:ring-0 ${
                    pathname === "/onboarding/element"
                      ? "   w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      : "w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                  }`}
                  // href="/addressbook"
                  id="overview"
                >
                  <MessageCircle01 className="w-5 h-5" />
                  Join Element
                </a>
              </li>

              <li>
                <a
                  className={`group focus:ring-0 ${
                    pathname === "/onboarding/nsp"
                      ? "   w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      : "w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                  }`}
                  id="overview"
                >
                  <Link02 className="w-5 h-5" />
                  Connect with NSP
                </a>
              </li>

              <li>
                <a
                  className={`group focus:ring-0 ${
                    pathname === "/onboarding/avn"
                      ? "   w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      : "w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                  }`}
                  //   href="#"
                >
                  <ImageUserLeft className="w-5 h-5" />
                  Avatar Virtual Node
                </a>
              </li>
              <li>
                <a
                  className={`group focus:ring-0 ${
                    pathname === "/onboarding/agreement"
                      ? "   w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      : "w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                  }`}
                  //   href="#"
                >
                  <PencilLine className="w-5 h-5" />
                  Sign Agreement
                </a>
              </li>
            </ul>
            <ul className="flex px-4 flex-col gap-1">
              <li className="flex gap-2 whitespace-nowrap pb-2.5 items-center text-xs text-gray-500">
                WALLET SETUP
                <div className="w-full bg-gray-300 h-[1px]"></div>
                <div className="min-w-5 h-5 rounded-full border border-gray-300 bg-white"></div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export { OnboardSideBar };
