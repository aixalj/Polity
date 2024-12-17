import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PositionsTable } from "@/components/positionstable";
import { positions } from "@/components/positiondata";

import "@/app/globals.css";

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

export const Default: Story = {
  args: {
    positions: positions,
  },
};

export const EmptyTable: Story = {
  args: {
    positions: [],
  },
};

export const FewPositions: Story = {
  args: {
    positions: positions.slice(0, 1),
  },
};

export const ManyPositions: Story = {
  args: {
    positions: Array(20)
      .fill(null)
      .map((_, index) => ({
        ...positions[index % positions.length],
        name: `Position ${index + 1}`,
        size: +(Math.random() * 10).toFixed(2),
        entryPrice: Math.floor(Math.random() * 50000),
        markPrice: Math.floor(Math.random() * 50000),
        pnl: Math.floor(Math.random() * 10000 - 5000),
        pnlPercent: +(Math.random() * 20 - 10).toFixed(2),
        liquidationPrice: Math.floor(Math.random() * 50000),
        type: index % 2 === 0 ? "Long" : "Short",
      })),
  },
};

export const AllLongs: Story = {
  args: {
    positions: [
      { ...positions[0], type: "Long", pnl: 1500, pnlPercent: 5.5 },
      { ...positions[0], type: "Long", pnl: 750, pnlPercent: 2.5 },
      { ...positions[0], type: "Long", pnl: -300, pnlPercent: -1.2 },
      { ...positions[0], type: "Long", pnl: -900, pnlPercent: -4.8 },
    ],
  },
};

export const AllShorts: Story = {
  args: {
    positions: [
      { ...positions[1], type: "Short", pnl: 2000, pnlPercent: 8.5 },
      { ...positions[1], type: "Short", pnl: 1000, pnlPercent: 4.2 },
      { ...positions[1], type: "Short", pnl: -500, pnlPercent: -2.1 },
      { ...positions[1], type: "Short", pnl: -1500, pnlPercent: -6.3 },
    ],
  },
};

export const HighProfitLoss: Story = {
  args: {
    positions: [
      { ...positions[0], pnl: 100000, pnlPercent: 45.5, type: "Long" },
      { ...positions[0], pnl: 50000, pnlPercent: 25.2, type: "Long" },
      { ...positions[1], pnl: -75000, pnlPercent: -35.8, type: "Short" },
      { ...positions[1], pnl: -25000, pnlPercent: -12.4, type: "Short" },
    ],
  },
};

export const NearLiquidation: Story = {
  args: {
    positions: [
      { 
        ...positions[0], 
        markPrice: 38500, 
        liquidationPrice: 38000,
        pnl: -500,
        pnlPercent: -1.5,
        type: "Long" 
      },
      { 
        ...positions[1], 
        markPrice: 2350,
        liquidationPrice: 2400,
        pnl: -300,
        pnlPercent: -2.8,
        type: "Short" 
      },
    ],
  },
}; 