"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

type WalletProvider = {
  name: string;
  logo: string;
  banner: string;
  description: string;
  learnMoreUrl: string;
  features: string[];
};

interface WalletSelectionContextType {
  selectedProvider: WalletProvider | null;
  setSelectedProvider: (provider: WalletProvider | null) => void;
}

const WalletSelectionContext = createContext<
  WalletSelectionContextType | undefined
>(undefined);

export function WalletSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedProvider, setSelectedProvider] =
    useState<WalletProvider | null>(null);

  return (
    <WalletSelectionContext.Provider
      value={{ selectedProvider, setSelectedProvider }}
    >
      {children}
    </WalletSelectionContext.Provider>
  );
}

export function useWalletSelection() {
  const context = useContext(WalletSelectionContext);
  if (context === undefined) {
    throw new Error(
      "useWalletSelection must be used within a WalletSelectionProvider"
    );
  }
  return context;
}
