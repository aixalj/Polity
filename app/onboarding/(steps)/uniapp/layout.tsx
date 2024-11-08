import React from "react";
import type { Metadata } from "next";
import { OnboardSideBarUniApp } from "@/components/ui/onboardsidebar-uniapp";

export const metadata: Metadata = {
  title: "Polity - Onboarding",
  description: "Onboarding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 w-full text-gray-900">
      <div className="z-20">
        <OnboardSideBarUniApp />
      </div>

      <main className="relative flex overflow-y-auto overflow-x-hidden pt-12 h-screen w-full">
        {children}
      </main>
    </div>
  );
}
