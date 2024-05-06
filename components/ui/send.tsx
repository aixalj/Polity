import * as React from "react";
import type { Config } from "tailwindcss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ReceiveForm } from "@/components/receive";

import {
  FSDialog,
  FSDialogClose,
  FSDialogContent,
  FSDialogDescription,
  FSDialogHeader,
  FSDialogTitle,
  FSDialogTrigger,
} from "@/components/ui/fsdialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SendModal = () => {
  return (
    <div className="flex w-screen h-screen bg-gray-50">
      <Tabs
        defaultValue="payment"
        className="flex w-screen h-screen bg-gray-50"
      >
        <div className="fixed  bottom-0 left-0 right-0 w-full p-6 mx-auto  z-50">
          <div className="w-full flex justify-between p-6 border border-gray-200 bg-white shadow-lg rounded-2xl">
            <FSDialogClose>
              <Button variant="outline">Cancel</Button>
            </FSDialogClose>
            <Button>
              Continue
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33325 10H16.6666M16.6666 10L11.6666 5M16.6666 10L11.6666 15"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="absolute left-0 top-0  flex z-50 flex-col px-6 py-12 w-80 gap-3">
          <div className="mb-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0006 25.3333V15.9999M16.3893 25.4461L25.6939 28.5611C26.4231 28.8052 26.7877 28.9272 27.0126 28.8397C27.2078 28.7636 27.3559 28.6002 27.4125 28.3984C27.4776 28.1661 27.3204 27.8152 27.006 27.1134L17.0213 4.82976C16.7139 4.1435 16.5601 3.80037 16.3459 3.69404C16.1599 3.60167 15.9414 3.60132 15.755 3.69309C15.5405 3.79873 15.3856 4.14137 15.0759 4.82664L5.00325 27.1147C4.68632 27.816 4.52786 28.1666 4.5923 28.3992C4.64826 28.6012 4.79596 28.7651 4.99105 28.8417C5.2157 28.93 5.58089 28.8088 6.31128 28.5663L15.7146 25.4453C15.8399 25.4037 15.9025 25.3829 15.9665 25.3747C16.0233 25.3675 16.0808 25.3675 16.1376 25.375C16.2016 25.3833 16.2642 25.4043 16.3893 25.4461Z"
                stroke="#344054"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium leading-none">Send</h3>{" "}
          <p className="text-sm text-gray-600">
            Follow the steps to transfer funds from your Wallet and Network
            Account to a designated recipient.
          </p>
          <TabsList className="flex relative flex-col gap-1 py-6 w-full items-start`z-50">
            <TabsTrigger
              value="payment"
              className=" w-full items-center justify-start group focus:ring-0 outline-none  focus:tap-highlight-transparent focus:outline-none relative flex  gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-300 data-[state=active]:border-gray-300 data-[state=active]:border"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 6.66668V3.75055C13.3333 3.05744 13.3333 2.71088 13.1873 2.4979C13.0598 2.31183 12.8622 2.18542 12.6398 2.14758C12.3852 2.10426 12.0706 2.24949 11.4413 2.53994L4.04918 5.95167C3.48792 6.21071 3.20729 6.34023 3.00175 6.54111C2.82005 6.71869 2.68135 6.93547 2.59625 7.17487C2.5 7.44567 2.5 7.75474 2.5 8.3729V12.5M13.75 12.0833H13.7583M2.5 9.33334L2.5 14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3184C3.76654 17.5 4.23325 17.5 5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3184C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7668 17.5 14.8333V9.33334C17.5 8.39992 17.5 7.93321 17.3183 7.57669C17.1586 7.26309 16.9036 7.00812 16.59 6.84833C16.2335 6.66668 15.7668 6.66668 14.8333 6.66668L5.16667 6.66668C4.23325 6.66668 3.76654 6.66668 3.41002 6.84833C3.09641 7.00812 2.84144 7.26309 2.68166 7.57669C2.5 7.93321 2.5 8.39992 2.5 9.33334ZM14.1667 12.0833C14.1667 12.3135 13.9801 12.5 13.75 12.5C13.5199 12.5 13.3333 12.3135 13.3333 12.0833C13.3333 11.8532 13.5199 11.6667 13.75 11.6667C13.9801 11.6667 14.1667 11.8532 14.1667 12.0833Z"
                  stroke="#1D2939"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Payment Method
            </TabsTrigger>
            <TabsTrigger
              value="recipient"
              className=" w-full items-center justify-start group focus:ring-0 outline-none  focus:tap-highlight-transparent focus:outline-none relative flex  gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-300 data-[state=active]:border-gray-300 data-[state=active]:border"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6667 17.5C16.6667 16.337 16.6667 15.7555 16.5232 15.2824C16.2 14.217 15.3663 13.3834 14.301 13.0602C13.8278 12.9167 13.2463 12.9167 12.0834 12.9167H7.91671C6.75374 12.9167 6.17225 12.9167 5.69909 13.0602C4.63375 13.3834 3.80007 14.217 3.47691 15.2824C3.33337 15.7555 3.33337 16.337 3.33337 17.5M13.75 6.25C13.75 8.32107 12.0711 10 10 10C7.92897 10 6.25004 8.32107 6.25004 6.25C6.25004 4.17893 7.92897 2.5 10 2.5C12.0711 2.5 13.75 4.17893 13.75 6.25Z"
                  stroke="#667085"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Recipient Selection
            </TabsTrigger>
            <TabsTrigger
              value="amount"
              className=" w-full items-center justify-start group focus:ring-0 outline-none  focus:tap-highlight-transparent focus:outline-none relative flex  gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-300 data-[state=active]:border-gray-300 data-[state=active]:border"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_131_92364)">
                  <path
                    d="M13.2814 13.2814C16.1336 12.8996 18.3333 10.4567 18.3333 7.50001C18.3333 4.27834 15.7216 1.66667 12.5 1.66667C9.54328 1.66667 7.10037 3.8664 6.71852 6.71856M6.24996 10.8333L7.49996 10V14.5833M6.24996 14.5833H8.74996M13.3333 12.5C13.3333 15.7217 10.7216 18.3333 7.49996 18.3333C4.2783 18.3333 1.66663 15.7217 1.66663 12.5C1.66663 9.27834 4.2783 6.66667 7.49996 6.66667C10.7216 6.66667 13.3333 9.27834 13.3333 12.5Z"
                    stroke="#667085"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_131_92364">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Payment Amount
            </TabsTrigger>
            <TabsTrigger
              value="confirm"
              className=" w-full items-center justify-start group focus:ring-0 outline-none  focus:tap-highlight-transparent focus:outline-none relative flex  gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-300 data-[state=active]:border-gray-300 data-[state=active]:border"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50004 8.75L9.16671 10.4167L12.9167 6.66667M16.6667 17.5V6.5C16.6667 5.09987 16.6667 4.3998 16.3942 3.86502C16.1545 3.39462 15.7721 3.01217 15.3017 2.77248C14.7669 2.5 14.0668 2.5 12.6667 2.5H7.33337C5.93324 2.5 5.23318 2.5 4.6984 2.77248C4.22799 3.01217 3.84554 3.39462 3.60586 3.86502C3.33337 4.3998 3.33337 5.09987 3.33337 6.5V17.5L5.62504 15.8333L7.70837 17.5L10 15.8333L12.2917 17.5L14.375 15.8333L16.6667 17.5Z"
                  stroke="#667085"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Payment Confirmation
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="payment" className=" fixed w-full h-full">
          <div
            className="relative h-fit border flex-none border-gray-300 rounded-3xl 
