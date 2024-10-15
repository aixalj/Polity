'use client';

import React from 'react';
import { SearchBar } from '@/components/ui/searchbar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AllClients } from '@/components/ui/AllClients';
/*import AddressesList from '@/components/AddressesList';*/

// Sample contact data
const contacts = [
  { id: '1', name: 'John Doe', address: '123 Main St, Anytown, USA' },
  { id: '2', name: 'Jane Smith', address: '456 Elm St, Other City, USA' },
  // Add more contacts as needed
];

export default function AddressBook() {
  const handleSearch = (searchTerm: string) => {
    // Implement your search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <main className='w-full h-full'>
      <div className='mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll'>
        <div className='w-full sticky top-0 backdrop-blur-md z-10 bg-white/60'>
          <div className='max-w-screen-xl mx-auto p-6'>
            <div className='w-full mt-4 flex items-center justify-between'>
              <div>
                <h1 className='text-3xl font-medium leading-tight'>
                  Address Book
                </h1>
              </div>
              <div className='flex gap-3'>
                <Button>New Contact</Button>
              </div>
            </div>
            <div className='w-full mt-4'>
              <SearchBar
                onSearch={handleSearch}
                placeholder='Search by contact name...'
              />
            </div>
            <Tabs defaultValue='contacts' className='w-full mt-4'>
              <TabsList className='bg-gray-100 p-2 rounded-xl'>
                <TabsTrigger
                  value='contacts'
                  className='rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm'
                >
                  All Contacts
                </TabsTrigger>
                <TabsTrigger
                  value='addresses'
                  className='rounded-lg data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm'
                >
                  Addresses
                </TabsTrigger>
              </TabsList>
              <TabsContent value='contacts'>
                <AllClients contacts={contacts} />
              </TabsContent>
              <TabsContent value='addresses'>
                {/* Placeholder for Addresses tab content */}
                <div>Addresses content goes here</div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
