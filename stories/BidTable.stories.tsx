import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BidTable } from "@/components/bid/bidtable";
import { bids } from "@/components/bid/biddata";

import "@/app/globals.css";

const meta: Meta<typeof BidTable> = {
  title: "Polity Design System/Tables/BidTable",
  component: BidTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BidTable>;

export const Default: Story = {
  args: {
    bids: bids,
  },
};

export const EmptyTable: Story = {
  args: {
    bids: [],
  },
};

export const FewBids: Story = {
  args: {
    bids: bids.slice(0, 1),
  },
};

export const ManyBids: Story = {
  args: {
    bids: Array(20)
      .fill(null)
      .map((_, index) => ({
        ...bids[index % bids.length],
        name: `Bid ${index + 1}`,
        yourBid: 30 + index,
        highestBid: 35 + index,
        endTime: new Date(Date.now() + (index + 1) * 1000 * 60 * 30), // Each bid 30 mins apart
      })),
  },
};

export const DifferentStatuses: Story = {
  args: {
    bids: [
      { ...bids[0], status: "Top Bidder" },
      { ...bids[0], status: "Outbid", yourBid: 28, highestBid: 35 },
      { ...bids[0], status: "Won", endTime: new Date(Date.now() - 86400000) },
      { ...bids[0], status: "Lost", endTime: new Date(Date.now() - 86400000), yourBid: 25, highestBid: 30 },
    ],
  },
};

export const DifferentCategories: Story = {
  args: {
    bids: [
      { ...bids[0], category: "10 Reports Package" },
      { ...bids[0], category: "25 Reports Package" },
      { ...bids[0], category: "50 Reports Package" },
      { ...bids[0], category: "100 Reports Package" },
    ],
  },
}; 