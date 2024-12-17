import type { Meta, StoryObj } from '@storybook/react';
import { ReportTable } from '@/components/report/reporttable';
import type { Report } from '@/components/report/reportdata';

// Sample report data
const sampleReports: Report[] = [
  {
    name: "Trading Vault",
    network: "ETH",
    address: "0x1d...8f4e",
    generationDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    status: "Active",
  },
  {
    name: "Savings Vault",
    network: "ETH",
    address: "0x9c...5b3d",
    generationDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    status: "Active",
  },
  {
    name: "Investment Vault",
    network: "BTC",
    address: "bc1...4xyz",
    generationDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
    status: "Inactive",
  },
  {
    name: "Staking Vault",
    network: "MATIC",
    address: "0x3a...9c2d",
    generationDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000),
    status: "Active",
  },
  {
    name: "DeFi Vault",
    network: "AVAX",
    address: "0x5b...1e7f",
    generationDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
    status: "Inactive",
  }
];

const meta: Meta<typeof ReportTable> = {
  title: "Polity Design System/Tables/ReportTable",
  component: ReportTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ReportTable>;

// Default view with all reports
export const Default: Story = {
  args: {
    reports: sampleReports,
  },
};

// Empty state
export const EmptyTable: Story = {
  args: {
    reports: [],
  },
};

// Only active reports
export const ActiveReports: Story = {
  args: {
    reports: sampleReports.filter(report => report.status === "Active"),
  },
};

// Only inactive reports
export const InactiveReports: Story = {
  args: {
    reports: sampleReports.filter(report => report.status === "Inactive"),
  },
};

// Reports from last week
export const RecentReports: Story = {
  args: {
    reports: sampleReports.filter(report => 
      report.generationDate > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    ),
  },
};

// Reports with pagination (more than 10 items)
const manyReports = Array(15)
  .fill(null)
  .map((_, index) => ({
    ...sampleReports[index % sampleReports.length],
    address: `0x${index}...${index}abc`,
    generationDate: new Date(Date.now() - index * 24 * 60 * 60 * 1000),
  }));

export const WithPagination: Story = {
  args: {
    reports: manyReports,
  },
};

// Single network reports
export const SingleNetwork: Story = {
  args: {
    reports: sampleReports.filter(report => report.network === "ETH"),
  },
};

// Multiple networks
export const MultipleNetworks: Story = {
  args: {
    reports: [
      ...sampleReports,
      {
        name: "Multi-Chain Vault",
        network: "SOL",
        address: "SOL...xyz",
        generationDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        status: "Active",
      },
    ],
  },
}; 