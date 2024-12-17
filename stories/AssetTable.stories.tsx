import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AssetTable } from "@/components/assettable";
import { assets } from "@/components/assetdata";

import "@/app/globals.css";

const meta: Meta<typeof AssetTable> = {
  title: "Polity Design System/Tables/AssetTable",
  component: AssetTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AssetTable>;

export const Default: Story = {
  args: {
    assets: assets,
  },
};

export const EmptyTable: Story = {
  args: {
    assets: [],
  },
};

export const FewAssets: Story = {
  args: {
    assets: assets.slice(0, 1),
  },
};

export const ManyAssets: Story = {
  args: {
    assets: Array(20)
      .fill(null)
      .map((_, index) => ({
        ...assets[index % assets.length],
        name: `Asset ${index + 1}`,
        balance: (Math.random() * 10).toFixed(2),
        value: Math.floor(Math.random() * 50000),
        change24h: (Math.random() * 10 - 5).toFixed(2),
      })),
  },
};

export const DifferentTypes: Story = {
  args: {
    assets: [
      { ...assets[0], type: "Cryptocurrency" },
      { ...assets[0], type: "Token", name: "USDT", symbol: "USDT", value: 1, change24h: 0.01 },
      { ...assets[0], type: "NFT", name: "CryptoPunk #1234", symbol: "PUNK", value: 100000 },
      { ...assets[0], type: "DeFi", name: "Uniswap", symbol: "UNI", value: 5 },
    ],
  },
};

export const DifferentPerformance: Story = {
  args: {
    assets: [
      { ...assets[0], change24h: 15.5 },
      { ...assets[0], change24h: 5.2 },
      { ...assets[0], change24h: 0 },
      { ...assets[0], change24h: -3.8 },
      { ...assets[0], change24h: -12.4 },
    ],
  },
};

export const HighValues: Story = {
  args: {
    assets: [
      { ...assets[0], value: 1000000, balance: 10 },
      { ...assets[0], value: 500000, balance: 5 },
      { ...assets[0], value: 100000, balance: 1 },
    ],
  },
};

export const LowValues: Story = {
  args: {
    assets: [
      { ...assets[0], value: 0.5, balance: 1000 },
      { ...assets[0], value: 0.1, balance: 5000 },
      { ...assets[0], value: 0.01, balance: 10000 },
    ],
  },
}; 