import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddAddress from "@/components/ui/modals/addAddress";
import ConnectTodApp from "@/components/ui/modals/connectTodApp";
import EditAddress from "@/components/ui/modals/editAddress";
import EditContactName from "@/components/ui/modals/editContactName";
import NewContact from "@/components/ui/modals/newContact";
import RemoveAddress from "@/components/ui/modals/removeAddress";
import ViewAddress from "@/components/ui/modals/viewAddress";
import WalletConnect from "@/components/ui/modals/walletConnect";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Modals",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Mock data for address
const mockAddressData = {
  id: "1",
  contactName: "John Doe",
  addressname: "Main Wallet",
  network: "Ethereum Network",
  asset: "Ethereum",
  address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
};

// Mock notification function
const mockAddNotification = (
  title: string,
  description: string,
  status: "success" | "error" | "warning" | "info"
) => {
  console.log(`Notification: ${title} - ${description} (${status})`);
};

export const AddAddressModal: Story = {
  render: () => (
    <AddAddress
      isOpen={true}
      onClose={() => {}}
      onAddAddress={() => {}}
      contactName="John Doe"
    />
  ),
};

export const ConnectTodAppModal: Story = {
  render: () => (
    <ConnectTodApp
      isOpen={true}
      onClose={() => {}}
      networkAccountName="Main Account"
      networkAccountImage="/path/to/image.png"
      balance="1.5 ETH"
      addNotification={mockAddNotification}
      sourcePage="wallet"
    />
  ),
};

export const EditAddressModal: Story = {
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

export const EditContactNameModal: Story = {
  render: () => (
    <EditContactName
      isOpen={true}
      onClose={() => {}}
      contactId="1"
      onEditContact={() => {}}
    />
  ),
};

export const NewContactModal: Story = {
  render: () => (
    <NewContact
      isOpen={true}
      onClose={() => {}}
      onAddContact={() => {}}
      onAddAddress={() => {}}
    />
  ),
};

export const RemoveAddressModal: Story = {
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

export const ViewAddressModal: Story = {
  render: () => (
    <ViewAddress
      isOpen={true}
      onClose={() => {}}
      addressData={mockAddressData}
    />
  ),
};

export const WalletConnectModal: Story = {
  render: () => (
    <WalletConnect
      isOpen={true}
      onClose={() => {}}
      onConnect={() => Promise.resolve()}
    />
  ),
}; 