import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FavoriteStar } from "@/components/ui/favoritestar";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Components/FavoriteStar",
  component: FavoriteStar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onToggle: fn() },
} satisfies Meta<typeof FavoriteStar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state
export const Default: Story = {
  args: {
    isFavorite: false,
    onToggle: fn(),
  },
};

// Active state
export const Active: Story = {
  args: {
    isFavorite: true,
    onToggle: fn(),
  },
};

