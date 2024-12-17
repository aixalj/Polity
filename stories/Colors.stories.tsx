import React from 'react';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'Polity Design System/Foundations/Colors',
  parameters: {
    docs: {
      description: {
        component: 'Color palette for the Polity Design System',
      },
    },
  },
} satisfies Meta;

export default meta;

const ColorGrid = ({ colors, title, subtitle }: { colors: Record<string, string>, title: string, subtitle?: string }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    {subtitle && <p className="text-sm text-gray-600 mb-3">{subtitle}</p>}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(colors).map(([name, value]) => (
        <div key={name} className="flex flex-col">
          <div 
            className="h-16 rounded-lg mb-2" 
            style={{ backgroundColor: value }}
          />
          <div className="text-sm font-medium">{name}</div>
          <div className="text-sm text-gray-500">{value}</div>
        </div>
      ))}
    </div>
  </div>
);

export const Colors = () => {
  const primaryColors = {
    'primary-25': '#E8F5F4',
    'primary-50': '#DCF0EE',
    'primary-100': '#90BBB6',
    'primary-200': '#74A9A3',
    'primary-300': '#589891',
    'primary-400': '#3B867E',
    'primary-500': '#1F756B',
    'primary-600': '#1B665E',
    'primary-700': '#175750',
    'primary-800': '#134942',
    'primary-900': '#0F3A35',
  };

  const grayColors = {
    'gray-50': '#F9FAFB',
    'gray-100': '#F3F4F6',
    'gray-200': '#E5E7EB',
    'gray-300': '#D1D5DB',
    'gray-400': '#9CA3AF',
    'gray-500': '#6B7280',
    'gray-600': '#4B5563',
    'gray-700': '#374151',
    'gray-800': '#1F2937',
    'gray-900': '#111827',
  };

  const ringColors = {
    'ring-primary': '#CCFBEF',
    'ring-offset-primary': '#E8F5F4',
    'ring-offset-secondary': '#F9FAFB',
    'ring-offset-destructive': '#FFE4E8',
    'ring-offset-walletconnect': '#E7F3FF',
  };

  const statusColors = {
    'success': '#10B981',
    'warning': '#F59E0B',
    'error': '#EF4444',
    'info': '#3B82F6',
  };

  const walletConnectColors = {
    'walletconnect': '#3396FF',
    'walletconnect-hover': '#3396FF',
    'walletconnect-disabled': 'rgba(16, 24, 40, 0.05)',
  };

  return (
    <div className="p-6">
      <ColorGrid 
        title="Primary Colors" 
        subtitle="Primary brand colors" 
        colors={primaryColors} 
      />
      <ColorGrid 
        title="Gray Colors" 
        subtitle="Used for text, backgrounds, and borders" 
        colors={grayColors} 
      />
      <ColorGrid 
        title="Ring Colors" 
        subtitle="Colors used for focus rings and outlines" 
        colors={ringColors} 
      />
      <ColorGrid 
        title="Status Colors" 
        subtitle="Colors used for states and feedback" 
        colors={statusColors} 
      />
      <ColorGrid 
        title="WalletConnect Colors" 
        subtitle="Colors specific to WalletConnect integration" 
        colors={walletConnectColors} 
      />
    </div>
  );
}; 