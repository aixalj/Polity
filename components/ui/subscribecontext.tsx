// src/contexts/WalletContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SubscribeContextType {
  availableBalance: string;
  setAvailableBalance: (balance: string) => void;
  usdEquivalent: string;
  setUsdEquivalent: (equivalent: string) => void;
  bitcoinCount: number;
  setBitcoinCount: (count: number) => void;
  ethCount: number;
  setEthCount: (count: number) => void;
  polygonCount: number;
  setPolygonCount: (count: number) => void;
}

const SubscribeContext = createContext<SubscribeContextType | undefined>(
  undefined
);

export const SubscribeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [availableBalance, setAvailableBalance] = useState("");
  const [usdEquivalent, setUsdEquivalent] = useState("");
  const [bitcoinCount, setBitcoinCount] = useState(0);
  const [ethCount, setEthCount] = useState(0);
  const [polygonCount, setPolygonCount] = useState(0);

  return (
    <SubscribeContext.Provider
      value={{
        availableBalance,
        setAvailableBalance,
        usdEquivalent,
        setUsdEquivalent,
        bitcoinCount,
        setBitcoinCount,
        ethCount,
        setEthCount,
        polygonCount,
        setPolygonCount,
      }}
    >
      {children}
    </SubscribeContext.Provider>
  );
};

export const useSubscribe = () => {
  const context = useContext(SubscribeContext);
  if (context === undefined) {
    throw new Error("useSubscribe must be used within a SubscribeProvider");
  }
  console.log("Wallet context is now available for use with data:", context);
  return context;
};
