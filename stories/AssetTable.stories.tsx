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
    getAllAssets: assets,
  },
};

export const EmptyTable: Story = {
  args: {
    getAllAssets: [],
  },
};

export const FewAssets: Story = {
  args: {
    getAllAssets: assets.slice(0, 1),
  },
};

export const ManyAssets: Story = {
  args: {
    getAllAssets: Array(20)
      .fill(null)
      .map((_, index) => ({
        ...assets[index % assets.length],
        name: `Asset ${index + 1}`,
        balance: +(Math.random() * 10).toFixed(2),
        value: Math.floor(Math.random() * 50000),
        change24h: +(Math.random() * 10 - 5).toFixed(2),
        allocation: +(Math.random() * 100).toFixed(2),
        price: Math.floor(Math.random() * 1000),
        return: +(Math.random() * 20 - 10).toFixed(2),
      })),
  },
};

export const DifferentTypes: Story = {
  args: {
    getAllAssets: [
      { ...assets[0] },
      { 
        ...assets[0], 
        name: "USDT", 
        symbol: "USDT", 
        value: 1, 
        change24h: 0.01,
        price: 1,
        return: 0.1,
        allocation: 15.5,
      },
      { 
        ...assets[0], 
        name: "CryptoPunk #1234", 
        symbol: "PUNK", 
        value: 100000,
        allocation: 45.2,
        price: 100000,
        return: 250.5,
      },
      { 
        ...assets[0], 
        name: "Uniswap", 
        symbol: "UNI", 
        value: 5,
        allocation: 5.2,
        price: 5,
        return: -12.3,
      },
    ],
  },
};

export const DifferentPerformance: Story = {
  args: {
    getAllAssets: [
      { 
        ...assets[0], 
        return: 15.5,
        allocation: 40.5,
        price: assets[0].price * 1.155,
        value: assets[0].value * 1.155
      },
      { 
        ...assets[0], 
        return: 5.2,
        allocation: 30.2,
        price: assets[0].price * 1.052,
        value: assets[0].value * 1.052
      },
      { 
        ...assets[0], 
        return: 0,
        allocation: 25.0,
        price: assets[0].price,
        value: assets[0].value
      },
      { 
        ...assets[0], 
        return: -3.8,
        allocation: 15.8,
        price: assets[0].price * 0.962,
        value: assets[0].value * 0.962
      },
      { 
        ...assets[0], 
        return: -12.4,
        allocation: 10.4,
        price: assets[0].price * 0.876,
        value: assets[0].value * 0.876
      },
    ],
  },
};

export const HighValues: Story = {
  args: {
    getAllAssets: [
      { 
        ...assets[0], 
        value: 1000000, 
        balance: 10,
        price: 100000,
        allocation: 60.5,
        return: 125.5
      },
      { 
        ...assets[0], 
        value: 500000, 
        balance: 5,
        price: 100000,
        allocation: 30.2,
        return: 85.3
      },
      { 
        ...assets[0], 
        value: 100000, 
        balance: 1,
        price: 100000,
        allocation: 9.3,
        return: 45.2
      },
    ],
  },
};

export const LowValues: Story = {
  args: {
    getAllAssets: [
      { 
        ...assets[0], 
        value: 0.5, 
        balance: 1000,
        price: 0.0005,
        allocation: 45.5,
        return: -25.5
      },
      { 
        ...assets[0], 
        value: 0.1, 
        balance: 5000,
        price: 0.00002,
        allocation: 35.2,
        return: -45.8
      },
      { 
        ...assets[0], 
        value: 0.01, 
        balance: 10000,
        price: 0.000001,
        allocation: 19.3,
        return: -75.2
      },
    ],
  },
}; 