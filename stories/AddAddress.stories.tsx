import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddAddress from "@/components/ui/modals/addAddress";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Modals/AddAddress",
  component: AddAddress,
  parameters: {
    layout: "centered",
    docs: {
      story: {
        inline: true,
        iframeHeight: 600,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddAddress>;

export default meta;
type Story = StoryObj<typeof AddAddress>;

export const Default: Story = {
  render: () => (
    <div className="h-[600px] flex items-center justify-center">
      <AddAddress
        isOpen={true}
        onClose={() => {}}
        onAddAddress={() => {}}
        contactName="John Doe"
      />
    </div>
  ),
}; 