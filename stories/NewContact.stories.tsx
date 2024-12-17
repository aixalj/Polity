import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NewContact from "@/components/ui/modals/newContact";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Modals/NewContact",
  component: NewContact,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NewContact>;

export default meta;
type Story = StoryObj<typeof NewContact>;

export const Default: Story = {
  render: () => (
    <NewContact
      isOpen={true}
      onClose={() => {}}
      onAddContact={() => {}}
      onAddAddress={() => {}}
    />
  ),
}; 