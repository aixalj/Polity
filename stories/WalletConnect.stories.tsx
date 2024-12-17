import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import WalletConnect from "@/components/ui/modals/walletConnect";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Modals/WalletConnect",
  component: WalletConnect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WalletConnect>;

export default meta;
type Story = StoryObj<typeof WalletConnect>;

export const Default: Story = {
  render: () => (
    <WalletConnect
      isOpen={true}
      onClose={() => {}}
      onConnect={() => Promise.resolve()}
    />
  ),
}; 