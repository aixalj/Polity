import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/components/ui/button";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Small Size
export const DefaultSmall: Story = {
  args: {
    variant: "default",
    size: "sm",
    children: "Button",
  },
};

export const OutlineSmall: Story = {
  args: {
    variant: "outline",
    size: "sm",
    children: "Button",
  },
};

export const DestructiveSmall: Story = {
  args: {
    variant: "destructive",
    size: "sm",
    children: "Delete",
  },
};

export const WalletConnectSmall: Story = {
  args: {
    variant: "walletconnect",
    size: "sm",
    children: "Connect Wallet",
  },
};

// Medium (Default) Size
export const DefaultMedium: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};

export const OutlineMedium: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Button",
  },
};

export const DestructiveMedium: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Delete",
  },
};

export const WalletConnectMedium: Story = {
  args: {
    variant: "walletconnect",
    size: "default",
    children: "Connect Wallet",
  },
};

// Large Size
export const DefaultLarge: Story = {
  args: {
    variant: "default",
    size: "lg",
    children: "Button",
  },
};

export const OutlineLarge: Story = {
  args: {
    variant: "outline",
    size: "lg",
    children: "Button",
  },
};

export const DestructiveLarge: Story = {
  args: {
    variant: "destructive",
    size: "lg",
    children: "Delete",
  },
};

export const WalletConnectLarge: Story = {
  args: {
    variant: "walletconnect",
    size: "lg",
    children: "Connect Wallet",
  },
};

// Extra Large Size
export const DefaultXL: Story = {
  args: {
    variant: "default",
    size: "xl",
    children: "Button",
  },
};

export const OutlineXL: Story = {
  args: {
    variant: "outline",
    size: "xl",
    children: "Button",
  },
};

export const DestructiveXL: Story = {
  args: {
    variant: "destructive",
    size: "xl",
    children: "Delete",
  },
};

export const WalletConnectXL: Story = {
  args: {
    variant: "walletconnect",
    size: "xl",
    children: "Connect Wallet",
  },
};

// 2XL Size
export const Default2XL: Story = {
  args: {
    variant: "default",
    size: "2xl",
    children: "Button",
  },
};

export const Outline2XL: Story = {
  args: {
    variant: "outline",
    size: "2xl",
    children: "Button",
  },
};

export const Destructive2XL: Story = {
  args: {
    variant: "destructive",
    size: "2xl",
    children: "Delete",
  },
};

export const WalletConnect2XL: Story = {
  args: {
    variant: "walletconnect",
    size: "2xl",
    children: "Connect Wallet",
  },
};
