import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TransactionTable } from "@/components/ui/transactiontable";
import { TimeProvider } from "@/components/ui/timecontext";
import { transactions } from "@/components/transactionData";

import "@/app/globals.css";

const meta: Meta<typeof TransactionTable> = {
  title: "Polity Design System/Tables/TransactionTable",
  component: TransactionTable,
  decorators: [
    (Story) => (
      <TimeProvider>
        <Story />
      </TimeProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TransactionTable>;

export const Default: Story = {
  args: {
    transactions: transactions,
  },
};

export const EmptyTable: Story = {
  args: {
    transactions: [],
  },
};

export const FewTransactions: Story = {
  args: {
    transactions: transactions.slice(0, 5),
  },
};

export const ManyTransactions: Story = {
  args: {
    transactions: Array(50)
      .fill(null)
      .map((_, index) => ({
        ...transactions[index % transactions.length],
        transactionHash: `0x${index.toString(16).padStart(3, "0")}...${index.toString(16).padStart(3, "0")}`,
        timestamp: new Date(Date.now() - index * 3600000).toISOString(), // Each transaction 1 hour apart
      })),
  },
};
