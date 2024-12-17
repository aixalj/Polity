import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ConnectTodApp from "@/components/ui/modals/connectTodApp";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Modals/ConnectTodApp",
  component: ConnectTodApp,
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
} satisfies Meta<typeof ConnectTodApp>;

export default meta;
type Story = StoryObj<typeof ConnectTodApp>;

const mockAddNotification = (
  title: string,
  description: string,
  status: "success" | "error" | "warning" | "info"
) => {
  console.log(`Notification: ${title} - ${description} (${status})`);
};

export const Default: Story = {
  render: () => (
    <div className="h-[600px] flex items-center justify-center">
      <ConnectTodApp
        isOpen={true}
        onClose={() => {}}
        networkAccountName="Main Account"
        networkAccountImage="/path/to/image.png"
        balance="1.5 ETH"
        addNotification={mockAddNotification}
        sourcePage="wallet"
      />
    </div>
  ),
}; 