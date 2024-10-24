"use client";

import * as React from "react";
import { useState } from "react";
import type { Config } from "tailwindcss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { ReceiveForm } from "@/components/receive";

import { SubscribeModal } from "@/components/ui/subscribemodal";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { WalletProvider } from "@/components/ui/formcontext";

import { SubscribeProvider } from "@/components/ui/subscribecontext";

import {
  FSDialog,
  FSDialogContent,
  FSDialogDescription,
  FSDialogHeader,
  FSDialogTitle,
  FSDialogTrigger,
} from "@/components/ui/fsdialog";

interface ReceiveBtnProps {
  variant?: "wealth" | "wallet" | "network";
}

import Link from "next/link";

const Subscribe: React.FC<ReceiveBtnProps> = ({ variant = "wealth" }) => {
  return (
    <div className="flex gap-3">
      <SubscribeProvider>
        <WalletProvider>
          <FSDialog>
            <DialogTrigger className="inline-flex w-full h-9 bg-primary-500 text-white hover:bg-primary-600 shadow-button-primary-default   items-center justify-center whitespace-nowrap rounded-xl gap-2 px-4  text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300">
              Subscribe Now
            </DialogTrigger>
            <FSDialogContent className="flex w-screen h-screen bg-gray-50">
              <SubscribeModal />
            </FSDialogContent>
          </FSDialog>
        </WalletProvider>
      </SubscribeProvider>
    </div>
  );
};

export { Subscribe };
