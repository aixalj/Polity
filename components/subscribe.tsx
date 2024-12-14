"use client";

import * as React from "react";
import { useState } from "react";
import type { Config } from "tailwindcss";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SubscribeModal } from "@/components/ui/subscribemodal";
import {
  FSDialog,
  FSDialogContent,
  FSDialogTrigger,
} from "@/components/ui/fsdialog";
import { WalletProvider } from "@/components/ui/formcontext";
import { SubscribeProvider } from "@/components/ui/subscribecontext";

interface SubscribeProps {
  variant?: "wealth" | "wallet" | "network";
  provider: 'Safeheron' | 'DFNS' | 'Fireblocks';
}

const Subscribe: React.FC<SubscribeProps> = ({ variant = "wealth", provider }) => {
  return (
    <div className="flex gap-3">
      <SubscribeProvider>
        <WalletProvider>
          <FSDialog>
            <FSDialogTrigger asChild>
              <Button variant="default" className="w-full" size="default">
                Subscribe Now
              </Button>
            </FSDialogTrigger>
            <FSDialogContent className="flex w-screen h-screen bg-gray-50">
              <SubscribeModal provider={provider} />
            </FSDialogContent>
          </FSDialog>
        </WalletProvider>
      </SubscribeProvider>
    </div>
  );
};

export { Subscribe };
