import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from "@/components/ui/notification";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // Remove the onClick arg as it's not part of the Notification component
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

// Update stories to use only the props defined in NotificationProps
export const Success: Story = {
  args: {
    title: "Success Notification",
    description: "This is a success notification",
    status: "success",
  },
};

export const Error: Story = {
  args: {
    title: "Error Notification",
    description: "This is an error notification",
    status: "error",
  },
};

export const Warning: Story = {
  args: {
    title: "Warning Notification",
    description: "This is a warning notification",
    status: "warning",
  },
};

export const Info: Story = {
  args: {
    title: "Info Notification",
    description: "This is an info notification",
    status: "info",
  },
};

export const WithLink: Story = {
  args: {
    title: "Notification with Link",
    description: "This notification includes a link",
    status: "info",
    link: "/example",
    linkText: "Learn More",
  },
};

// Remove stories that use unsupported props like size, variant, and children