flex-col  p-0  grid   shadow-sm  max-w-screen-sm mx-auto w-full  
gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
          >
            <FSDialogHeader className="px-6 pt-6 pb-3 flex flex-col">
              <div className="mb-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3333 10.6667V6.00089C21.3333 4.8919 21.3333 4.33741 21.0997 3.99665C20.8956 3.69892 20.5795 3.49668 20.2237 3.43612C19.8164 3.36681 19.3129 3.59918 18.306 4.06391L6.47869 9.52267C5.58067 9.93714 5.13167 10.1444 4.80281 10.4658C4.51208 10.7499 4.29016 11.0967 4.15401 11.4798C4 11.9131 4 12.4076 4 13.3966V20M22 19.3333H22.0133M4 14.9333L4 23.7333C4 25.2268 4 25.9736 4.29065 26.544C4.54631 27.0458 4.95426 27.4537 5.45603 27.7094C6.02646 28 6.77319 28 8.26667 28H23.7333C25.2268 28 25.9735 28 26.544 27.7094C27.0457 27.4537 27.4537 27.0458 27.7094 26.544C28 25.9736 28 25.2268 28 23.7333V14.9333C28 13.4399 28 12.6931 27.7094 12.1227C27.4537 11.6209 27.0457 11.213 26.544 10.9573C25.9735 10.6667 25.2268 10.6667 23.7333 10.6667L8.26667 10.6667C6.77319 10.6667 6.02646 10.6667 5.45603 10.9573C4.95426 11.213 4.54631 11.6209 4.29065 12.1227C4 12.6931 4 13.4399 4 14.9333ZM22.6667 19.3333C22.6667 19.7015 22.3682 20 22 20C21.6318 20 21.3333 19.7015 21.3333 19.3333C21.3333 18.9652 21.6318 18.6667 22 18.6667C22.3682 18.6667 22.6667 18.9652 22.6667 19.3333Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <FSDialogTitle className="text-xl">Payment Method</FSDialogTitle>
              <FSDialogDescription className="text-gray-800">
                Follow the steps to transfer funds from your Wallet and Network
                Account to a designated recipient.
              </FSDialogDescription>
            </FSDialogHeader>
            <div>
              <div className="w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2">
                From
              </div>
              <div className="flex gap-3 mt-3 items-center mb-6 px-6">
                <ReceiveForm />
              </div>
              <div className="w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2">
                Balance
              </div>
              <div className="px-6 flex flex-col gap-2 text-gray-700 text-sm">
                <div className="w-full justify-between flex  py-1.5">
                  {" "}
                  <p>Available Balance</p>
                  <p>-</p>
                </div>
                <div className="w-full justify-between  flex py-1.5">
                  {" "}
                  <p>USD Equivalent</p>
                  <p>-</p>
                </div>
              </div>
              <div className="px-6 pt-6 pb-5">
                <div className="w-full p-4 flex gap-3 rounded-xl text-sm bg-amber-50 text-amber-700">
                  <svg
                    className="min-w-5"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99975 7.49995V10.8333M9.99975 14.1666H10.0081M8.84585 3.24305L1.99178 15.0819C1.61161 15.7386 1.42153 16.0669 1.44962 16.3364C1.47412 16.5714 1.59727 16.785 1.7884 16.924C2.00753 17.0833 2.38691 17.0833 3.14568 17.0833H16.8538C17.6126 17.0833 17.992 17.0833 18.2111 16.924C18.4022 16.785 18.5254 16.5714 18.5499 16.3364C18.578 16.0669 18.3879 15.7386 18.0077 15.0819L11.1537 3.24305C10.7748 2.58875 10.5854 2.26159 10.3383 2.15172C10.1228 2.05587 9.87672 2.05587 9.66117 2.15172C9.41406 2.26159 9.22466 2.58875 8.84585 3.24305Z"
                      stroke="#DC6803"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div>
                    <h3 className="font-semibold mb-1">
                      Asset Transfer Disclaimer
                    </h3>
                    <p className="">
                      You are initiating a blockchain network transaction, which
                      is irreversible after confirmation. Ensure the transaction
                      details are correct to avoid asset loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="recipient" className="fixed w-full h-full">
          <div
            className="relative h-fit border flex-none border-gray-300 rounded-3xl 
