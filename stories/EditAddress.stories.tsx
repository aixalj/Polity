import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import EditAddress from "@/components/ui/modals/editAddress";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Modals/EditAddress",
  component: EditAddress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EditAddress>;

export default meta;
type Story = StoryObj<typeof EditAddress>;

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
    <EditAddress
      isOpen={true}
      onClose={() => {}}
      addressData={mockAddressData}
      onSave={() => {}}
      onRemove={() => {}}
    />
  ),
}; 