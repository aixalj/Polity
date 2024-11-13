import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { NoContacts } from "@/components/ui/noContacts";

const meta = {
  title: "Polity Design System/Components/NoContacts",
  component: NoContacts,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onNewContact: fn(),
  },
} satisfies Meta<typeof NoContacts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <NoContacts {...args} />
    </div>
  ),
};

export const WithCustomHandler: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <NoContacts
        onNewContact={() => {
          args.onNewContact();
          alert("Creating new contact...");
        }}
      />
    </div>
  ),
};

export const InNarrowContainer: Story = {
  render: (args) => (
    <div className="w-[300px]">
      <NoContacts {...args} />
    </div>
  ),
};

export const InWideContainer: Story = {
  render: (args) => (
    <div className="w-[800px]">
      <NoContacts {...args} />
    </div>
  ),
};
