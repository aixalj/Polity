import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ContactEditedSaved from "@/components/ui/saved modals/contactEditedSaved";

import "@/app/globals.css";

const meta: Meta<typeof ContactEditedSaved> = {
  title: "Polity Design System/Modals/ContactEditedSaved",
  component: ContactEditedSaved,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the modal is visible',
    },
    onClose: {
      description: 'Function called when the modal is closed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactEditedSaved>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
  },
};

