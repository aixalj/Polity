import type { Meta, StoryObj } from '@storybook/react';
import { ImageRadioGroup, ImageRadioGroupItem } from '@/components/ui/image-radio-group';
import Image from 'next/image';

// Import the same icons used in customize page
import DFNS from "@/public/providers/icons/DFNS.svg";
import FB from "@/public/providers/icons/FB.svg";
import SH from "@/public/providers/icons/SH.svg";

const meta: Meta<typeof ImageRadioGroup> = {
  title: "Polity Design System/Components/ImageRadioGroup",
  component: ImageRadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Default selected value',
    },
    onChange: {
      description: 'Callback when selection changes',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageRadioGroup>;

export const Default: Story = {
  render: () => (
    <ImageRadioGroup defaultValue="green" className="flex flex-row gap-8">
      <ImageRadioGroupItem
        value="green"
        id="green"
        icon={<Image src={FB} alt="Fireblocks" width={40} height={40} />}
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #F3FEE7 100%)",
        }}
        borderColorClass="border-green-400"
        className="p-2 border border-gray-300"
      />
      <ImageRadioGroupItem
        value="blue"
        id="blue"
        icon={<Image src={DFNS} alt="DFNS" width={40} height={40} />}
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #ECFDFF 100%)",
        }}
        borderColorClass="border-blue-400"
        className="p-2 border border-gray-300"
      />
      <ImageRadioGroupItem
        value="purple"
        id="purple"
        icon={<Image src={SH} alt="Safeheron" width={40} height={40} />}
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #F4F3FF 100%)",
        }}
        borderColorClass="border-purple-400"
        className="p-2 border border-gray-300"
      />
      <ImageRadioGroupItem
        value="yellow"
        id="yellow"
        icon={<Image src={DFNS} alt="DFNS" width={40} height={40} />}
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #FEFBE8 100%)",
        }}
        borderColorClass="border-yellow-400"
        className="p-2 border border-gray-300"
      />
    </ImageRadioGroup>
  )
};

export const Disabled: Story = {
  render: () => (
    <ImageRadioGroup defaultValue="green" className="flex flex-row gap-8" disabled>
      <ImageRadioGroupItem
        value="green"
        id="green"
        icon={<Image src={FB} alt="Fireblocks" width={40} height={40} />}
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #F3FEE7 100%)",
        }}
        borderColorClass="border-green-400"
        className="p-2 border border-gray-300"
      />
    </ImageRadioGroup>
  )
};

export const Grid: Story = {
  render: () => (
    <ImageRadioGroup defaultValue="green" className="grid grid-cols-2 gap-6">
      <ImageRadioGroupItem
        value="green"
        id="green"
        icon={<Image src={FB} alt="Fireblocks" width={40} height={40} />}
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #F3FEE7 100%)",
        }}
        borderColorClass="border-green-400"
        className="p-2 border border-gray-300"
      />
      <ImageRadioGroupItem
        value="blue"
        id="blue"
        icon={<Image src={DFNS} alt="DFNS" width={40} height={40} />}
        style={{
          background: "linear-gradient(180deg, #FFF 0%, #ECFDFF 100%)",
        }}
        borderColorClass="border-blue-400"
        className="p-2 border border-gray-300"
      />
    </ImageRadioGroup>
  )
}; 