import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import RemoveAddress from "@/components/ui/modals/removeAddress";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Modals/RemoveAddress",
  component: RemoveAddress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RemoveAddress>;

export default meta;
type Story = StoryObj<typeof RemoveAddress>;

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
    <RemoveAddress
      isOpen={true}
      onClose={() => {}}
      onCancel={() => {}}
      onRemove={() => {}}
      addressData={mockAddressData}
    />
  ),
}; 