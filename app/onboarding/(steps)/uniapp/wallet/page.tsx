import OnboardingBlock from "@/components/onboardingblock";

import Wallet from "@/public/walletgraphic.svg";

import { File02 } from "@untitled-ui/icons-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Agreement() {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div
        className="relative h-fit pt-24 items-center text-center gap-0 flex  
flex-col  p-0     max-w-screen-sm mx-auto w-full"
      >
        <Image src={Wallet} alt="Wallet" className="w-52 h-52 mx-auto" />
        <h1 className="text-xl font-medium mt-11">
          Let’s set up a wallet, AristoInvest
        </h1>
        <p className="text-gray-600 text-sm mb-14 text-balance mt-1">
          Get started with your first wallet! Follow the step-by-step process to
          complete the setup and start managing your funds with confidence.
        </p>
        <div className="inline-flex mx-auto gap-4">
          <Link href="/onboarding/wallet/provider">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
