"use client";

import * as React from "react";
import type { Config } from "tailwindcss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";

import { useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import Link from "next/link";

const SideBar = () => {
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

      <a
        className="group focus:ring-0 justify-between mt-6 outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300  p-2 text-base font-medium duration-200 ease-in-out text-black hover:bg-gray-50 shadow-sm"
        href="#"
        id="overview"
      >
        <div className="flex gap-3 items-center">
          <div className="size-11 rounded-md border-gray-300 border overflow-hidden">
            <img
              src={
                "https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg"
              }
              className="w-full h-full"
            />
          </div>

          <div>
            <p className="text-sm text-gray-900">Avatar Name</p>
            <p className="text-xs text-gray-500">Avatar</p>
          </div>
        </div>

        <svg
          className="mr-1"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7929 6C11.2383 6 11.4614 5.46143 11.1464 5.14645L8.35355 2.35355C8.15829 2.15829 7.84171 2.15829 7.64645 2.35355L4.85355 5.14645C4.53857 5.46143 4.76165 6 5.20711 6H10.7929ZM10.7929 10C11.2383 10 11.4614 10.5386 11.1464 10.8536L8.35355 13.6464C8.15829 13.8417 7.84171 13.8417 7.64645 13.6464L4.85355 10.8536C4.53857 10.5386 4.76165 10 5.20711 10H10.7929Z"
            fill="#475467"
          />
        </svg>
      </a>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear h-full">
        <nav className="mt-6 w-80 h-full">
          <div className="h-full flex flex-col justify-between">
            <ul className="flex flex-col gap-1">
              <Collapsible
                open={openStates["collapsible1"] || false}
                // onOpenChange={(isOpen) =>
                //   handleOpenChange("collapsible1", isOpen)
                // }
                className="w-full flex flex-col gap-1"
              >
                <CollapsibleTrigger className="w-full ease-in-out duration-200">
                  <div className="group relative  w-full outline-none  focus:tap-highlight-transparent focus:outline-none  rounded-xl h-12 duration-200 ease-in-out hover:text-black  hover:bg-white hover:shadow-sm">
                    <Link
                      href="/"
                      className={`group focus:ring-0 ${
                        pathname === "/"
                          ? "justify-between outline-none  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-12 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                          : "outline-none justify-between  focus:tap-highlight-transparent hover:text-black focus:outline-none relative flex items-center gap-3 rounded-xl h-12 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                      }`}
                      id="overview"
                    >
                      <div className="flex gap-3 items-center">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.33333 13.3333H12.6667M9.34513 3.84267L4.82359 7.35942C4.52135 7.5945 4.37022 7.71204 4.26135 7.85924C4.16491 7.98963 4.09307 8.13652 4.04935 8.2927C4 8.46901 4 8.66046 4 9.04337V13.8667C4 14.6134 4 14.9868 4.14532 15.272C4.27316 15.5229 4.47713 15.7268 4.72801 15.8547C5.01323 16 5.3866 16 6.13333 16H13.8667C14.6134 16 14.9868 16 15.272 15.8547C15.5229 15.7268 15.7268 15.5229 15.8547 15.272C16 14.9868 16 14.6134 16 13.8667V9.04337C16 8.66046 16 8.46901 15.9506 8.2927C15.9069 8.13652 15.8351 7.98963 15.7386 7.85924C15.6298 7.71204 15.4787 7.5945 15.1764 7.35942L10.6549 3.84267C10.4207 3.6605 10.3035 3.56941 10.1742 3.5344C10.0601 3.50351 9.93987 3.50351 9.82577 3.5344C9.69646 3.56941 9.57935 3.6605 9.34513 3.84267Z"
                            stroke="currentColor"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Wealth
                      </div>
                    </Link>
                    <a
                      className="z-10 ml-auto cursor-pointer h-6 w-6 absolute right-0 my-3 items-center flex justify-center mr-3 inset-y-0 rounded-lg border border-transparent duration-200 ease-in-out bg-gray-100/0 active:bg-gray-100 hover:bg-gray-100 group-hover:border-gray-300 font-medium"
                      onClick={() =>
                        handleOpenChange(
                          "collapsible1",
                          !openStates["collapsible1"]
                        )
                      }
                    >
                      {openStates["collapsible1"] ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12.5L10 7.5L15 12.5"
                            stroke="#475467"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="#475467"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      )}
                    </a>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="items-start">
                  <ul className="flex flex-col gap-1">
                    <li className="flex gap-2 items-center text-xs text-gray-500">
                      Wallets
                      <div className="w-full bg-gray-300 h-[1px]"></div>
                    </li>
                    <li>
                      <Collapsible
                        open={openStates["collapsible2"] || false}
                        // onOpenChange={(isOpen) =>
                        //   handleOpenChange("collapsible2", isOpen)
                        // }
                        className="w-full flex flex-col gap-1"
                      >
                        <CollapsibleTrigger className="w-full ease-in-out duration-200">
                          <div className="group relative  w-full outline-none  focus:tap-highlight-transparent focus:outline-none  rounded-xl h-12 duration-200 ease-in-out hover:text-black  hover:bg-white hover:shadow-sm">
                            <Link
                              href="/wealth/wallet1"
                              className={` focus:ring-0 ${
                                pathname === "/wealth/wallet1"
                                  ? "justify-between outline-none  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-12 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                                  : "outline-none justify-between  hover:text-black focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-12 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                              }`}
                            >
                              <div className="flex gap-3 items-center">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_80_24521)">
                                    <rect
                                      x="0.5"
                                      y="0.5"
                                      width="23"
                                      height="23"
                                      rx="6.5"
                                      fill="white"
                                    />
                                    <rect
                                      x="0.5"
                                      y="0.5"
                                      width="23"
                                      height="23"
                                      rx="6.5"
                                      stroke="#D0D5DD"
                                    />
                                    <path
                                      d="M8 9.50008C7.58798 9.50008 7.35279 9.97046 7.6 10.3001L11.6 15.6334C11.8 15.9001 12.2 15.9001 12.4 15.6334L16.4 10.3001C16.6472 9.97046 16.412 9.50008 16 9.50008H8Z"
                                      fill="#1D2939"
                                    />
                                    <rect
                                      x="0.375"
                                      y="0.375"
                                      width="23.25"
                                      height="23.25"
                                      rx="6.625"
                                      fill="url(#paint0_linear_80_24521)"
                                    />
                                    <rect
                                      x="0.375"
                                      y="0.375"
                                      width="23.25"
                                      height="23.25"
                                      rx="6.625"
                                      stroke="#D0D5DD"
                                      stroke-width="0.75"
                                    />
                                    <rect
                                      x="2"
                                      y="2"
                                      width="20"
                                      height="20"
                                      rx="5"
                                      fill="#3CCB7F"
                                    />
                                    <g clip-path="url(#clip1_80_24521)">
                                      <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="4"
                                        fill="white"
                                      />
                                      <g opacity="0.8">
                                        <g opacity="0.1">
                                          <path
                                            d="M9.48975 12.3076H10.9067C11.0505 12.3076 11.1672 12.4242 11.1672 12.5681V13.985C10.2407 13.985 9.48975 13.2339 9.48975 12.3076ZM9.48975 10.4014H10.9067C11.0505 10.4014 11.1673 10.518 11.1673 10.6619V11.8183C11.1672 11.8874 11.1398 11.9536 11.0909 12.0025C11.042 12.0513 10.9758 12.0788 10.9067 12.0788H9.48975V10.4014Z"
                                            fill="#685879"
                                          />
                                        </g>
                                        <g opacity="0.1">
                                          <path
                                            d="M16.8582 19.9099H15.1807V21.5874H16.8582V19.9099ZM15.1807 25.4001C16.1072 25.4001 16.8582 24.6491 16.8582 23.7227H15.1807V25.4001Z"
                                            fill="#685879"
                                          />
                                        </g>
                                        <path
                                          opacity="0.05"
                                          d="M30.1855 17.7974H28.7686C28.6995 17.7974 28.6333 17.77 28.5844 17.7211C28.5356 17.6723 28.5081 17.606 28.5081 17.5369V16.1199C29.4346 16.1199 30.1855 16.8709 30.1855 17.7974ZM32.0894 18.0262H30.412V19.7037H32.0894V18.0262ZM-7.66943 17.7974H-6.25253C-6.18344 17.7974 -6.11718 17.77 -6.06832 17.7211C-6.01947 17.6723 -5.99202 17.606 -5.99202 17.5369V16.1199C-6.91839 16.1199 -7.66943 16.8709 -7.66943 17.7974Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M-0.278645 17.7965H-1.69555C-1.76464 17.7965 -1.8309 17.7691 -1.87975 17.7202C-1.92861 17.6714 -1.95605 17.6051 -1.95605 17.536V16.119C-1.02956 16.119 -0.278645 16.87 -0.278645 17.7965ZM41.5243 17.7965H40.1072C40.0382 17.7965 39.9719 17.7691 39.923 17.7202C39.8742 17.6714 39.8467 17.6051 39.8467 17.536V16.119C40.7732 16.119 41.5243 16.87 41.5243 17.7965ZM1.85163 17.7965V16.119H3.52916C3.52916 17.0455 2.77812 17.7965 1.85163 17.7965ZM7.33697 16.119H5.65956V17.7965H7.33697V16.119ZM11.1673 6.62988H9.48987V8.30742H11.1673V6.62988Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M7.33659 18.0262H5.65918V19.7037H7.33659V18.0262ZM8.97993 17.7974H7.56302C7.56302 16.8709 8.31406 16.1199 9.24043 16.1199V17.5369C9.24043 17.606 9.21298 17.6723 9.16413 17.7211C9.11528 17.77 9.04902 17.7974 8.97993 17.7974Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M9.24088 19.7023C8.31439 19.7023 7.56348 18.9512 7.56348 18.0247H8.98038C9.12425 18.0247 9.24088 18.1414 9.24088 18.2852V19.7023ZM138.045 19.7023C137.117 19.7023 136.367 18.9512 136.367 18.0247H137.784C137.928 18.0247 138.045 18.1414 138.045 18.2852V19.7023ZM9.46732 18.0247C10.3938 18.0247 11.1449 18.7758 11.1449 19.7023H9.72782C9.65873 19.7023 9.59247 19.6748 9.54362 19.626C9.49476 19.5771 9.46732 19.5109 9.46732 19.4418V18.0247ZM14.9544 16.1184H13.2769V17.7959H14.9544V16.1184ZM22.5699 16.1184H20.8925V17.7959H22.5699V16.1184ZM18.7621 18.0247H17.0847V19.7023H18.7621V18.0247Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M16.8582 18.0256H15.1807V19.7032H16.8582V18.0256Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M13.2769 19.7032C14.2033 19.7032 14.9544 18.9521 14.9544 18.0256H13.5375C13.4684 18.0256 13.4021 18.0531 13.3532 18.1019C13.3044 18.1508 13.2769 18.217 13.2769 18.2861V19.7032Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M13.0398 17.7974H11.3726V16.1199H13.0501V17.7872C13.0501 17.7899 13.049 17.7925 13.047 17.7944C13.0451 17.7963 13.0425 17.7974 13.0398 17.7974ZM13.05 18.0262C12.1235 18.0262 11.3726 18.7772 11.3726 19.7037H12.7895C12.8586 19.7037 12.9248 19.6763 12.9737 19.6274C13.0225 19.5786 13.05 19.5123 13.05 19.4432V18.0262Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M-5.75543 14.2143H-4.08822V15.8258C-4.08822 15.8433 -4.09515 15.8601 -4.10751 15.8725C-4.11987 15.8848 -4.13663 15.8918 -4.15412 15.8918H-5.76562V14.2245C-5.76562 14.2189 -5.76102 14.2143 -5.75543 14.2143ZM13.0505 14.2143H11.373V15.8917H13.0505V14.2143ZM9.17799 10.3596H7.50045V12.037H9.17799V10.3596Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M3.5291 14.2149H1.85156V15.8923H3.5291V14.2149ZM3.5291 12.3086H1.85156V13.986H3.5291V12.3086Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M20.6657 14.2158H18.9883V15.8932C19.9148 15.8932 20.6657 15.1422 20.6657 14.2158Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M18.7617 14.216H17.0843V15.8934H18.7617V14.216ZM16.887 10.3613H15.2095V12.0387H16.887V10.3613Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M11.1448 14.216H9.46729V15.8934H11.1448V14.216ZM15.022 10.3613H13.3446V12.0387H15.022V10.3613Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M-3.85986 12.3092H-2.19265C-2.18693 12.3092 -2.18233 12.3138 -2.18233 12.3194V13.9764C-2.18233 13.9791 -2.18342 13.9817 -2.18535 13.9837C-2.18729 13.9856 -2.18991 13.9867 -2.19265 13.9867H-3.85986V12.3092ZM5.43328 12.0802H3.75575V10.4028C4.68224 10.4028 5.43328 11.1539 5.43328 12.0802ZM47.2361 12.0802H45.5585V10.4028C46.485 10.4028 47.2361 11.1539 47.2361 12.0802Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M5.43339 12.3086H3.75586V13.986H5.43339V12.3086Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M5.43339 14.2158H3.75586V15.8932H5.43339V14.2158Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M7.33659 10.4028H5.65918V12.0802H7.33659V10.4028Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M5.65771 4.68555H7.33525V6.35288C7.33521 6.3556 7.33411 6.35819 7.33218 6.3601C7.33025 6.36201 7.32764 6.36308 7.32493 6.36308H5.65771V4.68555Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M9.23857 6.59187H7.82166C7.75257 6.59187 7.68631 6.61932 7.63746 6.66817C7.5886 6.71703 7.56116 6.78329 7.56116 6.85238V8.00878C7.56116 8.15265 7.67779 8.26941 7.82166 8.26941H9.23857V6.59187ZM7.56104 4.68555V6.10245C7.56104 6.24632 7.67767 6.36308 7.82154 6.36308H9.23844C9.23844 5.43659 8.4874 4.68555 7.56104 4.68555Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M3.52763 4.68555H1.8501V6.36308H3.52763V4.68555ZM3.52763 8.49832H1.8501V10.1759H3.52763V8.49832ZM9.46558 4.68555V6.36308H11.143C11.143 5.43659 10.392 4.68555 9.46558 4.68555ZM16.8548 6.59187H15.1774V8.26941H16.8548V6.59187ZM16.8548 4.68555C15.9283 4.68555 15.1774 5.43659 15.1774 6.36308H16.8548V4.68555ZM18.7586 4.68555H17.0812V6.36308H18.4981C18.5672 6.36305 18.6335 6.33557 18.6823 6.2867C18.7312 6.23783 18.7586 6.17156 18.7586 6.10245V4.68555Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M13.2729 6.36296H14.9505V4.68555H13.2729V6.36296Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M11.369 6.36296H13.0466V4.68555H11.369V6.36296ZM11.369 8.26941H13.0466V6.592H11.369V8.26941ZM11.355 10.1726H13.0325V8.49522H11.355V10.1726Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M5.43083 10.1765C4.50508 10.1765 3.75342 9.42485 3.75342 8.4991H5.43083V10.1765ZM3.75342 8.27018H5.43083V6.59277H3.75342V8.27018Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M-0.281087 8.49835H-1.9585V10.1759H-0.281087V8.49835ZM34.2165 -8.93502H35.894V-10.6125H34.2165V-8.93502Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M11.3711 -8.93514C12.2976 -8.93514 13.0485 -9.68618 13.0485 -10.6125H11.6316C11.5625 -10.6125 11.4962 -10.5851 11.4474 -10.5362C11.3985 -10.4874 11.3711 -10.4211 11.3711 -10.352V-8.93514ZM26.3777 4.45677H24.7104C24.7077 4.45677 24.7051 4.4557 24.7032 4.45379C24.7013 4.45187 24.7002 4.44928 24.7002 4.44658V2.77924H26.3776V4.45677H26.3777Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M-0.278645 4.45732H-1.69555C-1.76464 4.45732 -1.8309 4.42987 -1.87975 4.38102C-1.92861 4.33217 -1.95605 4.26591 -1.95605 4.19682V2.77979C-1.02956 2.77979 -0.278645 3.53095 -0.278645 4.45732ZM1.85163 4.45732V2.77979H3.52916C3.52916 3.70628 2.77812 4.45732 1.85163 4.45732Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M7.33659 2.77979H5.65918V4.45732H7.33659V2.77979Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M8.97995 4.45744H7.56304C7.56304 3.53095 8.31408 2.77991 9.24045 2.77991V4.19694C9.24045 4.26603 9.21301 4.33229 9.16415 4.38114C9.1153 4.43 9.04904 4.45744 8.97995 4.45744ZM9.46688 2.77979H11.1443V4.45732H9.47708C9.47434 4.45732 9.47172 4.45623 9.46978 4.4543C9.46785 4.45236 9.46676 4.44974 9.46676 4.447L9.46688 2.77979ZM7.50013 8.49578H9.17753V10.1732H7.51032C7.50758 10.1732 7.50496 10.1721 7.50302 10.1702C7.50109 10.1682 7.5 10.1656 7.5 10.1629V8.49566L7.50013 8.49578Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M14.9544 2.77979H13.2769V4.45732H14.9544V2.77979ZM20.8925 4.45744H22.5699V3.04054C22.5699 3.00632 22.5632 2.97243 22.5501 2.94081C22.537 2.90919 22.5178 2.88046 22.4936 2.85625C22.4694 2.83205 22.4407 2.81285 22.4091 2.79975C22.3775 2.78665 22.3436 2.77991 22.3094 2.77991H20.8925V4.45744Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M20.6658 4.457V2.77947H18.9884C18.9884 3.70596 19.7395 4.457 20.6658 4.457ZM20.6658 -1.31209V-2.9895H18.9884C18.9884 -2.06301 19.7395 -1.31209 20.6658 -1.31209ZM17.0845 4.457H18.7619V2.77947C17.8354 2.77947 17.0845 3.53063 17.0845 4.457ZM24.2131 0.823153H22.7961C22.7961 1.74964 23.5473 2.50069 24.4736 2.50069V1.08365C24.4736 1.04944 24.4669 1.01557 24.4538 0.983965C24.4407 0.952359 24.4215 0.923642 24.3973 0.899452C24.3732 0.875262 24.3444 0.856074 24.3128 0.842982C24.2812 0.829891 24.2474 0.823153 24.2131 0.823153Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M18.9844 6.59131H20.4013C20.5451 6.59131 20.6618 6.70807 20.6618 6.85181V8.00822C20.6618 8.07732 20.6343 8.14359 20.5855 8.19246C20.5366 8.24134 20.4704 8.26881 20.4013 8.26884H18.9844V6.59131Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M22.5662 6.3632H21.1492C21.0801 6.36317 21.0138 6.3357 20.965 6.28683C20.9161 6.23795 20.8887 6.17168 20.8887 6.10258V4.68567C21.8152 4.68567 22.5662 5.43671 22.5662 6.3632ZM24.4702 6.59187H22.7926V8.26941H24.4702V6.59187ZM24.4702 4.68555H22.7926V6.36308H24.4702V4.68555ZM26.374 6.59187H24.6966V8.26941H26.374V6.59187Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M22.7923 10.1757V8.4982H24.4698C24.4698 9.42469 23.7187 10.1757 22.7923 10.1757ZM15.2095 10.1725V8.49509H16.887C16.887 9.42158 16.1358 10.1725 15.2095 10.1725ZM28.2776 6.36308H26.6001V4.68555C27.5266 4.68555 28.2776 5.43659 28.2776 6.36308Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M20.6657 17.7959V16.1184H18.9883C18.9883 17.045 19.7393 17.7959 20.6657 17.7959Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M3.52763 6.59131H1.8501V8.26884H3.52763V6.59131Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M9.24088 19.9113V21.3282C9.24088 21.3624 9.23415 21.3963 9.22106 21.4279C9.20796 21.4595 9.18878 21.4882 9.16459 21.5124C9.1404 21.5366 9.11168 21.5558 9.08007 21.5689C9.04847 21.582 9.01459 21.5887 8.98038 21.5887H7.56348C7.56348 20.6622 8.31452 19.9113 9.24088 19.9113ZM11.1674 8.49561V9.91251C11.1674 9.9816 11.1399 10.0479 11.0911 10.0967C11.0422 10.1456 10.9759 10.173 10.9069 10.173H9.48995C9.48995 9.24652 10.241 8.49561 11.1674 8.49561Z"
                                          fill="#685879"
                                        />
                                      </g>
                                    </g>
                                    <path
                                      d="M6.78654 8.25375L6.82309 9.7696L8.15082 9.80657C9.01567 9.83122 9.52727 9.79425 9.6369 9.69565C9.75871 9.58474 9.80744 9.20269 9.80744 8.15515V6.75022H8.28481H6.75L6.78654 8.25375Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M10.5381 8.14267C10.5381 9.06697 10.5868 9.58457 10.6843 9.68317C10.8792 9.88035 13.1205 9.88035 13.3154 9.68317C13.4128 9.58457 13.4615 9.06697 13.4615 8.14267V6.75005H11.9998H10.5381V8.14267Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M14.1924 8.15515C14.1924 9.20269 14.2411 9.58474 14.3629 9.69565C14.4725 9.79425 14.9841 9.83122 15.849 9.80657L17.1767 9.7696L17.2133 8.25375L17.2498 6.75022H15.715H14.1924V8.15515Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M6.78654 11.9507L6.82309 13.4665L8.07773 13.5035C9.84398 13.5528 9.80744 13.5898 9.80744 11.8644V10.4471H8.28481H6.75L6.78654 11.9507Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M10.6843 10.5947C10.4894 10.7919 10.4894 13.1828 10.6843 13.3799C10.8792 13.5771 13.1205 13.5771 13.3154 13.3799C13.5103 13.1828 13.5103 10.7919 13.3154 10.5947C13.1205 10.3975 10.8792 10.3975 10.6843 10.5947Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M14.1924 11.8517C14.1924 12.8992 14.2411 13.2813 14.3629 13.3922C14.4725 13.4908 14.9841 13.5278 15.849 13.5031L17.1767 13.4661L17.2133 11.9503L17.2498 10.4468H15.715H14.1924V11.8517Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M6.88379 14.5141C6.88379 15.6725 8.04099 16.9173 9.35654 17.1637L9.80724 17.25V15.8451C9.80724 14.9208 9.75851 14.3908 9.66106 14.2922C9.56361 14.1936 9.06419 14.1444 8.19934 14.1444H6.88379V14.5141Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M10.6843 14.293C10.5868 14.3916 10.5381 14.9092 10.5381 15.8335V17.2261H11.9998H13.4615V15.8335C13.4615 14.9092 13.4128 14.3916 13.3154 14.293C13.1205 14.0958 10.8792 14.0958 10.6843 14.293Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M14.3386 14.2922C14.2411 14.3908 14.1924 14.8961 14.1924 15.8451V17.25L14.6431 17.1637C15.9586 16.9173 16.9818 15.8327 17.1402 14.5141L17.1767 14.206L15.8368 14.169C14.8989 14.1444 14.4482 14.1813 14.3386 14.2922Z"
                                      fill="#101828"
                                    />
                                  </g>
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_80_24521"
                                      x1="12"
                                      y1="0"
                                      x2="12"
                                      y2="24"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop offset="1" stop-color="#F3FEE7" />
                                    </linearGradient>
                                    <clipPath id="clip0_80_24521">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                    <clipPath id="clip1_80_24521">
                                      <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="4"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Wallet Name
                              </div>
                            </Link>
                            <a
                              className="z-10 ml-auto cursor-pointer h-6 w-6 absolute right-0 my-3 items-center flex justify-center mr-3 inset-y-0 rounded-lg border border-transparent duration-200 ease-in-out bg-gray-100/0 active:bg-gray-100 hover:bg-gray-100 group-hover:border-gray-300 font-medium"
                              onClick={() =>
                                handleOpenChange(
                                  "collapsible2",
                                  !openStates["collapsible2"]
                                )
                              }
                            >
                              {openStates["collapsible2"] ? (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 12.5L10 7.5L15 12.5"
                                    stroke="#475467"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="#475467"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              )}
                            </a>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="items-start">
                          <ul className="flex flex-col gap-1">
                            <li className="flex gap-2 items-center break-keep text-xs pl-3 text-gray-500">
                              <p className="break-keep w-auto whitespace-nowrap">
                                Network Accounts
                              </p>
                              <div className="w-full bg-gray-300 h-[1px]"></div>
                            </li>
                            <li>
                              <a
                                className={`group focus:ring-0 ${
                                  pathname === "/wealth/wallet1/btcnetwork"
                                    ? "justify-between outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                                    : "outline-none justify-between focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-200"
                                }`}
                                href="#"
                                id="overview"
                              >
                                <div className="flex gap-3 items-center">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_82_25188)">
                                      <rect
                                        width="24"
                                        height="24"
                                        rx="7"
                                        fill="#F7931A"
                                      />
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
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="7"
                                          fill="white"
                                        />
                                      </clipPath>
                                      <clipPath id="clip1_82_25188">
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="6"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>

                                  <Link href="" className="">
                                    <p className="text-sm">
                                      Bitcoin Network Account
                                    </p>
                                    <p className="text-xs">
                                      Bitcoin (428f...47d2)
                                    </p>
                                  </Link>
                                </div>
                                <p className="ml-auto text-sm font-medium"></p>
                              </a>
                            </li>
                            <li>
                              <a
                                className={`group focus:ring-0 ${
                                  pathname === "/wealth/wallet1/ethnetwork"
                                    ? "justify-between outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                                    : "outline-none justify-between focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-200"
                                }`}
                                href="#"
                                id="overview"
                              >
                                <div className="flex gap-3 items-center">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_82_25206)">
                                      <rect
                                        width="24"
                                        height="24"
                                        rx="7"
                                        fill="#ECEFF0"
                                      />
                                      <g clip-path="url(#clip1_82_25206)">
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="6"
                                          fill="#ECEFF0"
                                        />
                                        <circle
                                          cx="12"
                                          cy="12"
                                          r="12"
                                          fill="#ECEFF0"
                                        />
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
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="7"
                                          fill="white"
                                        />
                                      </clipPath>
                                      <clipPath id="clip1_82_25206">
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="6"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>

                                  <Link
                                    href="/wealth/wallet1/ethnetwork"
                                    className=""
                                  >
                                    <p className="text-sm">
                                      Ethereum Network Account
                                    </p>
                                    <p className="text-xs">
                                      Ethereum (0x8f...47d2)
                                    </p>
                                  </Link>
                                </div>
                                <p className="ml-auto text-sm font-medium"></p>
                              </a>
                            </li>
                            <li>
                              <a
                                className="group focus:ring-0 outline-none justify-between focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-200"
                                href="#"
                                id="overview"
                              >
                                <div className="flex gap-3 items-center">
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
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="7"
                                          fill="white"
                                        />
                                      </clipPath>
                                      <clipPath id="clip1_82_25224">
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="6"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>

                                  <div className="">
                                    <p className="text-sm">
                                      Polygon Network Account
                                    </p>
                                    <p className="text-xs">
                                      Polygon (0x8f...47d2)
                                    </p>
                                  </div>
                                </div>
                                <p className="ml-auto text-sm font-medium"></p>
                              </a>
                            </li>

                            <li className="flex gap-2 pl-3 items-center text-xs text-gray-500">
                              <div className="w-full bg-gray-300 h-[1px]">
                                {" "}
                              </div>
                            </li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </li>
                    <li>
                      <Collapsible
                        open={openStates["collapsible3"] || false}
                        // onOpenChange={(isOpen) =>
                        //   handleOpenChange("collapsible2", isOpen)
                        // }
                        className="w-full flex flex-col gap-1"
                      >
                        <CollapsibleTrigger className="w-full ease-in-out duration-200">
                          <div className="group relative  w-full outline-none  focus:tap-highlight-transparent focus:outline-none  rounded-xl h-12 duration-200 ease-in-out hover:text-black  hover:bg-white hover:shadow-sm">
                            <Link
                              href="#"
                              className={` focus:ring-0 ${
                                pathname === "/wealth/wallet2"
                                  ? "justify-between outline-none  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-12 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                                  : "outline-none justify-between hover:text-black  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-12 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                              }`}
                            >
                              <div className="flex gap-3 items-center">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clip-path="url(#clip0_80_24521)">
                                    <rect
                                      x="0.5"
                                      y="0.5"
                                      width="23"
                                      height="23"
                                      rx="6.5"
                                      fill="white"
                                    />
                                    <rect
                                      x="0.5"
                                      y="0.5"
                                      width="23"
                                      height="23"
                                      rx="6.5"
                                      stroke="#D0D5DD"
                                    />
                                    <path
                                      d="M8 9.50008C7.58798 9.50008 7.35279 9.97046 7.6 10.3001L11.6 15.6334C11.8 15.9001 12.2 15.9001 12.4 15.6334L16.4 10.3001C16.6472 9.97046 16.412 9.50008 16 9.50008H8Z"
                                      fill="#1D2939"
                                    />
                                    <rect
                                      x="0.375"
                                      y="0.375"
                                      width="23.25"
                                      height="23.25"
                                      rx="6.625"
                                      fill="url(#paint0_linear_80_24521)"
                                    />
                                    <rect
                                      x="0.375"
                                      y="0.375"
                                      width="23.25"
                                      height="23.25"
                                      rx="6.625"
                                      stroke="#D0D5DD"
                                      stroke-width="0.75"
                                    />
                                    <rect
                                      x="2"
                                      y="2"
                                      width="20"
                                      height="20"
                                      rx="5"
                                      fill="#3CCB7F"
                                    />
                                    <g clip-path="url(#clip1_80_24521)">
                                      <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="4"
                                        fill="white"
                                      />
                                      <g opacity="0.8">
                                        <g opacity="0.1">
                                          <path
                                            d="M9.48975 12.3076H10.9067C11.0505 12.3076 11.1672 12.4242 11.1672 12.5681V13.985C10.2407 13.985 9.48975 13.2339 9.48975 12.3076ZM9.48975 10.4014H10.9067C11.0505 10.4014 11.1673 10.518 11.1673 10.6619V11.8183C11.1672 11.8874 11.1398 11.9536 11.0909 12.0025C11.042 12.0513 10.9758 12.0788 10.9067 12.0788H9.48975V10.4014Z"
                                            fill="#685879"
                                          />
                                        </g>
                                        <g opacity="0.1">
                                          <path
                                            d="M16.8582 19.9099H15.1807V21.5874H16.8582V19.9099ZM15.1807 25.4001C16.1072 25.4001 16.8582 24.6491 16.8582 23.7227H15.1807V25.4001Z"
                                            fill="#685879"
                                          />
                                        </g>
                                        <path
                                          opacity="0.05"
                                          d="M30.1855 17.7974H28.7686C28.6995 17.7974 28.6333 17.77 28.5844 17.7211C28.5356 17.6723 28.5081 17.606 28.5081 17.5369V16.1199C29.4346 16.1199 30.1855 16.8709 30.1855 17.7974ZM32.0894 18.0262H30.412V19.7037H32.0894V18.0262ZM-7.66943 17.7974H-6.25253C-6.18344 17.7974 -6.11718 17.77 -6.06832 17.7211C-6.01947 17.6723 -5.99202 17.606 -5.99202 17.5369V16.1199C-6.91839 16.1199 -7.66943 16.8709 -7.66943 17.7974Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M-0.278645 17.7965H-1.69555C-1.76464 17.7965 -1.8309 17.7691 -1.87975 17.7202C-1.92861 17.6714 -1.95605 17.6051 -1.95605 17.536V16.119C-1.02956 16.119 -0.278645 16.87 -0.278645 17.7965ZM41.5243 17.7965H40.1072C40.0382 17.7965 39.9719 17.7691 39.923 17.7202C39.8742 17.6714 39.8467 17.6051 39.8467 17.536V16.119C40.7732 16.119 41.5243 16.87 41.5243 17.7965ZM1.85163 17.7965V16.119H3.52916C3.52916 17.0455 2.77812 17.7965 1.85163 17.7965ZM7.33697 16.119H5.65956V17.7965H7.33697V16.119ZM11.1673 6.62988H9.48987V8.30742H11.1673V6.62988Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M7.33659 18.0262H5.65918V19.7037H7.33659V18.0262ZM8.97993 17.7974H7.56302C7.56302 16.8709 8.31406 16.1199 9.24043 16.1199V17.5369C9.24043 17.606 9.21298 17.6723 9.16413 17.7211C9.11528 17.77 9.04902 17.7974 8.97993 17.7974Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M9.24088 19.7023C8.31439 19.7023 7.56348 18.9512 7.56348 18.0247H8.98038C9.12425 18.0247 9.24088 18.1414 9.24088 18.2852V19.7023ZM138.045 19.7023C137.117 19.7023 136.367 18.9512 136.367 18.0247H137.784C137.928 18.0247 138.045 18.1414 138.045 18.2852V19.7023ZM9.46732 18.0247C10.3938 18.0247 11.1449 18.7758 11.1449 19.7023H9.72782C9.65873 19.7023 9.59247 19.6748 9.54362 19.626C9.49476 19.5771 9.46732 19.5109 9.46732 19.4418V18.0247ZM14.9544 16.1184H13.2769V17.7959H14.9544V16.1184ZM22.5699 16.1184H20.8925V17.7959H22.5699V16.1184ZM18.7621 18.0247H17.0847V19.7023H18.7621V18.0247Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M16.8582 18.0256H15.1807V19.7032H16.8582V18.0256Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M13.2769 19.7032C14.2033 19.7032 14.9544 18.9521 14.9544 18.0256H13.5375C13.4684 18.0256 13.4021 18.0531 13.3532 18.1019C13.3044 18.1508 13.2769 18.217 13.2769 18.2861V19.7032Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M13.0398 17.7974H11.3726V16.1199H13.0501V17.7872C13.0501 17.7899 13.049 17.7925 13.047 17.7944C13.0451 17.7963 13.0425 17.7974 13.0398 17.7974ZM13.05 18.0262C12.1235 18.0262 11.3726 18.7772 11.3726 19.7037H12.7895C12.8586 19.7037 12.9248 19.6763 12.9737 19.6274C13.0225 19.5786 13.05 19.5123 13.05 19.4432V18.0262Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M-5.75543 14.2143H-4.08822V15.8258C-4.08822 15.8433 -4.09515 15.8601 -4.10751 15.8725C-4.11987 15.8848 -4.13663 15.8918 -4.15412 15.8918H-5.76562V14.2245C-5.76562 14.2189 -5.76102 14.2143 -5.75543 14.2143ZM13.0505 14.2143H11.373V15.8917H13.0505V14.2143ZM9.17799 10.3596H7.50045V12.037H9.17799V10.3596Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M3.5291 14.2149H1.85156V15.8923H3.5291V14.2149ZM3.5291 12.3086H1.85156V13.986H3.5291V12.3086Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M20.6657 14.2158H18.9883V15.8932C19.9148 15.8932 20.6657 15.1422 20.6657 14.2158Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M18.7617 14.216H17.0843V15.8934H18.7617V14.216ZM16.887 10.3613H15.2095V12.0387H16.887V10.3613Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M11.1448 14.216H9.46729V15.8934H11.1448V14.216ZM15.022 10.3613H13.3446V12.0387H15.022V10.3613Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M-3.85986 12.3092H-2.19265C-2.18693 12.3092 -2.18233 12.3138 -2.18233 12.3194V13.9764C-2.18233 13.9791 -2.18342 13.9817 -2.18535 13.9837C-2.18729 13.9856 -2.18991 13.9867 -2.19265 13.9867H-3.85986V12.3092ZM5.43328 12.0802H3.75575V10.4028C4.68224 10.4028 5.43328 11.1539 5.43328 12.0802ZM47.2361 12.0802H45.5585V10.4028C46.485 10.4028 47.2361 11.1539 47.2361 12.0802Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M5.43339 12.3086H3.75586V13.986H5.43339V12.3086Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M5.43339 14.2158H3.75586V15.8932H5.43339V14.2158Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M7.33659 10.4028H5.65918V12.0802H7.33659V10.4028Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M5.65771 4.68555H7.33525V6.35288C7.33521 6.3556 7.33411 6.35819 7.33218 6.3601C7.33025 6.36201 7.32764 6.36308 7.32493 6.36308H5.65771V4.68555Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M9.23857 6.59187H7.82166C7.75257 6.59187 7.68631 6.61932 7.63746 6.66817C7.5886 6.71703 7.56116 6.78329 7.56116 6.85238V8.00878C7.56116 8.15265 7.67779 8.26941 7.82166 8.26941H9.23857V6.59187ZM7.56104 4.68555V6.10245C7.56104 6.24632 7.67767 6.36308 7.82154 6.36308H9.23844C9.23844 5.43659 8.4874 4.68555 7.56104 4.68555Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M3.52763 4.68555H1.8501V6.36308H3.52763V4.68555ZM3.52763 8.49832H1.8501V10.1759H3.52763V8.49832ZM9.46558 4.68555V6.36308H11.143C11.143 5.43659 10.392 4.68555 9.46558 4.68555ZM16.8548 6.59187H15.1774V8.26941H16.8548V6.59187ZM16.8548 4.68555C15.9283 4.68555 15.1774 5.43659 15.1774 6.36308H16.8548V4.68555ZM18.7586 4.68555H17.0812V6.36308H18.4981C18.5672 6.36305 18.6335 6.33557 18.6823 6.2867C18.7312 6.23783 18.7586 6.17156 18.7586 6.10245V4.68555Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M13.2729 6.36296H14.9505V4.68555H13.2729V6.36296Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M11.369 6.36296H13.0466V4.68555H11.369V6.36296ZM11.369 8.26941H13.0466V6.592H11.369V8.26941ZM11.355 10.1726H13.0325V8.49522H11.355V10.1726Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M5.43083 10.1765C4.50508 10.1765 3.75342 9.42485 3.75342 8.4991H5.43083V10.1765ZM3.75342 8.27018H5.43083V6.59277H3.75342V8.27018Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M-0.281087 8.49835H-1.9585V10.1759H-0.281087V8.49835ZM34.2165 -8.93502H35.894V-10.6125H34.2165V-8.93502Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M11.3711 -8.93514C12.2976 -8.93514 13.0485 -9.68618 13.0485 -10.6125H11.6316C11.5625 -10.6125 11.4962 -10.5851 11.4474 -10.5362C11.3985 -10.4874 11.3711 -10.4211 11.3711 -10.352V-8.93514ZM26.3777 4.45677H24.7104C24.7077 4.45677 24.7051 4.4557 24.7032 4.45379C24.7013 4.45187 24.7002 4.44928 24.7002 4.44658V2.77924H26.3776V4.45677H26.3777Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M-0.278645 4.45732H-1.69555C-1.76464 4.45732 -1.8309 4.42987 -1.87975 4.38102C-1.92861 4.33217 -1.95605 4.26591 -1.95605 4.19682V2.77979C-1.02956 2.77979 -0.278645 3.53095 -0.278645 4.45732ZM1.85163 4.45732V2.77979H3.52916C3.52916 3.70628 2.77812 4.45732 1.85163 4.45732Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M7.33659 2.77979H5.65918V4.45732H7.33659V2.77979Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M8.97995 4.45744H7.56304C7.56304 3.53095 8.31408 2.77991 9.24045 2.77991V4.19694C9.24045 4.26603 9.21301 4.33229 9.16415 4.38114C9.1153 4.43 9.04904 4.45744 8.97995 4.45744ZM9.46688 2.77979H11.1443V4.45732H9.47708C9.47434 4.45732 9.47172 4.45623 9.46978 4.4543C9.46785 4.45236 9.46676 4.44974 9.46676 4.447L9.46688 2.77979ZM7.50013 8.49578H9.17753V10.1732H7.51032C7.50758 10.1732 7.50496 10.1721 7.50302 10.1702C7.50109 10.1682 7.5 10.1656 7.5 10.1629V8.49566L7.50013 8.49578Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M14.9544 2.77979H13.2769V4.45732H14.9544V2.77979ZM20.8925 4.45744H22.5699V3.04054C22.5699 3.00632 22.5632 2.97243 22.5501 2.94081C22.537 2.90919 22.5178 2.88046 22.4936 2.85625C22.4694 2.83205 22.4407 2.81285 22.4091 2.79975C22.3775 2.78665 22.3436 2.77991 22.3094 2.77991H20.8925V4.45744Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M20.6658 4.457V2.77947H18.9884C18.9884 3.70596 19.7395 4.457 20.6658 4.457ZM20.6658 -1.31209V-2.9895H18.9884C18.9884 -2.06301 19.7395 -1.31209 20.6658 -1.31209ZM17.0845 4.457H18.7619V2.77947C17.8354 2.77947 17.0845 3.53063 17.0845 4.457ZM24.2131 0.823153H22.7961C22.7961 1.74964 23.5473 2.50069 24.4736 2.50069V1.08365C24.4736 1.04944 24.4669 1.01557 24.4538 0.983965C24.4407 0.952359 24.4215 0.923642 24.3973 0.899452C24.3732 0.875262 24.3444 0.856074 24.3128 0.842982C24.2812 0.829891 24.2474 0.823153 24.2131 0.823153Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M18.9844 6.59131H20.4013C20.5451 6.59131 20.6618 6.70807 20.6618 6.85181V8.00822C20.6618 8.07732 20.6343 8.14359 20.5855 8.19246C20.5366 8.24134 20.4704 8.26881 20.4013 8.26884H18.9844V6.59131Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M22.5662 6.3632H21.1492C21.0801 6.36317 21.0138 6.3357 20.965 6.28683C20.9161 6.23795 20.8887 6.17168 20.8887 6.10258V4.68567C21.8152 4.68567 22.5662 5.43671 22.5662 6.3632ZM24.4702 6.59187H22.7926V8.26941H24.4702V6.59187ZM24.4702 4.68555H22.7926V6.36308H24.4702V4.68555ZM26.374 6.59187H24.6966V8.26941H26.374V6.59187Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M22.7923 10.1757V8.4982H24.4698C24.4698 9.42469 23.7187 10.1757 22.7923 10.1757ZM15.2095 10.1725V8.49509H16.887C16.887 9.42158 16.1358 10.1725 15.2095 10.1725ZM28.2776 6.36308H26.6001V4.68555C27.5266 4.68555 28.2776 5.43659 28.2776 6.36308Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.2"
                                          d="M20.6657 17.7959V16.1184H18.9883C18.9883 17.045 19.7393 17.7959 20.6657 17.7959Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.05"
                                          d="M3.52763 6.59131H1.8501V8.26884H3.52763V6.59131Z"
                                          fill="#685879"
                                        />
                                        <path
                                          opacity="0.1"
                                          d="M9.24088 19.9113V21.3282C9.24088 21.3624 9.23415 21.3963 9.22106 21.4279C9.20796 21.4595 9.18878 21.4882 9.16459 21.5124C9.1404 21.5366 9.11168 21.5558 9.08007 21.5689C9.04847 21.582 9.01459 21.5887 8.98038 21.5887H7.56348C7.56348 20.6622 8.31452 19.9113 9.24088 19.9113ZM11.1674 8.49561V9.91251C11.1674 9.9816 11.1399 10.0479 11.0911 10.0967C11.0422 10.1456 10.9759 10.173 10.9069 10.173H9.48995C9.48995 9.24652 10.241 8.49561 11.1674 8.49561Z"
                                          fill="#685879"
                                        />
                                      </g>
                                    </g>
                                    <path
                                      d="M6.78654 8.25375L6.82309 9.7696L8.15082 9.80657C9.01567 9.83122 9.52727 9.79425 9.6369 9.69565C9.75871 9.58474 9.80744 9.20269 9.80744 8.15515V6.75022H8.28481H6.75L6.78654 8.25375Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M10.5381 8.14267C10.5381 9.06697 10.5868 9.58457 10.6843 9.68317C10.8792 9.88035 13.1205 9.88035 13.3154 9.68317C13.4128 9.58457 13.4615 9.06697 13.4615 8.14267V6.75005H11.9998H10.5381V8.14267Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M14.1924 8.15515C14.1924 9.20269 14.2411 9.58474 14.3629 9.69565C14.4725 9.79425 14.9841 9.83122 15.849 9.80657L17.1767 9.7696L17.2133 8.25375L17.2498 6.75022H15.715H14.1924V8.15515Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M6.78654 11.9507L6.82309 13.4665L8.07773 13.5035C9.84398 13.5528 9.80744 13.5898 9.80744 11.8644V10.4471H8.28481H6.75L6.78654 11.9507Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M10.6843 10.5947C10.4894 10.7919 10.4894 13.1828 10.6843 13.3799C10.8792 13.5771 13.1205 13.5771 13.3154 13.3799C13.5103 13.1828 13.5103 10.7919 13.3154 10.5947C13.1205 10.3975 10.8792 10.3975 10.6843 10.5947Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M14.1924 11.8517C14.1924 12.8992 14.2411 13.2813 14.3629 13.3922C14.4725 13.4908 14.9841 13.5278 15.849 13.5031L17.1767 13.4661L17.2133 11.9503L17.2498 10.4468H15.715H14.1924V11.8517Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M6.88379 14.5141C6.88379 15.6725 8.04099 16.9173 9.35654 17.1637L9.80724 17.25V15.8451C9.80724 14.9208 9.75851 14.3908 9.66106 14.2922C9.56361 14.1936 9.06419 14.1444 8.19934 14.1444H6.88379V14.5141Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M10.6843 14.293C10.5868 14.3916 10.5381 14.9092 10.5381 15.8335V17.2261H11.9998H13.4615V15.8335C13.4615 14.9092 13.4128 14.3916 13.3154 14.293C13.1205 14.0958 10.8792 14.0958 10.6843 14.293Z"
                                      fill="#101828"
                                    />
                                    <path
                                      d="M14.3386 14.2922C14.2411 14.3908 14.1924 14.8961 14.1924 15.8451V17.25L14.6431 17.1637C15.9586 16.9173 16.9818 15.8327 17.1402 14.5141L17.1767 14.206L15.8368 14.169C14.8989 14.1444 14.4482 14.1813 14.3386 14.2922Z"
                                      fill="#101828"
                                    />
                                  </g>
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_80_24521"
                                      x1="12"
                                      y1="0"
                                      x2="12"
                                      y2="24"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="white" />
                                      <stop offset="1" stop-color="#F3FEE7" />
                                    </linearGradient>
                                    <clipPath id="clip0_80_24521">
                                      <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                      />
                                    </clipPath>
                                    <clipPath id="clip1_80_24521">
                                      <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="4"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Wallet Name
                              </div>
                            </Link>
                            <a
                              className="z-10 ml-auto cursor-pointer h-6 w-6 absolute right-0 my-3 items-center flex justify-center mr-3 inset-y-0 rounded-lg border border-transparent duration-200 ease-in-out bg-gray-100/0 active:bg-gray-100 hover:bg-gray-100 group-hover:border-gray-300 font-medium"
                              onClick={() =>
                                handleOpenChange(
                                  "collapsible3",
                                  !openStates["collapsible3"]
                                )
                              }
                            >
                              {openStates["collapsible3"] ? (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 12.5L10 7.5L15 12.5"
                                    stroke="#475467"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="#475467"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              )}
                            </a>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="items-start">
                          <ul className="flex flex-col gap-1">
                            <li className="flex gap-2 items-center break-keep text-xs pl-3 text-gray-500">
                              <p className="break-keep w-auto whitespace-nowrap">
                                Network Accounts
                              </p>
                              <div className="w-full bg-gray-300 h-[1px]"></div>
                            </li>
                            <li>
                              <a
                                className={`group focus:ring-0 ${
                                  pathname === "/wealth/wallet1/btcnetwork"
                                    ? "justify-between outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                                    : "outline-none justify-between focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-200"
                                }`}
                                href="#"
                                id="overview"
                              >
                                <div className="flex gap-3 items-center">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_82_25188)">
                                      <rect
                                        width="24"
                                        height="24"
                                        rx="7"
                                        fill="#F7931A"
                                      />
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
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="7"
                                          fill="white"
                                        />
                                      </clipPath>
                                      <clipPath id="clip1_82_25188">
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="6"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>

                                  <Link href="" className="">
                                    <p className="text-sm">
                                      Bitcoin Network Account
                                    </p>
                                    <p className="text-xs">
                                      Bitcoin (428f...47d2)
                                    </p>
                                  </Link>
                                </div>
                                <p className="ml-auto text-sm font-medium"></p>
                              </a>
                            </li>
                            <li>
                              <a
                                className={`group focus:ring-0 ${
                                  pathname === "/wealth/wallet1/ethnetwork"
                                    ? "justify-between outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                                    : "outline-none justify-between focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-200"
                                }`}
                                href="#"
                                id="overview"
                              >
                                <div className="flex gap-3 items-center">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_82_25206)">
                                      <rect
                                        width="24"
                                        height="24"
                                        rx="7"
                                        fill="#ECEFF0"
                                      />
                                      <g clip-path="url(#clip1_82_25206)">
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="6"
                                          fill="#ECEFF0"
                                        />
                                        <circle
                                          cx="12"
                                          cy="12"
                                          r="12"
                                          fill="#ECEFF0"
                                        />
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
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="7"
                                          fill="white"
                                        />
                                      </clipPath>
                                      <clipPath id="clip1_82_25206">
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="6"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>

                                  <Link href="#" className="">
                                    <p className="text-sm">
                                      Ethereum Network Account
                                    </p>
                                    <p className="text-xs">
                                      Ethereum (0x8f...47d2)
                                    </p>
                                  </Link>
                                </div>
                                <p className="ml-auto text-sm font-medium"></p>
                              </a>
                            </li>
                            <li>
                              <a
                                className="group focus:ring-0 outline-none justify-between focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-200"
                                href="#"
                                id="overview"
                              >
                                <div className="flex gap-3 items-center">
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
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="7"
                                          fill="white"
                                        />
                                      </clipPath>
                                      <clipPath id="clip1_82_25224">
                                        <rect
                                          width="24"
                                          height="24"
                                          rx="6"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>

                                  <div className="">
                                    <p className="text-sm">
                                      Polygon Network Account
                                    </p>
                                    <p className="text-xs">
                                      Polygon (0x8f...47d2)
                                    </p>
                                  </div>
                                </div>
                                <p className="ml-auto text-sm font-medium"></p>
                              </a>
                            </li>

                            <li className="flex gap-2 pl-3 items-center text-xs text-gray-500">
                              <div className="w-full bg-gray-300 h-[1px]">
                                {" "}
                              </div>
                            </li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </li>

                    <li className="flex gap-2 items-center text-xs text-gray-500">
                      <div className="w-full bg-gray-300 h-[1px]"> </div>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <li>
                <a
                  className={`group focus:ring-0 ${
                    pathname === "/marketplace"
                      ? "   w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-12 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      : "w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-12 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                  }`}
                  href="#"
                  id="overview"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.68 3.75998L4.64 5.14664C4.43401 5.4213 4.33102 5.55862 4.33341 5.67357C4.33549 5.77361 4.38239 5.86741 4.46117 5.9291C4.55169 5.99998 4.72335 5.99998 5.06667 5.99998H14.9333C15.2766 5.99998 15.4483 5.99998 15.5388 5.9291C15.6176 5.86741 15.6645 5.77361 15.6666 5.67357C15.669 5.55862 15.566 5.4213 15.36 5.14665L14.32 3.75998M5.68 3.75998C5.79733 3.60354 5.856 3.52531 5.93035 3.4689C5.9962 3.41893 6.07077 3.38164 6.15026 3.35894C6.24 3.33331 6.33778 3.33331 6.53333 3.33331H13.4667C13.6622 3.33331 13.76 3.33331 13.8497 3.35894C13.9292 3.38164 14.0038 3.41893 14.0697 3.4689C14.144 3.52531 14.2027 3.60354 14.32 3.75998M5.68 3.75998L4.42667 5.43109C4.26836 5.64217 4.18921 5.7477 4.133 5.86393C4.08312 5.96706 4.04675 6.07619 4.02477 6.18862C4 6.31532 4 6.44724 4 6.71109L4 14.5333C4 15.28 4 15.6534 4.14532 15.9386C4.27316 16.1895 4.47713 16.3935 4.72801 16.5213C5.01323 16.6666 5.3866 16.6666 6.13333 16.6666L13.8667 16.6666C14.6134 16.6666 14.9868 16.6666 15.272 16.5213C15.5229 16.3935 15.7268 16.1895 15.8547 15.9386C16 15.6534 16 15.28 16 14.5333V6.71109C16 6.44725 16 6.31532 15.9752 6.18862C15.9533 6.07619 15.9169 5.96706 15.867 5.86393C15.8108 5.74771 15.7316 5.64217 15.5733 5.43109L14.32 3.75998M12.6667 8.66665C12.6667 9.37389 12.3857 10.0522 11.8856 10.5523C11.3855 11.0524 10.7072 11.3333 10 11.3333C9.29276 11.3333 8.61448 11.0524 8.11438 10.5523C7.61428 10.0522 7.33333 9.37389 7.33333 8.66665"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Marketplace
                </a>
              </li>

              <li>
                <a
                  className={`group focus:ring-0 ${
                    pathname === "/marketplace"
                      ? "   w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-12 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      : "w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-12 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                  }`}
                  href="#"
                  id="overview"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_8991_14457)">
                      <path
                        d="M9.99967 5.99998V9.99998L12.6663 11.3333M16.6663 9.99998C16.6663 13.6819 13.6816 16.6666 9.99967 16.6666C6.31778 16.6666 3.33301 13.6819 3.33301 9.99998C3.33301 6.31808 6.31778 3.33331 9.99967 3.33331C13.6816 3.33331 16.6663 6.31808 16.6663 9.99998Z"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8991_14457">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(2 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Transactions
                </a>
              </li>

              <li>
                <a
                  className={`group focus:ring-0 ${
                    pathname === "/marketplace"
                      ? "   w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-12 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      : "w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-12 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                  }`}
                  href="#"
                  id="overview"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99967 15.3334H5.46634C4.7196 15.3334 4.34624 15.3334 4.06102 15.188C3.81014 15.0602 3.60616 14.8562 3.47833 14.6053C3.33301 14.3201 3.33301 13.9468 3.33301 13.2V6.80002C3.33301 6.05328 3.33301 5.67992 3.47833 5.3947C3.60616 5.14382 3.81014 4.93984 4.06102 4.81201C4.34624 4.66669 4.7196 4.66669 5.46634 4.66669H5.73301C7.22648 4.66669 7.97322 4.66669 8.54365 4.95734C9.04541 5.213 9.45336 5.62095 9.70903 6.12271C9.99967 6.69314 9.99967 7.43988 9.99967 8.93335M9.99967 15.3334V8.93335M9.99967 15.3334H14.533C15.2797 15.3334 15.6531 15.3334 15.9383 15.188C16.1892 15.0602 16.3932 14.8562 16.521 14.6053C16.6663 14.3201 16.6663 13.9468 16.6663 13.2V6.80002C16.6663 6.05328 16.6663 5.67992 16.521 5.3947C16.3932 5.14382 16.1892 4.93984 15.9383 4.81201C15.6531 4.66669 15.2797 4.66669 14.533 4.66669H14.2663C12.7729 4.66669 12.0261 4.66669 11.4557 4.95734C10.9539 5.213 10.546 5.62095 10.2903 6.12271C9.99967 6.69314 9.99967 7.43988 9.99967 8.93335"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Address Book
                </a>
              </li>

              <li>
                <a
                  className={`group focus:ring-0 ${
                    pathname === "/marketplace"
                      ? "   w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-12 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      : "w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-12 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                  }`}
                  href="#"
                  id="overview"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3337 10.3333V6.53331C15.3337 5.41321 15.3337 4.85316 15.1157 4.42533C14.9239 4.04901 14.618 3.74305 14.2416 3.5513C13.8138 3.33331 13.2538 3.33331 12.1337 3.33331H7.86699C6.74689 3.33331 6.18683 3.33331 5.75901 3.5513C5.38269 3.74305 5.07673 4.04901 4.88498 4.42533C4.66699 4.85316 4.66699 5.41321 4.66699 6.53331V13.4666C4.66699 14.5868 4.66699 15.1468 4.88498 15.5746C5.07673 15.951 5.38269 16.2569 5.75901 16.4487C6.18683 16.6666 6.74689 16.6666 7.86699 16.6666H10.0003M11.3337 9.33331H7.33366M8.66699 12H7.33366M12.667 6.66665H7.33366M11.667 14.6666L13.0003 16L16.0003 13"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Agreements
                </a>
              </li>

              <li>
                <a
                  className={`group focus:ring-0 ${
                    pathname === "/marketplace"
                      ? "   w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-12 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      : "w-full outline-none  focus:tap-highlight-transparent  hover:text-black  hover:bg-white hover:shadow-sm  focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-12 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 target:bg-white target:text-black border border-transparent target:border-gray-200"
                  }`}
                  href="#"
                  id="overview"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3332 16H8.66652M13.9998 7.33331C13.9998 6.27245 13.5784 5.25503 12.8283 4.50489C12.0781 3.75474 11.0607 3.33331 9.99985 3.33331C8.93898 3.33331 7.92157 3.75474 7.17142 4.50489C6.42128 5.25503 5.99985 6.27245 5.99985 7.33331C5.99985 9.39344 5.48016 10.804 4.89963 11.7369C4.40993 12.5239 4.16509 12.9174 4.17407 13.0272C4.18401 13.1487 4.20976 13.195 4.3077 13.2677C4.39616 13.3333 4.79491 13.3333 5.59242 13.3333H14.4073C15.2048 13.3333 15.6035 13.3333 15.692 13.2677C15.7899 13.195 15.8157 13.1487 15.8256 13.0272C15.8346 12.9174 15.5898 12.5239 15.1001 11.7369C14.5195 10.804 13.9998 9.39344 13.9998 7.33331Z"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Notifications
                </a>
              </li>
            </ul>

            <div className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                <li>
                  <div className="flex flex-col px-4 py-5 gap-1 rounded-xl bg-white border border-gray-300 text-sm shadow-sm">
                    <svg
                      width="103"
                      height="16"
                      viewBox="0 0 103 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9091 0C20.3586 0 23.1543 2.7746 23.1543 6.19823C23.1543 9.62184 20.3586 12.3738 16.9091 12.3738H6.22226C2.77275 12.3738 0 9.62184 0 6.19823C0 2.7746 2.77275 0 6.22226 0H16.9091ZM78.0064 0.403143C81.1854 0.403143 83.4171 2.79727 83.4171 6.24355C83.4171 9.46593 81.2525 11.972 78.0514 11.972C76.5858 11.972 75.233 11.3903 74.2186 10.3835V16H72.2347V0.515088H73.993L74.1736 1.92505C75.0531 0.917543 76.4052 0.403143 78.0064 0.403143ZM66.5535 0.403143C67.8385 0.403143 70.792 0.872903 70.792 5.30335V11.8594H68.8309V5.41529C68.8309 3.89337 68.3798 2.14825 66.2609 2.14825C64.4797 2.14825 63.3754 3.49092 63.3754 5.77311V11.8594H61.4136V5.41529C61.4136 3.31167 60.534 2.14825 58.8885 2.14825C57.1302 2.14825 56.003 3.55823 56.003 5.84041V11.8594H53.9963V0.515088H55.7774L55.8902 1.7458C56.657 0.984848 57.7613 0.403143 59.1819 0.403143C60.6026 0.403143 61.8426 1.09679 62.6536 2.2602C63.5996 1.02949 64.8852 0.403143 66.5535 0.403143ZM51.7183 9.93501C51.7183 10.0696 51.8311 10.0916 51.9439 10.0916H53.0033V11.8594H51.9439C50.9515 11.8594 50.2527 11.3896 49.96 10.5614C48.9456 11.5682 47.7734 11.9713 46.0593 11.9713C44.0526 11.9713 42.0008 10.8526 42.0008 8.52573C42.0008 6.19891 43.7142 4.90089 46.5997 4.90089H49.7109V4.36383C49.7109 2.90921 48.7642 2.08164 47.073 2.08164C45.6525 2.08164 44.593 2.66335 44.3675 3.73748L44.3225 3.96137H42.3157L42.4057 3.55891C42.8568 1.56724 44.5924 0.403829 47.1851 0.403829C50.0706 0.403829 51.7169 1.92575 51.7169 4.47645V9.93501H51.7183ZM89.9327 0.403143C92.976 0.403143 95.1405 2.5514 95.1405 5.66116C95.1405 5.92969 95.1405 6.35481 95.0955 6.60068H86.5731V6.64532C86.6181 8.81556 87.9709 10.2702 89.8649 10.2702C91.2854 10.2702 92.6383 9.50921 92.976 8.23385L93.0437 7.98799H95.0505L94.9377 8.45775C94.3966 10.6953 92.4576 11.9706 90.0454 11.9706C86.6859 11.9706 84.4543 9.57651 84.4543 6.17556C84.4543 2.72996 86.6859 0.403143 89.9327 0.403143ZM12.4673 6.19823C12.4673 8.65965 14.4291 10.584 16.9084 10.584C19.3878 10.584 21.3496 8.65965 21.3496 6.19823C21.3496 3.73679 19.3656 1.79044 16.9084 1.79044C14.4291 1.79044 12.4673 3.75945 12.4673 6.19823ZM29.9625 0.403143C31.3154 0.403143 34.4494 0.917542 34.4494 5.54989V11.8601H32.4426V5.66184C32.4426 4.07332 31.9693 2.14895 29.6242 2.14895C27.5503 2.14895 26.3103 3.67017 26.3103 6.17624V11.8601H24.3713V0.515088H26.0848L26.1976 1.7458C27.1441 0.872903 28.497 0.403143 29.9625 0.403143ZM81.3653 6.17624C81.3653 3.73748 79.9446 2.08164 77.8259 2.08164C75.707 2.08164 74.2186 3.78212 74.2186 6.17624C74.2186 8.57037 75.6392 10.2709 77.758 10.2709C79.8769 10.2709 81.3653 8.63768 81.3653 6.17624ZM37.7853 1.7458C38.3714 0.984848 39.1831 0.515088 40.1298 0.515088H41.9558V2.37215H40.1975C38.597 2.37215 37.8981 4.31849 37.8981 6.06431V11.8594H35.8915V0.515088H37.6726L37.7853 1.7458ZM10.6862 6.19823C10.6862 4.47508 11.3851 2.90921 12.5123 1.79044H11.5657C9.08564 1.79044 7.12459 3.75945 7.12459 6.19823C7.12459 8.63699 8.99569 10.4947 11.3858 10.584H12.513C11.3851 9.46525 10.6862 7.92136 10.6862 6.19823ZM1.78114 6.19823C1.78114 8.63699 3.7429 10.584 6.22226 10.584H7.16888C6.04164 9.46525 5.34275 7.92136 5.34275 6.19823C5.34275 4.47508 6.04164 2.90921 7.16888 1.79044H6.22226C3.74221 1.79044 1.78114 3.75945 1.78114 6.19823ZM46.4205 10.3382C48.4273 10.3382 49.7122 9.04013 49.7122 7.00383V6.46676H46.3527C44.8193 6.46676 44.0083 7.18307 44.0083 8.45843C44.0083 10.0916 45.5411 10.3382 46.4205 10.3382ZM93.0437 4.94553C92.7511 3.20041 91.5782 2.08164 89.9327 2.08164C88.2871 2.08164 87.0471 3.26772 86.6859 4.94553H93.0437ZM98.2295 1.7458C98.8156 0.984848 99.6273 0.515088 100.574 0.515088H102.4V2.37215H100.642C99.0412 2.37215 98.3423 4.31849 98.3423 6.06431V11.8594H96.3355V0.515088H98.1167L98.2295 1.7458Z"
                        fill="black"
                      />
                    </svg>

                    <h3 className="font-semibold text-gray-900">
                      Buy Crypto with Cash
                    </h3>
                    <p className="text-gray-600">
                      Trade your cash for crypto at the best rates.
                    </p>

                    <a className="mt-4 text-emerald-700 font-semibold">
                      Buy Now
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export { SideBar };
