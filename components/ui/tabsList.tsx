import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Tab {
  value: string;
  label: string;
}

interface CustomTabsListProps {
  tabs: Tab[];
}

export function CustomTabsList({ tabs }: CustomTabsListProps) {
  return (
    <TabsList className='bg-gray-100 p-2 rounded-xl'>
      {tabs.map((tab) => (
        <TabsTrigger
          key={tab.value}
          value={tab.value}
          className='rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm'
        >
          {tab.label}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}