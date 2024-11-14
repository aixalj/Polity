import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SearchBar } from "@/components/ui/searchbar";

const meta = {
  title: "Polity Design System/Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Search contacts...",
    onSelect: fn(),
    onSearch: fn(),
    onErrorChange: fn(),
    value: "",
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search contacts...",
    value: "",
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Search contacts...",
    value: "Jo", // This will trigger the search results for names starting with "Jo"
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Search contacts...",
    value: "xyz", // This will trigger an error state as no contacts will match
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: "Enter recipient name...",
    value: "",
  },
};

// Interactive story that maintains state
export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("");

    return (
      <SearchBar
        {...args}
        value={value}
        onSearch={(term) => {
          setValue(term);
          args.onSearch(term);
        }}
        onSelect={(name) => {
          setValue(name);
          args.onSelect(name);
        }}
      />
    );
  },
};
