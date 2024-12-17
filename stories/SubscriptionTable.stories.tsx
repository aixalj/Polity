import type { Meta, StoryObj } from '@storybook/react';
import { SubscriptionTable } from '@/components/subscription/subscriptiontable';

// Sample subscription data
const sampleSubscriptions = [
  {
    id: '1',
    name: 'Fireblocks Network',
    network: 'Fireblocks',
    category: 'Custody',
    yourBid: 100.00,
    startTime: new Date('2024-01-01'),
    endTime: new Date('2024-12-31'),
    status: 'Active',
  },
  {
    id: '2',
    name: 'DFNS Wallet',
    network: 'DFNS',
    category: 'Wallet',
    yourBid: 75.50,
    startTime: new Date('2024-02-01'),
    endTime: new Date('2024-11-30'),
    status: 'Pending',
  },
  {
    id: '3',
    name: 'Safeheron MPC',
    network: 'Safeheron',
    category: 'Security',
    yourBid: 150.00,
    startTime: new Date('2024-01-15'),
    endTime: new Date('2024-06-15'),
    status: 'Inactive',
  },
  {
    id: '4',
    name: 'Polygon Network',
    network: 'MATIC',
    category: 'Network',
    yourBid: 50.00,
    startTime: new Date('2024-03-01'),
    endTime: new Date('2024-12-31'),
    status: 'Active',
  },
];

const meta: Meta<typeof SubscriptionTable> = {
  title: "Polity Design System/Tables/SubscriptionTable",
  component: SubscriptionTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SubscriptionTable>;

export const Default: Story = {
  args: {
    subscriptions: sampleSubscriptions,
  },
};

export const EmptyTable: Story = {
  args: {
    subscriptions: [],
  },
};

export const OnlyActiveSubscriptions: Story = {
  args: {
    subscriptions: sampleSubscriptions.filter(sub => sub.status === 'Active'),
  },
};

export const OnlyPendingSubscriptions: Story = {
  args: {
    subscriptions: sampleSubscriptions.filter(sub => sub.status === 'Pending'),
  },
};

export const OnlyInactiveSubscriptions: Story = {
  args: {
    subscriptions: sampleSubscriptions.filter(sub => sub.status === 'Inactive'),
  },
}; 