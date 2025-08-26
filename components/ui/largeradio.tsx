'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface RadioOptionProps {
  value: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const RadioGroupContext = React.createContext<{
  value?: string;
  onValueChange?: (value: string) => void;
} | null>(null);

const RadioOption = ({
  value,
  title,
  description,
  children,
}: RadioOptionProps) => {
  const radioGroup = React.useContext(RadioGroupContext);
  const isSelected = radioGroup?.value === value;

  const handleChange = () => {
    if (radioGroup?.onValueChange) {
      radioGroup.onValueChange(value); // Call onValueChange when selected
    }
  };

  return (
    <>
      <RadioGroupItem value={value} onClick={handleChange}>
        {' '}
        {/* Add onClick to handle selection */}
        <div className='flex flex-col text-left'>
          <p className='font-medium text-sm text-gray-700'>{title}</p>
          <p className='text-sm text-gray-600'>{description}</p>
        </div>
      </RadioGroupItem>
      {children && (
        <div className='space-y-2'>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                disabled: !isSelected,
                ...child.props,
              });
            }
            return child;
          })}
        </div>
      )}
    </>
  );
};

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, value, onValueChange, ...props }, ref) => {
  return (
    <RadioGroupContext.Provider
      value={{ value: value || undefined, onValueChange }}
    >
      <RadioGroupPrimitive.Root
        className={cn('grid gap-4', className)}
        value={value}
        onValueChange={onValueChange}
        {...props}
        ref={ref}
      />
    </RadioGroupContext.Provider>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'group relative flex w-full cursor-pointer rounded-xl border border-gray-200 p-4 transition-all hover:bg-gray-50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-500 data-[state=checked]:bg-teal-50',
        className
      )}
      {...props}
    >
      <div className='mr-4 flex translate-y-0.5 h-4 w-4 items-center justify-center rounded-full border border-gray-300 group-data-[state=checked]:border-primary-500'>
        <RadioGroupPrimitive.Indicator>
          <Circle className='h-1.5 w-1.5 fill-primary-500 text-primary-500' />
        </RadioGroupPrimitive.Indicator>
      </div>
      {children}
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem, RadioOption };

// Usage example:
/*
<RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
  <RadioOption 
    value="internal" 
    title="Internal Network Address"
    description="Select a Wallet and corresponding Network Account"
  >
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a Wallet..." />
      </SelectTrigger>
    </Select>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a network account..." />
      </SelectTrigger>
    </Select>
  </RadioOption>
  
  <RadioOption
    value="external"
    title="External Network Address" 
    description="Select to manually enter a network address"
  >
    <Input placeholder="Enter Network Address..." />
  </RadioOption>
</RadioGroup>
*/
