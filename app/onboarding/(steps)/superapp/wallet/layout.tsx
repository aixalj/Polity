import React from "react";
import type { Metadata } from "next";
import { OnboardSideBarSuperApp } from "@/components/ui/onboardsidebar-superapp";
import { WalletSelectionProvider } from "@/app/contexts/WalletSelectionContext";

export const metadata: Metadata = {
  title: "Polity - Onboarding",
  description: "Onboarding",
};

export default function WalletOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WalletSelectionProvider>
      <div className="flex h-screen overflow-hidden bg-gray-50 w-full text-gray-900">
        <div className="z-20">
          
        </div>

        <main className="relative flex overflow-y-auto overflow-x-hidden pt-12 h-screen w-full">
          {children}
        </main>
      </div>
    </WalletSelectionProvider>
  );
}
