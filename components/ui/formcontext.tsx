// src/contexts/WalletContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextType {
  availableBalance: string;
  setAvailableBalance: (balance: string) => void;
  usdEquivalent: string;
  setUsdEquivalent: (equivalent: string) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [availableBalance, setAvailableBalance] = useState("");
  const [usdEquivalent, setUsdEquivalent] = useState("");

  return (
    <WalletContext.Provider
      value={{
        availableBalance,
        setAvailableBalance,
        usdEquivalent,
        setUsdEquivalent,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  console.log("Wallet context is now available for use with data:", context);
  return context;
};
