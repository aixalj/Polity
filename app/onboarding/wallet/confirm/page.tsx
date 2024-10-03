"use client";

import OnboardingBlock from "@/components/onboardingblock";
import { CreditCardCheck, Image03 } from "@untitled-ui/icons-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWalletSelection } from "@/app/contexts/WalletSelectionContext";

export default function AVN() {
  const { selectedProvider } = useWalletSelection();

  return (
    <OnboardingBlock
      icon={<CreditCardCheck className="w-8 h-8 text-gray-700" />}
      title="Confirm your wallet"
      description="Assign a unique name and style to your wallet that reflects its intended use. This will help you easily identify its purpose in the future."
      button1link="/onboarding/wallet/customize"
      button1text="Back"
      button2link="/onboarding/wallet/agreement"
      button2text="Continue"
    >
      <div className="px-6 py-5 flex flex-col gap-4">
        {selectedProvider && (
          <div className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold">Selected Wallet Provider</h3>
            <div className="flex items-center gap-3">
              <Image
                src={selectedProvider.logo}
                alt={selectedProvider.name}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg">{selectedProvider.name}</span>
            </div>
            <p className="text-sm text-gray-600">
              {selectedProvider.description}
            </p>
          </div>
        )}
        <div className="flex flex-col gap-1.5">
          <Label>Wallet Name</Label>
          <Input placeholder="My Main Wallet" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Wallet Style</Label>
          <p className="text-sm text-gray-600">
            Select a theme style for your Wallet.
          </p>
          <div className="w-40 h-40 border flex-col gap-3 border-gray-200 rounded-2xl flex items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full">
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
