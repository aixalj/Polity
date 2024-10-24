import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import "@/app/globals.css";

const meta = {
  title: "Polity Design System/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabsDemo = () => (
  <Tabs defaultValue="account" className="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <p>Account tab content</p>
    </TabsContent>
    <TabsContent value="password">
      <p>Password tab content</p>
    </TabsContent>
    <TabsContent value="settings">
      <p>Settings tab content</p>
    </TabsContent>
  </Tabs>
);

export const Default: Story = {
  render: () => <TabsDemo />,
};

export const CustomStyling: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[300px]">
      <TabsList className="bg-blue-100">
        <TabsTrigger
          value="tab1"
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
        >
          Tab 1
        </TabsTrigger>
        <TabsTrigger
          value="tab2"
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
        >
          Tab 2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="p-4 bg-blue-50">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2" className="p-4 bg-blue-50">
        <p>Content for Tab 2</p>
      </TabsContent>
    </Tabs>
  ),
};
