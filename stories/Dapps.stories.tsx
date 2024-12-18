import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dapps } from "@/components/dapps";

import "@/app/globals.css";

const meta: Meta<typeof Dapps> = {
  title: "Polity Design System/Components/Dapps",
  component: Dapps,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    network: {
      control: 'select',
      options: ['eth', 'btc', 'pol'],
      description: 'The network type to display',
      defaultValue: 'eth'
    },
    isLoading: {
      control: 'boolean',
      description: 'Whether the component is in a loading state'
    },
    error: {
      control: 'text',
      description: 'Error message to display if there is an error'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Dapps>;

export const Ethereum: Story = {
  args: {
    network: 'eth'
  },
};

export const Polygon: Story = {
  args: {
    network: 'pol'
  },
};

export const Bitcoin: Story = {
  args: {
    network: 'btc'
  },
};

export const EmptyState: Story = {
  args: {
    network: 'eth'
  },
};

export const Loading: Story = {
  args: {
    network: 'eth',
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    network: 'eth',
    error: "Failed to load connected dApps",
  },
}; 