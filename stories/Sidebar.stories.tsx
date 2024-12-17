import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SideBar } from "@/components/ui/sidebar";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Navigation/Sidebar",
  component: SideBar,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Default: Story = {
  render: () => (
    <div className="h-screen">
      <SideBar />
    </div>
  ),
};

export const WealthSelected: Story = {
  render: () => (
    <div className="h-screen">
      <SideBar />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/wealth/wallet1',
      },
    },
  },
};

export const MarketplaceSelected: Story = {
  render: () => (
    <div className="h-screen">
      <SideBar />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/marketplace',
      },
    },
  },
};

export const TransactionsSelected: Story = {
  render: () => (
    <div className="h-screen">
      <SideBar />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/transactions',
      },
    },
  },
};

export const AddressBookSelected: Story = {
  render: () => (
    <div className="h-screen">
      <SideBar />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/addressbook',
      },
    },
  },
};

export const AgreementsSelected: Story = {
  render: () => (
    <div className="h-screen">
      <SideBar />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/agreements',
      },
    },
  },
};

export const NetworkAccountSelected: Story = {
  render: () => (
    <div className="h-screen">
      <SideBar />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/wealth/wallet1/btcnetwork',
      },
    },
  },
}; 