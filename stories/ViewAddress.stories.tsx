import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ViewAddress from "@/components/ui/modals/viewAddress";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Modals/ViewAddress",
  component: ViewAddress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ViewAddress>;

export default meta;
type Story = StoryObj<typeof ViewAddress>;

const mockAddressData = {
  id: "1",
  contactName: "John Doe",
  addressname: "Main Wallet",
  network: "Ethereum Network",
  asset: "Ethereum",
  address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
};

export const Default: Story = {
  render: () => (
    <ViewAddress
      isOpen={true}
      onClose={() => {}}
      addressData={mockAddressData}
    />
  ),
}; 