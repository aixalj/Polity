"use client";

import OnboardingBlock from "@/components/onboardingblock";
import { CreditCardEdit, ImageUserLeft } from "@untitled-ui/icons-react";
import { Notification } from "@/components/ui/notification";
import Image from "next/image";
import CheckIcon from "@/public/icons/check.svg";
import { File02, Users03, Image03 } from "@untitled-ui/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AVN() {
  return (
    <OnboardingBlock
      icon={<CreditCardEdit className="w-8 h-8 text-gray-700" />}
      title="Customize your wallet"
      description="Assign a unique name and style to your wallet that reflects its intended use. This will help you easily identify its purpose in the future."
      button1link="/onboarding/wallet/provider"
      button1text="Back"
      button2link="/onboarding/wallet/confirm"
      button2text="Continue"
    >
      <div className="px-6 py-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label>Wallet Name</Label>
          <Input placeholder="My Main Wallet" />
          {/* <p className="text-sm text-gray-600">
            An Avatar Name is unique across the network.
          </p> */}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Wallet Style</Label>
          <p className="text-sm text-gray-600">
            Select a theme style for your Wallet.
          </p>
          <div className="w-40 h-40 border  flex-col gap-3   border-gray-200 rounded-2xl flex items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center  border border-gray-200 rounded-full">
              <Image03 className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-primary-500 text-sm font-semibold">
                Click to upload
              </p>
              <p className="text-xs text-gray-600">or drag and drop</p>
            </div>
          </div>
        </div>
      </div>
    </OnboardingBlock>
  );
}
