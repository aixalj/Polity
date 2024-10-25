import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";

import "@/app/globals.css";

const meta: Meta<typeof Badge> = {
  title: "Polity Design System/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "success",
        "warning",
        "transaction",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Default Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Badge",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Badge",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Badge",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success Badge",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning Badge",
  },
};

export const Transaction: Story = {
  args: {
    variant: "transaction",
    children: (
      <>
        <div className="w-1.5 h-1.5 bg-green-500 m-[1px] rounded-full"></div>
        Transaction Badge
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="transaction">
        <div className="w-1.5 h-1.5 bg-green-500 m-[1px] rounded-full"></div>
        Transaction
      </Badge>
    </div>
  ),
};
