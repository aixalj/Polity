import React from "react";
import type { Metadata } from "next";
import { SideBar } from "@/components/ui/sidebar";

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
        <SideBar />
      </div>

      <main className="relative flex overflow-y-auto overflow-x-hidden py-2 px-2 h-screen w-full">
        {children}
      </main>
    </div>
  );
}
