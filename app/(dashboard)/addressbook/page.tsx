'use client';

import React, { useState, useEffect, useRef } from 'react';
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
import { SearchError } from '@/components/ui/searchError';
import { FavoriteStar } from '@/components/ui/favoritestar'; // Import FavoriteStar


type TabType = 'contacts' | 'addresses';

export default function AddressBook() {
  const [activeTab, setActiveTab] = useState<TabType>('contacts');
  const contentRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState<ContactWithFormattedCount[]>(getAllContacts());
  const [addresses, setAddresses] = useState<Address[]>(getAllAddresses());
  const [favorites, setFavorites] = useState<string[]>([]); // State to manage favorites
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  useEffect(() => {
    if (searchTerm) {
      const filteredContacts = getAllContacts().filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const filteredAddresses = getAllAddresses().filter((address) =>
        address.contactName.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setContacts(filteredContacts);
      setAddresses(filteredAddresses);
      setNoResults(filteredContacts.length === 0 && filteredAddresses.length === 0);
    } else {
      setContacts(getAllContacts());
      setAddresses(getAllAddresses());
      setNoResults(false);
    }
  }, [searchTerm]);

  const handleSearchInput = (term: string) => {
    setSearchTerm(term);
  };

  const handleClearSearch = () => {
    setSearchTerm(''); // Clear the search term
    setContacts(getAllContacts()); // Reset contacts to original list
    setAddresses(getAllAddresses()); // Reset addresses to original list
    setNoResults(false); // Reset no results state
  };

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

  const handleTabChange = (value: TabType) => {
    setActiveTab(value);
  };

  const handleToggleFavorite = (addressId: string) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(addressId)) {
        return prevFavorites.filter((id) => id !== addressId); // Remove from favorites
      } else {
        return [...prevFavorites, addressId]; // Add to favorites
      }
    });
  };

  return (
    <main className='w-full h-full'>
      <div className='mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-hidden'>
        <Tabs
          value={activeTab}
          onValueChange={(value: string) => handleTabChange(value as TabType)}
          className='w-full h-full flex flex-col'
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
                <SearchBar
                  placeholder='Search by contact name...'
                  onSearch={handleSearchInput}
                  value={searchTerm} // Pass the searchTerm to the SearchBar
                  onErrorChange={(error) => {
                    /* Handle error */
                  }}
                  onSelect={(item) => {
                    /* Handle selection if needed */
                  }}
                />
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
          <div
            ref={contentRef}
            className='max-w-screen-xl mx-auto px-6 w-full flex-grow overflow-y-auto'
          >
            {searchTerm && noResults ? (
              <SearchError
                message='No matching contacts found'
                onClearSearch={handleClearSearch} // Updated to use the clear search function
                onNewContact={() => {}} // Placeholder function to add new contact
              />
            ) : (
              <>
                <TabsContent value='contacts'>
                  <div>
                    <AllContactsTable
                      contacts={contacts}
                      onEdit={handleEdit}
                      onAddAddress={handleAddAddress}
                      onView={handleView}
                      searchTerm={searchTerm}
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
                      searchTerm={searchTerm}
                      favorites={favorites}
                    />
                  </div>
                </TabsContent>
              </>
            )}
          </div>
        </Tabs>
      </div>
    </main>
  );
}

function isValidTab(tab: string): tab is TabType {
  return tab === 'contacts' || tab === 'addresses';
}