import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import OnboardingBlock from "@/components/onboardingblock";

import { File02, Lock01 } from "@untitled-ui/icons-react";

import "@/app/globals.css";

const meta: Meta<typeof OnboardingBlock> = {
  title: "Polity Design System/OnboardingBlock",
  component: OnboardingBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof OnboardingBlock>;

export const Default: Story = {
  args: {
    icon: <File02 className="w-8 h-8 text-gray-700" />,
    title: "Welcome to Onboarding",
    description: "Complete the following steps to get started.",
    children: <div>Onboarding content goes here</div>,
    button1link: "/next-step",
    button1text: "Next",
    button2link: "/skip",
    button2text: "Skip",
  },
};

export const WithoutButtons: Story = {
  args: {
    icon: <File02 className="w-8 h-8 text-gray-700" />,
    title: "Onboarding Complete",
    description: "You have finished the onboarding process.",
    children: <div>Congratulations! You&apos;re all set.</div>,
  },
};

export const WithOneButton: Story = {
  args: {
    icon: <Lock01 className="w-8 h-8 text-gray-700" />,
    title: "Account Verification",
    description: "Verify your account to access all features.",
    children: <div>Verification form goes here</div>,
    button1link: "/verify",
    button1text: "Verify Now",
  },
};
