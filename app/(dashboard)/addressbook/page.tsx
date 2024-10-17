'use client';

import React, { useState } from 'react';
import { SearchBar } from '@/components/ui/searchbar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Pagination } from '@/components/ui/pagination';
import { AddressTable } from '@/components/ui/addressestable';

// Sample contact data
const contacts = [
  { id: '1', name: 'John Doe', addressname: 'John Personal' },
  { id: '2', name: 'John Doe', addressname: 'John Personal' },
  { id: '3', name: 'John Doe', addressname: 'John Personal' },
  { id: '4', name: 'John Doe', addressname: 'John Personal' },
  { id: '5', name: 'John Doe', addressname: 'John Personal' },
  { id: '6', name: 'John Doe', addressname: 'John Personal' },
  { id: '7', name: 'John Doe', addressname: 'John Personal' },
  { id: '8', name: 'John Doe', addressname: 'John Personal' },
  { id: '9', name: 'John Doe', addressname: 'John Personal' },
  { id: '10', name: 'John Doe', addressname: 'John Personal' },
];

const initialAddresses = [
  { id: '1', contact: 'John Doe', network: 'Ethereum', asset: 'ETH', address: '0x1234...5678', isFavorite: false },
  { id: '2', contact: 'Jane Smith', network: 'Bitcoin', asset: 'BTC', address: 'bc1qxy...zuvw', isFavorite: true },
  // Add more addresses as needed
];

export default function AddressBook() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 150; // Replace with actual total number of contacts
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleSearch = (searchTerm: string) => {
    // Implement your search logic here
    console.log('Searching for:', searchTerm);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch contacts for the new page here
  };

  const handleToggleFavorite = (id: string, isFavorite: boolean) => {
    setAddresses(addresses.map(address => 
      address.id === id ? { ...address, isFavorite } : address
    ));
  };

  return (
    <main className='w-full h-full'>
      <div className='mx-auto w-full bg-white rounded-2xl relative flex flex-col h-full border-gray-300 border gap-6 overflow-scroll'>
        <div className='w-full sticky top-0 backdrop-blur-md z-10 border-b border-gray-100 bg-white/60'>
          <div className='max-w-screen-xl mx-auto p-6'>
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-1 text-xs text-gray-600">
                <li>
                  <a href="#" className="block transition hover:text-gray-700">
                    Avatar Name
                  </a>
                </li>
                <li className="rtl:rotate-180">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83337 18.3334L14.1667 1.66675"
                      stroke="#D0D5DD"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
                <li>
                  <a href="#" className="block transition text-gray-800">
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
                onSearch={handleSearch}
                placeholder='Search by contact name...'
              />
            </div>
          </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-6 w-full'>
          <Tabs defaultValue='contacts' className='w-full'>
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
              <div className="mt-6">
                <Table>
                  <TableHeader className="bg-gray-100 rounded-xl">
                    <TableRow className="border-none">
                      <TableHead>Contact</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contacts.map((contact) => (
                      <TableRow key={contact.id} className="border-none hover:bg-gray-50">
                        <TableCell className="py-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">{contact.name}</div>
                              <div className="text-sm text-gray-500">{contact.addressname}</div>
                            </div>
                            <div>
                              <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                              <Button variant="outline" size="sm">View</Button>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-auto">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value='addresses'>
              <div className="mt-6">
                <AddressTable 
                  addresses={addresses}
                  onToggleFavorite={handleToggleFavorite}
                />
                <div className="mt-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}