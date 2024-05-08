// src/contexts/WalletContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextType {
  availableBalance: string;
  setAvailableBalance: (balance: string) => void;
  usdEquivalent: string;
  setUsdEquivalent: (equivalent: string) => void;
  selectedWallet: string;
  setSelectedWallet: (wallet: string) => void;
  selectedNetwork: string;
  setSelectedNetwork: (network: string) => void;
  selectedAsset: string; // Add this line
  setSelectedAsset: (asset: string) => void; // Add this line
  selectedRecipient: string;
  setSelectedRecipient: (recipient: string) => void;
  selectedPayment: number;
  setSelectedPayment: (payment: number) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [availableBalance, setAvailableBalance] = useState("");
  const [usdEquivalent, setUsdEquivalent] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedAsset, setSelectedAsset] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(0); // Ensure it's initialized as a number

  return (
    <WalletContext.Provider
      value={{
        availableBalance,
        setAvailableBalance,
        usdEquivalent,
        setUsdEquivalent,
        selectedWallet,
        setSelectedWallet,
        selectedNetwork,
        setSelectedNetwork,
        selectedAsset,
        setSelectedAsset,
        selectedRecipient,
        setSelectedRecipient,
        selectedPayment,
        setSelectedPayment,
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
