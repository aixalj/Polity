import type { Meta, StoryObj } from '@storybook/react';
import { ViewContactTable } from '@/components/viewcontactTable';

// Sample data for wallets
const sampleWallets = [
  {
    id: '1',
    wallet_id: 'btc-1',
    wallet_name: 'Bitcoin Wallet 1',
    allocation: 50,
    return: 5,
    value: 10000,
  },
  {
    id: '2',
    wallet_id: 'eth-1',
    wallet_name: 'Ethereum Wallet 1',
    allocation: 30,
    return: 8,
    value: 6000,
  },
];

// Sample data for network accounts
const sampleNetworkAccounts = [
  {
    name: 'Bitcoin Network',
    walletName: 'Bitcoin Account 1',
    id: 'btc-1',
    address: '1A2B3C4D5E6F',
    network: 'BTC',
    allocation: 50,
    return: 5,
    value: 10000,
    balance: 100,
  },
  {
    name: 'Ethereum Network',
    walletName: 'Ethereum Account 1',
    id: 'eth-1',
    address: '0x1234567890abcdef',
    network: 'ETH',
    allocation: 30,
    return: 8,
    value: 6000,
    balance: 4,
  },
  {
    name: 'Polygon Network',
    walletName: 'Polygon Account 1',
    id: 'matic-1',
    address: '0xabcdef1234567890',
    network: 'MATIC',
    allocation: 20,
    return: 3,
    value: 4000,
    balance: 5000,
  },
];

const meta: Meta<typeof ViewContactTable> = {
  title: "Polity Design System/Tables/ViewContactTable",
  component: ViewContactTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ViewContactTable>;

export const Default: Story = {
  args: {
    wallets: sampleWallets,
    networkAccounts: sampleNetworkAccounts,
  },
};

export const EmptyTable: Story = {
  args: {
    wallets: [],
    networkAccounts: [],
  },
};

export const SingleNetwork: Story = {
  args: {
    wallets: [sampleWallets[0]],
    networkAccounts: [sampleNetworkAccounts[0]],
  },
};

export const MultipleNetworks: Story = {
  args: {
    wallets: sampleWallets,
    networkAccounts: sampleNetworkAccounts,
  },
};

// Story with pagination example (more than 10 items)
const manyNetworkAccounts = Array(15)
  .fill(null)
  .map((_, index) => ({
    ...sampleNetworkAccounts[index % sampleNetworkAccounts.length],
    id: `account-${index + 1}`,
    walletName: `Account ${index + 1}`,
  }));

export const WithPagination: Story = {
  args: {
    wallets: sampleWallets,
    networkAccounts: manyNetworkAccounts,
  },
};

// Story showing different allocation percentages
export const DifferentAllocations: Story = {
  args: {
    wallets: sampleWallets,
    networkAccounts: sampleNetworkAccounts.map((account, index) => ({
      ...account,
      allocation: (index + 1) * 25, // 25%, 50%, 75%
      return: (index + 1) * 2, // Different returns
    })),
  },
}; 