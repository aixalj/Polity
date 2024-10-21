'use client';

import React, { useState } from 'react';
import { SearchBar } from '@/components/ui/searchbar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  getAllContacts,
  getAllAddresses,
  ContactWithFormattedCount,
  Address,
} from '@/components/ui/addressbookData';
import { AllContactsTable } from '@/components/ui/allcontactsTable';
import { AddressesTable } from '@/components/ui/addressesTable';

type TabType = 'contacts' | 'addresses';

export default function AddressBook() {
  const [activeTab, setActiveTab] = useState<TabType>('contacts');

  const contacts: ContactWithFormattedCount[] = getAllContacts();
  const addresses: Address[] = getAllAddresses();

  const handleEdit = (contactId: string) => {
    console.log('Edit contact:', contactId);
    // Implement edit logic here
  };

  const handleAddAddress = (contactId: string) => {
    console.log('Add address for contact:', contactId);
    // Implement add address logic here
  };

  const handleView = (contactId: string) => {
    console.log('View contact:', contactId);
    // Implement view logic here
  };

  const handleEditAddress = (addressId: string) => {
    console.log('Edit address:', addressId);
    // Implement edit address logic here
  };

  const handleViewAddress = (addressId: string) => {
    console.log('View address:', addressId);
    // Implement view address logic here
  };

  const handleToggleFavorite = (addressId: string) => {
    console.log('Toggle favorite:', addressId);
    // Implement favorite toggle logic here
  };

  const handleTabChange = (value: TabType) => {
    setActiveTab(value);
  };

  return (
    <main className='w-full h-full'>
      <div className='mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll'>
        <Tabs
          value={activeTab}
          onValueChange={(value: string) => handleTabChange(value as TabType)}
          className='w-full'
        >
          <div className='w-full sticky top-0 backdrop-blur-md z-10 bg-white/60'>
            <div className='max-w-screen-xl mx-auto px-6 pt-6 pb-4'>
              <nav aria-label='Breadcrumb' className='mb-4'>
                <ol className='flex items-center gap-1 text-xs text-gray-600'>
                  <li>
                    <a href='#' className='block transition hover:text-gray-700'>
                      Avatar Name
                    </a>
                  </li>
                  <li className='rtl:rotate-180'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5.83337 18.3334L14.1667 1.66675'
                        stroke='#D0D5DD'
                        strokeWidth='1.66667'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </li>
                  <li>
                    <a href='#' className='block transition text-gray-800'>
                      Address Book
                    </a>
                  </li>
                </ol>
              </nav>
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
                <SearchBar placeholder='Search by contact name...' />
              </div>
              <div className='flex justify-between items-center w-full mt-4'>
                <h2 className='text-xl font-semibold'>
                  {isValidTab(activeTab) &&
                    (activeTab === 'contacts' ? 'All Contacts' : 'Addresses')}
                </h2>
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
              </div>
            </div>
          </div>
          <div className='max-w-screen-xl mx-auto px-6 w-full'>
            <TabsContent value='contacts'>
              <div>
                <AllContactsTable
                  contacts={contacts}
                  onEdit={handleEdit}
                  onAddAddress={handleAddAddress}
                  onView={handleView}
                />
              </div>
            </TabsContent>
            <TabsContent value='addresses'>
              <div>
                <AddressesTable
                  addresses={addresses}
                  onEdit={handleEditAddress}
                  onView={handleViewAddress}
                  onToggleFavorite={handleToggleFavorite}
                />
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </main>
  );
}

function isValidTab(tab: string): tab is TabType {
  return tab === 'contacts' || tab === 'addresses';
}