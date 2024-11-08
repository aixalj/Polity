"use client";

import OnboardingBlock from "@/components/onboardingblock";
import { CreditCardEdit, Image03 } from "@untitled-ui/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWalletSelection } from "@/app/contexts/WalletSelectionContext";

import DFNS from "@/public/providers/icons/DFNS.svg";
import FB from "@/public/providers/icons/FB.svg";
import SH from "@/public/providers/icons/SH.svg";

import {
  ImageRadioGroup,
  ImageRadioGroupItem,
} from "@/components/ui/image-radio-group";
import Image from "next/image";

export default function AVN() {
  const { selectedProvider } = useWalletSelection();

  const getIconComponent = (providerName: string) => {
    switch (providerName) {
      case "DFNS":
        return <Image src={DFNS} alt="DFNS" width={40} height={40} />;
      case "Fireblocks": // Update this if it's different
        return <Image src={FB} alt="Fireblocks" width={40} height={40} />;
      case "Safeheron": // Update this if it's different
        return <Image src={SH} alt="SafeHeron" width={40} height={40} />;
      default:
        console.log("Unknown provider:", providerName); // Add this for debugging
        return null;
    }
  };

  return (
    <OnboardingBlock
      icon={<CreditCardEdit className="w-8 h-8 text-gray-700" />}
      title="Customize your wallet"
      description="Assign a unique name and style to your wallet that reflects its intended use. This will help you easily identify its purpose in the future."
      button1link="/onboarding/superapp/wallet/provider"
      button1text="Back"
      button2link="/onboarding/superapp/wallet/agreement"
      button2text="Continue"
    >
      <div className="px-6 py-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label>Wallet Name</Label>
          <Input placeholder="My Main Wallet" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Wallet Style</Label>
          <p className="text-sm text-gray-600">
            Select a theme style for your Wallet.
          </p>
          <ImageRadioGroup defaultValue="green" className="flex flex-row gap-8">
            <ImageRadioGroupItem
              value="green"
              id="green"
              icon={getIconComponent(selectedProvider?.name || "")}
              style={{
                background: "linear-gradient(180deg, #FFF 0%, #F3FEE7 100%)",
              }}
              borderColorClass="border-green-400"
              className="p-2 border border-gray-300"
            />
            <ImageRadioGroupItem
              value="blue"
              id="blue"
              icon={getIconComponent(selectedProvider?.name || "")}
              style={{
                background: "linear-gradient(180deg, #FFF 0%, #ECFDFF 100%)",
              }}
              borderColorClass="border-blue-400"
              className="p-2 border border-gray-300"
            />
            <ImageRadioGroupItem
              value="purple"
              id="purple"
              icon={getIconComponent(selectedProvider?.name || "")}
              style={{
                background: "linear-gradient(180deg, #FFF 0%, #F4F3FF 100%)",
              }}
              borderColorClass="border-purple-400"
              className="p-2 border border-gray-300"
            />
            <ImageRadioGroupItem
              value="yellow"
              id="yellow"
              icon={getIconComponent(selectedProvider?.name || "")}
              style={{
                background: "linear-gradient(180deg, #FFF 0%, #FEFBE8 100%)",
              }}
              borderColorClass="border-yellow-400"
              className="p-2 border border-gray-300"
            />
          </ImageRadioGroup>
        </div>
      </div>
    </OnboardingBlock>
  );
}
