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
import { BuyReportModal } from "./buymodal";

const BuyReport: React.FC<ReceiveBtnProps> = ({ variant = "wealth" }) => {
  return (
    <div className="flex gap-3">
      <SubscribeProvider>
        <WalletProvider>
          <FSDialog>
            <DialogTrigger asChild>
              <Button variant="outline">Buy Report</Button>
            </DialogTrigger>
            <FSDialogContent className="flex w-screen h-screen bg-gray-50">
              <BuyReportModal />
            </FSDialogContent>
          </FSDialog>
        </WalletProvider>
      </SubscribeProvider>
    </div>
  );
};

export { BuyReport };
