import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PositionsTable } from "@/components/positionstable";
import { networkAccounts, wallets } from "@/components/data";

import "@/app/globals.css";

// Define types for the position data structure
interface Position {
  Position: string;
  Value: number;
  Asset?: string;
  Amount?: number;
  Yield: number;
  RewardsEarned?: number;
  RewardsValue?: number;
  LockupPeriod?: string;
  Symbol?: string;
  AmountLent?: number;
  AssetBorrowed?: string;
  CollateralAsset?: string;
  AssetDeposited?: string;
  Pool?: string;
  Balance?: number;
}

interface DAppPosition {
  DApp: string;
  TotalValue: number;
  Positions: Position[];
}

const meta: Meta<typeof PositionsTable> = {
  title: "Polity Design System/Tables/PositionsTable",
  component: PositionsTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PositionsTable>;

// Get positions from the first network account as example data
const samplePositions = networkAccounts[0].positions[0].Positions;

export const Default: Story = {
  args: {
    networkAccounts: networkAccounts,
    wallets: wallets
  },
};

export const EmptyTable: Story = {
  args: {
    networkAccounts: [],
    wallets: wallets
  },
};

export const FewPositions: Story = {
  args: {
    networkAccounts: networkAccounts.slice(0, 1),
    wallets: wallets
  },
};

export const ManyPositions: Story = {
  args: {
    networkAccounts: Array(20)
      .fill(null)
      .map((_, index) => ({
        ...networkAccounts[0],
        name: `Network Account ${index + 1}`,
        positions: [{
          DApp: `DApp ${index + 1}`,
          TotalValue: Math.floor(Math.random() * 100000),
          Positions: samplePositions.map((pos: Position) => ({
            ...pos,
            Value: Math.floor(Math.random() * 50000),
            Yield: +(Math.random() * 10).toFixed(2),
            RewardsEarned: +(Math.random() * 100).toFixed(3),
          }))
        }]
      })),
    wallets: wallets
  },
};

export const DifferentDApps: Story = {
  args: {
    networkAccounts: [{
      ...networkAccounts[0],
      positions: [
        {
          DApp: "Aave",
          TotalValue: 150000,
          Positions: samplePositions
        },
        {
          DApp: "Compound",
          TotalValue: 85000,
          Positions: samplePositions
        },
        {
          DApp: "Uniswap",
          TotalValue: 65000,
          Positions: samplePositions
        }
      ]
    }],
    wallets: wallets
  },
};

export const HighValues: Story = {
  args: {
    networkAccounts: [{
      ...networkAccounts[0],
      positions: [{
        DApp: "Aave",
        TotalValue: 1000000,
        Positions: samplePositions.map((pos: Position) => ({
          ...pos,
          Value: Math.floor(Math.random() * 500000 + 500000),
          Yield: +(Math.random() * 15 + 5).toFixed(2),
          RewardsEarned: +(Math.random() * 1000).toFixed(3),
        }))
      }]
    }],
    wallets: wallets
  },
};

export const LowValues: Story = {
  args: {
    networkAccounts: [{
      ...networkAccounts[0],
      positions: [{
        DApp: "Aave",
        TotalValue: 1000,
        Positions: samplePositions.map((pos: Position) => ({
          ...pos,
          Value: Math.floor(Math.random() * 500 + 100),
          Yield: +(Math.random() * 2).toFixed(2),
          RewardsEarned: +(Math.random() * 1).toFixed(3),
        }))
      }]
    }],
    wallets: wallets
  },
};

export const DifferentYields: Story = {
  args: {
    networkAccounts: [{
      ...networkAccounts[0],
      positions: [{
        DApp: "Aave",
        TotalValue: 100000,
        Positions: [
          { ...samplePositions[0], Yield: 15.5 },
          { ...samplePositions[0], Yield: 8.2 },
          { ...samplePositions[0], Yield: 4.5 },
          { ...samplePositions[0], Yield: 2.1 },
          { ...samplePositions[0], Yield: 0.5 },
        ]
      }]
    }],
    wallets: wallets
  },
}; 