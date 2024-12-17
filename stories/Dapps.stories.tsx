import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dapps } from "@/components/dapps";
import { dapps } from "@/components/dappdata";

import "@/app/globals.css";

const meta: Meta<typeof Dapps> = {
  title: "Polity Design System/Components/Dapps",
  component: Dapps,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dapps>;

export const Default: Story = {
  args: {
    dapps: dapps,
  },
};

export const EmptyState: Story = {
  args: {
    dapps: [],
  },
};

export const SingleDapp: Story = {
  args: {
    dapps: dapps.slice(0, 1),
  },
};

export const ManyDapps: Story = {
  args: {
    dapps: Array(8)
      .fill(null)
      .map((_, index) => ({
        ...dapps[index % dapps.length],
        name: `dApp ${index + 1}`,
        url: `app${index + 1}.example.com`,
      })),
  },
};

export const DifferentNetworks: Story = {
  args: {
    dapps: [
      { ...dapps[0], network: "Ethereum" },
      { ...dapps[0], network: "Polygon", name: "QuickSwap" },
      { ...dapps[0], network: "Optimism", name: "Velodrome" },
      { ...dapps[0], network: "Arbitrum", name: "GMX" },
    ],
  },
};

export const DifferentTokens: Story = {
  args: {
    dapps: [
      { ...dapps[0], token: "Ethereum", tokenSymbol: "ETH" },
      { ...dapps[0], token: "Polygon", tokenSymbol: "MATIC" },
      { ...dapps[0], token: "USDC", tokenSymbol: "USDC" },
      { ...dapps[0], token: "Wrapped Bitcoin", tokenSymbol: "WBTC" },
    ],
  },
};

export const Loading: Story = {
  args: {
    dapps: dapps,
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    dapps: [],
    error: "Failed to load connected dApps",
  },
}; 