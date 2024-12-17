import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { OnboardSideBarUniApp } from "@/components/ui/onboardsidebar-uniapp";
import { OnboardSideBarSuperApp } from "@/components/ui/onboardsidebar-superapp";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Navigation/OnboardingSidebar",
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/onboarding/uniapp/avatar',
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const UniApp: Story = {
  render: () => (
    <div className="h-screen">
      <OnboardSideBarUniApp />
    </div>
  ),
};

export const UniAppWallet: Story = {
  render: () => (
    <div className="h-screen">
      <OnboardSideBarUniApp />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/onboarding/uniapp/wallet',
      },
    },
  },
};

export const UniAppComplete: Story = {
  render: () => (
    <div className="h-screen">
      <OnboardSideBarUniApp />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/onboarding/uniapp/installation',
      },
    },
  },
};

export const SuperApp: Story = {
  render: () => (
    <div className="h-screen">
      <OnboardSideBarSuperApp />
    </div>
  ),
};

export const SuperAppVerification: Story = {
  render: () => (
    <div className="h-screen">
      <OnboardSideBarSuperApp />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/onboarding/superapp/verification',
      },
    },
  },
};

export const SuperAppWallet: Story = {
  render: () => (
    <div className="h-screen">
      <OnboardSideBarSuperApp />
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/onboarding/superapp/wallet/provider',
      },
    },
  },
};

export const Comparison: Story = {
  render: () => (
    <div className="flex h-screen">
      <div className="w-1/2 border-r">
        <OnboardSideBarUniApp />
      </div>
      <div className="w-1/2">
        <OnboardSideBarSuperApp />
      </div>
    </div>
  ),
};

export const Progress: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-medium mb-4">Initial</h3>
        <OnboardSideBarUniApp />
      </div>
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-medium mb-4">Avatar Complete</h3>
        <OnboardSideBarUniApp />
      </div>
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-medium mb-4">Wallet Active</h3>
        <OnboardSideBarUniApp />
      </div>
    </div>
  ),
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/onboarding/uniapp/wallet/setup',
      },
    },
  },
};