flex-col  p-0   grid   shadow-sm  max-w-screen-sm mx-auto w-full  
gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
          >
            <FSDialogHeader className="px-6 pt-6 pb-3 flex flex-col">
              <div className="mb-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3333 10.6667V6.00089C21.3333 4.8919 21.3333 4.33741 21.0997 3.99665C20.8956 3.69892 20.5795 3.49668 20.2237 3.43612C19.8164 3.36681 19.3129 3.59918 18.306 4.06391L6.47869 9.52267C5.58067 9.93714 5.13167 10.1444 4.80281 10.4658C4.51208 10.7499 4.29016 11.0967 4.15401 11.4798C4 11.9131 4 12.4076 4 13.3966V20M22 19.3333H22.0133M4 14.9333L4 23.7333C4 25.2268 4 25.9736 4.29065 26.544C4.54631 27.0458 4.95426 27.4537 5.45603 27.7094C6.02646 28 6.77319 28 8.26667 28H23.7333C25.2268 28 25.9735 28 26.544 27.7094C27.0457 27.4537 27.4537 27.0458 27.7094 26.544C28 25.9736 28 25.2268 28 23.7333V14.9333C28 13.4399 28 12.6931 27.7094 12.1227C27.4537 11.6209 27.0457 11.213 26.544 10.9573C25.9735 10.6667 25.2268 10.6667 23.7333 10.6667L8.26667 10.6667C6.77319 10.6667 6.02646 10.6667 5.45603 10.9573C4.95426 11.213 4.54631 11.6209 4.29065 12.1227C4 12.6931 4 13.4399 4 14.9333ZM22.6667 19.3333C22.6667 19.7015 22.3682 20 22 20C21.6318 20 21.3333 19.7015 21.3333 19.3333C21.3333 18.9652 21.6318 18.6667 22 18.6667C22.3682 18.6667 22.6667 18.9652 22.6667 19.3333Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <FSDialogTitle className="text-xl">
                Recipient Selection
              </FSDialogTitle>
              <FSDialogDescription className="text-gray-800">
                Follow the steps to transfer funds from your Wallet and Network
                Account to a designated recipient.
              </FSDialogDescription>
            </FSDialogHeader>
            <div>
              <div className="w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2">
                From
              </div>
              <div className="flex gap-3 mt-3 items-center mb-6 px-6">
                <ReceiveForm />
              </div>
              <div className="w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2">
                Balance
              </div>
              <div className="px-6 flex flex-col gap-2 text-gray-700 text-sm">
                <div className="w-full justify-between flex  py-1.5">
                  {" "}
                  <p>Available Balance</p>
                  <p>-</p>
                </div>
                <div className="w-full justify-between  flex py-1.5">
                  {" "}
                  <p>USD Equivalent</p>
                  <p>-</p>
                </div>
              </div>
              <div className="px-6 pt-6 pb-5">
                <div className="w-full p-4 flex gap-3 rounded-xl text-sm bg-amber-50 text-amber-700">
                  <svg
                    className="min-w-5"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99975 7.49995V10.8333M9.99975 14.1666H10.0081M8.84585 3.24305L1.99178 15.0819C1.61161 15.7386 1.42153 16.0669 1.44962 16.3364C1.47412 16.5714 1.59727 16.785 1.7884 16.924C2.00753 17.0833 2.38691 17.0833 3.14568 17.0833H16.8538C17.6126 17.0833 17.992 17.0833 18.2111 16.924C18.4022 16.785 18.5254 16.5714 18.5499 16.3364C18.578 16.0669 18.3879 15.7386 18.0077 15.0819L11.1537 3.24305C10.7748 2.58875 10.5854 2.26159 10.3383 2.15172C10.1228 2.05587 9.87672 2.05587 9.66117 2.15172C9.41406 2.26159 9.22466 2.58875 8.84585 3.24305Z"
                      stroke="#DC6803"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div>
                    <h3 className="font-semibold mb-1">
                      Asset Transfer Disclaimer
                    </h3>
                    <p className="">
                      You are initiating a blockchain network transaction, which
                      is irreversible after confirmation. Ensure the transaction
                      details are correct to avoid asset loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="amount" className="fixed w-full h-full">
          <div
            className="relative h-fit border flex-none border-gray-300 rounded-3xl 
