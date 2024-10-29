import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Stats from "@/components/stats";
import { TimeProvider } from "@/components/ui/timecontext";

import "@/app/globals.css";

const meta: Meta<typeof Stats> = {
  title: "Polity Design System/Patterns/Overview",
  component: Stats,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TimeProvider>
        <div className="p-6 bg-gray-100 min-h-screen">
          <Story />
        </div>
      </TimeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Stats>;

export const WealthOverview: Story = {
  args: {
    variant: "wealth",
  },
};

export const WalletOverview: Story = {
  args: {
    variant: "wallet",
  },
};

export const NetworkOverview: Story = {
  args: {
    variant: "network",
  },
};
