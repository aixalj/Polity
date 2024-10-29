import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AgreementTable } from "@/components/agreementtable";
import { agreements } from "@/components/agreementData";

import "@/app/globals.css";

const meta: Meta<typeof AgreementTable> = {
  title: "Polity Design System/Tables/AgreementTable",
  component: AgreementTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AgreementTable>;

export const Default: Story = {
  args: {
    agreements: agreements,
  },
};

export const EmptyTable: Story = {
  args: {
    agreements: [],
  },
};

export const FewAgreements: Story = {
  args: {
    agreements: agreements.slice(0, 3),
  },
};

export const ManyAgreements: Story = {
  args: {
    agreements: Array(20)
      .fill(null)
      .map((_, index) => ({
        ...agreements[index % agreements.length],
        name: `Agreement ${index + 1}`,
        dateSigned: new Date(Date.now() - index * 86400000).toISOString(), // Each agreement 1 day apart
      })),
  },
};

export const DifferentStatuses: Story = {
  args: {
    agreements: [
      { ...agreements[0], status: "Signed" },
      { ...agreements[1], status: "Pending" },
      { ...agreements[2], status: "Expired" },
      { ...agreements[3], status: "Cancelled" },
    ],
  },
};
