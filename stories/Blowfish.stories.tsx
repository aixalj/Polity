import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import BlowFish from "@/components/ui/blowfish";

import "@/app/globals.css";

const meta: Meta<typeof BlowFish> = {
  title: "Polity Design System/Modals/BlowFish",
  component: BlowFish,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["warning", "critical", "secure"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BlowFish>;

// export const Default: Story = {
//   args: {},
// };

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Critical: Story = {
  args: {
    variant: "critical",
  },
};

export const Secure: Story = {
  args: {
    variant: "secure",
  },
};
