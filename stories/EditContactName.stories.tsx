import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import EditContactName from "@/components/ui/modals/editContactName";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Modals/EditContactName",
  component: EditContactName,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EditContactName>;

export default meta;
type Story = StoryObj<typeof EditContactName>;

export const Default: Story = {
  render: () => (
    <EditContactName
      isOpen={true}
      onClose={() => {}}
      contactId="1"
      onEditContact={() => {}}
    />
  ),
}; 