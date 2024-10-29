import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import "@/app/globals.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Polity Design System/Components/Tabs",
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor : { control: "color" },
  // },
  // Use `fn` to spy on the onValueChange arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onValueChange: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="wallets">Wallets</TabsTrigger>
        <TabsTrigger value="x-change">X-change</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="risk">Risk</TabsTrigger>
        <TabsTrigger value="analytics-dapps">Analytics dApps</TabsTrigger>
      </TabsList>
      <TabsContent value="wallets">Content for Tab 1</TabsContent>
      <TabsContent value="x-change">Content for Tab 2</TabsContent>
      <TabsContent value="security">Content for Tab 3</TabsContent>
      <TabsContent value="risk">Content for Tab 4</TabsContent>
      <TabsContent value="analytics-dapps">Content for Tab 5</TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: "wallets",
    onValueChange: fn(),
  },
};