flex-col  p-0   grid   shadow-sm  max-w-screen-sm mx-auto w-full  
gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
          >
            <FSDialogHeader className="px-6 pt-6 pb-3 flex flex-col">
              <div className="mb-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3333 10.6667V6.00089C21.3333 4.8919 21.3333 4.33741 21.0997 3.99665C20.8956 3.69892 20.5795 3.49668 20.2237 3.43612C19.8164 3.36681 19.3129 3.59918 18.306 4.06391L6.47869 9.52267C5.58067 9.93714 5.13167 10.1444 4.80281 10.4658C4.51208 10.7499 4.29016 11.0967 4.15401 11.4798C4 11.9131 4 12.4076 4 13.3966V20M22 19.3333H22.0133M4 14.9333L4 23.7333C4 25.2268 4 25.9736 4.29065 26.544C4.54631 27.0458 4.95426 27.4537 5.45603 27.7094C6.02646 28 6.77319 28 8.26667 28H23.7333C25.2268 28 25.9735 28 26.544 27.7094C27.0457 27.4537 27.4537 27.0458 27.7094 26.544C28 25.9736 28 25.2268 28 23.7333V14.9333C28 13.4399 28 12.6931 27.7094 12.1227C27.4537 11.6209 27.0457 11.213 26.544 10.9573C25.9735 10.6667 25.2268 10.6667 23.7333 10.6667L8.26667 10.6667C6.77319 10.6667 6.02646 10.6667 5.45603 10.9573C4.95426 11.213 4.54631 11.6209 4.29065 12.1227C4 12.6931 4 13.4399 4 14.9333ZM22.6667 19.3333C22.6667 19.7015 22.3682 20 22 20C21.6318 20 21.3333 19.7015 21.3333 19.3333C21.3333 18.9652 21.6318 18.6667 22 18.6667C22.3682 18.6667 22.6667 18.9652 22.6667 19.3333Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <FSDialogTitle className="text-xl">Amount</FSDialogTitle>
              <FSDialogDescription className="text-gray-800">
                Follow the steps to transfer funds from your Wallet and Network
                Account to a designated recipient.
              </FSDialogDescription>
            </FSDialogHeader>
            <div>
              <div className="w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2">
                From
              </div>
              <div className="flex gap-3 mt-3 items-center mb-6 px-6">
                <ReceiveForm />
              </div>
              <div className="w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2">
                Balance
              </div>
              <div className="px-6 flex flex-col gap-2 text-gray-700 text-sm">
                <div className="w-full justify-between flex  py-1.5">
                  {" "}
                  <p>Available Balance</p>
                  <p>-</p>
                </div>
                <div className="w-full justify-between  flex py-1.5">
                  {" "}
                  <p>USD Equivalent</p>
                  <p>-</p>
                </div>
              </div>
              <div className="px-6 pt-6 pb-5">
                <div className="w-full p-4 flex gap-3 rounded-xl text-sm bg-amber-50 text-amber-700">
                  <svg
                    className="min-w-5"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99975 7.49995V10.8333M9.99975 14.1666H10.0081M8.84585 3.24305L1.99178 15.0819C1.61161 15.7386 1.42153 16.0669 1.44962 16.3364C1.47412 16.5714 1.59727 16.785 1.7884 16.924C2.00753 17.0833 2.38691 17.0833 3.14568 17.0833H16.8538C17.6126 17.0833 17.992 17.0833 18.2111 16.924C18.4022 16.785 18.5254 16.5714 18.5499 16.3364C18.578 16.0669 18.3879 15.7386 18.0077 15.0819L11.1537 3.24305C10.7748 2.58875 10.5854 2.26159 10.3383 2.15172C10.1228 2.05587 9.87672 2.05587 9.66117 2.15172C9.41406 2.26159 9.22466 2.58875 8.84585 3.24305Z"
                      stroke="#DC6803"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div>
                    <h3 className="font-semibold mb-1">
                      Asset Transfer Disclaimer
                    </h3>
                    <p className="">
                      You are initiating a blockchain network transaction, which
                      is irreversible after confirmation. Ensure the transaction
                      details are correct to avoid asset loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="confirm" className="fixed w-full h-full">
          <div
            className="relative h-fit border flex-none border-gray-300 rounded-3xl 
flex-col  p-0   grid   shadow-sm  max-w-screen-sm mx-auto w-full  
gap-4  bg-white  duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
          >
            <FSDialogHeader className="px-6 pt-6 pb-3 flex flex-col">
              <div className="mb-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3333 10.6667V6.00089C21.3333 4.8919 21.3333 4.33741 21.0997 3.99665C20.8956 3.69892 20.5795 3.49668 20.2237 3.43612C19.8164 3.36681 19.3129 3.59918 18.306 4.06391L6.47869 9.52267C5.58067 9.93714 5.13167 10.1444 4.80281 10.4658C4.51208 10.7499 4.29016 11.0967 4.15401 11.4798C4 11.9131 4 12.4076 4 13.3966V20M22 19.3333H22.0133M4 14.9333L4 23.7333C4 25.2268 4 25.9736 4.29065 26.544C4.54631 27.0458 4.95426 27.4537 5.45603 27.7094C6.02646 28 6.77319 28 8.26667 28H23.7333C25.2268 28 25.9735 28 26.544 27.7094C27.0457 27.4537 27.4537 27.0458 27.7094 26.544C28 25.9736 28 25.2268 28 23.7333V14.9333C28 13.4399 28 12.6931 27.7094 12.1227C27.4537 11.6209 27.0457 11.213 26.544 10.9573C25.9735 10.6667 25.2268 10.6667 23.7333 10.6667L8.26667 10.6667C6.77319 10.6667 6.02646 10.6667 5.45603 10.9573C4.95426 11.213 4.54631 11.6209 4.29065 12.1227C4 12.6931 4 13.4399 4 14.9333ZM22.6667 19.3333C22.6667 19.7015 22.3682 20 22 20C21.6318 20 21.3333 19.7015 21.3333 19.3333C21.3333 18.9652 21.6318 18.6667 22 18.6667C22.3682 18.6667 22.6667 18.9652 22.6667 19.3333Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <FSDialogTitle className="text-xl">Confirm</FSDialogTitle>
              <FSDialogDescription className="text-gray-800">
                Follow the steps to transfer funds from your Wallet and Network
                Account to a designated recipient.
              </FSDialogDescription>
            </FSDialogHeader>
            <div>
              <div className="w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2">
                From
              </div>
              <div className="flex gap-3 mt-3 items-center mb-6 px-6">
                <ReceiveForm />
              </div>
              <div className="w-full bg-gray-50 uppercase px-6 text-xs mb-3 font-medium text-gray-600 py-2">
                Balance
              </div>
              <div className="px-6 flex flex-col gap-2 text-gray-700 text-sm">
                <div className="w-full justify-between flex  py-1.5">
                  {" "}
                  <p>Available Balance</p>
                  <p>-</p>
                </div>
                <div className="w-full justify-between  flex py-1.5">
                  {" "}
                  <p>USD Equivalent</p>
                  <p>-</p>
                </div>
              </div>
              <div className="px-6 pt-6 pb-5">
                <div className="w-full p-4 flex gap-3 rounded-xl text-sm bg-amber-50 text-amber-700">
                  <svg
                    className="min-w-5"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99975 7.49995V10.8333M9.99975 14.1666H10.0081M8.84585 3.24305L1.99178 15.0819C1.61161 15.7386 1.42153 16.0669 1.44962 16.3364C1.47412 16.5714 1.59727 16.785 1.7884 16.924C2.00753 17.0833 2.38691 17.0833 3.14568 17.0833H16.8538C17.6126 17.0833 17.992 17.0833 18.2111 16.924C18.4022 16.785 18.5254 16.5714 18.5499 16.3364C18.578 16.0669 18.3879 15.7386 18.0077 15.0819L11.1537 3.24305C10.7748 2.58875 10.5854 2.26159 10.3383 2.15172C10.1228 2.05587 9.87672 2.05587 9.66117 2.15172C9.41406 2.26159 9.22466 2.58875 8.84585 3.24305Z"
                      stroke="#DC6803"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div>
                    <h3 className="font-semibold mb-1">
                      Asset Transfer Disclaimer
                    </h3>
                    <p className="">
                      You are initiating a blockchain network transaction, which
                      is irreversible after confirmation. Ensure the transaction
                      details are correct to avoid asset loss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export { SendModal };
